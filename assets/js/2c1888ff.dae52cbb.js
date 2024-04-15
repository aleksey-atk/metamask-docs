"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5593],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>h});var t=a(96540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},u=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(a),d=o,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?t.createElement(h,r(r({ref:n},u),{},{components:a})):t.createElement(h,r({ref:n},u))}));function h(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:o,r[1]=p;for(var l=2;l<i;l++)r[l]=a[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},74079:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var t=a(58168),o=(a(96540),a(15680));const i={description:"Develop, test, and publish a Snap.",sidebar_position:7},r="Publish a Snap",p={unversionedId:"how-to/publish-a-snap",id:"how-to/publish-a-snap",title:"Publish a Snap",description:"Develop, test, and publish a Snap.",source:"@site/snaps/how-to/publish-a-snap.md",sourceDirName:"how-to",slug:"/how-to/publish-a-snap",permalink:"/snaps/how-to/publish-a-snap",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/publish-a-snap.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"Develop, test, and publish a Snap.",sidebar_position:7},sidebar:"snapsSidebar",previous:{title:"Troubleshoot common issues",permalink:"/snaps/how-to/debug-a-snap/common-issues"},next:{title:"Connect to a Snap",permalink:"/snaps/how-to/connect-to-a-snap"}},s={},l=[{value:"Distribute your Snap",id:"distribute-your-snap",level:2}],u={toc:l},c="wrapper";function m(e){let{components:n,...a}=e;return(0,o.yg)(c,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"publish-a-snap"},"Publish a Snap"),(0,o.yg)("p",null,"Snaps are npm packages, so publishing a Snap is as simple as publishing an npm package.\nRefer to the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/commands/npm-publish"},"npm CLI documentation")," for details\non publishing to the public registry.\nThe following details are specific to Snaps:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The version in ",(0,o.yg)("inlineCode",{parentName:"li"},"package.json")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match."),(0,o.yg)("li",{parentName:"ul"},"The ",(0,o.yg)("inlineCode",{parentName:"li"},"repository.url")," field in ",(0,o.yg)("inlineCode",{parentName:"li"},"package.json")," should match the correct repository for your Snap."),(0,o.yg)("li",{parentName:"ul"},"The ",(0,o.yg)("inlineCode",{parentName:"li"},"source.location.npm.packageName")," in ",(0,o.yg)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match the name in ",(0,o.yg)("inlineCode",{parentName:"li"},"package.json"),"."),(0,o.yg)("li",{parentName:"ul"},"The ",(0,o.yg)("inlineCode",{parentName:"li"},"proposedName")," in ",(0,o.yg)("inlineCode",{parentName:"li"},"snap.manifest.json"),' should be a human-readable name and should not include\nthe words "MetaMask" or "Snap." '),(0,o.yg)("li",{parentName:"ul"},"The image specified in ",(0,o.yg)("inlineCode",{parentName:"li"},"iconPath")," in the manifest file is used as the icon displayed when\ninstalling the Snap, in custom dialogs, and in the settings menu.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"This icon should be a valid SVG."),(0,o.yg)("li",{parentName:"ul"},"The icon will be cropped in a circle when displayed in MetaMask; you do not need to make the icon circular.")))),(0,o.yg)("p",null,"After publishing the Snap, any dapp can connect to the Snap by using the Snap ID ",(0,o.yg)("inlineCode",{parentName:"p"},"npm:[packageName]"),"."),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"If you are using the Snap monorepo project generated in the ",(0,o.yg)("a",{parentName:"p",href:"/snaps/get-started/quickstart"},"quickstart"),",\nmake sure to only publish the Snap package in ",(0,o.yg)("inlineCode",{parentName:"p"},"/packages/snap"),".\nYou can use the ",(0,o.yg)("a",{parentName:"p",href:"https://metamask.github.io/snaps/snaps-simulator/staging/#/manifest"},"Snaps Simulator")," to verify\nthat your Snap was published correctly ","\u2014"," just select ",(0,o.yg)("strong",{parentName:"p"},"localhost")," in the top right corner and change the\nSnap location to ",(0,o.yg)("strong",{parentName:"p"},"npm")," and the ID of your Snap. "),(0,o.yg)("p",{parentName:"admonition"},"Also, make sure to update the manifest file, icon file, and README to differentiate your Snap from the template.")),(0,o.yg)("h2",{id:"distribute-your-snap"},"Distribute your Snap"),(0,o.yg)("p",null,"You should deploy a companion dapp where users can learn about your Snap and install it, or\nintegrate with your existing dapp."),(0,o.yg)("p",null,"If your Snap is designed to communicate with dapps, you can encourage other dapp developers to\n",(0,o.yg)("a",{parentName:"p",href:"/snaps/how-to/connect-to-a-snap"},"connect to your Snap"),"."))}m.isMDXComponent=!0}}]);