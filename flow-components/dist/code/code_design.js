/*! For license information please see code_design.js.LICENSE.txt */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define(["react"],n):"object"==typeof exports?exports.flowcomponent=n(require("react")):e.flowcomponent=n(e.react)}(this,(e=>(()=>{var n={6094:(e,n,t)=>{"use strict";var r=t(8156),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,i={},l=null,u=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)a.call(n,r)&&!s.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:c.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},4512:(e,n,t)=>{"use strict";e.exports=t(6094)},8156:n=>{"use strict";n.exports=e},5685:(e,n)=>{var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",n=0;n<arguments.length;n++){var t=arguments[n];t&&(e=a(e,i(t)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var t in e)r.call(e,t)&&e[t]&&(n=a(n,t));return n}function a(e,n){return n?e?e+" "+n:e+n:e}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(n,[]))||(e.exports=t)}()}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var o={};return(()=>{"use strict";r.r(o),r.d(o,{default:()=>de});var e=r(4512),n=r(8156);r.p;var t=r(5685),i=r.n(t);r.p;const a=({children:n,className:t,color:r="primary",disabled:o,onClick:a})=>(0,e.jsx)("button",{className:i()("button-flow",t,r),disabled:o,onClick:a,children:n}),c=(r.p,({label:t,className:r,placeholder:o,value:i,disabled:a,isDigit:c=!1,onChange:s,onBlur:l})=>{const[u,d]=(0,n.useState)(i);return(0,n.useEffect)((()=>{d(i)}),[i]),(0,e.jsxs)("div",{className:`input-flow ${r||""}`,children:[t&&(0,e.jsx)("label",{className:"d-block p-0",children:t}),(0,e.jsx)("input",{className:"w-100",placeholder:o,value:u,onChange:e=>{const n=e.target.value;c&&!new RegExp(/^\d+$/).test(n)||(null==s||s(n),d(n))},onBlur:l,disabled:a})]})}),s=(r.p,({label:n,className:t,value:r,disabled:o,onChange:a})=>(0,e.jsxs)("div",{className:i()("switch-flow",t),children:[n&&(0,e.jsx)("label",{className:"switch-text",children:n}),(0,e.jsxs)("label",{className:"switch",children:[(0,e.jsx)("input",{type:"checkbox",className:"w-100",checked:r,disabled:o,onChange:e=>{a(e.target.checked)}}),(0,e.jsx)("span",{className:"slider round"})]})]})),l=(r.p,({isOpen:t,onClose:r,children:o,footer:a=[],title:c,type:s="dialog",position:l})=>{if(!t)return null;const[u,d]=(0,n.useState)({top:0}),f=(0,n.useRef)(null);return(0,n.useEffect)((()=>{var e,n;if(l){const t=window.innerHeight>l.top+((null===(e=f.current)||void 0===e?void 0:e.clientHeight)||0)?l.top:window.innerHeight-((null===(n=f.current)||void 0===n?void 0:n.clientHeight)||0)-10;d({top:t})}}),[l]),(0,e.jsx)("div",{className:i()({overlay:"modal"===s}),children:(0,e.jsxs)("div",{ref:f,className:i()("dialog",{"dialog-monaco":"modal"==s}),style:u,children:["dialog"===s?(0,e.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const n=f.current;if(!n)return;const t=n.getBoundingClientRect(),r=e.clientX-t.left,o=e=>{d({top:e.clientY-10,left:e.clientX-r})},i=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",i)})(e),children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{}),(0,e.jsx)("span",{})]}):(0,e.jsx)("div",{}),(0,e.jsxs)("div",{className:"dialog-header",children:[(0,e.jsx)("h5",{className:"dialog-title m-0",children:c}),(0,e.jsx)("div",{className:"cursor-pointer",onClick:r,children:(0,e.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,e.jsx)("div",{className:"dialog-body",children:o}),a.length>0&&(0,e.jsx)("div",{className:"dialog-footer",children:a.map((e=>e))})]})})});function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){g(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function h(e){return function n(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return n.apply(t,[].concat(o,r))}}}function b(e){return{}.toString.call(e).includes("Object")}function v(e){return"function"==typeof e}var w=h((function(e,n){throw new Error(e[n]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),j=function(e,n){return b(n)||w("changeType"),Object.keys(n).some((function(n){return t=e,r=n,!Object.prototype.hasOwnProperty.call(t,r);var t,r}))&&w("changeField"),n},x=function(e){v(e)||w("selectorType")},O=function(e){v(e)||b(e)||w("handlerType"),b(e)&&Object.values(e).some((function(e){return!v(e)}))&&w("handlersType")},I=function(e){var n;e||w("initialIsRequired"),b(e)||w("initialType"),n=e,Object.keys(n).length||w("initialContent")};function E(e,n){return v(n)?n(e.current):n}function k(e,n){return e.current=y(y({},e.current),n),n}function S(e,n,t){return v(n)?n(e.current):Object.keys(t).forEach((function(t){var r;return null===(r=n[t])||void 0===r?void 0:r.call(n,e.current[t])})),t}const M=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};I(e),O(n);var t={current:e},r=h(S)(t,n),o=h(k)(t),i=h(j)(e),a=h(E)(t);return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return x(e),e(t.current)},function(e){!function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduceRight((function(e,n){return n(e)}),e)}}(r,o,i,a)(e)}]};var N,P={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},C=(N=function(e,n){throw new Error(e[n]||e.default)},function e(){for(var n=this,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return r.length>=N.length?N.apply(this,r):function(){for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return e.apply(n,[].concat(r,o))}})(P);const R={config:function(e){return e||C("configIsRequired"),n=e,{}.toString.call(n).includes("Object")||C("configType"),e.urls?(console.warn(P.deprecation),{paths:{vs:e.urls.monacoBase}}):e;var n}},T=function e(n,t){return Object.keys(t).forEach((function(r){t[r]instanceof Object&&n[r]&&Object.assign(t[r],e(n[r],t[r]))})),f(f({},n),t)};var D={type:"cancelation",msg:"operation is manually canceled"};const A=function(e){var n=!1,t=new Promise((function(t,r){e.then((function(e){return n?r(D):t(e)})),e.catch(r)}));return t.cancel=function(){return n=!0},t};var L,U=(2,function(e){if(Array.isArray(e))return e}(L=M({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}))||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),2!==t.length);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}}(L)||function(e,n){if(e){if("string"==typeof e)return p(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?p(e,2):void 0}}(L)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),V=U[0],_=U[1];function F(e){return document.body.appendChild(e)}function $(e){var n,t,r=V((function(e){return{config:e.config,reject:e.reject}})),o=(n="".concat(r.config.paths.vs,"/loader.js"),t=document.createElement("script"),n&&(t.src=n),t);return o.onload=function(){return e()},o.onerror=r.reject,o}function q(){var e=V((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),n=window.require;n.config(e.config),n(["vs/editor/editor.main"],(function(n){B(n),e.resolve(n)}),(function(n){e.reject(n)}))}function B(e){V().monaco||_({monaco:e})}var z=new Promise((function(e,n){return _({resolve:e,reject:n})})),W={config:function(e){var n=R.config(e),t=n.monaco,r=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(n,["monaco"]);_((function(e){return{config:T(e.config,r),monaco:t}}))},init:function(){var e=V((function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}}));if(!e.isInitialized){if(_({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),A(z);if(window.monaco&&window.monaco.editor)return B(window.monaco),e.resolve(window.monaco),A(z);!function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduceRight((function(e,n){return n(e)}),e)}}(F,$)(q)}return A(z)},__getMonacoInstance:function(){return V((function(e){return e.monaco}))}};const H=W;var K={display:"flex",position:"relative",textAlign:"initial"},Y={width:"100%"},G={display:"none"},X={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},J=function({children:e}){return n.createElement("div",{style:X.container},e)},Q=(0,n.memo)((function({width:e,height:t,isEditorReady:r,loading:o,_ref:i,className:a,wrapperProps:c}){return n.createElement("section",{style:{...K,width:e,height:t},...c},!r&&n.createElement(J,null,o),n.createElement("div",{ref:i,style:{...Y,...!r&&G},className:a}))})),Z=function(e){(0,n.useEffect)(e,[])},ee=function(e,t,r=!0){let o=(0,n.useRef)(!0);(0,n.useEffect)(o.current||!r?()=>{o.current=!1}:e,t)};function ne(){}function te(e,n,t,r){return function(e,n){return e.editor.getModel(re(e,n))}(e,r)||function(e,n,t,r){return e.editor.createModel(n,t,r?re(e,r):void 0)}(e,n,t,r)}function re(e,n){return e.Uri.parse(n)}(0,n.memo)((function({original:e,modified:t,language:r,originalLanguage:o,modifiedLanguage:i,originalModelPath:a,modifiedModelPath:c,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:l=!1,theme:u="light",loading:d="Loading...",options:f={},height:p="100%",width:g="100%",className:m,wrapperProps:y={},beforeMount:h=ne,onMount:b=ne}){let[v,w]=(0,n.useState)(!1),[j,x]=(0,n.useState)(!0),O=(0,n.useRef)(null),I=(0,n.useRef)(null),E=(0,n.useRef)(null),k=(0,n.useRef)(b),S=(0,n.useRef)(h),M=(0,n.useRef)(!1);Z((()=>{let e=H.init();return e.then((e=>(I.current=e)&&x(!1))).catch((e=>"cancelation"!==e?.type&&console.error("Monaco initialization: error:",e))),()=>O.current?function(){let e=O.current?.getModel();s||e?.original?.dispose(),l||e?.modified?.dispose(),O.current?.dispose()}():e.cancel()})),ee((()=>{if(O.current&&I.current){let n=O.current.getOriginalEditor(),t=te(I.current,e||"",o||r||"text",a||"");t!==n.getModel()&&n.setModel(t)}}),[a],v),ee((()=>{if(O.current&&I.current){let e=O.current.getModifiedEditor(),n=te(I.current,t||"",i||r||"text",c||"");n!==e.getModel()&&e.setModel(n)}}),[c],v),ee((()=>{let e=O.current.getModifiedEditor();e.getOption(I.current.editor.EditorOption.readOnly)?e.setValue(t||""):t!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),e.pushUndoStop())}),[t],v),ee((()=>{O.current?.getModel()?.original.setValue(e||"")}),[e],v),ee((()=>{let{original:e,modified:n}=O.current.getModel();I.current.editor.setModelLanguage(e,o||r||"text"),I.current.editor.setModelLanguage(n,i||r||"text")}),[r,o,i],v),ee((()=>{I.current?.editor.setTheme(u)}),[u],v),ee((()=>{O.current?.updateOptions(f)}),[f],v);let N=(0,n.useCallback)((()=>{if(!I.current)return;S.current(I.current);let n=te(I.current,e||"",o||r||"text",a||""),s=te(I.current,t||"",i||r||"text",c||"");O.current?.setModel({original:n,modified:s})}),[r,t,i,e,o,a,c]),P=(0,n.useCallback)((()=>{!M.current&&E.current&&(O.current=I.current.editor.createDiffEditor(E.current,{automaticLayout:!0,...f}),N(),I.current?.editor.setTheme(u),w(!0),M.current=!0)}),[f,u,N]);return(0,n.useEffect)((()=>{v&&k.current(O.current,I.current)}),[v]),(0,n.useEffect)((()=>{!j&&!v&&P()}),[j,v,P]),n.createElement(Q,{width:g,height:p,isEditorReady:v,loading:d,_ref:E,className:m,wrapperProps:y})}));var oe=new Map,ie=(0,n.memo)((function({defaultValue:e,defaultLanguage:t,defaultPath:r,value:o,language:i,path:a,theme:c="light",line:s,loading:l="Loading...",options:u={},overrideServices:d={},saveViewState:f=!0,keepCurrentModel:p=!1,width:g="100%",height:m="100%",className:y,wrapperProps:h={},beforeMount:b=ne,onMount:v=ne,onChange:w,onValidate:j=ne}){let[x,O]=(0,n.useState)(!1),[I,E]=(0,n.useState)(!0),k=(0,n.useRef)(null),S=(0,n.useRef)(null),M=(0,n.useRef)(null),N=(0,n.useRef)(v),P=(0,n.useRef)(b),C=(0,n.useRef)(),R=(0,n.useRef)(o),T=function(e){let t=(0,n.useRef)();return(0,n.useEffect)((()=>{t.current=e}),[e]),t.current}(a),D=(0,n.useRef)(!1),A=(0,n.useRef)(!1);Z((()=>{let e=H.init();return e.then((e=>(k.current=e)&&E(!1))).catch((e=>"cancelation"!==e?.type&&console.error("Monaco initialization: error:",e))),()=>S.current?(C.current?.dispose(),p?f&&oe.set(a,S.current.saveViewState()):S.current.getModel()?.dispose(),void S.current.dispose()):e.cancel()})),ee((()=>{let n=te(k.current,e||o||"",t||i||"",a||r||"");n!==S.current?.getModel()&&(f&&oe.set(T,S.current?.saveViewState()),S.current?.setModel(n),f&&S.current?.restoreViewState(oe.get(a)))}),[a],x),ee((()=>{S.current?.updateOptions(u)}),[u],x),ee((()=>{!S.current||void 0===o||(S.current.getOption(k.current.editor.EditorOption.readOnly)?S.current.setValue(o):o!==S.current.getValue()&&(A.current=!0,S.current.executeEdits("",[{range:S.current.getModel().getFullModelRange(),text:o,forceMoveMarkers:!0}]),S.current.pushUndoStop(),A.current=!1))}),[o],x),ee((()=>{let e=S.current?.getModel();e&&i&&k.current?.editor.setModelLanguage(e,i)}),[i],x),ee((()=>{void 0!==s&&S.current?.revealLine(s)}),[s],x),ee((()=>{k.current?.editor.setTheme(c)}),[c],x);let L=(0,n.useCallback)((()=>{if(M.current&&k.current&&!D.current){P.current(k.current);let n=a||r,l=te(k.current,o||e||"",t||i||"",n||"");S.current=k.current?.editor.create(M.current,{model:l,automaticLayout:!0,...u},d),f&&S.current.restoreViewState(oe.get(n)),k.current.editor.setTheme(c),void 0!==s&&S.current.revealLine(s),O(!0),D.current=!0}}),[e,t,r,o,i,a,u,d,f,c,s]);return(0,n.useEffect)((()=>{x&&N.current(S.current,k.current)}),[x]),(0,n.useEffect)((()=>{!I&&!x&&L()}),[I,x,L]),R.current=o,(0,n.useEffect)((()=>{x&&w&&(C.current?.dispose(),C.current=S.current?.onDidChangeModelContent((e=>{A.current||w(S.current.getValue(),e)})))}),[x,w]),(0,n.useEffect)((()=>{if(x){let e=k.current.editor.onDidChangeMarkers((e=>{let n=S.current.getModel()?.uri;if(n&&e.find((e=>e.path===n.path))){let e=k.current.editor.getModelMarkers({resource:n});j?.(e)}}));return()=>{e?.dispose()}}return()=>{}}),[x,j]),n.createElement(Q,{width:g,height:m,isEditorReady:x,loading:l,_ref:M,className:y,wrapperProps:h})}));const ae=({height:t="65%",language:r="typescript",codeValue:o,intelliInterfaces:i="",readOnly:a,onCodeValuechange:c})=>{const s=(0,n.useRef)(null);return(0,n.useEffect)((()=>{var e,n;""!=o&&o===(null===(e=s.current)||void 0===e?void 0:e.editor.getModels()[0].getValue())||null===(n=s.current)||void 0===n||n.editor.getModels()[0].setValue(o)}),[o]),(0,e.jsx)(ie,{height:t,language:r,options:{automaticLayout:!0,readOnly:a},onChange:()=>{if(s.current){const e=s.current.editor.getModels()[0];e&&(o=e.getValue(),c(o))}},onMount:(e,n)=>{s.current=n,s.current.editor.getModels()[0].setValue(o),n.languages.typescript.typescriptDefaults.setCompilerOptions({target:n.languages.typescript.ScriptTarget.ES2016,allowNonTsExtensions:!0}),n.languages.typescript.typescriptDefaults.setExtraLibs([{content:i}])}})},ce=(r.p,({label:t,isKeepOpen:r=!1,onAddButton:o,children:i})=>{const[a,c]=(0,n.useState)(!0);return(0,e.jsxs)("div",{className:"variables ",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,e.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>c(!a),children:[!r&&(0,e.jsx)("i",{className:"mdi "+(a?"mdi-chevron-down":"mdi-chevron-right")}),(0,e.jsx)("p",{children:t})]}),o&&(0,e.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),o(e)}})]}),(r||a)&&(0,e.jsx)("ul",{className:"variable-list",children:i})]})}),se=t=>{const[r,o]=(0,n.useState)(t.label.value||"");return(0,n.useEffect)((()=>{o(t.label.value||"")}),[t.label]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(ce,{label:t.collapsibleLabel||"NAME",children:(0,e.jsx)(c,{disabled:t.disabled,className:"w-100",value:r,onChange:e=>{o(e),t.onChangeLabel({type:"string",value:e})}})})})},le={boolean:e=>"boolean",number:e=>"number",string:e=>"string",datetime:e=>"Date",dataType:e=>"unknown",constant:e=>"unknown",enum:e=>{throw new Error("a variable can not be enum type")}};class ue{static generateInterfaceString(e,n=""){if(!e)return"{}";let t="{\n";for(const r in e)if(e.hasOwnProperty(r)){const o=e[r];t+=`${n}    ${r}: ${le[o.type](o)}`}return t+=`${n}}`,t}}const de={name:"code",panelLabel:"Script",version:"0.8",inputs:[{name:"_"}],outputs:["_"],color:"#00BCD4",icon:"mdi-code-braces",defaultProps:()=>({label:{type:"string",value:"Script"},description:"Script",code:""}),editSection:t=>()=>{const[r,o]=(0,n.useState)(!1),[i,u]=(0,n.useState)(t.propValues.waitTillNext||!1),[d,f]=(0,n.useState)(t.propValues.code),p=[(0,e.jsx)(a,{className:"btn btn-secondary",onClick:()=>{o(!1)},children:"Cancel"}),(0,e.jsx)(a,{className:"btn btn-secondary",onClick:()=>{t.callbacks.setProp("code",d),o(!1)},children:"SAVE"})];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"d-flex pt-3 justify-content-center",children:(0,e.jsxs)(a,{disabled:t.callbacks.readOnly,className:"btn btn-secondary ms-2 w-75",onClick:()=>{f(d),o(!0)},children:[(0,e.jsx)("b",{className:"bg-primary text-white",children:" TS"})," ",(0,e.jsx)("b",{children:"Type"}),"Script"]})}),(0,e.jsx)(se,{disabled:t.callbacks.readOnly,label:t.propValues.label,description:t.propValues.description,onChangeLabel:e=>t.callbacks.setProp("label",e),onChangeDescription:e=>t.callbacks.setProp("description",e)}),(0,e.jsx)(ce,{label:"PROPERTIES",children:(0,e.jsx)("div",{className:"d-flex",children:(0,e.jsx)(s,{disabled:t.callbacks.readOnly,className:"mt-3 w-100 justify-content-center",label:"Wait for next one to begin ",value:i,onChange:e=>{var n;u(n=e),t.callbacks.setProp("waitTillNext",n)}})})}),(0,e.jsxs)(l,{type:"modal",isOpen:r,title:"Script",footer:p,onClose:()=>{o(!1)},children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between mb-3",children:[(0,e.jsx)(c,{value:"",placeholder:"Give your script a name"}),(0,e.jsx)(a,{className:"btn btn-secondary clear-button",onClick:()=>{f("")},children:"CLEAR ALL"})]}),(0,e.jsx)(ae,{codeValue:d,intelliInterfaces:[`interface IVars ${ue.generateInterfaceString(null===(g=t.callbacks.store)||void 0===g?void 0:g.context.vars)};`,`interface IInput ${ue.generateInterfaceString(null===(m=t.callbacks.store)||void 0===m?void 0:m.input)};`,`interface IOutput ${ue.generateInterfaceString(null===(y=t.callbacks.store)||void 0===y?void 0:y.output)};`,"type IConstants = Record<string, any>"].join("\n")+'\n\ninterface ITask {\n    taskId: string,\n    taskDefinitionKey: string;\n    taskName: string,\n    status: string,\n    taskGroupId: string,\n    userId?: string,\n    unitId?: string,\n    swimlane: string,\n    taskStart: DateTime,\n    taskEnd: DateTime,\n    sla: unknown,\n    priority?: number,\n    actions: Array<unknown>,\n    candidateUnits?: Array<string>,\n    candidateUsers?: Array<string>,\n}\ninterface IProcessInstance {\n    processInstanceId: string,\n    processId: string,\n    processName: string,\n    processLabel: string,\n    processDescription: string,\n    clusterId: string,\n    businessKey: string,\n    initiatorUser: IUser,\n    initiatorUnit: IUnit,\n    currentUnit: IUnit,\n    processStart: DateTime,\n    processEnd: DateTime,\n    sla: unknown,\n    priority: number,\n    lastUpdate: DateTime,\n    lastUpdateUser: IUser,\n    lastUpdateDescription?: string,\n    status: string,\n    contributorUsers: Array<IUser>,\n    followerUsers: Array<IUser>,\n    tasks: Array<ITask>,\n    notes: Array<unknown>,\n    files?: Array<unknown>,\n    appId?: string,\n}\ntype DataInstance = Record<string, any>;\ninterface IUnit {\n    id: string;\n};\ntype Swimlane = Array<string>;\ninterface IUser {\n    id: string;\n    name: string;\n    unit: IUnit;\n    roles: Array<string>;\n    email?: string;\n    swimlanes?: Array<Swimlane>;\n}\ninterface IWorkflowContext {\n    currentUser?: IUser;\n    dataInstance?: DataInstance;\n    processInstance?: IProcessInstance;\n}\ninterface IWorkflowConstants {\n    constants?: Record<string, any>;\n}\ninterface IFlowInfo {\n    code: string;\n    category: "success" | "info" | "danger";\n    message: string; // "Merhaba ${custName}" vs "${custName}, Wellcome"\n    summary?: string;\n    parameters?: Record<string, string>; // {custName: "alper"}\n    source?: string;\n}\ninterface IFlowError  {\n    readonly type: "business" | "technical";\n    readonly category: "warn" | "error";\n    readonly message: string;\n    readonly code: string;\n    readonly summary?: string;\n    readonly parameters?: Record<string, string>;\n    readonly detail?: string;\n}\nclass FlowError extends Error implements IFlowError {\n    public readonly type: IFlowError["type"];\n    public readonly category: IFlowError["category"];\n    public readonly code: IFlowError["code"];\n    public readonly summary?: IFlowError["summary"];\n    public readonly parameters?: IFlowError["parameters"];\n    public readonly detail?: IFlowError["detail"];\n}\n\ndeclare var flow: { \n    next?: () => void;\n    fail: (err: Error) => void;\n    getIncomingRequest?: () => { headers: Record<string, string>; };\n    permanentStore?: () => {\n        set: (key: string, value: any) => Promise<void>;\n        get: (key: string) => Promise<any>;\n    };\n    context: ({ type: "workflow" } & IWorkflowContext & IWorkflowConstants) | \n        { type: "client" } | \n        { type: "server" };\n    input: IInput;\n    output: IOutput;\n    vars: IVars;\n    appendFlowInfo(info: IFlowInfo): void;\n    createError(error: IFlowError): FlowError;\n};',onCodeValuechange:e=>{f(e)}})]})]});var g,m,y}}})(),o})()));