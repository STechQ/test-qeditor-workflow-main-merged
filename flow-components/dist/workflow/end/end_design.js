/*! For license information please see end_design.js.LICENSE.txt */
!function(e,l){"object"==typeof exports&&"object"==typeof module?module.exports=l(require("react")):"function"==typeof define&&define.amd?define(["react"],l):"object"==typeof exports?exports.flowcomponent=l(require("react")):e.flowcomponent=l(e.react)}(this,(e=>(()=>{var l={6094:(e,l,n)=>{"use strict";var t=n(8156),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,l,n){var t,o={},c=null,d=null;for(t in void 0!==n&&(c=""+n),void 0!==l.key&&(c=""+l.key),void 0!==l.ref&&(d=l.ref),l)i.call(l,t)&&!r.hasOwnProperty(t)&&(o[t]=l[t]);if(e&&e.defaultProps)for(t in l=e.defaultProps)void 0===o[t]&&(o[t]=l[t]);return{$$typeof:s,type:e,key:c,ref:d,props:o,_owner:a.current}}l.Fragment=o,l.jsx=c,l.jsxs=c},4512:(e,l,n)=>{"use strict";e.exports=n(6094)},8156:l=>{"use strict";l.exports=e},5685:(e,l)=>{var n;!function(){"use strict";var t={}.hasOwnProperty;function s(){for(var e="",l=0;l<arguments.length;l++){var n=arguments[l];n&&(e=i(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var l="";for(var n in e)t.call(e,n)&&e[n]&&(l=i(l,n));return l}function i(e,l){return l?e?e+" "+l:e+l:e}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(l,[]))||(e.exports=n)}()}},n={};function t(e){var s=n[e];if(void 0!==s)return s.exports;var o=n[e]={exports:{}};return l[e](o,o.exports,t),o.exports}t.n=e=>{var l=e&&e.__esModule?()=>e.default:()=>e;return t.d(l,{a:l}),l},t.d=(e,l)=>{for(var n in l)t.o(l,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:l[n]})},t.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="";var s={};return(()=>{"use strict";t.r(s),t.d(s,{default:()=>b});var e=t(4512),l=t(8156);t.p,t.p;const n=({label:n,isKeepOpen:t=!1,onAddButton:s,children:o})=>{const[i,a]=(0,l.useState)(!0);return(0,e.jsxs)("div",{className:"variables ",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,e.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>a(!i),children:[!t&&(0,e.jsx)("i",{className:"mdi "+(i?"mdi-chevron-down":"mdi-chevron-right")}),(0,e.jsx)("p",{children:n})]}),s&&(0,e.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),s()}})]}),(t||i)&&(0,e.jsx)("ul",{className:"variable-list",children:o})]})};var o=t(5685),i=t.n(o);t.p;const a=({isOpen:n,onClose:t,children:s,footer:o=[],title:a,type:r="dialog",position:c})=>{if(!n)return null;const[d,u]=(0,l.useState)({top:0}),p=(0,l.useRef)(null);return(0,l.useEffect)((()=>{var e,l;if(c){const n=window.innerHeight>c.top+((null===(e=p.current)||void 0===e?void 0:e.clientHeight)||0)?c.top:window.innerHeight-((null===(l=p.current)||void 0===l?void 0:l.clientHeight)||0)-10;u({top:n})}}),[c]),(0,e.jsx)("div",{className:i()({overlay:"modal"===r}),children:(0,e.jsxs)("div",{ref:p,className:i()("dialog",{"dialog-monaco":"modal"==r}),style:d,children:["dialog"===r?(0,e.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const l=p.current;if(!l)return;const n=l.getBoundingClientRect(),t=e.clientX-n.left,s=e=>{u({top:e.clientY-10,left:e.clientX-t})},o=()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",o)})(e),children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{}),(0,e.jsx)("span",{})]}):(0,e.jsx)("div",{}),(0,e.jsxs)("div",{className:"dialog-header",children:[(0,e.jsx)("h5",{className:"dialog-title m-0",children:a}),(0,e.jsx)("div",{className:"cursor-pointer",onClick:t,children:(0,e.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,e.jsx)("div",{className:"dialog-body",children:s}),o.length>0&&(0,e.jsx)("div",{className:"dialog-footer",children:o.map((e=>e))})]})})};function r(e,n){(0,l.useEffect)((()=>{const l=l=>{const t=null==e?void 0:e.current;t&&!t.contains((null==l?void 0:l.target)||null)&&n(l)};return document.addEventListener("mousedown",l),document.addEventListener("touchstart",l),()=>{document.removeEventListener("mousedown",l),document.removeEventListener("touchstart",l)}}),[e,n])}t.p;const c=n=>{var t;const[s,o]=(0,l.useState)(!1),i=(0,l.useRef)(null);return r(i,(()=>o(!1))),(0,e.jsxs)("div",{className:"dropdown-flow",ref:i,children:[(0,e.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),o(!s)},children:n.iconClass&&(0,e.jsx)("i",{className:n.iconClass})}),(0,e.jsx)("ul",{className:"py-3",style:{display:s?"block":"none"},children:null===(t=n.options)||void 0===t?void 0:t.map((l=>(0,e.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:e=>{o(!1),l.onClick(e)},children:l.name},l.name)))})]})},d=({collapsibleLabel:t,fields:s,disabledFields:o=[],fieldLabel:i,dialogElements:r,emptyValues:d,isAddible:u=!0,isDeletable:p=!0,isCollabsible:m=!0,createItemLabel:v,dialogTitle:f,maxItemLen:h,onChange:x,validate:g,getFieldLabel:b})=>{const[j,y]=(0,l.useState)([]),[N,w]=(0,l.useState)(!1),[S,k]=(0,l.useState)(0),[C,E]=(0,l.useState)({top:0}),[O,L]=(0,l.useState)(!1),[R,$]=(0,l.useState)("");(0,l.useEffect)((()=>{const e=new Set(o.map((e=>JSON.stringify(e)))),l=s.filter((l=>!e.has(JSON.stringify(l))));y(l)}),[s]);const _=(e,l,n=!1)=>{E({top:e.pageY}),L(n),k(l),g&&$(g(j[l])),w(!0)},P=(e,l,n=i)=>{if(!e)return;if(n.includes(".")){const t=n.split(".").reduce(((e,l)=>e[l]),e);return Array.isArray(t)||"object"!=typeof t?t:t.value?`${t.type}.${t.value}`:`Variable ${l+1}`}const t=e?e[n]:e;return Array.isArray(t)||"object"!=typeof t?t:t.value?`${t.type}.${t.value}`:`Variable ${l+1}`},D=e=>{y(e),x(JSON.parse(JSON.stringify([...o,...e])))};function F(e,l){const n=[...j];((e,l,n)=>{const t=l.split("."),s=t.pop();t.reduce(((e,l)=>e[l]),e)[s]=n})(n[S],e,l),D(n),g&&$(g(n[S]))}const A=()=>{if(void 0!==h&&j.length>=h)return;const e=[...j];e.push(JSON.parse(JSON.stringify(d))),D(e)},I=(e,l)=>{var n;const t=null===(n={true:o,false:j}[O.toString()])||void 0===n?void 0:n[S];return{Expression:{expression:(null==t?void 0:t[l])||{type:"string",value:""},onBlur:e=>{F(l,e)}},Checkbox:{checked:P(t,0,l)||!1,onChange:e=>{F(l,e)}},Select:{value:P(t,0,l)||"",onChange:e=>{F(l,e)}},Input:{value:P(t,0,l)||"",onBlur:e=>{F(l,e.target.value)}},MultiSelect:{values:P(t,0,l)||[],onChange:e=>{F(l,e)}}}[e]||{value:(null==t?void 0:t[l])||"",onChange:e=>{F(l,e)}}};return(0,e.jsx)(e.Fragment,{children:0==(null==j?void 0:j.length)&&0==o.length&&u?(0,e.jsxs)("div",{className:"dynamic-field-create vertical-line cursor-pointer",onClick:A,children:[(0,e.jsx)("p",{children:v}),void 0===h||void 0!==h&&j.length<h?(0,e.jsx)("i",{className:"mdi mdi-plus"}):(0,e.jsx)(e.Fragment,{})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(n,{label:t,isKeepOpen:!m,...(()=>{if(u&&!(void 0!==h&&j.length>=h))return{onAddButton:A}})(),children:[null==o?void 0:o.map(((l,n)=>(0,e.jsx)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==n&&"vertical-line"}`,onClick:e=>_(e,n,!0),children:(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==b?void 0:b(l))||P(l,n)||`Variable ${n+1}`})},`item${n}`))),null==j?void 0:j.map(((l,n)=>(0,e.jsxs)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==n&&"vertical-line"}`,onClick:e=>_(e,n),children:[(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==b?void 0:b(l))||P(l,n)||`Variable ${n+1}`}),p&&(0,e.jsx)(c,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Delete",onClick:e=>{((e,l)=>{e.preventDefault(),e.stopPropagation(),D([...j].filter(((e,n)=>n!=l)))})(e,n)}}]})]},`item${n}`)))]}),(0,e.jsxs)(a,{isOpen:N,title:f,onClose:()=>(w(!1),void $("")),position:C,children:[(0,e.jsxs)("p",{style:{color:"red",display:""===R?"none":""},children:["$",R]}),r.map(((l,n)=>{var t,s;if((O||!l.isRendered||(null===(t=null==l?void 0:l.isRendered)||void 0===t?void 0:t.call(l,j[S])))&&(!O||!l.isRendered||(null===(s=null==l?void 0:l.isRendered)||void 0===s?void 0:s.call(l,o[S]))))return(0,e.jsx)(l.component,{...I(l.componentName,l.key),disabled:O,...l.props,children:l.children},l.key)}))]})]})})};function u(e){return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}function p(e){const n=(0,l.useSyncExternalStore)(u,(()=>function(e){var l,n,t,s,o;const i=null===(l=e.current)||void 0===l?void 0:l.getBoundingClientRect();return JSON.stringify({width:null!==(n=null==i?void 0:i.width)&&void 0!==n?n:0,height:null!==(t=null==i?void 0:i.height)&&void 0!==t?t:0,top:null!==(s=null==i?void 0:i.top)&&void 0!==s?s:0,left:null!==(o=null==i?void 0:i.left)&&void 0!==o?o:0})}(e)));return(0,l.useMemo)((()=>JSON.parse(n)),[n])}t.p;const m=({label:n,options:t=[],className:s,placeholder:o,value:i,disabled:a,onChange:c})=>{const[d,u]=(0,l.useState)(!1),[m,v]=(0,l.useState)(i),[f,h]=(0,l.useState)([]),x=(0,l.useRef)(null),g=(0,l.useRef)(null),b=(0,l.useRef)(null),{width:j,top:y,left:N,height:w}=p(g),{height:S}=p(b);return r(x,(()=>u(!1))),(0,l.useEffect)((()=>{const e=f.find((e=>e.value===i));e?v(e.name):i||v("")}),[i,f]),(0,l.useEffect)((()=>{h(t)}),[t]),(0,e.jsxs)("div",{className:`select-flow position-relative ${s||""}`,children:[n&&(0,e.jsx)("label",{className:"d-block ellipsis-text p-0",children:n}),(0,e.jsxs)("div",{ref:x,children:[(0,e.jsxs)("div",{className:"input",ref:g,onClick:()=>{a||u(!d)},style:{cursor:a?"not-allowed":"default",opacity:a?"0.6":"1"},children:[(0,e.jsx)("input",{className:"w-100 ellipsis-text",placeholder:o,value:m,onChange:()=>{}}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",ref:b,style:{display:d?"block":"none",pointerEvents:a?"none":"all",...(()=>{const e=window.innerHeight;return y+w+5+S>e?{top:y-S-5,left:N,width:j}:{top:y+w+5,left:N,width:j}})()},children:(0,e.jsx)("ul",{children:t.map((l=>(0,e.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>l.value!=m?(e=>{c(e.value),u(!1)})(l):u(!1),children:l.name},l.value)))})})]})]})},v=(t.p,({label:l,className:n,checked:t,disabled:s,onChange:o})=>(0,e.jsxs)("div",{className:`checkbox-flow ${n||""}`,children:[(0,e.jsx)("input",{className:"cursor-pointer m-0",type:"checkbox",checked:t,onChange:e=>(o(e.target.checked),e.target.checked),disabled:s}),(0,e.jsx)("label",{className:"p-0",children:l})]})),f=({id:l,label:n,remove:t})=>(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{children:n}),(0,e.jsx)("i",{className:"mdi mdi-close",onClick:e=>{e.preventDefault(),e.stopPropagation(),t(l)}})]}),h=({label:n,options:t,className:s,placeholder:o,values:i,disabled:a,onChange:c})=>{const[d,u]=(0,l.useState)(!1),[m,h]=(0,l.useState)([]),x=(0,l.useRef)(null),g=(0,l.useRef)(null),b=(0,l.useRef)(null),{width:j,top:y,left:N,height:w}=p(g),{height:S}=p(b);return(0,l.useEffect)((()=>{const e=t.filter((e=>null==i?void 0:i.some((l=>e.value===l))));e&&h(e)}),[i]),r(x,(()=>u(!1))),(0,e.jsxs)("div",{className:`select-flow position-relative ${s||""}`,children:[n&&(0,e.jsx)("label",{className:"d-block",children:n}),(0,e.jsxs)("div",{ref:x,children:[(0,e.jsxs)("div",{className:"input w-100",ref:g,onClick:()=>{a||u(!d)},children:[(0,e.jsx)("div",{className:"w-100 input-block",children:m.map(((l,n)=>(0,e.jsx)(f,{id:n,remove:e=>{(e=>{const l=m.filter(((l,n)=>n!==e));h(l),c(l.map((e=>e.value)))})(e)},label:l.name},crypto.randomUUID())))}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",ref:b,style:{display:d?"block":"none",...(()=>{const e=window.innerHeight;return y+w+5+S>e?{top:y-S-5,left:N,width:j}:{top:y+w+5,left:N,width:j}})()},children:(0,e.jsx)("ul",{children:t.map(((l,n)=>(0,e.jsx)("li",{className:"cursor-pointer",onClick:()=>(e=>{let l=m;m.some((l=>l.value===e.value))?l=m.filter((l=>l.value!==e.value)):l.push(e),h(l),c(l.map((e=>e.value)))})(l),children:(0,e.jsx)(v,{checked:m.some((e=>e.value===l.value)),onChange:()=>{},label:l.name})},l.value)))})})]})]})},x=(t.p,({label:n,className:t,placeholder:s,value:o,disabled:i,isDigit:a=!1,onChange:r,onBlur:c})=>{const[d,u]=(0,l.useState)(o);return(0,l.useEffect)((()=>{u(o)}),[o]),(0,e.jsxs)("div",{className:`input-flow ${t||""}`,children:[n&&(0,e.jsx)("label",{className:"d-block p-0",children:n}),(0,e.jsx)("input",{className:"w-100",placeholder:s,value:d,onChange:e=>{const l=e.target.value;a&&!new RegExp(/^\d+$/).test(l)||(null==r||r(l),u(l))},onBlur:c,disabled:i})]})}),g=t=>{const[s,o]=(0,l.useState)(t.label.value||"");return(0,l.useEffect)((()=>{o(t.label.value||"")}),[t.label]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(n,{label:"LABEL",children:(0,e.jsx)(x,{className:"w-100",value:s,onChange:e=>{o(e),t.onChangeLabel({type:"string",value:e})}})})})},b={name:"end",panelLabel:"End",version:"0.8",inputs:[{name:"_"}],outputs:[],icon:"mdi-flag-checkered",defaultProps:()=>({label:{type:"string",value:"End"},description:"end",forms:[],actions:[]}),editSection:n=>()=>{var t,s,o,i;const[a,r]=(0,l.useState)([]),c=null===(o=null===(s=null===(t=null==n?void 0:n.callbacks)||void 0===t?void 0:t.ui)||void 0===s?void 0:s.getRoles)||void 0===o?void 0:o.call(s),[u,p]=(0,l.useState)(function(e,l){return e?((e||[]).forEach((e=>{let n=[];e.roles.forEach((e=>{let t=null==l?void 0:l.find((l=>l.name.value===e||l.id===e));t&&n.push(t.id)})),e.roles=n})),e):[]}(n.propValues.forms,c)),[f,x]=(0,l.useState)(!1),b=a.map((e=>({name:`${e.name}`,value:e.ID}))),j=null==c?void 0:c.map((e=>({name:`${e.name.value}`,value:e.id})));if(!n.callbacks.ui)throw new Error("end can not execute on environments without UI");const y=n.callbacks.ui;(0,l.useEffect)((()=>{(async()=>{r(await y.getModels("qjson"))})()}),[]);const N=[{component:m,componentName:"Select",key:"id",props:{label:"Form",types:null===(i=n.propValues.forms)||void 0===i?void 0:i.map((e=>e.id)),options:b}},{component:h,componentName:"MultiSelect",key:"roles",props:{label:"Roles",options:j}},{component:v,componentName:"Checkbox",key:"readonly",props:{label:"Readonly",className:"mt-3",disabled:!0}}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(g,{label:n.propValues.label,description:n.propValues.description,onChangeLabel:e=>n.callbacks.setProp("label",e),onChangeDescription:e=>n.callbacks.setProp("description",e)}),(0,e.jsx)(d,{fields:u,dialogTitle:"Form",collapsibleLabel:"FORMS",fieldLabel:"id",getFieldLabel:e=>{var l;return(null===(l=a.find((l=>l.ID==e.id)))||void 0===l?void 0:l.name)||""},dialogElements:N,emptyValues:{id:"",roles:[],readonly:!0},createItemLabel:"Add Forms",onChange:e=>{p(e),n.callbacks.setProp("forms",e)}})]})}}})(),s})()));