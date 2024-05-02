"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2445],{15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||c;return t?a.createElement(y,o(o({ref:n},l),{},{components:t})):a.createElement(y,o({ref:n},l))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},49896:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const c={sidebar_position:2,sidebar_label:"Events",tags:["Keyring API"]},o="Account Management API events",i={unversionedId:"reference/keyring-api/account-management/events",id:"reference/keyring-api/account-management/events",title:"Account Management API events",description:"Account management Snaps can notify MetaMask of the",source:"@site/snaps/reference/keyring-api/account-management/events.md",sourceDirName:"reference/keyring-api/account-management",slug:"/reference/keyring-api/account-management/events",permalink:"/update-i18n/snaps/reference/keyring-api/account-management/events",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/account-management/events.md",tags:[{label:"Keyring API",permalink:"/update-i18n/snaps/tags/keyring-api"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Events",tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Objects",permalink:"/update-i18n/snaps/reference/keyring-api/account-management/objects"},next:{title:"Chain Methods API",permalink:"/update-i18n/snaps/reference/keyring-api/chain-methods"}},s={},p=[{value:"<code>AccountCreated</code>",id:"accountcreated",level:3},{value:"Example",id:"example",level:4},{value:"<code>AccountUpdated</code>",id:"accountupdated",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>AccountDeleted</code>",id:"accountdeleted",level:3},{value:"Example",id:"example-2",level:4},{value:"<code>RequestApproved</code>",id:"requestapproved",level:3},{value:"Example",id:"example-3",level:4},{value:"<code>RequestRejected</code>",id:"requestrejected",level:3},{value:"Example",id:"example-4",level:4}],l={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"account-management-api-events"},"Account Management API events"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/features/custom-evm-accounts/"},"Account management Snaps")," can notify MetaMask of the\nfollowing ",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/reference/keyring-api/account-management/"},"Account Management API")," events."),(0,r.yg)("h3",{id:"accountcreated"},(0,r.yg)("inlineCode",{parentName:"h3"},"AccountCreated")),(0,r.yg)("p",null,"An account is created.\nMetaMask returns an error if the account already exists or the account object is invalid."),(0,r.yg)("h4",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.AccountCreated, { account });\n  // Update your Snap's state.\n} catch (error) {\n  // Handle the error.\n}\n")),(0,r.yg)("h3",{id:"accountupdated"},(0,r.yg)("inlineCode",{parentName:"h3"},"AccountUpdated")),(0,r.yg)("p",null,"An account is updated.\nMetaMask returns an error if one of the following is true:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The account does not exist."),(0,r.yg)("li",{parentName:"ul"},"The account object is invalid."),(0,r.yg)("li",{parentName:"ul"},"The account address is updated.")),(0,r.yg)("h4",{id:"example-1"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.AccountUpdated, { account });\n  // Update your Snap's state.\n} catch (error) {\n  // Handle the error.\n}\n")),(0,r.yg)("h3",{id:"accountdeleted"},(0,r.yg)("inlineCode",{parentName:"h3"},"AccountDeleted")),(0,r.yg)("p",null,"An account is deleted.\nThe delete event is idempotent, so it is safe to emit even if the account does not exist."),(0,r.yg)("h4",{id:"example-2"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.AccountDeleted, {\n    id: account.id,\n  });\n  // Update your Snap's state.\n} catch (error) {\n  // Handle the error.\n}\n")),(0,r.yg)("h3",{id:"requestapproved"},(0,r.yg)("inlineCode",{parentName:"h3"},"RequestApproved")),(0,r.yg)("p",null,"A request is approved.\nMetaMask returns an error if the request does not exist.\nThis event only applies to Snaps that\n",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/features/custom-evm-accounts/#asynchronous-transaction-flow"},"handle requests asynchronously"),"."),(0,r.yg)("h4",{id:"example-3"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.RequestApproved, {\n    id: request.id,\n    result,\n  });\n  // Update your Snap's state.\n} catch (error) {\n  // Handle the error.\n}\n")),(0,r.yg)("h3",{id:"requestrejected"},(0,r.yg)("inlineCode",{parentName:"h3"},"RequestRejected")),(0,r.yg)("p",null,"A request is rejected.\nMetaMask returns an error if the request does not exist.\nThis event only applies to Snaps that\n",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/snaps/features/custom-evm-accounts/#asynchronous-transaction-flow"},"handle requests asynchronously"),"."),(0,r.yg)("h4",{id:"example-4"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.RequestRejected, {\n    id: request.id,\n  });\n  // Update your Snap's state.\n} catch (error) {\n  // Handle the error.\n}\n")))}d.isMDXComponent=!0}}]);