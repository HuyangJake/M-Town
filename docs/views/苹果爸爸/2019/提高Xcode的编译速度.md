---
title: 提高Xcode的编译速度
date: 2019-10-12 00:31:43
tags:
categories: [苹果爸爸]
---

<img src="http://note.huyangjie.cn/media/15708608924822/15708610252156.jpg" width=500>

电脑这个配置平常跑一跑小的工程还好，当几个G大小的工程在的上面编译的时候，整个电脑都不好了，编译需要花上10几分钟甚至更久，在这10几分中内有时候连打字都延迟个1秒。

不更换硬件的前提下，想办法提高编译的速度。

<!-- more -->

## 提升编译链接的速度主要有以下三个方式：

### 1. 提高XCode编译时使用的线程数

```
defaults write com.apple.Xcode PBXNumberOfParallelBuildSubtasks 4
```

XCode默认使用与CPU核数相同的线程来进行编译，但由于编译过程中的IO操作往往比CPU运算要多，因此适当的提升线程数可以在一定程度上加快编译速度。本人采用的是2核的CPU，将线程数改为4后编译速度略有提升。

### 2. 将Debug Information Format改为DWARF
在工程对应Target的Build Settings中，找到 `Debug Information Format` 这一项，将Debug时的 `DWARF with dSYM file` 改为DWARF。

这一项设置的是是否将调试信息加入到可执行文件中，改为DWARF后，如果程序崩溃，将无法输出崩溃位置对应的函数堆栈，但由于Debug模式下可以在XCode中查看调试信息，所以改为DWARF影响并不大。这一项更改完之后，可以大幅提升编译速度。

需要注意的是，将 `Debug Information Format` 改为DWARF之后，会导致在Debug窗口无法查看相关类类型的成员变量的值。当需要查看这些值时，可以将 `Debug Information Format` 改回 `DWARF with dSYM file`，clean（必须）之后重新编译即可。

### 3. 将Build Active Architecture Only改为Yes
在工程对应Target的Build Settings中，找到Build Active Architecture Only这一项，将Debug时的No改为Yes。

这一项设置的是是否仅编译当前架构的版本，如果为No，会编译所有架构的版本。需要注意的是，此选项在Release模式下必须为Yes，否则发布的ipa在部分设备上将不能运行。这一项更改完之后，可以显著提高编译速度。

本人在设置完以上三个项之后，编译时间从1分钟左右减少到10秒左右，因此效果还是相当明显的。

----

## Xcode卡顿解决方案:
### 1、禁用indexing（索引）
```
#在终端(terminal) 输入

defaults write com.apple.dt.XCode IDEIndexDisable 1

#并重启Xcode。

#还原命令

defaults write com.apple.dt.XCode IDEIndexDisable 0
```

此操作将会让Xcode丧失很多功能，比如代码自动补全

### 2、减少系统记录的最近打开数目数量
打开系统偏好设置——通用，把“最近使用的项目”由默认10，修改为5或者更少。

此时，不一定能立即加速，需要重新启动系统。

### 3、提高XCode编译时使用的线程数

```
defaults write com.apple.Xcode PBXNumberOfParallelBuildSubtasks 4
```

### 4、关闭项目中的 source control
