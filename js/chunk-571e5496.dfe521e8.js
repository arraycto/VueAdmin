(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-571e5496"],{"4fc1":function(t,e,a){},bb51:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{staticClass:"contain"},[i("div",{staticClass:"sys"},[i("img",{attrs:{src:a("b640")}}),i("div",{staticClass:"manager"},[t._v(" Mrxkin "),i("span",[t._v("超级管理员")]),i("el-divider"),t._m(0)],1)]),i("div",{staticClass:"information"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("待办事项")]),i("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("添加")])],1),i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark","show-header":!1,height:"150px"},on:{select:t.selectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),i("el-table-column",{attrs:{prop:"youNeedDo","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{class:{"todo-item":!0,"todo-item-del":e.row.selected}},[t._v(t._s(e.row.youNeedDo))])]}}])}),i("el-table-column",{attrs:{fixed:"right",width:"50"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("i",{staticClass:"el-icon-edit"}),i("i",{staticClass:"el-icon-delete"})]}}])})],1)],1)],1)]),i("el-divider",{attrs:{"content-position":"center"}},[t._v("VueAdmin power by Mrxkin")]),i("div",{staticClass:"contain2"},[i("v-chart",{staticClass:"echart",attrs:{options:t.options}})],1),i("div",{staticClass:"contain2"},[i("v-chart",{staticClass:"echart",attrs:{options:t.options2,id:"echart"}})],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loginDeatils"},[a("div",[a("span",{staticClass:"mr-100"},[t._v("上次登陆时间:")]),a("span",[t._v("2020-1-1")])]),a("div",[a("span",{staticClass:"mr-100"},[t._v("上次登录地点:")]),a("span",[t._v("深圳")])])])}],o=(a("4160"),a("159b"),{data:function(){return{tableData:[{id:"1",selected:!0,youNeedDo:"今天要修复100个bug"},{id:"2",selected:!1,youNeedDo:"今天要修复100个bug"},{id:"3",selected:!0,youNeedDo:"今天要修复100个bug"},{id:"4",selected:!1,youNeedDo:"今天要修复100个bug"},{id:"5",selected:!1,youNeedDo:"今天要修复100个bug"},{id:"6",selected:!1,youNeedDo:"今天要修复100个bug"},{id:"7",selected:!1,youNeedDo:"今天要修复100个bug"},{id:"8",selected:!1,youNeedDo:"今天要修复100个bug"}],options:{title:{text:"basic line chart"},tooltip:{trigger:"none",axisPointer:{type:"cross"}},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line"}]},options2:{title:{text:"特性示例：渐变色 阴影 点击缩放",subtext:"Feature Sample: Gradient Color, Shadow, Click Zoom"},tooltip:{trigger:"none",axisPointer:{type:"cross"}},xAxis:{data:["点","击","柱","子","或","者","两","指","在","触","屏","上","滑","动","能","够","自","动","缩","放"],axisLabel:{inside:!0,textStyle:{color:"#fff"}},axisTick:{show:!1},axisLine:{show:!1},z:10},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#999"}}},dataZoom:[{type:"inside"}],series:[{type:"bar",itemStyle:{color:"rgba(0,0,0,0.05)"},barGap:"-100%",barCategoryGap:"40%",data:[500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500],animation:!1},{type:"bar",data:[220,182,191,234,290,330,310,123,442,321,90,149,210,122,133,334,198,123,125,220]}]}}},methods:{isExist:function(t,e){for(var a=0;a<t.length;a++)if(t[a].id==e.id)return!0;return!1},selectionChange:function(t){var e=this;this.tableData.forEach((function(a,i){e.isExist(t,a)?e.tableData[i].selected=!0:e.tableData[i].selected=!1}))},charTwoClick:function(){var t=this,e=this.$echarts.init(document.getElementById("echart")),a=6;e.on("click",(function(i){e.dispatchAction({type:"dataZoom",startValue:t.options2.xAxis.data[Math.max(i.dataIndex-a/2,0)],endValue:t.options2.xAxis.data[Math.min(i.dataIndex+a/2,t.options2.series[1].data.length-1)]})}))}},mounted:function(){var t=this;this.tableData.forEach((function(e,a){e.selected&&t.$refs.multipleTable.toggleRowSelection(t.tableData[a],!0)})),this.charTwoClick()}}),n=o,l=(a("c219"),a("2877")),c=Object(l["a"])(n,i,s,!1,null,null,null);e["default"]=c.exports},c219:function(t,e,a){"use strict";var i=a("4fc1"),s=a.n(i);s.a}}]);