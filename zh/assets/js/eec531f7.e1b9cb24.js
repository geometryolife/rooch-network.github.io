"use strict";(self.webpackChunkrooch_network=self.webpackChunkrooch_network||[]).push([[8496],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),u=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=u(r),m=n,d=h["".concat(i,".").concat(m)]||h[m]||s[m]||a;return r?o.createElement(d,l(l({ref:t},p),{},{components:r})):o.createElement(d,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var u=2;u<a;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7455:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=r(3117),n=(r(7294),r(4137));const a={},l="\u6a21\u5757\u5316\u67b6\u6784",c={unversionedId:"technology/modular-blockchain-architecture/index",id:"technology/modular-blockchain-architecture/index",title:"\u6a21\u5757\u5316\u67b6\u6784",description:"\u4e3a\u4ec0\u4e48\u662f\u6a21\u5757\u5316\u67b6\u6784\uff1f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-technology/01-modular-blockchain-architecture/index.md",sourceDirName:"04-technology/01-modular-blockchain-architecture",slug:"/technology/modular-blockchain-architecture/",permalink:"/zh/docs/technology/modular-blockchain-architecture/",draft:!1,editUrl:"https://github.com/rooch-network/rooch-network.github.io/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/04-technology/01-modular-blockchain-architecture/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6280\u672f\u67b6\u6784\u6982\u89c8",permalink:"/zh/docs/technology/"},next:{title:"\u591a\u94fe\u7ed3\u7b97\u534f\u8bae",permalink:"/zh/docs/technology/modular-blockchain-architecture/multi-chain-settlement-protocol"}},i={},u=[{value:"\u4e3a\u4ec0\u4e48\u662f\u6a21\u5757\u5316\u67b6\u6784\uff1f",id:"\u4e3a\u4ec0\u4e48\u662f\u6a21\u5757\u5316\u67b6\u6784",level:2},{value:"Rooch \u7684\u6a21\u5757\u5316\u5206\u5c42",id:"rooch-\u7684\u6a21\u5757\u5316\u5206\u5c42",level:2},{value:"\u6a21\u5757\u5316\u7ec4\u5408\u65b9\u5f0f",id:"\u6a21\u5757\u5316\u7ec4\u5408\u65b9\u5f0f",level:2}],p={toc:u};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u6a21\u5757\u5316\u67b6\u6784"},"\u6a21\u5757\u5316\u67b6\u6784"),(0,n.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u662f\u6a21\u5757\u5316\u67b6\u6784"},"\u4e3a\u4ec0\u4e48\u662f\u6a21\u5757\u5316\u67b6\u6784\uff1f"),(0,n.kt)("p",null,"\u6a21\u5757\u5316\u67b6\u6784\u662f Layer2 Rollup \u65b9\u6848\u7684\u81ea\u7136\u6f14\u8fdb\u7ed3\u679c\u3002"),(0,n.kt)("p",null,"\u901a\u8fc7 Layer2 Rollup \u7684\u5c1d\u8bd5\uff0c\u6211\u4eec\u5c06\u4ea4\u6613\u7684\u6267\u884c\u4ece Layer1 \u8fc1\u79fb\u5230 Layer2\uff0cLayer1 \u4e0a\u53ea\u8bb0\u5f55\u4ea4\u6613\uff0c\u4fdd\u8bc1\u6570\u636e\u53ef\u7528\u6027\uff0c\u5e76\u4e0d\u6267\u884c\u4ea4\u6613\u3002\u90a3\u81ea\u7136\u53ef\u4ee5\u60f3\u5230\uff0c\u6570\u636e\u53ef\u7528\u6027\u662f\u4e0d\u662f\u53ef\u4ee5\u901a\u8fc7\u5176\u4ed6\u65b9\u5f0f\u4fdd\u8bc1\uff0c\u5e76\u4e0d\u9700\u8981\u5b8c\u5168 Rollup \u5230\u539f\u59cb\u7684 Layer1\u3002\u4e8e\u662f\u6709\u4e86\u6a21\u5757\u5316\u533a\u5757\u94fe\u601d\u60f3\u3002"),(0,n.kt)("p",null,"\u6a21\u5757\u5316\u533a\u5757\u94fe\u4e2d\u7684\u6a21\u5757\u5c42\u5982\u4f55\u62c6\u5206\uff0c\u4e1a\u754c\u5c1a\u5728\u6478\u7d22\u4e2d\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u62c6\u5206\u4e3a\u6267\u884c\u5c42\uff0c\u7ed3\u7b97\u5c42\uff0c\u5171\u8bc6\u548c\u6570\u636e\u53ef\u7528\u5c42\u3002\u5176\u4e2d\u7ed3\u7b97\u5c42\u4e5f\u627f\u62c5\u4ef2\u88c1\u7684\u804c\u8d23\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs.celestia.org/assets/images/monolithic-modular-c078dd91fd68b8e6a168ca8bbccfd3d8.png",alt:null})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\uff08\u4e0a\u56fe\u6765\u81ea ",(0,n.kt)("a",{parentName:"p",href:"https://docs.celestia.org/concepts/how-celestia-works/monolithic-vs-modular%EF%BC%89"},"https://docs.celestia.org/concepts/how-celestia-works/monolithic-vs-modular\uff09"))),(0,n.kt)("p",null,"\u800c Rooch \u5728\u8fd9\u4e2a\u57fa\u7840\u4e0a\u8fdb\u884c\u6539\u8fdb\uff0c\u5c06\u4ef2\u88c1\u804c\u80fd\u4ece\u7ed3\u7b97\u5c42\u62c6\u5206\u51fa\u6765\uff0c\u4ece\u800c\u652f\u6301\u591a\u4e2a\u7ed3\u7b97\u5c42\u3002\u5173\u4e8e\u7ed3\u7b97\u534f\u8bae\u8bf7\u53c2\u770b\uff1a",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/technology/modular-blockchain-architecture/multi-chain-settlement-protocol"},"\u591a\u94fe\u7ed3\u7b97\u534f\u8bae")),(0,n.kt)("h2",{id:"rooch-\u7684\u6a21\u5757\u5316\u5206\u5c42"},"Rooch \u7684\u6a21\u5757\u5316\u5206\u5c42"),(0,n.kt)("p",null,"\u5728 Rooch \u7684\u6a21\u5757\u5316\u67b6\u6784\u4e2d\uff0c\u4e0d\u540c\u7684\u5c42\u7684\u804c\u80fd\u5212\u5206\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"modular",src:r(1850).Z,width:"626",height:"268"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6267\u884c\u5c42\uff08Execution\uff09"),"\uff1a\u6267\u884c\u667a\u80fd\u5408\u7ea6\u4ea4\u6613\uff0c\u5e76\u4fdd\u5b58\u6267\u884c\u7684\u72b6\u6001\u3002\u5e94\u7528\u4e3b\u8981\u548c\u6267\u884c\u5c42\u63d0\u4f9b\u7684\u534f\u8bae\u548c\u670d\u52a1\u4ea4\u4e92\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6a21\u5757\u4ed3\u5e93\u5c42\uff08Module Repository\uff09"),"\uff1a\u5728 Rooch \u4e2d\uff0c\u5e94\u7528\u7684\u5408\u7ea6\u53ef\u4ee5\u4f9d\u8d56\u90e8\u7f72\u5728 Move Layer1 \u4e0a\u7684 Move \u5408\u7ea6\u6a21\u5757\uff0cMove Layer1 \u53ef\u4ee5\u4f5c\u4e3a Move \u6a21\u5757\u4ed3\u5e93\u5c42\uff0c\u8fd9\u6837\u53ef\u4ee5\u4fdd\u8bc1\u5e94\u7528\u4e4b\u95f4\u7684\u4f9d\u8d56\u548c\u7ec4\u5408\u7684\u5ef6\u7eed\u6027\u3002\u5f53\u524d Move Layer1\uff0c",(0,n.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin"},"Starcoin"),"\uff0c",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aptos-labs/aptos-core"},"Aptos"),"\uff0c",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MystenLabs/sui"},"Sui"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6570\u636e\u53ef\u7528\u5c42\uff08Data Availability\uff09"),"\uff1a\u4fdd\u8bc1\u6267\u884c\u5c42\u7684\u4ea4\u6613\u6570\u636e\u53ef\u4ee5\u901a\u8fc7\u516c\u5f00\u7684\u65b9\u5f0f\u83b7\u53d6\uff0c\u4ece\u800c\u4fdd\u8bc1\u6b3a\u8bc8\u8bc1\u660e\u6240\u4f9d\u8d56\u7684\u6570\u636e\u53ef\u7528\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5171\u8bc6\u5c42\uff08Consensus\uff09"),"\uff1a\u4fdd\u8bc1\u6267\u884c\u5c42\u7684\u4ea4\u6613\u987a\u5e8f\u662f\u786e\u5b9a\u7684\uff0c\u4e0d\u53ef\u7be1\u6539\u7684\u3002\u5728 Rooch \u4e2d\uff0c\u5171\u8bc6\u5c42\u8fd8\u627f\u62c5\u7740",(0,n.kt)("a",{parentName:"li",href:"/zh/docs/technology/transaction-accumulator-proofs"},"\u4ea4\u6613\u7d2f\u52a0\u5668"),"\u7684\u751f\u6210\u4ee5\u53ca\u9a8c\u8bc1\u804c\u8d23\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7ed3\u7b97\u5c42\uff08Settlement\uff09"),"\uff1a\u5b9e\u73b0 Layer1 \u548c\u6267\u884c\u5c42\u4e4b\u95f4\u7684\u72b6\u6001\u8fc1\u79fb\u4ee5\u53ca\u8d44\u4ea7\u7ed3\u7b97\u3002\u7ed3\u7b97\u5468\u671f\u53d6\u51b3\u4e8e\u4ef2\u88c1\u5c42\u7684\u6700\u7ec8\u786e\u5b9a\u6027\u5468\u671f\u3002\u53ef\u4ee5\u540c\u65f6\u652f\u6301\u591a\u4e2a Layer1 \u4f5c\u4e3a\u7ed3\u7b97\u5c42\uff0c\u5305\u62ec\u524d\u9762\u63d0\u5230\u7684 Move \u516c\u94fe\u4ee5\u53ca Ethereum\uff0cBSC \u7b49 EVM \u516c\u94fe\uff0c\u672a\u6765\u4f1a\u652f\u6301\u6240\u6709\u7684\u5177\u6709\u56fe\u7075\u5b8c\u5907\u667a\u80fd\u5408\u7ea6\u7684 Layer1\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4ef2\u88c1\u5c42\uff08Arbitration\uff09"),"\uff1a\u6267\u884c\u6b3a\u8bc8\u8bc1\u660e\uff0c\u5e76\u505a\u51fa\u88c1\u51b3\u3002\u5728\u4e50\u89c2\u4e3b\u4e49\uff08Optimistic\uff09\u65b9\u6848\u4e2d\uff0c\u4ef2\u88c1\u5c42\u7b49\u5f85\u6311\u6218\u671f\u8fc7\u540e\uff0c\u5982\u679c\u672a\u53d1\u751f\u6311\u6218\uff0c\u5c31\u8ba4\u4e3a\u6267\u884c\u5c42\u7684\u4ea4\u6613\u8fbe\u5230\u4e86\u6700\u7ec8\u786e\u5b9a\uff0c\u5e76\u901a\u77e5\u7ed3\u7b97\u5c42\u8fdb\u884c\u7ed3\u7b97\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u94fe\u95f4\u901a\u4fe1\u5c42\uff08CrossChain Message Layer\uff09"),"\uff1a\u7531\u4e8e\u4ee5\u4e0a\u4e0d\u540c\u7684\u5c42\u4f1a\u5728\u4e0d\u540c\u7684 Layer1 \u4e0a\uff0c\u6240\u4ee5\u9700\u8981\u4e00\u4e2a Layer1 \u4e4b\u95f4\u7684\u94fe\u95f4\u901a\u4fe1\u673a\u5236\u6765\u534f\u540c\u5b8c\u6210\u7ed3\u7b97\u4ee5\u53ca\u4ef2\u88c1\u3002")),(0,n.kt)("h2",{id:"\u6a21\u5757\u5316\u7ec4\u5408\u65b9\u5f0f"},"\u6a21\u5757\u5316\u7ec4\u5408\u65b9\u5f0f"),(0,n.kt)("p",null,"\u57fa\u4e8e\u6a21\u5757\u5316\u67b6\u6784\uff0cRooch \u63d0\u4f9b\u4e0d\u540c\u7684\u7ec4\u5408\u65b9\u5f0f\u6765\u5e94\u5bf9\u4e0d\u540c\u7684\u5e94\u7528\u573a\u666f\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Rooch Ethereum Layer2: Rooch(Execution) + Layer1s(Settlement) + Ethereum(Arbitration) + DA"),(0,n.kt)("li",{parentName:"ol"},"XChain Modular DApp: Rooch(Execution) + XChain(Settlement + Arbitration) + DA"),(0,n.kt)("li",{parentName:"ol"},"Rooch Layer3 Modular DApp: Rooch(Execution) + Rooch Layer2(Settlement + Arbitration) + DA")))}s.isMDXComponent=!0},1850:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/rooch-modular-3f38e8dda5bf6149dd1fad2c713aae0f.svg"}}]);