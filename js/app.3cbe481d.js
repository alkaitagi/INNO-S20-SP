(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},i={app:0},a=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/INNO-S20-SP/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0965":function(t,e,s){"use strict";var n=s("c601"),i=s.n(n);i.a},1273:function(t,e,s){},3633:function(t,e,s){"use strict";var n=s("abc7"),i=s.n(n);i.a},"4d71":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("a",{ref:"link",attrs:{hidden:""}}),s("Instruction",{attrs:{instructions:t.instructions},on:{select:t.selectInstruction,upload:t.uploadInstruction}}),s("Step",{attrs:{steps:t.steps},on:{select:t.selectStep}}),s("Asset",{attrs:{assets:t.assets}}),s("Render",{attrs:{assets:t.assets,files:t.files}})],1)},a=[],r=(s("4de4"),s("7db0"),s("4160"),s("c975"),s("b0c0"),s("d3b7"),s("3ca3"),s("9911"),s("159b"),s("ddb0"),s("2b3d"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"card"},[s("p",{staticClass:"label bold"},[t._v("instructions")]),t.instructions?[s("div",{staticClass:"toolbar"},[t.instructions?s("button",{attrs:{tooltip:"create new"},on:{click:t.createInstruction}},[s("i",{staticClass:"material-icons-outlined"},[t._v("add")])]):t._e(),t.instruction?s("button",{attrs:{tooltip:"duplicate"},on:{click:t.duplicateInstruction}},[s("i",{staticClass:"material-icons-outlined"},[t._v("library_add")])]):t._e(),t.instruction?s("button",{attrs:{tooltip:"upload to server"},on:{click:function(e){return t.$emit("upload")}}},[s("i",{staticClass:"material-icons-outlined"},[t._v("publish")])]):t._e(),t.instruction?s("button",{attrs:{tooltip:"delete"},on:{click:t.deleteInstruction}},[s("i",{staticClass:"material-icons-outlined"},[t._v("delete")])]):t._e()]),t.instructions.length>0?s("div",{staticClass:"list",staticStyle:{height:"125px"}},t._l(t.instructions,(function(e,n){return s("button",{key:n,class:{selected:n===t.selected},on:{click:function(e){t.selected=n}}},[t._v(t._s(e.index.name))])})),0):t._e()]:t._e(),t.instruction?[s("p",{staticClass:"label"},[t._v("name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.instruction.index.name,expression:"instruction.index.name"}],attrs:{type:"text"},domProps:{value:t.instruction.index.name},on:{input:function(e){e.target.composing||t.$set(t.instruction.index,"name",e.target.value)}}}),s("p",{staticClass:"label"},[t._v("description")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.instruction.index.description,expression:"instruction.index.description"}],domProps:{value:t.instruction.index.description},on:{input:function(e){e.target.composing||t.$set(t.instruction.index,"description",e.target.value)}}}),t._v(" "),s("p",{staticClass:"label"},[t._v("preview")]),s("FileDrop",{attrs:{types:[1]},model:{value:t.instruction.index.preview_url,callback:function(e){t.$set(t.instruction.index,"preview_url",e)},expression:"instruction.index.preview_url"}})]:t._e()],2),s("div",{staticClass:"card",staticStyle:{"margin-top":"20px",width:"430px"}},[s("p",{staticClass:"label bold"},[t._v("files")]),t.instruction?s("FileUpload",{on:{upload:t.validateMediaLinks},model:{value:t.instruction.files,callback:function(e){t.$set(t.instruction,"files",e)},expression:"instruction.files"}}):t._e()],1)])}),o=[],l=(s("a434"),s("b85c")),c=s("ec26"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{delete:t.file},attrs:{id:"root"},on:{drop:t.drop,dragover:function(t){return t.preventDefault()},click:function(e){return t.$emit("drop",null)}}},[t.file?s("p",[t._v(t._s(t.file))]):s("p",{attrs:{id:"empty"}},[t._v("[drag an uploaded file here]")])])},d=[],p=(s("caad"),s("2532"),{name:"FileDrop",props:["file","types"],model:{prop:"file",event:"drop"},methods:{drop:function(t){var e=JSON.parse(t.dataTransfer.getData("text"));this.types&&!this.types.includes(e.type)||this.$emit("drop",e.name)}}}),f=p,v=(s("3633"),s("2877")),m=Object(v["a"])(f,u,d,!1,null,"595995c3",null),h=m.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"root"}},[s("div",{staticClass:"list",staticStyle:{height:"125px"}},t._l(t.files,(function(e,n){return s("button",{key:n,attrs:{draggable:""},on:{dragstart:function(e){return t.drag(e,n)}}},[t._v(t._s(e.name))])})),0),s("div",{attrs:{id:"drop"},on:{click:function(e){return t.$refs.input.click()},drop:t.drop,dragover:function(t){return t.preventDefault()}}},[s("p",{attrs:{id:"empty"}},[t._v("click or drag your local files here to upload them")]),s("br"),s("p",{attrs:{id:"empty"}},[t._v("or drag an uploaded file to delete it")]),s("input",{ref:"input",attrs:{hidden:"",multiple:"",type:"file",accept:t.extensions.join()},on:{change:function(e){t.upload(Array.from(e.target.files))}}})])])},_=[],g=(s("99af"),s("0481"),s("a630"),s("d81d"),s("4069"),s("ac1f"),s("1276"),s("3835")),y=(s("96cf"),s("1da1")),x={name:"FileUpload",props:["files"],data:function(){return{images:[".bmp",".jpeg",".jpg",".png"],audios:[".mp3"],videos:[".mp4"],models:[".glb"]}},computed:{types:function(){return[this.images,this.audios,this.videos,this.models]},extensions:function(){return this.types.flat()},names:function(){return this.files.map((function(t){return t.name}))}},methods:{upload:function(t){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.t0=e,s.t1=e.files,s.next=4,Promise.all(t.filter((function(t){return!e.names.includes(t.name)})).map(e.readFile));case 4:s.t2=s.sent,s.t3=s.t1.concat.call(s.t1,s.t2),s.t0.$emit.call(s.t0,"upload",s.t3);case 7:case"end":return s.stop()}}),s)})))()},readFile:function(t){var e=this.getType;return new Promise((function(s,n){var i=new FileReader;i.onload=function(){return s({name:t.name,type:e(t.name),content:i.result})},i.onerror=n,i.readAsDataURL(t)}))},getExt:function(t){return"."+t.split(".").pop()},getType:function(t){var e,s=this.getExt(t),n=Object(l["a"])(this.types.entries());try{for(n.s();!(e=n.n()).done;){var i=Object(g["a"])(e.value,2),a=i[0],r=i[1];if(r.includes(s))return a+1}}catch(o){n.e(o)}finally{n.f()}return 0},drop:function(t){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function s(){var n,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(t.preventDefault(),!((null===(n=t.dataTransfer.files)||void 0===n?void 0:n.length)>0)){s.next=6;break}return s.next=4,e.upload(Array.from(t.dataTransfer.files).filter((function(t){return e.extensions.includes(e.getExt(t.name))})));case 4:s.next=8;break;case 6:i=JSON.parse(t.dataTransfer.getData("text")),e.$emit("upload",e.files.filter((function(t){return t.name!==i.name})));case 8:case"end":return s.stop()}}),s)})))()},drag:function(t,e){t.dataTransfer.setData("text/plain",JSON.stringify(this.files[e]))}},model:{prop:"files",event:"upload"}},w=x,k=(s("8737"),Object(v["a"])(w,b,_,!1,null,"fa39f8ec",null)),C=k.exports,O={name:"Instruction",props:["instructions"],components:{FileDrop:h,FileUpload:C},data:function(){return{selected:void 0}},watch:{instructions:function(t){t&&this.selectLast()}},computed:{instruction:function(){var t;return this.$emit("select",this.selected),(null===(t=this.instructions)||void 0===t?void 0:t.length)>0?this.instructions[this.selected]:null}},methods:{validateMediaLinks:function(){var t=this.instruction.files,e=function(e){return!t.find((function(t){return t.name===e}))};e(this.instruction.preview_url)&&(this.instruction.preview_url="");var s,n=Object(l["a"])(this.instruction.steps);try{for(n.s();!(s=n.n()).done;){var i=s.value;e(i.preview_url)&&(i.preview_url="");var a,r=Object(l["a"])(i.assets);try{for(r.s();!(a=r.n()).done;){var o=a.value;e(o.media.url)&&(o.media.url="",o.media.type=0)}}catch(c){r.e(c)}finally{r.f()}}}catch(c){n.e(c)}finally{n.f()}},createInstruction:function(){this.instructions.push({index:{id:Object(c["a"])(),size:0,name:"Instruction "+(this.instructions.length+1),description:"",preview_url:"",step_count:0,last_modified:""},steps:[],files:[]}),this.selectLast()},duplicateInstruction:function(){var t=JSON.parse(JSON.stringify(this.instruction));t.name+=" (copy)",this.instructions.push(t),this.selectLast()},deleteInstruction:function(){this.instructions.splice(this.selected,1),this.selected>=this.instructions.length&&this.selectLast()},selectLast:function(){this.selected=this.instructions.length-1}}},S=O,j=Object(v["a"])(S,r,o,!1,null,null,null),$=j.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"card"},[s("p",{staticClass:"label bold"},[t._v("steps")]),t.steps?[s("div",{staticClass:"toolbar"},[s("button",{attrs:{tooltip:"create new"},on:{click:t.createStep}},[s("i",{staticClass:"material-icons-outlined"},[t._v("add")])]),t.step?s("button",{attrs:{tooltip:"duplicate"},on:{click:t.duplicateStep}},[s("i",{staticClass:"material-icons-outlined"},[t._v("library_add")])]):t._e(),t.step?s("button",{attrs:{tooltip:"delete"},on:{click:t.deleteStep}},[s("i",{staticClass:"material-icons-outlined"},[t._v("delete")])]):t._e()]),t.steps.length>0?s("div",{staticClass:"list",staticStyle:{height:"125px"}},t._l(t.steps,(function(e,n){return s("button",{key:n,class:{selected:n===t.selected},on:{click:function(e){t.selected=n}}},[t._v(t._s(e.name))])})),0):t._e()]:t._e(),t.step?[s("p",{staticClass:"label"},[t._v("name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.step.name,expression:"step.name"}],attrs:{type:"text"},domProps:{value:t.step.name},on:{input:function(e){e.target.composing||t.$set(t.step,"name",e.target.value)}}}),s("p",{staticClass:"label"},[t._v("description")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.step.description,expression:"step.description"}],domProps:{value:t.step.description},on:{input:function(e){e.target.composing||t.$set(t.step,"description",e.target.value)}}}),t._v(" "),s("p",{staticClass:"label"},[t._v("preview")]),s("FileDrop",{attrs:{types:[1]},model:{value:t.step.preview_url,callback:function(e){t.$set(t.step,"preview_url",e)},expression:"step.preview_url"}})]:t._e()],2)])},N=[],F={name:"Step",props:["steps"],components:{FileDrop:h},data:function(){return{selected:void 0}},computed:{step:function(){var t;return this.$emit("select",this.selected),(null===(t=this.steps)||void 0===t?void 0:t.length)>0?this.steps[this.selected]:null}},watch:{steps:function(t){t&&this.selectLast()}},methods:{createStep:function(){this.steps.push({name:"Step "+(this.steps.length+1),description:"",preview_url:"",assets:[]}),this.selectLast()},duplicateStep:function(){var t=JSON.parse(JSON.stringify(this.step));t.name+=" (copy)",this.steps.push(t),this.selectLast()},deleteStep:function(){this.steps.splice(this.selected,1),this.selected>=this.steps.length&&this.selectLast()},selectLast:function(){this.selected=this.steps.length-1}}},I=F,P=Object(v["a"])(I,L,N,!1,null,null,null),A=P.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"card"},[s("p",{staticClass:"label bold"},[t._v("assets")]),t.assets?[s("div",{staticClass:"toolbar"},[s("button",{attrs:{tooltip:"create new"},on:{click:t.createAsset}},[s("i",{staticClass:"material-icons-outlined"},[t._v("add")])]),t.asset?s("button",{attrs:{tooltip:"duplicate"},on:{click:t.duplicateAsset}},[s("i",{staticClass:"material-icons-outlined"},[t._v("library_add")])]):t._e(),t.asset?s("button",{attrs:{tooltip:"awlays face camera"},on:{click:function(e){t.asset.billboard=!t.asset.billboard}}},[t.asset.billboard?s("i",{staticClass:"material-icons-outlined"},[t._v("screen_rotation")]):s("i",{staticClass:"material-icons-outlined"},[t._v("screen_lock_rotation")])]):t._e(),t.asset?s("button",{attrs:{tooltip:"toggle visibility"},on:{click:function(e){t.asset.hidden=!t.asset.hidden}}},[t.asset.hidden?s("i",{staticClass:"material-icons-outlined"},[t._v("visibility_off")]):s("i",{staticClass:"material-icons-outlined"},[t._v("visibility")])]):t._e(),t.asset?s("button",{attrs:{tooltip:"delete"},on:{click:t.deleteAsset}},[s("i",{staticClass:"material-icons-outlined"},[t._v("delete")])]):t._e()]),t.assets.length>0?s("div",{staticClass:"list",staticStyle:{height:"125px"}},t._l(t.assets,(function(e,n){return s("button",{key:n,class:{selected:n===t.selected},on:{click:function(e){t.selected=n}}},[t._v(t._s(e.name))])})),0):t._e()]:t._e(),t.asset?[s("p",{staticClass:"label"},[t._v("name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.asset.name,expression:"asset.name"}],attrs:{type:"text"},domProps:{value:t.asset.name},on:{input:function(e){e.target.composing||t.$set(t.asset,"name",e.target.value)}}}),s("p",{staticClass:"label"},[t._v("description")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.asset.media.description,expression:"asset.media.description"}],domProps:{value:t.asset.media.description},on:{input:function(e){e.target.composing||t.$set(t.asset.media,"description",e.target.value)}}}),t._v(" "),s("p",{staticClass:"label"},[t._v("media")]),s("FileDrop",{model:{value:t.asset.media.url,callback:function(e){t.$set(t.asset.media,"url",e)},expression:"asset.media.url"}}),s("p",{staticClass:"label"},[t._v("position")]),s("Vector",{attrs:{vector:t.asset.transform.position}}),s("p",{staticClass:"label"},[t._v("orientation")]),s("Vector",{attrs:{vector:t.asset.transform.orientation}}),s("p",{staticClass:"label"},[t._v("scale")]),s("input",{attrs:{type:"number",step:"0.1"},domProps:{value:t.asset.transform.scale},on:{input:function(e){t.asset.transform.scale=Math.max(.1,t.$toFloat(e.target.value))}}})]:t._e()],2)])},E=[],J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"root"}},t._l(t.keys,(function(e,n){return s("input",{key:n,style:{width:t.width},attrs:{type:"number",step:"0.1"},domProps:{value:t.vector[e]},on:{input:function(s){t.vector[e]=t.$toFloat(s.target.value)}}})})),0)},R=[],T=(s("b64b"),{name:"Vector",props:["vector"],computed:{keys:function(){return Object.keys(this.vector)},width:function(){return 100/this.keys.length+"%"}}}),U=T,M=(s("ac23"),Object(v["a"])(U,J,R,!1,null,"46ffa12d",null)),z=M.exports,V={name:"Asset",props:["assets"],components:{FileDrop:h,Vector:z},data:function(){return{selected:void 0}},computed:{asset:function(){var t;return this.$emit("select",this.selected),(null===(t=this.assets)||void 0===t?void 0:t.length)>0?this.assets[this.selected]:null}},watch:{assets:function(t){t&&this.selectLast()}},methods:{createAsset:function(){this.assets.push({name:"Asset "+(this.assets.length+1),media:{type:0,url:"",description:""},transform:{position:{x:0,y:0,z:0},orientation:{x:0,y:0,z:0},scale:1},hidden:!1,billboard:!1}),this.selectLast()},duplicateAsset:function(){var t=JSON.parse(JSON.stringify(this.asset));t.name+=" (copy)",this.assets.push(t),this.selectLast()},deleteAsset:function(){this.assets.splice(this.selected,1),this.selected>=this.assets.length&&this.selectLast()},selectLast:function(){this.selected=this.assets.length-1}}},q=V,B=Object(v["a"])(q,D,E,!1,null,"94b30c70",null),G=B.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"})},K=[],Q={name:"Render",props:["assets","files"]},W=Q,X=(s("0965"),Object(v["a"])(W,H,K,!1,null,"3f0d6572",null)),Y=X.exports,Z=s("c4e3");n["a"].prototype.$toFloat=function(t){return t=parseFloat(t),isNaN(t)?0:t};var tt={name:"App",components:{Instruction:$,Step:A,Asset:G,Render:Y},data:function(){return{currentInstruction:0,instructions:[],files:[],steps:[],assets:[]}},methods:{selectInstruction:function(t){var e;this.currentInstruction=t;var s=(null===(e=this.instructions)||void 0===e?void 0:e.length)>0?this.instructions[t]:null;this.steps=null===s||void 0===s?void 0:s.steps,this.files=null===s||void 0===s?void 0:s.files},selectStep:function(t){var e;this.assets=(null===(e=this.steps)||void 0===e?void 0:e.length)>0?this.steps[t].assets:null},uploadInstruction:function(){var t=this.instructions[this.currentInstruction],e=t.steps,s=t.files,n=t.index;n.step_count=e.length,n.last_modified=Date.now(),e.forEach((function(t){return t.assets.filter((function(t){return t.media.url})).forEach((function(t){return t.media.type=s.find((function(e){return e.name===t.media.url})).type}))}));var i=new Z;i.file("index.json",JSON.stringify(n)),i.file("steps.json",JSON.stringify(e)),s.forEach((function(t){i.file("media/"+t.name,t.content.substring(t.content.indexOf("base64,")+"base64,".length),{base64:!0})}));var a=this.$refs.link;i.generateAsync({type:"blob",compression:"DEFLATE"}).then((function(e){var s=window.URL.createObjectURL(e);a.href=s,a.download=t.index.name+".zip",a.click(),window.URL.revokeObjectURL(s)}))}}},et=tt,st=(s("b589"),Object(v["a"])(et,i,a,!1,null,"6f27e05c",null)),nt=st.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(nt)}}).$mount("#app")},"609d":function(t,e,s){},8737:function(t,e,s){"use strict";var n=s("1273"),i=s.n(n);i.a},abc7:function(t,e,s){},ac23:function(t,e,s){"use strict";var n=s("4d71"),i=s.n(n);i.a},b589:function(t,e,s){"use strict";var n=s("609d"),i=s.n(n);i.a},c601:function(t,e,s){}});
//# sourceMappingURL=app.3cbe481d.js.map