import{ea as d,ia as _}from"./chunk-SBW523XW.js";import{qa as f}from"./chunk-KRRNVCWZ.js";import{Aa as n,e as u,i as a,ja as P,k as l,ke as m,va as p,wa as t}from"./chunk-YC2Z7II3.js";a();l();var o=u(P());var w=({registerDialog:e,onCancel:r=()=>{},customCoin:i={}})=>{let s=f(),c=m();return o.default.createElement(o.default.Fragment,null,o.default.createElement(n.Prompt,{visible:e.register&&(e.status===2||e.status===3),title:s("wallet_extension_toast_status_register"),alignBottom:!1,hideCloseBtn:!0,infoType:n.Prompt.INFO_TYPE.warn,confirmBtnProps:{type:t.TYPE.highlight,size:t.SIZE.lg,category:t.CATEGORY.fill},onConfirm:()=>{r()},confirmText:s("wallet_extension_btn_register")},o.default.createElement(p,{className:"asset-list-aptos-loading"})),o.default.createElement(n.Prompt,{visible:e.register&&(e.status===0||e.status===4||e.status===5),title:s("wallet_extension_popup_crypto_register"),alignBottom:!1,hideCloseBtn:!0,infoType:n.Prompt.INFO_TYPE.warn,confirmBtnProps:{type:t.TYPE.highlight,size:t.SIZE.lg,category:t.CATEGORY.fill},cancelBtnProps:{category:t.CATEGORY.outline,size:t.SIZE.lg},onCancel:r,onConfirm:async()=>{!i.added&&i.added!==void 0&&(await d(i),await _()),c.push(`aptos-register?contractAddress=${i.contractAddress}`)},confirmText:s("wallet_extension_btn_register"),cancelText:s("wallet_extension_btn_cancel")},o.default.createElement("div",{className:"confirm-transaction--risk-desc"},s("wallet_extension_desc_crypto_register"))))};export{w as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

