import{$k as s,Za as i,i as o,k as r,yf as a}from"./chunk-YC2Z7II3.js";o();r();var p=s({name:"walletConfig",initialState:{},reducers:{}}),{reducer:g}=p,S=g;function m(t){return{type:a,value:t}}function d(t,l){return c=>new Promise((f,u)=>{i().setWalletConfig(t,l,(e,n)=>{if(e){u(e);return}c(m(n)),f(n)})})}function h({metamask:t}){return t.walletConfig}export{S as a,d as b,h as c};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

