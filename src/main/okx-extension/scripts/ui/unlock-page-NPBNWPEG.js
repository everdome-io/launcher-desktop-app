import{b as C}from"./chunk-TYY4MUDF.js";import"./chunk-TDVG2NBK.js";import{q as A}from"./chunk-U3HLVTEP.js";import{f as D,g as M}from"./chunk-5TVTY5EZ.js";import{a as B}from"./chunk-RJTK42A4.js";import{na as Y,x as W}from"./chunk-XBLB7XW3.js";import{Ha as c,Hj as P,Kc as L,La as F,Lc as k,Vc as x,ah as y,bg as R,e as f,ga as O,i as w,k as g,ma as I,sb as T,sh as U,ta as p,yb as v}from"./chunk-5YY3VNR7.js";w();g();var e=f(O()),S=f(B());w();g();var a=f(O());var h=f(B()),q=a.default.forwardRef(({value:i,placeholder:u,onChange:s,initFocus:E=!0,...o},_)=>{let[N,t]=a.default.useState(E),[l,n]=a.default.useState(!0);return a.default.createElement("div",{className:(0,h.default)("unlock-password",{focus:N}),onBlur:()=>{t(!1)},onFocus:()=>{t(!0)}},a.default.createElement("input",{ref:_,autoFocus:!0,value:i,...o,className:(0,h.default)({"unlock-password__no__value":!i}),placeholder:u,onChange:s,type:l?"password":"text"}),a.default.createElement(I,{onClick:()=>{n(d=>!d)},className:(0,h.default)("unlock-password__suffix__icon",{"okds-eye-show-filled":l,"okds-eye-hide-filled":!l})}))});var ce=({history:i})=>{let u=(0,e.useRef)(),s=c.useForm(),E=L(),o=Y(),{isUnlocked:_,currentLocale:N}=k(({metamask:r})=>({isUnlocked:r.isUnlocked,currentLocale:r.currentLocale})),[t,l]=e.default.useState(!1),[n,d]=e.default.useState(null),z=k(R),G=k(P),V=v()===T;(0,e.useEffect)(()=>{C({islogin:"no",isbydapp:V?" yes":"no",dapp_url:G,wallet_id:z})},[]);let K=W(async()=>{var b;let r=s.getFieldValue("password");if(r&&!t&&!n){l(!0);try{await E(A(r)),i.push(y)}catch({message:m}){m===D?d(o("wallet_set_password_errortip_password_wrong")):m===M&&F.error(o("wallet_home_toast_network_error"))}finally{l(!1),(b=u.current)==null||b.focus()}}},[s,t,n]);return e.default.useLayoutEffect(()=>{_&&i.push(y)},[_]),e.default.useEffect(()=>{s==null||s.setErrors({password:n})},[n]),e.default.createElement("div",{className:"unlock-page"},e.default.createElement("div",{className:"unlock-page__header"},e.default.createElement("h1",{className:(0,S.default)("unlock-page__title",`unlock-page__title__${N}`)},o("wallet_home_maintitle_one_web3_portal")),e.default.createElement("div",{className:"unlock-page__desc"},o("wallet_home_subtitle_crypto_dapp_nft"))),e.default.createElement(c,{form:s,className:"unlock-page__form",onChange:()=>{d(null)},onSubmit:K},e.default.createElement(c.Item,{name:"password",className:"unlock-page__form__item"},e.default.createElement(q,{ref:u,autoComplete:"off",disabled:t,placeholder:o("wallet_home_lock_wallet_placeholder_input_password")})),e.default.createElement(c.Item,{shouldUpdate:!0,className:"unlock-page__form__item"},({getFieldValue:r})=>{let m=!r("password");return e.default.createElement(p,{block:!0,htmlType:"submit",disabled:m,loading:t,className:(0,S.default)("unlock-page__btn",{"unlock-page__btn__disabled":m}),category:p.CATEGORY.fill,type:p.TYPE.primary,size:p.SIZE.lg},o("wallet_home_btn_unlock"))})),e.default.createElement(x,{className:"unlock-page__forget",to:U},o("wallet_footer_subtitle_forgot_password")),e.default.createElement("video",{muted:!0,autoPlay:!0,loop:!0,className:"unlock-page__bg",src:"/static/images/index/middle.mp4"}))};export{ce as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

