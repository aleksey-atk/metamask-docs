"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1874],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>y});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),p=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return r.createElement(o.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=n,y=u["".concat(o,".").concat(d)]||u[d]||m[d]||s;return t?r.createElement(y,i(i({ref:a},c),{},{components:t})):r.createElement(y,i({ref:a},c))}));function y(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=d;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<s;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},15002:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=t(58168),n=(t(96540),t(15680));const s={sidebar_label:"JavaScript",sidebar_position:1,description:"Set up the SDK in your JavaScript dapp.",tags:["JavaScript SDK"]},i="Use MetaMask SDK with JavaScript",l={unversionedId:"how-to/use-sdk/javascript/index",id:"how-to/use-sdk/javascript/index",title:"Use MetaMask SDK with JavaScript",description:"Set up the SDK in your JavaScript dapp.",source:"@site/wallet/how-to/use-sdk/javascript/index.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/",permalink:"/wallet/how-to/use-sdk/javascript/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/index.md",tags:[{label:"JavaScript SDK",permalink:"/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"JavaScript",sidebar_position:1,description:"Set up the SDK in your JavaScript dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Use MetaMask SDK",permalink:"/wallet/how-to/use-sdk/"},next:{title:"React",permalink:"/wallet/how-to/use-sdk/javascript/react/"}},o={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Instantiate the SDK",id:"3-instantiate-the-sdk",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3},{value:"Example",id:"example",level:2}],c={toc:p},u="wrapper";function m(e){let{components:a,...t}=e;return(0,n.yg)(u,(0,r.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"use-metamask-sdk-with-javascript"},"Use MetaMask SDK with JavaScript"),(0,n.yg)("p",null,"Import ",(0,n.yg)("a",{parentName:"p",href:"/wallet/concepts/sdk/"},"MetaMask SDK")," into your JavaScript dapp to enable your\nusers to easily connect to the MetaMask browser extension and MetaMask Mobile.\nThe following instructions work for web dapps based on standard JavaScript.\nYou can also see instructions for the following JavaScript-based platforms:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/wallet/how-to/use-sdk/javascript/react/"},"React"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/wallet/how-to/use-sdk/javascript/react/react-ui"},"React UI")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/wallet/how-to/use-sdk/javascript/pure-js"},"Pure JavaScript")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/wallet/how-to/use-sdk/javascript/other-web-frameworks"},"Other web frameworks")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/wallet/how-to/use-sdk/javascript/react-native"},"React Native")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/wallet/how-to/use-sdk/javascript/nodejs"},"Node.js")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/wallet/how-to/use-sdk/javascript/electron"},"Electron"))),(0,n.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"A JavaScript project set up"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-mobile"},"MetaMask Mobile")," version 5.8.1 or later"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://yarnpkg.com/getting-started/install"},"Yarn")," or\n",(0,n.yg)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm"))),(0,n.yg)("h2",{id:"steps"},"Steps"),(0,n.yg)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,n.yg)("p",null,"In your project directory, install the SDK using Yarn or npm:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk\n")),(0,n.yg)("p",null,"or"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/sdk\n")),(0,n.yg)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,n.yg)("p",null,"In your project script, add the following to import the SDK:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},'import { MetaMaskSDK } from "@metamask/sdk";\n')),(0,n.yg)("h3",{id:"3-instantiate-the-sdk"},"3. Instantiate the SDK"),(0,n.yg)("p",null,"Instantiate the SDK using any ",(0,n.yg)("a",{parentName:"p",href:"/wallet/reference/sdk-js-options"},"options"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},'const MMSDK = new MetaMaskSDK({\n    dappMetadata: {\n        name: "JavaScript example dapp",\n        url: window.location.href,\n    },\n    infuraAPIKey: process.env.INFURA_API_KEY,\n    // Other options\n});\n\n// You can also access via window.ethereum\nconst ethereum = MMSDK.getProvider();\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Use ",(0,n.yg)("a",{parentName:"li",href:"/wallet/reference/sdk-js-options#dappmetadata"},(0,n.yg)("inlineCode",{parentName:"a"},"dappMetadata"))," to display information\nabout your dapp in the MetaMask connection modal."),(0,n.yg)("li",{parentName:"ul"},"Use ",(0,n.yg)("a",{parentName:"li",href:"/wallet/reference/sdk-js-options#infuraapikey"},(0,n.yg)("inlineCode",{parentName:"a"},"infuraAPIKey"))," to\n",(0,n.yg)("a",{parentName:"li",href:"/wallet/how-to/use-sdk/javascript/make-read-only-requests"},"make read-only RPC requests")," from your dapp."),(0,n.yg)("li",{parentName:"ul"},"Use ",(0,n.yg)("a",{parentName:"li",href:"/wallet/reference/sdk-js-options#modals"},(0,n.yg)("inlineCode",{parentName:"a"},"modals"))," to ",(0,n.yg)("a",{parentName:"li",href:"/wallet/how-to/use-sdk/javascript/display-custom-modals"},"customize the logic and UI of\nthe displayed modals"),".")),(0,n.yg)("h3",{id:"4-use-the-sdk"},"4. Use the SDK"),(0,n.yg)("p",null,"Use the SDK by calling any ",(0,n.yg)("a",{parentName:"p",href:"/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,n.yg)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,n.yg)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,n.yg)("a",{parentName:"p",href:"/wallet/reference/provider-api#request"},(0,n.yg)("inlineCode",{parentName:"a"},"request()"))," first, since it\nprompts the installation or connection popup to appear."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},'ethereum.request({ method: "eth_requestAccounts", params: [] });\n')),(0,n.yg)("p",null,"You can also call the SDK's ",(0,n.yg)("a",{parentName:"p",href:"/wallet/how-to/use-sdk/javascript/connect-and-sign"},(0,n.yg)("inlineCode",{parentName:"a"},"connectAndSign"))," method, and\n",(0,n.yg)("a",{parentName:"p",href:"/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests"},"batch multiple JSON-RPC requests")," using the ",(0,n.yg)("inlineCode",{parentName:"p"},"metamask_batch")," method."),(0,n.yg)("h2",{id:"example"},"Example"),(0,n.yg)("p",null,"You can copy the full JavaScript example to get started:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import { MetaMaskSDK } from "@metamask/sdk";\n\nconst MMSDK = new MetaMaskSDK({\n    dappMetadata: {\n        name: "Example JavaScript Dapp",\n        url: window.location.href,\n    },\n    infuraAPIKey: process.env.INFURA_API_KEY,\n    // Other options\n});\n\n// You can also access via window.ethereum\nconst ethereum = MMSDK.getProvider();\n\nethereum.request({ method: "eth_requestAccounts", params: [] });\n')),(0,n.yg)("p",null,"See the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples"},"example JavaScript dapps"),"\nin the JavaScript SDK GitHub repository for more information."))}m.isMDXComponent=!0}}]);