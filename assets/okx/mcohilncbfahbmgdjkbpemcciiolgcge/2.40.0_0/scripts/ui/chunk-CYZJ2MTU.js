import{a as T}from"./chunk-TXMRZH72.js";import{e as p,g as b,i as u,ja as g,k as m,oa as k,ua as N}from"./chunk-YC2Z7II3.js";u();m();var a=p(g()),r=p(k());u();m();var t=p(k()),i=p(g()),x=p(N()),O=p(T());var l=class extends i.Component{constructor(){super(...arguments);b(this,"globalClickOccurred",e=>{let{target:s}=e,{parentNode:n}=(0,x.findDOMNode)(this);this.props.isOpen&&s!==n&&!I(this.container,e.target)&&this.props.onClickOutside&&this.props.onClickOutside(e)})}renderPrimary(){let{isOpen:e}=this.props;if(!e)return null;let s=this.props.innerStyle||{};return i.default.createElement("div",{className:"menu-droppo",key:"menu-droppo-drawer",style:s},this.props.children)}componentDidMount(){if(this&&document.body){document.body.addEventListener("click",this.globalClickOccurred);let{parentNode:e}=(0,x.findDOMNode)(this);this.container=e}}componentWillUnmount(){this&&document.body&&document.body.removeEventListener("click",this.globalClickOccurred)}render(){let{containerClassName:e="",style:s}=this.props,n=this.props.speed||"300ms",{useCssTransition:d}=this.props,f="zIndex"in this.props?this.props.zIndex:0,h={position:"fixed",...s,zIndex:f};return i.default.createElement("div",{style:h,className:`menu-droppo-container ${e}`},i.default.createElement("style",null,`
          .menu-droppo-enter {
            transition: transform ${n} ease-in-out;
            transform: translateY(-200%);
          }

          .menu-droppo-enter.menu-droppo-enter-active {
            transition: transform ${n} ease-in-out;
            transform: translateY(0%);
          }

          .menu-droppo-leave {
            transition: transform ${n} ease-in-out;
            transform: translateY(0%);
          }

          .menu-droppo-leave.menu-droppo-leave-active {
            transition: transform ${n} ease-in-out;
            transform: translateY(-200%);
          }
        `),d?i.default.createElement(O.default,{className:"css-transition-group",transitionName:"menu-droppo",transitionEnterTimeout:parseInt(n,10),transitionLeaveTimeout:parseInt(n,10)},this.renderPrimary()):this.renderPrimary())}};b(l,"propTypes",{isOpen:t.default.bool.isRequired,innerStyle:t.default.object,children:t.default.node.isRequired,onClickOutside:t.default.func,containerClassName:t.default.string,zIndex:t.default.number,style:t.default.object.isRequired,useCssTransition:t.default.bool,speed:t.default.string});function I(c,o){let e=o.parentNode;for(;e!==null;){if(e===c)return!0;e=e.parentNode}return!1}var y=class extends a.Component{render(){let{containerClassName:o,isOpen:e,onClickOutside:s,style:n,innerStyle:d,children:f,useCssTransition:h}=this.props,S={borderRadius:"4px",padding:"8px 16px",background:"rgba(0, 0, 0, 0.8)",boxShadow:"rgba(0, 0, 0, 0.15) 0px 2px 2px 2px",...d};return a.default.createElement(l,{containerClassName:o,useCssTransition:h,isOpen:e,zIndex:55,onClickOutside:s,style:n,innerStyle:S},a.default.createElement("style",null,`
            li.dropdown-menu-item:hover {
              color:rgb(225, 225, 225);
              background-color: rgba(255, 255, 255, 0.05);
              border-radius: 4px;
            }
            li.dropdown-menu-item { color: rgb(185, 185, 185); }
          `),f)}};y.defaultProps={useCssTransition:!1};y.propTypes={isOpen:r.default.bool.isRequired,children:r.default.node,style:r.default.object.isRequired,onClickOutside:r.default.func,innerStyle:r.default.object,useCssTransition:r.default.bool,containerClassName:r.default.string};var C=class extends a.Component{render(){let{onClick:o,closeMenu:e,children:s,style:n}=this.props;return a.default.createElement("li",{className:"dropdown-menu-item",onClick:()=>{o(),e()},onKeyPress:d=>{d.key==="Enter"&&(o(),e())},style:{listStyle:"none",padding:"8px 0px",fontSize:"18px",fontStyle:"normal",cursor:"pointer",display:"flex",justifyContent:"flex-start",alignItems:"center",color:"white",...n},tabIndex:"0"},s)}};C.propTypes={closeMenu:r.default.func.isRequired,onClick:r.default.func.isRequired,children:r.default.node,style:r.default.object};export{y as a,C as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

