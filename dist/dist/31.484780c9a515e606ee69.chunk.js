webpackJsonp([31],{184:function(t,e,s){var r=s(2)(s(246),s(324),null,null);r.options.__file="E:\\zhangfuyuan\\Demo\\vue\\iview-admin-template\\src\\views\\orders\\orderdetail.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] orderdetail.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},246:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(18),a=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default={name:"orderdetail",data:function(){return{id:this.$route.params.id,result:{},columns:[],columns1:[]}},methods:{init:function(){var t=this;a.default.post("admin/Orders/GetModel",{Id:this.id},t,function(e,s){"1"===e?(t.columns=s.columns,t.columns1=s.columns1,t.result=s.data):t.$Message.error("订单信息有误")})}},mounted:function(){this.init()}}},324:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{background:"#eee",padding:"20px","padding-right":"200px"}},[s("Card",{attrs:{bordered:!1,span:"11"}},[s("p",{attrs:{slot:"title"},slot:"title"},[t._v("商品详情")]),t._v(" "),s("Table",{attrs:{columns:t.columns,data:t.result.Items}}),t._v(" "),s("h5",{},[s("font",[t._v("商品总价：￥ "+t._s(t.result.ProductTotalAmount)+";  ")]),s("font",[t._v(" 运费：￥"+t._s(t.result.Freight)+" ;  ")]),t._v(" 会员卡抵扣金额:￥"+t._s(t.result.CardPayMoney)+" ;"),s("font",[t._v("优惠券抵扣金额:￥"+t._s(t.result.DiscountAmount)+" ;")]),s("font",[t._v("实付金额：￥"+t._s(t.result.OrderAmountRedundancy)+";")])],1)],1),t._v(" "),s("Row",{staticStyle:{"margin-top":"20px"}},[s("Col",{attrs:{span:"11"}},[s("Card",[s("p",{attrs:{slot:"title"},slot:"title"},[t._v("订单详情")]),t._v(" "),s("Form",{attrs:{"label-position":"left","label-width":100}},[s("FormItem",{staticStyle:{"margin-bottom":"2px"},attrs:{label:"订单号"}},[s("span",[t._v(t._s(t.result.Id))])]),t._v(" "),s("FormItem",{staticStyle:{"margin-bottom":"2px"},attrs:{label:"创建时间"}},[s("span",[t._v(t._s(t._f("formatDate")(t.result.OrderDate)))])]),t._v(" "),s("FormItem",{staticStyle:{"margin-bottom":"2px"},attrs:{label:"订单状态"}},[s("span",[t._v(t._s(t.result.OrderStatusStr))])]),t._v(" "),s("FormItem",{staticStyle:{"margin-bottom":"2px"},attrs:{label:"下单会员"}},[s("span",[t._v(t._s(t.result.UserName))])]),t._v(" "),s("FormItem",{staticStyle:{"margin-bottom":"2px"},attrs:{label:"买家备注"}},[s("span",[t._v(t._s(t.result.UserRemark))])])],1)],1)],1),t._v(" "),s("Col",{staticStyle:{"padding-left":"50px"},attrs:{span:"13"}},[s("Card",[s("p",{attrs:{slot:"title"},slot:"title"},[t._v("收货详情")]),t._v(" "),s("Form",{attrs:{"label-position":"left","label-width":100}},[s("FormItem",{staticStyle:{"margin-bottom":"2px"},attrs:{label:"收 货 人"}},[s("span",[t._v(t._s(t.result.ShipTo))])]),t._v(" "),s("FormItem",{staticStyle:{"margin-bottom":"2px"},attrs:{label:"地 址"}},[s("span",[t._v(t._s(t.result.RegionFullName+t.result.Address))])]),t._v(" "),s("FormItem",{staticStyle:{"margin-bottom":"2px"},attrs:{label:"手机号码"}},[s("span",[t._v(t._s(t.result.CellPhone))])]),t._v(" "),t.result.ExpressCompanyName?[s("FormItem",{staticStyle:{"margin-bottom":"2px"},attrs:{label:"快递公司"}},[s("span",[t._v(t._s(t.result.ExpressCompanyName))])]),t._v(" "),s("FormItem",{staticStyle:{"margin-bottom":"2px"},attrs:{label:"发货单"}},[s("span",[t._v(t._s(t.result.ShipOrderNumber))])])]:t._e()],2)],1)],1)],1),t._v(" "),s("Card",{staticStyle:{"margin-top":"20px"},attrs:{bordered:!1}},[s("p",{attrs:{slot:"title"},slot:"title"},[t._v("操作记录")]),t._v(" "),s("Table",{attrs:{columns:t.columns1,data:t.result.Operations}})],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});