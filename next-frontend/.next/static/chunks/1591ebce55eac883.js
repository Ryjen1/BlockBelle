(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,139776,e=>{"use strict";Symbol();let t=Symbol(),r=Object.getPrototypeOf,a=new WeakMap,o=e=>{let o;return(o=e)&&(a.has(o)?a.get(o):r(o)===Object.prototype||r(o)===Array.prototype)&&e[t]||null},n=(e,t=!0)=>{a.set(e,t)},i={get url(){return`file://${e.P("Desktop/Folder/BlockBelle/next-frontend/node_modules/valtio/esm/vanilla.mjs")}`}},s=e=>"object"==typeof e&&null!==e,c=new WeakMap,l=new WeakSet,u=(e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>s(e)&&!l.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),a=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},u=new WeakMap,d=(e,t,r=a)=>{let o=u.get(e);if((null==o?void 0:o[0])===t)return o[1];let i=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return n(i,!0),u.set(e,[t,i]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(i,t))return;let a=Reflect.get(e,t),{enumerable:o}=Reflect.getOwnPropertyDescriptor(e,t),s={value:a,enumerable:o,configurable:!0};if(l.has(a))n(a,!1);else if(a instanceof Promise)delete s.value,s.get=()=>r(a);else if(c.has(a)){let[e,t]=c.get(a);s.value=d(e,t(),r)}Object.defineProperty(i,t,s)}),Object.preventExtensions(i)},p=new WeakMap,m=[1,1],g=a=>{if(!s(a))throw Error("object required");let n=p.get(a);if(n)return n;let u=m[0],w=new Set,h=(e,t=++m[0])=>{u!==t&&(u=t,w.forEach(r=>r(e,t)))},f=m[1],C=(e=++m[1])=>(f===e||w.size||(f=e,v.forEach(([t])=>{let r=t[1](e);r>u&&(u=r)})),u),b=e=>(t,r)=>{let a=[...t];a[1]=[e,...a[1]],h(a,r)},v=new Map,y=(e,t)=>{if((i.env?i.env.MODE:void 0)!=="production"&&v.has(e))throw Error("prop listener already exists");if(w.size){let r=t[3](b(e));v.set(e,[t,r])}else v.set(e,[t])},A=e=>{var t;let r=v.get(e);r&&(v.delete(e),null==(t=r[1])||t.call(r))},N=e=>{w.add(e),1===w.size&&v.forEach(([e,t],r)=>{if((i.env?i.env.MODE:void 0)!=="production"&&t)throw Error("remove already exists");let a=e[3](b(r));v.set(r,[e,a])});let t=()=>{w.delete(e),0===w.size&&v.forEach(([e,t],r)=>{t&&(t(),v.set(r,[e]))})};return t},E=Array.isArray(a)?[]:Object.create(Object.getPrototypeOf(a)),S={deleteProperty(e,t){let r=Reflect.get(e,t);A(t);let a=Reflect.deleteProperty(e,t);return a&&h(["delete",[t],r]),a},set(t,a,n,i){let u=Reflect.has(t,a),d=Reflect.get(t,a,i);if(u&&(e(d,n)||p.has(n)&&e(d,p.get(n))))return!0;A(a),s(n)&&(n=o(n)||n);let m=n;if(n instanceof Promise)n.then(e=>{n.status="fulfilled",n.value=e,h(["resolve",[a],e])}).catch(e=>{n.status="rejected",n.reason=e,h(["reject",[a],e])});else{!c.has(n)&&r(n)&&(m=g(n));let e=!l.has(m)&&c.get(m);e&&y(a,e)}return Reflect.set(t,a,m,i),h(["set",[a],n,d]),!0}},k=t(E,S);p.set(a,k);let I=[E,C,d,N];return c.set(k,I),Reflect.ownKeys(a).forEach(e=>{let t=Object.getOwnPropertyDescriptor(a,e);"value"in t&&(k[e]=a[e],delete t.value,delete t.writable),Object.defineProperty(E,e,t)}),k})=>[g,c,l,e,t,r,a,u,d,p,m],[d]=u();function p(e={}){return d(e)}function m(e){let t=c.get(e);return null==t?void 0:t[1]()}function g(e,t,r){let a,o=c.get(e);(i.env?i.env.MODE:void 0)==="production"||o||console.warn("Please use proxy object");let n=[],s=o[3],l=!1,u=s(e=>{(n.push(e),r)?t(n.splice(0)):a||(a=Promise.resolve().then(()=>{a=void 0,l&&t(n.splice(0))}))});return l=!0,()=>{l=!1,u()}}function w(e,t){let r=c.get(e);(i.env?i.env.MODE:void 0)==="production"||r||console.warn("Please use proxy object");let[a,o,n]=r;return n(a,o(),t)}function h(e){return l.add(e),e}e.s(["getVersion",()=>m,"proxy",()=>p,"ref",()=>h,"snapshot",()=>w,"subscribe",()=>g,"unstable_buildProxyFunction",()=>u],139776)},865067,e=>{"use strict";var t=e.i(710452);let r=(void 0!==t.default&&void 0!==t.default.env?t.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",a={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,FIVE_SEC_MS:5e3,THREE_SEC_MS:3e3,ONE_SEC_MS:1e3,SECURE_SITE:r,SECURE_SITE_DASHBOARD:`${r}/dashboard`,SECURE_SITE_FAVICON:`${r}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","berachain","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Berachain:"berachain",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],BALANCE_SUPPORTED_CHAINS:["eip155","solana"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NAMES_SUPPORTED_CHAIN_NAMESPACES:["eip155"],ONRAMP_SUPPORTED_CHAIN_NAMESPACES:["eip155","solana"],ACTIVITY_ENABLED_CHAIN_NAMESPACES:["eip155"],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x",bip122:"0x",cosmos:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,CONNECT_LABELS:{MOBILE:"Open and continue in the wallet app",WEB:"Open and continue in the wallet app"},SEND_SUPPORTED_NAMESPACES:["eip155","solana"],DEFAULT_REMOTE_FEATURES:{swaps:["1inch"],onramp:["coinbase","meld"],email:!0,socials:["google","x","discord","farcaster","github","apple","facebook"],activity:!0,reownBranding:!0},DEFAULT_REMOTE_FEATURES_DISABLED:{email:!1,socials:!1,swaps:!1,onramp:!1,activity:!1,reownBranding:!1},DEFAULT_FEATURES:{receive:!0,send:!0,emailShowWallets:!0,connectorTypeOrder:["walletConnect","recent","injected","featured","custom","external","recommended"],analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1,collapseWallets:!1,walletFeaturesOrder:["onramp","swaps","receive","send"],connectMethodsOrder:void 0,pay:!1},DEFAULT_SOCIALS:["google","x","farcaster","discord","apple","github","facebook"],DEFAULT_ACCOUNT_TYPES:{bip122:"payment",eip155:"smartAccount",polkadot:"eoa",solana:"eoa"},ADAPTER_TYPES:{UNIVERSAL:"universal",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",BITCOIN:"bitcoin"}};e.s(["ConstantsUtil",0,a,"MELD_PUBLIC_KEY",0,"WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU","ONRAMP_PROVIDERS",0,[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:"",supportedChains:["eip155"]},{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["eip155","solana"]}]])},588960,e=>{"use strict";var t=e.i(710452);let r={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CONNECTOR_ID:{WALLET_CONNECT:"walletConnect",INJECTED:"injected",WALLET_STANDARD:"announced",COINBASE:"coinbaseWallet",COINBASE_SDK:"coinbaseWalletSDK",SAFE:"safe",LEDGER:"ledger",OKX:"okx",EIP6963:"eip6963",AUTH:"ID_AUTH"},CONNECTOR_NAMES:{AUTH:"Auth"},AUTH_CONNECTOR_SUPPORTED_CHAINS:["eip155","solana"],LIMITS:{PENDING_TRANSACTIONS:99},CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot",BITCOIN:"bip122"},CHAIN_NAME_MAP:{eip155:"EVM Networks",solana:"Solana",polkadot:"Polkadot",bip122:"Bitcoin",cosmos:"Cosmos"},ADAPTER_TYPES:{BITCOIN:"bitcoin",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],HTTP_STATUS_CODES:{SERVICE_UNAVAILABLE:503,FORBIDDEN:403},UNSUPPORTED_NETWORK_NAME:"Unknown Network",SECURE_SITE_SDK_ORIGIN:(void 0!==t.default&&void 0!==t.default.env?t.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org"};e.s(["ConstantsUtil",0,r])},834071,250320,457231,e=>{"use strict";var t=e.i(588960),r=e.i(865067);let a={WALLET_ID:"@appkit/wallet_id",WALLET_NAME:"@appkit/wallet_name",SOLANA_WALLET:"@appkit/solana_wallet",SOLANA_CAIP_CHAIN:"@appkit/solana_caip_chain",ACTIVE_CAIP_NETWORK_ID:"@appkit/active_caip_network_id",CONNECTED_SOCIAL:"@appkit/connected_social",CONNECTED_SOCIAL_USERNAME:"@appkit-wallet/SOCIAL_USERNAME",RECENT_WALLETS:"@appkit/recent_wallets",DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",ACTIVE_NAMESPACE:"@appkit/active_namespace",CONNECTED_NAMESPACES:"@appkit/connected_namespaces",CONNECTION_STATUS:"@appkit/connection_status",SIWX_AUTH_TOKEN:"@appkit/siwx-auth-token",SIWX_NONCE_TOKEN:"@appkit/siwx-nonce-token",TELEGRAM_SOCIAL_PROVIDER:"@appkit/social_provider",NATIVE_BALANCE_CACHE:"@appkit/native_balance_cache",PORTFOLIO_CACHE:"@appkit/portfolio_cache",ENS_CACHE:"@appkit/ens_cache",IDENTITY_CACHE:"@appkit/identity_cache",PREFERRED_ACCOUNT_TYPES:"@appkit/preferred_account_types",CONNECTIONS:"@appkit/connections"};function o(e){if(!e)throw Error("Namespace is required for CONNECTED_CONNECTOR_ID");return`@appkit/${e}:connected_connector_id`}let n={setItem(e,t){i()&&void 0!==t&&localStorage.setItem(e,t)},getItem(e){if(i())return localStorage.getItem(e)||void 0},removeItem(e){i()&&localStorage.removeItem(e)},clear(){i()&&localStorage.clear()}};function i(){return"undefined"!=typeof window&&"undefined"!=typeof localStorage}e.s(["SafeLocalStorage",0,n,"SafeLocalStorageKeys",0,a,"getSafeConnectorIdKey",()=>o,"isSafe",()=>i],250320);let s={cacheExpiry:{portfolio:3e4,nativeBalance:3e4,ens:3e5,identity:3e5},isCacheExpired:(e,t)=>Date.now()-e>t,getActiveNetworkProps(){let e=s.getActiveNamespace(),t=s.getActiveCaipNetworkId(),r=t?t.split(":")[1]:void 0;return{namespace:e,caipNetworkId:t,chainId:r?isNaN(Number(r))?r:Number(r):void 0}},setWalletConnectDeepLink({name:e,href:t}){try{n.setItem(a.DEEPLINK_CHOICE,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=n.getItem(a.DEEPLINK_CHOICE);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{n.removeItem(a.DEEPLINK_CHOICE)}catch{console.info("Unable to delete WalletConnect deep link")}},setActiveNamespace(e){try{n.setItem(a.ACTIVE_NAMESPACE,e)}catch{console.info("Unable to set active namespace")}},setActiveCaipNetworkId(e){try{n.setItem(a.ACTIVE_CAIP_NETWORK_ID,e),s.setActiveNamespace(e.split(":")[0])}catch{console.info("Unable to set active caip network id")}},getActiveCaipNetworkId(){try{return n.getItem(a.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to get active caip network id");return}},deleteActiveCaipNetworkId(){try{n.removeItem(a.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to delete active caip network id")}},deleteConnectedConnectorId(e){try{let t=o(e);n.removeItem(t)}catch{console.info("Unable to delete connected connector id")}},setAppKitRecent(e){try{let t=s.getRecentWallets();t.find(t=>t.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),n.setItem(a.RECENT_WALLETS,JSON.stringify(t)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{let e=n.getItem(a.RECENT_WALLETS);return e?JSON.parse(e):[]}catch{console.info("Unable to get AppKit recent")}return[]},setConnectedConnectorId(e,t){try{let r=o(e);n.setItem(r,t)}catch{console.info("Unable to set Connected Connector Id")}},getActiveNamespace(){try{return n.getItem(a.ACTIVE_NAMESPACE)}catch{console.info("Unable to get active namespace")}},getConnectedConnectorId(e){if(e)try{let t=o(e);return n.getItem(t)}catch(t){console.info("Unable to get connected connector id in namespace ",e)}},setConnectedSocialProvider(e){try{n.setItem(a.CONNECTED_SOCIAL,e)}catch{console.info("Unable to set connected social provider")}},getConnectedSocialProvider(){try{return n.getItem(a.CONNECTED_SOCIAL)}catch{console.info("Unable to get connected social provider")}},deleteConnectedSocialProvider(){try{n.removeItem(a.CONNECTED_SOCIAL)}catch{console.info("Unable to delete connected social provider")}},getConnectedSocialUsername(){try{return n.getItem(a.CONNECTED_SOCIAL_USERNAME)}catch{console.info("Unable to get connected social username")}},getStoredActiveCaipNetworkId(){let e=n.getItem(a.ACTIVE_CAIP_NETWORK_ID);return e?.split(":")?.[1]},setConnectionStatus(e){try{n.setItem(a.CONNECTION_STATUS,e)}catch{console.info("Unable to set connection status")}},getConnectionStatus(){try{return n.getItem(a.CONNECTION_STATUS)}catch{return}},getConnectedNamespaces(){try{let e=n.getItem(a.CONNECTED_NAMESPACES);if(!e?.length)return[];return e.split(",")}catch{return[]}},setConnectedNamespaces(e){try{let t=Array.from(new Set(e));n.setItem(a.CONNECTED_NAMESPACES,t.join(","))}catch{console.info("Unable to set namespaces in storage")}},addConnectedNamespace(e){try{let t=s.getConnectedNamespaces();t.includes(e)||(t.push(e),s.setConnectedNamespaces(t))}catch{console.info("Unable to add connected namespace")}},removeConnectedNamespace(e){try{let t=s.getConnectedNamespaces(),r=t.indexOf(e);r>-1&&(t.splice(r,1),s.setConnectedNamespaces(t))}catch{console.info("Unable to remove connected namespace")}},getTelegramSocialProvider(){try{return n.getItem(a.TELEGRAM_SOCIAL_PROVIDER)}catch{return console.info("Unable to get telegram social provider"),null}},setTelegramSocialProvider(e){try{n.setItem(a.TELEGRAM_SOCIAL_PROVIDER,e)}catch{console.info("Unable to set telegram social provider")}},removeTelegramSocialProvider(){try{n.removeItem(a.TELEGRAM_SOCIAL_PROVIDER)}catch{console.info("Unable to remove telegram social provider")}},getBalanceCache(){let e={};try{let t=n.getItem(a.PORTFOLIO_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromBalanceCache(e){try{let t=s.getBalanceCache();n.setItem(a.PORTFOLIO_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getBalanceCacheForCaipAddress(e){try{let t=s.getBalanceCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.portfolio))return t.balance;s.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateBalanceCache(e){try{let t=s.getBalanceCache();t[e.caipAddress]=e,n.setItem(a.PORTFOLIO_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getNativeBalanceCache(){let e={};try{let t=n.getItem(a.NATIVE_BALANCE_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromNativeBalanceCache(e){try{let t=s.getBalanceCache();n.setItem(a.NATIVE_BALANCE_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getNativeBalanceCacheForCaipAddress(e){try{let t=s.getNativeBalanceCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.nativeBalance))return t;console.info("Discarding cache for address",e),s.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateNativeBalanceCache(e){try{let t=s.getNativeBalanceCache();t[e.caipAddress]=e,n.setItem(a.NATIVE_BALANCE_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getEnsCache(){let e={};try{let t=n.getItem(a.ENS_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get ens name cache")}return e},getEnsFromCacheForAddress(e){try{let t=s.getEnsCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.ens))return t.ens;s.removeEnsFromCache(e)}catch{console.info("Unable to get ens name from cache",e)}},updateEnsCache(e){try{let t=s.getEnsCache();t[e.address]=e,n.setItem(a.ENS_CACHE,JSON.stringify(t))}catch{console.info("Unable to update ens name cache",e)}},removeEnsFromCache(e){try{let t=s.getEnsCache();n.setItem(a.ENS_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove ens name from cache",e)}},getIdentityCache(){let e={};try{let t=n.getItem(a.IDENTITY_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get identity cache")}return e},getIdentityFromCacheForAddress(e){try{let t=s.getIdentityCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.identity))return t.identity;s.removeIdentityFromCache(e)}catch{console.info("Unable to get identity from cache",e)}},updateIdentityCache(e){try{let t=s.getIdentityCache();t[e.address]={identity:e.identity,timestamp:e.timestamp},n.setItem(a.IDENTITY_CACHE,JSON.stringify(t))}catch{console.info("Unable to update identity cache",e)}},removeIdentityFromCache(e){try{let t=s.getIdentityCache();n.setItem(a.IDENTITY_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove identity from cache",e)}},clearAddressCache(){try{n.removeItem(a.PORTFOLIO_CACHE),n.removeItem(a.NATIVE_BALANCE_CACHE),n.removeItem(a.ENS_CACHE),n.removeItem(a.IDENTITY_CACHE)}catch{console.info("Unable to clear address cache")}},setPreferredAccountTypes(e){try{n.setItem(a.PREFERRED_ACCOUNT_TYPES,JSON.stringify(e))}catch{console.info("Unable to set preferred account types",e)}},getPreferredAccountTypes(){try{let e=n.getItem(a.PREFERRED_ACCOUNT_TYPES);if(!e)return{};return JSON.parse(e)}catch{console.info("Unable to get preferred account types")}return{}},setConnections(e,t){try{let r={...s.getConnections(),[t]:e};n.setItem(a.CONNECTIONS,JSON.stringify(r))}catch(e){console.error("Unable to sync connections to storage",e)}},getConnections(){try{let e=n.getItem(a.CONNECTIONS);if(!e)return{};return JSON.parse(e)}catch(e){return console.error("Unable to get connections from storage",e),{}}}};e.s(["StorageUtil",0,s],457231);let c={isMobile(){return!!this.isClient()&&!!("function"==typeof window?.matchMedia&&window?.matchMedia("(pointer:coarse)")?.matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent))},checkCaipNetwork:(e,t="")=>e?.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase()),isAndroid(){if(!this.isMobile())return!1;let e=window?.navigator.userAgent.toLowerCase();return c.isMobile()&&e.includes("android")},isIos(){if(!this.isMobile())return!1;let e=window?.navigator.userAgent.toLowerCase();return e.includes("iphone")||e.includes("ipad")},isSafari(){return!!this.isClient()&&(window?.navigator.userAgent.toLowerCase()).includes("safari")},isClient:()=>"undefined"!=typeof window,isPairingExpired:e=>!e||e-Date.now()<=r.ConstantsUtil.TEN_SEC_MS,isAllowedRetry:(e,t=r.ConstantsUtil.ONE_SEC_MS)=>Date.now()-e>=t,copyToClopboard(e){navigator.clipboard.writeText(e)},isIframe(){try{return window?.self!==window?.top}catch(e){return!1}},isSafeApp(){if(c.isClient()&&window.self!==window.top)try{let e=window?.location?.ancestorOrigins?.[0];if(e){let t=new URL(e),r=new URL("https://app.safe.global");return t.hostname===r.hostname}}catch{}return!1},getPairingExpiry:()=>Date.now()+r.ConstantsUtil.FOUR_MINUTES_MS,getNetworkId:e=>e?.split(":")[1],getPlainAddress:e=>e?.split(":")[2],wait:async e=>new Promise(t=>{setTimeout(t,e)}),debounce(e,t=500){let r;return(...a)=>{r&&clearTimeout(r),r=setTimeout(function(){e(...a)},t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t,r=null){if(c.isHttpUrl(e))return this.formatUniversalUrl(e,t);let a=e,o=r;a.includes("://")||(a=e.replaceAll("/","").replaceAll(":",""),a=`${a}://`),a.endsWith("/")||(a=`${a}/`),o&&!o?.endsWith("/")&&(o=`${o}/`),this.isTelegram()&&this.isAndroid()&&(t=encodeURIComponent(t));let n=encodeURIComponent(t);return{redirect:`${a}wc?uri=${n}`,redirectUniversalLink:o?`${o}wc?uri=${n}`:void 0,href:a}},formatUniversalUrl(e,t){if(!c.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);let a=encodeURIComponent(t);return{redirect:`${r}wc?uri=${a}`,href:r}},getOpenTargetForPlatform(e){return"popupWindow"===e?e:this.isTelegram()?s.getTelegramSocialProvider()?"_top":"_blank":e},openHref(e,t,r){window?.open(e,this.getOpenTargetForPlatform(t),r||"noreferrer noopener")},returnOpenHref(e,t,r){return window?.open(e,this.getOpenTargetForPlatform(t),r||"noreferrer noopener")},isTelegram:()=>"undefined"!=typeof window&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto),isPWA(){if("undefined"==typeof window)return!1;let e=window.matchMedia?.("(display-mode: standalone)")?.matches,t=window?.navigator?.standalone;return!!(e||t)},preloadImage:async e=>Promise.race([new Promise((t,r)=>{let a=new Image;a.onload=t,a.onerror=r,a.crossOrigin="anonymous",a.src=e}),c.wait(2e3)]),formatBalance(e,t){let r="0.000";if("string"==typeof e){let t=Number(e);if(t){let e=Math.floor(1e3*t)/1e3;e&&(r=e.toString())}}return`${r}${t?` ${t}`:""}`},formatBalance2(e,t){let r;if("0"===e)r="0";else if("string"==typeof e){let t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return{value:r??"0",rest:"0"===r?"000":"",symbol:t}},getApiUrl:()=>t.ConstantsUtil.W3M_API_URL,getBlockchainApiUrl:()=>t.ConstantsUtil.BLOCKCHAIN_API_RPC_URL,getAnalyticsUrl:()=>t.ConstantsUtil.PULSE_API_URL,getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),parseError:e=>"string"==typeof e?e:"string"==typeof e?.issues?.[0]?.message?e.issues[0].message:e instanceof Error?e.message:"Unknown error",sortRequestedNetworks(e,t=[]){let r={};return t&&e&&(e.forEach((e,t)=>{r[e]=t}),t.sort((e,t)=>{let a=r[e.id],o=r[t.id];return void 0!==a&&void 0!==o?a-o:void 0!==a?-1:1*(void 0!==o)})),t},calculateBalance(e){let t=0;for(let r of e)t+=r.value??0;return t},formatTokenBalance(e){let[t,r]=e.toFixed(2).split(".");return{dollars:t,pennies:r}},isAddress(e,t="eip155"){switch(t){case"eip155":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)&&(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||/^(?:0x)?[0-9A-F]{40}$/iu.test(e)))return!0;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);default:return!1}},uniqueBy(e,t){let r=new Set;return e.filter(e=>{let a=e[t];return!r.has(a)&&(r.add(a),!0)})},generateSdkVersion(e,t,a){let o=0===e.length?r.ConstantsUtil.ADAPTER_TYPES.UNIVERSAL:e.map(e=>e.adapterType).join(",");return`${t}-${o}-${a}`},createAccount:(e,t,r,a,o)=>({namespace:e,address:t,type:r,publicKey:a,path:o}),isCaipAddress(e){if("string"!=typeof e)return!1;let r=e.split(":"),a=r[0];return 3===r.filter(Boolean).length&&a in t.ConstantsUtil.CHAIN_NAME_MAP},isMac(){let e=window?.navigator.userAgent.toLowerCase();return e.includes("macintosh")&&!e.includes("safari")},formatTelegramSocialLoginUrl(e){let t=`--${encodeURIComponent(window?.location.href)}`,r="state=";if("auth.magic.link"===new URL(e).host){let a="provider_authorization_url=",o=e.substring(e.indexOf(a)+a.length),n=this.injectIntoUrl(decodeURIComponent(o),r,t);return e.replace(o,encodeURIComponent(n))}return this.injectIntoUrl(e,r,t)},injectIntoUrl(e,t,r){let a=e.indexOf(t);if(-1===a)throw Error(`${t} parameter not found in the URL: ${e}`);let o=e.indexOf("&",a),n=t.length,i=-1!==o?o:e.length;return e.substring(0,a+n)+(e.substring(a+n,i)+r)+e.substring(o)}};e.s(["CoreHelperUtil",0,c],834071)},231993,e=>{"use strict";var t=e.i(139776);function r(e,r,a,o){let n=e[r];return(0,t.subscribe)(e,()=>{let t=e[r];Object.is(n,t)||a(n=t)},o)}function a(e){let r=(0,t.proxy)({data:Array.from(e||[]),has(e){return this.data.some(t=>t[0]===e)},set(e,t){let r=this.data.find(t=>t[0]===e);return r?r[1]=t:this.data.push([e,t]),this},get(e){var t;return null==(t=this.data.find(t=>t[0]===e))?void 0:t[1]},delete(e){let t=this.data.findIndex(t=>t[0]===e);return -1!==t&&(this.data.splice(t,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(e){this.data.forEach(t=>{e(t[1],t[0],this)})},keys(){return this.data.map(e=>e[0]).values()},values(){return this.data.map(e=>e[1]).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return"Map"},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(r,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(r),r}new WeakMap,new WeakMap,Symbol(),e.s(["proxyMap",()=>a,"subscribeKey",()=>r],231993)},838788,314687,135054,e=>{"use strict";var t=e.i(139776),r=e.i(231993),a=e.i(834071);async function o(...e){let t=await fetch(...e);if(!t.ok)throw Error(`HTTP status code: ${t.status}`,{cause:t});return t}class n{constructor({baseUrl:e,clientId:t}){this.baseUrl=e,this.clientId=t}async get({headers:e,signal:t,cache:r,...a}){let n=this.createUrl(a);return(await o(n,{method:"GET",headers:e,signal:t,cache:r})).json()}async getBlob({headers:e,signal:t,...r}){let a=this.createUrl(r);return(await o(a,{method:"GET",headers:e,signal:t})).blob()}async post({body:e,headers:t,signal:r,...a}){let n=this.createUrl(a);return(await o(n,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}async put({body:e,headers:t,signal:r,...a}){let n=this.createUrl(a);return(await o(n,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}async delete({body:e,headers:t,signal:r,...a}){let n=this.createUrl(a);return(await o(n,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}createUrl({path:e,params:t}){let r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([e,t])=>{t&&r.searchParams.append(e,t)}),this.clientId&&r.searchParams.append("clientId",this.clientId),r}}e.s(["FetchUtil",()=>n],314687);var i=e.i(865067);let s={getFeatureValue(e,t){let r=t?.[e];return void 0===r?i.ConstantsUtil.DEFAULT_FEATURES[e]:r},filterSocialsByPlatform(e){if(!e||!e.length)return e;if(a.CoreHelperUtil.isTelegram()){if(a.CoreHelperUtil.isIos())return e.filter(e=>"google"!==e);if(a.CoreHelperUtil.isMac())return e.filter(e=>"x"!==e);if(a.CoreHelperUtil.isAndroid())return e.filter(e=>!["facebook","x"].includes(e))}return e}},c=(0,t.proxy)({features:i.ConstantsUtil.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined",defaultAccountTypes:i.ConstantsUtil.DEFAULT_ACCOUNT_TYPES,enableNetworkSwitch:!0,experimental_preferUniversalLinks:!1,remoteFeatures:{}}),l={state:c,subscribeKey:(e,t)=>(0,r.subscribeKey)(c,e,t),setOptions(e){Object.assign(c,e)},setRemoteFeatures(e){if(!e)return;let t={...c.remoteFeatures,...e};c.remoteFeatures=t,c.remoteFeatures?.socials&&(c.remoteFeatures.socials=s.filterSocialsByPlatform(c.remoteFeatures.socials))},setFeatures(e){if(!e)return;c.features||(c.features=i.ConstantsUtil.DEFAULT_FEATURES);let t={...c.features,...e};c.features=t},setProjectId(e){c.projectId=e},setCustomRpcUrls(e){c.customRpcUrls=e},setAllWallets(e){c.allWallets=e},setIncludeWalletIds(e){c.includeWalletIds=e},setExcludeWalletIds(e){c.excludeWalletIds=e},setFeaturedWalletIds(e){c.featuredWalletIds=e},setTokens(e){c.tokens=e},setTermsConditionsUrl(e){c.termsConditionsUrl=e},setPrivacyPolicyUrl(e){c.privacyPolicyUrl=e},setCustomWallets(e){c.customWallets=e},setIsSiweEnabled(e){c.isSiweEnabled=e},setIsUniversalProvider(e){c.isUniversalProvider=e},setSdkVersion(e){c.sdkVersion=e},setMetadata(e){c.metadata=e},setDisableAppend(e){c.disableAppend=e},setEIP6963Enabled(e){c.enableEIP6963=e},setDebug(e){c.debug=e},setEnableWalletConnect(e){c.enableWalletConnect=e},setEnableWalletGuide(e){c.enableWalletGuide=e},setEnableAuthLogger(e){c.enableAuthLogger=e},setEnableWallets(e){c.enableWallets=e},setPreferUniversalLinks(e){c.experimental_preferUniversalLinks=e},setHasMultipleAddresses(e){c.hasMultipleAddresses=e},setSIWX(e){c.siwx=e},setConnectMethodsOrder(e){c.features={...c.features,connectMethodsOrder:e}},setWalletFeaturesOrder(e){c.features={...c.features,walletFeaturesOrder:e}},setSocialsOrder(e){c.remoteFeatures={...c.remoteFeatures,socials:e}},setCollapseWallets(e){c.features={...c.features,collapseWallets:e}},setEnableEmbedded(e){c.enableEmbedded=e},setAllowUnsupportedChain(e){c.allowUnsupportedChain=e},setManualWCControl(e){c.manualWCControl=e},setEnableNetworkSwitch(e){c.enableNetworkSwitch=e},setDefaultAccountTypes(e={}){Object.entries(e).forEach(([e,t])=>{t&&(c.defaultAccountTypes[e]=t)})},setUniversalProviderConfigOverride(e){c.universalProviderConfigOverride=e},getUniversalProviderConfigOverride:()=>c.universalProviderConfigOverride,getSnapshot:()=>(0,t.snapshot)(c)};e.s(["OptionsController",0,l],135054);let u=Object.freeze({enabled:!0,events:[]}),d=new n({baseUrl:a.CoreHelperUtil.getAnalyticsUrl(),clientId:null}),p=(0,t.proxy)({...u}),m={state:p,subscribeKey:(e,t)=>(0,r.subscribeKey)(p,e,t),async sendError(e,t){if(!p.enabled)return;let r=Date.now();if(p.events.filter(e=>r-new Date(e.properties.timestamp||"").getTime()<6e4).length>=5)return;let o={type:"error",event:t,properties:{errorType:e.name,errorMessage:e.message,stackTrace:e.stack,timestamp:new Date().toISOString()}};p.events.push(o);try{if("undefined"==typeof window)return;let{projectId:r,sdkType:o,sdkVersion:n}=l.state;await d.post({path:"/e",params:{projectId:r,st:o,sv:n||"html-wagmi-4.2.2"},body:{eventId:a.CoreHelperUtil.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:new Date().toISOString(),props:{type:"error",event:t,errorType:e.name,errorMessage:e.message,stackTrace:e.stack}}})}catch{}},enable(){p.enabled=!0},disable(){p.enabled=!1},clearEvents(){p.events=[]}};class g extends Error{constructor(e,t,r){super(e),this.name="AppKitError",this.category=t,this.originalError=r,Object.setPrototypeOf(this,g.prototype);let a=!1;if(r instanceof Error&&"string"==typeof r.stack&&r.stack){const e=r.stack,t=e.indexOf("\n");if(t>-1){const r=e.substring(t+1);this.stack=`${this.name}: ${this.message}
${r}`,a=!0}}!a&&(Error.captureStackTrace?Error.captureStackTrace(this,g):this.stack||(this.stack=`${this.name}: ${this.message}`))}}function w(e,t){let r=e instanceof g?e:new g(e instanceof Error?e.message:String(e),t,e);throw m.sendError(r,r.category),r}function h(e,t="INTERNAL_SDK_ERROR"){let r={};return Object.keys(e).forEach(a=>{let o=e[a];if("function"==typeof o){let e=o;e="AsyncFunction"===o.constructor.name?async(...e)=>{try{return await o(...e)}catch(e){return w(e,t)}}:(...e)=>{try{return o(...e)}catch(e){return w(e,t)}},r[a]=e}else r[a]=o}),r}e.s(["AppKitError",()=>g,"withErrorBoundary",()=>h],838788)},241677,e=>{"use strict";var t=e.i(588960);e.s(["NetworkUtil",0,{caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0,parseEvmChainId(e){return"string"==typeof e?this.caipNetworkIdToNumber(e):e},getNetworksByNamespace:(e,t)=>e?.filter(e=>e.chainNamespace===t)||[],getFirstNetworkByNamespace(e,t){return this.getNetworksByNamespace(e,t)[0]},getNetworkNameByCaipNetworkId(e,r){if(!r)return;let a=e.find(e=>e.caipNetworkId===r);if(a)return a.name;let[o]=r.split(":");return t.ConstantsUtil.CHAIN_NAME_MAP?.[o]||void 0}}])},426429,e=>{"use strict";function t(e,t){return"light"===t?{"--w3m-accent":e?.["--w3m-accent"]||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":e?.["--w3m-accent"]||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}e.s(["getW3mThemeVariables",()=>t])},47944,e=>{"use strict";var t=e.i(588960);let r={PHANTOM:{id:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",url:"https://phantom.app"},SOLFLARE:{id:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",url:"https://solflare.com"},COINBASE:{id:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",url:"https://go.cb-w.com"}};e.s(["CUSTOM_DEEPLINK_WALLETS",0,r,"MobileWalletUtil",0,{handleMobileDeeplinkRedirect(e,a){let o=window.location.href,n=encodeURIComponent(o);if(e===r.PHANTOM.id&&!("phantom"in window)){let e=o.startsWith("https")?"https":"http",t=o.split("/")[2],a=encodeURIComponent(`${e}://${t}`);window.location.href=`${r.PHANTOM.url}/ul/browse/${n}?ref=${a}`}e!==r.SOLFLARE.id||"solflare"in window||(window.location.href=`${r.SOLFLARE.url}/ul/v1/browse/${n}?ref=${n}`),a!==t.ConstantsUtil.CHAIN.SOLANA||e!==r.COINBASE.id||"coinbaseSolana"in window||(window.location.href=`${r.COINBASE.url}/dapp?cb_url=${n}`)}}])},474038,911171,e=>{"use strict";e.s(["AssetUtil",()=>l],474038);var t=e.i(139776),r=e.i(361432),a=e.i(231993),o=e.i(838788);let n=(0,t.proxy)({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),i=(0,o.withErrorBoundary)({state:n,subscribeNetworkImages:e=>(0,t.subscribe)(n.networkImages,()=>e(n.networkImages)),subscribeKey:(e,t)=>(0,a.subscribeKey)(n,e,t),subscribe:e=>(0,t.subscribe)(n,()=>e(n)),setWalletImage(e,t){n.walletImages[e]=t},setNetworkImage(e,t){n.networkImages[e]=t},setChainImage(e,t){n.chainImages[e]=t},setConnectorImage(e,t){n.connectorImages={...n.connectorImages,[e]:t}},setTokenImage(e,t){n.tokenImages[e]=t},setCurrencyImage(e,t){n.currencyImages[e]=t}});e.s(["AssetController",0,i],911171);let s={eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700",polkadot:"",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00",cosmos:""},c=(0,t.proxy)({networkImagePromises:{}}),l={async fetchWalletImage(e){if(e)return await r.ApiController._fetchWalletImage(e),this.getWalletImageById(e)},async fetchNetworkImage(e){if(!e)return;let t=this.getNetworkImageById(e);return t||(c.networkImagePromises[e]||(c.networkImagePromises[e]=r.ApiController._fetchNetworkImage(e)),await c.networkImagePromises[e],this.getNetworkImageById(e))},getWalletImageById(e){if(e)return i.state.walletImages[e]},getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?i.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.assets?.imageUrl?e?.assets?.imageUrl:e?.assets?.imageId?i.state.networkImages[e.assets.imageId]:void 0,getNetworkImageById(e){if(e)return i.state.networkImages[e]},getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?i.state.connectorImages[e.imageId]:void 0,getChainImage:e=>i.state.networkImages[s[e]]}},569649,868048,e=>{"use strict";e.s(["EventsController",()=>h],569649);var t=e.i(139776),r=e.i(588960),a=e.i(250320),o=e.i(834071),n=e.i(314687),i=e.i(918985),s=e.i(231993),c=e.i(838788),l=e.i(135054);let u=(0,t.proxy)({message:"",variant:"info",open:!1}),d=(0,c.withErrorBoundary)({state:u,subscribeKey:(e,t)=>(0,s.subscribeKey)(u,e,t),open(e,t){let{debug:r}=l.OptionsController.state,{shortMessage:a,longMessage:o}=e;r&&(u.message=a,u.variant=t,u.open=!0),o&&console.error("function"==typeof o?o():o)},close(){u.open=!1,u.message="",u.variant="info"}});e.s(["AlertController",0,d],868048);let p=o.CoreHelperUtil.getAnalyticsUrl(),m=new n.FetchUtil({baseUrl:p,clientId:null}),g=["MODAL_CREATED"],w=(0,t.proxy)({timestamp:Date.now(),reportedErrors:{},data:{type:"track",event:"MODAL_CREATED"}}),h={state:w,subscribe:e=>(0,t.subscribe)(w,()=>e(w)),getSdkProperties(){let{projectId:e,sdkType:t,sdkVersion:r}=l.OptionsController.state;return{projectId:e,st:t,sv:r||"html-wagmi-4.2.2"}},async _sendAnalyticsEvent(e){try{let t=i.AccountController.state.address;if(g.includes(e.data.event)||"undefined"==typeof window)return;await m.post({path:"/e",params:h.getSdkProperties(),body:{eventId:o.CoreHelperUtil.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:{...e.data,address:t}}}),w.reportedErrors.FORBIDDEN=!1}catch(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===r.ConstantsUtil.HTTP_STATUS_CODES.FORBIDDEN&&!w.reportedErrors.FORBIDDEN&&(d.open({shortMessage:"Invalid App Configuration",longMessage:`Origin ${(0,a.isSafe)()?window.origin:"uknown"} not found on Allowlist - update configuration on cloud.reown.com`},"error"),w.reportedErrors.FORBIDDEN=!0)}},sendEvent(e){w.timestamp=Date.now(),w.data=e,l.OptionsController.state.features?.analytics&&h._sendAnalyticsEvent(w)}}},361432,e=>{"use strict";e.s(["ApiController",()=>h]);var t=e.i(139776),r=e.i(231993),a=e.i(474038),o=e.i(834071),n=e.i(314687),i=e.i(47944),s=e.i(457231),c=e.i(911171),l=e.i(297726),u=e.i(739152),d=e.i(569649),p=e.i(135054);let m=o.CoreHelperUtil.getApiUrl(),g=new n.FetchUtil({baseUrl:m,clientId:null}),w=(0,t.proxy)({promises:{},page:1,count:0,featured:[],allFeatured:[],recommended:[],allRecommended:[],wallets:[],filteredWallets:[],search:[],isAnalyticsEnabled:!1,excludedWallets:[],isFetchingRecommendedWallets:!1}),h={state:w,subscribeKey:(e,t)=>(0,r.subscribeKey)(w,e,t),_getSdkProperties(){let{projectId:e,sdkType:t,sdkVersion:r}=p.OptionsController.state;return{projectId:e,st:t||"appkit",sv:r||"html-wagmi-4.2.2"}},_filterOutExtensions:e=>p.OptionsController.state.isUniversalProvider?e.filter(e=>!!(e.mobile_link||e.desktop_link||e.webapp_link)):e,async _fetchWalletImage(e){let t=`${g.baseUrl}/getWalletImage/${e}`,r=await g.getBlob({path:t,params:h._getSdkProperties()});c.AssetController.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){let t=`${g.baseUrl}/public/getAssetImage/${e}`,r=await g.getBlob({path:t,params:h._getSdkProperties()});c.AssetController.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){let t=`${g.baseUrl}/public/getAssetImage/${e}`,r=await g.getBlob({path:t,params:h._getSdkProperties()});c.AssetController.setConnectorImage(e,URL.createObjectURL(r))},async _fetchCurrencyImage(e){let t=`${g.baseUrl}/public/getCurrencyImage/${e}`,r=await g.getBlob({path:t,params:h._getSdkProperties()});c.AssetController.setCurrencyImage(e,URL.createObjectURL(r))},async _fetchTokenImage(e){let t=`${g.baseUrl}/public/getTokenImage/${e}`,r=await g.getBlob({path:t,params:h._getSdkProperties()});c.AssetController.setTokenImage(e,URL.createObjectURL(r))},_filterWalletsByPlatform:e=>o.CoreHelperUtil.isMobile()?e?.filter(e=>!!e.mobile_link||e.id===i.CUSTOM_DEEPLINK_WALLETS.COINBASE.id||"solana"===l.ChainController.state.activeChain&&(e.id===i.CUSTOM_DEEPLINK_WALLETS.SOLFLARE.id||e.id===i.CUSTOM_DEEPLINK_WALLETS.PHANTOM.id)):e,fetchProjectConfig:async()=>(await g.get({path:"/appkit/v1/config",params:h._getSdkProperties()})).features,async fetchAllowedOrigins(){try{let{allowedOrigins:e}=await g.get({path:"/projects/v1/origins",params:h._getSdkProperties()});return e}catch(e){return[]}},async fetchNetworkImages(){let e=l.ChainController.getAllRequestedCaipNetworks(),t=e?.map(({assets:e})=>e?.imageId).filter(Boolean).filter(e=>!a.AssetUtil.getNetworkImageById(e));t&&await Promise.allSettled(t.map(e=>h._fetchNetworkImage(e)))},async fetchConnectorImages(){let{connectors:e}=u.ConnectorController.state,t=e.map(({imageId:e})=>e).filter(Boolean);await Promise.allSettled(t.map(e=>h._fetchConnectorImage(e)))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map(e=>h._fetchCurrencyImage(e)))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map(e=>h._fetchTokenImage(e)))},async fetchWallets(e){let t=e.exclude??[];h._getSdkProperties().sv.startsWith("html-core-")&&t.push(...Object.values(i.CUSTOM_DEEPLINK_WALLETS).map(e=>e.id));let r=await g.get({path:"/getWallets",params:{...h._getSdkProperties(),...e,page:String(e.page),entries:String(e.entries),include:e.include?.join(","),exclude:t.join(",")}});return{data:h._filterWalletsByPlatform(r?.data)||[],count:r?.count}},async fetchFeaturedWallets(){let{featuredWalletIds:e}=p.OptionsController.state;if(e?.length){let t={...h._getSdkProperties(),page:1,entries:e?.length??4,include:e},{data:r}=await h.fetchWallets(t),a=[...r].sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id)),o=a.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(o.map(e=>h._fetchWalletImage(e))),w.featured=a,w.allFeatured=a}},async fetchRecommendedWallets(){try{w.isFetchingRecommendedWallets=!0;let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=p.OptionsController.state,a=[...t??[],...r??[]].filter(Boolean),o=l.ChainController.getRequestedCaipNetworkIds().join(","),{data:n,count:i}=await h.fetchWallets({page:1,entries:4,include:e,exclude:a,chains:o}),c=s.StorageUtil.getRecentWallets(),u=n.map(e=>e.image_id).filter(Boolean),d=c.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...u,...d].map(e=>h._fetchWalletImage(e))),w.recommended=n,w.allRecommended=n,w.count=i??0}catch{}finally{w.isFetchingRecommendedWallets=!1}},async fetchWalletsByPage({page:e}){let{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:a}=p.OptionsController.state,n=l.ChainController.getRequestedCaipNetworkIds().join(","),i=[...w.recommended.map(({id:e})=>e),...r??[],...a??[]].filter(Boolean),{data:s,count:c}=await h.fetchWallets({page:e,entries:40,include:t,exclude:i,chains:n}),u=s.slice(0,20).map(e=>e.image_id).filter(Boolean);await Promise.allSettled(u.map(e=>h._fetchWalletImage(e))),w.wallets=o.CoreHelperUtil.uniqueBy([...w.wallets,...h._filterOutExtensions(s)],"id").filter(e=>e.chains?.some(e=>n.includes(e))),w.count=c>w.count?c:w.count,w.page=e},async initializeExcludedWallets({ids:e}){let t={page:1,entries:e.length,include:e},{data:r}=await h.fetchWallets(t);r&&r.forEach(e=>{w.excludedWallets.push({rdns:e.rdns,name:e.name})})},async searchWallet({search:e,badge:t}){let{includeWalletIds:r,excludeWalletIds:a}=p.OptionsController.state,n=l.ChainController.getRequestedCaipNetworkIds().join(",");w.search=[];let i={page:1,entries:100,search:e?.trim(),badge_type:t,include:r,exclude:a,chains:n},{data:s}=await h.fetchWallets(i);d.EventsController.sendEvent({type:"track",event:"SEARCH_WALLET",properties:{badge:t??"",search:e??""}});let c=s.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...c.map(e=>h._fetchWalletImage(e)),o.CoreHelperUtil.wait(300)]),w.search=h._filterOutExtensions(s)},initPromise(e,t){let r=w.promises[e];return r||(w.promises[e]=t())},prefetch:({fetchConnectorImages:e=!0,fetchFeaturedWallets:t=!0,fetchRecommendedWallets:r=!0,fetchNetworkImages:a=!0}={})=>Promise.allSettled([e&&h.initPromise("connectorImages",h.fetchConnectorImages),t&&h.initPromise("featuredWallets",h.fetchFeaturedWallets),r&&h.initPromise("recommendedWallets",h.fetchRecommendedWallets),a&&h.initPromise("networkImages",h.fetchNetworkImages)].filter(Boolean)),prefetchAnalyticsConfig(){p.OptionsController.state.features?.analytics&&h.fetchAnalyticsConfig()},async fetchAnalyticsConfig(){try{let{isAnalyticsEnabled:e}=await g.get({path:"/getAnalyticsConfig",params:h._getSdkProperties()});p.OptionsController.setFeatures({analytics:e})}catch(e){p.OptionsController.setFeatures({analytics:!1})}},filterByNamespaces(e){if(!e?.length){w.featured=w.allFeatured,w.recommended=w.allRecommended;return}let t=l.ChainController.getRequestedCaipNetworkIds().join(",");w.featured=w.allFeatured.filter(e=>e.chains?.some(e=>t.includes(e))),w.recommended=w.allRecommended.filter(e=>e.chains?.some(e=>t.includes(e))),w.filteredWallets=w.wallets.filter(e=>e.chains?.some(e=>t.includes(e)))},clearFilterByNamespaces(){w.filteredWallets=[]},setFilterByNamespace(e){if(!e){w.featured=w.allFeatured,w.recommended=w.allRecommended;return}let t=l.ChainController.getRequestedCaipNetworkIds().join(",");w.featured=w.allFeatured.filter(e=>e.chains?.some(e=>t.includes(e))),w.recommended=w.allRecommended.filter(e=>e.chains?.some(e=>t.includes(e))),w.filteredWallets=w.wallets.filter(e=>e.chains?.some(e=>t.includes(e)))}}},197004,e=>{"use strict";e.s(["NetworkUtil",()=>i]);var t=e.i(588960),r=e.i(918985),a=e.i(297726),o=e.i(739152),n=e.i(568464);let i={onSwitchNetwork({network:e,ignoreSwitchConfirmation:i=!1}){let s=a.ChainController.state.activeCaipNetwork,c=n.RouterController.state.data;if(e.id===s?.id)return;let l=r.AccountController.getCaipAddress(a.ChainController.state.activeChain),u=e.chainNamespace!==a.ChainController.state.activeChain,d=r.AccountController.getCaipAddress(e.chainNamespace),p=o.ConnectorController.getConnectorId(a.ChainController.state.activeChain)===t.ConstantsUtil.CONNECTOR_ID.AUTH,m=t.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(t=>t===e.chainNamespace);i||p&&m?n.RouterController.push("SwitchNetwork",{...c,network:e}):l&&u&&!d?n.RouterController.push("SwitchActiveChain",{switchToChain:e.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:e}):n.RouterController.push("SwitchNetwork",{...c,network:e})}}},739152,947539,914685,568464,767015,457861,e=>{"use strict";e.s(["ConnectorController",()=>I],739152);var t=e.i(139776),r=e.i(231993),a=e.i(588960),o=e.i(426429),n=e.i(47944),i=e.i(457231),s=e.i(838788),c=e.i(361432),l=e.i(297726),u=e.i(135054);e.s(["RouterController",()=>y],568464);var d=e.i(918985);e.s(["ModalController",()=>b],914685);var p=e.i(834071),m=e.i(197004),g=e.i(327283),w=e.i(569649);let h=(0,t.proxy)({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0,initialized:!1}),f={state:h,subscribe:e=>(0,t.subscribe)(h,()=>e(h)),subscribeOpen:e=>(0,r.subscribeKey)(h,"open",e),set(e){Object.assign(h,{...h,...e})}};e.s(["PublicStateController",0,f],947539);let C=(0,t.proxy)({loading:!1,loadingNamespaceMap:new Map,open:!1,shake:!1,namespace:void 0}),b=(0,s.withErrorBoundary)({state:C,subscribe:e=>(0,t.subscribe)(C,()=>e(C)),subscribeKey:(e,t)=>(0,r.subscribeKey)(C,e,t),async open(e){let t="connected"===d.AccountController.state.status,r=e?.namespace,a=l.ChainController.state.activeChain,o=r&&r!==a,n=l.ChainController.getAccountData(e?.namespace)?.caipAddress;if(g.ConnectionController.state.wcBasic?c.ApiController.prefetch({fetchNetworkImages:!1,fetchConnectorImages:!1}):await c.ApiController.prefetch({fetchConnectorImages:!t,fetchFeaturedWallets:!t,fetchRecommendedWallets:!t}),I.setFilterByNamespace(e?.namespace),b.setLoading(!0,r),r&&o){let e=l.ChainController.getNetworkData(r)?.caipNetwork||l.ChainController.getRequestedCaipNetworks(r)[0];e&&m.NetworkUtil.onSwitchNetwork({network:e,ignoreSwitchConfirmation:!0})}else{let t=l.ChainController.state.noAdapters;u.OptionsController.state.manualWCControl||t&&!n?p.CoreHelperUtil.isMobile()?y.reset("AllWallets"):y.reset("ConnectingWalletConnectBasic"):e?.view?y.reset(e.view,e.data):n?y.reset("Account"):y.reset("Connect")}C.open=!0,f.set({open:!0}),w.EventsController.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:!!n}})},close(){let e=u.OptionsController.state.enableEmbedded,t=!!l.ChainController.state.activeCaipAddress;C.open&&w.EventsController.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:t}}),C.open=!1,y.reset("Connect"),b.clearLoading(),e?t?y.replace("Account"):y.push("Connect"):f.set({open:!1}),g.ConnectionController.resetUri()},setLoading(e,t){t&&C.loadingNamespaceMap.set(t,e),C.loading=e,f.set({loading:e})},clearLoading(){C.loadingNamespaceMap.clear(),C.loading=!1},shake(){C.shake||(C.shake=!0,setTimeout(()=>{C.shake=!1},500))}}),v=(0,t.proxy)({view:"Connect",history:["Connect"],transactionStack:[]}),y=(0,s.withErrorBoundary)({state:v,subscribeKey:(e,t)=>(0,r.subscribeKey)(v,e,t),pushTransactionStack(e){v.transactionStack.push(e)},popTransactionStack(e){let t=v.transactionStack.pop();if(!t)return;let{onSuccess:r,onError:a,onCancel:o}=t;switch(e){case"success":r?.();break;case"error":a?.(),y.goBack();break;case"cancel":o?.(),y.goBack()}},push(e,t){e!==v.view&&(v.view=e,v.history.push(e),v.data=t)},reset(e,t){v.view=e,v.history=[e],v.data=t},replace(e,t){v.history.at(-1)!==e&&(v.view=e,v.history[v.history.length-1]=e,v.data=t)},goBack(){let e=l.ChainController.state.activeCaipAddress,r="ConnectingFarcaster"===y.state.view,a=!e&&r;if(v.history.length>1){v.history.pop();let[t]=v.history.slice(-1);t&&(e&&"Connect"===t?v.view="Account":v.view=t)}else b.close();v.data?.wallet&&(v.data.wallet=void 0),setTimeout(()=>{if(a){d.AccountController.setFarcasterUrl(void 0,l.ChainController.state.activeChain);let e=I.getAuthConnector();e?.provider?.reload();let r=(0,t.snapshot)(u.OptionsController.state);e?.provider?.syncDappData?.({metadata:r.metadata,sdkVersion:r.sdkVersion,projectId:r.projectId,sdkType:r.sdkType})}},100)},goBackToIndex(e){if(v.history.length>1){v.history=v.history.slice(0,e+1);let[t]=v.history.slice(-1);t&&(v.view=t)}},goBackOrCloseModal(){y.state.history.length>1?y.goBack():b.close()}});e.s(["ThemeController",()=>E],767015);let A=(0,t.proxy)({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),N={state:A,subscribe:e=>(0,t.subscribe)(A,()=>e(A)),setThemeMode(e){A.themeMode=e;try{let t=I.getAuthConnector();if(t){let r=N.getSnapshot().themeVariables;t.provider.syncTheme({themeMode:e,themeVariables:r,w3mThemeVariables:(0,o.getW3mThemeVariables)(r,e)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(e){A.themeVariables={...A.themeVariables,...e};try{let e=I.getAuthConnector();if(e){let t=N.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:t,w3mThemeVariables:(0,o.getW3mThemeVariables)(A.themeVariables,A.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot:()=>(0,t.snapshot)(A)},E=(0,s.withErrorBoundary)(N),S={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0,cosmos:void 0},k=(0,t.proxy)({allConnectors:[],connectors:[],activeConnector:void 0,filterByNamespace:void 0,activeConnectorIds:{...S},filterByNamespaceMap:{eip155:!0,solana:!0,polkadot:!0,bip122:!0,cosmos:!0}}),I=(0,s.withErrorBoundary)({state:k,subscribe:e=>(0,t.subscribe)(k,()=>{e(k)}),subscribeKey:(e,t)=>(0,r.subscribeKey)(k,e,t),initialize(e){e.forEach(e=>{let t=i.StorageUtil.getConnectedConnectorId(e);t&&I.setConnectorId(t,e)})},setActiveConnector(e){e&&(k.activeConnector=(0,t.ref)(e))},setConnectors(e){e.filter(e=>!k.allConnectors.some(t=>t.id===e.id&&I.getConnectorName(t.name)===I.getConnectorName(e.name)&&t.chain===e.chain)).forEach(e=>{"MULTI_CHAIN"!==e.type&&k.allConnectors.push((0,t.ref)(e))});let r=I.getEnabledNamespaces(),a=I.getEnabledConnectors(r);k.connectors=I.mergeMultiChainConnectors(a)},filterByNamespaces(e){Object.keys(k.filterByNamespaceMap).forEach(e=>{k.filterByNamespaceMap[e]=!1}),e.forEach(e=>{k.filterByNamespaceMap[e]=!0}),I.updateConnectorsForEnabledNamespaces()},filterByNamespace(e,t){k.filterByNamespaceMap[e]=t,I.updateConnectorsForEnabledNamespaces()},updateConnectorsForEnabledNamespaces(){let e=I.getEnabledNamespaces(),t=I.getEnabledConnectors(e),r=I.areAllNamespacesEnabled();k.connectors=I.mergeMultiChainConnectors(t),r?c.ApiController.clearFilterByNamespaces():c.ApiController.filterByNamespaces(e)},getEnabledNamespaces:()=>Object.entries(k.filterByNamespaceMap).filter(([e,t])=>t).map(([e])=>e),getEnabledConnectors:e=>k.allConnectors.filter(t=>e.includes(t.chain)),areAllNamespacesEnabled:()=>Object.values(k.filterByNamespaceMap).every(e=>e),mergeMultiChainConnectors(e){let t=I.generateConnectorMapByName(e),r=[];return t.forEach(e=>{let t=e[0],o=t?.id===a.ConstantsUtil.CONNECTOR_ID.AUTH;e.length>1&&t?r.push({name:t.name,imageUrl:t.imageUrl,imageId:t.imageId,connectors:[...e],type:o?"AUTH":"MULTI_CHAIN",chain:"eip155",id:t?.id||""}):t&&r.push(t)}),r},generateConnectorMapByName(e){let t=new Map;return e.forEach(e=>{let{name:r}=e,a=I.getConnectorName(r);if(!a)return;let o=t.get(a)||[];o.find(t=>t.chain===e.chain)||o.push(e),t.set(a,o)}),t},getConnectorName:e=>e&&({"Trust Wallet":"Trust"})[e]||e,getUniqueConnectorsByName(e){let t=[];return e.forEach(e=>{t.find(t=>t.chain===e.chain)||t.push(e)}),t},addConnector(e){if(e.id===a.ConstantsUtil.CONNECTOR_ID.AUTH){let r=(0,t.snapshot)(u.OptionsController.state),a=E.getSnapshot().themeMode,n=E.getSnapshot().themeVariables;e?.provider?.syncDappData?.({metadata:r.metadata,sdkVersion:r.sdkVersion,projectId:r.projectId,sdkType:r.sdkType}),e?.provider?.syncTheme({themeMode:a,themeVariables:n,w3mThemeVariables:(0,o.getW3mThemeVariables)(n,a)}),I.setConnectors([e])}else I.setConnectors([e])},getAuthConnector(e){let t=e||l.ChainController.state.activeChain,r=k.connectors.find(e=>e.id===a.ConstantsUtil.CONNECTOR_ID.AUTH);if(r)return r?.connectors?.length?r.connectors.find(e=>e.chain===t):r},getAnnouncedConnectorRdns:()=>k.connectors.filter(e=>"ANNOUNCED"===e.type).map(e=>e.info?.rdns),getConnectorById:e=>k.allConnectors.find(t=>t.id===e),getConnector:(e,t)=>k.allConnectors.filter(e=>e.chain===l.ChainController.state.activeChain).find(r=>r.explorerId===e||r.info?.rdns===t),syncIfAuthConnector(e){if("ID_AUTH"!==e.id)return;let r=(0,t.snapshot)(u.OptionsController.state),a=E.getSnapshot().themeMode,n=E.getSnapshot().themeVariables;e?.provider?.syncDappData?.({metadata:r.metadata,sdkVersion:r.sdkVersion,sdkType:r.sdkType,projectId:r.projectId}),e.provider.syncTheme({themeMode:a,themeVariables:n,w3mThemeVariables:(0,o.getW3mThemeVariables)(n,a)})},getConnectorsByNamespace(e){let t=k.allConnectors.filter(t=>t.chain===e);return I.mergeMultiChainConnectors(t)},selectWalletConnector(e){let t=I.getConnector(e.id,e.rdns),r=l.ChainController.state.activeChain;n.MobileWalletUtil.handleMobileDeeplinkRedirect(t?.explorerId||e.id,r),t?y.push("ConnectingExternal",{connector:t}):y.push("ConnectingWalletConnect",{wallet:e})},getConnectors:e=>e?I.getConnectorsByNamespace(e):I.mergeMultiChainConnectors(k.allConnectors),setFilterByNamespace(e){k.filterByNamespace=e,k.connectors=I.getConnectors(e),c.ApiController.setFilterByNamespace(e)},setConnectorId(e,t){e&&(k.activeConnectorIds={...k.activeConnectorIds,[t]:e},i.StorageUtil.setConnectedConnectorId(t,e))},removeConnectorId(e){k.activeConnectorIds={...k.activeConnectorIds,[e]:void 0},i.StorageUtil.deleteConnectedConnectorId(e)},getConnectorId(e){if(e)return k.activeConnectorIds[e]},isConnected:e=>e?!!k.activeConnectorIds[e]:Object.values(k.activeConnectorIds).some(e=>!!e),resetConnectorIds(){k.activeConnectorIds={...S}}});var _=e.i(710452);void 0!==_.default&&void 0!==_.default.env&&_.default.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL,void 0!==_.default&&void 0!==_.default.env&&_.default.env.NEXT_PUBLIC_DEFAULT_LOG_LEVEL,void 0!==_.default&&void 0!==_.default.env&&_.default.env.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION,e.s(["W3mFrameRpcConstants",0,{SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints","wallet_getAssets"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","wallet_revokePermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}}],457861)},555766,e=>{"use strict";var t=e.i(139776),r=e.i(231993),a=e.i(834071);let o=Object.freeze({message:"",variant:"success",svg:void 0,open:!1,autoClose:!0}),n=(0,t.proxy)({...o});e.s(["SnackController",0,{state:n,subscribeKey:(e,t)=>(0,r.subscribeKey)(n,e,t),showLoading(e,t={}){this._showMessage({message:e,variant:"loading",...t})},showSuccess(e){this._showMessage({message:e,variant:"success"})},showSvg(e,t){this._showMessage({message:e,svg:t})},showError(e){let t=a.CoreHelperUtil.parseError(e);this._showMessage({message:t,variant:"error"})},hide(){n.message=o.message,n.variant=o.variant,n.svg=o.svg,n.open=o.open,n.autoClose=o.autoClose},_showMessage({message:e,svg:t,variant:r="success",autoClose:a=o.autoClose}){n.open?(n.open=!1,setTimeout(()=>{n.message=e,n.variant=r,n.svg=t,n.open=!0,n.autoClose=a},150)):(n.message=e,n.variant=r,n.svg=t,n.open=!0,n.autoClose=a)}}])},297726,327283,836810,e=>{"use strict";let t;e.s(["ChainController",()=>K],297726);var r=e.i(139776),a=e.i(231993),o=e.i(588960),n=e.i(241677),i=e.i(865067),s=e.i(834071),c=e.i(457231),l=e.i(838788),u=e.i(918985);e.s(["ConnectionController",()=>A],327283);var d=e.i(739152),p=e.i(569649),m=e.i(914685),g=e.i(568464),w=e.i(457861),h=e.i(529038),f=e.i(135054),C=e.i(555766);let b=(0,r.proxy)({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),v=(0,l.withErrorBoundary)({state:b,subscribe:e=>(0,r.subscribe)(b,()=>e(b)),setLastNetworkInView(e){b.lastNetworkInView=e},async fetchTransactions(e,t){if(!e)throw Error("Transactions can't be fetched without an accountAddress");b.loading=!0;try{let r=await h.BlockchainApiController.fetchTransactions({account:e,cursor:b.next,onramp:t,cache:"coinbase"===t?"no-cache":void 0,chainId:K.state.activeCaipNetwork?.caipNetworkId}),a=v.filterSpamTransactions(r.data),o=v.filterByConnectedChain(a),n=[...b.transactions,...o];b.loading=!1,"coinbase"===t?b.coinbaseTransactions=v.groupTransactionsByYearAndMonth(b.coinbaseTransactions,r.data):(b.transactions=n,b.transactionsByYear=v.groupTransactionsByYearAndMonth(b.transactionsByYear,o)),b.empty=0===n.length,b.next=r.next?r.next:void 0}catch(r){let t=K.state.activeChain;p.EventsController.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:f.OptionsController.state.projectId,cursor:b.next,isSmartAccount:u.AccountController.state.preferredAccountTypes?.[t]===w.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),C.SnackController.showError("Failed to fetch transactions"),b.loading=!1,b.empty=!0,b.next=void 0}},groupTransactionsByYearAndMonth:(e={},t=[])=>(t.forEach(t=>{let r=new Date(t.metadata.minedAt).getFullYear(),a=new Date(t.metadata.minedAt).getMonth(),o=e[r]??{},n=(o[a]??[]).filter(e=>e.id!==t.id);e[r]={...o,[a]:[...n,t].sort((e,t)=>new Date(t.metadata.minedAt).getTime()-new Date(e.metadata.minedAt).getTime())}}),e),filterSpamTransactions:e=>e.filter(e=>!e.transfers.every(e=>e.nft_info?.flags.is_spam===!0)),filterByConnectedChain(e){let t=K.state.activeCaipNetwork?.caipNetworkId;return e.filter(e=>e.metadata.chain===t)},clearCursor(){b.next=void 0},resetTransactions(){b.transactions=[],b.transactionsByYear={},b.lastNetworkInView=void 0,b.loading=!1,b.empty=!1,b.next=void 0}},"API_ERROR"),y=(0,r.proxy)({connections:new Map,wcError:!1,buffering:!1,status:"disconnected"}),A=(0,l.withErrorBoundary)({state:y,subscribeKey:(e,t)=>(0,a.subscribeKey)(y,e,t),_getClient:()=>y._client,setClient(e){y._client=(0,r.ref)(e)},async connectWalletConnect(){if(s.CoreHelperUtil.isTelegram()||s.CoreHelperUtil.isSafari()&&s.CoreHelperUtil.isIos()){if(t){await t,t=void 0;return}if(!s.CoreHelperUtil.isPairingExpired(y?.wcPairingExpiry)){let e=y.wcUri;y.wcUri=e;return}t=A._getClient()?.connectWalletConnect?.().catch(()=>void 0),A.state.status="connecting",await t,t=void 0,y.wcPairingExpiry=void 0,A.state.status="connected"}else await A._getClient()?.connectWalletConnect?.()},async connectExternal(e,t,r=!0){await A._getClient()?.connectExternal?.(e),r&&K.setActiveNamespace(t)},async reconnectExternal(e){await A._getClient()?.reconnectExternal?.(e);let t=e.chain||K.state.activeChain;t&&d.ConnectorController.setConnectorId(e.id,t)},async setPreferredAccountType(e,t){m.ModalController.setLoading(!0,K.state.activeChain);let r=d.ConnectorController.getAuthConnector();r&&(u.AccountController.setPreferredAccountType(e,t),await r.provider.setPreferredAccount(e),c.StorageUtil.setPreferredAccountTypes(u.AccountController.state.preferredAccountTypes??{[t]:e}),await A.reconnectExternal(r),m.ModalController.setLoading(!1,K.state.activeChain),p.EventsController.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:e,network:K.state.activeCaipNetwork?.caipNetworkId||""}}))},signMessage:async e=>A._getClient()?.signMessage(e),parseUnits:(e,t)=>A._getClient()?.parseUnits(e,t),formatUnits:(e,t)=>A._getClient()?.formatUnits(e,t),sendTransaction:async e=>A._getClient()?.sendTransaction(e),getCapabilities:async e=>A._getClient()?.getCapabilities(e),grantPermissions:async e=>A._getClient()?.grantPermissions(e),walletGetAssets:async e=>A._getClient()?.walletGetAssets(e)??{},estimateGas:async e=>A._getClient()?.estimateGas(e),writeContract:async e=>A._getClient()?.writeContract(e),getEnsAddress:async e=>A._getClient()?.getEnsAddress(e),getEnsAvatar:async e=>A._getClient()?.getEnsAvatar(e),checkInstalled:e=>A._getClient()?.checkInstalled?.(e)||!1,resetWcConnection(){y.wcUri=void 0,y.wcPairingExpiry=void 0,y.wcLinking=void 0,y.recentWallet=void 0,y.status="disconnected",v.resetTransactions(),c.StorageUtil.deleteWalletConnectDeepLink()},resetUri(){y.wcUri=void 0,y.wcPairingExpiry=void 0,t=void 0},finalizeWcConnection(){let{wcLinking:e,recentWallet:t}=A.state;e&&c.StorageUtil.setWalletConnectDeepLink(e),t&&c.StorageUtil.setAppKitRecent(t),p.EventsController.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:g.RouterController.state.data?.wallet?.name||"Unknown"}})},setWcBasic(e){y.wcBasic=e},setUri(e){y.wcUri=e,y.wcPairingExpiry=s.CoreHelperUtil.getPairingExpiry()},setWcLinking(e){y.wcLinking=e},setWcError(e){y.wcError=e,y.buffering=!1},setRecentWallet(e){y.recentWallet=e},setBuffering(e){y.buffering=e},setStatus(e){y.status=e},async disconnect(e){try{await A._getClient()?.disconnect(e)}catch(e){throw new l.AppKitError("Failed to disconnect","INTERNAL_SDK_ERROR",e)}},setConnections(e,t){y.connections.set(t,e)},switchAccount({connection:e,address:t,namespace:r}){if(d.ConnectorController.state.activeConnectorIds[r]===e.connectorId){let e=K.state.activeCaipNetwork;if(e){let a=`${r}:${e.id}:${t}`;u.AccountController.setCaipAddress(a,r)}else console.warn(`No current network found for namespace "${r}"`)}else{let t=d.ConnectorController.getConnector(e.connectorId);t?A.connectExternal(t,r):console.warn(`No connector found for namespace "${r}"`)}}});var N=e.i(947539);e.s(["SendController",()=>H],836810);var E="[big.js] ",S=E+"Invalid ",k=S+"decimal places",I=S+"rounding mode",_=E+"Division by zero",T={},x=void 0,U=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function O(e,t,r,a){var o=e.c;if(r===x&&(r=e.constructor.RM),0!==r&&1!==r&&2!==r&&3!==r)throw Error(I);if(t<1)a=3===r&&(a||!!o[0])||0===t&&(1===r&&o[0]>=5||2===r&&(o[0]>5||5===o[0]&&(a||o[1]!==x))),o.length=1,a?(e.e=e.e-t+1,o[0]=1):o[0]=e.e=0;else if(t<o.length){if(a=1===r&&o[t]>=5||2===r&&(o[t]>5||5===o[t]&&(a||o[t+1]!==x||1&o[t-1]))||3===r&&(a||!!o[0]),o.length=t,a){for(;++o[--t]>9;)if(o[t]=0,0===t){++e.e,o.unshift(1);break}}for(t=o.length;!o[--t];)o.pop()}return e}function P(e,t,r){var a=e.e,o=e.c.join(""),n=o.length;if(t)o=o.charAt(0)+(n>1?"."+o.slice(1):"")+(a<0?"e":"e+")+a;else if(a<0){for(;++a;)o="0"+o;o="0."+o}else if(a>0)if(++a>n)for(a-=n;a--;)o+="0";else a<n&&(o=o.slice(0,a)+"."+o.slice(a));else n>1&&(o=o.charAt(0)+"."+o.slice(1));return e.s<0&&r?"-"+o:o}T.abs=function(){var e=new this.constructor(this);return e.s=1,e},T.cmp=function(e){var t,r=this.c,a=(e=new this.constructor(e)).c,o=this.s,n=e.s,i=this.e,s=e.e;if(!r[0]||!a[0])return r[0]?o:a[0]?-n:0;if(o!=n)return o;if(t=o<0,i!=s)return i>s^t?1:-1;for(o=-1,n=(i=r.length)<(s=a.length)?i:s;++o<n;)if(r[o]!=a[o])return r[o]>a[o]^t?1:-1;return i==s?0:i>s^t?1:-1},T.div=function(e){var t=this.constructor,r=this.c,a=(e=new t(e)).c,o=this.s==e.s?1:-1,n=t.DP;if(n!==~~n||n<0||n>1e6)throw Error(k);if(!a[0])throw Error(_);if(!r[0])return e.s=o,e.c=[e.e=0],e;var i,s,c,l,u,d=a.slice(),p=i=a.length,m=r.length,g=r.slice(0,i),w=g.length,h=e,f=h.c=[],C=0,b=n+(h.e=this.e-e.e)+1;for(h.s=o,o=b<0?0:b,d.unshift(0);w++<i;)g.push(0);do{for(c=0;c<10;c++){if(i!=(w=g.length))l=i>w?1:-1;else for(u=-1,l=0;++u<i;)if(a[u]!=g[u]){l=a[u]>g[u]?1:-1;break}if(l<0){for(s=w==i?a:d;w;){if(g[--w]<s[w]){for(u=w;u&&!g[--u];)g[u]=9;--g[u],g[w]+=10}g[w]-=s[w]}for(;!g[0];)g.shift()}else break}f[C++]=l?c:++c,g[0]&&l?g[w]=r[p]||0:g=[r[p]]}while((p++<m||g[0]!==x)&&o--)return!f[0]&&1!=C&&(f.shift(),h.e--,b--),C>b&&O(h,b,t.RM,g[0]!==x),h},T.eq=function(e){return 0===this.cmp(e)},T.gt=function(e){return this.cmp(e)>0},T.gte=function(e){return this.cmp(e)>-1},T.lt=function(e){return 0>this.cmp(e)},T.lte=function(e){return 1>this.cmp(e)},T.minus=T.sub=function(e){var t,r,a,o,n=this.constructor,i=this.s,s=(e=new n(e)).s;if(i!=s)return e.s=-s,this.plus(e);var c=this.c.slice(),l=this.e,u=e.c,d=e.e;if(!c[0]||!u[0])return u[0]?e.s=-s:c[0]?e=new n(this):e.s=1,e;if(i=l-d){for((o=i<0)?(i=-i,a=c):(d=l,a=u),a.reverse(),s=i;s--;)a.push(0);a.reverse()}else for(r=((o=c.length<u.length)?c:u).length,i=s=0;s<r;s++)if(c[s]!=u[s]){o=c[s]<u[s];break}if(o&&(a=c,c=u,u=a,e.s=-e.s),(s=(r=u.length)-(t=c.length))>0)for(;s--;)c[t++]=0;for(s=t;r>i;){if(c[--r]<u[r]){for(t=r;t&&!c[--t];)c[t]=9;--c[t],c[r]+=10}c[r]-=u[r]}for(;0===c[--s];)c.pop();for(;0===c[0];)c.shift(),--d;return c[0]||(e.s=1,c=[d=0]),e.c=c,e.e=d,e},T.mod=function(e){var t,r=this,a=r.constructor,o=r.s,n=(e=new a(e)).s;if(!e.c[0])throw Error(_);return(r.s=e.s=1,t=1==e.cmp(r),r.s=o,e.s=n,t)?new a(r):(o=a.DP,n=a.RM,a.DP=a.RM=0,r=r.div(e),a.DP=o,a.RM=n,this.minus(r.times(e)))},T.neg=function(){var e=new this.constructor(this);return e.s=-e.s,e},T.plus=T.add=function(e){var t,r,a,o=this.constructor;if(e=new o(e),this.s!=e.s)return e.s=-e.s,this.minus(e);var n=this.e,i=this.c,s=e.e,c=e.c;if(!i[0]||!c[0])return c[0]||(i[0]?e=new o(this):e.s=this.s),e;if(i=i.slice(),t=n-s){for(t>0?(s=n,a=c):(t=-t,a=i),a.reverse();t--;)a.push(0);a.reverse()}for(i.length-c.length<0&&(a=c,c=i,i=a),t=c.length,r=0;t;i[t]%=10)r=(i[--t]=i[t]+c[t]+r)/10|0;for(r&&(i.unshift(r),++s),t=i.length;0===i[--t];)i.pop();return e.c=i,e.e=s,e},T.pow=function(e){var t=this,r=new t.constructor("1"),a=r,o=e<0;if(e!==~~e||e<-1e6||e>1e6)throw Error(S+"exponent");for(o&&(e=-e);1&e&&(a=a.times(t)),e>>=1;)t=t.times(t);return o?r.div(a):a},T.prec=function(e,t){if(e!==~~e||e<1||e>1e6)throw Error(S+"precision");return O(new this.constructor(this),e,t)},T.round=function(e,t){if(e===x)e=0;else if(e!==~~e||e<-1e6||e>1e6)throw Error(k);return O(new this.constructor(this),e+this.e+1,t)},T.sqrt=function(){var e,t,r,a=this.constructor,o=this.s,n=this.e,i=new a("0.5");if(!this.c[0])return new a(this);if(o<0)throw Error(E+"No square root");0===(o=Math.sqrt(+P(this,!0,!0)))||o===1/0?((t=this.c.join("")).length+n&1||(t+="0"),n=((n+1)/2|0)-(n<0||1&n),e=new a(((o=Math.sqrt(t))==1/0?"5e":(o=o.toExponential()).slice(0,o.indexOf("e")+1))+n)):e=new a(o+""),n=e.e+(a.DP+=4);do r=e,e=i.times(r.plus(this.div(r)));while(r.c.slice(0,n).join("")!==e.c.slice(0,n).join(""))return O(e,(a.DP-=4)+e.e+1,a.RM)},T.times=T.mul=function(e){var t,r=this.constructor,a=this.c,o=(e=new r(e)).c,n=a.length,i=o.length,s=this.e,c=e.e;if(e.s=this.s==e.s?1:-1,!a[0]||!o[0])return e.c=[e.e=0],e;for(e.e=s+c,n<i&&(t=a,a=o,o=t,c=n,n=i,i=c),t=Array(c=n+i);c--;)t[c]=0;for(s=i;s--;){for(i=0,c=n+s;c>s;)i=t[c]+o[s]*a[c-s-1]+i,t[c--]=i%10,i=i/10|0;t[c]=i}for(i?++e.e:t.shift(),s=t.length;!t[--s];)t.pop();return e.c=t,e},T.toExponential=function(e,t){var r=this,a=r.c[0];if(e!==x){if(e!==~~e||e<0||e>1e6)throw Error(k);for(r=O(new r.constructor(r),++e,t);r.c.length<e;)r.c.push(0)}return P(r,!0,!!a)},T.toFixed=function(e,t){var r=this,a=r.c[0];if(e!==x){if(e!==~~e||e<0||e>1e6)throw Error(k);for(r=O(new r.constructor(r),e+r.e+1,t),e=e+r.e+1;r.c.length<e;)r.c.push(0)}return P(r,!1,!!a)},T[Symbol.for("nodejs.util.inspect.custom")]=T.toJSON=T.toString=function(){var e=this.constructor;return P(this,this.e<=e.NE||this.e>=e.PE,!!this.c[0])},T.toNumber=function(){var e=+P(this,!0,!0);if(!0===this.constructor.strict&&!this.eq(e.toString()))throw Error(E+"Imprecise conversion");return e},T.toPrecision=function(e,t){var r=this,a=r.constructor,o=r.c[0];if(e!==x){if(e!==~~e||e<1||e>1e6)throw Error(S+"precision");for(r=O(new a(r),e,t);r.c.length<e;)r.c.push(0)}return P(r,e<=r.e||r.e<=a.NE||r.e>=a.PE,!!o)},T.valueOf=function(){var e=this.constructor;if(!0===e.strict)throw Error(E+"valueOf disallowed");return P(this,this.e<=e.NE||this.e>=e.PE,!0)};var R=function e(){function t(r){if(!(this instanceof t))return r===x?e():new t(r);if(r instanceof t)this.s=r.s,this.e=r.e,this.c=r.c.slice();else{if("string"!=typeof r){if(!0===t.strict&&"bigint"!=typeof r)throw TypeError(S+"value");r=0===r&&1/r<0?"-0":String(r)}!function(e,t){var r,a,o;if(!U.test(t))throw Error(S+"number");for(e.s="-"==t.charAt(0)?(t=t.slice(1),-1):1,(r=t.indexOf("."))>-1&&(t=t.replace(".","")),(a=t.search(/e/i))>0?(r<0&&(r=a),r+=+t.slice(a+1),t=t.substring(0,a)):r<0&&(r=t.length),o=t.length,a=0;a<o&&"0"==t.charAt(a);)++a;if(a==o)e.c=[e.e=0];else{for(;o>0&&"0"==t.charAt(--o););for(e.e=r-a-1,e.c=[],r=0;a<=o;)e.c[r++]=+t.charAt(a++)}}(this,r)}this.constructor=t}return t.prototype=T,t.DP=20,t.RM=1,t.NE=-7,t.PE=21,t.strict=!1,t.roundDown=0,t.roundHalfUp=1,t.roundHalfEven=2,t.roundUp=3,t}();let D={bigNumber:e=>new R(e?e:0),multiply(e,t){if(void 0===e||void 0===t)return new R(0);let r=new R(e),a=new R(t);return r.times(a)},formatNumberToLocalString:(e,t=2)=>void 0===e?"0.00":"number"==typeof e?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}),parseLocalStringToNumber:e=>void 0===e?0:parseFloat(e.replace(/,/gu,""))},M=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],B=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];var L=e.i(886804);let W={createBalance(e,t){let r={name:e.metadata.name||"",symbol:e.metadata.symbol||"",decimals:e.metadata.decimals||0,value:e.metadata.value||0,price:e.metadata.price||0,iconUrl:e.metadata.iconUrl||""};return{name:r.name,symbol:r.symbol,chainId:t,address:"native"===e.address?void 0:this.convertAddressToCAIP10Address(e.address,t),value:r.value,price:r.price,quantity:{decimals:r.decimals.toString(),numeric:this.convertHexToBalance({hex:e.balance,decimals:r.decimals})},iconUrl:r.iconUrl}},convertHexToBalance:({hex:e,decimals:t})=>(0,L.formatUnits)(BigInt(e),t),convertAddressToCAIP10Address:(e,t)=>`${t}:${e}`,createCAIP2ChainId:(e,t)=>`${t}:${parseInt(e,16)}`,getChainIdHexFromCAIP2ChainId(e){let t=e.split(":");if(t.length<2||!t[1])return"0x0";let r=parseInt(t[1],10);return isNaN(r)?"0x0":`0x${r.toString(16)}`},isWalletGetAssetsResponse(e){return"object"==typeof e&&null!==e&&Object.values(e).every(e=>Array.isArray(e)&&e.every(e=>this.isValidAsset(e)))},isValidAsset:e=>"object"==typeof e&&null!==e&&"string"==typeof e.address&&"string"==typeof e.balance&&("ERC20"===e.type||"NATIVE"===e.type)&&"object"==typeof e.metadata&&null!==e.metadata&&"string"==typeof e.metadata.name&&"string"==typeof e.metadata.symbol&&"number"==typeof e.metadata.decimals&&"number"==typeof e.metadata.price&&"string"==typeof e.metadata.iconUrl},$={async getMyTokensWithBalance(e){let t=u.AccountController.state.address,r=K.state.activeCaipNetwork;if(!t||!r)return[];if("eip155"===r.chainNamespace){let e=await this.getEIP155Balances(t,r);if(e)return this.filterLowQualityTokens(e)}let a=await h.BlockchainApiController.getBalance(t,r.caipNetworkId,e);return this.filterLowQualityTokens(a.balances)},async getEIP155Balances(e,t){try{let r=W.getChainIdHexFromCAIP2ChainId(t.caipNetworkId),a=await A.getCapabilities(e);if(!a?.[r]?.assetDiscovery?.supported)return null;let o=await A.walletGetAssets({account:e,chainFilter:[r]});if(!W.isWalletGetAssetsResponse(o))return null;return(o[r]||[]).map(e=>W.createBalance(e,t.caipNetworkId))}catch(e){return null}},filterLowQualityTokens:e=>e.filter(e=>"0"!==e.quantity.decimals),mapBalancesToSwapTokens:e=>e?.map(e=>({...e,address:e?.address?e.address:K.getActiveNetworkTokenAddress(),decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1}))||[]},F=(0,r.proxy)({tokenBalances:[],loading:!1}),H=(0,l.withErrorBoundary)({state:F,subscribe:e=>(0,r.subscribe)(F,()=>e(F)),subscribeKey:(e,t)=>(0,a.subscribeKey)(F,e,t),setToken(e){e&&(F.token=(0,r.ref)(e))},setTokenAmount(e){F.sendTokenAmount=e},setReceiverAddress(e){F.receiverAddress=e},setReceiverProfileImageUrl(e){F.receiverProfileImageUrl=e},setReceiverProfileName(e){F.receiverProfileName=e},setNetworkBalanceInUsd(e){F.networkBalanceInUSD=e},setLoading(e){F.loading=e},async sendToken(){try{switch(H.setLoading(!0),K.state.activeCaipNetwork?.chainNamespace){case"eip155":await H.sendEvmToken();return;case"solana":await H.sendSolanaToken();return;default:throw Error("Unsupported chain")}}finally{H.setLoading(!1)}},async sendEvmToken(){let e=K.state.activeChain,t=u.AccountController.state.preferredAccountTypes?.[e];if(!H.state.sendTokenAmount||!H.state.receiverAddress)throw Error("An amount and receiver address are required");if(!H.state.token)throw Error("A token is required");H.state.token?.address?(p.EventsController.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===w.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,token:H.state.token.address,amount:H.state.sendTokenAmount,network:K.state.activeCaipNetwork?.caipNetworkId||""}}),await H.sendERC20Token({receiverAddress:H.state.receiverAddress,tokenAddress:H.state.token.address,sendTokenAmount:H.state.sendTokenAmount,decimals:H.state.token.quantity.decimals})):(p.EventsController.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===w.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,token:H.state.token.symbol||"",amount:H.state.sendTokenAmount,network:K.state.activeCaipNetwork?.caipNetworkId||""}}),await H.sendNativeToken({receiverAddress:H.state.receiverAddress,sendTokenAmount:H.state.sendTokenAmount,decimals:H.state.token.quantity.decimals}))},async fetchTokenBalance(e){F.loading=!0;let t=K.state.activeCaipNetwork?.caipNetworkId,r=K.state.activeCaipNetwork?.chainNamespace,a=K.state.activeCaipAddress,o=a?s.CoreHelperUtil.getPlainAddress(a):void 0;if(F.lastRetry&&!s.CoreHelperUtil.isAllowedRetry(F.lastRetry,30*i.ConstantsUtil.ONE_SEC_MS))return F.loading=!1,[];try{if(o&&t&&r){let e=await $.getMyTokensWithBalance();return F.tokenBalances=e,F.lastRetry=void 0,e}}catch(t){F.lastRetry=Date.now(),e?.(t),C.SnackController.showError("Token Balance Unavailable")}finally{F.loading=!1}return[]},fetchNetworkBalance(){if(0===F.tokenBalances.length)return;let e=$.mapBalancesToSwapTokens(F.tokenBalances);if(!e)return;let t=e.find(e=>e.address===K.getActiveNetworkTokenAddress());t&&(F.networkBalanceInUSD=t?D.multiply(t.quantity.numeric,t.price).toString():"0")},async sendNativeToken(e){g.RouterController.pushTransactionStack({});let t=e.receiverAddress,r=u.AccountController.state.address,a=A.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));await A.sendTransaction({chainNamespace:"eip155",to:t,address:r,data:"0x",value:a??BigInt(0)}),p.EventsController.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:u.AccountController.state.preferredAccountTypes?.eip155===w.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,token:H.state.token?.symbol||"",amount:e.sendTokenAmount,network:K.state.activeCaipNetwork?.caipNetworkId||""}}),A._getClient()?.updateBalance("eip155"),H.resetSend()},async sendERC20Token(e){g.RouterController.pushTransactionStack({onSuccess(){g.RouterController.replace("Account")}});let t=A.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));if(u.AccountController.state.address&&e.sendTokenAmount&&e.receiverAddress&&e.tokenAddress){let r,a=s.CoreHelperUtil.getPlainAddress(e.tokenAddress);await A.writeContract({fromAddress:u.AccountController.state.address,tokenAddress:a,args:[e.receiverAddress,t??BigInt(0)],method:"transfer",abi:(r=a,o.ConstantsUtil.USDT_CONTRACT_ADDRESSES.includes(r)?B:M),chainNamespace:"eip155"}),H.resetSend()}},async sendSolanaToken(){if(!H.state.sendTokenAmount||!H.state.receiverAddress)throw Error("An amount and receiver address are required");g.RouterController.pushTransactionStack({onSuccess(){g.RouterController.replace("Account")}}),await A.sendTransaction({chainNamespace:"solana",to:H.state.receiverAddress,value:H.state.sendTokenAmount}),A._getClient()?.updateBalance("solana"),H.resetSend()},resetSend(){F.token=void 0,F.sendTokenAmount=void 0,F.receiverAddress=void 0,F.receiverProfileImageUrl=void 0,F.receiverProfileName=void 0,F.loading=!1,F.tokenBalances=[]}}),j={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[],user:void 0},V={caipNetwork:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},z=(0,r.proxy)({chains:(0,a.proxyMap)(),activeCaipAddress:void 0,activeChain:void 0,activeCaipNetwork:void 0,noAdapters:!1,universalAdapter:{networkControllerClient:void 0,connectionControllerClient:void 0},isSwitchingNamespace:!1}),K=(0,l.withErrorBoundary)({state:z,subscribe:e=>(0,r.subscribe)(z,()=>{e(z)}),subscribeKey:(e,t)=>(0,a.subscribeKey)(z,e,t),subscribeChainProp(e,t,a){let o;return(0,r.subscribe)(z.chains,()=>{let r=a||z.activeChain;if(r){let a=z.chains.get(r)?.[e];o!==a&&(o=a,t(a))}})},initialize(e,t,a){let{chainId:o,namespace:n}=c.StorageUtil.getActiveNetworkProps(),i=t?.find(e=>e.id.toString()===o?.toString()),s=e.find(e=>e?.namespace===n)||e?.[0],l=e.map(e=>e.namespace).filter(e=>void 0!==e),u=new Set(f.OptionsController.state.enableEmbedded?[...l]:[...t?.map(e=>e.chainNamespace)??[]]);e?.length!==0&&s||(z.noAdapters=!0),!z.noAdapters&&(z.activeChain=s?.namespace,z.activeCaipNetwork=i,K.setChainNetworkData(s?.namespace,{caipNetwork:i}),z.activeChain&&N.PublicStateController.set({activeChain:s?.namespace})),u.forEach(e=>{let o=t?.filter(t=>t.chainNamespace===e);K.state.chains.set(e,{namespace:e,networkState:(0,r.proxy)({...V,caipNetwork:o?.[0]}),accountState:(0,r.proxy)(j),caipNetworks:o??[],...a}),K.setRequestedCaipNetworks(o??[],e)})},removeAdapter(e){if(z.activeChain===e){let t=Array.from(z.chains.entries()).find(([t])=>t!==e);if(t){let e=t[1]?.caipNetworks?.[0];e&&K.setActiveCaipNetwork(e)}}z.chains.delete(e)},addAdapter(e,{networkControllerClient:t,connectionControllerClient:r},a){z.chains.set(e.namespace,{namespace:e.namespace,networkState:{...V,caipNetwork:a[0]},accountState:j,caipNetworks:a,connectionControllerClient:r,networkControllerClient:t}),K.setRequestedCaipNetworks(a?.filter(t=>t.chainNamespace===e.namespace)??[],e.namespace)},addNetwork(e){let t=z.chains.get(e.chainNamespace);if(t){let r=[...t.caipNetworks||[]];t.caipNetworks?.find(t=>t.id===e.id)||r.push(e),z.chains.set(e.chainNamespace,{...t,caipNetworks:r}),K.setRequestedCaipNetworks(r,e.chainNamespace),d.ConnectorController.filterByNamespace(e.chainNamespace,!0)}},removeNetwork(e,t){let r=z.chains.get(e);if(r){let a=z.activeCaipNetwork?.id===t,o=[...r.caipNetworks?.filter(e=>e.id!==t)||[]];a&&r?.caipNetworks?.[0]&&K.setActiveCaipNetwork(r.caipNetworks[0]),z.chains.set(e,{...r,caipNetworks:o}),K.setRequestedCaipNetworks(o||[],e),0===o.length&&d.ConnectorController.filterByNamespace(e,!1)}},setAdapterNetworkState(e,t){let r=z.chains.get(e);r&&(r.networkState={...r.networkState||V,...t},z.chains.set(e,r))},setChainAccountData(e,t,r=!0){if(!e)throw Error("Chain is required to update chain account data");let a=z.chains.get(e);if(a){let r={...a.accountState||j,...t};z.chains.set(e,{...a,accountState:r}),(1===z.chains.size||z.activeChain===e)&&(t.caipAddress&&(z.activeCaipAddress=t.caipAddress),u.AccountController.replaceState(r))}},setChainNetworkData(e,t){if(!e)return;let r=z.chains.get(e);if(r){let a={...r.networkState||V,...t};z.chains.set(e,{...r,networkState:a})}},setAccountProp(e,t,r,a=!0){K.setChainAccountData(r,{[e]:t},a),"status"===e&&"disconnected"===t&&r&&d.ConnectorController.removeConnectorId(r)},setActiveNamespace(e){z.activeChain=e;let t=e?z.chains.get(e):void 0,r=t?.networkState?.caipNetwork;r?.id&&e&&(z.activeCaipAddress=t?.accountState?.caipAddress,z.activeCaipNetwork=r,K.setChainNetworkData(e,{caipNetwork:r}),c.StorageUtil.setActiveCaipNetworkId(r?.caipNetworkId),N.PublicStateController.set({activeChain:e,selectedNetworkId:r?.caipNetworkId}))},setActiveCaipNetwork(e){if(!e)return;z.activeChain!==e.chainNamespace&&K.setIsSwitchingNamespace(!0);let t=z.chains.get(e.chainNamespace);z.activeChain=e.chainNamespace,z.activeCaipNetwork=e,K.setChainNetworkData(e.chainNamespace,{caipNetwork:e}),t?.accountState?.address?z.activeCaipAddress=`${e.chainNamespace}:${e.id}:${t?.accountState?.address}`:z.activeCaipAddress=void 0,K.setAccountProp("caipAddress",z.activeCaipAddress,e.chainNamespace),t&&u.AccountController.replaceState(t.accountState),H.resetSend(),N.PublicStateController.set({activeChain:z.activeChain,selectedNetworkId:z.activeCaipNetwork?.caipNetworkId}),c.StorageUtil.setActiveCaipNetworkId(e.caipNetworkId),K.checkIfSupportedNetwork(e.chainNamespace)||!f.OptionsController.state.enableNetworkSwitch||f.OptionsController.state.allowUnsupportedChain||A.state.wcBasic||K.showUnsupportedChainUI()},addCaipNetwork(e){if(!e)return;let t=z.chains.get(e.chainNamespace);t&&t?.caipNetworks?.push(e)},async switchActiveNamespace(e){if(!e)return;let t=e!==K.state.activeChain,r=K.getNetworkData(e)?.caipNetwork,a=K.getCaipNetworkByNamespace(e,r?.id);t&&a&&await K.switchActiveNetwork(a)},async switchActiveNetwork(e){let t=K.state.chains.get(K.state.activeChain),r=!t?.caipNetworks?.some(e=>e.id===z.activeCaipNetwork?.id),a=K.getNetworkControllerClient(e.chainNamespace);if(a){try{await a.switchCaipNetwork(e),r&&m.ModalController.close()}catch(e){g.RouterController.goBack()}p.EventsController.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.caipNetworkId}})}},getNetworkControllerClient(e){let t=e||z.activeChain,r=z.chains.get(t);if(!r)throw Error("Chain adapter not found");if(!r.networkControllerClient)throw Error("NetworkController client not set");return r.networkControllerClient},getConnectionControllerClient(e){let t=e||z.activeChain;if(!t)throw Error("Chain is required to get connection controller client");let r=z.chains.get(t);if(!r?.connectionControllerClient)throw Error("ConnectionController client not set");return r.connectionControllerClient},getAccountProp(e,t){let r=z.activeChain;if(t&&(r=t),!r)return;let a=z.chains.get(r)?.accountState;if(a)return a[e]},getNetworkProp(e,t){let r=z.chains.get(t)?.networkState;if(r)return r[e]},getRequestedCaipNetworks(e){let t=z.chains.get(e),{approvedCaipNetworkIds:r=[],requestedCaipNetworks:a=[]}=t?.networkState||{};return s.CoreHelperUtil.sortRequestedNetworks(r,a)},getAllRequestedCaipNetworks(){let e=[];return z.chains.forEach(t=>{let r=K.getRequestedCaipNetworks(t.namespace);e.push(...r)}),e},setRequestedCaipNetworks(e,t){K.setAdapterNetworkState(t,{requestedCaipNetworks:e});let r=Array.from(new Set(K.getAllRequestedCaipNetworks().map(e=>e.chainNamespace)));d.ConnectorController.filterByNamespaces(r)},getAllApprovedCaipNetworkIds(){let e=[];return z.chains.forEach(t=>{let r=K.getApprovedCaipNetworkIds(t.namespace);e.push(...r)}),e},getActiveCaipNetwork:()=>z.activeCaipNetwork,getActiveCaipAddress:()=>z.activeCaipAddress,getApprovedCaipNetworkIds(e){let t=z.chains.get(e);return t?.networkState?.approvedCaipNetworkIds||[]},async setApprovedCaipNetworksData(e){let t=K.getNetworkControllerClient(),r=await t?.getApprovedCaipNetworksData();K.setAdapterNetworkState(e,{approvedCaipNetworkIds:r?.approvedCaipNetworkIds,supportsAllNetworks:r?.supportsAllNetworks})},checkIfSupportedNetwork(e,t){let r=t||z.activeCaipNetwork,a=K.getRequestedCaipNetworks(e);return!a.length||a?.some(e=>e.id===r?.id)},checkIfSupportedChainId(e){if(!z.activeChain)return!0;let t=K.getRequestedCaipNetworks(z.activeChain);return t?.some(t=>t.id===e)},setSmartAccountEnabledNetworks(e,t){K.setAdapterNetworkState(t,{smartAccountEnabledNetworks:e})},checkIfSmartAccountEnabled(){let e=n.NetworkUtil.caipNetworkIdToNumber(z.activeCaipNetwork?.caipNetworkId),t=z.activeChain;if(!t||!e)return!1;let r=K.getNetworkProp("smartAccountEnabledNetworks",t);return!!r?.includes(Number(e))},getActiveNetworkTokenAddress(){let e=z.activeCaipNetwork?.chainNamespace||"eip155",t=z.activeCaipNetwork?.id||1,r=i.ConstantsUtil.NATIVE_TOKEN_ADDRESS[e];return`${e}:${t}:${r}`},showUnsupportedChainUI(){m.ModalController.open({view:"UnsupportedChain"})},checkIfNamesSupported(){let e=z.activeCaipNetwork;return!!(e?.chainNamespace&&i.ConstantsUtil.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace))},resetNetwork(e){K.setAdapterNetworkState(e,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},resetAccount(e){if(!e)throw Error("Chain is required to set account prop");z.activeCaipAddress=void 0,K.setChainAccountData(e,{smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountTypes:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0,allAccounts:[],user:void 0,status:"disconnected"}),d.ConnectorController.removeConnectorId(e)},setIsSwitchingNamespace(e){z.isSwitchingNamespace=e},getFirstCaipNetworkSupportsAuthConnector(){let e=[];if(z.chains.forEach(t=>{o.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===t.namespace)&&t.namespace&&e.push(t.namespace)}),e.length>0){let t=e[0];return t?z.chains.get(t)?.caipNetworks?.[0]:void 0}},getAccountData:e=>e?K.state.chains.get(e)?.accountState:u.AccountController.state,getNetworkData(e){let t=e||z.activeChain;if(t)return K.state.chains.get(t)?.networkState},getCaipNetworkByNamespace(e,t){if(!e)return;let r=K.state.chains.get(e),a=r?.caipNetworks?.find(e=>e.id===t);return a||r?.networkState?.caipNetwork||r?.caipNetworks?.[0]},getRequestedCaipNetworkIds(){let e=d.ConnectorController.state.filterByNamespace;return(e?[z.chains.get(e)]:Array.from(z.chains.values())).flatMap(e=>e?.caipNetworks||[]).map(e=>e.caipNetworkId)},getCaipNetworks:e=>e?K.getRequestedCaipNetworks(e):K.getAllRequestedCaipNetworks()})},918985,529038,e=>{"use strict";e.s(["AccountController",()=>w],918985);var t=e.i(139776),r=e.i(865067),a=e.i(834071),o=e.i(838788);e.s(["BlockchainApiController",()=>m],529038);var n=e.i(314687),i=e.i(457231),s=e.i(297726),c=e.i(135054),l=e.i(555766);let u={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},d=a.CoreHelperUtil.getBlockchainApiUrl(),p=(0,t.proxy)({clientId:null,api:new n.FetchUtil({baseUrl:d,clientId:null}),supportedChains:{http:[],ws:[]}}),m={state:p,async get(e){let{st:t,sv:r}=m.getSdkProperties(),a=c.OptionsController.state.projectId,o={...e.params||{},st:t,sv:r,projectId:a};return p.api.get({...e,params:o})},getSdkProperties(){let{sdkType:e,sdkVersion:t}=c.OptionsController.state;return{st:e||"unknown",sv:t||"unknown"}},async isNetworkSupported(e){if(!e)return!1;try{p.supportedChains.http.length||await m.getSupportedNetworks()}catch(e){return!1}return p.supportedChains.http.includes(e)},async getSupportedNetworks(){try{let e=await m.get({path:"v1/supported-chains"});return p.supportedChains=e,e}catch{return p.supportedChains}},async fetchIdentity({address:e,caipNetworkId:t}){if(!await m.isNetworkSupported(t))return{avatar:"",name:""};let r=i.StorageUtil.getIdentityFromCacheForAddress(e);if(r)return r;let o=await m.get({path:`/v1/identity/${e}`,params:{sender:s.ChainController.state.activeCaipAddress?a.CoreHelperUtil.getPlainAddress(s.ChainController.state.activeCaipAddress):void 0}});return i.StorageUtil.updateIdentityCache({address:e,identity:o,timestamp:Date.now()}),o},fetchTransactions:async({account:e,cursor:t,onramp:r,signal:a,cache:o,chainId:n})=>await m.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?m.get({path:`/v1/account/${e}/history`,params:{cursor:t,onramp:r,chainId:n},signal:a,cache:o}):{data:[],next:void 0},fetchSwapQuote:async({amount:e,userAddress:t,from:r,to:a,gasPrice:o})=>await m.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?m.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{amount:e,userAddress:t,from:r,to:a,gasPrice:o}}):{quotes:[]},fetchSwapTokens:async({chainId:e})=>await m.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?m.get({path:"/v1/convert/tokens",params:{chainId:e}}):{tokens:[]},fetchTokenPrice:async({addresses:e})=>await m.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?p.api.post({path:"/v1/fungible/price",body:{currency:"usd",addresses:e,projectId:c.OptionsController.state.projectId},headers:{"Content-Type":"application/json"}}):{fungibles:[]},fetchSwapAllowance:async({tokenAddress:e,userAddress:t})=>await m.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?m.get({path:"/v1/convert/allowance",params:{tokenAddress:e,userAddress:t},headers:{"Content-Type":"application/json"}}):{allowance:"0"},async fetchGasPrice({chainId:e}){let{st:t,sv:r}=m.getSdkProperties();if(!await m.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId))throw Error("Network not supported for Gas Price");return m.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json"},params:{chainId:e,st:t,sv:r}})},async generateSwapCalldata({amount:e,from:t,to:a,userAddress:o,disableEstimate:n}){if(!await m.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId))throw Error("Network not supported for Swaps");return p.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:e,eip155:{slippage:r.ConstantsUtil.CONVERT_SLIPPAGE_TOLERANCE},projectId:c.OptionsController.state.projectId,from:t,to:a,userAddress:o,disableEstimate:n}})},async generateApproveCalldata({from:e,to:t,userAddress:r}){let{st:a,sv:o}=m.getSdkProperties();if(!await m.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId))throw Error("Network not supported for Swaps");return m.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json"},params:{userAddress:r,from:e,to:t,st:a,sv:o}})},async getBalance(e,t,r){let{st:a,sv:o}=m.getSdkProperties();if(!await m.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId))return l.SnackController.showError("Token Balance Unavailable"),{balances:[]};let n=`${t}:${e}`,c=i.StorageUtil.getBalanceCacheForCaipAddress(n);if(c)return c;let u=await m.get({path:`/v1/account/${e}/balance`,params:{currency:"usd",chainId:t,forceUpdate:r,st:a,sv:o}});return i.StorageUtil.updateBalanceCache({caipAddress:n,balance:u,timestamp:Date.now()}),u},lookupEnsName:async e=>await m.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?m.get({path:`/v1/profile/account/${e}`,params:{apiVersion:"2"}}):{addresses:{},attributes:[]},reverseLookupEnsName:async({address:e})=>await m.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?m.get({path:`/v1/profile/reverse/${e}`,params:{sender:w.state.address,apiVersion:"2"}}):[],getEnsNameSuggestions:async e=>await m.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?m.get({path:`/v1/profile/suggestions/${e}`,params:{zone:"reown.id"}}):{suggestions:[]},registerEnsName:async({coinType:e,address:t,message:r,signature:a})=>await m.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?p.api.post({path:"/v1/profile/account",body:{coin_type:e,address:t,message:r,signature:a},headers:{"Content-Type":"application/json"}}):{success:!1},generateOnRampURL:async({destinationWallets:e,partnerUserId:t,defaultNetwork:r,purchaseAmount:a,paymentAmount:o})=>await m.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?(await p.api.post({path:"/v1/generators/onrampurl",params:{projectId:c.OptionsController.state.projectId},body:{destinationWallets:e,defaultNetwork:r,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:a,presetFiatAmount:o}})).url:"",async getOnrampOptions(){if(!await m.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId))return{paymentCurrencies:[],purchaseCurrencies:[]};try{return await m.get({path:"/v1/onramp/options"})}catch(e){return u}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:r,network:a}){try{if(!await m.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId))return null;return await p.api.post({path:"/v1/onramp/quote",params:{projectId:c.OptionsController.state.projectId},body:{purchaseCurrency:e,paymentCurrency:t,amount:r,network:a}})}catch(e){return{coinbaseFee:{amount:r,currency:t.id},networkFee:{amount:r,currency:t.id},paymentSubtotal:{amount:r,currency:t.id},paymentTotal:{amount:r,currency:t.id},purchaseAmount:{amount:r,currency:t.id},quoteId:"mocked-quote-id"}}},getSmartSessions:async e=>await m.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?m.get({path:`/v1/sessions/${e}`}):[],revokeSmartSession:async(e,t,r)=>await m.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?p.api.post({path:`/v1/sessions/${e}/revoke`,params:{projectId:c.OptionsController.state.projectId},body:{pci:t,signature:r}}):{success:!1},setClientId(e){p.clientId=e,p.api=new n.FetchUtil({baseUrl:d,clientId:e})}},g=(0,t.proxy)({currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),w=(0,o.withErrorBoundary)({state:g,replaceState(e){e&&Object.assign(g,(0,t.ref)(e))},subscribe:e=>s.ChainController.subscribeChainProp("accountState",t=>{if(t)return e(t)}),subscribeKey(e,t,r){let a;return s.ChainController.subscribeChainProp("accountState",r=>{if(r){let o=r[e];a!==o&&(a=o,t(o))}},r)},setStatus(e,t){s.ChainController.setAccountProp("status",e,t)},getCaipAddress:e=>s.ChainController.getAccountProp("caipAddress",e),setCaipAddress(e,t){let r=e?a.CoreHelperUtil.getPlainAddress(e):void 0;t===s.ChainController.state.activeChain&&(s.ChainController.state.activeCaipAddress=e),s.ChainController.setAccountProp("caipAddress",e,t),s.ChainController.setAccountProp("address",r,t)},setBalance(e,t,r){s.ChainController.setAccountProp("balance",e,r),s.ChainController.setAccountProp("balanceSymbol",t,r)},setProfileName(e,t){s.ChainController.setAccountProp("profileName",e,t)},setProfileImage(e,t){s.ChainController.setAccountProp("profileImage",e,t)},setUser(e,t){s.ChainController.setAccountProp("user",e,t)},setAddressExplorerUrl(e,t){s.ChainController.setAccountProp("addressExplorerUrl",e,t)},setSmartAccountDeployed(e,t){s.ChainController.setAccountProp("smartAccountDeployed",e,t)},setCurrentTab(e){s.ChainController.setAccountProp("currentTab",e,s.ChainController.state.activeChain)},setTokenBalance(e,t){e&&s.ChainController.setAccountProp("tokenBalance",e,t)},setShouldUpdateToAddress(e,t){s.ChainController.setAccountProp("shouldUpdateToAddress",e,t)},setAllAccounts(e,t){s.ChainController.setAccountProp("allAccounts",e,t)},addAddressLabel(e,t,r){let a=s.ChainController.getAccountProp("addressLabels",r)||new Map;a.set(e,t),s.ChainController.setAccountProp("addressLabels",a,r)},removeAddressLabel(e,t){let r=s.ChainController.getAccountProp("addressLabels",t)||new Map;r.delete(e),s.ChainController.setAccountProp("addressLabels",r,t)},setConnectedWalletInfo(e,t){s.ChainController.setAccountProp("connectedWalletInfo",e,t,!1)},setPreferredAccountType(e,t){s.ChainController.setAccountProp("preferredAccountTypes",{...g.preferredAccountTypes,[t]:e},t)},setPreferredAccountTypes(e){g.preferredAccountTypes=e},setSocialProvider(e,t){e&&s.ChainController.setAccountProp("socialProvider",e,t)},setSocialWindow(e,r){s.ChainController.setAccountProp("socialWindow",e?(0,t.ref)(e):void 0,r)},setFarcasterUrl(e,t){s.ChainController.setAccountProp("farcasterUrl",e,t)},async fetchTokenBalance(e){g.balanceLoading=!0;let t=s.ChainController.state.activeCaipNetwork?.caipNetworkId,o=s.ChainController.state.activeCaipNetwork?.chainNamespace,n=s.ChainController.state.activeCaipAddress,i=n?a.CoreHelperUtil.getPlainAddress(n):void 0;if(g.lastRetry&&!a.CoreHelperUtil.isAllowedRetry(g.lastRetry,30*r.ConstantsUtil.ONE_SEC_MS))return g.balanceLoading=!1,[];try{if(i&&t&&o){let e=(await m.getBalance(i,t)).balances.filter(e=>"0"!==e.quantity.decimals);return w.setTokenBalance(e,o),g.lastRetry=void 0,g.balanceLoading=!1,e}}catch(t){g.lastRetry=Date.now(),e?.(t),l.SnackController.showError("Token Balance Unavailable")}finally{g.balanceLoading=!1}return[]},resetAccount(e){s.ChainController.resetAccount(e)}})},584336,e=>{"use strict";var t=e.i(710452);let r={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],SECURE_SITE_ORIGIN:(void 0!==t.default&&void 0!==t.default.env?t.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"],ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150}};e.s(["ConstantsUtil",0,r])},79921,e=>{"use strict";e.s([])},254100,e=>{"use strict";var t=e.i(982199),r=e.i(685486);e.s(["CSSResult",()=>r.CSSResult,"ReactiveElement",()=>t.ReactiveElement,"adoptStyles",()=>r.adoptStyles,"css",()=>r.css,"defaultConverter",()=>t.defaultConverter,"getCompatibleStyle",()=>r.getCompatibleStyle,"notEqual",()=>t.notEqual,"supportsAdoptingStyleSheets",()=>r.supportsAdoptingStyleSheets,"unsafeCSS",()=>r.unsafeCSS])},38514,(e,t,r)=>{e.e,t.exports=function(){"use strict";var e="millisecond",t="second",r="minute",a="hour",o="week",n="month",i="quarter",s="year",c="date",l="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p=function(e,t,r){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(r)+e},m="en",g={};g[m]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}};var w="$isDayjsObject",h=function(e){return e instanceof v||!(!e||!e[w])},f=function e(t,r,a){var o;if(!t)return m;if("string"==typeof t){var n=t.toLowerCase();g[n]&&(o=n),r&&(g[n]=r,o=n);var i=t.split("-");if(!o&&i.length>1)return e(i[0])}else{var s=t.name;g[s]=t,o=s}return!a&&o&&(m=o),o||!a&&m},C=function(e,t){if(h(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new v(r)},b={s:p,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+p(Math.floor(r/60),2,"0")+":"+p(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var a=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(a,n),i=r-o<0,s=t.clone().add(a+(i?-1:1),n);return+(-(a+(r-o)/(i?o-s:s-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(l){return({M:n,y:s,w:o,d:"day",D:c,h:a,m:r,s:t,ms:e,Q:i})[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};b.l=f,b.i=h,b.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var v=function(){function p(e){this.$L=f(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var m=p.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(u);if(a){var o=a[2]-1||0,n=(a[7]||"0").substring(0,3);return r?new Date(Date.UTC(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,n)):new Date(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,n)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return this.$d.toString()!==l},m.isSame=function(e,t){var r=C(e);return this.startOf(t)<=r&&r<=this.endOf(t)},m.isAfter=function(e,t){return C(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<C(e)},m.$g=function(e,t,r){return b.u(e)?this[t]:this.set(r,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,i){var l=this,u=!!b.u(i)||i,d=b.p(e),p=function(e,t){var r=b.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return u?r:r.endOf("day")},m=function(e,t){return b.w(l.toDate()[e].apply(l.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},g=this.$W,w=this.$M,h=this.$D,f="set"+(this.$u?"UTC":"");switch(d){case s:return u?p(1,0):p(31,11);case n:return u?p(1,w):p(0,w+1);case o:var C=this.$locale().weekStart||0,v=(g<C?g+7:g)-C;return p(u?h-v:h+(6-v),w);case"day":case c:return m(f+"Hours",0);case a:return m(f+"Minutes",1);case r:return m(f+"Seconds",2);case t:return m(f+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(o,i){var l,u=b.p(o),d="set"+(this.$u?"UTC":""),p=((l={}).day=d+"Date",l[c]=d+"Date",l[n]=d+"Month",l[s]=d+"FullYear",l[a]=d+"Hours",l[r]=d+"Minutes",l[t]=d+"Seconds",l[e]=d+"Milliseconds",l)[u],m="day"===u?this.$D+(i-this.$W):i;if(u===n||u===s){var g=this.clone().set(c,1);g.$d[p](m),g.init(),this.$d=g.set(c,Math.min(this.$D,g.daysInMonth())).$d}else p&&this.$d[p](m);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[b.p(e)]()},m.add=function(e,i){var c,l=this;e=Number(e);var u=b.p(i),d=function(t){var r=C(l);return b.w(r.date(r.date()+Math.round(t*e)),l)};if(u===n)return this.set(n,this.$M+e);if(u===s)return this.set(s,this.$y+e);if("day"===u)return d(1);if(u===o)return d(7);var p=((c={})[r]=6e4,c[a]=36e5,c[t]=1e3,c)[u]||1,m=this.$d.getTime()+e*p;return b.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||l;var a=e||"YYYY-MM-DDTHH:mm:ssZ",o=b.z(this),n=this.$H,i=this.$m,s=this.$M,c=r.weekdays,u=r.months,p=r.meridiem,m=function(e,r,o,n){return e&&(e[r]||e(t,a))||o[r].slice(0,n)},g=function(e){return b.s(n%12||12,e,"0")},w=p||function(e,t,r){var a=e<12?"AM":"PM";return r?a.toLowerCase():a};return a.replace(d,function(e,a){return a||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return b.s(t.$y,4,"0");case"M":return s+1;case"MM":return b.s(s+1,2,"0");case"MMM":return m(r.monthsShort,s,u,3);case"MMMM":return m(u,s);case"D":return t.$D;case"DD":return b.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return m(r.weekdaysMin,t.$W,c,2);case"ddd":return m(r.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(n);case"HH":return b.s(n,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return w(n,i,!0);case"A":return w(n,i,!1);case"m":return String(i);case"mm":return b.s(i,2,"0");case"s":return String(t.$s);case"ss":return b.s(t.$s,2,"0");case"SSS":return b.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")})},m.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},m.diff=function(e,c,l){var u,d=this,p=b.p(c),m=C(e),g=(m.utcOffset()-this.utcOffset())*6e4,w=this-m,h=function(){return b.m(d,m)};switch(p){case s:u=h()/12;break;case n:u=h();break;case i:u=h()/3;break;case o:u=(w-g)/6048e5;break;case"day":u=(w-g)/864e5;break;case a:u=w/36e5;break;case r:u=w/6e4;break;case t:u=w/1e3;break;default:u=w}return l?u:b.a(u)},m.daysInMonth=function(){return this.endOf(n).$D},m.$locale=function(){return g[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),a=f(e,t,!0);return a&&(r.$L=a),r},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},p}(),y=v.prototype;return C.prototype=y,[["$ms",e],["$s",t],["$m",r],["$H",a],["$W","day"],["$M",n],["$y",s],["$D",c]].forEach(function(e){y[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),C.extend=function(e,t){return e.$i||(e(t,v,C),e.$i=!0),C},C.locale=f,C.isDayjs=h,C.unix=function(e){return C(1e3*e)},C.en=g[m],C.Ls=g,C.p={},C}()},927324,(e,t,r)=>{e.e,t.exports={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}}},350152,(e,t,r)=>{e.e,t.exports=function(e,t,r){e=e||{};var a=t.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function n(e,t,r,o){return a.fromToBase(e,t,r,o)}r.en.relativeTime=o,a.fromToBase=function(t,a,n,i,s){for(var c,l,u,d=n.$locale().relativeTime||o,p=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=p.length,g=0;g<m;g+=1){var w=p[g];w.d&&(c=i?r(t).diff(n,w.d,!0):n.diff(t,w.d,!0));var h=(e.rounding||Math.round)(Math.abs(c));if(u=c>0,h<=w.r||!w.r){h<=1&&g>0&&(w=p[g-1]);var f=d[w.l];s&&(h=s(""+h)),l="string"==typeof f?f.replace("%d",h):f(h,a,w.l,u);break}}if(a)return l;var C=u?d.future:d.past;return"function"==typeof C?C(l):C.replace("%s",l)},a.to=function(e,t){return n(e,t,this,!0)},a.from=function(e,t){return n(e,t,this)};var i=function(e){return e.$u?r.utc():r()};a.toNow=function(e){return this.to(i(this),e)},a.fromNow=function(e){return this.from(i(this),e)}}},745169,(e,t,r)=>{e.e,t.exports=function(e,t,r){r.updateLocale=function(e,t){var a=r.Ls[e];if(a)return(t?Object.keys(t):[]).forEach(function(e){a[e]=t[e]}),a}}},695249,913311,334321,75591,e=>{"use strict";let t,r,a;e.i(79921),e.i(856091);var o=e.i(254100),n=e.i(426429);function i(e,o){t=document.createElement("style"),r=document.createElement("style"),a=document.createElement("style"),t.textContent=l(e).core.cssText,r.textContent=l(e).dark.cssText,a.textContent=l(e).light.cssText,document.head.appendChild(t),document.head.appendChild(r),document.head.appendChild(a),s(o)}function s(e){r&&a&&("light"===e?(r.removeAttribute("media"),a.media="enabled"):(a.removeAttribute("media"),r.media="enabled"))}function c(e){t&&r&&a&&(t.textContent=l(e).core.cssText,r.textContent=l(e).dark.cssText,a.textContent=l(e).light.cssText)}function l(e){return{core:o.css`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${(0,o.unsafeCSS)(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,o.unsafeCSS)(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${(0,o.unsafeCSS)(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,o.unsafeCSS)(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,o.unsafeCSS)(e?.["--w3m-z-index"]||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,light:o.css`
      :root {
        --w3m-color-mix: ${(0,o.unsafeCSS)(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,o.unsafeCSS)((0,n.getW3mThemeVariables)(e,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${(0,o.unsafeCSS)((0,n.getW3mThemeVariables)(e,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,dark:o.css`
      :root {
        --w3m-color-mix: ${(0,o.unsafeCSS)(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,o.unsafeCSS)((0,n.getW3mThemeVariables)(e,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${(0,o.unsafeCSS)((0,n.getW3mThemeVariables)(e,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `}}let u=o.css`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,d=o.css`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,p=o.css`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`;e.s(["colorStyles",0,p,"elementStyles",0,d,"initializeTheming",()=>i,"resetStyles",0,u,"setColorTheme",()=>s,"setThemeVariables",()=>c],913311);e.s(["UiHelperUtil",0,{getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName(e){try{return new URL(e).hostname}catch(e){return""}},getTruncateString:({string:e,charsStart:t,charsEnd:r,truncate:a})=>e.length<=t+r?e:"end"===a?`${e.substring(0,t)}...`:"start"===a?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,generateAvatarColors(e){let t=e.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),r=this.hexToRgb(t),a=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),o=100-3*Number(a?.replace("px","")),n=`${o}% ${o}% at 65% 40%`,i=[];for(let e=0;e<5;e+=1){let t=this.tintColor(r,.15*e);i.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`
    --local-color-1: ${i[0]};
    --local-color-2: ${i[1]};
    --local-color-3: ${i[2]};
    --local-color-4: ${i[3]};
    --local-color-5: ${i[4]};
    --local-radial-circle: ${n}
   `},hexToRgb(e){let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){let[r,a,o]=e;return[Math.round(r+(255-r)*t),Math.round(a+(255-a)*t),Math.round(o+(255-o)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e?e:"undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)")?.matches?"dark":"light":"dark",splitBalance(e){let t=e.split(".");return 2===t.length?[t[0],t[1]]:["0","00"]},roundNumber:(e,t,r)=>e.toString().length>=t?Number(e).toFixed(r):e,formatNumberToLocalString:(e,t=2)=>void 0===e?"0.00":"number"==typeof e?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})}],334321);var m=e.i(38514),g=e.i(927324),w=e.i(350152),h=e.i(745169);m.default.extend(w.default),m.default.extend(h.default);let f={...g.default,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}};m.default.locale("en-web3-modal",f);function C(e){return function(t){return"function"==typeof t?(customElements.get(e)||customElements.define(e,t),t):function(e,t){let{kind:r,elements:a}=t;return{kind:r,elements:a,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}e.s(["customElement",()=>C],75591),e.s([],695249)}]);