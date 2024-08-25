/*! For license information please see soapServiceCall_design.js.LICENSE.txt */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],n):"object"==typeof exports?exports.flowcomponent=n(require("react"),require("react-dom")):e.flowcomponent=n(e.react,e["react-dom"])}(this,((e,n)=>(()=>{var t={4645:(e,n,t)=>{"use strict";var l=t(7111);l.createRoot,l.hydrateRoot},6094:(e,n,t)=>{"use strict";var l=t(8156),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var l,s={},c=null,d=null;for(l in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,l)&&!r.hasOwnProperty(l)&&(s[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===s[l]&&(s[l]=n[l]);return{$$typeof:a,type:e,key:c,ref:d,props:s,_owner:o.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},4512:(e,n,t)=>{"use strict";e.exports=t(6094)},8156:n=>{"use strict";n.exports=e},7111:e=>{"use strict";e.exports=n},5685:(e,n)=>{var t;!function(){"use strict";var l={}.hasOwnProperty;function a(){for(var e="",n=0;n<arguments.length;n++){var t=arguments[n];t&&(e=i(e,s(t)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var t in e)l.call(e,t)&&e[t]&&(n=i(n,t));return n}function i(e,n){return n?e?e+" "+n:e+n:e}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(n,[]))||(e.exports=t)}()}},l={};function a(e){var n=l[e];if(void 0!==n)return n.exports;var s=l[e]={exports:{}};return t[e](s,s.exports,a),s.exports}a.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return a.d(n,{a:n}),n},a.d=(e,n)=>{for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var s={};return(()=>{"use strict";a.r(s),a.d(s,{default:()=>P});var e=a(4512),n=a(8156);var t;let l;t={boolean:!0,datetime:!0,enum:!0,number:!0,dataType:!0,string:!0,constant:!0,any:!0},Object.keys(t);const i=l={quick:{modelKeys:{self:"qjson"}},flow:{modelKeys:{design:"flow-design",runtime:"flow-runtime"}},workflow:{modelKeys:{design:"workflow-design",runtime:"workflow-runtime"}},dataTypeEditor:{modelKeys:{single:"dataType"}},serviceEditor:{modelKeys:{single:"restService"}},soapEditor:{modelKeys:{single:"soapService"}},enum:{modelKeys:{single:"enum"}},constantEditor:{modelKeys:{single:"constant"}}};new Error("unimplemented for namedComponent"),new Error("unimplemented for json");const o=()=>c;let r;const c=r={inParamMapping:[],outParamMapping:[]},d=(a.p,a.p,({label:t,isKeepOpen:l=!1,onAddButton:a,children:s})=>{const[i,o]=(0,n.useState)(!0);return(0,e.jsxs)("div",{className:"variables ",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,e.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>o(!i),children:[!l&&(0,e.jsx)("i",{className:"mdi "+(i?"mdi-chevron-down":"mdi-chevron-right")}),(0,e.jsx)("p",{children:t})]}),a&&(0,e.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),a(e)}})]}),(l||i)&&(0,e.jsx)("ul",{className:"variable-list",children:s})]})});var p=a(5685),u=a.n(p);a.p;const m=({isOpen:t,onClose:l,children:a,footer:s=[],title:i,type:o="dialog",position:r})=>{if(!t)return null;const[c,d]=(0,n.useState)({top:0}),p=(0,n.useRef)(null);return(0,n.useEffect)((()=>{var e,n;if(r){const t=window.innerHeight>r.top+((null===(e=p.current)||void 0===e?void 0:e.clientHeight)||0)?r.top:window.innerHeight-((null===(n=p.current)||void 0===n?void 0:n.clientHeight)||0)-10;d({top:t})}}),[r]),(0,e.jsx)("div",{className:u()({overlay:"modal"===o}),children:(0,e.jsxs)("div",{ref:p,className:u()("dialog",{"dialog-monaco":"modal"==o}),style:c,children:["dialog"===o?(0,e.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const n=p.current;if(!n)return;const t=n.getBoundingClientRect(),l=e.clientX-t.left,a=e=>{d({top:e.clientY-10,left:e.clientX-l})},s=()=>{document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",s)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",s)})(e),children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{}),(0,e.jsx)("span",{})]}):(0,e.jsx)("div",{}),(0,e.jsxs)("div",{className:"dialog-header",children:[(0,e.jsx)("h5",{className:"dialog-title m-0",children:i}),(0,e.jsx)("div",{className:"cursor-pointer",onClick:l,children:(0,e.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,e.jsx)("div",{className:"dialog-body",children:a}),s.length>0&&(0,e.jsx)("div",{className:"dialog-footer",children:s.map((e=>e))})]})})};function v(e,t){(0,n.useEffect)((()=>{const n=n=>{const l=null==e?void 0:e.current;l&&!l.contains((null==n?void 0:n.target)||null)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])}a.p;const g=t=>{var l;const[a,s]=(0,n.useState)(!1),i=(0,n.useRef)(null);return v(i,(()=>s(!1))),(0,e.jsxs)("div",{className:"dropdown-flow",ref:i,children:[(0,e.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),s(!a)},children:t.iconClass&&(0,e.jsx)("i",{className:t.iconClass})}),(0,e.jsx)("ul",{className:"py-3",style:{display:a?"block":"none"},children:null===(l=t.options)||void 0===l?void 0:l.map((n=>(0,e.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:e=>{s(!1),n.onClick(e)},children:n.name},n.name)))})]})},f=({collapsibleLabel:t,fields:l,disabledFields:a=[],fieldLabel:s,dialogElements:i,emptyValues:o,isAddible:r=!0,isDeletable:c=!0,isCollabsible:p=!0,createItemLabel:u,dialogTitle:v,maxItemLen:f,disabled:h,onChange:b,validate:y,getFieldLabel:x})=>{const[j,S]=(0,n.useState)([]),[N,C]=(0,n.useState)(!1),[w,k]=(0,n.useState)(0),[P,O]=(0,n.useState)({top:0}),[E,M]=(0,n.useState)(!1),[L,A]=(0,n.useState)("");(0,n.useEffect)((()=>{const e=new Set(a.map((e=>JSON.stringify(e)))),n=l.filter((n=>!e.has(JSON.stringify(n))));S(n)}),[l]);const $=(e,n,t=!1)=>{O({top:e.pageY}),M(t),k(n),y&&A(y(j[n])),C(!0)},_=(e,n,t=s)=>{if(!e)return;if(t.includes(".")){const n=R(t,e);return Array.isArray(n)||"object"!=typeof n?n:n.value?`${n.type}.${n.value}`:`${"name"==s?"Variable ":s}`}const l=e?e[t]:e;return Array.isArray(l)||"object"!=typeof l?l:l.value?`${l.type}.${l.value}`:`${"name"==s?"Variable ":s}`},R=(e,n)=>{if(n)return e.split(".").reduce(((e,n)=>e[n]),n)},I=e=>{S(e),b(JSON.parse(JSON.stringify([...a,...e])))};function V(e,n){const t=[...j];((e,n,t)=>{const l=n.split("."),a=l.pop();l.reduce(((e,n)=>e[n]),e)[a]=t})(t[w],e,n),I(t),y&&A(y(t[w]))}const D=e=>{if(h)return;if(void 0!==f&&j.length>=f)return;const n=[...j],t=JSON.parse(JSON.stringify(o));Object.keys(t).forEach((e=>{if("name"==e)t[e]=""==t[e]?`Variable ${(n.length+1).toString()}`:t[e];else if("object"==typeof t[e]&&t[e].hasOwnProperty("value")){let l=t[e].value;l=""==l?s+" "+(n.length+1).toString():l,t[e].value=l}})),n.push(t),I(n),e&&O({top:e.pageY}),k(n.indexOf(t)),C(!0)},F=(e,n)=>{var t;const l={true:a,false:j};h&&(l[E.toString()]={...a,...j});const s=null===(t=l[E.toString()])||void 0===t?void 0:t[w];return{Expression:{expression:(null==s?void 0:s[n])||{type:"string",value:""},onBlur:e=>{V(n,e)}},Checkbox:{checked:_(s,0,n)||!1,onChange:e=>{V(n,e)}},Select:{value:_(s,0,n)||"",onChange:e=>{V(n,e)}},Input:{value:_(s,0,n)||"",onChange:e=>{V(n,e)}},MultiSelect:{values:_(s,0,n)||[],onChange:e=>{V(n,e)}},Mapping:{mapping:R(n,s)||{inParamMapping:{},outParamMapping:{}},onChangeInParamMapping:e=>{V(n+".inParamMapping",e)},onChangeOutParamMapping:e=>{V(n+".outParamMapping",e)}}}[e]||{value:(null==s?void 0:s[n])||"",onChange:e=>{V(n,e)}}};return(0,e.jsx)(e.Fragment,{children:0==(null==j?void 0:j.length)&&0==a.length&&r?(0,e.jsxs)("div",{className:"dynamic-field-create vertical-line cursor-pointer",onClick:e=>D(e),children:[(0,e.jsx)("p",{children:u}),void 0===f||void 0!==f&&j.length<f?(0,e.jsx)("i",{className:"mdi mdi-plus"}):(0,e.jsx)(e.Fragment,{})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(d,{label:t,isKeepOpen:!p,...(()=>{if(r&&!(void 0!==f&&j.length>=f))return{onAddButton:D}})(),children:[null==a?void 0:a.map(((n,t)=>(0,e.jsx)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==t&&"vertical-line"}`,onClick:e=>$(e,t,!0),children:(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==x?void 0:x(n))||_(n)||`${"name"==s?"Variable ":s} ${t+1}`})},`item${t}`))),null==j?void 0:j.map(((n,t)=>(0,e.jsxs)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==t&&"vertical-line"}`,onClick:e=>$(e,t,h),children:[(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==x?void 0:x(n))||_(n)||`${"name"==s?"Variable ":s} ${t+1}`}),c&&(0,e.jsx)(g,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Delete",onClick:e=>{((e,n)=>{e.preventDefault(),e.stopPropagation(),I([...j].filter(((e,t)=>t!=n))),C(!1)})(e,t)}}]})]},`item${t}`)))]}),(0,e.jsxs)(m,{isOpen:N,title:v,onClose:()=>(C(!1),void A("")),position:P,children:[(0,e.jsxs)("p",{style:{color:"red",display:""===L?"none":""},children:["$",L]}),i.map(((n,t)=>{var l,s;if((E||!n.isRendered||(null===(l=null==n?void 0:n.isRendered)||void 0===l?void 0:l.call(n,j[w])))&&(!E||!n.isRendered||(null===(s=null==n?void 0:n.isRendered)||void 0===s?void 0:s.call(n,a[w]))))return(0,e.jsx)(n.component,{...F(n.componentName,n.key),disabled:E,...n.props,children:n.children},n.key)}))]})]})})};function h(e){return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}function b(e){const t=(0,n.useSyncExternalStore)(h,(()=>function(e){var n,t,l,a,s;const i=null===(n=e.current)||void 0===n?void 0:n.getBoundingClientRect();return JSON.stringify({width:null!==(t=null==i?void 0:i.width)&&void 0!==t?t:0,height:null!==(l=null==i?void 0:i.height)&&void 0!==l?l:0,top:null!==(a=null==i?void 0:i.top)&&void 0!==a?a:0,left:null!==(s=null==i?void 0:i.left)&&void 0!==s?s:0})}(e)));return(0,n.useMemo)((()=>JSON.parse(t)),[t])}a.p,a.p;const y=({label:t,options:l=[],className:a,placeholder:s,value:i,disabled:o,onChange:r})=>{const[c,d]=(0,n.useState)(!1),[p,u]=(0,n.useState)(i),[m,g]=(0,n.useState)([]),f=(0,n.useRef)(null),h=(0,n.useRef)(null),y=(0,n.useRef)(null),{width:x,top:j,left:S,height:N}=b(h),{height:C}=b(y);return v(f,(()=>d(!1))),(0,n.useEffect)((()=>{const e=m.find((e=>e.value===i));e?u(e.name):i||u("")}),[i,m]),(0,n.useEffect)((()=>{g(l)}),[l]),(0,e.jsxs)("div",{className:`select-flow position-relative ${a||""}`,children:[t&&(0,e.jsx)("label",{className:"d-block ellipsis-text p-0",children:t}),(0,e.jsxs)("div",{ref:f,children:[(0,e.jsxs)("div",{className:"input",ref:h,onClick:()=>{o||d(!c)},style:{cursor:o?"not-allowed":"default",opacity:o?"0.6":"1"},children:[(0,e.jsx)("input",{className:"w-100 ellipsis-text",placeholder:s,value:p,onChange:()=>{}}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",ref:y,style:{display:c?"block":"none",pointerEvents:o?"none":"all",...(()=>{const e=window.innerHeight;return j+N+5+C>e?{top:j-C-5,left:S,width:x}:{top:j+N+5,left:S,width:x}})()},children:(0,e.jsx)("ul",{children:l.map((n=>(0,e.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>n.value!=p?(e=>{r(e.value),d(!1)})(n):d(!1),children:n.name},n.value)))})})]})]})},x=(a.p,({label:t,className:l,placeholder:a,value:s,disabled:i,isDigit:o=!1,onChange:r,onBlur:c})=>{const[d,p]=(0,n.useState)(s);return(0,n.useEffect)((()=>{p(s)}),[s]),(0,e.jsxs)("div",{className:`input-flow ${l||""}`,children:[t&&(0,e.jsx)("label",{className:"d-block p-0",children:t}),(0,e.jsx)("input",{className:"w-100",placeholder:a,value:d,onChange:e=>{const n=e.target.value;o&&!new RegExp(/^\d+$/).test(n)||(null==r||r(n),p(n))},onBlur:c,disabled:i})]})});a(4645),a.p;const j=({children:n,className:t,color:l="primary",disabled:a,onClick:s})=>(0,e.jsx)("button",{className:u()("button-flow",t,l),disabled:a,onClick:s,children:n});a.p;const S=({node:t,level:l=0,onSelect:a,selected:s})=>{const[i,o]=(0,n.useState)([]);return(0,n.useEffect)((()=>{const e=s.split(".");e.length>0&&o(i.concat(e))}),[s]),(0,e.jsx)("div",{className:"tree-node",children:Object.keys(t).map((n=>{const r=Array.isArray(t[n])?t[n].length>0:"object"==typeof t[n]&&null!==t[n],c=s===n,d=s.split(".").length>1?s.split(".").filter(((e,n)=>0!==n)).join("."):s;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:u()("tree-row",{selected:c}),onClick:()=>(e=>{a(e)})(n),children:(0,e.jsxs)("div",{className:"tree-text",style:{paddingLeft:r?20*l:20*l+10},onClick:()=>(e=>{i.includes(e)?o(i.filter((n=>n!==e))):o([...i,e])})(n),children:[r&&(0,e.jsx)("i",{className:"mdi mdi-menu-"+(i.includes(n)?"down":"right")}),(0,e.jsx)("span",{children:n})]})},n),r&&i.includes(n)&&(0,e.jsx)(S,{node:t[n],level:l+1,onSelect:e=>a(`${n}.${e}`),selected:d})]})}))})},N=({className:t,isOpen:l,selected:a,position:s,items:i,onSelected:o,onClose:r})=>{const[c,d]=(0,n.useState)(""),[p,v]=(0,n.useState)(""),[g,f]=(0,n.useState)(i),[h,b]=(0,n.useState)({top:200});return(0,n.useEffect)((()=>{const e=n=>Object.keys(n).reduce(((t,l)=>{if("object"==typeof n[l]){if(!l)return t;if(0===Object.keys(n[l]).length)return t[l]="",t;n[l].type?t[l]=n[l].type:t[l]=e(n[l])}else t[l]=n[l];return t}),{});if(!i)return;const n=e(i);f(JSON.parse(JSON.stringify(n))),d("")}),[i]),(0,n.useEffect)((()=>{a&&d(a)}),[a]),(0,n.useEffect)((()=>{s&&b(s)}),[s]),(0,e.jsx)("div",{className:u()("picker",t),children:(0,e.jsx)(m,{title:"Picker",position:h,isOpen:l,onClose:()=>r(),children:(0,e.jsxs)("div",{children:[(0,e.jsx)(x,{className:"mb-3",placeholder:"Search",value:p,onChange:e=>v(e)}),(0,e.jsx)("div",{className:"tree",children:(0,e.jsx)(S,{node:(e=>{const n=t=>Object.keys(t).reduce(((l,a)=>{if(a.toLowerCase().includes(e.toLowerCase())&&(l[a]=t[a]),Array.isArray(t[a])){const n=t[a].filter((n=>"string"==typeof n&&n.toLowerCase().includes(e.toLowerCase())));n.length>0&&(l[a]=n)}if("object"==typeof t[a]&&null!==t[a]){const e=n(t[a]);Object.keys(e).length>0&&(l[a]=e)}return l}),{});return g?n(g):{}})(p),selected:c,onSelect:e=>{d(e)}})}),(0,e.jsxs)("div",{className:"d-flex justify-content-end mt-3",children:[(0,e.jsx)(j,{color:"secondary",className:"px-2",onClick:()=>r(),children:"Cancel"}),(0,e.jsx)(j,{className:"ms-3 px-2",disabled:!c,onClick:()=>{o(c),r()},children:"SELECT"})]})]})})})},C=({label:t,className:l,types:a,expression:s,disabled:i,constantsOptions:o,store:r,onChange:c,onBlur:d})=>{const[p,u]=(0,n.useState)([]),[m,v]=(0,n.useState)(a[0]),[g,f]=(0,n.useState)(""),[h,b]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{v(s.type),f(s.value)}),[s]),(0,n.useEffect)((()=>{u(a.map((e=>({name:e,value:e}))))}),[a]),(0,e.jsxs)("div",{className:`expression-flow ${l||""}`,children:[(0,e.jsx)(y,{label:t,options:p,disabled:i||h,value:m,onChange:e=>{null==c||c({value:"",type:e}),null==d||d({value:"",type:e})}}),(0,e.jsxs)("div",{className:"d-flex align-items-center mt-2",children:["constant"===m?(0,e.jsx)(y,{className:"w-100",options:o||[],value:g,disabled:i||h,onChange:e=>{null==c||c({type:m,value:e}),null==d||d({type:m,value:e}),f(e)}}):(0,e.jsx)(x,{className:"w-100",value:g,onChange:e=>{null==c||c({type:m,value:e}),f(e)},disabled:i||h,onBlur:e=>null==d?void 0:d({type:m,value:e.target.value})}),["context","input","output","vars"].includes(m)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"ms-2",onClick:e=>{i||b(!0)},children:(0,e.jsx)("i",{className:g?"mdi mdi-database":"mdi mdi-database-outline"})}),(0,e.jsx)(N,{isOpen:h,items:r[m],onClose:()=>b(!1),selected:g,onSelected:e=>{null==c||c({type:m,value:e}),null==d||d({type:m,value:e}),f(e)}})]})]})]})},w=({mapping:t,mappingSchema:l,outerStore:a,constantsOptions:s,readOnly:i,onChangeInParamMapping:o,onChangeOutParamMapping:r})=>{const[c,d]=(0,n.useState)((null==t?void 0:t.inParamMapping)||[]),[p,u]=(0,n.useState)((null==t?void 0:t.outParamMapping)||[]),m=["input","context","string","number","boolean","constant",a.vars&&"vars"],v=[!a.vars&&"context","output",a.vars&&"vars"];(0,n.useEffect)((()=>{d((null==t?void 0:t.inParamMapping)||[])}),[null==t?void 0:t.inParamMapping]),(0,n.useEffect)((()=>{u((null==t?void 0:t.outParamMapping)||[])}),[null==t?void 0:t.outParamMapping]);const g=[{component:C,componentName:"Expression",key:"mapping",props:{label:"Assignment",types:m,store:a,constantsOptions:s}}],h=[{component:C,componentName:"Expression",key:"mapping",props:{label:"Assignment",types:v,store:a}}];function b(e){return e&&e.mapping&&e.mapping.value&&("string"===e.mapping.type||""!==e.mapping.value)?"":"Mapping Not Assigned"}return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(f,{disabled:i,emptyValues:{variable:{type:"input",value:""},mapping:{type:"string",value:""}},dialogTitle:"Assign To",getFieldLabel:e=>e.variable.value,fields:c,disabledFields:l.inParamMapping,fieldLabel:"Variable",collapsibleLabel:"IN VARIABLES MAPPING",isAddible:!1,dialogElements:g,onChange:e=>{d(e),o(e)},validate:b}),(0,e.jsx)(f,{disabled:i,emptyValues:{variable:{type:"output",value:""},mapping:{type:"context",value:""}},dialogTitle:"Assign To",fields:p,disabledFields:l.outParamMapping,fieldLabel:"Variable",getFieldLabel:e=>e.variable.value,collapsibleLabel:"OUT VARIABLES MAPPING",isAddible:!1,dialogElements:h,onChange:e=>{u(e),r(e)},validate:b})]})},k=t=>{const[l,a]=(0,n.useState)(t.label.value||"");return(0,n.useEffect)((()=>{a(t.label.value||"")}),[t.label]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(d,{label:t.collapsibleLabel||"NAME",children:(0,e.jsx)(x,{disabled:t.disabled,className:"w-100",value:l,onChange:e=>{a(e),t.onChangeLabel({type:"string",value:e})}})})})},P={name:"soapServiceCall",panelLabel:"SOAP Service",version:"0.8",color:"#CDDC39",icon:"mdi-api",inputs:[{name:"_"}],outputs:["_"],defaultProps:()=>({label:{type:"string",value:"Soap Service"},description:"Soap Service",type:"referenced",id:"",version:"",mapping:structuredClone(o())}),editSection:t=>()=>{var l,a;const[s,r]=(0,n.useState)([]),[c,p]=(0,n.useState)(t.propValues.id||""),[u,m]=(0,n.useState)([]),[v,g]=(0,n.useState)((null===(l=t.propValues.mapping)||void 0===l?void 0:l.inParamMapping)||[]),[f,h]=(0,n.useState)((null===(a=t.propValues.mapping)||void 0===a?void 0:a.outParamMapping)||[]),[b,x]=(0,n.useState)(t.propValues.description||"Soap Service"),[j,S]=(0,n.useState)(t.callbacks.scope.getStore());return(0,n.useEffect)((()=>{(async()=>{var e,n;const l=await(null===(n=null===(e=t.callbacks.ui)||void 0===e?void 0:e.getModels)||void 0===n?void 0:n.call(e,"soapService"))||[];m(l);const a=l.map((e=>({name:e.name,value:e.ID})));r(a)})()}),[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(k,{disabled:t.callbacks.readOnly,label:t.propValues.label,description:t.propValues.description,onChangeLabel:e=>t.callbacks.setProp("label",e),onChangeDescription:e=>t.callbacks.setProp("description",e)}),(0,e.jsx)(d,{label:"PROPERTIES",children:(0,e.jsx)(y,{disabled:t.callbacks.readOnly,label:"SoapService",className:"mt-2",options:s,value:c,onChange:e=>(e=>{var n,l;p(e);const a=u.find((n=>n.ID==e));a&&(t.callbacks.setProp("id",a.ID),null===(l=null===(n=t.callbacks.ui)||void 0===n?void 0:n.getModelBody)||void 0===l||l.call(n,a.ID,i.soapEditor.modelKeys.single).then((e=>{if(e){const n=Object.values(e.store.input).map((e=>({variable:{type:"input",value:e._name},mapping:{type:"string",value:""}}))),l=Object.values(e.store.output).map((e=>({variable:{type:"output",value:e._name},mapping:{type:"output",value:""}})));g(n),h(l),t.callbacks.setProp("mapping",{inParamMapping:n,outParamMapping:l,props:{}})}})))})(e)})}),(0,e.jsx)(w,{readOnly:t.callbacks.readOnly,mapping:{inParamMapping:v,outParamMapping:f},mappingSchema:structuredClone(o()),outerStore:t.callbacks.nestedStore,onChangeInParamMapping:e=>{g(e),t.callbacks.setProp("mapping",{inParamMapping:e,outParamMapping:f,props:{}})},onChangeOutParamMapping:e=>{h(e),t.callbacks.setProp("mapping",{inParamMapping:v,outParamMapping:e,props:{}})}})]})}}})(),s})()));