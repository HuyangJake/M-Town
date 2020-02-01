(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{329:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("本文是从客户端为起点发散到WebView使用过程中的优化点。当前市场上的Native App中WebView使用的情况还是比较多的，像手机QQ，淘宝业务更替快速的产品，使用WebView动态渲染页面是必然的选择(或者说曾经)，然而遵从这个选择就必须承担着它带来的弊病，更确切地说应该是尽可能解决它的弊病。")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("众所周知在移动端使用WebView给人最直观的感觉是慢。造成这个现象的原因是多层次的，不过主要可以归纳为两个方面"),a("sup",[t._v("[2]")]),t._v(" ：")]),t._v(" "),a("ul",[a("li",[t._v("页面启动时间：打开一个 H5 页面需要做一系列处理，会有一段白屏时间，体验糟糕。")]),t._v(" "),a("li",[t._v("响应流畅度：由于 webkit 的渲染机制，单线程，历史包袱等原因，页面刷新/交互的性能体验不如原生。")])]),t._v(" "),a("p",[t._v("在WebView的先天缺陷角度--响应流畅度 大厂给出解决方案： FB 的 React-Native（多称RN） 和 阿里的 Weex。\nRN和Weex的核心实现跟WebView并没有关系，它们实现的并不是Hybrid App，里面是使用JavaScript引擎执行JS调用原生的组件。")]),t._v(" "),a("p",[t._v("不过它们的理念有一定的差异性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("weex")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("react-native")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Vue.js")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("React")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("write once, run anywhere")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("learn once, write anywhere")])])])]),t._v(" "),a("p",[t._v("这都不是我们今天的主角，今日主场属于WebView，那么我们所面临的问题是： "),a("strong",[t._v("H5页面启动时间")])]),t._v(" "),a("h2",{attrs:{id:"流程分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流程分析"}},[t._v("#")]),t._v(" 流程分析")]),t._v(" "),a("p",[t._v("下图是一个H5页面展示过程中要经历的流程：\n"),a("img",{attrs:{src:"http://qiniu.huyangjie.cn/H5%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E6%B5%81%E7%A8%8B.png",alt:"H5页面加载流程"}})]),t._v(" "),a("p",[t._v("简单的页面可能会没有JS请求数据这一个步骤，一般页面在 dom 渲染后能显示雏形，在这之前用户看到的都是白屏，等到下载渲染图片后整个页面才完整显示，打开页面优化就是要减少这个过程的耗时。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),a("h3",{attrs:{id:"前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[t._v("#")]),t._v(" 前端")]),t._v(" "),a("p",[t._v("B/S结构模式上对web的优化已经有做得比较极致方法，本文就不再介绍了（作为客户端同学也没有什么经验）这里给一个参考传送门"),a("sup",[t._v("[5]")]),t._v("：\n"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/21417465?refer=no-backend",target:"_blank",rel:"noopener noreferrer"}},[t._v("唯快不破：Web 应用的 13 个优化步骤"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("比较重要也是优化效果比较显著的是能够熟悉"),a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP缓存协议"),a("OutboundLink")],1),t._v("使用，这个需要服务端配合一起优化。")]),t._v(" "),a("h3",{attrs:{id:"客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[t._v("#")]),t._v(" 客户端")]),t._v(" "),a("p",[t._v("客户端上的H5展示跟传统的web页面有所不同，有优势也更有劣势。相对于PC端的处理器，移动客户端上的CPU性能会有所差距。不过由于客户端的H5是通过WebView内嵌在App中，情况不会像传统web一样，所有的优化都受限在浏览器之下，在客户端我们可以拿到更多的权限，做更深的优化。")]),t._v(" "),a("h4",{attrs:{id:"缓存（主要针对ios端，慎读！大片oc代码风格可能引起您的不适）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存（主要针对ios端，慎读！大片oc代码风格可能引起您的不适）"}},[t._v("#")]),t._v(" 缓存（主要针对iOS端，慎读！大片OC代码风格可能引起您的不适）")]),t._v(" "),a("p",[t._v("客户端可以拦截所有的网络请求，并自己实现缓存机制。iOS端的Cocoa框架UIWebView提供了客户端层面的缓存策略：")]),t._v(" "),a("div",{staticClass:"language-objectivec line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[t._v("NSURLRequestUseProtocolCachePolicy  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//缓存策略定义在 web 协议实现中，用于请求特定的URL。是默认的URL缓存策略。")]),t._v("\nNSURLRequestReloadIgnoringLocalCacheData "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//从服务端获取数据，忽略本地缓存")]),t._v("\nNSURLRequestReloadIgnoringLocalAndRemoteCacheData "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//源文件注释中写到没有实现")]),t._v("\nNSURLRequestReloadIgnoringCacheData "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//被NSURLRequestReloadIgnoringLocalCacheData替换了")]),t._v("\nNSURLRequestReturnCacheDataElseLoad "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//已经存在的缓存数据用于请求返回，不管它的过期日期和已经存在了多久。如果没有请求对应的缓存数据，从数据源读取")]),t._v("\nNSURLRequestReturnCacheDataDontLoad "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//已经存在的缓存数据用于请求返回，不管它的过期日期和已经存在了多久。如果没有请求对应的缓存数据，不要去数据源读取，该请求被设置为失败，这种情况多用于离线模式")]),t._v("\nNSURLRequestReloadRevalidatingCacheData "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//源文件中写到没有实现")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("其中默认缓存策略（最通用）"),a("code",[t._v("NSURLRequestUseProtocolCachePolicy")]),t._v("的流程如下：\n"),a("img",{attrs:{src:"http://qiniu.huyangjie.cn/15252477856431.jpg",alt:""}})]),t._v(" "),a("p",[t._v("其实我们自定义缓存策略，加上更多优化的点，比如自定义缓存的存储方式能够实现离线缓存，又能够实时更新，定义本地缓存失效时间等。")]),t._v(" "),a("p",[t._v("自定义流程的实现在iOS中是通过继承"),a("code",[t._v("NSURLProtocol")]),t._v("拦截处理所有的网络请求来实现的，这是我的一种实现方案："),a("a",{attrs:{href:"https://github.com/HuyangJake/YJURLProtocol",target:"_blank",rel:"noopener noreferrer"}},[t._v("YJURLProtocol"),a("OutboundLink")],1),t._v("  当然GitHub上有很多实现方案，最好是根据自己的需求去自定义。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qiniu.huyangjie.cn/15252481937129.jpg",alt:""}})]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"wkwebview是否支持nsurlprotocol？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wkwebview是否支持nsurlprotocol？"}},[t._v("#")]),t._v(" WKWebView是否支持NSURLProtocol？")]),t._v(" "),a("p",[t._v("在使用"),a("code",[t._v("WKWebView")]),t._v("加载网页的时候，"),a("code",[t._v("NSURLProtocol")]),t._v("子类会不能拦截到请求，原因是"),a("code",[t._v("WKWebView")]),t._v("的请求是在单独的进程里，所以不会走"),a("code",[t._v("NSURLProtocol")]),t._v("。当然解决办法是有的，因为其实"),a("code",[t._v("WKWebView")]),t._v("是支持"),a("code",[t._v("NSURLProtocol")]),t._v("协议的，只是还不够完善，当前可以通过调用私有的API去完成这项任务（详细分析过程见"),a("a",{attrs:{href:"https://www.jianshu.com/p/55f5ac1ab817",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考[6]"),a("OutboundLink")],1),t._v("）,以下是实现的关键代码：")]),t._v(" "),a("div",{staticClass:"language-objectivec line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[t._v("FOUNDATION_STATIC_INLINE Class "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ContextControllerClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" Class cls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("cls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        cls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("WKWebView new"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" valueForKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"browsingContextController"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nFOUNDATION_STATIC_INLINE SEL "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegisterSchemeSelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSSelectorFromString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"registerSchemeForCustomProtocol:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nFOUNDATION_STATIC_INLINE SEL "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UnregisterSchemeSelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSSelectorFromString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"unregisterSchemeForCustomProtocol:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@implementation")]),t._v(" NSURLProtocol "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WebKitSupport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("wk_registerScheme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scheme "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Class cls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ContextControllerClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    SEL sel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegisterSchemeSelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("cls respondsToSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("sel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" clang diagnostic push")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(' clang diagnostic ignored "-Warc-performSelector-leaks"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("cls performSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("sel withObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("scheme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" clang diagnostic pop")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("wk_unregisterScheme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scheme "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Class cls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ContextControllerClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    SEL sel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UnregisterSchemeSelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("cls respondsToSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("sel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" clang diagnostic push")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(' clang diagnostic ignored "-Warc-performSelector-leaks"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("cls performSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("sel withObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("scheme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" clang diagnostic pop")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@end")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br")])]),a("p",[t._v("附上解决方案源码："),a("a",{attrs:{href:"https://github.com/Yeatse/NSURLProtocol-WebKitSupport",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Yeatse/NSURLProtocol-WebKitSupport"),a("OutboundLink")],1),t._v("\n其中会使用到私有的API，关于使用私有API肯定担心的是能不能通过Apple的审核。摘录一段前百度工程师sunnyxx的描述：")]),t._v(" "),a("blockquote",[a("p",[t._v("关于私有API\n大家会质疑说，这用到了 UIKit 的私有属性和私有 API，要是系统升级变了咋办？要是审核被拒了咋办？\n首先，iOS 系统的 SDK 为了向下兼容，一般只会增加方法或者修改方法实现，不太可能直接删除一个共有方法，而私有方法的行为确实可能有变化，但系统 release 频率毕竟很低，每当新版本发布时 check 下原来的功能是否能 work 就好了，大可不必担心这么远，SDK 是死的人是活的。\n不论是 kvc 还是 selector 反射，都是利用 objc runtime 完成的，而到了这一层，真的就没啥公有私有可言了。设想你就是开发 Apple 私有 API 检查工具的工程师，给你一个 ipa 的包，你会如何检查出其中有没有私有 API 呢？")])]),t._v(" "),a("blockquote",[a("p",[t._v("首先，这个检查一定是个静态检查，不可能是运行时检查，因为代码逻辑那么复杂，把程序跑起来看所有 objc_msgSend 中包不包括私有调用这件事太不现实了。\n对 ipa 文件做静态检查的话肯定是去分析 Mach-O 可执行文件，因为这时很多源代码级别的信息已经丢失，经分析可以采取下面几种手段：")])]),t._v(" "),a("blockquote",[a("p",[t._v("是否 link 了私有 framework 或者公开 framework 中的私有符号，这可以防止开发者把私有 header 都 dump 出来供程序直接调用。\n同上，使用"),a("code",[t._v("@selector(_private_sel)")]),t._v("加上"),a("code",[t._v("-performSelector:")]),t._v("的方式直接调用私有 API。\n扫描所有符号，查看是否有继承自私有类，重载私有方法，方法名是否有重合。\n扫描所有string，看字符串常量段是否出现和私有 API 对应的。\n我觉得前三条被 catch 住的可能性最高，也最容易被检查出来。再来看我们用到用字符串的方法 kvc 和 反射 selector，应该属于最后一条，这时候就很难抉择了，拿 "),a("code",[t._v("handleNavigationTransition:")]),t._v(" 来说，看上去人畜无害啊，我自己类里面的方法也完全可能命名出这个来，所以单单凭借字符串命中私有 API 判定，苹果很容易误伤一大票开发者。\n综上，我觉得使用字符串的方式使用私有 API 是相对安全的")])]),t._v(" "),a("p",[t._v("PS: iOS11之后可以通过"),a("a",{attrs:{href:"https://developer.apple.com/documentation/webkit/wkurlschemehandler",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("WKURLSchemeHandler")]),a("OutboundLink")],1),t._v("去完成对"),a("code",[t._v("WKWebView")]),t._v("的请求拦截,不需要再调用私有API解决上述问题了。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("上述方案似乎已经完美解决缓存问题，但实际上还有很多问题：")]),t._v(" "),a("ul",[a("li",[t._v("没有预加载：第一次打开的体验很差，所有数据都要从网络请求。")]),t._v(" "),a("li",[t._v("缓存不可控：缓存的存取由系统 webview 控制，无法控制它的缓存逻辑，带来的问题包括：\n"),a("ul",[a("li",[t._v("i. 清理逻辑不可控，缓存空间有限，可能缓存几张大图片后，重要的 HTML/JS/CSS 缓存就被清除了。")]),t._v(" "),a("li",[t._v("ii.磁盘 IO 无法控制，无法从磁盘预加载数据到内存。")])])]),t._v(" "),a("li",[t._v("更新体验差：后台 HTML/JS/CSS 更新时全量下载，数据量大，弱网下载耗时长。")]),t._v(" "),a("li",[t._v("无法防劫持：若 HTML 页面被运营商或其他第三方劫持，将长时间缓存劫持的页面。")])]),t._v(" "),a("p",[t._v("还有一个方案就是使用zip包存放HTML文件和资源文件，进行统一管理。")]),t._v(" "),a("h4",{attrs:{id:"离线h5-zip-包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#离线h5-zip-包"}},[t._v("#")]),t._v(" 离线H5 zip 包")]),t._v(" "),a("p",[t._v("以下是现任职蚂蚁金服的"),a("code",[t._v("bang")]),t._v("提供的一个比较完善的客户端离线包方案：")]),t._v(" "),a("ol",[a("li",[t._v("后端使用构建工具把同一个业务模块相关的页面和资源打包成一个文件，同时对文件加密/签名。")]),t._v(" "),a("li",[t._v("客户端根据配置表，在自定义时机去把离线包拉下来，做解压/解密/校验等工作。")]),t._v(" "),a("li",[t._v("根据配置表，打开某个业务时转接到打开离线包的入口页面。")]),t._v(" "),a("li",[t._v("拦截网络请求，对于离线包已经有的文件，直接读取离线包数据返回，否则走 HTTP 协议缓存逻辑。")]),t._v(" "),a("li",[t._v("离线包更新时，根据版本号后台下发两个版本间的 diff 数据，客户端合并，增量更新。")])]),t._v(" "),a("p",[t._v("我在项目中准备实践这个方案，当前只使用了一步，配置业务转接入口+本地zip包解密解压进行加载。 项目使用"),a("code",[t._v("SSZipArchive")]),t._v("对zip包进行解压，放到temporary目录加载资源。解压zip包和迁移文件的工作放在App启动之后的异步线程执行，不会影响App的启动速度。")]),t._v(" "),a("div",{staticClass:"language-objectivec line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("unZipFile "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("zipFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSBundle mainBundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" pathForResource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"dist"')]),t._v(" ofType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"zip"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("destinationPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSURL fileURLWithPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSTemporaryDirectory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SSZipArchive unzipFileAtPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("zipFile toDestination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("destinationPath overwrite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("YES password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"******"')]),t._v(" error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nil"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("关于离线包的增量更新方案的参考:\n"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/23218754",target:"_blank",rel:"noopener noreferrer"}},[t._v("实现前端资源增量式更新的一种思路"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"http://blog.cnbang.net/tech/2258/",target:"_blank",rel:"noopener noreferrer"}},[t._v("两种增量更新方案"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("这一块还有很多需要实践的点..")]),t._v(" "),a("h4",{attrs:{id:"预加载-webview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预加载-webview"}},[t._v("#")]),t._v(" 预加载 webview")]),t._v(" "),a("p",[t._v("无论是 iOS 还是 Android，本地 webview 初始化都要不少时间，可以预先初始化好 webview。这里分两种预加载：")]),t._v(" "),a("ul",[a("li",[t._v("首次预加载：在一个进程内首次初始化 webview 与第二次初始化不同，首次会比第二次慢很多。原因预计是 webview 首次初始化后，即使 webview 已经释放，但一些多 webview 共用的全局服务或资源对象仍没有释放，第二次初始化时不需要再生成这些对象从而变快。我们可以在 APP 启动时预先初始化一个 webview 然后释放，这样等用户真正走到 H5 模块去加载 webview时就变快了。")]),t._v(" "),a("li",[t._v("webview 池：可以用两个或多个 webview 重复使用，而不是每次打开 H5 都新建 webview。不过这种方式要解决页面跳转时清空上一个页面，另外若一个 H5 页面上 JS 出现内存泄漏，就影响到其他页面，在 APP 运行期间都无法释放了。")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("WebView层面加载提高性能最大的优化方向还是缓存，预加载，在有限的资源和时间内更合理地调度资源。")]),t._v(" "),a("h2",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),a("ul",[a("li",[t._v("[1]. "),a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("Http缓存"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("[2]. "),a("a",{attrs:{href:"https://blog.cnbang.net/tech/3477/",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动 H5 首屏秒开优化方案探讨"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("[3]. "),a("a",{attrs:{href:"https://tech.meituan.com/WebViewPerf.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebView性能、体验分析与优化"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("[4]. "),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/evzDnTsHrAr2b9jcevwBzA",target:"_blank",rel:"noopener noreferrer"}},[t._v("70%以上业务由H5开发，手机QQ Hybrid 的架构如何优化演进？"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("[5]. "),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/21417465?refer=no-backend",target:"_blank",rel:"noopener noreferrer"}},[t._v("唯快不破：Web 应用的 13 个优化步骤"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("[6]. "),a("a",{attrs:{href:"https://www.jianshu.com/p/55f5ac1ab817",target:"_blank",rel:"noopener noreferrer"}},[t._v("一个完美的半成品-WKWebView"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);