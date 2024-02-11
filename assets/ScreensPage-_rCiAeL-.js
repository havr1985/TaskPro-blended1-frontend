import{u as v,r as E,j as o,q as on,t as nt,R as b,v as gt,a as Le,w as Aa,b as bt,x as Pa,y as La,z as Ia,A as Wa,D as Fa,E as ln,i as $a,F as Ra,p as Va,G as Ya,H as za}from"./index-hgyixuUG.js";import{i as q}from"./icons-iplVKqot.js";import{g as Ba,w as qa,h as s,i as yt,u as Ae,S as xt,p as Ga,s as ir,a as cn,M as sn,F as dn,E as un,d as fn,P as hn,O as Ir,e as Ha}from"./HomePage.styled-WzzCmt5L.js";import{b as lr,E as vn,c as wt,a as ge,d as pn,F as Dt}from"./index.esm-97OYfr8K.js";const Ua=v.div`
  position: absolute;
  top: 60px;
  right: 24px;
  height: auto;
  padding: 24px;
  border: 1px solid var(--shared-input-border-color);
  box-shadow: 0px 4px 16px var(--color-shadow);
  border-radius: 8px;
  background-color: var(--primary-background-color);
  z-index: 1000;
  ;
  `,Za=v.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 999; 
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1)
`,Ve=v.span`
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: transparent;

  &.blue {
    background-color: var(--radio-label-background-color); 
  }

  &.pink {
    background-color: var(--radio-label-pink-color); 
  }

  &.green {
    background-color: var(--radio-label-green-color); 
  }

  &.gray {
    background-color: var(--radio-label-grey-color); 
  }
`,at=v.p`
  color: var(--radio-label-grey-color);
  font-size: 12px;

 

  &:checked.blue {
    color: var(--modal-filters-text);
    font-weight:500;
  }

  &:checked.pink {
      color: var(--modal-filters-text);
    font-weight:500;
  }

  &:checked.green {
     color: var(--modal-filters-text);
    font-weight:500;
  }

  &:checked.gray {
       color: var(--radio-label-grey-color);
    font-weight:500;
  }
`,Ka=v.div`
  display: flex;
  flex-direction:column;
  align-items: start;
  gap: 8px;
  margin-top: 16px;
 
`,ot=v.div`
  display: flex;
  width: 130px;
  gap: 8px;
`,it=v.label`
  position: relative;
  display: flex;
  flex-direction:row;
  gap: 8px;
  height: 18px;
  margin: 0;

   input[type="radio"]:checked + ${Ve} {
    scale: 0.5;
  };  
`,lt=v.input`
  position: absolute;
  appearance: none;
  z-index: 5;
  top: 0;
  left: 0;
  border-radius: 50%;
  margin: 0;
  width: 14px;
  height: 14px;
  cursor: pointer;

  &:checked.blue {
    border: 1px solid var(--radio-label-background-color); 
  }

  &:checked.pink {
    border: 1px solid var(--radio-label-pink-color); 
  }

  &:checked.green {
    border: 1px solid var(--radio-label-green-color); 
  }

  &:checked.gray {
    border: 1px solid var(--radio-label-grey-color); 
  }
`,Ja=v.p`
font-weight: 500;
color: var(--modal-board-text)
`,Xa=v.button`
background-color: transparent;
color: var(--screens-page-tutorial-text-color);
font-size:12px;
text-decoration: underline;
border: none;
`,Qa=v.div`
display: flex; justify-content: space-between;
`,eo=v.div`
width: 252px; 
height: 1px; 
background-color: var(--modal-filter-form-line);
margin-bottom: 14px;
`,to=v.h2`
  color: var(--modal-title-color);
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: -2%;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-bottom: 14px;
`,ro=({isOpen:e,onClose:t,onShowAll:n})=>{const[r,a]=E.useState(null);if(!e)return null;const i=()=>{a(null),t(),n()},l=c=>{const d=c.target.value;a(d)};return o.jsx(Za,{children:o.jsxs(Ua,{children:[o.jsx(Ba,{onClick:t,children:"✕"}),o.jsx(to,{children:"Filters"}),o.jsx(eo,{}),o.jsxs(Qa,{children:[o.jsx(Ja,{children:"Label color"}),o.jsx(Xa,{onClick:i,children:"Show all"})]}),o.jsxs(Ka,{children:[o.jsx(ot,{children:o.jsxs(it,{children:[o.jsx(lt,{type:"radio",name:"radio",value:"gray",className:"gray",checked:r==="gray",onChange:l}),o.jsx(Ve,{className:"gray"}),o.jsx(at,{className:"gray",children:" Without priority "})]})}),o.jsx(ot,{children:o.jsxs(it,{children:[o.jsx(lt,{type:"radio",name:"radio",value:"blue",className:"blue",checked:r==="blue",onChange:l}),o.jsx(Ve,{className:"blue"}),o.jsx(at,{children:" Low "})]})}),o.jsx(ot,{children:o.jsxs(it,{children:[o.jsx(lt,{type:"radio",name:"radio",value:"pink",className:"pink",checked:r==="pink",onChange:l}),o.jsx(Ve,{className:"pink"}),o.jsx(at,{children:" Medium "})]})}),o.jsx(ot,{children:o.jsxs(it,{children:[o.jsx(lt,{type:"radio",name:"radio",value:"green",className:"green",checked:r==="green",onChange:l}),o.jsx(Ve,{className:"green"}),o.jsx(at,{children:" Hight "})]})})]})]})})},no=v.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 64px;
  height: 20px;
  padding: 0;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--filter-text-and-icon-color);
  border: none;
  background-color: transparent;
  cursor: pointer;
`,ao=v.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 1.5px;
  stroke: var(--filter-text-and-icon-color);
