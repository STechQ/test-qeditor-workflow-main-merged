/*! For license information please see switch_design.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.flowcomponent=t(require("react"),require("react-dom")):e.flowcomponent=t(e.react,e["react-dom"])}(this,((e,t)=>(()=>{var s={4645:(e,t,s)=>{"use strict";var l=s(7111);l.createRoot,l.hydrateRoot},6094:(e,t,s)=>{"use strict";var l=s(8156),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var l,n={},c=null,d=null;for(l in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,l)&&!i.hasOwnProperty(l)&&(n[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===n[l]&&(n[l]=t[l]);return{$$typeof:a,type:e,key:c,ref:d,props:n,_owner:o.current}}t.Fragment=n,t.jsx=c,t.jsxs=c},4512:(e,t,s)=>{"use strict";e.exports=s(6094)},8156:t=>{"use strict";t.exports=e},7111:e=>{"use strict";e.exports=t},5685:(e,t)=>{var s;!function(){"use strict";var l={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=r(e,n(s)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)l.call(e,s)&&e[s]&&(t=r(t,s));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(s=function(){return a}.apply(t,[]))||(e.exports=s)}()}},l={};function a(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={exports:{}};return s[e](n,n.exports,a),n.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var n={};return(()=>{"use strict";a.r(n),a.d(n,{default:()=>N});var e=a(4512),t=a(8156),s=a(5685),l=a.n(s);a.p;const r=({label:s,isKeepOpen:l=!1,onAddButton:a,children:n})=>{const[r,o]=(0,t.useState)(!0);return(0,e.jsxs)("div",{className:"variables ",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,e.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>o(!r),children:[!l&&(0,e.jsx)("i",{className:"mdi "+(r?"mdi-chevron-down":"mdi-chevron-right")}),(0,e.jsx)("p",{children:s})]}),a&&(0,e.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),a(e)}})]}),(l||r)&&(0,e.jsx)("ul",{className:"variable-list",children:n})]})},o=(a.p,({label:t,className:s,value:a,disabled:n,onChange:r})=>(0,e.jsxs)("div",{className:l()("switch-flow",s),children:[t&&(0,e.jsx)("label",{className:"switch-text",children:t}),(0,e.jsxs)("label",{className:"switch",children:[(0,e.jsx)("input",{type:"checkbox",className:"w-100",checked:a,disabled:n,onChange:e=>{r(e.target.checked)}}),(0,e.jsx)("span",{className:"slider round"})]})]}));function i(e,s){(0,t.useEffect)((()=>{const t=t=>{const l=null==e?void 0:e.current;l&&!l.contains((null==t?void 0:t.target)||null)&&s(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}),[e,s])}function c(e){return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}function d(e){const s=(0,t.useSyncExternalStore)(c,(()=>function(e){var t,s,l,a,n;const r=null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect();return JSON.stringify({width:null!==(s=null==r?void 0:r.width)&&void 0!==s?s:0,height:null!==(l=null==r?void 0:r.height)&&void 0!==l?l:0,top:null!==(a=null==r?void 0:r.top)&&void 0!==a?a:0,left:null!==(n=null==r?void 0:r.left)&&void 0!==n?n:0})}(e)));return(0,t.useMemo)((()=>JSON.parse(s)),[s])}a.p;const u=({label:s,options:l=[],className:a,placeholder:n,value:r,disabled:o,onChange:c})=>{const[u,p]=(0,t.useState)(!1),[v,m]=(0,t.useState)(r),[f,h]=(0,t.useState)([]),b=(0,t.useRef)(null),g=(0,t.useRef)(null),x=(0,t.useRef)(null),{width:y,top:j,left:N,height:S}=d(g),{height:k}=d(x);return i(b,(()=>p(!1))),(0,t.useEffect)((()=>{const e=f.find((e=>e.value===r));e?m(e.name):r||m("")}),[r,f]),(0,t.useEffect)((()=>{h(l)}),[l]),(0,e.jsxs)("div",{className:`select-flow position-relative ${a||""}`,children:[s&&(0,e.jsx)("label",{className:"d-block ellipsis-text p-0",children:s}),(0,e.jsxs)("div",{ref:b,children:[(0,e.jsxs)("div",{className:"input",ref:g,onClick:()=>{o||p(!u)},style:{cursor:o?"not-allowed":"default",opacity:o?"0.6":"1"},children:[(0,e.jsx)("input",{className:"w-100 ellipsis-text",placeholder:n,value:v,onChange:()=>{}}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",ref:x,style:{display:u?"block":"none",pointerEvents:o?"none":"all",...(()=>{const e=window.innerHeight;return j+S+5+k>e?{top:j-k-5,left:N,width:y}:{top:j+S+5,left:N,width:y}})()},children:(0,e.jsx)("ul",{children:l.map((t=>(0,e.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>t.value!=v?(e=>{c(e.value),p(!1)})(t):p(!1),children:t.name},t.value)))})})]})]})},p=(a.p,a.p,({label:s,className:l,placeholder:a,value:n,disabled:r,isDigit:o=!1,onChange:i,onBlur:c})=>{const[d,u]=(0,t.useState)(n);return(0,t.useEffect)((()=>{u(n)}),[n]),(0,e.jsxs)("div",{className:`input-flow ${l||""}`,children:[s&&(0,e.jsx)("label",{className:"d-block p-0",children:s}),(0,e.jsx)("input",{className:"w-100",placeholder:a,value:d,onChange:e=>{const t=e.target.value;o&&!new RegExp(/^\d+$/).test(t)||(null==i||i(t),u(t))},onBlur:c,disabled:r})]})});a(4645),a.p;const v=({isOpen:s,onClose:a,children:n,footer:r=[],title:o,type:i="dialog",position:c})=>{if(!s)return null;const[d,u]=(0,t.useState)({top:0}),p=(0,t.useRef)(null);return(0,t.useEffect)((()=>{var e,t;if(c){const s=window.innerHeight>c.top+((null===(e=p.current)||void 0===e?void 0:e.clientHeight)||0)?c.top:window.innerHeight-((null===(t=p.current)||void 0===t?void 0:t.clientHeight)||0)-10;u({top:s})}}),[c]),(0,e.jsx)("div",{className:l()({overlay:"modal"===i}),children:(0,e.jsxs)("div",{ref:p,className:l()("dialog",{"dialog-monaco":"modal"==i}),style:d,children:["dialog"===i?(0,e.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const t=p.current;if(!t)return;const s=t.getBoundingClientRect(),l=e.clientX-s.left,a=e=>{u({top:e.clientY-10,left:e.clientX-l})},n=()=>{document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",n)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",n)})(e),children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{}),(0,e.jsx)("span",{})]}):(0,e.jsx)("div",{}),(0,e.jsxs)("div",{className:"dialog-header",children:[(0,e.jsx)("h5",{className:"dialog-title m-0",children:o}),(0,e.jsx)("div",{className:"cursor-pointer",onClick:a,children:(0,e.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,e.jsx)("div",{className:"dialog-body",children:n}),r.length>0&&(0,e.jsx)("div",{className:"dialog-footer",children:r.map((e=>e))})]})})},m=(a.p,({children:t,className:s,color:a="primary",disabled:n,onClick:r})=>(0,e.jsx)("button",{className:l()("button-flow",s,a),disabled:n,onClick:r,children:t}));a.p;const f=({node:s,level:a=0,onSelect:n,selected:r})=>{const[o,i]=(0,t.useState)([]);return(0,t.useEffect)((()=>{const e=r.split(".");e.length>0&&i(o.concat(e))}),[r]),(0,e.jsx)("div",{className:"tree-node",children:Object.keys(s).map((t=>{const c=Array.isArray(s[t])?s[t].length>0:"object"==typeof s[t]&&null!==s[t],d=r===t,u=r.split(".").length>1?r.split(".").filter(((e,t)=>0!==t)).join("."):r;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:l()("tree-row",{selected:d}),onClick:()=>(e=>{n(e)})(t),children:(0,e.jsxs)("div",{className:"tree-text",style:{paddingLeft:c?20*a:20*a+10},onClick:()=>(e=>{o.includes(e)?i(o.filter((t=>t!==e))):i([...o,e])})(t),children:[c&&(0,e.jsx)("i",{className:"mdi mdi-menu-"+(o.includes(t)?"down":"right")}),(0,e.jsx)("span",{children:t})]})},t),c&&o.includes(t)&&(0,e.jsx)(f,{node:s[t],level:a+1,onSelect:e=>n(`${t}.${e}`),selected:u})]})}))})},h=({className:s,isOpen:a,selected:n,position:r,items:o,onSelected:i,onClose:c})=>{const[d,u]=(0,t.useState)(""),[h,b]=(0,t.useState)(""),[g,x]=(0,t.useState)(o),[y,j]=(0,t.useState)({top:200});return(0,t.useEffect)((()=>{const e=t=>Object.keys(t).reduce(((s,l)=>{if("object"==typeof t[l]){if(!l)return s;if(0===Object.keys(t[l]).length)return s[l]="",s;t[l].type?s[l]=t[l].type:s[l]=e(t[l])}else s[l]=t[l];return s}),{});if(!o)return;const t=e(o);x(JSON.parse(JSON.stringify(t))),u("")}),[o]),(0,t.useEffect)((()=>{n&&u(n)}),[n]),(0,t.useEffect)((()=>{r&&j(r)}),[r]),(0,e.jsx)("div",{className:l()("picker",s),children:(0,e.jsx)(v,{title:"Picker",position:y,isOpen:a,onClose:()=>c(),children:(0,e.jsxs)("div",{children:[(0,e.jsx)(p,{className:"mb-3",placeholder:"Search",value:h,onChange:e=>b(e)}),(0,e.jsx)("div",{className:"tree",children:(0,e.jsx)(f,{node:(e=>{const t=s=>Object.keys(s).reduce(((l,a)=>{if(a.toLowerCase().includes(e.toLowerCase())&&(l[a]=s[a]),Array.isArray(s[a])){const t=s[a].filter((t=>"string"==typeof t&&t.toLowerCase().includes(e.toLowerCase())));t.length>0&&(l[a]=t)}if("object"==typeof s[a]&&null!==s[a]){const e=t(s[a]);Object.keys(e).length>0&&(l[a]=e)}return l}),{});return g?t(g):{}})(h),selected:d,onSelect:e=>{u(e)}})}),(0,e.jsxs)("div",{className:"d-flex justify-content-end mt-3",children:[(0,e.jsx)(m,{color:"secondary",className:"px-2",onClick:()=>c(),children:"Cancel"}),(0,e.jsx)(m,{className:"ms-3 px-2",disabled:!d,onClick:()=>{i(d),c()},children:"SELECT"})]})]})})})},b=({label:s,className:l,types:a,expression:n,disabled:r,constantsOptions:o,store:i,onChange:c,onBlur:d})=>{const[v,m]=(0,t.useState)([]),[f,b]=(0,t.useState)(a[0]),[g,x]=(0,t.useState)(""),[y,j]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{b(n.type),x(n.value)}),[n]),(0,t.useEffect)((()=>{m(a.map((e=>({name:e,value:e}))))}),[a]),(0,e.jsxs)("div",{className:`expression-flow ${l||""}`,children:[(0,e.jsx)(u,{label:s,options:v,disabled:r||y,value:f,onChange:e=>{null==c||c({value:"",type:e}),null==d||d({value:"",type:e})}}),(0,e.jsxs)("div",{className:"d-flex align-items-center mt-2",children:["constant"===f?(0,e.jsx)(u,{className:"w-100",options:o||[],value:g,disabled:r||y,onChange:e=>{null==c||c({type:f,value:e}),null==d||d({type:f,value:e}),x(e)}}):(0,e.jsx)(p,{className:"w-100",value:g,onChange:e=>{null==c||c({type:f,value:e}),x(e)},disabled:r||y,onBlur:e=>null==d?void 0:d({type:f,value:e.target.value})}),["context","input","output"].includes(f)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"ms-2",onClick:e=>{r||j(!0)},children:(0,e.jsx)("i",{className:g?"mdi mdi-database":"mdi mdi-database-outline"})}),(0,e.jsx)(h,{isOpen:y,items:i[f],onClose:()=>j(!1),selected:g,onSelected:e=>{null==c||c({type:f,value:e}),null==d||d({type:f,value:e}),x(e)}})]})]})]})},g=(a.p,s=>{var l;const[a,n]=(0,t.useState)(!1),r=(0,t.useRef)(null);return i(r,(()=>n(!1))),(0,e.jsxs)("div",{className:"dropdown-flow",ref:r,children:[(0,e.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),n(!a)},children:s.iconClass&&(0,e.jsx)("i",{className:s.iconClass})}),(0,e.jsx)("ul",{className:"py-3",style:{display:a?"block":"none"},children:null===(l=s.options)||void 0===l?void 0:l.map((t=>(0,e.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:e=>{n(!1),t.onClick(e)},children:t.name},t.name)))})]})}),x=s=>{const[l,a]=(0,t.useState)(s.label.value||"");return(0,t.useEffect)((()=>{a(s.label.value||"")}),[s.label]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r,{label:s.collapsibleLabel||"NAME",children:(0,e.jsx)(p,{disabled:s.disabled,className:"w-100",value:l,onChange:e=>{a(e),s.onChangeLabel({type:"string",value:e})}})})})};function y(e){return null==e?void 0:e.toLowerCase().replace(/[^a-zA-Z0-9:_]+(.)/g,((e,t)=>t.toUpperCase()))}function j(e){return{vType:"case",v:{left:{vType:"variable",v:{type:"string",value:""}},operator:"eq",right:{vType:"variable",v:{type:"string",value:""}}},props:{name:`Case ${e}`,_name:`case${e}`}}}const N={name:"switch",panelLabel:"Decision",version:"0.8",color:"#9C27B0",icon:"mdi-rhombus-outline",inputs:[{name:"_"}],outputs:e=>Object.keys((null==e?void 0:e.cases)||{1:{props:{name:"Default",_name:"default"}},2:j(2)}).map((e=>e.toString())),defaultProps:()=>({label:{type:"string",value:"Decision"},type:"switch",name:"switch",description:"Decision",cases:{1:{props:{name:"Default",_name:"default"}},2:j(2)}}),editSection:s=>()=>{const[a,n]=(0,t.useState)(s.propValues.cases),[i,c]=(0,t.useState)(!1),[d,v]=(0,t.useState)("variable"),[m,f]=(0,t.useState)("variable"),[h,N]=(0,t.useState)("eq"),[S,k]=(0,t.useState)({type:"string",value:""}),[w,C]=(0,t.useState)({type:"string",value:""}),[O,E]=(0,t.useState)(void 0),[_,L]=(0,t.useState)(void 0),[T,P]=(0,t.useState)(void 0),[R,A]=(0,t.useState)(""),[D,I]=(0,t.useState)(void 0),[B,$]=(0,t.useState)(void 0),[J,q]=(0,t.useState)(!1),F=(e,t)=>{let s=0;const l=e=>{if(s.toString()===t)return e;if("case"===e.vType){s++;return l(e.v.left)||(s++,l(e.v.right))}};return l(e)};(0,t.useEffect)((()=>{var e,t;const l=null===(t=(e=s.callbacks).selectedSwitchCase)||void 0===t?void 0:t.call(e,(e=>{M(e)}));M(l)}),[]);const M=e=>{var t,s;if(L(null==e?void 0:e.caseId),e&&(E(e.stepId),e.stepId&&e.case)){const l=F(e.case,e.stepId);l&&"case"===l.vType?(q(!1),c(l.negation||!1),v(l.v.left.vType),f(l.v.right.vType),N(l.v.operator),k(l.v.left.v),I(null===(t=l.v.left.props)||void 0===t?void 0:t.name),C(l.v.right.v),$(null===(s=l.v.right.props)||void 0===s?void 0:s.name)):q(!0)}};(0,t.useEffect)((()=>{n(s.propValues.cases)}),[s.propValues.cases]);const H=["case","variable"].map((e=>({name:e,value:e}))),V=(e,t)=>{const s=JSON.parse(JSON.stringify(a)),l=F(s[_],O);if(l&&"case"===l.vType){switch(e){case"leftprops":l.v.left.props={name:t,_name:y(t)};break;case"rightprops":l.v.right.props={name:t,_name:y(t)};break;case"negation":l.negation=t;break;case"leftvType":l.v.left.vType=t,"variable"===t?l.v.left.v={type:"string",value:""}:l.v.left=j(1);break;case"rightvType":l.v.right.vType=t,"variable"===t?l.v.right.v={type:"string",value:""}:l.v.right=j(2);break;case"left":l.v.left.v=t;break;case"right":l.v.right.v=t;break;case"operator":l.v.operator=t}z(s)}},z=e=>{var t,l;s.callbacks.setProp("cases",e),n(e),null===(l=(t=s.callbacks).setSwitchArea)||void 0===l||l.call(t,{case:e[_],caseId:_})},U=()=>{let e=JSON.parse(JSON.stringify(a));e[T].props.name=R,e[T].props._name=y(R),s.callbacks.setOutputs(Object.keys(e).map((e=>e.toString()))),P(void 0),A(""),z(e)},G=["&& And","|| Or","== Equals","!= Not Equal","Includes","Not Include","> Greater Than",">= Greater Than and Equal","< Less Than","<= Less Than and Equal"],X=["and","or","eq","ne","in","nin","gt","gte","lt","lte"].map(((e,t)=>({name:G[t],value:e})));return(0,e.jsx)("div",{children:J?(0,e.jsx)(e.Fragment,{}):_&&O?(0,e.jsxs)(r,{label:"PROPERTIES",children:[(0,e.jsx)(o,{disabled:s.callbacks.readOnly,className:"w-100",label:"Negation",value:i,onChange:e=>{c(e),V("negation",e)}}),(0,e.jsx)(u,{disabled:s.callbacks.readOnly,className:"mt-3",label:"Left",value:d,onChange:e=>{v(e),V("leftvType",e)},options:H}),"variable"===d?(0,e.jsx)(b,{disabled:s.callbacks.readOnly,className:"mt-3",store:s.callbacks.nestedStore,expression:S,onBlur:e=>{k(e),V("left",e)},types:["string","number","boolean","context","input","output"]}):(0,e.jsx)(p,{disabled:s.callbacks.readOnly,className:"mt-3",value:D||"",onChange:e=>{I(e),V("leftprops",e)}}),(0,e.jsx)(u,{disabled:s.callbacks.readOnly,className:"mt-3",label:"Operator",value:h,onChange:e=>{N(e),V("operator",e)},options:X}),(0,e.jsx)(u,{disabled:s.callbacks.readOnly,className:"mt-3",label:"Right",value:m,onChange:e=>{f(e),V("rightvType",e)},options:H}),"variable"===m?(0,e.jsx)(b,{disabled:s.callbacks.readOnly,className:"mt-3",store:s.callbacks.nestedStore,expression:w,onBlur:e=>{C(e),V("right",e)},types:["string","number","boolean","context","input","output"]}):(0,e.jsx)(p,{disabled:s.callbacks.readOnly,className:"mt-3",value:B||"",onChange:e=>{$(e),V("rightprops",e)}})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x,{disabled:s.callbacks.readOnly,label:s.propValues.label,description:s.propValues.description,onChangeLabel:e=>s.callbacks.setProp("label",e),onChangeDescription:e=>s.callbacks.setProp("description",e)}),(0,e.jsx)(r,{label:"CASES",onAddButton:()=>{let e=JSON.parse(JSON.stringify(a));const t=(Math.max(...Object.keys(e).map((e=>parseInt(e))))+1).toString(),l={[t]:j(parseInt(t))};e={...e,...l},s.callbacks.setOutputs(Object.keys(e).map((e=>e.toString()))),z(e)},children:Object.keys(a||{}).filter(((e,t)=>0!==t)).map(((t,n)=>{var r,o;return(0,e.jsxs)("li",{className:l()("d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer",{"vertical-line":Object.keys(a||{}).length-1!==n}),onClick:()=>((e,t)=>{var l,a;L(t),null===(a=(l=s.callbacks).setSwitchArea)||void 0===a||a.call(l,{case:e,caseId:t})})(a[t],t),children:[(0,e.jsx)("p",{hidden:T===t,children:(null===(r=a[t].props)||void 0===r?void 0:r.name)||`Case ${t}`}),(0,e.jsx)("li",{hidden:T!==t,children:(0,e.jsx)(p,{className:"mt-3",value:(null===(o=a[t].props)||void 0===o?void 0:o.name)||`Case ${t}`,onChange:e=>A(e),onBlur:U})}),(0,e.jsx)(g,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Rename",onClick:e=>{e.preventDefault(),e.stopPropagation(),P(t)}},{name:"Delete",onClick:e=>{e.preventDefault(),e.stopPropagation(),(e=>{let t=JSON.parse(JSON.stringify(a));delete t[e],s.callbacks.setOutputs(Object.keys(t).map((e=>e.toString()))),z(t)})(t)}}]})]},`item${n}`)}))})]})})}}})(),n})()));