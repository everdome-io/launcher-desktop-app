import{a as C}from"./chunk-RJTK42A4.js";import{e as f,ga as b,i as g,k as p}from"./chunk-5YY3VNR7.js";g();p();var l=f(b()),m=f(C());function I({className:c,text:e,keyword:t,ignoreCase:d=!0,customRender:u}){if(!e||!t)return e;let h=[],i=0,n=e,r=t;d&&(n=e.toLowerCase(),r=t.toLowerCase());let s=n.indexOf(r,i);for(;s!==-1;)h.push({subText:e.slice(i,s),highlight:!1}),i=s+r.length,h.push({subText:e.slice(s,i),highlight:!0}),s=n.indexOf(r,i);return h.push({subText:e.slice(i),highlight:!1}),l.default.createElement(l.default.Fragment,null,h.map(({subText:o,highlight:a},w)=>l.default.createElement("span",{className:(0,m.default)(c,{"highlight-keyword":a}),key:w},u?u(o,a):o)))}var O=(0,l.memo)(I);export{O as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