`,oo=()=>{const[e,t]=E.useState(!1);function n(){}const r=()=>{t(a=>!a)};return o.jsxs(o.Fragment,{children:[o.jsxs(no,{onClick:()=>r(),children:[o.jsx(ao,{children:o.jsx("use",{href:q+"#icon-filter"})}),"Filters"]}),o.jsx(ro,{isOpen:e,onClose:r,onShowAll:n})]})},io=v.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 26px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 14px;
  }
`,lo=v.h2`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--card-title-color);
`,co=({boardName:e})=>o.jsxs(io,{children:[o.jsx(lo,{children:e}),o.jsx(oo,{})]});var so="Expected a function",mn="__lodash_hash_undefined__",uo="[object Function]",fo="[object GeneratorFunction]",ho=/[\\^$.*+?()[\]{}|]/g,vo=/^\[object .+?Constructor\]$/,po=typeof nt=="object"&&nt&&nt.Object===Object&&nt,mo=typeof self=="object"&&self&&self.Object===Object&&self,gn=po||mo||Function("return this")();function go(e,t){return e==null?void 0:e[t]}function bo(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}var yo=Array.prototype,xo=Function.prototype,bn=Object.prototype,Yt=gn["__core-js_shared__"],Wr=function(){var e=/[^.]+$/.exec(Yt&&Yt.keys&&Yt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),yn=xo.toString,cr=bn.hasOwnProperty,wo=bn.toString,Do=RegExp("^"+yn.call(cr).replace(ho,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_o=yo.splice,ko=xn(gn,"Map"),ze=xn(Object,"create");function _e(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Oo(){this.__data__=ze?ze(null):{}}function jo(e){return this.has(e)&&delete this.__data__[e]}function Co(e){var t=this.__data__;if(ze){var n=t[e];return n===mn?void 0:n}return cr.call(t,e)?t[e]:void 0}function So(e){var t=this.__data__;return ze?t[e]!==void 0:cr.call(t,e)}function To(e,t){var n=this.__data__;return n[e]=ze&&t===void 0?mn:t,this}_e.prototype.clear=Oo;_e.prototype.delete=jo;_e.prototype.get=Co;_e.prototype.has=So;_e.prototype.set=To;function Ie(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Eo(){this.__data__=[]}function No(e){var t=this.__data__,n=_t(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():_o.call(t,n,1),!0}function Mo(e){var t=this.__data__,n=_t(t,e);return n<0?void 0:t[n][1]}function Ao(e){return _t(this.__data__,e)>-1}function Po(e,t){var n=this.__data__,r=_t(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}Ie.prototype.clear=Eo;Ie.prototype.delete=No;Ie.prototype.get=Mo;Ie.prototype.has=Ao;Ie.prototype.set=Po;function ke(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Lo(){this.__data__={hash:new _e,map:new(ko||Ie),string:new _e}}function Io(e){return kt(this,e).delete(e)}function Wo(e){return kt(this,e).get(e)}function Fo(e){return kt(this,e).has(e)}function $o(e,t){return kt(this,e).set(e,t),this}ke.prototype.clear=Lo;ke.prototype.delete=Io;ke.prototype.get=Wo;ke.prototype.has=Fo;ke.prototype.set=$o;function _t(e,t){for(var n=e.length;n--;)if(Bo(e[n][0],t))return n;return-1}function Ro(e){if(!wn(e)||Yo(e))return!1;var t=qo(e)||bo(e)?Do:vo;return t.test(zo(e))}function kt(e,t){var n=e.__data__;return Vo(t)?n[typeof t=="string"?"string":"hash"]:n.map}function xn(e,t){var n=go(e,t);return Ro(n)?n:void 0}function Vo(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Yo(e){return!!Wr&&Wr in e}function zo(e){if(e!=null){try{return yn.call(e)}catch{}try{return e+""}catch{}}return""}function sr(e,t){if(typeof e!="function"||t&&typeof t!="function")throw new TypeError(so);var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var l=e.apply(this,r);return n.cache=i.set(a,l),l};return n.cache=new(sr.Cache||ke),n}sr.Cache=ke;function Bo(e,t){return e===t||e!==e&&t!==t}function qo(e){var t=wn(e)?wo.call(e):"";return t==uo||t==fo}function wn(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}var Go=sr;const Dn=on(Go);function _n(e){return JSON.stringify(e)}function Ho(e){return typeof e=="string"}function Uo(e,t,n){return n.indexOf(e)===t}function Zo(e){return e.toLowerCase()===e}function Fr(e){return e.indexOf(",")===-1?e:e.split(",")}function Ut(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var t=e.split(".")[0],n=t===void 0?"":t;return Ut(n)}if(e.indexOf("@")!==-1){var r=e.split("@")[0],n=r===void 0?"":r;return Ut(n)}if(e.indexOf("-")===-1||!Zo(e))return e;var a=e.split("-"),i=a[0],l=a[1],c=l===void 0?"":l;return"".concat(i,"-").concat(c.toUpperCase())}function Ko(e){var t=e===void 0?{}:e,n=t.useFallbackLocale,r=n===void 0?!0:n,a=t.fallbackLocale,i=a===void 0?"en-US":a,l=[];if(typeof navigator<"u"){for(var c=navigator.languages||[],d=[],u=0,p=c;u<p.length;u++){var y=p[u];d=d.concat(Fr(y))}var g=navigator.language,f=g&&Fr(g);l=l.concat(d,f)}return r&&l.push(i),l.filter(Ho).map(Ut).filter(Uo)}var Jo=Dn(Ko,_n);function Xo(e){return Jo(e)[0]||null}var kn=Dn(Xo,_n);function fe(e,t,n){return function(a,i){i===void 0&&(i=n);var l=e(a)+i;return t(l)}}function Ze(e){return function(n){return new Date(e(n).getTime()-1)}}function Ke(e,t){return function(r){return[e(r),t(r)]}}function M(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;var t=parseInt(e,10);if(typeof e=="string"&&!isNaN(t))return t;throw new Error("Failed to get year from date: ".concat(e,"."))}function be(e){if(e instanceof Date)return e.getMonth();throw new Error("Failed to get month from date: ".concat(e,"."))}function Ot(e){if(e instanceof Date)return e.getDate();throw new Error("Failed to get year from date: ".concat(e,"."))}function We(e){var t=M(e),n=t+(-t+1)%100,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}var Qo=fe(M,We,-100),On=fe(M,We,100),dr=Ze(On),ei=fe(M,dr,-100),jn=Ke(We,dr);function ye(e){var t=M(e),n=t+(-t+1)%10,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}var Cn=fe(M,ye,-10),ur=fe(M,ye,10),jt=Ze(ur),Sn=fe(M,jt,-10),Tn=Ke(ye,jt);function Fe(e){var t=M(e),n=new Date;return n.setFullYear(t,0,1),n.setHours(0,0,0,0),n}var En=fe(M,Fe,-1),fr=fe(M,Fe,1),Ct=Ze(fr),Nn=fe(M,Ct,-1),ti=Ke(Fe,Ct);function hr(e,t){return function(r,a){a===void 0&&(a=t);var i=M(r),l=be(r)+a,c=new Date;return c.setFullYear(i,l,1),c.setHours(0,0,0,0),e(c)}}function Oe(e){var t=M(e),n=be(e),r=new Date;return r.setFullYear(t,n,1),r.setHours(0,0,0,0),r}var Mn=hr(Oe,-1),vr=hr(Oe,1),Je=Ze(vr),An=hr(Je,-1),ri=Ke(Oe,Je);function ni(e,t){return function(r,a){a===void 0&&(a=t);var i=M(r),l=be(r),c=Ot(r)+a,d=new Date;return d.setFullYear(i,l,c),d.setHours(0,0,0,0),e(d)}}function Xe(e){var t=M(e),n=be(e),r=Ot(e),a=new Date;return a.setFullYear(t,n,r),a.setHours(0,0,0,0),a}var ai=ni(Xe,1),pr=Ze(ai),oi=Ke(Xe,pr);function Pn(e){return Ot(Je(e))}var Re,N={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},Te={ARABIC:"Arabic",HEBREW:"Hebrew",ISO_8601:"ISO 8601",US:"US"},ii=(Re={},Re[N.GREGORY]=["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],Re[N.HEBREW]=["he","he-IL"],Re[N.ISLAMIC]=["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"],Re),mr=[0,1,2,3,4,5,6],zt=new Map;function li(e){return function(n,r){var a=n||kn();zt.has(a)||zt.set(a,new Map);var i=zt.get(a);return i.has(e)||i.set(e,new Intl.DateTimeFormat(a||void 0,e).format),i.get(e)(r)}}function ci(e){var t=new Date(e);return new Date(t.setHours(12))}function je(e){return function(t,n){return li(e)(t,ci(n))}}var si={day:"numeric"},di={day:"numeric",month:"long",year:"numeric"},ui={month:"long"},fi={month:"long",year:"numeric"},hi={weekday:"short"},vi={weekday:"long"},pi={year:"numeric"},mi=je(si),gi=je(di),bi=je(ui),Ln=je(fi),yi=je(hi),xi=je(vi),St=je(pi),wi=mr[0],Di=mr[5],$r=mr[6];function Be(e,t){t===void 0&&(t=N.ISO_8601);var n=e.getDay();switch(t){case N.ISO_8601:return(n+6)%7;case N.ISLAMIC:return(n+1)%7;case N.HEBREW:case N.GREGORY:return n;default:throw new Error("Unsupported calendar type.")}}function _i(e){var t=We(e);return M(t)}function ki(e){var t=ye(e);return M(t)}function Zt(e,t){t===void 0&&(t=N.ISO_8601);var n=M(e),r=be(e),a=e.getDate()-Be(e,t);return new Date(n,r,a)}function Oi(e,t){t===void 0&&(t=N.ISO_8601);var n=t===N.GREGORY?N.GREGORY:N.ISO_8601,r=Zt(e,t),a=M(e)+1,i,l;do i=new Date(a,0,n===N.ISO_8601?4:1),l=Zt(i,t),a-=1;while(e<l);return Math.round((r.getTime()-l.getTime())/(864e5*7))+1}function De(e,t){switch(e){case"century":return We(t);case"decade":return ye(t);case"year":return Fe(t);case"month":return Oe(t);case"day":return Xe(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function ji(e,t){switch(e){case"century":return Qo(t);case"decade":return Cn(t);case"year":return En(t);case"month":return Mn(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function In(e,t){switch(e){case"century":return On(t);case"decade":return ur(t);case"year":return fr(t);case"month":return vr(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ci(e,t){switch(e){case"decade":return Cn(t,-100);case"year":return En(t,-10);case"month":return Mn(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Si(e,t){switch(e){case"decade":return ur(t,100);case"year":return fr(t,10);case"month":return vr(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Wn(e,t){switch(e){case"century":return dr(t);case"decade":return jt(t);case"year":return Ct(t);case"month":return Je(t);case"day":return pr(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ti(e,t){switch(e){case"century":return ei(t);case"decade":return Sn(t);case"year":return Nn(t);case"month":return An(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ei(e,t){switch(e){case"decade":return Sn(t,-100);case"year":return Nn(t,-10);case"month":return An(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Rr(e,t){switch(e){case"century":return jn(t);case"decade":return Tn(t);case"year":return ti(t);case"month":return ri(t);case"day":return oi(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ni(e,t,n){var r=[t,n].sort(function(a,i){return a.getTime()-i.getTime()});return[De(e,r[0]),Wn(e,r[1])]}function Fn(e,t,n){return t===void 0&&(t=St),n.map(function(r){return t(e,r)}).join(" – ")}function Mi(e,t,n){return Fn(e,t,jn(n))}function $n(e,t,n){return Fn(e,t,Tn(n))}function Ai(e){return e.getDay()===new Date().getDay()}function Rn(e,t){t===void 0&&(t=N.ISO_8601);var n=e.getDay();switch(t){case N.ISLAMIC:case N.HEBREW:return n===Di||n===$r;case N.ISO_8601:case N.GREGORY:return n===$r||n===wi;default:throw new Error("Unsupported calendar type.")}}var se="react-calendar__navigation";function Pi(e){var t=e.activeStartDate,n=e.drillUp,r=e.formatMonthYear,a=r===void 0?Ln:r,i=e.formatYear,l=i===void 0?St:i,c=e.locale,d=e.maxDate,u=e.minDate,p=e.navigationAriaLabel,y=p===void 0?"":p,g=e.navigationAriaLive,f=e.navigationLabel,m=e.next2AriaLabel,w=m===void 0?"":m,_=e.next2Label,S=_===void 0?"»":_,I=e.nextAriaLabel,V=I===void 0?"":I,Z=e.nextLabel,he=Z===void 0?"›":Z,G=e.prev2AriaLabel,D=G===void 0?"":G,x=e.prev2Label,k=x===void 0?"«":x,h=e.prevAriaLabel,j=h===void 0?"":h,O=e.prevLabel,Y=O===void 0?"‹":O,A=e.setActiveStartDate,K=e.showDoubleView,z=e.view,le=e.views,te=le.indexOf(z)>0,J=z!=="century",W=ji(z,t),X=J?Ci(z,t):void 0,T=In(z,t),re=J?Si(z,t):void 0,R=function(){if(W.getFullYear()<0)return!0;var F=Ti(z,t);return u&&u>=F}(),de=J&&function(){if(X.getFullYear()<0)return!0;var F=Ei(z,t);return u&&u>=F}(),B=d&&d<T,Q=J&&d&&d<re;function ae(){A(W,"prev")}function ee(){A(X,"prev2")}function Ce(){A(T,"next")}function xe(){A(re,"next2")}function ve(F){var $e=function(){switch(z){case"century":return Mi(c,l,F);case"decade":return $n(c,l,F);case"year":return l(c,F);case"month":return a(c,F);default:throw new Error("Invalid view: ".concat(z,"."))}}();return f?f({date:F,label:$e,locale:c||kn()||void 0,view:z}):$e}function we(){var F="".concat(se,"__label");return b.createElement("button",{"aria-label":y,"aria-live":g,className:F,disabled:!te,onClick:n,style:{flexGrow:1},type:"button"},b.createElement("span",{className:"".concat(F,"__labelText ").concat(F,"__labelText--from")},ve(t)),K?b.createElement(b.Fragment,null,b.createElement("span",{className:"".concat(F,"__divider")}," – "),b.createElement("span",{className:"".concat(F,"__labelText ").concat(F,"__labelText--to")},ve(T))):null)}return b.createElement("div",{className:se},k!==null&&J?b.createElement("button",{"aria-label":D,className:"".concat(se,"__arrow ").concat(se,"__prev2-button"),disabled:de,onClick:ee,type:"button"},k):null,Y!==null&&b.createElement("button",{"aria-label":j,className:"".concat(se,"__arrow ").concat(se,"__prev-button"),disabled:R,onClick:ae,type:"button"},Y),we(),he!==null&&b.createElement("button",{"aria-label":V,className:"".concat(se,"__arrow ").concat(se,"__next-button"),disabled:B,onClick:Ce,type:"button"},he),S!==null&&J?b.createElement("button",{"aria-label":w,className:"".concat(se,"__arrow ").concat(se,"__next2-button"),disabled:Q,onClick:xe,type:"button"},S):null)}var Ee=function(){return Ee=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ee.apply(this,arguments)},Li=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function Vr(e){return"".concat(e,"%")}function gr(e){var t=e.children,n=e.className,r=e.count,a=e.direction,i=e.offset,l=e.style,c=e.wrap,d=Li(e,["children","className","count","direction","offset","style","wrap"]);return b.createElement("div",Ee({className:n,style:Ee({display:"flex",flexDirection:a,flexWrap:c?"wrap":"nowrap"},l)},d),b.Children.map(t,function(u,p){var y=i&&p===0?Vr(100*i/r):null;return b.cloneElement(u,Ee(Ee({},u.props),{style:{flexBasis:Vr(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:y,marginInlineStart:y,marginInlineEnd:0}}))}))}var Se;function Ii(e,t,n){return t&&t>e?t:n&&n<e?n:e}function qe(e,t){return t[0]<=e&&t[1]>=e}function Wi(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function Vn(e,t){return qe(e[0],t)||qe(e[1],t)}function Yr(e,t,n){var r=Vn(t,e),a=[];if(r){a.push(n);var i=qe(e[0],t),l=qe(e[1],t);i&&a.push("".concat(n,"Start")),l&&a.push("".concat(n,"End")),i&&l&&a.push("".concat(n,"BothEnds"))}return a}function Fi(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function $i(e){if(!e)throw new Error("args is required");var t=e.value,n=e.date,r=e.hover,a="react-calendar__tile",i=[a];if(!n)return i;var l=new Date,c=function(){if(Array.isArray(n))return n;var f=e.dateType;if(!f)throw new Error("dateType is required when date is not an array of two dates");return Rr(f,n)}();if(qe(l,c)&&i.push("".concat(a,"--now")),!t||!Fi(t))return i;var d=function(){if(Array.isArray(t))return t;var f=e.valueType;if(!f)throw new Error("valueType is required when value is not an array of two dates");return Rr(f,t)}();Wi(d,c)?i.push("".concat(a,"--active")):Vn(d,c)&&i.push("".concat(a,"--hasActive"));var u=Yr(d,c,"".concat(a,"--range"));i.push.apply(i,u);var p=Array.isArray(t)?t:[t];if(r&&p.length===1){var y=r>d[0]?[d[0],r]:[r,d[0]],g=Yr(y,c,"".concat(a,"--hover"));i.push.apply(i,g)}return i}var Ri=(Se={},Se[Te.ARABIC]=N.ISLAMIC,Se[Te.HEBREW]=N.HEBREW,Se[Te.ISO_8601]=N.ISO_8601,Se[Te.US]=N.GREGORY,Se);function Vi(e){return e!==void 0&&e in Te}var zr=!1;function Tt(e){if(Vi(e)){var t=Ri[e];return qa(zr,'Specifying calendarType="'.concat(e,'" is deprecated. Use calendarType="').concat(t,'" instead.')),zr=!0,t}return e}function Et(e){for(var t=e.className,n=e.count,r=n===void 0?3:n,a=e.dateTransform,i=e.dateType,l=e.end,c=e.hover,d=e.offset,u=e.renderTile,p=e.start,y=e.step,g=y===void 0?1:y,f=e.value,m=e.valueType,w=[],_=p;_<=l;_+=g){var S=a(_);w.push(u({classes:$i({date:S,dateType:i,hover:c,value:f,valueType:m}),date:S}))}return b.createElement(gr,{className:t,count:r,offset:d,wrap:!0},w)}function Nt(e){var t=e.activeStartDate,n=e.children,r=e.classes,a=e.date,i=e.formatAbbr,l=e.locale,c=e.maxDate,d=e.maxDateTransform,u=e.minDate,p=e.minDateTransform,y=e.onClick,g=e.onMouseOver,f=e.style,m=e.tileClassName,w=e.tileContent,_=e.tileDisabled,S=e.view,I=E.useMemo(function(){var Z={activeStartDate:t,date:a,view:S};return typeof m=="function"?m(Z):m},[t,a,m,S]),V=E.useMemo(function(){var Z={activeStartDate:t,date:a,view:S};return typeof w=="function"?w(Z):w},[t,a,w,S]);return b.createElement("button",{className:gt(r,I),disabled:u&&p(u)>a||c&&d(c)<a||_&&_({activeStartDate:t,date:a,view:S}),onClick:y?function(Z){return y(a,Z)}:void 0,onFocus:g?function(){return g(a)}:void 0,onMouseOver:g?function(){return g(a)}:void 0,style:f,type:"button"},i?b.createElement("abbr",{"aria-label":i(l,a)},n):n,V)}var Kt=function(){return Kt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Kt.apply(this,arguments)},Yi=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},Bt="react-calendar__century-view__decades__decade";function zi(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentCentury,a=e.formatYear,i=a===void 0?St:a,l=Yi(e,["classes","currentCentury","formatYear"]),c=l.date,d=l.locale,u=[];return n&&u.push.apply(u,n),Bt&&u.push(Bt),We(c).getFullYear()!==r&&u.push("".concat(Bt,"--neighboringCentury")),b.createElement(Nt,Kt({},l,{classes:u,maxDateTransform:jt,minDateTransform:ye,view:"century"}),$n(d,i,c))}var Jt=function(){return Jt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Jt.apply(this,arguments)},Br=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function Bi(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringCentury,a=e.value,i=e.valueType,l=Br(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),c=_i(t),d=c+(r?119:99);return b.createElement(Et,{className:"react-calendar__century-view__decades",dateTransform:ye,dateType:"decade",end:d,hover:n,renderTile:function(u){var p=u.date,y=Br(u,["date"]);return b.createElement(zi,Jt({key:p.getTime()},l,y,{activeStartDate:t,currentCentury:c,date:p}))},start:c,step:10,value:a,valueType:i})}var qr=function(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))},qi=Object.values(N),Gi=Object.values(Te),Xt=["century","decade","year","month"],Yn=s.oneOf(qr(qr([],qi,!0),Gi,!0)),ft=s.oneOfType([s.string,s.arrayOf(s.string)]),br=function(t,n,r){var a=t,i=n,l=a[i];if(!l)return null;if(!(l instanceof Date))return new Error("Invalid prop `".concat(n,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, expected instance of `Date`."));var c=t.maxDate;return c&&l>c?new Error("Invalid prop `".concat(n,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, minDate cannot be larger than maxDate.")):null},yr=function(t,n,r){var a=t,i=n,l=a[i];if(!l)return null;if(!(l instanceof Date))return new Error("Invalid prop `".concat(n,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, expected instance of `Date`."));var c=t.minDate;return c&&l<c?new Error("Invalid prop `".concat(n,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, maxDate cannot be smaller than minDate.")):null},Hi=s.oneOfType([s.func,s.exact({current:s.any})]),Ui=s.arrayOf(s.oneOfType([s.instanceOf(Date),s.oneOf([null])]).isRequired),Zi=s.oneOfType([s.instanceOf(Date),s.oneOf([null]),Ui]);s.arrayOf(s.oneOf(Xt));var ht=function(t,n,r){var a=t,i=n,l=a[i];return l!==void 0&&(typeof l!="string"||Xt.indexOf(l)===-1)?new Error("Invalid prop `".concat(n,"` of value `").concat(l,"` supplied to `").concat(r,"`, expected one of [").concat(Xt.map(function(c){return'"'.concat(c,'"')}).join(", "),"].")):null};ht.isRequired=function(t,n,r,a,i){var l=t,c=n,d=l[c];return d?ht(t,n,r):new Error("The prop `".concat(n,"` is marked as required in `").concat(r,"`, but its value is `").concat(d,"`."))};var Ki=function(e){return s.arrayOf(e)},Mt={activeStartDate:s.instanceOf(Date).isRequired,hover:s.instanceOf(Date),locale:s.string,maxDate:yr,minDate:br,onClick:s.func,onMouseOver:s.func,tileClassName:s.oneOfType([s.func,ft]),tileContent:s.oneOfType([s.func,s.node]),value:Zi,valueType:s.oneOf(["century","decade","year","month","day"]).isRequired};s.instanceOf(Date).isRequired,s.arrayOf(s.string.isRequired).isRequired,s.instanceOf(Date).isRequired,s.string,s.func,s.func,s.objectOf(s.oneOfType([s.string,s.number])),s.oneOfType([s.func,ft]),s.oneOfType([s.func,s.node]),s.func;var Ge=function(){return Ge=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ge.apply(this,arguments)},zn=function(t){function n(){return b.createElement(Bi,Ge({},t))}return b.createElement("div",{className:"react-calendar__century-view"},n())};zn.propTypes=Ge(Ge({},Mt),{showNeighboringCentury:s.bool});const Ji=zn;var Qt=function(){return Qt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Qt.apply(this,arguments)},Xi=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},qt="react-calendar__decade-view__years__year";function Qi(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentDecade,a=e.formatYear,i=a===void 0?St:a,l=Xi(e,["classes","currentDecade","formatYear"]),c=l.date,d=l.locale,u=[];return n&&u.push.apply(u,n),qt&&u.push(qt),ye(c).getFullYear()!==r&&u.push("".concat(qt,"--neighboringDecade")),b.createElement(Nt,Qt({},l,{classes:u,maxDateTransform:Ct,minDateTransform:Fe,view:"decade"}),i(d,c))}var er=function(){return er=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},er.apply(this,arguments)},Gr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function el(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringDecade,a=e.value,i=e.valueType,l=Gr(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),c=ki(t),d=c+(r?11:9);return b.createElement(Et,{className:"react-calendar__decade-view__years",dateTransform:Fe,dateType:"year",end:d,hover:n,renderTile:function(u){var p=u.date,y=Gr(u,["date"]);return b.createElement(Qi,er({key:p.getTime()},l,y,{activeStartDate:t,currentDecade:c,date:p}))},start:c,value:a,valueType:i})}var He=function(){return He=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},He.apply(this,arguments)},Bn=function(t){function n(){return b.createElement(el,He({},t))}return b.createElement("div",{className:"react-calendar__decade-view"},n())};Bn.propTypes=He(He({},Mt),{showNeighboringDecade:s.bool});const tl=Bn;var tr=function(){return tr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},tr.apply(this,arguments)},rl=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},Hr=function(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))},nl="react-calendar__year-view__months__month";function al(e){var t=e.classes,n=t===void 0?[]:t,r=e.formatMonth,a=r===void 0?bi:r,i=e.formatMonthYear,l=i===void 0?Ln:i,c=rl(e,["classes","formatMonth","formatMonthYear"]),d=c.date,u=c.locale;return b.createElement(Nt,tr({},c,{classes:Hr(Hr([],n,!0),[nl],!1),formatAbbr:l,maxDateTransform:Je,minDateTransform:Oe,view:"year"}),a(u,d))}var rr=function(){return rr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},rr.apply(this,arguments)},Ur=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function ol(e){var t=e.activeStartDate,n=e.hover,r=e.value,a=e.valueType,i=Ur(e,["activeStartDate","hover","value","valueType"]),l=0,c=11,d=M(t);return b.createElement(Et,{className:"react-calendar__year-view__months",dateTransform:function(u){var p=new Date;return p.setFullYear(d,u,1),Oe(p)},dateType:"month",end:c,hover:n,renderTile:function(u){var p=u.date,y=Ur(u,["date"]);return b.createElement(al,rr({key:p.getTime()},i,y,{activeStartDate:t,date:p}))},start:l,value:r,valueType:a})}var vt=function(){return vt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},vt.apply(this,arguments)},qn=function(t){function n(){return b.createElement(ol,vt({},t))}return b.createElement("div",{className:"react-calendar__year-view"},n())};qn.propTypes=vt({},Mt);const il=qn;var nr=function(){return nr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},nr.apply(this,arguments)},ll=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},ct="react-calendar__month-view__days__day";function cl(e){var t=e.calendarType,n=e.classes,r=n===void 0?[]:n,a=e.currentMonthIndex,i=e.formatDay,l=i===void 0?mi:i,c=e.formatLongDate,d=c===void 0?gi:c,u=ll(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),p=Tt(t),y=u.date,g=u.locale,f=[];return r&&f.push.apply(f,r),ct&&f.push(ct),Rn(y,p)&&f.push("".concat(ct,"--weekend")),y.getMonth()!==a&&f.push("".concat(ct,"--neighboringMonth")),b.createElement(Nt,nr({},u,{classes:f,formatAbbr:d,maxDateTransform:pr,minDateTransform:Xe,view:"month"}),l(g,y))}var ar=function(){return ar=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ar.apply(this,arguments)},Zr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function sl(e){var t=e.activeStartDate,n=e.calendarType,r=e.hover,a=e.showFixedNumberOfWeeks,i=e.showNeighboringMonth,l=e.value,c=e.valueType,d=Zr(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),u=Tt(n),p=M(t),y=be(t),g=a||i,f=Be(t,u),m=g?0:f,w=(g?-f:0)+1,_=function(){if(a)return w+6*7-1;var S=Pn(t);if(i){var I=new Date;I.setFullYear(p,y,S),I.setHours(0,0,0,0);var V=7-Be(I,u)-1;return S+V}return S}();return b.createElement(Et,{className:"react-calendar__month-view__days",count:7,dateTransform:function(S){var I=new Date;return I.setFullYear(p,y,S),Xe(I)},dateType:"day",hover:r,end:_,renderTile:function(S){var I=S.date,V=Zr(S,["date"]);return b.createElement(cl,ar({key:I.getTime()},d,V,{activeStartDate:t,calendarType:n,currentMonthIndex:y,date:I}))},offset:m,start:w,value:l,valueType:c})}var Gn="react-calendar__month-view__weekdays",Gt="".concat(Gn,"__weekday");function dl(e){for(var t=e.calendarType,n=e.formatShortWeekday,r=n===void 0?yi:n,a=e.formatWeekday,i=a===void 0?xi:a,l=e.locale,c=e.onMouseLeave,d=Tt(t),u=new Date,p=Oe(u),y=M(p),g=be(p),f=[],m=1;m<=7;m+=1){var w=new Date(y,g,m-Be(p,d)),_=i(l,w);f.push(b.createElement("div",{key:m,className:gt(Gt,Ai(w)&&"".concat(Gt,"--current"),Rn(w,d)&&"".concat(Gt,"--weekend"))},b.createElement("abbr",{"aria-label":_,title:_},r(l,w).replace(".",""))))}return b.createElement(gr,{className:Gn,count:7,onFocus:c,onMouseOver:c},f)}var pt=function(){return pt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},pt.apply(this,arguments)},Kr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},Jr="react-calendar__tile";function ul(e){var t=e.onClickWeekNumber,n=e.weekNumber,r=b.createElement("span",null,n);if(t){var a=e.date,i=e.onClickWeekNumber,l=e.weekNumber,c=Kr(e,["date","onClickWeekNumber","weekNumber"]);return b.createElement("button",pt({},c,{className:Jr,onClick:function(d){return i(l,a,d)},type:"button"}),r)}else{e.date,e.onClickWeekNumber,e.weekNumber;var c=Kr(e,["date","onClickWeekNumber","weekNumber"]);return b.createElement("div",pt({},c,{className:Jr}),r)}}function fl(e){var t=e.activeStartDate,n=e.calendarType,r=e.onClickWeekNumber,a=e.onMouseLeave,i=e.showFixedNumberOfWeeks,l=Tt(n),c=function(){if(i)return 6;var p=Pn(t),y=Be(t,l),g=p-(7-y);return 1+Math.ceil(g/7)}(),d=function(){for(var p=M(t),y=be(t),g=Ot(t),f=[],m=0;m<c;m+=1)f.push(Zt(new Date(p,y,g+m*7),l));return f}(),u=d.map(function(p){return Oi(p,l)});return b.createElement(gr,{className:"react-calendar__month-view__weekNumbers",count:c,direction:"column",onFocus:a,onMouseOver:a,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0}},u.map(function(p,y){var g=d[y];if(!g)throw new Error("date is not defined");return b.createElement(ul,{key:p,date:g,onClickWeekNumber:r,weekNumber:p})}))}var Ue=function(){return Ue=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ue.apply(this,arguments)},hl=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function vl(e){if(e)for(var t=0,n=Object.entries(ii);t<n.length;t++){var r=n[t],a=r[0],i=r[1];if(i.includes(e))return a}return N.ISO_8601}var Hn=function(t){var n=t.activeStartDate,r=t.locale,a=t.onMouseLeave,i=t.showFixedNumberOfWeeks,l=t.calendarType,c=l===void 0?vl(r):l,d=t.formatShortWeekday,u=t.formatWeekday,p=t.onClickWeekNumber,y=t.showWeekNumbers,g=hl(t,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function f(){return b.createElement(dl,{calendarType:c,formatShortWeekday:d,formatWeekday:u,locale:r,onMouseLeave:a})}function m(){return y?b.createElement(fl,{activeStartDate:n,calendarType:c,onClickWeekNumber:p,onMouseLeave:a,showFixedNumberOfWeeks:i}):null}function w(){return b.createElement(sl,Ue({calendarType:c},g))}var _="react-calendar__month-view";return b.createElement("div",{className:gt(_,y?"".concat(_,"--weekNumbers"):"")},b.createElement("div",{style:{display:"flex",alignItems:"flex-end"}},m(),b.createElement("div",{style:{flexGrow:1,width:"100%"}},f(),w())))};Hn.propTypes=Ue(Ue({},Mt),{calendarType:Yn,formatDay:s.func,formatLongDate:s.func,formatShortWeekday:s.func,formatWeekday:s.func,onClickWeekNumber:s.func,onMouseLeave:s.func,showFixedNumberOfWeeks:s.bool,showNeighboringMonth:s.bool,showWeekNumbers:s.bool});const pl=Hn;var Ne=function(){return Ne=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ne.apply(this,arguments)},st="react-calendar",Pe=["century","decade","year","month"],ml=["decade","year","month","day"],xr=new Date;xr.setFullYear(1,0,1);xr.setHours(0,0,0,0);var gl=new Date(864e13);function Ye(e){return e instanceof Date?e:new Date(e)}function Un(e,t){return Pe.slice(Pe.indexOf(e),Pe.indexOf(t)+1)}function bl(e,t,n){var r=Un(t,n);return r.indexOf(e)!==-1}function wr(e,t,n){return e&&bl(e,t,n)?e:n}function Zn(e){var t=Pe.indexOf(e);return ml[t]}function yl(e,t){var n=Array.isArray(e)?e[t]:e;if(!n)return null;var r=Ye(n);if(isNaN(r.getTime()))throw new Error("Invalid date: ".concat(e));return r}function Kn(e,t){var n=e.value,r=e.minDate,a=e.maxDate,i=e.maxDetail,l=yl(n,t);if(!l)return null;var c=Zn(i),d=function(){switch(t){case 0:return De(c,l);case 1:return Wn(c,l);default:throw new Error("Invalid index value: ".concat(t))}}();return Ii(d,r,a)}var Dr=function(e){return Kn(e,0)},Jn=function(e){return Kn(e,1)},xl=function(e){return[Dr,Jn].map(function(t){return t(e)})};function Xn(e){var t=e.maxDate,n=e.maxDetail,r=e.minDate,a=e.minDetail,i=e.value,l=e.view,c=wr(l,a,n),d=Dr({value:i,minDate:r,maxDate:t,maxDetail:n})||new Date;return De(c,d)}function wl(e){var t=e.activeStartDate,n=e.defaultActiveStartDate,r=e.defaultValue,a=e.defaultView,i=e.maxDate,l=e.maxDetail,c=e.minDate,d=e.minDetail,u=e.value,p=e.view,y=wr(p,d,l),g=t||n;return g?De(y,g):Xn({maxDate:i,maxDetail:l,minDate:c,minDetail:d,value:u||r,view:p||a})}function Ht(e){return e&&(!Array.isArray(e)||e.length===1)}function dt(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var Qn=E.forwardRef(function(t,n){var r=t.activeStartDate,a=t.allowPartialRange,i=t.calendarType,l=t.className,c=t.defaultActiveStartDate,d=t.defaultValue,u=t.defaultView,p=t.formatDay,y=t.formatLongDate,g=t.formatMonth,f=t.formatMonthYear,m=t.formatShortWeekday,w=t.formatWeekday,_=t.formatYear,S=t.goToRangeStartOnSelect,I=S===void 0?!0:S,V=t.inputRef,Z=t.locale,he=t.maxDate,G=he===void 0?gl:he,D=t.maxDetail,x=D===void 0?"month":D,k=t.minDate,h=k===void 0?xr:k,j=t.minDetail,O=j===void 0?"century":j,Y=t.navigationAriaLabel,A=t.navigationAriaLive,K=t.navigationLabel,z=t.next2AriaLabel,le=t.next2Label,te=t.nextAriaLabel,J=t.nextLabel,W=t.onActiveStartDateChange,X=t.onChange,T=t.onClickDay,re=t.onClickDecade,R=t.onClickMonth,de=t.onClickWeekNumber,B=t.onClickYear,Q=t.onDrillDown,ae=t.onDrillUp,ee=t.onViewChange,Ce=t.prev2AriaLabel,xe=t.prev2Label,ve=t.prevAriaLabel,we=t.prevLabel,F=t.returnValue,$e=F===void 0?"start":F,ne=t.selectRange,Qe=t.showDoubleView,_r=t.showFixedNumberOfWeeks,kr=t.showNavigation,pa=kr===void 0?!0:kr,ma=t.showNeighboringCentury,ga=t.showNeighboringDecade,Or=t.showNeighboringMonth,ba=Or===void 0?!0:Or,ya=t.showWeekNumbers,xa=t.tileClassName,wa=t.tileContent,Da=t.tileDisabled,At=t.value,jr=t.view,Cr=E.useState(c),_a=Cr[0],et=Cr[1],Sr=E.useState(null),ka=Sr[0],Tr=Sr[1],Er=E.useState(Array.isArray(d)?d.map(function(C){return C!==null?Ye(C):null}):d!=null?Ye(d):null),Pt=Er[0],Oa=Er[1],Nr=E.useState(u),ja=Nr[0],Mr=Nr[1],H=r||_a||wl({activeStartDate:r,defaultActiveStartDate:c,defaultValue:d,defaultView:u,maxDate:G,maxDetail:x,minDate:h,minDetail:O,value:At,view:jr}),U=function(){var C=function(){return ne&&Ht(Pt)?Pt:At!==void 0?At:Pt}();return C?Array.isArray(C)?C.map(function(L){return L!==null?Ye(L):null}):C!==null?Ye(C):null:null}(),tt=Zn(x),P=wr(jr||ja,O,x),ce=Un(O,x),Ca=ne?ka:null,Lt=ce.indexOf(P)<ce.length-1,Ar=ce.indexOf(P)>0,Pr=E.useCallback(function(C){var L=function(){switch($e){case"start":return Dr;case"end":return Jn;case"range":return xl;default:throw new Error("Invalid returnValue.")}}();return L({maxDate:G,maxDetail:x,minDate:h,value:C})},[G,x,h,$e]),It=E.useCallback(function(C,L){et(C);var $={action:L,activeStartDate:C,value:U,view:P};W&&!dt(H,C)&&W($)},[H,W,U,P]),rt=E.useCallback(function(C,L){var $=function(){switch(P){case"century":return re;case"decade":return B;case"year":return R;case"month":return T;default:throw new Error("Invalid view: ".concat(P,"."))}}();$&&$(C,L)},[T,re,R,B,P]),Wt=E.useCallback(function(C,L){if(Lt){rt(C,L);var $=ce[ce.indexOf(P)+1];if(!$)throw new Error("Attempted to drill down from the lowest view.");et(C),Mr($);var oe={action:"drillDown",activeStartDate:C,value:U,view:$};W&&!dt(H,C)&&W(oe),ee&&P!==$&&ee(oe),Q&&Q(oe)}},[H,Lt,W,rt,Q,ee,U,P,ce]),Ft=E.useCallback(function(){if(Ar){var C=ce[ce.indexOf(P)-1];if(!C)throw new Error("Attempted to drill up from the highest view.");var L=De(C,H);et(L),Mr(C);var $={action:"drillUp",activeStartDate:L,value:U,view:C};W&&!dt(H,L)&&W($),ee&&P!==C&&ee($),ae&&ae($)}},[H,Ar,W,ae,ee,U,P,ce]),$t=E.useCallback(function(C,L){var $=U;rt(C,L);var oe=ne&&!Ht($),ie;if(ne)if(oe)ie=De(tt,C);else{if(!$)throw new Error("previousValue is required");if(Array.isArray($))throw new Error("previousValue must not be an array");ie=Ni(tt,$,C)}else ie=Pr(C);var Vt=!ne||oe||I?Xn({maxDate:G,maxDetail:x,minDate:h,minDetail:O,value:ie,view:P}):null;L.persist(),et(Vt),Oa(ie);var Na={action:"onChange",activeStartDate:Vt,value:ie,view:P};if(W&&!dt(H,Vt)&&W(Na),X)if(ne){var Ma=Ht(ie);if(!Ma)X(ie||null,L);else if(a){if(Array.isArray(ie))throw new Error("value must not be an array");X([ie||null,null],L)}}else X(ie||null,L)},[H,a,Pr,I,G,x,h,O,W,X,rt,ne,U,tt,P]);function Sa(C){Tr(C)}function Rt(){Tr(null)}E.useImperativeHandle(n,function(){return{activeStartDate:H,drillDown:Wt,drillUp:Ft,onChange:$t,setActiveStartDate:It,value:U,view:P}},[H,Wt,Ft,$t,It,U,P]);function Lr(C){var L=C?In(P,H):De(P,H),$=Lt?Wt:$t,oe={activeStartDate:L,hover:Ca,locale:Z,maxDate:G,minDate:h,onClick:$,onMouseOver:ne?Sa:void 0,tileClassName:xa,tileContent:wa,tileDisabled:Da,value:U,valueType:tt};switch(P){case"century":return b.createElement(Ji,Ne({formatYear:_,showNeighboringCentury:ma},oe));case"decade":return b.createElement(tl,Ne({formatYear:_,showNeighboringDecade:ga},oe));case"year":return b.createElement(il,Ne({formatMonth:g,formatMonthYear:f},oe));case"month":return b.createElement(pl,Ne({calendarType:i,formatDay:p,formatLongDate:y,formatShortWeekday:m,formatWeekday:w,onClickWeekNumber:de,onMouseLeave:ne?Rt:void 0,showFixedNumberOfWeeks:typeof _r<"u"?_r:Qe,showNeighboringMonth:ba,showWeekNumbers:ya},oe));default:throw new Error("Invalid view: ".concat(P,"."))}}function Ta(){return pa?b.createElement(Pi,{activeStartDate:H,drillUp:Ft,formatMonthYear:f,formatYear:_,locale:Z,maxDate:G,minDate:h,navigationAriaLabel:Y,navigationAriaLive:A,navigationLabel:K,next2AriaLabel:z,next2Label:le,nextAriaLabel:te,nextLabel:J,prev2AriaLabel:Ce,prev2Label:xe,prevAriaLabel:ve,prevLabel:we,setActiveStartDate:It,showDoubleView:Qe,view:P,views:ce}):null}var Ea=Array.isArray(U)?U:[U];return b.createElement("div",{className:gt(st,ne&&Ea.length===1&&"".concat(st,"--selectRange"),Qe&&"".concat(st,"--doubleView"),l),ref:V},Ta(),b.createElement("div",{className:"".concat(st,"__viewContainer"),onBlur:ne?Rt:void 0,onMouseLeave:ne?Rt:void 0},Lr(),Qe?Lr(!0):null))}),Xr=s.instanceOf(Date),Qr=s.oneOfType([s.string,s.instanceOf(Date)]),en=s.oneOfType([Qr,Ki(Qr)]);Qn.propTypes={activeStartDate:Xr,allowPartialRange:s.bool,calendarType:Yn,className:ft,defaultActiveStartDate:Xr,defaultValue:en,defaultView:ht,formatDay:s.func,formatLongDate:s.func,formatMonth:s.func,formatMonthYear:s.func,formatShortWeekday:s.func,formatWeekday:s.func,formatYear:s.func,goToRangeStartOnSelect:s.bool,inputRef:Hi,locale:s.string,maxDate:yr,maxDetail:s.oneOf(Pe),minDate:br,minDetail:s.oneOf(Pe),navigationAriaLabel:s.string,navigationAriaLive:s.oneOf(["off","polite","assertive"]),navigationLabel:s.func,next2AriaLabel:s.string,next2Label:s.node,nextAriaLabel:s.string,nextLabel:s.node,onActiveStartDateChange:s.func,onChange:s.func,onClickDay:s.func,onClickDecade:s.func,onClickMonth:s.func,onClickWeekNumber:s.func,onClickYear:s.func,onDrillDown:s.func,onDrillUp:s.func,onViewChange:s.func,prev2AriaLabel:s.string,prev2Label:s.node,prevAriaLabel:s.string,prevLabel:s.node,returnValue:s.oneOf(["start","end","range"]),selectRange:s.bool,showDoubleView:s.bool,showFixedNumberOfWeeks:s.bool,showNavigation:s.bool,showNeighboringCentury:s.bool,showNeighboringDecade:s.bool,showNeighboringMonth:s.bool,showWeekNumbers:s.bool,tileClassName:s.oneOfType([s.func,ft]),tileContent:s.oneOfType([s.func,s.node]),tileDisabled:s.func,value:en,view:ht};const Dl=Qn,ea=v(Dl)`
  border: 1px solid #bedbb0;
  border-radius: 8px;
  width: 233px;
  height: 254px;

  background-color: #1f1f1f;

  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }

  .react-calendar__navigation::after {
    content: "";
    display: block;
    width: 197px;
    height: 1px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 14px;
    background-color: rgba(255, 255, 255, 0.2);
  }

  .react-calendar__navigation button {
    height: 56px;
    background: none;
    color: #ffffff;
    border: none;
    transition: color var(--hover-params);
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    color: #bedbb0;
  }

  .react-calendar__navigation__arrow.react-calendar__navigation__prev2-button {
    display: none;
  }

  .react-calendar__navigation__arrow.react-calendar__navigation__prev-button {
    border: none;
    width: 36px;
    cursor: pointer;
  }

  .react-calendar__navigation__label {
    border: none;
    width: 158px;
    cursor: pointer;
  }

  .react-calendar__navigation__arrow.react-calendar__navigation__next-button {
    border: none;
    width: 36px;
    cursor: pointer;
  }

  .react-calendar__navigation__arrow.react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__month-view__weekdays {
    width: 197px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 11px;
  }

  .react-calendar__month-view__weekdays__weekday {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
  }

  abbr {
    text-decoration: none;
  }

  .react-calendar__month-view__days {
    width: 197px;
    height: 145px;
    margin-left: auto;
    margin-right: auto;
  }

  .react-calendar__month-view__days__day {
    /* width: 10px; */
    /* height: 10px; */
    border: none;
    border-radius: 50%;
    background-color: transparent;
    letter-spacing: -0.02em;
    color: #ffffff;
    cursor: pointer;
    transition: color var(--hover-params);

    &:hover {
      color: #9dc888;
    }
  }

  .react-calendar__tile--active {
    background-color: #9dc888; /* цвет выбранного фона */
    color: #1f1f1f; /* цвет выбранного текста */
  }

  .react-calendar__tile--now {
    color: #1f1f1f;
    background-color: #bedbb0;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: rgba(255, 255, 255, 0.2);
  }

  .react-calendar__year-view__months {
    width: 197px;
    height: 160px;
    margin-left: auto;
    margin-right: auto;
  }

  .react-calendar__year-view__months__month {
    border: none;
    font-weight: 500;
    font-size: 10px;
    letter-spacing: -0.02em;
    color: #fff;
    background-color: #1f1f1f;
    transition: color var(--hover-params);

    &:hover,
    &:focus {
      color: #9dc888;
    }
  }

  .react-calendar__decade-view__years {
    width: 197px;
    height: 160px;
    margin-left: auto;
    margin-right: auto;
  }

  .react-calendar__decade-view__years__year {
    border: none;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.02em;
    color: #fff;
    background-color: #1f1f1f;
    transition: color var(--hover-params);

    &:hover,
    &:focus {
      color: #9dc888;
    }
  }

  .react-calendar__century-view__decades {
    width: 197px;
    height: 160px;
    margin-left: auto;
    margin-right: auto;
  }

  .react-calendar__century-view__decades__decade {
    border: none;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.02em;
    color: #fff;
    background-color: #1f1f1f;
    transition: color var(--hover-params);

    &:hover,
    &:focus {
      color: #9dc888;
    }
  }
`,ta=v.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,ra=v.textarea`
  padding: 14px 18px;
  resize: none;
  width: 100%;
  height: 154px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: var(--primary-card-background-color);
  color: var(--card-title-color);
  font-size: 14px;
  font-weight: 400;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  &:focus {
    border-color: #bedbb0;
  }
`,pe=v(lr)`
  position: absolute;
  appearance: none;
  z-index: 5;
  top: 0;
  left: 0;
  border-radius: 50%;
  margin: 0;
  width: 14px;
  height: 14px;
  cursor: pointer;

  &:checked.blue {
    border: 1px solid #8fa1d0; /* Синій колір рамки при виборі */
  }

  &:checked.pink {
    border: 1px solid #e09cb5; /* Рожевий колір рамки при виборі */
  }

  &:checked.green {
    border: 1px solid #bedbb0; /* Зелений колір рамки при виборі */
  }

  &:checked.gray {
    border: 1px solid rgba(255, 255, 255, 0.3); /* Сірий колір рамки при виборі */
  }
`,na=v.div`
  display: flex;
  gap: 4px;
  width: 200px;
  margin-bottom: 40px;
  align-items: center;
  cursor: pointer;
`,aa=v.p`
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  margin-top: 14px;
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
`,oa=v.h2`
  margin: 0;
  margin-top: 14px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Poppins", sans-serif;
`,ia=v.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,ue=v.span`
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: transparent;

  &.blue {
    background-color: #8fa1d0; /* Синій колір */
  }

  &.pink {
    background-color: #e09cb5; /* Рожевий колір */
  }

  &.green {
    background-color: #bedbb0; /* Зелений колір */
  }

  &.gray {
    background-color: #ffffff4d; /* Сірий колір */
  }
`,me=v.label`
  position: relative;
  width: 14px;
  height: 14px;
  margin: 0;

  input[type="radio"]:checked + ${ue} {
    scale: 0.5;
  }
`,la=v.input`
  padding: 14px 18px;
  width: 100%;
  border-radius: 6px;
  height: 49px;
  border: 1px solid #ccc;
  background: var(--primary-card-background-color);
  color: var(--card-title-color);
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  box-shadow: none;
  cursor: pointer;

  &:focus {
    border-color: #bedbb0;
  }
`,ca=v.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #bedbb0;
`,sa=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  width: 28px;
  height: 28px;
  background-color: rgb(22, 22, 22);
  margin-right: 8px;
  padding: 7px;
`,da=v.svg`
  width: 28px;
  height: 28px;
  stroke: rgb(255, 255, 255);
`,ua=v.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 49px;
  padding: 14px;
  border: none;
  border-radius: 8px;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;

  color: #161616;
  background-color: rgb(190, 219, 176);

  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,fa=v(vn)`
  position: absolute;
  padding-left: 8px;
  margin: 0;
  color: red;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`,mt=v.div`
  line-height: 0;
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 0;
`,ha=v(vn)`
  position: absolute;
  bottom: -12px;
  padding-left: 8px;
  margin: 0;
  color: red;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`,va=v.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: #bedbb0;
`;yt.setAppElement("#root");const _l=wt().shape({title:ge().required("Title is required"),description:ge().required("Description is required"),color:ge().required("Color selection is required"),deadline:pn().required("Deadline is required")});function kl({isModalOpen:e,modalStateSwapper:t,cardId:n}){const[r,a]=E.useState(new Date),i=Le(),{isModalOpen:l,openModal:c,closeModal:d}=Ae(),u={overlay:{backgroundColor:"rgb(21, 21, 21, 0.75)"},content:{width:"233px",height:"254px",margin:"auto",padding:0,border:"none",borderRadius:"8px"}},p=(f,{setSubmitting:m,resetForm:w})=>{const _={cardId:n,title:f.title,description:f.description,color:f.color,deadline:r};i(Aa(_)),m(!1),w(),t()},y=(f,m)=>["Su","Mo","Tu","We","Th","Fr","Sa"][m.getDay()],g=f=>{const m=new Date(f),w=m.getDate(),_=m.toLocaleString("en",{month:"long"});return`${m.toLocaleString("en",{weekday:"long"})}, ${_} ${w}`};return o.jsx(o.Fragment,{children:o.jsxs(xt,{modalIsOpen:e,closeModal:t,title:"Edit card",maxWidth:"350px",children:[o.jsx(Dt,{initialValues:{title:"",description:"",color:"",deadline:""},validationSchema:_l,onSubmit:p,children:({values:f,handleChange:m,handleSubmit:w})=>o.jsxs(ta,{onSubmit:w,children:[o.jsxs(mt,{children:[o.jsx(la,{type:"text",name:"title",onChange:m,value:f.title,placeholder:"Title"}),o.jsx(fa,{name:"title",component:"div",className:"error"})]}),o.jsxs(mt,{children:[o.jsx(ra,{name:"description",onChange:m,value:f.description,placeholder:"Description"}),o.jsx(ha,{name:"Description",component:"div",className:"error"})]}),o.jsx(oa,{children:"Label color"}),o.jsxs(ia,{children:[o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"blue",className:"blue",checked:f.color==="blue",onChange:m}),o.jsx(ue,{className:"blue"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"pink",className:"pink",checked:f.color==="pink",onChange:m}),o.jsx(ue,{className:"pink"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"green",className:"green",checked:f.color==="green",onChange:m}),o.jsx(ue,{className:"green"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"gray",className:"gray",checked:f.color==="gray",onChange:m}),o.jsx(ue,{className:"gray"})]})]}),o.jsx(aa,{children:"Deadline"}),o.jsxs(na,{children:[o.jsx(ca,{onClick:c,children:g(r)}),o.jsx(va,{children:o.jsx("use",{href:q+"#icon-chevron-down"})})]}),o.jsxs(ua,{type:"submit",children:[o.jsx(sa,{children:o.jsx(da,{children:o.jsx("use",{href:q+"#icon-plus"})})}),"Edit"]})]})}),o.jsx(yt,{isOpen:l,onRequestClose:d,style:u,closeTimeoutMS:750,children:o.jsx(ea,{formatShortWeekday:y,value:r,onChange:a,onClickDay:d,minDate:new Date})})]})})}var or={exports:{}};(function(e,t){(function(n,r){r(t,E,Ga)})(void 0,function(n,r,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=c(r),l=c(a);function c(D){return D&&D.__esModule?D:{default:D}}function d(D){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(k){return typeof k}:d=function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},d(D)}function u(D,x){if(D==null)return{};var k=p(D,x),h,j;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(D);for(j=0;j<O.length;j++)h=O[j],!(x.indexOf(h)>=0)&&Object.prototype.propertyIsEnumerable.call(D,h)&&(k[h]=D[h])}return k}function p(D,x){if(D==null)return{};var k={},h=Object.keys(D),j,O;for(O=0;O<h.length;O++)j=h[O],!(x.indexOf(j)>=0)&&(k[j]=D[j]);return k}function y(D,x){if(!(D instanceof x))throw new TypeError("Cannot call a class as a function")}function g(D,x){for(var k=0;k<x.length;k++){var h=x[k];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(D,h.key,h)}}function f(D,x,k){return x&&g(D.prototype,x),k&&g(D,k),D}function m(D,x){return x&&(d(x)==="object"||typeof x=="function")?x:_(D)}function w(D){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(k){return k.__proto__||Object.getPrototypeOf(k)},w(D)}function _(D){if(D===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return D}function S(D,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(x&&x.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),x&&I(D,x)}function I(D,x){return I=Object.setPrototypeOf||function(h,j){return h.__proto__=j,h},I(D,x)}function V(D,x,k){return x in D?Object.defineProperty(D,x,{value:k,enumerable:!0,configurable:!0,writable:!0}):D[x]=k,D}var Z=1e-4,he=function(x,k){return Math.abs(x-k)<Z},G=function(D){S(x,D);function x(){var k,h;y(this,x);for(var j=arguments.length,O=new Array(j),Y=0;Y<j;Y++)O[Y]=arguments[Y];return h=m(this,(k=w(x)).call.apply(k,[this].concat(O))),V(_(h),"onResize",function(){h.rafId&&window.cancelAnimationFrame(h.rafId),h.rafId=window.requestAnimationFrame(h.update.bind(_(h)))}),V(_(h),"onToggled",function(A){typeof h.props.onToggled=="function"&&setTimeout(function(){return h.props.onToggled(A)},0)}),V(_(h),"onTruncated",function(){typeof h.props.onTruncated=="function"&&setTimeout(function(){return h.props.onTruncated()},0)}),V(_(h),"onCalculated",function(){typeof h.props.onCalculated=="function"&&setTimeout(function(){return h.props.onCalculated()},0)}),V(_(h),"update",function(){var A=window.getComputedStyle(h.scope),K=[A["font-weight"],A["font-style"],A["font-size"],A["font-family"],A["letter-spacing"]].join(" ");h.canvas.font=K,h.forceUpdate()}),h}return f(x,[{key:"componentDidMount",value:function(){var h=document.createElement("canvas"),j=document.createDocumentFragment(),O=window.getComputedStyle(this.scope),Y=[O["font-weight"],O["font-style"],O["font-size"],O["font-family"]].join(" ");j.appendChild(h),this.canvas=h.getContext("2d"),this.canvas.font=Y,this.forceUpdate(),window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize),this.rafId&&window.cancelAnimationFrame(this.rafId)}},{key:"measureWidth",value:function(h){return this.canvas.measureText(h).width}},{key:"getRenderText",value:function(){var h=this.props;h.containerClassName,h.element;var j=h.line;h.onCalculated,h.onTruncated,h.onToggled;var O=h.text,Y=h.textElement,A=h.textTruncateChild,K=h.truncateText,z=h.maxCalculateTimes,le=u(h,["containerClassName","element","line","onCalculated","onTruncated","onToggled","text","textElement","textTruncateChild","truncateText","maxCalculateTimes"]),te=this.scope.getBoundingClientRect().width;if(te===0)return null;var J=this.measureWidth(O);if(te>J||he(te,J))return this.onToggled(!1),(0,r.createElement)(Y,le,O);var W="";if(A&&typeof A.type=="string"){var X=A.type;(X.indexOf("span")>=0||X.indexOf("a")>=0)&&(W=A.props.children)}for(var T=1,re=O.length,R="",de=0,B=0,Q=j,ae=0,ee=!1,Ce=!1,xe=0,ve=-1,we="",F=0;Q-- >0;){for(we=Q?"":K+(W?" "+W:"");T<=re;)if(R=O.substr(B,T),ae=this.measureWidth(R+we),ae<te)de=O.indexOf(" ",T+1),de===-1?(T+=1,ee=!1):(ee=!0,T=de);else{do{if(F++>=z)break;R=O.substr(B,T),Q||T--,R[R.length-1]===" "&&(R=O.substr(B,T-1)),ee?(ve=R.lastIndexOf(" "),ve>-1?(T=ve,Q&&T++,R=O.substr(B,T)):(T--,R=O.substr(B,T))):(T--,R=O.substr(B,T)),ae=this.measureWidth(R+we)}while((ae>te||he(ae,te))&&R.length>0);B+=T;break}if(T>=re){B=re;break}ee&&!Ce&&O.substr(xe,T).indexOf(" ")===-1&&(Ce=O.substr(xe,T).indexOf(" ")===-1,Q--),xe=T+1}return B===re?(this.onToggled(!1),(0,r.createElement)(Y,le,O)):(this.onTruncated(),this.onToggled(!0),i.default.createElement("span",le,(0,r.createElement)(Y,le,O.substr(0,B)+K+" "),A))}},{key:"render",value:function(){var h=this,j=this.props,O=j.element,Y=j.text,A=j.style,K=A===void 0?{}:A,z=j.containerClassName,le=j.line;j.onCalculated,j.onTruncated,j.onToggled;var te=j.textElement;j.textTruncateChild,j.truncateText,j.maxCalculateTimes;var J=u(j,["element","text","style","containerClassName","line","onCalculated","onTruncated","onToggled","textElement","textTruncateChild","truncateText","maxCalculateTimes"]),W=K.fontWeight,X=K.fontStyle,T=K.fontSize,re=K.fontFamily,R=this.scope&&le?this.getRenderText():(0,r.createElement)(te,J,Y),de={ref:function(Q){h.scope=Q},className:z,style:{overflow:"hidden",fontWeight:W,fontStyle:X,fontSize:T,fontFamily:re}};return this.scope&&this.onCalculated(),(0,r.createElement)(O,de,R)}}]),x}(r.Component);V(G,"propTypes",{containerClassName:l.default.string,element:l.default.string,line:l.default.oneOfType([l.default.number,l.default.bool]),onCalculated:l.default.func,onTruncated:l.default.func,onToggled:l.default.func,text:l.default.string,textElement:l.default.elementType,textTruncateChild:l.default.node,truncateText:l.default.string,maxCalculateTimes:l.default.number}),V(G,"defaultProps",{element:"div",line:1,text:"",textElement:"span",truncateText:"…",maxCalculateTimes:10}),n.default=G,e.exports=n.default})})(or,or.exports);var Ol=or.exports;const jl=on(Ol),Cl=v.ul`
  overflow-y: auto;
  overflow-x: hidden;
  /* overflow: overlay; */
  /* flex-grow: 1; */
  height: 70vh;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-right: -16px;
  }

  &::-webkit-scrollbar {
    width: 8px; /* ширина всей полосы прокрутки */
  }

  &::-webkit-scrollbar-track {
    background: var(--tracking-area-color); /* цвет зоны отслеживания */
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scroll-bar-color); /* цвет бегунка */
    border-radius: 12px; /* округлось бегунка */
    border: 8px solid var(--scroll-bar-color); /* отступ вокруг бегунка */
  }
`,Sl=v.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 154px;
  padding: 14px 20px;
  margin-bottom: 8px;
  /* border-left: 4px solid red; */
  border-radius: 8px;
  background-color: var(--primary-card-background-color);
  /* cursor: pointer; */

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 154px;
    border-radius: 4px 0 0 4px;
    background-color: ${e=>e.$prioritycolor};
  }
