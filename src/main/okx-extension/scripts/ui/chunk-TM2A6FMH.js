import{w as W,x as F}from"./chunk-QSYXRBND.js";import{Ha as l}from"./chunk-U3HLVTEP.js";import{K as U,bb as N,cb as y,db as j,eb as k,gb as O,hb as L,na as A}from"./chunk-XBLB7XW3.js";import{De as i,Kc as d,Lc as w,Rc as T,ah as c,bj as I,e as C,ga as M,gg as g,i as r,k as m,lk as q,nc as R,wk as P}from"./chunk-5YY3VNR7.js";r();m();var G=C(M());r();m();var S=C(M());var H=({unapproved:t})=>{let s=A(),e=d(),p=T(),{baseCoin:o={}}=U(R),[u,n]=(0,S.useState)(!1),a=w(b=>{let D=t.walletId,h=g(b),x=I(b);return{icon:x[t.origin].icon,host:x[t.origin].host,name:x[t.origin].name,unapproved:t,address:h[D].account.aptos,walletName:h[D].walletName,keyringName:h[D].keyringName}}),f=o.coinId||R,{aptosFee:_=0,loading:E}=j({requestId:a.unapproved.id,coinId:f,address:a.address,gasUnitPrice:t.params.options&&t.params.options.gas_unit_price,maxGasAmount:t.params.options&&t.params.options.max_gas_amount},!0),J=k(),K=O(_.fee,o),Q=P(J,q(_.fee)),V=L(_.fee,o);return S.default.createElement(W,{errorText:s("wallet_extension_popup_insufficient_network_fee",{token:o.symbol}),navTitle:s("wallet_extension_popup_title_contract_interaction"),walletInfo:a,unapproved:t,baseCoin:o,isSufficientGas:E||Q,coinToDisplay:K,feeToDisplay:V,reject:async()=>{await e(l()),await e(N(a.unapproved.id)),p.push(c)},confirm:async()=>{n(!0);try{await e(y(a.unapproved.id,{serviceCharge:_.fee,maxGasAmount:_.maxGasAmount})),await e(l()),p.push(c)}finally{n(!1)}},rejectText:s("wallet_dapp_connection_btn_reject"),confirmText:s("wallet_set_password_btn_confirm"),loadingTx:u,loading:E})};r();m();var $=C(M());var z=({unapproved:t})=>{let s=A(),e=d(),p=T(),o=w(u=>{let n=t.walletId,a=g(u),f=I(u);return{icon:f[t.origin].icon,host:f[t.origin].host,name:f[t.origin].name,unapproved:t,address:a[n].account.aptos,wallet:`${a[n].walletName} - ${a[n].keyringName}`}});return $.default.createElement(F,{navTitle:s("wallet_dapp_conncetion_notify_signature_request"),walletInfo:o,message:t.params.message,rejectText:s("wallet_dapp_connection_btn_reject"),confirmText:s("wallet_set_password_btn_confirm"),reject:async()=>{await e(N(o.unapproved.id)),await e(l()),p.push(c)},confirm:async()=>{await e(y(o.unapproved.id)),await e(l()),p.push(c)}})};var St=({unapproved:t})=>{switch(t.method){case i.SIGN_TRANSACTION:case i.RPC_SIGN_TRANSACTION:case i.SIGN_AND_SUBMIT_TRANSACTION:case i.RPC_SIGN_AND_SUBMIT_TRANSACTION:return G.default.createElement(H,{unapproved:t});case i.SIGN_MESSAGE:case i.RPC_SIGN_MESSAGE:return G.default.createElement(z,{unapproved:t});default:return""}};export{St as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

