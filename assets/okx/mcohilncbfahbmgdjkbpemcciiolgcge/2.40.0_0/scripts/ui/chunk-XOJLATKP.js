import{a as oe}from"./chunk-UJXR2XAQ.js";import{b as j,c as q,d as G,e as Q,i as J,j as X,k as ee}from"./chunk-R6POV6JH.js";import{Ja as M,Ua as R,r as O,s as D,t as K,y as E}from"./chunk-SBW523XW.js";import{c as U}from"./chunk-NEW56Z2U.js";import{g as Z}from"./chunk-HX34N4W4.js";import{b as Y}from"./chunk-F7QJ6WQ5.js";import{A as $,l as z,qa as V,y as B}from"./chunk-KRRNVCWZ.js";import{Ca as c,Cd as S,Di as F,Hd as C,Ma as i,Qa as I,_a as v,_i as H,de as T,e as A,ee as W,i as k,ja as de,k as b,na as pe,qi as x,sc as P,sk as L,wa as m}from"./chunk-YC2Z7II3.js";k();b();var o=A(de());var N=A(pe());var ce="https://www.okx.com/support/hc/zh-cn/articles/4407989094413",d={SEED:"seed",KEY:"key",HARDWARE:"hardware",CREATE:"create"},We=({history:re})=>{let se=$(),te=i.useForm(),s=V(),[f,{set:y}]=z(!1),[a,ae]=(0,o.useState)({}),t=T(),{seedPhrase:n,privateKey:p,unlockHardwareWallets:l,chooseNetworkList:g}=W(e=>({seedPhrase:j(e),privateKey:q(e),unlockHardwareWallets:G(e),chooseNetworkList:Q(e),onboardingInitiator:L(e)})),ne=se.get("from")===d.HARDWARE,w=async(e,r,u=["all"])=>{try{t(M(!0)).then(async()=>{await t(R());let _=`${H}/${e}/${u[0]}`,{keyringName:ie="",walletName:_e=""}=r||{},me=`${ie}-${_e}`;e===d.HARDWARE&&C()===S&&(globalThis.platform.openExtensionInPopup(`${_}?anim=1`),globalThis.platform.closeCurrentWindow()),re.push({pathname:_,state:{walletName:me,anim:"1",next:F||x}})}).catch(console.log)}catch(_){console.error(_.message)}},h=o.default.useMemo(()=>{let{password:e,confirmPassword:r}=a;return!((e==null?void 0:e.length)>=6&&e===r)},[f,p,n,l,a]),le=B(async()=>{var e;if(!(f||h)){y(!0);try{if(n){let r=await t(D(a.password,((e=n==null?void 0:n.trim().toLowerCase().match(/\w+/gu))==null?void 0:e.join(" "))||"",!0));w(d.SEED,r),t(J())}if(p){let r=await t(K(a.password,g,p,!0));w(d.KEY,r,g),t(X())}if(!N.default.isEmpty(l)){await v().setPassword(a.password);let r=await t(E(l.selectedAccounts,l.device,l.path,l.description,!1));w(d.HARDWARE,r,[P]),t(ee())}if(!n&&!p&&N.default.isEmpty(l)){let r=await t(O(a.password,!0));w(d.CREATE,r)}}catch(r){r.message===U&&I.error(s("wallet_home_toast_network_error"))}finally{y(!1)}}},[h,a,n,p,E,g]);return o.default.createElement("div",{className:"create-password"},o.default.createElement(Z,{bordered:!1,closeable:!1}),o.default.createElement("div",{className:"create-password__container"},o.default.createElement("h1",{className:"create-password__title"},s("wallet_signup_maintitle_set_password")),o.default.createElement("div",{className:"create-password__desc"},s(ne?"wallet_extension_signup_subtitle_set_password_hardware":"wallet_signup_subtitle_set_password"),o.default.createElement("a",{target:"__blank",href:s("wallet_set_password_header_link_learn_more_url")||ce,className:"create-password__desc__link"},s("wallet_set_password_header_link_learn_more"))),o.default.createElement(i,{form:te,size:m.SIZE.lg,onSubmit:le,validateTrigger:["onChange"],className:"create-password__form",onValuesChange:(e,r)=>{ae(r)}},o.default.createElement(i.Item,{name:"password",style:{marginBottom:8},className:"create-password__form__input",label:s("wallet_set_password_subtitle_password")},o.default.createElement(c.Password,{autoFocus:!0,autoComplete:"off",size:c.SIZE.xl,placeholder:s("wallet_set_password_errortip_password_not_long_enough")})),o.default.createElement(i.Item,{noStyle:!0,style:{minHeight:25},shouldUpdate:(e,r)=>e.password!==r.password},({getFieldValue:e})=>{let r=e("password");return o.default.createElement(oe,{password:r})}),o.default.createElement(i.Item,{name:"confirmPassword",style:{flex:1},dependencies:["password"],className:"create-password__form__input",rules:[({getFieldValue:e})=>({validator:(r,u)=>{let _=e("password");return u&&_!==u?Promise.reject(s("wallet_set_password_errortip_password_not_match")):Promise.resolve()}})],label:s("wallet_set_password_subtitle_confirm_password")},o.default.createElement(c.Password,{autoComplete:"off",size:c.SIZE.xl,placeholder:s("wallet_set_password_errortip_password_not_long_enough")})),o.default.createElement(Y.FooterActions,null,o.default.createElement("div",{className:"create-password__agreement"},s("wallet_extension_password_toast_text_continue_to_agree",{terms_service:""}),o.default.createElement("a",{className:"create-password__agreement__link",href:s("wallet_extension_password_toast_link_terms_servicenew"),target:"__blank"},s("wallet_estension_password_toast_link_terms_service"))),o.default.createElement(i.Item,{noStyle:!0},o.default.createElement(m,{block:!0,htmlType:"submit",disabled:h,size:m.SIZE.lg,type:m.TYPE.highlight,loading:f,category:m.CATEGORY.fill},s("wallet_set_password_btn_confirm")))))))};export{d as a,We as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

