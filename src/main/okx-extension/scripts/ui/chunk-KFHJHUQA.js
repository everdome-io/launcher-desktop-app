import{w as U,x as B}from"./chunk-QSYXRBND.js";import{Ha as u}from"./chunk-U3HLVTEP.js";import{K as k,bb as D,cb as h,gb as P,hb as F,ka as q,na as C}from"./chunk-XBLB7XW3.js";import{Be as n,Kc as N,Lc as p,Rc as I,Rg as W,ah as f,bj as A,e as S,ga as T,gg as g,i,ik as y,k as s,lc as w,wk as j}from"./chunk-5YY3VNR7.js";i();s();var E=S(T());i();s();var x=S(T());i();s();var H=S(T());var $=t=>{let o=p(W);return(0,H.useMemo)(()=>{var e;let c=((e=o.find(m=>m.coinId==t))==null?void 0:e.coinAmountInt)||0;return y(c)},[t])};var v=({unapproved:t})=>{let o=C(),a=N(),c=I(),{baseCoin:e={}}=k(w),[m,l]=(0,x.useState)(!1),r=p(b=>{let R=t.walletId,L=g(b),M=A(b);return{icon:M[t.origin].icon,host:M[t.origin].host,name:M[t.origin].name,unapproved:t,address:L[R].account.solana,walletName:L[R].walletName,keyringName:L[R].keyringName}}),_=e.coinId||w,{solanaFee:d=0,loading:G}=q({coinId:_,address:r.address},!0),K=$(e.coinId||w),Q=F(d,e),V=P(d,e),X=j(K,y(d));return x.default.createElement(U,{errorText:o("wallet_extension_popup_insufficient_network_fee",{token:e.symbol}),navTitle:o("wallet_extension_popup_title_contract_interaction"),walletInfo:r,unapproved:t,baseCoin:e,isSufficientGas:G||X,coinToDisplay:V,feeToDisplay:Q,reject:async()=>{await a(u()),await a(D(r.unapproved.id)),c.push(f)},confirm:async()=>{l(!0);try{await a(h(r.unapproved.id,{serviceCharge:d.fee})),await a(u()),c.push(f)}finally{l(!1)}},rejectText:o("wallet_dapp_connection_btn_reject"),confirmText:o("wallet_set_password_btn_confirm"),loadingTx:m,loading:G})};i();s();var z=S(T());var J=({unapproved:t})=>{let o=C(),a=N(),c=I(),e=p(m=>{let l=t.walletId,r=g(m),_=A(m);return{icon:_[t.origin].icon,host:_[t.origin].host,name:_[t.origin].name,unapproved:t,address:r[l].account.solana,wallet:`${r[l].walletName} - ${r[l].keyringName}`}});return z.default.createElement(B,{navTitle:o("wallet_dapp_conncetion_notify_signature_request"),walletInfo:e,message:t.params.message,rejectText:o("wallet_dapp_connection_btn_reject"),confirmText:o("wallet_set_password_btn_confirm"),reject:async()=>{await a(D(e.unapproved.id)),await a(u()),c.push(f)},confirm:async()=>{await a(h(e.unapproved.id)),await a(u()),c.push(f)}})};var Et=({unapproved:t})=>{switch(t.method){case n.SIGN_TRANSACTION:case n.RPC_SIGN_TRANSACTION:case n.SIGN_AND_SEND_TRANSACTION:case n.RPC_SIGN_AND_SEND_TRANSACTION:case n.SIGN_ALL_TRANSACTIONS:case n.RPC_SIGN_ALL_TRANSACTIONS:return E.default.createElement(v,{unapproved:t});case n.SIGN_MESSAGE:case n.RPC_SIGN_MESSAGE:return E.default.createElement(J,{unapproved:t});default:return""}};export{Et as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

