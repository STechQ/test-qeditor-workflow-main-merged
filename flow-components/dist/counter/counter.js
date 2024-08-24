!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.flowcomponent=t():e.flowcomponent=t()}(this,(()=>(()=>{"use strict";var e,t={d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};t.r(o),t.d(o,{default:()=>i}),e={boolean:!0,datetime:!0,enum:!0,number:!0,dataType:!0,string:!0,constant:!0,any:!0},Object.keys(e);class r extends Error{constructor(e){super(e.message),this.name="FlowError",e.stack&&(this.stack=e.stack),this.type=e.type,this.code=e.code,this.summary=e.summary,this.parameters=e.parameters,this.category=e.category,this.detail=e.detail}}function s(e,t){switch(e){case"'":case'"':return[e,t+1];default:return[void 0,t]}}function a(e,t,o){if("other"==o.type){if("object"!=typeof e)return;return e[t]=o.value}let r=e[t];return void 0!==r?r:e[t]="array"==o.type?[]:{}}function n(e,t){switch(e[t]){case'"':case"'":return"object";default:return"array"}}function c(e,t,o){let r=o;const c=e.length;let i,u="",l=!1;for(var f=0;f<c;f++){let o=e[f];if(l)if(i==o||"]"==o&&!i){let o;switch(i&&f++,e[f+1]){case"[":o={type:n(e,f+2)};break;case".":o={type:"object"};break;case void 0:o={type:"other",value:t};break;default:throw new Error("unexpected set msg")}r=a(r,u,o),u="",l=!1}else u+=o;else switch(o){case".":u&&(r=a(r,u,{type:"object"})),u="";break;case"[":u&&(r=a(r,u,{type:n(e,f+1)})),u="",[i,f]=s(e[f+1],f),l=!0;break;default:u+=o}}return u&&(r=a(r,u,{type:"other",value:t})),r}const i=async e=>{const t=e.flow.getWorkflow(),o=await(null==t?void 0:t.keyExecutor(e.props));!function(e,t,o,s){switch(e.type){case"context":if(null==t)return;if(!s.workflow)throw new Error("can not set to Context in "+function(e){return e.client?"client":e.server?"server":"workflow"}(s)+". You can only set to Context in workflow.");const a=s.workflow.context();if(!a)throw new Error("can not set to workflow context as context is undefined");c(e.value,t,a);break;case"vars":c(e.value,t,o.vars);break;case"output":o.output=o.output||{},e.value?c(e.value,t,o.output):Object.keys(t).forEach((e=>o.output[e]=t[e]));break;case"info":if(!t)return;let n;switch(typeof t){case"number":case"string":n={category:"info",code:"NoCode",message:t.toString()};break;case"object":n={category:t.category,code:t.code,message:t.message,parameters:t.parameters,source:t.source,summary:t.summary};break;default:return}o.infoList=o.infoList||[],o.infoList.push(n);break;case"error":if(!t)return;switch(typeof t){case"number":case"string":throw new r({type:"technical",message:t.toString(),code:"NoCode",category:"error"});case"object":throw new r({type:"business"==t.type?"business":"technical",message:t.message||"no message",code:t.code||"NoCode",summary:t.summary,parameters:t.parameters,category:t.category||"error"})}}}(e.props.assignTo,o,e.msg,function(e){return{client:e.flow.getClient(),server:e.flow.getServer(),workflow:e.flow.getWorkflow()}}(e)),e.flow.next()};return o})()));