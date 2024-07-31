/*! For license information please see counter_design.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.flowcomponent=t(require("react"),require("react-dom")):e.flowcomponent=t(e.react,e["react-dom"])}(this,((e,t)=>(()=>{var s={4645:(e,t,s)=>{"use strict";var l=s(7111);l.createRoot,l.hydrateRoot},6094:(e,t,s)=>{"use strict";var l=s(8156),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var l,o={},c=null,d=null;for(l in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,l)&&!r.hasOwnProperty(l)&&(o[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===o[l]&&(o[l]=t[l]);return{$$typeof:n,type:e,key:c,ref:d,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},4512:(e,t,s)=>{"use strict";e.exports=s(6094)},8156:t=>{"use strict";t.exports=e},7111:e=>{"use strict";e.exports=t},5685:(e,t)=>{var s;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=i(e,o(s)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)l.call(e,s)&&e[s]&&(t=i(t,s));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(s=function(){return n}.apply(t,[]))||(e.exports=s)}()}},l={};function n(e){var t=l[e];if(void 0!==t)return t.exports;var o=l[e]={exports:{}};return s[e](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var o={};return(()=>{"use strict";n.r(o),n.d(o,{default:()=>g});var e=n(4512),t=n(8156);function s(e,s){(0,t.useEffect)((()=>{const t=t=>{const l=null==e?void 0:e.current;l&&!l.contains((null==t?void 0:t.target)||null)&&s(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}),[e,s])}n.p,n.p;const l=({label:l,options:n=[],className:o,placeholder:i,value:a,disabled:r,onChange:c})=>{const[d,u]=(0,t.useState)(!1),[p,m]=(0,t.useState)(a),[v,f]=(0,t.useState)([]),y=(0,t.useRef)(null);return s(y,(()=>u(!1))),(0,t.useEffect)((()=>{const e=v.find((e=>e.value===a));e?m(e.name):a||m("")}),[a,v]),(0,t.useEffect)((()=>{f(n)}),[n]),(0,e.jsxs)("div",{className:`select-flow position-relative ${o||""}`,children:[l&&(0,e.jsx)("label",{className:"d-block ellipsis-text p-0",children:l}),(0,e.jsxs)("div",{ref:y,children:[(0,e.jsxs)("div",{className:"input",onClick:()=>{r||u(!d)},style:{cursor:r?"not-allowed":"default",opacity:r?"0.6":"1"},children:[(0,e.jsx)("input",{className:"w-100 ellipsis-text",placeholder:i,value:p,onChange:()=>{}}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",style:{display:d?"block":"none",pointerEvents:r?"none":"all"},children:(0,e.jsx)("ul",{children:n.map((t=>(0,e.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>t.value!=p?(e=>{c(e.value),u(!1)})(t):u(!1),children:t.name},t.value)))})})]})]})},i=(n.p,({label:s,className:l,placeholder:n,value:o,disabled:i,isDigit:a=!1,onChange:r,onBlur:c})=>{const[d,u]=(0,t.useState)(o);return(0,t.useEffect)((()=>{u(o)}),[o]),(0,e.jsxs)("div",{className:`input-flow ${l||""}`,children:[s&&(0,e.jsx)("label",{className:"d-block p-0",children:s}),(0,e.jsx)("input",{className:"w-100",placeholder:n,value:d,onChange:e=>{const t=e.target.value;a&&!new RegExp(/^\d+$/).test(t)||(null==r||r(t),u(t))},onBlur:c,disabled:i})]})});var a=n(5685),r=n.n(a);n(4645),n.p;const c=({isOpen:s,onClose:l,children:n,footer:o=[],title:i,type:a="dialog",position:c})=>{if(!s)return null;const[d,u]=(0,t.useState)({top:0}),p=(0,t.useRef)(null);return(0,t.useEffect)((()=>{var e,t;if(c){const s=window.innerHeight>c.top+((null===(e=p.current)||void 0===e?void 0:e.clientHeight)||0)?c.top:window.innerHeight-((null===(t=p.current)||void 0===t?void 0:t.clientHeight)||0)-10;u({top:s})}}),[c]),(0,e.jsx)("div",{className:r()({overlay:"modal"===a}),children:(0,e.jsxs)("div",{ref:p,className:r()("dialog",{"dialog-monaco":"modal"==a}),style:d,children:["dialog"===a?(0,e.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const t=p.current;if(!t)return;const s=t.getBoundingClientRect(),l=e.clientX-s.left,n=e=>{u({top:e.clientY-10,left:e.clientX-l})},o=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",o)})(e),children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{}),(0,e.jsx)("span",{})]}):(0,e.jsx)("div",{}),(0,e.jsxs)("div",{className:"dialog-header",children:[(0,e.jsx)("h5",{className:"dialog-title m-0",children:i}),(0,e.jsx)("div",{className:"cursor-pointer",onClick:l,children:(0,e.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,e.jsx)("div",{className:"dialog-body",children:n}),o.length>0&&(0,e.jsx)("div",{className:"dialog-footer",children:o.map((e=>e))})]})})},d=(n.p,({children:t,className:s,color:l="primary",disabled:n,onClick:o})=>(0,e.jsx)("button",{className:r()("button-flow",s,l),disabled:n,onClick:o,children:t}));n.p;const u=({node:s,level:l=0,onSelect:n,selected:o})=>{const[i,a]=(0,t.useState)([]);return(0,t.useEffect)((()=>{const e=o.split(".");e.length>0&&a(i.concat(e))}),[o]),(0,e.jsx)("div",{className:"tree-node",children:Object.keys(s).map((t=>{const c=Array.isArray(s[t])?s[t].length>0:"object"==typeof s[t]&&null!==s[t],d=o===t,p=o.split(".").length>1?o.split(".").filter(((e,t)=>0!==t)).join("."):o;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:r()("tree-row",{selected:d}),onClick:()=>(e=>{n(e)})(t),children:(0,e.jsxs)("div",{className:"tree-text",style:{paddingLeft:c?20*l:20*l+10},onClick:()=>(e=>{i.includes(e)?a(i.filter((t=>t!==e))):a([...i,e])})(t),children:[c&&(0,e.jsx)("i",{className:"mdi mdi-menu-"+(i.includes(t)?"down":"right")}),(0,e.jsx)("span",{children:t})]})},t),c&&i.includes(t)&&(0,e.jsx)(u,{node:s[t],level:l+1,onSelect:e=>n(`${t}.${e}`),selected:p})]})}))})},p=({className:s,isOpen:l,selected:n,position:o,items:a,onSelected:p,onClose:m})=>{const[v,f]=(0,t.useState)(""),[y,x]=(0,t.useState)(""),[g,h]=(0,t.useState)(a),[b,j]=(0,t.useState)({top:200});return(0,t.useEffect)((()=>{const e=t=>Object.keys(t).reduce(((s,l)=>{if("object"==typeof t[l]){if(!l)return s;if(0===Object.keys(t[l]).length)return s[l]="",s;t[l].type?s[l]=t[l].type:s[l]=e(t[l])}else s[l]=t[l];return s}),{});if(!a)return;const t=e(a);h(JSON.parse(JSON.stringify(t)))}),[a]),(0,t.useEffect)((()=>{n&&f(n)}),[n]),(0,t.useEffect)((()=>{o&&j(o)}),[o]),(0,e.jsx)("div",{className:r()("picker",s),children:(0,e.jsx)(c,{title:"Picker",position:b,isOpen:l,onClose:()=>m(),children:(0,e.jsxs)("div",{children:[(0,e.jsx)(i,{className:"mb-3",placeholder:"Search",value:y,onChange:e=>x(e)}),(0,e.jsx)("div",{className:"tree",children:(0,e.jsx)(u,{node:(e=>{const t=s=>Object.keys(s).reduce(((l,n)=>{if(n.toLowerCase().includes(e.toLowerCase())&&(l[n]=s[n]),Array.isArray(s[n])){const t=s[n].filter((t=>"string"==typeof t&&t.toLowerCase().includes(e.toLowerCase())));t.length>0&&(l[n]=t)}if("object"==typeof s[n]&&null!==s[n]){const e=t(s[n]);Object.keys(e).length>0&&(l[n]=e)}return l}),{});return g?t(g):{}})(y),selected:v,onSelect:e=>{f(e)}})}),(0,e.jsxs)("div",{className:"d-flex justify-content-end mt-3",children:[(0,e.jsx)(d,{color:"secondary",className:"px-2",onClick:()=>m(),children:"Cancel"}),(0,e.jsx)(d,{className:"ms-3 px-2",onClick:()=>{p(v),m()},children:"SELECT"})]})]})})})},m=({label:s,className:n,types:o,expression:a,disabled:r,constantsOptions:c,store:d,onChange:u,onBlur:m})=>{const[v,f]=(0,t.useState)([]),[y,x]=(0,t.useState)(o[0]),[g,h]=(0,t.useState)(""),[b,j]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{x(a.type),h(a.value)}),[a]),(0,t.useEffect)((()=>{f(o.map((e=>({name:e,value:e}))))}),[o]),(0,e.jsxs)("div",{className:`expression-flow ${n||""}`,children:[(0,e.jsx)(l,{label:s,options:v,disabled:r||b,value:y,onChange:e=>{null==u||u({value:"",type:e}),null==m||m({value:"",type:e})}}),(0,e.jsxs)("div",{className:"d-flex align-items-center mt-2",children:["constant"===y?(0,e.jsx)(l,{className:"w-100",options:c||[],value:g,disabled:r||b,onChange:e=>{null==u||u({type:y,value:e}),null==m||m({type:y,value:e}),h(e)}}):(0,e.jsx)(i,{className:"w-100",value:g,onChange:e=>{null==u||u({type:y,value:e}),h(e)},disabled:r||b,onBlur:e=>null==m?void 0:m({type:y,value:e.target.value})}),["context","input","output"].includes(y)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"ms-2",onClick:e=>{r||j(!0)},children:(0,e.jsx)("i",{className:"mdi mdi-database"})}),(0,e.jsx)(p,{isOpen:b,items:d[y],onClose:()=>j(!1),selected:g,onSelected:e=>{null==u||u({type:y,value:e}),null==m||m({type:y,value:e}),h(e)}})]})]})]})},v=(n.p,n.p,({label:s,isKeepOpen:l=!1,onAddButton:n,children:o})=>{const[i,a]=(0,t.useState)(!0);return(0,e.jsxs)("div",{className:"variables ",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,e.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>a(!i),children:[!l&&(0,e.jsx)("i",{className:"mdi "+(i?"mdi-chevron-down":"mdi-chevron-right")}),(0,e.jsx)("p",{children:s})]}),n&&(0,e.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),n()}})]}),(l||i)&&(0,e.jsx)("ul",{className:"variable-list",children:o})]})}),f=(n.p,l=>{var n;const[o,i]=(0,t.useState)(!1),a=(0,t.useRef)(null);return s(a,(()=>i(!1))),(0,e.jsxs)("div",{className:"dropdown-flow",ref:a,children:[(0,e.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),i(!o)},children:l.iconClass&&(0,e.jsx)("i",{className:l.iconClass})}),(0,e.jsx)("ul",{className:"py-3",style:{display:o?"block":"none"},children:null===(n=l.options)||void 0===n?void 0:n.map((t=>(0,e.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:e=>{i(!1),t.onClick(e)},children:t.name},t.name)))})]})}),y=({collapsibleLabel:s,fields:l,disabledFields:n=[],fieldLabel:o,dialogElements:i,emptyValues:a,isAddible:r=!0,isDeletable:d=!0,isCollabsible:u=!0,createItemLabel:p,dialogTitle:m,maxItemLen:y,onChange:x,validate:g,getFieldLabel:h})=>{const[b,j]=(0,t.useState)([]),[N,S]=(0,t.useState)(!1),[C,k]=(0,t.useState)(0),[E,w]=(0,t.useState)({top:0}),[L,O]=(0,t.useState)(!1),[T,A]=(0,t.useState)("");(0,t.useEffect)((()=>{const e=new Set(n.map((e=>JSON.stringify(e)))),t=l.filter((t=>!e.has(JSON.stringify(t))));j(t)}),[l]);const _=(e,t,s=!1)=>{w({top:e.pageY}),O(s),k(t),g&&A(g(b[t])),S(!0)},$=(e,t,s=o)=>{if(!e)return;if(s.includes(".")){const l=s.split(".").reduce(((e,t)=>e[t]),e);return Array.isArray(l)||"object"!=typeof l?l:l.value?`${l.type}.${l.value}`:`Variable ${t+1}`}const l=e?e[s]:e;return Array.isArray(l)||"object"!=typeof l?l:l.value?`${l.type}.${l.value}`:`Variable ${t+1}`},P=e=>{j(e),x(JSON.parse(JSON.stringify([...n,...e])))};function R(e,t){const s=[...b];((e,t,s)=>{const l=t.split("."),n=l.pop();l.reduce(((e,t)=>e[t]),e)[n]=s})(s[C],e,t),P(s),g&&A(g(s[C]))}const V=()=>{if(void 0!==y&&b.length>=y)return;const e=[...b];e.push(JSON.parse(JSON.stringify(a))),P(e)},D=(e,t)=>{var s;const l=null===(s={true:n,false:b}[L.toString()])||void 0===s?void 0:s[C];return{Expression:{expression:(null==l?void 0:l[t])||{type:"string",value:""},onBlur:e=>{R(t,e)}},Checkbox:{checked:$(l,0,t)||!1,onChange:e=>{R(t,e)}},Select:{value:$(l,0,t)||"",onChange:e=>{R(t,e)}},Input:{value:$(l,0,t)||"",onBlur:e=>{R(t,e.target.value)}},MultiSelect:{values:$(l,0,t)||[],onChange:e=>{R(t,e)}}}[e]||{value:(null==l?void 0:l[t])||"",onChange:e=>{R(t,e)}}};return(0,e.jsx)(e.Fragment,{children:0==(null==b?void 0:b.length)&&0==n.length&&r?(0,e.jsxs)("div",{className:"dynamic-field-create vertical-line cursor-pointer",onClick:V,children:[(0,e.jsx)("p",{children:p}),void 0===y||void 0!==y&&b.length<y?(0,e.jsx)("i",{className:"mdi mdi-plus"}):(0,e.jsx)(e.Fragment,{})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(v,{label:s,isKeepOpen:!u,...(()=>{if(r&&!(void 0!==y&&b.length>=y))return{onAddButton:V}})(),children:[null==n?void 0:n.map(((t,s)=>(0,e.jsx)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${b.length-1!==s&&"vertical-line"}`,onClick:e=>_(e,s,!0),children:(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==h?void 0:h(t))||$(t,s)||`Variable ${s+1}`})},`item${s}`))),null==b?void 0:b.map(((t,s)=>(0,e.jsxs)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${b.length-1!==s&&"vertical-line"}`,onClick:e=>_(e,s),children:[(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==h?void 0:h(t))||$(t,s)||`Variable ${s+1}`}),d&&(0,e.jsx)(f,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Delete",onClick:e=>{((e,t)=>{e.preventDefault(),e.stopPropagation(),P([...b].filter(((e,s)=>s!=t)))})(e,s)}}]})]},`item${s}`)))]}),(0,e.jsxs)(c,{isOpen:N,title:m,onClose:()=>(S(!1),void A("")),position:E,children:[(0,e.jsxs)("p",{style:{color:"red",display:""===T?"none":""},children:["$",T]}),i.map(((t,s)=>{var l,o;if((L||!t.isRendered||(null===(l=null==t?void 0:t.isRendered)||void 0===l?void 0:l.call(t,b[C])))&&(!L||!t.isRendered||(null===(o=null==t?void 0:t.isRendered)||void 0===o?void 0:o.call(t,n[C]))))return(0,e.jsx)(t.component,{...D(t.componentName,t.key),disabled:L,...t.props,children:t.children},t.key)}))]})]})})},x=s=>{const[l,n]=(0,t.useState)({label:s.label||{type:"string",value:""},description:s.description||""});(0,t.useEffect)((()=>{n({label:s.label||{type:"string",value:""},description:s.description||""})}),[s.label,s.description]);const o=[{component:m,componentName:"Expression",key:"label",props:{label:"Label",types:["string"],store:{}}},{component:i,componentName:"Input",key:"description",props:{label:"Description"}}];return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(y,{emptyValues:{label:{type:"string",value:""},description:""},dialogTitle:"Label",getFieldLabel:e=>{var t;return(null===(t=e.label)||void 0===t?void 0:t.value)||""},fields:[l],fieldLabel:"Label",collapsibleLabel:"LABEL",isAddible:!1,isDeletable:!1,dialogElements:o,onChange:e=>{n(e[0]),s.onChangeLabel(e[0].label),s.onChangeDescription(e[0].description)}})})},g={name:"counter",panelLabel:"Counter",version:"0.8",inputs:[{name:"_"}],outputs:["_"],color:"#E9724C",icon:"mdi-format-list-bulleted",defaultProps:()=>({label:{type:"string",value:"Counter"},description:"Counter",reset:"never",key:{type:"string",value:""},assignTo:{type:"context",value:""}}),editSection:s=>()=>{const n=["never","daily","monthly","yearly"].map((e=>({name:e,value:e}))),[o,i]=(0,t.useState)(s.propValues.reset||"never"),[a,r]=(0,t.useState)({key:s.propValues.key||{type:"string",value:""}}),[c,d]=(0,t.useState)({assignTo:s.propValues.assignTo||{type:"context",value:""}});(0,t.useEffect)((()=>{r({key:s.propValues.key||{type:"string",value:""}}),d({assignTo:s.propValues.assignTo||{type:"context",value:""}})}),[s.propValues.key,s.propValues.assignTo]);const u=[{component:m,componentName:"Expression",key:"key",props:{label:"Key",types:["string","input","context"],store:s.callbacks.nestedStore}}],p=[{component:m,componentName:"Expression",key:"assignTo",props:{label:"Assign To",types:["output","context"],store:s.callbacks.nestedStore}}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x,{label:s.propValues.label,description:s.propValues.description,onChangeLabel:e=>s.callbacks.setProp("label",e),onChangeDescription:e=>s.callbacks.setProp("description",e)}),(0,e.jsxs)(v,{label:"PROPERTIES",children:[(0,e.jsx)(l,{className:"mx-3",label:"Reset",value:o,onChange:e=>i(e),options:n}),(0,e.jsx)(y,{emptyValues:{key:{type:"string",value:""}},dialogTitle:"Key",getFieldLabel:e=>{var t;return(null===(t=e.key)||void 0===t?void 0:t.value)||""},fields:[a],fieldLabel:"Key",collapsibleLabel:"KEY",isAddible:!1,isDeletable:!1,dialogElements:u,onChange:e=>{r(e[0]),s.callbacks.setProp("key",e[0].key)}}),(0,e.jsx)(y,{emptyValues:{assignTo:{type:"context",value:""}},dialogTitle:"Assign To",getFieldLabel:e=>{var t;return(null===(t=e.assignTo)||void 0===t?void 0:t.value)||""},fields:[c],fieldLabel:"Assign To",collapsibleLabel:"ASSIGN TO",isAddible:!1,isDeletable:!1,dialogElements:p,onChange:e=>{d(e[0]),s.callbacks.setProp("assignTo",e[0].assignTo)}})]})]})}}})(),o})()));