import{T as C}from"./chunk-U3HLVTEP.js";import{a as A}from"./chunk-RJTK42A4.js";import{na as P}from"./chunk-XBLB7XW3.js";import{Kc as y,Lc as N,Lg as b,e as c,ga as k,i as o,k as s,ka as q,la as S}from"./chunk-5YY3VNR7.js";o();s();var e=c(k()),h=c(S()),v=c(A());o();s();var g=c(S()),n=c(k());o();s();var $=()=>window.devicePixelRatio||window.webkitDevicePixelRatio||window.mozDevicePixelRatio||1;function f({word:x,index:w}){let p=(0,n.useRef)(),a=(0,n.useRef)(null);(0,n.useEffect)(()=>{let t=p.current,l=t.clientWidth,i=t.clientHeight,r=$();t.width=Math.round(l*r),t.height=Math.round(i*r),a.current=t==null?void 0:t.getContext("2d"),t.style.width=l+"px",t.style.height=i+"px",a.current.scale(r,r),m(x)},[]);let m=(t,l={})=>{let i=a.current,{fontSize:r=16,fontFamily:d="HarmonyOS Sans, PingFang SC, Microsoft Yahei, Heiti SC, WenQuanYi Micro Hei, Helvetica Neue, Helvetica, Arial, sans-serif",color:_="black",textAlign:W="left",textBaseline:D="middle",fontWeight:M="normal"}=l;i.beginPath(),i.font=`${M} ${r}px ${d}`,i.textAlign=W,i.textBaseline=D,i.fillStyle=_,i.fillText(t,8,23),i.stroke()};return n.default.createElement("div",{className:"seed-canvas","data-index":w+1},n.default.createElement("canvas",{ref:p}))}f.propTypes={word:g.default.string,index:g.default.number};var H=c(q());o();s();var T=({listMock:x,walletId:w,className:p})=>{let[a,m]=(0,e.useState)(!0),t=P(),l=N(b),i=y(),r=(0,e.useCallback)(()=>{m(!1);let d=(0,H.cloneDeep)(l);d[w]=!0,i(C(d))},[]);return e.default.createElement("div",{className:(0,v.default)("seed-panel",{border:a,...p})},e.default.createElement("div",{className:(0,v.default)("seed-panel__background",{blur:a})},x.map((d,_)=>e.default.createElement(f,{word:d,index:_,key:_}))),a?e.default.createElement("div",{className:"seed-panel__overlay__container",onClick:r},e.default.createElement("div",{className:(0,v.default)("seed-panel__text__lock",{show:!a})}),e.default.createElement("div",{className:"seed-panel__tip__container"},t("wallet_backup_wallet_text_tap_to_view"),e.default.createElement("br",null),t("wallet_backup_wallet_text_no_one_is_looking"))):e.default.createElement("div",{className:"seed-panel__hide"},e.default.createElement("div",{className:"seed-panel__hide-wrap",onClick:()=>m(!0)},e.default.createElement("div",{className:"seed-panel__hide-icon"}),e.default.createElement("div",{className:"seed-panel__hide-text"},t("wallet_extension_popup_backup_hide_seedphrase")))))};T.propTypes={listMock:h.default.array.isRequired,walletId:h.default.array.isRequired,className:h.default.string.isRequired};var z=T;o();s();export{z as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