`,Tl=v.h4`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 14px;
  /* letter-spacing: -0.02em; */
  color: var(--card-title-color);
`,El=v.div`
  height: 50px;
  overflow: hidden;
`,Nl=v(jl)`
  font-size: 12px;
  line-height: 1.33;
  /* letter-spacing: -0.02em; */
  color: var(--screens-page-tutorial-text-color);
`,Ml=v.div`
  position: relative;
  display: flex;
  margin-top: auto;
  gap: 14px;

  &::before {
    content: "";
    position: absolute;
    top: -14px;
    left: 0;
    width: 290px;
    height: 1px;
    background-color: var(--modal-filter-form-line);
  }
`,tn=v.span`
  display: block;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: var(--screens-page-tutorial-text-color);
`,Al=v.span`
  font-size: 10px;
  letter-spacing: -0.02em;
  color: var(--card-params-value-text-color);

  &::before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 5px;
    background-color: ${e=>e.$prioritycolor};
    vertical-align: middle;
  }
`,Pl=v.span`
  font-size: 10px;
  letter-spacing: -0.02em;
  color: var(--card-params-value-text-color);
`,Ll=v.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: auto;
`,ut=v.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,Me=v.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 1.3px;
  stroke: var(--radio-icons-color);
  transition: stroke var(--hover-params), scale var(--hover-params);

  &:hover {
    stroke: var(--primary-button-color);
    scale: 1.1;
  }

  &.bell {
    cursor: auto;
    animation-timing-function: ease;
    animation: MOVE 0.5s infinite;
    transform-origin: 50% 0;

    @keyframes MOVE {
      0% {
        transform: rotateZ(0);
        stroke: var(--primary-button-color);
      }
      25% {
        transform: rotateZ(-25deg);
      }
      50% {
        transform: rotateZ(25deg);
        stroke: var(--radio-icons-color);
      }
      75% {
        transform: rotateZ(-25deg);
      }
      100% {
        transform: rotateZ(0);
        stroke: var(--primary-button-color);
      }
    }
  }
