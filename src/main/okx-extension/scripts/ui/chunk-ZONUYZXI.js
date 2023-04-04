import{d as vr}from"./chunk-ASEXU7Q7.js";import{i as dr}from"./chunk-PFBN4VGD.js";import{a as Pr}from"./chunk-RJTK42A4.js";import{Ba as lr,na as W,y as hr,z as gr}from"./chunk-XBLB7XW3.js";import{Ka as ir,Lc as fr,Rc as ur,ah as sr,c as Lr,e as Z,ga as or,i as S,k as G,la as Nr,ta as $}from"./chunk-5YY3VNR7.js";var xr=Lr((pr,wr)=>{S();G();var _r=function(){var k=function(c,_){var g=236,l=17,e=c,v=P[_],t=null,r=0,h=null,a=[],s={},x=function(o,i){r=e*4+17,t=function(n){for(var u=new Array(n),f=0;f<n;f+=1){u[f]=new Array(n);for(var d=0;d<n;d+=1)u[f][d]=null}return u}(r),A(0,0),A(r-7,0),A(0,r-7),D(),E(),H(o,i),e>=7&&R(o),h==null&&(h=kr(e,v,a)),F(h,i)},A=function(o,i){for(var n=-1;n<=7;n+=1)if(!(o+n<=-1||r<=o+n))for(var u=-1;u<=7;u+=1)i+u<=-1||r<=i+u||(0<=n&&n<=6&&(u==0||u==6)||0<=u&&u<=6&&(n==0||n==6)||2<=n&&n<=4&&2<=u&&u<=4?t[o+n][i+u]=!0:t[o+n][i+u]=!1)},T=function(){for(var o=0,i=0,n=0;n<8;n+=1){x(!0,n);var u=M.getLostPoint(s);(n==0||o>u)&&(o=u,i=n)}return i},E=function(){for(var o=8;o<r-8;o+=1)t[o][6]==null&&(t[o][6]=o%2==0);for(var i=8;i<r-8;i+=1)t[6][i]==null&&(t[6][i]=i%2==0)},D=function(){for(var o=M.getPatternPosition(e),i=0;i<o.length;i+=1)for(var n=0;n<o.length;n+=1){var u=o[i],f=o[n];if(t[u][f]==null)for(var d=-2;d<=2;d+=1)for(var w=-2;w<=2;w+=1)d==-2||d==2||w==-2||w==2||d==0&&w==0?t[u+d][f+w]=!0:t[u+d][f+w]=!1}},R=function(o){for(var i=M.getBCHTypeNumber(e),n=0;n<18;n+=1){var u=!o&&(i>>n&1)==1;t[Math.floor(n/3)][n%3+r-8-3]=u}for(var n=0;n<18;n+=1){var u=!o&&(i>>n&1)==1;t[n%3+r-8-3][Math.floor(n/3)]=u}},H=function(o,i){for(var n=v<<3|i,u=M.getBCHTypeInfo(n),f=0;f<15;f+=1){var d=!o&&(u>>f&1)==1;f<6?t[f][8]=d:f<8?t[f+1][8]=d:t[r-15+f][8]=d}for(var f=0;f<15;f+=1){var d=!o&&(u>>f&1)==1;f<8?t[8][r-f-1]=d:f<9?t[8][15-f-1+1]=d:t[8][15-f-1]=d}t[r-8][8]=!o},F=function(o,i){for(var n=-1,u=r-1,f=7,d=0,w=M.getMaskFunction(i),p=r-1;p>0;p-=2)for(p==6&&(p-=1);;){for(var m=0;m<2;m+=1)if(t[u][p-m]==null){var L=!1;d<o.length&&(L=(o[d]>>>f&1)==1);var C=w(u,p-m);C&&(L=!L),t[u][p-m]=L,f-=1,f==-1&&(d+=1,f=7)}if(u+=n,u<0||r<=u){u-=n,n=-n;break}}},Y=function(o,i){for(var n=0,u=0,f=0,d=new Array(i.length),w=new Array(i.length),p=0;p<i.length;p+=1){var m=i[p].dataCount,L=i[p].totalCount-m;u=Math.max(u,m),f=Math.max(f,L),d[p]=new Array(m);for(var C=0;C<d[p].length;C+=1)d[p][C]=255&o.getBuffer()[C+n];n+=m;var N=M.getErrorCorrectPolynomial(L),J=U(d[p],N.getLength()-1),er=J.mod(N);w[p]=new Array(N.getLength()-1);for(var C=0;C<w[p].length;C+=1){var nr=C+er.getLength()-w[p].length;w[p][C]=nr>=0?er.getAt(nr):0}}for(var ar=0,C=0;C<i.length;C+=1)ar+=i[C].totalCount;for(var q=new Array(ar),j=0,C=0;C<u;C+=1)for(var p=0;p<i.length;p+=1)C<d[p].length&&(q[j]=d[p][C],j+=1);for(var C=0;C<f;C+=1)for(var p=0;p<i.length;p+=1)C<w[p].length&&(q[j]=w[p][C],j+=1);return q},kr=function(o,i,n){for(var u=Q.getRSBlocks(o,i),f=K(),d=0;d<n.length;d+=1){var w=n[d];f.put(w.getMode(),4),f.put(w.getLength(),M.getLengthInBits(w.getMode(),o)),w.write(f)}for(var p=0,d=0;d<u.length;d+=1)p+=u[d].dataCount;if(f.getLengthInBits()>p*8)throw"code length overflow. ("+f.getLengthInBits()+">"+p*8+")";for(f.getLengthInBits()+4<=p*8&&f.put(0,4);f.getLengthInBits()%8!=0;)f.putBit(!1);for(;!(f.getLengthInBits()>=p*8||(f.put(g,8),f.getLengthInBits()>=p*8));)f.put(l,8);return Y(f,u)};s.addData=function(o,i){i=i||"Byte";var n=null;switch(i){case"Numeric":n=rr(o);break;case"Alphanumeric":n=V(o);break;case"Byte":n=Cr(o);break;case"Kanji":n=Tr(o);break;default:throw"mode:"+i}a.push(n),h=null},s.isDark=function(o,i){if(o<0||r<=o||i<0||r<=i)throw o+","+i;return t[o][i]},s.getModuleCount=function(){return r},s.make=function(){if(e<1){for(var o=1;o<40;o++){for(var i=Q.getRSBlocks(o,v),n=K(),u=0;u<a.length;u++){var f=a[u];n.put(f.getMode(),4),n.put(f.getLength(),M.getLengthInBits(f.getMode(),o)),f.write(n)}for(var d=0,u=0;u<i.length;u++)d+=i[u].dataCount;if(n.getLengthInBits()<=d*8)break}e=o}x(!1,T())},s.createTableTag=function(o,i){o=o||2,i=typeof i>"u"?o*4:i;var n="";n+='<table style="',n+=" border-width: 0px; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0px; margin: "+i+"px;",n+='">',n+="<tbody>";for(var u=0;u<s.getModuleCount();u+=1){n+="<tr>";for(var f=0;f<s.getModuleCount();f+=1)n+='<td style="',n+=" border-width: 0px; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0px; margin: 0px;",n+=" width: "+o+"px;",n+=" height: "+o+"px;",n+=" background-color: ",n+=s.isDark(u,f)?"#000000":"#ffffff",n+=";",n+='"/>';n+="</tr>"}return n+="</tbody>",n+="</table>",n},s.createSvgTag=function(o,i){o=o||2,i=typeof i>"u"?o*4:i;var n=s.getModuleCount()*o+i*2,u,f,d,w,p="",m;for(m="l"+o+",0 0,"+o+" -"+o+",0 0,-"+o+"z ",p+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',p+=' width="'+n+'px"',p+=' height="'+n+'px"',p+=' viewBox="0 0 '+n+" "+n+'" ',p+=' preserveAspectRatio="xMinYMin meet">',p+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',p+='<path d="',d=0;d<s.getModuleCount();d+=1)for(w=d*o+i,u=0;u<s.getModuleCount();u+=1)s.isDark(d,u)&&(f=u*o+i,p+="M"+f+","+w+m);return p+='" stroke="transparent" fill="black"/>',p+="</svg>",p},s.createDataURL=function(o,i){o=o||2,i=typeof i>"u"?o*4:i;var n=s.getModuleCount()*o+i*2,u=i,f=n-i;return Er(n,n,function(d,w){if(u<=d&&d<f&&u<=w&&w<f){var p=Math.floor((d-u)/o),m=Math.floor((w-u)/o);return s.isDark(m,p)?0:1}else return 1})},s.createImgTag=function(o,i,n){o=o||2,i=typeof i>"u"?o*4:i;var u=s.getModuleCount()*o+i*2,f="";return f+="<img",f+=' src="',f+=s.createDataURL(o,i),f+='"',f+=' width="',f+=u,f+='"',f+=' height="',f+=u,f+='"',n&&(f+=' alt="',f+=n,f+='"'),f+="/>",f};var Dr=function(o){var i=1;o=typeof o>"u"?i*2:o;var n=s.getModuleCount()*i+o*2,u=o,f=n-o,d,w,p,m,L,C={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},N="";for(d=0;d<n;d+=2){for(p=Math.floor((d-u)/i),m=Math.floor((d+1-u)/i),w=0;w<n;w+=1)L="\u2588",u<=w&&w<f&&u<=d&&d<f&&s.isDark(p,Math.floor((w-u)/i))&&(L=" "),u<=w&&w<f&&u<=d+1&&d+1<f&&s.isDark(m,Math.floor((w-u)/i))?L+=" ":L+="\u2588",N+=C[L];N+=`
`}return n%2?N.substring(0,N.length-n-1)+Array(n+1).join("\u2580"):N.substring(0,N.length-1)};return s.createASCII=function(o,i){if(o=o||1,o<2)return Dr(i);o-=1,i=typeof i>"u"?o*2:i;var n=s.getModuleCount()*o+i*2,u=i,f=n-i,d,w,p,m,L=Array(o+1).join("\u2588\u2588"),C=Array(o+1).join("  "),N="",J="";for(d=0;d<n;d+=1){for(p=Math.floor((d-u)/o),J="",w=0;w<n;w+=1)m=1,u<=w&&w<f&&u<=d&&d<f&&s.isDark(p,Math.floor((w-u)/o))&&(m=0),J+=m?L:C;for(p=0;p<o;p+=1)N+=J+`
`}return N.substring(0,N.length-1)},s.renderTo2dContext=function(o,i){i=i||2;for(var n=s.getModuleCount(),u=0;u<n;u++)for(var f=0;f<n;f++)o.fillStyle=s.isDark(u,f)?"black":"white",o.fillRect(u*i,f*i,i,i)},s};k.stringToBytesFuncs={default:function(c){for(var _=[],g=0;g<c.length;g+=1){var l=c.charCodeAt(g);_.push(l&255)}return _}},k.stringToBytes=k.stringToBytesFuncs.default,k.createStringToBytes=function(c,_){var g=function(){for(var e=mr(c),v=function(){var E=e.read();if(E==-1)throw"eof";return E},t=0,r={};;){var h=e.read();if(h==-1)break;var a=v(),s=v(),x=v(),A=String.fromCharCode(h<<8|a),T=s<<8|x;r[A]=T,t+=1}if(t!=_)throw t+" != "+_;return r}(),l="?".charCodeAt(0);return function(e){for(var v=[],t=0;t<e.length;t+=1){var r=e.charCodeAt(t);if(r<128)v.push(r);else{var h=g[e.charAt(t)];typeof h=="number"?(h&255)==h?v.push(h):(v.push(h>>>8),v.push(h&255)):v.push(l)}}return v}};var B={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3},P={L:1,M:0,Q:3,H:2},b={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},M=function(){var c=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],_=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,g=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,l=1<<14|1<<12|1<<10|1<<4|1<<1,e={},v=function(t){for(var r=0;t!=0;)r+=1,t>>>=1;return r};return e.getBCHTypeInfo=function(t){for(var r=t<<10;v(r)-v(_)>=0;)r^=_<<v(r)-v(_);return(t<<10|r)^l},e.getBCHTypeNumber=function(t){for(var r=t<<12;v(r)-v(g)>=0;)r^=g<<v(r)-v(g);return t<<12|r},e.getPatternPosition=function(t){return c[t-1]},e.getMaskFunction=function(t){switch(t){case b.PATTERN000:return function(r,h){return(r+h)%2==0};case b.PATTERN001:return function(r,h){return r%2==0};case b.PATTERN010:return function(r,h){return h%3==0};case b.PATTERN011:return function(r,h){return(r+h)%3==0};case b.PATTERN100:return function(r,h){return(Math.floor(r/2)+Math.floor(h/3))%2==0};case b.PATTERN101:return function(r,h){return r*h%2+r*h%3==0};case b.PATTERN110:return function(r,h){return(r*h%2+r*h%3)%2==0};case b.PATTERN111:return function(r,h){return(r*h%3+(r+h)%2)%2==0};default:throw"bad maskPattern:"+t}},e.getErrorCorrectPolynomial=function(t){for(var r=U([1],0),h=0;h<t;h+=1)r=r.multiply(U([1,y.gexp(h)],0));return r},e.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case B.MODE_NUMBER:return 10;case B.MODE_ALPHA_NUM:return 9;case B.MODE_8BIT_BYTE:return 8;case B.MODE_KANJI:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case B.MODE_NUMBER:return 12;case B.MODE_ALPHA_NUM:return 11;case B.MODE_8BIT_BYTE:return 16;case B.MODE_KANJI:return 10;default:throw"mode:"+t}else if(r<41)switch(t){case B.MODE_NUMBER:return 14;case B.MODE_ALPHA_NUM:return 13;case B.MODE_8BIT_BYTE:return 16;case B.MODE_KANJI:return 12;default:throw"mode:"+t}else throw"type:"+r},e.getLostPoint=function(t){for(var r=t.getModuleCount(),h=0,a=0;a<r;a+=1)for(var s=0;s<r;s+=1){for(var x=0,A=t.isDark(a,s),T=-1;T<=1;T+=1)if(!(a+T<0||r<=a+T))for(var E=-1;E<=1;E+=1)s+E<0||r<=s+E||T==0&&E==0||A==t.isDark(a+T,s+E)&&(x+=1);x>5&&(h+=3+x-5)}for(var a=0;a<r-1;a+=1)for(var s=0;s<r-1;s+=1){var D=0;t.isDark(a,s)&&(D+=1),t.isDark(a+1,s)&&(D+=1),t.isDark(a,s+1)&&(D+=1),t.isDark(a+1,s+1)&&(D+=1),(D==0||D==4)&&(h+=3)}for(var a=0;a<r;a+=1)for(var s=0;s<r-6;s+=1)t.isDark(a,s)&&!t.isDark(a,s+1)&&t.isDark(a,s+2)&&t.isDark(a,s+3)&&t.isDark(a,s+4)&&!t.isDark(a,s+5)&&t.isDark(a,s+6)&&(h+=40);for(var s=0;s<r;s+=1)for(var a=0;a<r-6;a+=1)t.isDark(a,s)&&!t.isDark(a+1,s)&&t.isDark(a+2,s)&&t.isDark(a+3,s)&&t.isDark(a+4,s)&&!t.isDark(a+5,s)&&t.isDark(a+6,s)&&(h+=40);for(var R=0,s=0;s<r;s+=1)for(var a=0;a<r;a+=1)t.isDark(a,s)&&(R+=1);var H=Math.abs(100*R/r/r-50)/5;return h+=H*10,h},e}(),y=function(){for(var c=new Array(256),_=new Array(256),g=0;g<8;g+=1)c[g]=1<<g;for(var g=8;g<256;g+=1)c[g]=c[g-4]^c[g-5]^c[g-6]^c[g-8];for(var g=0;g<255;g+=1)_[c[g]]=g;var l={};return l.glog=function(e){if(e<1)throw"glog("+e+")";return _[e]},l.gexp=function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return c[e]},l}();function U(c,_){if(typeof c.length>"u")throw c.length+"/"+_;var g=function(){for(var e=0;e<c.length&&c[e]==0;)e+=1;for(var v=new Array(c.length-e+_),t=0;t<c.length-e;t+=1)v[t]=c[t+e];return v}(),l={};return l.getAt=function(e){return g[e]},l.getLength=function(){return g.length},l.multiply=function(e){for(var v=new Array(l.getLength()+e.getLength()-1),t=0;t<l.getLength();t+=1)for(var r=0;r<e.getLength();r+=1)v[t+r]^=y.gexp(y.glog(l.getAt(t))+y.glog(e.getAt(r)));return U(v,0)},l.mod=function(e){if(l.getLength()-e.getLength()<0)return l;for(var v=y.glog(l.getAt(0))-y.glog(e.getAt(0)),t=new Array(l.getLength()),r=0;r<l.getLength();r+=1)t[r]=l.getAt(r);for(var r=0;r<e.getLength();r+=1)t[r]^=y.gexp(y.glog(e.getAt(r))+v);return U(t,0).mod(e)},l}var Q=function(){var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],_=function(e,v){var t={};return t.totalCount=e,t.dataCount=v,t},g={},l=function(e,v){switch(v){case P.L:return c[(e-1)*4+0];case P.M:return c[(e-1)*4+1];case P.Q:return c[(e-1)*4+2];case P.H:return c[(e-1)*4+3];default:return}};return g.getRSBlocks=function(e,v){var t=l(e,v);if(typeof t>"u")throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+v;for(var r=t.length/3,h=[],a=0;a<r;a+=1)for(var s=t[a*3+0],x=t[a*3+1],A=t[a*3+2],T=0;T<s;T+=1)h.push(_(x,A));return h},g}(),K=function(){var c=[],_=0,g={};return g.getBuffer=function(){return c},g.getAt=function(l){var e=Math.floor(l/8);return(c[e]>>>7-l%8&1)==1},g.put=function(l,e){for(var v=0;v<e;v+=1)g.putBit((l>>>e-v-1&1)==1)},g.getLengthInBits=function(){return _},g.putBit=function(l){var e=Math.floor(_/8);c.length<=e&&c.push(0),l&&(c[e]|=128>>>_%8),_+=1},g},rr=function(c){var _=B.MODE_NUMBER,g=c,l={};l.getMode=function(){return _},l.getLength=function(t){return g.length},l.write=function(t){for(var r=g,h=0;h+2<r.length;)t.put(e(r.substring(h,h+3)),10),h+=3;h<r.length&&(r.length-h==1?t.put(e(r.substring(h,h+1)),4):r.length-h==2&&t.put(e(r.substring(h,h+2)),7))};var e=function(t){for(var r=0,h=0;h<t.length;h+=1)r=r*10+v(t.charAt(h));return r},v=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return l},V=function(c){var _=B.MODE_ALPHA_NUM,g=c,l={};l.getMode=function(){return _},l.getLength=function(v){return g.length},l.write=function(v){for(var t=g,r=0;r+1<t.length;)v.put(e(t.charAt(r))*45+e(t.charAt(r+1)),11),r+=2;r<t.length&&v.put(e(t.charAt(r)),6)};var e=function(v){if("0"<=v&&v<="9")return v.charCodeAt(0)-"0".charCodeAt(0);if("A"<=v&&v<="Z")return v.charCodeAt(0)-"A".charCodeAt(0)+10;switch(v){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+v}};return l},Cr=function(c){var _=B.MODE_8BIT_BYTE,g=c,l=k.stringToBytes(c),e={};return e.getMode=function(){return _},e.getLength=function(v){return l.length},e.write=function(v){for(var t=0;t<l.length;t+=1)v.put(l[t],8)},e},Tr=function(c){var _=B.MODE_KANJI,g=c,l=k.stringToBytesFuncs.SJIS;if(!l)throw"sjis not supported.";(function(t,r){var h=l(t);if(h.length!=2||(h[0]<<8|h[1])!=r)throw"sjis not supported."})("\u53CB",38726);var e=l(c),v={};return v.getMode=function(){return _},v.getLength=function(t){return~~(e.length/2)},v.write=function(t){for(var r=e,h=0;h+1<r.length;){var a=(255&r[h])<<8|255&r[h+1];if(33088<=a&&a<=40956)a-=33088;else if(57408<=a&&a<=60351)a-=49472;else throw"illegal char at "+(h+1)+"/"+a;a=(a>>>8&255)*192+(a&255),t.put(a,13),h+=2}if(h<r.length)throw"illegal char at "+(h+1)},v},tr=function(){var c=[],_={};return _.writeByte=function(g){c.push(g&255)},_.writeShort=function(g){_.writeByte(g),_.writeByte(g>>>8)},_.writeBytes=function(g,l,e){l=l||0,e=e||g.length;for(var v=0;v<e;v+=1)_.writeByte(g[v+l])},_.writeString=function(g){for(var l=0;l<g.length;l+=1)_.writeByte(g.charCodeAt(l))},_.toByteArray=function(){return c},_.toString=function(){var g="";g+="[";for(var l=0;l<c.length;l+=1)l>0&&(g+=","),g+=c[l];return g+="]",g},_},Mr=function(){var c=0,_=0,g=0,l="",e={},v=function(r){l+=String.fromCharCode(t(r&63))},t=function(r){if(!(r<0)){if(r<26)return 65+r;if(r<52)return 97+(r-26);if(r<62)return 48+(r-52);if(r==62)return 43;if(r==63)return 47}throw"n:"+r};return e.writeByte=function(r){for(c=c<<8|r&255,_+=8,g+=1;_>=6;)v(c>>>_-6),_-=6},e.flush=function(){if(_>0&&(v(c<<6-_),c=0,_=0),g%3!=0)for(var r=3-g%3,h=0;h<r;h+=1)l+="="},e.toString=function(){return l},e},mr=function(c){var _=c,g=0,l=0,e=0,v={};v.read=function(){for(;e<8;){if(g>=_.length){if(e==0)return-1;throw"unexpected end of file./"+e}var r=_.charAt(g);if(g+=1,r=="=")return e=0,-1;if(r.match(/^\s$/))continue;l=l<<6|t(r.charCodeAt(0)),e+=6}var h=l>>>e-8&255;return e-=8,h};var t=function(r){if(65<=r&&r<=90)return r-65;if(97<=r&&r<=122)return r-97+26;if(48<=r&&r<=57)return r-48+52;if(r==43)return 62;if(r==47)return 63;throw"c:"+r};return v},br=function(c,_){var g=c,l=_,e=new Array(c*_),v={};v.setPixel=function(a,s,x){e[s*g+a]=x},v.write=function(a){a.writeString("GIF87a"),a.writeShort(g),a.writeShort(l),a.writeByte(128),a.writeByte(0),a.writeByte(0),a.writeByte(0),a.writeByte(0),a.writeByte(0),a.writeByte(255),a.writeByte(255),a.writeByte(255),a.writeString(","),a.writeShort(0),a.writeShort(0),a.writeShort(g),a.writeShort(l),a.writeByte(0);var s=2,x=r(s);a.writeByte(s);for(var A=0;x.length-A>255;)a.writeByte(255),a.writeBytes(x,A,255),A+=255;a.writeByte(x.length-A),a.writeBytes(x,A,x.length-A),a.writeByte(0),a.writeString(";")};var t=function(a){var s=a,x=0,A=0,T={};return T.write=function(E,D){if(E>>>D!=0)throw"length over";for(;x+D>=8;)s.writeByte(255&(E<<x|A)),D-=8-x,E>>>=8-x,A=0,x=0;A=E<<x|A,x=x+D},T.flush=function(){x>0&&s.writeByte(A)},T},r=function(a){for(var s=1<<a,x=(1<<a)+1,A=a+1,T=h(),E=0;E<s;E+=1)T.add(String.fromCharCode(E));T.add(String.fromCharCode(s)),T.add(String.fromCharCode(x));var D=tr(),R=t(D);R.write(s,A);var H=0,F=String.fromCharCode(e[H]);for(H+=1;H<e.length;){var Y=String.fromCharCode(e[H]);H+=1,T.contains(F+Y)?F=F+Y:(R.write(T.indexOf(F),A),T.size()<4095&&(T.size()==1<<A&&(A+=1),T.add(F+Y)),F=Y)}return R.write(T.indexOf(F),A),R.write(x,A),R.flush(),D.toByteArray()},h=function(){var a={},s=0,x={};return x.add=function(A){if(x.contains(A))throw"dup key:"+A;a[A]=s,s+=1},x.size=function(){return s},x.indexOf=function(A){return a[A]},x.contains=function(A){return typeof a[A]<"u"},x};return v},Er=function(c,_,g){for(var l=br(c,_),e=0;e<_;e+=1)for(var v=0;v<c;v+=1)l.setPixel(v,e,g(v,e));var t=tr();l.write(t);for(var r=Mr(),h=t.toByteArray(),a=0;a<h.length;a+=1)r.writeByte(h[a]);return r.flush(),"data:image/gif;base64,"+r};return k}();(function(){_r.stringToBytesFuncs["UTF-8"]=function(k){function B(P){for(var b=[],M=0;M<P.length;M++){var y=P.charCodeAt(M);y<128?b.push(y):y<2048?b.push(192|y>>6,128|y&63):y<55296||y>=57344?b.push(224|y>>12,128|y>>6&63,128|y&63):(M++,y=65536+((y&1023)<<10|P.charCodeAt(M)&1023),b.push(240|y>>18,128|y>>12&63,128|y>>6&63,128|y&63))}return b}return B(k)}})();(function(k){typeof define=="function"&&define.amd?define([],k):typeof pr=="object"&&(wr.exports=k())})(function(){return _r})});S();G();var X=Z(or());S();G();var I=Z(or()),O=Z(Nr()),Ar=Z(Pr()),yr=Z(xr());var Ir=k=>{let B=(0,yr.default)(0,"M");return B.addData(k),B.make(),B.createDataURL(6,10)},z=({className:k,navigatorProps:B,tip:P,qrCodeAddress:b,walletAddress:M})=>{let y=W(),[U,Q]=hr(),K=()=>{U||(Q(M),ir.success({title:y("wallet_receive_toast_address_copied"),desc:I.default.createElement("div",{className:"receive-skeleton__copy-message"},M)}))},V=(0,Ar.default)("receive-skeleton",k);return I.default.createElement("div",{className:V},I.default.createElement(dr,{title:B.title,icon:B.iconUrl,tag:B.tag,onClose:B.onClose,onBack:B.onBack}),P&&I.default.createElement("div",{className:"receive-skeleton__content__tip"},P),I.default.createElement("div",{className:"receive-skeleton__content"},I.default.createElement("div",{className:"receive-skeleton__content__qrcode-wrapper",onClick:K},b&&I.default.createElement("img",{address:b,src:Ir(b),className:"receive-skeleton__content__qrcode"})),I.default.createElement("div",{className:"receive-skeleton__content__address",onClick:K},M)),I.default.createElement("div",{className:"receive-skeleton__footer"},I.default.createElement($,{category:$.CATEGORY.fill,type:$.TYPE.highlight,size:$.SIZE.lg,block:!0,onClick:K},y("wallet_receive_btn_copy_address"))))};z.propTypes={className:O.default.string,navigatorProps:O.default.shape({title:O.default.string,iconUrl:O.default.string,tag:O.default.string,onClose:O.default.func}),tip:O.default.string,qrCodeAddress:O.default.string,walletAddress:O.default.string};z.defaultProps={className:"",navigatorProps:{title:"",iconUrl:"",tag:"",onClose:void 0},tip:"",qrCodeAddress:"",walletAddress:""};var Br=(0,I.memo)(z);var Rr=()=>{let k=W(),B=ur(),b=gr().get("showClose"),M=fr(vr),y=lr(),U=`ethereum:${y}`,Q=b?()=>{B.push(sr)}:null;return X.default.createElement(Br,{navigatorProps:{title:k("developer_mode_home_btn_receive"),onClose:Q},tip:k("wallet_extension_toast_send_only_network_assets_tothis_address",{chain_name:M==null?void 0:M.name}),qrCodeAddress:U,walletAddress:y})},Xr=(0,X.memo)(Rr);export{Xr as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

