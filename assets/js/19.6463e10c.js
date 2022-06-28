(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{537:function(t,e,s){"use strict";s.r(e);var n=s(18),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"七-分支限界法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七-分支限界法"}},[t._v("#")]),t._v(" 七.分支限界法")]),t._v(" "),s("p",[s("strong",[t._v("概述")])]),t._v(" "),s("p",[t._v("类似于回溯法，也是一种在问题的解空间树 T 上搜索问题解的算法。但在一般情况下，分支界限法与回溯法的求解目标不同。回溯法的求解目标是找出 T 中满足约束条件的所有解，而分支界限法的求解目标则是找出满足约束条件的一个解，或是在满足约束条件的解中找出使某一目标函数值达到极大或极小的解，即在某种意义下的最优解。")]),t._v(" "),s("p",[s("strong",[t._v("策略")])]),t._v(" "),s("p",[t._v("在扩展结点处，先生成其所有的儿子结点（分支），然后再从当前的活结点表中选择下一个扩展对点。为了有效地选择下一扩展结点，以加速搜索的进程，在每一活结点处，计算一个函数值（界限），并根据这些已计算出的函数值，从当前活结点表中选择一个最有利的结点作为扩展结点，使搜索朝着解空间树上有最优解的分支推进，以便尽快地找出一个最优解。")]),t._v(" "),s("blockquote",[s("p",[t._v("与回溯法的区别")])]),t._v(" "),s("ul",[s("li",[t._v("回溯法：深度优先搜索堆栈活结点的所有可行子结点被遍历后才被从栈中弹出找出满足约束条件的所有解")]),t._v(" "),s("li",[t._v("分支界限法：广度优先或最小消耗优先搜索队列、优先队列每个结点只有一次成为活结点的机会找出满足约束条件的一个解或特定意义下的最优解。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);