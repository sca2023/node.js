"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46264],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27889:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_label:"Page.setExtraHTTPHeaders"},p="Page.setExtraHTTPHeaders() method",s={unversionedId:"api/puppeteer.page.setextrahttpheaders",id:"api/puppeteer.page.setextrahttpheaders",title:"Page.setExtraHTTPHeaders() method",description:"The extra HTTP headers will be sent with every request the page initiates.",source:"@site/../docs/api/puppeteer.page.setextrahttpheaders.md",sourceDirName:"api",slug:"/api/puppeteer.page.setextrahttpheaders",permalink:"/next/api/puppeteer.page.setextrahttpheaders",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.setExtraHTTPHeaders"},sidebar:"api",previous:{title:"Page.setDragInterception",permalink:"/next/api/puppeteer.page.setdraginterception"},next:{title:"Page.setGeolocation",permalink:"/next/api/puppeteer.page.setgeolocation"}},l={},u=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}],c={toc:u};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"pagesetextrahttpheaders-method"}),"Page.setExtraHTTPHeaders() method"),(0,n.kt)("p",null,"The extra HTTP headers will be sent with every request the page initiates."),(0,n.kt)("admonition",a({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"All HTTP header names are lowercased. (HTTP headers are case-insensitive, so this shouldn\u2019t impact your server code.)")),(0,n.kt)("admonition",a({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"page.setExtraHTTPHeaders does not guarantee the order of headers in the outgoing requests.")),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  setExtraHTTPHeaders(headers: Record<string, string>): Promise<void>;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"headers"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Record","<","string, string",">"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"An object containing additional HTTP headers to be sent with every request. All header values must be strings.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"))}d.isMDXComponent=!0}}]);