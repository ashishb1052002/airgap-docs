"use strict";(self.webpackChunkairgap_docs=self.webpackChunkairgap_docs||[]).push([[309],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),p=a,v=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return t?r.createElement(v,o(o({ref:n},u),{},{components:t})):r.createElement(v,o({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7783:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(7294),a="tableOfContentsInline_gwOO",i=t(5002);var o=function(e){var n=e.toc,t=e.minHeadingLevel,o=e.maxHeadingLevel;return r.createElement("div",{className:a},r.createElement(i.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null}))}},5002:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7462),a=t(3366),i=t(7294),o=t(9548),l=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var n=e.toc,t=e.className,r=e.linkClassName,a=e.isChild;return n.length?i.createElement("ul",{className:a?void 0:t},n.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(s,{isChild:!0,toc:e.children,className:t,linkClassName:r}))}))):null}function c(e){var n=e.toc,t=e.className,c=void 0===t?"table-of-contents table-of-contents__left-border":t,u=e.linkClassName,m=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,p=void 0===d?void 0:d,v=e.minHeadingLevel,f=e.maxHeadingLevel,y=(0,a.Z)(e,l),h=(0,o.LU)(),g=null!=v?v:h.tableOfContents.minHeadingLevel,k=null!=f?f:h.tableOfContents.maxHeadingLevel,b=(0,o.DA)({toc:n,minHeadingLevel:g,maxHeadingLevel:k}),N=(0,i.useMemo)((function(){if(m&&p)return{linkClassName:m,linkActiveClassName:p,minHeadingLevel:g,maxHeadingLevel:k}}),[m,p,g,k]);return(0,o.Si)(N),i.createElement(s,(0,r.Z)({toc:b,className:c,linkClassName:m},y))}},2524:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=t(7783),l=["components"],s={title:"Glossary"},c=void 0,u={unversionedId:"glossary",id:"glossary",title:"Glossary",description:"Terms",source:"@site/docs/glossary.mdx",sourceDirName:".",slug:"/glossary",permalink:"/glossary",editUrl:"https://github.com/airgap-it/airgap-docs/edit/main/src/docs/glossary.mdx",tags:[],version:"current",frontMatter:{title:"Glossary"},sidebar:"docs",previous:{title:"FAQ",permalink:"/FAQ"},next:{title:"AirGap Vault Changelog",permalink:"/CHANGELOG-VAULT"}},m=[{value:"Terms",id:"terms",children:[{value:"UTXO",id:"utxo",children:[],level:3},{value:"Private Key",id:"private-key",children:[],level:3},{value:"Secret",id:"secret",children:[],level:3},{value:"Mnemonic",id:"mnemonic",children:[],level:3},{value:"Seed Phrase",id:"seed-phrase",children:[],level:3}],level:2}],d={toc:m};function p(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{toc:m,mdxType:"TOCInline"}),(0,i.kt)("h2",{id:"terms"},"Terms"),(0,i.kt)("h3",{id:"utxo"},"UTXO"),(0,i.kt)("p",null,"Unspent Transaction Output"),(0,i.kt)("h3",{id:"private-key"},"Private Key"),(0,i.kt)("p",null,"Usually, people refer to the ",(0,i.kt)("a",{parentName:"p",href:"#secret"},"Secret")," or ",(0,i.kt)("a",{parentName:"p",href:"#mnemonic"},"Mnemonic")," when they use the term private key."),(0,i.kt)("p",null,"Technically, a private key is derived from a mnemonic and is not the same as a mnemonic/seed phrase. In AirGap, we never display the raw private key, only the mnemonic."),(0,i.kt)("h3",{id:"secret"},"Secret"),(0,i.kt)("p",null,"The 24 words that are generated during setup. Those 24 words are everything you need to recover your accounts in case you lose your Vault."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Backup")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure you ALWAYS have at least one paper backup of your 24 words. If you lose your 24 words, you will lose all your funds. Nobody, including AirGap Support, will be able to help you if you don't have your 24 words."))),(0,i.kt)("h3",{id:"mnemonic"},"Mnemonic"),(0,i.kt)("p",null,"A human readable representation of entropy that is used to generate accounts. Mnemonics are usually 12 or 24 words long."),(0,i.kt)("p",null,"In AirGap, we refer to this as ",(0,i.kt)("a",{parentName:"p",href:"#secret"},"Secret")),(0,i.kt)("h3",{id:"seed-phrase"},"Seed Phrase"),(0,i.kt)("p",null,"Same as ",(0,i.kt)("a",{parentName:"p",href:"#mnemonic"},"Mnemonic")))}p.isMDXComponent=!0}}]);