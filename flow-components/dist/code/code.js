!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.flowcomponent=t():e.flowcomponent=t()}(this,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>a});let o=!1;new Promise((e=>e())).then((()=>o=!0)),"undefined"!=typeof doNothing&&doNothing();const r=!0===o;class n extends Error{constructor(e){super(e.message),this.name="FlowError",e.stack&&(this.stack=e.stack),this.type=e.type,this.code=e.code,this.summary=e.summary,this.parameters=e.parameters,this.category=e.category,this.detail=e.detail}}function i(e){const{workflow:t,client:o,server:r}=e;if(t)return{type:"workflow",...t.context()||{action:void 0},constants:t.constantsWId};if(o)return{type:"client"};if(r)return{type:"server"};throw new Error("WTF: where are you executing this flow ???")}const s=async function(){}.constructor,a=async e=>{const t=Object.create(null),o=e.flow.getWorkflow(),a=e.flow.getServer(),l=e.flow.getClient(),m={permanentStore:()=>({set:async(e,t)=>{if(l)throw new Error("Not Implemented: permanentStore is not implemented yet on client.");if(a)throw new Error("Not Implemented: permanentStore is not implemented yet on server.");if(!o)throw new Error("permanent store can be executed only on workflow environment");await o.workflowDb().permanentStore.set(e,t)},get:async e=>{if(l)throw new Error("Not Implemented: permanentStore is not implemented yet on client.");if(a)throw new Error("Not Implemented: permanentStore is not implemented yet on server.");if(!o)throw new Error("permanent store can be executed only on workflow environment");return await o.workflowDb().permanentStore.get(e)}}),getIncomingRequest:()=>{if(a)throw new Error("Not Implemented: server request is not implemented yet.");if(!o)throw new Error("request can only be used on SERVER or WORKFLOW");return o.getIncomingRequest()},context:i({client:l,server:a,workflow:o}),input:e.msg.input,output:e.msg.output,vars:e.msg.vars,appendFlowInfo:t=>{e.msg.infoList=e.msg.infoList||[],e.msg.infoList.push(t)},createError:e=>new n(e)};let c,p=!1;e.props.waitTillNext&&(c=function(e,t={}){let o,n,i;const s=e=>{i&&clearTimeout(i),i=setTimeout((()=>{n(new Error(`The operation has timed out. timeoutValue  : ${e}`))}),e)};return e&&s(e),{startTimer:s,promise:new Promise(((e,i)=>{var s;s=e,o=r&&t.fixSyncResolve?e=>setTimeout((()=>s(e))):s,n=i})),resolver:o,reject:n}}(),m.next=()=>{p||(p=!0,e.flow.next(),c.resolver())},m.fail=e=>{p||(p=!0,c.reject(e))});const f=s("window","global","globalThis","entryInfo","state","flow","document","XMLHttpRequest","fetch","setInterval","navigator",e.props.code).apply(t,[t,t,t,e.entryInfo,e.state,m,void 0,void 0,void 0,void 0,void 0]);c?await c.promise:(await f,e.flow.next())};return t})()));