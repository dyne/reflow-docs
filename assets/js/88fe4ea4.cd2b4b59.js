"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[546],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(o),d=n,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return o?r.createElement(m,i(i({ref:t},u),{},{components:o})):r.createElement(m,i({ref:t},u))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},3179:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),i=["components"],l={title:"ValueFlows",id:"valueflows",sidebar_label:"\ud83e\udd6e ValueFlows"},s={unversionedId:"valueflows",id:"valueflows",isDocsHomePage:!1,title:"ValueFlows",description:"A vocabulary for the distributed economic networks of the next economy",source:"@site/docs/valueflows.md",sourceDirName:".",slug:"/valueflows",permalink:"/docs/valueflows",version:"current",lastUpdatedBy:"Puria Nafisi Azizi",lastUpdatedAt:1650615525,formattedLastUpdatedAt:"4/22/2022",sidebar_label:"\ud83e\udd6e ValueFlows",frontMatter:{title:"ValueFlows",id:"valueflows",sidebar_label:"\ud83e\udd6e ValueFlows"},sidebar:"docs",previous:{title:"Federation",permalink:"/docs/federation"},next:{title:"API Tour",permalink:"/docs/api_tour"}},c=[{value:"A vocabulary for the distributed economic networks of the next economy",id:"a-vocabulary-for-the-distributed-economic-networks-of-the-next-economy",children:[{value:"Introduction",id:"introduction",children:[]},{value:"Useful links",id:"useful-links",children:[]}]}],u={toc:c};function p(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("section",{className:"reflow__doc"},(0,a.kt)("div",{className:"hero__img",style:{backgroundImage:"url('../img/vf.jpg')",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}),(0,a.kt)("h2",{id:"a-vocabulary-for-the-distributed-economic-networks-of-the-next-economy"},"A vocabulary for the distributed economic networks of the next economy"),(0,a.kt)("h3",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Value Flows is a set of common vocabularies to describe flows of economic resources of all kinds within distributed economic ecosystems.")),(0,a.kt)("p",null,"The purpose is to enable internetworking among many different software projects for resource planning and accounting within fractal networks of people and groups. "),(0,a.kt)("p",null,"The vocabulary will work for any kind of economic activity, but the focus is to facilitate groups experimenting with solidarity / cooperative / collaborative / small business ecosystem / commons based peer production / any transitional economies."),(0,a.kt)("p",null,'Or, with less buzzwords, "let\'s help a lot of alternative economic software projects that are solving different pieces of the same puzzle be able to work together".'),(0,a.kt)("p",null,"Another purpose is ",(0,a.kt)("strong",{parentName:"p"},"to support resource flows")," connecting many software applications. These flows may be oriented around processes that make things, exchanges that trade things, or combinations of both."),(0,a.kt)("p",null,"The vocabulary is presented in several ways, as ",(0,a.kt)("em",{parentName:"p"},"Linked Open Data")," using the Resource Description Framework (RDF) family of languages, as well as a ",(0,a.kt)("em",{parentName:"p"},"GraphQL")," reference, ",(0,a.kt)("em",{parentName:"p"},"json-schema")," reference, and a ",(0,a.kt)("em",{parentName:"p"},"UML")," model. We want to support RDF based and non-RDF based use of the vocabulary, basically any way that people want to use software and data on the internet to help create economic networks."),(0,a.kt)("div",{className:"hero__img",style:{backgroundImage:"url('../img/network-of-networks.png')",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}),(0,a.kt)("h3",{id:"useful-links"},"Useful links"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://valueflo.ws"},"ValueFlows Website")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://lab.allmende.io/valueflows"},"ValueFlows Code"))))}p.isMDXComponent=!0}}]);