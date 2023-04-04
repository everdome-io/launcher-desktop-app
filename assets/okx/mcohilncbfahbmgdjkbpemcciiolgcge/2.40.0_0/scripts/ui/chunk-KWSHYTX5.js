import{Ag as C,Fg as d,Fk as g,Gg as P,Hg as D,Ig as _,Jg as F,Kg as f,Lg as l,Vg as E,Xg as O,i as y,ji as S,k as N,li as U,mi as R}from"./chunk-YC2Z7II3.js";y();N();var s=n=>`metamask/confirm-transaction/${n}`,I=s("UPDATE_TX_DATA"),G=s("UPDATE_TOKEN_DATA"),L=s("CLEAR_CONFIRM_TRANSACTION"),k=s("UPDATE_TRANSACTION_AMOUNTS"),H=s("UPDATE_TRANSACTION_FEES"),M=s("UPDATE_TRANSACTION_TOTALS"),b=s("UPDATE_NONCE"),v={txData:{},tokenData:{},fiatTransactionAmount:"",fiatTransactionFee:"",fiatTransactionTotal:"",ethTransactionAmount:"",ethTransactionFee:"",ethTransactionTotal:"",hexTransactionAmount:"",hexTransactionFee:"",hexTransactionTotal:"",nonce:""};function $(n=v,t={}){switch(t.type){case I:return{...n,txData:{...t.payload}};case G:return{...n,tokenData:{...t.payload}};case k:{let{fiatTransactionAmount:e,ethTransactionAmount:a,hexTransactionAmount:r}=t.payload;return{...n,fiatTransactionAmount:e||n.fiatTransactionAmount,ethTransactionAmount:a||n.ethTransactionAmount,hexTransactionAmount:r||n.hexTransactionAmount}}case H:{let{fiatTransactionFee:e,ethTransactionFee:a,hexTransactionFee:r}=t.payload;return{...n,fiatTransactionFee:e||n.fiatTransactionFee,ethTransactionFee:a||n.ethTransactionFee,hexTransactionFee:r||n.hexTransactionFee}}case M:{let{fiatTransactionTotal:e,ethTransactionTotal:a,hexTransactionTotal:r}=t.payload;return{...n,fiatTransactionTotal:e||n.fiatTransactionTotal,ethTransactionTotal:a||n.ethTransactionTotal,hexTransactionTotal:r||n.hexTransactionTotal}}case b:return{...n,nonce:t.payload};case L:return v;default:return n}}function w(n){return{type:I,payload:n}}function V(n){return{type:G,payload:n}}function W(n){return{type:k,payload:n}}function j(n){return{type:H,payload:n}}function q(n){return{type:M,payload:n}}function z(n){return{type:b,payload:n}}function J(n){let{lastGasPrice:t,txParams:{gasPrice:e}={}}=n,a=d(t),r=P(a,e),o=!e||r?a:e;return{...n,txParams:{...n.txParams,gasPrice:o}}}function Q(n){return(t,e)=>{let a=e(),r=U(a),o=R(a),c=g(a);t(w(n));let{txParams:{value:i="0x0",gas:T="0x0",gasPrice:u="0x0"}={}}=n,m=f({value:i,fromCurrency:c,toCurrency:r,conversionRate:o,numberOfDecimals:2}),x=f({value:i,fromCurrency:c,toCurrency:c,conversionRate:o,numberOfDecimals:6});t(W({fiatTransactionAmount:m,ethTransactionAmount:x,hexTransactionAmount:i}));let A=D({gasLimit:T,gasPrice:u}),p=l({value:A,fromCurrency:c,toCurrency:r,numberOfDecimals:2,conversionRate:o}),h=l({value:A,fromCurrency:c,toCurrency:c,numberOfDecimals:6,conversionRate:o});t(j({fiatTransactionFee:p,ethTransactionFee:h,hexTransactionFee:A}));let B=F(p,m),K=_(h,x),X=O(i,A);t(q({fiatTransactionTotal:B,ethTransactionTotal:K,hexTransactionTotal:X}))}}function on(n){return(t,e)=>{let a=e(),o=S(a)[n];if(!o){console.error(`Transaction with id ${n} not found`);return}if(o.txParams){let{lastGasPrice:c}=o,i=c?J(o):o;t(Q(i));let{txParams:T}=o;if(T.data){let{data:u}=T,m=E(u);t(V(m))}if(T.nonce){let u=C(T.nonce,{fromNumericBase:"hex",toNumericBase:"dec"});t(z(u))}}else t(w(o))}}function en(){return{type:L}}export{$ as a,on as b,en as c};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

