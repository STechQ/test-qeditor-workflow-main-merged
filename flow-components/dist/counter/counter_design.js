/*! For license information please see counter_design.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.flowcomponent=t(require("react"),require("react-dom")):e.flowcomponent=t(e.react,e["react-dom"])}(this,((e,t)=>(()=>{var s={4645:(e,t,s)=>{"use strict";var l=s(7111);l.createRoot,l.hydrateRoot},6094:(e,t,s)=>{"use strict";var l=s(8156),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var l,a={},c=null,d=null;for(l in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,l)&&!r.hasOwnProperty(l)&&(a[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===a[l]&&(a[l]=t[l]);return{$$typeof:n,type:e,key:c,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},4512:(e,t,s)=>{"use strict";e.exports=s(6094)},8156:t=>{"use strict";t.exports=e},7111:e=>{"use strict";e.exports=t},5685:(e,t)=>{var s;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=i(e,a(s)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)l.call(e,s)&&e[s]&&(t=i(t,s));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(s=function(){return n}.apply(t,[]))||(e.exports=s)}()}},l={};function n(e){var t=l[e];if(void 0!==t)return t.exports;var a=l[e]={exports:{}};return s[e](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var a={};return(()=>{"use strict";n.r(a),n.d(a,{default:()=>b});var e=n(4512),t=n(8156);n.p;const s=({label:s,className:l,placeholder:n,value:a,disabled:i,isDigit:o=!1,onChange:r,onBlur:c})=>{const[d,u]=(0,t.useState)(a);return(0,t.useEffect)((()=>{u(a)}),[a]),(0,e.jsxs)("div",{className:`input-flow ${l||""}`,children:[s&&(0,e.jsx)("label",{className:"d-block p-0",children:s}),(0,e.jsx)("input",{className:"w-100",placeholder:n,value:d,onChange:e=>{const t=e.target.value;o&&!new RegExp(/^\d+$/).test(t)||(null==r||r(t),u(t))},onBlur:c,disabled:i})]})},l=(n.p,({label:s,isKeepOpen:l=!1,onAddButton:n,children:a})=>{const[i,o]=(0,t.useState)(!0);return(0,e.jsxs)("div",{className:"variables ",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,e.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>o(!i),children:[!l&&(0,e.jsx)("i",{className:"mdi "+(i?"mdi-chevron-down":"mdi-chevron-right")}),(0,e.jsx)("p",{children:s})]}),n&&(0,e.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),n(e)}})]}),(l||i)&&(0,e.jsx)("ul",{className:"variable-list",children:a})]})}),i=n=>{const[a,i]=(0,t.useState)(n.label.value||"");return(0,t.useEffect)((()=>{i(n.label.value||"")}),[n.label]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(l,{label:n.collapsibleLabel||"NAME",children:(0,e.jsx)(s,{disabled:n.disabled,className:"w-100",value:a,onChange:e=>{i(e),n.onChangeLabel({type:"string",value:e})}})})})};function o(e,s){(0,t.useEffect)((()=>{const t=t=>{const l=null==e?void 0:e.current;l&&!l.contains((null==t?void 0:t.target)||null)&&s(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}),[e,s])}function r(e){return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}function c(e){const s=(0,t.useSyncExternalStore)(r,(()=>function(e){var t,s,l,n,a;const i=null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect();return JSON.stringify({width:null!==(s=null==i?void 0:i.width)&&void 0!==s?s:0,height:null!==(l=null==i?void 0:i.height)&&void 0!==l?l:0,top:null!==(n=null==i?void 0:i.top)&&void 0!==n?n:0,left:null!==(a=null==i?void 0:i.left)&&void 0!==a?a:0})}(e)));return(0,t.useMemo)((()=>JSON.parse(s)),[s])}n.p;const d=({label:s,options:l=[],className:n,placeholder:a,value:i,disabled:r,onChange:d})=>{const[u,p]=(0,t.useState)(!1),[m,v]=(0,t.useState)(i),[f,h]=(0,t.useState)([]),g=(0,t.useRef)(null),y=(0,t.useRef)(null),x=(0,t.useRef)(null),{width:b,top:j,left:N,height:S}=c(y),{height:C}=c(x);return o(g,(()=>p(!1))),(0,t.useEffect)((()=>{const e=f.find((e=>e.value===i));e?v(e.name):i||v("")}),[i,f]),(0,t.useEffect)((()=>{h(l)}),[l]),(0,e.jsxs)("div",{className:`select-flow position-relative ${n||""}`,children:[s&&(0,e.jsx)("label",{className:"d-block ellipsis-text p-0",children:s}),(0,e.jsxs)("div",{ref:g,children:[(0,e.jsxs)("div",{className:"input",ref:y,onClick:()=>{r||p(!u)},style:{cursor:r?"not-allowed":"default",opacity:r?"0.6":"1"},children:[(0,e.jsx)("input",{className:"w-100 ellipsis-text",placeholder:a,value:m,onChange:()=>{}}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",ref:x,style:{display:u?"block":"none",pointerEvents:r?"none":"all",...(()=>{const e=window.innerHeight;return j+S+5+C>e?{top:j-C-5,left:N,width:b}:{top:j+S+5,left:N,width:b}})()},children:(0,e.jsx)("ul",{children:l.map((t=>(0,e.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>t.value!=m?(e=>{d(e.value),p(!1)})(t):p(!1),children:t.name},t.value)))})})]})]})};n.p;var u=n(5685),p=n.n(u);n.p;const m=({isOpen:s,onClose:l,children:n,footer:a=[],title:i,type:o="dialog",position:r})=>{if(!s)return null;const[c,d]=(0,t.useState)({top:0}),u=(0,t.useRef)(null);return(0,t.useEffect)((()=>{var e,t;if(r){const s=window.innerHeight>r.top+((null===(e=u.current)||void 0===e?void 0:e.clientHeight)||0)?r.top:window.innerHeight-((null===(t=u.current)||void 0===t?void 0:t.clientHeight)||0)-10;d({top:s})}}),[r]),(0,e.jsx)("div",{className:p()({overlay:"modal"===o}),children:(0,e.jsxs)("div",{ref:u,className:p()("dialog",{"dialog-monaco":"modal"==o}),style:c,children:["dialog"===o?(0,e.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const t=u.current;if(!t)return;const s=t.getBoundingClientRect(),l=e.clientX-s.left,n=e=>{d({top:e.clientY-10,left:e.clientX-l})},a=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",a)})(e),children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{}),(0,e.jsx)("span",{})]}):(0,e.jsx)("div",{}),(0,e.jsxs)("div",{className:"dialog-header",children:[(0,e.jsx)("h5",{className:"dialog-title m-0",children:i}),(0,e.jsx)("div",{className:"cursor-pointer",onClick:l,children:(0,e.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,e.jsx)("div",{className:"dialog-body",children:n}),a.length>0&&(0,e.jsx)("div",{className:"dialog-footer",children:a.map((e=>e))})]})})},v=(n.p,s=>{var l;const[n,a]=(0,t.useState)(!1),i=(0,t.useRef)(null);return o(i,(()=>a(!1))),(0,e.jsxs)("div",{className:"dropdown-flow",ref:i,children:[(0,e.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),a(!n)},children:s.iconClass&&(0,e.jsx)("i",{className:s.iconClass})}),(0,e.jsx)("ul",{className:"py-3",style:{display:n?"block":"none"},children:null===(l=s.options)||void 0===l?void 0:l.map((t=>(0,e.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:e=>{a(!1),t.onClick(e)},children:t.name},t.name)))})]})}),f=({collapsibleLabel:s,fields:n,disabledFields:a=[],fieldLabel:i,dialogElements:o,emptyValues:r,isAddible:c=!0,isDeletable:d=!0,isCollabsible:u=!0,createItemLabel:p,dialogTitle:f,maxItemLen:h,disabled:g,onChange:y,validate:x,getFieldLabel:b})=>{const[j,N]=(0,t.useState)([]),[S,C]=(0,t.useState)(!1),[k,w]=(0,t.useState)(0),[O,E]=(0,t.useState)({top:0}),[L,P]=(0,t.useState)(!1),[T,$]=(0,t.useState)("");(0,t.useEffect)((()=>{const e=new Set(a.map((e=>JSON.stringify(e)))),t=n.filter((t=>!e.has(JSON.stringify(t))));N(t)}),[n]);const R=(e,t,s=!1)=>{E({top:e.pageY}),P(s),w(t),x&&$(x(j[t])),C(!0)},_=(e,t,s=i)=>{if(!e)return;if(s.includes(".")){const t=A(s,e);return Array.isArray(t)||"object"!=typeof t?t:t.value?`${t.type}.${t.value}`:`${"name"==i?"Variable ":i}`}const l=e?e[s]:e;return Array.isArray(l)||"object"!=typeof l?l:l.value?`${l.type}.${l.value}`:`${"name"==i?"Variable ":i}`},A=(e,t)=>{if(t)return e.split(".").reduce(((e,t)=>e[t]),t)},V=e=>{N(e),y(JSON.parse(JSON.stringify([...a,...e])))};function M(e,t){const s=[...j];((e,t,s)=>{const l=t.split("."),n=l.pop();l.reduce(((e,t)=>e[t]),e)[n]=s})(s[k],e,t),V(s),x&&$(x(s[k]))}const F=e=>{if(g)return;if(void 0!==h&&j.length>=h)return;const t=[...j],s=JSON.parse(JSON.stringify(r));Object.keys(s).forEach((e=>{if("name"==e)s[e]=""==s[e]?`Variable ${(t.length+1).toString()}`:s[e];else if("object"==typeof s[e]&&s[e].hasOwnProperty("value")){let l=s[e].value;l=""==l?i+" "+(t.length+1).toString():l,s[e].value=l}})),t.push(s),V(t),e&&E({top:e.pageY}),w(t.indexOf(s)),C(!0)},D=(e,t)=>{var s;const l={true:a,false:j};g&&(l[L.toString()]={...a,...j});const n=null===(s=l[L.toString()])||void 0===s?void 0:s[k];return{Expression:{expression:(null==n?void 0:n[t])||{type:"string",value:""},onBlur:e=>{M(t,e)}},Checkbox:{checked:_(n,0,t)||!1,onChange:e=>{M(t,e)}},Select:{value:_(n,0,t)||"",onChange:e=>{M(t,e)}},Input:{value:_(n,0,t)||"",onChange:e=>{M(t,e)}},MultiSelect:{values:_(n,0,t)||[],onChange:e=>{M(t,e)}},Mapping:{mapping:A(t,n)||{inParamMapping:{},outParamMapping:{}},onChangeInParamMapping:e=>{M(t+".inParamMapping",e)},onChangeOutParamMapping:e=>{M(t+".outParamMapping",e)}}}[e]||{value:(null==n?void 0:n[t])||"",onChange:e=>{M(t,e)}}};return(0,e.jsx)(e.Fragment,{children:0==(null==j?void 0:j.length)&&0==a.length&&c?(0,e.jsxs)("div",{className:"dynamic-field-create vertical-line cursor-pointer",onClick:e=>F(e),children:[(0,e.jsx)("p",{children:p}),void 0===h||void 0!==h&&j.length<h?(0,e.jsx)("i",{className:"mdi mdi-plus"}):(0,e.jsx)(e.Fragment,{})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(l,{label:s,isKeepOpen:!u,...(()=>{if(c&&!(void 0!==h&&j.length>=h))return{onAddButton:F}})(),children:[null==a?void 0:a.map(((t,s)=>(0,e.jsx)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==s&&"vertical-line"}`,onClick:e=>R(e,s,!0),children:(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==b?void 0:b(t))||_(t)||`${"name"==i?"Variable ":i} ${s+1}`})},`item${s}`))),null==j?void 0:j.map(((t,s)=>(0,e.jsxs)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==s&&"vertical-line"}`,onClick:e=>R(e,s,g),children:[(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==b?void 0:b(t))||_(t)||`${"name"==i?"Variable ":i} ${s+1}`}),d&&(0,e.jsx)(v,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Delete",onClick:e=>{((e,t)=>{e.preventDefault(),e.stopPropagation(),V([...j].filter(((e,s)=>s!=t))),C(!1)})(e,s)}}]})]},`item${s}`)))]}),(0,e.jsxs)(m,{isOpen:S,title:f,onClose:()=>(C(!1),void $("")),position:O,children:[(0,e.jsxs)("p",{style:{color:"red",display:""===T?"none":""},children:["$",T]}),o.map(((t,s)=>{var l,n;if((L||!t.isRendered||(null===(l=null==t?void 0:t.isRendered)||void 0===l?void 0:l.call(t,j[k])))&&(!L||!t.isRendered||(null===(n=null==t?void 0:t.isRendered)||void 0===n?void 0:n.call(t,a[k]))))return(0,e.jsx)(t.component,{...D(t.componentName,t.key),disabled:L,...t.props,children:t.children},t.key)}))]})]})})};n.p,n(4645),n.p;const h=({children:t,className:s,color:l="primary",disabled:n,onClick:a})=>(0,e.jsx)("button",{className:p()("button-flow",s,l),disabled:n,onClick:a,children:t});n.p;const g=({node:s,level:l=0,onSelect:n,selected:a})=>{const[i,o]=(0,t.useState)([]);return(0,t.useEffect)((()=>{const e=a.split(".");e.length>0&&o(i.concat(e))}),[a]),(0,e.jsx)("div",{className:"tree-node",children:Object.keys(s).map((t=>{const r=Array.isArray(s[t])?s[t].length>0:"object"==typeof s[t]&&null!==s[t],c=a===t,d=a.split(".").length>1?a.split(".").filter(((e,t)=>0!==t)).join("."):a;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:p()("tree-row",{selected:c}),onClick:()=>(e=>{n(e)})(t),children:(0,e.jsxs)("div",{className:"tree-text",style:{paddingLeft:r?20*l:20*l+10},onClick:()=>(e=>{i.includes(e)?o(i.filter((t=>t!==e))):o([...i,e])})(t),children:[r&&(0,e.jsx)("i",{className:"mdi mdi-menu-"+(i.includes(t)?"down":"right")}),(0,e.jsx)("span",{children:t})]})},t),r&&i.includes(t)&&(0,e.jsx)(g,{node:s[t],level:l+1,onSelect:e=>n(`${t}.${e}`),selected:d})]})}))})},y=({className:l,isOpen:n,selected:a,position:i,items:o,onSelected:r,onClose:c})=>{const[d,u]=(0,t.useState)(""),[v,f]=(0,t.useState)(""),[y,x]=(0,t.useState)(o),[b,j]=(0,t.useState)({top:200});return(0,t.useEffect)((()=>{const e=t=>Object.keys(t).reduce(((s,l)=>{if("object"==typeof t[l]){if(!l)return s;if(0===Object.keys(t[l]).length)return s[l]="",s;t[l].type?s[l]=t[l].type:s[l]=e(t[l])}else s[l]=t[l];return s}),{});if(!o)return;const t=e(o);x(JSON.parse(JSON.stringify(t))),u("")}),[o]),(0,t.useEffect)((()=>{a&&u(a)}),[a]),(0,t.useEffect)((()=>{i&&j(i)}),[i]),(0,e.jsx)("div",{className:p()("picker",l),children:(0,e.jsx)(m,{title:"Picker",position:b,isOpen:n,onClose:()=>c(),children:(0,e.jsxs)("div",{children:[(0,e.jsx)(s,{className:"mb-3",placeholder:"Search",value:v,onChange:e=>f(e)}),(0,e.jsx)("div",{className:"tree",children:(0,e.jsx)(g,{node:(e=>{const t=s=>Object.keys(s).reduce(((l,n)=>{if(n.toLowerCase().includes(e.toLowerCase())&&(l[n]=s[n]),Array.isArray(s[n])){const t=s[n].filter((t=>"string"==typeof t&&t.toLowerCase().includes(e.toLowerCase())));t.length>0&&(l[n]=t)}if("object"==typeof s[n]&&null!==s[n]){const e=t(s[n]);Object.keys(e).length>0&&(l[n]=e)}return l}),{});return y?t(y):{}})(v),selected:d,onSelect:e=>{u(e)}})}),(0,e.jsxs)("div",{className:"d-flex justify-content-end mt-3",children:[(0,e.jsx)(h,{color:"secondary",className:"px-2",onClick:()=>c(),children:"Cancel"}),(0,e.jsx)(h,{className:"ms-3 px-2",disabled:!d,onClick:()=>{r(d),c()},children:"SELECT"})]})]})})})},x=({label:l,className:n,types:a,expression:i,disabled:o,constantsOptions:r,store:c,onChange:u,onBlur:p})=>{const[m,v]=(0,t.useState)([]),[f,h]=(0,t.useState)(a[0]),[g,x]=(0,t.useState)(""),[b,j]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{h(i.type),x(i.value)}),[i]),(0,t.useEffect)((()=>{v(a.map((e=>({name:e,value:e}))))}),[a]),(0,e.jsxs)("div",{className:`expression-flow ${n||""}`,children:[(0,e.jsx)(d,{label:l,options:m,disabled:o||b,value:f,onChange:e=>{null==u||u({value:"",type:e}),null==p||p({value:"",type:e})}}),(0,e.jsxs)("div",{className:"d-flex align-items-center mt-2",children:["constant"===f?(0,e.jsx)(d,{className:"w-100",options:r||[],value:g,disabled:o||b,onChange:e=>{null==u||u({type:f,value:e}),null==p||p({type:f,value:e}),x(e)}}):(0,e.jsx)(s,{className:"w-100",value:g,onChange:e=>{null==u||u({type:f,value:e}),x(e)},disabled:o||b,onBlur:e=>null==p?void 0:p({type:f,value:e.target.value})}),["context","input","output","vars"].includes(f)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"ms-2",onClick:e=>{o||j(!0)},children:(0,e.jsx)("i",{className:g?"mdi mdi-database":"mdi mdi-database-outline"})}),(0,e.jsx)(y,{isOpen:b,items:c[f],onClose:()=>j(!1),selected:g,onSelected:e=>{null==u||u({type:f,value:e}),null==p||p({type:f,value:e}),x(e)}})]})]})]})},b={name:"counter",panelLabel:"Counter",version:"0.8",inputs:[{name:"_"}],outputs:["_"],color:"#E9724C",icon:"mdi-format-list-bulleted",defaultProps:()=>({label:{type:"string",value:"Counter"},description:"Counter",reset:"never",key:{type:"string",value:""},assignTo:{type:"vars",value:""}}),editSection:s=>()=>{const n=["never","daily","monthly","yearly"].map((e=>({name:e,value:e}))),[a,o]=(0,t.useState)(s.propValues.reset||"never"),[r,c]=(0,t.useState)({key:s.propValues.key||{type:"string",value:""}}),[u,p]=(0,t.useState)({assignTo:s.propValues.assignTo||{type:"vars",value:""}});(0,t.useEffect)((()=>{c({key:s.propValues.key||{type:"string",value:""}}),p({assignTo:s.propValues.assignTo||{type:"context",value:""}})}),[s.propValues.key,s.propValues.assignTo]);const m=[{component:x,componentName:"Expression",key:"key",props:{label:"Key",types:["string","input","context"],store:s.callbacks.nestedStore}}],v=[{component:x,componentName:"Expression",key:"assignTo",props:{label:"Assign To",types:["output","vars"],store:s.callbacks.nestedStore}}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i,{disabled:s.callbacks.readOnly,label:s.propValues.label,description:s.propValues.description,onChangeLabel:e=>s.callbacks.setProp("label",e),onChangeDescription:e=>s.callbacks.setProp("description",e)}),(0,e.jsxs)(l,{label:"PROPERTIES",children:[(0,e.jsx)(d,{disabled:s.callbacks.readOnly,className:"mx-3",label:"Reset",value:a,onChange:e=>o(e),options:n}),(0,e.jsx)(f,{disabled:s.callbacks.readOnly,emptyValues:{key:{type:"string",value:""}},dialogTitle:"Key",getFieldLabel:e=>{var t;return(null===(t=e.key)||void 0===t?void 0:t.value)||""},fields:[r],fieldLabel:"Key",collapsibleLabel:"KEY",isAddible:!1,isDeletable:!1,dialogElements:m,onChange:e=>{c(e[0]),s.callbacks.setProp("key",e[0].key)}}),(0,e.jsx)(f,{disabled:s.callbacks.readOnly,emptyValues:{assignTo:{type:"context",value:""}},dialogTitle:"Assign To",getFieldLabel:e=>{var t;return(null===(t=e.assignTo)||void 0===t?void 0:t.value)||""},fields:[u],fieldLabel:"Assign To",collapsibleLabel:"ASSIGN TO",isAddible:!1,isDeletable:!1,dialogElements:v,onChange:e=>{p(e[0]),s.callbacks.setProp("assignTo",e[0].assignTo)}})]})]})}}})(),a})()));