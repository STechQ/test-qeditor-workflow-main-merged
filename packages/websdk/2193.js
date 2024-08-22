"use strict";(this.webpackChunk_stechquick_websdk=this.webpackChunk_stechquick_websdk||[]).push([[2193],{16186:(t,e,n)=>{n.d(e,{Z:()=>s});var i=n(55402),r=n.n(i),o=n(60352),a=n.n(o)()(r());a.push([t.id,'\n.otp-wrapper[data-v-24fda16f] {\n  display: grid;\n  justify-items: start;\n}\n.otp-container[data-v-24fda16f] {\n  display: flex;\n  gap: 1rem;\n}\n.otp-wrapper .error-label[data-v-24fda16f] {\n  color: red;\n  font-size: 12px;\n  grid-column: 1;\n  justify-self: start;\n}\n.otp-container .error-input[data-v-24fda16f] {\n  border-color: red !important;\n}\n.otp-container input[data-v-24fda16f] {\n  border: 1px solid #0000006b;\n  border-radius: 4px;\n  padding: 0 12px;\n  text-align: center;\n}\n.otp-container input[type="number"][data-v-24fda16f]::-webkit-inner-spin-button {\n  display: none;\n}\n.otp-container input[data-v-24fda16f]:disabled {\n  border-color: #00000029;\n  background-color: #00000005;\n}\n',""]);const s=a},92193:(t,e,n)=>{n.r(e),n.d(e,{default:()=>m});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["otp-wrapper "+t.customClass]},[n("div",{ref:"otpContainerRef",staticClass:"otp-container"},t._l(t.numInputs,(function(e){return"checkbox"===("number"===t.type?"text":t.type)?n("input",{directives:[{name:"model",rawName:"v-model",value:t.otp[e-1],expression:"otp[i - 1]"}],key:e,ref:"input-"+(e-1),refInFor:!0,staticClass:"otp-input",style:{height:t.height,width:t.width},attrs:{maxlength:1,disabled:t.disabled,readonly:t.readonly,type:"checkbox"},domProps:{checked:Array.isArray(t.otp[e-1])?t._i(t.otp[e-1],null)>-1:t.otp[e-1]},on:{input:function(n){return t.handleInput(e-1,n)},keydown:[function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"delete",[8,46],n.key,["Backspace","Delete","Del"])?null:t.handleDelete(e-1)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"right",39,n.key,["Right","ArrowRight"])||"button"in n&&2!==n.button?null:t.handleRightArrowKey(e-1)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"left",37,n.key,["Left","ArrowLeft"])||"button"in n&&0!==n.button?null:t.handleLeftArrowKey(e-1)}],paste:function(e){return t.handlePaste(e)},change:function(n){var i=t.otp[e-1],r=n.target,o=!!r.checked;if(Array.isArray(i)){var a=t._i(i,null);r.checked?a<0&&t.$set(t.otp,e-1,i.concat([null])):a>-1&&t.$set(t.otp,e-1,i.slice(0,a).concat(i.slice(a+1)))}else t.$set(t.otp,e-1,o)}}}):"radio"===("number"===t.type?"text":t.type)?n("input",{directives:[{name:"model",rawName:"v-model",value:t.otp[e-1],expression:"otp[i - 1]"}],key:e,ref:"input-"+(e-1),staticClass:"otp-input",style:{height:t.height,width:t.width},attrs:{maxlength:1,disabled:t.disabled,readonly:t.readonly,type:"radio"},domProps:{checked:t._q(t.otp[e-1],null)},on:{input:function(n){return t.handleInput(e-1,n)},keydown:[function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"delete",[8,46],n.key,["Backspace","Delete","Del"])?null:t.handleDelete(e-1)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"right",39,n.key,["Right","ArrowRight"])||"button"in n&&2!==n.button?null:t.handleRightArrowKey(e-1)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"left",37,n.key,["Left","ArrowLeft"])||"button"in n&&0!==n.button?null:t.handleLeftArrowKey(e-1)}],paste:function(e){return t.handlePaste(e)},change:function(n){return t.$set(t.otp,e-1,null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.otp[e-1],expression:"otp[i - 1]"}],key:e,ref:"input-"+(e-1),staticClass:"otp-input",style:{height:t.height,width:t.width},attrs:{maxlength:1,disabled:t.disabled,readonly:t.readonly,type:"number"===t.type?"text":t.type},domProps:{value:t.otp[e-1]},on:{input:[function(n){n.target.composing||t.$set(t.otp,e-1,n.target.value)},function(n){return t.handleInput(e-1,n)}],keydown:[function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"delete",[8,46],n.key,["Backspace","Delete","Del"])?null:t.handleDelete(e-1)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"right",39,n.key,["Right","ArrowRight"])||"button"in n&&2!==n.button?null:t.handleRightArrowKey(e-1)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"left",37,n.key,["Left","ArrowLeft"])||"button"in n&&0!==n.button?null:t.handleLeftArrowKey(e-1)}],paste:function(e){return t.handlePaste(e)}}})})),0),t._v(" "),!t.valid&&t.error?n("label",{staticClass:"error-label"},[t._v(t._s(this.errorMessage))]):t._e()])};i._withStripped=!0;const r=n(89146).default.extend({name:"QOtp",props:{length:{type:Number,default:4},disabled:{type:Boolean,default:!1},type:{type:String,default:"text"},value:{type:Array},preventPaste:{type:Boolean,default:!0},width:{type:String},height:{type:String},readonly:{type:Boolean},error:{type:Boolean,default:!1},errorMessage:{type:String},customClass:{type:String,default:""}},data:function(){return{numInputs:this.length,otp:Array(this.length).fill(""),valid:!0,firstClick:!1}},created:function(){this.value&&(this.otp=this.value);var t=this;window.addEventListener("click",(function(e){var n=t.$refs.otpContainerRef;e.target&&!(null==n?void 0:n.contains(e.target))&&(t.firstClick&&(t.$emit("blur",t.otp.join("")),t.validateInput()),t.firstClick=!1)}))},mounted:function(){var t=this;Object.defineProperty(this,"value",{get:function(){return t.otp},set:function(e){return t.otp=e}})},methods:{handleInput:function(t,e){var n=this;if(t<this.numInputs){var i=this.otp[t],r=function(){var e;1===i.length&&(null===(e=n.$refs["input-"+(t+1)])||void 0===e||e.focus())};"number"===this.type?/^[0-9]$/.test(i)?r():this.otp[t]="":r(),this.firstClick=!0,this.$emit("input",this.otp.join("")),this.onFinish()}},handleDelete:function(t){t>0&&!this.otp[t]&&this.$refs["input-"+(t-1)].focus()},handlePaste:function(t){if(!0===this.preventPaste){var e=(t.clipboardData||window.Clipboard).getData("text");e.length>this.length?this.otp=e.substr(0,this.length).split(""):this.otp=e.split(""),this.$refs["input-"+(this.otp.length-1)].focus()}else t.preventDefault()},onFinish:function(){this.numInputs===this.otp.length&&this.otp.every((function(t){return""!==t}))&&(this.$emit("finish",this.otp.join("")),this.validateInput())},handleRightArrowKey:function(t){var e;t<this.numInputs-1&&(null===(e=this.$refs["input-"+(t+1)])||void 0===e||e.focus())},handleLeftArrowKey:function(t){var e;t>0&&(null===(e=this.$refs["input-"+(t-1)])||void 0===e||e.focus())},validateInput:function(){this.valid=this.otp.length===this.numInputs&&this.otp.every((function(t){return""!==t}));var t=document.getElementsByClassName("otp-input");!0===this.valid?Array.from(t).forEach((function(t){t.classList.remove("error-input")})):!0===this.error&&Array.from(t).forEach((function(t){t.classList.add("error-input")}))}}});var o=n(75701),a=n.n(o),s=n(8236),l=n.n(s),u=n(6080),d=n.n(u),p=n(46075),h=n.n(p),c=n(87182),f=n.n(c),y=n(39213),k=n.n(y),v=n(16186),g={attributes:{class:"plateauStudioClass"}};g.styleTagTransform=k(),g.setAttributes=h(),g.insert=d().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=f(),a()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;const m=(0,n(62264).Z)(r,i,[],!1,null,"24fda16f",null).exports}}]);