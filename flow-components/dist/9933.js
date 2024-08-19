"use strict";exports.id=9933,exports.ids=[9933],exports.modules={9933:(e,t,a)=>{a.r(t),a.d(t,{DEFAULT_MAX_RETRIES:()=>u,DEFAULT_TIMEOUT:()=>d,ENV_CMDS_AUTH_TOKEN:()=>h,ENV_CMDS_FULL_URI:()=>g,ENV_CMDS_RELATIVE_URI:()=>f,Endpoint:()=>S,fromContainerMetadata:()=>v,fromInstanceMetadata:()=>L,getInstanceMetadataEndpoint:()=>M,httpRequest:()=>i,providerConfigFromInit:()=>m});var n=a(4447),r=a(7310),o=a(4300),s=a(3685);function i(e){return new Promise(((t,a)=>{const r=(0,s.request)({method:"GET",...e,hostname:e.hostname?.replace(/^\[(.+)\]$/,"$1")});r.on("error",(e=>{a(Object.assign(new n.kb("Unable to connect to instance metadata service"),e)),r.destroy()})),r.on("timeout",(()=>{a(new n.kb("TimeoutError from instance metadata service")),r.destroy()})),r.on("response",(e=>{const{statusCode:s=400}=e;(s<200||300<=s)&&(a(Object.assign(new n.kb("Error response received from instance metadata service"),{statusCode:s})),r.destroy());const i=[];e.on("data",(e=>{i.push(e)})),e.on("end",(()=>{t(o.Buffer.concat(i)),r.destroy()}))})),r.end()}))}const c=e=>Boolean(e)&&"object"==typeof e&&"string"==typeof e.AccessKeyId&&"string"==typeof e.SecretAccessKey&&"string"==typeof e.Token&&"string"==typeof e.Expiration,l=e=>({accessKeyId:e.AccessKeyId,secretAccessKey:e.SecretAccessKey,sessionToken:e.Token,expiration:new Date(e.Expiration),...e.AccountId&&{accountId:e.AccountId}}),d=1e3,u=0,m=({maxRetries:e=u,timeout:t=d})=>({maxRetries:e,timeout:t}),p=(e,t)=>{let a=e();for(let n=0;n<t;n++)a=a.catch(e);return a},g="AWS_CONTAINER_CREDENTIALS_FULL_URI",f="AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",h="AWS_CONTAINER_AUTHORIZATION_TOKEN",v=(e={})=>{const{timeout:t,maxRetries:a}=m(e);return()=>p((async()=>{const a=await _({logger:e.logger}),r=JSON.parse(await w(t,a));if(!c(r))throw new n.mV("Invalid response received from instance metadata service.",{logger:e.logger});return l(r)}),a)},w=async(e,t)=>(process.env[h]&&(t.headers={...t.headers,Authorization:process.env[h]}),(await i({...t,timeout:e})).toString()),E={localhost:!0,"127.0.0.1":!0},I={"http:":!0,"https:":!0},_=async({logger:e})=>{if(process.env[f])return{hostname:"169.254.170.2",path:process.env[f]};if(process.env[g]){const t=(0,r.parse)(process.env[g]);if(!t.hostname||!(t.hostname in E))throw new n.mV(`${t.hostname} is not a valid container metadata service hostname`,{tryNextLink:!1,logger:e});if(!t.protocol||!(t.protocol in I))throw new n.mV(`${t.protocol} is not a valid container metadata service protocol`,{tryNextLink:!1,logger:e});return{...t,port:t.port?parseInt(t.port,10):void 0}}throw new n.mV(`The container metadata credential provider cannot be used unless the ${f} or ${g} environment variable is set`,{tryNextLink:!1,logger:e})};var A=a(6827);class y extends n.mV{constructor(e,t=!0){super(e,t),this.tryNextLink=t,this.name="InstanceMetadataV1FallbackError",Object.setPrototypeOf(this,y.prototype)}}var S,T=a(6970);!function(e){e.IPv4="http://169.254.169.254",e.IPv6="http://[fd00:ec2::254]"}(S||(S={}));const b={environmentVariableSelector:e=>e.AWS_EC2_METADATA_SERVICE_ENDPOINT,configFileSelector:e=>e.ec2_metadata_service_endpoint,default:void 0};var x;!function(e){e.IPv4="IPv4",e.IPv6="IPv6"}(x||(x={}));const D={environmentVariableSelector:e=>e.AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE,configFileSelector:e=>e.ec2_metadata_service_endpoint_mode,default:x.IPv4},M=async()=>(0,T.e)(await C()||await N()),C=async()=>(0,A.M)(b)(),N=async()=>{const e=await(0,A.M)(D)();switch(e){case x.IPv4:return S.IPv4;case x.IPv6:return S.IPv6;default:throw new Error(`Unsupported endpoint mode: ${e}. Select from ${Object.values(x)}`)}},k=(e,t)=>{const a=300+Math.floor(300*Math.random()),n=new Date(Date.now()+1e3*a);t.warn(`Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(n)}.\nFor more information, please visit: https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html`);const r=e.originalExpiration??e.expiration;return{...e,...r?{originalExpiration:r}:{},expiration:n}},V="/latest/meta-data/iam/security-credentials/",R="AWS_EC2_METADATA_V1_DISABLED",O="ec2_metadata_v1_disabled",P="x-aws-ec2-metadata-token",L=(e={})=>((e,t={})=>{const a=t?.logger||console;let n;return async()=>{let t;try{t=await e(),t.expiration&&t.expiration.getTime()<Date.now()&&(t=k(t,a))}catch(e){if(!n)throw e;a.warn("Credential renew failed: ",e),t=k(n,a)}return n=t,t}})(U(e),{logger:e.logger}),U=(e={})=>{let t=!1;const{logger:a,profile:r}=e,{timeout:o,maxRetries:s}=m(e),i=async(a,o)=>{if(t||null==o.headers?.[P]){let t=!1,a=!1;const o=await(0,A.M)({environmentVariableSelector:t=>{const r=t[R];if(a=!!r&&"false"!==r,void 0===r)throw new n.mV(`${R} not set in env, checking config file next.`,{logger:e.logger});return a},configFileSelector:e=>{const a=e[O];return t=!!a&&"false"!==a,t},default:!1},{profile:r})();if(e.ec2MetadataV1Disabled||o){const n=[];throw e.ec2MetadataV1Disabled&&n.push("credential provider initialization (runtime option ec2MetadataV1Disabled)"),t&&n.push(`config file profile (${O})`),a&&n.push(`process environment variable (${R})`),new y(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${n.join(", ")}].`)}}const s=(await p((async()=>{let e;try{e=await K(o)}catch(e){throw 401===e.statusCode&&(t=!1),e}return e}),a)).trim();return p((async()=>{let a;try{a=await F(s,o,e)}catch(e){throw 401===e.statusCode&&(t=!1),e}return a}),a)};return async()=>{const e=await M();if(t)return a?.debug("AWS SDK Instance Metadata","using v1 fallback (no token fetch)"),i(s,{...e,timeout:o});{let n;try{n=(await $({...e,timeout:o})).toString()}catch(n){if(400===n?.statusCode)throw Object.assign(n,{message:"EC2 Metadata token request returned error"});return("TimeoutError"===n.message||[403,404,405].includes(n.statusCode))&&(t=!0),a?.debug("AWS SDK Instance Metadata","using v1 fallback (initial)"),i(s,{...e,timeout:o})}return i(s,{...e,headers:{[P]:n},timeout:o})}}},$=async e=>i({...e,path:"/latest/api/token",method:"PUT",headers:{"x-aws-ec2-metadata-token-ttl-seconds":"21600"}}),K=async e=>(await i({...e,path:V})).toString(),F=async(e,t,a)=>{const r=JSON.parse((await i({...t,path:V+e})).toString());if(!c(r))throw new n.mV("Invalid response received from instance metadata service.",{logger:a.logger});return l(r)}}};