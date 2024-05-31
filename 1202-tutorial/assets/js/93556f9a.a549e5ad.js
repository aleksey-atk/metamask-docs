"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8883],{43472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var s=n(74848),a=n(28453);const c={description:"Create a simple dapp to integrate with MetaMask.",sidebar_position:2},r="Create a simple dapp",i={id:"tutorials/javascript-dapp-simple",title:"Create a simple dapp",description:"Create a simple dapp to integrate with MetaMask.",source:"@site/wallet/tutorials/javascript-dapp-simple.md",sourceDirName:"tutorials",slug:"/tutorials/javascript-dapp-simple",permalink:"/1202-tutorial/wallet/tutorials/javascript-dapp-simple",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/tutorials/javascript-dapp-simple.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Create a simple dapp to integrate with MetaMask.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Create a React dapp with local state",permalink:"/1202-tutorial/wallet/tutorials/react-dapp-local-state"},next:{title:"Reference",permalink:"/1202-tutorial/wallet/reference"}},o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Set up a new project",id:"1-set-up-a-new-project",level:3},{value:"2. Detect MetaMask",id:"2-detect-metamask",level:3},{value:"3. Detect a user&#39;s network",id:"3-detect-a-users-network",level:3},{value:"4. Access a user&#39;s accounts",id:"4-access-a-users-accounts",level:3},{value:"Example",id:"example",level:2},{value:"JavaScript",id:"javascript",level:3},{value:"HTML",id:"html",level:3},{value:"Next steps",id:"next-steps",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"create-a-simple-dapp",children:"Create a simple dapp"}),"\n",(0,s.jsx)(t.p,{children:"This tutorial walks you through creating a simple JavaScript dapp and integrating it with MetaMask.\nIt demonstrates the basics of connecting to MetaMask: detecting the MetaMask provider, detecting the user's network, and accessing the user's accounts."}),"\n",(0,s.jsxs)(t.admonition,{title:"Learning tutorial",type:"caution",children:[(0,s.jsxs)(t.p,{children:["This tutorial is for educational purposes and connects to MetaMask using the legacy provider object, ",(0,s.jsx)(t.code,{children:"window.ethereum"}),", for the sake of simplicity.\nFor deployment in a production environment, we recommend ",(0,s.jsx)(t.a,{href:"/1202-tutorial/wallet/how-to/connect/",children:"connecting to MetaMask using EIP-6963"})," instead."]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-6963",children:"EIP-6963"})," introduces an alternative wallet detection mechanism to the ",(0,s.jsx)(t.code,{children:"window.ethereum"})," provider, and enables dapps to support ",(0,s.jsx)(t.a,{href:"/1202-tutorial/wallet/concepts/wallet-interoperability",children:"wallet interoperability"}),"."]}),(0,s.jsxs)(t.p,{children:["For a full end-to-end tutorial that can be used in production, see the\n",(0,s.jsx)(t.a,{href:"/1202-tutorial/wallet/tutorials/react-dapp-local-state",children:"Create a simple React dapp"})," tutorial."]})]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://nodejs.org/en/",children:"Node.js"})," version 20"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",children:"npm"})," version 9+"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["A text editor of your choice, such as ",(0,s.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"VS Code"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://metamask.io/",children:"MetaMask"})," installed in the browser of your choice on your development machine."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(t.h3,{id:"1-set-up-a-new-project",children:"1. Set up a new project"}),"\n",(0,s.jsxs)(t.p,{children:["Create a new project using ",(0,s.jsx)(t.a,{href:"https://vitejs.dev/guide/",children:"Vite"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm create vite@latest simple-dapp -- --template vanilla\n"})}),"\n",(0,s.jsx)(t.p,{children:"Change directories:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cd simple-dapp \n"})}),"\n",(0,s.jsxs)(t.p,{children:["Install the dependencies listed in the project's ",(0,s.jsx)(t.code,{children:"package.json"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install    \n"})}),"\n",(0,s.jsx)(t.p,{children:"Run the development script to start a local development server:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,s.jsx)(t.p,{children:"Create the main JavaScript file and update the HTML file to include the basic structure of the dapp."}),"\n",(0,s.jsxs)(t.p,{children:["Create the ",(0,s.jsx)(t.code,{children:"main.js"})," file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"touch main.js\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.code,{children:"main.js"}),", add the following:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="main.js"',children:"import './style.css'\n\ndocument.querySelector('#app').innerHTML = `\n  <button class=\"enableEthereumButton\">Enable Ethereum</button>\n  <h2>Account: <span class=\"showAccount\"></span></h2>`;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Update ",(0,s.jsx)(t.code,{children:"index.html"})," to include the script:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:'title="index.html"',children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" type="image/svg+xml" href="/vite.svg" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Simple dapp</title>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="/main.js"><\/script>\n  </body>\n</html>\n'})}),"\n",(0,s.jsx)(t.h3,{id:"2-detect-metamask",children:"2. Detect MetaMask"}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"@metamask/detect-provider"})," module is deprecated, and is only used here for educational purposes. In production environments, we recommend ",(0,s.jsx)(t.a,{href:"/1202-tutorial/wallet/how-to/connect/",children:"connecting to MetaMask using EIP-6963"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["Install the ",(0,s.jsx)(t.code,{children:"@metamask/detect-provider"})," module in your project directory:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm i @metamask/detect-provider\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Create a ",(0,s.jsx)(t.code,{children:"src"})," directory and create a new file ",(0,s.jsx)(t.code,{children:"detect.js"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"mkdir src && touch src/detect.js\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In a text editor, add the following code to ",(0,s.jsx)(t.code,{children:"src/detect.js"})," to detect the MetaMask provider using ",(0,s.jsx)(t.code,{children:"@metamask/detect-provider"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="detect.js"',children:'import detectEthereumProvider from "@metamask/detect-provider";\n\nasync function setup() {\n  const provider = await detectEthereumProvider();\n\n  if (provider && provider === window.ethereum) {\n    console.log("MetaMask is available!");\n    startApp(provider); // Initialize your dapp with MetaMask.\n  } else {\n    console.log("Please install MetaMask!");\n  }\n}\n\nfunction startApp(provider) {\n  if (provider !== window.ethereum) {\n    console.error("Do you have multiple wallets installed?");\n  }\n}\n\nwindow.addEventListener("load", setup);\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Run the ",(0,s.jsx)(t.code,{children:"npm run dev"})," command to test your application locally.\nOpen your browser and go to the provided local server URL."]}),"\n",(0,s.jsx)(t.h3,{id:"3-detect-a-users-network",children:"3. Detect a user's network"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/1202-tutorial/wallet/how-to/manage-networks/detect-network",children:"Detect the user's network"})," to ensure all RPC requests are submitted to the currently connected network.\nAdd the following code to ",(0,s.jsx)(t.code,{children:"src/detect.js"}),", which uses the ",(0,s.jsx)(t.a,{href:"/wallet/reference/eth_chainId",children:(0,s.jsx)(t.code,{children:"eth_chainId"})}),"\nRPC method to detect the chain ID of the user's current network, and listens to the ",(0,s.jsx)(t.a,{href:"/wallet/reference/provider-api/#chainchanged",children:(0,s.jsx)(t.code,{children:"chainChanged"})})," provider event to detect when the user changes networks:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="detect.js"',children:'const chainId = await window.ethereum \n  .request({ method: "eth_chainId" });\n\nwindow.ethereum\n  .on("chainChanged", handleChainChanged);\n\nfunction handleChainChanged(chainId) {\n  // We recommend reloading the page, unless you must do otherwise.\n  window.location.reload();\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"4-access-a-users-accounts",children:"4. Access a user's accounts"}),"\n",(0,s.jsxs)(t.p,{children:["To interact with Ethereum on the user's behalf, such as sending transactions or requesting balances, your dapp needs to ",(0,s.jsx)(t.a,{href:"/1202-tutorial/wallet/how-to/connect/access-accounts",children:"access the user's accounts"})," by calling ",(0,s.jsx)(t.a,{href:"/wallet/reference/eth_requestaccounts",children:(0,s.jsx)(t.code,{children:"eth_requestAccounts"})}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Add the following code to ",(0,s.jsx)(t.code,{children:"src/detect.js"}),", which creates a button to allow users to connect to MetaMask from your dapp.\nSelecting the button activates the call to ",(0,s.jsx)(t.code,{children:"eth_requestAccounts"}),", allowing you to access the user's accounts."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="detect.js"',children:'// You should only attempt to request the user\'s account in response to user interaction, such as\n// selecting a button. Otherwise, you risk spamming the user. If you fail to retrieve\n// the user\'s account, you should encourage the user to initiate the attempt.\nconst ethereumButton = document.querySelector(".enableEthereumButton");\nconst showAccount = document.querySelector(".showAccount");\n\nethereumButton.addEventListener("click", () => {\n  getAccount();\n});\n\n// While awaiting the call to eth_requestAccounts, you should disable any buttons the user can\n// select to initiate the request. MetaMask rejects any additional requests while the first is still\n// pending.\nasync function getAccount() {\n  const accounts = await window.ethereum\n    .request({ method: "eth_requestAccounts" })\n      .catch((err) => {\n        if (err.code === 4001) {\n          // EIP-1193 userRejectedRequest error.\n          // If this happens, the user rejected the connection request.\n          console.log("Please connect to MetaMask.");\n        } else {\n          console.error(err);\n        }\n      });\n  const account = accounts[0];\n  showAccount.innerHTML = account;\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Update ",(0,s.jsx)(t.code,{children:"index.html"})," with the following HTML code, which displays the button and the current account:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:'title="index.html"',children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" type="image/svg+xml" href="/vite.svg" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Simple dapp</title>\n    <script type="module" src="/main.js"><\/script>\n    <script type="module" src="src/detect.js"><\/script>\n  </head>\n  <body>\n    \x3c!-- Display a connect button and the current account --\x3e\n    <button class="enableEthereumButton">Enable Ethereum</button>\n    <h2>Account: <span class="showAccount"></span></h2>\n  </body>\n</html>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Save your changes and run ",(0,s.jsx)(t.code,{children:"npm run dev"})," in the ",(0,s.jsx)(t.code,{children:"simple-dapp"})," project directory.\nNavigate to the local server URL to view the live dapp."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Connect and access dapp",src:n(57414).A+"",width:"1578",height:"1336"})}),"\n",(0,s.jsx)(t.p,{children:"You are prompted to connect to MetaMask. Follow the prompts to connect and access your account."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"View account",src:n(54769).A+"",width:"1788",height:"230"})}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"The following code samples contain the full simple dapp JavaScript and HTML code that this tutorial walks through.\nYou can copy the following full examples to get started quickly."}),"\n",(0,s.jsx)(t.h3,{id:"javascript",children:"JavaScript"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="detect.js"',children:"/*****************************************/\n/* Detect the MetaMask Ethereum provider */\n/*****************************************/\n\nimport detectEthereumProvider from '@metamask/detect-provider';\n\nconst provider = await detectEthereumProvider();\n\nif (!provider) {\n  console.log('Please install MetaMask!');\n} else {\n  if (provider !== window.ethereum) {\n    console.error('Do you have multiple wallets installed?');\n  }\n}\n\n/**********************************************************/\n/* Handle chain (network) and chainChanged (per EIP-1193) */\n/**********************************************************/\n\nconst handleChainChanged = () => {\n  window.location.reload();\n}; //Reload the page to reflect the new chain.\n\nwindow.ethereum.on('chainChanged', handleChainChanged);\n\n/***********************************************************/\n/* Handle user accounts and accountsChanged (per EIP-1193) */\n/***********************************************************/\n\nlet currentAccount = null;\n\nconst handleAccountsChanged = (accounts) => {\n  if (accounts.length === 0) {\n    console.log('Please connect to MetaMask.');\n  } else if (accounts[0] !== currentAccount) {\n    currentAccount = accounts[0];\n    showAccount.innerHTML = currentAccount;\n  }\n};\n\nwindow.ethereum.request({ method: 'eth_accounts' })\n  .then(handleAccountsChanged)\n  .catch((err) => {\n    console.error(err);\n  });\n\nwindow.ethereum.on('accountsChanged', handleAccountsChanged);\n\n/*********************************************/\n/* Access the user's accounts (per EIP-1102) */\n/*********************************************/\n\nconst ethereumButton = document.querySelector('.enableEthereumButton');\nconst showAccount = document.querySelector('.showAccount');\n\nethereumButton.addEventListener('click', async () => {\n  try {\n    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });\n    const account = accounts[0];\n    showAccount.innerHTML = account;\n  } catch (err) {\n    if (err.code === 4001) {\n      console.log('Please connect to MetaMask.');\n    } else {\n      console.error(err);\n    }\n  }\n});\n"})}),"\n",(0,s.jsx)(t.h3,{id:"html",children:"HTML"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:'title="index.html"',children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" type="image/svg+xml" href="/vite.svg" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Simple dapp</title>\n    <script type="module" src="/main.js"><\/script>\n    <script type="module" src="src/detect.js"><\/script>\n  </head>\n  <body>\n    \x3c!-- Display a connect button and the current account --\x3e\n    <button class="enableEthereumButton">Enable Ethereum</button>\n    <h2>Account: <span class="showAccount"></span></h2>\n  </body>\n</html>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsxs)(t.p,{children:["You've successfully created a simple dapp and connected it to MetaMask using JavaScript, Vite, and the ",(0,s.jsx)(t.code,{children:"window.ethereum"})," provider.\nWith this setup, your dapp can interact with MetaMask and allow users to securely access accounts and perform transactions on the Ethereum blockchain."]}),"\n",(0,s.jsxs)(t.p,{children:["As a next step, you can create a ",(0,s.jsx)(t.a,{href:"/react-dapp-local-state/",children:"React dapp with local state"}),".\nThis follow-up tutorial walks you through integrating a simple React dapp with MetaMask using a single JSX component for managing local state, and the Vite build tool with React and TypeScript to create the dapp."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},54769:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/account-96bcbfe3d06ff6857d7bafb059cbe635.png"},57414:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/connect-c5d20a5956ea52d844816656d505ae7a.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var s=n(96540);const a={},c=s.createContext(a);function r(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);