/*! For license information please see switch_design.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.flowcomponent=t(require("react"),require("react-dom")):e.flowcomponent=t(e.react,e["react-dom"])}(this,((e,t)=>(()=>{var s={4645:(e,t,s)=>{"use strict";var n=s(7111);n.createRoot,n.hydrateRoot},6094:(e,t,s)=>{"use strict";var n=s(8156),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var n,a={},c=null,u=null;for(n in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)r.call(t,n)&&!i.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:l,type:e,key:c,ref:u,props:a,_owner:o.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},4512:(e,t,s)=>{"use strict";e.exports=s(6094)},2190:(e,t,s)=>{"use strict";s.d(t,{default:()=>S});var n=s(4512),l=s(8156),a=s(5685),r=s.n(a);s.p;const o=({label:e,isKeepOpen:t=!1,onAddButton:s,children:a})=>{const[r,o]=(0,l.useState)(!0);return(0,n.jsxs)("div",{className:"variables ",children:[(0,n.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,n.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>o(!r),children:[!t&&(0,n.jsx)("i",{className:"mdi "+(r?"mdi-chevron-down":"mdi-chevron-right")}),(0,n.jsx)("p",{children:e})]}),s&&(0,n.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),s()}})]}),(t||r)&&(0,n.jsx)("ul",{className:"variable-list",children:a})]})},i=(s.p,({label:e,className:t,value:s,disabled:l,onChange:a})=>(0,n.jsxs)("div",{className:r()("switch-flow",t),children:[e&&(0,n.jsx)("label",{className:"switch-text",children:e}),(0,n.jsxs)("label",{className:"switch",children:[(0,n.jsx)("input",{type:"checkbox",className:"w-100",checked:s,disabled:l,onChange:e=>{a(e.target.checked)}}),(0,n.jsx)("span",{className:"slider round"})]})]}));function c(e,t){(0,l.useEffect)((()=>{const s=s=>{const n=null==e?void 0:e.current;n&&!n.contains((null==s?void 0:s.target)||null)&&t(s)};return document.addEventListener("mousedown",s),document.addEventListener("touchstart",s),()=>{document.removeEventListener("mousedown",s),document.removeEventListener("touchstart",s)}}),[e,t])}function u(e){return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}function d(e){const t=(0,l.useSyncExternalStore)(u,(()=>function(e){var t,s,n,l,a;const r=null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect();return JSON.stringify({width:null!==(s=null==r?void 0:r.width)&&void 0!==s?s:0,height:null!==(n=null==r?void 0:r.height)&&void 0!==n?n:0,top:null!==(l=null==r?void 0:r.top)&&void 0!==l?l:0,left:null!==(a=null==r?void 0:r.left)&&void 0!==a?a:0})}(e)));return(0,l.useMemo)((()=>JSON.parse(t)),[t])}s.p;const p=({label:e,options:t=[],className:s,placeholder:a,value:r,disabled:o,onChange:i})=>{const[u,p]=(0,l.useState)(!1),[v,m]=(0,l.useState)(r),[f,h]=(0,l.useState)([]),g=(0,l.useRef)(null),x=(0,l.useRef)(null),j=(0,l.useRef)(null),{width:b,top:y,left:N,height:S}=d(x),{height:w}=d(j);return c(g,(()=>p(!1))),(0,l.useEffect)((()=>{const e=f.find((e=>e.value===r));e?m(e.name):r||m("")}),[r,f]),(0,l.useEffect)((()=>{h(t)}),[t]),(0,n.jsxs)("div",{className:`select-flow position-relative ${s||""}`,children:[e&&(0,n.jsx)("label",{className:"d-block ellipsis-text p-0",children:e}),(0,n.jsxs)("div",{ref:g,children:[(0,n.jsxs)("div",{className:"input",ref:x,onClick:()=>{o||p(!u)},style:{cursor:o?"not-allowed":"default",opacity:o?"0.6":"1"},children:[(0,n.jsx)("input",{className:"w-100 ellipsis-text",placeholder:a,value:v,onChange:()=>{}}),(0,n.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,n.jsx)("div",{className:"options",ref:j,style:{display:u?"block":"none",pointerEvents:o?"none":"all",...(()=>{const e=window.innerHeight;return y+S+5+w>e?{top:y-w-5,left:N,width:b}:{top:y+S+5,left:N,width:b}})()},children:(0,n.jsx)("ul",{children:t.map((e=>(0,n.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>e.value!=v?(e=>{i(e.value),p(!1)})(e):p(!1),children:e.name},e.value)))})})]})]})},v=(s.p,s.p,({label:e,className:t,placeholder:s,value:a,disabled:r,isDigit:o=!1,onChange:i,onBlur:c})=>{const[u,d]=(0,l.useState)(a);return(0,l.useEffect)((()=>{d(a)}),[a]),(0,n.jsxs)("div",{className:`input-flow ${t||""}`,children:[e&&(0,n.jsx)("label",{className:"d-block p-0",children:e}),(0,n.jsx)("input",{className:"w-100",placeholder:s,value:u,onChange:e=>{const t=e.target.value;o&&!new RegExp(/^\d+$/).test(t)||(null==i||i(t),d(t))},onBlur:c,disabled:r})]})});s(4645),s.p;const m=({isOpen:e,onClose:t,children:s,footer:a=[],title:o,type:i="dialog",position:c})=>{if(!e)return null;const[u,d]=(0,l.useState)({top:0}),p=(0,l.useRef)(null);return(0,l.useEffect)((()=>{var e,t;if(c){const s=window.innerHeight>c.top+((null===(e=p.current)||void 0===e?void 0:e.clientHeight)||0)?c.top:window.innerHeight-((null===(t=p.current)||void 0===t?void 0:t.clientHeight)||0)-10;d({top:s})}}),[c]),(0,n.jsx)("div",{className:r()({overlay:"modal"===i}),children:(0,n.jsxs)("div",{ref:p,className:r()("dialog",{"dialog-monaco":"modal"==i}),style:u,children:["dialog"===i?(0,n.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const t=p.current;if(!t)return;const s=t.getBoundingClientRect(),n=e.clientX-s.left,l=e=>{d({top:e.clientY-10,left:e.clientX-n})},a=()=>{document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",l),document.addEventListener("mouseup",a)})(e),children:[(0,n.jsx)("span",{}),(0,n.jsx)("span",{}),(0,n.jsx)("span",{})]}):(0,n.jsx)("div",{}),(0,n.jsxs)("div",{className:"dialog-header",children:[(0,n.jsx)("h5",{className:"dialog-title m-0",children:o}),(0,n.jsx)("div",{className:"cursor-pointer",onClick:t,children:(0,n.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,n.jsx)("div",{className:"dialog-body",children:s}),a.length>0&&(0,n.jsx)("div",{className:"dialog-footer",children:a.map((e=>e))})]})})},f=(s.p,({children:e,className:t,color:s="primary",disabled:l,onClick:a})=>(0,n.jsx)("button",{className:r()("button-flow",t,s),disabled:l,onClick:a,children:e}));s.p;const h=({node:e,level:t=0,onSelect:s,selected:a})=>{const[o,i]=(0,l.useState)([]);return(0,l.useEffect)((()=>{const e=a.split(".");e.length>0&&i(o.concat(e))}),[a]),(0,n.jsx)("div",{className:"tree-node",children:Object.keys(e).map((l=>{const c=Array.isArray(e[l])?e[l].length>0:"object"==typeof e[l]&&null!==e[l],u=a===l,d=a.split(".").length>1?a.split(".").filter(((e,t)=>0!==t)).join("."):a;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:r()("tree-row",{selected:u}),onClick:()=>(e=>{s(e)})(l),children:(0,n.jsxs)("div",{className:"tree-text",style:{paddingLeft:c?20*t:20*t+10},onClick:()=>(e=>{o.includes(e)?i(o.filter((t=>t!==e))):i([...o,e])})(l),children:[c&&(0,n.jsx)("i",{className:"mdi mdi-menu-"+(o.includes(l)?"down":"right")}),(0,n.jsx)("span",{children:l})]})},l),c&&o.includes(l)&&(0,n.jsx)(h,{node:e[l],level:t+1,onSelect:e=>s(`${l}.${e}`),selected:d})]})}))})},g=({className:e,isOpen:t,selected:s,position:a,items:o,onSelected:i,onClose:c})=>{const[u,d]=(0,l.useState)(""),[p,g]=(0,l.useState)(""),[x,j]=(0,l.useState)(o),[b,y]=(0,l.useState)({top:200});return(0,l.useEffect)((()=>{const e=t=>Object.keys(t).reduce(((s,n)=>{if("object"==typeof t[n]){if(!n)return s;if(0===Object.keys(t[n]).length)return s[n]="",s;t[n].type?s[n]=t[n].type:s[n]=e(t[n])}else s[n]=t[n];return s}),{});if(!o)return;const t=e(o);j(JSON.parse(JSON.stringify(t))),d("")}),[o]),(0,l.useEffect)((()=>{s&&d(s)}),[s]),(0,l.useEffect)((()=>{a&&y(a)}),[a]),(0,n.jsx)("div",{className:r()("picker",e),children:(0,n.jsx)(m,{title:"Picker",position:b,isOpen:t,onClose:()=>c(),children:(0,n.jsxs)("div",{children:[(0,n.jsx)(v,{className:"mb-3",placeholder:"Search",value:p,onChange:e=>g(e)}),(0,n.jsx)("div",{className:"tree",children:(0,n.jsx)(h,{node:(e=>{const t=s=>Object.keys(s).reduce(((n,l)=>{if(l.toLowerCase().includes(e.toLowerCase())&&(n[l]=s[l]),Array.isArray(s[l])){const t=s[l].filter((t=>"string"==typeof t&&t.toLowerCase().includes(e.toLowerCase())));t.length>0&&(n[l]=t)}if("object"==typeof s[l]&&null!==s[l]){const e=t(s[l]);Object.keys(e).length>0&&(n[l]=e)}return n}),{});return x?t(x):{}})(p),selected:u,onSelect:e=>{d(e)}})}),(0,n.jsxs)("div",{className:"d-flex justify-content-end mt-3",children:[(0,n.jsx)(f,{color:"secondary",className:"px-2",onClick:()=>c(),children:"Cancel"}),(0,n.jsx)(f,{className:"ms-3 px-2",disabled:!u,onClick:()=>{i(u),c()},children:"SELECT"})]})]})})})},x=({label:e,className:t,types:s,expression:a,disabled:r,constantsOptions:o,store:i,onChange:c,onBlur:u})=>{const[d,m]=(0,l.useState)([]),[f,h]=(0,l.useState)(s[0]),[x,j]=(0,l.useState)(""),[b,y]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{h(a.type),j(a.value)}),[a]),(0,l.useEffect)((()=>{m(s.map((e=>({name:e,value:e}))))}),[s]),(0,n.jsxs)("div",{className:`expression-flow ${t||""}`,children:[(0,n.jsx)(p,{label:e,options:d,disabled:r||b,value:f,onChange:e=>{null==c||c({value:"",type:e}),null==u||u({value:"",type:e})}}),(0,n.jsxs)("div",{className:"d-flex align-items-center mt-2",children:["constant"===f?(0,n.jsx)(p,{className:"w-100",options:o||[],value:x,disabled:r||b,onChange:e=>{null==c||c({type:f,value:e}),null==u||u({type:f,value:e}),j(e)}}):(0,n.jsx)(v,{className:"w-100",value:x,onChange:e=>{null==c||c({type:f,value:e}),j(e)},disabled:r||b,onBlur:e=>null==u?void 0:u({type:f,value:e.target.value})}),["context","input","output"].includes(f)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"ms-2",onClick:e=>{r||y(!0)},children:(0,n.jsx)("i",{className:"mdi mdi-database"})}),(0,n.jsx)(g,{isOpen:b,items:i[f],onClose:()=>y(!1),selected:x,onSelected:e=>{null==c||c({type:f,value:e}),null==u||u({type:f,value:e}),j(e)}})]})]})]})},j=(s.p,e=>{var t;const[s,a]=(0,l.useState)(!1),r=(0,l.useRef)(null);return c(r,(()=>a(!1))),(0,n.jsxs)("div",{className:"dropdown-flow",ref:r,children:[(0,n.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),a(!s)},children:e.iconClass&&(0,n.jsx)("i",{className:e.iconClass})}),(0,n.jsx)("ul",{className:"py-3",style:{display:s?"block":"none"},children:null===(t=e.options)||void 0===t?void 0:t.map((e=>(0,n.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:t=>{a(!1),e.onClick(t)},children:e.name},e.name)))})]})}),b=e=>{const[t,s]=(0,l.useState)(e.label.value||"");return(0,l.useEffect)((()=>{s(e.label.value||"")}),[e.label]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o,{label:"LABEL",children:(0,n.jsx)(v,{className:"w-100",value:t,onChange:t=>{s(t),e.onChangeLabel({type:"string",value:t})}})})})};function y(e){return null==e?void 0:e.toLowerCase().replace(/[^a-zA-Z0-9:]+(.)/g,((e,t)=>t.toUpperCase()))}function N(e){return{vType:"case",v:{left:{vType:"variable",v:{type:"string",value:""}},operator:"eq",right:{vType:"variable",v:{type:"string",value:""}}},props:{name:`Case ${e}`,_name:`case${e}`}}}const S={name:"switch",panelLabel:"Decision",version:"0.8",color:"#9C27B0",icon:"mdi-rhombus-outline",inputs:[{name:"_"}],outputs:()=>["1","2"],defaultProps:()=>({label:{type:"string",value:"Decision"},type:"switch",name:"switch",description:"Decision",cases:{1:{props:{name:"Default",_name:"default"}},2:N(2)}}),editSection:e=>()=>{const[t,s]=(0,l.useState)(e.propValues.cases),[a,c]=(0,l.useState)(!1),[u,d]=(0,l.useState)("variable"),[m,f]=(0,l.useState)("variable"),[h,g]=(0,l.useState)("eq"),[S,w]=(0,l.useState)({type:"string",value:""}),[C,k]=(0,l.useState)({type:"string",value:""}),[O,E]=(0,l.useState)(void 0),[L,_]=(0,l.useState)(void 0),[T,P]=(0,l.useState)(void 0),[R,A]=(0,l.useState)(""),[B,D]=(0,l.useState)(void 0),[I,$]=(0,l.useState)(void 0),[J,q]=(0,l.useState)(!1),F=(e,t)=>{let s=0;const n=e=>{if(s.toString()===t)return e;if("case"===e.vType){s++;return n(e.v.left)||(s++,n(e.v.right))}};return n(e)};(0,l.useEffect)((()=>{var t,s;const n=null===(s=(t=e.callbacks).selectedSwitchCase)||void 0===s?void 0:s.call(t,(e=>{M(e)}));M(n)}),[]);const M=e=>{var t,s;if(_(null==e?void 0:e.caseId),e&&(E(e.stepId),e.stepId&&e.case)){const n=F(e.case,e.stepId);n&&"case"===n.vType?(q(!1),c(n.negation||!1),d(n.v.left.vType),f(n.v.right.vType),g(n.v.operator),w(n.v.left.v),D(null===(t=n.v.left.props)||void 0===t?void 0:t.name),k(n.v.right.v),$(null===(s=n.v.right.props)||void 0===s?void 0:s.name)):q(!0)}};(0,l.useEffect)((()=>{s(e.propValues.cases)}),[e.propValues.cases]);const H=["case","variable"].map((e=>({name:e,value:e}))),V=(e,s)=>{const n=JSON.parse(JSON.stringify(t)),l=F(n[L],O);if(l&&"case"===l.vType){switch(e){case"leftprops":l.v.left.props={name:s,_name:y(s)};break;case"rightprops":l.v.right.props={name:s,_name:y(s)};break;case"negation":l.negation=s;break;case"leftvType":l.v.left.vType=s,"variable"===s?l.v.left.v={type:"string",value:""}:l.v.left=N(1);break;case"rightvType":l.v.right.vType=s,"variable"===s?l.v.right.v={type:"string",value:""}:l.v.right=N(2);break;case"left":l.v.left.v=s;break;case"right":l.v.right.v=s;break;case"operator":l.v.operator=s}z(n)}},z=t=>{var n,l;e.callbacks.setProp("cases",t),s(t),null===(l=(n=e.callbacks).setSwitchArea)||void 0===l||l.call(n,{case:t[L],caseId:L})},U=()=>{let s=JSON.parse(JSON.stringify(t));s[T].props.name=R,s[T].props._name=y(R),e.callbacks.setOutputs(Object.keys(s).map((e=>e.toString()))),P(void 0),A(""),z(s)},G=["&& And","|| Or","== Equals","!= Not Equal","Includes","Not Include","> Greater Than",">= Greater Than and Equal","< Less Than","<= Less Than and Equal"],X=["and","or","eq","ne","in","nin","gt","gte","lt","lte"].map(((e,t)=>({name:G[t],value:e})));return(0,n.jsx)("div",{children:J?(0,n.jsx)(n.Fragment,{}):L&&O?(0,n.jsxs)(o,{label:"PROPERTIES",children:[(0,n.jsx)(i,{className:"w-100",label:"Negation",value:a,onChange:e=>{c(e),V("negation",e)}}),(0,n.jsx)(p,{className:"mt-3",label:"Left",value:u,onChange:e=>{d(e),V("leftvType",e)},options:H}),"variable"===u?(0,n.jsx)(x,{className:"mt-3",store:e.callbacks.nestedStore,expression:S,onBlur:e=>{w(e),V("left",e)},types:["string","number","boolean","context","input","output"]}):(0,n.jsx)(v,{className:"mt-3",value:B||"",onChange:e=>{D(e),V("leftprops",e)}}),(0,n.jsx)(p,{className:"mt-3",label:"Operator",value:h,onChange:e=>{g(e),V("operator",e)},options:X}),(0,n.jsx)(p,{className:"mt-3",label:"Right",value:m,onChange:e=>{f(e),V("rightvType",e)},options:H}),"variable"===m?(0,n.jsx)(x,{className:"mt-3",store:e.callbacks.nestedStore,expression:C,onBlur:e=>{k(e),V("right",e)},types:["string","number","boolean","context","input","output"]}):(0,n.jsx)(v,{className:"mt-3",value:I||"",onChange:e=>{$(e),V("rightprops",e)}})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{label:e.propValues.label,description:e.propValues.description,onChangeLabel:t=>e.callbacks.setProp("label",t),onChangeDescription:t=>e.callbacks.setProp("description",t)}),(0,n.jsx)(o,{label:"CASES",onAddButton:()=>{let s=JSON.parse(JSON.stringify(t));const n=(Math.max(...Object.keys(s).map((e=>parseInt(e))))+1).toString(),l={[n]:N(parseInt(n))};s={...s,...l},e.callbacks.setOutputs(Object.keys(s).map((e=>e.toString()))),z(s)},children:Object.keys(t||{}).filter(((e,t)=>0!==t)).map(((s,l)=>{var a,o;return(0,n.jsxs)("li",{className:r()("d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer",{"vertical-line":Object.keys(t||{}).length-1!==l}),onClick:()=>((t,s)=>{var n,l;_(s),null===(l=(n=e.callbacks).setSwitchArea)||void 0===l||l.call(n,{case:t,caseId:s})})(t[s],s),children:[(0,n.jsx)("p",{hidden:T===s,children:(null===(a=t[s].props)||void 0===a?void 0:a.name)||`Case ${s}`}),(0,n.jsx)("li",{hidden:T!==s,children:(0,n.jsx)(v,{className:"mt-3",value:(null===(o=t[s].props)||void 0===o?void 0:o.name)||`Case ${s}`,onChange:e=>A(e),onBlur:U})}),(0,n.jsx)(j,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Rename",onClick:e=>{e.preventDefault(),e.stopPropagation(),P(s)}},{name:"Delete",onClick:n=>{n.preventDefault(),n.stopPropagation(),(s=>{let n=JSON.parse(JSON.stringify(t));delete n[s],e.callbacks.setOutputs(Object.keys(n).map((e=>e.toString()))),z(n)})(s)}}]})]},`item${l}`)}))})]})})}}},8156:t=>{"use strict";t.exports=e},7111:e=>{"use strict";e.exports=t},5685:(e,t)=>{var s;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=r(e,a(s)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)n.call(e,s)&&e[s]&&(t=r(t,s));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(l.default=l,e.exports=l):void 0===(s=function(){return l}.apply(t,[]))||(e.exports=s)}()}},n={};function l(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return s[e](a,a.exports,l),a.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var s in t)l.o(t,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var a={};return(()=>{"use strict";l.r(a),l.d(a,{default:()=>e.default});var e=l(2190)})(),a})()));