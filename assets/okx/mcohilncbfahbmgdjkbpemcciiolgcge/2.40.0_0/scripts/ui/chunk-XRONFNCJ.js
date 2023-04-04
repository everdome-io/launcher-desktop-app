import{e as c}from"./chunk-SBW523XW.js";import{i as o,k as a}from"./chunk-YC2Z7II3.js";o();a();var s=async()=>{try{await c()}catch(t){console.log("get banlanc err.....",t)}},g=(t=[],e="")=>t.filter(l=>l.keyringId===e)[0]||{},h=(t,e)=>{let l={};return t.forEach(n=>{n.walletIdentities.forEach(r=>{r.walletId===e&&(l=n)})}),l},u=(t,e)=>{let l={};return t.forEach(n=>{n.walletIdentities.forEach(r=>{r.walletId===e&&(l=r)})}),l},I=(t="")=>{let{length:e}=t;return`${t.slice(0,6)}...${t.slice(e-4)}`};export{s as a,g as b,h as c,u as d,I as e};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

