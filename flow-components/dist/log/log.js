!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.flowcomponent=t():e.flowcomponent=t()}(this,(()=>(()=>{"use strict";var e,t={d:(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};function n(e,t){switch(e){case"'":case'"':return[e,t+1];default:return[void 0,t]}}function r(e,t){if(null!=e)return e[t]}function u(e,t){let o=t;const u=e.length;let a,l="",c=!1;for(var i=0;i<u;i++){let t=e[i];if(c)a==t||"]"==t&&!a?(a&&i++,o=r(o,l),l="",c=!1):l+=t;else switch(t){case".":l&&(o=r(o,l)),l="";break;case"[":l&&(o=r(o,l)),l="",[a,i]=n(e[i+1],i),c=!0;break;default:l+=t}}return l&&(o=r(o,l)),o}t.r(o),t.d(o,{default:()=>c}),e={boolean:!0,datetime:!0,enum:!0,number:!0,dataType:!0,string:!0,constant:!0,any:!0},Object.keys(e);const a=function(e){return e.client?"client":e.server?"server":"workflow"},l=function(e,t,o){switch(null==e?void 0:e.type){case"boolean":return"true"==e.value;case"input":return u(e.value,t.input);case"context":if(!o.workflow)throw new Error("can not retrieve from Context in "+a(o)+". You can only retrieve Context in workflow.");return u(e.value,o.workflow.context());case"vars":return u(e.value,t.vars);case"output":return u(e.value,t.output);case"constant":if(!o.workflow)throw new Error("can not retrieve from Constants in "+a(o)+". You can only retrieve Constants in workflow.");return u(e.value,o.workflow.constantsWId);case"number":return Number(e.value);case"string":case"enum":return e.value;case"literal":return function(e,t,o){const n=Object.create(null),{input:r,vars:u,output:a}=t,l=function(e){const{workflow:t,client:o,server:n}=e;if(t)return{type:"workflow",...t.context()||{action:void 0},constants:t.constantsWId};if(o)return{type:"client"};if(n)return{type:"server"};throw new Error("WTF: where are you executing this flow ???")}(o),c={input:r,vars:u,output:a,context:l};return new Function("window","global","globalThis","flow","document","XMLHttpRequest","fetch","setInterval","navigator",`return \`${e}\`;`).apply(n,[n,n,n,c,void 0,void 0,void 0,void 0,void 0])}(e.value,t,o);case"notSet":return}},c=e=>{let t=e.flow.evalGet(e.props.expression,l);console.log(t),e.flow.next()};return o})()));