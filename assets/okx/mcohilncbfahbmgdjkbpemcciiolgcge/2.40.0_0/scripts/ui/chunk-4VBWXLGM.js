import{a as s,c as S}from"./chunk-HU534ALX.js";import{ee as p,i as u,k as c,yh as E}from"./chunk-YC2Z7II3.js";u();c();var f=()=>{let{id:e,address:n,name:o,keyringName:t,accountMap:d,accountsMap:i,segwitAddressType:r}=p(E);return{id:e,address:n,name:o,keyringName:t,accountMap:d,accountsMap:i,segwitAddressType:r}},T=e=>{let{accountsMap:n={},segwitAddressType:o={}}=f(),t=n[e];if(!t)return null;let d=o[e]===s.SEGWIT_NESTED?s.SEGWIT_NESTED_49:s.SEGWIT_NESTED;return S[e].reduce((r,a)=>(d!==a&&r.push({address:t[a].address,addressType:a}),r),[])};export{f as a,T as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

