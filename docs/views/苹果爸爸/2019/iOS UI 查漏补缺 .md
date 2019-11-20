---
title: iOS UI 查漏补缺 
date: 2019-02-27 15:22:43
tags:
categories: [苹果爸爸]
---

### 卡顿产生的原因和解决方案

<img src="http://note.huyangjie.cn/media/15512521476720/15514293564560.jpg" width=500>


在 VSync 信号到来后，系统图形服务会通过 CADisplayLink 等机制通知 App，App 主线程开始在 CPU 中计算显示内容，比如视图的创建、布局计算、图片解码、文本绘制等。随后 CPU 会将计算好的内容提交到 GPU 去，由 GPU 进行变换、合成、渲染。随后 GPU 会把渲染结果提交到帧缓冲区去，等待下一次 VSync 信号到来时显示到屏幕上。由于垂直同步的机制，如果在一个 VSync 时间内，CPU 或者 GPU 没有完成内容提交，则那一帧就会被丢弃，等待下一次机会再显示，而这时显示屏会保留之前的内容不变。这就是界面卡顿的原因。

<!-- more -->

### CPU资源消耗

UIView的属性基本都是来自CALayer的映射，而CALayer内部并没有属性，调用属性方法时，内部都是通过运行时 `resolveInstanceMethod` 临时添加一个方法的，并把对应属性值保存到内部的一个 `Dictionary` 里面，同时还会通知 delegate、创建动画等等，非常消耗资源。
在应用中要减少 UIView 不必要的属性修改。

#### 对象销毁
将对象放到后台线程中进行销毁的小tip

``` objectivec
NSArray *tmp = self.array;
self.array = nil;
dispatch_async(queue, ^{
    [tmp class];
});
```

可以将tmp对象的释放在block中在后台线程异步执行

#### 文本计算和渲染

文本计算，计算宽高会占用很大部分资源，可以使用UILabel的内部实现： 
`[NSAttributedString boundingRectWithSize:options:context:]` 计算宽高
用 `[NSAttributedString drawWithRect:options:context:]`绘制文本，但都需要将其放到后台线程中执行

常见的文本控件 （UILabel、UITextView 等），__其排版和绘制都是在主线程进行的__，当显示大量文本时，CPU 的压力会非常大。对此解决方案只有一个，那就是自定义文本控件，用 TextKit 或最底层的 CoreText 对文本异步绘制。CoreText 对象创建好后，能直接获取文本的宽高等信息，避免了多次计算（调整 UILabel 大小时算一遍、UILabel 绘制时内部再算一遍）；CoreText 对象占用内存较少，可以缓存下来以备稍后多次渲染。

#### 图片的解码

当你用 UIImage 或 CGImageSource 的那几个方法创建图片时，图片数据并不会立刻解码。图片设置到 UIImageView 或者 CALayer.contents 中去，并且 CALayer 被提交到 GPU 前，CGImage 中的数据才会得到解码。这一步是发生在主线程的，并且不可避免。如果想要绕开这个机制，常见的做法是在后台线程先把图片绘制到 CGBitmapContext 中，然后从 Bitmap 直接创建图片。

### GPU资源消耗



### reference

[iOS 保持界面流畅的技巧](https://blog.ibireme.com/2015/11/12/smooth_user_interfaces_for_ios/)