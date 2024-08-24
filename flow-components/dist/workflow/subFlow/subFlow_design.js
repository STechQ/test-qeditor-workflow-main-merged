/*! For license information please see subFlow_design.js.LICENSE.txt */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],n):"object"==typeof exports?exports.flowcomponent=n(require("react"),require("react-dom")):e.flowcomponent=n(e.react,e["react-dom"])}(this,((e,n)=>(()=>{var t={4645:(e,n,t)=>{"use strict";var l=t(7111);l.createRoot,l.hydrateRoot},6094:(e,n,t)=>{"use strict";var l=t(8156),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var l,s={},c=null,d=null;for(l in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,l)&&!r.hasOwnProperty(l)&&(s[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===s[l]&&(s[l]=n[l]);return{$$typeof:a,type:e,key:c,ref:d,props:s,_owner:o.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},4512:(e,n,t)=>{"use strict";e.exports=t(6094)},5787:(e,n,t)=>{"use strict";t.d(n,{default:()=>P});var l=t(4512),a=t(8156);var s;let i;s={boolean:!0,datetime:!0,enum:!0,number:!0,dataType:!0,string:!0,constant:!0,any:!0},Object.keys(s);const o=i={quick:{modelKeys:{self:"qjson"}},flow:{modelKeys:{design:"flow-design",runtime:"flow-runtime"}},workflow:{modelKeys:{design:"workflow-design",runtime:"workflow-runtime"}},dataTypeEditor:{modelKeys:{single:"dataType"}},serviceEditor:{modelKeys:{single:"restService"}},soapEditor:{modelKeys:{single:"soapService"}},enum:{modelKeys:{single:"enum"}},constantEditor:{modelKeys:{single:"constant"}}};new Error("unimplemented for namedComponent"),new Error("unimplemented for json");const r=()=>d;let c;const d=c={inParamMapping:[],outParamMapping:[]},u=(t.p,t.p,({label:e,isKeepOpen:n=!1,onAddButton:t,children:s})=>{const[i,o]=(0,a.useState)(!0);return(0,l.jsxs)("div",{className:"variables ",children:[(0,l.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,l.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>o(!i),children:[!n&&(0,l.jsx)("i",{className:"mdi "+(i?"mdi-chevron-down":"mdi-chevron-right")}),(0,l.jsx)("p",{children:e})]}),t&&(0,l.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),t(e)}})]}),(n||i)&&(0,l.jsx)("ul",{className:"variable-list",children:s})]})});var p=t(5685),m=t.n(p);t.p;const v=({isOpen:e,onClose:n,children:t,footer:s=[],title:i,type:o="dialog",position:r})=>{if(!e)return null;const[c,d]=(0,a.useState)({top:0}),u=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var e,n;if(r){const t=window.innerHeight>r.top+((null===(e=u.current)||void 0===e?void 0:e.clientHeight)||0)?r.top:window.innerHeight-((null===(n=u.current)||void 0===n?void 0:n.clientHeight)||0)-10;d({top:t})}}),[r]),(0,l.jsx)("div",{className:m()({overlay:"modal"===o}),children:(0,l.jsxs)("div",{ref:u,className:m()("dialog",{"dialog-monaco":"modal"==o}),style:c,children:["dialog"===o?(0,l.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const n=u.current;if(!n)return;const t=n.getBoundingClientRect(),l=e.clientX-t.left,a=e=>{d({top:e.clientY-10,left:e.clientX-l})},s=()=>{document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",s)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",s)})(e),children:[(0,l.jsx)("span",{}),(0,l.jsx)("span",{}),(0,l.jsx)("span",{})]}):(0,l.jsx)("div",{}),(0,l.jsxs)("div",{className:"dialog-header",children:[(0,l.jsx)("h5",{className:"dialog-title m-0",children:i}),(0,l.jsx)("div",{className:"cursor-pointer",onClick:n,children:(0,l.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,l.jsx)("div",{className:"dialog-body",children:t}),s.length>0&&(0,l.jsx)("div",{className:"dialog-footer",children:s.map((e=>e))})]})})};function g(e,n){(0,a.useEffect)((()=>{const t=t=>{const l=null==e?void 0:e.current;l&&!l.contains((null==t?void 0:t.target)||null)&&n(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}),[e,n])}t.p;const f=e=>{var n;const[t,s]=(0,a.useState)(!1),i=(0,a.useRef)(null);return g(i,(()=>s(!1))),(0,l.jsxs)("div",{className:"dropdown-flow",ref:i,children:[(0,l.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),s(!t)},children:e.iconClass&&(0,l.jsx)("i",{className:e.iconClass})}),(0,l.jsx)("ul",{className:"py-3",style:{display:t?"block":"none"},children:null===(n=e.options)||void 0===n?void 0:n.map((e=>(0,l.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:n=>{s(!1),e.onClick(n)},children:e.name},e.name)))})]})},h=({collapsibleLabel:e,fields:n,disabledFields:t=[],fieldLabel:s,dialogElements:i,emptyValues:o,isAddible:r=!0,isDeletable:c=!0,isCollabsible:d=!0,createItemLabel:p,dialogTitle:m,maxItemLen:g,disabled:h,onChange:b,validate:y,getFieldLabel:x})=>{const[j,S]=(0,a.useState)([]),[N,w]=(0,a.useState)(!1),[C,k]=(0,a.useState)(0),[E,P]=(0,a.useState)({top:0}),[O,M]=(0,a.useState)(!1),[L,A]=(0,a.useState)("");(0,a.useEffect)((()=>{const e=new Set(t.map((e=>JSON.stringify(e)))),l=n.filter((n=>!e.has(JSON.stringify(n))));S(l)}),[n]);const $=(e,n,t=!1)=>{P({top:e.pageY}),M(t),k(n),y&&A(y(j[n])),w(!0)},F=(e,n,t=s)=>{if(!e)return;if(t.includes(".")){const n=_(t,e);return Array.isArray(n)||"object"!=typeof n?n:n.value?`${n.type}.${n.value}`:`${"name"==s?"Variable ":s}`}const l=e?e[t]:e;return Array.isArray(l)||"object"!=typeof l?l:l.value?`${l.type}.${l.value}`:`${"name"==s?"Variable ":s}`},_=(e,n)=>{if(n)return e.split(".").reduce(((e,n)=>e[n]),n)},R=e=>{S(e),b(JSON.parse(JSON.stringify([...t,...e])))};function I(e,n){const t=[...j];((e,n,t)=>{const l=n.split("."),a=l.pop();l.reduce(((e,n)=>e[n]),e)[a]=t})(t[C],e,n),R(t),y&&A(y(t[C]))}const V=e=>{if(h)return;if(void 0!==g&&j.length>=g)return;const n=[...j],t=JSON.parse(JSON.stringify(o));Object.keys(t).forEach((e=>{if("name"==e)t[e]=""==t[e]?`Variable ${(n.length+1).toString()}`:t[e];else if("object"==typeof t[e]&&t[e].hasOwnProperty("value")){let l=t[e].value;l=""==l?s+" "+(n.length+1).toString():l,t[e].value=l}})),n.push(t),R(n),e&&P({top:e.pageY}),k(n.indexOf(t)),w(!0)},T=(e,n)=>{var l;const a={true:t,false:j};h&&(a[O.toString()]={...t,...j});const s=null===(l=a[O.toString()])||void 0===l?void 0:l[C];return{Expression:{expression:(null==s?void 0:s[n])||{type:"string",value:""},onBlur:e=>{I(n,e)}},Checkbox:{checked:F(s,0,n)||!1,onChange:e=>{I(n,e)}},Select:{value:F(s,0,n)||"",onChange:e=>{I(n,e)}},Input:{value:F(s,0,n)||"",onChange:e=>{I(n,e)}},MultiSelect:{values:F(s,0,n)||[],onChange:e=>{I(n,e)}},Mapping:{mapping:_(n,s)||{inParamMapping:{},outParamMapping:{}},onChangeInParamMapping:e=>{I(n+".inParamMapping",e)},onChangeOutParamMapping:e=>{I(n+".outParamMapping",e)}}}[e]||{value:(null==s?void 0:s[n])||"",onChange:e=>{I(n,e)}}};return(0,l.jsx)(l.Fragment,{children:0==(null==j?void 0:j.length)&&0==t.length&&r?(0,l.jsxs)("div",{className:"dynamic-field-create vertical-line cursor-pointer",onClick:e=>V(e),children:[(0,l.jsx)("p",{children:p}),void 0===g||void 0!==g&&j.length<g?(0,l.jsx)("i",{className:"mdi mdi-plus"}):(0,l.jsx)(l.Fragment,{})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(u,{label:e,isKeepOpen:!d,...(()=>{if(r&&!(void 0!==g&&j.length>=g))return{onAddButton:V}})(),children:[null==t?void 0:t.map(((e,n)=>(0,l.jsx)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==n&&"vertical-line"}`,onClick:e=>$(e,n,!0),children:(0,l.jsx)("p",{className:"m-0 ellipsis-text",children:(null==x?void 0:x(e))||F(e)||`${"name"==s?"Variable ":s} ${n+1}`})},`item${n}`))),null==j?void 0:j.map(((e,n)=>(0,l.jsxs)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==n&&"vertical-line"}`,onClick:e=>$(e,n,h),children:[(0,l.jsx)("p",{className:"m-0 ellipsis-text",children:(null==x?void 0:x(e))||F(e)||`${"name"==s?"Variable ":s} ${n+1}`}),c&&(0,l.jsx)(f,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Delete",onClick:e=>{((e,n)=>{e.preventDefault(),e.stopPropagation(),R([...j].filter(((e,t)=>t!=n))),w(!1)})(e,n)}}]})]},`item${n}`)))]}),(0,l.jsxs)(v,{isOpen:N,title:m,onClose:()=>(w(!1),void A("")),position:E,children:[(0,l.jsxs)("p",{style:{color:"red",display:""===L?"none":""},children:["$",L]}),i.map(((e,n)=>{var a,s;if((O||!e.isRendered||(null===(a=null==e?void 0:e.isRendered)||void 0===a?void 0:a.call(e,j[C])))&&(!O||!e.isRendered||(null===(s=null==e?void 0:e.isRendered)||void 0===s?void 0:s.call(e,t[C]))))return(0,l.jsx)(e.component,{...T(e.componentName,e.key),disabled:O,...e.props,children:e.children},e.key)}))]})]})})};function b(e){return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}function y(e){const n=(0,a.useSyncExternalStore)(b,(()=>function(e){var n,t,l,a,s;const i=null===(n=e.current)||void 0===n?void 0:n.getBoundingClientRect();return JSON.stringify({width:null!==(t=null==i?void 0:i.width)&&void 0!==t?t:0,height:null!==(l=null==i?void 0:i.height)&&void 0!==l?l:0,top:null!==(a=null==i?void 0:i.top)&&void 0!==a?a:0,left:null!==(s=null==i?void 0:i.left)&&void 0!==s?s:0})}(e)));return(0,a.useMemo)((()=>JSON.parse(n)),[n])}t.p,t.p;const x=({label:e,options:n=[],className:t,placeholder:s,value:i,disabled:o,onChange:r})=>{const[c,d]=(0,a.useState)(!1),[u,p]=(0,a.useState)(i),[m,v]=(0,a.useState)([]),f=(0,a.useRef)(null),h=(0,a.useRef)(null),b=(0,a.useRef)(null),{width:x,top:j,left:S,height:N}=y(h),{height:w}=y(b);return g(f,(()=>d(!1))),(0,a.useEffect)((()=>{const e=m.find((e=>e.value===i));e?p(e.name):i||p("")}),[i,m]),(0,a.useEffect)((()=>{v(n)}),[n]),(0,l.jsxs)("div",{className:`select-flow position-relative ${t||""}`,children:[e&&(0,l.jsx)("label",{className:"d-block ellipsis-text p-0",children:e}),(0,l.jsxs)("div",{ref:f,children:[(0,l.jsxs)("div",{className:"input",ref:h,onClick:()=>{o||d(!c)},style:{cursor:o?"not-allowed":"default",opacity:o?"0.6":"1"},children:[(0,l.jsx)("input",{className:"w-100 ellipsis-text",placeholder:s,value:u,onChange:()=>{}}),(0,l.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,l.jsx)("div",{className:"options",ref:b,style:{display:c?"block":"none",pointerEvents:o?"none":"all",...(()=>{const e=window.innerHeight;return j+N+5+w>e?{top:j-w-5,left:S,width:x}:{top:j+N+5,left:S,width:x}})()},children:(0,l.jsx)("ul",{children:n.map((e=>(0,l.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>e.value!=u?(e=>{r(e.value),d(!1)})(e):d(!1),children:e.name},e.value)))})})]})]})},j=(t.p,({label:e,className:n,placeholder:t,value:s,disabled:i,isDigit:o=!1,onChange:r,onBlur:c})=>{const[d,u]=(0,a.useState)(s);return(0,a.useEffect)((()=>{u(s)}),[s]),(0,l.jsxs)("div",{className:`input-flow ${n||""}`,children:[e&&(0,l.jsx)("label",{className:"d-block p-0",children:e}),(0,l.jsx)("input",{className:"w-100",placeholder:t,value:d,onChange:e=>{const n=e.target.value;o&&!new RegExp(/^\d+$/).test(n)||(null==r||r(n),u(n))},onBlur:c,disabled:i})]})});t(4645),t.p;const S=({children:e,className:n,color:t="primary",disabled:a,onClick:s})=>(0,l.jsx)("button",{className:m()("button-flow",n,t),disabled:a,onClick:s,children:e});t.p;const N=({node:e,level:n=0,onSelect:t,selected:s})=>{const[i,o]=(0,a.useState)([]);return(0,a.useEffect)((()=>{const e=s.split(".");e.length>0&&o(i.concat(e))}),[s]),(0,l.jsx)("div",{className:"tree-node",children:Object.keys(e).map((a=>{const r=Array.isArray(e[a])?e[a].length>0:"object"==typeof e[a]&&null!==e[a],c=s===a,d=s.split(".").length>1?s.split(".").filter(((e,n)=>0!==n)).join("."):s;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:m()("tree-row",{selected:c}),onClick:()=>(e=>{t(e)})(a),children:(0,l.jsxs)("div",{className:"tree-text",style:{paddingLeft:r?20*n:20*n+10},onClick:()=>(e=>{i.includes(e)?o(i.filter((n=>n!==e))):o([...i,e])})(a),children:[r&&(0,l.jsx)("i",{className:"mdi mdi-menu-"+(i.includes(a)?"down":"right")}),(0,l.jsx)("span",{children:a})]})},a),r&&i.includes(a)&&(0,l.jsx)(N,{node:e[a],level:n+1,onSelect:e=>t(`${a}.${e}`),selected:d})]})}))})},w=({className:e,isOpen:n,selected:t,position:s,items:i,onSelected:o,onClose:r})=>{const[c,d]=(0,a.useState)(""),[u,p]=(0,a.useState)(""),[g,f]=(0,a.useState)(i),[h,b]=(0,a.useState)({top:200});return(0,a.useEffect)((()=>{const e=n=>Object.keys(n).reduce(((t,l)=>{if("object"==typeof n[l]){if(!l)return t;if(0===Object.keys(n[l]).length)return t[l]="",t;n[l].type?t[l]=n[l].type:t[l]=e(n[l])}else t[l]=n[l];return t}),{});if(!i)return;const n=e(i);f(JSON.parse(JSON.stringify(n))),d("")}),[i]),(0,a.useEffect)((()=>{t&&d(t)}),[t]),(0,a.useEffect)((()=>{s&&b(s)}),[s]),(0,l.jsx)("div",{className:m()("picker",e),children:(0,l.jsx)(v,{title:"Picker",position:h,isOpen:n,onClose:()=>r(),children:(0,l.jsxs)("div",{children:[(0,l.jsx)(j,{className:"mb-3",placeholder:"Search",value:u,onChange:e=>p(e)}),(0,l.jsx)("div",{className:"tree",children:(0,l.jsx)(N,{node:(e=>{const n=t=>Object.keys(t).reduce(((l,a)=>{if(a.toLowerCase().includes(e.toLowerCase())&&(l[a]=t[a]),Array.isArray(t[a])){const n=t[a].filter((n=>"string"==typeof n&&n.toLowerCase().includes(e.toLowerCase())));n.length>0&&(l[a]=n)}if("object"==typeof t[a]&&null!==t[a]){const e=n(t[a]);Object.keys(e).length>0&&(l[a]=e)}return l}),{});return g?n(g):{}})(u),selected:c,onSelect:e=>{d(e)}})}),(0,l.jsxs)("div",{className:"d-flex justify-content-end mt-3",children:[(0,l.jsx)(S,{color:"secondary",className:"px-2",onClick:()=>r(),children:"Cancel"}),(0,l.jsx)(S,{className:"ms-3 px-2",disabled:!c,onClick:()=>{o(c),r()},children:"SELECT"})]})]})})})},C=({label:e,className:n,types:t,expression:s,disabled:i,constantsOptions:o,store:r,onChange:c,onBlur:d})=>{const[u,p]=(0,a.useState)([]),[m,v]=(0,a.useState)(t[0]),[g,f]=(0,a.useState)(""),[h,b]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{v(s.type),f(s.value)}),[s]),(0,a.useEffect)((()=>{p(t.map((e=>({name:e,value:e}))))}),[t]),(0,l.jsxs)("div",{className:`expression-flow ${n||""}`,children:[(0,l.jsx)(x,{label:e,options:u,disabled:i||h,value:m,onChange:e=>{null==c||c({value:"",type:e}),null==d||d({value:"",type:e})}}),(0,l.jsxs)("div",{className:"d-flex align-items-center mt-2",children:["constant"===m?(0,l.jsx)(x,{className:"w-100",options:o||[],value:g,disabled:i||h,onChange:e=>{null==c||c({type:m,value:e}),null==d||d({type:m,value:e}),f(e)}}):(0,l.jsx)(j,{className:"w-100",value:g,onChange:e=>{null==c||c({type:m,value:e}),f(e)},disabled:i||h,onBlur:e=>null==d?void 0:d({type:m,value:e.target.value})}),["context","input","output","vars"].includes(m)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"ms-2",onClick:e=>{i||b(!0)},children:(0,l.jsx)("i",{className:g?"mdi mdi-database":"mdi mdi-database-outline"})}),(0,l.jsx)(w,{isOpen:h,items:r[m],onClose:()=>b(!1),selected:g,onSelected:e=>{null==c||c({type:m,value:e}),null==d||d({type:m,value:e}),f(e)}})]})]})]})},k=({mapping:e,mappingSchema:n,outerStore:t,readOnly:s,onChangeInParamMapping:i,onChangeOutParamMapping:o})=>{const[r,c]=(0,a.useState)((null==e?void 0:e.inParamMapping)||[]),[d,u]=(0,a.useState)((null==e?void 0:e.outParamMapping)||[]),p=["input","context","string","number","boolean",t.vars&&"vars"],m=[!t.vars&&"context","output",t.vars&&"vars"];(0,a.useEffect)((()=>{c((null==e?void 0:e.inParamMapping)||[])}),[null==e?void 0:e.inParamMapping]),(0,a.useEffect)((()=>{u((null==e?void 0:e.outParamMapping)||[])}),[null==e?void 0:e.outParamMapping]);const v=[{component:C,componentName:"Expression",key:"mapping",props:{label:"Assignment",types:p,store:t}}],g=[{component:C,componentName:"Expression",key:"mapping",props:{label:"Assignment",types:m,store:t}}];function f(e){return e&&e.mapping&&e.mapping.value&&("string"===e.mapping.type||""!==e.mapping.value)?"":"Mapping Not Assigned"}return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h,{disabled:s,emptyValues:{variable:{type:"input",value:""},mapping:{type:"string",value:""}},dialogTitle:"Assign To",getFieldLabel:e=>e.variable.value,fields:r,disabledFields:n.inParamMapping,fieldLabel:"Variable",collapsibleLabel:"IN VARIABLES MAPPING",isAddible:!1,dialogElements:v,onChange:e=>{c(e),i(e)},validate:f}),(0,l.jsx)(h,{disabled:s,emptyValues:{variable:{type:"output",value:""},mapping:{type:"context",value:""}},dialogTitle:"Assign To",fields:d,disabledFields:n.outParamMapping,fieldLabel:"Variable",getFieldLabel:e=>e.variable.value,collapsibleLabel:"OUT VARIABLES MAPPING",isAddible:!1,dialogElements:g,onChange:e=>{u(e),o(e)},validate:f})]})},E=e=>{const[n,t]=(0,a.useState)(e.label.value||"");return(0,a.useEffect)((()=>{t(e.label.value||"")}),[e.label]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(u,{label:e.collapsibleLabel||"NAME",children:(0,l.jsx)(j,{disabled:e.disabled,className:"w-100",value:n,onChange:n=>{t(n),e.onChangeLabel({type:"string",value:n})}})})})},P={name:"subFlow",panelLabel:"Function",version:"0.8",inputs:[{name:"_"}],outputs:["_"],color:"#03A9F4",icon:"mdi-file-tree-outline",defaultProps:()=>({label:{type:"string",value:"Function"},description:"Function",type:"referenced",id:"",mapping:structuredClone(r())}),editSection:e=>()=>{var n,t;const[s,i]=(0,a.useState)(e.propValues.id||""),[c,d]=(0,a.useState)(),[p,m]=(0,a.useState)([]),[v,g]=(0,a.useState)((null===(n=e.propValues.mapping)||void 0===n?void 0:n.inParamMapping)||[]),[f,h]=(0,a.useState)((null===(t=e.propValues.mapping)||void 0===t?void 0:t.outParamMapping)||[]),[b,y]=(0,a.useState)(e.propValues.description||"Sub Flow");if(!e.callbacks.ui)throw new Error("Function can not execute on environments without UI");const j=e.callbacks.ui;return(0,a.useEffect)((()=>{(async()=>{var e;d(await(null===(e=j.getModels)||void 0===e?void 0:e.call(j,"flow")))})()}),[]),(0,a.useEffect)((()=>{c&&m(c.map((e=>({name:`${e.name}`,value:e.ID}))))}),[c]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(E,{disabled:e.callbacks.readOnly,label:e.propValues.label,description:e.propValues.description,onChangeLabel:n=>e.callbacks.setProp("label",n),onChangeDescription:n=>e.callbacks.setProp("description",n)}),(0,l.jsx)(u,{label:"PROPERTIES",children:(0,l.jsx)(x,{disabled:e.callbacks.readOnly,label:"Select Function",value:s||"",onChange:async n=>{let t;if(i(n),c&&(t=c.find((e=>e.ID==n))),t){e.callbacks.setProp("id",t.ID);const n=await j.getModelBody(t.ID,o.flow.modelKeys.design),l=Object.values(n.store.input).map((e=>({variable:{type:"input",value:e._name},mapping:{type:"string",value:""}}))),a=Object.values(n.store.output).map((e=>({variable:{type:"output",value:e._name},mapping:{type:"output",value:""}})));g(l),h(a),e.callbacks.setProp("mapping",{...e.propValues.mapping,inParamMapping:l,outParamMapping:a})}},options:p})}),(0,l.jsx)(k,{readOnly:e.callbacks.readOnly,mapping:{inParamMapping:v,outParamMapping:f},mappingSchema:structuredClone(r()),outerStore:e.callbacks.nestedStore,onChangeInParamMapping:n=>{g(n),e.callbacks.setProp("mapping",{inParamMapping:n,outParamMapping:f})},onChangeOutParamMapping:n=>{h(n),e.callbacks.setProp("mapping",{inParamMapping:v,outParamMapping:n})}})]})}}},8156:n=>{"use strict";n.exports=e},7111:e=>{"use strict";e.exports=n},5685:(e,n)=>{var t;!function(){"use strict";var l={}.hasOwnProperty;function a(){for(var e="",n=0;n<arguments.length;n++){var t=arguments[n];t&&(e=i(e,s(t)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var t in e)l.call(e,t)&&e[t]&&(n=i(n,t));return n}function i(e,n){return n?e?e+" "+n:e+n:e}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(n,[]))||(e.exports=t)}()}},l={};function a(e){var n=l[e];if(void 0!==n)return n.exports;var s=l[e]={exports:{}};return t[e](s,s.exports,a),s.exports}a.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return a.d(n,{a:n}),n},a.d=(e,n)=>{for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var s={};return(()=>{"use strict";a.r(s),a.d(s,{default:()=>e.default});var e=a(5787)})(),s})()));