(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{377:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 场景")]),t._v(" "),a("p",[t._v("写这篇文章的背景是在看"),a("a",{attrs:{href:"https://github.com/casatwy/RTNetworking",target:"_blank",rel:"noopener noreferrer"}},[t._v("casatwy的网络层架构代码"),a("OutboundLink")],1),t._v("时对子类继承和协议代理方的实现产生了疑惑，进行了探索。")]),t._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("p",[t._v("问题情景：父类的方法列表中和协议中有同样的方法（"),a("em",[t._v("代码如下")]),t._v("），子类继承方法同时代理方也实现协议方法，那么当父类调用"),a("code",[t._v("decoratePatternTest")]),t._v("这个方法时具体的执行方是谁？子类同时是代理方和不是代理方分别有什么样的情况呢？")]),t._v(" "),a("div",{staticClass:"language-objectivec line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("import")]),t._v(" <Foundation/Foundation.h>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@protocol")]),t._v(" BaseDecorateDelegate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("NSObject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("decoratePatternTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@interface")]),t._v(" BaseProtocolTest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NSObject\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@property")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" weak"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("BaseDecorateDelegate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" decorate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("decoratePatternTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("startTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@end")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h2",{attrs:{id:"casatwy注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#casatwy注释","aria-hidden":"true"}},[t._v("#")]),t._v(" casatwy注释")]),t._v(" "),a("p",[t._v("在casatwy的代码中遇到上述问题的有"),a("code",[t._v("BaseAPIManager")]),t._v("拦截器代码部分，作者的注释如下：")]),t._v(" "),a("div",{staticClass:"language-objectivec line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    拦截器的功能可以由子类通过继承实现，也可以由其它对象实现,两种做法可以共存\n    当两种情况共存的时候，子类重载的方法一定要调用一下super\n    然后它们的调用顺序是BaseManager会先调用子类重载的实现，再调用外部interceptor的实现\n    \n    notes:\n        正常情况下，拦截器是通过代理的方式实现的，因此可以不需要以下这些代码\n        但是为了将来拓展方便，如果在调用拦截器之前manager又希望自己能够先做一些事情，所以这些方法还是需要能够被继承重载的\n        所有重载的方法，都要调用一下super,这样才能保证外部interceptor能够被调到\n        这就是decorate pattern\n */")]),t._v("\n \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("注释中提到：")]),t._v(" "),a("ul",[a("li",[t._v("子类继承和代理方实现协议可以共存")]),t._v(" "),a("li",[t._v("两种共存时子类重载的方法必须要调用父类方法")]),t._v(" "),a("li",[t._v("两者调用顺序是先实现子类重载的方法再调用代理方实现的方法")]),t._v(" "),a("li",[t._v("最后提到的是 "),a("strong",[t._v("Decorate Pattern")]),t._v(" 装饰者模式")])]),t._v(" "),a("h2",{attrs:{id:"分情况实现验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分情况实现验证","aria-hidden":"true"}},[t._v("#")]),t._v(" 分情况实现验证")]),t._v(" "),a("ol",[a("li",[t._v("子类继承父类方法 & 子类没有遵守父类协议 & 其他类遵守协议实现代理方法")]),t._v(" "),a("li",[t._v("子类继承父类方法 & 遵守父类协议")])]),t._v(" "),a("p",[t._v("父类方法：")]),t._v(" "),a("div",{staticClass:"language-objectivec line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("decoratePatternTest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"执行父类decoratePatternTest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"基类中实现decoratePatternTest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decorate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decorate respondsToSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("decoratePatternTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decorate decoratePatternTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("子类方法：")]),t._v(" "),a("div",{staticClass:"language-objectivec line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("decoratePatternTest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),t._v(" decoratePatternTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"子类执行decoratePatternTest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"子类中实现decoratePatternTest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("非子类代理者方法：")]),t._v(" "),a("div",{staticClass:"language-objectivec line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("decoratePatternTest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"执行过代理方实现decoratePatternTest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"代理方实现decoratePatternTest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("测试结果：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("父类")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("子类")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Other")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("父类")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("子类")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Other")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("遵守协议实现方法")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")])]),t._v(" "),a("tr",[a("td",[t._v("继承方法")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")])]),t._v(" "),a("tr",[a("td",[t._v("方法执行顺序")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])])])]),t._v(" "),a("h2",{attrs:{id:"关键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关键","aria-hidden":"true"}},[t._v("#")]),t._v(" 关键")]),t._v(" "),a("p",[t._v("其实问题的关键是在代理者的协议方法调用的时机。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qiniu.huyangjie.cn/clodreading/jpg/%E7%BB%A7%E6%89%BF%E4%B8%8E%E4%BB%A3%E7%90%86.png-blog",alt:""}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("当子类继承了方法又是代理者，那么在父类方法中通过"),a("code",[t._v("（self != self.decotate）")]),t._v("来判断不用再去执行协议中的方法")])]),t._v(" "),a("li",[a("p",[t._v("子类不是代理者没有继承方法，则在父类方法中调用代理者执行协议方法")])]),t._v(" "),a("li",[a("p",[t._v("子类不是代理者但是继承了方法，父类调用代理者协议方法")]),t._v(" "),a("ul",[a("li",[t._v("两个方法的调其顺序是 子类中方法 -> 父类中方法 -> 代理者方法")]),t._v(" "),a("li",[t._v("两个方法中的有效代码执行顺序要看 子类方法中 "),a("code",[t._v("super")]),t._v("调用的位置 ("),a("code",[t._v("super")]),t._v("调用在子类有效代码前则 代理者方法的代码先执行)-------\x3e见最后一节__Decorate Pattern__ 装饰者模式")])])])]),t._v(" "),a("h3",{attrs:{id:"代码中不用调用父类方法的情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码中不用调用父类方法的情况","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码中不用调用父类方法的情况")]),t._v(" "),a("p",[t._v("作者的代码"),a("code",[t._v("BaseAPIManager")]),t._v("中的"),a("code",[t._v("reformerParams")]),t._v("方法在父类实例方法和协议方法中存在，但是子类继承实现时并不需要调用父类的 "),a("code",[t._v("reformerParams")]),t._v("，原因是父类中作了如下处理：")]),t._v(" "),a("div",{staticClass:"language-objectivec line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instancetype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("init\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),t._v(" init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" conformsToProtocol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@protocol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BaseProtocolDelegate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("BaseProtocolDelegate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            NSException "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("exception "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSException alloc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@throw")]),t._v(" exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("reformerParams "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"执行父类reformerTest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    IMP childIMP "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child methodForSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reformerTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    IMP selfIMP "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" methodForSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reformerTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("childIMP "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" selfIMP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"子类没有继承此方法"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果child是继承得来的，那么这里就不会跑到，会直接跑子类中的IMP。")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果child是另一个对象，就会跑到这里")]),t._v("\n        NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nil"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child reformerParams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"default"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br")])]),a("ul",[a("li",[a("p",[t._v("初始化方法中首先保证子类必须遵守了"),a("code",[t._v("BaseProtocolDelegate")]),t._v("协议")])]),t._v(" "),a("li",[a("p",[t._v("子类实现了"),a("code",[t._v("reformerParams")]),t._v("方法并没有调用"),a("code",[t._v("super")]),t._v("并不会出发父类的"),a("code",[t._v("reformerParams")])])]),t._v(" "),a("li",[a("p",[t._v("根据消息传递机制父类"),a("code",[t._v("reformerParams")]),t._v(" 方法会被调用说明子类没有实现此方法，那么执行非子类代理者的协议方法")])]),t._v(" "),a("li",[a("p",[t._v("父类要求子类必须遵守协议，那么此协议"),a("code",[t._v("BaseProtocolDelegate")]),t._v("更多的用处是获取子类对象")])])]),t._v(" "),a("h2",{attrs:{id:"decorate-pattern-装饰者模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decorate-pattern-装饰者模式","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Decorate Pattern")]),t._v(" 装饰者模式")]),t._v(" "),a("blockquote",[a("p",[t._v("__装饰者模式__动态地将责任附件到对象上，若要扩展功能，装饰着提供了比继承更具有弹性的方案。")])]),t._v(" "),a("h3",{attrs:{id:"装饰者模式的设计原则："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装饰者模式的设计原则：","aria-hidden":"true"}},[t._v("#")]),t._v(" 装饰者模式的设计原则：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qiniu.huyangjie.cn/clodreading/jpg/%E8%A3%85%E9%A5%B0%E8%80%85%E6%A8%A1%E5%BC%8F%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99.png-blog",alt:""}}),t._v("\n可以随心为一个类扩展功能，但不允许对已经存在的代码进行修改。")]),t._v(" "),a("h3",{attrs:{id:"装饰者模式的主要特点："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装饰者模式的主要特点：","aria-hidden":"true"}},[t._v("#")]),t._v(" 装饰者模式的主要特点：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qiniu.huyangjie.cn/clodreading/jpg/%E8%A3%85%E9%A5%B0%E8%80%85%E6%A8%A1%E5%BC%8F%E7%89%B9%E7%82%B9.png-blog",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"装饰者模式类图："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装饰者模式类图：","aria-hidden":"true"}},[t._v("#")]),t._v(" 装饰者模式类图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qiniu.huyangjie.cn/clodreading/jpg/%E8%A3%85%E9%A5%B0%E8%80%85%E6%A8%A1%E5%BC%8F%E7%B1%BB%E7%A4%BA%E6%84%8F%E5%9B%BE.png-blog",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"实际的例子：java中常用的java-io类就存在着大量装饰者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实际的例子：java中常用的java-io类就存在着大量装饰者","aria-hidden":"true"}},[t._v("#")]),t._v(" 实际的例子：java中常用的java.io类就存在着大量装饰者")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qiniu.huyangjie.cn/clodreading/jpg/%E8%A3%85%E9%A5%B0%E8%80%85java.io.png-blog",alt:""}})]),t._v(" "),a("p",[t._v("以上内容摘自《Head First设计模式》 第三章 装饰者模式 （79-107）")]),t._v(" "),a("p",[t._v("对应到iOS中本文的场景：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("被装饰者")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("功能组件")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("装饰者")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("委托方父类")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("代理方OtherObject（非子类）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("子类")])])])]),t._v(" "),a("p",[t._v("其实在思考装饰者模式对应情况上，有点疑惑： 装饰者类Decorator没有找到对应的类")]),t._v(" "),a("p",[t._v("但装饰者模式中的关键点：")]),t._v(" "),a("blockquote",[a("p",[t._v("装饰者可以在被所委托被装饰者的行为之前或之后，加上自己的行为，以达到特定目标。")])]),t._v(" "),a("p",[t._v("在本文的例子中有明显体现：子类继承的方法中调用"),a("code",[t._v("super")]),t._v("方法，在这之前或者之后可以加上自己的行为，达到特定目标。")]),t._v(" "),a("p",[t._v("对装饰者模式的理解还比较基础有待继续研究……欢迎指正指导，谢谢！")]),t._v(" "),a("p",[t._v("iOS中装饰者模式的实现的后续研究请看"),a("router-link",{attrs:{to:"/2017/01/10/Objective-C中的装饰模式/index.html"}},[t._v("Objective-C中的装饰模式")])],1)])},[],!1,null,null,null);s.default=e.exports}}]);