/*! For license information please see humantask_design.js.LICENSE.txt */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],n):"object"==typeof exports?exports.flowcomponent=n(require("react"),require("react-dom")):e.flowcomponent=n(e.react,e["react-dom"])}(this,((e,n)=>(()=>{var a={4645:(e,n,a)=>{"use strict";var t=a(7111);t.createRoot,t.hydrateRoot},6094:(e,n,a)=>{"use strict";var t=a(8156),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,a){var t,s={},c=null,p=null;for(t in void 0!==a&&(c=""+a),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(p=n.ref),n)o.call(n,t)&&!r.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:l,type:e,key:c,ref:p,props:s,_owner:i.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},4512:(e,n,a)=>{"use strict";e.exports=a(6094)},8156:n=>{"use strict";n.exports=e},7111:e=>{"use strict";e.exports=n},5685:(e,n)=>{var a;!function(){"use strict";var t={}.hasOwnProperty;function l(){for(var e="",n=0;n<arguments.length;n++){var a=arguments[n];a&&(e=o(e,s(a)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var a in e)t.call(e,a)&&e[a]&&(n=o(n,a));return n}function o(e,n){return n?e?e+" "+n:e+n:e}e.exports?(l.default=l,e.exports=l):void 0===(a=function(){return l}.apply(n,[]))||(e.exports=a)}()}},t={};function l(e){var n=t[e];if(void 0!==n)return n.exports;var s=t[e]={exports:{}};return a[e](s,s.exports,l),s.exports}l.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return l.d(n,{a:n}),n},l.d=(e,n)=>{for(var a in n)l.o(n,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},l.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var s={};return(()=>{"use strict";l.r(s),l.d(s,{default:()=>U});var e=l(4512),n=l(8156);let a;a={getUser:{name:"getUser",type:"flow"},notify:{name:"notify",type:"flow"},userTaskActivity:{name:"userTaskActivity",type:"flow"},preForm:{name:"TaskPreview",type:"qjson"}};const t={"":"Custom","Pending-InProgress":"Pending-InProgress","Pending-Approval":"Pending-Approval","Resolved-Completed":"Resolved-Completed",New:"New",Returned:"Returned","Returned-Originator":"Returned-Originator","Returned-Recipient":"Returned-Recipient","Resolved-Cancelled":"Resolved-Cancelled"},o={"--days-- Weekdays":"--days-- Weekdays","--days-- Calendar Days":"--days-- Calendar Days","--dd--":"--dd--","At The End Of The Month":"At The End Of The Month"},i={None:"None",Previous:"Previous",Next:"Next"},r={"--hours-- Hours":"--hours-- Hours","--hh--":"--hh--"},c={"--minutes-- Minutes":"--minutes-- Minutes","--mm--":"--mm--"},p={label:"",day:{type:"--days-- Weekdays",dayCorrection:"None",setTo:0},hour:{type:"--hours-- Hours",setTo:0},minute:{type:"--minutes-- Minutes",setTo:0}};function d(){return structuredClone(p)}function u(e){if(!(e&&e.day&&e.hour&&e.minute))return e=structuredClone(p),"";if("At The End Of The Month"===e.day.type){if(e.day.setTo=0,"--hh--"!==e.hour.type&&"--mm--"!==e.minute.type)return"Hour and minute must be set as hh:mm"}else if(0!==e.day.setTo){if(!e.day.type||!Object.keys(o).includes(e.day.type))return"Day Setting Type Not Set Properly";if("--dd--"===e.day.type&&"--hh--"!==e.hour.type&&"--mm--"!==e.minute.type)return"Hour and minute must be set as hh:mm"}return"--hh--"===e.hour.type&&"--mm--"!==e.minute.type||"--hh--"!==e.hour.type&&"--mm--"===e.minute.type?"Hour and Minute types must be aligned":""}l.p,l.p;const m=({label:a,isKeepOpen:t=!1,onAddButton:l,children:s})=>{const[o,i]=(0,n.useState)(!0);return(0,e.jsxs)("div",{className:"variables ",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,e.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>i(!o),children:[!t&&(0,e.jsx)("i",{className:"mdi "+(o?"mdi-chevron-down":"mdi-chevron-right")}),(0,e.jsx)("p",{children:a})]}),l&&(0,e.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),l(e)}})]}),(t||o)&&(0,e.jsx)("ul",{className:"variable-list",children:s})]})};var v=l(5685),y=l.n(v);l.p;const f=({isOpen:a,onClose:t,children:l,footer:s=[],title:o,type:i="dialog",position:r})=>{if(!a)return null;const[c,p]=(0,n.useState)({top:0}),d=(0,n.useRef)(null);return(0,n.useEffect)((()=>{var e,n;if(r){const a=window.innerHeight>r.top+((null===(e=d.current)||void 0===e?void 0:e.clientHeight)||0)?r.top:window.innerHeight-((null===(n=d.current)||void 0===n?void 0:n.clientHeight)||0)-10;p({top:a})}}),[r]),(0,e.jsx)("div",{className:y()({overlay:"modal"===i}),children:(0,e.jsxs)("div",{ref:d,className:y()("dialog",{"dialog-monaco":"modal"==i}),style:c,children:["dialog"===i?(0,e.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const n=d.current;if(!n)return;const a=n.getBoundingClientRect(),t=e.clientX-a.left,l=e=>{p({top:e.clientY-10,left:e.clientX-t})},s=()=>{document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",s)};document.addEventListener("mousemove",l),document.addEventListener("mouseup",s)})(e),children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{}),(0,e.jsx)("span",{})]}):(0,e.jsx)("div",{}),(0,e.jsxs)("div",{className:"dialog-header",children:[(0,e.jsx)("h5",{className:"dialog-title m-0",children:o}),(0,e.jsx)("div",{className:"cursor-pointer",onClick:t,children:(0,e.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,e.jsx)("div",{className:"dialog-body",children:l}),s.length>0&&(0,e.jsx)("div",{className:"dialog-footer",children:s.map((e=>e))})]})})};function g(e,a){(0,n.useEffect)((()=>{const n=n=>{const t=null==e?void 0:e.current;t&&!t.contains((null==n?void 0:n.target)||null)&&a(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,a])}l.p;const h=a=>{var t;const[l,s]=(0,n.useState)(!1),o=(0,n.useRef)(null);return g(o,(()=>s(!1))),(0,e.jsxs)("div",{className:"dropdown-flow",ref:o,children:[(0,e.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),s(!l)},children:a.iconClass&&(0,e.jsx)("i",{className:a.iconClass})}),(0,e.jsx)("ul",{className:"py-3",style:{display:l?"block":"none"},children:null===(t=a.options)||void 0===t?void 0:t.map((n=>(0,e.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:e=>{s(!1),n.onClick(e)},children:n.name},n.name)))})]})},b=({collapsibleLabel:a,fields:t,disabledFields:l=[],fieldLabel:s,dialogElements:o,emptyValues:i,isAddible:r=!0,isDeletable:c=!0,isCollabsible:p=!0,createItemLabel:d,dialogTitle:u,maxItemLen:v,disabled:y,onChange:g,validate:b,getFieldLabel:x})=>{const[j,N]=(0,n.useState)([]),[k,S]=(0,n.useState)(!1),[C,w]=(0,n.useState)(0),[T,O]=(0,n.useState)({top:0}),[E,P]=(0,n.useState)(!1),[M,A]=(0,n.useState)("");(0,n.useEffect)((()=>{const e=new Set(l.map((e=>JSON.stringify(e)))),n=t.filter((n=>!e.has(JSON.stringify(n))));N(n)}),[t]);const R=(e,n,a=!1)=>{O({top:e.pageY}),P(a),w(n),b&&A(b(j[n])),S(!0)},L=(e,n,a=s)=>{if(!e)return;if(a.includes(".")){const n=V(a,e);return Array.isArray(n)||"object"!=typeof n?n:n.value?`${n.type}.${n.value}`:`${"name"==s?"Variable ":s}`}const t=e?e[a]:e;return Array.isArray(t)||"object"!=typeof t?t:t.value?`${t.type}.${t.value}`:`${"name"==s?"Variable ":s}`},V=(e,n)=>{if(n)return e.split(".").reduce(((e,n)=>e[n]),n)},$=e=>{N(e),g(JSON.parse(JSON.stringify([...l,...e])))};function D(e,n){const a=[...j];((e,n,a)=>{const t=n.split("."),l=t.pop();t.reduce(((e,n)=>e[n]),e)[l]=a})(a[C],e,n),$(a),b&&A(b(a[C]))}const I=e=>{if(y)return;if(void 0!==v&&j.length>=v)return;const n=[...j],a=JSON.parse(JSON.stringify(i));Object.keys(a).forEach((e=>{if("name"==e)a[e]=""==a[e]?`Variable ${(n.length+1).toString()}`:a[e];else if("object"==typeof a[e]&&a[e].hasOwnProperty("value")){let t=a[e].value;t=""==t?s+" "+(n.length+1).toString():t,a[e].value=t}})),n.push(a),$(n),e&&O({top:e.pageY}),w(n.indexOf(a)),S(!0)},F=(e,n)=>{var a;const t={true:l,false:j};y&&(t[E.toString()]={...l,...j});const s=null===(a=t[E.toString()])||void 0===a?void 0:a[C];return{Expression:{expression:(null==s?void 0:s[n])||{type:"string",value:""},onBlur:e=>{D(n,e)}},Checkbox:{checked:L(s,0,n)||!1,onChange:e=>{D(n,e)}},Select:{value:L(s,0,n)||"",onChange:e=>{D(n,e)}},Input:{value:L(s,0,n)||"",onChange:e=>{D(n,e)}},MultiSelect:{values:L(s,0,n)||[],onChange:e=>{D(n,e)}},Mapping:{mapping:V(n,s)||{inParamMapping:{},outParamMapping:{}},onChangeInParamMapping:e=>{D(n+".inParamMapping",e)},onChangeOutParamMapping:e=>{D(n+".outParamMapping",e)}}}[e]||{value:(null==s?void 0:s[n])||"",onChange:e=>{D(n,e)}}};return(0,e.jsx)(e.Fragment,{children:0==(null==j?void 0:j.length)&&0==l.length&&r?(0,e.jsxs)("div",{className:"dynamic-field-create vertical-line cursor-pointer",onClick:e=>I(e),children:[(0,e.jsx)("p",{children:d}),void 0===v||void 0!==v&&j.length<v?(0,e.jsx)("i",{className:"mdi mdi-plus"}):(0,e.jsx)(e.Fragment,{})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(m,{label:a,isKeepOpen:!p,...(()=>{if(r&&!(void 0!==v&&j.length>=v))return{onAddButton:I}})(),children:[null==l?void 0:l.map(((n,a)=>(0,e.jsx)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==a&&"vertical-line"}`,onClick:e=>R(e,a,!0),children:(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==x?void 0:x(n))||L(n)||`${"name"==s?"Variable ":s} ${a+1}`})},`item${a}`))),null==j?void 0:j.map(((n,a)=>(0,e.jsxs)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==a&&"vertical-line"}`,onClick:e=>R(e,a,y),children:[(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==x?void 0:x(n))||L(n)||`${"name"==s?"Variable ":s} ${a+1}`}),c&&(0,e.jsx)(h,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Delete",onClick:e=>{((e,n)=>{e.preventDefault(),e.stopPropagation(),$([...j].filter(((e,a)=>a!=n))),S(!1)})(e,a)}}]})]},`item${a}`)))]}),(0,e.jsxs)(f,{isOpen:k,title:u,onClose:()=>(S(!1),void A("")),position:T,children:[(0,e.jsxs)("p",{style:{color:"red",display:""===M?"none":""},children:["$",M]}),o.map(((n,a)=>{var t,s;if((E||!n.isRendered||(null===(t=null==n?void 0:n.isRendered)||void 0===t?void 0:t.call(n,j[C])))&&(!E||!n.isRendered||(null===(s=null==n?void 0:n.isRendered)||void 0===s?void 0:s.call(n,l[C]))))return(0,e.jsx)(n.component,{...F(n.componentName,n.key),disabled:E,...n.props,children:n.children},n.key)}))]})]})})};function x(e){return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}function j(e){const a=(0,n.useSyncExternalStore)(x,(()=>function(e){var n,a,t,l,s;const o=null===(n=e.current)||void 0===n?void 0:n.getBoundingClientRect();return JSON.stringify({width:null!==(a=null==o?void 0:o.width)&&void 0!==a?a:0,height:null!==(t=null==o?void 0:o.height)&&void 0!==t?t:0,top:null!==(l=null==o?void 0:o.top)&&void 0!==l?l:0,left:null!==(s=null==o?void 0:o.left)&&void 0!==s?s:0})}(e)));return(0,n.useMemo)((()=>JSON.parse(a)),[a])}l.p;const N=({label:a,options:t=[],className:l,placeholder:s,value:o,disabled:i,onChange:r})=>{const[c,p]=(0,n.useState)(!1),[d,u]=(0,n.useState)(o),[m,v]=(0,n.useState)([]),y=(0,n.useRef)(null),f=(0,n.useRef)(null),h=(0,n.useRef)(null),{width:b,top:x,left:N,height:k}=j(f),{height:S}=j(h);return g(y,(()=>p(!1))),(0,n.useEffect)((()=>{const e=m.find((e=>e.value===o));e?u(e.name):o||u("")}),[o,m]),(0,n.useEffect)((()=>{v(t)}),[t]),(0,e.jsxs)("div",{className:`select-flow position-relative ${l||""}`,children:[a&&(0,e.jsx)("label",{className:"d-block ellipsis-text p-0",children:a}),(0,e.jsxs)("div",{ref:y,children:[(0,e.jsxs)("div",{className:"input",ref:f,onClick:()=>{i||p(!c)},style:{cursor:i?"not-allowed":"default",opacity:i?"0.6":"1"},children:[(0,e.jsx)("input",{className:"w-100 ellipsis-text",placeholder:s,value:d,onChange:()=>{}}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",ref:h,style:{display:c?"block":"none",pointerEvents:i?"none":"all",...(()=>{const e=window.innerHeight;return x+k+5+S>e?{top:x-S-5,left:N,width:b}:{top:x+k+5,left:N,width:b}})()},children:(0,e.jsx)("ul",{children:t.map((n=>(0,e.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>n.value!=d?(e=>{r(e.value),p(!1)})(n):p(!1),children:n.name},n.value)))})})]})]})},k=(l.p,({label:a,className:t,placeholder:l,value:s,disabled:o,isDigit:i=!1,onChange:r,onBlur:c})=>{const[p,d]=(0,n.useState)(s);return(0,n.useEffect)((()=>{d(s)}),[s]),(0,e.jsxs)("div",{className:`input-flow ${t||""}`,children:[a&&(0,e.jsx)("label",{className:"d-block p-0",children:a}),(0,e.jsx)("input",{className:"w-100",placeholder:l,value:p,onChange:e=>{const n=e.target.value;i&&!new RegExp(/^\d+$/).test(n)||(null==r||r(n),d(n))},onBlur:c,disabled:o})]})}),S={start:"start",complete:"complete",cancel:"cancel",return:"return",claim:"claim",unclaim:"unclaim",assignToUser:"assignToUser",assignToUnit:"assignToUnit",save:"save",function:"function",trigger:"trigger"},C=["start","claim","assignToUser","assignToUnit"],w=a=>{var t,l,s;const p=Object.keys(o).map((e=>({name:e,value:e}))),v=Object.keys(i).map((e=>({name:e,value:e}))),y=Object.keys(r).map((e=>({name:e,value:e}))),f=Object.keys(c).map((e=>({name:e,value:e}))),g={...d(),label:"SLA Goal"},h={...d(),label:"SLA Deadline"},x={...d(),label:"SLA Critical"},[j,S]=(0,n.useState)(a.priority||10),[C,w]=(0,n.useState)([(null===(t=a.sla)||void 0===t?void 0:t.slaGoal)||g,(null===(l=a.sla)||void 0===l?void 0:l.slaDeadline)||h,(null===(s=a.sla)||void 0===s?void 0:s.slaCritical)||x]);(0,n.useEffect)((()=>{S(a.priority||10)}),[a.priority]),(0,n.useEffect)((()=>{var e,n,t;w([(null===(e=a.sla)||void 0===e?void 0:e.slaGoal)||g,(null===(n=a.sla)||void 0===n?void 0:n.slaDeadline)||h,(null===(t=a.sla)||void 0===t?void 0:t.slaCritical)||x])}),[a.sla]);const T=[{component:N,componentName:"Select",key:"day.type",props:{label:"Day Calculation Type",options:p,className:"mt-3"}},{component:N,componentName:"Select",key:"day.dayCorrection",isRendered:e=>{var n;return"--days-- Weekdays"!==(null===(n=null==e?void 0:e.day)||void 0===n?void 0:n.type)||!1},props:{label:"Weekday Correction",options:v,className:"mt-3"}},{component:k,componentName:"Input",key:"day.setTo",isRendered:e=>{var n;return"At The End Of The Month"!==(null===(n=null==e?void 0:e.day)||void 0===n?void 0:n.type)||!1},props:{label:"Day",isDigit:!0}},{component:N,componentName:"Select",key:"hour.type",props:{label:"Hour Calculation Type",options:y,className:"mt-3"}},{component:k,componentName:"Input",key:"hour.setTo",props:{label:"Hour",isDigit:!0}},{component:N,componentName:"Select",key:"minute.type",props:{label:"Minute Calculation Type",options:f,className:"mt-3"}},{component:k,componentName:"Input",key:"minute.setTo",props:{label:"Minute",isDigit:!0}}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(m,{label:"PRIORITY",children:(0,e.jsx)(k,{disabled:a.readOnly,className:"w-100",placeholder:"10",isDigit:!0,value:j.toFixed(0),onChange:e=>{const n=Number(e);S(n),a.onChangePriority(n)}})}),(0,e.jsx)(b,{disabled:a.readOnly,emptyValues:d(),dialogTitle:"Time Setting",fields:C,fieldLabel:"label",collapsibleLabel:"SLA",dialogElements:T,isAddible:!1,isDeletable:!1,onChange:e=>{var n;n=e,a.onChangeSLA({slaGoal:n[0],slaDeadline:n[1],slaCritical:n[2]})},validate:u})]})},T=(l.p,l.p,({label:n,className:a,checked:t,disabled:l,onChange:s})=>(0,e.jsxs)("div",{className:`checkbox-flow ${a||""}`,children:[(0,e.jsx)("input",{className:"cursor-pointer m-0",type:"checkbox",checked:t,onChange:e=>(s(e.target.checked),e.target.checked),disabled:l}),(0,e.jsx)("label",{className:"p-0",children:n})]})),O=(l.p,({id:n,label:a,remove:t})=>(0,e.jsxs)("div",{className:"tag",children:[(0,e.jsx)("label",{children:a}),(0,e.jsx)("i",{className:"mdi mdi-close cursor-pointer",onClick:e=>(e=>{e.isDefaultPrevented(),e.stopPropagation(),t(n)})(e)})]})),E=({label:a,options:t,className:l,placeholder:s,values:o,disabled:i,onChange:r})=>{const[c,p]=(0,n.useState)(!1),[d,u]=(0,n.useState)([]),m=(0,n.useRef)(null),v=(0,n.useRef)(null),f=(0,n.useRef)(null),{width:h,top:b,left:x,height:N}=j(v),{height:k}=j(f);return(0,n.useEffect)((()=>{const e=t.filter((e=>null==o?void 0:o.some((n=>e.value===n))));e&&u(e)}),[o]),g(m,(()=>p(!1))),(0,e.jsxs)("div",{className:y()("multi-select-flow",l),children:[a&&(0,e.jsx)("label",{className:"d-block",children:a}),(0,e.jsxs)("div",{ref:m,className:"select-div w-100",children:[(0,e.jsxs)("div",{className:"input-div w-100",ref:v,onClick:e=>{e.preventDefault(),e.stopPropagation(),i||p(!c)},children:[(0,e.jsx)("div",{className:"w-100 input-block",children:d.map(((n,a)=>(0,e.jsx)(O,{id:a,remove:e=>{i||(e=>{const n=d.filter(((n,a)=>a!==e));u(n),r(n.map((e=>e.value)))})(e)},label:n.name},`tag_${a}`)))}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",ref:f,style:{display:c?"block":"none",...(()=>{const e=window.innerHeight;return b+N+5+k>e?{top:b-k-5,left:x,width:h}:{top:b+N+5,left:x,width:h}})()},children:(0,e.jsx)("ul",{children:t.map(((n,a)=>(0,e.jsx)("li",{className:"cursor-pointer",onClick:()=>(e=>{let n=d;d.some((n=>n.value===e.value))?n=d.filter((n=>n.value!==e.value)):n.push(e),u(n),r(n.map((e=>e.value)))})(n),children:(0,e.jsx)(T,{checked:d.some((e=>e.value===n.value)),onChange:()=>{},label:n.name})},n.value)))})})]})]})};function P(e,n){return e?((e||[]).forEach((e=>{let a=[];e.roles.forEach((e=>{let t=null==n?void 0:n.find((n=>n.name.value===e||n.id===e));t&&a.push(t.id)})),e.roles=a})),e):[]}l.p,l(4645),l.p;const M=({children:n,className:a,color:t="primary",disabled:l,onClick:s})=>(0,e.jsx)("button",{className:y()("button-flow",a,t),disabled:l,onClick:s,children:n});l.p;const A=({node:a,level:t=0,onSelect:l,selected:s})=>{const[o,i]=(0,n.useState)([]);return(0,n.useEffect)((()=>{const e=s.split(".");e.length>0&&i(o.concat(e))}),[s]),(0,e.jsx)("div",{className:"tree-node",children:Object.keys(a).map((n=>{const r=Array.isArray(a[n])?a[n].length>0:"object"==typeof a[n]&&null!==a[n],c=s===n,p=s.split(".").length>1?s.split(".").filter(((e,n)=>0!==n)).join("."):s;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:y()("tree-row",{selected:c}),onClick:()=>(e=>{l(e)})(n),children:(0,e.jsxs)("div",{className:"tree-text",style:{paddingLeft:r?20*t:20*t+10},onClick:()=>(e=>{o.includes(e)?i(o.filter((n=>n!==e))):i([...o,e])})(n),children:[r&&(0,e.jsx)("i",{className:"mdi mdi-menu-"+(o.includes(n)?"down":"right")}),(0,e.jsx)("span",{children:n})]})},n),r&&o.includes(n)&&(0,e.jsx)(A,{node:a[n],level:t+1,onSelect:e=>l(`${n}.${e}`),selected:p})]})}))})},R=({className:a,isOpen:t,selected:l,position:s,items:o,onSelected:i,onClose:r})=>{const[c,p]=(0,n.useState)(""),[d,u]=(0,n.useState)(""),[m,v]=(0,n.useState)(o),[g,h]=(0,n.useState)({top:200});return(0,n.useEffect)((()=>{const e=n=>Object.keys(n).reduce(((a,t)=>{if("object"==typeof n[t]){if(!t)return a;if(0===Object.keys(n[t]).length)return a[t]="",a;n[t].type?a[t]=n[t].type:a[t]=e(n[t])}else a[t]=n[t];return a}),{});if(!o)return;const n=e(o);v(JSON.parse(JSON.stringify(n))),p("")}),[o]),(0,n.useEffect)((()=>{l&&p(l)}),[l]),(0,n.useEffect)((()=>{s&&h(s)}),[s]),(0,e.jsx)("div",{className:y()("picker",a),children:(0,e.jsx)(f,{title:"Picker",position:g,isOpen:t,onClose:()=>r(),children:(0,e.jsxs)("div",{children:[(0,e.jsx)(k,{className:"mb-3",placeholder:"Search",value:d,onChange:e=>u(e)}),(0,e.jsx)("div",{className:"tree",children:(0,e.jsx)(A,{node:(e=>{const n=a=>Object.keys(a).reduce(((t,l)=>{if(l.toLowerCase().includes(e.toLowerCase())&&(t[l]=a[l]),Array.isArray(a[l])){const n=a[l].filter((n=>"string"==typeof n&&n.toLowerCase().includes(e.toLowerCase())));n.length>0&&(t[l]=n)}if("object"==typeof a[l]&&null!==a[l]){const e=n(a[l]);Object.keys(e).length>0&&(t[l]=e)}return t}),{});return m?n(m):{}})(d),selected:c,onSelect:e=>{p(e)}})}),(0,e.jsxs)("div",{className:"d-flex justify-content-end mt-3",children:[(0,e.jsx)(M,{color:"secondary",className:"px-2",onClick:()=>r(),children:"Cancel"}),(0,e.jsx)(M,{className:"ms-3 px-2",disabled:!c,onClick:()=>{i(c),r()},children:"SELECT"})]})]})})})},L=({label:a,className:t,types:l,expression:s,disabled:o,constantsOptions:i,store:r,onChange:c,onBlur:p})=>{const[d,u]=(0,n.useState)([]),[m,v]=(0,n.useState)(l[0]),[y,f]=(0,n.useState)(""),[g,h]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{v(s.type),f(s.value)}),[s]),(0,n.useEffect)((()=>{u(l.map((e=>({name:e,value:e}))))}),[l]),(0,e.jsxs)("div",{className:`expression-flow ${t||""}`,children:[(0,e.jsx)(N,{label:a,options:d,disabled:o||g,value:m,onChange:e=>{null==c||c({value:"",type:e}),null==p||p({value:"",type:e})}}),(0,e.jsxs)("div",{className:"d-flex align-items-center mt-2",children:["constant"===m?(0,e.jsx)(N,{className:"w-100",options:i||[],value:y,disabled:o||g,onChange:e=>{null==c||c({type:m,value:e}),null==p||p({type:m,value:e}),f(e)}}):(0,e.jsx)(k,{className:"w-100",value:y,onChange:e=>{null==c||c({type:m,value:e}),f(e)},disabled:o||g,onBlur:e=>null==p?void 0:p({type:m,value:e.target.value})}),["context","input","output","vars"].includes(m)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"ms-2",onClick:e=>{o||h(!0)},children:(0,e.jsx)("i",{className:y?"mdi mdi-database":"mdi mdi-database-outline"})}),(0,e.jsx)(R,{isOpen:g,items:r[m],onClose:()=>h(!1),selected:y,onSelected:e=>{null==c||c({type:m,value:e}),null==p||p({type:m,value:e}),f(e)}})]})]})]})},V=({mapping:a,mappingSchema:t,outerStore:l,constantsOptions:s,readOnly:o,onChangeInParamMapping:i,onChangeOutParamMapping:r})=>{const[c,p]=(0,n.useState)((null==a?void 0:a.inParamMapping)||[]),[d,u]=(0,n.useState)((null==a?void 0:a.outParamMapping)||[]),m=["input","context","string","number","boolean","constant",l.vars&&"vars"],v=[!l.vars&&"context","output",l.vars&&"vars"];(0,n.useEffect)((()=>{p((null==a?void 0:a.inParamMapping)||[])}),[null==a?void 0:a.inParamMapping]),(0,n.useEffect)((()=>{u((null==a?void 0:a.outParamMapping)||[])}),[null==a?void 0:a.outParamMapping]);const y=[{component:L,componentName:"Expression",key:"mapping",props:{label:"Assignment",types:m,store:l,constantsOptions:s}}],f=[{component:L,componentName:"Expression",key:"mapping",props:{label:"Assignment",types:v,store:l}}];function g(e){return e&&e.mapping&&e.mapping.value&&("string"===e.mapping.type||""!==e.mapping.value)?"":"Mapping Not Assigned"}return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(b,{disabled:o,emptyValues:{variable:{type:"input",value:""},mapping:{type:"string",value:""}},dialogTitle:"Assign To",getFieldLabel:e=>e.variable.value,fields:c,disabledFields:t.inParamMapping,fieldLabel:"Variable",collapsibleLabel:"IN VARIABLES MAPPING",isAddible:!1,dialogElements:y,onChange:e=>{p(e),i(e)},validate:g}),(0,e.jsx)(b,{disabled:o,emptyValues:{variable:{type:"output",value:""},mapping:{type:"context",value:""}},dialogTitle:"Assign To",fields:d,disabledFields:t.outParamMapping,fieldLabel:"Variable",getFieldLabel:e=>e.variable.value,collapsibleLabel:"OUT VARIABLES MAPPING",isAddible:!1,dialogElements:f,onChange:e=>{u(e),r(e)},validate:g})]})};let $;const D=$={inParamMapping:[],outParamMapping:[]};var I;let F;I={boolean:!0,datetime:!0,enum:!0,number:!0,dataType:!0,string:!0,constant:!0,any:!0},Object.keys(I);const _=F={quick:{modelKeys:{self:"qjson"}},flow:{modelKeys:{design:"flow-design",runtime:"flow-runtime"}},workflow:{modelKeys:{design:"workflow-design",runtime:"workflow-runtime"}},dataTypeEditor:{modelKeys:{single:"dataType"}},serviceEditor:{modelKeys:{single:"restService"}},soapEditor:{modelKeys:{single:"soapService"}},enum:{modelKeys:{single:"enum"}},constantEditor:{modelKeys:{single:"constant"}}};new Error("unimplemented for namedComponent"),new Error("unimplemented for json");const U={name:"humantask",panelLabel:"User Task",version:"0.8",inputs:[{name:"_"}],outputs:["_"],color:"#E91E63",icon:"mdi-account-card-outline",defaultProps:()=>({label:{type:"string",value:"User Task"},description:"User Task",taskName:{type:"string",value:`UT${new String(Date.now()).toString()}`},procesStatus:"",taskStatus:"",priority:10,forms:[],actions:[]}),editSection:a=>()=>{var l,s,o,i,r,c,p,d,u;const{NameDiv:v,DescDiv:y}=a.react.prop,[f,g]=(0,n.useState)([]),[h,x]=(0,n.useState)([]),j=null===(o=null===(s=null===(l=null==a?void 0:a.callbacks)||void 0===l?void 0:l.ui)||void 0===s?void 0:s.getRoles)||void 0===o?void 0:o.call(s),[O,M]=(0,n.useState)(a.propValues.swimlane),A=null===(c=null===(r=null===(i=null==a?void 0:a.callbacks)||void 0===i?void 0:i.ui)||void 0===r?void 0:r.getSwimlanes)||void 0===c?void 0:c.call(r),[R,L]=(0,n.useState)(($=P(a.propValues.actions,j))?(($||[]).forEach((e=>{e.props||(e.props={}),e.props.validation||(e.props.validation={type:"literal",value:""}),e.props.function||(e.props.function={id:"",type:"referenced",mapping:{inParamMapping:[],outParamMapping:[]}})})),$):[]);var $;const[I,F]=(0,n.useState)(P(a.propValues.forms,j)),[U,B]=(0,n.useState)((null===(p=a.propValues.taskName)||void 0===p?void 0:p.value)||""),[K,H]=(0,n.useState)(a.propValues.procesStatus||""),[q,J]=(0,n.useState)(a.propValues.sendTo||"swimlane"),[G,W]=(0,n.useState)(a.propValues.user||""),[Y,z]=(0,n.useState)(a.propValues.swimlane||""),[X,Z]=(0,n.useState)(),[Q,ee]=(0,n.useState)([]),[ne,ae]=(0,n.useState)(!1),te=f.map((e=>({name:`${e.name}`,value:e.ID}))),le=h.map((e=>({name:`${e.name}`,value:e.ID}))),se=null==j?void 0:j.map((e=>({name:`${e.name.value}`,value:e.id}))),oe=Object.keys(S).filter((e=>"start"!==e)).map((e=>({name:`${e}`,value:e}))),ie=null==A?void 0:A.map((e=>({name:`${e.name.value}`,value:e.id}))),re=Object.entries(t).map((e=>({name:`${e[1]}`,value:`${e[0]}`})));if(!a.callbacks.ui)throw new Error("humantask can not execute on environments without UI");const ce=a.callbacks.ui;(0,n.useEffect)((()=>{(async()=>{var e;const n=await(null===(e=null==ce?void 0:ce.getModels)||void 0===e?void 0:e.call(ce,"constant"));n&&Z(n)})()}),[]),(0,n.useEffect)((()=>{if(X){const e=X.map((e=>({name:e.name,value:e.ID})));ee(e)}}),[X]),(0,n.useEffect)((()=>{var e;B((null===(e=a.propValues.taskName)||void 0===e?void 0:e.value)||"")}),[null===(d=a.propValues.taskName)||void 0===d?void 0:d.value]),(0,n.useEffect)((()=>{H(a.propValues.procesStatus||"")}),[a.propValues.procesStatus]),(0,n.useEffect)((()=>{J(a.propValues.sendTo||"swimlane"),"swimlane"===a.propValues.sendTo?(W(""),z(a.propValues.swimlane||"")):W(a.propValues.user||"")}),[a.propValues.sendTo,a.propValues.user,a.propValues.swimlane]),(0,n.useEffect)((()=>{(async()=>{g(await ce.getModels("qjson"))})()}),[]),(0,n.useEffect)((()=>{(async()=>{x(await ce.getModels("flow"))})()}),[]);const pe=[{component:N,componentName:"Select",key:"id",props:{label:"Form",types:a.propValues.forms.map((e=>e.id)),options:te}},{component:E,componentName:"MultiSelect",key:"roles",props:{label:"Roles",options:se}},{component:T,componentName:"Checkbox",key:"readonly",props:{label:"Readonly",className:"mt-3"}}],de=[{component:N,componentName:"Select",key:"actionType",props:{label:"Action Type",types:S,options:oe,className:"mt-3"}},{component:N,componentName:"Select",key:"props.function.id",isRendered:e=>"function"===(null==e?void 0:e.actionType)||!1,props:{label:"Function To Run",options:le,className:"mt-3"}},{component:V,componentName:"Mapping",key:"props.function.mapping",isRendered:e=>"function"===(null==e?void 0:e.actionType)||!1,props:{mappingSchema:structuredClone(D),outerStore:a.callbacks.nestedStore,className:"mt-3",constantsOptions:Q}},{component:k,componentName:"Input",key:"customType",isRendered:e=>["start","complete"].includes(null==e?void 0:e.actionType)||!1,props:{label:"Custom Type",className:"mt-3"}},{component:k,componentName:"Input",key:"label",props:{label:"Label",className:"mt-3"}},{component:E,componentName:"MultiSelect",key:"roles",props:{label:"Roles",className:"mt-3",options:se}},{component:E,componentName:"MultiSelect",key:"props.uniqueKeys",isRendered:e=>["start","claim","complete"].includes(null==e?void 0:e.actionType)||!1,props:{label:"Unique Keys",className:"mt-3",options:[{name:"Maker 1",value:"maker1"},{name:"Maker 2",value:"maker2"},{name:"Checker 1",value:"checker1"},{name:"Checker 2",value:"checker2"},{name:"Approver 1",value:"approver1"},{name:"Approver 2",value:"approver2"}]}},{component:T,componentName:"Checkbox",key:"props.userBound",isRendered:e=>!C.includes(null==e?void 0:e.actionType)||!1,props:{label:"User Bound",className:"mt-3"}},{component:k,componentName:"Input",key:"props.validation.value",props:{label:"Visibility Expression (T/F)",className:"mt-3"}}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(m,{label:"USER TASK NAME",children:[(0,e.jsx)(k,{disabled:a.callbacks.readOnly,className:"mx-3",label:"Label",value:(null===(u=a.propValues.label)||void 0===u?void 0:u.value)||"",onChange:e=>a.callbacks.setProp("label",{type:"string",value:e})}),(0,e.jsx)(k,{disabled:a.callbacks.readOnly,className:"mx-3",label:"Task Name",value:U,onChange:e=>{let n=e.replace(/[^a-zA-Z0-9]+/g,"");B(n),a.callbacks.setProp("taskName",{type:"string",value:n})}}),(0,e.jsx)(N,{disabled:a.callbacks.readOnly,className:"mx-3",label:"Process Status",options:re,value:K,onChange:e=>{H(e),a.callbacks.setProp("procesStatus",e)}})]}),(0,e.jsxs)(m,{label:"PROPERTIES",children:[(0,e.jsx)(N,{disabled:a.callbacks.readOnly,label:"Assigned To",className:"mx-3",options:[{name:"Swimlane",value:"swimlane"},{name:"User",value:"user"}],value:q||"swimlane",onChange:e=>{J(e),a.callbacks.setProp("sendTo",e)}}),"user"===q&&(0,e.jsx)(k,{disabled:a.callbacks.readOnly,label:"User",className:"mx-3",value:G,onChange:e=>{W(e),a.callbacks.setProp("user",e)}}),"swimlane"===q&&(0,e.jsx)(N,{disabled:a.callbacks.readOnly,label:"Swimlane",className:"mx-3",options:ie||[],value:O||"",onChange:e=>{M(e),a.callbacks.setProp("swimlane",e)}})]}),(0,e.jsx)(w,{readOnly:a.callbacks.readOnly,priority:a.propValues.priority,onChangePriority:e=>{a.callbacks.setProp("priority",e)},sla:a.propValues.sla,onChangeSLA:e=>{a.callbacks.setProp("sla",e)}}),(0,e.jsx)(b,{disabled:a.callbacks.readOnly,fields:I,dialogTitle:"Form",collapsibleLabel:"FORMS",fieldLabel:"Form",getFieldLabel:e=>{var n;return(null===(n=f.find((n=>n.ID==e.id)))||void 0===n?void 0:n.name)||""},dialogElements:pe,emptyValues:{id:"",roles:[],readonly:!1},createItemLabel:"Add Forms",onChange:e=>{F(e),a.callbacks.setProp("forms",e)}}),(0,e.jsx)(b,{disabled:a.callbacks.readOnly,fields:R,dialogTitle:"Action",collapsibleLabel:"ACTIONS",fieldLabel:"Action",getFieldLabel:e=>e.actionType?e.customType?`${e.actionType} - ${e.customType}`:`${e.actionType}`:"",dialogElements:de,emptyValues:{actionType:"claim",customType:"",label:"",roles:[],props:{uniqueKeys:[],userBound:!1,validation:{type:"literal",value:""},function:{id:"",type:"referenced",mapping:{inParamMapping:[],outParamMapping:[]}}}},createItemLabel:"Add Actions",onChange:e=>(async e=>{var n,t,l;for(let s of e)if(s.props||(s.props={}),s.props.userBound=!C.includes(s.actionType)&&(null===(n=s.props)||void 0===n?void 0:n.userBound),s.props.function&&s.props.function.mapping&&"function"===s.actionType||(s.props.function={id:"",type:"referenced",mapping:{inParamMapping:[],outParamMapping:[]}}),"function"===s.actionType&&"referenced"==s.props.function.type){const e=h.find((e=>{var n;return e.ID===(null===(n=s.props)||void 0===n?void 0:n.function).id}));if(e&&s.customType!=e.name){s.customType=(null==e?void 0:e.name)||"";const n=await(null===(l=null===(t=a.callbacks.ui)||void 0===t?void 0:t.getModelBody)||void 0===l?void 0:l.call(t,e.ID,_.flow.modelKeys.runtime));s.props.function.mapping.inParamMapping=Object.values(n.store.input).map((e=>({variable:{type:"input",value:e._name},mapping:{type:"string",value:""}}))),s.props.function.mapping.outParamMapping=Object.values(n.store.output).map((e=>({variable:{type:"output",value:e._name},mapping:{type:"context",value:""}})))}}L(e),a.callbacks.setProp("actions",e)})(e)})]})}}})(),s})()));