import{$k as n,i as t,k as o}from"./chunk-YC2Z7II3.js";t();o();var c={openManageWalletHomePageAnimation:!1,closeManageWalletHomePageAnimation:!1,createAccountsEffectList:[]},l=n({name:"animateCollect",initialState:c,reducers:{openManageWalletHomePage:(e,a)=>{e.openManageWalletHomePageAnimation=!!a.payload},closeManageWalletHomePage:(e,a)=>{e.closeManageWalletHomePageAnimation=!!a.payload},createAccounts:(e,a)=>{e.createAccountsEffectList=[...e.createAccountsEffectList,a.payload]},clearAccounts:e=>{e.createAccountsEffectList=[]}}}),{actions:s,reducer:i}=l,r=i;var f=e=>e.animateCollect.createAccountsEffectList,{openManageWalletHomePage:A,closeManageWalletHomePage:u,createAccounts:p,clearAccounts:H}=s;export{r as a,f as b,A as c,u as d,p as e,H as f};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

