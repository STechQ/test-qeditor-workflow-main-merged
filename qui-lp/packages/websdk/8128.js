﻿"use strict";(this.webpackChunk_stechquick_websdk=this.webpackChunk_stechquick_websdk||[]).push([[8128],{60118:(t,e,o)=>{o.d(e,{C:()=>s,X:()=>r});var i=!1;new Promise((function(t){return t()})).then((function(){return i=!0})),"undefined"!=typeof doNothing&&doNothing();var n=!0===i;function r(t,e){void 0===e&&(e={});var o,i=void 0,r=void 0,s=function(t){o&&clearTimeout(o),o=setTimeout((function(){r(new Error("The operation has timed out. timeoutValue  : "+t))}),t)},a=!1,u=!1,l=function(){return a||u};return t&&s(t),{startTimer:s,promise:new Promise((function(t,o){var s=function(t){return n&&e.fixSyncResolve?function(e){return setTimeout((function(){return t(e)}))}:t}(t);i=function(t){l()||(a=!0,s(t))},r=function(t){l()||(u=!0,o(t))}})),resolver:i,reject:r,isResolved:function(){return a},isRejected:function(){return u},isCompleted:l}}function s(t){var e=this,o=r(),i=t.length;return t.forEach((function(t){return n=e,r=void 0,a=function(){return function(t,e){var o,i,n,r,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(n=2&r[0]?i.return:r[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,r[1])).done)return n;switch(i=0,n&&(r=[2&r[0],n.value]),r[0]){case 0:case 1:n=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!((n=(n=s.trys).length>0&&n[n.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!n||r[1]>n[0]&&r[1]<n[3])){s.label=r[1];break}if(6===r[0]&&s.label<n[1]){s.label=n[1],n=r;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(r);break}n[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(t){r=[6,t],i=0}finally{o=n=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}}(this,(function(e){switch(e.label){case 0:return e.trys.push([0,,2,3]),[4,t];case 1:return e.sent(),[3,3];case 2:return--i<=0&&o.resolver(t),[7];case 3:return[2]}}))},new((s=void 0)||(s=Promise))((function(t,e){function o(t){try{u(a.next(t))}catch(t){e(t)}}function i(t){try{u(a.throw(t))}catch(t){e(t)}}function u(e){var n;e.done?t(e.value):(n=e.value,n instanceof s?n:new s((function(t){t(n)}))).then(o,i)}u((a=a.apply(n,r||[])).next())}));var n,r,s,a})),o.promise}},38128:(t,e,o)=>{o.r(e),o.d(e,{PlateauIAM:()=>h});var i=o(64e3),n=o(36348),r=o(62190),s=o(60118);function a(t,e){t.postMessage(e,"*")}var u=function(t,e,o,i){return new(o||(o=Promise))((function(n,r){function s(t){try{u(i.next(t))}catch(t){r(t)}}function a(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,a)}u((i=i.apply(t,e||[])).next())}))},l=function(t,e){var o,i,n,r,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(n=2&r[0]?i.return:r[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,r[1])).done)return n;switch(i=0,n&&(r=[2&r[0],n.value]),r[0]){case 0:case 1:n=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!((n=(n=s.trys).length>0&&n[n.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!n||r[1]>n[0]&&r[1]<n[3])){s.label=r[1];break}if(6===r[0]&&s.label<n[1]){s.label=n[1],n=r;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(r);break}n[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(t){r=[6,t],i=0}finally{o=n=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}},c=["https://","http://"],h=function(){function t(){var t=this;this.refreshTime=6e3,this.updateTime=10,this.initOptions={url:"http://identity-provider.dev.rally.softtech/auth/",realm:"main",clientId:"ui-web-client",onLoad:"login-required",pkceMethod:"S256",identityProvider:"",locale:""},this.authOptions={url:"",active:!1},this.iamPlateau=void 0,this.getToken=function(){return null!=t.iamPlateau?t.iamPlateau.token:void 0},this.getInfo=function(){return null!=t.iamPlateau?t.iamPlateau.info:void 0}}return t.prototype.setOptions=function(t){var e=t.iam,o=t.iamV2;if(null==o?void 0:o.active)this.configureNewOAuthSettings(o);else try{var i=null==e?void 0:e.options;if(!i)throw new Error("iam in settings is missing options");if(null!=i.identityProvider)if("object"==typeof i.identityProvider){var n="",s=i.url.split("."),a=2;try{(a=parseInt(i.identityProvider.order))<=0&&(a=2)}catch(t){a=2}if("queryString"===i.identityProvider.type){var u=new URLSearchParams(window.location.search);null!=u.get("subdomain")&&(n=u.get("subdomain"),s[a-1]=n,this.initOptions.subdomain=n),null!=u.get("realm")&&(i.realm=u.get("realm"));var l=i.localeQueryStringKey||"ui_locales";this.initOptions.locale=u.get(l)||void 0}else"subdomain"===i.identityProvider.type&&(n=window.location.host.split(".")[0],s[a-1]=n);i.url=s.join(".")}else i.identityProvider.length>1&&(i.url=window.location.protocol+"//"+window.location.host.replace(i.identityProvider,"identity-provider")+"/auth");i.url&&(this.initOptions.url=i.url),i.realm&&(this.initOptions.realm=i.realm),i.clientId&&(this.initOptions.clientId=i.clientId),i.onLoad&&(this.initOptions.onLoad=i.onLoad),i.pkceMethod&&(this.initOptions.pkceMethod=i.pkceMethod),i.identityProvider&&(this.initOptions.identityProvider=i.identityProvider),i.redirectUri&&(this.initOptions.redirectUri=i.redirectUri),i.responseMode&&(this.initOptions.responseMode=i.responseMode),i.preserveTokens&&(this.initOptions.preserveTokens=i.preserveTokens)}catch(t){var c=t.message||"error has no message";r.Y.Log({logMessage:"Error on setting IAM options: "+c,logType:r.h.Error})}},t.prototype.configureNewOAuthSettings=function(t){this.authOptions.active=t.active;var e=t.idendityProviderURL||"",o=new URLSearchParams(window.location.search);this.authOptions.subdomain=this.getSubdomain(t,o),e=this.replaceSubdomain(e,this.authOptions),this.authOptions.realm=this.getRealm(t,o),this.authOptions.language=this.getLocale(t,o),this.authOptions.url=e,this.authOptions.clientId=t.clientId,this.authOptions.preserveTokens=t.preserveTokens,this.authOptions.redirectUri=t.redirectUri,this.authOptions.onLoad=t.onLoad,this.authOptions.popup=t.popup,this.authOptions.sessionStorageNamePrefix=t.sessionStorageNamePrefix},t.prototype.getLocale=function(t,e){return t.isLangFromQS?e.get("lang"):t.language},t.prototype.replaceSubdomain=function(t,e){var o=t.split(".");return o[1]=e.subdomain||o[1],o.join(".")},t.prototype.getRealm=function(t,e){return t.isRealmFromQS?e.get("realm"):t.realm},t.prototype.getSubdomain=function(t,e){var o="";switch(t.subdomainSource){case"constant":o=t.subdomainValue;break;case"query":o=e.get("subdomain");break;case"currentDomain":o=window.location.host.split(".")[0]}return o},t.prototype.isAuthenticated=function(){var t;if(null!=(null===(t=this.iamPlateau)||void 0===t?void 0:t.token))return!0},t.prototype.init=function(t,e){var o,n,r;return u(this,void 0,void 0,(function(){var s,a,u,c,h,p,d;return l(this,(function(l){switch(l.label){case 0:return s=this.authOptions.active?this.authOptions:this.initOptions,this.keycloak=(0,i.Z)(s),a=this.getTokens(),u=this.getKeyCloakOptions(),c=this.getLoginOptions(),a&&a.idToken&&a.refreshToken&&a.token&&(u.idToken=a.idToken,u.refreshToken=a.refreshToken,u.token=a.token),h=this.authOptions.active?this.authOptions.redirectUri:this.initOptions.redirectUri,(p=this.setQueryOrFragment(new URL(window.location.href),h))&&(c.redirectUri=p,u.redirectUri=p),d=!1,(null!==(o=null==e?void 0:e.iamWithPopup)&&void 0!==o?o:(null===(r=null===(n=this.settingsIAM)||void 0===n?void 0:n.iam)||void 0===r?void 0:r.popup)||this.authOptions.popup)&&!(null==e?void 0:e.iamInPopup)?[4,this.handleIAMPopup(e,u,this.keycloak)]:[3,2];case 1:return d=l.sent(),[3,5];case 2:return[4,this.keycloak.init(u)];case 3:return(d=l.sent())?[3,5]:[4,this.keycloak.login(c)];case 4:return l.sent(),[2];case 5:return(null==e?void 0:e.iamInPopup)?(this.handleInPopup(),[2]):(this.setTokens(),"boolean"==typeof d&&(d?this.constructIAMPlateau():window.location.reload(),t()),[2])}}))}))},t.prototype.handleIAMPopup=function(t,e,o){return u(this,void 0,void 0,(function(){var i,r,c,h,p,d,v,f=this;return l(this,(function(k){switch(k.label){case 0:if(r=(0,s.X)(),c=function(t){var e={};for(var o in t)if(t.hasOwnProperty(o)){var i=t[o];"string"!=typeof i&&"number"!=typeof i&&"boolean"!=typeof i&&null!==i||(e[o]=i)}return e},h=function(e){return u(f,void 0,void 0,(function(){var o;return l(this,(function(n){if(e.source!=p)return[2];switch(e.data.type){case"token":return window.removeEventListener("message",h),r.resolver(e.data.tokenInfo),clearInterval(i),[2];case"iamReady":return o=c(window),a(p,{type:"iamOptions",options:t,parentWindow:o}),[2]}return[2]}))}))},window.addEventListener("message",h),!(p=window.open(n.t.concatUrl(n.t.getScriptRoot(),"../assets/oidc.html"),"plateauIAMPopup","popup")))throw d="Failed to open new window.",console.error(d),d;return i=setInterval((function(){if(p.closed){clearInterval(i);var t="popup window closed before authentication";console.error(t),r.reject(new Error(t))}}),500),[4,r.promise];case 1:return v=k.sent(),this.setToOptions(e,v),[2,o.init(e)]}}))}))},t.prototype.handleInPopup=function(){var t=this.getTokenFromKeycloak();if(!t)throw new Error("could not retrieve tokenInfo from keycloak");a(opener,{type:"token",tokenInfo:t}),window.close()},t.prototype.pathJoin=function(t,e){return(t=t.endsWith("/")?t.substring(0,t.length-1):t)+"/"+(e.startsWith("/")?e.substring(1):e)},t.prototype.setQueryOrFragment=function(t,e){if(e){if(null!=c.find((function(t){return e.startsWith(t)})))return e;var o=new URL("http://a.com/"+e),i="/"==t.pathname?"":t.pathname,n="/"==o.pathname?"":o.pathname,r=i&&n?n.startsWith("//")?n.substring(1):this.pathJoin(i,n):i||n,s=t.search&&o.search?t.search+o.search.replace("?","&"):t.search||o.search,a=t.hash&&o.hash?t.hash+o.hash.replace("#","&"):t.hash||o.hash;return t.origin+r+s+a}},t.prototype.constructIAMPlateau=function(){var t,e,o;null==this.iamPlateau?this.iamPlateau={token:null===(t=this.keycloak)||void 0===t?void 0:t.token,info:null===(e=this.keycloak)||void 0===e?void 0:e.tokenParsed}:this.iamPlateau.token=null===(o=this.keycloak)||void 0===o?void 0:o.token,window.location.search&&(document.cookie="queryParamsIAM="+window.location.search+";path=/;")},t.prototype.getTokens=function(){var t,e,o,i,n,r,s,a,u,l,c,h;if(this.authOptions.preserveTokens||(null===(o=null===(e=null===(t=this.settingsIAM)||void 0===t?void 0:t.iam)||void 0===e?void 0:e.options)||void 0===o?void 0:o.preserveTokens)){var p=(null===(r=null===(n=null===(i=this.settingsIAM)||void 0===i?void 0:i.iam)||void 0===n?void 0:n.options)||void 0===r?void 0:r.sessionStorageNamePrefix)||this.authOptions.sessionStorageNamePrefix?((null===(u=null===(a=null===(s=this.settingsIAM)||void 0===s?void 0:s.iam)||void 0===a?void 0:a.options)||void 0===u?void 0:u.sessionStorageNamePrefix)||this.authOptions.sessionStorageNamePrefix)+"_":"";return{idToken:null!==(l=sessionStorage.getItem(p+"kcIdToken"))&&void 0!==l?l:void 0,refreshToken:null!==(c=sessionStorage.getItem(p+"kcRefreshToken"))&&void 0!==c?c:void 0,token:null!==(h=sessionStorage.getItem(p+"kcToken"))&&void 0!==h?h:void 0}}},t.prototype.getTokenFromKeycloak=function(){if(this.keycloak&&this.keycloak.idToken&&this.keycloak.refreshToken&&this.keycloak.token)return{idToken:this.keycloak.idToken,refreshToken:this.keycloak.refreshToken,token:this.keycloak.token,info:this.keycloak.tokenParsed}},t.prototype.setToOptions=function(t,e){t.idToken=e.idToken,t.refreshToken=e.refreshToken,t.token=e.token},t.prototype.setTokens=function(t){var e,o,i,n,r,s,a,u,l,c;if(void 0===t&&(t={}),this.authOptions.preserveTokens||(null===(i=null===(o=null===(e=this.settingsIAM)||void 0===e?void 0:e.iam)||void 0===o?void 0:o.options)||void 0===i?void 0:i.preserveTokens)){var h=null!==(n=t.tokenInfo)&&void 0!==n?n:this.getTokenFromKeycloak();if(h){var p=(null===(a=null===(s=null===(r=this.settingsIAM)||void 0===r?void 0:r.iam)||void 0===s?void 0:s.options)||void 0===a?void 0:a.sessionStorageNamePrefix)||this.authOptions.sessionStorageNamePrefix?((null===(c=null===(l=null===(u=this.settingsIAM)||void 0===u?void 0:u.iam)||void 0===l?void 0:l.options)||void 0===c?void 0:c.sessionStorageNamePrefix)||this.authOptions.sessionStorageNamePrefix)+"_":"";sessionStorage.setItem(p+"kcIdToken",h.idToken),sessionStorage.setItem(p+"kcRefreshToken",h.refreshToken),sessionStorage.setItem(p+"kcToken",h.token)}}},t.prototype.refreshPromise=function(){var t;return u(this,void 0,void 0,(function(){var e;return l(this,(function(o){switch(o.label){case 0:e=!1,o.label=1;case 1:return o.trys.push([1,3,,4]),[4,null===(t=this.keycloak)||void 0===t?void 0:t.updateToken(this.updateTime)];case 2:return e=o.sent(),this.constructIAMPlateau(),this.setTokens(),[3,4];case 3:return o.sent(),window.location.href=window.location.protocol+"//"+window.location.host,[3,4];case 4:return[2,e]}}))}))},t.prototype.getKeyCloakOptions=function(){return this.authOptions.active?{onLoad:"login-required",pkceMethod:"S256",checkLoginIframe:!1,responseMode:"fragment"}:{onLoad:this.initOptions.onLoad,pkceMethod:this.initOptions.pkceMethod,checkLoginIframe:!1,responseMode:this.initOptions.responseMode}},t.prototype.getLoginOptions=function(){return{locale:this.authOptions.language||this.initOptions.locale}},t.prototype.logout=function(){var t,e,o=window.location.protocol+"//"+window.location.host,i=this.getLogoutURLParams();o=this.getRedirectURL(i,o),console.log("getredirectURL:"),console.log(o);var n={redirectUri:o},r={redirectUri:null===(t=this.keycloak)||void 0===t?void 0:t.createLogoutUrl(n)};null===(e=this.keycloak)||void 0===e||e.logout(r)},t.prototype.getRedirectURL=function(t,e){return(this.authOptions.active||"queryString"===this.initOptions.identityProvider.type)&&t.reduce((function(t,o,i){return o.value?e=e+(0===i?"?":"&")+o.key+"="+o.value:t}),""),e},t.prototype.getLogoutURLParams=function(){var t=this.authOptions.active?this.authOptions:this.initOptions,e=this.authOptions.active?this.authOptions.language:this.initOptions.locale;return[{key:"realm",value:t.realm},{key:"subdomain",value:t.subdomain},{key:"lang",value:e}]},t.prototype.login=function(t){return u(this,void 0,void 0,(function(){var e;return l(this,(function(o){switch(o.label){case 0:return e=function(){},[4,this.init(e,t)];case 1:return o.sent(),[2]}}))}))},t}()}}]);