`,Il=v.div`
  position: absolute;
  top: 40px;
  right: 24px;
  height: auto;
  padding: 15px;
  border: 1px solid var(--shared-input-border-color);
  box-shadow: 0px 4px 16px var(--color-shadow);
  border-radius: 8px;
  background-color: var(--primary-background-color);
  z-index: 1000;
  min-width: 160px;
`,Wl=v.button`
    background-color: transparent;
    color: var(--screens-page-tutorial-text-color);
    font-size:12px;
    border: none;
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    &:hover {
      color: var(--primary-button-color);
      
      & ${Me} {
        stroke: var(--primary-button-color);
        scale: 1.1;
      }
  }
`,Fl=({isOpen:e,onClose:t,onSelectStatus:n,cardId:r,owner:a})=>{const{column:i}=bt(ir);if(!e)return null;const l=c=>{t(),n(c,r,a)};return o.jsx(Il,{children:i===void 0?o.jsx(o.Fragment,{}):i.map(({_id:c,title:d})=>o.jsxs(Wl,{onClick:()=>l(c),children:[d,o.jsx(Me,{children:o.jsx("use",{href:q+"#icon-arrow-circle-broken-right"})})]},c))})},$l=e=>{const t=new Date(e),n=t.getDate(),r=t.getMonth()+1,a=t.getFullYear();return`${n<10?"0":""}${n}/${r<10?"0":""}${r}/${a}`},Rl=e=>{const t=new Date(e),n=new Date,r=t.getDate(),a=t.getMonth(),i=t.getFullYear(),l=n.getDate(),c=n.getMonth(),d=n.getFullYear();if(r<=l&&a<=c&&i<=d)return!0},rn=e=>{switch(e){case"blue":return"#8fa1d0";case"pink":return"#e09cb5";case"green":return"#bedbb0";case"gray":return"rgba(255, 255, 255, 0.3)";default:return"rgba(255, 255, 255, 0.3)"}},Vl=e=>{switch(e){case"blue":return"Low";case"pink":return"Medium";case"green":return"High";case"gray":return"Without priority";default:return"Without priority"}},Yl=({card:e})=>{const[t,n]=E.useState(!1),[r,a]=E.useState(null),i=Le(),{isModalOpen:l,openModal:c,closeModal:d}=Ae(),u=g=>{i(Pa(g))},p=()=>{n(g=>!g)},y=(g,f,m)=>{console.log(g,f),i(La({columnId:g,cardId:f,owner:m}))};return o.jsxs(o.Fragment,{children:[o.jsx(Cl,{children:e&&e.map(({_id:g,title:f,description:m,color:w,deadline:_,owner:S})=>o.jsxs(Sl,{$prioritycolor:rn(w),children:[o.jsx(Tl,{children:f}),o.jsx(El,{children:o.jsx(Nl,{line:2,element:"span",truncateText:"…",text:m})}),o.jsxs(Ml,{children:[o.jsxs("div",{children:[o.jsx(tn,{children:"Priority"}),o.jsx(Al,{$prioritycolor:rn(w),children:Vl(w)})]}),o.jsxs("div",{children:[o.jsx(tn,{children:"Deadline"}),o.jsx(Pl,{children:$l(_)})]}),o.jsxs(Ll,{children:[Rl(_)&&o.jsx("li",{children:o.jsx(ut,{children:o.jsx(Me,{className:"bell",children:o.jsx("use",{href:q+"#icon-bell"})})})}),o.jsxs("li",{children:[o.jsx(ut,{onClick:()=>p(),children:o.jsx(Me,{children:o.jsx("use",{href:q+"#icon-arrow-circle-broken-right"})})}),o.jsx(Fl,{isOpen:t,onClose:p,onSelectStatus:y,cardId:g,owner:S})]}),o.jsx("li",{children:o.jsx(ut,{onClick:()=>{c(),a(g)},children:o.jsx(Me,{children:o.jsx("use",{href:q+"#icon-pencil"})})})}),o.jsx("li",{children:o.jsx(ut,{onClick:()=>u(g),children:o.jsx(Me,{children:o.jsx("use",{href:q+"#icon-trash"})})})})]})]})]},g))}),o.jsx(kl,{modalStateSwapper:d,isModalOpen:l,cardId:r})]})},zl=v.div`
  display: flex;
  align-items: flex-start;
  gap: 34px;

  width: 100%;
  height: 95%;
  overflow-x: auto;
  overflow-y: hidden;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: calc(100vw - 308px);
  }

  &::-webkit-scrollbar {
    width: 8px; /* ширина всей полосы прокрутки */
  }

  &::-webkit-scrollbar-track {
    background: var(--tracking-area-color); /* цвет зоны отслеживания */
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scroll-bar-color); /* цвет бегунка */
    border-radius: 12px; /* округлось бегунка */
    border: 12px solid var(--scroll-bar-color); /* отступ вокруг бегунка */
  }
