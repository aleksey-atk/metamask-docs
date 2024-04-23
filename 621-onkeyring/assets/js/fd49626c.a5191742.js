"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8873],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>m});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=t.createContext({}),l=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=l(a),u=i,m=g["".concat(p,".").concat(u)]||g[u]||d[u]||r;return a?t.createElement(m,s(s({ref:n},c),{},{components:a})):t.createElement(m,s({ref:n},c))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[g]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=a[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},14765:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=a(58168),i=(a(96540),a(15680));const r={description:"Create a Snap that provides transaction insights.",sidebar_position:2},s="Create a Snap to calculate gas fee percentages",o={unversionedId:"learn/tutorials/transaction-insights",id:"learn/tutorials/transaction-insights",title:"Create a Snap to calculate gas fee percentages",description:"Create a Snap that provides transaction insights.",source:"@site/snaps/learn/tutorials/transaction-insights.md",sourceDirName:"learn/tutorials",slug:"/learn/tutorials/transaction-insights",permalink:"/621-onkeyring/snaps/learn/tutorials/transaction-insights",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/tutorials/transaction-insights.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Create a Snap that provides transaction insights.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Create a Snap to estimate gas fees",permalink:"/621-onkeyring/snaps/learn/tutorials/gas-estimation"},next:{title:"Best practices",permalink:"/621-onkeyring/snaps/learn/best-practices"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Set up the project",id:"1-set-up-the-project",level:3},{value:"2. Enable transaction insights and the Ethereum provider",id:"2-enable-transaction-insights-and-the-ethereum-provider",level:3},{value:"3. Calculate and display the percentage of gas fees",id:"3-calculate-and-display-the-percentage-of-gas-fees",level:3},{value:"4. Build and test the Snap",id:"4-build-and-test-the-snap",level:3},{value:"5. Display a different UI for contract interactions",id:"5-display-a-different-ui-for-contract-interactions",level:3},{value:"6. Next steps",id:"6-next-steps",level:3}],c={toc:l},g="wrapper";function d(e){let{components:n,...r}=e;return(0,i.yg)(g,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"create-a-snap-to-calculate-gas-fee-percentages"},"Create a Snap to calculate gas fee percentages"),(0,i.yg)("p",null,"This tutorial walks you through creating a Snap that calculates the percentage of gas fees that\na user pays when creating a transaction.\nThe Snap provides transaction insights in the MetaMask transaction window."),(0,i.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/621-onkeyring/snaps/get-started/install-flask"},"MetaMask Flask installed")),(0,i.yg)("li",{parentName:"ul"},"An account on your MetaMask Flask instance with testnet ETH",(0,i.yg)("admonition",{parentName:"li",type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"You can use ",(0,i.yg)("a",{parentName:"p",href:"https://www.infura.io/faucet"},"Infura's Sepolia faucet")," to get Sepolia ETH."))),(0,i.yg)("li",{parentName:"ul"},"A text editor (for example, ",(0,i.yg)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VS Code"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Node")," version 20.11 or later"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn"))),(0,i.yg)("h2",{id:"steps"},"Steps"),(0,i.yg)("h3",{id:"1-set-up-the-project"},"1. Set up the project"),(0,i.yg)("p",null,"Create a new Snap project using the\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap"},(0,i.yg)("inlineCode",{parentName:"a"},"@metamask/create-snap")),"\nstarter kit by running:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"yarn create @metamask/snap transaction-insights-snap\n")),(0,i.yg)("p",null,"or"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"npx @metamask/create-snap transaction-insights-snap\n")),(0,i.yg)("p",null,"or"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"npm create @metamask/snap transaction-insights-snap\n")),(0,i.yg)("p",null,"Next, ",(0,i.yg)("inlineCode",{parentName:"p"},"cd")," into the ",(0,i.yg)("inlineCode",{parentName:"p"},"transaction-insights-snap")," project directory and run:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"yarn install\n")),(0,i.yg)("p",null,"This initializes your development environment with the required dependencies.\nYou may get a warning similar to the following: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'@lavamoat/allow-scripts has detected dependencies without configuration. explicit configuration required.\nrun "allow-scripts auto" to automatically populate the configuration.\n')),(0,i.yg)("p",null,"You can resolve the issue by running the following command: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"yarn run allow-scripts auto\n")),(0,i.yg)("h3",{id:"2-enable-transaction-insights-and-the-ethereum-provider"},"2. Enable transaction insights and the Ethereum provider"),(0,i.yg)("p",null,"The default template Snap, such as the one in\n",(0,i.yg)("a",{parentName:"p",href:"/621-onkeyring/snaps/learn/tutorials/gas-estimation"},"Create a gas estimation Snap"),",\nis configured to expose a JSON-RPC API with a simple hello command, which brings up a dialog box.\nIn contrast, the Snap you're creating in this tutorial doesn't expose any API.\nInstead, it provides transaction insights directly in the MetaMask transaction window."),(0,i.yg)("p",null,"In particular, the Snap shows the user the percentage of gas fees they would pay for their transaction.\nIt gets the current gas price by calling the\n",(0,i.yg)("a",{parentName:"p",href:"/wallet/reference/eth_gasPrice"},(0,i.yg)("inlineCode",{parentName:"a"},"eth_gasPrice"))," RPC\nmethod using the global Ethereum provider made available to Snaps."),(0,i.yg)("p",null,"To enable your Snap to provide transaction insights and use the global Ethereum provider, open\n",(0,i.yg)("inlineCode",{parentName:"p"},"packages/snap/snap.manifest.json")," in a text editor.\nRequest the\n",(0,i.yg)("a",{parentName:"p",href:"/621-onkeyring/snaps/reference/permissions#endowmenttransaction-insight"},(0,i.yg)("inlineCode",{parentName:"a"},"endowment:transaction-insight"))," and\n",(0,i.yg)("a",{parentName:"p",href:"/621-onkeyring/snaps/reference/permissions#endowmentethereum-provider"},(0,i.yg)("inlineCode",{parentName:"a"},"endowment:ethereum-provider")),"\npermissions by modifying ",(0,i.yg)("inlineCode",{parentName:"p"},"initialPermissions"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:transaction-insight": {},\n  "endowment:ethereum-provider": {}\n}\n')),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"In this tutorial, you can replace what was previously in ",(0,i.yg)("inlineCode",{parentName:"p"},"initialPermissions"),".\nYou do not need any permissions other than ",(0,i.yg)("inlineCode",{parentName:"p"},"endowment:transaction-insight")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"endowment:ethereum-provider"),".")),(0,i.yg)("h3",{id:"3-calculate-and-display-the-percentage-of-gas-fees"},"3. Calculate and display the percentage of gas fees"),(0,i.yg)("p",null,"To calculate and display the gas fees a user would pay as a percentage of their outgoing transaction,\nreplace the code in ",(0,i.yg)("inlineCode",{parentName:"p"},"packages/snap/src/index.ts")," with the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnTransactionHandler } from "@metamask/snaps-sdk";\nimport { heading, panel, text } from "@metamask/snaps-sdk";\n\n// Handle outgoing transactions.\nexport const onTransaction: OnTransactionHandler = async ({ transaction }) => {\n\n  // Use the Ethereum provider to fetch the gas price.\n  const currentGasPrice = await ethereum.request({\n    method: "eth_gasPrice",\n  }) as string;\n\n  // Get fields from the transaction object.\n  const transactionGas = parseInt(transaction.gas as string, 16);\n  const currentGasPriceInWei = parseInt(currentGasPrice ?? "", 16);\n  const maxFeePerGasInWei = parseInt(transaction.maxFeePerGas as string, 16);\n  const maxPriorityFeePerGasInWei = parseInt(\n    transaction.maxPriorityFeePerGas as string,\n    16,\n  );\n\n  // Calculate gas fees the user would pay.\n  const gasFees = Math.min(\n    maxFeePerGasInWei * transactionGas,\n    (currentGasPriceInWei + maxPriorityFeePerGasInWei) * transactionGas,\n  );\n\n  // Calculate gas fees as percentage of transaction.\n  const transactionValueInWei = parseInt(transaction.value as string, 16);\n  const gasFeesPercentage = (gasFees / (gasFees + transactionValueInWei)) * 100;\n\n  // Display percentage of gas fees in the transaction insights UI.\n  return {\n    content: panel([\n      heading("Transaction insights Snap"),\n      text(\n        `As set up, you are paying **${gasFeesPercentage.toFixed(2)}%**\n        in gas fees for this transaction.`,\n      ),\n    ]),\n  };\n};\n')),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"If you have previously developed a dapp, you're likely familiar with accessing the Ethereum provider using ",(0,i.yg)("inlineCode",{parentName:"p"},"window.ethereum"),".\nIn a Snap, the ",(0,i.yg)("inlineCode",{parentName:"p"},"window")," object is not available.\nInstead, when you request the ",(0,i.yg)("inlineCode",{parentName:"p"},"endowment:ethereum-provider")," permission, your Snap is granted access to the ",(0,i.yg)("a",{parentName:"p",href:"/621-onkeyring/snaps/learn/about-snaps/apis#snap-requests"},(0,i.yg)("inlineCode",{parentName:"a"},"ethereum")," global object"),".")),(0,i.yg)("h3",{id:"4-build-and-test-the-snap"},"4. Build and test the Snap"),(0,i.yg)("p",null,"To build and test your Snap:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"From the command line, run ",(0,i.yg)("inlineCode",{parentName:"p"},"yarn start")," in the root of your project.\nThis starts two development servers: one for watching and compiling the Snap, and another for the\nReact site.\nThe Snap bundle is served from ",(0,i.yg)("inlineCode",{parentName:"p"},"localhost:8080"),", and the site is served from ",(0,i.yg)("inlineCode",{parentName:"p"},"localhost:8000"),".\nYou should get a message that includes:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"You can now view site in the browser.\n\n  http://localhost:8000/\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Open ",(0,i.yg)("a",{parentName:"p",href:"http://localhost:8000"},(0,i.yg)("inlineCode",{parentName:"a"},"localhost:8000"))," in your browser (with MetaMask Flask installed).")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Select ",(0,i.yg)("strong",{parentName:"p"},"Connect")," and accept the permission request.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"After connecting, you're prompted to install the Snap with the ",(0,i.yg)("strong",{parentName:"p"},"Fetch and display transaction\ninsights")," and ",(0,i.yg)("strong",{parentName:"p"},"Access the Ethereum provider")," permissions.\nSelect ",(0,i.yg)("strong",{parentName:"p"},"Approve")," > ",(0,i.yg)("strong",{parentName:"p"},"Install"),".")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"From MetaMask Flask, create a new testnet ETH transfer.\nYou can set up multiple accounts to transfer between your accounts.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"In the confirmation window, switch to the tab named ",(0,i.yg)("strong",{parentName:"p"},"TYPESCRIPT EXAMPLE SNAP"),".\nSwitching to the tab activates the ",(0,i.yg)("a",{parentName:"p",href:"/621-onkeyring/snaps/reference/entry-points#ontransaction"},(0,i.yg)("inlineCode",{parentName:"a"},"onTransaction")),"\nentry point of your Snap and displays the percentage of gas fees in the transaction insights UI:"))),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{src:a(95219).A,alt:"Transaction insights UI",width:"400px",style:{border:"1px solid #DCDCDC"}})),(0,i.yg)("h3",{id:"5-display-a-different-ui-for-contract-interactions"},"5. Display a different UI for contract interactions"),(0,i.yg)("p",null,"The Snap should display a gas fee percentage for ETH transfers initiated by the user.\nFor contract interactions, add the following code to the beginning of the ",(0,i.yg)("inlineCode",{parentName:"p"},"onTransaction")," entry point:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'if (typeof transaction.data === "string" && transaction.data !== "0x") {\n  return {\n    content: panel([\n      heading("Percent Snap"),\n      text(\n        "This Snap only provides transaction insights for simple ETH transfers.",\n      ),\n    ]),\n  };\n}\n')),(0,i.yg)("h3",{id:"6-next-steps"},"6. Next steps"),(0,i.yg)("p",null,"The initial project has generic names in multiple places.\nYou can update the fields in ",(0,i.yg)("inlineCode",{parentName:"p"},"snap.manifest.json")," to match your custom Snap:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"proposedName")," - The name of your Snap.\nThis replaces ",(0,i.yg)("strong",{parentName:"li"},"TYPESCRIPT EXAMPLE SNAP")," in the transaction insights UI."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"description")," - The description of your Snap."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"source")," - The ",(0,i.yg)("inlineCode",{parentName:"li"},"shasum")," is set automatically when you build from the command line.\nIf you decided to publish your Snap to npm, update the ",(0,i.yg)("inlineCode",{parentName:"li"},"location")," to its published location.")),(0,i.yg)("p",null,"Similarly, you should update the ",(0,i.yg)("inlineCode",{parentName:"p"},"name"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"version"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"description"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"repository")," fields of\n",(0,i.yg)("inlineCode",{parentName:"p"},"packages/snap/package.json")," even if you don't plan to publish your Snap to npm."),(0,i.yg)("admonition",{title:"important",type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"The ",(0,i.yg)("inlineCode",{parentName:"p"},"version")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"repository")," fields in ",(0,i.yg)("inlineCode",{parentName:"p"},"snap.manifest.json")," inherit the values from\n",(0,i.yg)("inlineCode",{parentName:"p"},"package.json")," and overwrite them in ",(0,i.yg)("inlineCode",{parentName:"p"},"snap.manifest.json"),".\nWe recommend updating ",(0,i.yg)("inlineCode",{parentName:"p"},"version")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"repository")," in ",(0,i.yg)("inlineCode",{parentName:"p"},"package.json")," first, then building the Snap project.")),(0,i.yg)("p",null,"You should also add an icon by following the steps outlined in the\n",(0,i.yg)("a",{parentName:"p",href:"/621-onkeyring/snaps/learn/tutorials/gas-estimation#2-add-a-custom-icon"},"gas estimation Snap tutorial"),". "),(0,i.yg)("p",null,"Lastly, you can update the content of ",(0,i.yg)("inlineCode",{parentName:"p"},"packages/site/src/pages/index.tsx"),", such as removing the\ntemplate ",(0,i.yg)("strong",{parentName:"p"},"Send Hello")," button."),(0,i.yg)("p",null,"After you've made all necessary changes, you can\n",(0,i.yg)("a",{parentName:"p",href:"/621-onkeyring/snaps/how-to/publish-a-snap"},"publish your Snap to npm"),"."))}d.isMDXComponent=!0},95219:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/transaction-insights-826defcf49b733060afad734924a1749.png"}}]);