"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6023],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>u});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),g=l(t),y=r,u=g["".concat(p,".").concat(y)]||g[y]||c[y]||i;return t?a.createElement(u,o(o({ref:n},m),{},{components:t})):a.createElement(u,o({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=y;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},44722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(58168),r=(t(96540),t(15680));const i={description:"Manage users' non-EVM accounts and assets.",sidebar_position:8},o="Non-EVM networks",s={unversionedId:"features/non-evm-networks",id:"features/non-evm-networks",title:"Non-EVM networks",description:"Manage users' non-EVM accounts and assets.",source:"@site/snaps/features/non-evm-networks.md",sourceDirName:"features",slug:"/features/non-evm-networks",permalink:"/621-onkeyring/snaps/features/non-evm-networks",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/non-evm-networks.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Manage users' non-EVM accounts and assets.",sidebar_position:8},sidebar:"snapsSidebar",previous:{title:"Localization",permalink:"/621-onkeyring/snaps/features/localization"},next:{title:"Signature insights",permalink:"/621-onkeyring/snaps/features/signature-insights"}},p={},l=[{value:"Responsible key management",id:"responsible-key-management",level:2},{value:"Derive keys",id:"derive-keys",level:2},{value:"Dogecoin example",id:"dogecoin-example",level:3},{value:"Examples",id:"examples",level:2}],m={toc:l},g="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"non-evm-networks"},"Non-EVM networks"),(0,r.yg)("p",null,"You can manage users' non-EVM accounts and assets with their approval, using\n",(0,r.yg)("a",{parentName:"p",href:"/621-onkeyring/snaps/reference/snaps-api"},"Snaps API")," methods."),(0,r.yg)("admonition",{title:"important",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Managing users' keys comes with great responsibility: Misplaced or stolen\nprivate keys can lead to a complete loss of funds for users of your Snap.")),(0,r.yg)("h2",{id:"responsible-key-management"},"Responsible key management"),(0,r.yg)("p",null,"It's critical to practice responsible key management.\nThe general rule is: ",(0,r.yg)("strong",{parentName:"p"},"Don't create a situation where your users can lose assets.")),(0,r.yg)("admonition",{title:"examples of responsible key management:",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Deriving private keys and/or storing them in Snaps persistent storage, without ever moving them\nout of the ",(0,r.yg)("a",{parentName:"li",href:"/621-onkeyring/snaps/learn/about-snaps/execution-environment"},"Snaps execution environment"),"."),(0,r.yg)("li",{parentName:"ul"},"Ensuring arbitrary code execution can't access irreversible operations or private keys."),(0,r.yg)("li",{parentName:"ul"},"Asking the user for consent and informing them of what's going to happen before performing\nirreversible operations."))),(0,r.yg)("admonition",{title:"examples of irresponsible key management:",type:"danger"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Allowing extraction of private keys outside the Snap in any way, especially through RPC or\nnetwork connections."),(0,r.yg)("li",{parentName:"ul"},"Executing arbitrary or untrusted code with access to private keys."),(0,r.yg)("li",{parentName:"ul"},"Not getting properly informed consent before performing irreversible operations."),(0,r.yg)("li",{parentName:"ul"},"Asking for consent but ignoring the decision."),(0,r.yg)("li",{parentName:"ul"},"Exposing key material in clear-text."),(0,r.yg)("li",{parentName:"ul"},"Producing a bug that leads to any of the above."))),(0,r.yg)("h2",{id:"derive-keys"},"Derive keys"),(0,r.yg)("p",null,"To derive a user's private keys:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Choose between the BIP-32 or BIP-44 specifications to derive the user's private keys.\nIf the keys you want to derive conform to the\n",(0,r.yg)("a",{parentName:"li",href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki"},"BIP-44")," structure, use\n",(0,r.yg)("a",{parentName:"li",href:"/621-onkeyring/snaps/reference/snaps-api#snap_getbip44entropy"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_getBip44Entropy"))," to derive them.\nOtherwise, use ",(0,r.yg)("a",{parentName:"li",href:"/621-onkeyring/snaps/reference/snaps-api#snap_getbip32entropy"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_getBip32Entropy")),"."),(0,r.yg)("li",{parentName:"ol"},"Add the required permission to your manifest file."),(0,r.yg)("li",{parentName:"ol"},"Find out the derivation path to use.\nThis is dependent on the application you're building."),(0,r.yg)("li",{parentName:"ol"},"Use the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/key-tree"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/key-tree"))," module to derive the keys.\nAny additional code, for example, to derive addresses from keys, is application-specific.")),(0,r.yg)("h3",{id:"dogecoin-example"},"Dogecoin example"),(0,r.yg)("p",null,"For example, to derive Dogecoin keys:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Dogecoin uses the BIP-44 scheme, so you'll use\n",(0,r.yg)("a",{parentName:"p",href:"/621-onkeyring/snaps/reference/snaps-api#snap_getbip44entropy"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_getBip44Entropy")),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Dogecoin has coin type ",(0,r.yg)("inlineCode",{parentName:"p"},"3"),", so add the following to the manifest file:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "snap_getBip44Entropy": [\n    {\n      "coinType": 3\n    }\n  ]\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Dogecoin uses the following derivation path:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"m/44'/3'/0'/0/{address_index}\n")),(0,r.yg)("p",{parentName:"li"},"To get the second Dogecoin account, add the following code to your Snap:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"import { getBIP44AddressKeyDeriver } from \"@metamask/key-tree\";\n\n// Get the Dogecoin node, corresponding to the path m/44'/3'.\nconst dogecoinNode = await snap.request({\n  method: \"snap_getBip44Entropy\",\n  params: {\n    coinType: 3,\n  },\n});\n\n/**\n * Create a function that takes an index and returns an extended private key for m/44'/3'/0'/0/address_index.\n * The second parameter to getBIP44AddressKeyDeriver isn't passed. This sets account and changes to 0.\n */\nconst deriveDogecoinAddress = await getBIP44AddressKeyDeriver(dogecoinNode);\n\n// Derive the second Dogecoin address, which has index 1.\nconst secondAccount = deriveDogecoinAddress(1);\n")))),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("p",null,"The following are examples of existing Snaps that manage accounts and keys:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/ziad-saab/dogecoin-snap"},"Dogecoin Snap tutorial")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/Consensys/starknet-snap"},"Consensys StarkNet Snap")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/snapdao/btcsnap"},"Account Labs Bitcoin Snap")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/bip32"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/bip32-example-snap"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/bip44"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/bip44-example-snap")))))}c.isMDXComponent=!0}}]);