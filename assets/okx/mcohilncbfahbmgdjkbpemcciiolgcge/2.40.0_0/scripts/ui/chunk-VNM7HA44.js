import{a as v}from"./chunk-TNVBYBO5.js";import{Ik as O,Na as N,e as a,i as o,ja as S,k as r,oa as $}from"./chunk-YC2Z7II3.js";o();r();var h=a(S()),I=a(v());o();r();var z={normal:{size:32,offset:20},small:{size:16,offset:10}};function y(n){var m;let t=n;return typeof t=="string"&&(t=((m=z[n])!=null?m:{}).size),typeof t!="number"&&(t=z.normal.size),t}o();r();function w({style:n,className:t,size:m="normal",noBorder:c,...u}){let s=y(m);return h.default.createElement("div",{className:(0,I.default)("coin-logo",t),style:{...n||{},width:`${s}px`,height:`${s}px`,...c?{border:"none"}:{}}},h.default.createElement(N,{alt:"coin-logo",errorImg:O,...u,className:"coin-logo__img",width:s,height:s}))}var d=w;o();r();o();r();var i=a(S()),M=a(v()),e=a($());o();r();function _({style:n,className:t,srcset:m,size:c="normal",offset:u,children:s}){var L,C;let x=y(c),T=(C=typeof u=="number"?u:(L=z[c])==null?void 0:L.offset)!=null?C:0,p;return p=i.Children.map(s,l=>{var f;return l.type===d?(0,i.cloneElement)(l,{size:x,style:{...(f=l.props.style)!=null?f:{}}}):null}),(!p||p.length===0)&&(p=m.map((l,f)=>{let b=T;return f===0&&(b=0),i.default.createElement(d,{src:l,size:x,style:{marginLeft:`${-b}px`},key:f})})),i.default.createElement("div",{className:(0,M.default)("coin-logo-box",t),style:{...n||{}}},p)}_.propsType={style:e.default.any,className:e.default.string,srcset:e.default.arrayOf(e.default.string),size:e.default.oneOf([e.default.string,e.default.number]),offset:e.default.number,children:e.default.element};var B=_;export{d as a,B as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

