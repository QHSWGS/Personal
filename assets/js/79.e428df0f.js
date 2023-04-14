(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{522:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"js中的堆栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js中的堆栈"}},[s._v("#")]),s._v(" Js中的堆栈")]),s._v(" "),a("p",[s._v("堆"),a("code",[s._v("heap")]),s._v("是动态分配的内存，大小不定也不会自动释放，栈"),a("code",[s._v("stack")]),s._v("为自动分配的内存空间，在代码执行过程中自动释放。")]),s._v(" "),a("h2",{attrs:{id:"栈区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#栈区"}},[s._v("#")]),s._v(" 栈区")]),s._v(" "),a("p",[s._v("在栈内存中提供一个供"),a("code",[s._v("Js")]),s._v("代码执行的环境，关于作用域以及函数的调用都是栈内存中执行的。"),a("br"),s._v(" "),a("code",[s._v("Js")]),s._v("中基本数据类型"),a("code",[s._v("String")]),s._v("、"),a("code",[s._v("Number")]),s._v("、"),a("code",[s._v("Boolean")]),s._v("、"),a("code",[s._v("Null")]),s._v("、"),a("code",[s._v("Undefined")]),s._v("、"),a("code",[s._v("Symbol")]),s._v("，占用空间小且大小固定，值直接保存在栈内存中，是按值访问，对于"),a("code",[s._v("Object")]),s._v("引用类型，其指针放置于栈内存中，指向堆内存的实际地址，是通过引用访问。"),a("br"),s._v("\n关于调用栈，每调用一个函数，解释器就会把该函数添加进调用栈并开始执行；正在调用栈中执行的函数还调用了其它函数，那么新函数也将会被添加进调用栈，一旦这个函数被调用，便会立即执行；当前函数执行完毕后，解释器将其清出调用栈，继续执行当前执行环境下的剩余的代码；当分配的调用栈空间被占满时，会引发堆栈溢出错误。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Console调试")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("s")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("debugger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 断点")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ss")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("s")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ss")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n...\nCall Stack\n> s (VM383:4)\n  ss (VM383:7)\n  (anonymous) (VM383:9)\nScope\n  Local\n    b: 11\n    this: Window\n  Global Window\n    ...\n...\n*/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h2",{attrs:{id:"堆区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆区"}},[s._v("#")]),s._v(" 堆区")]),s._v(" "),a("p",[s._v("引用类型"),a("code",[s._v("Object")]),s._v("的变量占据空间大且大小不固定，堆内存中存储实际对象，在栈内存中存储对象的指针，对于对象的访问是按引用访问的，在堆区的内存不会随着程序的运行而自动释放，这就需要实现垃圾回收机制"),a("code",[s._v("GC")]),s._v("，需要注意的是在"),a("code",[s._v("Js")]),s._v("中没有类似于"),a("code",[s._v("C")]),s._v("中的"),a("code",[s._v("free()")]),s._v("函数去手动释放内存，对于堆区内存回收全部需要通过"),a("code",[s._v("Js")]),s._v("的垃圾回收机制去实现。"),a("br"),s._v("\n在栈区中执行的变量等是通过值访问，当其作用域销毁后变量也就随之销毁，而使用引用访问的堆区变量，在一个作用域消失后还可能在外层作用域或者其他作用域仍然存在引用，不能直接销毁，此时就需要通过算法计算该堆区变量是否属于不再需要的变量，从而决定是否需要进行内存回收，在"),a("code",[s._v("Js")]),s._v("中主要有引用计数与标记清除两种垃圾回收算法。")]),s._v(" "),a("h2",{attrs:{id:"每日一题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[s._v("#")]),s._v(" 每日一题")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://github.com/WindrunnerMax/EveryDay\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://www.zhihu.com/question/42231657\nhttps://segmentfault.com/a/1190000009693516\nhttps://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);