import{c as a}from"./chunk-PFUOJJI2.js";import{$k as c,i as o,k as i,rh as r}from"./chunk-YC2Z7II3.js";o();i();var s=a("Token"),l={coinWithBalance:{}},u=c({name:s,initialState:l,reducers:{setCoinWithBalance:(e,{payload:n})=>{let{coinWithBalance:t}=e;e.coinWithBalance={...t,...n}}}}),m=e=>{let{coinWithBalance:n}=e[s];return n},B=e=>{let n=r(e),t=m(e);return(t==null?void 0:t[n])||[]},f=e=>{var t;let{metamask:n}=e;return((t=n.rpcModeCoins)==null?void 0:t.suiDevCoins)||[]};var{reducer:p,actions:C}=u,{setCoinWithBalance:T}=C,W=p;export{s as a,m as b,B as c,f as d,T as e,W as f};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

