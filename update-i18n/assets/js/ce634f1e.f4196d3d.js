"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3102],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>u});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},g=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,u=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return t?a.createElement(u,s(s({ref:n},g),{},{components:t})):a.createElement(u,s({ref:n},g))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53598:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const i={description:"Sign data using eth_signTypedData_v4 and personal_sign.",sidebar_position:4},s="Sign data",o={unversionedId:"how-to/sign-data/index",id:"how-to/sign-data/index",title:"Sign data",description:"Sign data using eth_signTypedData_v4 and personal_sign.",source:"@site/wallet/how-to/sign-data/index.md",sourceDirName:"how-to/sign-data",slug:"/how-to/sign-data/",permalink:"/update-i18n/wallet/how-to/sign-data/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/sign-data/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Sign data using eth_signTypedData_v4 and personal_sign.",sidebar_position:4},sidebar:"walletSidebar",previous:{title:"Send transactions",permalink:"/update-i18n/wallet/how-to/send-transactions"},next:{title:"Sign in with Ethereum",permalink:"/update-i18n/wallet/how-to/sign-data/siwe"}},l={},p=[{value:"Use <code>eth_signTypedData_v4</code>",id:"use-eth_signtypeddata_v4",level:2},{value:"Example",id:"example",level:3},{value:"Use <code>personal_sign</code>",id:"use-personal_sign",level:2},{value:"Example",id:"example-1",level:3}],g={toc:p},d="wrapper";function c(e){let{components:n,...i}=e;return(0,r.yg)(d,(0,a.A)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"sign-data"},"Sign data"),(0,r.yg)("p",null,"You can use the following RPC methods to request cryptographic signatures from users:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#use-eth_signtypeddata_v4"},(0,r.yg)("inlineCode",{parentName:"a"},"eth_signTypedData_v4"))," - Use this method to request the most human-readable\nsignatures that are efficient to process on-chain.\nWe recommend this for most use cases."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#use-personal_sign"},(0,r.yg)("inlineCode",{parentName:"a"},"personal_sign"))," - Use this method for the easiest way to request human-readable\nsignatures that don't need to be efficiently processed on-chain.")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("a",{parentName:"p",href:"/update-i18n/wallet/concepts/signing-methods#eth_sign"},(0,r.yg)("inlineCode",{parentName:"a"},"eth_sign"))," is deprecated.")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"MetaMask supports signing transactions using Trezor and Ledger hardware wallets.\nThese wallets only support signing data using ",(0,r.yg)("inlineCode",{parentName:"p"},"personal_sign"),".\nIf you can't log in to a dapp when using a Ledger or Trezor, the dapp might be requesting you to\nsign data using an unsupported method, in which case we recommend using your standard MetaMask account.")),(0,r.yg)("h2",{id:"use-eth_signtypeddata_v4"},"Use ",(0,r.yg)("inlineCode",{parentName:"h2"},"eth_signTypedData_v4")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/eth_signTypedData_v4"},(0,r.yg)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")),"\nprovides the most human-readable signatures that are efficient to process on-chain.\nIt follows the ",(0,r.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP-712")," specification to allow users to sign\ntyped structured data that can be verified on-chain.\nIt renders the structured data as usefully as possible to the user (for example, displaying known\naccount names in place of addresses)."),(0,r.yg)("p",{align:"center"},(0,r.yg)("p",null,(0,r.yg)("img",{alt:"eth_signTypedData_v4",src:t(61525).A,width:"472",height:"732"}))),(0,r.yg)("p",null,"An ",(0,r.yg)("inlineCode",{parentName:"p"},"eth_signTypedData_v4")," payload uses a standard format of encoding structs, but has a different\nformat for the top-level struct that is signed, which includes some metadata about the verifying\ncontract to provide replay protection of these signatures between different contract instances."),(0,r.yg)("p",null,"We recommend using ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/eth-sig-util"},(0,r.yg)("inlineCode",{parentName:"a"},"eth-sig-util"))," to generate and\nvalidate signatures.\nYou can use ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/danfinlay/eip712-codegen#readme"},(0,r.yg)("inlineCode",{parentName:"a"},"eip712-codegen"))," to generate most\nof the Solidity required to verify these signatures on-chain.\nIt currently doesn't generate the top-level struct verification code, so you must write that part manually.\nSee\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/delegatable/delegatable-sol/blob/fb34bb259890417285f7185bc6500fb0ab8bf86f/contracts/Delegatable.sol#L80"},"this example implementation"),"."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Since the top-level struct type's name and the ",(0,r.yg)("inlineCode",{parentName:"p"},"domain.name")," are presented to the user prominently\nin the confirmation, consider your contract name, the top-level struct name, and the struct keys to\nbe a user-facing security interface.\nEnsure your contract is as readable as possible to the user.")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"The following is an example of using ",(0,r.yg)("inlineCode",{parentName:"p"},"eth_signTypedData_v4")," with MetaMask:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'signTypedDataV4Button.addEventListener("click", async function (event) {\n  event.preventDefault();\n\n  // eth_signTypedData_v4 parameters. All of these parameters affect the resulting signature.\n  const msgParams = JSON.stringify({\n    domain: {\n      // This defines the network, in this case, Mainnet.\n      chainId: 1,\n      // Give a user-friendly name to the specific contract you\'re signing for.\n      name: "Ether Mail",\n      // Add a verifying contract to make sure you\'re establishing contracts with the proper entity.\n      verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",\n      // This identifies the latest version.\n      version: "1",\n    },\n\n    // This defines the message you\'re proposing the user to sign, is dapp-specific, and contains\n    // anything you want. There are no required fields. Be as explicit as possible when building out\n    // the message schema.\n    message: {\n      contents: "Hello, Bob!",\n      attachedMoneyInEth: 4.2,\n      from: {\n        name: "Cow",\n        wallets: [\n          "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",\n          "0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF",\n        ],\n      },\n      to: [\n        {\n          name: "Bob",\n          wallets: [\n            "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",\n            "0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57",\n            "0xB0B0b0b0b0b0B000000000000000000000000000",\n          ],\n        },\n      ],\n    },\n    // This refers to the keys of the following types object.\n    primaryType: "Mail",\n    types: {\n      // This refers to the domain the contract is hosted on.\n      EIP712Domain: [\n        { name: "name", type: "string" },\n        { name: "version", type: "string" },\n        { name: "chainId", type: "uint256" },\n        { name: "verifyingContract", type: "address" },\n      ],\n      // Not an EIP712Domain definition.\n      Group: [\n        { name: "name", type: "string" },\n        { name: "members", type: "Person[]" },\n      ],\n      // Refer to primaryType.\n      Mail: [\n        { name: "from", type: "Person" },\n        { name: "to", type: "Person[]" },\n        { name: "contents", type: "string" },\n      ],\n      // Not an EIP712Domain definition.\n      Person: [\n        { name: "name", type: "string" },\n        { name: "wallets", type: "address[]" },\n      ],\n    },\n  });\n\n  var from = await web3.eth.getAccounts();\n\n  var params = [from[0], msgParams];\n  var method = "eth_signTypedData_v4";\n\n  provider // Or window.ethereum if you don\'t support EIP-6963.\n    .sendAsync(\n      {\n        method,\n        params,\n        from: from[0],\n      },\n      function (err, result) {\n        if (err) return console.dir(err);\n        if (result.error) {\n          alert(result.error.message);\n        }\n        if (result.error) return console.error("ERROR", result);\n        console.log("TYPED SIGNED:" + JSON.stringify(result.result));\n\n        const recovered = sigUtil.recoverTypedSignature_v4({\n          data: JSON.parse(msgParams),\n          sig: result.result,\n        });\n\n        if (ethUtil.toChecksumAddress(recovered) === ethUtil.toChecksumAddress(from)) {\n          alert("Successfully recovered signer as " + from);\n        } else {\n          alert("Failed to verify signer when comparing " + result + " to " + from);\n        }\n      }\n    );\n});\n')),(0,r.yg)("p",null,"The following HTML displays a sign button:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<h3>Sign typed data v4</h3>\n<button type="button" id="signTypedDataV4Button">eth_signTypedData_v4</button>\n')),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://metamask.github.io/test-dapp/#signTypedDataV4"},"live example")," and\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/test-dapp"},"test dapp source code")," for more information."),(0,r.yg)("h2",{id:"use-personal_sign"},"Use ",(0,r.yg)("inlineCode",{parentName:"h2"},"personal_sign")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/personal_sign"},(0,r.yg)("inlineCode",{parentName:"a"},"personal_sign"))," is the\neasiest way to request human-readable signatures that don't need to be efficiently processed on-chain.\nIt's often used for signature challenges that are authenticated on a web server, such as\n",(0,r.yg)("a",{parentName:"p",href:"/update-i18n/wallet/how-to/sign-data/siwe"},"Sign-In with Ethereum"),"."),(0,r.yg)("p",{align:"center"},(0,r.yg)("p",null,(0,r.yg)("img",{alt:"personal_sign",src:t(88595).A,width:"472",height:"732"}))),(0,r.yg)("p",null,"Some other signers implement ",(0,r.yg)("inlineCode",{parentName:"p"},"personal_sign")," as ",(0,r.yg)("inlineCode",{parentName:"p"},"eth_sign"),", because the Go Ethereum client changed\nthe behavior of their ",(0,r.yg)("inlineCode",{parentName:"p"},"eth_sign")," method.\nBecause MetaMask supports existing applications, MetaMask implements both ",(0,r.yg)("inlineCode",{parentName:"p"},"personal_sign")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"eth_sign"),".\nYou might need to check what method your supported signers use for a given implementation."),(0,r.yg)("admonition",{title:"important",type:"caution"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Don't use this method to display binary data, because the user wouldn't be able to understand what\nthey're agreeing to."),(0,r.yg)("li",{parentName:"ul"},"If using this method for a signature challenge, think about what would prevent a phisher from\nreusing the same challenge and impersonating your site.\nAdd text referring to your domain, or the current time, so the user can easily verify if this\nchallenge is legitimate."))),(0,r.yg)("h3",{id:"example-1"},"Example"),(0,r.yg)("p",null,"The following is an example of using ",(0,r.yg)("inlineCode",{parentName:"p"},"personal_sign")," with MetaMask:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'personalSignButton.addEventListener("click", async function (event) {\n  event.preventDefault();\n  const exampleMessage = "Example `personal_sign` message.";\n  try {\n    const from = accounts[0];\n    // For historical reasons, you must submit the message to sign in hex-encoded UTF-8.\n    // This uses a Node.js-style buffer shim in the browser.\n    const msg = `0x${Buffer.from(exampleMessage, "utf8").toString("hex")}`;\n    const sign = await ethereum.request({\n      method: "personal_sign",\n      params: [msg, from],\n    });\n    personalSignResult.innerHTML = sign;\n    personalSignVerify.disabled = false;\n  } catch (err) {\n    console.error(err);\n    personalSign.innerHTML = `Error: ${err.message}`;\n  }\n});\n')),(0,r.yg)("p",null,"The following HTML displays a sign button:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<h3>Personal sign</h3>\n<button type="button" id="personalSignButton">personal_sign</button>\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"personal_sign")," prepends the message with ",(0,r.yg)("inlineCode",{parentName:"p"},"\\x19Ethereum Signed Message:\\n<length of message>")," before\nhashing and signing it."),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://metamask.github.io/test-dapp/#personalSign"},"live example")," and\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/test-dapp"},"test dapp source code")," for more information."))}c.isMDXComponent=!0},88595:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/personal_sign-d816d3f7b4c78b5bf5f31dfb3e167775.png"},61525:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/signTypedData-e0bc49cef93b62a1275a0302134e86c4.png"}}]);