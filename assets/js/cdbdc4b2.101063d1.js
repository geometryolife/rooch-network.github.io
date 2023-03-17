"use strict";(self.webpackChunkrooch_network=self.webpackChunkrooch_network||[]).push([[8308],{4137:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},h=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=s(o),m=n,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return o?r.createElement(d,l(l({ref:t},h),{},{components:o})):r.createElement(d,l({ref:t},h))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<a;s++)l[s]=o[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4467:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=o(3117),n=(o(7294),o(4137));const a={},l="Technology Overview",c={unversionedId:"technology/index",id:"technology/index",title:"Technology Overview",description:'The previous chapter gave the reader an overview of what Rooch is and what it does. This section is to answer the question "How Rooch work?".',source:"@site/docs/04-technology/index.md",sourceDirName:"04-technology",slug:"/technology/",permalink:"/docs/technology/",draft:!1,editUrl:"https://github.com/rooch-network/rooch-network.github.io/edit/main/docs/04-technology/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Layer2 projects Overview",permalink:"/docs/layer2-overview"},next:{title:"Modular Architecture",permalink:"/docs/technology/modular-blockchain-architecture/"}},i={},s=[{value:"Multi-chain settlement Execution layer",id:"multi-chain-settlement-execution-layer",level:2},{value:"Decentralization and Security",id:"decentralization-and-security",level:2},{value:"Scaling for Layer1",id:"scaling-for-layer1",level:2},{value:"Move on Rooch",id:"move-on-rooch",level:2},{value:"State channels",id:"state-channels",level:2}],h={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"technology-overview"},"Technology Overview"),(0,n.kt)("p",null,'The previous chapter gave the reader an overview of what Rooch is and what it does. This section is to answer the question "How Rooch work?".'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"overview",src:o(6091).Z,width:"531",height:"366"})),(0,n.kt)("h2",{id:"multi-chain-settlement-execution-layer"},"Multi-chain settlement Execution layer"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/technology/modular-blockchain-architecture/"},"modular blockchain architecture"),": What is the role of Rooch as an execution layer in the modular blockchain, how it interacts with other modular layers, and the design of the technology options between different modular layers."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/technology/modular-blockchain-architecture/multi-chain-settlement-protocol"},"Multi-chain settlement protocol"),": Multi-chain settlement as a key feature of Rooch, how its settlement protocol works, and the difference between multi-chain settlement protocol and cross-chain.")),(0,n.kt)("h2",{id:"decentralization-and-security"},"Decentralization and Security"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/technology/fraud-proofs"},"fraud-proofs")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/technology/transaction-accumulator-proofs"},"Transaction Accumulator Proofs")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/technology/decentralized-validator-network"},"decentralized-validator-network"))),(0,n.kt)("h2",{id:"scaling-for-layer1"},"Scaling for Layer1"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/technology/parallel-transaction-execution"},"parallel-transaction-execution")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/technology/state-scaling"},"state scaling"))),(0,n.kt)("h2",{id:"move-on-rooch"},"Move on Rooch"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/technology/move-on-rooch/"},"Why Move?")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/technology/move-on-rooch/cross-layer-interoperability"},"CrossLayer Interoperability")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/technology/move-on-rooch/account-abstraction"},"Account Abstraction")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/technology/move-on-rooch/rooch-framework"},"Rooch Move Framework")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/technology/move-on-rooch/moveos"},"MoveOS"))),(0,n.kt)("h2",{id:"state-channels"},"State channels"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/technology/state-channel/"},"State channel on P2P network")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/technology/state-channel/streaming-payment"},"Streaming payments")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/technology/state-channel/channel-contract"},"Smart Contract on State Channel"))))}u.isMDXComponent=!0},6091:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/rooch-overview-a9478b41e9b716eab25189b6a22d0286.svg"}}]);