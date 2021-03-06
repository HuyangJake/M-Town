---
title: npm pod brew... 免镜像提速
date: 2018-10-27 15:55:04
tags: [Shell]
categories: [技术拾荒]
---

>标题的答案就是： 代理

像题中`CocoaPods` `Homebrew`这般的依赖包管理工具，在终端中下载资源总是常会让人抓狂。
 __我们要做的就是把终端的网络也走这一套代理方案，解决终端让人揪心的更新__。

<!--more-->

---
### 具体步骤

1.首先在自己的s s客户端设置中查看本地监听端口，如下图：
![-w394](media/15406226612684/15406249328079.jpg)

我的端口是1086， 地址是本机地址127.0.0.1


2.在终端中输入以下代码就可以让此终端走代理（注意替换自己的ip和端口号）

    export ALL_PROXY=socks5://127.0.0.1:1086
    
要想所有的终端都走代理，将配置写入环境变量当中，这取决于你的终端，如果是默认的 bash，则写入 `~/.bash_profile `，如果是 zsh，则写在 `~/.zshrc`  里。

或者直接用如下语句来将命令直接导入到配置文件里

```
echo export ALL_PROXY=socks5://127.0.0.1:1086 >> ~/.bash_profile
 
//如果是zsh就下边这个

echo export ALL_PROXY=socks5://127.0.0.1:1086 >> ~/.zsh_profile
```
 
 一般添加完成代理后，执行 `source ~/.bash_profile` 或者zsh的 `source ~/.zsh_profile` 让配置立即生效。
 
 另外只有在配置完成之后打开的终端才会生效
 
 
### Reference

[让 Homebrew 走代理更新](https://www.logcg.com/archives/1617.html)
 


