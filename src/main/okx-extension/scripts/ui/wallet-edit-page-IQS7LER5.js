import{b as re}from"./chunk-VHYCH4IC.js";import{a as ne}from"./chunk-AUREYBHR.js";import{b as oe,d as O,g as ie,h as se}from"./chunk-FLV5D6IE.js";import{F as ae,n as ee,o as te}from"./chunk-U3HLVTEP.js";import"./chunk-5TVTY5EZ.js";import{a as G}from"./chunk-FRFUH74V.js";import"./chunk-PFBN4VGD.js";import{a as le}from"./chunk-RJTK42A4.js";import{na as B}from"./chunk-XBLB7XW3.js";import{Aa as H,Hh as Q,Kc as j,La as Y,Lc as x,Of as J,Rc as q,e as D,fg as z,ga as M,i as n,k as r,ka as ge,li as X,ma as W,mi as R,ta as T,xa as K,ya as P}from"./chunk-5YY3VNR7.js";n();r();var y=D(M());var _e=D(ge());n();r();var p=D(M());n();r();var pe=({type:e,name:o,list:a})=>a.some(t=>e==="walletId"?t.walletName===o:t.keyringName===o),de=({visible:e,data:o,onClose:a,onConfirm:t})=>{let d=B(),{type:c,name:m,list:w}=o,[u,i]=(0,p.useState)(""),[s,_]=(0,p.useState)(""),[A,C]=(0,p.useState)(!0);if((0,p.useEffect)(()=>{i(m)},[m]),!e)return null;let h=I=>{i(I);let l=!1,g="";I?g="":l=!0,(I==null?void 0:I.length)>20&&(l=!0,g=d("extension_input_errortip_max20")),pe({type:c,name:I,list:w})&&(l=!0,g=d("wallet_edit_wallet_errortip_wallet_name_repeat")),I===m&&(l=!0,g=""),_(g),C(l)};return p.default.createElement(K,{hideCloseBtn:!0,noContentPadding:!0,visible:e,onClose:a,className:"wallet-management-change-name__dialog"},p.default.createElement("div",{className:"wallet-management-change-name__dialog__container"},p.default.createElement("h1",{className:"wallet-management-change-name__dialog__title"},d(c==="walletId"?"wallet_edit_wallet_maintitle_change_acoount_name":"wallet_editwallet_subtitle_wallet_name")),p.default.createElement(P,{autoFocus:!0,cleanable:!0,size:P.SIZE.xl,value:u,error:s,errorType:P.TIP_TYPE.always,onChange:({target:{value:I}})=>{h(I)}}),p.default.createElement("div",{className:"wallet-management-change-name__dialog__actions"},p.default.createElement(T,{size:T.SIZE.lg,category:T.CATEGORY.outline,type:T.TYPE.primary,onClick:a,className:"wallet-management-change-name__dialog__action"},d("wallet_transfer_btn_cancel_transaction")),p.default.createElement(T,{onClick:()=>{t({updateName:u})},size:T.SIZE.lg,type:T.btnType.highlight,disabled:A,className:"wallet-management-change-name__dialog__action"},d("wallet_set_password_btn_confirm")))))};n();r();var f=D(M());var V=D(le());n();r();var b=D(M()),me=D(le());n();r();var $=({size:e,color:o,name:a,deleteAble:t,onDelete:d,editAble:c,onEdit:m,moveAble:w})=>{let u=`wallet-edit-card__block--${e}`,i=`wallet-edit-card__block--${e}--not-moveable`;return b.default.createElement("div",{className:(0,me.default)(u,{[i]:!w})},t&&b.default.createElement("div",{className:"wallet-edit-card__block__icon-delete"},b.default.createElement(W,{className:"okx-wallet-plugin-delete",onClick:d})),b.default.createElement("div",{className:"wallet-edit-card__block__title",style:{color:o}},b.default.createElement("span",{className:"wallet-edit-card__block__title-content"},a)),c&&b.default.createElement(G,{className:"wallet-edit-card__block__icon-edit",onClick:m},b.default.createElement(W,{className:"okx-wallet-plugin-draw"})),c&&w&&b.default.createElement("div",{className:"wallet-edit-card__block__icon-line"}))};n();r();var S=D(M());n();r();var F=({type:e,keyringId:o,dataSource:a,size:t,moveAble:d,onMove:c,onDragStart:m,onDragEnd:w,children:u})=>{let i=`wallet-edit-card__drag--${t}`;return S.default.createElement(H.Sortable,{itemClassName:i,itemDraggingClassName:`${i}--dragging`,itemWrapperClassName:`${i}__wrapper`,onDragStart:m,onDragEnd:s=>{w(),c({type:e,list:s,keyringId:o})},gutter:0,dataSource:a,withOverlay:!1,renderHandler:({getHandlerRef:s,listeners:_})=>d?S.default.createElement("div",{ref:s,..._,className:`${i}__handle`},S.default.createElement(G,{className:"wallet-edit-card__block__icon-move"},S.default.createElement(W,{className:"okx-wallet-plugin-hamburger"}))):S.default.createElement("div",{ref:s,..._,style:{display:"none"}})},u)};n();r();var we=({data:e,onDelete:o,onChangeName:a,onMove:t,currentId:d,currentFatherId:c,setCurrentFatherId:m})=>{let{keyringColor:w,keyringName:u,keyringIdentityType:i,keyringId:s,walletIdentities:_}=e,A=x(z),C=i===J.MNEMONIC;return f.default.createElement("div",{className:(0,V.default)("wallet-edit-card__item",{"wallet-edit-card__item--disable":c&&c!==s})},f.default.createElement("div",{className:"wallet-edit-card__item-head"},f.default.createElement($,{size:"large",color:w,name:u,deleteAble:C,onDelete:()=>{o({type:"keyringId",keyringId:s,walletId:_[0].walletId})},editAble:C,onEdit:()=>{a({type:"keyringId",name:u,keyringId:s,list:A})},moveAble:A.length>=2})),f.default.createElement("div",{className:(0,V.default)("wallet-edit-card__item-list",{"wallet-edit-card__item-list--hide":d&&d===s})},f.default.createElement(F,{type:"walletId",moveAble:_.length>=2,onMove:t,keyringId:s,dataSource:_,size:"small",onDragStart:()=>{m(s)},onDragEnd:()=>{m("")}},_.map(h=>f.default.createElement($,{key:h.walletId,size:"small",color:"#000",name:h.walletName,deleteAble:!C,onDelete:()=>{o({type:"walletId",keyringId:s,walletId:h.walletId})},editAble:!0,onEdit:()=>{a({type:"walletId",name:h.walletName,keyringId:s,walletId:h.walletId,list:_})},moveAble:_.length>=2})))))},ce=({list:e,onMove:o,onChangeName:a,onDelete:t})=>{let d=x(z),[c,m]=(0,f.useState)(""),[w,u]=(0,f.useState)("");return f.default.createElement("div",{className:"wallet-edit-card"},f.default.createElement(F,{type:"keyringId",onMove:o,moveAble:d.length>=2,keyringId:null,dataSource:e,size:"large",onDragStart:({id:i})=>{m(i)},onDragEnd:()=>{m("")}},e.map(i=>f.default.createElement(we,{key:i.keyringId,data:i,onMove:o,onDelete:t,onChangeName:a,currentId:c,currentFatherId:w,setCurrentFatherId:u}))))};n();r();var Z={DELETE_WALLET:"deleteWallet",DELETE_LAST_WALLET:"deleteLastWallet",DELETE_KEYRING_WALLETS:"deleteKeyringWallets"};Y.config({top:10});var Tt=()=>{let e=j(),o=q(),a=B(),t=x(oe),[d,c]=(0,y.useState)(!1),[m,w]=(0,y.useState)({}),u=({type:l,name:g,keyringId:E,walletId:N,list:v})=>{w({type:l,name:g,keyringId:E,walletId:N,list:v}),c(!0)},i=()=>{c(!1),w({})},s=async({updateName:l})=>{let{type:g,keyringId:E,walletId:N}=m;try{g==="walletId"?(await e(ee(N,l)),await e(se({walletId:N,walletName:l}))):(await e(te(E,l)),await e(ie({keyringId:E,keyringName:l}))),Y.success(a("wallet_edit_wallet_toast_renamed_success"))}catch(v){console.log("confirmChangeName error",v)}i()},_=(0,y.useRef)(),A=({type:l,keyringId:g,walletId:E})=>{var L,U;let N={nextPath:R,walletId:E,keyringId:g,actionType:l==="walletId"?Z.DELETE_WALLET:Z.DELETE_KEYRING_WALLETS};t.length===1&&((U=(L=t[0])==null?void 0:L.walletIdentities)==null?void 0:U.length)===1&&(N.actionType=Z.DELETE_LAST_WALLET);let v=re(N);o.replace(Q+v)},C=({type:l,keyringId:g,walletId:E})=>{_.current=K.warn({alignBottom:!1,title:a("wallet_editwallet_alert_maintitle_delete_wallet_risk"),text:a("wallet_editwallet_alert_subtitle_delete_wallet_risk"),confirmText:a("wallet_edit_wallet_btn_delete_wallet_risk"),cancelText:a("wallet_transfer_btn_cancel_transaction"),onCancel:()=>{_.current.destroy()},onConfirm:()=>{_.current.destroy(),A({type:l,keyringId:g,walletId:E})}})},h=async({type:l,keyringId:g,list:E})=>{if(l==="keyringId"){try{await e(O(E))}catch{console.log("setEditKeyringIdentities error")}return}let N=(0,_e.cloneDeep)(t),v=N.find(L=>L.keyringId===g);v.walletIdentities=E;try{await e(O(N))}catch{console.log("setEditKeyringIdentities error")}},I=async()=>{try{await ae(t)}catch(l){console.log("updateAllKeyringIdentities error",l)}o.goBack()};return(0,y.useEffect)(()=>{(!t||!t.length)&&o.push(X)},[t,o]),y.default.createElement(ne,{closeable:{children:y.default.createElement("div",{className:"wallet-management-edit-page__title-done",onClick:I},a("wallet_manage_btn_edit_done"))},backable:!1,bordered:!1,themeTypeClass:"darkThemeWrapper"},y.default.createElement("div",{className:"wallet-management__container wallet-management-edit-page"},y.default.createElement(ce,{list:t,onChangeName:u,onDelete:C,onMove:h}),y.default.createElement(de,{visible:d,data:m,onClose:i,onConfirm:s})))};export{Tt as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

