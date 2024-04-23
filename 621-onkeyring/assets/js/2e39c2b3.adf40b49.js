"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4698],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>y});var a=t(96540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(t),u=s,y=c["".concat(i,".").concat(u)]||c[u]||g[u]||r;return t?a.createElement(y,o(o({ref:n},m),{},{components:t})):a.createElement(y,o({ref:n},m))}));function y(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[c]="string"==typeof e?e:s,o[1]=p;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=t(58168),s=(t(96540),t(15680));const r={description:"Use Jest for end-to-end Snap testing.",sidebar_position:5},o="Test a Snap",p={unversionedId:"how-to/test-a-snap",id:"how-to/test-a-snap",title:"Test a Snap",description:"Use Jest for end-to-end Snap testing.",source:"@site/snaps/how-to/test-a-snap.md",sourceDirName:"how-to",slug:"/how-to/test-a-snap",permalink:"/621-onkeyring/snaps/how-to/test-a-snap",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/test-a-snap.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Use Jest for end-to-end Snap testing.",sidebar_position:5},sidebar:"snapsSidebar",previous:{title:"Restrict RPC API methods",permalink:"/621-onkeyring/snaps/how-to/restrict-rpc-api"},next:{title:"Debug a Snap",permalink:"/621-onkeyring/snaps/how-to/debug-a-snap/"}},i={},l=[{value:"Steps",id:"steps",level:2},{value:"1. Install @metamask/snaps-jest",id:"1-install-metamasksnaps-jest",level:3},{value:"2. Configure @metamask/snaps-jest",id:"2-configure-metamasksnaps-jest",level:3},{value:"3. Use @metamask/snaps-jest",id:"3-use-metamasksnaps-jest",level:3}],m={toc:l},c="wrapper";function g(e){let{components:n,...t}=e;return(0,s.yg)(c,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"test-a-snap"},"Test a Snap"),(0,s.yg)("p",null,"You can test your Snap by hosting it locally using ",(0,s.yg)("inlineCode",{parentName:"p"},"yarn start"),", installing it in Flask, and calling\nits API methods from a dapp."),(0,s.yg)("p",null,"For end-to-end Snap testing in a Jest environment, use the\n",(0,s.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/snaps-jest"},(0,s.yg)("inlineCode",{parentName:"a"},"@metamask/snaps-jest"))," package\nas follows."),(0,s.yg)("h2",{id:"steps"},"Steps"),(0,s.yg)("h3",{id:"1-install-metamasksnaps-jest"},"1. Install @metamask/snaps-jest"),(0,s.yg)("p",null,"Install the ",(0,s.yg)("inlineCode",{parentName:"p"},"@metamask/snaps-jest")," package into your Snap project using ",(0,s.yg)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn"),"\nor ",(0,s.yg)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),":"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add -D @metamask/snaps-jest\n")),(0,s.yg)("p",null,"or"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/snaps-jest\n")),(0,s.yg)("h3",{id:"2-configure-metamasksnaps-jest"},"2. Configure @metamask/snaps-jest"),(0,s.yg)("p",null,"The easiest way to configure this package is to add it to your Jest configuration as a preset.\nIn the ",(0,s.yg)("inlineCode",{parentName:"p"},"jest.config.js")," file, add the following:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="jest.config.js"',title:'"jest.config.js"'},'module.exports = {\n  preset: "@metamask/snaps-jest",\n};\n')),(0,s.yg)("p",null,"This automatically configures Jest to use the ",(0,s.yg)("inlineCode",{parentName:"p"},"@metamask/snaps-jest")," environment, and to use the\n",(0,s.yg)("inlineCode",{parentName:"p"},"@metamask/snaps-jest")," matchers.\nYou can then run the ",(0,s.yg)("inlineCode",{parentName:"p"},"jest")," command as usual."),(0,s.yg)("admonition",{type:"note"},(0,s.yg)("p",{parentName:"admonition"},(0,s.yg)("inlineCode",{parentName:"p"},"@metamask/snaps-jest")," assumes the Snap is built in the directory you run Jest from.\nIf you use a different directory, you can specify the path using the\n",(0,s.yg)("a",{parentName:"p",href:"/621-onkeyring/snaps/reference/cli/options#r-root"},(0,s.yg)("inlineCode",{parentName:"a"},"root"))," option, or by running your own HTTP server.\nIt's currently not possible to use ",(0,s.yg)("inlineCode",{parentName:"p"},"@metamask/snaps-jest")," with a Snap that is not built.")),(0,s.yg)("p",null,"If you don't use the package as a preset, you can alternatively add the ",(0,s.yg)("inlineCode",{parentName:"p"},"@metamask/snaps-jest"),"\nenvironment and matchers to your Jest configuration manually:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="jest.config.js"',title:'"jest.config.js"'},'module.exports = {\n  testEnvironment: "@metamask/snaps-jest",\n  setupFilesAfterEnv: ["@metamask/snaps-jest/dist/cjs/setup.js"],\n};\n')),(0,s.yg)("p",null,"You can pass any ",(0,s.yg)("a",{parentName:"p",href:"/621-onkeyring/snaps/reference/jest#options"},"Jest options")," to the test environment by adding a\n",(0,s.yg)("inlineCode",{parentName:"p"},"testEnvironmentOptions")," property to your Jest configuration.\nFor example:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="jest.config.js"',title:'"jest.config.js"'},'module.exports = {\n  preset: "@metamask/snaps-jest",\n  testEnvironmentOptions: {\n    // Options go here.\n  },\n};\n')),(0,s.yg)("p",null,"All options are optional."),(0,s.yg)("h3",{id:"3-use-metamasksnaps-jest"},"3. Use @metamask/snaps-jest"),(0,s.yg)("p",null,"Use the package by calling any of the ",(0,s.yg)("a",{parentName:"p",href:"/621-onkeyring/snaps/reference/jest#api-methods"},"API methods"),".\nYou can:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/621-onkeyring/snaps/reference/jest#installsnap"},"Install a Snap.")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/621-onkeyring/snaps/reference/jest#sendtransaction"},"Send a transaction to the Snap.")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/621-onkeyring/snaps/reference/jest#runcronjob"},"Run a cronjob in the Snap.")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/621-onkeyring/snaps/reference/jest#getinterface"},"Interact with user interfaces.")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/621-onkeyring/snaps/reference/jest#mock"},"Mock the response of a network request.")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/621-onkeyring/snaps/reference/jest#close"},"Close the testing page."))),(0,s.yg)("p",null,"You can also use ",(0,s.yg)("a",{parentName:"p",href:"/621-onkeyring/snaps/reference/jest#jest-matchers"},"Jest matchers")," to assert that a response from\na Snap matches an expected value."))}g.isMDXComponent=!0}}]);