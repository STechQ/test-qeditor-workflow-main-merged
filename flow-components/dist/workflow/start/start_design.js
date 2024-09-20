/*! For license information please see start_design.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.flowcomponent=t(require("react")):e.flowcomponent=t(e.react)}(this,(e=>(()=>{var t={6094:(e,t,l)=>{"use strict";var n=l(8156),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,l){var n,a={},c=null,d=null;for(n in void 0!==l&&(c=""+l),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!r.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:d,props:a,_owner:i.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},4512:(e,t,l)=>{"use strict";e.exports=l(6094)},8156:t=>{"use strict";t.exports=e},5685:(e,t)=>{var l;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=o(e,a(l)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)n.call(e,l)&&e[l]&&(t=o(t,l));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0===(l=function(){return s}.apply(t,[]))||(e.exports=l)}()}},l={};function n(e){var s=l[e];if(void 0!==s)return s.exports;var a=l[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var s={};return(()=>{"use strict";n.r(s),n.d(s,{default:()=>x});var e=n(4512),t=n(8156);n.p,n.p;const l=({label:l,isKeepOpen:n=!1,onAddButton:s,children:a})=>{const[o,i]=(0,t.useState)(!0);return(0,e.jsxs)("div",{className:"variables ",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,e.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>i(!o),children:[!n&&(0,e.jsx)("i",{className:"mdi "+(o?"mdi-chevron-down":"mdi-chevron-right")}),(0,e.jsx)("p",{children:l})]}),s&&(0,e.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),s(e)}})]}),(n||o)&&(0,e.jsx)("ul",{className:"variable-list",children:a})]})};var a=n(5685),o=n.n(a);n.p;const i=({isOpen:l,onClose:n,children:s,footer:a=[],title:i,type:r="dialog",position:c})=>{if(!l)return null;const[d,u]=(0,t.useState)({top:0}),p=(0,t.useRef)(null);return(0,t.useEffect)((()=>{var e,t;if(c){const l=window.innerHeight>c.top+((null===(e=p.current)||void 0===e?void 0:e.clientHeight)||0)?c.top:window.innerHeight-((null===(t=p.current)||void 0===t?void 0:t.clientHeight)||0)-10;u({top:l})}}),[c]),(0,e.jsx)("div",{className:o()({overlay:"modal"===r}),children:(0,e.jsxs)("div",{ref:p,className:o()("dialog",{"dialog-monaco":"modal"==r}),style:d,children:["dialog"===r?(0,e.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const t=p.current;if(!t)return;const l=t.getBoundingClientRect(),n=e.clientX-l.left,s=e=>{u({top:e.clientY-10,left:e.clientX-n})},a=()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",a)})(e),children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{}),(0,e.jsx)("span",{})]}):(0,e.jsx)("div",{}),(0,e.jsxs)("div",{className:"dialog-header",children:[(0,e.jsx)("h5",{className:"dialog-title m-0",children:i}),(0,e.jsx)("div",{className:"cursor-pointer",onClick:n,children:(0,e.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,e.jsx)("div",{className:"dialog-body",children:s}),a.length>0&&(0,e.jsx)("div",{className:"dialog-footer",children:a.map((e=>e))})]})})};function r(e,l){(0,t.useEffect)((()=>{const t=t=>{const n=null==e?void 0:e.current;n&&!n.contains((null==t?void 0:t.target)||null)&&l(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}),[e,l])}n.p;const c=l=>{var n;const[s,a]=(0,t.useState)(!1),o=(0,t.useRef)(null);return r(o,(()=>a(!1))),(0,e.jsxs)("div",{className:"dropdown-flow",ref:o,children:[(0,e.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),a(!s)},children:l.iconClass&&(0,e.jsx)("i",{className:l.iconClass})}),(0,e.jsx)("ul",{className:"py-3",style:{display:s?"block":"none"},children:null===(n=l.options)||void 0===n?void 0:n.map((t=>(0,e.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:e=>{a(!1),t.onClick(e)},children:t.name},t.name)))})]})},d=({collapsibleLabel:n,fields:s,disabledFields:a=[],fieldLabel:o,dialogElements:r,emptyValues:d,isAddible:u=!0,isDeletable:p=!0,isCollabsible:m=!0,createItemLabel:v,dialogTitle:f,maxItemLen:h,disabled:g,onChange:x,validate:y,getFieldLabel:b})=>{const[j,N]=(0,t.useState)([]),[S,w]=(0,t.useState)(!1),[k,C]=(0,t.useState)(0),[E,O]=(0,t.useState)({top:0}),[$,L]=(0,t.useState)(!1),[P,R]=(0,t.useState)("");(0,t.useEffect)((()=>{const e=new Set(a.map((e=>JSON.stringify(e)))),t=s.filter((t=>!e.has(JSON.stringify(t))));N(t)}),[s]);const T=(e,t,l=!1)=>{O({top:e.pageY}),L(l),C(t),y&&R(y(j[t])),w(!0)},_=(e,t,l=o)=>{if(!e)return;if(l.includes(".")){const t=A(l,e);return Array.isArray(t)||"object"!=typeof t?t:t.value?`${t.type}.${t.value}`:`${"name"==o?"Variable ":o}`}const n=e?e[l]:e;return Array.isArray(n)||"object"!=typeof n?n:n.value?`${n.type}.${n.value}`:`${"name"==o?"Variable ":o}`},A=(e,t)=>{if(t)return e.split(".").reduce(((e,t)=>e[t]),t)},M=e=>{N(e),x(JSON.parse(JSON.stringify([...a,...e])))};function D(e,t){const l=[...j];((e,t,l)=>{const n=t.split("."),s=n.pop();n.reduce(((e,t)=>e[t]),e)[s]=l})(l[k],e,t),M(l),y&&R(y(l[k]))}const I=e=>{if(g)return;if(void 0!==h&&j.length>=h)return;const t=[...j],l=JSON.parse(JSON.stringify(d));Object.keys(l).forEach((e=>{if("name"==e)l[e]=""==l[e]?`Variable ${(t.length+1).toString()}`:l[e];else if("object"==typeof l[e]&&l[e].hasOwnProperty("value")){let n=l[e].value;n=""==n?o+" "+(t.length+1).toString():n,l[e].value=n}})),t.push(l),M(t),e&&O({top:e.pageY}),C(t.indexOf(l)),w(!0)},B=(e,t)=>{var l;const n={true:a,false:j};g&&(n[$.toString()]={...a,...j});const s=null===(l=n[$.toString()])||void 0===l?void 0:l[k];return{Expression:{expression:(null==s?void 0:s[t])||{type:"string",value:""},onBlur:e=>{D(t,e)}},Checkbox:{checked:_(s,0,t)||!1,onChange:e=>{D(t,e)}},Select:{value:_(s,0,t)||"",onChange:e=>{D(t,e)}},Input:{value:_(s,0,t)||"",onChange:e=>{D(t,e)}},MultiSelect:{values:_(s,0,t)||[],onChange:e=>{D(t,e)}},Mapping:{mapping:A(t,s)||{inParamMapping:{},outParamMapping:{}},onChangeInParamMapping:e=>{D(t+".inParamMapping",e)},onChangeOutParamMapping:e=>{D(t+".outParamMapping",e)}}}[e]||{value:(null==s?void 0:s[t])||"",onChange:e=>{D(t,e)}}};return(0,e.jsx)(e.Fragment,{children:0==(null==j?void 0:j.length)&&0==a.length&&u?(0,e.jsxs)("div",{className:"dynamic-field-create vertical-line cursor-pointer",onClick:e=>I(e),children:[(0,e.jsx)("p",{children:v}),void 0===h||void 0!==h&&j.length<h?(0,e.jsx)("i",{className:"mdi mdi-plus"}):(0,e.jsx)(e.Fragment,{})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(l,{label:n,isKeepOpen:!m,...(()=>{if(u&&!(void 0!==h&&j.length>=h))return{onAddButton:I}})(),children:[null==a?void 0:a.map(((t,l)=>(0,e.jsx)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==l&&"vertical-line"}`,onClick:e=>T(e,l,!0),children:(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==b?void 0:b(t))||_(t)||`${"name"==o?"Variable ":o} ${l+1}`})},`item${l}`))),null==j?void 0:j.map(((t,l)=>(0,e.jsxs)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==l&&"vertical-line"}`,onClick:e=>T(e,l,g),children:[(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==b?void 0:b(t))||_(t)||`${"name"==o?"Variable ":o} ${l+1}`}),p&&(0,e.jsx)(c,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Delete",onClick:e=>{((e,t)=>{e.preventDefault(),e.stopPropagation(),M([...j].filter(((e,l)=>l!=t))),w(!1)})(e,l)}}]})]},`item${l}`)))]}),(0,e.jsxs)(i,{isOpen:S,title:f,onClose:()=>(w(!1),void R("")),position:E,children:[(0,e.jsxs)("p",{style:{color:"red",display:""===P?"none":""},children:["$",P]}),r.map(((t,l)=>{var n,s;if(($||!t.isRendered||(null===(n=null==t?void 0:t.isRendered)||void 0===n?void 0:n.call(t,j[k])))&&(!$||!t.isRendered||(null===(s=null==t?void 0:t.isRendered)||void 0===s?void 0:s.call(t,a[k]))))return(0,e.jsx)(t.component,{...B(t.componentName,t.key),disabled:$,...t.props,children:t.children},t.key)}))]})]})})};function u(e){return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}function p(e){const l=(0,t.useSyncExternalStore)(u,(()=>function(e){var t,l,n,s,a;const o=null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect();return JSON.stringify({width:null!==(l=null==o?void 0:o.width)&&void 0!==l?l:0,height:null!==(n=null==o?void 0:o.height)&&void 0!==n?n:0,top:null!==(s=null==o?void 0:o.top)&&void 0!==s?s:0,left:null!==(a=null==o?void 0:o.left)&&void 0!==a?a:0})}(e)));return(0,t.useMemo)((()=>JSON.parse(l)),[l])}n.p;const m=({label:l,options:n=[],className:s,placeholder:a,value:o,disabled:i,onChange:c})=>{const[d,u]=(0,t.useState)(!1),[m,v]=(0,t.useState)(o),[f,h]=(0,t.useState)([]),g=(0,t.useRef)(null),x=(0,t.useRef)(null),y=(0,t.useRef)(null),{width:b,top:j,left:N,height:S}=p(x),{height:w}=p(y);return r(g,(()=>u(!1))),(0,t.useEffect)((()=>{const e=f.find((e=>e.value===o));e?v(e.name):o||v("")}),[o,f]),(0,t.useEffect)((()=>{h(n)}),[n]),(0,e.jsxs)("div",{className:`select-flow position-relative ${s||""}`,children:[l&&(0,e.jsx)("label",{className:"d-block ellipsis-text p-0",children:l}),(0,e.jsxs)("div",{ref:g,children:[(0,e.jsxs)("div",{className:"input",ref:x,onClick:()=>{i||u(!d)},style:{cursor:i?"not-allowed":"default",opacity:i?"0.6":"1"},children:[(0,e.jsx)("input",{className:"w-100 ellipsis-text",placeholder:a,value:m,onChange:()=>{}}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",ref:y,style:{display:d?"block":"none",pointerEvents:i?"none":"all",...(()=>{const e=window.innerHeight;return j+S+5+w>e?{top:j-w-5,left:N,width:b}:{top:j+S+5,left:N,width:b}})()},children:(0,e.jsx)("ul",{children:n.map((t=>(0,e.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>t.value!=m?(e=>{c(e.value),u(!1)})(t):u(!1),children:t.name},t.value)))})})]})]})},v=(n.p,n.p,({label:t,className:l,checked:n,disabled:s,onChange:a})=>(0,e.jsxs)("div",{className:`checkbox-flow ${l||""}`,children:[(0,e.jsx)("input",{className:"cursor-pointer m-0",type:"checkbox",checked:n,onChange:e=>(a(e.target.checked),e.target.checked),disabled:s}),(0,e.jsx)("label",{className:"p-0",children:t})]})),f=(n.p,({id:t,label:l,remove:n})=>(0,e.jsxs)("div",{className:"tag",children:[(0,e.jsx)("label",{children:l}),(0,e.jsx)("i",{className:"mdi mdi-close cursor-pointer",onClick:e=>(e=>{e.isDefaultPrevented(),e.stopPropagation(),n(t)})(e)})]})),h=({label:l,options:n,className:s,placeholder:a,values:i,disabled:c,onChange:d})=>{const[u,m]=(0,t.useState)(!1),[h,g]=(0,t.useState)([]),x=(0,t.useRef)(null),y=(0,t.useRef)(null),b=(0,t.useRef)(null),{width:j,top:N,left:S,height:w}=p(y),{height:k}=p(b);return(0,t.useEffect)((()=>{const e=n.filter((e=>null==i?void 0:i.some((t=>e.value===t))));e&&g(e)}),[i]),r(x,(()=>m(!1))),(0,e.jsxs)("div",{className:o()("multi-select-flow",s),children:[l&&(0,e.jsx)("label",{className:"d-block",children:l}),(0,e.jsxs)("div",{ref:x,className:"select-div w-100",children:[(0,e.jsxs)("div",{className:"input-div w-100",ref:y,onClick:e=>{e.preventDefault(),e.stopPropagation(),c||m(!u)},children:[(0,e.jsx)("div",{className:"w-100 input-block",children:h.map(((t,l)=>(0,e.jsx)(f,{id:l,remove:e=>{c||(e=>{const t=h.filter(((t,l)=>l!==e));g(t),d(t.map((e=>e.value)))})(e)},label:t.name},`tag_${l}`)))}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",ref:b,style:{display:u?"block":"none",...(()=>{const e=window.innerHeight;return N+w+5+k>e?{top:N-k-5,left:S,width:j}:{top:N+w+5,left:S,width:j}})()},children:(0,e.jsx)("ul",{children:n.map(((t,l)=>(0,e.jsx)("li",{className:"cursor-pointer",onClick:()=>(e=>{let t=h;h.some((t=>t.value===e.value))?t=h.filter((t=>t.value!==e.value)):t.push(e),g(t),d(t.map((e=>e.value)))})(t),children:(0,e.jsx)(v,{checked:h.some((e=>e.value===t.value)),onChange:()=>{},label:t.name})},t.value)))})})]})]})},g=(n.p,({label:l,className:n,placeholder:s,value:a,disabled:o,isDigit:i=!1,onChange:r,onBlur:c})=>{const[d,u]=(0,t.useState)(a);return(0,t.useEffect)((()=>{u(a)}),[a]),(0,e.jsxs)("div",{className:`input-flow ${n||""}`,children:[l&&(0,e.jsx)("label",{className:"d-block p-0",children:l}),(0,e.jsx)("input",{className:"w-100",placeholder:s,value:d,onChange:e=>{const t=e.target.value;i&&!new RegExp(/^\d+$/).test(t)||(null==r||r(t),u(t))},onBlur:c,disabled:o})]})}),x={name:"start",panelLabel:"Start",version:"0.8",inputs:[],outputs:["_"],icon:"mdi-play",autoStarts:!0,defaultProps:()=>({label:{type:"string",value:"Start"},description:"Start",forms:[],actions:[{actionType:"start",customType:"",label:"İleri",roles:[],props:{uniqueKeys:[],userBound:!1}}],taskName:{type:"string",value:`S${new String(Date.now()).toString()}`},procesStatus:"",taskStatus:""}),editSection:n=>()=>{var s,a,o,i;const[r,c]=(0,t.useState)([]),u=null===(o=null===(a=null===(s=null==n?void 0:n.callbacks)||void 0===s?void 0:s.ui)||void 0===a?void 0:a.getRoles)||void 0===o?void 0:o.call(a),[p,v]=(0,t.useState)(["start"]),[f,x]=(0,t.useState)(function(e,t){return e?((e||[]).forEach((e=>{let l=[];e.roles.forEach((e=>{let n=null==t?void 0:t.find((t=>t.name.value===e||t.id===e));n&&l.push(n.id)})),e.roles=l})),e):[]}(n.propValues.actions,u)),y=(r.map((e=>({name:`${e.name}`,value:e.ID}))),null==u||u.map((e=>({name:`${e.name.value}`,value:e.id}))),p.map((e=>({name:`${e}`,value:e})))),b=null==u?void 0:u.map((e=>({name:`${e.name.value}`,value:e.id})));if(!n.callbacks.ui)throw new Error("start can not execute on environments without UI");const j=n.callbacks.ui;(0,t.useEffect)((()=>{(async()=>{c(await j.getModels("qjson"))})()}),[]),n.propValues.forms.map((e=>e.id));const N=[{component:m,componentName:"Select",key:"actionType",props:{label:"Action Type",types:p,options:y}},{component:g,componentName:"Input",key:"customType",props:{label:"Custom Type",className:"mt-3"}},{component:g,componentName:"Input",key:"label",props:{label:"Label",className:"mt-3"}},{component:h,componentName:"MultiSelect",key:"roles",props:{label:"Roles",options:b,className:"mt-3"}},{component:h,componentName:"MultiSelect",key:"props.uniqueKeys",props:{label:"Unique Keys",className:"mt-3",options:[{name:"Maker",value:"maker"},{name:"Checker 1",value:"checker1"},{name:"Checker 2",value:"checker2"},{name:"Approver 1",value:"approver1"},{name:"Approver 2",value:"approver2"}]}}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(l,{label:"START NODE NAME",children:[(0,e.jsx)(g,{disabled:n.callbacks.readOnly,className:"mx-3",label:"Label",value:(null===(i=n.propValues.label)||void 0===i?void 0:i.value)||"",onChange:e=>n.callbacks.setProp("label",{type:"string",value:e})}),"                "]}),(0,e.jsx)(d,{disabled:n.callbacks.readOnly,fields:f,dialogTitle:"Action",collapsibleLabel:"ACTIONS",fieldLabel:"Action",getFieldLabel:e=>e.actionType?e.customType?`${e.actionType} - ${e.customType}`:`${e.actionType}`:"",dialogElements:N,emptyValues:{actionType:"start",customType:"",label:"",roles:[],props:{uniqueKeys:[],userBound:!1}},createItemLabel:"Add Actions",onChange:e=>{x(e),n.callbacks.setProp("actions",e)}})]})}}})(),s})()));