"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5484],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(t),g=r,m=c["".concat(p,".").concat(g)]||c[g]||u[g]||s;return t?n.createElement(m,o(o({ref:a},d),{},{components:t})):n.createElement(m,o({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=g;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},80530:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=t(58168),r=(t(96540),t(15680));const s={description:"Store encrypted and unencrypted data within a Snap.",sidebar_position:5},o="Data storage",i={unversionedId:"features/data-storage",id:"features/data-storage",title:"Data storage",description:"Store encrypted and unencrypted data within a Snap.",source:"@site/snaps/features/data-storage.md",sourceDirName:"features",slug:"/features/data-storage",permalink:"/update-i18n/snaps/features/data-storage",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/data-storage.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Store encrypted and unencrypted data within a Snap.",sidebar_position:5},sidebar:"snapsSidebar",previous:{title:"Interactive UI",permalink:"/update-i18n/snaps/features/custom-ui/interactive-ui"},next:{title:"Lifecycle hooks",permalink:"/update-i18n/snaps/features/lifecycle-hooks"}},p={},l=[{value:"Steps",id:"steps",level:2},{value:"1. Get permission to store data",id:"1-get-permission-to-store-data",level:3},{value:"2. Use encrypted storage",id:"2-use-encrypted-storage",level:3},{value:"3. Use unencrypted storage",id:"3-use-unencrypted-storage",level:3},{value:"Example",id:"example",level:2}],d={toc:l},c="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(c,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"data-storage"},"Data storage"),(0,r.yg)("p",null,"You can store and manage sensitive information within a Snap using encrypted storage, or\nnon-sensitive information using unencrypted storage.\nUse the ",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/reference/snaps-api#snap_managestate"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_manageState"))," API method to persist up to\n100 MB of data to the user's disk and retrieve it at will.\nWe recommend using this method for storing data in a Snap long term."),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("h3",{id:"1-get-permission-to-store-data"},"1. Get permission to store data"),(0,r.yg)("p",null,"Request the ",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/reference/snaps-api#snap_managestate"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_manageState"))," permission.\nAdd the following to your Snap's manifest file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "snap_manageState": {}\n}\n')),(0,r.yg)("h3",{id:"2-use-encrypted-storage"},"2. Use encrypted storage"),(0,r.yg)("p",null,"By default, ",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/reference/snaps-api#snap_managestate"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_manageState"))," automatically encrypts\ndata using a Snap-specific key before storing it on the user's disk, and automatically decrypts it\nwhen retrieved.\nThis is useful to store sensitive information, such as passwords."),(0,r.yg)("p",null,"The following example uses ",(0,r.yg)("inlineCode",{parentName:"p"},"snap_manageState")," to store some data using the ",(0,r.yg)("inlineCode",{parentName:"p"},"update")," operation, and\nretrieves the data at a later time using the ",(0,r.yg)("inlineCode",{parentName:"p"},"get")," operation.\nWhen the data is no longer required, the Snap's state is cleared using the ",(0,r.yg)("inlineCode",{parentName:"p"},"clear")," operation."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'// Persist some data.\nawait snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "update",\n    newState: { hello: "world" },\n  },\n});\n\n// At a later time, get the stored data.\nconst persistedData = await snap.request({\n  method: "snap_manageState",\n  params: { operation: "get" },\n});\n\nconsole.log(persistedData);\n// { hello: "world" }\n\n// If data storage is no longer necessary, clear it.\nawait snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "clear",\n  },\n});\n')),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Accessing encrypted state requires MetaMask to be unlocked.\nIf you need to access encrypted state in a background task such as a ",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/features/cron-jobs"},"cron job"),", use\n",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/reference/snaps-api#snap_getclientstatus"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_getClientStatus"))," to ensure that MetaMask is\nunlocked before accessing state, preventing an unexpected password request.")),(0,r.yg)("h3",{id:"3-use-unencrypted-storage"},"3. Use unencrypted storage"),(0,r.yg)("p",null,"To use unencrypted storage, set ",(0,r.yg)("inlineCode",{parentName:"p"},"encrypted")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"false")," when storing, retrieving, or clearing data\nusing ",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/reference/snaps-api#snap_managestate"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_manageState")),".\nThe Snap will use a storage section separate from the encrypted storage, and will not encrypt the data.\nThis is useful to access non-sensitive data from background operations such as\n",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/features/cron-jobs"},"cron jobs"),", without requiring the user to enter their password in the case that\nMetaMask is locked."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'// Persist some data.\nawait snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "update",\n    newState: { hello: "world" },\n    encrypted: false,\n  },\n});\n\n// At a later time, get the stored data.\nconst persistedData = await snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "get",\n    encrypted: false,\n  },\n});\n\nconsole.log(persistedData);\n// { hello: "world" }\n\n// If data storage is no longer necessary, clear it.\nawait snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "clear",\n    encrypted: false,\n  },\n});\n')),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/manage-state"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/manage-state-example-snap")),"\npackage for a full example of storing data using ",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/reference/snaps-api#snap_managestate"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_manageState")),".\nThis example exposes a ",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/learn/about-snaps/apis#custom-json-rpc-apis"},"custom JSON-RPC API")," for\ndapps to store, retrieve, and clear data."))}u.isMDXComponent=!0}}]);