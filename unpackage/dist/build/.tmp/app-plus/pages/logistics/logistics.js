(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/logistics/logistics"],{"36b9":function(t,e,n){"use strict";n.r(e);var i=n("61a8"),s=n("4bbb");for(var c in s)"default"!==c&&function(t){n.d(e,t,function(){return s[t]})}(c);n("61c1");var a=n("2877"),u=Object(a["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},"4bbb":function(t,e,n){"use strict";n.r(e);var i=n("c27c"),s=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e["default"]=s.a},"52b0":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-steps"},[n("view",{staticClass:"uni-steps-items",class:"uni-steps-"+t.direction},t._l(t.steps,function(e,i){return n("view",{key:i,staticClass:"uni-steps-item",class:[e.status?"uni-steps-"+e.status:""]},[n("view",{staticClass:"uni-steps-item-title-container",style:{color:"process"===e.status?t.activeColor:""}},[n("view",{staticClass:"uni-steps-item-title"},[t._v(t._s(e.title))]),e.desc?n("view",{staticClass:"uni-steps-item-desc"},[t._v(t._s(e.desc))]):t._e()]),n("view",{staticClass:"uni-steps-item-circle-container"},["process"!==e.status?n("view",{staticClass:"uni-steps-item-circle",style:{backgroundColor:"finish"===e.status?t.activeColor:""}}):n("uni-icon",{attrs:{type:"checkbox-filled",size:"14",color:t.activeColor,mpcomid:"00ce6836-0-"+i}})],1),i!==t.steps.length-1?n("view",{staticClass:"uni-steps-item-line",style:{backgroundColor:"finish"===e.status?t.activeColor:""}}):t._e()])}))])},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},"61a8":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},attrs:{eventid:"04c59e20-0"},on:{click:function(e){t.onClick()}}})},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},"61c1":function(t,e,n){"use strict";var i=n("f7b5"),s=n.n(i);s.a},6721:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(n("c233"));function s(t){return t&&t.__esModule?t:{default:t}}var c={components:{uniSteps:i.default},data:function(){return{activeColor:"rgba(45, 171, 247, 1)",list:[{title:"运输到达【北京】 北京市南山区科技园南区R2-B三楼",desc:"2018-07-14 08:15:42"},{title:"运输到达【北京】 北京市南山区科技园南区R2-B三楼",desc:"2018-07-14 08:15:42"},{title:"运输到达【北京】 北京市南山区科技园南区R2-B三楼",desc:"2018-07-14 08:15:42"},{title:"运输到达【北京】 北京市南山区科技园南区R2-B三楼",desc:"2018-07-14 08:15:42"}]}}};e.default=c},7214:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(n("36b9"));function s(t){return t&&t.__esModule?t:{default:t}}var c={name:"uni-steps",components:{uniIcon:i.default},props:{direction:{type:String,default:"row"},activeColor:{type:String,default:"#1aad19"},active:{type:[Number,String],default:0},data:Array},data:function(){return{}},computed:{steps:function(){var t=this,e=[];return this.data.forEach(function(n,i){var s={};s.title=n.title,s.desc=n.desc,s.status=t.getStatus(i),e.push(s)}),e}},methods:{getStatus:function(t){return t<Number(this.active)?"finish":t===Number(this.active)?"process":""}}};e.default=c},"882b":function(t,e,n){"use strict";var i=n("da3d"),s=n.n(i);s.a},"99ca":function(t,e,n){"use strict";var i=n("e0ea"),s=n.n(i);s.a},c233:function(t,e,n){"use strict";n.r(e);var i=n("52b0"),s=n("db11");for(var c in s)"default"!==c&&function(t){n.d(e,t,function(){return s[t]})}(c);n("99ca");var a=n("2877"),u=Object(a["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},c27c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uni-icon",props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},da0c:function(t,e,n){"use strict";n.r(e);var i=n("fd88"),s=n("fdc8");for(var c in s)"default"!==c&&function(t){n.d(e,t,function(){return s[t]})}(c);n("882b");var a=n("2877"),u=Object(a["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},da3d:function(t,e,n){},db11:function(t,e,n){"use strict";n.r(e);var i=n("7214"),s=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e["default"]=s.a},e0ea:function(t,e,n){},ec72:function(t,e,n){"use strict";n("591f");var i=c(n("b0ce")),s=c(n("da0c"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},f7b5:function(t,e,n){},fd88:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[t._m(0),n("view",{staticClass:"example"},[n("uni-steps",{attrs:{data:t.list,direction:"column",active:2,"active-color":t.activeColor,mpcomid:"414c23a2-0"}})],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"headWrap"},[n("view",{staticClass:"list"},[t._v("订单编号："),n("span",[t._v("1822342342134")])]),n("view",{staticClass:"list"},[t._v("物流编号："),n("span",[t._v("1822342342134")])]),n("view",{staticClass:"list"},[t._v("快递公司："),n("span",[t._v("顺丰快递")])])])}];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},fdc8:function(t,e,n){"use strict";n.r(e);var i=n("6721"),s=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e["default"]=s.a}},[["ec72","common/runtime","common/vendor"]]]);