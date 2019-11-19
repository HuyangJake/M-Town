---
title: 制作Pod私有库记录
date: 2019-07-01
tags:
 - Cocoapods
categories: 
 - 苹果爸爸
---

本文的记录并非全过程的流程记录，而是记下遇到一些让我需要去调研【猜想+Google】的点。简而言之可名其曰 __“坑”__

制作Pod私有库的基本流程按照这篇文章 [CocoaPods进阶：详解私有库制作](https://juejin.im/post/5b82ca46518825430d26bc09) 进行，文章写得比较仔细。

<!-- more -->

按照制作顺序来看着其中的 “坑” 吧


*  `pod spec lint` 直接执行会有很多警告导致无法检查通过。可以使用

``` shell
pod spec lint xxx.podspec --allow-warnings
```

在使用上述检查命令，我遇到了如下错误：

``` shell
<Thread:0x00007fafbf2a7e68@/usr/local/lib/ruby/gems/2.6.0/gems/fourflusher-2.2.0/lib/fourflusher/executable.rb:180 run> terminated with exception (report_on_exception is true):
Traceback (most recent call last):
	3: from /usr/local/lib/ruby/gems/2.6.0/gems/fourflusher-2.2.0/lib/fourflusher/executable.rb:183:in `block in reader`
	2: from /usr/local/lib/ruby/gems/2.6.0/gems/fourflusher-2.2.0/lib/fourflusher/executable.rb:183:in `loop`
	1: from /usr/local/lib/ruby/gems/2.6.0/gems/fourflusher-2.2.0/lib/fourflusher/executable.rb:184:in `block (2 levels) in reader`
/usr/local/lib/ruby/gems/2.6.0/gems/fourflusher-2.2.0/lib/fourflusher/executable.rb:184:in `readpartial`: closed stream (IOError)
```

在`CocoaPods` Github仓库的 issue 中找到了如下临时解决办法：

``` shell
# Temporary fix for https://github.com/CocoaPods/fourflusher/issues/17 until fourflusher (and maybe cocoapods) has a new release
gem 'fourflusher', :git => 'https://github.com/mfiebig/fourflusher.git', :ref => '4bc2ee2b12185cd976b68f2365f52e56f8ec1785'
```

---

* 在`pod spec lint` 成功通过后进行`pod repo push spec`是报出了如下错误：

``` shell
ERROR | [iOS] unknown: Encountered an unknown error (Unable to find a specification for `AFNetworking` depended upon by 'xxxxx'
```

__原因是：__ 私有库中依赖了`AFNetworking`, 校验podspec文件时会到远程podspec库查找相关依赖，默认只会到官方specs库校验，此时需要指定远程specs库去校验。

需要在执行 `pod repo push` 命令的时候加上source参数。

__解决方案:__ 

``` shell
pod sepc lint 文件名.podspec --sources='http://[privateLibName]/cocoaspecs.git,https://github.com/CocoaPods/Specs.git'
``` 

如果遇到警告导致推送不成功，可以加上参数 `--allow-warnings`

同理，如果一个私有库中使用了另外一个私有库，也需要如此进行检查。
