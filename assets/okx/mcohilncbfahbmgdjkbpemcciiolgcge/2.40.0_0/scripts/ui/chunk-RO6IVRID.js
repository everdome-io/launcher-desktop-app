import{d as G,e as V,f as X,g as Te,h as wo,i as No,j as Do,k as Eo}from"./chunk-SRF3OTW4.js";import{B as Ro,D as Bo,N as Mo,O as $o,S as Wo,Y as zo,a as co,c as Be,e as _t,f as Io,g as bo,h as So,i as gt,j as Oo,k as ht,m as xt,o as Lo,p as Po,s as ko,u as Go,v as Uo,w as Fo,y as Ho}from"./chunk-SULN63BG.js";import{b as Re,d as k,f as yo}from"./chunk-CKFSIZPF.js";import{c as Ao}from"./chunk-P4R64FMZ.js";import{b as Tt}from"./chunk-4SCEKLXQ.js";import{a as vo}from"./chunk-VNM7HA44.js";import{Ya as io,Za as ao}from"./chunk-SBW523XW.js";import{g as Co}from"./chunk-HX34N4W4.js";import{a as dt}from"./chunk-TNVBYBO5.js";import{Ba as He,D as Fe,Ea as F,Ga as To,Qa as _o,Ua as go,eb as ho,fb as xo,j as lo,n as ft,o as uo,q as mo,qa as A,v as po,x as fo,y as P}from"./chunk-KRRNVCWZ.js";import{Af as pe,Ak as ro,Cb as Se,Db as me,Eb as Oe,Fb as Le,Gb as Mt,Gh as de,Hc as zt,Ib as Pe,Kb as K,Kf as ye,Lb as U,Mb as $t,Mh as to,Mk as D,Nk as Ae,Pa as oe,Pg as Jt,Rg as Qt,Sb as Wt,Sg as Xt,Tb as ke,Td as qt,Tg as O,Ub as Q,Vg as mt,Xd as Zt,Zb as se,Zd as Kt,_a as ne,cc as Ge,de as b,e as C,ee as T,eh as pt,fa as le,ga as ue,ha as Ut,i as p,ja as N,k as d,ke as Ue,kg as bn,kh as jt,na as Ft,ni as oo,nj as fe,oa as En,og as Vt,pa as Ht,tg as M,tk as no,ub as In,wa as Ce,wb as I,wk as so,xb as Rt,xh as eo,yb as be,yg as Yt,zb as Bt}from"./chunk-YC2Z7II3.js";p();d();var qo=C(N());function Zo(){let e=T(ro),o=e&&e.metadata?e.metadata.id:null,n=o?1:0,t=T(jt),s=t.length,r=T(oo),i=T(c=>{let m=c.metamask.suggestedTokens;return Object.values(m)}),a=i.length,u=T(to),l=u.length;return{unapprovedTxList:t,unapprovedTxCount:s,unapprovedSmCount:r,unapprovedStList:i,unapprovedStCount:a,unapprovedPermissionCount:n,unapprovedPermissionsRequestId:o,unapprovedSnList:u,unapprovedSnCount:l,unapprovedRequestCount:s+r+a+l+n}}function $s(){let e=T(s=>s.activeTab),o=T(so),n=(0,qo.useMemo)(()=>o.find(s=>s.origin===e.origin)||{},[o]),t=n.origin&&n.origin.replace(/^https?:\/\//iu,"");return{...n,origin:t}}p();d();p();d();var L=C(N());p();d();var y={UNAPPROVED:"unapproved",APPROVED:"approved",REJECTED:"rejected",SIGNED:"signed",SUBMITTED:"submitted",FAILED:"failed",DROPPED:"dropped",SUCCEED:"succeed",PENDING:"pending"},g={TRANS_OUT:1,AUTHORIZATION:2,CONTRACT_CALL:3,CANCEL_AUTHORIZATION:4,CONTRACT_DEPLOY:5},Me={[g.TRANS_OUT]:"wallet_extension_history_list_send",[g.CONTRACT_CALL]:"wallet_extension_history_list_contract_interaction",[g.AUTHORIZATION]:"wallet_extension_history_list_approval",[g.CANCEL_AUTHORIZATION]:"wallet_extension_history_list_revoke_approval",[g.CONTRACT_DEPLOY]:"developer_mode_history_title_contract_eployment"};p();d();var jo=C(Be());p();d();var Vo=C(N());p();d();var Ct=C(Be()),yt={},Sn=e=>{let o=new Ct.default(new Ct.default.providers.HttpProvider(e));return yt[e]=o,o},Ko=e=>yt[e]?yt[e]:Sn(e);var H=(e="")=>{let o=T(k),{isRpcMode:n}=T(Ao),{rpcUrl:t}=o;return(0,Vo.useMemo)(()=>n?Ko(e||t):{},[t,n])};var _e=C(N());p();d();var ie=C(N()),Yo=C(Be());var re=C(Ft());function At(e){let o=T(s=>s.metamask.rpcEvmTransactions||{},Kt),n=F(),t=T(k)||{};return(0,ie.useMemo)(()=>Object.values(o).filter(s=>{let{from:r,chainId:i}=s.txParams;return n===r&&i===t.chainId&&e(s)}),[o,n,t.chainId])}function Jo(){return At(e=>e.status===y.FAILED||e.status===y.SUCCEED)}function Qo(e){let[o,n]=e,t=+o,s=+Ut.add(1,"d",new Date(n));return r=>Oe(r,t)&&Se(r,s)}function Xo(e={}){let{dates:o}=e,n=At(t=>t.status===y.FAILED||t.status===y.SUCCEED||t.status===y.DROPPED);return(0,ie.useMemo)(()=>{let t=n;if(o){let s=Qo(o);t=t.filter(({finishTime:r})=>s(r))}return t.sort((s,r)=>r.finishTime-s.finishTime).map(s=>({...s,isShowPending:!1}))},[n,o])}function $e(e={}){let o=At(t=>t.status===y.PENDING),{dates:n}=e;return(0,ie.useMemo)(()=>{let t=(0,re.sortBy)(o,[s=>Yo.default.utils.hexToNumber(s.txParams.nonce)]).map((s,r)=>({...s,isShowPending:r===0}));if(n){let s=Qo(n);t=t.filter(({sendTime:r})=>s(r))}return t},[o,n])}function vt(){let e=$e(),o=Xo();return(0,ie.useMemo)(()=>[...e,...o],[e,o])}function We(e){let o=vt();return(0,ie.useMemo)(()=>e?o.find(({id:n})=>e===n):null,[e,o])}function pr({tokenAddress:e}){let o=$e(),n=Xo();return(0,ie.useMemo)(()=>[...o,...n].filter(({type:t,txParams:s,extraParams:r})=>{if(t===g.TRANS_OUT)return!e&&!(r!=null&&r.tokenAddress)||(0,re.toLower)(e)===(0,re.toLower)(r==null?void 0:r.tokenAddress);if(t===g.AUTHORIZATION||t===g.CANCEL_AUTHORIZATION)return(0,re.toLower)(e)===(0,re.toLower)(r==null?void 0:r.tokenAddress);if(t===g.CONTRACT_CALL){let{value:i}=s||{};return!e&&me(D(i),0)}return!1}),[o,n,e])}var On=(e,o,n)=>{let{username:t,password:s,protocol:r,host:i,pathname:a,search:u,hash:l}=new URL(e),c=a.endsWith("/")?`${a}${o}/${n}`:`${a}/${o}/${n}`,m=t?`${t}:${s}`:"";return new URL(`${r}//${m}${i}${c}${u}${l}`).toString()};function ze(){let e=T(k);return P(o=>e!=null&&e.explorerUrl?On(e==null?void 0:e.explorerUrl,"tx",o):null)}function Ln(e){let o=e.map(t=>{let{nonce:s}=t.txParams;return parseInt(s,16)}),n=Math.max.apply(null,o);return Number.isInteger(n)?n+1:0}function qe(e){let o=H(),n=F(),t=e||n,s=T(Re),r=ft(Jo()),i=ft($e()),[a,u]=(0,_e.useState)(!1),[l,c]=(0,_e.useState)(null),[m,f]=(0,_e.useState)(null),h=P(async()=>{let _;try{u(!0),_=await o.eth.getTransactionCount(t,"latest")}finally{u(!1)}let E=Ln(r.current),S=Math.max(_,E),w=i.current.map(te=>{let{nonce:Ie}=te.txParams;return jo.default.utils.hexToNumber(Ie)}),$=S;for(;w.includes($);)$+=1;return c(_),f($),{nonce:_,suggestedNonce:$}});return(0,_e.useEffect)(()=>{h()},[o,t,s]),{loadingNonce:a,nonce:l,suggestedNonce:m,request:h}}p();d();var ve=C(N()),Ze=C(Ft());var wt=C(bn());p();d();var kn=6,en=(e,o=kn)=>{if(!Number(e))return"0";let n=e==null?void 0:e.toString(),t=e.split(".")[1]||"";return(t==null?void 0:t.length)>o?ke(n,o&&Number(o)):n},tn=(e,o)=>{let{rpcUrl:n,chainId:t,account:s,isDeleted:r}=o;return Array.isArray(e)?e.filter(i=>{let a=!0;return t&&(a=a&&i.chainId===t),s&&(a=a&&i.account===s),r!==void 0&&(a=a&&(i.isDeleted||!1)===r),i.address||(a=a&&i.rpcUrl===n),a}):[]},on=(e,o={})=>{let{symbol:n,usdToThisRate:t,chainTokenPrice:s,chainTokenBalance:r}=o;return Array.isArray(e)?e.map(i=>{var h,_,E,S,w,$;let a,u,{chainId:l,decimals:c}=i,m=n;i.address?(a=((S=s==null?void 0:s[l])==null?void 0:S[i.address])||0,u=(($=(w=r==null?void 0:r[i.account])==null?void 0:w[l])==null?void 0:$[i.address])||0):(a=((h=s==null?void 0:s[l])==null?void 0:h.price)||0,u=((E=(_=r==null?void 0:r[i.account])==null?void 0:_[l])==null?void 0:E.balance)||0),u=en(u&&Rt(u,10**c));let f=en(I(u,I(a,t)));return{price:a,balance:u,...i,moneySymbol:m,marketValue:f}}):[]};var q=(e,o,n=!0)=>{let{chainId:t,rpcUrl:s}=T(k),r=T(_t),i=T(Io),a=T(bo),{symbol:u,usdToThisRate:l}=T(de),c=F(),m=(0,ve.useMemo)(()=>tn(r,{chainId:t,rpcUrl:s,account:n?c:void 0,isDeleted:o?void 0:!1}),[t,c,r]);return e?m:(0,ve.useMemo)(()=>on(m,{symbol:u,usdToThisRate:l,chainTokenPrice:i,chainTokenBalance:a}),[u,m,l,i,a])},ge=(e,o)=>{let n=q(o);return(0,ve.useMemo)(()=>n.find(t=>t.address===(e||void 0))||{},[e,n])},Nt=e=>{let o=e||H();return P(async n=>{let t=new o.eth.Contract(wt.default,n),s=await t.methods.symbol().call(),r=await t.methods.decimals().call();return{name:await t.methods.name().call(),symbol:s,decimals:r}},[o])},Gn=()=>{let e=H(),o=F();return P(async(n,t,s)=>{let r,i=s||e,a=t||o;return n?r=await new i.eth.Contract(wt.default,n).methods.balanceOf(a).call():r=await i.eth.getBalance(a,"latest"),r},[e,o])},Un=()=>P(async(e,o)=>{let n=o;typeof o=="string"&&(n=[o]);try{let{data:t}=await qt(Zt.getCoinPrice,{tokenAddresses:n,chainId:typeof e=="string"?Number.parseInt(e,16):e});return t}catch(t){return console.log(`fetch coin price failed 
${t}`),[]}},[]),Fr=()=>{let e=H(),o=b();return P(({chainId:n,injectWeb3:t,wallets:s=[]})=>{let r=t||e,i=new r.BatchRequest;s.forEach(a=>{i.add(r.eth.getBalance.request(a,"latest",(u,l)=>{u||o(ht({chainId:n,balance:l,account:a}))}))}),i.execute()},[])},Fn=()=>{let e=b(),o=F(),n=Un(),t=Gn();return P(async({chainId:s,address:r,injectAccount:i,injectWeb3:a})=>{let[u,l]=await Promise.all([n(s,r),t(r,i,a)]);return u!=null&&u.length&&e(Oo({chainId:s,price:u[0].price})),e(ht({chainId:s,balance:l,address:r,account:i||o})),!0},[t,o])},Hr=()=>{let e=F(),{chainId:o}=T(k),n=q(!0,!1,!1);return mo(()=>({chainId:o,chainTokens:n}),{chainId:o,account:e,needPollChainTokens:n},(t,s)=>!(0,Ze.isEqual)(t,s))},Hn=18,Rn=()=>{let e=b(),o=T(_t),n=F();return P((t,s,r)=>{if(!t&&!n&&!(r!=null&&r.account))return!1;let{rpcUrl:i}=r,a=o.find(l=>{let c=l.chainId===t&&l.address===s&&l.account===((r==null?void 0:r.account)||n);return s||(c=c&&l.rpcUrl===i),c});if(a){if(a.isDeleted===!0){let l={...a,...r,chainId:t,address:s,isDeleted:!1};return e(gt(l)),!0}return!1}let u={chainId:t,address:s,isDeleted:!1,account:n,decimals:Hn};return r&&typeof r=="object"&&Object.assign(u,r),e(So(u)),!0},[o,n])},Rr=e=>{let o=H(e),n=Rn(),t=Nt(o),s=Fn();return async(r,i)=>{let a=await t(i);n(r,i,a)&&await s(r,i,o)}},Br=()=>{let e=To(),o=q(!1,!1,!1);return(0,ve.useMemo)(()=>{let n=(0,Ze.groupBy)(o||[],"account");return(e==null?void 0:e.map(t=>{var a;let s="",r=(a=t.walletIdentities)==null?void 0:a.map(u=>{var f,h;let l=(f=u==null?void 0:u.account)==null?void 0:f[zt],{balance:c,symbol:m}=((h=n[l])==null?void 0:h.filter(({address:_})=>!_)[0])||{};return s=m,{...u,balance:c,symbol:m}}),i=r.reduce((u,l)=>be(u,l.balance),0);return{...t,marketValue:i,marketValueSymbol:s,walletIdentities:r}}))||[]},[o,e])},Mr=()=>{let e=b(),o=q(!0,!1,!1);return n=>{var t;(t=o==null?void 0:o.filter(({chainId:s,rpcUrl:r,address:i})=>!i&&s===n.chainId&&r===n.rpcUrl))==null||t.forEach(({chainId:s,account:r})=>{e(gt({chainId:s,account:r,...n}))})}};p();d();var W=C(In());p();d();var nn=C(N());var Bn=()=>{let e=A(),o=ze();return n=>{var t,s,r,i;if(n){let{type:a,status:u,txHash:l,extraParams:c}=n,m={[g.TRANS_OUT]:{key:"wallet_transfer_notif_send_success",params:{first:c==null?void 0:c.value,second:c==null?void 0:c.coinSymbol}},[g.CONTRACT_CALL]:{key:"wallet_transfer_notif_contract_interaction_success"},[g.AUTHORIZATION]:{key:"wallet_transfer_notif_approval_success",params:{first:c==null?void 0:c.coinSymbol}},[g.CANCEL_AUTHORIZATION]:{key:"wallet_transfer_notif_cancel_approval_success",params:{first:c==null?void 0:c.coinSymbol}},[g.CONTRACT_DEPLOY]:{key:"developer_mode_dapp_toast_deployed_successfully"}},f={[g.TRANS_OUT]:{key:"wallet_transfer_notif_send_fail",params:{first:c==null?void 0:c.value,second:c==null?void 0:c.coinSymbol}},[g.CONTRACT_CALL]:{key:"wallet_transfer_notif_contract_interaction_fail"},[g.AUTHORIZATION]:{key:"wallet_transfer_notif_approval_fail",params:{first:c==null?void 0:c.coinSymbol}},[g.CANCEL_AUTHORIZATION]:{key:"wallet_transfer_notif_cancel_approval_fail",params:{first:c==null?void 0:c.coinSymbol}},[g.CONTRACT_DEPLOY]:{key:"developer_mode_dapp_toast_deployfailed"}},h,_,E,S,w;u===y.PENDING?(h=oe.TYPE.success,a===g.CANCEL_AUTHORIZATION?(_="wallet_transfer_notif_cancel_approval_submit",E={first:c==null?void 0:c.coinSymbol}):_="wallet_transfer_notif_transaction_submit"):(u===y.SUCCEED?(h=oe.TYPE.success,_=(t=m[a])==null?void 0:t.key,E=(s=m[a])==null?void 0:s.params):(h=oe.TYPE.error,_=(r=f[a])==null?void 0:r.key,E=(i=f[a])==null?void 0:i.params),u!==y.DROPPED&&(S=o(l),w="wallet_transfer_notif_view_on_explorer")),oe[h]({title:e(_,E)||_,desc:S?nn.default.createElement(co,{url:S,urlText:e(w)}):null,duration:3})}}},sn=Bn;p();d();var rn=e=>async()=>await ne().rpcEvmAddTransaction(e),Ke=e=>async()=>await ne().rpcEvmUpdateTransaction(e),an=e=>async()=>await ne().rpcEvmConfirmTransaction(e),Ve=e=>async()=>await ne().rpcEvmFindTransaction(e);function Mn(e){let o={to:e.to,value:(0,W.addHexPrefix)(Ae(e.value)),gasLimit:(0,W.addHexPrefix)(Ae(e.gasLimit)),gasPrice:(0,W.addHexPrefix)(Ae(e.gasPrice)),nonce:(0,W.addHexPrefix)(Ae(e.nonce))};return e.data&&(o.data=e.data),o}function $n(e){let o=(0,W.keccak)((0,W.toBuffer)((0,W.addHexPrefix)(e),"hex")).toString("hex");return(0,W.addHexPrefix)(o)}function Dt(){let e=T(k),o=F();return P(n=>{let{type:t,txParams:s,extraParams:r}=n,i=t;return i||(s.to?i=g.CONTRACT_CALL:i=g.CONTRACT_DEPLOY),{id:xt(),type:i,txParams:{...Mn(s),from:s.from||o,chainId:e.chainId},status:y.UNAPPROVED,createTime:+new Date,txPool:[],isCanceling:!1,isSpeeding:!1,extraParams:r||{}}})}function Et(){let e=b(),o=H(),n=sn();return P(async t=>{if(!t)throw new Error("tx meta error");let{from:s}=t.txParams,r=await ne().signRpcEvmTransaction(t.txParams,s),i=a=>e(Ke({txId:t.id,tx:a}));return i({rawTx:r,txHash:$n(r),status:y.PENDING}),new Promise((a,u)=>{o.eth.currentProvider.send({method:"eth_sendRawTransaction",params:[r],jsonrpc:"2.0",id:xt()},async(l,c)=>{var m;if((c==null?void 0:c.error)||l){let f=((m=c==null?void 0:c.error)==null?void 0:m.message)||(l==null?void 0:l.message);u((c==null?void 0:c.error)||l);let h=await e(an({txId:t.id,tx:{status:y.DROPPED,finishTime:+new Date,errorMessage:f},checkPoolEmpty:!0}));((h==null?void 0:h.status)===y.PENDING||(h==null?void 0:h.status)===y.DROPPED)&&n(h)}else{let f=await i({sendTime:+new Date});n(f),a({id:t.id,txHash:c.result})}})})})}function cn(){let e=b(),o=Dt(),n=Et();return P(t=>{let s=o(t);return e(rn(s)),n(s)})}function ln(){let e=b(),o=Dt(),n=Et();return P(t=>{let{type:s,txParams:r,extraParams:i}=t,a=D(r.gasPrice),u=o({type:s,txParams:{...r,gasPrice:Q(I(a,1.2),0)},extraParams:i}),{id:l,txPool:c}=t;return t.id=u.id,u.id=l,t.txPool=[],e(Ke({txId:l,tx:{...u,isSpeeding:!0,txPool:[t,...c]}})),n(u)})}function un(){let e=b(),o=q(!0),n=Dt(),t=Et();return P(async s=>{let{txParams:r,extraParams:i}=s,{from:a,gasPrice:u,gasLimit:l,nonce:c,chainId:m}=r,f=o.find(({address:S})=>!S),h=n({type:g.TRANS_OUT,txParams:{to:a,value:"0x0",gasPrice:Q(I(D(u),1.2),0),gasLimit:l,nonce:c,chainId:m},extraParams:i}),{id:_,txPool:E}=s;return s.id=h.id,h.id=_,s.txPool=[],e(Ke({txId:_,tx:{...h,isCanceling:!0,txPool:[s,...E],extraParams:{toAddress:a,tokenAddress:"",coinSymbol:f==null?void 0:f.symbol,value:"0"}}})),t(h)})}p();d();var mn=async(e,o)=>{let n;try{n=await o.eth.getCode(e)}catch{n=null}return{isContractAddress:n&&n!=="0x"&&n!=="0x0"}};p();d();var R=C(N());p();d();var z=C(N());var It=C(Be());function Ye(e){let{wait:o=7e3}=e!=null?e:{},n=H(),[t,s]=(0,z.useState)(!1),[r,i]=(0,z.useState)(null),a=P(async()=>{let m;try{s(!0),m=await n.eth.getGasPrice()}finally{s(!1)}return i(m),m}),u=(0,z.useRef)(null),l=(0,z.useRef)(!1),c=()=>{l.current=!0,clearTimeout(u.current)};return(0,z.useEffect)(()=>{let m=()=>{a().finally(()=>{l.current||(u.current=setTimeout(m,o))})};m()},[]),lo(c),{loadingChainGasPrice:t,chainGasPrice:r,requestChainGasPrice:a}}function Je(e){let o=H(),n=F(),{to:t,data:s,value:r}=e||{},[i,a]=(0,z.useState)(!1),[u,l]=(0,z.useState)(null),{run:c}=uo(async({to:m,data:f,value:h}={})=>{let _;if(!m||!Vt(m,{allowNonPrefixed:!1}))_=21e3;else{f?It.default.utils.isHex(f)?f=Yt(f):f=It.default.utils.stringToHex(f):f=void 0;try{a(!0),_=await o.eth.estimateGas({from:n,to:m,data:f,value:h})}catch{_=0}finally{a(!1)}}return l(_),_},{wait:500});return(0,z.useEffect)(()=>{c(e)},[t,s,r]),{loadingChainGasLimit:i,chainGasLimit:u,requestChainGasLimit:c}}function pn(e){let{id:o,gasPrice:n}=e,{chainGasPrice:t}=Ye(),[s,r]=(0,R.useState)(null),[i,a]=(0,R.useState)(null),[u,l]=(0,R.useState)(!0);return(0,R.useEffect)(()=>{let c=K(n?D(n):t);r(c),a(c),l(!1)},[t,o,n]),[{suggested:s,custom:i,pending:u},a]}function dn(e){let{id:o,gas:n,to:t,data:s}=e,{chainGasLimit:r}=Je({to:t,data:s}),[i,a]=(0,R.useState)(null),[u,l]=(0,R.useState)(null),[c,m]=(0,R.useState)(!0);return(0,R.useEffect)(()=>{let f=n?D(n):r;a(f),l(f),m(!1)},[r,o,n]),[{suggested:i,custom:u,pending:c},l]}function fn({from:e,gasPrice:o,gasLimit:n,value:t,symbol:s}){let{symbol:r,usdToThisRate:i}=T(de),[a,u]=(0,R.useState)(!0),l=q(!1,!1,!1),{chainId:c}=T(k),m=l.find(w=>w.account===e&&w.chainId===c);(0,R.useEffect)(()=>{!o.pending&&!n.pending&&u(!1)},[o.pending,n.pending]);let f=(0,R.useMemo)(()=>{let w=I(`${o.custom||o.suggested||0}`,`${n.custom||o.suggested||0}`),$=$t(w),te=Mt($),at=`${se(Q(te,(m==null?void 0:m.decimals)||6))} ${s}`,ct=Ge({amount:te,rate:i,symbol:r},{useApproximate:!0}),lt=U(D(t||0)),ut=se(Q(be(te,lt),(m==null?void 0:m.decimals)||6)),Gt=me(ut,m==null?void 0:m.balance);return{gasInCoin:at,gasInFiat:ct,totalInCoin:ut,lackCoin:Gt}},[o.custom,n.custom,t,m==null?void 0:m.balance]),{gasInCoin:h,gasInFiat:_,totalInCoin:E,lackCoin:S}=f;return{gasDisplay:`${h} ${_}`,totalDisplay:`${E} ${s}`,lackCoin:S,loading:a}}function Wn({data:e,to:o}){let n=H(),[t,s]=(0,L.useState)(""),[r,i]=(0,L.useState)(!1);return(0,L.useEffect)(()=>{(async()=>{if(e&&!o){s(O.DEPLOY_CONTRACT);return}try{let l=mt(e),c=l==null?void 0:l.name,m=[O.TOKEN_METHOD_APPROVE,O.TOKEN_METHOD_TRANSFER,O.TOKEN_METHOD_TRANSFER_FROM].find(f=>f.toLowerCase()===c.toLowerCase());if(m){s(m);return}}catch{}i(!0);let{isContractAddress:u}=await mn(o,n);s(u?O.CONTRACT_INTERACTION:O.SENT_ETHER),i(!1)})()},[e,o]),[t,r]}function zn({data:e,type:o}){let n,t,s,r;try{let i=mt(e),a=Xt(i);n=Qt(i),r=a,t=o===O.TOKEN_METHOD_APPROVE,s=t&&Number(r)===0}catch{}return{address:n,isApprove:t,isRevoke:s,amount:r}}function qn(e){let o=Nt(),[n,t]=(0,L.useState)({}),[s,r]=(0,L.useState)(!1),i=async()=>{try{r(!0);let{symbol:a,decimals:u}=await o(e);t({symbol:a,decimals:u}),r(!1)}catch{r(!1)}};return(0,L.useEffect)(()=>{e&&i()},[e]),[n,s]}function Zn(e){let o=A(),[n,t]=(0,L.useState)(0),{isApprove:s,formattedAmount:r,decimals:i,symbol:a}=e;(0,L.useEffect)(()=>{s&&t(r)},[s,r]);let u=(0,L.useMemo)(()=>n>=10**13?o("wallet_dapp_connection_subtitle_approval_amount_unlimitied"):`${se(ke(n,i))}${a||""}`,[n,i,a]);return[{...e,customApproveAmount:n,approveAmountDisplay:u},t]}function Kn({origin:e,isApprove:o,isRevoke:n,symbol:t}){let s=A(),r=T(eo),a=T(no)[e]||{},[u,l]=(0,L.useState)({});return(0,L.useEffect)(()=>{let c=null,m=null,f=null;o?(c=null,m=t,f=n?s("wallet_approval_subtitle_revoke_approval_desc",{tokenSymbol:t}):s("wallet_dapp_conncetion_alert_approve_tip",{name:a.name,tokenSymbol:t})):(c=a.icon,f=a.host,m=a.name),l({icon:c,host:f,name:m})},[n,t]),{...u,originInfo:a,wallet:`${r.keyringName} - ${r.walletName}`}}function Vn(e){let{nonce:o,suggestedNonce:n}=qe(e),[t,s]=(0,L.useState)(0),[r,i]=(0,L.useState)(!0);return(0,L.useEffect)(()=>{s(n),i(!1)},[n]),[{suggested:o,custom:t,pending:r},s]}function Yn(){return T(k)}var Jn=({tx:e,gasLimit:o,gasPrice:n,nonce:t,txData:s,tokenInfo:r,chain:i,approvedAmount:a,formattedAmount:u,txType:l})=>{let{from:c,to:m,value:f,data:h}=e,_={from:c,to:m,value:f,gasLimit:o,gasPrice:n,nonce:t,data:h},S={[O.DEPLOY_CONTRACT]:g.CONTRACT_DEPLOY,[O.CONTRACT_INTERACTION]:g.CONTRACT_CALL,[O.TOKEN_METHOD_APPROVE]:g.AUTHORIZATION,[O.SENT_ETHER]:g.TRANS_OUT,[O.TOKEN_METHOD_TRANSFER]:g.TRANS_OUT,[O.TOKEN_METHOD_TRANSFER_FROM]:g.TRANS_OUT}[l]||g.CONTRACT_CALL;s.isRevoke&&(S=g.CANCEL_AUTHORIZATION);let w={};return l===O.TOKEN_METHOD_APPROVE&&(w.approvedAmount=a,w.coinSymbol=r.symbol,w.tokenAddress=m,w.approvedAddress=s.address),l===O.SENT_ETHER&&(w.value=U(D(f)),w.toAddress=m,w.coinSymbol=i.symbol),(l===O.TOKEN_METHOD_TRANSFER||l===O.TOKEN_METHOD_TRANSFER_FROM)&&(w.value=u,w.tokenAddress=m,w.toAddress=s.address,w.coinSymbol=r.symbol),{type:S,txParams:_,extraParams:w}};function Qn(e,o){let n=b(),t=Ue(),s=cn(),[r,i]=(0,L.useState)(!1);return[{sign:async()=>{i(!0),s(e).then(async({txHash:l})=>{await n(xo(o,{isTxFinished:!0,hash:l})),t.push(fe)}).catch(l=>{oe.error({title:l==null?void 0:l.message}),i(!1)})},cancel:async()=>{await n(ho(o)),t.push(fe)}},r]}function sa(e){let o=A(),[n]=Wn(e),t=zn({data:e.data,type:n}),[s,r]=qn(e==null?void 0:e.to),i=Kn({origin:e.origin,...t,...s}),a=(0,L.useMemo)(()=>Jt((t==null?void 0:t.amount)||0,s==null?void 0:s.decimals).toFixed(),[t==null?void 0:t.amount,s==null?void 0:s.decimals]),[u,l]=Zn({...t,...s,formattedAmount:a}),c=Yn(),m={...c,name:c.name||c.chainName},[f,h]=Vn(e.from),[_,E]=pn(e),[S,w]=dn(e),$=fn({from:e.from,gasPrice:_,gasLimit:S,value:e.value,symbol:m.symbol||m.ticker}),te=Jn({tx:e,gasLimit:S.custom||S.suggested,gasPrice:Pe(_.custom),nonce:f.custom||f.suggested,txData:t,tokenInfo:s,chain:m,approvedAmount:u.customApproveAmount,formattedAmount:a,txType:n}),[{sign:Ie,cancel:at},ct]=Qn(te,e.id),lt=(0,L.useMemo)(()=>{switch(n){case O.DEPLOY_CONTRACT:return o("developer_mode_history_title_contract_eployment");case O.TOKEN_METHOD_APPROVE:return t!=null&&t.isRevoke?o("wallet_extension_popup_btn_revoke_approval"):o("wallet_extension_popup_btn_approve");default:return o("wallet_extension_popup_title_contract_interaction")}},[n,t==null?void 0:t.isRevoke]);return[{type:n,title:lt,auth:{...u,...s,formattedAmount:a},meta:i,chain:m,nonce:f,fee:$,gas:{price:_,limit:S},loading:{sign:ct,token:r}},{sign:Ie,cancel:at,setNonce:h,setGasLimit:w,setGasPrice:E,setAuthAmount:l}]}p();d();var Qe=C(N());function fa(){let e=b(),o=Ue(),n=T(_o),t=T(go),[s,r]=(0,Qe.useState)({}),i=l=>{let{id:c,origin:m,requestData:f,type:h,requestData:{chainId:_}}=l;return{id:c,origin:m,...f,requestData:f,chainIdToDisplay:parseInt(_,16),...t[l.origin],switchType:h,explorers:f.blockExplorerUrl}};return(0,Qe.useEffect)(()=>{let l=n.length-1;r(i(n[l]))},[n]),[s,{cancel:async()=>{await e(ao(s.id)),o.push(fe)},approve:async()=>{let{rpcUrl:l,ticker:c,blockExplorerUrl:m,chainId:f,faucetUrl:h,icon:_,chainName:E}=s;await e(yo({chainId:f,explorerUrl:m,faucetUrl:h,icon:_,name:E,rpcUrl:l,symbol:c})),await e(io(s.id,s.requestData)),o.push(fe)}}]}p();d();function ya(){let{unapprovedStList:e}=Zo(),o=q(),n=e[0];return o.forEach(t=>{t.address===(n==null?void 0:n.address)&&(n.amount=t.balance||0,n.currencyAmountFormated=t.marketValue||"$0.00"),po(n==null?void 0:n.image)?n.image=n.image[0]:fo(n==null?void 0:n.image)&&(n.image=null)}),n}p();d();function he(e,{symbol:o,decimals:n}={}){let t;return e=se(Q(e,n||18)),e==="0"?t="0":t=ue.thousandFormat(e),o&&(t+=` ${o}`),t}p();d();var bt=C(N()),St=C(dt());p();d();var Xn={lightBlue:{color:"#fff",background:"#8DBBFF"},deepBlue:{color:"#fff",background:"#277DFF"}},jn={larger:{size:56,fontSize:30},large:{size:32,fontSize:20},normal:{size:24,fontSize:14},small:{size:20,fontSize:12}};function es({icon:e,className:o,text:n,size:t="normal",fontSize:s,theme:r,color:i,background:a}){if(!n)return null;let u=n[0].toUpperCase(),l,c;if(r){let _=Xn[r];l=_==null?void 0:_.color,c=_==null?void 0:_.background}let m,f;if(typeof t=="string"){let _=jn[t];m=_==null?void 0:_.size,f=_==null?void 0:_.fontSize}else m=t.size;let h={width:`${m}px`,height:`${m}px`};return e?bt.default.createElement("img",{src:e,style:h,className:(0,St.default)("capitalize-letter",o)}):(h={...h,fontSize:`${s||f}px`,color:i||l,background:a||c},bt.default.createElement("div",{style:h,className:(0,St.default)("capitalize-letter",o)},u))}var Y=es;p();d();var Xe=C(N());function oc(){let e=T(Ro),o=T(Bo),n=T(Go),t=T(Fo);return Fe(Wt,U)(n?Pe(n):e,t||o)}function we(e){let o=ge(),{symbol:n,usdToThisRate:t}=T(de),s=I(o==null?void 0:o.price,t),r=he(e,{symbol:o==null?void 0:o.symbol,decimals:o==null?void 0:o.decimals}),i=Ge({amount:e,rate:s,symbol:n},{useApproximate:!0,beforeApproximate:a=>Le(a,0)?"0":null});return`${r} ${i}`}function nc(){let e=b(),{chainGasPrice:o,requestChainGasPrice:n}=Ye(),t=T(Po),s=T(Lo),r=T(Ho),i=T(ko),a=T(Uo),u=!s,{chainGasLimit:l,requestChainGasLimit:c,loadingChainGasLimit:m}=Je({to:u?t:s,data:r,value:u?i:null,gasPrice:a});return(0,Xe.useEffect)(()=>{e(Mo(o))},[o]),(0,Xe.useEffect)(()=>{e($o(l))},[l]),{requestChainGasPrice:n,loadingChainGasLimit:m,requestChainGasLimit:c}}function sc(){let e=b(),{nonce:o,suggestedNonce:n,request:t}=qe();return(0,Xe.useEffect)(()=>{e(Wo(n))},[o,n]),{nonce:o,suggestedNonce:n,request:t}}p();d();p();d();var ee=C(N());p();d();var Ot=C(N());var ts=({tx:e,onBack:o})=>{let n=A(),{type:t,extraParams:s}=e,r=Me[t],i=t===g.AUTHORIZATION||t===g.CANCEL_AUTHORIZATION?n(r,{symbol:(s==null?void 0:s.coinSymbol)||""}):n(r);return Ot.default.createElement(Co,{title:i,onBack:o})},Tn=Ot.default.memo(ts);p();d();var j=C(N());p();d();var B=C(N()),_n=C(En()),je=C(dt());p();d();function os({className:e,label:o,children:n}){return B.default.createElement("div",{className:(0,je.default)("rpc-evm-coin-flow__label",e)},B.default.createElement("div",{className:"rpc-evm-coin-flow__label-text"},o),B.default.createElement("div",null,n))}function ns({isNFT:e,icon:o,title:n,address:t}){let s=A(),r=typeof o=="string"?B.default.createElement(vo,{className:(0,je.default)({"rpc-evm-coin-flow__record-icon-nft":e}),src:o,alt:""}):o;return B.default.createElement("div",{className:"rpc-evm-coin-flow__record"},B.default.createElement("div",{className:"rpc-evm-coin-flow__record-icon"},r),B.default.createElement("div",{className:"rpc-evm-coin-flow__record-right"},B.default.createElement("div",{className:"rpc-evm-coin-flow__record-title"},n),t&&B.default.createElement(X,{className:"rpc-evm-coin-flow__record-address",label:M(t),value:t,message:s("wallet_extension_popup_title_receiving_address_copied")})))}function Lt({data:e}){if(e=(e||[]).filter(Boolean),e.length===0)return null;let o=e.length===1,n=t=>{if(!t)return null;let{items:s,label:r,...i}=t;return B.default.createElement(os,{...i,label:r,key:t},s.map((a,u)=>B.default.createElement(ns,{...a,key:u})))};return B.default.createElement("div",{className:(0,je.default)("rpc-evm-coin-flow",{"rpc-evm-coin-flow__hidden-label":o})},e.map(n))}var gn=Lt;Lt.propTypes={data:_n.default.array};Lt.defaultProps={data:[]};var{TRANS_OUT:hn,CONTRACT_CALL:xn,AUTHORIZATION:et,CANCEL_AUTHORIZATION:tt,CONTRACT_DEPLOY:Cn}=g,ss={[et]:"wallet_extension_header_approval_title_approve",[tt]:"wallet_extension_header_approval_title_cancel_approval"},rs={[et]:"wallet_extension_header_approval_title_for",[tt]:"wallet_extension_header_approval_title_for"},is="/static/images/tx-history/default-coin.svg",as="/static/images/tx-history/default-protocol.svg";function cs(e){let o=A(),{type:n}=e,t=ge("",!0);switch(n){case hn:{let{value:s,coinSymbol:r}=e.extraParams||{},i=`- ${s} ${r||o("wallet_extension_history_text_unknown_token")}`;return{items:[{icon:j.default.createElement(Y,{icon:!r&&is,text:r,size:"large",theme:"lightBlue"}),title:j.default.createElement(Tt,{maxWidth:"284px",text:i})}]}}case xn:{let{value:s}=e.txParams||{},r=D(s);if(Le(r,0))return null;let i=`- ${he(U(r),{symbol:t.symbol,decimals:t==null?void 0:t.decimals})}`;return{items:[{icon:j.default.createElement(Y,{text:t.symbol,size:"large",theme:"lightBlue"}),title:j.default.createElement(Tt,{text:i,maxWidth:"284px"})}]}}case et:case tt:{let{coinSymbol:s}=e.extraParams||{};return s?{label:o(ss[n]),items:[{icon:j.default.createElement(Y,{text:s,size:"large",theme:"lightBlue"}),title:s}]}:null}case Cn:default:return null}}function ls(e){let o=A(),{type:n,extraParams:t}=e;switch(n){case et:case tt:{let{approvedAddress:s}=t||{};return{label:o(rs[n]),items:[{icon:as,title:j.default.createElement(X,{className:"rpc-mode-evm-tx-detail-flow__authorization",label:M(s),value:s,message:o("wallet_extension_popup_title_receiving_address_copied")})}]}}case hn:case xn:case Cn:default:return null}}function us({tx:e}){let o=cs(e),n=ls(e);return j.default.createElement(gn,{data:[o,n]})}var yn=us;p();d();var v=C(N());var An=C(dt());function ms({status:e,isCanceling:o,isSpeeding:n,isShowPending:t}){let s=A(),r,i="";return e===y.SUCCEED?(r=Te.TxStatusInfoEnum.SUCCESS,i=s("wallet_extension_history_status_completed")):e===y.FAILED||e===y.DROPPED?(r=Te.TxStatusInfoEnum.FAILED,i=s("wallet_extension_history_status_failed")):e===y.PENDING&&(t?(r=Te.TxStatusInfoEnum.PENDING,o?i=s("wallet_extension_send_status_canceling"):n?i=s("wallet_extension_send_status_speedingup"):i=s("wallet_extension_history_list_status_pending")):(r=Te.TxStatusInfoEnum.WAITING,i=s("wallet_extension_history_list_status_waiting"))),v.default.createElement(Te,{label:s("wallet_extension_mid_text_status"),status:r,statusText:i})}function ps({status:e,sendTime:o,finishTime:n}){let t=A(),s=T(pe);return v.default.createElement(V,{label:t("wallet_extension_mid_text_time"),value:le(e===y.PENDING?o:n,{format:"yyyyMMddHHmmss",locale:s})})}function ds({type:e,extraParams:o}){let n=A(),{approvedAmount:t}=o||{};return e!==g.AUTHORIZATION?null:v.default.createElement(V,{label:n("wallet_extension_mid_text_approved_amount"),value:t>=10**13?n("wallet_extension_mid_text_unlimited"):t})}function fs({status:e,blockNumber:o}){let n=A(),t=T(Re),s=Bt(t,o);return e===y.PENDING||e===y.DROPPED||Se(s,0)||Oe(s,14)?null:v.default.createElement(V,{label:n("wallet_extension_mid_text_block_confirmation"),value:s})}function Ts(){let e=A(),o=T(k);return v.default.createElement(V,{label:e("wallet_extension_mid_text_network"),value:v.default.createElement(v.default.Fragment,null,v.default.createElement(Y,{className:"rpc-mode-evm-tx-detail-info__network-icon",icon:o.icon,text:o.name,size:"small",theme:"deepBlue"}),o.name)})}function _s({txParams:e}){let o=A(),{from:n}=e;return v.default.createElement(V,{label:o("wallet_extension_mid_text_from"),value:v.default.createElement(X,{label:M(n),value:n,message:o("wallet_extension_popup_title_receiving_address_copied")})})}function gs({status:e,type:o,extraParams:n,txParams:t}){let s=A(),{toAddress:r,tokenAddress:i,contractAddress:a}=n||{},{to:u}=t,l,c;if(o===g.TRANS_OUT)l=s("wallet_extension_mid_text_to"),c=r;else if(o===g.CONTRACT_DEPLOY)if(e===y.SUCCEED)l=s("developer_mode_history_subtitle_developer"),c=a;else return null;else l=s("wallet_extension_mid_text_interaction_address"),o===g.AUTHORIZATION||o===g.CANCEL_AUTHORIZATION?c=i:c=u;return v.default.createElement(V,{label:l,value:v.default.createElement(X,{label:M(c),value:c,message:s("wallet_extension_popup_title_receiving_address_copied")})})}function hs({status:e,gasUsed:o,txParams:n}){let t=A(),s=T(k),{gasLimit:r,gasPrice:i}=n,a=Fe(I,U,ue.thousandFormat),u=he(a(i,o||r),{symbol:s==null?void 0:s.symbol,decimals:s==null?void 0:s.decimals});return v.default.createElement(wo,{label:t("wallet_extension_mid_text_network_fee"),value:u,tip:e===y.PENDING&&t("wallet_extension_popup_cancle_transaction_gasprice_gaslimit",{gasPrice:ue.thousandFormat(K(i)),gasLimit:ue.thousandFormat(r)})})}function xs({txParams:e}){let o=A(),{data:n}=e,[t,s]=(0,v.useState)(!1);return n?v.default.createElement("div",{className:"rpc-mode-evm-tx-detail-info-data"},v.default.createElement("div",{className:"rpc-mode-evm-tx-detail-info-data__inner"},v.default.createElement("div",{className:"rpc-mode-evm-tx-detail-info-data__title",onClick:()=>{s(r=>!r)}},o("developer_mode_history_title_transaction_data"),v.default.createElement(Ht,{className:(0,An.default)("okx-wallet-plugin-arrow-small-down rpc-mode-evm-tx-detail-info-data__arrow",{"rpc-mode-evm-tx-detail-info-data__arrow--spread":t}),style:{fontSize:12}})),t&&v.default.createElement("div",{className:"rpc-mode-evm-tx-detail-info-data__data"},n))):null}function Cs({tx:e}){let o=A(),{txHash:n,txParams:{nonce:t}}=e;return v.default.createElement("div",{className:"rpc-mode-evm-tx-detail-info"},v.default.createElement(ms,{...e}),v.default.createElement(ps,{...e}),v.default.createElement(ds,{...e}),v.default.createElement(fs,{...e}),v.default.createElement(Ts,{...e}),v.default.createElement(_s,{...e}),v.default.createElement(gs,{...e}),v.default.createElement(hs,{...e}),v.default.createElement(V,{label:o("developer_mode_history_title_nonce"),value:D(t)}),v.default.createElement(V,{label:o("wallet_extension_mid_text_transaction_hash"),value:v.default.createElement(X,{label:M(n),value:n,message:o("wallet_extension_popup_title_transaction_hash_copied")})}),v.default.createElement(xs,{...e}))}var vn=Cs;p();d();var Z=C(N());p();d();p();d();var ot=C(N());function ys({txId:e,onClose:o}){let n=b(),t=We(e),s=ln(),[r,i]=(0,ot.useState)(!1),a=async()=>{if(r)return;i(!0);let _=await n(Ve(t.id));if(!_||_.status!==y.PENDING){i(!1),o();return}s(t).catch(E=>{console.log(E)}).finally(()=>{i(!1),o()})},{gasPrice:u,gasLimit:l}=(t==null?void 0:t.txParams)||{};u=D(u),l=D(l);let c=we(U(I(u,l))),m=`=Gas Price(${K(u)})`,f=we(U(I(I(u,1.2),l))),h=`=Gas Price(${K(I(u,1.2))})`;return ot.default.createElement(G.EthereumTxSpeedDialogBase,{visible:!!t,onConfirm:a,loading:r,onClose:o,oldGasFeeDisplay:c,oldGasDetailDisplay:m,newGasFeeDisplay:f,newGasDetailDisplay:h})}var Ne=ys;p();d();var nt=C(N());function As({txId:e,onClose:o}){let n=b(),t=We(e),s=un(),r=ge(),[i,a]=(0,nt.useState)(!1),u=async()=>{if(i)return;if(a(!0),(await n(Ve(t.id))).status!==y.PENDING){a(!1),o();return}s(t).catch(_=>{console.log(_)}).finally(()=>{o(),a(!1)})},{gasPrice:l,gasLimit:c}=(t==null?void 0:t.txParams)||{};l=D(l),c=D(c);let m=we(U(I(I(l,1.2),c))),f=`Gas Price (${K(I(l,1.2))} GWEI) *Gas Limit(${c}) `;return nt.default.createElement(G.EthereumTxCancelDialogBase,{visible:!!t,onConfirm:u,loading:i,onClose:o,chainSymbol:r==null?void 0:r.symbol,newGasFeeDisplay:m,newGasDetailDisplay:f})}var De=As;p();d();var J=C(N());p();d();var ae=C(N());p();d();var Ee=C(N());var wn=({onClick:e,children:o})=>Ee.default.createElement(Ce,{className:"rpc-evm-tx-actions__button",category:Ce.CATEGORY.outline,type:Ce.TYPE.primary,size:Ce.SIZE.xs,onClick:n=>{n.stopPropagation(),e&&e(n)}},o);function vs({tx:e,onCancel:o,onSpeed:n}){let t=A(),{isShowPending:s,isCanceling:r}=e,i=t(r?"wallet_extension_history_list_status_btn_speed_up_cancellation":"wallet_extension_history_list_status_btn_cancel_transaction");return s?Ee.default.createElement("div",{className:"rpc-evm-tx-actions"},Ee.default.createElement(wn,{onClick:o},i),!r&&Ee.default.createElement(wn,{onClick:n},t("wallet_extension_history_list_status_btn_speed_up"))):null}var Nn=vs;p();d();function st({type:e,extraParams:o}){let n=A(),t=Me[e],s,r=n(t);return e===g.TRANS_OUT?s="/static/images/tx-history/coin-send.svg":e===g.AUTHORIZATION||e===g.CANCEL_AUTHORIZATION?(s="/static/images/tx-history/coin-approve.svg",r=n(t,{symbol:o==null?void 0:o.coinSymbol})):e===g.CONTRACT_CALL?s="/static/images/tx-history/coin-contract.svg":e===g.CONTRACT_DEPLOY&&(s="/static/images/tx-history/contract-deploy.svg"),{icons:[s],title:r}}function rt({type:e,txParams:o,extraParams:n}){let t=T(k);if(e===g.TRANS_OUT)return[{direction:pt.OUT,coinAmount:`${(n==null?void 0:n.value)||""} ${(n==null?void 0:n.coinSymbol)||""}`}];let{value:s}=o||{},r=D(s);return me(r,0)?[{direction:pt.OUT,coinAmount:`${U(r)} ${t.symbol||""}`}]:[]}function it(e){var t;let o=A(),n;return e.type===g.TRANS_OUT?n=`${o("wallet_extension_history_list_send_to")}   ${M(e.extraParams.toAddress)}`:e.type===g.AUTHORIZATION||e.type===g.CANCEL_AUTHORIZATION?n=M((t=e.extraParams)==null?void 0:t.approvedAddress):n=M(e.txParams.to),n}function ws({isShowPending:e,isSpeeding:o,isCanceling:n}){let t=A(),s="",r="";return e?(s=ye.PENDING,o?r=t("wallet_extension_send_status_speedingup"):n?r=t("wallet_extension_send_status_canceling"):r=t("wallet_extension_history_list_status_pending")):(s=ye.WAITING,r=t("wallet_extension_history_list_status_waiting")),{labelType:s,labelText:r}}function Ns(e){let o=it(e),n=T(pe),t=[o],s=le(e.sendTime,{format:"yyyyMMddHHmmss",locale:n});return t.push(s),t}function Ds({tx:e,onClick:o,onCancel:n,onSpeed:t}){let{icons:s,title:r}=st(e),{labelType:i,labelText:a}=ws(e),u=rt(e),l=Ns(e),c=He(l,u),m=ae.default.createElement(G.Label,{className:"tx-history-ml4",type:i,text:a});return ae.default.createElement(G.ItemContainer,{onClick:f=>{o&&o(e,f)}},ae.default.createElement(G.Row,{assets:u,align:c},ae.default.createElement(G.Info,{icons:s,title:r,label:m,details:l}),ae.default.createElement(G.Assets,{assets:u})),ae.default.createElement(Nn,{tx:e,onCancel:n,onSpeed:t}))}var Pt=Ds;function Es({txs:e,onClick:o}){let[n,t]=(0,J.useState)(null),[s,r]=(0,J.useState)(null);return J.default.createElement(J.default.Fragment,null,e.map(i=>J.default.createElement(Pt,{key:i.id,tx:i,onClick:o,onSpeed:()=>{t(i.id)},onCancel:()=>{r(i.id)}})),J.default.createElement(Ne,{txId:n,onClose:()=>{t(null)}}),J.default.createElement(De,{txId:s,onClose:()=>{r(null)}}))}var Is=Es;p();d();var ce=C(N());function bs({txs:e,onClick:o}){let n=T(pe),{dates:t}=T(zo),s=(0,ce.useMemo)(()=>{let r=e.map(c=>({...c,groupDate:le(c.sortTime,{format:"yyyyMMdd",locale:n})})),i=[],a=0,u,l;return r.forEach(c=>{let{groupDate:m}=c;u!==m&&(u=m,l=[],i[a++]={date:u,list:l}),l.push(c)}),i},[e,t]);return ce.default.createElement(G.List,null,s.map(({date:r,list:i},a)=>ce.default.createElement("div",{key:a},ce.default.createElement(G.Date,null,r),i.map(u=>ce.default.createElement(u.Comp,{key:u.id,tx:u,onClick:o})))))}var Ss=bs;p();d();var xe=C(N());function Os({status:e}){let o=A(),n="",t="";return(e===y.FAILED||e===y.DROPPED)&&(n=ye.FAILED,t=o("wallet_extension_history_status_failed")),{labelText:t,labelType:n}}function Ls(e){return[it(e)]}function Ps({tx:e,onClick:o}){let{icons:n,title:t}=st(e),s=rt(e),r=Ls(e),i=He(r,s),{labelType:a,labelText:u}=Os(e),l=xe.default.createElement(G.Label,{className:"tx-history-ml4",type:a,text:u});return xe.default.createElement(G.ItemContainer,{onClick:c=>{o&&o(e,c)}},xe.default.createElement(G.Row,{assets:s,align:i},xe.default.createElement(G.Info,{icons:n,title:t,label:l,details:r}),xe.default.createElement(G.Assets,{assets:s})))}var ks=Ps;function Gs({tx:e}){let o=A(),n=ze(),{status:t,isShowPending:s,isCanceling:r}=e,[i,a]=(0,Z.useState)(!1),[u,l]=(0,Z.useState)(!1);return Z.default.createElement(Z.default.Fragment,null,(t===y.SUCCEED||t===y.FAILED)&&Z.default.createElement(No,{url:n(e.txHash),text:o("wallet_extension_mid_link_explorer")}),s&&t===y.PENDING&&Z.default.createElement(Do,{isShowCancel:!r,isShowSpeedUp:!r,isShowSpeedupCancel:r,onCancel:()=>{a(!0)},onSpeedUp:()=>{l(!0)}}),u&&Z.default.createElement(Ne,{txId:e==null?void 0:e.id,onClose:()=>{l(!1)}}),i&&Z.default.createElement(De,{txId:e==null?void 0:e.id,onClose:()=>{a(!1)}}))}var Dn=Gs;function Us({txId:e,onBack:o}){let t=vt().find(({id:s})=>s===e);return t?ee.default.createElement("div",{className:"rpc-mode-tx-detail"},ee.default.createElement(Tn,{tx:t,onBack:o}),ee.default.createElement(Eo,{message:t.errorMessage}),ee.default.createElement("div",{className:"rpc-mode-tx-detail__content"},ee.default.createElement(yn,{tx:t}),ee.default.createElement(vn,{tx:t}),ee.default.createElement(Dn,{tx:t}))):null}var Fs=Us;p();d();var kt=C(N());function Hs({symbol:e}){return kt.default.createElement("div",{className:"rpc-mode-evm-title-header__title"},kt.default.createElement(Y,{className:"rpc-mode-evm-title-header__icon",text:e,theme:"lightBlue"}),e)}var Rs=Hs;export{y as a,g as b,Me as c,Ko as d,H as e,Jo as f,Xo as g,$e as h,pr as i,q as j,ge as k,Nt as l,Gn as m,Un as n,Fr as o,Fn as p,Hr as q,Rn as r,Rr as s,Br as t,Mr as u,sn as v,an as w,cn as x,Wn as y,zn as z,qn as A,Yn as B,Jn as C,sa as D,fa as E,Zo as F,$s as G,ya as H,he as I,Y as J,oc as K,we as L,nc as M,sc as N,Pt as O,Is as P,Ss as Q,ks as R,Fs as S,Rs as T};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

