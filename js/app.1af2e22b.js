(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,r=1;r<i.length;r++){var l=i[r];0!==n[l]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},n={app:0},a=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/INNO-S20-SP/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"019f":function(t,e,i){},"026a":function(t,e,i){"use strict";var s=i("019f"),n=i.n(s);n.a},1833:function(t,e,i){},"1bdb":function(t,e,i){},"23ab":function(t,e,i){"use strict";var s=i("9048"),n=i.n(s);n.a},4814:function(t,e,i){"use strict";var s=i("1bdb"),n=i.n(s);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Instruction",{attrs:{instructions:t.instructions},on:{select:t.selectInstruction,upload:t.uploadInstruction}}),i("Step",{attrs:{steps:t.steps},on:{select:t.selectStep}}),i("Asset",{attrs:{assets:t.assets}}),i("Render",{attrs:{assets:t.assets,files:t.files}})],1)},a=[],o=(i("4de4"),i("7db0"),i("4160"),i("c975"),i("b0c0"),i("159b"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"card"},[i("p",{staticClass:"label bold"},[t._v("instructions")]),t.instructions?[i("div",{staticClass:"toolbar"},[t.instructions?i("button",{attrs:{tooltip:"create new"},on:{click:t.createInstruction}},[i("i",{staticClass:"material-icons-outlined"},[t._v("add")])]):t._e(),t.instruction?[i("button",{attrs:{tooltip:"duplicate"},on:{click:t.duplicateInstruction}},[i("i",{staticClass:"material-icons-outlined"},[t._v("library_add")])]),i("button",{attrs:{tooltip:"upload to server"},on:{click:function(e){return t.$emit("upload")}}},[i("i",{staticClass:"material-icons-outlined"},[t._v("publish")])]),i("button",{attrs:{tooltip:"delete"},on:{click:t.deleteInstruction}},[i("i",{staticClass:"material-icons-outlined"},[t._v("delete")])])]:t._e()],2),t.instructions.length>0?i("div",{staticClass:"list",staticStyle:{height:"125px"}},t._l(t.instructions,(function(e,s){return i("button",{key:s,class:{selected:s===t.selected},on:{click:function(e){t.selected=s}}},[t._v(t._s(e.index.name))])})),0):t._e()]:t._e(),t.instruction?[i("p",{staticClass:"label"},[t._v("name")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.instruction.index.name,expression:"instruction.index.name"}],attrs:{type:"text"},domProps:{value:t.instruction.index.name},on:{input:function(e){e.target.composing||t.$set(t.instruction.index,"name",e.target.value)}}}),i("p",{staticClass:"label"},[t._v("description")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.instruction.index.description,expression:"instruction.index.description"}],domProps:{value:t.instruction.index.description},on:{input:function(e){e.target.composing||t.$set(t.instruction.index,"description",e.target.value)}}}),t._v(" "),i("p",{staticClass:"label"},[t._v("preview")]),i("FileDrop",{attrs:{types:[1]},model:{value:t.instruction.index.preview_url,callback:function(e){t.$set(t.instruction.index,"preview_url",e)},expression:"instruction.index.preview_url"}})]:t._e()],2),i("div",{staticClass:"card",staticStyle:{"margin-top":"20px",width:"430px"}},[i("p",{staticClass:"label bold"},[t._v("files")]),t.instruction?i("FileUpload",{on:{upload:t.validateMediaLinks},model:{value:t.instruction.files,callback:function(e){t.$set(t.instruction,"files",e)},expression:"instruction.files"}}):t._e()],1)])}),r=[],l=(i("a434"),i("b85c")),c=i("ec26"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{delete:t.file},attrs:{id:"root"},on:{drop:t.drop,dragover:function(t){return t.preventDefault()},click:function(e){return t.$emit("drop",null)}}},[t.file?i("p",[t._v(t._s(t.file))]):i("p",{staticClass:"label"},[t._v("drag an uploaded file here")])])},u=[],p=(i("caad"),i("2532"),{name:"FileDrop",props:["file","types"],model:{prop:"file",event:"drop"},methods:{drop:function(t){var e=JSON.parse(t.dataTransfer.getData("text"));this.types&&!this.types.includes(e.type)||this.$emit("drop",e.name)}}}),h=p,m=(i("81b6"),i("2877")),f=Object(m["a"])(h,d,u,!1,null,"2695726c",null),v=f.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"root"}},[i("div",{staticClass:"list",staticStyle:{height:"125px"}},t._l(t.files,(function(e,s){return i("button",{key:s,attrs:{draggable:""},on:{dragstart:function(e){return t.drag(e,s)}}},[t._v(t._s(e.name))])})),0),i("div",{attrs:{id:"drop"},on:{click:function(e){return t.$refs.input.click()},drop:t.drop,dragover:function(t){return t.preventDefault()}}},[i("p",{attrs:{id:"empty"}},[t._v("click or drag your local files here to upload them")]),i("br"),i("p",{attrs:{id:"empty"}},[t._v("or drag an uploaded file to delete it")]),i("input",{ref:"input",attrs:{hidden:"",multiple:"",type:"file",accept:t.extensions.join()},on:{change:function(e){t.upload(Array.from(e.target.files))}}})])])},y=[],_=(i("99af"),i("0481"),i("a630"),i("d81d"),i("4069"),i("d3b7"),i("ac1f"),i("3ca3"),i("1276"),i("ddb0"),i("2b3d"),i("3835")),g=(i("96cf"),i("1da1")),w={name:"FileUpload",props:["files"],data:function(){return{images:[".bmp",".jpeg",".jpg",".png"],audios:[".mp3"],videos:[".mp4"],models:[".glb",".gltf",".bin"]}},computed:{types:function(){return[this.images,this.audios,this.videos,this.models]},extensions:function(){return this.types.flat()},names:function(){return this.files.map((function(t){return t.name}))}},methods:{upload:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.t0=e,i.t1=e.files,i.next=4,Promise.all(t.filter((function(t){return!e.names.includes(t.name)})).map(e.readFile));case 4:i.t2=i.sent,i.t3=i.t1.concat.call(i.t1,i.t2),i.t0.$emit.call(i.t0,"upload",i.t3);case 7:case"end":return i.stop()}}),i)})))()},readFile:function(t){var e=window.URL.createObjectURL(t),i=this.getType;return new Promise((function(s,n){var a=new FileReader;a.onload=function(){return s({name:t.name,type:i(t.name),content:a.result,url:e})},a.onerror=n,a.readAsDataURL(t)}))},getExt:function(t){return"."+t.split(".").pop()},getType:function(t){var e,i=this.getExt(t),s=Object(l["a"])(this.types.entries());try{for(s.s();!(e=s.n()).done;){var n=Object(_["a"])(e.value,2),a=n[0],o=n[1];if(o.includes(i))return a+1}}catch(r){s.e(r)}finally{s.f()}return 0},drop:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function i(){var s,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t.preventDefault(),!((null===(s=t.dataTransfer.files)||void 0===s?void 0:s.length)>0)){i.next=6;break}return i.next=4,e.upload(Array.from(t.dataTransfer.files).filter((function(t){return e.extensions.includes(e.getExt(t.name))})));case 4:i.next=9;break;case 6:n=JSON.parse(t.dataTransfer.getData("text")),window.URL.revokeObjectURL(n.url),e.$emit("upload",e.files.filter((function(t){return t.name!==n.name})));case 9:case"end":return i.stop()}}),i)})))()},drag:function(t,e){t.dataTransfer.setData("text/plain",JSON.stringify(this.files[e]))}},model:{prop:"files",event:"upload"}},x=w,C=(i("23ab"),Object(m["a"])(x,b,y,!1,null,"f165d1e6",null)),k=C.exports,O={name:"Instruction",props:["instructions"],components:{FileDrop:v,FileUpload:k},data:function(){return{selected:void 0}},watch:{instructions:function(t){t&&this.selectLast()}},computed:{instruction:function(){var t;return this.$emit("select",this.selected),(null===(t=this.instructions)||void 0===t?void 0:t.length)>0?this.instructions[this.selected]:null}},methods:{validateMediaLinks:function(){var t=this.instruction.files,e=function(e){return!t.find((function(t){return t.name===e}))};e(this.instruction.preview_url)&&(this.instruction.preview_url="");var i,s=Object(l["a"])(this.instruction.steps);try{for(s.s();!(i=s.n()).done;){var n=i.value;e(n.preview_url)&&(n.preview_url="");var a,o=Object(l["a"])(n.assets);try{for(o.s();!(a=o.n()).done;){var r=a.value;e(r.media.url)&&(r.media.url="",r.media.type=0)}}catch(c){o.e(c)}finally{o.f()}}}catch(c){s.e(c)}finally{s.f()}},createInstruction:function(){this.instructions.push({index:{id:Object(c["a"])(),name:"Instruction "+(this.instructions.length+1),size:0,description:"",preview_url:"",step_count:0,last_modified:""},steps:[],files:[]}),this.selectLast()},duplicateInstruction:function(){var t=JSON.parse(JSON.stringify(this.instruction));t.index.id=Object(c["a"])(),t.index.name+=" (copy)",this.instructions.push(t),this.selectLast()},deleteInstruction:function(){this.instructions.splice(this.selected,1),this.selected>=this.instructions.length&&this.selectLast()},selectLast:function(){this.selected=this.instructions.length-1}}},S=O,L=Object(m["a"])(S,o,r,!1,null,null,null),M=L.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"card"},[i("p",{staticClass:"label bold"},[t._v("steps")]),t.steps?[i("div",{staticClass:"toolbar"},[i("button",{attrs:{tooltip:"create new"},on:{click:t.createStep}},[i("i",{staticClass:"material-icons-outlined"},[t._v("add")])]),t.step?[i("button",{attrs:{tooltip:"duplicate"},on:{click:t.duplicateStep}},[i("i",{staticClass:"material-icons-outlined"},[t._v("library_add")])]),i("button",{attrs:{tooltip:"delete"},on:{click:t.deleteStep}},[i("i",{staticClass:"material-icons-outlined"},[t._v("delete")])]),i("button",{attrs:{tooltip:"move up"},on:{click:function(e){return t.reoderSteps(!0)}}},[i("i",{staticClass:"material-icons-outlined"},[t._v("arrow_upward")])]),i("button",{attrs:{tooltip:"move down"},on:{click:function(e){return t.reoderSteps(!1)}}},[i("i",{staticClass:"material-icons-outlined"},[t._v("arrow_downward")])])]:t._e()],2),t.steps.length>0?i("div",{staticClass:"list",staticStyle:{height:"125px"}},t._l(t.steps,(function(e,s){return i("button",{key:s,class:{selected:s===t.selected},on:{click:function(e){t.selected=s}}},[t._v(t._s(e.name))])})),0):t._e()]:t._e(),t.step?[i("p",{staticClass:"label"},[t._v("name")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.step.name,expression:"step.name"}],attrs:{type:"text"},domProps:{value:t.step.name},on:{input:function(e){e.target.composing||t.$set(t.step,"name",e.target.value)}}}),i("p",{staticClass:"label"},[t._v("description")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.step.description,expression:"step.description"}],domProps:{value:t.step.description},on:{input:function(e){e.target.composing||t.$set(t.step,"description",e.target.value)}}}),t._v(" "),i("p",{staticClass:"label"},[t._v("preview")]),i("FileDrop",{attrs:{types:[1]},model:{value:t.step.preview_url,callback:function(e){t.$set(t.step,"preview_url",e)},expression:"step.preview_url"}})]:t._e()],2)])},I=[],A={name:"Step",props:["steps"],components:{FileDrop:v},data:function(){return{selected:void 0}},computed:{step:function(){var t;return this.$emit("select",this.selected),(null===(t=this.steps)||void 0===t?void 0:t.length)>0?this.steps[this.selected]:null}},watch:{steps:function(t){t&&this.selectLast()}},methods:{createStep:function(){this.steps.push({name:"Step "+(this.steps.length+1),description:"",preview_url:"",assets:[]}),this.selectLast()},duplicateStep:function(){var t=JSON.parse(JSON.stringify(this.step));t.name+=" (copy)",this.steps.push(t),this.selectLast()},deleteStep:function(){this.steps.splice(this.selected,1),this.selected>=this.steps.length&&this.selectLast()},selectLast:function(){this.selected=this.steps.length-1},reoderSteps:function(t){var e=this.selected+(t?-1:1);if(!(e<0||e>=this.steps.length)){var i=this.steps[e];this.steps[e]=this.steps[this.selected],this.steps[this.selected]=i,this.selected=e}}}},P=A,$=Object(m["a"])(P,j,I,!1,null,null,null),z=$.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"card"},[i("p",{staticClass:"label bold"},[t._v("assets")]),t.assets?[i("div",{staticClass:"toolbar"},[i("button",{attrs:{tooltip:"create new"},on:{click:t.createAsset}},[i("i",{staticClass:"material-icons-outlined"},[t._v("add")])]),t.asset?[i("button",{attrs:{tooltip:"duplicate"},on:{click:t.duplicateAsset}},[i("i",{staticClass:"material-icons-outlined"},[t._v("library_add")])]),i("button",{attrs:{tooltip:"awlays face camera"},on:{click:function(e){t.asset.billboard=!t.asset.billboard}}},[t.asset.billboard?i("i",{staticClass:"material-icons-outlined"},[t._v("screen_rotation")]):i("i",{staticClass:"material-icons-outlined"},[t._v("screen_lock_rotation")])]),i("button",{attrs:{tooltip:"toggle visibility"},on:{click:function(e){t.asset.hidden=!t.asset.hidden}}},[t.asset.hidden?i("i",{staticClass:"material-icons-outlined"},[t._v("visibility_off")]):i("i",{staticClass:"material-icons-outlined"},[t._v("visibility")])]),i("button",{attrs:{tooltip:"delete"},on:{click:t.deleteAsset}},[i("i",{staticClass:"material-icons-outlined"},[t._v("delete")])])]:t._e()],2),t.assets.length>0?i("div",{staticClass:"list",staticStyle:{height:"125px"}},t._l(t.assets,(function(e,s){return i("button",{key:s,class:{selected:s===t.selected},on:{click:function(e){t.selected=s}}},[t._v(t._s(e.name))])})),0):t._e()]:t._e(),t.asset?[i("p",{staticClass:"label"},[t._v("name")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.asset.name,expression:"asset.name"}],attrs:{type:"text"},domProps:{value:t.asset.name},on:{input:function(e){e.target.composing||t.$set(t.asset,"name",e.target.value)}}}),i("p",{staticClass:"label"},[t._v("description")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.asset.media.description,expression:"asset.media.description"}],domProps:{value:t.asset.media.description},on:{input:function(e){e.target.composing||t.$set(t.asset.media,"description",e.target.value)}}}),t._v(" "),i("p",{staticClass:"label"},[t._v("media")]),i("FileDrop",{model:{value:t.asset.media.url,callback:function(e){t.$set(t.asset.media,"url",e)},expression:"asset.media.url"}}),i("p",{staticClass:"label"},[t._v("position")]),i("Vector",{attrs:{vector:t.asset.transform.position}}),i("p",{staticClass:"label"},[t._v("orientation")]),i("Vector",{attrs:{vector:t.asset.transform.orientation}}),i("p",{staticClass:"label"},[t._v("scale")]),i("Vector",{attrs:{min:.1,vector:t.asset.transform,keys:["scale"]}})]:t._e()],2)])},T=[],D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"root"}},t._l(t.skeys,(function(e){return i("input",{key:e,ref:e,refInFor:!0,style:{width:t.width},attrs:{type:"number",step:"0.1"},on:{input:function(i){return t.validate(e)},blur:function(i){return t.blur(e)}}})})),0)},R=[],E=(i("b64b"),{name:"Vector",props:["vector","min","keys"],computed:{skeys:function(){var t;return null!==(t=this.keys)&&void 0!==t?t:Object.keys(this.vector)},width:function(){return 100/this.skeys.length+"%"}},watch:{vector:{handler:function(){this.blurAll()},deep:!0}},mounted:function(){this.blurAll()},methods:{blurAll:function(){var t,e=Object(l["a"])(this.skeys);try{for(e.s();!(t=e.n()).done;){var i=t.value;this.blur(i)}}catch(s){e.e(s)}finally{e.f()}},blur:function(t){this.$refs[t][0].value=this.vector[t]},validate:function(t){var e=this.$toFloat(this.$refs[t][0].value);this.vector[t]=this.min?Math.max(this.min,e):e}}}),F=E,N=(i("af75"),Object(m["a"])(F,D,R,!1,null,"2ade9797",null)),B=N.exports,J={name:"Asset",props:["assets"],components:{FileDrop:v,Vector:B},data:function(){return{selected:void 0}},computed:{asset:function(){var t;return this.$emit("select",this.selected),(null===(t=this.assets)||void 0===t?void 0:t.length)>0?this.assets[this.selected]:null}},watch:{assets:function(t){t&&this.selectLast()}},methods:{createAsset:function(){this.assets.push({id:Object(c["a"])(),name:"Asset "+(this.assets.length+1),media:{type:0,url:"",description:""},transform:{position:{x:0,y:0,z:0},orientation:{x:0,y:0,z:0},scale:1},hidden:!1,billboard:!1}),this.selectLast()},duplicateAsset:function(){var t=JSON.parse(JSON.stringify(this.asset));t.id=Object(c["a"])(),t.name+=" (copy)",this.assets.push(t),this.selectLast()},deleteAsset:function(){this.assets.splice(this.selected,1),this.selected>=this.assets.length&&this.selectLast()},selectLast:function(){this.selected=this.assets.length-1}}},U=J,H=Object(m["a"])(U,V,T,!1,null,"3ee78eb5",null),X=H.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("canvas",{ref:"canvas"})])},Y=[],q=(i("a4d3"),i("e01a"),i("d4ec")),G=i("bee2"),K=i("633b"),Q=(i("b234"),i("6fcd")),W=(i("dd4a"),0),tt=1,et=2,it=3,st=4;function nt(t,e,i){function s(t,e){for(var i=0;i<e.length;i++)if(e[i].name==t)return e[i]}function n(e){for(var i=0;i<t.assets.length;i++)if(t.assets[i].id==e)return t.assets[i];return null}if(!e||0==e.length||1==e.length&&""==e[0].media.url&&""==e[0].media_desc)return t;for(var a=0;a<e.length;a++){var o,r=e[a],l=null;""!=r.media.url&&(l=s(e[a].media.url,i));var c=n(r.id);t.manageAsset(c,r.id,r.name,l?l.type:0,{media_desc:r.media.description,position:{x:r.transform.position.x,y:r.transform.position.y,z:r.transform.position.z},rotation:{x:r.transform.orientation.x,y:r.transform.orientation.y,z:r.transform.orientation.z},scale:r.transform.scale,billboard:r.billboard,hidden:r.hidden,url:null===(o=l)||void 0===o?void 0:o.content})}return t}var at=function(){function t(e){Object(q["a"])(this,t),this.node=e,this.createScene(),this.assets=[]}return Object(G["a"])(t,[{key:"manageAsset",value:function(t,e,i,s,n){if(null==t){var a=new ot(e,i,s,this.scene,{media_desc:n.media_desc,url:n.url,position:{x:n.position.x,y:n.position.y,z:n.position.z},rotation:{x:n.rotation.x,y:n.rotation.y,z:n.rotation.z},scale:n.scale,hidden:n.hidden,billboard:n.billboard});this.assets.push(a)}else{var o=t;o.name=i,o.hidden=n.hidden,(o.media_type!=s||o.url!=n.url||o.billboard!=n.billboard||o.media_type==W&&o.media_desc!=n.media_desc)&&(o.media_type=s,o.url=n.url,o.billboard=n.billboard,o.model.dispose(),o.loadObject(this.scene)),o.media_desc=n.media_desc,o.setScale(n.scale),o.setPosition({x:n.position.x,y:n.position.y,z:n.position.z}),o.setOrientation({x:n.rotation.x,y:n.rotation.y,z:n.rotation.z}),o.setTransparent(o.hidden)}}},{key:"findAssetIndexById",value:function(t){for(var e=0;e<this.assets.length;e++)if(this.assets[e].id==t)return e}},{key:"deleteAsset",value:function(t){var e=this.findAssetIndexById(t);this.assets[e].model.dispose(),this.assets.splice(e)}},{key:"createScene",value:function(){var t=new K["Engine"](this.node,!1,{preserveDrawingBuffer:!0,stencil:!0}),e=new K["Scene"](t);e.createDefaultCameraOrLight(!0,!0,!0),e.activeCamera.beta-=.2,e.activeCamera.upperBetaLimit=Math.PI/2.1,e.activeCamera.lowerRadiusLimit=3,e.activeCamera.upperRadiusLimit=20,e.activeCamera.setTarget(new K["Vector3"](0,0,0)),e.activeCamera.setPosition(new K["Vector3"](0,3,10)),e.clearColor=new K["Color3"](.5,.8,.5),e.lights[0].dispose();var i=new K["DirectionalLight"]("light1",new K["Vector3"](-2,-3,1),e);i.position=new K["Vector3"](0,0,10),i.intensity=1;for(var s=[],n=0;n<6;n++)s.push(new K["HemisphericLight"]("HemiLight",new K["Vector3"](0,-.001,0),e)),s[n].intensity=.8;s[0].position=new K["Vector3"](0,2,5),s[1].position=new K["Vector3"](5,2,0),s[2].position=new K["Vector3"](-5,2,0),s[3].position=new K["Vector3"](0,2,-5),s[4].position=new K["Vector3"](0,-5,0),s[5].position=new K["Vector3"](0,8,0);var a=e.createDefaultEnvironment({groundShadowLevel:-5});a.setMainColor(new K["Color3"](.698,.502,.69)),t.runRenderLoop((function(){e.render()}));var o=function(t){var i=K["Mesh"].CreateLines("axisX",[new K["Vector3"](-t,0,0),new K["Vector3"](t,0,0),new K["Vector3"](t,0,0)],e);i.color=new K["Color3"](1,0,0);var s=K["MeshBuilder"].CreateCylinder("cone",{diameterBottom:.2,diameterTop:.03,tessellation:100,height:.2},e);s.position=new K["Vector3"](-t,0,0),s.rotation=new K["Vector3"](Math.PI/2,-Math.PI/2,0),s.material=new K["StandardMaterial"]("matX",e),s.material.emissiveColor=new K["Color3"](1,0,0),s.material.diffuseColor=new K["Color3"](1,0,0);var n=K["Mesh"].CreateLines("axisY",[new K["Vector3"].Zero,new K["Vector3"](0,2*t/3,0),new K["Vector3"](0,2*t/3,0)],e);n.color=new K["Color3"](0,1,0);var a=K["MeshBuilder"].CreateCylinder("cone",{diameterBottom:.2,diameterTop:.03,tessellation:100,height:.2},e);a.position=new K["Vector3"](0,2/3*t,0),a.rotation=new K["Vector3"](0,0,0),a.material=new K["StandardMaterial"]("matY",e),a.material.emissiveColor=new K["Color3"](0,1,0),a.material.diffuseColor=new K["Color3"](0,1,0);var o=K["Mesh"].CreateLines("axisZ",[new K["Vector3"](0,0,-t),new K["Vector3"](0,0,t),new K["Vector3"](0,0,t)],e);o.color=new K["Color3"](0,0,1);var r=K["MeshBuilder"].CreateCylinder("cone",{diameterBottom:.2,diameterTop:.03,tessellation:100,height:.2},e);r.position=new K["Vector3"](0,0,t),r.rotation=new K["Vector3"](Math.PI/2,0,0),r.material=new K["StandardMaterial"]("matZ",e),r.material.emissiveColor=new K["Color3"](0,0,1),r.material.diffuseColor=new K["Color3"](0,0,1)};o(5),this.scene=e}}]),t}(),ot=function(){function t(e,i,s,n,a){Object(q["a"])(this,t),this.id=e,this.name=i,this.media_type=s,this.media_desc=a.media_desc,this.url=a.url,this.hidden=a.hidden,this.billboard=a.billboard,this.loadObject(n,a),this.setScale(a.scale),this.setPosition({x:a.position.x,y:a.position.y,z:a.position.z}),this.setOrientation({x:a.rotation.x,y:a.rotation.y,z:a.rotation.z}),this.setTransparent(a.hidden)}return Object(G["a"])(t,[{key:"setPosition",value:function(t){this.model.position.x=-t.x,this.model.position.y=t.y,this.model.position.z=t.z,this.media_type==W?this.model.position.y+=.1:this.media_type==tt&&(this.model.position.y+=.5)}},{key:"setOrientation",value:function(t){if(this.billboard){if(this.media_type==tt)return this.model.rotation.x=-Math.PI/2,this.model.rotation.y=0,void(this.model.rotation.z=0);if(this.media_type==W)return this.model.rotation.x=t.x*Math.PI/180-Math.PI/2,this.model.rotation.y=t.y*Math.PI/180,void(this.model.rotation.z=t.z*Math.PI/180)}var e=this.model.rotation.x,i=this.model.rotation.y,s=this.model.rotation.z;this.model.rotation.x=t.x*Math.PI/180,this.model.rotation.y=t.y*Math.PI/180,this.model.rotation.z=t.z*Math.PI/180,this.media_type==W?(this.model.rotation.x-=Math.PI/2,this.model.rotation.z+=Math.PI):this.media_type==tt?this.model.rotation.y+=Math.PI:this.media_type==st&&(this.model.rotate(K["Axis"].X,this.model.rotation.x-e,K["Space"].LOCAL),this.model.rotate(K["Axis"].Y,this.model.rotation.y-i,K["Space"].LOCAL),this.model.rotate(K["Axis"].Z,this.model.rotation.z-s,K["Space"].LOCAL))}},{key:"setScale",value:function(t){this.model.scaling.x=t,this.model.scaling.y=t,this.model.scaling.z=t}},{key:"setTransparent",value:function(t){t?(this.media_type!=tt&&this.media_type!=W||(this.modelMaterial.alpha=.5),this.media_type==st&&(this.model.visibility=.5,this.modelMaterial.alpha=.5)):(this.media_type==tt&&(this.modelMaterial.alpha=1),this.media_type==st&&(this.model.visibility=1,this.modelMaterial.alpha=1))}},{key:"loadObject",value:function(t){switch(this.media_type){case W:this.loadText(t);break;case tt:case et:case it:this.loadImage(t);break;case st:this.load3DObject(t);break}}},{key:"loadText",value:function(t){var e=K["Mesh"].CreateGround("ground",8,6,2,t,!0),i=Q["AdvancedDynamicTexture"].CreateForMesh(e,1024,1024,!0,!0);e.emissiveTexture=i;var s=new Q["TextBlock"];s.text=this.media_desc,s.color="black",s.fontSize=40,i.addControl(s),this.billboard&&(e.billboardMode=K["Mesh"].BILLBOARDMODE_ALL),this.model=e}},{key:"loadImage",value:function(t){var e=this,i=new Image;function s(e,i,s){var n=new K["StandardMaterial"]("material",t);n.diffuseTexture=new K["Texture"](s.url,t),n.diffuseTexture.hasAlpha=!0,n.backFaceCulling=!1,s.modelMaterial=n,s.img_width=i,s.img_height=e;var a=new K["MeshBuilder"].CreatePlane(s.name,{height:1,width:i/e},t);a.updatable=!0,a.material=n,s.billboard&&(n.backFaceCulling=!0,a.billboardMode=K["Mesh"].BILLBOARDMODE_ALL),s.model=a}i.onload=function(){s(this.height,this.width,e)},i.src=e.url}},{key:"load3DObject",value:function(t){var e=this,i=e.url,s=K["Tools"].DecodeBase64(i),n=new Blob([s]),a=URL.createObjectURL(n);K["SceneLoader"].LoadAssetContainer("",a,t,(function(t){e.model=t.meshes[0],e.modelMaterial=t.materials[0],t.addAllToScene()}),void 0,void 0,".glb")}}]),t}(),rt={name:"Render",props:["assets","files"],data:function(){return{slide:null,ids:[]}},watch:{assets:{handler:function(){this.render()},deep:!0},files:{handler:function(){this.render()},deep:!0}},mounted:function(){this.slide=new at(this.$refs.canvas)},methods:{render:function(){var t,e=this;nt(this.slide,this.assets,this.files);var i=(null!==(t=this.assets)&&void 0!==t?t:[]).map((function(t){return t.id}));this.ids.filter((function(t){return!i.includes(t)})).forEach((function(t){return e.slide.deleteAsset(t)})),this.ids=i}}},lt=rt,ct=(i("026a"),Object(m["a"])(lt,Z,Y,!1,null,"c9690a80",null)),dt=ct.exports,ut=i("c4e3");s["a"].prototype.$toFloat=function(t){return t=parseFloat(t),isNaN(t)?0:t};var pt={name:"App",components:{Instruction:M,Step:z,Asset:X,Render:dt},data:function(){return{currentInstruction:0,instructions:[],files:[],steps:[],assets:[]}},mounted:function(){this.downloadInstructions()},methods:{selectInstruction:function(t){var e;this.currentInstruction=t;var i=(null===(e=this.instructions)||void 0===e?void 0:e.length)>0?this.instructions[t]:null;this.steps=null===i||void 0===i?void 0:i.steps,this.files=null===i||void 0===i?void 0:i.files},selectStep:function(t){var e;this.assets=(null===(e=this.steps)||void 0===e?void 0:e.length)>0?this.steps[t].assets:null},downloadInstructions:function(){},uploadInstruction:function(){var t=this.instructions[this.currentInstruction],e=t.steps,i=t.files,s=t.index;s.step_count=e.length,s.last_modified=Date.now(),e.forEach((function(t){return t.assets.filter((function(t){return t.media.url})).forEach((function(t){return t.media.type=i.find((function(e){return e.name===t.media.url})).type}))}));var n=new ut;n.file(s.id+"/index.json",JSON.stringify(s)),n.file(s.id+"/steps.json",JSON.stringify(e)),i.forEach((function(t){n.file(s.id+"/media/"+t.name,t.content.substring(t.content.indexOf("base64,")+"base64,".length),{base64:!0})})),n.generateAsync({type:"blob",compression:"DEFLATE"}).then((function(t){var e=new XMLHttpRequest;e.open("POST","https://ad0d9c3e.ngrok.io",!0),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.send(t)}))}}},ht=pt,mt=(i("4814"),Object(m["a"])(ht,n,a,!1,null,"1bc84aa6",null)),ft=mt.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(ft)}}).$mount("#app")},"81b6":function(t,e,i){"use strict";var s=i("1833"),n=i.n(s);n.a},9048:function(t,e,i){},af75:function(t,e,i){"use strict";var s=i("e887"),n=i.n(s);n.a},e887:function(t,e,i){}});
//# sourceMappingURL=app.1af2e22b.js.map