`,Bl=v.ul`
  display: flex;
  gap: 34px;
  height: 100%;
`,ql=v.li`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 100%;
  /* height: 100%; */

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`,Gl=v.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 56px;
  padding: 0;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--modal-board-text);
  background-color: var(--background-add-column-btn-color);
  cursor: pointer;

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`,Hl=v.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 56px;
  padding: 0;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--shared-button-text-color);
  background-color: var(--primary-button-color);
  cursor: pointer;
  transition: background-color var(--hover-params);

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }

  &:hover {
    background-color: var(--secondary-button-color);
  }
`,Ul=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: var(--add-column-icon-wrap-color);
`,Zl=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: var(--shared-black-plus-button);
`,Kl=v.svg`
  width: 14px;
  height: 14px;
  stroke: var(--add-column-icon-plus-color);
`,Jl=v.svg`
  width: 14px;
  height: 14px;
  stroke: var(--add-card-icon-plus-color);
`,Xl=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 56px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 14px;
  border: none;
  border-radius: 8px;

  background-color: var(--primary-card-background-color);

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`,Ql=v.h3`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--card-title-color);
`,ec=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,nn=v.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,an=v.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 1.3px;
  stroke: var(--radio-icons-color);
  transition: stroke var(--hover-params), scale var(--hover-params);

  &:hover {
    stroke: var(--primary-button-color);
    scale: 1.1;
  }
