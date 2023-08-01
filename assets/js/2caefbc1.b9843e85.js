"use strict";(self.webpackChunkairgap_docs=self.webpackChunkairgap_docs||[]).push([[2146],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),h=c(r),d=a,m=h["".concat(l,".").concat(d)]||h[d]||s[d]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9633:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],u={title:"Ethereum Introduction",slug:"/currencies/ethereum/introduction",sidebar_label:"Introduction"},l=void 0,c={unversionedId:"currencies/ethereum/introduction",id:"currencies/ethereum/introduction",title:"Ethereum Introduction",description:"Introduction to Ethereum",source:"@site/docs/currencies/ethereum/introduction.mdx",sourceDirName:"currencies/ethereum",slug:"/currencies/ethereum/introduction",permalink:"/currencies/ethereum/introduction",editUrl:"https://github.com/airgap-it/airgap-docs/edit/main/src/docs/currencies/ethereum/introduction.mdx",tags:[],version:"current",frontMatter:{title:"Ethereum Introduction",slug:"/currencies/ethereum/introduction",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Wallet Compatibility",permalink:"/currencies/bitcoin/wallet-compatibility"},next:{title:"Wallet Compatibility",permalink:"/currencies/ethereum/wallet-compatibility"}},p=[{value:"Introduction to Ethereum",id:"introduction-to-ethereum",children:[{value:"AirGap Ethereum Wallet",id:"airgap-ethereum-wallet",children:[],level:3},{value:"How to set up a ETH Wallet in AirGap",id:"how-to-set-up-a-eth-wallet-in-airgap",children:[],level:3},{value:"FAQs",id:"faqs",children:[],level:3}],level:2}],s={toc:p};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction-to-ethereum"},"Introduction to Ethereum"),(0,i.kt)("p",null,"Ethereum goes beyond peer-to-peer payment. It is a global, open-source environment for decentralized applications."),(0,i.kt)("p",null,"Founded by Vitalik Buterin in 2015, Ethereum is the world's leading programmable blockchain.\nEther is the native currency of Ethereum (ETH). Many of the properties of ETH are similar to those of Bitcoin. It is entirely digital and can be instantly sent to anyone, anywhere in the world. ",(0,i.kt)("a",{parentName:"p",href:"https://ethereum.org/"},"Learn more"),"."),(0,i.kt)("h3",{id:"airgap-ethereum-wallet"},"AirGap Ethereum Wallet"),(0,i.kt)("p",null,"AirGap Ethereum Wallet is a convenient way to store and transfer ETH and ERC20 tokens while storing your private key offline. The wallet also allows you to interact with ERC20 tokens and other smart contracts. You can securely interact with the decentralized applications built on Ethereum using our WalletConnect functionality or by connecting AirGap Vault to MetaMask."),(0,i.kt)("h3",{id:"how-to-set-up-a-eth-wallet-in-airgap"},"How to set up a ETH Wallet in AirGap"),(0,i.kt)("p",null,"This guide uses XTZ as an example, but the same steps can set up Ethereum in AirGap.\n",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/airgap-it/airgap-the-step-by-step-guide-c4c3d3fe9a05"},"Step by step guide on how to set up all available protocols in AirGap")),(0,i.kt)("h3",{id:"faqs"},"FAQs"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://support.airgap.it/FAQ#erc20-ethereum"},"What ERC20 tokens are supported within AirGap")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://support.airgap.it/FAQ#what-actions-to-take-if-eth-transactions-have-been-dropped-and-replaced-and-it-is-under-a-pending-state-in-the-wallet"},"What actions to take if eth transactions have been dropped and replaced and it is under a pending state in the wallet?")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://support.airgap.it/FAQ#is-it-possible-to-store-any-erc20-token-with-airgap"},"Is it possible to store any erc20 token with AirGap?")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://support.airgap.it/FAQ#there-are-significantly-more-coins-available-in-the-wallet-than-in-the-vault-so-does-that-mean-the-coins-that-arent-cant-be-placed-in-the-vault-are-less-safe"},"Why can I see my ERC20 token in the wallet and not the vault")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://support.airgap.it/troubleshooting/currencies/ethereum/transaction-stuck"},"My Ethereum transaction is stuck")))}h.isMDXComponent=!0}}]);