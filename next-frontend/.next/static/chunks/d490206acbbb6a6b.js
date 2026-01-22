(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,575388,455935,478637,e=>{"use strict";var t=e.i(364469),r=e.i(38965),o=e.i(969026),a=e.i(710793);function s(e,s){let n,i;return(0,t.keccak256)((n="string"==typeof e?(0,a.stringToHex)(e):"string"==typeof e.raw?e.raw:(0,a.bytesToHex)(e.raw),i=(0,a.stringToHex)(`\x19Ethereum Signed Message:
${(0,o.size)(n)}`),(0,r.concat)([i,n])),s)}e.s(["hashMessage",()=>s],575388),e.s(["hashDomain",()=>k,"hashTypedData",()=>g],478637);var n=e.i(986703);e.s(["getTypesForEIP712Domain",()=>b,"serializeTypedData",()=>f,"validateTypedData",()=>w],455935);var i=e.i(322190),c=e.i(925112),l=e.i(377472),u=e.i(706403);class p extends u.BaseError{constructor({domain:e}){super(`Invalid domain "${(0,l.stringify)(e)}".`,{metaMessages:["Must be a valid EIP-712 domain."]})}}class d extends u.BaseError{constructor({primaryType:e,types:t}){super(`Invalid primary type \`${e}\` must be one of \`${JSON.stringify(Object.keys(t))}\`.`,{docsPath:"/api/glossary/Errors#typeddatainvalidprimarytypeerror",metaMessages:["Check that the primary type is a key in `types`."]})}}class h extends u.BaseError{constructor({type:e}){super(`Struct type "${e}" is invalid.`,{metaMessages:["Struct type must not be a Solidity type."],name:"InvalidStructTypeError"})}}var m=e.i(223608),y=e.i(992167);function f(e){let{domain:t,message:r,primaryType:o,types:a}=e,s=(e,t)=>{let r={...t};for(let t of e){let{name:e,type:o}=t;"address"===o&&(r[e]=r[e].toLowerCase())}return r},n=a.EIP712Domain&&t?s(a.EIP712Domain,t):{},i=(()=>{if("EIP712Domain"!==o)return s(a[o],r)})();return(0,l.stringify)({domain:n,message:i,primaryType:o,types:a})}function w(e){let{domain:t,message:r,primaryType:s,types:n}=e,l=(e,t)=>{for(let r of e){let{name:e,type:s}=r,u=t[e],p=s.match(y.integerRegex);if(p&&("number"==typeof u||"bigint"==typeof u)){let[e,t,r]=p;(0,a.numberToHex)(u,{signed:"int"===t,size:Number.parseInt(r,10)/8})}if("address"===s&&"string"==typeof u&&!(0,m.isAddress)(u))throw new c.InvalidAddressError({address:u});let d=s.match(y.bytesRegex);if(d){let[e,t]=d;if(t&&(0,o.size)(u)!==Number.parseInt(t,10))throw new i.BytesSizeMismatchError({expectedSize:Number.parseInt(t,10),givenSize:(0,o.size)(u)})}let f=n[s];f&&(function(e){if("address"===e||"bool"===e||"string"===e||e.startsWith("bytes")||e.startsWith("uint")||e.startsWith("int"))throw new h({type:e})}(s),l(f,u))}};if(n.EIP712Domain&&t){if("object"!=typeof t)throw new p({domain:t});l(n.EIP712Domain,t)}if("EIP712Domain"!==s)if(n[s])l(n[s],r);else throw new d({primaryType:s,types:n})}function b({domain:e}){return["string"==typeof e?.name&&{name:"name",type:"string"},e?.version&&{name:"version",type:"string"},("number"==typeof e?.chainId||"bigint"==typeof e?.chainId)&&{name:"chainId",type:"uint256"},e?.verifyingContract&&{name:"verifyingContract",type:"address"},e?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}function g(e){let{domain:o={},message:a,primaryType:s}=e,n={EIP712Domain:b({domain:o}),...e.types};w({domain:o,message:a,primaryType:s,types:n});let i=["0x1901"];return o&&i.push(k({domain:o,types:n})),"EIP712Domain"!==s&&i.push(v({data:a,primaryType:s,types:n})),(0,t.keccak256)((0,r.concat)(i))}function k({domain:e,types:t}){return v({data:e,primaryType:"EIP712Domain",types:t})}function v({data:e,primaryType:r,types:o}){let s=function e({data:r,primaryType:o,types:s}){let i=[{type:"bytes32"}],c=[function({primaryType:e,types:r}){let o=(0,a.toHex)(function({primaryType:e,types:t}){let r="",o=function e({primaryType:t,types:r},o=new Set){let a=t.match(/^\w*/u),s=a?.[0];if(o.has(s)||void 0===r[s])return o;for(let t of(o.add(s),r[s]))e({primaryType:t.type,types:r},o);return o}({primaryType:e,types:t});for(let a of(o.delete(e),[e,...Array.from(o).sort()]))r+=`${a}(${t[a].map(({name:e,type:t})=>`${t} ${e}`).join(",")})`;return r}({primaryType:e,types:r}));return(0,t.keccak256)(o)}({primaryType:o,types:s})];for(let l of s[o]){let[o,u]=function r({types:o,name:s,type:i,value:c}){if(void 0!==o[i])return[{type:"bytes32"},(0,t.keccak256)(e({data:c,primaryType:i,types:o}))];if("bytes"===i)return[{type:"bytes32"},(0,t.keccak256)(c)];if("string"===i)return[{type:"bytes32"},(0,t.keccak256)((0,a.toHex)(c))];if(i.lastIndexOf("]")===i.length-1){let e=i.slice(0,i.lastIndexOf("[")),a=c.map(t=>r({name:s,type:e,types:o,value:t}));return[{type:"bytes32"},(0,t.keccak256)((0,n.encodeAbiParameters)(a.map(([e])=>e),a.map(([,e])=>e)))]}return[{type:i},c]}({types:s,name:l.name,type:l.type,value:r[l.name]});i.push(o),c.push(u)}return(0,n.encodeAbiParameters)(i,c)}({data:e,primaryType:r,types:o});return(0,t.keccak256)(s)}},886804,e=>{"use strict";function t(e,t){let r=e.toString(),o=r.startsWith("-");o&&(r=r.slice(1));let[a,s]=[(r=r.padStart(t,"0")).slice(0,r.length-t),r.slice(r.length-t)];return s=s.replace(/(0+)$/,""),`${o?"-":""}${a||"0"}${s?`.${s}`:""}`}e.s(["formatUnits",()=>t])},643674,457031,e=>{"use strict";let t={ether:-9,wei:9};e.s(["etherUnits",0,{gwei:9,wei:18},"gweiUnits",0,t,"weiUnits",0,{ether:-18,gwei:-9}],457031);var r=e.i(886804);function o(e,a="wei"){return(0,r.formatUnits)(e,t[a])}e.s(["formatGwei",()=>o],643674)},320547,e=>{"use strict";e.s(["getContractAddress",0,e=>e,"getUrl",0,e=>e])},475683,765180,e=>{"use strict";var t=e.i(706403),r=e.i(377472),o=t,a=e.i(320547);class s extends o.BaseError{constructor({body:e,cause:t,details:o,headers:s,status:n,url:i}){super("HTTP request failed.",{cause:t,details:o,metaMessages:[n&&`Status: ${n}`,`URL: ${(0,a.getUrl)(i)}`,e&&`Request body: ${(0,r.stringify)(e)}`].filter(Boolean),name:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=s,this.status=n,this.url=i}}o.BaseError;class n extends o.BaseError{constructor({body:e,error:t,url:o}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,a.getUrl)(o)}`,`Request body: ${(0,r.stringify)(e)}`],name:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code,this.data=t.data}}o.BaseError;class i extends o.BaseError{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,a.getUrl)(t)}`,`Request body: ${(0,r.stringify)(e)}`],name:"TimeoutError"})}}e.s(["HttpRequestError",()=>s,"RpcRequestError",()=>n,"TimeoutError",()=>i],765180);class c extends t.BaseError{constructor(e,{code:t,docsPath:r,metaMessages:o,name:a,shortMessage:s}){super(s,{cause:e,docsPath:r,metaMessages:o||e?.metaMessages,name:a||"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=a||e.name,this.code=e instanceof n?e.code:t??-1}}class l extends c{constructor(e,t){super(e,t),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class u extends c{constructor(e){super(e,{code:u.code,name:"ParseRpcError",shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class p extends c{constructor(e){super(e,{code:p.code,name:"InvalidRequestRpcError",shortMessage:"JSON is not a valid request object."})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class d extends c{constructor(e,{method:t}={}){super(e,{code:d.code,name:"MethodNotFoundRpcError",shortMessage:`The method${t?` "${t}"`:""} does not exist / is not available.`})}}Object.defineProperty(d,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class h extends c{constructor(e){super(e,{code:h.code,name:"InvalidParamsRpcError",shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class m extends c{constructor(e){super(e,{code:m.code,name:"InternalRpcError",shortMessage:"An internal error was received."})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class y extends c{constructor(e){super(e,{code:y.code,name:"InvalidInputRpcError",shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class f extends c{constructor(e){super(e,{code:f.code,name:"ResourceNotFoundRpcError",shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class w extends c{constructor(e){super(e,{code:w.code,name:"ResourceUnavailableRpcError",shortMessage:"Requested resource not available."})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class b extends c{constructor(e){super(e,{code:b.code,name:"TransactionRejectedRpcError",shortMessage:"Transaction creation failed."})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class g extends c{constructor(e,{method:t}={}){super(e,{code:g.code,name:"MethodNotSupportedRpcError",shortMessage:`Method${t?` "${t}"`:""} is not supported.`})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class k extends c{constructor(e){super(e,{code:k.code,name:"LimitExceededRpcError",shortMessage:"Request exceeds defined limit."})}}Object.defineProperty(k,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class v extends c{constructor(e){super(e,{code:v.code,name:"JsonRpcVersionUnsupportedError",shortMessage:"Version of JSON-RPC protocol is not supported."})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class x extends l{constructor(e){super(e,{code:x.code,name:"UserRejectedRequestError",shortMessage:"User rejected the request."})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class C extends l{constructor(e){super(e,{code:C.code,name:"UnauthorizedProviderError",shortMessage:"The requested method and/or account has not been authorized by the user."})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class W extends l{constructor(e,{method:t}={}){super(e,{code:W.code,name:"UnsupportedProviderMethodError",shortMessage:`The Provider does not support the requested method${t?` " ${t}"`:""}.`})}}Object.defineProperty(W,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class P extends l{constructor(e){super(e,{code:P.code,name:"ProviderDisconnectedError",shortMessage:"The Provider is disconnected from all chains."})}}Object.defineProperty(P,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class E extends l{constructor(e){super(e,{code:E.code,name:"ChainDisconnectedError",shortMessage:"The Provider is not connected to the requested chain."})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class R extends l{constructor(e){super(e,{code:R.code,name:"SwitchChainError",shortMessage:"An error occurred when attempting to switch chain."})}}Object.defineProperty(R,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class O extends l{constructor(e){super(e,{code:O.code,name:"UnsupportedNonOptionalCapabilityError",shortMessage:"This Wallet does not support a capability that was not marked as optional."})}}Object.defineProperty(O,"code",{enumerable:!0,configurable:!0,writable:!0,value:5700});class I extends l{constructor(e){super(e,{code:I.code,name:"UnsupportedChainIdError",shortMessage:"This Wallet does not support the requested chain ID."})}}Object.defineProperty(I,"code",{enumerable:!0,configurable:!0,writable:!0,value:5710});class q extends l{constructor(e){super(e,{code:q.code,name:"DuplicateIdError",shortMessage:"There is already a bundle submitted with this ID."})}}Object.defineProperty(q,"code",{enumerable:!0,configurable:!0,writable:!0,value:5720});class T extends l{constructor(e){super(e,{code:T.code,name:"UnknownBundleIdError",shortMessage:"This bundle id is unknown / has not been submitted"})}}Object.defineProperty(T,"code",{enumerable:!0,configurable:!0,writable:!0,value:5730});class j extends l{constructor(e){super(e,{code:j.code,name:"BundleTooLargeError",shortMessage:"The call bundle is too large for the Wallet to process."})}}Object.defineProperty(j,"code",{enumerable:!0,configurable:!0,writable:!0,value:5740});class M extends l{constructor(e){super(e,{code:M.code,name:"AtomicReadyWalletRejectedUpgradeError",shortMessage:"The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."})}}Object.defineProperty(M,"code",{enumerable:!0,configurable:!0,writable:!0,value:5750});class B extends l{constructor(e){super(e,{code:B.code,name:"AtomicityNotSupportedError",shortMessage:"The wallet does not support atomic execution but the request requires it."})}}Object.defineProperty(B,"code",{enumerable:!0,configurable:!0,writable:!0,value:5760});class N extends c{constructor(e){super(e,{name:"UnknownRpcError",shortMessage:"An unknown RPC error occurred."})}}e.s(["AtomicReadyWalletRejectedUpgradeError",()=>M,"AtomicityNotSupportedError",()=>B,"BundleTooLargeError",()=>j,"ChainDisconnectedError",()=>E,"DuplicateIdError",()=>q,"InternalRpcError",()=>m,"InvalidInputRpcError",()=>y,"InvalidParamsRpcError",()=>h,"InvalidRequestRpcError",()=>p,"JsonRpcVersionUnsupportedError",()=>v,"LimitExceededRpcError",()=>k,"MethodNotFoundRpcError",()=>d,"MethodNotSupportedRpcError",()=>g,"ParseRpcError",()=>u,"ProviderDisconnectedError",()=>P,"ResourceNotFoundRpcError",()=>f,"ResourceUnavailableRpcError",()=>w,"SwitchChainError",()=>R,"TransactionRejectedRpcError",()=>b,"UnauthorizedProviderError",()=>C,"UnknownBundleIdError",()=>T,"UnknownRpcError",()=>N,"UnsupportedChainIdError",()=>I,"UnsupportedNonOptionalCapabilityError",()=>O,"UnsupportedProviderMethodError",()=>W,"UserRejectedRequestError",()=>x],475683)},365049,e=>{"use strict";var t=e.i(643674),r=e.i(706403);class o extends r.BaseError{constructor({cause:e,message:t}={}){const r=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e,name:"ExecutionRevertedError"})}}Object.defineProperty(o,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class a extends r.BaseError{constructor({cause:e,maxFeePerGas:r}={}){super(`The fee cap (\`maxFeePerGas\`${r?` = ${(0,t.formatGwei)(r)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e,name:"FeeCapTooHighError"})}}Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class s extends r.BaseError{constructor({cause:e,maxFeePerGas:r}={}){super(`The fee cap (\`maxFeePerGas\`${r?` = ${(0,t.formatGwei)(r)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e,name:"FeeCapTooLowError"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class n extends r.BaseError{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e,name:"NonceTooHighError"})}}Object.defineProperty(n,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class i extends r.BaseError{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:e,name:"NonceTooLowError"})}}Object.defineProperty(i,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class c extends r.BaseError{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e,name:"NonceMaxValueError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class l extends r.BaseError{constructor({cause:e}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."],name:"InsufficientFundsError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds|exceeds transaction sender account balance/});class u extends r.BaseError{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e,name:"IntrinsicGasTooHighError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class p extends r.BaseError{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e,name:"IntrinsicGasTooLowError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class d extends r.BaseError{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e,name:"TransactionTypeNotSupportedError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class h extends r.BaseError{constructor({cause:e,maxPriorityFeePerGas:r,maxFeePerGas:o}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${r?` = ${(0,t.formatGwei)(r)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${o?` = ${(0,t.formatGwei)(o)} gwei`:""}).`,{cause:e,name:"TipAboveFeeCapError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class m extends r.BaseError{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e,name:"UnknownNodeError"})}}e.s(["ExecutionRevertedError",()=>o,"FeeCapTooHighError",()=>a,"FeeCapTooLowError",()=>s,"InsufficientFundsError",()=>l,"IntrinsicGasTooHighError",()=>u,"IntrinsicGasTooLowError",()=>p,"NonceMaxValueError",()=>c,"NonceTooHighError",()=>n,"NonceTooLowError",()=>i,"TipAboveFeeCapError",()=>h,"TransactionTypeNotSupportedError",()=>d,"UnknownNodeError",()=>m])},648439,631003,e=>{"use strict";function t(){let e=()=>void 0,t=()=>void 0;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}}e.s(["withResolvers",()=>t],631003);let r=new Map;function o({fn:e,id:o,shouldSplitBatch:a,wait:s=0,sort:n}){let i=async()=>{let t=l();c();let r=t.map(({args:e})=>e);0!==r.length&&e(r).then(e=>{n&&Array.isArray(e)&&e.sort(n);for(let r=0;r<t.length;r++){let{resolve:o}=t[r];o?.([e[r],e])}}).catch(e=>{for(let r=0;r<t.length;r++){let{reject:o}=t[r];o?.(e)}})},c=()=>r.delete(o),l=()=>r.get(o)||[],u=e=>r.set(o,[...l(),e]);return{flush:c,async schedule(e){let{promise:r,resolve:o,reject:n}=t();return(a?.([...l().map(({args:e})=>e),e])&&i(),l().length>0)?u({args:e,resolve:o,reject:n}):(u({args:e,resolve:o,reject:n}),setTimeout(i,s)),r}}}e.s(["createBatchScheduler",()=>o],648439)},239944,e=>{"use strict";async function t(e){return new Promise(t=>setTimeout(t,e))}e.s(["wait",()=>t])},776395,e=>{"use strict";var t=e.i(239944);function r(e,{delay:o=100,retryCount:a=2,shouldRetry:s=()=>!0}={}){return new Promise((r,n)=>{let i=async({count:c=0}={})=>{let l=async({error:e})=>{let r="function"==typeof o?o({count:c,error:e}):o;r&&await (0,t.wait)(r),i({count:c+1})};try{let t=await e();r(t)}catch(e){if(c<a&&await s({count:c,error:e}))return l({error:e});n(e)}};i()})}e.s(["withRetry",()=>r])},237468,e=>{"use strict";let t,r=256;function o(e=11){if(!t||r+e>512){t="",r=0;for(let e=0;e<256;e++)t+=(256+256*Math.random()|0).toString(16).substring(1)}return t.substring(r,r+++e)}e.s(["uid",()=>o])},421559,e=>{"use strict";let t=new(e.i(547289)).LruMap(8192);function r(e,{enabled:r=!0,id:o}){if(!r||!o)return e();if(t.get(o))return t.get(o);let a=e().finally(()=>t.delete(o));return t.set(o,a),a}e.s(["withDedupe",()=>r])},329516,e=>{"use strict";var t=e.i(706403),r=e.i(765180),o=e.i(475683),a=e.i(710793),s=e.i(421559),n=e.i(776395),i=e.i(377472);function c(e,l={}){return async(c,u={})=>{let{dedupe:p=!1,methods:d,retryDelay:h=150,retryCount:m=3,uid:y}={...l,...u},{method:f}=c;if(d?.exclude?.includes(f)||d?.include&&!d.include.includes(f))throw new o.MethodNotSupportedRpcError(Error("method not supported"),{method:f});let w=p?(0,a.stringToHex)(`${y}.${(0,i.stringify)(c)}`):void 0;return(0,s.withDedupe)(()=>(0,n.withRetry)(async()=>{try{return await e(c)}catch(e){switch(e.code){case o.ParseRpcError.code:throw new o.ParseRpcError(e);case o.InvalidRequestRpcError.code:throw new o.InvalidRequestRpcError(e);case o.MethodNotFoundRpcError.code:throw new o.MethodNotFoundRpcError(e,{method:c.method});case o.InvalidParamsRpcError.code:throw new o.InvalidParamsRpcError(e);case o.InternalRpcError.code:throw new o.InternalRpcError(e);case o.InvalidInputRpcError.code:throw new o.InvalidInputRpcError(e);case o.ResourceNotFoundRpcError.code:throw new o.ResourceNotFoundRpcError(e);case o.ResourceUnavailableRpcError.code:throw new o.ResourceUnavailableRpcError(e);case o.TransactionRejectedRpcError.code:throw new o.TransactionRejectedRpcError(e);case o.MethodNotSupportedRpcError.code:throw new o.MethodNotSupportedRpcError(e,{method:c.method});case o.LimitExceededRpcError.code:throw new o.LimitExceededRpcError(e);case o.JsonRpcVersionUnsupportedError.code:throw new o.JsonRpcVersionUnsupportedError(e);case o.UserRejectedRequestError.code:throw new o.UserRejectedRequestError(e);case o.UnauthorizedProviderError.code:throw new o.UnauthorizedProviderError(e);case o.UnsupportedProviderMethodError.code:throw new o.UnsupportedProviderMethodError(e);case o.ProviderDisconnectedError.code:throw new o.ProviderDisconnectedError(e);case o.ChainDisconnectedError.code:throw new o.ChainDisconnectedError(e);case o.SwitchChainError.code:throw new o.SwitchChainError(e);case o.UnsupportedNonOptionalCapabilityError.code:throw new o.UnsupportedNonOptionalCapabilityError(e);case o.UnsupportedChainIdError.code:throw new o.UnsupportedChainIdError(e);case o.DuplicateIdError.code:throw new o.DuplicateIdError(e);case o.UnknownBundleIdError.code:throw new o.UnknownBundleIdError(e);case o.BundleTooLargeError.code:throw new o.BundleTooLargeError(e);case o.AtomicReadyWalletRejectedUpgradeError.code:throw new o.AtomicReadyWalletRejectedUpgradeError(e);case o.AtomicityNotSupportedError.code:throw new o.AtomicityNotSupportedError(e);case 5e3:throw new o.UserRejectedRequestError(e);default:if(e instanceof t.BaseError)throw e;throw new o.UnknownRpcError(e)}}},{delay:({count:e,error:t})=>{if(t&&t instanceof r.HttpRequestError){let e=t?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*Number.parseInt(e,10)}return~~(1<<e)*h},retryCount:m,shouldRetry:({error:e})=>{var t;return"code"in(t=e)&&"number"==typeof t.code?-1===t.code||t.code===o.LimitExceededRpcError.code||t.code===o.InternalRpcError.code:!(t instanceof r.HttpRequestError)||!t.status||403===t.status||408===t.status||413===t.status||429===t.status||500===t.status||502===t.status||503===t.status||504===t.status||!1}}),{enabled:p,id:w})}}e.s(["buildRequest",()=>c])},48853,e=>{"use strict";var t=e.i(329516),r=e.i(237468);function o({key:e,methods:o,name:a,request:s,retryCount:n=3,retryDelay:i=150,timeout:c,type:l},u){let p=(0,r.uid)();return{config:{key:e,methods:o,name:a,request:s,retryCount:n,retryDelay:i,timeout:c,type:l},request:(0,t.buildRequest)(s,{methods:o,retryCount:n,retryDelay:i,uid:p}),value:u}}e.s(["createTransport",()=>o])},443269,301128,870065,e=>{"use strict";var t=e.i(706403);class r extends t.BaseError{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro",name:"UrlRequiredError"})}}e.s(["UrlRequiredError",()=>r],443269);var o=e.i(765180);function a(e,{errorInstance:t=Error("timed out"),timeout:r,signal:o}){return new Promise((a,s)=>{(async()=>{let n;try{let i=new AbortController;r>0&&(n=setTimeout(()=>{o?i.abort():s(t)},r)),a(await e({signal:i?.signal||null}))}catch(e){e?.name==="AbortError"&&s(t),s(e)}finally{clearTimeout(n)}})()})}e.s(["withTimeout",()=>a],301128);var s=e.i(377472);let n={current:0,take(){return this.current++},reset(){this.current=0}};function i(e,t={}){return{async request(r){let{body:i,fetchFn:c=t.fetchFn??fetch,onRequest:l=t.onRequest,onResponse:u=t.onResponse,timeout:p=t.timeout??1e4}=r,d={...t.fetchOptions??{},...r.fetchOptions??{}},{headers:h,method:m,signal:y}=d;try{let t,r=await a(async({signal:t})=>{let r={...d,body:Array.isArray(i)?(0,s.stringify)(i.map(e=>({jsonrpc:"2.0",id:e.id??n.take(),...e}))):(0,s.stringify)({jsonrpc:"2.0",id:i.id??n.take(),...i}),headers:{"Content-Type":"application/json",...h},method:m||"POST",signal:y||(p>0?t:null)},o=new Request(e,r),a=await l?.(o,r)??{...r,url:e};return await c(a.url??e,a)},{errorInstance:new o.TimeoutError({body:i,url:e}),timeout:p,signal:!0});if(u&&await u(r),r.headers.get("Content-Type")?.startsWith("application/json"))t=await r.json();else{t=await r.text();try{t=JSON.parse(t||"{}")}catch(e){if(r.ok)throw e;t={error:t}}}if(!r.ok)throw new o.HttpRequestError({body:i,details:(0,s.stringify)(t.error)||r.statusText,headers:r.headers,status:r.status,url:e});return t}catch(t){if(t instanceof o.HttpRequestError||t instanceof o.TimeoutError)throw t;throw new o.HttpRequestError({body:i,cause:t,url:e})}}}}e.s(["getHttpRpcClient",()=>i],870065)},916169,e=>{"use strict";var t=e.i(765180),r=e.i(443269),o=e.i(648439),a=e.i(870065),s=e.i(48853);function n(e,i={}){let{batch:c,fetchFn:l,fetchOptions:u,key:p="http",methods:d,name:h="HTTP JSON-RPC",onFetchRequest:m,onFetchResponse:y,retryDelay:f,raw:w}=i;return({chain:n,retryCount:b,timeout:g})=>{let{batchSize:k=1e3,wait:v=0}="object"==typeof c?c:{},x=i.retryCount??b,C=g??i.timeout??1e4,W=e||n?.rpcUrls.default.http[0];if(!W)throw new r.UrlRequiredError;let P=(0,a.getHttpRpcClient)(W,{fetchFn:l,fetchOptions:u,onRequest:m,onResponse:y,timeout:C});return(0,s.createTransport)({key:p,methods:d,name:h,async request({method:e,params:r}){let a={method:e,params:r},{schedule:s}=(0,o.createBatchScheduler)({id:W,wait:v,shouldSplitBatch:e=>e.length>k,fn:e=>P.request({body:e}),sort:(e,t)=>e.id-t.id}),n=async e=>c?s(e):[await P.request({body:e})],[{error:i,result:l}]=await n(a);if(w)return{error:i,result:l};if(i)throw new t.RpcRequestError({body:a,error:i,url:W});return l},retryCount:x,retryDelay:f,timeout:C,type:"http"},{fetchOptions:u,url:W})}}e.s(["http",()=>n])},529947,e=>{"use strict";var t=`{
  "connect_wallet": {
    "label": "Connect Wallet",
    "wrong_network": {
      "label": "Wrong network"
    }
  },

  "intro": {
    "title": "What is a Wallet?",
    "description": "A wallet is used to send, receive, store, and display digital assets. It's also a new way to log in, without needing to create new accounts and passwords on every website.",
    "digital_asset": {
      "title": "A Home for your Digital Assets",
      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."
    },
    "login": {
      "title": "A New Way to Log In",
      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."
    },
    "get": {
      "label": "Get a Wallet"
    },
    "learn_more": {
      "label": "Learn More"
    }
  },

  "sign_in": {
    "label": "Verify your account",
    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",
    "message": {
      "send": "Sign message",
      "preparing": "Preparing message...",
      "cancel": "Cancel",
      "preparing_error": "Error preparing message, please retry!"
    },
    "signature": {
      "waiting": "Waiting for signature...",
      "verifying": "Verifying signature...",
      "signing_error": "Error signing message, please retry!",
      "verifying_error": "Error verifying signature, please retry!",
      "oops_error": "Oops, something went wrong!"
    }
  },

  "connect": {
    "label": "Connect",
    "title": "Connect a Wallet",
    "new_to_ethereum": {
      "description": "New to Ethereum wallets?",
      "learn_more": {
        "label": "Learn More"
      }
    },
    "learn_more": {
      "label": "Learn more"
    },
    "recent": "Recent",
    "status": {
      "opening": "Opening %{wallet}...",
      "connecting": "Connecting",
      "connect_mobile": "Continue in %{wallet}",
      "not_installed": "%{wallet} is not installed",
      "not_available": "%{wallet} is not available",
      "confirm": "Confirm connection in the extension",
      "confirm_mobile": "Accept connection request in the wallet"
    },
    "secondary_action": {
      "get": {
        "description": "Don't have %{wallet}?",
        "label": "GET"
      },
      "install": {
        "label": "INSTALL"
      },
      "retry": {
        "label": "RETRY"
      }
    },
    "walletconnect": {
      "description": {
        "full": "Need the official WalletConnect modal?",
        "compact": "Need the WalletConnect modal?"
      },
      "open": {
        "label": "OPEN"
      }
    }
  },

  "connect_scan": {
    "title": "Scan with %{wallet}",
    "fallback_title": "Scan with your phone"
  },

  "connector_group": {
    "installed": "Installed",
    "recommended": "Recommended",
    "other": "Other",
    "popular": "Popular",
    "more": "More",
    "others": "Others"
  },

  "get": {
    "title": "Get a Wallet",
    "action": {
      "label": "GET"
    },
    "mobile": {
      "description": "Mobile Wallet"
    },
    "extension": {
      "description": "Browser Extension"
    },
    "mobile_and_extension": {
      "description": "Mobile Wallet and Extension"
    },
    "mobile_and_desktop": {
      "description": "Mobile and Desktop Wallet"
    },
    "looking_for": {
      "title": "Not what you're looking for?",
      "mobile": {
        "description": "Select a wallet on the main screen to get started with a different wallet provider."
      },
      "desktop": {
        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",
        "wide_description": "Select a wallet on the left to get started with a different wallet provider."
      }
    }
  },

  "get_options": {
    "title": "Get started with %{wallet}",
    "short_title": "Get %{wallet}",
    "mobile": {
      "title": "%{wallet} for Mobile",
      "description": "Use the mobile wallet to explore the world of Ethereum.",
      "download": {
        "label": "Get the app"
      }
    },
    "extension": {
      "title": "%{wallet} for %{browser}",
      "description": "Access your wallet right from your favorite web browser.",
      "download": {
        "label": "Add to %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} for %{platform}",
      "description": "Access your wallet natively from your powerful desktop.",
      "download": {
        "label": "Add to %{platform}"
      }
    }
  },

  "get_mobile": {
    "title": "Install %{wallet}",
    "description": "Scan with your phone to download on iOS or Android",
    "continue": {
      "label": "Continue"
    }
  },

  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "extension": {
      "refresh": {
        "label": "Refresh"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "desktop": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    }
  },

  "chains": {
    "title": "Switch Networks",
    "wrong_network": "Wrong network detected, switch or disconnect to continue.",
    "confirm": "Confirm in Wallet",
    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",
    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",
    "disconnect": "Disconnect",
    "connected": "Connected"
  },

  "profile": {
    "disconnect": {
      "label": "Disconnect"
    },
    "copy_address": {
      "label": "Copy Address",
      "copied": "Copied!"
    },
    "explorer": {
      "label": "View more on explorer"
    },
    "transactions": {
      "description": "%{appName} transactions will appear here...",
      "description_fallback": "Your transactions will appear here...",
      "recent": {
        "title": "Recent Transactions"
      },
      "clear": {
        "label": "Clear All"
      }
    }
  },

  "wallet_connectors": {
    "argent": {
      "qr_code": {
        "step1": {
          "description": "Put Argent on your home screen for faster access to your wallet.",
          "title": "Open the Argent app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "berasig": {
      "extension": {
        "step1": {
          "title": "Install the BeraSig extension",
          "description": "We recommend pinning BeraSig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "best": {
      "qr_code": {
        "step1": {
          "title": "Open the Best Wallet app",
          "description": "Add Best Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",
          "title": "Open the Bifrost Wallet app"
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "bitget": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",
          "title": "Open the Bitget Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitget Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitski": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitski extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "Open the Bitverse Wallet app",
          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bloom": {
      "desktop": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      }
    },

    "bybit": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",
          "title": "Open the Bybit app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",
          "title": "Install the Bybit Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "binance": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",
          "title": "Open the Binance app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Binance Wallet extension",
          "description": "We recommend pinning Binance Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "coin98": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",
          "title": "Open the Coin98 Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",
          "title": "Install the Coin98 Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",
          "title": "Open the Coinbase Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Coinbase Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "compass": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Compass Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "core": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Core on your home screen for faster access to your wallet.",
          "title": "Open the Core app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",
          "title": "Install the Core extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "fox": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting FoxWallet on your home screen for quicker access.",
          "title": "Open the FoxWallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "frontier": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",
          "title": "Open the Frontier Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Frontier Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "im_token": {
      "qr_code": {
        "step1": {
          "title": "Open the imToken app",
          "description": "Put imToken app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "iopay": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",
          "title": "Open the ioPay app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      }
    },

    "kaikas": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaikas extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaikas app",
          "description": "Put Kaikas app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kaia": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaia extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaia app",
          "description": "Put Kaia app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kraken": {
      "qr_code": {
        "step1": {
          "title": "Open the Kraken Wallet app",
          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "kresus": {
      "qr_code": {
        "step1": {
          "title": "Open the Kresus Wallet app",
          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "magicEden": {
      "extension": {
        "step1": {
          "title": "Install the Magic Eden extension",
          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "metamask": {
      "qr_code": {
        "step1": {
          "title": "Open the MetaMask app",
          "description": "We recommend putting MetaMask on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the MetaMask extension",
          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "nestwallet": {
      "extension": {
        "step1": {
          "title": "Install the NestWallet extension",
          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "okx": {
      "qr_code": {
        "step1": {
          "title": "Open the OKX Wallet app",
          "description": "We recommend putting OKX Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the OKX Wallet extension",
          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "omni": {
      "qr_code": {
        "step1": {
          "title": "Open the Omni app",
          "description": "Add Omni to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "1inch": {
      "qr_code": {
        "step1": {
          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",
          "title": "Open the 1inch Wallet app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "Open the TokenPocket app",
          "description": "We recommend putting TokenPocket on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the TokenPocket extension",
          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "trust": {
      "qr_code": {
        "step1": {
          "title": "Open the Trust Wallet app",
          "description": "Put Trust Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Trust Wallet extension",
          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "Open the Uniswap app",
          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "zerion": {
      "qr_code": {
        "step1": {
          "title": "Open the Zerion app",
          "description": "We recommend putting Zerion on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Zerion extension",
          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "Open the Rainbow app",
          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "You can easily backup your wallet using our backup feature on your phone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "enkrypt": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Enkrypt Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "frame": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",
          "title": "Install Frame & the companion extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "one_key": {
      "extension": {
        "step1": {
          "title": "Install the OneKey Wallet extension",
          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "paraswap": {
      "qr_code": {
        "step1": {
          "title": "Open the ParaSwap app",
          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "phantom": {
      "extension": {
        "step1": {
          "title": "Install the Phantom extension",
          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rabby": {
      "extension": {
        "step1": {
          "title": "Install the Rabby extension",
          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ronin": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",
          "title": "Open the Ronin Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Ronin Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "ramper": {
      "extension": {
        "step1": {
          "title": "Install the Ramper extension",
          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safeheron": {
      "extension": {
        "step1": {
          "title": "Install the Core extension",
          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "taho": {
      "extension": {
        "step1": {
          "title": "Install the Taho extension",
          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "wigwam": {
      "extension": {
        "step1": {
          "title": "Install the Wigwam extension",
          "description": "We recommend pinning Wigwam to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "talisman": {
      "extension": {
        "step1": {
          "title": "Install the Talisman extension",
          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import an Ethereum Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "xdefi": {
      "extension": {
        "step1": {
          "title": "Install the XDEFI Wallet extension",
          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "zeal": {
      "qr_code": {
        "step1": {
          "title": "Open the Zeal app",
          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Zeal extension",
          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safepal": {
      "extension": {
        "step1": {
          "title": "Install the SafePal Wallet extension",
          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SafePal Wallet app",
          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "desig": {
      "extension": {
        "step1": {
          "title": "Install the Desig extension",
          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "subwallet": {
      "extension": {
        "step1": {
          "title": "Install the SubWallet extension",
          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SubWallet app",
          "description": "We recommend putting SubWallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "clv": {
      "extension": {
        "step1": {
          "title": "Install the CLV Wallet extension",
          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the CLV Wallet app",
          "description": "We recommend putting CLV Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "okto": {
      "qr_code": {
        "step1": {
          "title": "Open the Okto app",
          "description": "Add Okto to your home screen for quick access"
        },
        "step2": {
          "title": "Create an MPC Wallet",
          "description": "Create an account and generate a wallet"
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."
        }
      }
    },

    "ledger": {
      "desktop": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "Set up a new Ledger or connect to an existing one."
        },
        "step3": {
          "title": "Connect",
          "description": "A connection prompt will appear for you to connect your wallet."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "You can either sync with the desktop app or connect your Ledger."
        },
        "step3": {
          "title": "Scan the code",
          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "valora": {
      "qr_code": {
        "step1": {
          "title": "Open the Valora app",
          "description": "We recommend putting Valora on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "gate": {
      "qr_code": {
        "step1": {
          "title": "Open the Gate app",
          "description": "We recommend putting Gate on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Gate extension",
          "description": "We recommend pinning Gate to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "gemini": {
      "qr_code": {
        "step1": {
          "title": "Open keys.gemini.com",
          "description": "Visit keys.gemini.com on your mobile browser - no app download required."
        },
        "step2": {
          "title": "Create Your Wallet Instantly",
          "description": "Set up your smart wallet in seconds using your device's built-in authentication."
        },
        "step3": {
          "title": "Scan to Connect",
          "description": "Scan the QR code to instantly connect your wallet - it just works."
        }
      },
      "extension": {
        "step1": {
          "title": "Go to keys.gemini.com",
          "description": "No extensions or downloads needed - your wallet lives securely in the browser."
        },
        "step2": {
          "title": "One-Click Setup",
          "description": "Create your smart wallet instantly with passkey authentication - easier than any wallet out there."
        },
        "step3": {
          "title": "Connect and Go",
          "description": "Approve the connection and you're ready - the unopinionated wallet that just works."
        }
      }
    },

    "xportal": {
      "qr_code": {
        "step1": {
          "description": "Put xPortal on your home screen for faster access to your wallet.",
          "title": "Open the xPortal app"
        },
        "step2": {
          "description": "Create a wallet or import an existing one.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "mew": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting MEW Wallet on your home screen for quicker access.",
          "title": "Open the MEW Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "zilpay": {
      "qr_code": {
        "step1": {
          "title": "Open the ZilPay app",
          "description": "Add ZilPay to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "nova": {
      "qr_code": {
        "step1": {
          "title": "Open the Nova Wallet app",
          "description": "Add Nova Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    }
  }
}
`;e.s(["en_US_default",()=>t])},679613,e=>{"use strict";var t=e.i(702662),r=e.i(831412),o=e.i(187162),a=e.i(914852),s=e.i(638127),n=class extends s.Subscribable{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,a){let s=t.queryKey,n=t.queryHash??(0,r.hashQueryKeyByOptions)(s,t),i=this.get(n);return i||(i=new o.Query({client:e,queryKey:s,queryHash:n,options:e.defaultQueryOptions(t),state:a,defaultOptions:e.getQueryDefaults(s)}),this.add(i)),i}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){a.notifyManager.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,r.matchQuery)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,r.matchQuery)(e,t)):t}notify(e){a.notifyManager.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){a.notifyManager.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){a.notifyManager.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},i=e.i(795789),c=s,l=class extends c.Subscribable{constructor(e={}){super(),this.config=e,this.#t=new Set,this.#r=new Map,this.#o=0}#t;#r;#o;build(e,t,r){let o=new i.Mutation({client:e,mutationCache:this,mutationId:++this.#o,options:e.defaultMutationOptions(t),state:r});return this.add(o),o}add(e){this.#t.add(e);let t=u(e);if("string"==typeof t){let r=this.#r.get(t);r?r.push(e):this.#r.set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#t.delete(e)){let t=u(e);if("string"==typeof t){let r=this.#r.get(t);if(r)if(r.length>1){let t=r.indexOf(e);-1!==t&&r.splice(t,1)}else r[0]===e&&this.#r.delete(t)}}this.notify({type:"removed",mutation:e})}canRun(e){let t=u(e);if("string"!=typeof t)return!0;{let r=this.#r.get(t),o=r?.find(e=>"pending"===e.state.status);return!o||o===e}}runNext(e){let t=u(e);if("string"!=typeof t)return Promise.resolve();{let r=this.#r.get(t)?.find(t=>t!==e&&t.state.isPaused);return r?.continue()??Promise.resolve()}}clear(){a.notifyManager.batch(()=>{this.#t.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#t.clear(),this.#r.clear()})}getAll(){return Array.from(this.#t)}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,r.matchMutation)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,r.matchMutation)(e,t))}notify(e){a.notifyManager.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return a.notifyManager.batch(()=>Promise.all(e.map(e=>e.continue().catch(r.noop))))}};function u(e){return e.options.scope?.id}var p=e.i(540077),d=e.i(641741),h=e.i(962652),m=class{#a;#s;#n;#i;#c;#l;#u;#p;constructor(e={}){this.#a=e.queryCache||new n,this.#s=e.mutationCache||new l,this.#n=e.defaultOptions||{},this.#i=new Map,this.#c=new Map,this.#l=0}mount(){this.#l++,1===this.#l&&(this.#u=p.focusManager.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#a.onFocus())}),this.#p=d.onlineManager.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#a.onOnline())}))}unmount(){this.#l--,0===this.#l&&(this.#u?.(),this.#u=void 0,this.#p?.(),this.#p=void 0)}isFetching(e){return this.#a.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#s.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#a.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),o=this.#a.build(this,t),a=o.state.data;return void 0===a?this.fetchQuery(e):(e.revalidateIfStale&&o.isStaleByTime((0,r.resolveStaleTime)(t.staleTime,o))&&this.prefetchQuery(t),Promise.resolve(a))}getQueriesData(e){return this.#a.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,o){let a=this.defaultQueryOptions({queryKey:e}),s=this.#a.get(a.queryHash),n=s?.state.data,i=(0,r.functionalUpdate)(t,n);if(void 0!==i)return this.#a.build(this,a).setData(i,{...o,manual:!0})}setQueriesData(e,t,r){return a.notifyManager.batch(()=>this.#a.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#a.get(t.queryHash)?.state}removeQueries(e){let t=this.#a;a.notifyManager.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let r=this.#a;return a.notifyManager.batch(()=>(r.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){let o={revert:!0,...t};return Promise.all(a.notifyManager.batch(()=>this.#a.findAll(e).map(e=>e.cancel(o)))).then(r.noop).catch(r.noop)}invalidateQueries(e,t={}){return a.notifyManager.batch(()=>(this.#a.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType==="none")?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??"active"},t))}refetchQueries(e,t={}){let o={...t,cancelRefetch:t.cancelRefetch??!0};return Promise.all(a.notifyManager.batch(()=>this.#a.findAll(e).filter(e=>!e.isDisabled()&&!e.isStatic()).map(e=>{let t=e.fetch(void 0,o);return o.throwOnError||(t=t.catch(r.noop)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(r.noop)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let o=this.#a.build(this,t);return o.isStaleByTime((0,r.resolveStaleTime)(t.staleTime,o))?o.fetch(t):Promise.resolve(o.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(r.noop).catch(r.noop)}fetchInfiniteQuery(e){return e.behavior=(0,h.infiniteQueryBehavior)(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(r.noop).catch(r.noop)}ensureInfiniteQueryData(e){return e.behavior=(0,h.infiniteQueryBehavior)(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return d.onlineManager.isOnline()?this.#s.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#a}getMutationCache(){return this.#s}getDefaultOptions(){return this.#n}setDefaultOptions(e){this.#n=e}setQueryDefaults(e,t){this.#i.set((0,r.hashKey)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#i.values()],o={};return t.forEach(t=>{(0,r.partialMatchKey)(e,t.queryKey)&&Object.assign(o,t.defaultOptions)}),o}setMutationDefaults(e,t){this.#c.set((0,r.hashKey)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#c.values()],o={};return t.forEach(t=>{(0,r.partialMatchKey)(e,t.mutationKey)&&Object.assign(o,t.defaultOptions)}),o}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#n.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,r.hashQueryKeyByOptions)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===r.skipToken&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#n.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#a.clear(),this.#s.clear()}},y=e.i(459224),f=e.i(821493),w=e.i(794972),b=e.i(847347);let g=(0,w.getDefaultConfig)({appName:"BlockBelle",projectId:"54ce9aeda9332fba67ac4617e6d7ac1e",chains:[b.celo],ssr:!1});window.location.origin;var k=e.i(22752);function v({children:e}){let r=(0,k.useMemo)(()=>new m({defaultOptions:{queries:{staleTime:6e4}}}),[]);return(0,t.jsx)(f.WagmiProvider,{config:g,children:(0,t.jsx)(y.QueryClientProvider,{client:r,children:(0,t.jsx)(w.RainbowKitProvider,{modalSize:"compact",initialChain:b.celo,showRecentTransactions:!0,children:e})})})}e.s(["Providers",()=>v],679613)},925844,e=>{e.v(t=>Promise.all(["static/chunks/61aaaec4252a9542.js"].map(t=>e.l(t))).then(()=>t(887035)))},904774,e=>{e.v(e=>Promise.resolve().then(()=>e(413401)))},650608,e=>{e.v(t=>Promise.all(["static/chunks/af216218a735aee0.js","static/chunks/14808a172200bd98.js","static/chunks/7871236c1b71a27b.js"].map(t=>e.l(t))).then(()=>t(569913)))},110970,e=>{e.v(t=>Promise.all(["static/chunks/905ab4c5d9926acc.js","static/chunks/1df6efd08a015d17.js"].map(t=>e.l(t))).then(()=>t(33995)))},154435,e=>{e.v(t=>Promise.all(["static/chunks/89ac6f269196c391.js","static/chunks/1c9983aeaa09e8fa.js"].map(t=>e.l(t))).then(()=>t(390343)))},668923,e=>{e.v(t=>Promise.all(["static/chunks/309a3e6fc75b23da.js"].map(t=>e.l(t))).then(()=>t(424669)))},457874,e=>{e.v(t=>Promise.all(["static/chunks/c6986e983498155e.js","static/chunks/afadf1b97b26651f.js"].map(t=>e.l(t))).then(()=>t(426306)))},204234,e=>{e.v(t=>Promise.all(["static/chunks/40b159ed262c0d54.js"].map(t=>e.l(t))).then(()=>t(772700)))},449238,e=>{e.v(t=>Promise.all(["static/chunks/6b72b81db4d6da1d.js"].map(t=>e.l(t))).then(()=>t(489261)))},108749,e=>{e.v(t=>Promise.all(["static/chunks/0fcd9bebb3ecadac.js"].map(t=>e.l(t))).then(()=>t(47667)))},867254,e=>{e.v(t=>Promise.all(["static/chunks/43c6df48af5c71ab.js"].map(t=>e.l(t))).then(()=>t(652513)))},480267,e=>{e.v(t=>Promise.all(["static/chunks/677219c474e44156.js"].map(t=>e.l(t))).then(()=>t(301560)))},741338,e=>{e.v(t=>Promise.all(["static/chunks/a84973be66264f7c.js"].map(t=>e.l(t))).then(()=>t(304517)))},875666,e=>{e.v(t=>Promise.all(["static/chunks/311349d7e42c6587.js"].map(t=>e.l(t))).then(()=>t(288571)))},88707,e=>{e.v(t=>Promise.all(["static/chunks/daef7c2b2b6c2575.js"].map(t=>e.l(t))).then(()=>t(371858)))},850953,e=>{e.v(t=>Promise.all(["static/chunks/7124394196c37eea.js"].map(t=>e.l(t))).then(()=>t(406393)))},653310,e=>{e.v(t=>Promise.all(["static/chunks/05cfaecc042919da.js"].map(t=>e.l(t))).then(()=>t(26613)))},119652,e=>{e.v(t=>Promise.all(["static/chunks/0e99cfa47705daeb.js"].map(t=>e.l(t))).then(()=>t(316130)))},392953,e=>{e.v(t=>Promise.all(["static/chunks/9da43b475b5f8344.js"].map(t=>e.l(t))).then(()=>t(557809)))},637020,e=>{e.v(t=>Promise.all(["static/chunks/8b0e2017e6911805.js"].map(t=>e.l(t))).then(()=>t(888888)))},635732,e=>{e.v(t=>Promise.all(["static/chunks/b6f650c597bd9403.js"].map(t=>e.l(t))).then(()=>t(303715)))},68670,e=>{e.v(t=>Promise.all(["static/chunks/bf209c231b1f25ba.js"].map(t=>e.l(t))).then(()=>t(898514)))},127412,e=>{e.v(t=>Promise.all(["static/chunks/0010fa07aeff05d3.js"].map(t=>e.l(t))).then(()=>t(921233)))},113378,e=>{e.v(t=>Promise.all(["static/chunks/ee44a3fdc04f45eb.js"].map(t=>e.l(t))).then(()=>t(408011)))},599362,e=>{e.v(t=>Promise.all(["static/chunks/e59a7c113e586537.js"].map(t=>e.l(t))).then(()=>t(312245)))},974812,e=>{e.v(t=>Promise.all(["static/chunks/cc2f9b506bce8104.js"].map(t=>e.l(t))).then(()=>t(156853)))},376133,e=>{e.v(t=>Promise.all(["static/chunks/1ffcfacfb6685cd1.js"].map(t=>e.l(t))).then(()=>t(61598)))},935619,e=>{e.v(t=>Promise.all(["static/chunks/25ee7a61b0d46965.js"].map(t=>e.l(t))).then(()=>t(959524)))},801791,e=>{e.v(t=>Promise.all(["static/chunks/2a214e1085d8d380.js"].map(t=>e.l(t))).then(()=>t(463124)))},987120,e=>{e.v(t=>Promise.all(["static/chunks/2330dd8154fc9751.js"].map(t=>e.l(t))).then(()=>t(976931)))},824821,e=>{e.v(t=>Promise.all(["static/chunks/b5c9eab8fa8dd70c.js"].map(t=>e.l(t))).then(()=>t(277027)))},566326,e=>{e.v(t=>Promise.all(["static/chunks/27280c651ddde359.js"].map(t=>e.l(t))).then(()=>t(347540)))},867048,e=>{e.v(t=>Promise.all(["static/chunks/4cb135492ecc58ec.js"].map(t=>e.l(t))).then(()=>t(474914)))},497626,e=>{e.v(t=>Promise.all(["static/chunks/8076990fb5643bb8.js"].map(t=>e.l(t))).then(()=>t(633149)))},625209,e=>{e.v(t=>Promise.all(["static/chunks/8e0354bd0da7be24.js"].map(t=>e.l(t))).then(()=>t(775248)))},209537,e=>{e.v(t=>Promise.all(["static/chunks/6fa48947d6408771.js"].map(t=>e.l(t))).then(()=>t(355532)))},707374,e=>{e.v(t=>Promise.all(["static/chunks/f0777207cab2f1e3.js"].map(t=>e.l(t))).then(()=>t(661292)))},83027,e=>{e.v(t=>Promise.all(["static/chunks/fce879752a8c6781.js"].map(t=>e.l(t))).then(()=>t(791328)))},116669,e=>{e.v(t=>Promise.all(["static/chunks/c1f4e6ac9bf07706.js"].map(t=>e.l(t))).then(()=>t(251725)))},109905,e=>{e.v(t=>Promise.all(["static/chunks/1d611a1347697b85.js"].map(t=>e.l(t))).then(()=>t(157430)))},492905,e=>{e.v(t=>Promise.all(["static/chunks/88e0b987a556cd95.js"].map(t=>e.l(t))).then(()=>t(178476)))},115385,e=>{e.v(t=>Promise.all(["static/chunks/1fe2547ebb09b584.js"].map(t=>e.l(t))).then(()=>t(891569)))},622140,e=>{e.v(t=>Promise.all(["static/chunks/7f523a86c82f4c94.js"].map(t=>e.l(t))).then(()=>t(888709)))},537045,e=>{e.v(t=>Promise.all(["static/chunks/433a181b5a150868.js"].map(t=>e.l(t))).then(()=>t(348220)))},993399,e=>{e.v(t=>Promise.all(["static/chunks/dbebb6a9483c13a3.js"].map(t=>e.l(t))).then(()=>t(857893)))},430382,e=>{e.v(t=>Promise.all(["static/chunks/3283315b3511661e.js"].map(t=>e.l(t))).then(()=>t(601998)))},343866,e=>{e.v(t=>Promise.all(["static/chunks/732cbd6b2243373e.js"].map(t=>e.l(t))).then(()=>t(877714)))},171442,e=>{e.v(t=>Promise.all(["static/chunks/8ba973cc52cf6aeb.js"].map(t=>e.l(t))).then(()=>t(933270)))},766562,e=>{e.v(t=>Promise.all(["static/chunks/32c4a1dd1486650d.js"].map(t=>e.l(t))).then(()=>t(998478)))},170097,e=>{e.v(t=>Promise.all(["static/chunks/6f1839151655c7c0.js"].map(t=>e.l(t))).then(()=>t(785754)))},325107,e=>{e.v(t=>Promise.all(["static/chunks/dc8fcd266507f99c.js"].map(t=>e.l(t))).then(()=>t(124001)))},393699,e=>{e.v(t=>Promise.all(["static/chunks/658adcb00a27ae19.js"].map(t=>e.l(t))).then(()=>t(717711)))},480704,e=>{e.v(t=>Promise.all(["static/chunks/504f06fd76e279f7.js"].map(t=>e.l(t))).then(()=>t(879607)))},972716,e=>{e.v(t=>Promise.all(["static/chunks/c7e04c6ce10f9f4e.js"].map(t=>e.l(t))).then(()=>t(218614)))},276199,e=>{e.v(t=>Promise.all(["static/chunks/edba7fca254304db.js"].map(t=>e.l(t))).then(()=>t(688818)))},381976,e=>{e.v(t=>Promise.all(["static/chunks/eb025f763fd08513.js"].map(t=>e.l(t))).then(()=>t(673788)))},774653,e=>{e.v(t=>Promise.all(["static/chunks/faac590359171481.js"].map(t=>e.l(t))).then(()=>t(492637)))},732391,e=>{e.v(t=>Promise.all(["static/chunks/519faa293c58ec3c.js"].map(t=>e.l(t))).then(()=>t(937026)))},231162,e=>{e.v(t=>Promise.all(["static/chunks/a116174a344f3889.js"].map(t=>e.l(t))).then(()=>t(376634)))},80902,e=>{e.v(t=>Promise.all(["static/chunks/388ecd0c1b9a7fb5.js"].map(t=>e.l(t))).then(()=>t(484091)))},58526,e=>{e.v(t=>Promise.all(["static/chunks/b801293b6c21c3df.js"].map(t=>e.l(t))).then(()=>t(329044)))},510414,e=>{e.v(t=>Promise.all(["static/chunks/f8d473cda91c1bf8.js"].map(t=>e.l(t))).then(()=>t(150551)))},863968,e=>{e.v(t=>Promise.all(["static/chunks/0401b9c9b9e6d441.js"].map(t=>e.l(t))).then(()=>t(850568)))},666854,e=>{e.v(t=>Promise.all(["static/chunks/e73fa116f5505346.js"].map(t=>e.l(t))).then(()=>t(292172)))},802836,e=>{e.v(t=>Promise.all(["static/chunks/69249029bf7ef5ff.js"].map(t=>e.l(t))).then(()=>t(842259)))},830187,e=>{e.v(t=>Promise.all(["static/chunks/b9bf4ec8f75401ce.js"].map(t=>e.l(t))).then(()=>t(289243)))},668701,e=>{e.v(t=>Promise.all(["static/chunks/0478415a74436cd0.js"].map(t=>e.l(t))).then(()=>t(163035)))},628608,e=>{e.v(t=>Promise.all(["static/chunks/423b28042e9c132a.js"].map(t=>e.l(t))).then(()=>t(889606)))},264776,e=>{e.v(t=>Promise.all(["static/chunks/6d4208e627698988.js"].map(t=>e.l(t))).then(()=>t(568939)))},62931,e=>{e.v(t=>Promise.all(["static/chunks/fe5187f2f7ddfdff.js"].map(t=>e.l(t))).then(()=>t(828963)))},338743,e=>{e.v(t=>Promise.all(["static/chunks/3da7949c7807f8ee.js"].map(t=>e.l(t))).then(()=>t(992471)))},576252,e=>{e.v(t=>Promise.all(["static/chunks/46abbb4843192527.js"].map(t=>e.l(t))).then(()=>t(108575)))},449569,e=>{e.v(t=>Promise.all(["static/chunks/f9931463889dbce8.js"].map(t=>e.l(t))).then(()=>t(836206)))},805529,e=>{e.v(t=>Promise.all(["static/chunks/1db0e515a887bc6d.js"].map(t=>e.l(t))).then(()=>t(900447)))},47096,e=>{e.v(t=>Promise.all(["static/chunks/a8c5f2242a684b04.js"].map(t=>e.l(t))).then(()=>t(876523)))},755943,e=>{e.v(t=>Promise.all(["static/chunks/9363bd2a77aa4d4c.js"].map(t=>e.l(t))).then(()=>t(854331)))},344337,e=>{e.v(t=>Promise.all(["static/chunks/761825e02b7b7674.js"].map(t=>e.l(t))).then(()=>t(93283)))},461327,e=>{e.v(t=>Promise.all(["static/chunks/8f7081bfacc3caf8.js"].map(t=>e.l(t))).then(()=>t(80587)))},719070,e=>{e.v(t=>Promise.all(["static/chunks/472b651d322cbd7a.js"].map(t=>e.l(t))).then(()=>t(78904)))},549046,e=>{e.v(t=>Promise.all(["static/chunks/372457b5284ada1a.js"].map(t=>e.l(t))).then(()=>t(207185)))},587562,e=>{e.v(t=>Promise.all(["static/chunks/0c5b28e70ab99583.js"].map(t=>e.l(t))).then(()=>t(347369)))},796587,e=>{e.v(t=>Promise.all(["static/chunks/a33583f0745df4a5.js"].map(t=>e.l(t))).then(()=>t(377576)))}]);