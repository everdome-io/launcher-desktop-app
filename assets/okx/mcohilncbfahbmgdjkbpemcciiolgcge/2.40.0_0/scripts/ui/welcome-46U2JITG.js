import{Ia as P,W as L}from"./chunk-SBW523XW.js";import"./chunk-NEW56Z2U.js";import{i as D,qa as u}from"./chunk-KRRNVCWZ.js";import{Aa as Y,Ad as b,Hd as x,Wi as f,Yi as H,Zi as g,de as M,e as w,i,ja as A,k as r,ke as k,pa as v,wa as e,wi as y,xa as C,xj as N,yj as I}from"./chunk-YC2Z7II3.js";i();r();var n=w(A());i();r();var t=w(A());var B=()=>{let l=u(),a=t.default.useRef(),[s,_]=t.default.useState(0),p=(0,t.useMemo)(()=>({onMouseEnter:()=>{var c;(c=a.current)==null||c.stopAutoPlay()},onMouseLeave:()=>{var c;(c=a.current)==null||c.openAutoPlay()}}),[]);return t.default.createElement("div",{className:"welcome-carousel"},s!==0&&t.default.createElement("div",{className:"welcome-carousel-prev",onClick:()=>a.current.prev(),...p},t.default.createElement("div",{className:"welcome-carousel-icon"},t.default.createElement(v,{className:"okx-wallet-plugin-arrow-pointer-up",style:{color:"#fff"}}))),t.default.createElement("div",{className:"welcome-carousel-next",onClick:()=>a.current.next(),...p},t.default.createElement("div",{className:"welcome-carousel-icon"},t.default.createElement(v,{className:"okx-wallet-plugin-arrow-pointer-up",style:{color:"#fff"}}))),t.default.createElement("ul",{className:"welcome-carousel-points"},new Array(3).fill(1).map((c,d)=>t.default.createElement("li",{key:d,className:s===d?"welcome-carousel-point active":"welcome-carousel-point",onClick:()=>{a.current.switchTo(d)}}))),t.default.createElement(C,{loop:!0,autoplay:2e3,ref:a,navigation:!1,touchSwitch:!1,className:"welcome-carousel__core",showIndicators:!1,onChange:c=>{_(c)}},t.default.createElement(C.Slide,{className:"welcome-carousel-item"},t.default.createElement("div",{className:"welcome-carousel-title"},l("extension_wallet_maintitle_dapps")),t.default.createElement("img",{src:"static/images/carousel-bg-1.png",className:"welcome-carousel-image"})),t.default.createElement(C.Slide,{className:"welcome-carousel-item"},t.default.createElement("div",{className:"welcome-carousel-title"},l("extension_wallet_maintitle_allinone")),t.default.createElement("img",{src:"static/images/carousel-bg-2.png",className:"welcome-carousel-image"})),t.default.createElement(C.Slide,{className:"welcome-carousel-item"},t.default.createElement("div",{className:"welcome-carousel-title"},l("extension_wallet_maintitle_crosschain_safety")),t.default.createElement("img",{src:"static/images/carousel-bg-3.png",className:"welcome-carousel-image"}))))};i();r();var W=w(A());i();r();i();r();var E=w(A());i();r();var O=w(A());var U=({actions:l,onAction:a})=>O.default.createElement("div",{className:"select-create-wallet-method"},l.map(({btnText:s,actionType:_,...p})=>O.default.createElement(e,{block:!0,key:s,className:"select-create-wallet-method__action",onClick:()=>a(_),...p},s)));i();r();var o={CREATE:"CREATE",MNEMONIC:"MNEMONIC",PRIVATEKEY:"PRIVATEKEY",HARDWARE:"HARDWARE",CANCEL:"CANCEL"},R=[{size:e.SIZE.lg,type:e.TYPE.highlight,category:e.CATEGORY.fill,actionType:o.MNEMONIC,link:N,btnText:"wallet_addwallet_btn_import_seed_phase"},{size:e.SIZE.lg,type:e.TYPE.highlight,category:e.CATEGORY.fill,actionType:o.PRIVATEKEY,link:I,btnText:"wallet_addwallet_btn_import_private_key"},{size:e.SIZE.lg,type:e.TYPE.highlight,category:e.CATEGORY.fill,actionType:o.HARDWARE,link:null,btnText:"wallet_addwallet_btn_hardware_wallet"},{size:e.SIZE.lg,type:e.TYPE.primary,actionType:o.CANCEL,category:e.CATEGORY.outline,btnText:"wallet_transfer_btn_cancel_transaction"}],S=[{size:e.SIZE.lg,type:e.TYPE.highlight,category:e.CATEGORY.fill,actionType:o.CREATE,link:f,btnText:"wallet_addwallet_btn_import_seed_phase"},{size:e.SIZE.lg,type:e.TYPE.highlight,category:e.CATEGORY.fill,actionType:o.HARDWARE,link:null,btnText:"wallet_addwallet_btn_hardware_wallet"},{size:e.SIZE.lg,type:e.TYPE.primary,actionType:o.CANCEL,category:e.CATEGORY.outline,btnText:"wallet_transfer_btn_cancel_transaction"}];var G={[o.MNEMONIC]:N,[o.PRIVATEKEY]:I,[o.HARDWARE]:null},h=(l,a=G)=>{let s=k(),_=E.default.useRef(),p=u(),c=(0,E.useMemo)(()=>l.map(m=>({...m,btnText:p(m.btnText)})),[l]),d=()=>{var m;(m=_.current)==null||m.destroy()},V=(0,E.useCallback)(m=>{if(d(),m===o.HARDWARE){x()===b?globalThis.platform.openExtensionInBrowser(y):s.push(y);return}m!==o.CANCEL&&s.push(a[m])},[]),Z=E.default.createElement(U,{actions:c,onAction:V});return()=>{_.current=Y.show({hideCloseBtn:!0,showBackBtn:!1,noContentPadding:!0,alignBottom:!0,windowClass:"select-create-wallet-method-dialog",children:Z})}};var K="import",F="create",z=()=>{let l=M(),a=h(R,{[o.MNEMONIC]:H,[o.PRIVATEKEY]:g,[o.HARDWARE]:g}),s=h(S,{[o.CREATE]:f,[o.HARDWARE]:g});D(()=>{l(L(!0))});let _=(0,W.useCallback)(()=>{l(P(F)),s()},[]);return{onImportWallet:(0,W.useCallback)(()=>{l(P(K)),a()},[]),onCreateWallet:_}};var ke=()=>{let l=u(),{onImportWallet:a,onCreateWallet:s}=z();return n.default.createElement("div",{className:"welcome"},n.default.createElement(B,null),n.default.createElement("div",{className:"welcome-actions"},n.default.createElement(e,{size:e.SIZE.md,className:"welcome-action welcome-action__white",type:e.TYPE.tertiary,category:e.CATEGORY.fill,style:{marginBottom:16},onClick:s},n.default.createElement("div",{className:"welcome-action__content"},n.default.createElement("div",{className:"welcome-action__title"},l("wallet_home_btn_maintitle_create_wallet")),n.default.createElement("div",{className:"welcome-action__desc"},l("wallet_home_btn_subtitle_new_user")))),n.default.createElement(e,{size:e.SIZE.md,onClick:a,className:"welcome-action welcome-action__transparent"},n.default.createElement("div",{className:"welcome-action__content"},n.default.createElement("div",{className:"welcome-action__title"},l("wallet_home_btn_import_wallet")),n.default.createElement("div",{className:"welcome-action__desc"},l("wallet_home_subtitle_import_wallet"))))))};export{ke as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";
