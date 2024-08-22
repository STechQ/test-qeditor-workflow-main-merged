!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.flowcomponent=t():e.flowcomponent=t()}(this,(()=>(()=>{"use strict";var e,t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};function r(e,t){switch(e){case"'":case'"':return[e,t+1];default:return[void 0,t]}}function o(e,t){if(null!=e)return e[t]}function a(e,t){let n=t;const a=e.length;let u,s="",c=!1;for(var l=0;l<a;l++){let t=e[l];if(c)u==t||"]"==t&&!u?(u&&l++,n=o(n,s),s="",c=!1):s+=t;else switch(t){case".":s&&(n=o(n,s)),s="";break;case"[":s&&(n=o(n,s)),s="",[u,l]=r(e[l+1],l),c=!0;break;default:s+=t}}return s&&(n=o(n,s)),n}t.r(n),t.d(n,{default:()=>c}),e={boolean:!0,datetime:!0,enum:!0,number:!0,dataType:!0,string:!0,constant:!0},Object.keys(e);const u=function(e,t){switch(null==e?void 0:e.type){case"boolean":return"true"==e.value;case"input":return a(e.value,t.input);case"context":return a(e.value,t.context);case"vars":return a(e.value,t.context.vars);case"output":return a(e.value,t.output);case"constant":return a(e.value,t.constantsWId);case"number":return Number(e.value);case"string":case"enum":return e.value;case"literal":return function(e,t){const n=t,r=Object.create(null),o=Object.keys(t),a=o.map((e=>n[e]?n[e]:void 0));let u=`return \`${e}\`;`;return new Function("window","global","globalThis",...o,"document","XMLHttpRequest","fetch","setInterval","navigator",u).apply(r,[r,r,r,...a,void 0,void 0,void 0,void 0,void 0])}(e.value,t);case"notSet":return}};class s{static execute(e,t){var n;const r=e.cases,o=Object.keys(r);if(0==o.length)throw new Error("No case found on switch!");let a=null===(n=Object.entries(r).find((([e,t])=>{var n;return"default"==(null===(n=t.props)||void 0===n?void 0:n._name)})))||void 0===n?void 0:n[0];for(const e of o)if(s.resolve(r[e],t)){a=e;break}if(!a)throw new Error("'caseId' not found!");return a}static resolve(e,t){var n;switch(e.vType){case"case":const r=e.v.operator,o=e.v.left,a=e.v.right,c="case"==o.vType?{type:"boolean",value:`${s.resolve(o,t)}`}:o.v,l=o.negation?s.negate(c):c,i="case"==a.vType?{type:"boolean",value:`${s.resolve(a,t)}`}:a.v,v=a.negation?s.negate(i):i,f=s.operatorDict[r](l,v,t);return e.negation?!f:f;case"variable":const d=1==u(e.v,t);return e.negation?!d:d;default:if("default"==(null===(n=null==e?void 0:e.props)||void 0===n?void 0:n._name))return!1;throw new Error("Undefined type!")}}static negate(e){return"true"==e.value?e.value="false":"false"==e.value&&(e.value="true"),e}}s.operatorDict={and:(e,t,n)=>1==(u(e,n)&&u(t,n)),or:(e,t,n)=>1==(u(e,n)||u(t,n)),eq:(e,t,n)=>u(e,n)===u(t,n)==1,ne:(e,t,n)=>u(e,n)!=u(t,n)==1,in:(e,t,n)=>{const r=u(e,n);return Array.isArray(r)&&r.includes(u(t,n))},nin:(e,t,n)=>{const r=u(t,n);return Array.isArray(r)&&0==r.includes(u(e,n))},gt:(e,t,n)=>{const r=u(e,n),o=u(t,n);return"number"==typeof r&&"number"==typeof o&&r>o},gte:(e,t,n)=>{const r=u(e,n),o=u(t,n);return"number"==typeof r&&"number"==typeof o&&r>=o},lt:(e,t,n)=>{const r=u(e,n),o=u(t,n);return"number"==typeof r&&"number"==typeof o&&r<o},lte:(e,t,n)=>{const r=u(e,n),o=u(t,n);return"number"==typeof r&&"number"==typeof o&&r<=o}};const c=async e=>{const t=s.execute(e.props,e.msg);t&&e.flow.next(t.toString())};return n})()));