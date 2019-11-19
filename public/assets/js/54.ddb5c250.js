(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{343:function(s,e,a){"use strict";a.r(e);var t=a(0),r=Object(t.a)({},function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("本文的记录并非全过程的流程记录，而是记下遇到一些让我需要去调研【猜想+Google】的点。简而言之可名其曰 "),a("strong",[s._v("“坑”")])]),s._v(" "),a("p",[s._v("制作Pod私有库的基本流程按照这篇文章 "),a("a",{attrs:{href:"https://juejin.im/post/5b82ca46518825430d26bc09",target:"_blank",rel:"noopener noreferrer"}},[s._v("CocoaPods进阶：详解私有库制作"),a("OutboundLink")],1),s._v(" 进行，文章写得比较仔细。")]),s._v(" "),a("p",[s._v("按照制作顺序来看着其中的 “坑” 吧")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("pod spec lint")]),s._v(" 直接执行会有很多警告导致无法检查通过。可以使用")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("pod spec lint xxx.podspec --allow-warnings\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在使用上述检查命令，我遇到了如下错误：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Thread:0x00007fafbf2a7e68@/usr/local/lib/ruby/gems/2.6.0/gems/fourflusher-2.2.0/lib/fourflusher/executable.rb:180 run"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" terminated with exception "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("report_on_exception is true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\nTraceback "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("most recent call last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n\t3: from /usr/local/lib/ruby/gems/2.6.0/gems/fourflusher-2.2.0/lib/fourflusher/executable.rb:183:in "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("block "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" reader"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\t2: from /usr/local/lib/ruby/gems/2.6.0/gems/fourflusher-2.2.0/lib/fourflusher/executable.rb:183:in "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("loop"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\t1: from /usr/local/lib/ruby/gems/2.6.0/gems/fourflusher-2.2.0/lib/fourflusher/executable.rb:184:in "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("block "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("2 levels"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" reader"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n/usr/local/lib/ruby/gems/2.6.0/gems/fourflusher-2.2.0/lib/fourflusher/executable.rb:184:in "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("readpartial"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" closed stream "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("IOError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("在"),a("code",[s._v("CocoaPods")]),s._v(" Github仓库的 issue 中找到了如下临时解决办法：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Temporary fix for https://github.com/CocoaPods/fourflusher/issues/17 until fourflusher (and maybe cocoapods) has a new release")]),s._v("\ngem "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fourflusher'")]),s._v(", :git "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://github.com/mfiebig/fourflusher.git'")]),s._v(", :ref "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'4bc2ee2b12185cd976b68f2365f52e56f8ec1785'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("hr"),s._v(" "),a("ul",[a("li",[s._v("在"),a("code",[s._v("pod spec lint")]),s._v(" 成功通过后进行"),a("code",[s._v("pod repo push spec")]),s._v("是报出了如下错误：")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ERROR "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("iOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" unknown: Encountered an unknown error "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Unable to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" a specification "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("AFNetworking"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" depended upon by "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxxxx'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("原因是：")]),s._v(" 私有库中依赖了"),a("code",[s._v("AFNetworking")]),s._v(", 校验podspec文件时会到远程podspec库查找相关依赖，默认只会到官方specs库校验，此时需要指定远程specs库去校验。")]),s._v(" "),a("p",[s._v("需要在执行 "),a("code",[s._v("pod repo push")]),s._v(" 命令的时候加上source参数。")]),s._v(" "),a("p",[a("strong",[s._v("解决方案:")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("pod sepc lint 文件名.podspec --sources"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://[privateLibName]/cocoaspecs.git,https://github.com/CocoaPods/Specs.git'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果遇到警告导致推送不成功，可以加上参数 "),a("code",[s._v("--allow-warnings")])]),s._v(" "),a("p",[s._v("同理，如果一个私有库中使用了另外一个私有库，也需要如此进行检查。")])])},[],!1,null,null,null);e.default=r.exports}}]);