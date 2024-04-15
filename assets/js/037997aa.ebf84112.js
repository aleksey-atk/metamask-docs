"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8638],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>y});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=t.createContext({}),l=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},g=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=l(a),c=i,y=m["".concat(p,".").concat(c)]||m[c]||d[c]||s;return a?t.createElement(y,r(r({ref:n},g),{},{components:a})):t.createElement(y,r({ref:n},g))}));function y(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var l=2;l<s;l++)r[l]=a[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},56172:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=a(58168),i=(a(96540),a(15680));const s={description:"Create a Snap that estimates gas fees.",sidebar_position:1},r="Create a Snap to estimate gas fees",o={unversionedId:"learn/tutorials/gas-estimation",id:"learn/tutorials/gas-estimation",title:"Create a Snap to estimate gas fees",description:"Create a Snap that estimates gas fees.",source:"@site/snaps/learn/tutorials/gas-estimation.md",sourceDirName:"learn/tutorials",slug:"/learn/tutorials/gas-estimation",permalink:"/snaps/learn/tutorials/gas-estimation",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/tutorials/gas-estimation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Create a Snap that estimates gas fees.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Tutorials",permalink:"/snaps/learn/tutorials"},next:{title:"Create a Snap to calculate gas fee percentages",permalink:"/snaps/learn/tutorials/transaction-insights"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Set up the project",id:"1-set-up-the-project",level:3},{value:"2. Add a custom icon",id:"2-add-a-custom-icon",level:3},{value:"3. Enable network access",id:"3-enable-network-access",level:3},{value:"4. Fetch gas fee estimates",id:"4-fetch-gas-fee-estimates",level:3},{value:"5. Build and test the Snap",id:"5-build-and-test-the-snap",level:3},{value:"6. Next steps",id:"6-next-steps",level:3}],g={toc:l},m="wrapper";function d(e){let{components:n,...s}=e;return(0,i.yg)(m,(0,t.A)({},g,s,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"create-a-snap-to-estimate-gas-fees"},"Create a Snap to estimate gas fees"),(0,i.yg)("p",null,"This tutorial walks you through creating a Snap that estimates gas fees.\nThe Snap uses the ",(0,i.yg)("inlineCode",{parentName:"p"},"fetch")," API to request information from the internet, and displays custom\ninformation in an alert dialog."),(0,i.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/snaps/get-started/install-flask"},"MetaMask Flask installed")),(0,i.yg)("li",{parentName:"ul"},"A text editor (for example, ",(0,i.yg)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VS Code"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Node")," version 20.11 or later"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn"))),(0,i.yg)("h2",{id:"steps"},"Steps"),(0,i.yg)("h3",{id:"1-set-up-the-project"},"1. Set up the project"),(0,i.yg)("p",null,"Create a new Snap project using the\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap"},(0,i.yg)("inlineCode",{parentName:"a"},"@metamask/create-snap")),"\nstarter kit by running:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"yarn create @metamask/snap gas-estimation-snap\n")),(0,i.yg)("p",null,"or"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"npx @metamask/create-snap gas-estimation-snap\n")),(0,i.yg)("p",null,"or"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"npm create @metamask/snap gas-estimation-snap\n")),(0,i.yg)("p",null,"Next, ",(0,i.yg)("inlineCode",{parentName:"p"},"cd")," into the ",(0,i.yg)("inlineCode",{parentName:"p"},"gas-estimation-snap")," project directory and run:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"yarn install\n")),(0,i.yg)("p",null,"This initializes your development environment with the required dependencies.\nYou may get a warning similar to the following: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'@lavamoat/allow-scripts has detected dependencies without configuration. explicit configuration required.\nrun "allow-scripts auto" to automatically populate the configuration.\n')),(0,i.yg)("p",null,"You can resolve this error by running the following command: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"yarn run allow-scripts auto\n")),(0,i.yg)("h3",{id:"2-add-a-custom-icon"},"2. Add a custom icon"),(0,i.yg)("p",null,"Your Snap must display an icon in MetaMask.\nTo add a Snap image, create a new folder ",(0,i.yg)("inlineCode",{parentName:"p"},"images")," in the Snap package ",(0,i.yg)("inlineCode",{parentName:"p"},"packages/snap/"),": "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir packages/snap/images\n")),(0,i.yg)("p",null,"Download\n",(0,i.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Montoya/gas-fee-snap/main/packages/snap/images/gas.svg"},"this ",(0,i.yg)("inlineCode",{parentName:"a"},"gas.svg")," icon file"),"\ninto the ",(0,i.yg)("inlineCode",{parentName:"p"},"\xecmages")," folder you just created.",(0,i.yg)("br",{parentName:"p"}),"\n",'This is a free icon, "Gas" by Mello from\n',(0,i.yg)("a",{parentName:"p",href:"https://thenounproject.com/browse/icons/term/gas/"},"Noun Project"),"."),(0,i.yg)("p",null,"Your file structure should look like this: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-text"},"gas-estimation-snap/\n\u251c\u2500 packages/\n\u2502  \u251c\u2500 site/\n|  |  |- src/\n|  |  |  |- App.tsx\n|  |  \u251c\u2500 package.json\n|  |  |- ...(react app content)\n|  |\n\u2502  \u251c\u2500 snap/\n|  |  \u251c\u2500 images/\n|  |  |  |- gas.svg\n|  |  \u251c\u2500 src/\n|  |  |  |- index.test.ts\n|  |  |  |- index.ts\n|  |  \u251c\u2500 snap.manifest.json\n|  |  \u251c\u2500 package.json\n|  |  |- ... (Snap content)\n\u251c\u2500 package.json\n\u251c\u2500 ... (other stuff)\n")),(0,i.yg)("p",null,"Open ",(0,i.yg)("inlineCode",{parentName:"p"},"packages/snap/snap.manifest.json")," in a text editor.\nThis file contains the main configuration details for your Snap.\nEdit the ",(0,i.yg)("inlineCode",{parentName:"p"},"npm")," object, within the ",(0,i.yg)("inlineCode",{parentName:"p"},"location")," object,\nand add ",(0,i.yg)("inlineCode",{parentName:"p"},"iconPath")," with the value ",(0,i.yg)("inlineCode",{parentName:"p"},'"images/gas.svg"')," to point to your new icon: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"location": {\n    "npm": {\n        "filePath": "dist/bundle.js",\n        "iconPath": "images/gas.svg",\n        "packageName": "snap",\n        "registry": "https://registry.npmjs.org/"\n    }\n}\n')),(0,i.yg)("p",null,"Open ",(0,i.yg)("inlineCode",{parentName:"p"},"packages/snap/package.json")," in a text editor.\nEdit the ",(0,i.yg)("inlineCode",{parentName:"p"},"files")," array and add the ",(0,i.yg)("inlineCode",{parentName:"p"},"images/")," folder: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"files": [\n    "dist/",\n    "images/",\n    "snap.manifest.json"\n],\n')),(0,i.yg)("h3",{id:"3-enable-network-access"},"3. Enable network access"),(0,i.yg)("p",null,"To enable your Snap to use the ",(0,i.yg)("inlineCode",{parentName:"p"},"fetch")," API, enable the\n",(0,i.yg)("a",{parentName:"p",href:"/snaps/reference/permissions#endowmentnetwork-access"},(0,i.yg)("inlineCode",{parentName:"a"},"endowment:network-access")),"\npermission by adding ",(0,i.yg)("inlineCode",{parentName:"p"},'"endowment:network-access": {}')," to the ",(0,i.yg)("inlineCode",{parentName:"p"},"initialPermissions")," object in ",(0,i.yg)("inlineCode",{parentName:"p"},"snap.manifest.json"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n    "snap_dialog": {},\n    "endowment:rpc": {\n        "dapps": true,\n        "snaps": false\n    }, \n    "endowment:network-access": {}\n},\n"manifestVersion": "0.1"\n')),(0,i.yg)("h3",{id:"4-fetch-gas-fee-estimates"},"4. Fetch gas fee estimates"),(0,i.yg)("p",null,"Open ",(0,i.yg)("inlineCode",{parentName:"p"},"/packages/snap/src/index.ts"),".\nThis is the main code file for your Snap.\nTo get a gas fee estimate, use the public API endpoint provided by\n",(0,i.yg)("a",{parentName:"p",href:"https://beaconcha.in/"},"Open Source Ethereum Explorer"),".\nAdd the following ",(0,i.yg)("inlineCode",{parentName:"p"},"getFees()")," function to the beginning of the ",(0,i.yg)("inlineCode",{parentName:"p"},"/packages/snap/src/index.ts")," file:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnRpcRequestHandler } from "@metamask/snaps-sdk";\nimport { panel, text } from "@metamask/snaps-sdk";\n\nasync function getFees() {\n    const response = await fetch("https://beaconcha.in/api/v1/execution/gasnow"); \n    return response.text();\n}\n')),(0,i.yg)("p",null,"Next, add the ",(0,i.yg)("inlineCode",{parentName:"p"},"copyable")," component to the second import of the file: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnRpcRequestHandler } from "@metamask/snaps-sdk";\nimport { panel, text, copyable } from "@metamask/snaps-sdk";\n')),(0,i.yg)("p",null,"Modify the Snap RPC message handler that displays the dialog.\nThis handler uses a switch statement to handle various request methods, but in this instance there is\nonly one method, ",(0,i.yg)("inlineCode",{parentName:"p"},"hello"),".\nFor the ",(0,i.yg)("inlineCode",{parentName:"p"},"hello")," method, the handler returns a call to MetaMask with the parameters to display a\ndialog, and passes some static strings."),(0,i.yg)("p",null,"Since ",(0,i.yg)("inlineCode",{parentName:"p"},"getFees()")," returns a promise, you must use ",(0,i.yg)("inlineCode",{parentName:"p"},"then()")," to resolve it in your ",(0,i.yg)("inlineCode",{parentName:"p"},"hello")," method.\nUpdate the ",(0,i.yg)("inlineCode",{parentName:"p"},"hello")," method with the following code:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'case "hello":\n    return getFees().then(fees => {\n        return snap.request({\n            method: \'snap_dialog\',\n            params: {\n                type: "alert",\n                content: panel([\n                    text(`Hello, **${origin}**!`),\n                    text("Current gas fee estimates:"),\n                    copyable(fees),\n                ]),\n            }\n        });\n    });\n')),(0,i.yg)("h3",{id:"5-build-and-test-the-snap"},"5. Build and test the Snap"),(0,i.yg)("p",null,"To build and test your Snap:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Open ",(0,i.yg)("inlineCode",{parentName:"p"},"package.json")," in the root directory of the project, and increment the ",(0,i.yg)("inlineCode",{parentName:"p"},'"version"')," (if the ",(0,i.yg)("inlineCode",{parentName:"p"},'"version"')," is\n",(0,i.yg)("inlineCode",{parentName:"p"},"0.1.0"),", increase it to ",(0,i.yg)("inlineCode",{parentName:"p"},"0.2.0"),").")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"From the command line, run ",(0,i.yg)("inlineCode",{parentName:"p"},"yarn start"),".\nIn the terminal, at the bottom of the message log, you see the browser URL:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"You can now view site in the browser.\n\n  http://localhost:8000/\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Open ",(0,i.yg)("a",{parentName:"p",href:"http://localhost:8000/"},(0,i.yg)("inlineCode",{parentName:"a"},"localhost:8000"))," in your browser (with MetaMask Flask installed).\nA page like the following displays:"),(0,i.yg)("img",{src:a(91166).A,alt:"Test dapp with template Snap",style:{border:"1px solid #DCDCDC"}}),(0,i.yg)("p",{parentName:"li"},"This is a boilerplate test dapp for installing and testing your Snap.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Select ",(0,i.yg)("strong",{parentName:"p"},"Connect")," to connect Flask to the dapp.\nAfter connecting, you're prompted to install the Snap with the following permissions:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Allow dapps to communicate directly with this Snap.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Access the internet.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Display dialog windows in MetaMask.")))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Select ",(0,i.yg)("strong",{parentName:"p"},"Approve")," > ",(0,i.yg)("strong",{parentName:"p"},"Install"),".")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"After installing, the ",(0,i.yg)("strong",{parentName:"p"},"Send message")," button on the page is enabled. Select this button. A dialog prompt displays with the response from the gas fee API:"))),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{src:a(30332).A,alt:"Gas estimation dialog",width:"400px",style:{border:"1px solid #DCDCDC"}})),(0,i.yg)("p",null,"You have integrated a public API into MetaMask and displayed real-time gas fee estimates."),(0,i.yg)("h3",{id:"6-next-steps"},"6. Next steps"),(0,i.yg)("p",null,"Next, you can try:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Parsing the JSON response from the remote API."),(0,i.yg)("li",{parentName:"ul"},"Displaying the fees in a nicely formatted way.")),(0,i.yg)("p",null,"You can also update the fields in ",(0,i.yg)("inlineCode",{parentName:"p"},"snap.manifest.json")," to match your custom Snap:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"proposedName")," - The name of your Snap."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"description")," - The description of your Snap."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"source")," - The ",(0,i.yg)("inlineCode",{parentName:"li"},"shasum")," is set automatically when you build from the command line.\nIf you decided to publish your Snap to ",(0,i.yg)("inlineCode",{parentName:"li"},"npm"),", update the ",(0,i.yg)("inlineCode",{parentName:"li"},"location")," to its published location.")),(0,i.yg)("p",null,"Similarly, you should update the ",(0,i.yg)("inlineCode",{parentName:"p"},"name"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"version"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"description"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"repository")," fields of\n",(0,i.yg)("inlineCode",{parentName:"p"},"/packages/snap/package.json")," even if you do not plan to publish your Snap to npm."),(0,i.yg)("admonition",{title:"important",type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"The ",(0,i.yg)("inlineCode",{parentName:"p"},"version")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"repository")," fields in ",(0,i.yg)("inlineCode",{parentName:"p"},"snap.manifest.json")," inherit the values from\n",(0,i.yg)("inlineCode",{parentName:"p"},"package.json")," and overwrite them in ",(0,i.yg)("inlineCode",{parentName:"p"},"snap.manifest.json"),".\nWe recommend updating ",(0,i.yg)("inlineCode",{parentName:"p"},"version")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"repository")," in ",(0,i.yg)("inlineCode",{parentName:"p"},"package.json")," first, then building the Snap project.")),(0,i.yg)("p",null,"You can update the content of ",(0,i.yg)("inlineCode",{parentName:"p"},"/packages/site/src/pages/index.tsx")," by changing the\nname of the method for showing gas fee estimates.\nIf you change the method name in ",(0,i.yg)("inlineCode",{parentName:"p"},"/packages/site/src/pages/index.tsx"),", ensure you change the method name in ",(0,i.yg)("inlineCode",{parentName:"p"},"/packages/snap/src/index.ts")," to match."),(0,i.yg)("p",null,"After you have made all necessary changes, you can\n",(0,i.yg)("a",{parentName:"p",href:"/snaps/how-to/publish-a-snap"},"publish your Snap to npm"),"."))}d.isMDXComponent=!0},30332:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/gas-estimation-0a5ae2f873be0b8fd6226aff0fb3f531.png"},91166:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/template-snap-71dab3e1010b6cdcd69aefc5739bbcdd.png"}}]);