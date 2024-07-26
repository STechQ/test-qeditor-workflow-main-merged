/*! For license information please see end_design.js.LICENSE.txt */
!function(e,l){"object"==typeof exports&&"object"==typeof module?module.exports=l(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],l):"object"==typeof exports?exports.flowcomponent=l(require("react"),require("react-dom")):e.flowcomponent=l(e.react,e["react-dom"])}(this,((e,l)=>(()=>{var s={4645:(e,l,s)=>{"use strict";var t=s(7111);t.createRoot,t.hydrateRoot},6094:(e,l,s)=>{"use strict";var t=s(8156),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,l,s){var t,i={},c=null,d=null;for(t in void 0!==s&&(c=""+s),void 0!==l.key&&(c=""+l.key),void 0!==l.ref&&(d=l.ref),l)a.call(l,t)&&!r.hasOwnProperty(t)&&(i[t]=l[t]);if(e&&e.defaultProps)for(t in l=e.defaultProps)void 0===i[t]&&(i[t]=l[t]);return{$$typeof:n,type:e,key:c,ref:d,props:i,_owner:o.current}}l.Fragment=i,l.jsx=c,l.jsxs=c},4512:(e,l,s)=>{"use strict";e.exports=s(6094)},8156:l=>{"use strict";l.exports=e},7111:e=>{"use strict";e.exports=l},5685:(e,l)=>{var s;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e="",l=0;l<arguments.length;l++){var s=arguments[l];s&&(e=a(e,i(s)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var l="";for(var s in e)t.call(e,s)&&e[s]&&(l=a(l,s));return l}function a(e,l){return l?e?e+" "+l:e+l:e}e.exports?(n.default=n,e.exports=n):void 0===(s=function(){return n}.apply(l,[]))||(e.exports=s)}()}},t={};function n(e){var l=t[e];if(void 0!==l)return l.exports;var i=t[e]={exports:{}};return s[e](i,i.exports,n),i.exports}n.n=e=>{var l=e&&e.__esModule?()=>e.default:()=>e;return n.d(l,{a:l}),l},n.d=(e,l)=>{for(var s in l)n.o(l,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:l[s]})},n.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var i={};return(()=>{"use strict";n.r(i),n.d(i,{default:()=>g});var e=n(4512),l=n(8156);n.p,n.p;const s=({label:s,isKeepOpen:t=!1,onAddButton:n,children:i})=>{const[a,o]=(0,l.useState)(!0);return(0,e.jsxs)("div",{className:"variables ",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,e.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>o(!a),children:[!t&&(0,e.jsx)("i",{className:"mdi "+(a?"mdi-chevron-down":"mdi-chevron-right")}),(0,e.jsx)("p",{children:s})]}),n&&(0,e.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),n()}})]}),(t||a)&&(0,e.jsx)("ul",{className:"variable-list",children:i})]})};var t=n(5685),a=n.n(t);n.p;const o=({isOpen:s,onClose:t,children:n,footer:i=[],title:o,type:r="dialog",position:c})=>{if(!s)return null;const[d,u]=(0,l.useState)({top:0}),p=(0,l.useRef)(null);return(0,l.useEffect)((()=>{var e,l;if(c){const s=window.innerHeight>c.top+((null===(e=p.current)||void 0===e?void 0:e.clientHeight)||0)?c.top:window.innerHeight-((null===(l=p.current)||void 0===l?void 0:l.clientHeight)||0)-10;u({top:s})}}),[c]),(0,e.jsx)("div",{className:a()({overlay:"modal"===r}),children:(0,e.jsxs)("div",{ref:p,className:a()("dialog",{"dialog-monaco":"modal"==r}),style:d,children:["dialog"===r?(0,e.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const l=p.current;if(!l)return;const s=l.getBoundingClientRect(),t=e.clientX-s.left,n=e=>{u({top:e.clientY-10,left:e.clientX-t})},i=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",i)})(e),children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{}),(0,e.jsx)("span",{})]}):(0,e.jsx)("div",{}),(0,e.jsxs)("div",{className:"dialog-header",children:[(0,e.jsx)("h5",{className:"dialog-title m-0",children:o}),(0,e.jsx)("div",{className:"cursor-pointer",onClick:t,children:(0,e.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,e.jsx)("div",{className:"dialog-body",children:n}),i.length>0&&(0,e.jsx)("div",{className:"dialog-footer",children:i.map((e=>e))})]})})};function r(e,s){(0,l.useEffect)((()=>{const l=l=>{const t=null==e?void 0:e.current;t&&!t.contains((null==l?void 0:l.target)||null)&&s(l)};return document.addEventListener("mousedown",l),document.addEventListener("touchstart",l),()=>{document.removeEventListener("mousedown",l),document.removeEventListener("touchstart",l)}}),[e,s])}n.p;const c=s=>{var t;const[n,i]=(0,l.useState)(!1),a=(0,l.useRef)(null);return r(a,(()=>i(!1))),(0,e.jsxs)("div",{className:"dropdown-flow",ref:a,children:[(0,e.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),i(!n)},children:s.iconClass&&(0,e.jsx)("i",{className:s.iconClass})}),(0,e.jsx)("ul",{className:"py-3",style:{display:n?"block":"none"},children:null===(t=s.options)||void 0===t?void 0:t.map((l=>(0,e.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:e=>{i(!1),l.onClick(e)},children:l.name},l.name)))})]})},d=({collapsibleLabel:t,fields:n,disabledFields:i=[],fieldLabel:a,dialogElements:r,emptyValues:d,isAddible:u=!0,isDeletable:p=!0,isCollabsible:m=!0,createItemLabel:v,dialogTitle:f,maxItemLen:h,onChange:x,validate:b,getFieldLabel:j})=>{const[y,g]=(0,l.useState)([]),[N,C]=(0,l.useState)(!1),[k,S]=(0,l.useState)(0),[w,E]=(0,l.useState)({top:0}),[L,O]=(0,l.useState)(!1),[$,R]=(0,l.useState)("");(0,l.useEffect)((()=>{const e=new Set(i.map((e=>JSON.stringify(e)))),l=n.filter((l=>!e.has(JSON.stringify(l))));g(l)}),[n]);const _=(e,l,s=!1)=>{E({top:e.pageY}),O(s),S(l),b&&R(b(y[l])),C(!0)},P=(e,l,s=a)=>{if(!e)return;if(s.includes(".")){const t=s.split(".").reduce(((e,l)=>e[l]),e);return Array.isArray(t)||"object"!=typeof t?t:t.value?`${t.type}.${t.value}`:`Variable ${l+1}`}const t=e?e[s]:e;return Array.isArray(t)||"object"!=typeof t?t:t.value?`${t.type}.${t.value}`:`Variable ${l+1}`},A=e=>{g(e),x(JSON.parse(JSON.stringify([...i,...e])))};function D(e,l){const s=[...y];((e,l,s)=>{const t=l.split("."),n=t.pop();t.reduce(((e,l)=>e[l]),e)[n]=s})(s[k],e,l),A(s),b&&R(b(s[k]))}const F=()=>{if(void 0!==h&&y.length>=h)return;const e=[...y];e.push(JSON.parse(JSON.stringify(d))),A(e)},B=(e,l)=>{var s;const t=null===(s={true:i,false:y}[L.toString()])||void 0===s?void 0:s[k];return{Expression:{expression:(null==t?void 0:t[l])||{type:"string",value:""},onBlur:e=>{D(l,e)}},Checkbox:{checked:P(t,0,l)||!1,onChange:e=>{D(l,e)}},Select:{value:P(t,0,l)||"",onChange:e=>{D(l,e)}},Input:{value:P(t,0,l)||"",onBlur:e=>{D(l,e.target.value)}},MultiSelect:{values:P(t,0,l)||[],onChange:e=>{D(l,e)}}}[e]||{value:(null==t?void 0:t[l])||"",onChange:e=>{D(l,e)}}};return(0,e.jsx)(e.Fragment,{children:0==(null==y?void 0:y.length)&&0==i.length&&u?(0,e.jsxs)("div",{className:"dynamic-field-create vertical-line cursor-pointer",onClick:F,children:[(0,e.jsx)("p",{children:v}),void 0===h||void 0!==h&&y.length<h?(0,e.jsx)("i",{className:"mdi mdi-plus"}):(0,e.jsx)(e.Fragment,{})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(s,{label:t,isKeepOpen:!m,...(()=>{if(u&&!(void 0!==h&&y.length>=h))return{onAddButton:F}})(),children:[null==i?void 0:i.map(((l,s)=>(0,e.jsx)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${y.length-1!==s&&"vertical-line"}`,onClick:e=>_(e,s,!0),children:(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==j?void 0:j(l))||P(l,s)||`Variable ${s+1}`})},`item${s}`))),null==y?void 0:y.map(((l,s)=>(0,e.jsxs)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${y.length-1!==s&&"vertical-line"}`,onClick:e=>_(e,s),children:[(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==j?void 0:j(l))||P(l,s)||`Variable ${s+1}`}),p&&(0,e.jsx)(c,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Delete",onClick:e=>{((e,l)=>{e.preventDefault(),e.stopPropagation(),A([...y].filter(((e,s)=>s!=l)))})(e,s)}}]})]},`item${s}`)))]}),(0,e.jsxs)(o,{isOpen:N,title:f,onClose:()=>(C(!1),void R("")),position:w,children:[(0,e.jsxs)("p",{style:{color:"red",display:""===$?"none":""},children:["$",$]}),r.map(((l,s)=>{var t,n;if((L||!l.isRendered||(null===(t=null==l?void 0:l.isRendered)||void 0===t?void 0:t.call(l,y[k])))&&(!L||!l.isRendered||(null===(n=null==l?void 0:l.isRendered)||void 0===n?void 0:n.call(l,i[k]))))return(0,e.jsx)(l.component,{...B(l.component.name,l.key),disabled:L,...l.props,children:l.children},l.key)}))]})]})})},u=(n.p,({label:s,options:t=[],className:n,placeholder:i,value:a,disabled:o,onChange:c})=>{const[d,u]=(0,l.useState)(!1),[p,m]=(0,l.useState)(a),[v,f]=(0,l.useState)([]),h=(0,l.useRef)(null);return r(h,(()=>u(!1))),(0,l.useEffect)((()=>{const e=v.find((e=>e.value===a));e?m(e.name):a||m("")}),[a,v]),(0,l.useEffect)((()=>{f(t)}),[t]),(0,e.jsxs)("div",{className:`select-flow position-relative ${n||""}`,children:[s&&(0,e.jsx)("label",{className:"d-block ellipsis-text p-0",children:s}),(0,e.jsxs)("div",{ref:h,children:[(0,e.jsxs)("div",{className:"input",onClick:()=>{o||u(!d)},style:{cursor:o?"not-allowed":"default",opacity:o?"0.6":"1"},children:[(0,e.jsx)("input",{className:"w-100 ellipsis-text",placeholder:i,value:p,onChange:()=>{}}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",style:{display:d?"block":"none",pointerEvents:o?"none":"all"},children:(0,e.jsx)("ul",{children:t.map((l=>(0,e.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>l.value!=p?(e=>{c(e.value),u(!1)})(l):u(!1),children:l.name},l.value)))})})]})]})}),p=(n.p,({label:l,className:s,checked:t,disabled:n,onChange:i})=>(0,e.jsxs)("div",{className:`checkbox-flow ${s||""}`,children:[(0,e.jsx)("input",{className:"cursor-pointer m-0",type:"checkbox",checked:t,onChange:e=>(i(e.target.checked),e.target.checked),disabled:n}),(0,e.jsx)("label",{className:"p-0",children:l})]})),m=({id:l,label:s,remove:t})=>(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{children:s}),(0,e.jsx)("i",{className:"mdi mdi-close",onClick:e=>{e.preventDefault(),e.stopPropagation(),t(l)}})]}),v=({label:s,options:t,className:n,placeholder:i,values:a,disabled:o,onChange:c})=>{const[d,u]=(0,l.useState)(!1),[v,f]=(0,l.useState)([]),h=(0,l.useRef)(null);return(0,l.useEffect)((()=>{const e=t.filter((e=>null==a?void 0:a.some((l=>e.value===l))));e&&f(e)}),[a]),r(h,(()=>u(!1))),(0,e.jsxs)("div",{className:`select-flow position-relative ${n||""}`,children:[s&&(0,e.jsx)("label",{className:"d-block",children:s}),(0,e.jsxs)("div",{ref:h,children:[(0,e.jsxs)("div",{className:"input w-100",onClick:()=>{o||u(!d)},children:[(0,e.jsx)("div",{className:"w-100 input-block",children:v.map(((l,s)=>(0,e.jsx)(m,{id:s,remove:e=>{(e=>{const l=v.filter(((l,s)=>s!==e));f(l),c(l.map((e=>e.value)))})(e)},label:l.name},crypto.randomUUID())))}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",style:{display:d?"block":"none"},children:(0,e.jsx)("ul",{children:t.map(((l,s)=>(0,e.jsx)("li",{className:"cursor-pointer",onClick:()=>(e=>{let l=v;v.some((l=>l.value===e.value))?l=v.filter((l=>l.value!==e.value)):l.push(e),f(l),c(l.map((e=>e.value)))})(l),children:(0,e.jsx)(p,{checked:v.some((e=>e.value===l.value)),onChange:()=>{},label:l.name})},l.value)))})})]})]})},f=(n.p,n.p,({label:s,className:t,placeholder:n,value:i,disabled:a,isDigit:o=!1,onChange:r,onBlur:c})=>{const[d,u]=(0,l.useState)(i);return(0,l.useEffect)((()=>{u(i)}),[i]),(0,e.jsxs)("div",{className:`input-flow ${t||""}`,children:[s&&(0,e.jsx)("label",{className:"d-block p-0",children:s}),(0,e.jsx)("input",{className:"w-100",placeholder:n,value:d,onChange:e=>{const l=e.target.value;o&&!new RegExp(/^\d+$/).test(l)||(null==r||r(l),u(l))},onBlur:c,disabled:a})]})});n(4645),n.p;const h=({children:l,className:s,color:t="primary",disabled:n,onClick:i})=>(0,e.jsx)("button",{className:a()("button-flow",s,t),disabled:n,onClick:i,children:l});n.p;const x=({node:s,level:t=0,onSelect:n,selected:i})=>{const[o,r]=(0,l.useState)([]);return(0,l.useEffect)((()=>{const e=i.split(".");e.length>0&&r(o.concat(e))}),[i]),(0,e.jsx)("div",{className:"tree-node",children:Object.keys(s).map((l=>{const c=Array.isArray(s[l])?s[l].length>0:"object"==typeof s[l]&&null!==s[l],d=i===l,u=i.split(".").length>1?i.split(".").filter(((e,l)=>0!==l)).join("."):i;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:a()("tree-row",{selected:d}),onClick:()=>(e=>{n(e)})(l),children:(0,e.jsxs)("div",{className:"tree-text",style:{paddingLeft:c?20*t:20*t+10},onClick:()=>(e=>{o.includes(e)?r(o.filter((l=>l!==e))):r([...o,e])})(l),children:[c&&(0,e.jsx)("i",{className:"mdi mdi-menu-"+(o.includes(l)?"down":"right")}),(0,e.jsx)("span",{children:l})]})},l),c&&o.includes(l)&&(0,e.jsx)(x,{node:s[l],level:t+1,onSelect:e=>n(`${l}.${e}`),selected:u})]})}))})},b=({className:s,isOpen:t,selected:n,position:i,items:r,onSelected:c,onClose:d})=>{const[u,p]=(0,l.useState)(""),[m,v]=(0,l.useState)(""),[b,j]=(0,l.useState)(r),[y,g]=(0,l.useState)({top:200});return(0,l.useEffect)((()=>{const e=l=>Object.keys(l).reduce(((s,t)=>{if("object"==typeof l[t]){if(!t)return s;if(0===Object.keys(l[t]).length)return s[t]="",s;l[t].type?s[t]=l[t].type:s[t]=e(l[t])}else s[t]=l[t];return s}),{});if(!r)return;const l=e(r);j(JSON.parse(JSON.stringify(l)))}),[r]),(0,l.useEffect)((()=>{n&&p(n)}),[n]),(0,l.useEffect)((()=>{i&&g(i)}),[i]),(0,e.jsx)("div",{className:a()("picker",s),children:(0,e.jsx)(o,{title:"Picker",position:y,isOpen:t,onClose:()=>d(),children:(0,e.jsxs)("div",{children:[(0,e.jsx)(f,{className:"mb-3",placeholder:"Search",value:m,onChange:e=>v(e)}),(0,e.jsx)("div",{className:"tree",children:(0,e.jsx)(x,{node:(e=>{const l=s=>Object.keys(s).reduce(((t,n)=>{if(n.toLowerCase().includes(e.toLowerCase())&&(t[n]=s[n]),Array.isArray(s[n])){const l=s[n].filter((l=>"string"==typeof l&&l.toLowerCase().includes(e.toLowerCase())));l.length>0&&(t[n]=l)}if("object"==typeof s[n]&&null!==s[n]){const e=l(s[n]);Object.keys(e).length>0&&(t[n]=e)}return t}),{});return b?l(b):{}})(m),selected:u,onSelect:e=>{p(e)}})}),(0,e.jsxs)("div",{className:"d-flex justify-content-end mt-3",children:[(0,e.jsx)(h,{color:"secondary",className:"px-2",onClick:()=>d(),children:"Cancel"}),(0,e.jsx)(h,{className:"ms-3 px-2",onClick:()=>{c(u),d()},children:"SELECT"})]})]})})})},j=({label:s,className:t,types:n,expression:i,disabled:a,constantsOptions:o,store:r,onChange:c,onBlur:d})=>{const[p,m]=(0,l.useState)([]),[v,h]=(0,l.useState)(n[0]),[x,j]=(0,l.useState)(""),[y,g]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{h(i.type),j(i.value)}),[i]),(0,l.useEffect)((()=>{m(n.map((e=>({name:e,value:e}))))}),[n]),(0,e.jsxs)("div",{className:`expression-flow ${t||""}`,children:[(0,e.jsx)(u,{label:s,options:p,disabled:a||y,value:v,onChange:e=>{null==c||c({value:"",type:e}),null==d||d({value:"",type:e})}}),(0,e.jsxs)("div",{className:"d-flex align-items-center mt-2",children:["constant"===v?(0,e.jsx)(u,{className:"w-100",options:o||[],value:x,disabled:a||y,onChange:e=>{null==c||c({type:v,value:e}),null==d||d({type:v,value:e}),j(e)}}):(0,e.jsx)(f,{className:"w-100",value:x,onChange:e=>{null==c||c({type:v,value:e}),j(e)},disabled:a||y,onBlur:e=>null==d?void 0:d({type:v,value:e.target.value})}),["context","input","output"].includes(v)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"ms-2",onClick:e=>{a||g(!0)},children:(0,e.jsx)("i",{className:"mdi mdi-database"})}),(0,e.jsx)(b,{isOpen:y,items:r[v],onClose:()=>g(!1),selected:x,onSelected:e=>{null==c||c({type:v,value:e}),null==d||d({type:v,value:e}),j(e)}})]})]})]})},y=s=>{const[t,n]=(0,l.useState)({label:s.label||{type:"string",value:""},description:s.description||""});(0,l.useEffect)((()=>{n({label:s.label||{type:"string",value:""},description:s.description||""})}),[s.label,s.description]);const i=[{component:j,key:"label",props:{label:"Label",types:["string"]}},{component:f,key:"description",props:{label:"Description"}}];return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(d,{emptyValues:{label:{type:"string",value:""},description:""},dialogTitle:"Label",getFieldLabel:e=>{var l;return(null===(l=e.label)||void 0===l?void 0:l.value)||""},fields:[t],fieldLabel:"Label",collapsibleLabel:"LABEL",isAddible:!1,isDeletable:!1,dialogElements:i,onChange:e=>{n(e[0]),s.onChangeLabel(e[0].label),s.onChangeDescription(e[0].description)}})})},g={name:"end",panelLabel:"End",version:"0.8",inputs:[{name:"_"}],outputs:[],icon:"mdi-flag-checkered",defaultProps:()=>({label:{type:"string",value:"End"},description:"end",forms:[],actions:[]}),editSection:s=>()=>{var t,n,i,a;const[o,r]=(0,l.useState)([]),c=(null===(i=null===(n=null===(t=null==s?void 0:s.callbacks)||void 0===t?void 0:t.ui)||void 0===n?void 0:n.getRoles)||void 0===i?void 0:i.call(n).map((e=>e.value)))||[],[m,f]=(0,l.useState)(!1),h=o.map((e=>({name:`${e.name}`,value:e.ID}))),x=c.map((e=>({name:`${e}`,value:e})));if(!s.callbacks.ui)throw new Error("end can not execute on environments without UI");const b=s.callbacks.ui;(0,l.useEffect)((()=>{(async()=>{r(await b.getModels("qjson"))})()}),[]);const j=[{component:u,key:"id",props:{label:"Form",types:null===(a=s.propValues.forms)||void 0===a?void 0:a.map((e=>e.id)),options:h}},{component:v,key:"roles",props:{label:"Roles",options:x}},{component:p,key:"readonly",props:{label:"Readonly",className:"mt-3",disabled:!0}}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(y,{label:s.propValues.label,description:s.propValues.description,onChangeLabel:e=>s.callbacks.setProp("label",e),onChangeDescription:e=>s.callbacks.setProp("description",e)}),(0,e.jsx)(d,{fields:s.propValues.forms||[],dialogTitle:"Form",collapsibleLabel:"FORMS",fieldLabel:"id",getFieldLabel:e=>{var l;return(null===(l=o.find((l=>l.ID==e.id)))||void 0===l?void 0:l.name)||""},dialogElements:j,emptyValues:{id:"",roles:[],readonly:!0},createItemLabel:"Add Forms",onChange:e=>{s.callbacks.setProp("forms",e)}})]})}}})(),i})()));