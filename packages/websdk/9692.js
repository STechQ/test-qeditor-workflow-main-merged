"use strict";(this.webpackChunk_stechquick_websdk=this.webpackChunk_stechquick_websdk||[]).push([[9692],{69692:(t,n,e)=>{e.r(n),e.d(n,{default:()=>u});var i=function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{ref:"animationContainer",style:"width:"+t.width+"px !important; height:"+t.height+"px !important; position:"+t.position+" !important; top:"+t.top+" !important; right:"+t.right+" !important; left:"+t.left+" !important; bottom:"+t.bottom+" !important;  z-index:"+t.zIndex+" !important;"})};i._withStripped=!0;var o=e(89146),r=e(18075),a=e.n(r),s=e(36070);const p=o.default.extend({name:"QAnimation",data:function(){return{lottieInstance:a()}},watch:{source:function(t,n){console.log(t),this.loadAnimation(t)}},mounted:function(){this.loadAnimation(this.source)},methods:{loadAnimation:function(t){var n;if("string"!=typeof t)this.lottieInstance.loadAnimation({container:this.$refs.animationContainer,renderer:"svg",loop:!0,autoplay:!0,animationData:t});else{var e=t.startsWith("http")?new URL(t).href:new URL(t,null===(n=s.q.Instance.Window.location)||void 0===n?void 0:n.href).href;this.lottieInstance.loadAnimation({container:this.$refs.animationContainer,renderer:"svg",loop:!0,autoplay:!0,path:e})}},hibernate:function(){a().pause()},resurrect:function(){a().play()}},props:{source:{type:[String,Object]},height:{type:Number,default:200},width:{type:Number,default:200},position:{type:String},top:{type:[String,Number]},right:{type:[String,Number]},bottom:{type:[String,Number]},zIndex:{type:[String,Number]},left:{type:[String,Number]}},destroyed:function(){a().destroy()}}),u=(0,e(62264).Z)(p,i,[],!1,null,"8b96c246",null).exports}}]);