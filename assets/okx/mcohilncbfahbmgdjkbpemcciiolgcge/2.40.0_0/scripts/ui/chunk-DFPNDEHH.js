import{$k as p,_f as a,i as o,k as r}from"./chunk-YC2Z7II3.js";o();r();var n={aptosGasInfo:{},tronIsTRC20:!1,addressWarnType:"",zkspaceSignInfo:{},btcSelectedSat:{satBytes:0,type:a.STANDARD},ethereumGasInfo:{gasType:a.STANDARD,gasPrice:"0",gasLimit:"0",isGasLimitLoading:!1,maxFeePerGas:"0",maxPriorityFeePerGas:"0",supportEip1559:!1},ethereumIsShowNetworkFee:!1,solanaRent:{selfRent:"",toRent:""}},s=p({name:"businessSend",initialState:n,reducers:{setAptosGasInfo:(e,t)=>{e.aptosGasInfo=t.payload},setTronIsTRC20:(e,t)=>{e.tronIsTRC20=t.payload},setAddressWarnType:(e,t)=>{e.addressWarnType=t.payload},setZKSpaceSignInfo:(e,t)=>{e.zkspaceSignInfo=t.payload},setBtcSelectedSat:(e,t)=>{e.btcSelectedSat={...e.btcSelectedSat,...t.payload}},setEthereumGasInfo:(e,t)=>{e.ethereumGasInfo=t.payload},setEthereumIsShowNetworkFee:(e,t)=>{e.ethereumIsShowNetworkFee=t.payload},setSolanaRent:(e,t)=>{e.solanaRent=t.payload},resetBusinessSend:e=>{e.aptosGasInfo=n.aptosGasInfo,e.tronIsTRC20=n.tronIsTRC20,e.addressWarnType=n.addressWarnType,e.zkspaceSignInfo=n.zkspaceSignInfo,e.btcSelectedSat=n.btcSelectedSat,e.ethereumGasInfo=n.ethereumGasInfo,e.solanaRent=n.solanaRent}}}),{actions:c,reducer:S}=s,f=S,m=e=>e[s.name].aptosGasInfo,u=e=>e[s.name].tronIsTRC20,i=e=>e[s.name].addressWarnType,T=e=>e[s.name].zkspaceSignInfo,y=e=>e[s.name].btcSelectedSat,g=e=>e[s.name].ethereumGasInfo,h=e=>e[s.name].ethereumIsShowNetworkFee,R=e=>e[s.name].solanaRent,{setAptosGasInfo:G,setTronIsTRC20:w,setAddressWarnType:x,setZKSpaceSignInfo:k,setBtcSelectedSat:A,setEthereumGasInfo:F,setEthereumIsShowNetworkFee:C,setSolanaRent:E,resetBusinessSend:N}=c;export{f as a,m as b,u as c,i as d,T as e,y as f,g,h,R as i,G as j,w as k,x as l,k as m,A as n,F as o,C as p,E as q,N as r};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";
