import{a as W}from"./chunk-NPZPRXB6.js";import{a as I}from"./chunk-EG54FT5Y.js";import{c as v}from"./chunk-XRONFNCJ.js";import{a as A,b}from"./chunk-4PTE5JIT.js";import{C as y}from"./chunk-SBW523XW.js";import"./chunk-NEW56Z2U.js";import{g as E}from"./chunk-HX34N4W4.js";import{b as S}from"./chunk-F7QJ6WQ5.js";import"./chunk-TNVBYBO5.js";import{qa as w}from"./chunk-KRRNVCWZ.js";import{$h as g,Aj as k,ce as f,e as p,ee as _,i as t,ja as D,k as o,ke as u,oa as H,wa as r,zj as h}from"./chunk-YC2Z7II3.js";t();o();t();o();t();o();var e=p(D());var n=p(H());var x=({selectedWallet:s,keyringIdentities:M})=>{var d;let l=w(),a=u(),{walletId:m}=A(a.location.search.slice(1)),i=m||s,B={title:l("wallet_backup_wallet_subtitle_write_down_the_seed_phase"),desc:l("wallet_backup_wallet_subtitle_write_down_seed_phase")},L=_(g),N=()=>{a.location.pathname===h?a.push(k+b({walletId:m})):a.push("seed-verify")},[c,P]=(0,e.useState)([]);return(0,e.useEffect)(()=>{(async Y=>{let q=await y(Y);P(q.split(" "))})(i)},[i]),c.length>0?e.default.createElement("div",{className:"main-container"},e.default.createElement(E,{title:((d=v(M,i))==null?void 0:d.keyringName)||""}),e.default.createElement("div",{className:"check-page-main"},e.default.createElement("div",{className:"ok-seed-check-container"},e.default.createElement(I,{...B}),e.default.createElement(W,{walletId:i,listMock:c}),e.default.createElement(S.FooterActions,null,e.default.createElement(r,{className:"bold",disabled:!L[i],category:r.CATEGORY.fill,type:r.TYPE.highlight,size:r.SIZE.lg,onClick:N},l("wallet_backup_wallet_btn_i_have_backed_up")))))):""};x.propTypes={selectedWallet:n.default.string.isRequired,keyringIdentities:n.default.array.isRequired};var C=x;var z=s=>({selectedWallet:s.metamask.selectedWallet,keyringIdentities:s.metamask.keyringIdentities}),G=f(z)(C);export{G as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";
