import{d as V,e as q}from"./chunk-XRONFNCJ.js";import{a as G}from"./chunk-WF3X5RMC.js";import{a as j}from"./chunk-4PTE5JIT.js";import{a as Q}from"./chunk-FQDBFLDR.js";import{a as L}from"./chunk-VNM7HA44.js";import{G as O}from"./chunk-SBW523XW.js";import"./chunk-NEW56Z2U.js";import"./chunk-HX34N4W4.js";import"./chunk-F7QJ6WQ5.js";import{a as ee}from"./chunk-TNVBYBO5.js";import{c as R,qa as E}from"./chunk-KRRNVCWZ.js";import{Aa as F,Pa as M,ce as Y,e as u,g as C,i as c,ja as I,k as p,oa as z,pa as U}from"./chunk-YC2Z7II3.js";c();p();c();p();var T=u(I()),K=u(z());c();p();c();p();var f=u(I()),g=u(z());c();p();var s=u(I()),X=u(ee()),Z=u(R());c();p();var v=u(I()),J=()=>window.devicePixelRatio||window.webkitDevicePixelRatio||window.mozDevicePixelRatio||1,te=(e,n,o)=>{if(typeof n!="string")return;let{canvas:r}=e,{fontSize:i=16,fontFamily:t="HarmonyOS Sans, PingFang SC, Microsoft Yahei, Heiti SC, WenQuanYi Micro Hei, Helvetica Neue, Helvetica, Arial, sans-serif",color:a="black",textAlign:m="left",textBaseline:l="top",lineHeight:x=24,fontWeight:b="normal",maxWidth:B=300,padding:S=[20,12]}=o,[_]=S;e.font=`${b} ${i}px ${t}`,e.textAlign=m,e.textBaseline=l,e.fillStyle=a;let h=n.split(""),d="",y=1;for(let w=0;w<h.length;w++){let D=d+h[w];e.measureText(D).width>B&&w>0?(d=h[w],y+=1):d=D}let N=x*y+_,H=J();r.height=Math.round(N*H),r.style.height=`${N}px`,e.scale(H,H)},ie=(e,n,o)=>{if(typeof n!="string")return;let{fontSize:r=16,fontFamily:i="HarmonyOS Sans, PingFang SC, Microsoft Yahei, Heiti SC, WenQuanYi Micro Hei, Helvetica Neue, Helvetica, Arial, sans-serif",color:t="black",textAlign:a="left",textBaseline:m="top",lineHeight:l=24,fontWeight:x="normal",maxWidth:b=300,padding:B=[20,12]}=o,[S,_]=B;e.font=`${x} ${r}px ${i}`,e.textAlign=a,e.textBaseline=m,e.fillStyle=t;let h=n.split(""),d="";_=a==="center"?b/2+_:_,e.beginPath();for(let y=0;y<h.length;y++){let N=d+h[y];e.measureText(N).width>b&&y>0?(e.fillText(d,_,S),d=h[y],S+=l):d=N}e.fillText(d,_,S)};function $({text:e,className:n,style:o}){let r=(0,v.useRef)(),i=(0,v.useRef)(null);return(0,v.useEffect)(()=>{let t=r.current,a=t.clientWidth,m=t.clientHeight,l=J();t.width=Math.round(a*l),t.height=Math.round(m*l),i.current=t==null?void 0:t.getContext("2d"),t.style.width=`${a}px`,t.style.height=`${m}px`,i.current.scale(l,l),i.current.clearRect(0,0,t.width,t.height)},[]),(0,v.useEffect)(()=>{te(i.current,e,o),ie(i.current,e,o)},[i,e,o]),v.default.createElement("canvas",{className:n,ref:r})}function A({privateKey:e}){let n=E(),[o,r]=(0,s.useState)(!0),i=(0,s.useCallback)(()=>{r(a=>!a)},[]),t=()=>{let a=F.warn({alignBottom:!1,title:n("wallet_extension_popup_tittle_confirm_to_copy"),text:n("wallet_extension_popup_desc_copying_private_keys_risky"),confirmText:n("wallet_extension_popup_btn_confirm"),cancelText:n("wallet_extension_popup_btn_cancel"),onCancel:()=>{a.destroy()},onConfirm:()=>{a.destroy(),(0,Z.default)(e),M.success({title:n("wallet_backup_wallet_toast_private_key_copied"),duration:1.5,placement:M.DIRECTION.top})}})};return s.default.createElement("div",{className:"copy-private-key"},s.default.createElement("div",{className:"copy-private-key__private-key",onClick:i},o&&s.default.createElement("div",{className:"copy-private-key__private-key__unlock-icon"}),s.default.createElement("div",{className:(0,X.default)("copy-private-key__private-key__canvas-container",{blur:o})},s.default.createElement($,{className:"copy-private-key__private-key__canvas",style:{fontSize:14,lineHeight:24,fontWeight:400,textAlign:"left",color:"#000000",maxWidth:304,padding:[20,12]},text:e})),!o&&s.default.createElement("div",{className:"copy-private-key__private-key__lock-icon"})),s.default.createElement("div",{className:"copy-private-key__copy-button",onClick:t},s.default.createElement(U,{className:"okx-wallet-plugin-copy-1",style:{fontSize:"20px"}}),s.default.createElement("span",null,n("wallet_extension_button_text_copy_private_key"))))}function W({title:e,privateKey:n,coinTypeIconSrc:o,onUnfold:r,index:i,showIndex:t,address:a}){let[m,l]=(0,f.useState)(!1),x=()=>m?l(!1):t===i?l(!0):r(i);return(0,f.useEffect)(()=>{l(t===i)},[t]),f.default.createElement("div",{className:"private-key__container"},f.default.createElement("div",{className:"private-key__wrapper"},f.default.createElement(L,{className:"private-key__card-icon",src:o}),f.default.createElement(G,{onClick:x,className:"private-key__content",size:"mid",title:e,explain:q(a),titleColor:"#000000",explainColor:"#929292",rightIconType:m?"down":"up"})),m&&f.default.createElement(A,{privateKey:n}))}W.propTypes={onClick:g.default.func,coinTypeIconSrc:g.default.string,showIndex:g.default.number,index:g.default.number,title:g.default.node,onUnfold:g.default.func};var k=class extends T.PureComponent{constructor(){super(...arguments);C(this,"state",{title:"",list:[],showIndex:-1});C(this,"getPrivateKey",async o=>{let{getBackupPrivateKeys:r}=this.props;try{let i=await r(o);this.setState({list:i})}catch(i){console.log("getBackupPrivateKeys....err",i)}});C(this,"onUnfold",o=>{this.setState({showIndex:o})})}componentDidMount(){let{history:o,keyringIdentities:r}=this.props,{walletId:i}=j(o.location.search.slice(1)),t=V(r,i);this.setState({title:t.walletName}),this.getPrivateKey(i)}render(){let{list:o,title:r,showIndex:i}=this.state;return T.default.createElement(Q,{title:r},T.default.createElement("div",{className:"wallet-management__container wallet-management-private-key-list-page"},o.map((t,a)=>T.default.createElement(W,{key:a,title:t.chainName,privateKey:t.privateKey,address:t.address,coinTypeIconSrc:t.image,onUnfold:this.onUnfold,showIndex:i,index:a}))))}};C(k,"propTypes",{history:K.default.object,getBackupPrivateKeys:K.default.func}),C(k,"contextTypes",{t:K.default.func});var oe=e=>({keyringIdentities:e.metamask.keyringIdentities}),ne=()=>({getBackupPrivateKeys:e=>O(e)}),ze=Y(oe,ne)(k);export{ze as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

