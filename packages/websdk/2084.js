"use strict";(this.webpackChunk_stechquick_websdk=this.webpackChunk_stechquick_websdk||[]).push([[2084],{38941:(t,o,e)=>{e.d(o,{Z:()=>a});var i=e(55402),n=e.n(i),s=e(60352),l=e.n(s)()(n());l.push([t.id,"\n.tooltip-span-class[data-v-e27271be] {\n  width: 100%;\n}\n.tooltip-div-class[data-v-e27271be] {\n  align-items: flex-start;\n  display: flex;\n  flex: 1 1 auto;\n  max-width: 100%;\n}\n.tooltip-force[data-v-e27271be] {\n  position: relative;\n  display: flex;\n}\n.tooltip-force .tooltiptext-force[data-v-e27271be] {\n  visibility: hidden;\n  background: rgba(97,97,97,.9);\n  color: #fff;\n  text-align: center;\n  font-size: 14px;\n  line-height: 22px;\n  text-transform: none;\n  border-radius: 4px;\n  display: inline-block;\n  padding: 5px 16px;\n  position: absolute;\n  pointer-events: none;\n  z-index: 8;\n  opacity: 0;\n  width: fit-content;\n}\n.tooltip-force:hover .tooltiptext-force[data-v-e27271be] {\n  visibility: visible;\n  opacity: .9;\n}\n",""]);const a=l},2084:(t,o,e)=>{e.r(o),e.d(o,{default:()=>y});var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.forcePosition?e("div",{staticClass:"tooltip-force"},[t._t("default"),t._v(" "),e("span",{ref:"tooltip-force-position-content",staticClass:"tooltiptext-force",style:{minWidth:t.minWidth,width:t.width,maxWidth:t.maxWidth,display:t.disabled,right:t.forcePositionRight,marginTop:t.forcePositionMarginTop,bottom:t.forcePositionBottom,left:t.forcePositionLeft,marginLeft:t.forcePositionMarginLeft}},[t._v(t._s(t.toolTipContent,t.uniqueID))])],2):e("div",{class:["tooltip-div-class",t.customClass]},[e("v-tooltip",{attrs:{bottom:t.bottom,contentClass:t.uniqueID,left:t.left,right:t.right,top:t.top,disabled:t.disabled,"open-delay":t.openDelay,transition:t.transition,"max-width":t.maxWidth,"min-width":t.minWidth,"nudge-width":t.nudgeWidth,"nudge-top":t.nudgeTop,"nudge-bottom":t.nudgeBottom,"nudge-left":t.nudgeLeft,"nudge-right":t.nudgeRight,"allow-overflow":t.allowOverflow,attach:t.attach,absolute:t.absolute},scopedSlots:t._u([{key:"activator",fn:function(o){var i=o.on,n=o.attrs;return[e("span",t._g(t._b({staticClass:"tooltip-span-class"},"span",n,!1),i),[t._t("default")],2)]}}],null,!0),model:{value:t.value,callback:function(o){t.value=o},expression:"value"}},[t._v(" "),e("span",{ref:"toolTipContent",domProps:{innerHTML:t._s(t.toolTipContent)}})])],1)};i._withStripped=!0;const n=e(89146).default.extend({name:"Tooltip",data:function(){return{value:!1,innerClass:"",bottom:!0,left:!1,right:!1,top:!1,forcePositionMarginLeft:void 0,forcePositionBottom:void 0,forcePositionRight:void 0,forcePositionLeft:void 0,forcePositionMarginTop:void 0,uniqueID:""}},props:{toolTipContent:{default:"",type:String,note:""},customClass:{type:Object,note:"Use to set class font size of field"},position:{default:"bottom",type:String,note:"Aligns the component"},disabled:{default:!1,type:Boolean,note:"Disables the tooltip"},openDelay:{type:[Number,String]},transition:{type:String},maxWidth:{type:[Number,String]},minWidth:{type:[Number,String]},nudgeWidth:{type:[Number,String]},nudgeBottom:{type:[Number,String]},nudgeTop:{type:[Number,String]},nudgeLeft:{type:[Number,String]},nudgeRight:{type:[Number,String]},allowOverflow:{type:[Boolean]},attach:{type:String},absolute:{type:Boolean},forcePosition:{type:Boolean},_renderingProps:{type:Object,default:null}},created:function(){this.uniqueID=this._renderingProps.compCollCb().GetCompUID()},mounted:function(){var t=this;this.classes&&(this.innerClass=Object.keys(this.classes).join(" ")),setTimeout((function(){var o,e,i;if("bottom"!=t.position)switch(t.bottom=!1,t.position){case"left":t.left=!0,t.forcePositionRight="calc(100% + 10px)",t.forcePositionBottom=t.$children[0].$el.clientHeight>35?"35%":"";break;case"right":t.right=!0,t.forcePositionLeft="calc(100% + 10px)",t.forcePositionBottom=t.$children[0].$el.clientHeight>35?"35%":"";break;case"top":t.top=!0,t.forcePositionLeft="50%",t.forcePositionMarginLeft="-"+(null===(o=t.$refs["tooltip-force-position-content"])||void 0===o?void 0:o.clientWidth)/2+"px",t.forcePositionMarginTop="-"+((null===(e=t.$refs["tooltip-force-position-content"])||void 0===e?void 0:e.clientHeight)+10)+"px"}else t.forcePositionLeft="50%",t.forcePositionMarginLeft="-"+(null===(i=t.$refs["tooltip-force-position-content"])||void 0===i?void 0:i.clientWidth)/2+"px",t.forcePositionMarginTop=t.$children[0].$el.clientHeight+10+"px"}),0)},destroyed:function(){var t;null===(t=this.$el)||void 0===t||t.remove()}});var s=e(75701),l=e.n(s),a=e(8236),r=e.n(a),c=e(6080),d=e.n(c),p=e(46075),f=e.n(p),u=e(87182),h=e.n(u),g=e(39213),b=e.n(g),m=e(38941),v={attributes:{class:"plateauStudioClass"}};v.styleTagTransform=b(),v.setAttributes=f(),v.insert=d().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=h(),l()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const y=(0,e(62264).Z)(n,i,[],!1,null,"e27271be",null).exports}}]);