`,tc=v(lr)`
  position: relative;
  width: 100%;
  height: 49px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: "Poppins";
  letter-spacing: -0.28px;

  background-color: rgb(31, 31, 31);
  border: 1px solid rgb(190, 219, 176);
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  outline: none;
  border-radius: 8px;

  opacity: 0.4;
  transition: all 250ms ease;
  color: rgb(255, 255, 255);

  &::placeholder {
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-family: "Poppins";
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`,rc=v.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 8px;

  font-family: "Poppins";
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.28px;

  color: rgb(22, 22, 22);
  background-color: rgb(190, 219, 176);

  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,nc=wt().shape({title:ge().min("6").required("specify a column name")}),ac=({isModalOpen:e,modalStateSwapper:t})=>{const n=bt(ir),r=Le(),a={title:""},i=({title:l},c)=>{const d=n.result._id;r(Ia({dashboardId:d,title:l})),c.resetForm(),t()};return o.jsx(xt,{modalIsOpen:e,closeModal:t,title:"Add column",maxWidth:"335px",children:o.jsx(cn,{children:o.jsx(Dt,{initialValues:a,validationSchema:nc,onSubmit:i,children:o.jsxs(sn,{children:[o.jsxs(dn,{children:[o.jsx(un,{name:"title",component:"div"}),o.jsx(tc,{type:"text",id:"title",name:"title",placeholder:"title",autoComplete:"off"})]}),o.jsxs(rc,{type:"submit",children:[o.jsx(fn,{children:o.jsx(hn,{children:o.jsx("use",{href:q+"#icon-plus"})})}),"Add"]})]})})})})},oc=v(lr)`
  position: relative;
  width: 100%;
  height: 49px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: "Poppins";
  letter-spacing: -0.28px;

  background-color: rgb(31, 31, 31);
  border: 1px solid rgb(190, 219, 176);
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  outline: none;
  border-radius: 8px;

  opacity: 0.4;
  transition: all 250ms ease;
  color: rgb(255, 255, 255);

  &::placeholder {
    color: rgb(255, 255, 255);
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`,ic=v.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 8px;

  font-family: "Poppins";
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.28px;

  color: rgb(22, 22, 22);
  background-color: rgb(190, 219, 176);

  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,lc=wt().shape({title:ge().min("6").required("specify a column name")}),cc=({isModalOpen:e,modalStateSwapper:t,title:n,columnId:r})=>{const a=Le(),i={title:n||""},l=({title:c},d)=>{a(Wa({columnId:r,title:c})),d.resetForm(),t()};return o.jsx(xt,{modalIsOpen:e,closeModal:t,title:"Edit column",maxWidth:"335px",children:o.jsx(cn,{children:o.jsx(Dt,{initialValues:i,validationSchema:lc,onSubmit:l,children:o.jsxs(sn,{children:[o.jsxs(dn,{children:[o.jsx(un,{name:"title",component:"div"}),o.jsx(oc,{type:"text",id:"title",name:"title",placeholder:"title",autoComplete:"off"})]}),o.jsxs(ic,{type:"submit",children:[o.jsx(fn,{children:o.jsx(hn,{children:o.jsx("use",{href:q+"#icon-plus"})})}),"Add"]})]})})})})};yt.setAppElement("#root");const sc=wt().shape({title:ge().required("Title is required"),description:ge().required("Description is required"),color:ge().required("Color selection is required"),deadline:pn().required("Deadline is required")});function dc({isModalOpen:e,modalStateSwapper:t,columnId:n}){const[r,a]=E.useState(new Date),i=Le(),{isModalOpen:l,openModal:c,closeModal:d}=Ae(),u={overlay:{backgroundColor:"rgb(21, 21, 21, 0.75)"},content:{width:"233px",height:"254px",margin:"auto",padding:0,border:"none",borderRadius:"8px"}},p=(f,{setSubmitting:m,resetForm:w})=>{const _={columnId:n,title:f.title,description:f.description,color:f.color,deadline:r};i(Fa(_)),m(!1),w(),t(),setTimeout(()=>{a(new Date)},1e3)},y=(f,m)=>["Su","Mo","Tu","We","Th","Fr","Sa"][m.getDay()],g=f=>{const m=new Date(f),w=m.getDate(),_=m.toLocaleString("en",{month:"long"});return`${m.toLocaleString("en",{weekday:"long"})}, ${_} ${w}`};return o.jsx(o.Fragment,{children:o.jsxs(xt,{modalIsOpen:e,closeModal:t,title:"Add card",maxWidth:"350px",children:[o.jsx(Dt,{initialValues:{title:"",description:"",color:"gray",deadline:new Date},validationSchema:sc,onSubmit:p,children:({values:f,handleChange:m,handleSubmit:w})=>o.jsxs(ta,{onSubmit:w,children:[o.jsxs(mt,{children:[o.jsx(la,{type:"text",name:"title",onChange:m,value:f.title,placeholder:"Title"}),o.jsx(fa,{name:"title",component:"div",className:"error"})]}),o.jsxs(mt,{children:[o.jsx(ra,{name:"description",onChange:m,value:f.description,placeholder:"Description"}),o.jsx(ha,{name:"description",component:"div",className:"error"})]}),o.jsx(oa,{children:"Label color"}),o.jsxs(ia,{onChange:m,value:f.color,children:[o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"blue",className:"blue",checked:f.color==="blue",onChange:m}),o.jsx(ue,{className:"blue"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"pink",className:"pink",checked:f.color==="pink",onChange:m}),o.jsx(ue,{className:"pink"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"green",className:"green",checked:f.color==="green",onChange:m}),o.jsx(ue,{className:"green"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"gray",className:"gray",checked:f.color==="gray",onChange:m}),o.jsx(ue,{className:"gray"})]})]}),o.jsx(aa,{children:"Deadline"}),o.jsxs(na,{onClick:c,children:[o.jsx(ca,{children:g(r)}),o.jsx(va,{children:o.jsx("use",{href:q+"#icon-chevron-down"})})]}),o.jsxs(ua,{type:"submit",children:[o.jsx(sa,{children:o.jsx(da,{children:o.jsx("use",{href:q+"#icon-plus"})})}),"Add"]})]})}),o.jsx(yt,{isOpen:l,onRequestClose:d,style:u,closeTimeoutMS:750,children:o.jsx(ea,{formatShortWeekday:y,selectedDate:new Date,onChange:a,onClickDay:d,minDate:new Date})})]})})}const uc=()=>{const{isModalOpen:e,openModal:t,closeModal:n}=Ae(),{isModalOpen:r,openModal:a,closeModal:i}=Ae(),{isModalOpen:l,openModal:c,closeModal:d}=Ae(),{column:u}=bt(ir),{state:p}=ln(),y=Le(),[g,f]=E.useState(null);E.useEffect(()=>{u===void 0&&y($a(p.id))},[u,y,p==null?void 0:p.id]);const m=w=>{y(Ra(w))};return o.jsxs(zl,{children:[o.jsx(Bl,{children:u===void 0?o.jsx(o.Fragment,{}):u.map(({_id:w,title:_,card:S})=>o.jsxs(ql,{children:[o.jsx("div",{children:o.jsxs(Xl,{children:[o.jsx(Ql,{children:_}),o.jsxs(ec,{children:[o.jsx(nn,{onClick:()=>{a(),f(w)},children:o.jsx(an,{children:o.jsx("use",{href:q+"#icon-pencil"})})}),o.jsx(nn,{onClick:()=>m(w),children:o.jsx(an,{children:o.jsx("use",{href:q+"#icon-trash"})})})]})]})}),o.jsx(Yl,{card:S}),o.jsx("div",{children:o.jsxs(Hl,{onClick:()=>{c(),f(w)},children:[o.jsx(Zl,{children:o.jsx(Jl,{children:o.jsx("use",{href:q+"#icon-plus"})})}),"Add Card"]})})]},w))}),o.jsxs(Gl,{onClick:t,children:[o.jsx(Ul,{children:o.jsx(Kl,{children:o.jsx("use",{href:q+"#icon-plus"})})}),"Add column"]}),o.jsx(Ir,{onClick:n,className:e===!0&&"active"}),o.jsx(ac,{modalStateSwapper:n,isModalOpen:e}),o.jsx(Ir,{onClick:i,className:r===!0&&"active"}),o.jsx(cc,{modalStateSwapper:i,isModalOpen:r,columnId:g}),o.jsx(dc,{modalStateSwapper:d,isModalOpen:l,columnId:g})]})},fc=v.div`
  flex-grow: 1;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: var(--secondary-background-color);

  @media (min-width: 768px) {
    padding-top: 20px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1440px) {
    padding-top: 14px;
    padding-left: 24px;
    padding-right: 24px;
  }
`,hc=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`,vc=v.p`
  width: 335px;
  text-align: center;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: var(--welcome-message-text-color);

  @media (min-width: 768px) {
    width: 486px;
    font-size: 14px;
    line-height: 1.29;
  }
`,pc=v.span`
  color: var(--welcome-message-text-accent-color);
`,xc=()=>{const[e,t]=E.useState(!1),[n,r]=E.useState(""),a=E.useRef(!0),{boardName:i}=Va(),l=Ya(),c=ln(),d=bt(Ha);return E.useEffect(()=>{r(i)},[c.pathname,i]),E.useEffect(()=>{if(!(a.current!==!0&&i!==n)){if(d.length>0&&!i){t(!0);const u=d[d.length-1];r(u.title),l(`/home/${u.title}`,{replace:!0,state:{id:u._id}}),t(!1)}a.current=!1}},[d,l,i,n]),o.jsx(fc,{children:e?o.jsx("div",{children:o.jsx(za,{})}):i===void 0&&o.jsx(hc,{children:o.jsxs(vc,{children:["Before starting your project, it is essential"," ",o.jsx(pc,{children:"to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})||i!==void 0&&o.jsxs(o.Fragment,{children:[o.jsx(co,{boardName:i}),o.jsx(uc,{})]})})};export{xc as default};
