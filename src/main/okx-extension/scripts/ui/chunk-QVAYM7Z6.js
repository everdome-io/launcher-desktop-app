import{$ as f,na as y}from"./chunk-XBLB7XW3.js";import{Gg as p,Jj as g,Lc as a,e as d,i as l,k as s,ka as b,ug as A}from"./chunk-5YY3VNR7.js";l();s();var m=d(b());var M=g({name:"coinDetail",initialState:{memoryRouteMap:{}},reducers:{storePage:(o,n)=>{o.memoryRouteMap=n.payload}}}),{actions:v,reducer:x}=M,{storePage:B}=v;var D=o=>o.coinDetail.memoryRouteMap,F=x;function T({aggregationCoinMap:o,coinSymbol:n,coinAmountFn:e,allCoinsMap:r}){let i=[],u=o[n];return u&&(i=u.filter(t=>Boolean(t.localType)).map(t=>{let c=r[t.baseCoinId]||t;return{...t,...e(t.coinId),chainImage:c.image}}),i=(0,m.sortBy)((0,m.sortBy)(i,t=>t.tokenSort),t=>-t.coinAmount)),i}function w(o,n){let e=o.filter(r=>r.coinAmount>0);return e&&e.length>=2?[{coinSymbol:o[0].symbol,image:o[0].image,coinAmount:0,currencyAmount:0,tokenType:n("wallet_extension_dashboard_tab_overview"),coinId:""}]:[]}function I(o){let n=0,e=0;return o.forEach(r=>{n+=r.coinAmount,e+=r.currencyAmount}),{coinAmountAll:n,currencyAmountAll:e}}function L(o){if(!o)return{overviewTab:[],coinList:[],coinAmountAll:0,currencyAmountAll:0};let n=y(),e=f(),r=a(p),i=a(A),u=T({aggregationCoinMap:i,coinSymbol:o,coinAmountFn:e,allCoinsMap:r}),t=w(u,n),{coinAmountAll:c,currencyAmountAll:C}=I(u);return{overviewTab:t,coinList:u,coinAmountAll:c,currencyAmountAll:C}}export{B as a,D as b,F as c,L as d};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

