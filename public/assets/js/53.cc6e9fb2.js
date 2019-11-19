(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{347:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("开屏广告")]),t._v("  emmm... 是个老生常谈的功能需求了。脑子里印象就是个很简单的需求，YY了一下实现的方式，我想到的方案大概是：")]),t._v(" "),a("blockquote",[a("p",[t._v("在 "),a("code",[t._v("didFinishLaunchingWithOptions")]),t._v(" 方法中切换"),a("code",[t._v("window")]),t._v("的"),a("code",[t._v("rootViewController")]),t._v("为启动广告页面，倒计时完成之后再切为正常的 "),a("code",[t._v("rootViewController")]),t._v("，其中再注意下处理图片缓存的存储和读取的操作。")]),t._v(" "),a("p",[t._v("至于展示效果，加点动效的事情而已啦。修改rootViewController效果不好的话，想办法在window上加一个view展示咯，再不行使用一个新的window咯")])]),t._v(" "),a("p",[t._v("终于在项目的这一次需求中要添加启动广告，我可以实现脑子里YY的功能了。\n这里先列一下需求方给的详细需求：")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("启动广告只需要在App启动的时候展示，倒计时3秒")]),t._v(" "),a("li",[t._v("App支持读取缓存展示启动广告、异步更新广告")]),t._v(" "),a("li",[t._v("控制App是否强制展示此次返回的启动广告")]),t._v(" "),a("li",[t._v("点击广告跳转到活动落地页，落地页返回到App首页")])])]),t._v(" "),a("p",[t._v("作为处女座的我，针对细节私自定了些额外的需求：")]),t._v(" "),a("blockquote",[a("p",[t._v("a. 开屏广告上不展示状态栏\nb. 广告展示完成之后跳转到首页不那么突兀(首页需要已经加载完成)")])]),t._v(" "),a("h2",{attrs:{id:"方案实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 方案实现")]),t._v(" "),a("p",[t._v("假设如下是服务端返回的开屏广告控制接口。")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SUCCESS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hasAd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("231")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"imgUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://jakey.test.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jumpType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jumpValue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.baidu.com/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"showMoment"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("我创建了一个"),a("code",[t._v("LaunchAdManager")]),t._v("很快实现了切换"),a("code",[t._v("rootViewController")]),t._v("的方案，通过"),a("code",[t._v("SDWebImage")]),t._v("下载缓存图片，使用服务端的唯一字段"),a("code",[t._v("id")]),t._v("当做key缓存到内存和磁盘，不详细描述方案，具体流程见我的时序图，如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://note.huyangjie.cn/media/15526478756852/pic1.png",alt:"pi"}})]),t._v(" "),a("p",[t._v("最后的效果非常地生硬，两个rootViewController之间的切换就像是在打架...")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"寻找新方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#寻找新方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 寻找新方案")]),t._v(" "),a("p",[t._v("既然这样只能往 "),a("strong",[t._v("在首页所在的window上添加新的view")]),t._v(" 的方案上进行靠了。 方案的对比优劣可以在 参考列表中查看"),a("a",{attrs:{href:"#ref"}},[t._v("[2]")])]),t._v(" "),a("p",[t._v("我想到首页会有一个加载数据的过程，需要控制view在window上展示会不会跟其他的高优先级的弹窗冲突。以及这样会不会对业务会有所影响。")]),t._v(" "),a("p",[t._v("还是像键盘一样通过一个新的window对象展示出我们的启动广告就不会对原有业务有什么影响。")]),t._v(" "),a("p",[t._v("因为启动页是否展示需要请求接口，展示读取在线图片或是缓存图片也会需要一点时间。另外还需要有一点考虑的是，原本业务的首页需要在什么时机进行展示。如果太早，App启动会先进入业务首页，再出现开屏广告。如果太晚，开屏广告完成之后还没有加载完首页的数据，又达不到我定的需求 "),a("strong",[t._v("b")]),t._v(" 。所以我设计了如下接口：")]),t._v(" "),a("div",{staticClass:"language-objectivec line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n 检查是否需要展示广告\n\n @param completeHandler 判断接口请求完成\n @param finishedAction 倒计时完成\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("checkIfNeedLaunchAdLoadComplete"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("completeHandler\n                          countFinished"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL isSkiped"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("finishedAction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("在开屏广告接口请求完成之后就进行加载首页，此时新的window也已经被加载出来了，就不会出现前后不衔接的情况。")]),t._v(" "),a("p",[t._v("简单列一下关键代码")]),t._v(" "),a("div",{staticClass:"language-objectivec line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[t._v("UIWindow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("adWindow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIWindow alloc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithFrame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIScreen mainScreen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bounds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nTHKLaunchClearViewController "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("vc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("THKLaunchClearViewController alloc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nadWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rootViewController "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nadWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("windowLevel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UIWindowLevelStatusBar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nadWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hidden "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nadWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alpha "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("adWindow addSubview"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("rootVC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("关于 UIWindow 有只要创建了，它的hidden属性默认就是YES。在"),a("code",[t._v("makeKeyAndVisible")]),t._v("方法的注释中有这么写：")]),t._v(" "),a("blockquote",[a("p",[t._v("Shows the window and makes it the key window.")])]),t._v(" "),a("blockquote",[a("p",[t._v("This is a convenience method to show the current window and position it in front of all other windows at the same level or lower. If you only want to show the window, change its hidden property to NO.")])]),t._v(" "),a("p",[t._v("我们只是展示这个新的window，不是将其替换为keywindow, 那么只需要将其hidden的属性置为NO。")]),t._v(" "),a("p",[t._v("在展示完成之后，记得将新创建的window对象上的所有视图和其本身进行销毁。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("想要直接使用现成的开屏广告组件？推荐使用文章底部参考链接中的 "),a("a",{attrs:{href:"#ref"}},[t._v("[1]")]),t._v(" 三方库，看了其实现的源码，虽然写得比较重稍显啰嗦，但功能全、效果不错，其star数经得起实战考验了。")]),t._v(" "),a("p",[t._v("在源码中看到了一种无痛接入的实现方式，先解释下无痛是什么概念：使用三方库不需要额外写任何代码，只要将库文件拖入工程就完成功能的实现。")]),t._v(" "),a("p",[t._v("具体实现的代码如下，通过重写类的load方法，因为类的load方法必定会执行，所以可以确保里面的代码执行。")]),t._v(" "),a("div",{staticClass:"language-objectivec line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("load"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" shareManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("XHLaunchAdManager "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("shareManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" XHLaunchAdManager "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nil"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" dispatch_once_t oneToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_once")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("oneToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("XHLaunchAdManager alloc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instancetype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),t._v(" init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在UIApplicationDidFinishLaunching时初始化开屏广告,做到对业务层无干扰,当然你也可以直接在AppDelegate didFinishLaunchingWithOptions方法中初始化")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSNotificationCenter defaultCenter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" addObserverForName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("UIApplicationDidFinishLaunchingNotification object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nil queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nil usingBlock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSNotification "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" _Nonnull note"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//初始化开屏广告")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" setupXHLaunchAd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br")])]),a("h3",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("span",{attrs:{id:"ref"}},[t._v("参考")])]),t._v(" "),a("p",[t._v("[1]."),a("a",{attrs:{href:"https://github.com/CoderZhuXH/XHLaunchAd",target:"_blank",rel:"noopener noreferrer"}},[t._v("XHLaunchAd GitHub"),a("OutboundLink")],1),t._v("\n[2]. "),a("a",{attrs:{href:"https://my.oschina.net/zhxx/blog/910836",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS开屏广告&弹窗浮层解决方案"),a("OutboundLink")],1)])])},[],!1,null,null,null);s.default=e.exports}}]);