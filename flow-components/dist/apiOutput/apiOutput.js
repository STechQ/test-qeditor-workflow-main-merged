!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.flowcomponent=t():e.flowcomponent=t()}(this,(()=>(()=>{"use strict";var e,t={d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};function r(e,t){switch(e){case"'":case'"':return[e,t+1];default:return[void 0,t]}}function n(e,t){if(null!=e)return e[t]}function u(e,t){let o=t;const u=e.length;let a,s="",i=!1;for(var c=0;c<u;c++){let t=e[c];if(i)a==t||"]"==t&&!a?(a&&c++,o=n(o,s),s="",i=!1):s+=t;else switch(t){case".":s&&(o=n(o,s)),s="";break;case"[":s&&(o=n(o,s)),s="",[a,c]=r(e[c+1],c),i=!0;break;default:s+=t}}return s&&(o=n(o,s)),o}t.r(o),t.d(o,{default:()=>i}),e={boolean:!0,datetime:!0,enum:!0,number:!0,dataType:!0,string:!0,constant:!0,any:!0},Object.keys(e);const a=function(e){return e.client?"client":e.server?"server":"workflow"},s=function(e,t,o){switch(null==e?void 0:e.type){case"boolean":return"true"==e.value;case"input":return u(e.value,t.input);case"context":if(!o.workflow)throw new Error("can not retrieve from Context in "+a(o)+". You can only retrieve Context in workflow.");return u(e.value,o.workflow.context());case"vars":return u(e.value,t.vars);case"output":return u(e.value,t.output);case"constant":if(!o.workflow)throw new Error("can not retrieve from Constants in "+a(o)+". You can only retrieve Constants in workflow.");return u(e.value,o.workflow.constantsWId);case"number":return Number(e.value);case"string":case"enum":return e.value;case"literal":return function(e,t,o){const r=Object.create(null),{input:n,vars:u,output:a}=t,s=function(e){const{workflow:t,client:o,server:r}=e;if(t)return{type:"workflow",...t.context()||{action:void 0},constants:t.constantsWId};if(o)return{type:"client"};if(r)return{type:"server"};throw new Error("WTF: where are you executing this flow ???")}(o),i={input:n,vars:u,output:a,context:s};return new Function("window","global","globalThis","flow","document","XMLHttpRequest","fetch","setInterval","navigator",`return \`${e}\`;`).apply(r,[r,r,r,i,void 0,void 0,void 0,void 0,void 0])}(e.value,t,o);case"notSet":return}},i=e=>{const t=e.flow.getServer();if(!t)throw new Error("apiOutput can not execute on environments without server");const{statusCode:o,headers:r,body:n}=e.props,u=Number(e.flow.evalGet(o,s));if(!u)throw new Error("apiOutput status must be a positive number");let a,i;r&&(a=Object.keys(r).reduce(((t,o)=>{const n=e.flow.evalGet(r[o],s);return void 0===n||(t[o]=n.toString()),t}),{})),n&&(i=e.flow.evalGet(n,s)),t.writeResponse({statusCode:u,body:i,headers:a}),e.flow.next()};return o})()));