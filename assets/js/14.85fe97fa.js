(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{468:function(t,a,n){"use strict";n.r(a);var r=n(4),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("p",[t._v("bcsix工作室日常姿势总结，收集")]),t._v(" "),n("h2",{attrs:{id:"代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),n("p",[t._v("public class Test_3 {\npublic static void main(String[] args) {\nSystem.out.println(aa());\n}\npublic static int aa() {\ntry{\nreturn 0/3;\n}catch(Exception e) {\nreturn 3;\n}finally{\nreturn 1;\n}")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("}\n")])])]),n("p",[t._v("}")]),t._v(" "),n("p",[t._v("输出结果 1")]),t._v(" "),n("h2",{attrs:{id:"解释"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解释"}},[t._v("#")]),t._v(" 解释")]),t._v(" "),n("p",[t._v("在finally中改变返回值的做法是不好的，因为如果存在finally代码块，try中的return语句不会立马返回调用者，而是记录下返回值待finally代码块执行完毕之后再向调用者返回其值，然后如果在finally中修改了返回值，就会返回修改后的值。显然，在finally中返回或者修改返回值会对程序造成很大的困扰，C#中直接用编译错误的方式来阻止程序员干这种龌龊的事情，Java中也可以通过提升编译器的语法检查级别来产生警告或错误，Eclipse中可以在如图所示的地方进行设置，强烈建议将此项设置为编译错误。")])])}),[],!1,null,null,null);a.default=s.exports}}]);