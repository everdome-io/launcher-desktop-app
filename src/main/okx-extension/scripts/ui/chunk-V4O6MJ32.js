import{d as G,e as K,f as de,g as xo,h as fe,i as yo,j as Ao,k as Do,l as Eo}from"./chunk-BWZX64YP.js";import{B as Uo,D as Fo,N as Ho,O as Ro,S as Bo,Y as Mo,a as ro,c as He,e as pt,f as No,g as wo,h as vo,i as dt,j as Io,k as ft,m as Tt,o as So,p as bo,s as Oo,u as Po,v as Lo,w as ko,y as Go}from"./chunk-J6CXM2QV.js";import{b as Ge,d as L,f as io}from"./chunk-ASEXU7Q7.js";import{c as ao}from"./chunk-OTQZKSNG.js";import{b as mt}from"./chunk-QWFNWJXB.js";import{Ya as Jt,Za as Qt}from"./chunk-U3HLVTEP.js";import{i as Co}from"./chunk-PFBN4VGD.js";import{a as so}from"./chunk-RJTK42A4.js";import{Ba as F,C as Ue,Da as fo,Na as To,Ra as _o,bb as go,cb as ho,i as co,m as ut,n as lo,na as D,p as uo,u as mo,w as po,x as k,ya as Fe}from"./chunk-XBLB7XW3.js";import{$e as W,$j as jt,Cc as Ut,Df as O,Ec as Ft,Ek as ke,Ff as ct,Ka as ee,Kc as I,Lc as T,Pb as kt,Qa as Dn,Qf as lt,Rc as Ie,Se as Nn,Va as te,We as Ht,Wf as Wt,Zg as Zt,Zh as me,Zj as Xt,_j as S,ak as eo,bj as Kt,bk as to,ca as ae,ck as Se,da as ce,e as y,ea as Ot,ef as Rt,ej as Vt,ek as Z,fe as le,fk as U,ga as N,gk as oo,hg as zt,i as p,ij as Yt,k as d,ka as Pt,ma as Lt,mk as no,nk as be,ob as En,ok as J,qe as xe,qg as ue,ta as Ce,tk as oe,uj as w,vf as Bt,vj as ye,vk as Oe,wg as qt,wk as pe,xf as Mt,xk as Pe,yf as $t,yk as Le,zc as Gt}from"./chunk-5YY3VNR7.js";p();d();var $o=y(N());function Wo(){let e=T(Yt),o=e&&e.metadata?e.metadata.id:null,n=o?1:0,t=T(Wt),s=t.length,r=T(Zt),i=T(c=>{let m=c.metamask.suggestedTokens;return Object.values(m)}),a=i.length,u=T(qt),l=u.length;return{unapprovedTxList:t,unapprovedTxCount:s,unapprovedSmCount:r,unapprovedStList:i,unapprovedStCount:a,unapprovedPermissionCount:n,unapprovedPermissionsRequestId:o,unapprovedSnList:u,unapprovedSnCount:l,unapprovedRequestCount:s+r+a+l+n}}function Us(){let e=T(s=>s.activeTab),o=T(Vt),n=(0,$o.useMemo)(()=>o.find(s=>s.origin===e.origin)||{},[o]),t=n.origin&&n.origin.replace(/^https?:\/\//iu,"");return{...n,origin:t}}p();d();p();d();var P=y(N());p();d();var C={UNAPPROVED:"unapproved",APPROVED:"approved",REJECTED:"rejected",SIGNED:"signed",SUBMITTED:"submitted",FAILED:"failed",DROPPED:"dropped",SUCCEED:"succeed",PENDING:"pending"},g={TRANS_OUT:1,AUTHORIZATION:2,CONTRACT_CALL:3,CANCEL_AUTHORIZATION:4,CONTRACT_DEPLOY:5},Re={[g.TRANS_OUT]:"wallet_extension_history_list_send",[g.CONTRACT_CALL]:"wallet_extension_history_list_contract_interaction",[g.AUTHORIZATION]:"wallet_extension_history_list_approval",[g.CANCEL_AUTHORIZATION]:"wallet_extension_history_list_revoke_approval",[g.CONTRACT_DEPLOY]:"developer_mode_history_title_contract_eployment"};p();d();var Jo=y(He());p();d();var qo=y(N());p();d();var _t=y(He()),gt={},wn=e=>{let o=new _t.default(new _t.default.providers.HttpProvider(e));return gt[e]=o,o},zo=e=>gt[e]?gt[e]:wn(e);var H=(e="")=>{let o=T(L),{isRpcMode:n}=T(ao),{rpcUrl:t}=o;return(0,qo.useMemo)(()=>n?zo(e||t):{},[t,n])};var Te=y(N());p();d();var se=y(N()),Zo=y(He());var ne=y(Pt());function ht(e){let o=T(s=>s.metamask.rpcEvmTransactions||{},Ft),n=F(),t=T(L)||{};return(0,se.useMemo)(()=>Object.values(o).filter(s=>{let{from:r,chainId:i}=s.txParams;return n===r&&i===t.chainId&&e(s)}),[o,n,t.chainId])}function Ko(){return ht(e=>e.status===C.FAILED||e.status===C.SUCCEED)}function Vo(e){let[o,n]=e,t=+o,s=+Ot.add(1,"d",new Date(n));return r=>Pe(r,t)&&Oe(r,s)}function Yo(e={}){let{dates:o}=e,n=ht(t=>t.status===C.FAILED||t.status===C.SUCCEED||t.status===C.DROPPED);return(0,se.useMemo)(()=>{let t=n;if(o){let s=Vo(o);t=t.filter(({finishTime:r})=>s(r))}return t.sort((s,r)=>r.finishTime-s.finishTime).map(s=>({...s,isShowPending:!1}))},[n,o])}function Be(e={}){let o=ht(t=>t.status===C.PENDING),{dates:n}=e;return(0,se.useMemo)(()=>{let t=(0,ne.sortBy)(o,[s=>Zo.default.utils.hexToNumber(s.txParams.nonce)]).map((s,r)=>({...s,isShowPending:r===0}));if(n){let s=Vo(n);t=t.filter(({sendTime:r})=>s(r))}return t},[o,n])}function Ct(){let e=Be(),o=Yo();return(0,se.useMemo)(()=>[...e,...o],[e,o])}function Me(e){let o=Ct();return(0,se.useMemo)(()=>e?o.find(({id:n})=>e===n):null,[e,o])}function ir({tokenAddress:e}){let o=Be(),n=Yo();return(0,se.useMemo)(()=>[...o,...n].filter(({type:t,txParams:s,extraParams:r})=>{if(t===g.TRANS_OUT)return!e&&!(r!=null&&r.tokenAddress)||(0,ne.toLower)(e)===(0,ne.toLower)(r==null?void 0:r.tokenAddress);if(t===g.AUTHORIZATION||t===g.CANCEL_AUTHORIZATION)return(0,ne.toLower)(e)===(0,ne.toLower)(r==null?void 0:r.tokenAddress);if(t===g.CONTRACT_CALL){let{value:i}=s||{};return!e&&pe(w(i),0)}return!1}),[o,n,e])}var vn=(e,o,n)=>{let{username:t,password:s,protocol:r,host:i,pathname:a,search:u,hash:l}=new URL(e),c=a.endsWith("/")?`${a}${o}/${n}`:`${a}/${o}/${n}`,m=t?`${t}:${s}`:"";return new URL(`${r}//${m}${i}${c}${u}${l}`).toString()};function $e(){let e=T(L);return k(o=>e!=null&&e.explorerUrl?vn(e==null?void 0:e.explorerUrl,"tx",o):null)}function In(e){let o=e.map(t=>{let{nonce:s}=t.txParams;return parseInt(s,16)}),n=Math.max.apply(null,o);return Number.isInteger(n)?n+1:0}function We(e){let o=H(),n=F(),t=e||n,s=T(Ge),r=ut(Ko()),i=ut(Be()),[a,u]=(0,Te.useState)(!1),[l,c]=(0,Te.useState)(null),[m,f]=(0,Te.useState)(null),h=k(async()=>{let _;try{u(!0),_=await o.eth.getTransactionCount(t,"latest")}finally{u(!1)}let v=In(r.current),b=Math.max(_,v),E=i.current.map(j=>{let{nonce:ve}=j.txParams;return Jo.default.utils.hexToNumber(ve)}),B=b;for(;E.includes(B);)B+=1;return c(_),f(B),{nonce:_,suggestedNonce:B}});return(0,Te.useEffect)(()=>{h()},[o,t,s]),{loadingNonce:a,nonce:l,suggestedNonce:m,request:h}}p();d();var Ae=y(N()),ze=y(Pt());var xt=y(Nn());p();d();var bn=6,Qo=(e,o=bn)=>{if(!Number(e))return"0";let n=e==null?void 0:e.toString(),t=e.split(".")[1]||"";return(t==null?void 0:t.length)>o?be(n,o):n},Xo=(e,o)=>{let{rpcUrl:n,chainId:t,account:s,isDeleted:r}=o;return Array.isArray(e)?e.filter(i=>{let a=!0;return t&&(a=a&&i.chainId===t),s&&(a=a&&i.account===s),r!==void 0&&(a=a&&(i.isDeleted||!1)===r),i.address||(a=a&&i.rpcUrl===n),a}):[]},jo=(e,o={})=>{let{symbol:n,usdToThisRate:t,chainTokenPrice:s,chainTokenBalance:r}=o;return Array.isArray(e)?e.map(i=>{var h,_,v,b,E,B;let a,u,{chainId:l,decimals:c}=i,m=n;i.address?(a=((b=s==null?void 0:s[l])==null?void 0:b[i.address])||0,u=((B=(E=r==null?void 0:r[i.account])==null?void 0:E[l])==null?void 0:B[i.address])||0):(a=((h=s==null?void 0:s[l])==null?void 0:h.price)||0,u=((v=(_=r==null?void 0:r[i.account])==null?void 0:_[l])==null?void 0:v.balance)||0),u=Qo(u&&jt(u,10**c));let f=Qo(S(u,S(a,t)));return{price:a,balance:u,...i,moneySymbol:m,marketValue:f}}):[]};var z=(e,o,n=!0)=>{let{chainId:t,rpcUrl:s}=T(L),r=T(pt),i=T(No),a=T(wo),{symbol:u,usdToThisRate:l}=T(ue),c=F(),m=(0,Ae.useMemo)(()=>Xo(r,{chainId:t,rpcUrl:s,account:n?c:void 0,isDeleted:o?void 0:!1}),[t,c,r]);return e?m:(0,Ae.useMemo)(()=>jo(m,{symbol:u,usdToThisRate:l,chainTokenPrice:i,chainTokenBalance:a}),[u,m,l,i,a])},_e=(e,o)=>{let n=z(o);return(0,Ae.useMemo)(()=>n.find(t=>t.address===(e||void 0))||{},[e,n])},yt=e=>{let o=e||H();return k(async n=>{let t=new o.eth.Contract(xt.default,n),s=await t.methods.symbol().call(),r=await t.methods.decimals().call();return{name:await t.methods.name().call(),symbol:s,decimals:r}},[o])},On=()=>{let e=H(),o=F();return k(async(n,t,s)=>{let r,i=s||e,a=t||o;return n?r=await new i.eth.Contract(xt.default,n).methods.balanceOf(a).call():r=await i.eth.getBalance(a,"latest"),r},[e,o])},Pn=()=>k(async(e,o)=>{let n=o;typeof o=="string"&&(n=[o]);try{let{data:t}=await Gt(Ut.getCoinPrice,{tokenAddresses:n,chainId:typeof e=="string"?Number.parseInt(e,16):e});return t}catch(t){return console.log(`fetch coin price failed 
${t}`),[]}},[]),Or=()=>{let e=H(),o=I();return k(({chainId:n,injectWeb3:t,wallets:s=[]})=>{let r=t||e,i=new r.BatchRequest;s.forEach(a=>{i.add(r.eth.getBalance.request(a,"latest",(u,l)=>{u||o(ft({chainId:n,balance:l,account:a}))}))}),i.execute()},[])},Ln=()=>{let e=I(),o=F(),n=Pn(),t=On();return k(async({chainId:s,address:r,injectAccount:i,injectWeb3:a})=>{let[u,l]=await Promise.all([n(s,r),t(r,i,a)]);return u!=null&&u.length&&e(Io({chainId:s,price:u[0].price})),e(ft({chainId:s,balance:l,address:r,account:i||o})),!0},[t,o])},Pr=()=>{let e=F(),{chainId:o}=T(L),n=z(!0,!1,!1);return uo(()=>({chainId:o,chainTokens:n}),{chainId:o,account:e,needPollChainTokens:n},(t,s)=>!(0,ze.isEqual)(t,s))},kn=18,Gn=()=>{let e=I(),o=T(pt),n=F();return k((t,s,r)=>{if(!t&&!n&&!(r!=null&&r.account))return!1;let{rpcUrl:i}=r,a=o.find(l=>{let c=l.chainId===t&&l.address===s&&l.account===((r==null?void 0:r.account)||n);return s||(c=c&&l.rpcUrl===i),c});if(a){if(a.isDeleted===!0){let l={...a,...r,chainId:t,address:s,isDeleted:!1};return e(dt(l)),!0}return!1}let u={chainId:t,address:s,isDeleted:!1,account:n,decimals:kn};return r&&typeof r=="object"&&Object.assign(u,r),e(vo(u)),!0},[o,n])},Lr=e=>{let o=H(e),n=Gn(),t=yt(o),s=Ln();return async(r,i)=>{let a=await t(i);n(r,i,a)&&await s(r,i,o)}},kr=()=>{let e=fo(),o=z(!1,!1,!1);return(0,Ae.useMemo)(()=>{let n=(0,ze.groupBy)(o||[],"account");return(e==null?void 0:e.map(t=>{var a;let s="",r=(a=t.walletIdentities)==null?void 0:a.map(u=>{var f,h;let l=(f=u==null?void 0:u.account)==null?void 0:f[kt],{balance:c,symbol:m}=((h=n[l])==null?void 0:h.filter(({address:_})=>!_)[0])||{};return s=m,{...u,balance:c,symbol:m}}),i=r.reduce((u,l)=>eo(u,l.balance),0);return{...t,marketValue:i,marketValueSymbol:s,walletIdentities:r}}))||[]},[o,e])},Gr=()=>{let e=I(),o=z(!0,!1,!1);return n=>{var t;(t=o==null?void 0:o.filter(({chainId:s,rpcUrl:r,address:i})=>!i&&s===n.chainId&&r===n.rpcUrl))==null||t.forEach(({chainId:s,account:r})=>{e(dt({chainId:s,account:r,...n}))})}};p();d();var M=y(En());p();d();var en=y(N());var Un=()=>{let e=D(),o=$e();return n=>{var t,s,r,i;if(n){let{type:a,status:u,txHash:l,extraParams:c}=n,m={[g.TRANS_OUT]:{key:"wallet_transfer_notif_send_success",params:{first:c==null?void 0:c.value,second:c==null?void 0:c.coinSymbol}},[g.CONTRACT_CALL]:{key:"wallet_transfer_notif_contract_interaction_success"},[g.AUTHORIZATION]:{key:"wallet_transfer_notif_approval_success",params:{first:c==null?void 0:c.coinSymbol}},[g.CANCEL_AUTHORIZATION]:{key:"wallet_transfer_notif_cancel_approval_success",params:{first:c==null?void 0:c.coinSymbol}},[g.CONTRACT_DEPLOY]:{key:"developer_mode_dapp_toast_deployed_successfully"}},f={[g.TRANS_OUT]:{key:"wallet_transfer_notif_send_fail",params:{first:c==null?void 0:c.value,second:c==null?void 0:c.coinSymbol}},[g.CONTRACT_CALL]:{key:"wallet_transfer_notif_contract_interaction_fail"},[g.AUTHORIZATION]:{key:"wallet_transfer_notif_approval_fail",params:{first:c==null?void 0:c.coinSymbol}},[g.CANCEL_AUTHORIZATION]:{key:"wallet_transfer_notif_cancel_approval_fail",params:{first:c==null?void 0:c.coinSymbol}},[g.CONTRACT_DEPLOY]:{key:"developer_mode_dapp_toast_deployfailed"}},h,_,v,b,E;u===C.PENDING?(h=ee.TYPE.success,a===g.CANCEL_AUTHORIZATION?(_="wallet_transfer_notif_cancel_approval_submit",v={first:c==null?void 0:c.coinSymbol}):_="wallet_transfer_notif_transaction_submit"):(u===C.SUCCEED?(h=ee.TYPE.success,_=(t=m[a])==null?void 0:t.key,v=(s=m[a])==null?void 0:s.params):(h=ee.TYPE.error,_=(r=f[a])==null?void 0:r.key,v=(i=f[a])==null?void 0:i.params),u!==C.DROPPED&&(b=o(l),E="wallet_transfer_notif_view_on_explorer")),ee[h]({title:e(_,v)||_,desc:b?en.default.createElement(ro,{url:b,urlText:e(E)}):null,duration:3})}}},tn=Un;p();d();var on=e=>async()=>await te().rpcEvmAddTransaction(e),qe=e=>async()=>await te().rpcEvmUpdateTransaction(e),nn=e=>async()=>await te().rpcEvmConfirmTransaction(e),Ze=e=>async()=>await te().rpcEvmFindTransaction(e);function Fn(e){let o={to:e.to,value:(0,M.addHexPrefix)(ye(e.value)),gasLimit:(0,M.addHexPrefix)(ye(e.gasLimit)),gasPrice:(0,M.addHexPrefix)(ye(e.gasPrice)),nonce:(0,M.addHexPrefix)(ye(e.nonce))};return e.data&&(o.data=e.data),o}function Hn(e){let o=(0,M.keccak)((0,M.toBuffer)((0,M.addHexPrefix)(e),"hex")).toString("hex");return(0,M.addHexPrefix)(o)}function At(){let e=T(L),o=F();return k(n=>{let{type:t,txParams:s,extraParams:r}=n,i=t;return i||(s.to?i=g.CONTRACT_CALL:i=g.CONTRACT_DEPLOY),{id:Tt(),type:i,txParams:{...Fn(s),from:s.from||o,chainId:e.chainId},status:C.UNAPPROVED,createTime:+new Date,txPool:[],isCanceling:!1,isSpeeding:!1,extraParams:r||{}}})}function Dt(){let e=I(),o=H(),n=tn();return k(async t=>{if(!t)throw new Error("tx meta error");let{from:s}=t.txParams,r=await te().signRpcEvmTransaction(t.txParams,s),i=a=>e(qe({txId:t.id,tx:a}));return i({rawTx:r,txHash:Hn(r),status:C.PENDING}),new Promise((a,u)=>{o.eth.currentProvider.send({method:"eth_sendRawTransaction",params:[r],jsonrpc:"2.0",id:Tt()},async(l,c)=>{var m;if((c==null?void 0:c.error)||l){let f=((m=c==null?void 0:c.error)==null?void 0:m.message)||(l==null?void 0:l.message);u((c==null?void 0:c.error)||l);let h=await e(nn({txId:t.id,tx:{status:C.DROPPED,finishTime:+new Date,errorMessage:f},checkPoolEmpty:!0}));((h==null?void 0:h.status)===C.PENDING||(h==null?void 0:h.status)===C.DROPPED)&&n(h)}else{let f=await i({sendTime:+new Date});n(f),a({id:t.id,txHash:c.result})}})})})}function sn(){let e=I(),o=At(),n=Dt();return k(t=>{let s=o(t);return e(on(s)),n(s)})}function rn(){let e=I(),o=At(),n=Dt();return k(t=>{let{type:s,txParams:r,extraParams:i}=t,a=w(r.gasPrice),u=o({type:s,txParams:{...r,gasPrice:J(S(a,1.2),0)},extraParams:i}),{id:l,txPool:c}=t;return t.id=u.id,u.id=l,t.txPool=[],e(qe({txId:l,tx:{...u,isSpeeding:!0,txPool:[t,...c]}})),n(u)})}function an(){let e=I(),o=z(!0),n=At(),t=Dt();return k(async s=>{let{txParams:r,extraParams:i}=s,{from:a,gasPrice:u,gasLimit:l,nonce:c,chainId:m}=r,f=o.find(({address:b})=>!b),h=n({type:g.TRANS_OUT,txParams:{to:a,value:"0x0",gasPrice:J(S(w(u),1.2),0),gasLimit:l,nonce:c,chainId:m},extraParams:i}),{id:_,txPool:v}=s;return s.id=h.id,h.id=_,s.txPool=[],e(qe({txId:_,tx:{...h,isCanceling:!0,txPool:[s,...v],extraParams:{toAddress:a,tokenAddress:"",coinSymbol:f==null?void 0:f.symbol,value:"0"}}})),t(h)})}p();d();var cn=async(e,o)=>{let n;try{n=await o.eth.getCode(e)}catch{n=null}return{isContractAddress:n&&n!=="0x"&&n!=="0x0"}};p();d();var R=y(N());var ln=y(Dn());p();d();var $=y(N());var Et=y(He());function Ke(e){let{wait:o=7e3}=e!=null?e:{},n=H(),[t,s]=(0,$.useState)(!1),[r,i]=(0,$.useState)(null),a=k(async()=>{let m;try{s(!0),m=await n.eth.getGasPrice()}finally{s(!1)}return i(m),m}),u=(0,$.useRef)(null),l=(0,$.useRef)(!1),c=()=>{l.current=!0,clearTimeout(u.current)};return(0,$.useEffect)(()=>{let m=()=>{a().finally(()=>{l.current||(u.current=setTimeout(m,o))})};m()},[]),co(c),{loadingChainGasPrice:t,chainGasPrice:r,requestChainGasPrice:a}}function Ve(e){let o=H(),n=F(),{to:t,data:s,value:r}=e||{},[i,a]=(0,$.useState)(!1),[u,l]=(0,$.useState)(null),{run:c}=lo(async({to:m,data:f,value:h}={})=>{let _;if(!m||!Ht(m,{allowNonPrefixed:!1}))_=21e3;else{f?Et.default.utils.isHex(f)?f=Rt(f):f=Et.default.utils.stringToHex(f):f=void 0;try{a(!0),_=await o.eth.estimateGas({from:n,to:m,data:f,value:h})}catch{_=0}finally{a(!1)}}return l(_),_},{wait:500});return(0,$.useEffect)(()=>{c(e)},[t,s,r]),{loadingChainGasLimit:i,chainGasLimit:u,requestChainGasLimit:c}}function un(e){let{id:o,gasPrice:n}=e,{chainGasPrice:t}=Ke(),[s,r]=(0,R.useState)(null),[i,a]=(0,R.useState)(null),[u,l]=(0,R.useState)(!0);return(0,R.useEffect)(()=>{let c=Z(n?w(n):t);r(c),a(c),l(!1)},[t,o,n]),[{suggested:s,custom:i,pending:u},a]}function mn(e){let{id:o,gas:n,to:t,data:s}=e,{chainGasLimit:r}=Ve({to:t,data:s}),[i,a]=(0,R.useState)(null),[u,l]=(0,R.useState)(null),[c,m]=(0,R.useState)(!0);return(0,R.useEffect)(()=>{let f=n?w(n):r;a(f),l(f),m(!1)},[r,o,n]),[{suggested:i,custom:u,pending:c},l]}function pn({from:e,gasPrice:o,gasLimit:n,value:t,symbol:s}){let{symbol:r,usdToThisRate:i}=T(ue),[a,u]=(0,R.useState)(!0),l=z(!1,!1,!1),{chainId:c}=T(L),m=l.find(E=>E.account===e&&E.chainId===c);(0,R.useEffect)(()=>{!o.pending&&!n.pending&&u(!1)},[o.pending,n.pending]);let f=(0,R.useMemo)(()=>{let E=S(`${o.custom||o.suggested||0}`,`${n.custom||o.suggested||0}`),B=oo(E),j=Xt(B),st=`${oe(J(j,(m==null?void 0:m.decimals)||6))} ${s}`,rt=ke({amount:j,rate:i,symbol:r},{useApproximate:!0}),it=U(w(t||0)),at=oe(J(new ln.default(j).add(it),(m==null?void 0:m.decimals)||6)),bt=pe(at,m==null?void 0:m.balance);return{gasInCoin:st,gasInFiat:rt,totalInCoin:at,lackCoin:bt}},[o.custom,n.custom,t,m==null?void 0:m.balance]),{gasInCoin:h,gasInFiat:_,totalInCoin:v,lackCoin:b}=f;return{gasDisplay:`${h} ${_}`,totalDisplay:`${v} ${s}`,lackCoin:b,loading:a}}function Rn({data:e,to:o}){let n=H(),[t,s]=(0,P.useState)(""),[r,i]=(0,P.useState)(!1);return(0,P.useEffect)(()=>{(async()=>{if(e&&!o){s(O.DEPLOY_CONTRACT);return}try{let l=ct(e),c=l==null?void 0:l.name,m=[O.TOKEN_METHOD_APPROVE,O.TOKEN_METHOD_TRANSFER,O.TOKEN_METHOD_TRANSFER_FROM].find(f=>f.toLowerCase()===c.toLowerCase());if(m){s(m);return}}catch{}i(!0);let{isContractAddress:u}=await cn(o,n);s(u?O.CONTRACT_INTERACTION:O.SENT_ETHER),i(!1)})()},[e,o]),[t,r]}function Bn({data:e,type:o}){let n,t,s,r;try{let i=ct(e),a=$t(i);n=Mt(i),r=a,t=o===O.TOKEN_METHOD_APPROVE,s=t&&Number(r)===0}catch{}return{address:n,isApprove:t,isRevoke:s,amount:r}}function Mn(e){let o=yt(),[n,t]=(0,P.useState)({}),[s,r]=(0,P.useState)(!1),i=async()=>{try{r(!0);let{symbol:a,decimals:u}=await o(e);t({symbol:a,decimals:u}),r(!1)}catch{r(!1)}};return(0,P.useEffect)(()=>{e&&i()},[e]),[n,s]}function $n(e){let o=D(),[n,t]=(0,P.useState)(0),{isApprove:s,formattedAmount:r,decimals:i,symbol:a}=e;(0,P.useEffect)(()=>{s&&t(r)},[s,r]);let u=(0,P.useMemo)(()=>n>=10**13?o("wallet_dapp_connection_subtitle_approval_amount_unlimitied"):`${oe(be(n,i))}${a||""}`,[n,i,a]);return[{...e,customApproveAmount:n,approveAmountDisplay:u},t]}function Wn({origin:e,isApprove:o,isRevoke:n,symbol:t}){let s=D(),r=T(zt),a=T(Kt)[e]||{},[u,l]=(0,P.useState)({});return(0,P.useEffect)(()=>{let c=null,m=null,f=null;o?(c=null,m=t,f=n?s("wallet_approval_subtitle_revoke_approval_desc",{tokenSymbol:t}):s("wallet_dapp_conncetion_alert_approve_tip",{name:a.name,tokenSymbol:t})):(c=a.icon,f=a.host,m=a.name),l({icon:c,host:f,name:m})},[n,t]),{...u,originInfo:a,wallet:`${r.keyringName} - ${r.walletName}`}}function zn(e){let{nonce:o,suggestedNonce:n}=We(e),[t,s]=(0,P.useState)(0),[r,i]=(0,P.useState)(!0);return(0,P.useEffect)(()=>{s(n),i(!1)},[n]),[{suggested:o,custom:t,pending:r},s]}function qn(){return T(L)}var Zn=({tx:e,gasLimit:o,gasPrice:n,nonce:t,txData:s,tokenInfo:r,chain:i,approvedAmount:a,formattedAmount:u,txType:l})=>{let{from:c,to:m,value:f,data:h}=e,_={from:c,to:m,value:f,gasLimit:o,gasPrice:n,nonce:t,data:h},b={[O.DEPLOY_CONTRACT]:g.CONTRACT_DEPLOY,[O.CONTRACT_INTERACTION]:g.CONTRACT_CALL,[O.TOKEN_METHOD_APPROVE]:g.AUTHORIZATION,[O.SENT_ETHER]:g.TRANS_OUT,[O.TOKEN_METHOD_TRANSFER]:g.TRANS_OUT,[O.TOKEN_METHOD_TRANSFER_FROM]:g.TRANS_OUT}[l]||g.CONTRACT_CALL;s.isRevoke&&(b=g.CANCEL_AUTHORIZATION);let E={};return l===O.TOKEN_METHOD_APPROVE&&(E.approvedAmount=a,E.coinSymbol=r.symbol,E.tokenAddress=m,E.approvedAddress=s.address),l===O.SENT_ETHER&&(E.value=U(w(f)),E.toAddress=m,E.coinSymbol=i.symbol),(l===O.TOKEN_METHOD_TRANSFER||l===O.TOKEN_METHOD_TRANSFER_FROM)&&(E.value=u,E.tokenAddress=m,E.toAddress=s.address,E.coinSymbol=r.symbol),{type:b,txParams:_,extraParams:E}};function Kn(e,o){let n=I(),t=Ie(),s=sn(),[r,i]=(0,P.useState)(!1);return[{sign:async()=>{i(!0),s(e).then(async({txHash:l})=>{await n(ho(o,{isTxFinished:!0,hash:l})),t.push(me)}).catch(l=>{ee.error({title:l==null?void 0:l.message}),i(!1)})},cancel:async()=>{await n(go(o)),t.push(me)}},r]}function Xi(e){let o=D(),[n]=Rn(e),t=Bn({data:e.data,type:n}),[s,r]=Mn(e==null?void 0:e.to),i=Wn({origin:e.origin,...t,...s}),a=(0,P.useMemo)(()=>Bt((t==null?void 0:t.amount)||0,s==null?void 0:s.decimals).toFixed(),[t==null?void 0:t.amount,s==null?void 0:s.decimals]),[u,l]=$n({...t,...s,formattedAmount:a}),c=qn(),m={...c,name:c.name||c.chainName},[f,h]=zn(e.from),[_,v]=un(e),[b,E]=mn(e),B=pn({from:e.from,gasPrice:_,gasLimit:b,value:e.value,symbol:m.symbol||m.ticker}),j=Zn({tx:e,gasLimit:b.custom||b.suggested,gasPrice:Se(_.custom),nonce:f.custom||f.suggested,txData:t,tokenInfo:s,chain:m,approvedAmount:u.customApproveAmount,formattedAmount:a,txType:n}),[{sign:ve,cancel:st},rt]=Kn(j,e.id),it=(0,P.useMemo)(()=>{switch(n){case O.DEPLOY_CONTRACT:return o("developer_mode_history_title_contract_eployment");case O.TOKEN_METHOD_APPROVE:return t!=null&&t.isRevoke?o("wallet_extension_popup_btn_revoke_approval"):o("wallet_extension_popup_btn_approve");default:return o("wallet_extension_popup_title_contract_interaction")}},[n,t==null?void 0:t.isRevoke]);return[{type:n,title:it,auth:{...u,...s,formattedAmount:a},meta:i,chain:m,nonce:f,fee:B,gas:{price:_,limit:b},loading:{sign:rt,token:r}},{sign:ve,cancel:st,setNonce:h,setGasLimit:E,setGasPrice:v,setAuthAmount:l}]}p();d();var Ye=y(N());function ca(){let e=I(),o=Ie(),n=T(To),t=T(_o),[s,r]=(0,Ye.useState)({}),i=l=>{let{id:c,origin:m,requestData:f,type:h,requestData:{chainId:_}}=l;return{id:c,origin:m,...f,requestData:f,chainIdToDisplay:parseInt(_,16),...t[l.origin],switchType:h,explorers:f.blockExplorerUrl}};return(0,Ye.useEffect)(()=>{let l=n.length-1;r(i(n[l]))},[n]),[s,{cancel:async()=>{await e(Qt(s.id)),o.push(me)},approve:async()=>{let{rpcUrl:l,ticker:c,blockExplorerUrl:m,chainId:f,faucetUrl:h,icon:_,chainName:v}=s;await e(io({chainId:f,explorerUrl:m,faucetUrl:h,icon:_,name:v,rpcUrl:l,symbol:c})),await e(Jt(s.id,s.requestData)),o.push(me)}}]}p();d();function Ta(){let{unapprovedStList:e}=Wo(),o=z(),n=e[0];return o.forEach(t=>{t.address===(n==null?void 0:n.address)&&(n.amount=t.balance||0,n.currencyAmountFormated=t.marketValue||"$0.00"),mo(n==null?void 0:n.image)?n.image=n.image[0]:po(n==null?void 0:n.image)&&(n.image=null)}),n}p();d();function ge(e,{symbol:o,decimals:n}={}){let t;return e=oe(J(e,n||18)),e==="0"?t="0":t=ce.thousandFormat(e),o&&(t+=` ${o}`),t}p();d();var Nt=y(N()),wt=y(so());p();d();var Vn={lightBlue:{color:"#fff",background:"#8DBBFF"},deepBlue:{color:"#fff",background:"#277DFF"}},Yn={larger:{size:56,fontSize:30},large:{size:32,fontSize:20},normal:{size:24,fontSize:14},small:{size:20,fontSize:12}};function Jn({icon:e,className:o,text:n,size:t="normal",fontSize:s,theme:r,color:i,background:a}){if(!n)return null;let u=n[0].toUpperCase(),l,c;if(r){let _=Vn[r];l=_==null?void 0:_.color,c=_==null?void 0:_.background}let m,f;if(typeof t=="string"){let _=Yn[t];m=_==null?void 0:_.size,f=_==null?void 0:_.fontSize}else m=t.size;let h={width:`${m}px`,height:`${m}px`};return e?Nt.default.createElement("img",{src:e,style:h,className:(0,wt.default)("capitalize-letter",o)}):(h={...h,fontSize:`${s||f}px`,color:i||l,background:a||c},Nt.default.createElement("div",{style:h,className:(0,wt.default)("capitalize-letter",o)},u))}var V=Jn;p();d();var Je=y(N());function Ja(){let e=T(Uo),o=T(Fo),n=T(Po),t=T(ko);return Ue(no,U)(n?Se(n):e,t||o)}function De(e){let o=_e(),{symbol:n,usdToThisRate:t}=T(ue),s=S(o==null?void 0:o.price,t),r=ge(e,{symbol:o==null?void 0:o.symbol,decimals:o==null?void 0:o.decimals}),i=ke({amount:e,rate:s,symbol:n},{useApproximate:!0,beforeApproximate:a=>Le(a,0)?"0":null});return`${r} ${i}`}function Qa(){let e=I(),{chainGasPrice:o,requestChainGasPrice:n}=Ke(),t=T(bo),s=T(So),r=T(Go),i=T(Oo),a=T(Lo),u=!s,{chainGasLimit:l,requestChainGasLimit:c,loadingChainGasLimit:m}=Ve({to:u?t:s,data:r,value:u?i:null,gasPrice:a});return(0,Je.useEffect)(()=>{e(Ho(o))},[o]),(0,Je.useEffect)(()=>{e(Ro(l))},[l]),{requestChainGasPrice:n,loadingChainGasLimit:m,requestChainGasLimit:c}}function Xa(){let e=I(),{nonce:o,suggestedNonce:n,request:t}=We();return(0,Je.useEffect)(()=>{e(Bo(n))},[o,n]),{nonce:o,suggestedNonce:n,request:t}}p();d();p();d();var X=y(N());p();d();var vt=y(N());var Qn=({tx:e,onBack:o})=>{let n=D(),{type:t,extraParams:s}=e,r=Re[t],i=t===g.AUTHORIZATION||t===g.CANCEL_AUTHORIZATION?n(r,{symbol:(s==null?void 0:s.coinSymbol)||""}):n(r);return vt.default.createElement(Co,{title:i,onBack:o})},dn=vt.default.memo(Qn);p();d();var Q=y(N());var{TRANS_OUT:fn,CONTRACT_CALL:Tn,AUTHORIZATION:Qe,CANCEL_AUTHORIZATION:Xe,CONTRACT_DEPLOY:_n}=g,Xn={[Qe]:"wallet_extension_header_approval_title_approve",[Xe]:"wallet_extension_header_approval_title_cancel_approval"},jn={[Qe]:"wallet_extension_header_approval_title_for",[Xe]:"wallet_extension_header_approval_title_for"},es="/static/images/tx-history/default-coin.svg",ts="/static/images/tx-history/default-protocol.svg";function os(e){let o=D(),{type:n}=e,t=_e("",!0);switch(n){case fn:{let{value:s,coinSymbol:r}=e.extraParams||{},i=`- ${s} ${r||o("wallet_extension_history_text_unknown_token")}`;return{items:[{icon:Q.default.createElement(V,{icon:!r&&es,text:r,size:"large",theme:"lightBlue"}),title:Q.default.createElement(mt,{maxWidth:"284px",text:i})}]}}case Tn:{let{value:s}=e.txParams||{},r=w(s);if(Le(r,0))return null;let i=`- ${ge(U(r),{symbol:t.symbol,decimals:t==null?void 0:t.decimals})}`;return{items:[{icon:Q.default.createElement(V,{text:t.symbol,size:"large",theme:"lightBlue"}),title:Q.default.createElement(mt,{text:i,maxWidth:"284px"})}]}}case Qe:case Xe:{let{coinSymbol:s}=e.extraParams||{};return s?{label:o(Xn[n]),items:[{icon:Q.default.createElement(V,{text:s,size:"large",theme:"lightBlue"}),title:s}]}:null}case _n:default:return null}}function ns(e){let o=D(),{type:n,extraParams:t}=e;switch(n){case Qe:case Xe:{let{approvedAddress:s}=t||{};return{label:o(jn[n]),items:[{icon:ts,title:Q.default.createElement(de,{className:"rpc-mode-evm-tx-detail-flow__authorization",label:W(s),value:s,message:o("wallet_extension_popup_title_receiving_address_copied")})}]}}case fn:case Tn:case _n:default:return null}}function ss({tx:e}){let o=os(e),n=ns(e);return Q.default.createElement(xo,{data:[o,n]})}var gn=ss;p();d();var A=y(N());var hn=y(so());function rs({status:e,isCanceling:o,isSpeeding:n,isShowPending:t}){let s=D(),r,i="";return e===C.SUCCEED?(r=fe.TxStatusInfoEnum.SUCCESS,i=s("wallet_extension_history_status_completed")):e===C.FAILED||e===C.DROPPED?(r=fe.TxStatusInfoEnum.FAILED,i=s("wallet_extension_history_status_failed")):e===C.PENDING&&(t?(r=fe.TxStatusInfoEnum.PENDING,o?i=s("wallet_extension_send_status_canceling"):n?i=s("wallet_extension_send_status_speedingup"):i=s("wallet_extension_history_list_status_pending")):(r=fe.TxStatusInfoEnum.WAITING,i=s("wallet_extension_history_list_status_waiting"))),A.default.createElement(fe,{label:s("wallet_extension_mid_text_status"),status:r,statusText:i})}function is({status:e,sendTime:o,finishTime:n}){let t=D(),s=T(le);return A.default.createElement(K,{label:t("wallet_extension_mid_text_time"),value:ae(e===C.PENDING?o:n,{format:"yyyyMMddHHmmss",locale:s})})}function as({type:e,extraParams:o}){let n=D(),{approvedAmount:t}=o||{};return e!==g.AUTHORIZATION?null:A.default.createElement(K,{label:n("wallet_extension_mid_text_approved_amount"),value:t>=10**13?n("wallet_extension_mid_text_unlimited"):t})}function cs({status:e,blockNumber:o}){let n=D(),t=T(Ge),s=to(t,o);return e===C.PENDING||e===C.DROPPED||Oe(s,0)||Pe(s,14)?null:A.default.createElement(K,{label:n("wallet_extension_mid_text_block_confirmation"),value:s})}function ls(){let e=D(),o=T(L);return A.default.createElement(K,{label:e("wallet_extension_mid_text_network"),value:A.default.createElement(A.default.Fragment,null,A.default.createElement(V,{className:"rpc-mode-evm-tx-detail-info__network-icon",icon:o.icon,text:o.name,size:"small",theme:"deepBlue"}),o.name)})}function us({txParams:e}){let o=D(),{from:n}=e;return A.default.createElement(K,{label:o("wallet_extension_mid_text_from"),value:A.default.createElement(de,{label:W(n),value:n,message:o("wallet_extension_popup_title_receiving_address_copied")})})}function ms({status:e,type:o,extraParams:n,txParams:t}){let s=D(),{toAddress:r,tokenAddress:i,contractAddress:a}=n||{},{to:u}=t,l,c;if(o===g.TRANS_OUT)l=s("wallet_extension_mid_text_to"),c=r;else if(o===g.CONTRACT_DEPLOY)if(e===C.SUCCEED)l=s("developer_mode_history_subtitle_developer"),c=a;else return null;else l=s("wallet_extension_mid_text_interaction_address"),o===g.AUTHORIZATION||o===g.CANCEL_AUTHORIZATION?c=i:c=u;return A.default.createElement(K,{label:l,value:A.default.createElement(de,{label:W(c),value:c,message:s("wallet_extension_popup_title_receiving_address_copied")})})}function ps({status:e,gasUsed:o,txParams:n}){let t=D(),s=T(L),{gasLimit:r,gasPrice:i}=n,a=Ue(S,U,ce.thousandFormat),u=ge(a(i,o||r),{symbol:s==null?void 0:s.symbol,decimals:s==null?void 0:s.decimals});return A.default.createElement(yo,{label:t("wallet_extension_mid_text_network_fee"),value:u,tip:e===C.PENDING&&t("wallet_extension_popup_cancle_transaction_gasprice_gaslimit",{gasPrice:ce.thousandFormat(Z(i)),gasLimit:ce.thousandFormat(r)})})}function ds({txParams:e}){let o=D(),{data:n}=e,[t,s]=(0,A.useState)(!1);return n?A.default.createElement("div",{className:"rpc-mode-evm-tx-detail-info-data"},A.default.createElement("div",{className:"rpc-mode-evm-tx-detail-info-data__inner"},A.default.createElement("div",{className:"rpc-mode-evm-tx-detail-info-data__title",onClick:()=>{s(r=>!r)}},o("developer_mode_history_title_transaction_data"),A.default.createElement(Lt,{className:(0,hn.default)("okx-wallet-plugin-arrow-small-down rpc-mode-evm-tx-detail-info-data__arrow",{"rpc-mode-evm-tx-detail-info-data__arrow--spread":t}),style:{fontSize:12}})),t&&A.default.createElement("div",{className:"rpc-mode-evm-tx-detail-info-data__data"},n))):null}function fs({tx:e}){let o=D(),{txHash:n,txParams:{nonce:t}}=e;return A.default.createElement("div",{className:"rpc-mode-evm-tx-detail-info"},A.default.createElement(rs,{...e}),A.default.createElement(is,{...e}),A.default.createElement(as,{...e}),A.default.createElement(cs,{...e}),A.default.createElement(ls,{...e}),A.default.createElement(us,{...e}),A.default.createElement(ms,{...e}),A.default.createElement(ps,{...e}),A.default.createElement(K,{label:o("developer_mode_history_title_nonce"),value:w(t)}),A.default.createElement(K,{label:o("wallet_extension_mid_text_transaction_hash"),value:A.default.createElement(de,{label:W(n),value:n,message:o("wallet_extension_popup_title_transaction_hash_copied")})}),A.default.createElement(ds,{...e}))}var Cn=fs;p();d();var q=y(N());p();d();p();d();var je=y(N());function Ts({txId:e,onClose:o}){let n=I(),t=Me(e),s=rn(),[r,i]=(0,je.useState)(!1),a=async()=>{if(r)return;i(!0);let _=await n(Ze(t.id));if(!_||_.status!==C.PENDING){i(!1),o();return}s(t).catch(v=>{console.log(v)}).finally(()=>{i(!1),o()})},{gasPrice:u,gasLimit:l}=(t==null?void 0:t.txParams)||{};u=w(u),l=w(l);let c=De(U(S(u,l))),m=`=Gas Price(${Z(u)})`,f=De(U(S(S(u,1.2),l))),h=`=Gas Price(${Z(S(u,1.2))})`;return je.default.createElement(G.EthereumTxSpeedDialogBase,{visible:!!t,onConfirm:a,loading:r,onClose:o,oldGasFeeDisplay:c,oldGasDetailDisplay:m,newGasFeeDisplay:f,newGasDetailDisplay:h})}var Ee=Ts;p();d();var et=y(N());function _s({txId:e,onClose:o}){let n=I(),t=Me(e),s=an(),r=_e(),[i,a]=(0,et.useState)(!1),u=async()=>{if(i)return;if(a(!0),(await n(Ze(t.id))).status!==C.PENDING){a(!1),o();return}s(t).catch(_=>{console.log(_)}).finally(()=>{o(),a(!1)})},{gasPrice:l,gasLimit:c}=(t==null?void 0:t.txParams)||{};l=w(l),c=w(c);let m=De(U(S(S(l,1.2),c))),f=`Gas Price (${Z(S(l,1.2))} GWEI) *Gas Limit(${c}) `;return et.default.createElement(G.EthereumTxCancelDialogBase,{visible:!!t,onConfirm:u,loading:i,onClose:o,chainSymbol:r==null?void 0:r.symbol,newGasFeeDisplay:m,newGasDetailDisplay:f})}var Ne=_s;p();d();var Y=y(N());p();d();var re=y(N());p();d();var we=y(N());var xn=({onClick:e,children:o})=>we.default.createElement(Ce,{className:"rpc-evm-tx-actions__button",category:Ce.CATEGORY.outline,type:Ce.TYPE.primary,size:Ce.SIZE.xs,onClick:n=>{n.stopPropagation(),e&&e(n)}},o);function gs({tx:e,onCancel:o,onSpeed:n}){let t=D(),{isShowPending:s,isCanceling:r}=e,i=t(r?"wallet_extension_history_list_status_btn_speed_up_cancellation":"wallet_extension_history_list_status_btn_cancel_transaction");return s?we.default.createElement("div",{className:"rpc-evm-tx-actions"},we.default.createElement(xn,{onClick:o},i),!r&&we.default.createElement(xn,{onClick:n},t("wallet_extension_history_list_status_btn_speed_up"))):null}var yn=gs;p();d();function tt({type:e,extraParams:o}){let n=D(),t=Re[e],s,r=n(t);return e===g.TRANS_OUT?s="/static/images/tx-history/coin-send.svg":e===g.AUTHORIZATION||e===g.CANCEL_AUTHORIZATION?(s="/static/images/tx-history/coin-approve.svg",r=n(t,{symbol:o==null?void 0:o.coinSymbol})):e===g.CONTRACT_CALL?s="/static/images/tx-history/coin-contract.svg":e===g.CONTRACT_DEPLOY&&(s="/static/images/tx-history/contract-deploy.svg"),{icons:[s],title:r}}function ot({type:e,txParams:o,extraParams:n}){let t=T(L);if(e===g.TRANS_OUT)return[{direction:lt.OUT,coinAmount:`${(n==null?void 0:n.value)||""} ${(n==null?void 0:n.coinSymbol)||""}`}];let{value:s}=o||{},r=w(s);return pe(r,0)?[{direction:lt.OUT,coinAmount:`${U(r)} ${t.symbol||""}`}]:[]}function nt(e){var t;let o=D(),n;return e.type===g.TRANS_OUT?n=`${o("wallet_extension_history_list_send_to")}   ${W(e.extraParams.toAddress)}`:e.type===g.AUTHORIZATION||e.type===g.CANCEL_AUTHORIZATION?n=W((t=e.extraParams)==null?void 0:t.approvedAddress):n=W(e.txParams.to),n}function hs({isShowPending:e,isSpeeding:o,isCanceling:n}){let t=D(),s="",r="";return e?(s=xe.PENDING,o?r=t("wallet_extension_send_status_speedingup"):n?r=t("wallet_extension_send_status_canceling"):r=t("wallet_extension_history_list_status_pending")):(s=xe.WAITING,r=t("wallet_extension_history_list_status_waiting")),{labelType:s,labelText:r}}function Cs(e){let o=nt(e),n=T(le),t=[o],s=ae(e.sendTime,{format:"yyyyMMddHHmmss",locale:n});return t.push(s),t}function xs({tx:e,onClick:o,onCancel:n,onSpeed:t}){let{icons:s,title:r}=tt(e),{labelType:i,labelText:a}=hs(e),u=ot(e),l=Cs(e),c=Fe(l,u),m=re.default.createElement(G.Label,{className:"tx-history-ml4",type:i,text:a});return re.default.createElement(G.ItemContainer,{onClick:f=>{o&&o(e,f)}},re.default.createElement(G.Row,{assets:u,align:c},re.default.createElement(G.Info,{icons:s,title:r,label:m,details:l}),re.default.createElement(G.Assets,{assets:u})),re.default.createElement(yn,{tx:e,onCancel:n,onSpeed:t}))}var It=xs;function ys({txs:e,onClick:o}){let[n,t]=(0,Y.useState)(null),[s,r]=(0,Y.useState)(null);return Y.default.createElement(Y.default.Fragment,null,e.map(i=>Y.default.createElement(It,{key:i.id,tx:i,onClick:o,onSpeed:()=>{t(i.id)},onCancel:()=>{r(i.id)}})),Y.default.createElement(Ee,{txId:n,onClose:()=>{t(null)}}),Y.default.createElement(Ne,{txId:s,onClose:()=>{r(null)}}))}var As=ys;p();d();var ie=y(N());function Ds({txs:e,onClick:o}){let n=T(le),{dates:t}=T(Mo),s=(0,ie.useMemo)(()=>{let r=e.map(c=>({...c,groupDate:ae(c.sortTime,{format:"yyyyMMdd",locale:n})})),i=[],a=0,u,l;return r.forEach(c=>{let{groupDate:m}=c;u!==m&&(u=m,l=[],i[a++]={date:u,list:l}),l.push(c)}),i},[e,t]);return ie.default.createElement(G.List,null,s.map(({date:r,list:i},a)=>ie.default.createElement("div",{key:a},ie.default.createElement(G.Date,null,r),i.map(u=>ie.default.createElement(u.Comp,{key:u.id,tx:u,onClick:o})))))}var Es=Ds;p();d();var he=y(N());function Ns({status:e}){let o=D(),n="",t="";return(e===C.FAILED||e===C.DROPPED)&&(n=xe.FAILED,t=o("wallet_extension_history_status_failed")),{labelText:t,labelType:n}}function ws(e){return[nt(e)]}function vs({tx:e,onClick:o}){let{icons:n,title:t}=tt(e),s=ot(e),r=ws(e),i=Fe(r,s),{labelType:a,labelText:u}=Ns(e),l=he.default.createElement(G.Label,{className:"tx-history-ml4",type:a,text:u});return he.default.createElement(G.ItemContainer,{onClick:c=>{o&&o(e,c)}},he.default.createElement(G.Row,{assets:s,align:i},he.default.createElement(G.Info,{icons:n,title:t,label:l,details:r}),he.default.createElement(G.Assets,{assets:s})))}var Is=vs;function Ss({tx:e}){let o=D(),n=$e(),{status:t,isShowPending:s,isCanceling:r}=e,[i,a]=(0,q.useState)(!1),[u,l]=(0,q.useState)(!1);return q.default.createElement(q.default.Fragment,null,(t===C.SUCCEED||t===C.FAILED)&&q.default.createElement(Ao,{url:n(e.txHash),text:o("wallet_extension_mid_link_explorer")}),s&&t===C.PENDING&&q.default.createElement(Do,{isShowCancel:!r,isShowSpeedUp:!r,isShowSpeedupCancel:r,onCancel:()=>{a(!0)},onSpeedUp:()=>{l(!0)}}),u&&q.default.createElement(Ee,{txId:e==null?void 0:e.id,onClose:()=>{l(!1)}}),i&&q.default.createElement(Ne,{txId:e==null?void 0:e.id,onClose:()=>{a(!1)}}))}var An=Ss;function bs({txId:e,onBack:o}){let t=Ct().find(({id:s})=>s===e);return t?X.default.createElement("div",{className:"rpc-mode-tx-detail"},X.default.createElement(dn,{tx:t,onBack:o}),X.default.createElement(Eo,{message:t.errorMessage}),X.default.createElement("div",{className:"rpc-mode-tx-detail__content"},X.default.createElement(gn,{tx:t}),X.default.createElement(Cn,{tx:t}),X.default.createElement(An,{tx:t}))):null}var Os=bs;p();d();var St=y(N());function Ps({symbol:e}){return St.default.createElement("div",{className:"rpc-mode-evm-title-header__title"},St.default.createElement(V,{className:"rpc-mode-evm-title-header__icon",text:e,theme:"lightBlue"}),e)}var Ls=Ps;export{C as a,g as b,Re as c,zo as d,H as e,Ko as f,Yo as g,Be as h,ir as i,z as j,_e as k,yt as l,On as m,Pn as n,Or as o,Ln as p,Pr as q,Gn as r,Lr as s,kr as t,Gr as u,tn as v,nn as w,sn as x,Rn as y,Bn as z,Mn as A,qn as B,Zn as C,Xi as D,ca as E,Wo as F,Us as G,Ta as H,ge as I,V as J,Ja as K,De as L,Qa as M,Xa as N,It as O,As as P,Es as Q,Is as R,Os as S,Ls as T};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

