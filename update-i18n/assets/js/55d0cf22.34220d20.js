"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2146],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>g});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function u(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),l=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(a),d=r,g=p["".concat(i,".").concat(d)]||p[d]||m[d]||s;return a?t.createElement(g,o(o({ref:n},c),{},{components:a})):t.createElement(g,o({ref:n},c))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[p]="string"==typeof e?e:r,o[1]=u;for(var l=2;l<s;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},29121:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>u,metadata:()=>l,toc:()=>p});var t=a(58168),r=(a(96540),a(15680)),s=a(4865),o=a(19365);const u={description:"Get started by creating an account management Snap.",sidebar_position:1,tags:["Keyring API"]},i="Create an account management Snap",l={unversionedId:"features/custom-evm-accounts/create-account-snap",id:"features/custom-evm-accounts/create-account-snap",title:"Create an account management Snap",description:"Get started by creating an account management Snap.",source:"@site/snaps/features/custom-evm-accounts/create-account-snap.md",sourceDirName:"features/custom-evm-accounts",slug:"/features/custom-evm-accounts/create-account-snap",permalink:"/update-i18n/snaps/features/custom-evm-accounts/create-account-snap",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-evm-accounts/create-account-snap.md",tags:[{label:"Keyring API",permalink:"/update-i18n/snaps/tags/keyring-api"}],version:"current",sidebarPosition:1,frontMatter:{description:"Get started by creating an account management Snap.",sidebar_position:1,tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Custom EVM accounts",permalink:"/update-i18n/snaps/features/custom-evm-accounts/"},next:{title:"Create a companion dapp",permalink:"/update-i18n/snaps/features/custom-evm-accounts/create-companion-dapp"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the Keyring API",id:"1-install-the-keyring-api",level:3},{value:"2. Add permissions",id:"2-add-permissions",level:3},{value:"3. Implement the Account Management API",id:"3-implement-the-account-management-api",level:3},{value:"4. Handle requests submitted by MetaMask",id:"4-handle-requests-submitted-by-metamask",level:3},{value:"5. Notify MetaMask about events",id:"5-notify-metamask-about-events",level:3},{value:"6. Expose the Account Management API",id:"6-expose-the-account-management-api",level:3},{value:"7. Create a companion dapp",id:"7-create-a-companion-dapp",level:3},{value:"Example",id:"example",level:2}],m={toc:p},d="wrapper";function g(e){let{components:n,...a}=e;return(0,r.yg)(d,(0,t.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"create-an-account-management-snap"},"Create an account management Snap"),(0,r.yg)("p",null,"Create an account management Snap to connect to custom EVM accounts."),(0,r.yg)("admonition",{title:"see also",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/update-i18n/snaps/features/custom-evm-accounts/"},"Custom EVM accounts")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/update-i18n/snaps/features/custom-evm-accounts/create-companion-dapp"},"Create an account management companion dapp")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/update-i18n/snaps/features/custom-evm-accounts/security"},"Account management Snap security guidelines")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/update-i18n/snaps/reference/keyring-api/"},"Keyring API reference")))),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Set up a Snap.\nSee the ",(0,r.yg)("a",{parentName:"li",href:"/update-i18n/snaps/get-started/quickstart"},"Snaps quickstart")," and ",(0,r.yg)("a",{parentName:"li",href:"/update-i18n/snaps/how-to/publish-a-snap"},"how to develop a Snap"),"."),(0,r.yg)("li",{parentName:"ul"},"Read the ",(0,r.yg)("a",{parentName:"li",href:"/update-i18n/snaps/features/custom-evm-accounts/security"},"account management Snap security guidelines"),".")),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("h3",{id:"1-install-the-keyring-api"},"1. Install the Keyring API"),(0,r.yg)("p",null,"Install the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/keyring-api"))," module in your\nproject directory using Yarn or npm:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/keyring-api\n")),(0,r.yg)("p",null,"or"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm install @metamask/keyring-api\n")),(0,r.yg)("h3",{id:"2-add-permissions"},"2. Add permissions"),(0,r.yg)("p",null,"Specify the following ",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/how-to/request-permissions"},"permissions")," in your Snap manifest file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:keyring": {\n    "allowedOrigins": [\n      "https://<dapp domain>"\n    ]\n  },\n  "endowment:rpc": {\n    "dapps": true\n  },\n  "snap_manageAccounts": {},\n  "snap_manageState": {}\n},\n')),(0,r.yg)("p",null,"Add a list of dapp URLs allowed to call Keyring API methods on your Snap using the\n",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/reference/permissions#endowmentkeyring"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:keyring"))," permission."),(0,r.yg)("h3",{id:"3-implement-the-account-management-api"},"3. Implement the Account Management API"),(0,r.yg)("p",null,"Implement the ",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/reference/keyring-api/account-management/"},"Account Management API")," in your Snap.\nMake sure to ",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/features/custom-evm-accounts/security#limit-the-methods-exposed-to-dapps"},"limit the methods exposed to dapps"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"class MySnapKeyring implements Keyring {\n  // Implement the required methods here.\n}\n")),(0,r.yg)("h3",{id:"4-handle-requests-submitted-by-metamask"},"4. Handle requests submitted by MetaMask"),(0,r.yg)("p",null,"MetaMask submits EVM requests from dapps using the\n",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/reference/keyring-api/account-management/#keyring_submitrequest"},(0,r.yg)("inlineCode",{parentName:"a"},"keyring_submitRequest")),"\nmethod of the Keyring API.\nSee the EVM methods for ",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/reference/keyring-api/chain-methods#eoa-methods"},"externally owned accounts"),"\nand ",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/reference/keyring-api/chain-methods#erc-4337-methods"},"ERC-4337 accounts"),"."),(0,r.yg)("p",null,"The following is an example of a ",(0,r.yg)("inlineCode",{parentName:"p"},"personal_sign")," request:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "d6e23af6-4bea-48dd-aeb0-7d3c30ea67f9",\n  "scope": "",\n  "account": "69438371-bef3-4957-9f91-c3f22c1d75f3",\n  "request": {\n    "method": "personal_sign",\n    "params": [\n      "0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765",\n      "0x5874174dcf1ab6F7Efd8496f4f09404CD1c5bA84"\n    ]\n  }\n}\n')),(0,r.yg)("p",null,"The request includes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"id")," - The unique identifier for the request."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"scope")," - The CAIP-2 chain ID of the selected chain.\nCurrently, this property is always an empty string.\nYour Snap should use the chain ID present in the request object instead."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"account")," - The ID of the account that should handle the request."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"request")," - The request object.")),(0,r.yg)("p",null,"Your Snap must respond with either a synchronous or asynchronous result:"),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(o.A,{value:"Synchronous",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"return { pending: false, result };\n"))),(0,r.yg)(o.A,{value:"Asynchronous",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"return { pending: true, redirect: { message, url } };\n")),(0,r.yg)("p",null,"The redirect message and URL are displayed to the user to help them continue the transaction flow."))),(0,r.yg)("h3",{id:"5-notify-metamask-about-events"},"5. Notify MetaMask about events"),(0,r.yg)("p",null,"Notify MetaMask when ",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/reference/keyring-api/account-management/events"},"Account Management API events"),"\ntake place, using the ",(0,r.yg)("inlineCode",{parentName:"p"},"emitSnapKeyringEvent()")," helper function."),(0,r.yg)("p",null,"For example, when an account is created:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.AccountCreated, { account });\n  // Update your Snap's state.\n} catch (error) {\n  // Handle the error.\n}\n")),(0,r.yg)("p",null,"MetaMask returns an error if the account already exists or the account object is invalid."),(0,r.yg)("h3",{id:"6-expose-the-account-management-api"},"6. Expose the Account Management API"),(0,r.yg)("p",null,"Create an ",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/reference/entry-points#onkeyringrequest"},(0,r.yg)("inlineCode",{parentName:"a"},"onKeyringRequest"))," entry point handler\nmethod to expose the Account Management API methods to MetaMask and your dapp:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"export const onKeyringRequest: OnKeyringRequestHandler = async ({\n  origin,\n  request,\n}) => {\n  // Add custom logic here.\n  return handleKeyringRequest(keyring, request);\n};\n")),(0,r.yg)("h3",{id:"7-create-a-companion-dapp"},"7. Create a companion dapp"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/features/custom-evm-accounts/create-companion-dapp"},"Create a companion dapp")," to provide a user interface for your account\nmanagement Snap, enabling them to create and interact with custom EVM accounts."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snap-simple-keyring/tree/main/packages/snap"},"example account management Snap source code"),"\nfor more information."))}g.isMDXComponent=!0},19365:(e,n,a)=>{a.d(n,{A:()=>o});var t=a(96540),r=a(20053);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:a,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:a},n)}},4865:(e,n,a)=>{a.d(n,{A:()=>d});var t=a(58168),r=a(96540),s=a(20053),o=a(23104),u=a(47751),i=a(92303);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:n,block:a,selectedValue:u,selectValue:i,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.a_)(),d=e=>{const n=e.currentTarget,a=p.indexOf(n),t=c[a].value;t!==u&&(m(n),i(t))},g=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;n=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;n=p[a]??p[p.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},n)},c.map((e=>{let{value:n,label:a,attributes:o}=e;return r.createElement("li",(0,t.A)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:e=>p.push(e),onKeyDown:g,onClick:d},o,{className:(0,s.A)("tabs__item",l.tabItem,o?.className,{"tabs__item--active":u===n})}),a??n)})))}function p(e){let{lazy:n,children:a,selectedValue:t}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function m(e){const n=(0,u.u)(e);return r.createElement("div",{className:(0,s.A)("tabs-container",l.tabList)},r.createElement(c,(0,t.A)({},e,n)),r.createElement(p,(0,t.A)({},e,n)))}function d(e){const n=(0,i.A)();return r.createElement(m,(0,t.A)({key:String(n)},e))}},47751:(e,n,a)=>{a.d(n,{u:()=>m});var t=a(96540),r=a(56347),s=a(57485),o=a(31682),u=a(89466);function i(e){return function(e){return t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}function l(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??i(a);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function c(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const o=(0,r.W6)(),u=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,s.aZ)(u),(0,t.useCallback)((e=>{if(!u)return;const n=new URLSearchParams(o.location.search);n.set(u,e),o.replace({...o.location,search:n.toString()})}),[u,o])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=l(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[m,d]=p({queryString:a,groupId:r}),[g,y]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),f=(()=>{const e=m??g;return c({value:e,tabValues:s})?e:null})();(0,t.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!c({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),y(e)}),[d,y,s]),tabValues:s}}}}]);