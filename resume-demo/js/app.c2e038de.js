(function(t){function a(a){for(var s,n,o=a[0],l=a[1],c=a[2],m=0,d=[];m<o.length;m++)n=o[m],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(a);while(d.length)d.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,o=1;o<e.length;o++){var l=e[o];0!==i[l]&&(s=!1)}s&&(r.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},i={app:0},r=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var u=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("85ec"),i=e.n(s);i.a},2332:function(t,a,e){"use strict";var s=e("356e"),i=e.n(s);i.a},2917:function(t,a,e){"use strict";var s=e("af41"),i=e.n(s);i.a},"356e":function(t,a,e){},"464a":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("aHeader",{on:{setNavShow:t.setNavShow}}),e("div",{directives:[{name:"show",rawName:"v-show",value:0===t.navNum,expression:"navNum === 0"}],staticClass:"editArea"},[e("section",{staticClass:"moudular-area"},[e("aMoudular",{on:{getItem:t.getItem}})],1),e("section",{staticClass:"edit-area"},[e("aEdit",{attrs:{itemData:t.itemData,index:this.itemData},on:{setData:t.setData}})],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:1===t.navNum,expression:"navNum === 1"}],staticClass:"detail-area"},[t._m(0),e("aDetail",{staticClass:"aDetail"})],1)],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav"},[e("a",{attrs:{href:"#info"}},[t._v("基本信息")]),e("a",{attrs:{href:"#work"}},[t._v("工作经历")]),e("a",{attrs:{href:"#project"}},[t._v("开源项目及作品")]),e("a",{attrs:{href:"#skill"}},[t._v("专业技能")]),e("a",{attrs:{href:"#edu"}},[t._v("教育经历")])])}],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aHeader"},[e("ul",{staticClass:"link"},[e("li",{class:{active:0===t.activeNum},on:{click:function(a){return t.goto("create",0)}}},[t._v("引导创建")]),e("li",{class:{active:1===t.activeNum},on:{click:function(a){return t.goto("preview",1)}}},[t._v("预览编辑")])])])},o=[],l={data:function(){return{activeNum:0}},methods:{goto:function(t,a){this.activeNum=a,this.$emit("setNavShow",a)}}},c=l,u=(e("fa03"),e("2877")),m=Object(u["a"])(c,n,o,!1,null,"98335796",null),d=m.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"moudular"},[e("ul",{staticClass:"moudular-list"},t._l(t.modularArr,(function(a,s){return e("li",{key:"modular"+s,staticClass:"mItem",on:{click:function(e){return t.selectItem(s,a)}}},[e("span",{class:{active:s===t.modularNum}},[t._v(t._s(a.text))]),e("section",{staticClass:"operator"},[a.canDel?e("span",{staticClass:"del",on:{click:function(e){return e.stopPropagation(),t.opera(0,s,a)}}}):t._e(),a.canAdd?e("span",{staticClass:"add",on:{click:function(e){return e.stopPropagation(),t.opera(1,s,a)}}}):t._e()])])})),0)])},v=[],f=(e("a434"),e("2909")),h={data:function(){return{modularNum:0,editItem:{},modularArr:[]}},created:function(){var t=this.$function.getAllDataArr();this.modularArr=Object(f["a"])(t.modularArr),console.log("获取数据",t.modularArr)},mounted:function(){console.log("mounted",this.modularArr),this.editItem=Object.assign({},this.modularArr[this.modularNum]),window.localStorage.setItem("modularNum",this.modularNum)},watch:{"modularArr.length":function(t){1===t&&(this.modularNum=0)},modularNum:function(t){window.localStorage.setItem("modularNum",t)}},methods:{selectItem:function(t,a){console.log("selectItem",this.modularArr),this.modularNum=t,this.$emit("getItem",this.modularArr[t]),console.log(a)},opera:function(t,a){var e=Object.assign({},this.modularArr[a]),s=Object(f["a"])(this.modularArr);0===t?s.splice(a,1):s.splice(a,0,e),this.modularArr=Object(f["a"])(s),this.$function.setDataArr(Object(f["a"])(s))}}},b=h,D=(e("9dc9"),Object(u["a"])(b,p,v,!1,null,"7d321fcb",null)),w=D.exports,_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"edits"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.alertFlag,expression:"alertFlag"}],staticClass:"alert"},[t._v(t._s(t.msg))]),e("div",{staticClass:"aTitle"},[t._v(t._s(t.itemData.text))]),e("section",{directives:[{name:"show",rawName:"v-show",value:"base1"===t.itemData.key,expression:"itemData.key === 'base1'"}]},[e("aInput",{attrs:{label:"姓名",placeholder:"陈媛媛 Abbey"},model:{value:t.itemData.name,callback:function(a){t.$set(t.itemData,"name",a)},expression:"itemData.name"}}),e("aInput",{attrs:{label:"学历",placeholder:"本科"},model:{value:t.itemData.edu,callback:function(a){t.$set(t.itemData,"edu",a)},expression:"itemData.edu"}}),e("aInput",{attrs:{label:"性别",placeholder:"男"},model:{value:t.itemData.sex,callback:function(a){t.$set(t.itemData,"sex",a)},expression:"itemData.sex"}}),e("aInput",{attrs:{label:"电话",placeholder:"138-8888-8888"},model:{value:t.itemData.phone,callback:function(a){t.$set(t.itemData,"phone",a)},expression:"itemData.phone"}}),e("aInput",{attrs:{label:"邮箱",placeholder:"abbey@email.com"},model:{value:t.itemData.email,callback:function(a){t.$set(t.itemData,"email",a)},expression:"itemData.email"}}),e("aInput",{attrs:{label:"地址",placeholder:"深圳"},model:{value:t.itemData.address,callback:function(a){t.$set(t.itemData,"address",a)},expression:"itemData.address"}}),e("aInput",{attrs:{label:"工作年限",placeholder:"n年"},model:{value:t.itemData.year,callback:function(a){t.$set(t.itemData,"year",a)},expression:"itemData.year"}}),e("aInput",{attrs:{label:"求职意向",placeholder:"web前端"},model:{value:t.itemData.work,callback:function(a){t.$set(t.itemData,"work",a)},expression:"itemData.work"}}),e("span",{staticClass:"t"},[t._v("社交信息(选填)")]),e("aInput",{attrs:{label:"个人网站",placeholder:"weifun.club"},model:{value:t.itemData.site,callback:function(a){t.$set(t.itemData,"site",a)},expression:"itemData.site"}}),e("aInput",{attrs:{label:"gitHub",placeholder:"github.com/weithesky"},model:{value:t.itemData.github,callback:function(a){t.$set(t.itemData,"github",a)},expression:"itemData.github"}}),e("aInput",{attrs:{label:"微信",placeholder:"微信"},model:{value:t.itemData.wechat,callback:function(a){t.$set(t.itemData,"wechat",a)},expression:"itemData.wechat"}}),e("span",{staticClass:"saveBtn",on:{click:function(a){return t.save(1)}}},[t._v("保存")])],1),e("section",{directives:[{name:"show",rawName:"v-show",value:"base2"===t.itemData.key,expression:"itemData.key === 'base2'"}],staticClass:"base2"},[e("aInput",{attrs:{placeholder:"公司名称"},model:{value:t.itemData.company,callback:function(a){t.$set(t.itemData,"company",a)},expression:"itemData.company"}}),e("aInput",{attrs:{placeholder:"所在城市"},model:{value:t.itemData.city,callback:function(a){t.$set(t.itemData,"city",a)},expression:"itemData.city"}}),e("aInput",{attrs:{placeholder:"职位"},model:{value:t.itemData.job,callback:function(a){t.$set(t.itemData,"job",a)},expression:"itemData.job"}}),e("aInput",{attrs:{placeholder:"起止时间"},model:{value:t.itemData.time,callback:function(a){t.$set(t.itemData,"time",a)},expression:"itemData.time"}}),e("span",{staticClass:"t"},[t._v("工作内容")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.itemData.workcontent,expression:"itemData.workcontent"}],ref:"baseEdit2",staticClass:"editTextArea",domProps:{value:t.itemData.workcontent},on:{input:function(a){a.target.composing||t.$set(t.itemData,"workcontent",a.target.value)}}}),e("span",{staticClass:"saveBtn",on:{click:function(a){return t.save(2)}}},[t._v("保存")])],1),e("section",{directives:[{name:"show",rawName:"v-show",value:"base3"===t.itemData.key,expression:"itemData.key === 'base3'"}],staticClass:"base3"},[e("aInput",{attrs:{placeholder:"项目名称"},model:{value:t.itemData.project,callback:function(a){t.$set(t.itemData,"project",a)},expression:"itemData.project"}}),e("aInput",{attrs:{placeholder:"所在城市"},model:{value:t.itemData.city,callback:function(a){t.$set(t.itemData,"city",a)},expression:"itemData.city"}}),e("aInput",{attrs:{placeholder:"你的角色"},model:{value:t.itemData.job,callback:function(a){t.$set(t.itemData,"job",a)},expression:"itemData.job"}}),e("aInput",{attrs:{placeholder:"起止时间"},model:{value:t.itemData.time,callback:function(a){t.$set(t.itemData,"time",a)},expression:"itemData.time"}}),e("span",{staticClass:"t"},[t._v("经历描述")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.itemData.workcontent,expression:"itemData.workcontent"}],ref:"baseEdit3",staticClass:"editTextArea",domProps:{value:t.itemData.workcontent},on:{input:function(a){a.target.composing||t.$set(t.itemData,"workcontent",a.target.value)}}}),e("span",{staticClass:"saveBtn",on:{click:function(a){return t.save(3)}}},[t._v("保存")])],1),e("section",{directives:[{name:"show",rawName:"v-show",value:"base4"===t.itemData.key,expression:"itemData.key === 'base4'"}],staticClass:"base4"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.itemData.majorcontent,expression:"itemData.majorcontent"}],ref:"baseEdit4",staticClass:"editTextArea",domProps:{value:t.itemData.majorcontent},on:{input:function(a){a.target.composing||t.$set(t.itemData,"majorcontent",a.target.value)}}}),e("span",{staticClass:"saveBtn",on:{click:function(a){return t.save(4)}}},[t._v("保存")])]),e("section",{directives:[{name:"show",rawName:"v-show",value:"base5"===t.itemData.key,expression:"itemData.key === 'base5'"}],staticClass:"base5"},[e("aInput",{attrs:{placeholder:"学校名称"},model:{value:t.itemData.school,callback:function(a){t.$set(t.itemData,"school",a)},expression:"itemData.school"}}),e("aInput",{attrs:{placeholder:"专业"},model:{value:t.itemData.major,callback:function(a){t.$set(t.itemData,"major",a)},expression:"itemData.major"}}),e("aInput",{attrs:{placeholder:"最高学历"},model:{value:t.itemData.edu,callback:function(a){t.$set(t.itemData,"edu",a)},expression:"itemData.edu"}}),e("aInput",{attrs:{placeholder:"起止时间"},model:{value:t.itemData.time,callback:function(a){t.$set(t.itemData,"time",a)},expression:"itemData.time"}}),e("span",{staticClass:"t"},[t._v("教育描述")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.itemData.educontent,expression:"itemData.educontent"}],ref:"baseEdit5",staticClass:"editTextArea",domProps:{value:t.itemData.educontent},on:{input:function(a){a.target.composing||t.$set(t.itemData,"educontent",a.target.value)}}}),e("span",{staticClass:"saveBtn",on:{click:function(a){return t.save(5)}}},[t._v("保存")])],1)])},g=[],k={props:["itemData","index"],watch:{itemData:function(){}},data:function(){return{msg:"操作成功",timer:null,alertFlag:!1,objTemp:{}}},mounted:function(){this.objTemp=Object.assign({},this.itemData),console.log("itemData",this.itemData)},methods:{save:function(t){var a={};if(1===t){var e={name:"Abbey",sex:"男",edu:"本科",phone:"138-8888-8888",email:"abbey@email.com",address:"深圳",year:"n年",work:"web前端",site:"weifun.club",github:"github.com/weithesky",wechat:"微信"};a=Object.assign({},e,this.itemData),console.log(a)}else if(2===t){var s=this.$refs.baseEdit2.value,i={company:"",city:"",job:"",time:"",workcontent:s};a=Object.assign({},i,this.itemData),console.log(a)}else if(3===t){var r=this.$refs.baseEdit3.value,n={project:"",city:"",job:"",time:"",workcontent:r};a=Object.assign({},n,this.itemData),console.log(a)}else if(4===t){var o="".concat(this.$refs.baseEdit4.value),l={majorcontent:o};a=Object.assign({},l,this.itemData),console.log("专业技能",a)}else if(5===t){var c={school:"",edu:"",time:"",major:""},u=this.$refs.baseEdit5.value;c.educontent=u,a=Object.assign({},c,this.itemData),console.log("教育经历",a)}else console.log("出错了");var m=this.$function.getAllDataArr(),d=Object(f["a"])(m.modularArr),p=window.localStorage.getItem("modularNum");d[p]=a,this.$function.setDataArr(d),this.showAlert(),this.$emit("setData",a,this.index)},showAlert:function(){var t=this;console.log("执行"),this.timer||(this.alertFlag=!0,this.timer=setTimeout((function(){t.alertFlag=!1,t.timer=null}),1500))}}},A=k,x=(e("2917"),Object(u["a"])(A,_,g,!1,null,"35332891",null)),j=x.exports,y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"details"},[e("span",{staticClass:"aTitle",attrs:{id:"info"}},[t._v("基本信息")]),e("section",{staticClass:"aitem"},[e("h2",[t._v(t._s(t.modularArr[0].name))]),e("div",{staticClass:"info-line1"},[e("li",[e("span",[t._v("求职意向：")]),e("span",[t._v(t._s(t.modularArr[0].work))])]),e("li",[e("span",[t._v("工作年限：")]),e("span",[t._v(t._s(t.modularArr[0].year))])]),e("li",[e("span",[t._v("最高学历：")]),e("span",[t._v(t._s(t.modularArr[0].edu))])]),e("li",[e("span",[t._v("性别：")]),e("span",[t._v(t._s(t.modularArr[0].sex))])]),e("li",[e("span",[t._v("联系电话：")]),e("span",[t._v(t._s(t.modularArr[0].phone))])]),e("li",[e("span",[t._v("邮箱：")]),e("span",[t._v(t._s(t.modularArr[0].email))])]),e("li",[e("span",[t._v("工作地址：")]),e("span",[t._v(t._s(t.modularArr[0].address))])]),e("li",{directives:[{name:"show",rawName:"v-show",value:t.modularArr[0].site,expression:"modularArr[0].site"}]},[e("span",[t._v("个人网站：")]),e("span",[t._v(t._s(t.modularArr[0].site))])]),e("li",{directives:[{name:"show",rawName:"v-show",value:t.modularArr[0].github,expression:"modularArr[0].github"}]},[e("span",[t._v("github：")]),e("span",[t._v(t._s(t.modularArr[0].github))])]),e("li",{directives:[{name:"show",rawName:"v-show",value:t.modularArr[0].wechat,expression:"modularArr[0].wechat"}]},[e("span",[t._v("微信：")]),e("span",[t._v(t._s(t.modularArr[0].wechat))])])])]),e("span",{staticClass:"aTitle",attrs:{id:"work"}},[t._v("工作经历")]),e("section",{staticClass:"workArea-fa"},t._l(t.workList,(function(a,s){return e("div",{key:"work"+s},[e("div",{staticClass:"workItem"},[e("li",[t._v(t._s(a.company))]),e("li",[t._v(t._s(a.job))]),e("li",[t._v(t._s(a.city))]),e("li",[t._v(t._s(a.time))])]),e("div",{staticClass:"show-Area workArea"},[e("textarea",{staticClass:"showArea",attrs:{readonly:""},domProps:{value:t.skillObj.majorcontent}})])])})),0),e("span",{staticClass:"aTitle",attrs:{id:"project"}},[t._v("开源项目及作品")]),e("section",{staticClass:"projectArea"},t._l(t.projectList,(function(a,s){return e("li",{key:"project"+s,staticClass:"projectLi"},[e("div",{staticClass:"project"},[e("span",[t._v(t._s(a.project))]),t._v("· "),e("span",[t._v(t._s(a.job))]),t._v("· "),e("span",[t._v(t._s(a.city))]),t._v("· "),e("span",[t._v(t._s(a.time))])]),e("div",[e("textarea",{staticClass:"showArea",attrs:{readonly:""},domProps:{value:a.workcontent}})])])})),0),e("span",{staticClass:"aTitle",attrs:{id:"skill"}},[t._v("专业技能")]),e("section",{staticClass:"show-Area"},[e("textarea",{staticClass:"showArea",attrs:{readonly:""},domProps:{value:t.skillObj.majorcontent}})]),e("span",{staticClass:"aTitle",attrs:{id:"edu"}},[t._v("教育经历")]),t._l(t.eduList,(function(a,s){return e("section",{key:"edu"+s},[e("div",{staticClass:"eduList"},[e("span",{},[t._v(t._s(a.school))]),e("span",{},[t._v(t._s(a.major))]),e("span",{},[t._v(t._s(a.edu))]),e("span",{},[t._v(t._s(a.time))])]),e("div",{staticClass:"show-Area"},[e("textarea",{staticClass:"showArea",attrs:{readonly:""},domProps:{value:a.educontent}})])])}))],2)},C=[],$=(e("4de4"),{data:function(){return{modularArr:[],workList:[],projectList:[],eduList:[],skillObj:{}}},created:function(){var t=this.$function.getAllDataArr();this.modularArr=Object(f["a"])(t.modularArr);var a=this.modularArr.filter((function(t){return"base4"===t.key})),e=this.modularArr.filter((function(t){return"base5"===t.key})),s=this.modularArr.filter((function(t){return"base2"===t.key})),i=this.modularArr.filter((function(t){return"base3"===t.key}));this.skillObj=a[0],this.eduList=Object(f["a"])(e),this.workList=Object(f["a"])(s),this.projectList=Object(f["a"])(i),console.log("工作",this.workList)}}),I=$,O=(e("2332"),Object(u["a"])(I,y,C,!1,null,"4b403192",null)),N=O.exports,S={name:"App",components:{aMoudular:w,aHeader:d,aEdit:j,aDetail:N},data:function(){return{navNum:0,itemData:{}}},created:function(){var t=this.$function.havaDataArr();t||this.$function.setInitDataArr()},mounted:function(){this.itemData=Object.assign({},this.$children[1].editItem)},methods:{setNavShow:function(t){this.navNum=t},getItem:function(t){this.itemData=Object.assign({},t)},setData:function(t,a){console.log("获取数据",t,a)}}},P=S,E=(e("034f"),Object(u["a"])(P,i,r,!1,null,null,null)),T=E.exports,L=(e("464a"),{modularArr:[{key:"base1",text:"基本信息",canDel:!1,canAdd:!1},{key:"base2",text:"工作经历",canDel:!0,canAdd:!0},{key:"base3",text:"开源项目及作品",canDel:!0,canAdd:!0},{key:"base4",text:"专业技能",canDel:!0,canAdd:!1},{key:"base5",text:"教育经历",canDel:!0,canAdd:!1}]});function M(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=JSON.stringify(t);window.localStorage.setItem("modularArr",a)}function B(t){var a={modularArr:Object(f["a"])(t)},e=JSON.stringify(a);window.localStorage.setItem("modularArr",e)}function F(){var t=window.localStorage.getItem("modularArr");return JSON.parse(t)}function J(){var t=window.localStorage.getItem("modularArr");return!!t}function H(){}var W={setInitDataArr:M,setDataArr:B,havaDataArr:J,getDataArr:H,getAllDataArr:F},q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aInput"},[e("div",{directives:[{name:"show",rawName:"v-show",value:""!==t.label,expression:"label !== ''"}],staticClass:"aLabel"},[t._v(t._s(t.label))]),e("div",{staticClass:"aArea",class:{aotoWidth:""===t.label}},[e("input",{staticClass:"diyInput",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(a){return t.setData(a)}}})])])},z=[],G={props:{label:{type:String,default:""},value:{default:""},placeholder:{type:String,default:""}},methods:{setData:function(t){this.$emit("input",t.target.value)}}},K=G,Q=(e("7ff9"),Object(u["a"])(K,q,z,!1,null,"b96ebc6c",null)),R=Q.exports,U={install:function(t){t.component("aInput",R)}},V=U;s["a"].prototype.$function=W,s["a"].use(V),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(T)}}).$mount("#app")},"7ff9":function(t,a,e){"use strict";var s=e("8c2d"),i=e.n(s);i.a},"85ec":function(t,a,e){},"8c2d":function(t,a,e){},"9b7f":function(t,a,e){},"9dc9":function(t,a,e){"use strict";var s=e("9b7f"),i=e.n(s);i.a},af41:function(t,a,e){},b65b:function(t,a,e){},fa03:function(t,a,e){"use strict";var s=e("b65b"),i=e.n(s);i.a}});
//# sourceMappingURL=app.c2e038de.js.map