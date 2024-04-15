"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5690],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},21871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(58168),o=(n(96540),n(15680));const i={description:"Create a multi-component React dapp with global state.",toc_max_heading_level:4,sidebar_position:2},r="Create a React dapp with global state",s={unversionedId:"tutorials/react-dapp-global-state",id:"tutorials/react-dapp-global-state",title:"Create a React dapp with global state",description:"Create a multi-component React dapp with global state.",source:"@site/wallet/tutorials/react-dapp-global-state.md",sourceDirName:"tutorials",slug:"/tutorials/react-dapp-global-state",permalink:"/wallet/tutorials/react-dapp-global-state",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/tutorials/react-dapp-global-state.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Create a multi-component React dapp with global state.",toc_max_heading_level:4,sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Create a React dapp with local state",permalink:"/wallet/tutorials/react-dapp-local-state"},next:{title:"Reference",permalink:"/wallet/reference"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Set up the project",id:"1-set-up-the-project",level:3},{value:"Styling",id:"styling",level:4},{value:"Optional: Linting with ESLint",id:"optional-linting-with-eslint",level:4},{value:"Project structure",id:"project-structure",level:4},{value:"2. Build the context provider",id:"2-build-the-context-provider",level:3},{value:"3. Wrap components with the context provider",id:"3-wrap-components-with-the-context-provider",level:3},{value:"4. Connect to MetaMask in the navigation",id:"4-connect-to-metamask-in-the-navigation",level:3},{value:"5. Display MetaMask data",id:"5-display-metamask-data",level:3},{value:"6. Show MetaMask errors in the footer",id:"6-show-metamask-errors-in-the-footer",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,o.yg)(d,(0,a.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"create-a-react-dapp-with-global-state"},"Create a React dapp with global state"),(0,o.yg)("p",null,"This tutorial walks you through integrating a React dapp with MetaMask.\nThe dapp has multiple components, so requires managing global state.\nYou'll use the ",(0,o.yg)("a",{parentName:"p",href:"https://v3.vitejs.dev/guide"},"Vite")," build tool with React and TypeScript to create\nthe dapp."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"We recommend first ",(0,o.yg)("a",{parentName:"p",href:"/wallet/tutorials/react-dapp-local-state"},"creating a React dapp with local state"),".\nThis tutorial is a follow-up to that tutorial.")),(0,o.yg)("p",null,"The ",(0,o.yg)("a",{parentName:"p",href:"/wallet/tutorials/react-dapp-local-state"},"previous tutorial")," walks you through creating a dapp that connects\nto MetaMask and handles account, balance, and network changes with a single component.\nIn real world use cases, a dapp might need to respond to state changes in different components."),(0,o.yg)("p",null,"In this tutorial, you'll move that state and its relevant functions into\n",(0,o.yg)("a",{parentName:"p",href:"https://react.dev/reference/react/useContext"},"React context"),", creating a\n",(0,o.yg)("a",{parentName:"p",href:"https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components"},"global state"),"\nso other components and UI can affect it and get MetaMask wallet updates."),(0,o.yg)("p",null,"This tutorial also provides a few best practices for a clean code base, since you'll have multiple\ncomponents and a slightly more complex file structure."),(0,o.yg)("admonition",{title:"Project source code",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"You can see the source code for the\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/react-dapp-tutorial/tree/global-state-start"},"starting point")," and\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/react-dapp-tutorial/tree/global-state-final"},"final state")," of this dapp.")),(0,o.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," version 18+"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm")," version 9+"),(0,o.yg)("li",{parentName:"ul"},"A text editor (for example, ",(0,o.yg)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VS Code"),")"),(0,o.yg)("li",{parentName:"ul"},"The ",(0,o.yg)("a",{parentName:"li",href:"https://metamask.io/download"},"MetaMask extension")," installed"),(0,o.yg)("li",{parentName:"ul"},"Basic knowledge of TypeScript, React and React Hooks")),(0,o.yg)("h2",{id:"steps"},"Steps"),(0,o.yg)("h3",{id:"1-set-up-the-project"},"1. Set up the project"),(0,o.yg)("p",null,"Clone the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/react-dapp-tutorial"},(0,o.yg)("inlineCode",{parentName:"a"},"react-dapp-tutorial"))," GitHub repository\non GitHub by running the following command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/MetaMask/react-dapp-tutorial.git\n")),(0,o.yg)("p",null,"Checkout the ",(0,o.yg)("inlineCode",{parentName:"p"},"global-state-start")," branch:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cd react-dapp-tutorial && git checkout global-state-start\n")),(0,o.yg)("p",null,"Install the node module dependencies:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,o.yg)("p",null,"Open the project in a text editor."),(0,o.yg)("admonition",{title:"tip",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"If you use VS Code, you can run the command ",(0,o.yg)("inlineCode",{parentName:"p"},"code .")," to open the project.")),(0,o.yg)("p",null,"This is a working React dapp, but it's wiped out the code from the previous tutorial's\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/react-dapp-tutorial/blob/local-state-final/src/App.tsx"},(0,o.yg)("inlineCode",{parentName:"a"},"App.tsx"))," file."),(0,o.yg)("p",null,"Run the dapp using the command ",(0,o.yg)("inlineCode",{parentName:"p"},"npx vite"),".\nThe starting point looks like the following:"),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(94252).A,width:"1516",height:"1280"})),(0,o.yg)("p",null,"There are three components, each with static text: navigation (with a logo area and connect button),\ndisplay (main content area), and footer.\nYou'll use the footer to show any MetaMask errors."),(0,o.yg)("p",null,"Before you start, comment out or remove the ",(0,o.yg)("inlineCode",{parentName:"p"},"border")," CSS selector, as it's only used as a visual aid.\nRemove the following line from each component style sheet:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-css",metastring:'title="Display.module.css | MetaMaskError.module.css | Navigation.module.css"',title:'"Display.module.css',"|":!0,"MetaMaskError.module.css":!0,'Navigation.module.css"':!0},"// border: 1px solid rgb(...);\n")),(0,o.yg)("h4",{id:"styling"},"Styling"),(0,o.yg)("p",null,"This dapp has Vite's typical ",(0,o.yg)("inlineCode",{parentName:"p"},"App.css")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"index.css")," files removed, and uses a modular approach to CSS."),(0,o.yg)("p",null,"In the ",(0,o.yg)("inlineCode",{parentName:"p"},"/src")," directory, ",(0,o.yg)("inlineCode",{parentName:"p"},"App.global.css")," contains styles for the entire dapp (not specific to a\nsingle component), and styles you might want to reuse (such as buttons)."),(0,o.yg)("p",null,"In the ",(0,o.yg)("inlineCode",{parentName:"p"},"/src")," directory, ",(0,o.yg)("inlineCode",{parentName:"p"},"App.module.css")," contains styles specific to ",(0,o.yg)("inlineCode",{parentName:"p"},"App.tsx"),", your dapp's\ncontainer component.\nIt uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"appContainer")," class, which sets up a\n",(0,o.yg)("a",{parentName:"p",href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox"},"Flexbox")," to define the ",(0,o.yg)("inlineCode",{parentName:"p"},"display")," type\n(",(0,o.yg)("inlineCode",{parentName:"p"},"flex"),") and the ",(0,o.yg)("inlineCode",{parentName:"p"},"flex-direction")," (",(0,o.yg)("inlineCode",{parentName:"p"},"column"),")."),(0,o.yg)("p",null,"Using Flexbox here ensures that any child ",(0,o.yg)("inlineCode",{parentName:"p"},"div"),"s are laid out in a single-column layout (vertically)."),(0,o.yg)("p",null,"Finally, the ",(0,o.yg)("inlineCode",{parentName:"p"},"/src/components")," directory has subdirectories for ",(0,o.yg)("inlineCode",{parentName:"p"},"Display"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigation"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"MetaMaskError"),".\nEach subdirectory contains a corresponding component file and CSS file.\nEach component is a\n",(0,o.yg)("a",{parentName:"p",href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-basics-and-terminology"},"flex-items"),"\nwithin a\n",(0,o.yg)("a",{parentName:"p",href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-properties"},"flex-container"),",\nstacked in a vertical column with the navigation and footer (",(0,o.yg)("inlineCode",{parentName:"p"},"MetaMaskError"),") being of fixed height\nand the middle component (",(0,o.yg)("inlineCode",{parentName:"p"},"Display"),") taking up the remaining vertical space."),(0,o.yg)("h4",{id:"optional-linting-with-eslint"},"Optional: Linting with ESLint"),(0,o.yg)("p",null,"This dapp uses a standard ESLint configuration to keep the code consistent.\nThere are two ways to use ESLint:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Run ",(0,o.yg)("inlineCode",{parentName:"p"},"npm run lint")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"npm run lint:fix")," from the command line.\nThe former displays all the linting errors, and the latter updates your code to fix linting\nerrors where possible.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Set up your IDE to show linting errors and automatically fix them on save.\nFor example, in VS Code, you can create or update the file at ",(0,o.yg)("inlineCode",{parentName:"p"},".vscode/settings.json")," in the\nroot of the project with the following settings:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="settings.json"',title:'"settings.json"'},'{\n    "eslint.format.enable": true,\n    "eslint.packageManager": "npm",\n    "editor.codeActionsOnSave": {\n        "source.fixAll.eslint": true\n    },\n    "eslint.codeActionsOnSave.mode": "all"\n}\n')))),(0,o.yg)("h4",{id:"project-structure"},"Project structure"),(0,o.yg)("p",null,"The following is a tree representation of the dapp's ",(0,o.yg)("inlineCode",{parentName:"p"},"/src")," directory:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 assets\n\u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u2514\u2500\u2500 Display\n\u2502   \u2502   |   \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   |   \u2514\u2500\u2500 Display.module.css\n\u2502   \u2502   |   \u2514\u2500\u2500 Display.tsx\n\u2502   \u2502   \u251c\u2500\u2500 MetaMaskError\n\u2502   \u2502   |   \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   |   \u2514\u2500\u2500 MetaMaskError.module.css\n\u2502   \u2502   |   \u2514\u2500\u2500 MetaMaskError.tsx\n\u2502   \u2502   \u251c\u2500\u2500\u2500 Navigation\n\u2502   \u2502   |   \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   |   \u2514\u2500\u2500 Navigation.module.css\n\u2502   \u2502   |   \u2514\u2500\u2500 Navigation.tsx\n\u2502   \u251c\u2500\u2500 hooks\n\u2502   \u2502   \u251c\u2500\u2500 useMetaMask.tsx\n\u2502   \u251c\u2500\u2500 utils\n\u2502   \u2502   \u2514\u2500\u2500 index.tsx\n\u251c\u2500\u2500 App.global.css\n\u251c\u2500\u2500 App.module.css\n\u251c\u2500\u2500 App.tsx\n\u251c\u2500\u2500 main.tsx\n\u251c\u2500\u2500 vite-env.d.ts\n")),(0,o.yg)("p",null,"Instead of a single component, there's a ",(0,o.yg)("inlineCode",{parentName:"p"},"src/components")," directory with UI and functionality\ndistributed into multiple components.\nYou'll modify the dapp's state in this directory and make it available to the rest of the dapp using\na ",(0,o.yg)("a",{parentName:"p",href:"https://react.dev/reference/react/useContext"},"context provider"),".\nThis provider will sit in the ",(0,o.yg)("inlineCode",{parentName:"p"},"src/App.tsx")," file and wrap the three child components."),(0,o.yg)("p",null,"The child components will have access to the global state and the functions that modify the global state.\nThis ensures that any change to the ",(0,o.yg)("inlineCode",{parentName:"p"},"wallet")," (",(0,o.yg)("inlineCode",{parentName:"p"},"address"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"balance"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"chainId"),"), or the global\nstate's properties and functions (",(0,o.yg)("inlineCode",{parentName:"p"},"hasProvider"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"error"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"errorMessage"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"isConnecting"),") will\nbe accessible by re-rendering those child components."),(0,o.yg)("p",null,"The following graphic shows how the context provider wraps its child components, providing access to\nthe state modifier functions and the actual state itself.\nSince React uses a one-way data flow, any change to the data gets re-rendered in those components automatically."),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(96903).A,width:"1516",height:"1280"})),(0,o.yg)("h3",{id:"2-build-the-context-provider"},"2. Build the context provider"),(0,o.yg)("p",null,"In this step, you'll create a context called ",(0,o.yg)("inlineCode",{parentName:"p"},"MetaMaskContext")," and a provider component called\n",(0,o.yg)("inlineCode",{parentName:"p"},"MetaMaskContextProvider")," in the ",(0,o.yg)("inlineCode",{parentName:"p"},"/src/hooks/useMetaMask.tsx")," file."),(0,o.yg)("p",null,"This provider component will use similar ",(0,o.yg)("inlineCode",{parentName:"p"},"useState")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," hooks with some changes from\nthe previous tutorial's local state component to make it more DRY (don't repeat yourself)."),(0,o.yg)("p",null,"It will also have similar ",(0,o.yg)("inlineCode",{parentName:"p"},"updateWallet"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"connectMetaMask"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"clearError")," functions, all of\nwhich do their part to connect to MetaMask or update the MetaMask state."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"MetaMaskContext")," will return a ",(0,o.yg)("inlineCode",{parentName:"p"},"MetaMaskContext.Provider"),", which takes a value of type\n",(0,o.yg)("inlineCode",{parentName:"p"},"MetaMaskContextData"),", and supplies that to its children."),(0,o.yg)("p",null,"You'll export a React hook called ",(0,o.yg)("inlineCode",{parentName:"p"},"useMetaMask"),", which uses your ",(0,o.yg)("inlineCode",{parentName:"p"},"MetaMaskContext"),"."),(0,o.yg)("p",null,"Update ",(0,o.yg)("inlineCode",{parentName:"p"},"/src/hooks/useMetaMask.tsx")," with the following:"),(0,o.yg)("admonition",{title:"Read the comments",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"The following code contains comments describing advanced React patterns and how MetaMask state is managed.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="useMetaMask.tsx"',title:'"useMetaMask.tsx"'},'/* eslint-disable @typescript-eslint/no-explicit-any */\nimport {\n    useState,\n    useEffect,\n    createContext,\n    PropsWithChildren,\n    useContext,\n    useCallback,\n} from "react";\n\nimport detectEthereumProvider from "@metamask/detect-provider";\nimport { formatBalance } from "~/utils";\n\ninterface WalletState {\n    accounts: any[];\n    balance: string;\n    chainId: string;\n}\n\ninterface MetaMaskContextData {\n    wallet: WalletState;\n    hasProvider: boolean | null;\n    error: boolean;\n    errorMessage: string;\n    isConnecting: boolean;\n    connectMetaMask: () => void;\n    clearError: () => void;\n}\n\nconst disconnectedState: WalletState = {\n    accounts: [],\n    balance: "",\n    chainId: "",\n};\n\nconst MetaMaskContext = createContext<MetaMaskContextData>(\n    {} as MetaMaskContextData\n);\n\nexport const MetaMaskContextProvider = ({ children }: PropsWithChildren) => {\n    const [hasProvider, setHasProvider] = useState<boolean | null>(null);\n\n    const [isConnecting, setIsConnecting] = useState(false);\n\n    const [errorMessage, setErrorMessage] = useState("");\n    const clearError = () => setErrorMessage("");\n\n    const [wallet, setWallet] = useState(disconnectedState);\n    // useCallback ensures that you don\'t uselessly recreate the _updateWallet function on every render\n    const _updateWallet = useCallback(async (providedAccounts?: any) => {\n        const accounts =\n            providedAccounts ||\n            (await window.ethereum.request({ method: "eth_accounts" }));\n\n        if (accounts.length === 0) {\n            // If there are no accounts, then the user is disconnected\n            setWallet(disconnectedState);\n            return;\n        }\n\n        const balance = formatBalance(\n            await window.ethereum.request({\n                method: "eth_getBalance",\n                params: [accounts[0], "latest"],\n            })\n        );\n        const chainId = await window.ethereum.request({\n            method: "eth_chainId",\n        });\n\n        setWallet({ accounts, balance, chainId });\n    }, []);\n\n    const updateWalletAndAccounts = useCallback(\n        () => _updateWallet(),\n        [_updateWallet]\n    );\n    const updateWallet = useCallback(\n        (accounts: any) => _updateWallet(accounts),\n        [_updateWallet]\n    );\n\n    /**\n     * This logic checks if MetaMask is installed. If it is, some event handlers are set up\n     * to update the wallet state when MetaMask changes. The function returned by useEffect\n     * is used as a "cleanup": it removes the event handlers whenever the MetaMaskProvider\n     * is unmounted.\n     */\n    useEffect(() => {\n        const getProvider = async () => {\n            const provider = await detectEthereumProvider({ silent: true });\n            setHasProvider(Boolean(provider));\n\n            if (provider) {\n                updateWalletAndAccounts();\n                window.ethereum.on("accountsChanged", updateWallet);\n                window.ethereum.on("chainChanged", updateWalletAndAccounts);\n            }\n        };\n\n        getProvider();\n\n        return () => {\n            window.ethereum?.removeListener("accountsChanged", updateWallet);\n            window.ethereum?.removeListener(\n                "chainChanged",\n                updateWalletAndAccounts\n            );\n        };\n    }, [updateWallet, updateWalletAndAccounts]);\n\n    const connectMetaMask = async () => {\n        setIsConnecting(true);\n\n        try {\n            const accounts = await window.ethereum.request({\n                method: "eth_requestAccounts",\n            });\n            clearError();\n            updateWallet(accounts);\n        } catch (err: any) {\n            setErrorMessage(err.message);\n        }\n        setIsConnecting(false);\n    };\n\n    return (\n        <MetaMaskContext.Provider\n            value={{\n                wallet,\n                hasProvider,\n                error: !!errorMessage,\n                errorMessage,\n                isConnecting,\n                connectMetaMask,\n                clearError,\n            }}\n        >\n            {children}\n        </MetaMaskContext.Provider>\n    );\n};\n\nexport const useMetaMask = () => {\n    const context = useContext(MetaMaskContext);\n    if (context === undefined) {\n        throw new Error(\n            "useMetaMask must be used within a MetaMaskContextProvider"\n        );\n    }\n    return context;\n};\n')),(0,o.yg)("p",null,"With this context provider in place, you can update ",(0,o.yg)("inlineCode",{parentName:"p"},"/src/App.tsx")," to include the provider and wrap\nit around the three components."),(0,o.yg)("p",null,"Notice the use of ",(0,o.yg)("inlineCode",{parentName:"p"},"~/utils")," to import the utility functions."),(0,o.yg)("admonition",{title:"vite-tsconfig-paths",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"This dapp is configured to use ",(0,o.yg)("inlineCode",{parentName:"p"},"vite-tsconfig-paths"),", allowing it to load modules with locations\nspecified by the ",(0,o.yg)("inlineCode",{parentName:"p"},"compilerOptions.paths")," object in ",(0,o.yg)("inlineCode",{parentName:"p"},"tsconfig.json"),".\nThe path corresponding to the ",(0,o.yg)("inlineCode",{parentName:"p"},"./src/*")," directory is represented by the ",(0,o.yg)("inlineCode",{parentName:"p"},"~/*")," symbol.\nThere's also a reference to ",(0,o.yg)("inlineCode",{parentName:"p"},"./tsconfig.node.json")," in the ",(0,o.yg)("inlineCode",{parentName:"p"},"reference"),"'s array objects that correspond\nto ",(0,o.yg)("inlineCode",{parentName:"p"},"path"),"."),(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("inlineCode",{parentName:"p"},"vite.config.ts")," imports ",(0,o.yg)("inlineCode",{parentName:"p"},"tsconfigPaths")," from ",(0,o.yg)("inlineCode",{parentName:"p"},"vite-tsconfig-paths")," and adds it to the ",(0,o.yg)("inlineCode",{parentName:"p"},"plugins")," array."),(0,o.yg)("p",{parentName:"admonition"},"See more information about ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/aleclarson/vite-tsconfig-paths"},(0,o.yg)("inlineCode",{parentName:"a"},"vite-tsconfig-paths")),".")),(0,o.yg)("h3",{id:"3-wrap-components-with-the-context-provider"},"3. Wrap components with the context provider"),(0,o.yg)("p",null,"In this step, you'll import the ",(0,o.yg)("inlineCode",{parentName:"p"},"MetaMaskContextProvider")," in ",(0,o.yg)("inlineCode",{parentName:"p"},"/src/App.tsx")," and wrap that component\naround the existing ",(0,o.yg)("inlineCode",{parentName:"p"},"Display"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigation"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"MetaMaskError")," components."),(0,o.yg)("p",null,"Update ",(0,o.yg)("inlineCode",{parentName:"p"},"/src/App.tsx")," to the following:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import "./App.global.css";\nimport styles from "./App.module.css";\n\nimport { Navigation } from "./components/Navigation";\nimport { Display } from "./components/Display";\nimport { MetaMaskError } from "./components/MetaMaskError";\nimport { MetaMaskContextProvider } from "./hooks/useMetaMask";\n\nexport const App = () => {\n    return (\n        <MetaMaskContextProvider>\n            <div className={styles.appContainer}>\n                <Navigation />\n                <Display />\n                <MetaMaskError />\n            </div>\n        </MetaMaskContextProvider>\n    );\n};\n')),(0,o.yg)("p",null,"With ",(0,o.yg)("inlineCode",{parentName:"p"},"App.tsx")," updated, you can update the ",(0,o.yg)("inlineCode",{parentName:"p"},"Display"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigation"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"MetaMaskError")," components,\neach of which will use the ",(0,o.yg)("inlineCode",{parentName:"p"},"useMetaMask")," hook to display the state or invoke functions that modify state."),(0,o.yg)("h3",{id:"4-connect-to-metamask-in-the-navigation"},"4. Connect to MetaMask in the navigation"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigation")," component will connect to MetaMask using conditional rendering to show an\n",(0,o.yg)("strong",{parentName:"p"},"Install MetaMask")," or ",(0,o.yg)("strong",{parentName:"p"},"Connect MetaMask")," button or, once connected, display your wallet address\nin a hypertext link that connects to ",(0,o.yg)("a",{parentName:"p",href:"https://etherscan.io"},"Etherscan"),"."),(0,o.yg)("p",null,"Update ",(0,o.yg)("inlineCode",{parentName:"p"},"/src/components/Navigation/Navigation.tsx")," to the following:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Navigation.tsx"',title:'"Navigation.tsx"'},'import { useMetaMask } from "~/hooks/useMetaMask";\nimport { formatAddress } from "~/utils";\nimport styles from "./Navigation.module.css";\n\nexport const Navigation = () => {\n    const { wallet, hasProvider, isConnecting, connectMetaMask } =\n        useMetaMask();\n\n    return (\n        <div className={styles.navigation}>\n            <div className={styles.flexContainer}>\n                <div className={styles.leftNav}>Vite + React & MetaMask</div>\n                <div className={styles.rightNav}>\n                    {!hasProvider && (\n                        <a href="https://metamask.io" target="_blank">\n                            Install MetaMask\n                        </a>\n                    )}\n                    {window.ethereum?.isMetaMask &&\n                        wallet.accounts.length < 1 && (\n                            <button\n                                disabled={isConnecting}\n                                onClick={connectMetaMask}\n                            >\n                                Connect MetaMask\n                            </button>\n                        )}\n                    {hasProvider && wallet.accounts.length > 0 && (\n                        <a\n                            className="text_link tooltip-bottom"\n                            href={`https://etherscan.io/address/${wallet.accounts[0]}`}\n                            target="_blank"\n                            data-tooltip="Open in Block Explorer"\n                        >\n                            {formatAddress(wallet.accounts[0])}\n                        </a>\n                    )}\n                </div>\n            </div>\n        </div>\n    );\n};\n')),(0,o.yg)("p",null,"Notice how ",(0,o.yg)("inlineCode",{parentName:"p"},"useMetaMask")," de-structures its return value to get the items within ",(0,o.yg)("inlineCode",{parentName:"p"},"MetaMaskContextData"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask();\n")),(0,o.yg)("p",null,"Also, the ",(0,o.yg)("inlineCode",{parentName:"p"},"formatAddress")," function formats the wallet address for display purposes:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"{\n    formatAddress(wallet.accounts[0]);\n}\n")),(0,o.yg)("p",null,"This function doesn't exist in the ",(0,o.yg)("inlineCode",{parentName:"p"},"@utils")," file yet, so you'll need to add it.\nUpdate ",(0,o.yg)("inlineCode",{parentName:"p"},"/src/utils/index.tsx")," to the following:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="utils/index.ts"',title:'"utils/index.ts"'},"export const formatBalance = (rawBalance: string) => {\n    const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);\n    return balance;\n};\n\nexport const formatChainAsNum = (chainIdHex: string) => {\n    const chainIdNum = parseInt(chainIdHex);\n    return chainIdNum;\n};\n\nexport const formatAddress = (addr: string) => {\n    return `${addr.substring(0, 8)}...`;\n};\n")),(0,o.yg)("p",null,"This should address any build errors in your ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigation")," component."),(0,o.yg)("p",null,"Other than using the new styling, the only thing this dapp has done differently than the local-state\ntutorial is display the user's ",(0,o.yg)("inlineCode",{parentName:"p"},"address")," formatted inside a link once they're connected.\nNow that you have a place for connecting and showing the address, you could build out an entire\nprofile component (side quest)."),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(44414).A,width:"1516",height:"1280"})),(0,o.yg)("h3",{id:"5-display-metamask-data"},"5. Display MetaMask data"),(0,o.yg)("p",null,"In the ",(0,o.yg)("inlineCode",{parentName:"p"},"Display")," component, you won't call any functions that modify state; you'll read from\n",(0,o.yg)("inlineCode",{parentName:"p"},"MetaMaskData"),", a simple update."),(0,o.yg)("p",null,"Update ",(0,o.yg)("inlineCode",{parentName:"p"},"/src/components/Display/Display.tsx")," to the following:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Display.tsx"',title:'"Display.tsx"'},'import { useMetaMask } from "~/hooks/useMetaMask";\nimport { formatChainAsNum } from "~/utils";\nimport styles from "./Display.module.css";\n\nexport const Display = () => {\n    const { wallet } = useMetaMask();\n\n    return (\n        <div className={styles.display}>\n            {wallet.accounts.length > 0 && (\n                <>\n                    <div>Wallet Accounts: {wallet.accounts[0]}</div>\n                    <div>Wallet Balance: {wallet.balance}</div>\n                    <div>Hex ChainId: {wallet.chainId}</div>\n                    <div>\n                        Numeric ChainId: {formatChainAsNum(wallet.chainId)}\n                    </div>\n                </>\n            )}\n        </div>\n    );\n};\n')),(0,o.yg)("p",null,"Notice how ",(0,o.yg)("inlineCode",{parentName:"p"},"useMetaMask")," de-structures its return value to get only the ",(0,o.yg)("inlineCode",{parentName:"p"},"wallet")," data:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"const { wallet } = useMetaMask();\n")),(0,o.yg)("p",null,"At this point, you can display ",(0,o.yg)("inlineCode",{parentName:"p"},"account"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"balance"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"chainId")," in the ",(0,o.yg)("inlineCode",{parentName:"p"},"Display")," component:"),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(27505).A,width:"1516",height:"1280"})),(0,o.yg)("h3",{id:"6-show-metamask-errors-in-the-footer"},"6. Show MetaMask errors in the footer"),(0,o.yg)("p",null,"If MetaMask errors or the user rejects a connection, you can display that error in the footer, or\n",(0,o.yg)("inlineCode",{parentName:"p"},"MetaMaskError")," component."),(0,o.yg)("p",null,"Update ",(0,o.yg)("inlineCode",{parentName:"p"},"/src/components/MetaMaskError/MetaMaskError.tsx")," to the following:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="MetaMaskError.tsx"',title:'"MetaMaskError.tsx"'},'import { useMetaMask } from "~/hooks/useMetaMask";\nimport styles from "./MetaMaskError.module.css";\n\nexport const MetaMaskError = () => {\n    const { error, errorMessage, clearError } = useMetaMask();\n    return (\n        <div\n            className={styles.metaMaskError}\n            style={error ? { backgroundColor: "brown" } : {}}\n        >\n            {error && (\n                <div onClick={clearError}>\n                    <strong>Error:</strong> {errorMessage}\n                </div>\n            )}\n        </div>\n    );\n};\n')),(0,o.yg)("p",null,"Notice how ",(0,o.yg)("inlineCode",{parentName:"p"},"useMetaMask")," de-structures its return value to get only the ",(0,o.yg)("inlineCode",{parentName:"p"},"error"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"errorMessage"),", and\n",(0,o.yg)("inlineCode",{parentName:"p"},"clearError")," data:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"const { error, errorMessage, clearError } = useMetaMask();\n")),(0,o.yg)("p",null,"When you generate an error by cancelling the connection to MetaMask, this shows up in the footer.\nThe background temporarily turns a dark red color:"),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(17288).A,width:"1516",height:"1280"})),(0,o.yg)("p",null,"In this tutorial's dapp, you can dismiss any MetaMask error displayed in the footer by selecting it.\nIn a real-world dapp, the best UI/UX for error dismissing would be a component that displays in a\nmodal or overlay and provides an obvious dismiss button."),(0,o.yg)("h2",{id:"conclusion"},"Conclusion"),(0,o.yg)("p",null,"You've successfully converted a single component dapp with local state to a multiple component dapp\nwith global state, using React context and provider.\nYou can modify the dapp's global state using functions and data that, when used anywhere in the dapp,\nwill show up-to-date data associated with your MetaMask wallet."),(0,o.yg)("p",null,"You can see the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/react-dapp-tutorial/tree/global-state-final"},"source code"),"\nfor the final state of this dapp tutorial."))}u.isMDXComponent=!0},94252:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/pt2-01-3c2f19aa1cdbeb15eab76717dc49ce0c.png"},96903:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/pt2-02-1cc67378fe36943534741cd4f8b131bd.png"},44414:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/pt2-03-e8b080de2656acae1f64606002a6efa7.png"},27505:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/pt2-04-5acbfcc3f3ba213bae6a9b341522eb9b.png"},17288:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/pt2-05-d0ee9f90adc6b7d693bf11ff700196fe.png"}}]);