import{e as s,i as t,k as r,na as S}from"./chunk-YC2Z7II3.js";t();r();var p=s(S());t();r();var a="rpc",e={MANAGE_NET:"manageNet",EVM:"evm",SUI:"sui"},i={[e.MANAGE_NET]:"ManageNet",[e.EVM]:"Evm",[e.SUI]:"Sui"};var o=(0,p.curry)((c,E)=>{let n=i[c];if(!n)throw new Error("rpc type must in maps");if(!(typeof E=="string"&&/^[0-9a-zA-Z]+$/g.test(E)))throw new Error("scope name is invalid");return`${a}${n}${E}`}),u=o(e.MANAGE_NET),C=o(e.EVM),P=o(e.SUI);export{u as a,C as b,P as c};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

