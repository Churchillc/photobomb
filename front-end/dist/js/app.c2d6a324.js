(function(e){function t(t){for(var r,o,i=t[0],c=t[1],u=t[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],r=!0,i=1;i<s.length;i++){var c=s[i];0!==a[c]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=s[0]))}return e}var r={},a={app:0},n=[];function o(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=r,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(s,r,function(t){return e[t]}.bind(null,r));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"0a1a":function(e,t,s){},"1b40":function(e,t,s){},"323b":function(e,t,s){"use strict";s("f80d")},"41c0":function(e,t,s){},4678:function(e,t,s){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=n(e);return s(t)}function n(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=n,e.exports=a,a.id="4678"},"512e":function(e,t,s){"use strict";s("0a1a")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("header",{attrs:{id:"header"}},[s("h1",[e._v("Photo Bomb")]),s("nav",[s("router-link",{attrs:{to:"/"}},[s("i",{staticClass:"fas fa-home"})]),s("router-link",{attrs:{to:"/dashboard"}},[s("i",{staticClass:"fas fa-user"})])],1)]),s("router-view"),e._m(0)],1)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"footer"},[s("a",{attrs:{href:"https://github.com/Churchillc/photobomb"}},[e._v("GitHub")])])}],o=(s("034f"),s("2877")),i={},c=Object(o["a"])(i,a,n,!1,null,null,null),u=c.exports,l=s("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("image-gallery",{attrs:{photos:e.photos}}),e.error?s("p",[e._v(e._s(e.error))]):e._e()],1)},p=[],f=s("1da1"),m=(s("96cf"),s("bc3a")),h=s.n(m),b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("section",{staticClass:"image-gallery"},e._l(e.photos,(function(t){return s("div",{key:t._id,staticClass:"image"},[s("router-link",{attrs:{to:{name:"photo",params:{id:t._id}}}},[s("img",{attrs:{src:t.path}})]),s("div",{staticClass:"photoInfo"},[s("p",{staticClass:"photoTitle"},[e._v(e._s(t.title))]),s("p",{staticClass:"photoName"},[e._v(e._s(t.user.firstName)+" "+e._s(t.user.lastName))])]),s("p",{staticClass:"photoDate"},[e._v(e._s(e.formatDate(t.created)))])],1)})),0)])},v=[],j=s("c1df"),g=s.n(j),w={name:"ImageGallery",props:{photos:Array},methods:{formatDate:function(e){return g()(e).diff(Date.now(),"days")<15?g()(e).fromNow():g()(e).format("d MMMM YYYY")}}},_=w,k=(s("323b"),Object(o["a"])(_,b,v,!1,null,"982d8252",null)),y=k.exports,x={name:"Home",data:function(){return{photos:[],error:""}},created:function(){this.getPhotos()},methods:{getPhotos:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("/api/photos/all");case 3:s=t.sent,e.photos=s.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.error=t.t0.response.data.message;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},components:{ImageGallery:y}},C=x,N=Object(o["a"])(C,d,p,!1,null,null,null),$=N.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dashboard"},[e.user?s("MyPhotos"):s("Login")],1)},L=[],P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main"},[s("div",{staticClass:"menu"},[s("p",[s("a",{on:{click:e.toggleUpload}},[s("i",{staticClass:"fas fa-image"})])]),s("h2",[e._v(e._s(e.user.firstName)+" "+e._s(e.user.lastName)+" "),s("a",{on:{click:e.logout}},[s("i",{staticClass:"fas fa-sign-out-alt"})])]),s("uploader",{attrs:{show:e.show},on:{close:e.close,uploadFinished:e.uploadFinished}})],1),s("image-gallery",{attrs:{photos:e.photos}}),e.error?s("p",[e._v(e._s(e.error))]):e._e()],1)},z=[],R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.show?s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-container"},[s("form",{staticClass:"pure-form",on:{submit:function(t){return t.preventDefault(),e.upload.apply(null,arguments)}}},[s("legend",[e._v("Upload a picture")]),s("fieldset",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{placeholder:"Title"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),s("fieldset",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],attrs:{placeholder:"Description"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),s("fieldset",[s("div",{staticClass:"imageInput",on:{click:e.chooseImage}},[e.url?s("img",{attrs:{src:e.url}}):e._e(),e.url?e._e():s("div",{staticClass:"placeholder"},[e._v(" Choose an Image ")]),s("input",{ref:"fileInput",staticClass:"fileInput",attrs:{type:"file"},on:{input:e.fileChanged}})]),e.error?s("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e()]),s("fieldset",{staticClass:"buttons"},[s("button",{staticClass:"pure-button",attrs:{type:"button"},on:{click:e.close}},[e._v("Close")]),s("button",{staticClass:"pure-button pure-button-primary right",attrs:{type:"submit"}},[e._v("Upload")])])])])])]):e._e()},M=[],D=(s("d3b7"),s("3ca3"),s("ddb0"),s("2b3d"),s("9861"),s("b0c0"),s("a4d3"),s("e01a"),{name:"Uploader",props:{show:Boolean},data:function(){return{title:"",description:"",url:"",file:null,error:""}},methods:{fileChanged:function(e){this.file=e.target.files[0],this.url=URL.createObjectURL(this.file)},close:function(){this.$emit("close")},chooseImage:function(){this.$refs.fileInput.click()},upload:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,s=new FormData,s.append("photo",e.file,e.file.name),s.append("title",e.title),s.append("description",e.description),t.next=7,h.a.post("/api/photos",s);case 7:e.file=null,e.url="",e.title="",e.description="",e.$emit("uploadFinished"),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),e.error="Error: "+t.t0.response.data.message;case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()}}}),E=D,I=(s("8ec4"),Object(o["a"])(E,R,M,!1,null,"007754be",null)),U=I.exports,Y={name:"MyPhotos",components:{Uploader:U,ImageGallery:y},data:function(){return{show:!1,photos:[],error:""}},computed:{user:function(){return this.$root.$data.user}},created:function(){this.getPhotos()},methods:{logout:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.delete("/api/users");case 3:e.$root.$data.user=null,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.$root.$data.user=null;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getPhotos:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("/api/photos");case 3:e.response=t.sent,e.photos=e.response.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.error=t.t0.response.data.message;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},close:function(){this.show=!1},toggleUpload:function(){this.show=!0}}},T=Y,F=(s("e590"),Object(o["a"])(T,P,z,!1,null,"074c9d76",null)),H=F.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hero"},[s("div",{staticClass:"heroBox"},[s("form",{staticClass:"pure-form"},[s("fieldset",[s("legend",[e._v("Register for an account")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],attrs:{placeholder:"first name"},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{placeholder:"last name"},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}})]),s("fieldset",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),s("fieldset",[s("button",{staticClass:"pure-button pure-button-primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.register.apply(null,arguments)}}},[e._v("Register")])])]),e.error?s("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),s("form",{staticClass:"pure-form space-above"},[s("fieldset",[s("legend",[e._v("Login")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.usernameLogin,expression:"usernameLogin"}],attrs:{placeholder:"username"},domProps:{value:e.usernameLogin},on:{input:function(t){t.target.composing||(e.usernameLogin=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordLogin,expression:"passwordLogin"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.passwordLogin},on:{input:function(t){t.target.composing||(e.passwordLogin=t.target.value)}}})]),s("fieldset",[s("button",{staticClass:"pure-button pure-button-primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[e._v("Login")])])]),e.errorLogin?s("p",{staticClass:"error"},[e._v(e._s(e.errorLogin))]):e._e()])])},G=[],B={name:"HomePage",data:function(){return{firstName:"",lastName:"",username:"",password:"",usernameLogin:"",passwordLogin:"",error:"",errorLogin:""}},methods:{register:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.error="",e.errorLogin="",e.firstName&&e.lastName&&e.username&&e.password){t.next=4;break}return t.abrupt("return");case 4:return t.prev=4,t.next=7,h.a.post("/api/users",{firstName:e.firstName,lastName:e.lastName,username:e.username,password:e.password});case 7:s=t.sent,e.$root.$data.user=s.data.user,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](4),e.error=t.t0.response.data.message,e.$root.$data.user=null;case 15:case"end":return t.stop()}}),t,null,[[4,11]])})))()},login:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.error="",e.errorLogin="",e.usernameLogin&&e.passwordLogin){t.next=4;break}return t.abrupt("return");case 4:return t.prev=4,t.next=7,h.a.post("/api/users/login",{username:e.usernameLogin,password:e.passwordLogin});case 7:s=t.sent,e.$root.$data.user=s.data.user,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](4),e.errorLogin="Error: "+t.t0.response.data.message,e.$root.$data.user=null;case 15:case"end":return t.stop()}}),t,null,[[4,11]])})))()}}},q=B,J=(s("512e"),Object(o["a"])(q,S,G,!1,null,"61b99116",null)),A=J.exports,K={name:"dashboard",components:{MyPhotos:H,Login:A},created:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("/api/users");case 3:s=t.sent,e.$root.$data.user=s.data.user,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.$root.$data.user=null;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},computed:{user:function(){return this.$root.$data.user}}},Q=K,V=(s("7157"),Object(o["a"])(Q,O,L,!1,null,"69ca96de",null)),W=V.exports,X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("div",{staticClass:"spacer"}),s("div",{staticClass:"holder"},[s("img",{attrs:{src:this.path,height:"500"}})]),s("div",{staticClass:"holder"},[s("h3",[e._v(e._s(e.title)+" -- "+e._s(e.description))])]),s("div",{staticClass:"holder"},[s("h2",[e._v(e._s(e.name)+" -- "+e._s(e.date))])])])},Z=[],ee={name:"Home",data:function(){return{photos:[],path:"",title:"",description:"",name:"",date:""}},created:function(){this.getPhoto()},methods:{getPhoto:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("/api/photos/single/"+e.$route.params.id);case 3:s=t.sent,e.photos[0]=s.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.error=t.t0.response.data.message;case 10:e.path=e.photos[0].path,e.title=e.photos[0].title,e.description=e.photos[0].description,e.name=e.photos[0].user.firstName+" "+e.photos[0].user.lastName,e.date=e.formatDate(e.photos[0].created);case 15:case"end":return t.stop()}}),t,null,[[0,7]])})))()},formatDate:function(e){return g()(e).format("d MMMM YYYY")}},components:{}},te=ee,se=(s("aaca"),Object(o["a"])(te,X,Z,!1,null,"67d38be8",null)),re=se.exports;r["a"].use(l["a"]);var ae=[{path:"/",name:"Home",component:$},{path:"/dashboard",name:"Dashboard",component:W},{path:"/photo/:id",name:"photo",component:re}],ne=new l["a"]({mode:"history",base:"/",routes:ae}),oe=ne;r["a"].config.productionTip=!1;var ie={user:null};new r["a"]({data:ie,router:oe,render:function(e){return e(u)}}).$mount("#app")},6793:function(e,t,s){},7157:function(e,t,s){"use strict";s("41c0")},"85ec":function(e,t,s){},"8ec4":function(e,t,s){"use strict";s("6793")},"9f87":function(e,t,s){},aaca:function(e,t,s){"use strict";s("9f87")},e590:function(e,t,s){"use strict";s("1b40")},f80d:function(e,t,s){}});
//# sourceMappingURL=app.c2d6a324.js.map