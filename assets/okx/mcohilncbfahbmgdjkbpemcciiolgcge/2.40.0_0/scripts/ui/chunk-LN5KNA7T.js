import{b as me,d as o,e as ae,f as T}from"./chunk-HX34N4W4.js";import{a as s,b as fe}from"./chunk-F7QJ6WQ5.js";import{a as k}from"./chunk-TNVBYBO5.js";import{Ca as pe,Ga as X,e as p,i as m,ja as C,k as a,oa as O,sa as W}from"./chunk-YC2Z7II3.js";m();a();m();a();var ye=p(C()),de=p(k()),v=p(O());m();a();var d={"wallet-list__item":"_wallet-list__item_laiho_1",walletListItem:"_wallet-list__item_laiho_1","wallet-list__item__hover":"_wallet-list__item__hover_laiho_5",walletListItemHover:"_wallet-list__item__hover_laiho_5","wallet-list-line":"_wallet-list-line_laiho_12",walletListLine:"_wallet-list-line_laiho_12","wallet-list__cell":"_wallet-list__cell_laiho_16",walletListCell:"_wallet-list__cell_laiho_16","wallet-list-search":"_wallet-list-search_laiho_20",walletListSearch:"_wallet-list-search_laiho_20","wallet-list-card":"_wallet-list-card_laiho_23",walletListCard:"_wallet-list-card_laiho_23","wallet-list-card__selected":"_wallet-list-card__selected_laiho_28",walletListCardSelected:"_wallet-list-card__selected_laiho_28","wallet-list-token__tag":"_wallet-list-token__tag_laiho_31",walletListTokenTag:"_wallet-list-token__tag_laiho_31"};var $=({hovered:r=!0,className:e,children:t,...i})=>ye.default.createElement(s.FlexBox,{align:s.ALIGN.center,className:(0,de.default)(d["wallet-list__item"],{[d["wallet-list__item__hover"]]:r},e),...i},t);$.propTypes={hovered:v.default.bool,className:v.default.string,children:v.default.node,space:v.default.oneOfType([v.default.string,v.default.number])};$.defaultProps={hovered:!0};var S=$;m();a();var P=p(C()),_e=p(k()),h=p(O());var R=({to:r,icon:e,title:t,value:i,isLink:l,href:u,className:y,children:_,...w})=>{let g=r||u,L=g?{to:r,href:u,block:!0,color:"#000",inline:!1}:{},E=g?me:P.default.Fragment;return P.default.createElement(E,{...L},P.default.createElement(S,{className:(0,_e.default)(d["wallet-list__cell"],y),...w},!!e&&P.default.createElement(T,{flexShrink:"0",type:T.TYPE.icon,size:T.SIZE.lg,...typeof e=="object"?{...e,style:{marginRight:"12px",...e.style}}:{icon:e}}),!!t&&P.default.createElement(o.Text,{strong:!0,size:o.SIZE.md,type:o.TYPE.default,style:{flex:1,flexShrink:0}},t),!!i&&P.default.createElement(o.Text,{size:o.SIZE.md,style:{marginRight:"4px"},type:o.TYPE.secondary},i),_,!!l&&P.default.createElement(T,{type:T.TYPE.icon,size:T.SIZE.xs,icon:"okds-arrow-chevron-right-centered-md",...typeof l=="object"?l:{}})))};R.propTypes={to:h.default.string,href:h.default.string,title:h.default.node,value:h.default.node,isLink:h.default.oneOfType([h.default.bool,h.default.object]),icon:h.default.oneOfType([h.default.string,h.default.object])};R.defaultProps={to:void 0,href:void 0,title:void 0,value:void 0,isLink:!1,icon:""};var q=R;m();a();var x=p(C()),ue=p(k());var c=p(O());var ee=({to:r,tag:e,href:t,icon:i,symbol:l,name:u,balance:y,makert:_,children:w,keyword:g,className:L,...E})=>{let M=(0,x.useMemo)(()=>{let Z={size:T.SIZE.lg};return i&&typeof i=="string"?{src:i,type:T.TYPE.image,...Z}:i&&typeof i=="object"?{...Z,...i}:l&&typeof l=="string"?{text:l,type:T.TYPE.text,...Z}:!1},[i,l]),H=y!==void 0||_!==void 0;return x.default.createElement(q,{to:r,href:t,icon:M,className:(0,ue.default)(d["wallet-list-token"],L),...E},x.default.createElement(s.FlexBox,{style:{flex:1},direction:s.DIRECTION.vertical},x.default.createElement(s.FlexBox,{align:s.ALIGN.center,style:{lineHeight:"20px",marginRight:"12px",maxWidth:"211px",flex:1}},x.default.createElement(o.HighlightKeyword,{strong:!0,text:l,keyword:g,ellipsis:{tooltip:!0}}),!!e&&x.default.createElement(W,{size:W.SIZE.md,type:W.TYPE.rounded,color:W.COLOR.gray,className:d["wallet-list-token__tag"],...typeof e=="object"?e:{}},typeof e!="object"?e:e==null?void 0:e.title)),x.default.createElement(o.Text,{strong:!0,ellipsis:{tooltip:!0},size:o.SIZE.xs,type:o.TYPE.secondary,style:{lineHeight:"16px",marginRight:"12px",maxWidth:"211px"}},u)),H&&x.default.createElement(s.FlexBox,{overflow:"hidden",direction:s.DIRECTION.vertical},x.default.createElement(o.Text,{strong:!0,ellipsis:{tooltip:!0},align:o.ALIGN.right,style:{lineHeight:"20px",width:"100%"}},y||"--"),!!_&&x.default.createElement(o.Text,{strong:!0,ellipsis:!0,size:o.SIZE.xs,type:o.TYPE.secondary,align:o.ALIGN.right,style:{width:"100%",lineHeight:"16px"}},_||"--")),w)};ee.propTypes={to:c.default.string,href:c.default.string,symbol:c.default.node,name:c.default.node,balance:c.default.node,makert:c.default.node,children:c.default.node,keyword:c.default.string,className:c.default.string,icon:c.default.oneOfType([c.default.string,c.default.object])};ee.defaultProps={};var ce=x.default.memo(ee);m();a();var K=p(C()),xe=p(k()),B=p(O());var te=({size:r,label:e,value:t,children:i,className:l,...u})=>K.default.createElement(S,{hovered:!1,className:(0,xe.default)(d["wallet-list-line"],l),justify:"space-between",...u},!!e&&K.default.createElement(o.Text,{size:r,type:o.TYPE.secondary},e),!!t&&K.default.createElement(o.Text,{size:r,type:o.TYPE.default},t),i);te.propTypes={size:B.default.oneOf([o.SIZE.xl,o.SIZE.lg,o.SIZE.md,o.SIZE.xs,o.SIZE.sm]),label:B.default.node.isRequired,value:B.default.node,className:B.default.string,children:B.default.node};te.defaultProps={size:o.SIZE.md,value:null,className:"",children:null};var ge=te;m();a();var re=p(k()),n=p(O()),f=p(C());m();a();var F=p(C()),Te=r=>{let{searchable:e}=r,[t,i]=(0,F.useState)(e==null?void 0:e.search),l=(0,F.useCallback)(({target:{value:y}})=>{var _;i(y),(_=e==null?void 0:e.onSearch)==null||_.call(e,y)},[]),u=(0,F.useMemo)(()=>{var _;if(!t||!(e!=null&&e.keyword))return r.dataSource;let y=typeof e.keyword=="string"?[e.keyword]:e.keyword;return(_=r.dataSource)==null?void 0:_.filter(w=>{var g;for(let L=0;L<(y==null?void 0:y.length);L++){let E=w[y[L]];if(((g=E==null?void 0:E.toUpperCase())==null?void 0:g.indexOf(t==null?void 0:t.toUpperCase()))>=0)return!0}return!1})},[t,r.keyword,r.dataSource]);return[t,u,l]};m();a();var j=p(C()),he=p(k()),G=p(O());m();a();var J={"wallet-empty":"_wallet-empty_1l0f3_1",walletEmpty:"_wallet-empty_1l0f3_1","wallet-empty-image":"_wallet-empty-image_1l0f3_4",walletEmptyImage:"_wallet-empty-image_1l0f3_4"};var oe=({children:r,className:e,emptyImage:t,emptyText:i})=>j.default.createElement(s.FlexBox,{align:s.ALIGN.center,direction:s.DIRECTION.vertical,className:(0,he.default)(J["wallet-empty"],e)},!!t&&j.default.createElement("img",{src:t,className:J["wallet-empty-image"],alt:"empty"}),!!i&&j.default.createElement(o.Text,{size:o.SIZE.sm,className:J["wallet-empty-text"],style:{color:"#6e6e6e",marginTop:"4px"}},i),r);oe.propTypes={className:G.default.string,children:G.default.node,emptyImage:G.default.string,emptyText:G.default.node};oe.defaultProps={className:"",children:null,emptyImage:"./static/images/search-no-result.svg",emptyText:""};var we=(0,j.memo)(oe);var Oe=20,ke=(0,f.memo)(({search:r,emptyText:e,renderEmpty:t})=>{if(t===!1)return null;if(typeof t=="function")return t(r);let i=typeof e=="function"?e(r):e;return f.default.createElement(we,{emptyText:i})}),le=({space:r,height:e,column:t,loading:i,searchable:l,itemKey:u="key",className:y,direction:_=s.DIRECTION.vertical,dataSource:w=[],renderItem:g,renderEmpty:L,emptyText:E,virtualable:M=!1,...H})=>{let Z=parseFloat(e),Ee=!(w!=null&&w.length),[A,N,Ne]=Te({searchable:l,dataSource:w}),Ce=!N.length,D=(0,f.useMemo)(()=>!!(Z&&M===!0&&(N==null?void 0:N.length)>=Oe),[N,M]),se=(0,f.useMemo)(()=>t&&t>1?s.DIRECTION.horizontal:_,[_,t]),Se=(0,f.useMemo)(()=>D?{itemKey:u,data:N,height:Z,...H}:r||t?{space:r,column:t,wrap:!0,inline:!1,direction:se,...H}:H,[r,t,se,D]),Pe=(0,f.useMemo)(()=>D?(U,V)=>f.default.createElement(X.Item,{style:r?{marginBottom:r}:{}},g(U,A,V)):N.map((U,V)=>{var ne;return f.default.createElement(f.default.Fragment,{key:(ne=U[u])!=null?ne:V},g(U,A,V))}),[r,A,g,N,D]),Q=s.Box;return D?Q=X:(r||t)&&(Q=s.Space),f.default.createElement(s.Spin,{loading:i,className:(0,re.default)(d["wallet-list"],y)},!!l&&!Ee&&f.default.createElement(fe,{offsetTop:l==null?void 0:l.offsetTop,className:(0,re.default)(d["wallet-list-search"],l==null?void 0:l.className)},f.default.createElement(pe.Search,{clearable:!0,...l,value:A,onChange:Ne}),l==null?void 0:l.extra),f.default.createElement(Q,{...Se},Pe),Ce&&f.default.createElement(ke,{search:A,emptyText:E,renderEmpty:L}))};le.propTypes={column:n.default.number,itemKey:n.default.string,className:n.default.string,loading:n.default.oneOfType([n.default.bool,n.default.object]),space:n.default.oneOfType([n.default.string,n.default.number]),searchable:n.default.oneOfType([n.default.bool,n.default.object]),direction:n.default.oneOf([s.DIRECTION.horizontal,s.DIRECTION.vertical]),renderItem:n.default.func,dataSource:n.default.array,emptyText:n.default.oneOfType([n.default.node,n.default.func]),virtualable:n.default.bool,renderEmpty:n.default.oneOfType([n.default.bool,n.default.func])};le.defaultProps={itemKey:"key",dataSource:[],virtualable:!1,direction:s.DIRECTION.vertical};var z=f.default.memo(le);m();a();var b=p(C()),Y=p(O()),Ie=p(k());var ie=({size:r,icon:e,title:t,className:i,children:l,selected:u,...y})=>b.default.createElement(S,{className:(0,Ie.default)(d["wallet-list-card"],{[d["wallet-list-card__selected"]]:u},i),...y},!!e&&b.default.createElement(ae,{size:r,icon:e,label:t,direction:s.DIRECTION.horizontal},l),!e&&l);ie.propTypes={title:Y.default.node,selected:Y.default.bool,icon:Y.default.oneOfType([Y.default.string,Y.default.object])};ie.defaultProps={icon:void 0,selected:!1,title:void 0};var Le=(0,b.memo)(ie);z.Item=S;z.Cell=q;z.Line=ge;z.Coin=ce;z.Card=Le;var Kt=z;export{Kt as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

