﻿"use strict";(this.webpackChunk_stechquick_websdk=this.webpackChunk_stechquick_websdk||[]).push([[7320],{17320:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var o=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"layoutContainer",style:"width:"+e.width+"; height:"+e.height+";",attrs:{id:"layoutContainer"}})};o._withStripped=!0;var i=n(89146),a=n(16178),d=n.n(a),r=n(36070);function c(e){var t=this,n=document.createElement("li");n.className="lm_popout",e.header.controlsContainer.prepend(n),function(e,n){var o=void 0,i=window;e.onclick=function(){if(!t._renderingProps.isEditMode){var e=o.config.componentState.class,n="wind"+(1e4*Math.random()).toFixed(0),a=window.open("",n,"height=700,width=1000");t.childWindows.push({windId:n,childWindow:a}),a&&(a.onload=function(){if(a){if(a.ranOnce)return;a.ranOnce=!0;var d=document.getElementsByClassName(e)[0].children[0],c=document.createElement("DIV");a.document.write("<!DOCTYPE html><html><head><title>"+o.config.title+"</title></head><body></body></html>"),a.document.body.append(c),c.className="lm_content "+i.document.getElementsByClassName("v-application")[0].getAttribute("class"),c.style.width="100%",c.style.height="100%",c.style.overflow="scroll",c.style.display="grid",c.append(d);for(var l=document.head.children,s=0;s<l.length;s++){var m=l[s];if("LINK"==m.tagName){var u=m,h=a.document.createElement("link");h.rel="stylesheet",h.type="text/css",h.href=u.href,a.document.head.appendChild(h)}else if("STYLE"==m.tagName){var f=a.document.createElement("style");f.type="text/css",f.innerHTML=m.innerHTML,a.document.head.appendChild(f)}}a.stateCopy={componentState:{class:o.config.componentState.class,text:o.config.componentState.text,fromWindow:!0},title:o.config.title,type:"component",componentName:o.config.componentName},a.onbeforeunload=function(){t.addItem({config:a.stateCopy}),i.document.getElementsByClassName(a.stateCopy.componentState.class)[0].appendChild(a.document.getElementsByClassName("innerWindow")[0]),t.childWindows.splice(t.childWindows.findIndex((function(e){return e.windId==n})),1)},p=t.childWindows,g=r.q.Instance.document,v=g.body.appendChild,g.body.appendChild=function(e){if(g.hasFocus())return v.apply(window.document.body,[e]),e;for(var t=0;t<p.length;t++)if(p[t].childWindow.document.hasFocus()){p[t].childWindow.document.body.appendChild(e);break}return e},o.remove()}var p,g,v},a.document&&"complete"==a.document.readyState&&a.onload())}},n.on("activeContentItemChanged",(function(e){o=e,t.$emit("activeContentItemChanged",e)}))}(n,e)}const l=i.default.extend({name:"GoldenLayout",data:function(){return{config:{settings:{showPopoutIcon:!1,selectionEnabled:!0},dimensions:{},content:[{type:"stack",id:"default",content:[{type:"component",componentName:"component",title:"default",componentState:{id:"default",text:"default",class:"default"+(1e5*Math.random()).toFixed(0)}}]}]},getGoldenLayout:null,getContentItems:null,getComponentInCreation:null,componentCb:null,StateChangedForDesign:!1,closedPanes:[],containerWidth:0,containerHeight:0,childWindows:[]}},props:{_renderingProps:{default:{context:void 0,isEditMode:void 0}},width:{type:String,default:"1200px"},height:{type:String,default:"700px"},glConfig:{type:Object,default:null},childNames:{type:Array,default:["default"]},dimensions:{type:Object}},methods:{getClosedPanes:function(){return this.closedPanes},getConfig:function(){return this.getGoldenLayout().toConfig()},setConfig:function(e){var t,n=this;this.getGoldenLayout().config=e,this.getGoldenLayout().root.contentItems.forEach((function(e){e.remove()})),null===(t=e.content)||void 0===t||t.forEach((function(e){n.getGoldenLayout().root.addChild(e)})),this.StateChangedForDesign=!0},findContentItem:function(e){return this.getContentItems().find((function(t){return t.config.componentState.id==e}))},changeTitle:function(e,t){this.findContentItem(e).setTitle(t)},removePane:function(e){var t=this,n=t.findContentItem(e),o=[];o.push(e),t.removeItem(o),n.remove(),t.$emit("paneClosed",e)},addItem:function(e){var t=e.childName,n=e.config,o={type:"component",componentName:"component",title:t,componentState:{id:t,text:t,class:t+(1e5*Math.random()).toFixed(0)}};n&&(o=n);var i=this.getGoldenLayout();i.root.contentItems[0].addChild(o),this.childNames.push(t);var a=i.toConfig();return this.$emit("paneCreated",t),a},goldenLayoutInit:function(e){this.StateChangedForDesign=e},removeItem:function(e){var t=this,n=this._renderingProps.context().GetItemSingle("Dory"),o=this._renderingProps.context().GetItemSingle("HistoryManager").currentLevel().last().qjson.pJson.find((function(e){return"GoldenLayout"==e.T}));e.forEach((function(e){var i,a;t._renderingProps.isEditMode&&t.childNames.splice(t.childNames.indexOf(e),1),o.C[e]&&!t._renderingProps.isEditMode&&t.closedPanes.push(e),null===(a=null===(i=t.componentCb().children)||void 0===i?void 0:i[e])||void 0===a||a.map((function(e){return e.compId})).forEach((function(e){return n.DestroyComponentCollectionByID(e)})),t.$emit("paneClosed",e)})),t.$emit("GL_stateChanged",t.getGoldenLayout().toConfig(),t.childNames)},customChildAppender:function(e){var t=e.childName,n=(e.createdComps,this.closedPanes.findIndex((function(e){return e==t})));n>-1&&this.closedPanes.splice(n,1),this.addItem({childName:t})},appendDomElements:function(e,t){var n,o;if(t.fromWindow)e.getElement()[0].innerHTML='<div class="'+t.class+'"></div>',t.fromWindow=!1;else{if(!this.componentCb){var i=this.getComponentInCreation();this.componentCb=function(){return i}}var a=null===(o=null===(n=this.componentCb().children)||void 0===n?void 0:n[t.id])||void 0===o?void 0:o.map((function(e){return e.domElement}));if(!a)return;e.getElement()[0].innerHTML='<div class="'+t.class+'"><div class="innerWindow"></div>',a.forEach((function(t){t&&e.getElement()[0].getElementsByClassName("innerWindow")[0].append(t)}))}},onStackClose:function(e){var t=this;e.header.controlsContainer.find(".lm_close").off("click").click((function(){for(var n=[],o=0;o<e.config.content.length;o++){var i=e.config.content[o].componentState.id;n.push(i)}t.removeItem(n),t.StateChangedForDesign=!t._renderingProps.isEditMode,e.remove()}))},resizeObserver:function(){var e=this;new ResizeObserver((function(t){t.forEach((function(t){e.containerWidth==t.target.clientWidth&&e.containerHeight==t.target.clientHeight||(e.containerWidth=t.target.clientWidth,e.containerHeight=t.target.clientHeight,e.getGoldenLayout().updateSize())}))})).observe(this.$refs.layoutContainer)},closeChildWindows:function(){this.childWindows&&this.childWindows.forEach((function(e){e.childWindow.closed||e.childWindow.close()}))}},mounted:function(){var e,t,n=this;n.closedPanes=[];var o=this.$refs.layoutContainer;if(window.parentContainer=o,o){this.glConfig&&(this.config=this.glConfig),this.config.dimensions=this.dimensions||this.config.dimensions;var i=this._renderingProps.context().GetItemSingle("RenderingContext");this.getComponentInCreation=function(){return i.componentInCreation};var a=new(d())(this.config,o);this.resizeObserver(),a.registerComponent("component",(function(e,t){var o,i;if(t.fromWindow)e.getElement()[0].innerHTML='<div class="'+t.class+'"></div>',t.fromWindow=!1;else{if(!n.componentCb){var a=n.getComponentInCreation();n.componentCb=function(){return a}}var d=null===(i=null===(o=n.componentCb().children)||void 0===o?void 0:o[t.id])||void 0===i?void 0:i.map((function(e){return e.domElement}));if(!d)return;e.getElement()[0].innerHTML='<div class="'+t.class+'"><div class="innerWindow"></div>',d.forEach((function(t){t&&(e.getElement()[0].getElementsByClassName("innerWindow")[0].append(t),e.getElement()[0].style.overflow="overlay")}))}})),a.on("stateChanged",(function(){n.StateChangedForDesign?n.StateChangedForDesign=!1:n.$emit("GL_stateChanged",n.getGoldenLayout().toConfig(),n.childNames)})),a.on("stackCreated",(function(e){c.call(n,e),n.onStackClose(e)})),a.on("tabCreated",(function(e){n.$emit("paneCreated",e.contentItem.config.componentState.text),e.closeElement.off("click").click((function(){var t=e.contentItem.config.componentState.text;n.removeItem([t]),n.StateChangedForDesign=!n._renderingProps.isEditMode,e.contentItem.remove()}))})),this.getContentItems=function(){var e,t,o=[];return null===(t=(e=n.getGoldenLayout())._getAllContentItems)||void 0===t||t.call(e).forEach((function(e){"component"==e.config.type&&o.push(e)})),o},a.init(),this.getGoldenLayout=function(){return a};var r=document.getElementsByTagName("head"),l=!1;try{for(var s=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(r[0].children),m=s.next();!m.done;m=s.next()){var u=m.value;u.href&&u.href.includes("goldenlayout-base")&&(l=!0)}}catch(t){e={error:t}}finally{try{m&&!m.done&&(t=s.return)&&t.call(s)}finally{if(e)throw e.error}}if(!l){var h=document.createElement("link");h.href="https://golden-layout.com/files/latest/css/goldenlayout-base.css",h.rel="stylesheet",h.type="text/css";var f=document.createElement("link");f.href="https://golden-layout.com/files/latest/css/goldenlayout-light-theme.css",f.rel="stylesheet",f.type="text/css",r[0].appendChild(h),r[0].appendChild(f)}}},destroyed:function(){var e;null===(e=this.$el)||void 0===e||e.remove()}}),s=(0,n(62264).Z)(l,o,[],!1,null,null,null).exports}}]);