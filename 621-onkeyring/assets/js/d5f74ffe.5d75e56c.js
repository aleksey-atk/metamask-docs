"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3794],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>v});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,v=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return t?a.createElement(v,i(i({ref:n},c),{},{components:t})):a.createElement(v,i({ref:n},c))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98400:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=t(58168),r=(t(96540),t(15680)),o=t(4865),i=t(19365);const l={sidebar_position:3},s="Use environment variables",u={unversionedId:"how-to/use-environment-variables",id:"how-to/use-environment-variables",title:"Use environment variables",description:"You can use environment variables to compile your Snap.",source:"@site/snaps/how-to/use-environment-variables.md",sourceDirName:"how-to",slug:"/how-to/use-environment-variables",permalink:"/621-onkeyring/snaps/how-to/use-environment-variables",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/use-environment-variables.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"snapsSidebar",previous:{title:"Communicate errors",permalink:"/621-onkeyring/snaps/how-to/communicate-errors"},next:{title:"Restrict RPC API methods",permalink:"/621-onkeyring/snaps/how-to/restrict-rpc-api"}},c={},p=[{value:"Use environment variables on the command line",id:"use-environment-variables-on-the-command-line",level:2},{value:"Use environment variables in a <code>.env</code> file",id:"use-environment-variables-in-a-env-file",level:2}],m={toc:p},d="wrapper";function v(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"use-environment-variables"},"Use environment variables"),(0,r.yg)("p",null,"You can use environment variables to compile your Snap.\nThis is useful if you want to use different variables for testing your Snap locally and publishing\nyour Snap.\nYou can use environment variables ",(0,r.yg)("a",{parentName:"p",href:"#use-environment-variables-on-the-command-line"},"on the command line"),"\nor ",(0,r.yg)("a",{parentName:"p",href:"#use-environment-variables-in-a-env-file"},"in a ",(0,r.yg)("inlineCode",{parentName:"a"},".env")," file"),"."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"In addition to the environment variables you set, the following environment variables are set by the\nSnaps CLI:"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'NODE_ENV="production"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"NODE_DEBUG=false")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"DEBUG=false")))),(0,r.yg)("h2",{id:"use-environment-variables-on-the-command-line"},"Use environment variables on the command line"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Specify environment variables on the command line.\nFor example:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"PUBLIC_KEY=abc123 SNAP_ENV=dev\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Build your Snap using the ",(0,r.yg)("a",{parentName:"p",href:"/621-onkeyring/snaps/reference/cli/subcommands"},"Snaps CLI"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"yarn mm-snap build\n")))),(0,r.yg)("h2",{id:"use-environment-variables-in-a-env-file"},"Use environment variables in a ",(0,r.yg)("inlineCode",{parentName:"h2"},".env")," file"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Specify environment variables in a ",(0,r.yg)("inlineCode",{parentName:"p"},".env")," file.\nFor example:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text",metastring:'title=".env"',title:'".env"'},"PUBLIC_KEY=abc123\nSNAP_ENV=dev\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Specify the environment variables in your Snap's\n",(0,r.yg)("a",{parentName:"p",href:"/621-onkeyring/snaps/learn/about-snaps/files#configuration-file"},"configuration file")," using the ",(0,r.yg)("inlineCode",{parentName:"p"},"environment")," option.\nFor example:"),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"JavaScript",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="snap.config.js"',title:'"snap.config.js"'},'require("dotenv").config();\n\nmodule.exports = {\n  environment: {\n    SNAP_ENV: process.env.SNAP_ENV,\n    PUBLIC_KEY: process.env.PUBLIC_KEY,\n  },\n  // Other options.\n};\n'))),(0,r.yg)(i.A,{value:"TypeScript",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="snap.config.ts"',title:'"snap.config.ts"'},'import type { SnapConfig } from "@metamask/snaps-cli";\nimport * as dotenv from "dotenv";\ndotenv.config();\n\nconst config: SnapConfig = {\n  environment: {\n    SNAP_ENV: process.env.SNAP_ENV,\n    PUBLIC_KEY: process.env.PUBLIC_KEY,\n  },\n  // Other options.\n};\n\nexport default config;\n'))))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"You can also use environment variables directly in your Snap.\nFor example:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import { panel, text, heading } from "@metamask/snaps-sdk";\n\nawait snap.request({\n  method: "snap_dialog",\n  params: {\n    type: "alert",\n    content: panel([\n      heading("This custom alert is just for display purposes."),\n      text(`SNAP_ENV is ${process.env.SNAP_ENV}, PUBLIC_KEY is ${process.env.PUBLIC_KEY}`),\n    ]),\n  },\n});\n')))))}v.isMDXComponent=!0},19365:(e,n,t)=>{t.d(n,{A:()=>i});var a=t(96540),r=t(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:t},n)}},4865:(e,n,t)=>{t.d(n,{A:()=>d});var a=t(58168),r=t(96540),o=t(20053),i=t(23104),l=t(47751),s=t(92303);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=p.indexOf(n),a=c[t].value;a!==l&&(m(n),s(a))},v=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>p.push(e),onKeyDown:v,onClick:d},i,{className:(0,o.A)("tabs__item",u.tabItem,i?.className,{"tabs__item--active":l===n})}),t??n)})))}function p(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function m(e){const n=(0,l.u)(e);return r.createElement("div",{className:(0,o.A)("tabs-container",u.tabList)},r.createElement(c,(0,a.A)({},e,n)),r.createElement(p,(0,a.A)({},e,n)))}function d(e){const n=(0,s.A)();return r.createElement(m,(0,a.A)({key:String(n)},e))}},47751:(e,n,t)=>{t.d(n,{u:()=>m});var a=t(96540),r=t(56347),o=t(57485),i=t(31682),l=t(89466);function s(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??s(t);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function c(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=u(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[m,d]=p({queryString:t,groupId:r}),[v,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,l.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),y=(()=>{const e=m??v;return c({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,o]),tabValues:o}}}}]);