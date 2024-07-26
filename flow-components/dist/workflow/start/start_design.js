/*! For license information please see start_design.js.LICENSE.txt */
!function(e,l){"object"==typeof exports&&"object"==typeof module?module.exports=l(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],l):"object"==typeof exports?exports.flowcomponent=l(require("react"),require("react-dom")):e.flowcomponent=l(e.react,e["react-dom"])}(this,((e,l)=>(()=>{var s={4645:(e,l,s)=>{"use strict";var t=s(7111);t.createRoot,t.hydrateRoot},6094:(e,l,s)=>{"use strict";var t=s(8156),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,l,s){var t,a={},c=null,d=null;for(t in void 0!==s&&(c=""+s),void 0!==l.key&&(c=""+l.key),void 0!==l.ref&&(d=l.ref),l)o.call(l,t)&&!r.hasOwnProperty(t)&&(a[t]=l[t]);if(e&&e.defaultProps)for(t in l=e.defaultProps)void 0===a[t]&&(a[t]=l[t]);return{$$typeof:n,type:e,key:c,ref:d,props:a,_owner:i.current}}l.Fragment=a,l.jsx=c,l.jsxs=c},4512:(e,l,s)=>{"use strict";e.exports=s(6094)},8156:l=>{"use strict";l.exports=e},7111:e=>{"use strict";e.exports=l},5685:(e,l)=>{var s;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e="",l=0;l<arguments.length;l++){var s=arguments[l];s&&(e=o(e,a(s)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var l="";for(var s in e)t.call(e,s)&&e[s]&&(l=o(l,s));return l}function o(e,l){return l?e?e+" "+l:e+l:e}e.exports?(n.default=n,e.exports=n):void 0===(s=function(){return n}.apply(l,[]))||(e.exports=s)}()}},t={};function n(e){var l=t[e];if(void 0!==l)return l.exports;var a=t[e]={exports:{}};return s[e](a,a.exports,n),a.exports}n.n=e=>{var l=e&&e.__esModule?()=>e.default:()=>e;return n.d(l,{a:l}),l},n.d=(e,l)=>{for(var s in l)n.o(l,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:l[s]})},n.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var a={};return(()=>{"use strict";n.r(a),n.d(a,{default:()=>g});var e=n(4512),l=n(8156);n.p,n.p;const s=({label:s,isKeepOpen:t=!1,onAddButton:n,children:a})=>{const[o,i]=(0,l.useState)(!0);return(0,e.jsxs)("div",{className:"variables ",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,e.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>i(!o),children:[!t&&(0,e.jsx)("i",{className:"mdi "+(o?"mdi-chevron-down":"mdi-chevron-right")}),(0,e.jsx)("p",{children:s})]}),n&&(0,e.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),n()}})]}),(t||o)&&(0,e.jsx)("ul",{className:"variable-list",children:a})]})};var t=n(5685),o=n.n(t);n.p;const i=({isOpen:s,onClose:t,children:n,footer:a=[],title:i,type:r="dialog",position:c})=>{if(!s)return null;const[d,u]=(0,l.useState)({top:0}),p=(0,l.useRef)(null);return(0,l.useEffect)((()=>{var e,l;if(c){const s=window.innerHeight>c.top+((null===(e=p.current)||void 0===e?void 0:e.clientHeight)||0)?c.top:window.innerHeight-((null===(l=p.current)||void 0===l?void 0:l.clientHeight)||0)-10;u({top:s})}}),[c]),(0,e.jsx)("div",{className:o()({overlay:"modal"===r}),children:(0,e.jsxs)("div",{ref:p,className:o()("dialog",{"dialog-monaco":"modal"==r}),style:d,children:["dialog"===r?(0,e.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const l=p.current;if(!l)return;const s=l.getBoundingClientRect(),t=e.clientX-s.left,n=e=>{u({top:e.clientY-10,left:e.clientX-t})},a=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",a)})(e),children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{}),(0,e.jsx)("span",{})]}):(0,e.jsx)("div",{}),(0,e.jsxs)("div",{className:"dialog-header",children:[(0,e.jsx)("h5",{className:"dialog-title m-0",children:i}),(0,e.jsx)("div",{className:"cursor-pointer",onClick:t,children:(0,e.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,e.jsx)("div",{className:"dialog-body",children:n}),a.length>0&&(0,e.jsx)("div",{className:"dialog-footer",children:a.map((e=>e))})]})})};function r(e,s){(0,l.useEffect)((()=>{const l=l=>{const t=null==e?void 0:e.current;t&&!t.contains((null==l?void 0:l.target)||null)&&s(l)};return document.addEventListener("mousedown",l),document.addEventListener("touchstart",l),()=>{document.removeEventListener("mousedown",l),document.removeEventListener("touchstart",l)}}),[e,s])}n.p;const c=s=>{var t;const[n,a]=(0,l.useState)(!1),o=(0,l.useRef)(null);return r(o,(()=>a(!1))),(0,e.jsxs)("div",{className:"dropdown-flow",ref:o,children:[(0,e.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),a(!n)},children:s.iconClass&&(0,e.jsx)("i",{className:s.iconClass})}),(0,e.jsx)("ul",{className:"py-3",style:{display:n?"block":"none"},children:null===(t=s.options)||void 0===t?void 0:t.map((l=>(0,e.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:e=>{a(!1),l.onClick(e)},children:l.name},l.name)))})]})},d=({collapsibleLabel:t,fields:n,disabledFields:a=[],fieldLabel:o,dialogElements:r,emptyValues:d,isAddible:u=!0,isDeletable:p=!0,isCollabsible:m=!0,createItemLabel:v,dialogTitle:f,maxItemLen:h,onChange:b,validate:y,getFieldLabel:x})=>{const[j,g]=(0,l.useState)([]),[N,k]=(0,l.useState)(!1),[C,S]=(0,l.useState)(0),[w,L]=(0,l.useState)({top:0}),[E,O]=(0,l.useState)(!1),[$,T]=(0,l.useState)("");(0,l.useEffect)((()=>{const e=new Set(a.map((e=>JSON.stringify(e)))),l=n.filter((l=>!e.has(JSON.stringify(l))));g(l)}),[n]);const A=(e,l,s=!1)=>{L({top:e.pageY}),O(s),S(l),y&&T(y(j[l])),k(!0)},R=(e,l,s=o)=>{if(!e)return;if(s.includes(".")){const t=s.split(".").reduce(((e,l)=>e[l]),e);return Array.isArray(t)||"object"!=typeof t?t:t.value?`${t.type}.${t.value}`:`Variable ${l+1}`}const t=e?e[s]:e;return Array.isArray(t)||"object"!=typeof t?t:t.value?`${t.type}.${t.value}`:`Variable ${l+1}`},_=e=>{g(e),b(JSON.parse(JSON.stringify([...a,...e])))};function P(e,l){const s=[...j];((e,l,s)=>{const t=l.split("."),n=t.pop();t.reduce(((e,l)=>e[l]),e)[n]=s})(s[C],e,l),_(s),y&&T(y(s[C]))}const D=()=>{if(void 0!==h&&j.length>=h)return;const e=[...j];e.push(JSON.parse(JSON.stringify(d))),_(e)},F=(e,l)=>{var s;const t=null===(s={true:a,false:j}[E.toString()])||void 0===s?void 0:s[C];return{Expression:{expression:(null==t?void 0:t[l])||{type:"string",value:""},onBlur:e=>{P(l,e)}},Checkbox:{checked:R(t,0,l)||!1,onChange:e=>{P(l,e)}},Select:{value:R(t,0,l)||"",onChange:e=>{P(l,e)}},Input:{value:R(t,0,l)||"",onBlur:e=>{P(l,e.target.value)}},MultiSelect:{values:R(t,0,l)||[],onChange:e=>{P(l,e)}}}[e]||{value:(null==t?void 0:t[l])||"",onChange:e=>{P(l,e)}}};return(0,e.jsx)(e.Fragment,{children:0==(null==j?void 0:j.length)&&0==a.length&&u?(0,e.jsxs)("div",{className:"dynamic-field-create vertical-line cursor-pointer",onClick:D,children:[(0,e.jsx)("p",{children:v}),void 0===h||void 0!==h&&j.length<h?(0,e.jsx)("i",{className:"mdi mdi-plus"}):(0,e.jsx)(e.Fragment,{})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(s,{label:t,isKeepOpen:!m,...(()=>{if(u&&!(void 0!==h&&j.length>=h))return{onAddButton:D}})(),children:[null==a?void 0:a.map(((l,s)=>(0,e.jsx)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==s&&"vertical-line"}`,onClick:e=>A(e,s,!0),children:(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==x?void 0:x(l))||R(l,s)||`Variable ${s+1}`})},`item${s}`))),null==j?void 0:j.map(((l,s)=>(0,e.jsxs)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==s&&"vertical-line"}`,onClick:e=>A(e,s),children:[(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==x?void 0:x(l))||R(l,s)||`Variable ${s+1}`}),p&&(0,e.jsx)(c,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Delete",onClick:e=>{((e,l)=>{e.preventDefault(),e.stopPropagation(),_([...j].filter(((e,s)=>s!=l)))})(e,s)}}]})]},`item${s}`)))]}),(0,e.jsxs)(i,{isOpen:N,title:f,onClose:()=>(k(!1),void T("")),position:w,children:[(0,e.jsxs)("p",{style:{color:"red",display:""===$?"none":""},children:["$",$]}),r.map(((l,s)=>{var t,n;if((E||!l.isRendered||(null===(t=null==l?void 0:l.isRendered)||void 0===t?void 0:t.call(l,j[C])))&&(!E||!l.isRendered||(null===(n=null==l?void 0:l.isRendered)||void 0===n?void 0:n.call(l,a[C]))))return(0,e.jsx)(l.component,{...F(l.component.name,l.key),disabled:E,...l.props,children:l.children},l.key)}))]})]})})},u=(n.p,({label:s,options:t=[],className:n,placeholder:a,value:o,disabled:i,onChange:c})=>{const[d,u]=(0,l.useState)(!1),[p,m]=(0,l.useState)(o),[v,f]=(0,l.useState)([]),h=(0,l.useRef)(null);return r(h,(()=>u(!1))),(0,l.useEffect)((()=>{const e=v.find((e=>e.value===o));e?m(e.name):o||m("")}),[o,v]),(0,l.useEffect)((()=>{f(t)}),[t]),(0,e.jsxs)("div",{className:`select-flow position-relative ${n||""}`,children:[s&&(0,e.jsx)("label",{className:"d-block ellipsis-text p-0",children:s}),(0,e.jsxs)("div",{ref:h,children:[(0,e.jsxs)("div",{className:"input",onClick:()=>{i||u(!d)},style:{cursor:i?"not-allowed":"default",opacity:i?"0.6":"1"},children:[(0,e.jsx)("input",{className:"w-100 ellipsis-text",placeholder:a,value:p,onChange:()=>{}}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",style:{display:d?"block":"none",pointerEvents:i?"none":"all"},children:(0,e.jsx)("ul",{children:t.map((l=>(0,e.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>l.value!=p?(e=>{c(e.value),u(!1)})(l):u(!1),children:l.name},l.value)))})})]})]})}),p=(n.p,({label:l,className:s,checked:t,disabled:n,onChange:a})=>(0,e.jsxs)("div",{className:`checkbox-flow ${s||""}`,children:[(0,e.jsx)("input",{className:"cursor-pointer m-0",type:"checkbox",checked:t,onChange:e=>(a(e.target.checked),e.target.checked),disabled:n}),(0,e.jsx)("label",{className:"p-0",children:l})]})),m=({id:l,label:s,remove:t})=>(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{children:s}),(0,e.jsx)("i",{className:"mdi mdi-close",onClick:e=>{e.preventDefault(),e.stopPropagation(),t(l)}})]}),v=({label:s,options:t,className:n,placeholder:a,values:o,disabled:i,onChange:c})=>{const[d,u]=(0,l.useState)(!1),[v,f]=(0,l.useState)([]),h=(0,l.useRef)(null);return(0,l.useEffect)((()=>{const e=t.filter((e=>null==o?void 0:o.some((l=>e.value===l))));e&&f(e)}),[o]),r(h,(()=>u(!1))),(0,e.jsxs)("div",{className:`select-flow position-relative ${n||""}`,children:[s&&(0,e.jsx)("label",{className:"d-block",children:s}),(0,e.jsxs)("div",{ref:h,children:[(0,e.jsxs)("div",{className:"input w-100",onClick:()=>{i||u(!d)},children:[(0,e.jsx)("div",{className:"w-100 input-block",children:v.map(((l,s)=>(0,e.jsx)(m,{id:s,remove:e=>{(e=>{const l=v.filter(((l,s)=>s!==e));f(l),c(l.map((e=>e.value)))})(e)},label:l.name},crypto.randomUUID())))}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",style:{display:d?"block":"none"},children:(0,e.jsx)("ul",{children:t.map(((l,s)=>(0,e.jsx)("li",{className:"cursor-pointer",onClick:()=>(e=>{let l=v;v.some((l=>l.value===e.value))?l=v.filter((l=>l.value!==e.value)):l.push(e),f(l),c(l.map((e=>e.value)))})(l),children:(0,e.jsx)(p,{checked:v.some((e=>e.value===l.value)),onChange:()=>{},label:l.name})},l.value)))})})]})]})},f=(n.p,({label:s,className:t,placeholder:n,value:a,disabled:o,isDigit:i=!1,onChange:r,onBlur:c})=>{const[d,u]=(0,l.useState)(a);return(0,l.useEffect)((()=>{u(a)}),[a]),(0,e.jsxs)("div",{className:`input-flow ${t||""}`,children:[s&&(0,e.jsx)("label",{className:"d-block p-0",children:s}),(0,e.jsx)("input",{className:"w-100",placeholder:n,value:d,onChange:e=>{const l=e.target.value;i&&!new RegExp(/^\d+$/).test(l)||(null==r||r(l),u(l))},onBlur:c,disabled:o})]})});n.p,n(4645),n.p;const h=({children:l,className:s,color:t="primary",disabled:n,onClick:a})=>(0,e.jsx)("button",{className:o()("button-flow",s,t),disabled:n,onClick:a,children:l});n.p;const b=({node:s,level:t=0,onSelect:n,selected:a})=>{const[i,r]=(0,l.useState)([]);return(0,l.useEffect)((()=>{const e=a.split(".");e.length>0&&r(i.concat(e))}),[a]),(0,e.jsx)("div",{className:"tree-node",children:Object.keys(s).map((l=>{const c=Array.isArray(s[l])?s[l].length>0:"object"==typeof s[l]&&null!==s[l],d=a===l,u=a.split(".").length>1?a.split(".").filter(((e,l)=>0!==l)).join("."):a;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:o()("tree-row",{selected:d}),onClick:()=>(e=>{n(e)})(l),children:(0,e.jsxs)("div",{className:"tree-text",style:{paddingLeft:c?20*t:20*t+10},onClick:()=>(e=>{i.includes(e)?r(i.filter((l=>l!==e))):r([...i,e])})(l),children:[c&&(0,e.jsx)("i",{className:"mdi mdi-menu-"+(i.includes(l)?"down":"right")}),(0,e.jsx)("span",{children:l})]})},l),c&&i.includes(l)&&(0,e.jsx)(b,{node:s[l],level:t+1,onSelect:e=>n(`${l}.${e}`),selected:u})]})}))})},y=({className:s,isOpen:t,selected:n,position:a,items:r,onSelected:c,onClose:d})=>{const[u,p]=(0,l.useState)(""),[m,v]=(0,l.useState)(""),[y,x]=(0,l.useState)(r),[j,g]=(0,l.useState)({top:200});return(0,l.useEffect)((()=>{const e=l=>Object.keys(l).reduce(((s,t)=>{if("object"==typeof l[t]){if(!t)return s;if(0===Object.keys(l[t]).length)return s[t]="",s;l[t].type?s[t]=l[t].type:s[t]=e(l[t])}else s[t]=l[t];return s}),{});if(!r)return;const l=e(r);x(JSON.parse(JSON.stringify(l)))}),[r]),(0,l.useEffect)((()=>{n&&p(n)}),[n]),(0,l.useEffect)((()=>{a&&g(a)}),[a]),(0,e.jsx)("div",{className:o()("picker",s),children:(0,e.jsx)(i,{title:"Picker",position:j,isOpen:t,onClose:()=>d(),children:(0,e.jsxs)("div",{children:[(0,e.jsx)(f,{className:"mb-3",placeholder:"Search",value:m,onChange:e=>v(e)}),(0,e.jsx)("div",{className:"tree",children:(0,e.jsx)(b,{node:(e=>{const l=s=>Object.keys(s).reduce(((t,n)=>{if(n.toLowerCase().includes(e.toLowerCase())&&(t[n]=s[n]),Array.isArray(s[n])){const l=s[n].filter((l=>"string"==typeof l&&l.toLowerCase().includes(e.toLowerCase())));l.length>0&&(t[n]=l)}if("object"==typeof s[n]&&null!==s[n]){const e=l(s[n]);Object.keys(e).length>0&&(t[n]=e)}return t}),{});return y?l(y):{}})(m),selected:u,onSelect:e=>{p(e)}})}),(0,e.jsxs)("div",{className:"d-flex justify-content-end mt-3",children:[(0,e.jsx)(h,{color:"secondary",className:"px-2",onClick:()=>d(),children:"Cancel"}),(0,e.jsx)(h,{className:"ms-3 px-2",onClick:()=>{c(u),d()},children:"SELECT"})]})]})})})},x=({label:s,className:t,types:n,expression:a,disabled:o,constantsOptions:i,store:r,onChange:c,onBlur:d})=>{const[p,m]=(0,l.useState)([]),[v,h]=(0,l.useState)(n[0]),[b,x]=(0,l.useState)(""),[j,g]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{h(a.type),x(a.value)}),[a]),(0,l.useEffect)((()=>{m(n.map((e=>({name:e,value:e}))))}),[n]),(0,e.jsxs)("div",{className:`expression-flow ${t||""}`,children:[(0,e.jsx)(u,{label:s,options:p,disabled:o||j,value:v,onChange:e=>{null==c||c({value:"",type:e}),null==d||d({value:"",type:e})}}),(0,e.jsxs)("div",{className:"d-flex align-items-center mt-2",children:["constant"===v?(0,e.jsx)(u,{className:"w-100",options:i||[],value:b,disabled:o||j,onChange:e=>{null==c||c({type:v,value:e}),null==d||d({type:v,value:e}),x(e)}}):(0,e.jsx)(f,{className:"w-100",value:b,onChange:e=>{null==c||c({type:v,value:e}),x(e)},disabled:o||j,onBlur:e=>null==d?void 0:d({type:v,value:e.target.value})}),["context","input","output"].includes(v)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"ms-2",onClick:e=>{o||g(!0)},children:(0,e.jsx)("i",{className:"mdi mdi-database"})}),(0,e.jsx)(y,{isOpen:j,items:r[v],onClose:()=>g(!1),selected:b,onSelected:e=>{null==c||c({type:v,value:e}),null==d||d({type:v,value:e}),x(e)}})]})]})]})},j=s=>{const[t,n]=(0,l.useState)({label:s.label||{type:"string",value:""},description:s.description||""});(0,l.useEffect)((()=>{n({label:s.label||{type:"string",value:""},description:s.description||""})}),[s.label,s.description]);const a=[{component:x,key:"label",props:{label:"Label",types:["string"]}},{component:f,key:"description",props:{label:"Description"}}];return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(d,{emptyValues:{label:{type:"string",value:""},description:""},dialogTitle:"Label",getFieldLabel:e=>{var l;return(null===(l=e.label)||void 0===l?void 0:l.value)||""},fields:[t],fieldLabel:"Label",collapsibleLabel:"LABEL",isAddible:!1,isDeletable:!1,dialogElements:a,onChange:e=>{n(e[0]),s.onChangeLabel(e[0].label),s.onChangeDescription(e[0].description)}})})},g={name:"start",panelLabel:"Start",version:"0.8",inputs:[],outputs:["_"],icon:"mdi-play",autoStarts:!0,defaultProps:()=>({label:{type:"string",value:"Start"},description:"Start",forms:[],actions:[{actionType:"start",customType:"",label:"KAYDET",roles:["start"],props:{uniqueKeys:[],userBound:!1}}]}),editSection:s=>()=>{var t,n,a;const[o,i]=(0,l.useState)([]),r=(null===(a=null===(n=null===(t=null==s?void 0:s.callbacks)||void 0===t?void 0:t.ui)||void 0===n?void 0:n.getRoles)||void 0===a?void 0:a.call(n).map((e=>e.value)))||[],[c,m]=(0,l.useState)(s.propValues.actions||[]),[h,b]=(0,l.useState)(["start"]),y=o.map((e=>({name:`${e.name}`,value:e.ID}))),x=r.map((e=>({name:`${e}`,value:e}))),g=h.map((e=>({name:`${e}`,value:e}))),N=r.map((e=>({name:`${e}`,value:e})));if(!s.callbacks.ui)throw new Error("start can not execute on environments without UI");const k=s.callbacks.ui;(0,l.useEffect)((()=>{(async()=>{i(await k.getModels("qjson"))})()}),[]);const C=[{component:u,key:"id",props:{label:"Form",types:s.propValues.forms.map((e=>e.id)),options:y}},{component:v,key:"roles",props:{label:"Roles",options:x}},{component:p,key:"readonly",props:{label:"Readonly",className:"mt-3",disabled:!0}}],S=[{component:u,key:"actionType",props:{label:"Action Type",types:h,options:g}},{component:f,key:"customType",props:{label:"Custom Type",className:"mt-3"}},{component:f,key:"label",props:{label:"Label",className:"mt-3"}},{component:v,key:"roles",props:{label:"Roles",options:N,className:"mt-3"}},{component:v,key:"props.uniqueKeys",props:{label:"Unique Keys",className:"mt-3",options:[{name:"Maker",value:"maker"},{name:"Checker 1",value:"checker1"},{name:"Checker 2",value:"checker2"},{name:"Approver 1",value:"approver1"},{name:"Approver 2",value:"approver2"}]}}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(j,{label:s.propValues.label,description:s.propValues.description,onChangeLabel:e=>s.callbacks.setProp("label",e),onChangeDescription:e=>s.callbacks.setProp("description",e)}),(0,e.jsx)(d,{fields:s.propValues.forms||[],dialogTitle:"Form",collapsibleLabel:"FORMS",fieldLabel:"id",getFieldLabel:e=>{var l;return(null===(l=o.find((l=>l.ID==e.id)))||void 0===l?void 0:l.name)||""},dialogElements:C,emptyValues:{id:"",roles:[],readonly:!1},createItemLabel:"Add Forms",onChange:e=>{s.callbacks.setProp("forms",e)}}),(0,e.jsx)(d,{fields:c,dialogTitle:"Action",collapsibleLabel:"ACTIONS",fieldLabel:"actionType",getFieldLabel:e=>e.actionType?e.customType?`${e.actionType} - ${e.customType}`:`${e.actionType}`:"",dialogElements:S,emptyValues:{actionType:"start",customType:"",label:"",roles:[],props:{uniqueKeys:[],userBound:!1}},createItemLabel:"Add Actions",onChange:e=>{m(e),s.callbacks.setProp("actions",e)}})]})}}})(),a})()));