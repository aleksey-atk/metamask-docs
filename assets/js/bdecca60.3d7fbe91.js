"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3623],{15680:(t,e,n)=>{n.d(e,{xA:()=>p,yg:()=>d});var r=n(96540);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),l=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(i.Provider,{value:e},t.children)},u="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||y[m]||o;return n?r.createElement(d,s(s({ref:e},p),{},{components:n})):r.createElement(d,s({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c[u]="string"==typeof t?t:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59698:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const o={sidebar_position:3,description:"Learn about the contract proxy class in Unity.",tags:["Unity SDK"]},s="Contract proxy class",c={unversionedId:"how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class",id:"how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class",title:"Contract proxy class",description:"Learn about the contract proxy class in Unity.",source:"@site/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class.md",sourceDirName:"how-to/use-sdk/gaming/unity/smart-contracts",slug:"/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class",permalink:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class.md",tags:[{label:"Unity SDK",permalink:"/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Learn about the contract proxy class in Unity.",tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Contract factory",permalink:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-factory"},next:{title:"Contract provider",permalink:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider"}},i={},l=[],p={toc:l},u="wrapper";function y(t){let{components:e,...n}=t;return(0,a.yg)(u,(0,r.A)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"contract-proxy-class"},"Contract proxy class"),(0,a.yg)("p",null,"When ",(0,a.yg)("a",{parentName:"p",href:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/"},"interacting with smart contracts in Unity"),", the contract proxy class is responsible\nfor performing:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Transaction serialization"),(0,a.yg)("li",{parentName:"ul"},"Transaction execution"),(0,a.yg)("li",{parentName:"ul"},"Transaction result deserialization")),(0,a.yg)("p",null,"The contract proxy class is also responsible for invoking the ",(0,a.yg)("a",{parentName:"p",href:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider"},"provider")," and attempts\nto support both asynchronous and synchronous provider objects."),(0,a.yg)("p",null,"Since the proxy class is responsible for a lot, some parts of the class may be decoupled into their\nown components.\nFor example, transaction serialization and deserialization is not very customizable and will likely\nbe moved into its own component to allow more extendability."),(0,a.yg)("admonition",{title:"important",type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"The contract proxy class should be considered an internal and unstable API.\nYou should never need to inherit the ",(0,a.yg)("inlineCode",{parentName:"p"},"Contract")," class, unless you're using the\n",(0,a.yg)("a",{parentName:"p",href:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-factory#backed-type-contract-factory"},"backed type contract factory"),".\nHowever, the ",(0,a.yg)("a",{parentName:"p",href:"/wallet/how-to/use-sdk/gaming/unity/smart-contracts/#generate-contract-code"},"contract code generator")," already generates these\nclasses for you."),(0,a.yg)("p",{parentName:"admonition"},"You only  need to use ",(0,a.yg)("inlineCode",{parentName:"p"},"Contract.Attach<T>(string address, IProvider provider)"),".")))}y.isMDXComponent=!0}}]);