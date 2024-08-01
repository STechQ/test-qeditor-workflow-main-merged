/*! For license information please see switch_design.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.flowcomponent=t(require("react"),require("react-dom")):e.flowcomponent=t(e.react,e["react-dom"])}(this,((e,t)=>(()=>{var s={4645:(e,t,s)=>{"use strict";var a=s(7111);a.createRoot,a.hydrateRoot},6094:(e,t,s)=>{"use strict";var a=s(8156),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var a,l={},c=null,u=null;for(a in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)r.call(t,a)&&!i.hasOwnProperty(a)&&(l[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===l[a]&&(l[a]=t[a]);return{$$typeof:n,type:e,key:c,ref:u,props:l,_owner:o.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},4512:(e,t,s)=>{"use strict";e.exports=s(6094)},2346:(e,t,s)=>{"use strict";s.d(t,{default:()=>y});var a=s(4512),n=s(8156),l=s(5685),r=s.n(l);s.p;const o=({label:e,isKeepOpen:t=!1,onAddButton:s,children:l})=>{const[r,o]=(0,n.useState)(!0);return(0,a.jsxs)("div",{className:"variables ",children:[(0,a.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,a.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>o(!r),children:[!t&&(0,a.jsx)("i",{className:"mdi "+(r?"mdi-chevron-down":"mdi-chevron-right")}),(0,a.jsx)("p",{children:e})]}),s&&(0,a.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),s()}})]}),(t||r)&&(0,a.jsx)("ul",{className:"variable-list",children:l})]})},i=(s.p,({label:e,className:t,value:s,disabled:n,onChange:l})=>(0,a.jsxs)("div",{className:r()("switch-flow",t),children:[e&&(0,a.jsx)("label",{className:"switch-text",children:e}),(0,a.jsxs)("label",{className:"switch",children:[(0,a.jsx)("input",{type:"checkbox",className:"w-100",checked:s,disabled:n,onChange:e=>{l(e.target.checked)}}),(0,a.jsx)("span",{className:"slider round"})]})]}));function c(e,t){(0,n.useEffect)((()=>{const s=s=>{const a=null==e?void 0:e.current;a&&!a.contains((null==s?void 0:s.target)||null)&&t(s)};return document.addEventListener("mousedown",s),document.addEventListener("touchstart",s),()=>{document.removeEventListener("mousedown",s),document.removeEventListener("touchstart",s)}}),[e,t])}s.p;const u=({label:e,options:t=[],className:s,placeholder:l,value:r,disabled:o,onChange:i})=>{const[u,d]=(0,n.useState)(!1),[p,v]=(0,n.useState)(r),[m,f]=(0,n.useState)([]),h=(0,n.useRef)(null);return c(h,(()=>d(!1))),(0,n.useEffect)((()=>{const e=m.find((e=>e.value===r));e?v(e.name):r||v("")}),[r,m]),(0,n.useEffect)((()=>{f(t)}),[t]),(0,a.jsxs)("div",{className:`select-flow position-relative ${s||""}`,children:[e&&(0,a.jsx)("label",{className:"d-block ellipsis-text p-0",children:e}),(0,a.jsxs)("div",{ref:h,children:[(0,a.jsxs)("div",{className:"input",onClick:()=>{o||d(!u)},style:{cursor:o?"not-allowed":"default",opacity:o?"0.6":"1"},children:[(0,a.jsx)("input",{className:"w-100 ellipsis-text",placeholder:l,value:p,onChange:()=>{}}),(0,a.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,a.jsx)("div",{className:"options",style:{display:u?"block":"none",pointerEvents:o?"none":"all"},children:(0,a.jsx)("ul",{children:t.map((e=>(0,a.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>e.value!=p?(e=>{i(e.value),d(!1)})(e):d(!1),children:e.name},e.value)))})})]})]})},d=(s.p,s.p,({label:e,className:t,placeholder:s,value:l,disabled:r,isDigit:o=!1,onChange:i,onBlur:c})=>{const[u,d]=(0,n.useState)(l);return(0,n.useEffect)((()=>{d(l)}),[l]),(0,a.jsxs)("div",{className:`input-flow ${t||""}`,children:[e&&(0,a.jsx)("label",{className:"d-block p-0",children:e}),(0,a.jsx)("input",{className:"w-100",placeholder:s,value:u,onChange:e=>{const t=e.target.value;o&&!new RegExp(/^\d+$/).test(t)||(null==i||i(t),d(t))},onBlur:c,disabled:r})]})});s(4645),s.p;const p=({isOpen:e,onClose:t,children:s,footer:l=[],title:o,type:i="dialog",position:c})=>{if(!e)return null;const[u,d]=(0,n.useState)({top:0}),p=(0,n.useRef)(null);return(0,n.useEffect)((()=>{var e,t;if(c){const s=window.innerHeight>c.top+((null===(e=p.current)||void 0===e?void 0:e.clientHeight)||0)?c.top:window.innerHeight-((null===(t=p.current)||void 0===t?void 0:t.clientHeight)||0)-10;d({top:s})}}),[c]),(0,a.jsx)("div",{className:r()({overlay:"modal"===i}),children:(0,a.jsxs)("div",{ref:p,className:r()("dialog",{"dialog-monaco":"modal"==i}),style:u,children:["dialog"===i?(0,a.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const t=p.current;if(!t)return;const s=t.getBoundingClientRect(),a=e.clientX-s.left,n=e=>{d({top:e.clientY-10,left:e.clientX-a})},l=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",l)})(e),children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]}):(0,a.jsx)("div",{}),(0,a.jsxs)("div",{className:"dialog-header",children:[(0,a.jsx)("h5",{className:"dialog-title m-0",children:o}),(0,a.jsx)("div",{className:"cursor-pointer",onClick:t,children:(0,a.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,a.jsx)("div",{className:"dialog-body",children:s}),l.length>0&&(0,a.jsx)("div",{className:"dialog-footer",children:l.map((e=>e))})]})})},v=(s.p,({children:e,className:t,color:s="primary",disabled:n,onClick:l})=>(0,a.jsx)("button",{className:r()("button-flow",t,s),disabled:n,onClick:l,children:e}));s.p;const m=({node:e,level:t=0,onSelect:s,selected:l})=>{const[o,i]=(0,n.useState)([]);return(0,n.useEffect)((()=>{const e=l.split(".");e.length>0&&i(o.concat(e))}),[l]),(0,a.jsx)("div",{className:"tree-node",children:Object.keys(e).map((n=>{const c=Array.isArray(e[n])?e[n].length>0:"object"==typeof e[n]&&null!==e[n],u=l===n,d=l.split(".").length>1?l.split(".").filter(((e,t)=>0!==t)).join("."):l;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:r()("tree-row",{selected:u}),onClick:()=>(e=>{s(e)})(n),children:(0,a.jsxs)("div",{className:"tree-text",style:{paddingLeft:c?20*t:20*t+10},onClick:()=>(e=>{o.includes(e)?i(o.filter((t=>t!==e))):i([...o,e])})(n),children:[c&&(0,a.jsx)("i",{className:"mdi mdi-menu-"+(o.includes(n)?"down":"right")}),(0,a.jsx)("span",{children:n})]})},n),c&&o.includes(n)&&(0,a.jsx)(m,{node:e[n],level:t+1,onSelect:e=>s(`${n}.${e}`),selected:d})]})}))})},f=({className:e,isOpen:t,selected:s,position:l,items:o,onSelected:i,onClose:c})=>{const[u,f]=(0,n.useState)(""),[h,x]=(0,n.useState)(""),[g,b]=(0,n.useState)(o),[j,y]=(0,n.useState)({top:200});return(0,n.useEffect)((()=>{const e=t=>Object.keys(t).reduce(((s,a)=>{if("object"==typeof t[a]){if(!a)return s;if(0===Object.keys(t[a]).length)return s[a]="",s;t[a].type?s[a]=t[a].type:s[a]=e(t[a])}else s[a]=t[a];return s}),{});if(!o)return;const t=e(o);b(JSON.parse(JSON.stringify(t)))}),[o]),(0,n.useEffect)((()=>{s&&f(s)}),[s]),(0,n.useEffect)((()=>{l&&y(l)}),[l]),(0,a.jsx)("div",{className:r()("picker",e),children:(0,a.jsx)(p,{title:"Picker",position:j,isOpen:t,onClose:()=>c(),children:(0,a.jsxs)("div",{children:[(0,a.jsx)(d,{className:"mb-3",placeholder:"Search",value:h,onChange:e=>x(e)}),(0,a.jsx)("div",{className:"tree",children:(0,a.jsx)(m,{node:(e=>{const t=s=>Object.keys(s).reduce(((a,n)=>{if(n.toLowerCase().includes(e.toLowerCase())&&(a[n]=s[n]),Array.isArray(s[n])){const t=s[n].filter((t=>"string"==typeof t&&t.toLowerCase().includes(e.toLowerCase())));t.length>0&&(a[n]=t)}if("object"==typeof s[n]&&null!==s[n]){const e=t(s[n]);Object.keys(e).length>0&&(a[n]=e)}return a}),{});return g?t(g):{}})(h),selected:u,onSelect:e=>{f(e)}})}),(0,a.jsxs)("div",{className:"d-flex justify-content-end mt-3",children:[(0,a.jsx)(v,{color:"secondary",className:"px-2",onClick:()=>c(),children:"Cancel"}),(0,a.jsx)(v,{className:"ms-3 px-2",onClick:()=>{i(u),c()},children:"SELECT"})]})]})})})},h=({label:e,className:t,types:s,expression:l,disabled:r,constantsOptions:o,store:i,onChange:c,onBlur:p})=>{const[v,m]=(0,n.useState)([]),[h,x]=(0,n.useState)(s[0]),[g,b]=(0,n.useState)(""),[j,y]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{x(l.type),b(l.value)}),[l]),(0,n.useEffect)((()=>{m(s.map((e=>({name:e,value:e}))))}),[s]),(0,a.jsxs)("div",{className:`expression-flow ${t||""}`,children:[(0,a.jsx)(u,{label:e,options:v,disabled:r||j,value:h,onChange:e=>{null==c||c({value:"",type:e}),null==p||p({value:"",type:e})}}),(0,a.jsxs)("div",{className:"d-flex align-items-center mt-2",children:["constant"===h?(0,a.jsx)(u,{className:"w-100",options:o||[],value:g,disabled:r||j,onChange:e=>{null==c||c({type:h,value:e}),null==p||p({type:h,value:e}),b(e)}}):(0,a.jsx)(d,{className:"w-100",value:g,onChange:e=>{null==c||c({type:h,value:e}),b(e)},disabled:r||j,onBlur:e=>null==p?void 0:p({type:h,value:e.target.value})}),["context","input","output"].includes(h)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"ms-2",onClick:e=>{r||y(!0)},children:(0,a.jsx)("i",{className:"mdi mdi-database"})}),(0,a.jsx)(f,{isOpen:j,items:i[h],onClose:()=>y(!1),selected:g,onSelected:e=>{null==c||c({type:h,value:e}),null==p||p({type:h,value:e}),b(e)}})]})]})]})},x=(s.p,e=>{var t;const[s,l]=(0,n.useState)(!1),r=(0,n.useRef)(null);return c(r,(()=>l(!1))),(0,a.jsxs)("div",{className:"dropdown-flow",ref:r,children:[(0,a.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),l(!s)},children:e.iconClass&&(0,a.jsx)("i",{className:e.iconClass})}),(0,a.jsx)("ul",{className:"py-3",style:{display:s?"block":"none"},children:null===(t=e.options)||void 0===t?void 0:t.map((e=>(0,a.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:t=>{l(!1),e.onClick(t)},children:e.name},e.name)))})]})}),g=e=>{const[t,s]=(0,n.useState)(e.label.value||"");return(0,n.useEffect)((()=>{s(e.label.value||"")}),[e.label]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o,{label:"LABEL",children:(0,a.jsx)(d,{className:"w-100",value:t,onChange:t=>{s(t),e.onChangeLabel({type:"string",value:t})}})})})};function b(e){return null==e?void 0:e.toLowerCase().replace(/[^a-zA-Z0-9:]+(.)/g,((e,t)=>t.toUpperCase()))}function j(e){return{vType:"case",v:{left:{vType:"variable",v:{type:"string",value:""}},operator:"eq",right:{vType:"variable",v:{type:"string",value:""}}},props:{name:`Case ${e}`,_name:`case${e}`}}}const y={name:"switch",panelLabel:"Decision",version:"0.8",color:"#9C27B0",icon:"mdi-rhombus-outline",inputs:[{name:"_"}],outputs:()=>["1","2"],defaultProps:()=>({label:{type:"string",value:"Decision"},type:"switch",name:"switch",description:"Decision",cases:{1:{props:{name:"Default",_name:"default"}},2:j(2)}}),editSection:e=>()=>{const[t,s]=(0,n.useState)(e.propValues.cases),[l,c]=(0,n.useState)(!1),[p,v]=(0,n.useState)("variable"),[m,f]=(0,n.useState)("variable"),[y,N]=(0,n.useState)("eq"),[S,C]=(0,n.useState)({type:"string",value:""}),[k,w]=(0,n.useState)({type:"string",value:""}),[O,E]=(0,n.useState)(void 0),[L,_]=(0,n.useState)(void 0),[T,P]=(0,n.useState)(void 0),[R,A]=(0,n.useState)(""),[D,B]=(0,n.useState)(void 0),[$,q]=(0,n.useState)(void 0),I=(e,t)=>{let s=0;const a=e=>{if(s.toString()===t)return e;if("case"===e.vType){s++;return a(e.v.left)||(s++,a(e.v.right))}};return a(e)};(0,n.useEffect)((()=>{var t,s;const a=null===(s=(t=e.callbacks).selectedSwitchCase)||void 0===s?void 0:s.call(t,(e=>{J(e)}));J(a)}),[]);const J=e=>{var t,s;if(e&&(_(e.caseId),E(e.id),e.id&&e.case)){const a=I(e.case,e.id);a&&"case"===a.vType&&(c(a.negation||!1),v(a.v.left.vType),f(a.v.right.vType),N(a.v.operator),C(a.v.left.v),B(null===(t=a.v.left.props)||void 0===t?void 0:t.name),w(a.v.right.v),q(null===(s=a.v.right.props)||void 0===s?void 0:s.name))}};(0,n.useEffect)((()=>{s(e.propValues.cases)}),[e.propValues.cases]);const F=["case","variable"].map((e=>({name:e,value:e}))),M=(e,s)=>{const a=JSON.parse(JSON.stringify(t)),n=I(a[L],O);if(n&&"case"===n.vType){switch(e){case"leftprops":n.v.left.props={name:s,_name:b(s)};break;case"rightprops":n.v.right.props={name:s,_name:b(s)};break;case"negation":n.negation=s;break;case"leftvType":n.v.left.vType=s,"variable"===s?n.v.left.v={type:"string",value:""}:n.v.left=j(1);break;case"rightvType":n.v.right.vType=s,"variable"===s?n.v.right.v={type:"string",value:""}:n.v.right=j(2);break;case"left":n.v.left.v=s;break;case"right":n.v.right.v=s;break;case"operator":n.v.operator=s}V(a)}},V=t=>{var a,n;e.callbacks.setProp("cases",t),s(t),null===(n=(a=e.callbacks).setSwitchArea)||void 0===n||n.call(a,{case:t[L],caseId:L})},H=()=>{let s=JSON.parse(JSON.stringify(t));s[T].props.name=R,s[T].props._name=b(R),e.callbacks.setOutputs(Object.keys(s).map((e=>e.toString()))),P(void 0),A(""),V(s)},U=["&& And","|| Or","== Equals","!= Not Equal","Includes","Not Include","> Greater Than",">= Greater Than and Equal","< Less Than","<= Less Than and Equal"],z=["and","or","eq","ne","in","nin","gt","gte","lt","lte"].map(((e,t)=>({name:U[t],value:e})));return(0,a.jsxs)("div",{children:[(0,a.jsx)(g,{label:e.propValues.label,description:e.propValues.description,onChangeLabel:t=>e.callbacks.setProp("label",t),onChangeDescription:t=>e.callbacks.setProp("description",t)}),L&&O?(0,a.jsxs)(o,{label:"PROPERTIES",children:[(0,a.jsx)(i,{className:"w-100",label:"Negation",value:l,onChange:e=>{c(e),M("negation",e)}}),(0,a.jsx)(u,{className:"mt-3",label:"Left",value:p,onChange:e=>{v(e),M("leftvType",e)},options:F}),"variable"===p?(0,a.jsx)(h,{className:"mt-3",store:e.callbacks.nestedStore,expression:S,onBlur:e=>{C(e),M("left",e)},types:["string","number","boolean","context","input","output"]}):(0,a.jsx)(d,{className:"mt-3",value:D||"",onChange:e=>{B(e),M("leftprops",e)}}),(0,a.jsx)(u,{className:"mt-3",label:"Operator",value:y,onChange:e=>{N(e),M("operator",e)},options:z}),(0,a.jsx)(u,{className:"mt-3",label:"Right",value:m,onChange:e=>{f(e),M("rightvType",e)},options:F}),"variable"===m?(0,a.jsx)(h,{className:"mt-3",store:e.callbacks.nestedStore,expression:k,onBlur:e=>{w(e),M("right",e)},types:["string","number","boolean","context","input","output"]}):(0,a.jsx)(d,{className:"mt-3",value:$||"",onChange:e=>{q(e),M("rightprops",e)}})]}):(0,a.jsx)(o,{label:"CASES",onAddButton:()=>{let s=JSON.parse(JSON.stringify(t));const a=(Math.max(...Object.keys(s).map((e=>parseInt(e))))+1).toString(),n={[a]:j(parseInt(a))};s={...s,...n},e.callbacks.setOutputs(Object.keys(s).map((e=>e.toString()))),V(s)},children:Object.keys(t||{}).filter(((e,t)=>0!==t)).map(((s,n)=>{var l,o;return(0,a.jsxs)("li",{className:r()("d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer",{"vertical-line":Object.keys(t||{}).length-1!==n}),onClick:()=>((t,s)=>{var a,n;_(s),null===(n=(a=e.callbacks).setSwitchArea)||void 0===n||n.call(a,{case:t,caseId:s})})(t[s],s),children:[(0,a.jsx)("p",{hidden:T===s,children:(null===(l=t[s].props)||void 0===l?void 0:l.name)||`Case ${s}`}),(0,a.jsx)("li",{hidden:T!==s,children:(0,a.jsx)(d,{className:"mt-3",value:(null===(o=t[s].props)||void 0===o?void 0:o.name)||`Case ${s}`,onChange:e=>A(e),onBlur:H})}),(0,a.jsx)(x,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Rename",onClick:e=>{e.preventDefault(),e.stopPropagation(),P(s)}},{name:"Delete",onClick:a=>{a.preventDefault(),a.stopPropagation(),(s=>{let a=JSON.parse(JSON.stringify(t));delete a[s],e.callbacks.setOutputs(Object.keys(a).map((e=>e.toString()))),V(a)})(s)}}]})]},`item${n}`)}))})]})}}},8156:t=>{"use strict";t.exports=e},7111:e=>{"use strict";e.exports=t},5685:(e,t)=>{var s;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=r(e,l(s)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)a.call(e,s)&&e[s]&&(t=r(t,s));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(s=function(){return n}.apply(t,[]))||(e.exports=s)}()}},a={};function n(e){var t=a[e];if(void 0!==t)return t.exports;var l=a[e]={exports:{}};return s[e](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var l={};return(()=>{"use strict";n.r(l),n.d(l,{default:()=>e.default});var e=n(2346)})(),l})()));