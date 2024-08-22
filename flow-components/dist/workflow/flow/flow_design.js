/*! For license information please see flow_design.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.flowcomponent=t(require("react"),require("react-dom")):e.flowcomponent=t(e.react,e["react-dom"])}(this,((e,t)=>(()=>{var n={4645:(e,t,n)=>{"use strict";var a=n(7111);a.createRoot,a.hydrateRoot},6094:(e,t,n)=>{"use strict";var a=n(8156),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,i={},c=null,u=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,a)&&!r.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:s,type:e,key:c,ref:u,props:i,_owner:o.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},4512:(e,t,n)=>{"use strict";e.exports=n(6094)},8156:t=>{"use strict";t.exports=e},7111:e=>{"use strict";e.exports=t},5685:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=l(e,i(n)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)a.call(e,n)&&e[n]&&(t=l(t,n));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}},a={};function s(e){var t=a[e];if(void 0!==t)return t.exports;var i=a[e]={exports:{}};return n[e](i,i.exports,s),i.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var i={};return(()=>{"use strict";s.r(i),s.d(i,{default:()=>M});var e=s(4512),t=s(8156);let n=!1;new Promise((e=>e())).then((()=>n=!0)),"undefined"!=typeof doNothing&&doNothing();const a=!0===n;async function l(e){const t=await fetch(e);return await t.text()}const o=()=>c;let r;const c=r={context:{currentUser:{type:"dataType",objectID:"",name:"user",_name:"user",desc:"user",list:!1,required:!0},vars:{}},input:{dataInstance:{type:"dataType",objectID:"",name:"Data Instance",_name:"dataInstance",desc:"Data Instance"},processInstance:{type:"dataType",objectID:"",name:"Process Instance",_name:"processInstance",desc:"Process Instance",list:!1,required:!0}},output:{dataInstance:{type:"dataType",objectID:"",name:"Data Instance",_name:"dataInstance",desc:"Data Instance",default:{type:"input",value:"dataInstance"}},processInstance:{type:"dataType",objectID:"",name:"Process Instance",_name:"processInstance",desc:"Process Instance",list:!1,required:!0,default:{type:"input",value:"processInstance"}}},props:{insert:["context.vars","input","output"]}},u=()=>d;let p;const d=p={inParamMapping:[{mapping:{type:"context",value:"dataInstance"},variable:{type:"input",value:"dataInstance"}},{mapping:{type:"context",value:"processInstance"},variable:{type:"input",value:"processInstance"}}],outParamMapping:[{mapping:{type:"context",value:"dataInstance"},variable:{type:"output",value:"dataInstance"}},{mapping:{type:"context",value:"processInstance"},variable:{type:"output",value:"processInstance"}}]},m=(s.p,s.p,({label:n,isKeepOpen:a=!1,onAddButton:s,children:i})=>{const[l,o]=(0,t.useState)(!0);return(0,e.jsxs)("div",{className:"variables ",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,e.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>o(!l),children:[!a&&(0,e.jsx)("i",{className:"mdi "+(l?"mdi-chevron-down":"mdi-chevron-right")}),(0,e.jsx)("p",{children:n})]}),s&&(0,e.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),s(e)}})]}),(a||l)&&(0,e.jsx)("ul",{className:"variable-list",children:i})]})});var v=s(5685),f=s.n(v);s.p;const g=({isOpen:n,onClose:a,children:s,footer:i=[],title:l,type:o="dialog",position:r})=>{if(!n)return null;const[c,u]=(0,t.useState)({top:0}),p=(0,t.useRef)(null);return(0,t.useEffect)((()=>{var e,t;if(r){const n=window.innerHeight>r.top+((null===(e=p.current)||void 0===e?void 0:e.clientHeight)||0)?r.top:window.innerHeight-((null===(t=p.current)||void 0===t?void 0:t.clientHeight)||0)-10;u({top:n})}}),[r]),(0,e.jsx)("div",{className:f()({overlay:"modal"===o}),children:(0,e.jsxs)("div",{ref:p,className:f()("dialog",{"dialog-monaco":"modal"==o}),style:c,children:["dialog"===o?(0,e.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const t=p.current;if(!t)return;const n=t.getBoundingClientRect(),a=e.clientX-n.left,s=e=>{u({top:e.clientY-10,left:e.clientX-a})},i=()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",i)})(e),children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{}),(0,e.jsx)("span",{})]}):(0,e.jsx)("div",{}),(0,e.jsxs)("div",{className:"dialog-header",children:[(0,e.jsx)("h5",{className:"dialog-title m-0",children:l}),(0,e.jsx)("div",{className:"cursor-pointer",onClick:a,children:(0,e.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,e.jsx)("div",{className:"dialog-body",children:s}),i.length>0&&(0,e.jsx)("div",{className:"dialog-footer",children:i.map((e=>e))})]})})};function b(e,n){(0,t.useEffect)((()=>{const t=t=>{const a=null==e?void 0:e.current;a&&!a.contains((null==t?void 0:t.target)||null)&&n(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}),[e,n])}s.p;const h=n=>{var a;const[s,i]=(0,t.useState)(!1),l=(0,t.useRef)(null);return b(l,(()=>i(!1))),(0,e.jsxs)("div",{className:"dropdown-flow",ref:l,children:[(0,e.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),i(!s)},children:n.iconClass&&(0,e.jsx)("i",{className:n.iconClass})}),(0,e.jsx)("ul",{className:"py-3",style:{display:s?"block":"none"},children:null===(a=n.options)||void 0===a?void 0:a.map((t=>(0,e.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:e=>{i(!1),t.onClick(e)},children:t.name},t.name)))})]})},y=({collapsibleLabel:n,fields:a,disabledFields:s=[],fieldLabel:i,dialogElements:l,emptyValues:o,isAddible:r=!0,isDeletable:c=!0,isCollabsible:u=!0,createItemLabel:p,dialogTitle:d,maxItemLen:v,disabled:f,onChange:b,validate:y,getFieldLabel:x})=>{const[j,w]=(0,t.useState)([]),[I,S]=(0,t.useState)(!1),[N,C]=(0,t.useState)(0),[P,k]=(0,t.useState)({top:0}),[E,M]=(0,t.useState)(!1),[O,D]=(0,t.useState)("");(0,t.useEffect)((()=>{const e=new Set(s.map((e=>JSON.stringify(e)))),t=a.filter((t=>!e.has(JSON.stringify(t))));w(t)}),[a]);const L=(e,t,n=!1)=>{k({top:e.pageY}),M(n),C(t),y&&D(y(j[t])),S(!0)},_=(e,t,n=i)=>{if(!e)return;if(n.includes(".")){const t=$(n,e);return Array.isArray(t)||"object"!=typeof t?t:t.value?`${t.type}.${t.value}`:`${"name"==i?"Variable ":i}`}const a=e?e[n]:e;return Array.isArray(a)||"object"!=typeof a?a:a.value?`${a.type}.${a.value}`:`${"name"==i?"Variable ":i}`},$=(e,t)=>{if(t)return e.split(".").reduce(((e,t)=>e[t]),t)},A=e=>{w(e),b(JSON.parse(JSON.stringify([...s,...e])))};function R(e,t){const n=[...j];((e,t,n)=>{const a=t.split("."),s=a.pop();a.reduce(((e,t)=>e[t]),e)[s]=n})(n[N],e,t),A(n),y&&D(y(n[N]))}const F=e=>{if(f)return;if(void 0!==v&&j.length>=v)return;const t=[...j],n=JSON.parse(JSON.stringify(o));Object.keys(n).forEach((e=>{if("name"==e)n[e]=""==n[e]?`Variable ${(t.length+1).toString()}`:n[e];else if("object"==typeof n[e]&&n[e].hasOwnProperty("value")){let a=n[e].value;a=""==a?i+" "+(t.length+1).toString():a,n[e].value=a}})),t.push(n),A(t),e&&k({top:e.pageY}),C(t.indexOf(n)),S(!0)},T=(e,t)=>{var n;const a={true:s,false:j};f&&(a[E.toString()]={...s,...j});const i=null===(n=a[E.toString()])||void 0===n?void 0:n[N];return{Expression:{expression:(null==i?void 0:i[t])||{type:"string",value:""},onBlur:e=>{R(t,e)}},Checkbox:{checked:_(i,0,t)||!1,onChange:e=>{R(t,e)}},Select:{value:_(i,0,t)||"",onChange:e=>{R(t,e)}},Input:{value:_(i,0,t)||"",onChange:e=>{R(t,e)}},MultiSelect:{values:_(i,0,t)||[],onChange:e=>{R(t,e)}},Mapping:{mapping:$(t,i)||{inParamMapping:{},outParamMapping:{}},onChangeInParamMapping:e=>{R(t+".inParamMapping",e)},onChangeOutParamMapping:e=>{R(t+".outParamMapping",e)}}}[e]||{value:(null==i?void 0:i[t])||"",onChange:e=>{R(t,e)}}};return(0,e.jsx)(e.Fragment,{children:0==(null==j?void 0:j.length)&&0==s.length&&r?(0,e.jsxs)("div",{className:"dynamic-field-create vertical-line cursor-pointer",onClick:e=>F(e),children:[(0,e.jsx)("p",{children:p}),void 0===v||void 0!==v&&j.length<v?(0,e.jsx)("i",{className:"mdi mdi-plus"}):(0,e.jsx)(e.Fragment,{})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(m,{label:n,isKeepOpen:!u,...(()=>{if(r&&!(void 0!==v&&j.length>=v))return{onAddButton:F}})(),children:[null==s?void 0:s.map(((t,n)=>(0,e.jsx)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==n&&"vertical-line"}`,onClick:e=>L(e,n,!0),children:(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==x?void 0:x(t))||_(t)||`${"name"==i?"Variable ":i} ${n+1}`})},`item${n}`))),null==j?void 0:j.map(((t,n)=>(0,e.jsxs)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==n&&"vertical-line"}`,onClick:e=>L(e,n,f),children:[(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==x?void 0:x(t))||_(t)||`${"name"==i?"Variable ":i} ${n+1}`}),c&&(0,e.jsx)(h,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Delete",onClick:e=>{((e,t)=>{e.preventDefault(),e.stopPropagation(),A([...j].filter(((e,n)=>n!=t))),S(!1)})(e,n)}}]})]},`item${n}`)))]}),(0,e.jsxs)(g,{isOpen:I,title:d,onClose:()=>(S(!1),void D("")),position:P,children:[(0,e.jsxs)("p",{style:{color:"red",display:""===O?"none":""},children:["$",O]}),l.map(((t,n)=>{var a,i;if((E||!t.isRendered||(null===(a=null==t?void 0:t.isRendered)||void 0===a?void 0:a.call(t,j[N])))&&(!E||!t.isRendered||(null===(i=null==t?void 0:t.isRendered)||void 0===i?void 0:i.call(t,s[N]))))return(0,e.jsx)(t.component,{...T(t.componentName,t.key),disabled:E,...t.props,children:t.children},t.key)}))]})]})})};function x(e){return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}function j(e){const n=(0,t.useSyncExternalStore)(x,(()=>function(e){var t,n,a,s,i;const l=null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect();return JSON.stringify({width:null!==(n=null==l?void 0:l.width)&&void 0!==n?n:0,height:null!==(a=null==l?void 0:l.height)&&void 0!==a?a:0,top:null!==(s=null==l?void 0:l.top)&&void 0!==s?s:0,left:null!==(i=null==l?void 0:l.left)&&void 0!==i?i:0})}(e)));return(0,t.useMemo)((()=>JSON.parse(n)),[n])}s.p,s.p;const w=({label:n,options:a=[],className:s,placeholder:i,value:l,disabled:o,onChange:r})=>{const[c,u]=(0,t.useState)(!1),[p,d]=(0,t.useState)(l),[m,v]=(0,t.useState)([]),f=(0,t.useRef)(null),g=(0,t.useRef)(null),h=(0,t.useRef)(null),{width:y,top:x,left:w,height:I}=j(g),{height:S}=j(h);return b(f,(()=>u(!1))),(0,t.useEffect)((()=>{const e=m.find((e=>e.value===l));e?d(e.name):l||d("")}),[l,m]),(0,t.useEffect)((()=>{v(a)}),[a]),(0,e.jsxs)("div",{className:`select-flow position-relative ${s||""}`,children:[n&&(0,e.jsx)("label",{className:"d-block ellipsis-text p-0",children:n}),(0,e.jsxs)("div",{ref:f,children:[(0,e.jsxs)("div",{className:"input",ref:g,onClick:()=>{o||u(!c)},style:{cursor:o?"not-allowed":"default",opacity:o?"0.6":"1"},children:[(0,e.jsx)("input",{className:"w-100 ellipsis-text",placeholder:i,value:p,onChange:()=>{}}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",ref:h,style:{display:c?"block":"none",pointerEvents:o?"none":"all",...(()=>{const e=window.innerHeight;return x+I+5+S>e?{top:x-S-5,left:w,width:y}:{top:x+I+5,left:w,width:y}})()},children:(0,e.jsx)("ul",{children:a.map((t=>(0,e.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>t.value!=p?(e=>{r(e.value),u(!1)})(t):u(!1),children:t.name},t.value)))})})]})]})},I=(s.p,({label:n,className:a,placeholder:s,value:i,disabled:l,isDigit:o=!1,onChange:r,onBlur:c})=>{const[u,p]=(0,t.useState)(i);return(0,t.useEffect)((()=>{p(i)}),[i]),(0,e.jsxs)("div",{className:`input-flow ${a||""}`,children:[n&&(0,e.jsx)("label",{className:"d-block p-0",children:n}),(0,e.jsx)("input",{className:"w-100",placeholder:s,value:u,onChange:e=>{const t=e.target.value;o&&!new RegExp(/^\d+$/).test(t)||(null==r||r(t),p(t))},onBlur:c,disabled:l})]})});s(4645),s.p;const S=({children:t,className:n,color:a="primary",disabled:s,onClick:i})=>(0,e.jsx)("button",{className:f()("button-flow",n,a),disabled:s,onClick:i,children:t});s.p;const N=({node:n,level:a=0,onSelect:s,selected:i})=>{const[l,o]=(0,t.useState)([]);return(0,t.useEffect)((()=>{const e=i.split(".");e.length>0&&o(l.concat(e))}),[i]),(0,e.jsx)("div",{className:"tree-node",children:Object.keys(n).map((t=>{const r=Array.isArray(n[t])?n[t].length>0:"object"==typeof n[t]&&null!==n[t],c=i===t,u=i.split(".").length>1?i.split(".").filter(((e,t)=>0!==t)).join("."):i;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:f()("tree-row",{selected:c}),onClick:()=>(e=>{s(e)})(t),children:(0,e.jsxs)("div",{className:"tree-text",style:{paddingLeft:r?20*a:20*a+10},onClick:()=>(e=>{l.includes(e)?o(l.filter((t=>t!==e))):o([...l,e])})(t),children:[r&&(0,e.jsx)("i",{className:"mdi mdi-menu-"+(l.includes(t)?"down":"right")}),(0,e.jsx)("span",{children:t})]})},t),r&&l.includes(t)&&(0,e.jsx)(N,{node:n[t],level:a+1,onSelect:e=>s(`${t}.${e}`),selected:u})]})}))})},C=({className:n,isOpen:a,selected:s,position:i,items:l,onSelected:o,onClose:r})=>{const[c,u]=(0,t.useState)(""),[p,d]=(0,t.useState)(""),[m,v]=(0,t.useState)(l),[b,h]=(0,t.useState)({top:200});return(0,t.useEffect)((()=>{const e=t=>Object.keys(t).reduce(((n,a)=>{if("object"==typeof t[a]){if(!a)return n;if(0===Object.keys(t[a]).length)return n[a]="",n;t[a].type?n[a]=t[a].type:n[a]=e(t[a])}else n[a]=t[a];return n}),{});if(!l)return;const t=e(l);v(JSON.parse(JSON.stringify(t))),u("")}),[l]),(0,t.useEffect)((()=>{s&&u(s)}),[s]),(0,t.useEffect)((()=>{i&&h(i)}),[i]),(0,e.jsx)("div",{className:f()("picker",n),children:(0,e.jsx)(g,{title:"Picker",position:b,isOpen:a,onClose:()=>r(),children:(0,e.jsxs)("div",{children:[(0,e.jsx)(I,{className:"mb-3",placeholder:"Search",value:p,onChange:e=>d(e)}),(0,e.jsx)("div",{className:"tree",children:(0,e.jsx)(N,{node:(e=>{const t=n=>Object.keys(n).reduce(((a,s)=>{if(s.toLowerCase().includes(e.toLowerCase())&&(a[s]=n[s]),Array.isArray(n[s])){const t=n[s].filter((t=>"string"==typeof t&&t.toLowerCase().includes(e.toLowerCase())));t.length>0&&(a[s]=t)}if("object"==typeof n[s]&&null!==n[s]){const e=t(n[s]);Object.keys(e).length>0&&(a[s]=e)}return a}),{});return m?t(m):{}})(p),selected:c,onSelect:e=>{u(e)}})}),(0,e.jsxs)("div",{className:"d-flex justify-content-end mt-3",children:[(0,e.jsx)(S,{color:"secondary",className:"px-2",onClick:()=>r(),children:"Cancel"}),(0,e.jsx)(S,{className:"ms-3 px-2",disabled:!c,onClick:()=>{o(c),r()},children:"SELECT"})]})]})})})},P=({label:n,className:a,types:s,expression:i,disabled:l,constantsOptions:o,store:r,onChange:c,onBlur:u})=>{const[p,d]=(0,t.useState)([]),[m,v]=(0,t.useState)(s[0]),[f,g]=(0,t.useState)(""),[b,h]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{v(i.type),g(i.value)}),[i]),(0,t.useEffect)((()=>{d(s.map((e=>({name:e,value:e}))))}),[s]),(0,e.jsxs)("div",{className:`expression-flow ${a||""}`,children:[(0,e.jsx)(w,{label:n,options:p,disabled:l||b,value:m,onChange:e=>{null==c||c({value:"",type:e}),null==u||u({value:"",type:e})}}),(0,e.jsxs)("div",{className:"d-flex align-items-center mt-2",children:["constant"===m?(0,e.jsx)(w,{className:"w-100",options:o||[],value:f,disabled:l||b,onChange:e=>{null==c||c({type:m,value:e}),null==u||u({type:m,value:e}),g(e)}}):(0,e.jsx)(I,{className:"w-100",value:f,onChange:e=>{null==c||c({type:m,value:e}),g(e)},disabled:l||b,onBlur:e=>null==u?void 0:u({type:m,value:e.target.value})}),["context","input","output"].includes(m)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"ms-2",onClick:e=>{l||h(!0)},children:(0,e.jsx)("i",{className:f?"mdi mdi-database":"mdi mdi-database-outline"})}),(0,e.jsx)(C,{isOpen:b,items:r[m],onClose:()=>h(!1),selected:f,onSelected:e=>{null==c||c({type:m,value:e}),null==u||u({type:m,value:e}),g(e)}})]})]})]})},k=({mapping:n,mappingSchema:a,outerStore:s,readOnly:i,onChangeInParamMapping:l,onChangeOutParamMapping:o})=>{const[r,c]=(0,t.useState)((null==n?void 0:n.inParamMapping)||[]),[u,p]=(0,t.useState)((null==n?void 0:n.outParamMapping)||[]);(0,t.useEffect)((()=>{c((null==n?void 0:n.inParamMapping)||[])}),[null==n?void 0:n.inParamMapping]),(0,t.useEffect)((()=>{p((null==n?void 0:n.outParamMapping)||[])}),[null==n?void 0:n.outParamMapping]);const d=[{component:P,componentName:"Expression",key:"mapping",props:{label:"Assignment",types:["input","context","string"],store:s}}],m=[{component:P,componentName:"Expression",key:"mapping",props:{label:"Assignment",types:["context","output"],store:s}}];function v(e){return e&&e.mapping&&e.mapping.value&&("string"===e.mapping.type||""!==e.mapping.value)?"":"Mapping Not Assigned"}return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(y,{disabled:i,emptyValues:{variable:{type:"input",value:""},mapping:{type:"string",value:""}},dialogTitle:"Assign To",getFieldLabel:e=>e.variable.value,fields:r,disabledFields:a.inParamMapping,fieldLabel:"Variable",collapsibleLabel:"IN VARIABLES MAPPING",isAddible:!1,dialogElements:d,onChange:e=>{c(e),l(e)},validate:v}),(0,e.jsx)(y,{disabled:i,emptyValues:{variable:{type:"output",value:""},mapping:{type:"context",value:""}},dialogTitle:"Assign To",fields:u,disabledFields:a.outParamMapping,fieldLabel:"Variable",getFieldLabel:e=>e.variable.value,collapsibleLabel:"OUT VARIABLES MAPPING",isAddible:!1,dialogElements:m,onChange:e=>{p(e),o(e)},validate:v})]})},E=n=>{const[a,s]=(0,t.useState)(n.label.value||"");return(0,t.useEffect)((()=>{s(n.label.value||"")}),[n.label]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(m,{label:n.collapsibleLabel||"NAME",children:(0,e.jsx)(I,{disabled:n.disabled,className:"w-100",value:a,onChange:e=>{s(e),n.onChangeLabel({type:"string",value:e})}})})})},M={name:"flow",panelLabel:"Inline Function",version:"0.8",inputs:[{name:"_"}],outputs:["_"],color:"#CDDC39",icon:"mdi-sitemap-outline",defaultProps:()=>({label:{type:"string",value:"Inline Function"},description:"Inline Function",type:"inline"}),editSection:n=>()=>{var s,i,r;const[c,p]=(0,t.useState)(!1),[d,m]=(0,t.useState)(n.propValues.inline),[v,f]=(0,t.useState)((null===(s=n.propValues.mapping)||void 0===s?void 0:s.inParamMapping)||[]),[b,h]=(0,t.useState)((null===(i=n.propValues.mapping)||void 0===i?void 0:i.outParamMapping)||[]),[y,x]=(0,t.useState)(n.propValues.description||"Flow"),j=(0,t.useRef)(null);let w,I;const N=(null===(r=n.callbacks.ui)||void 0===r?void 0:r.basePath)||"";(0,t.useEffect)((()=>{P(),C()}),[c]),(0,t.useEffect)((()=>{m(n.propValues.inline)}),[n.propValues.inline]);const C=async()=>{var e,t,a;if(await P(),!I)return;const s=o(),i=structuredClone(s),l=n.callbacks.scope.getStore(),r=null===(e=l.context.dataInstance)||void 0===e?void 0:e.objectID,c=null===(t=l.context.processInstance)||void 0===t?void 0:t.objectID,u=null===(a=l.context.currentUser)||void 0===a?void 0:a.objectID;if(!r)throw new Error("Please select your dataInstance prior to creating an inline function");if(!c)throw new Error("Process Instance Object Not Found");if(d){const{input:e,output:t,context:n,props:a}=i,{input:s,output:l,context:o}=d.store,p={input:{...e,...s},output:{...t,...l},context:{...n,...o,vars:{...n.vars,...o.vars}},props:{...a}};p.input.dataInstance.objectID=r,p.output.dataInstance.objectID=r,p.input.processInstance.objectID=c,p.output.processInstance.objectID=c,p.context.currentUser.objectID=u,await I.importModel({...d,store:p})}else i.input.dataInstance.objectID=r,i.output.dataInstance.objectID=r,i.input.processInstance.objectID=c,i.output.processInstance.objectID=c,i.context.currentUser.objectID=u,I.importModel({store:i,connections:[],maxID:0,steps:[]})},P=async()=>{if(w)return w.promise;const e=j.current;if(!c||!e||I)return;const t=function(){e.style.width=window.innerWidth-150+"px",e.style.height=window.innerHeight-260+"px"};window.onresize=t,t();const s=w=function(e,t={}){let n,s,i;const l=e=>{i&&clearTimeout(i),i=setTimeout((()=>{s(new Error(`The operation has timed out. timeoutValue  : ${e}`))}),e)};return e&&l(e),{startTimer:l,promise:new Promise(((e,i)=>{var l;l=e,n=a&&t.fixSyncResolve?e=>setTimeout((()=>l(e))):l,s=i})),resolver:n,reject:s}}();return e.addEventListener("load",(async t=>{var a,i,r,c,u;I=new e.contentWindow.flow.Program,await I.init({onStepRequire:async e=>await Promise.all(e.map((async e=>(e.version.replace(".","_"),await l(`${N}/flow-components/dist/${e.stepName}/${e.stepName}_design.js`))))),onHistoryStatus:e=>{},onCopyPasteStatus:e=>{},ui:{onModelListRequire:null===(a=n.callbacks.ui)||void 0===a?void 0:a.getModels,onModelBodyRequire:null===(i=n.callbacks.ui)||void 0===i?void 0:i.getModelBody}}),n.callbacks.readOnly&&I.setReadonly(!0);const p=n.callbacks.scope.getStore(),d=null===(r=p.context.dataInstance)||void 0===r?void 0:r.objectID,m=null===(c=p.context.processInstance)||void 0===c?void 0:c.objectID,v=null===(u=p.context.currentUser)||void 0===u?void 0:u.objectID;if(!d)throw new Error("Please select your dataInstance prior to creating an inline function");const f=structuredClone(o());f.input.dataInstance.objectID=d,f.output.dataInstance.objectID=d,f.input.processInstance.objectID=m||"",f.output.processInstance.objectID=m||"",f.context.currentUser.objectID=v||"",I.setSchema(f),I.setIsWorkFlow(!1),I.mount(e);try{await Promise.all(function(e){return[{name:"start",version:"0.8"},{name:"end",version:"0.8"},{name:"switch",version:"0.8"},{name:"set",version:"0.8"},{name:"code",version:"0.8"},{name:"collection",version:"0.8"},{name:"subFlow",version:"0.8"},{name:"restServiceCall",version:"0.8"},{name:"soapServiceCall",version:"0.8"},{name:"counter",version:"0.8"},{name:"s3FileUpload",version:"0.8"}].map((t=>l(`${e}/flow-components/dist/${t.name}/${t.name}_design.js`)))}(N).map((async e=>I.registerStep(await e))))}catch(e){console.log("error",e)}s.resolver()})),e.src=`${N}/flow-editor/dist/flowEditor/src/flow.html`,w.promise};return(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"d-flex pt-3 justify-content-center",children:(0,e.jsx)(S,{className:"btn btn-secondary ms-2 w-75",onClick:()=>{var e;if(!(null===(e=n.callbacks.scope.getStore().context.dataInstance)||void 0===e?void 0:e.objectID))throw new Error("Please select your dataInstance prior to creating an inline function");p(!c)},children:(0,e.jsx)("b",{children:(0,e.jsx)("i",{children:"fn"})})})}),(0,e.jsx)(E,{disabled:n.callbacks.readOnly,label:n.propValues.label,description:n.propValues.description,onChangeLabel:e=>n.callbacks.setProp("label",e),onChangeDescription:e=>n.callbacks.setProp("description",e)}),(0,e.jsx)(k,{readOnly:n.callbacks.readOnly,mapping:{inParamMapping:v,outParamMapping:b},mappingSchema:structuredClone(u()),outerStore:n.callbacks.nestedStore,onChangeInParamMapping:e=>{f(e),n.callbacks.setProp("mapping",{inParamMapping:e,outParamMapping:b})},onChangeOutParamMapping:e=>{h(e),n.callbacks.setProp("mapping",{inParamMapping:v,outParamMapping:e})}}),(0,e.jsx)(g,{type:"modal",isOpen:c,title:"Inline Function",onClose:async()=>{await P();const e=structuredClone(u());let t=null==I?void 0:I.exportModel("design");t=t?{...t}:t,n.callbacks.setProp("inline",t),m(t);const a=Object.values((null==t?void 0:t.store.input)||{}).filter((t=>e.inParamMapping.findIndex((e=>e.variable.value===t._name))<0)).map((e=>{const t=v.find((t=>t.variable.value===e._name)),n=(null==t?void 0:t.mapping)||{type:"string",value:""};return{variable:{type:"input",value:e._name},mapping:n}}));f([...a,...e.inParamMapping]);const s=Object.values((null==t?void 0:t.store.output)||{}).filter((t=>e.outParamMapping.findIndex((e=>e.variable.value===t._name))<0)).map((e=>{const t=b.find((t=>t.variable.value===e._name)),n=(null==t?void 0:t.mapping)||{type:"context",value:""};return{variable:{type:"output",value:e._name},mapping:n}}));h([...s,...e.outParamMapping]),p(!1),n.callbacks.setProp("mapping",{inParamMapping:[...a,...e.inParamMapping],outParamMapping:[...s,...e.outParamMapping]})},children:(0,e.jsx)("iframe",{className:"inline-flow",ref:j})})]})}}})(),i})()));