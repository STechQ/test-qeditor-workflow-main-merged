/*! For license information please see end_design.js.LICENSE.txt */
!function(e,l){"object"==typeof exports&&"object"==typeof module?module.exports=l(require("react")):"function"==typeof define&&define.amd?define(["react"],l):"object"==typeof exports?exports.flowcomponent=l(require("react")):e.flowcomponent=l(e.react)}(this,(e=>(()=>{var l={6094:(e,l,t)=>{"use strict";var n=t(8156),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,l,t){var n,o={},c=null,d=null;for(n in void 0!==t&&(c=""+t),void 0!==l.key&&(c=""+l.key),void 0!==l.ref&&(d=l.ref),l)a.call(l,n)&&!r.hasOwnProperty(n)&&(o[n]=l[n]);if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:s,type:e,key:c,ref:d,props:o,_owner:i.current}}l.Fragment=o,l.jsx=c,l.jsxs=c},4512:(e,l,t)=>{"use strict";e.exports=t(6094)},8156:l=>{"use strict";l.exports=e},5685:(e,l)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e="",l=0;l<arguments.length;l++){var t=arguments[l];t&&(e=a(e,o(t)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var l="";for(var t in e)n.call(e,t)&&e[t]&&(l=a(l,t));return l}function a(e,l){return l?e?e+" "+l:e+l:e}e.exports?(s.default=s,e.exports=s):void 0===(t=function(){return s}.apply(l,[]))||(e.exports=t)}()}},t={};function n(e){var s=t[e];if(void 0!==s)return s.exports;var o=t[e]={exports:{}};return l[e](o,o.exports,n),o.exports}n.n=e=>{var l=e&&e.__esModule?()=>e.default:()=>e;return n.d(l,{a:l}),l},n.d=(e,l)=>{for(var t in l)n.o(l,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:l[t]})},n.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var s={};return(()=>{"use strict";n.r(s),n.d(s,{default:()=>g});var e=n(4512),l=n(8156);const t={"":"Kod İle Atanır",inProgress:"İşlemde",waitForApproval:"Onay Bekliyor",completed:"Tamamlandı",new:"Yeni",returned:"İade",cancelled:"İptal Edildi",waitForControl:"Kontrol Bekliyor"},o=(n.p,n.p,({label:t,isKeepOpen:n=!1,onAddButton:s,children:o})=>{const[a,i]=(0,l.useState)(!0);return(0,e.jsxs)("div",{className:"variables ",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,e.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>i(!a),children:[!n&&(0,e.jsx)("i",{className:"mdi "+(a?"mdi-chevron-down":"mdi-chevron-right")}),(0,e.jsx)("p",{children:t})]}),s&&(0,e.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),s()}})]}),(n||a)&&(0,e.jsx)("ul",{className:"variable-list",children:o})]})});var a=n(5685),i=n.n(a);n.p;const r=({isOpen:t,onClose:n,children:s,footer:o=[],title:a,type:r="dialog",position:c})=>{if(!t)return null;const[d,u]=(0,l.useState)({top:0}),p=(0,l.useRef)(null);return(0,l.useEffect)((()=>{var e,l;if(c){const t=window.innerHeight>c.top+((null===(e=p.current)||void 0===e?void 0:e.clientHeight)||0)?c.top:window.innerHeight-((null===(l=p.current)||void 0===l?void 0:l.clientHeight)||0)-10;u({top:t})}}),[c]),(0,e.jsx)("div",{className:i()({overlay:"modal"===r}),children:(0,e.jsxs)("div",{ref:p,className:i()("dialog",{"dialog-monaco":"modal"==r}),style:d,children:["dialog"===r?(0,e.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const l=p.current;if(!l)return;const t=l.getBoundingClientRect(),n=e.clientX-t.left,s=e=>{u({top:e.clientY-10,left:e.clientX-n})},o=()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",o)})(e),children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{}),(0,e.jsx)("span",{})]}):(0,e.jsx)("div",{}),(0,e.jsxs)("div",{className:"dialog-header",children:[(0,e.jsx)("h5",{className:"dialog-title m-0",children:a}),(0,e.jsx)("div",{className:"cursor-pointer",onClick:n,children:(0,e.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,e.jsx)("div",{className:"dialog-body",children:s}),o.length>0&&(0,e.jsx)("div",{className:"dialog-footer",children:o.map((e=>e))})]})})};function c(e,t){(0,l.useEffect)((()=>{const l=l=>{const n=null==e?void 0:e.current;n&&!n.contains((null==l?void 0:l.target)||null)&&t(l)};return document.addEventListener("mousedown",l),document.addEventListener("touchstart",l),()=>{document.removeEventListener("mousedown",l),document.removeEventListener("touchstart",l)}}),[e,t])}n.p;const d=t=>{var n;const[s,o]=(0,l.useState)(!1),a=(0,l.useRef)(null);return c(a,(()=>o(!1))),(0,e.jsxs)("div",{className:"dropdown-flow",ref:a,children:[(0,e.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),o(!s)},children:t.iconClass&&(0,e.jsx)("i",{className:t.iconClass})}),(0,e.jsx)("ul",{className:"py-3",style:{display:s?"block":"none"},children:null===(n=t.options)||void 0===n?void 0:n.map((l=>(0,e.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:e=>{o(!1),l.onClick(e)},children:l.name},l.name)))})]})},u=({collapsibleLabel:t,fields:n,disabledFields:s=[],fieldLabel:a,dialogElements:i,emptyValues:c,isAddible:u=!0,isDeletable:p=!0,isCollabsible:m=!0,createItemLabel:v,dialogTitle:f,maxItemLen:h,disabled:x,onChange:b,validate:g,getFieldLabel:y})=>{const[j,N]=(0,l.useState)([]),[k,S]=(0,l.useState)(!1),[w,C]=(0,l.useState)(0),[E,O]=(0,l.useState)({top:0}),[R,$]=(0,l.useState)(!1),[L,_]=(0,l.useState)("");(0,l.useEffect)((()=>{const e=new Set(s.map((e=>JSON.stringify(e)))),l=n.filter((l=>!e.has(JSON.stringify(l))));N(l)}),[n]);const P=(e,l,t=!1)=>{O({top:e.pageY}),$(t),C(l),g&&_(g(j[l])),S(!0)},A=(e,l,t=a)=>{if(!e)return;if(t.includes(".")){const n=t.split(".").reduce(((e,l)=>e[l]),e);return Array.isArray(n)||"object"!=typeof n?n:n.value?`${n.type}.${n.value}`:`Variable ${l+1}`}const n=e?e[t]:e;return Array.isArray(n)||"object"!=typeof n?n:n.value?`${n.type}.${n.value}`:`Variable ${l+1}`},F=e=>{N(e),b(JSON.parse(JSON.stringify([...s,...e])))};function V(e,l){const t=[...j];((e,l,t)=>{const n=l.split("."),s=n.pop();n.reduce(((e,l)=>e[l]),e)[s]=t})(t[w],e,l),F(t),g&&_(g(t[w]))}const D=()=>{if(x)return;if(void 0!==h&&j.length>=h)return;const e=[...j];e.push(JSON.parse(JSON.stringify(c))),F(e)},B=(e,l)=>{var t;const n={true:s,false:j};x&&(n[R.toString()]={...s,...j});const o=null===(t=n[R.toString()])||void 0===t?void 0:t[w];return{Expression:{expression:(null==o?void 0:o[l])||{type:"string",value:""},onBlur:e=>{V(l,e)}},Checkbox:{checked:A(o,0,l)||!1,onChange:e=>{V(l,e)}},Select:{value:A(o,0,l)||"",onChange:e=>{V(l,e)}},Input:{value:A(o,0,l)||"",onBlur:e=>{V(l,e.target.value)}},MultiSelect:{values:A(o,0,l)||[],onChange:e=>{V(l,e)}}}[e]||{value:(null==o?void 0:o[l])||"",onChange:e=>{V(l,e)}}};return(0,e.jsx)(e.Fragment,{children:0==(null==j?void 0:j.length)&&0==s.length&&u?(0,e.jsxs)("div",{className:"dynamic-field-create vertical-line cursor-pointer",onClick:D,children:[(0,e.jsx)("p",{children:v}),void 0===h||void 0!==h&&j.length<h?(0,e.jsx)("i",{className:"mdi mdi-plus"}):(0,e.jsx)(e.Fragment,{})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(o,{label:t,isKeepOpen:!m,...(()=>{if(u&&!(void 0!==h&&j.length>=h))return{onAddButton:D}})(),children:[null==s?void 0:s.map(((l,t)=>(0,e.jsx)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==t&&"vertical-line"}`,onClick:e=>P(e,t,!0),children:(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==y?void 0:y(l))||A(l,t)||`Variable ${t+1}`})},`item${t}`))),null==j?void 0:j.map(((l,t)=>(0,e.jsxs)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==t&&"vertical-line"}`,onClick:e=>P(e,t,x),children:[(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==y?void 0:y(l))||A(l,t)||`Variable ${t+1}`}),p&&(0,e.jsx)(d,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Delete",onClick:e=>{((e,l)=>{e.preventDefault(),e.stopPropagation(),F([...j].filter(((e,t)=>t!=l)))})(e,t)}}]})]},`item${t}`)))]}),(0,e.jsxs)(r,{isOpen:k,title:f,onClose:()=>(S(!1),void _("")),position:E,children:[(0,e.jsxs)("p",{style:{color:"red",display:""===L?"none":""},children:["$",L]}),i.map(((l,t)=>{var n,o;if((R||!l.isRendered||(null===(n=null==l?void 0:l.isRendered)||void 0===n?void 0:n.call(l,j[w])))&&(!R||!l.isRendered||(null===(o=null==l?void 0:l.isRendered)||void 0===o?void 0:o.call(l,s[w]))))return(0,e.jsx)(l.component,{...B(l.componentName,l.key),disabled:R,...l.props,children:l.children},l.key)}))]})]})})};function p(e){return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}function m(e){const t=(0,l.useSyncExternalStore)(p,(()=>function(e){var l,t,n,s,o;const a=null===(l=e.current)||void 0===l?void 0:l.getBoundingClientRect();return JSON.stringify({width:null!==(t=null==a?void 0:a.width)&&void 0!==t?t:0,height:null!==(n=null==a?void 0:a.height)&&void 0!==n?n:0,top:null!==(s=null==a?void 0:a.top)&&void 0!==s?s:0,left:null!==(o=null==a?void 0:a.left)&&void 0!==o?o:0})}(e)));return(0,l.useMemo)((()=>JSON.parse(t)),[t])}n.p;const v=({label:t,options:n=[],className:s,placeholder:o,value:a,disabled:i,onChange:r})=>{const[d,u]=(0,l.useState)(!1),[p,v]=(0,l.useState)(a),[f,h]=(0,l.useState)([]),x=(0,l.useRef)(null),b=(0,l.useRef)(null),g=(0,l.useRef)(null),{width:y,top:j,left:N,height:k}=m(b),{height:S}=m(g);return c(x,(()=>u(!1))),(0,l.useEffect)((()=>{const e=f.find((e=>e.value===a));e?v(e.name):a||v("")}),[a,f]),(0,l.useEffect)((()=>{h(n)}),[n]),(0,e.jsxs)("div",{className:`select-flow position-relative ${s||""}`,children:[t&&(0,e.jsx)("label",{className:"d-block ellipsis-text p-0",children:t}),(0,e.jsxs)("div",{ref:x,children:[(0,e.jsxs)("div",{className:"input",ref:b,onClick:()=>{i||u(!d)},style:{cursor:i?"not-allowed":"default",opacity:i?"0.6":"1"},children:[(0,e.jsx)("input",{className:"w-100 ellipsis-text",placeholder:o,value:p,onChange:()=>{}}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",ref:g,style:{display:d?"block":"none",pointerEvents:i?"none":"all",...(()=>{const e=window.innerHeight;return j+k+5+S>e?{top:j-S-5,left:N,width:y}:{top:j+k+5,left:N,width:y}})()},children:(0,e.jsx)("ul",{children:n.map((l=>(0,e.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>l.value!=p?(e=>{r(e.value),u(!1)})(l):u(!1),children:l.name},l.value)))})})]})]})},f=(n.p,({label:l,className:t,checked:n,disabled:s,onChange:o})=>(0,e.jsxs)("div",{className:`checkbox-flow ${t||""}`,children:[(0,e.jsx)("input",{className:"cursor-pointer m-0",type:"checkbox",checked:n,onChange:e=>(o(e.target.checked),e.target.checked),disabled:s}),(0,e.jsx)("label",{className:"p-0",children:l})]})),h=(n.p,({id:l,label:t,remove:n})=>(0,e.jsxs)("div",{className:"tag",children:[(0,e.jsx)("label",{children:t}),(0,e.jsx)("i",{className:"mdi mdi-close cursor-pointer",onClick:()=>{n(l)}})]})),x=({label:t,options:n,className:s,placeholder:o,values:a,disabled:i,onChange:r})=>{const[d,u]=(0,l.useState)(!1),[p,v]=(0,l.useState)([]),x=(0,l.useRef)(null),b=(0,l.useRef)(null),g=(0,l.useRef)(null),{width:y,top:j,left:N,height:k}=m(b),{height:S}=m(g);return(0,l.useEffect)((()=>{const e=n.filter((e=>null==a?void 0:a.some((l=>e.value===l))));e&&v(e)}),[a]),c(x,(()=>u(!1))),(0,e.jsxs)("div",{className:`select-flow position-relative ${s||""}`,children:[t&&(0,e.jsx)("label",{className:"d-block",children:t}),(0,e.jsxs)("div",{ref:x,children:[(0,e.jsxs)("div",{className:"input w-100",ref:b,onClick:e=>{e.preventDefault(),e.stopPropagation(),i||u(!d)},children:[(0,e.jsx)("div",{className:"w-100 input-block",children:p.map(((l,t)=>(0,e.jsx)(h,{id:t,remove:e=>{(e=>{const l=p.filter(((l,t)=>t!==e));v(l),r(l.map((e=>e.value)))})(e)},label:l.name},`tag_${t}`)))}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",ref:g,style:{display:d?"block":"none",...(()=>{const e=window.innerHeight;return j+k+5+S>e?{top:j-S-5,left:N,width:y}:{top:j+k+5,left:N,width:y}})()},children:(0,e.jsx)("ul",{children:n.map(((l,t)=>(0,e.jsx)("li",{className:"cursor-pointer",onClick:()=>(e=>{let l=p;p.some((l=>l.value===e.value))?l=p.filter((l=>l.value!==e.value)):l.push(e),v(l),r(l.map((e=>e.value)))})(l),children:(0,e.jsx)(f,{checked:p.some((e=>e.value===l.value)),onChange:()=>{},label:l.name})},l.value)))})})]})]})};n.p;const b=({label:t,className:n,placeholder:s,value:o,disabled:a,isDigit:i=!1,onChange:r,onBlur:c})=>{const[d,u]=(0,l.useState)(o);return(0,l.useEffect)((()=>{u(o)}),[o]),(0,e.jsxs)("div",{className:`input-flow ${n||""}`,children:[t&&(0,e.jsx)("label",{className:"d-block p-0",children:t}),(0,e.jsx)("input",{className:"w-100",placeholder:s,value:d,onChange:e=>{const l=e.target.value;i&&!new RegExp(/^\d+$/).test(l)||(null==r||r(l),u(l))},onBlur:c,disabled:a})]})},g={name:"end",panelLabel:"End",version:"0.8",inputs:[{name:"_"}],outputs:[],icon:"mdi-flag-checkered",defaultProps:()=>({label:{type:"string",value:"End"},description:"end",forms:[],actions:[],taskName:{type:"string",value:"End"},procesStatus:"completed"}),editSection:n=>()=>{var s,a,i,r,c,d,p;const[m,h]=(0,l.useState)([]),g=null===(i=null===(a=null===(s=null==n?void 0:n.callbacks)||void 0===s?void 0:s.ui)||void 0===a?void 0:a.getRoles)||void 0===i?void 0:i.call(a),[y,j]=(0,l.useState)(function(e,l){return e?((e||[]).forEach((e=>{let t=[];e.roles.forEach((e=>{let n=null==l?void 0:l.find((l=>l.name.value===e||l.id===e));n&&t.push(n.id)})),e.roles=t})),e):[]}(n.propValues.forms,g)),[N,k]=(0,l.useState)((null===(r=n.propValues.taskName)||void 0===r?void 0:r.value)||""),[S,w]=(0,l.useState)(n.propValues.procesStatus||""),[C,E]=(0,l.useState)(!1),O=m.map((e=>({name:`${e.name}`,value:e.ID}))),R=null==g?void 0:g.map((e=>({name:`${e.name.value}`,value:e.id}))),$=Object.entries(t).map((e=>({name:`${e[1]}`,value:`${e[0]}`})));if(!n.callbacks.ui)throw new Error("end can not execute on environments without UI");const L=n.callbacks.ui;(0,l.useEffect)((()=>{var e;k((null===(e=n.propValues.taskName)||void 0===e?void 0:e.value)||"")}),[null===(c=n.propValues.taskName)||void 0===c?void 0:c.value]),(0,l.useEffect)((()=>{w(n.propValues.procesStatus||"")}),[n.propValues.procesStatus]),(0,l.useEffect)((()=>{(async()=>{h(await L.getModels("qjson"))})()}),[]);const _=[{component:v,componentName:"Select",key:"id",props:{label:"Form",types:null===(d=n.propValues.forms)||void 0===d?void 0:d.map((e=>e.id)),options:O}},{component:x,componentName:"MultiSelect",key:"roles",props:{label:"Roles",options:R}},{component:f,componentName:"Checkbox",key:"readonly",props:{label:"Readonly",className:"mt-3",disabled:!0}}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(o,{label:"START NODE NAME",children:[(0,e.jsx)(b,{disabled:n.callbacks.readOnly,className:"mx-3",label:"Label",value:(null===(p=n.propValues.label)||void 0===p?void 0:p.value)||"",onChange:e=>n.callbacks.setProp("label",{type:"string",value:e})}),(0,e.jsx)(b,{disabled:n.callbacks.readOnly,className:"mx-3",label:"Task Name",value:N,onChange:e=>{let l=e.replace(/[^a-zA-Z0-9]+/g,"");k(l),n.callbacks.setProp("taskName",{type:"string",value:l})}}),(0,e.jsx)(v,{disabled:n.callbacks.readOnly,className:"mx-3",label:"Process Status",options:$,value:S,onChange:e=>{w(e),n.callbacks.setProp("procesStatus",e)}})]}),(0,e.jsx)(u,{disabled:n.callbacks.readOnly,fields:y,dialogTitle:"Form",collapsibleLabel:"FORMS",fieldLabel:"id",getFieldLabel:e=>{var l;return(null===(l=m.find((l=>l.ID==e.id)))||void 0===l?void 0:l.name)||""},dialogElements:_,emptyValues:{id:"",roles:[],readonly:!0},createItemLabel:"Add Forms",onChange:e=>{j(e),n.callbacks.setProp("forms",e)}})]})}}})(),s})()));