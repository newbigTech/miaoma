webpackJsonp([1],{196:function(e,t,n){n(297);var i=n(2)(n(272),n(324),null,null);i.options.__file="E:\\zhangfuyuan\\Demo\\vue\\iview-admin-template\\src\\views\\yuyue\\arealist.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] arealist.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},207:function(e,t,n){e.exports={default:n(208),__esModule:!0}},208:function(e,t,n){n(210),e.exports=n(3).Number.isInteger},209:function(e,t,n){var i=n(12),o=Math.floor;e.exports=function(e){return!i(e)&&isFinite(e)&&o(e)===e}},210:function(e,t,n){var i=n(19);i(i.S,"Number",{isInteger:n(209)})},211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateNum=t.validateInteger=t.validateRequired=void 0;var i=n(207),o=function(e){return e&&e.__esModule?e:{default:e}}(i);t.validateRequired=function(e,t,n){if(!t)return n(new Error("此项必填"));n()},t.validateInteger=function(e,t,n){setTimeout(function(){(0,o.default)(t)?n():n(new Error("请输入整数"))},1e3)},t.validateNum=function(e,t,n){setTimeout(function(){var e=/^\d+(\.\d+)?$/,i=/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;e.test(t)||i.test(t)?n():n(new Error("请输入数字"))},1e3)}},212:function(e,t,n){n(219);var i=n(2)(n(218),n(220),null,null);i.options.__file="E:\\zhangfuyuan\\Demo\\vue\\iview-admin-template\\src\\views\\main-components\\list.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},213:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(25),a=i(o),r=n(18),s=i(r),l=function(e,t,n,i){return t("Button",{props:{type:"primary",loading:n.saving,size:"small"},style:{margin:"0 5px"},on:{click:function(){e.$router.push({name:e.routername,params:{id:n.Id}})}}},"编辑")},d=function(e,t,n,i){return t("Button",{props:{type:"primary",loading:n.saving,size:"small"},style:{margin:"0 5px"},on:{click:function(){e.$emit("set-form",n)}}},"编辑")},c=function(e,t,n,i){return t("Button",{props:{type:n.editting?"success":"primary",loading:n.saving,size:"small"},style:{margin:"0 5px"},on:{click:function(){if(n.editting){var t=e.edittingStore[i],o={};e.caneditcolumns.forEach(function(e){o[e.key]=t[e.key]}),t.Id&&"0"!==t.Id&&(o.Id=t.Id),s.default.post(e.updateUrl,o,e,function(n){"1"===n?(e.edittingStore[i].saving=!0,e.thisTableData=JSON.parse((0,a.default)(e.edittingStore)),t.editting=!1,t.saving=!1,e.thisTableData=JSON.parse((0,a.default)(e.edittingStore)),e.$emit("input",e.handleBackdata(e.thisTableData)),e.$Message.success("编辑成功")):e.$Message.error("编辑失败")})}else{if(n.edittingCell)for(var r in n.edittingCell)n.edittingCell[r]=!1,e.edittingStore[i].edittingCell[r]=!1;e.edittingStore[i].editting=!0,e.thisTableData=JSON.parse((0,a.default)(e.edittingStore))}}}},n.editting?"保存":"编辑")},u=function(e,t,n,i){return t("Poptip",{props:{confirm:!0,title:"您确定要删除这条数据吗?",transfer:!0},on:{"on-ok":function(){var t={};n.Id&&"0"!==n.Id&&(t.Id=n.Id),s.default.post(e.deleteUrl,t,e,function(t){"1"===t?(e.thisTableData.splice(i,1),e.$emit("input",e.handleBackdata(e.thisTableData)),e.$Message.success("删除成功")):e.$Message.error("删除失败")})}}},[t("Button",{style:{margin:"0 5px"},props:{type:"error",placement:"top",size:"small"}},"删除")])},h=function(e,t,n,i,o){var a="查看详情";return o&&o.BtttonName&&(a=o.BtttonName),t("Button",{props:{type:"default",loading:n.saving,size:"small"},style:{margin:"0 5px"},on:{click:function(){switch(a){case"预约记录":e.$router.push({name:"specialorder_list",params:{id:n.Id}});break;case"排班管理":e.$router.push({name:"specialschedues_list",params:{id:n.Id}});break;case"领取详情":e.$router.push({name:"couponreceivers_list",params:{id:n.Id}});break;case"使用详情":e.$router.push({name:"uservipcardrecord_list",params:{id:n.Id}});break;default:e.$router.push({name:e.routername,params:{id:n.Id}})}}}},a)},m=function(e,t,n,i,o){return t("Poptip",{props:{confirm:!0,title:o.Msg?o.Msg:"您确定执行此操作吗?",transfer:!0},on:{"on-ok":function(){var t={};n.Id&&"0"!==n.Id&&(t.Id=n.Id),s.default.post(o.PostUrl,t,e,function(t){"1"===t?(e.$emit("reLoad"),e.$Message.success("操作成功")):e.$Message.error("操作失败")})}}},[t("Button",{style:{margin:"0 5px"},props:{type:o.BtttonStyle,placement:"top",size:"small"}},o.BtttonName)])},f=function(e,t,n,i){return t("Button",{props:{type:"default",loading:n.saving,size:"small"},style:{margin:"0 5px"},on:{click:function(){e.$emit("set-form",n)}}},"查看")},p=function(e,t,n){return e.hoverShow?t("div",{class:{"show-edit-btn":e.hoverShow}},[t("Button",{props:{type:"text",icon:"edit"},on:{click:function(t){e.edittingStore[n.index].edittingCell[n.column.key]=!0,e.thisTableData=JSON.parse((0,a.default)(e.edittingStore))}}})]):t("Button",{props:{type:"text",icon:"edit"},on:{click:function(t){e.edittingStore[n.index].edittingCell[n.column.key]=!0,e.thisTableData=JSON.parse((0,a.default)(e.edittingStore))}}})},g=function(e,t,n){return t("Button",{props:{type:"text",icon:"checkmark"},on:{click:function(t){var i=e.edittingStore[n.index],o={};e.caneditcolumns.forEach(function(e){o[e.key]=i[e.key]}),i.Id&&"0"!==i.Id&&(o.Id=i.Id),s.default.post(e.updateUrl,o,e,function(t){"1"===t?(i.edittingCell[n.column.key]=!1,e.thisTableData=JSON.parse((0,a.default)(e.edittingStore)),e.$emit("input",e.handleBackdata(e.thisTableData)),e.$Message.success("编辑成功")):e.$Message.error("编辑失败")})}}})},y=function(e,t,n,i){return t("Input",{props:{type:"text",value:e.edittingStore[n.index][i.key]},on:{"on-change":function(t){var o=i.key;e.edittingStore[n.index][o]=t.target.value}}})},v=function(e,t,n,i){if(2==n.OrderStatus)return t("Button",{props:{type:"primary",loading:n.saving,size:"small"},style:{margin:"0 5px"},on:{click:function(){e.$emit("set-form",n)}}},"发货")},k=function(e,t,n,i,o){if(n[o.CheckKey]==o.CheckValue)return t("Poptip",{props:{confirm:!0,title:o.Msg?o.Msg:"您确定执行此操作吗?",transfer:!0},on:{"on-ok":function(){var t={};n.Id&&"0"!==n.Id&&(t.Id=n.Id),s.default.post(o.PostUrl,t,e,function(t){"1"===t?(e.$emit("reLoad"),e.$Message.success("操作成功")):e.$Message.error("操作失败")})}}},[t("Button",{style:{margin:"0 5px"},props:{type:o.BtttonStyle,placement:"top",size:"small"}},o.BtttonName)])},b=function(e,t,n,i,o){if(console.log(n[o.CheckKey]+","+o.CheckValue+"222"),n[o.CheckKey]==o.CheckValue)return t("Button",{props:{type:"error",loading:n.saving,size:"small"},style:{margin:"0 5px"},on:{click:function(){e.modalmsg=!0,e.checkQuery.id=n.Id,e.checkQuery.posturl=o.PostUrl}}},o.BtttonName)};t.default={name:"canEditTable",props:{refs:String,columnsList:Array,value:Array,url:String,editIncell:{type:Boolean,default:!1},hoverShow:{type:Boolean,default:!1},loading:{type:Boolean,default:!0},updateUrl:String,deleteUrl:String,editMessage:Function,routername:String},data:function(){return{columns:[],thisTableData:[],edittingStore:[],caneditcolumns:[],auditMsg:"",loadingbtn1:!1,modalmsg:!1,checkQuery:{id:0,posturl:""}}},created:function(){this.init()},methods:{init:function(){var e=this,t=this,n=this.columnsList.filter(function(e){if(e.editable&&!0===e.editable)return e});this.caneditcolumns=n;var i=JSON.parse((0,a.default)(this.value)),o=[];o=i.map(function(t,i){var o=!1;if(e.thisTableData[i])if(e.thisTableData[i].editting)o=!0;else for(var a in e.thisTableData[i].edittingCell)!0===e.thisTableData[i].edittingCell[a]&&(o=!0);if(o)return e.thisTableData[i];e.$set(t,"editting",!1);var r={};return n.forEach(function(e){r[e.key]=!1}),e.$set(t,"edittingCell",r),t}),this.thisTableData=o,this.edittingStore=JSON.parse((0,a.default)(this.thisTableData)),this.columnsList.forEach(function(n){n.fixed=n.fixedType,n.editable&&(n.render=function(i,o){var a=e.thisTableData[o.index];return a.editting?i("Input",{props:{type:"text",value:a[n.key]},on:{"on-change":function(e){var n=o.column.key;t.edittingStore[o.index][n]=e.target.value}}}):e.editIncell?i("Row",{props:{type:"flex",align:"middle",justify:"center"}},[i("Col",{props:{span:"22"}},[a.edittingCell[o.column.key]?y(e,i,o,n):i("span",a[n.key])]),i("Col",{props:{span:"2"}},[a.edittingCell[o.column.key]?g(e,i,o):p(e,i,o)])]):i("span",a[n.key])}),n.handle&&(n.render=function(t,i){var o=e.thisTableData[i.index];return t("div",[n.handle.map(function(n,a){var r=void 0;switch(n){case"edit":r=c(e,t,o,i.index);break;case"alertEdit":r=d(e,t,o,i.index);break;case"newPageEdit":r=l(e,t,o,i.index);break;case"delete":r=u(e,t,o,i.index);break;case"select":r=f(e,t,o,i.index);break;case"selectDetail":r=h(e,t,o,i.index);break;case"deliver":r=v(e,t,o,i.index)}return r})])}),n.BtnItems&&n.BtnItems.length>0&&(n.render=function(t,i){var o=e.thisTableData[i.index];return t("div",[n.BtnItems.map(function(n,a){var r=void 0;switch(n.ButtonType){case"auditSuccess":r=k(e,t,o,i.index,n);break;case"auditFail":r=b(e,t,o,i.index,n);break;case"edit":r=c(e,t,o,i.index);break;case"alertEdit":r=d(e,t,o,i.index);break;case"newPageEdit":r=l(e,t,o,i.index);break;case"delete":r=u(e,t,o,i.index);break;case"select":r=f(e,t,o,i.index);break;case"selectDetail":r=h(e,t,o,i.index,n);break;case"deliver":r=v(e,t,o,i.index);break;case"resetPassWord":r=m(e,t,o,i.index,n)}return r})])}),"formatTime"===n.formatType&&(n.render=function(t,i){var o=e.thisTableData[i.index];return t("span",s.default.formatDate(o[n.key]))}),"image"==n.formatType&&(n.render=function(t,i){return t("div",{attrs:{style:"width: 40px;height: 40px;"}},[t("img",{props:{type:"primary",size:"small"},attrs:{src:e.thisTableData[i.index][n.key],style:"width: 40px;height: 40px;border-radius: 2px;"},style:{}})])}),"multiImage"==n.formatType&&(n.render=function(t,i){var o=e.thisTableData[i.index],a=o[n.key].split(",");return t("div",{attrs:{style:"width: 200px;height: 40px;text-align: left;"}},[a.map(function(e,n){return t("img",{props:{type:"primary",size:"small"},attrs:{src:e,style:"width: 40px;height: 40px;border-radius: 2px;padding-right:2px"},style:{}})})])})})},handleBackdata:function(e){var t=JSON.parse((0,a.default)(e));return t.forEach(function(e){delete e.editting,delete e.edittingCell,delete e.saving}),t},sortChange:function(e){this.$emit("on-reload",e.key,e.order)},changeselect:function(e){this.$emit("set-selected",e)},closeModal:function(){this.modalmsg=!1},fail:function(){var e=this;if(e.loadingbtn1=!0,!e.auditMsg)return e.$Message.error("请输入拒绝原因"),void(e.loadingbtn1=!1);var t={};if(!e.checkQuery.id||"0"===e.checkQuery.id)return e.$Message.error("参数有误"),void(e.loadingbtn1=!1);t.Id=e.checkQuery.id,t.AuditMsg=e.auditMsg,s.default.post(e.checkQuery.posturl,t,e,function(t){"1"===t?(e.$emit("reLoad"),e.$Message.success("操作成功"),e.modalmsg=!1,e.auditMsg=""):e.$Message.error("操作失败"),e.loadingbtn1=!1})}},watch:{value:function(e){this.init()}}}},214:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=t.table1Columns=[{title:"序号",type:"index",width:80,align:"center"},{title:"姓名",align:"center",key:"name",editable:!0},{title:"性别",align:"center",key:"sex"},{title:"岗位",align:"center",key:"work",editable:!0},{title:"操作",align:"center",width:120,key:"handle",handle:["delete"]}],o=t.table1Data=[{name:"Aresn",sex:"男",work:"前端开发"},{name:"Lison",sex:"男",work:"前端开发"},{name:"lisa",sex:"女",work:"程序员鼓励师"}],a=t.editInlineColumns=[{title:"序号",type:"index",width:80,align:"center"},{title:"姓名",align:"center",key:"name",width:90,editable:!0},{title:"性别",align:"center",key:"sex"},{title:"岗位",align:"center",key:"work",width:150,editable:!0},{title:"操作",align:"center",width:190,key:"handle",handle:["edit","delete"]}],r=t.editInlineData=[{name:"Aresn",sex:"男",work:"前端开发"},{name:"Lison",sex:"男",work:"前端开发"},{name:"lisa",sex:"女",work:"程序员鼓励师"}],s=t.editIncellColumns=[{title:"序号",type:"index",width:80,align:"center"},{title:"姓名",align:"center",key:"name",width:120,editable:!0},{title:"性别",align:"center",key:"sex"},{title:"岗位",align:"center",width:160,key:"work",editable:!0},{title:"操作",align:"center",width:120,key:"handle",handle:["delete"]}],l=t.editIncellData=[{name:"Aresn",sex:"男",work:"前端开发"},{name:"Lison",sex:"男",work:"前端开发"},{name:"lisa",sex:"女",work:"程序员鼓励师"}],d=t.editInlineAndCellColumn=[{title:"序号",type:"index",width:80,align:"center"},{title:"姓名",align:"center",key:"name",width:300,editable:!0},{title:"性别",align:"center",key:"sex"},{title:"岗位",align:"center",width:300,key:"work",editable:!0},{title:"操作",align:"center",width:200,key:"handle",handle:["select","edit","delete"]}],c=t.editInlineAndCellData=[{name:"Aresn",sex:"男",work:"前端开发"},{name:"Lison",sex:"男",work:"前端开发"},{name:"lisa",sex:"女",work:"程序员鼓励师"}],u=t.showCurrentColumns=[{title:"序号",type:"index",width:80,align:"center"},{title:"姓名",align:"center",key:"name",width:300,editable:!0},{title:"性别",align:"center",key:"sex"},{title:"岗位",align:"center",width:300,key:"work",editable:!0}],h={table1Columns:i,table1Data:o,editInlineColumns:a,editInlineData:r,editIncellColumns:s,editIncellData:l,editInlineAndCellColumn:d,editInlineAndCellData:c,showCurrentColumns:u};t.default=h},215:function(e,t){},216:function(e,t,n){n(215);var i=n(2)(n(213),n(217),null,null);i.options.__file="E:\\zhangfuyuan\\Demo\\vue\\iview-admin-template\\src\\tables\\components\\canEditTable.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] canEditTable.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},217:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Table",{ref:e.refs,attrs:{columns:e.columnsList,loading:e.loading,data:e.thisTableData,border:"","disabled-hover":""},on:{"on-sort-change":e.sortChange,"on-selection-change":e.changeselect}}),e._v(" "),n("Modal",{attrs:{title:"Modal",loading:e.loadingbtn1},model:{value:e.modalmsg,callback:function(t){e.modalmsg=t},expression:"modalmsg"}},[n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.auditMsg,expression:"auditMsg"}],staticClass:"ivu-input",staticStyle:{width:"300px"},attrs:{width:"",autocomplete:"off",placeholder:"请输入拒绝理由"},domProps:{value:e.auditMsg},on:{input:function(t){t.target.composing||(e.auditMsg=t.target.value)}}})]),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"ghost"},on:{click:e.closeModal}},[e._v("取消")]),e._v(" "),n("Button",{attrs:{type:"primary",loading:e.loadingbtn1},on:{click:e.fail}},[e._v("确定")])],1)])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},218:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),a=(i(o),n(216)),r=i(a),s=n(214),l=(i(s),n(18)),d=i(l),c=n(67);i(c);t.default={name:"editable-table",components:{canEditTable:r.default},props:{showSearch:{type:Boolean,default:!1},showDate:{type:Boolean,default:!1},showKeyWord:{type:Boolean,default:!1},showAddButton:{type:Boolean,default:!1},showPage:{type:Boolean,default:!1},submitbtn:{type:Boolean,default:!0},laststepbtn:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},updateUrl:String,deleteUrl:String,addUrl:String,getUrl:String,formCustom:Object,ruleCustom:Object,modalWidth:{type:Number,default:500},modalLabel:Number,routername:String,otherQuery:Object,modalList:{type:Boolean,default:!1},modalSelect:Array,recommendType:Number,defaultSidx:String},data:function(){return{selectedData:"1",editInlineAndCellColumn:[],editInlineAndCellData:[],loading:!1,loading2:!1,loadingTable:!0,searchConName3:"",formatDate:"yyyy-MM-dd",showFrom:!1,showModalList:!1,totalCount:0,current:1,query:{Page:1,Rows:20,KeyWord:"",StartDate:"",EndDate:"",Sidx:"Id",Sord:"desc"}}},methods:{reLoad:function(){this.getData()},getData:function(){this.loadingTable=!0;var e=this.query,t=this.otherQuery;for(var n in t)e[n]=t[n];var i=this;console.log(e),d.default.post(i.getUrl,e,i,function(e,t){"1"===e?(i.totalCount=t.totalCount,i.loadingTable=!1,i.editInlineAndCellColumn=t.columns,t.totalCount>0?i.editInlineAndCellData=t.data:i.editInlineAndCellData=[]):(i.$Message.error("数据获取失败"),i.loadingTable=!1)})},search:function(){this.getData()},cancelSearch:function(){this.query.KeyWord="",this.query.StartDate="",this.query.EndDate="",this.getData()},addModal:function(){this.modalList?this.showModalList=!0:(this.showFrom=!0,this.$emit("set-form"))},transfer:function(){this.showFrom=!0},saveInfo:function(){var e=this;this.loading2=!0,this.$refs.formCustom.validate(function(t){if(!t)return console.log("error submit!!"),e.loading2=!1,!1;var n=e,i=e.formCustom;d.default.post(e.addUrl,i,n,function(e,t){"1"===e?(n.$Message.success("保存成功"),n.getData(),n.loading2=!1,i.Id>0?n.showFrom=!1:n.$emit("set-form")):(t&&""!=t?n.$Message.error(t):n.$Message.error("保存失败"),n.loading2=!1)})})},closeModal:function(){this.showFrom=!1},closeModalList:function(){this.showModalList=!1},changePage:function(e){this.query.Page=e,this.getData()},reload:function(e,t){this.query.Sidx=e,this.query.Sord=t,this.getData()},setForm:function(e){this.showFrom=!0,this.$emit("set-form",e)},checkInfo:function(){var e=this;this.loading2=!0;var t=e.modalSelect;if(!t||t.length<=0)return e.$Message.error("未选择任何项"),void(this.loading2=!1);var n={TypeId:e.recommendType,Ids:t.toString()};d.default.post(this.addUrl,n,e,function(t,n){"1"===t?(e.$Message.success("保存成功"),e.getData(),e.loading2=!1,e.showModalList=!1):(n&&""!=n?e.$Message.error(n):e.$Message.error("保存失败"),e.loading2=!1)})},setSelected:function(e){var t=[];e.forEach(function(e){t.push(e.Id)}),this.$emit("set-Select",t)},getSelected:function(){return this.modalSelect}},mounted:function(){this.defaultSidx&&(this.query.Sidx=this.defaultSidx),this.getData()},watch:{$route:"getData"}}},219:function(e,t){},220:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Card",[n("Row",[e.showSearch?[e.showDate?n("DatePicker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"请选择开始日期",format:e.formatDate},model:{value:e.query.StartDate,callback:function(t){e.$set(e.query,"StartDate",t)},expression:"query.StartDate"}}):e._e(),e._v(" "),e.showDate?n("DatePicker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"请选择结束日期",format:e.formatDate},model:{value:e.query.EndDate,callback:function(t){e.$set(e.query,"EndDate",t)},expression:"query.EndDate"}}):e._e(),e._v(" "),e.showKeyWord?n("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入关键字搜搜..."},model:{value:e.query.KeyWord,callback:function(t){e.$set(e.query,"KeyWord",t)},expression:"query.KeyWord"}}):e._e(),e._v(" "),n("template",{slot:"searchslot"}),e._v(" "),n("span",{staticStyle:{margin:"0 10px"},on:{click:e.search}},[n("Button",{attrs:{type:"primary",loading:e.loading,icon:"search"}},[e._v("搜索")])],1),e._v(" "),n("Button",{attrs:{type:"ghost"},on:{click:e.cancelSearch}},[e._v("取消")])]:e._e(),e._v(" "),[n("div",{staticStyle:{float:"right"}},[e.showAddButton?n("span",{on:{click:e.addModal}},[n("Button",{attrs:{type:"primary",icon:"add"}},[e._v("新增")])],1):e._e(),e._v(" "),e._t("rightbtn")],2)]],2),e._v(" "),n("Row",[n("div",{staticClass:"margin-top-10"},[n("can-edit-table",{attrs:{refs:"table4","hover-show":!0,editIncell:!0,"columns-list":e.editInlineAndCellColumn,loading:e.loadingTable,"update-url":e.updateUrl,"delete-url":e.deleteUrl,routername:e.routername},on:{"on-reload":e.reload,"set-form":e.setForm,"set-selected":e.setSelected,reLoad:e.reLoad},model:{value:e.editInlineAndCellData,callback:function(t){e.editInlineAndCellData=t},expression:"editInlineAndCellData"}})],1),e._v(" "),1!=e.modalList?n("Modal",{attrs:{width:e.modalWidth,scrollable:e.scrollable},model:{value:e.showFrom,callback:function(t){e.showFrom=t},expression:"showFrom"}},[e._t("fromtop"),e._v(" "),n("Form",{ref:"formCustom",attrs:{model:e.formCustom,rules:e.ruleCustom,"label-width":80}},[e._t("frommodel")],2),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"ghost"},on:{click:e.closeModal}},[e._v("取消")]),e._v(" "),e.submitbtn?n("Button",{attrs:{type:"primary",loading:e.loading2},on:{click:e.saveInfo}},[e._v("确定")]):e._e()],1)],2):e._e(),e._v(" "),e.modalList?n("Modal",{attrs:{width:e.modalWidth,scrollable:e.scrollable},model:{value:e.showModalList,callback:function(t){e.showModalList=t},expression:"showModalList"}},[[e._t("ModalList"),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"ghost"},on:{click:e.closeModalList}},[e._v("取消")]),e._v(" "),e.submitbtn?n("Button",{attrs:{type:"primary",loading:e.loading2},on:{click:e.checkInfo}},[e._v("选择")]):e._e()],1)]],2):e._e()],1),e._v(" "),e.showPage?n("Row",[n("div",{staticClass:"margin-top-10",staticStyle:{float:"left"}},[n("Page",{attrs:{total:e.totalCount,"page-size":e.query.Rows,current:e.query.page},on:{"on-change":e.changePage}})],1)]):e._e()],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},225:function(e,t,n){e.exports={default:n(226),__esModule:!0}},226:function(e,t,n){n(228),e.exports=n(3).Object.assign},227:function(e,t,n){"use strict";var i=n(20),o=n(45),a=n(26),r=n(27),s=n(68),l=Object.assign;e.exports=!l||n(13)(function(){var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach(function(e){t[e]=e}),7!=l({},e)[n]||Object.keys(l({},t)).join("")!=i})?function(e,t){for(var n=r(e),l=arguments.length,d=1,c=o.f,u=a.f;l>d;)for(var h,m=s(arguments[d++]),f=c?i(m).concat(c(m)):i(m),p=f.length,g=0;p>g;)u.call(m,h=f[g++])&&(n[h]=m[h]);return n}:l},228:function(e,t,n){var i=n(19);i(i.S+i.F,"Object",{assign:n(227)})},231:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(233),a=i(o),r=n(225),s=i(r),l=n(18),d=i(l);t.default=(0,a.default)({name:"treeGrid",props:{updateUrl:String,deleteUrl:String,addUrl:String,getUrl:String,formCustom:Object,ruleCustom:Object,modalWidth:Number,modalLabel:Number},data:function(){return{initItems:[],cloneColumns:[],checkGroup:[],checks:!1,screenWidth:document.body.clientWidth,tdsWidth:0,timer:!1,dataLength:0,showFrom:!1,loading2:!1,editItem:"",loadingTable:!1,columns:[],items:[],query:{Page:1,Rows:10,KeyWord:"",StartDate:"",EndDate:"",Sidx:"Id",Sord:"desc"}}},computed:{tableWidth:function(){return this.tdsWidth>this.screenWidth&&this.screenWidth>0?this.screenWidth+"px":"100%"}},watch:{screenWidth:function(e){var t=this;this.timer||(this.screenWidth=e,this.timer=!0,setTimeout(function(){t.timer=!1},400))},items:function(){this.items&&(this.dataLength=this.Length(this.items),this.initData(this.deepCopy(this.items),1,null),this.checkGroup=this.renderCheck(this.items),this.checkGroup.length==this.dataLength?this.checks=!0:this.checks=!1)},columns:{handler:function(){this.cloneColumns=this.makeColumns()},deep:!0},checkGroup:function(e){this.checkAllGroupChange(e)}},mounted:function(){var e=this;this.items&&(this.dataLength=this.Length(this.items),this.initData(this.deepCopy(this.items),1,null),this.cloneColumns=this.makeColumns(),this.checkGroup=this.renderCheck(this.items),this.checkGroup.length==this.dataLength?this.checks=!0:this.checks=!1),this.$nextTick(function(){e.screenWidth=document.body.clientWidth}),window.onresize=function(){return function(){window.screenWidth=document.body.clientWidth,e.screenWidth=window.screenWidth}()}},methods:(0,a.default)({iconRow:function(){for(var e=0,t=this.columns.length;e<t;e++)if("selection"==this.columns[e].type)return 1;return 0},tdStyle:function(e){var t={};return e.align&&(t["text-align"]=e.align),e.width&&(t["min-width"]=e.width+"px"),t},handleSort:function(e,t){this.cloneColumns.forEach(function(e){return e._sortType="normal"}),this.cloneColumns[e]._sortType===t?this.cloneColumns[e]._sortType="normal":this.cloneColumns[e]._sortType=t,this.$emit("on-sort-change",this.cloneColumns[e].key,this.cloneColumns[e]._sortType)},RowClick:function(e,t,n,i){var o=this.makeData(e);"编辑"===i&&(this.showFrom=!0,this.$emit("set-form",this.items,o))},RowDelete:function(e){var t=this,n={};e.Id&&"0"!==e.Id&&(n.Id=e.Id),d.default.post(t.deleteUrl,n,t,function(e){"1"===e?(t.$Message.success("删除成功"),t.getData()):t.$Message.error("删除失败")})},makeData:function(e){var t=this.type(e),n=void 0;if("array"===t)n=[];else{if("object"!==t)return e;n={}}if("array"===t)for(var i=0;i<e.length;i++)n.push(this.makeData(e[i]));else if("object"===t)for(var o in e)"spaceHtml"!=o&&"parent"!=o&&"level"!=o&&"expanded"!=o&&"isShow"!=o&&"load"!=o&&(n[o]=this.makeData(e[o]));return n},makeColumns:function(){var e=this,t=this.deepCopy(this.columns);return this.tdsWidth=0,t.forEach(function(t,n){t._index=n,t._width=t.width?t.width:"",t._sortType="normal",e.tdsWidth+=t.width?parseFloat(t.width):0}),t},initData:function(e,t,n){var i=this;this.initItems=[];for(var o="",a=1;a<t;a++)o+="<i class='ms-tree-space'></i>";e.forEach(function(e,a){e=(0,s.default)({},e,{parent:n,level:t,spaceHtml:o}),void 0===e.expanded&&(e=(0,s.default)({},e,{expanded:!1})),void 0===e.show&&(e=(0,s.default)({},e,{isShow:!1})),e=(0,s.default)({},e,{load:!!e.expanded}),i.initItems.push(e),e.Childrens&&e.expanded&&i.initData(e.Childrens,t+1,e)})},show:function(e){return 1==e.level||e.parent&&e.parent.expanded&&e.isShow},toggle:function(e,t){for(var n=this,i=t.level+1,o="",a=1;a<i;a++)o+="<i class='ms-tree-space'></i>";t.Childrens&&(t.expanded?(t.expanded=!t.expanded,this.close(e,t)):(t.expanded=!t.expanded,t.load?this.open(e,t):(t.load=!0,t.Childrens.forEach(function(a,r){n.initItems.splice(e+r+1,0,a),n.$set(n.initItems[e+r+1],"parent",t),n.$set(n.initItems[e+r+1],"level",i),n.$set(n.initItems[e+r+1],"spaceHtml",o),n.$set(n.initItems[e+r+1],"isShow",!0),n.$set(n.initItems[e+r+1],"expanded",!1)}))))},open:function(e,t){var n=this;t.Childrens&&t.Childrens.forEach(function(t,i){t.isShow=!0,t.Childrens&&t.expanded&&n.open(e+i+1,t)})},close:function(e,t){var n=this;t.Childrens&&t.Childrens.forEach(function(t,i){t.isShow=!1,t.expanded=!1,t.Childrens&&n.close(e+i+1,t)})},handleCheckAll:function(){this.checks=!this.checks,this.checks?this.checkGroup=this.getArray(this.checkGroup.concat(this.All(this.items))):this.checkGroup=[]},getArray:function(e){for(var t={},n=e.length,i=[],o=0;o<n;o++)t[e[o]]||(t[e[o]]=!0,i.push(e[o]));return i},checkAllGroupChange:function(e){this.dataLength>0&&e.length===this.dataLength?this.checks=!0:this.checks=!1,this.$emit("on-selection-change",this.checkGroup)},All:function(e){var t=this,n=[];return e.forEach(function(e){n.push(e.id),e.Childrens&&e.Childrens.length>0&&(n=n.concat(t.All(e.Childrens)))}),n},Length:function(e){var t=this,n=e.length;return e.forEach(function(e){e.Childrens&&(n+=t.Length(e.Childrens))}),n},renderHeader:function(e,t){return"renderHeader"in this.columns[t]?this.columns[t].renderHeader(e,t):e.title||"#"},renderBody:function(e,t,n){return e[t.key]},renderCheck:function(e){var t=this,n=[];return e.forEach(function(e){e._checked&&n.push(e.id),e.Childrens&&e.Childrens.length>0&&(n=n.concat(t.renderCheck(e.Childrens)))}),n},deepCopy:function(e){var t,n,i,o=this.type(e);if("array"===o)t=[];else{if("object"!==o)return e;t={}}if("array"===o){for(n=0,i=e.length;n<i;n++)t.push(this.deepCopy(e[n]));return t}if("object"===o){for(n in e)t[n]=this.deepCopy(e[n]);return t}},type:function(e){var t=Object.prototype.toString;return{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"}[t.call(e)]},addModal:function(){this.showFrom=!0},saveInfo:function(){var e=this;this.loading2=!0,this.$refs.formCustom.validate(function(t){if(!t)return console.log("error submit!!"),e.loading2=!1,!1;var n=e,i=e.formCustom;d.default.post(e.addUrl,i,n,function(e,t){"1"===e?(n.$Message.success("保存成功"),n.getData(),n.loading2=!1,n.showFrom=!1):(t&&""!=t?n.$Message.error(t):n.$Message.error("保存失败"),n.getData(),n.loading2=!1)})})},getData:function(){this.loadingTable=!0;var e=this.query,t=this;d.default.post(t.getUrl,e,t,function(e,n){"1"===e?(t.totalCount=n.totalCount,t.loadingTable=!1,t.columns=n.columns,n.totalCount>0?t.items=n.data:t.items=[]):(t.$Message.error("数据获取失败"),t.loadingTable=!1)})},closeModal:function(){this.showFrom=!1}},"addModal",function(){this.showFrom=!0,this.$emit("set-form",this.items)}),beforeDestroy:function(){window.onresize=null}},"mounted",function(){this.getData()})},232:function(e,t,n){e.exports={default:n(234),__esModule:!0}},233:function(e,t,n){"use strict";t.__esModule=!0;var i=n(232),o=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=function(e,t,n){return t in e?(0,o.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},234:function(e,t,n){n(235);var i=n(3).Object;e.exports=function(e,t,n){return i.defineProperty(e,t,n)}},235:function(e,t,n){var i=n(19);i(i.S+i.F*!n(9),"Object",{defineProperty:n(6).f})},236:function(e,t){},239:function(e,t,n){n(236);var i=n(2)(n(231),n(241),null,null);i.options.__file="E:\\zhangfuyuan\\Demo\\vue\\iview-admin-template\\src\\views\\main-components\\treegrid.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] treegrid.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},241:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Card",[n("Row",[n("div",{staticStyle:{float:"right"}},[n("span",{on:{click:e.addModal}},[n("Button",{attrs:{type:"primary",icon:"add"}},[e._v("新增")])],1)])]),e._v(" "),n("Row",{staticClass:"margin-top-10"},[n("div",{staticClass:"autoTbale",style:{width:e.tableWidth}},[n("table",{staticClass:"table table-bordered",attrs:{id:"hl-tree-table",loading:e.loadingTable}},[n("thead",[n("tr",e._l(e.cloneColumns,function(t,i){return n("th",["selection"===t.type?n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checks,expression:"checks"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checks)?e._i(e.checks,null)>-1:e.checks},on:{click:e.handleCheckAll,change:function(t){var n=e.checks,i=t.target,o=!!i.checked;if(Array.isArray(n)){var a=e._i(n,null);i.checked?a<0&&(e.checks=n.concat([null])):a>-1&&(e.checks=n.slice(0,a).concat(n.slice(a+1)))}else e.checks=o}}})]):n("label",[e._v("\n                                  "+e._s(e.renderHeader(t,i))+"\n                                  "),t.sortable?n("span",{staticClass:"ivu-table-sort"},[n("Icon",{class:{on:"asc"===t._sortType},attrs:{type:"arrow-up-b"},nativeOn:{click:function(t){e.handleSort(i,"asc")}}}),e._v(" "),n("Icon",{class:{on:"desc"===t._sortType},attrs:{type:"arrow-down-b"},nativeOn:{click:function(t){e.handleSort(i,"desc")}}})],1):e._e()])])}))]),e._v(" "),n("tbody",e._l(e.initItems,function(t,i){return n("tr",{directives:[{name:"show",rawName:"v-show",value:e.show(t),expression:"show(item)"}],key:t.id,class:{"child-tr":t.parent}},e._l(e.columns,function(o,a){return n("td",{key:o.key,style:e.tdStyle(o)},["selection"===o.type?n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checkGroup,expression:"checkGroup"}],attrs:{type:"checkbox"},domProps:{value:t.id,checked:Array.isArray(e.checkGroup)?e._i(e.checkGroup,t.id)>-1:e.checkGroup},on:{change:function(n){var i=e.checkGroup,o=n.target,a=!!o.checked;if(Array.isArray(i)){var r=t.id,s=e._i(i,r);o.checked?s<0&&(e.checkGroup=i.concat([r])):s>-1&&(e.checkGroup=i.slice(0,s).concat(i.slice(s+1)))}else e.checkGroup=a}}})]):e._e(),e._v(" "),e._l(o.handle,function(a){return"handle"===o.type?["删除"===a?n("Poptip",{staticClass:"ivu-poptip",attrs:{confirm:"",title:"您确认删除这条内容吗？"},on:{"on-ok":function(n){e.RowDelete(t)}}},[n("Button",{key:a,attrs:{type:"error",size:"small"}},[e._v(e._s(a))])],1):e._e(),e._v(" "),"删除"!==a?n("Button",{key:a,staticStyle:{margin:"0px 5px"},attrs:{type:"primary",size:"small"},on:{click:function(n){e.RowClick(t,n,i,a)}}},[e._v(e._s(a))]):e._e()]:e._e()}),e._v(" "),o.type?e._e():n("label",{on:{click:function(n){e.toggle(i,t)}}},[a==e.iconRow()?n("span",[n("i",{domProps:{innerHTML:e._s(t.spaceHtml)}}),e._v(" "),t.Childrens&&t.Childrens.length>0?n("i",{staticClass:"ivu-icon",class:{"ivu-icon-plus-circled":!t.expanded,"ivu-icon-minus-circled":t.expanded}}):n("i",{staticClass:"ms-tree-space"})]):e._e(),e._v(" "+e._s(e.renderBody(t,o))+"\n                              ")])],2)}))}))]),e._v(" "),n("Modal",{attrs:{width:e.modalWidth,closable:!1},on:{"on-cancel":e.closeModal},model:{value:e.showFrom,callback:function(t){e.showFrom=t},expression:"showFrom"}},[n("Form",{ref:"formCustom",attrs:{model:e.formCustom,rules:e.ruleCustom,"label-width":80}},[e._t("formmodel")],2),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"ghost"},on:{click:e.closeModal}},[e._v("取消")]),e._v(" "),n("Button",{attrs:{type:"primary",loading:e.loading2},on:{click:e.saveInfo}},[e._v("确定")])],1)],1)],1)])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},272:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(239),a=i(o),r=n(212),s=(i(r),n(211));t.default={name:"arealist-table",components:{TreeGrid:a.default},data:function(){return{columns:[],data:[],updateUrl:"admin/Area/AddOrUpdate",deleteUrl:"admin/Area/Delete",addUrl:"admin/Area/AddOrUpdate",getUrl:"admin/Area/GetList",formCustom:{Id:0,Name:"",Sort:99,ParentId:0},ruleCustom:{Name:[{validator:s.validateRequired,trigger:"blur"}],Sort:[{validator:s.validateNum,trigger:"blur"}]},modalWidth:500,defaultIcon:[],categorylist:[],selectcategoryname:"一级分类"}},methods:{getresult:function(e){e.length>0&&(this.formCustom.Icon=e[0].url)},setForm:function(e,t){var n=[{id:0,name:"一级分类",depth:1}];if(e.forEach(function(e){var t={id:e.Id,name:"--"+e.Name};n.push(t),e.Childrens.forEach(function(e){var t={id:e.Id,name:"----"+e.Name};n.push(t)})}),this.categorylist=n,t)for(var i in this.formCustom){if("Icon"===i){var o=[{name:"",url:t[i],status:"finished"}];this.defaultIcon=o}this.formCustom[i]=t[i]}else this.formCustom.Id=0,this.formCustom.Name="",this.formCustom.Sort=99,this.formCustom.ParentId=0,this.defaultIcon=[]},checkcategory:function(e,t){console.log(t)},setclist:function(e){categorylist=e}}}},297:function(e,t){},324:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tree-grid",{attrs:{items:e.data,columns:e.columns,modalWidth:500,"update-url":e.updateUrl,"delete-url":e.deleteUrl,"add-url":e.addUrl,"get-url":e.getUrl,"form-custom":e.formCustom,"rule-custom":e.ruleCustom},on:{"set-form":e.setForm,"set-clist":e.setclist}},[n("template",{slot:"formmodel"},[n("FormItem",{attrs:{label:"上级分类",prop:"ParentId"}},[n("Select",{staticStyle:{width:"200px"},on:{"on-change":e.checkcategory},model:{value:e.formCustom.ParentId,callback:function(t){e.$set(e.formCustom,"ParentId",t)},expression:"formCustom.ParentId"}},e._l(e.categorylist,function(t){return n("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])}))],1),e._v(" "),n("FormItem",{attrs:{label:"名称",prop:"Name"}},[n("Input",{staticStyle:{width:"300px"},attrs:{type:"text"},model:{value:e.formCustom.Name,callback:function(t){e.$set(e.formCustom,"Name",t)},expression:"formCustom.Name"}})],1),e._v(" "),n("FormItem",{attrs:{label:"排序值",prop:"Sort"}},[n("Input",{staticStyle:{width:"100px"},attrs:{type:"text",number:!0},model:{value:e.formCustom.Sort,callback:function(t){e.$set(e.formCustom,"Sort",t)},expression:"formCustom.Sort"}})],1)],1)],2)},staticRenderFns:[]},e.exports.render._withStripped=!0}});