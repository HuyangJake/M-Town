---
title: Runtime查漏补缺--基础概念
date: 2019-01-15 00:31:43
tags:
categories: [苹果爸爸]
---

OC运行时分为两个版本，`Modern` 在实例变量发生变化后，不需要重新编译其子类。 `Legacy` 在实例变量发生变化后，需要重新编译其子类。

Runtime 不只是一些C语言的API，由 `Class`、 `Meta Class`、 `Instance`、 `Class Instance`是一套完整的面向对象的数据结构。

使用Runtime需要引入下面的头文件

``` objectivec
#import <objc/runtime.h> 
#import <objc/message.h>
```

<!-- more -->

---

每个对象都是一个`objc_object`结构体， 有一个`isa`指针指向自己所属的类，类被定义为`objc_class`结构体，其中定义了对象的`methodlist`, `protocol`, `ivar list`。类也是对象，它的`isa`指针指向`meta_class`, 元类对的`isa`指针指向自己。

``` c
typedef struct objc_class *Class; 
struct objc_class : objc_object { 
// Class ISA; Class superclass; 
}

struct objc_object {
    Class _Nonnull isa OBJC_ISA_AVAILABILITY;
};
```

![](http://note.huyangjie.cn/media/15475227972776/15475239873450.jpg)

基本上所有类的根类是`NSObject`，`NSObject`的父类指向nil。

## IMP

 IMP 的 本质就是一个函数指针， 在IMP中有两个默认的参数 id 和 SEL， id就是方法中的self
       
``` objectivec      
 IMP function = imp_implementationWithBlock(^(id self, NSString *text) {
            NSLog(@"call block : %@", text);
        });
        
const char *types = sel_getName(@selector(testMethod:));

class_replaceMethod([TestObject class], @selector(testMethod:), function, types);
        
TestObject *object = [[TestObject alloc] init];

[object testMethod:@"Jake"];
        
//获取IMP之后手动调用IMP, 可以优化性能
void(*func)(id, SEL) = (void(*)(id, SEL))class_getMethodImplementation([TestObject class], @selector(testMethod:));

func(object, @selector(testMethod:));       
```     

## Method

Method用来表示方法，其中包含了 `SEL` 和 `IMP`

``` objectivec
typedef struct method_t *Method;
 
struct method_t { 
    SEL name; 
    const char *types; 
    IMP imp; 
};
```

Xcode编译的时候只会将 `Compile Source`中的 `.m`声明的方法编译到`MethodList`中，`.h`中声明的方法没有影响。

## Property

``` objectivec
typedef struct property_t *objc_property_t;

struct property_t { 
    const char *name; 
    const char *attributes; 
};
```

获取对象属性列表

``` c
objc_property_t * class_copyPropertyList(Class cls, unsigned int * outCount)
```

获取指定的对象结构体

``` objectivec
objc_property_t class_getProperty(Class cls, const char * name)
```

---

## 实例变量

类的结构在编译时都是固定的，如果想要修改类的结构就需要重新编译。 编译完成之后若是修改增加了父类的属性，这时候子类的内存偏移量就发生了冲突。Runtime有检测内存冲突的机制，在类生成实例变量的时候，会判断实例变量是否有地址冲突，如果发生冲突，则调整对象的地址偏移。


### 内存布局
创建实例对象时， 会根据其对应的Class分配内存，内存构成是`ivars+isa_t`。

ivars包含不只是当前Class，还有其继承链中的ivars。 ivars的内存布局在编译时就已经决，运行时根据ivars的内存布局创建对象，所以`Runtime`不能动态修改ivars，会破坏已有的内存布局。

![](http://note.huyangjie.cn/media/15475227972776/15475406877317.jpg)


### `[self class]`, `[super class]`结果是一样的原因

这个问题的根本是要搞清楚，在runtime中调用函数的对象，也就是这个`class`方法的接受者是谁。

使用self调用方法，在runtime中会通过 `objc_msgSend()` 发起调用。
使用super调用方法，会通过`objc_msgSendSuper()`发起调用，但是这两者传入的第一个参数 都是 self

下面写了一个例子：

``` objectivec
@interface TestAObject : NSObject

- (void)test;

@end

@implementation TestAObject

- (void)test {
    NSLog(@"testA, %@", [self class]);
}

@end

@interface TestBObject : TestAObject

- (void)testMethod:(NSString *)text;

- (void)test;

@end

@implementation TestBObject

- (void)testMethod:(NSString *)text {
    [super test];
    [self test];
}

- (void)test {
    NSLog(@"testB, %@", [self class]);
}

@end
```

上述代码调用TestBObject对象的 `testMethod:`方法后，输出为：

```
2019-01-15 17:06:01.154135+0800 Runtime[84082:2728083] testA, TestBObject
2019-01-15 17:06:01.154173+0800 Runtime[84082:2728083] testB, TestBObject
Program ended with exit code: 0
```

super实际上是让某个类自己去调用父类的方法,而不是父类去调用某方法;