"use strict";exports.id=4753,exports.ids=[4753],exports.modules={4753:(e,t,n)=>{n.r(t),n.d(t,{DEFAULT_MAX_RETRIES:()=>u,DEFAULT_TIMEOUT:()=>d,ENV_CMDS_AUTH_TOKEN:()=>h,ENV_CMDS_FULL_URI:()=>f,ENV_CMDS_RELATIVE_URI:()=>g,Endpoint:()=>N,fromContainerMetadata:()=>w,fromInstanceMetadata:()=>$,getInstanceMetadataEndpoint:()=>x,httpRequest:()=>s,providerConfigFromInit:()=>p});var o=n(2398),r=n(7310),a=n(4300),i=n(3685);function s(e){return new Promise(((t,n)=>{const r=(0,i.request)({method:"GET",...e,hostname:e.hostname?.replace(/^\[(.+)\]$/,"$1")});r.on("error",(e=>{n(Object.assign(new o.kb("Unable to connect to instance metadata service"),e)),r.destroy()})),r.on("timeout",(()=>{n(new o.kb("TimeoutError from instance metadata service")),r.destroy()})),r.on("response",(e=>{const{statusCode:i=400}=e;(i<200||300<=i)&&(n(Object.assign(new o.kb("Error response received from instance metadata service"),{statusCode:i})),r.destroy());const s=[];e.on("data",(e=>{s.push(e)})),e.on("end",(()=>{t(a.Buffer.concat(s)),r.destroy()}))})),r.end()}))}const c=e=>Boolean(e)&&"object"==typeof e&&"string"==typeof e.AccessKeyId&&"string"==typeof e.SecretAccessKey&&"string"==typeof e.Token&&"string"==typeof e.Expiration,l=e=>({accessKeyId:e.AccessKeyId,secretAccessKey:e.SecretAccessKey,sessionToken:e.Token,expiration:new Date(e.Expiration),...e.AccountId&&{accountId:e.AccountId}}),d=1e3,u=0,p=({maxRetries:e=u,timeout:t=d})=>({maxRetries:e,timeout:t}),m=(e,t)=>{let n=e();for(let o=0;o<t;o++)n=n.catch(e);return n},f="AWS_CONTAINER_CREDENTIALS_FULL_URI",g="AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",h="AWS_CONTAINER_AUTHORIZATION_TOKEN",w=(e={})=>{const{timeout:t,maxRetries:n}=p(e);return()=>m((async()=>{const n=await I({logger:e.logger}),r=JSON.parse(await v(t,n));if(!c(r))throw new o.mV("Invalid response received from instance metadata service.",{logger:e.logger});return l(r)}),n)},v=async(e,t)=>(process.env[h]&&(t.headers={...t.headers,Authorization:process.env[h]}),(await s({...t,timeout:e})).toString()),E={localhost:!0,"127.0.0.1":!0},y={"http:":!0,"https:":!0},I=async({logger:e})=>{if(process.env[g])return{hostname:"169.254.170.2",path:process.env[g]};if(process.env[f]){const t=(0,r.parse)(process.env[f]);if(!t.hostname||!(t.hostname in E))throw new o.mV(`${t.hostname} is not a valid container metadata service hostname`,{tryNextLink:!1,logger:e});if(!t.protocol||!(t.protocol in y))throw new o.mV(`${t.protocol} is not a valid container metadata service protocol`,{tryNextLink:!1,logger:e});return{...t,port:t.port?parseInt(t.port,10):void 0}}throw new o.mV(`The container metadata credential provider cannot be used unless the ${g} or ${f} environment variable is set`,{tryNextLink:!1,logger:e})};function A(e){try{const t=new Set(Array.from(e.match(/([A-Z_]){3,}/g)??[]));return t.delete("CONFIG"),t.delete("CONFIG_PREFIX_SEPARATOR"),t.delete("ENV"),[...t].join(", ")}catch(t){return e}}var _=n(4084);const S=({environmentVariableSelector:e,configFileSelector:t,default:n},r={})=>{return(0,o.HP)((0,o.tS)((a=e,async()=>{try{const e=a(process.env);if(void 0===e)throw new Error;return e}catch(e){throw new o.mV(e.message||`Not found in ENV: ${A(a.toString())}`,{logger:undefined})}}),((e,{preferredFile:t="config",...n}={})=>async()=>{const r=(0,_.Jl)(n),{configFile:a,credentialsFile:i}=await(0,_.Zl)(n),s=i[r]||{},c=a[r]||{},l="config"===t?{...s,...c}:{...c,...s};try{const n=e(l,"config"===t?a:i);if(void 0===n)throw new Error;return n}catch(t){throw new o.mV(t.message||`Not found in config files w/ profile [${r}]: ${A(e.toString())}`,{logger:n.logger})}})(t,r),(e=>"function"==typeof e?async()=>await e():(0,o.f$)(e))(n)));var a};class T extends o.mV{constructor(e,t=!0){super(e,t),this.tryNextLink=t,this.name="InstanceMetadataV1FallbackError",Object.setPrototypeOf(this,T.prototype)}}const b=e=>{if("string"==typeof e)return b(new URL(e));const{hostname:t,pathname:n,port:o,protocol:r,search:a}=e;let i;return a&&(i=function(e){const t={};if(e=e.replace(/^\?/,""))for(const n of e.split("&")){let[e,o=null]=n.split("=");e=decodeURIComponent(e),o&&(o=decodeURIComponent(o)),e in t?Array.isArray(t[e])?t[e].push(o):t[e]=[t[e],o]:t[e]=o}return t}(a)),{hostname:t,port:o?parseInt(o):void 0,protocol:r,path:n,query:i}};var N;!function(e){e.IPv4="http://169.254.169.254",e.IPv6="http://[fd00:ec2::254]"}(N||(N={}));const C={environmentVariableSelector:e=>e.AWS_EC2_METADATA_SERVICE_ENDPOINT,configFileSelector:e=>e.ec2_metadata_service_endpoint,default:void 0};var R;!function(e){e.IPv4="IPv4",e.IPv6="IPv6"}(R||(R={}));const V={environmentVariableSelector:e=>e.AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE,configFileSelector:e=>e.ec2_metadata_service_endpoint_mode,default:R.IPv4},x=async()=>b(await D()||await k()),D=async()=>S(C)(),k=async()=>{const e=await S(V)();switch(e){case R.IPv4:return N.IPv4;case R.IPv6:return N.IPv6;default:throw new Error(`Unsupported endpoint mode: ${e}. Select from ${Object.values(R)}`)}},M=(e,t)=>{const n=300+Math.floor(300*Math.random()),o=new Date(Date.now()+1e3*n);t.warn(`Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(o)}.\nFor more information, please visit: https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html`);const r=e.originalExpiration??e.expiration;return{...e,...r?{originalExpiration:r}:{},expiration:o}},O="/latest/meta-data/iam/security-credentials/",P="AWS_EC2_METADATA_V1_DISABLED",F="ec2_metadata_v1_disabled",U="x-aws-ec2-metadata-token",$=(e={})=>((e,t={})=>{const n=t?.logger||console;let o;return async()=>{let t;try{t=await e(),t.expiration&&t.expiration.getTime()<Date.now()&&(t=M(t,n))}catch(e){if(!o)throw e;n.warn("Credential renew failed: ",e),t=M(o,n)}return o=t,t}})(L(e),{logger:e.logger}),L=(e={})=>{let t=!1;const{logger:n,profile:r}=e,{timeout:a,maxRetries:i}=p(e),s=async(n,a)=>{if(t||null==a.headers?.[U]){let t=!1,n=!1;const a=await S({environmentVariableSelector:t=>{const r=t[P];if(n=!!r&&"false"!==r,void 0===r)throw new o.mV(`${P} not set in env, checking config file next.`,{logger:e.logger});return n},configFileSelector:e=>{const n=e[F];return t=!!n&&"false"!==n,t},default:!1},{profile:r})();if(e.ec2MetadataV1Disabled||a){const o=[];throw e.ec2MetadataV1Disabled&&o.push("credential provider initialization (runtime option ec2MetadataV1Disabled)"),t&&o.push(`config file profile (${F})`),n&&o.push(`process environment variable (${P})`),new T(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${o.join(", ")}].`)}}const i=(await m((async()=>{let e;try{e=await W(a)}catch(e){throw 401===e.statusCode&&(t=!1),e}return e}),n)).trim();return m((async()=>{let n;try{n=await j(i,a,e)}catch(e){throw 401===e.statusCode&&(t=!1),e}return n}),n)};return async()=>{const e=await x();if(t)return n?.debug("AWS SDK Instance Metadata","using v1 fallback (no token fetch)"),s(i,{...e,timeout:a});{let o;try{o=(await K({...e,timeout:a})).toString()}catch(o){if(400===o?.statusCode)throw Object.assign(o,{message:"EC2 Metadata token request returned error"});return("TimeoutError"===o.message||[403,404,405].includes(o.statusCode))&&(t=!0),n?.debug("AWS SDK Instance Metadata","using v1 fallback (initial)"),s(i,{...e,timeout:a})}return s(i,{...e,headers:{[U]:o},timeout:a})}}},K=async e=>s({...e,path:"/latest/api/token",method:"PUT",headers:{"x-aws-ec2-metadata-token-ttl-seconds":"21600"}}),W=async e=>(await s({...e,path:O})).toString(),j=async(e,t,n)=>{const r=JSON.parse((await s({...t,path:O+e})).toString());if(!c(r))throw new o.mV("Invalid response received from instance metadata service.",{logger:n.logger});return l(r)}}};