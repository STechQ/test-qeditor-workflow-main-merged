"use strict";(this.webpackChunk_stechquick_websdk=this.webpackChunk_stechquick_websdk||[]).push([[3665],{39834:(t,e,n)=>{n.d(e,{Z:()=>d});var o=n(55402),a=n.n(o),i=n(60352),s=n.n(i)()(a());s.push([t.id,'\n.q-document-html[data-v-3cd77560] {\n  border: none;\n  width: 100%;\n  height: 100%;\n}\n.q-document-img[data-v-3cd77560] {\n  width: 100%;\n}\n.q-document-pdf-wrapper > div > .ratio[data-v-3cd77560] {\n  background-color: green;\n  color: white;\n  text-align: center;\n}\n.q-document-pdf-wrapper > input[data-v-3cd77560] {\n  width: 5em;\n}\n.q-document-pdf[data-v-3cd77560] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n}\n.q-document-pdf-container[data-v-3cd77560] {\n  width: 100%;\n  overflow: auto;\n}\ninput[type="number"][data-v-3cd77560]::-webkit-inner-spin-button {\n  opacity: 1;\n}\ninput[type="number"][data-v-3cd77560] {\n  width: 54px;\n  height: 28px;\n  outline-style: none;\n  background-color: #eeeeee;\n  color: #212121;\n  border-radius: 5px;\n  text-align: center;\n}\n.q-document-zoom-options-list[data-v-3cd77560] {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.q-document-zoom-field[data-v-3cd77560] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.q-document-toolbar-right-options-wrapper[data-v-3cd77560] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n}\n.q-document-toolbar-left-options-wrapper[data-v-3cd77560] {\n  display: flex;\n  align-items: center;\n}\n.q-document-toolbar-wrapper[data-v-3cd77560] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 44px;\n  border-bottom: 1px solid #e0e0e0;\n  align-items: center;\n  position: sticky;\n  z-index: 1;\n  top: 0px;\n  left: 0px;\n}\n.q-document-zoom-options[data-v-3cd77560] {\n  display: flex;\n  background-color: #eeeeee;\n  overflow: hidden;\n  border-radius: 5px;\n  align-items: center;\n  justify-content: center;\n  height: 28px;\n}\n.q-document-icon[data-v-3cd77560] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 30px;\n  width: 30px;\n}\n.q-document-icon[data-v-3cd77560]:hover {\n  background-color: #e3e3e3;\n  border-radius: 5px;\n}\n.q-document-color-text-content[data-v-3cd77560] {\n  color: #212121;\n}\n.q-document-zoom-buttons[data-v-3cd77560] {\n  width: 28px;\n  height: 28px;\n}\n#q-document-download-icon[data-v-3cd77560] {\n  color: #212121;\n}\n#q-document-rotate-icon[data-v-3cd77560] {\n  color: #212121;\n}\n#q-document-zoom-in-icon[data-v-3cd77560] {\n  color: #757575;\n}\n#q-document-zoom-out-icon[data-v-3cd77560] {\n  color: #757575;\n}\n.q-document-toolbar-part-left[data-v-3cd77560],\n.q-document-toolbar-part-center[data-v-3cd77560],\n.q-document-toolbar-part-right[data-v-3cd77560] {\n  flex: 25%;\n}\n@media (max-width: 644px) {\n.q-document-toolbar-part-center[data-v-3cd77560],\n  .q-document-toolbar-part-right[data-v-3cd77560] {\n    flex: 20%;\n}\n}\n@media (max-width: 501px) {\n.q-document-toolbar-part-center[data-v-3cd77560],\n  .q-document-toolbar-part-right[data-v-3cd77560] {\n    flex: 10%;\n}\n}\n',""]);const d=s},43665:(t,e,n)=>{n.r(e),n.d(e,{default:()=>q});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{height:t.height,width:"100%"}},[n("div",{staticStyle:{width:"100%, display: flex","justify-content":"center",height:"100%"}},[t.show?n("div",{staticStyle:{height:"100%"}},["img"===t.docType?n("img",{staticClass:"q-document-img",attrs:{src:t.src,height:t.height}}):t._e(),t._v(" "),"html"===t.docType?n("iframe",{ref:"iframe",staticClass:"q-document-html",attrs:{src:t.src,id:"q-document-html",title:"QDocumenViewer IFrame",height:t.height}}):t._e(),t._v(" "),"pdf"===t.docType?n("div",{staticClass:"q-document-pdf-wrapper"},[n("div",{staticClass:"q-document-pdf-container",style:{transform:"rotate("+t.turn+"turn)",height:t.displayOnScroll?null!=t.height?t.height:"100vh":t.height},on:{scroll:t.handleScroll}},[t.showToolBar?[t.showToolBar?n("div",{staticClass:"q-document-toolbar-wrapper",style:"background-color:"+t.pdfToolbarBackgroundColor+";"},[n("div",{staticClass:"q-document-toolbar-part-left"},[t.hidePagination?t._e():n("div",{staticClass:"q-document-toolbar-left-options-wrapper"},[n("span",{staticClass:"ml-1 mr-1 q-document-color-text-content"},[t._v("\n                    "+t._s(t.pageTitle)+"\n                  ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.page,expression:"page",modifiers:{number:!0}}],attrs:{min:1,max:t.numPages,type:"number",oninput:"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');"},domProps:{value:t.page},on:{blur:[t.focusSelectedPage,function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||(t.page=t._n(e.target.value))}}}),t._v(" "),n("span",{staticClass:"ml-1 q-document-color-text-content"},[t._v("\n                    / "+t._s(t.numPages))])])]),t._v(" "),n("div",{staticClass:"q-document-toolbar-part-center",staticStyle:{"justify-content":"center",display:"flex"}},[t.hideDescription?t._e():n("span",{staticClass:"q-document-color-text-content",staticStyle:{"text-align":"center"}},[t._v(t._s(t.fileDescription))])]),t._v(" "),n("div",{staticClass:"\n                  q-document-toolbar-part-right\n                  q-document-toolbar-right-options-wrapper\n                  mr-1\n                ",staticStyle:{"justify-content":"end",display:"flex"}},[t.showPrint?n("div",{staticClass:"q-document-icon mr-2"},[n("v-icon",{staticStyle:{cursor:"pointer"},attrs:{id:"q-document-print-icon",size:"18"},on:{click:t.printPdf}},[t._v("\n                  mdi-printer\n                ")])],1):t._e(),t._v(" "),t.hideDownload?t._e():n("div",{staticClass:"q-document-icon mr-2"},[n("v-icon",{staticStyle:{cursor:"pointer"},attrs:{id:"q-document-download-icon",size:"18"},on:{click:t.downloadPdf}},[t._v("\n                    mdi-tray-arrow-down\n                  ")])],1),t._v(" "),t.hideRotate?t._e():n("div",{staticClass:"q-document-icon mr-4"},[n("v-icon",{staticStyle:{cursor:"pointer"},attrs:{id:"q-document-download-icon",size:"18"},on:{click:function(e){t.rotateVal-=90}}},[t._v("\n                    mdi-format-rotate-90\n                  ")])],1),t._v(" "),t.hideZoom?t._e():n("div",{staticClass:"q-document-zoom-options"},[n("ul",{staticClass:"q-document-zoom-options-list"},[n("li",[n("div",{staticClass:"q-document-zoom-field"},[n("span",{staticClass:"ml-2 mr-3 q-document-color-text-content"},[t._v("\n                          "+t._s(Number.parseInt(100*t.zoomVal).toFixed(0))+"%\n                        ")])])]),t._v(" "),n("li",{on:{click:t.zoomOut}},[n("div",{staticClass:"q-document-zoom-buttons q-document-zoom-field",staticStyle:{cursor:"pointer"},attrs:{id:"q-document-zoom-out-field"}},[n("v-icon",{attrs:{id:"q-document-zoom-out-icon",size:"18"}},[t._v("\n                          mdi-minus\n                        ")])],1)]),t._v(" "),n("li",{staticClass:"q-document-zoom-field",on:{click:t.zoomIn}},[n("div",{staticClass:"q-document-zoom-buttons q-document-zoom-field",staticStyle:{cursor:"pointer"},attrs:{id:"q-document-zoom-in-field"}},[n("v-icon",{attrs:{id:"q-document-zoom-in-icon",size:"18"}},[t._v("\n                          mdi-plus\n                        ")])],1)])])])])]):t._e()]:t._e(),t._v(" "),t.showToolBar&!t.displayOnScroll?n("pdf",{key:t.pdfKey,ref:"pdf",staticClass:"q-document-pdf",style:"background-color:"+t.pdfBackgroundColor+"; min-width:"+t.currentMinWidth+"px",attrs:{src:t.url,page:t.page,scale:t.zoomVal,height:t.height,text:!1,rotate:t.rotateVal,id:"pdf-page-"+t.page},on:{"num-pages":function(e){t.numPages=e}}},[n("template",{slot:"loading"},[t._v(t._s(t.loadingContent))])],2):t.displayOnScroll?t._l(t.loadedPages,(function(e){return n("pdf",{key:t.pdfKey+e,ref:"pdf",refInFor:!0,staticClass:"q-document-pdf",style:"background-color:"+t.pdfBackgroundColor+";",attrs:{src:t.url,page:e,scale:t.zoomVal,rotate:t.rotateVal,height:t.height,text:!1,id:"pdf-page-"+e}},[n("template",{slot:"loading"},[t._v(t._s(t.loadingContent))])],2)})):t._l(t.numPages,(function(e){return n("pdf",{key:t.pdfKey+e,ref:"pdf",refInFor:!0,staticClass:"q-document-pdf",style:"background-color:"+t.pdfBackgroundColor+";",attrs:{src:t.url,page:e,scale:t.zoomVal,rotate:t.rotateVal,height:t.height,text:!1,id:"pdf-page-"+e}},[n("template",{slot:"loading"},[t._v(t._s(t.loadingContent))])],2)}))],2)]):t._e()]):t._e()]),t._v(" "),t.showPrint?n("iframe",{ref:"printIframe",staticStyle:{display:"none"},attrs:{frameborder:"0"}}):t._e()])};o._withStripped=!0;var a=n(52597),i=n.n(a);const s=n(89146).default.extend({name:"QDocumentViewer",components:{pdf:i()},props:{src:{default:"",type:[String,Object]},height:{type:String},width:{type:String},scale:{type:String},showToolBar:{type:Boolean,default:!0},pdfToolbarBackgroundColor:{type:String,default:"#fafafa"},pdfBackgroundColor:{type:String,default:"#eeeeee"},hidePagination:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1},hideDownload:{type:Boolean,default:!1},hideRotate:{type:Boolean,default:!1},hideZoom:{type:Boolean,default:!1},loadingContent:{type:String,default:"Loading..."},displayOnScroll:{type:Boolean,default:!1},fileDescription:{type:String},showPrint:{type:Boolean,default:!1},_renderingProps:{type:Object,default:null}},data:function(){return{show:!0,loadedRatio:0,numPages:0,page:1,turn:0,showToolbar:!0,zoomVal:null!=this.scale&&null!=this.scale?Number(parseFloat(this.scale).toFixed(2)):1,rotateVal:0,loadedPages:1,docType:void 0,url:this.src,localLanguage:"en",pageTitle:"Page",pdfKey:0,currentMinWidth:816}},mounted:function(){this.docType=this.getType();var t=this._renderingProps.context().GetItemSingle("Dory").GetLRType().substring(0,2);this.pageTitle="tr"===t?"Sayfa":"Page"},watch:{src:function(){this.pdfKey=(new Date).valueOf(),this.page=1,this.loadedPages=1,this.docType=this.getType()},scale:function(){this.zoomVal=Number(parseFloat(this.scale).toFixed(2))},page:function(t){""!==t&&(this.page>this.numPages&&(this.page=this.numPages),this.page<1&&(this.page=1),this.page<=this.numPages&&this.page>this.loadedPages&&(this.loadedPages=this.page))},rotateVal:function(t){this.rotateVal=this.rotateVal<0?270:this.rotateVal}},created:function(){this.onFrameScrollBottom()},destroyed:function(){var t;null===(t=this.$el)||void 0===t||t.remove()},methods:{createPdf:function(){var t,e,n,o=this,a=!1;if(this.src.startsWith("data:application/pdf;base64,")?(n=null===(t=this.src.split("data:application/pdf;base64,"))||void 0===t?void 0:t[1],a=!0):this.src.startsWith("data:application/pdf,")?(n=null===(e=this.src.split("data:application/pdf,"))||void 0===e?void 0:e[1],a=!0):(n=this.src,a=!1),a){var s=this.base64ToBlob(n,"application/pdf");n=URL.createObjectURL(s)}this.url=n,i().createLoadingTask(n).then((function(t){o.numPages=t.numPages}))},base64ToBlob:function(t,e){void 0===e&&(e="application/octet-stream");for(var n=atob(t),o=n.length,a=new Uint8Array(o),i=0;i<o;i++)a[i]=n.charCodeAt(i);return new Blob([a],{type:e})},focusSelectedPage:function(){var t;this.displayOnScroll&&(this.page>this.numPages?(this.page=1,(t=document.getElementById("pdf-page-1"))&&t.scrollIntoView()):(t=document.getElementById("pdf-page-"+this.page.toString()))&&t.scrollIntoView())},zoomIn:function(){this.zoomVal<2&&(this.zoomVal+=.1,this.currentMinWidth+=81.6)},zoomOut:function(){this.zoomVal>.2&&(this.zoomVal-=.1,this.currentMinWidth-=81.6)},nextPage:function(){this.page+=this.page<this.numPages?1:0},previousPage:function(){this.page-=this.page>0?1:0},rotate:function(){this.rotateVal-=90},goToPage:function(t){t>=1&&t<=this.numPages&&(this.page=t)},downloadPdf:function(){var t=this;fetch(this.url).then((function(t){return t.blob()})).then((function(e){var n,o=URL.createObjectURL(e),a=document.createElement("a");a.href=o,a.download=null!==(n=t.fileDescription)&&void 0!==n?n:"fileData",a.dispatchEvent(new MouseEvent("click"))}))},printPdf:function(){var t=this;if(this.src.startsWith("data:application/pdf;base64,")||this.src.startsWith("data:application/pdf,")){var e=this.$refs.printIframe;e&&(e.src=this.url,e.onload=function(){var t;null===(t=e.contentWindow)||void 0===t||t.print()})}else fetch(this.src).then((function(t){return t.blob()})).then((function(e){var n=URL.createObjectURL(e),o=t.$refs.printIframe;o&&(o.src=n,o.onload=function(){var t;null===(t=o.contentWindow)||void 0===t||t.print(),URL.revokeObjectURL(n)})}))},getType:function(){var t=this.src;if(null==t?void 0:t.startsWith("data:")){var e=t.split(",")[0].split(";")[0].split(":")[1].split("/");return"image"===e[0]?"img":("pdf"===e[1]&&this.createPdf(),e[1])}var n=t.split(".").pop();return["html","htm"].includes(n)?"html":["jpeg","jpg","gif","png","apng","svg","bmp","ico"].includes(n)?"img":["pdf"].includes(n)?(this.createPdf(),n):n},onFrameScrollBottom:function(){var t=this,e=function(e){"scrolledToBottom"==e.data&&t.$emit("scrolledToBottom")};window.removeEventListener("message",e,!1),window.addEventListener("message",e,!1)},handleScroll:function(t){var e=t.target,n=e.scrollTop,o=e.clientHeight,a=e.scrollHeight,i=e.lastChild.offsetHeight;if(this.displayOnScroll&&this.showToolBar){var s=parseInt(Math.ceil(Math.round(n)/i).toString());this.page=0==s?1:s>=this.numPages?this.numPages:s}Math.round(n)+o+1>=a&&(this.displayOnScroll&&this.numPages>this.loadedPages&&this.loadedPages++,n>0&&this.$emit("scrollEnd"))}}});var d=n(75701),r=n.n(d),l=n(8236),c=n.n(l),p=n(6080),u=n.n(p),h=n(46075),m=n.n(h),g=n(87182),f=n.n(g),v=n(39213),y=n.n(v),b=n(39834),w={attributes:{class:"plateauStudioClass"}};w.styleTagTransform=y(),w.setAttributes=m(),w.insert=u().bind(null,"head"),w.domAPI=c(),w.insertStyleElement=f(),r()(b.Z,w),b.Z&&b.Z.locals&&b.Z.locals;const q=(0,n(62264).Z)(s,o,[],!1,null,"3cd77560",null).exports}}]);