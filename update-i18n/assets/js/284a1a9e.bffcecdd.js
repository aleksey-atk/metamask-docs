"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3056],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return r?a.createElement(m,s(s({ref:t},l),{},{components:r})):a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},78337:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(58168),n=(r(96540),r(15680));const i={description:"About the Gas API.",sidebar_position:2},s="Gas API",o={unversionedId:"gas-api/index",id:"gas-api/index",title:"Gas API",description:"About the Gas API.",source:"@site/services/gas-api/index.md",sourceDirName:"gas-api",slug:"/gas-api/",permalink:"/update-i18n/services/gas-api/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/gas-api/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"About the Gas API.",sidebar_position:2},sidebar:"servicesSidebar",previous:{title:"Introduction",permalink:"/update-i18n/services/"},next:{title:"Quickstart",permalink:"/update-i18n/services/gas-api/quickstart"}},p={},c=[{value:"What is the Gas API?",id:"what-is-the-gas-api",level:2},{value:"Why use the Gas API?",id:"why-use-the-gas-api",level:2},{value:"Which networks are supported?",id:"which-networks-are-supported",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"gas-api"},"Gas API"),(0,n.yg)("h2",{id:"what-is-the-gas-api"},"What is the Gas API?"),(0,n.yg)("p",null,"The Gas API is a powerful tool designed to provide real-time gas prices for supported networks.\nIt serves as an oracle, offering up-to-date information on the computational costs associated with\nexecuting operations or transactions on Ethereum Virtual Machine (EVM) compatible chains."),(0,n.yg)("p",null,"The Gas API helps users determine the optimal time to execute a transaction based on current gas prices.\nThis is especially important after the implementation of ",(0,n.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1559"},"EIP-1559"),",\nwhich introduced more specific gas price parameters, making the calculation of transaction costs\nmore complex."),(0,n.yg)("h2",{id:"why-use-the-gas-api"},"Why use the Gas API?"),(0,n.yg)("p",null,"Use the Gas API to gain real-time insights into the gas market.\nThe API can help you make informed decisions about when to execute transactions and how much to pay\nfor transaction fees, optimizing your transactions for speed and cost-effectiveness.\nThe API allows you to access recommended gas prices based on your transaction's priority\nrequirements, ensuring that your transactions get included in a block."),(0,n.yg)("p",null,"Using insights from the Gas API can save you time and money while ensuring that your transactions\nare processed quickly and efficiently."),(0,n.yg)("p",null,"See the following tutorials to learn how to use the Gas API:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.infura.io/blog/post/mastering-the-gas-api-a-guide-for-developers"},"Mastering the Gas API: A Guide for\nDevelopers")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://metamask.io/news/developers/how-to-build-a-simple-gas-tracker-app-with-gas-api-and-nextjs/"},"How to Build a Simple Gas Tracker App with Gas API and\nNext.js"))),(0,n.yg)("h2",{id:"which-networks-are-supported"},"Which networks are supported?"),(0,n.yg)("p",null,"Refer to the ",(0,n.yg)("a",{parentName:"p",href:"/update-i18n/services/gas-api/supported-networks"},"supported networks")," section for an up-to-date list of supported\nnetworks and chain IDs."))}d.isMDXComponent=!0}}]);