import{u as v,q as on,j as o,r as E,t as ln,v as nt,R as g,w as gt,a as Ie,x as Pa,b as bt,y as Ia,z as La,A as Wa,D as Fa,E as $a,F as cn,i as Ra,G as Va,p as Ya,H as za,I as Ba}from"./index-9bmQuCQ1.js";import{i as G}from"./icons-iplVKqot.js";import{g as qa,w as Ga,h as s,i as yt,u as Ae,S as xt,p as Ha,s as ir,a as sn,M as dn,F as un,E as fn,d as hn,P as vn,O as Lr,e as Ua}from"./HomePage.styled-R11Gd_oX.js";import{b as lr,E as pn,c as wt,a as ge,d as mn,F as Dt}from"./index.esm-Txe857km.js";const Za=v.div`
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
  `,Ka=v.div`
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
`,Ja=v.div`
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
`,Xa=v.p`
font-weight: 500;
color: var(--modal-board-text)
`,Qa=v.button`
background-color: transparent;
color: var(--screens-page-tutorial-text-color);
font-size:12px;
text-decoration: underline;
border: none;
`,eo=v.div`
display: flex; justify-content: space-between;
`,to=v.div`
width: 252px; 
height: 1px; 
background-color: var(--modal-filter-form-line);
margin-bottom: 14px;
`,ro=v.h2`
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
`,no=({isOpen:e,onClose:t})=>{const[n,r]=on(),a=n.get("priority");if(!e)return null;const i=()=>{r({priority:"all"}),t()},l=c=>{const d=c.target.value;r({priority:d}),t()};return o.jsx(Ka,{children:o.jsxs(Za,{children:[o.jsx(qa,{onClick:t,children:"✕"}),o.jsx(ro,{children:"Filters"}),o.jsx(to,{}),o.jsxs(eo,{children:[o.jsx(Xa,{children:"Label color"}),o.jsx(Qa,{onClick:i,children:"Show all"})]}),o.jsxs(Ja,{children:[o.jsx(ot,{children:o.jsxs(it,{children:[o.jsx(lt,{type:"radio",name:"radio",value:"without",className:"gray",checked:a==="gray",onChange:l}),o.jsx(Ve,{className:"gray"}),o.jsxs(at,{className:"gray",children:[" ","Without priority"," "]})]})}),o.jsx(ot,{children:o.jsxs(it,{children:[o.jsx(lt,{type:"radio",name:"radio",value:"low",className:"blue",checked:a==="blue",onChange:l}),o.jsx(Ve,{className:"blue"}),o.jsx(at,{children:" Low "})]})}),o.jsx(ot,{children:o.jsxs(it,{children:[o.jsx(lt,{type:"radio",name:"radio",value:"medium",className:"pink",checked:a==="pink",onChange:l}),o.jsx(Ve,{className:"pink"}),o.jsx(at,{children:" Medium "})]})}),o.jsx(ot,{children:o.jsxs(it,{children:[o.jsx(lt,{type:"radio",name:"radio",value:"high",className:"green",checked:a==="green",onChange:l}),o.jsx(Ve,{className:"green"}),o.jsx(at,{children:" High "})]})})]})]})})},ao=v.button`
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
`,oo=v.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 1.5px;
  stroke: var(--filter-text-and-icon-color);
`,io=()=>{const[e,t]=E.useState(!1),n=()=>{t(r=>!r)};return o.jsxs(o.Fragment,{children:[o.jsxs(ao,{onClick:()=>n(),children:[o.jsx(oo,{children:o.jsx("use",{href:G+"#icon-filter"})}),"Filters"]}),o.jsx(no,{isOpen:e,onClose:n})]})},lo=v.div`
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
`,co=v.h2`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--card-title-color);
`,so=({boardName:e})=>o.jsxs(lo,{children:[o.jsx(co,{children:e}),o.jsx(io,{})]});var uo="Expected a function",gn="__lodash_hash_undefined__",fo="[object Function]",ho="[object GeneratorFunction]",vo=/[\\^$.*+?()[\]{}|]/g,po=/^\[object .+?Constructor\]$/,mo=typeof nt=="object"&&nt&&nt.Object===Object&&nt,go=typeof self=="object"&&self&&self.Object===Object&&self,bn=mo||go||Function("return this")();function bo(e,t){return e==null?void 0:e[t]}function yo(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}var xo=Array.prototype,wo=Function.prototype,yn=Object.prototype,Yt=bn["__core-js_shared__"],Wr=function(){var e=/[^.]+$/.exec(Yt&&Yt.keys&&Yt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),xn=wo.toString,cr=yn.hasOwnProperty,Do=yn.toString,_o=RegExp("^"+xn.call(cr).replace(vo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ko=xo.splice,Oo=wn(bn,"Map"),ze=wn(Object,"create");function _e(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function jo(){this.__data__=ze?ze(null):{}}function Co(e){return this.has(e)&&delete this.__data__[e]}function So(e){var t=this.__data__;if(ze){var n=t[e];return n===gn?void 0:n}return cr.call(t,e)?t[e]:void 0}function To(e){var t=this.__data__;return ze?t[e]!==void 0:cr.call(t,e)}function Eo(e,t){var n=this.__data__;return n[e]=ze&&t===void 0?gn:t,this}_e.prototype.clear=jo;_e.prototype.delete=Co;_e.prototype.get=So;_e.prototype.has=To;_e.prototype.set=Eo;function Le(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function No(){this.__data__=[]}function Mo(e){var t=this.__data__,n=_t(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():ko.call(t,n,1),!0}function Ao(e){var t=this.__data__,n=_t(t,e);return n<0?void 0:t[n][1]}function Po(e){return _t(this.__data__,e)>-1}function Io(e,t){var n=this.__data__,r=_t(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}Le.prototype.clear=No;Le.prototype.delete=Mo;Le.prototype.get=Ao;Le.prototype.has=Po;Le.prototype.set=Io;function ke(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Lo(){this.__data__={hash:new _e,map:new(Oo||Le),string:new _e}}function Wo(e){return kt(this,e).delete(e)}function Fo(e){return kt(this,e).get(e)}function $o(e){return kt(this,e).has(e)}function Ro(e,t){return kt(this,e).set(e,t),this}ke.prototype.clear=Lo;ke.prototype.delete=Wo;ke.prototype.get=Fo;ke.prototype.has=$o;ke.prototype.set=Ro;function _t(e,t){for(var n=e.length;n--;)if(qo(e[n][0],t))return n;return-1}function Vo(e){if(!Dn(e)||zo(e))return!1;var t=Go(e)||yo(e)?_o:po;return t.test(Bo(e))}function kt(e,t){var n=e.__data__;return Yo(t)?n[typeof t=="string"?"string":"hash"]:n.map}function wn(e,t){var n=bo(e,t);return Vo(n)?n:void 0}function Yo(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function zo(e){return!!Wr&&Wr in e}function Bo(e){if(e!=null){try{return xn.call(e)}catch{}try{return e+""}catch{}}return""}function sr(e,t){if(typeof e!="function"||t&&typeof t!="function")throw new TypeError(uo);var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var l=e.apply(this,r);return n.cache=i.set(a,l),l};return n.cache=new(sr.Cache||ke),n}sr.Cache=ke;function qo(e,t){return e===t||e!==e&&t!==t}function Go(e){var t=Dn(e)?Do.call(e):"";return t==fo||t==ho}function Dn(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}var Ho=sr;const _n=ln(Ho);function kn(e){return JSON.stringify(e)}function Uo(e){return typeof e=="string"}function Zo(e,t,n){return n.indexOf(e)===t}function Ko(e){return e.toLowerCase()===e}function Fr(e){return e.indexOf(",")===-1?e:e.split(",")}function Ut(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var t=e.split(".")[0],n=t===void 0?"":t;return Ut(n)}if(e.indexOf("@")!==-1){var r=e.split("@")[0],n=r===void 0?"":r;return Ut(n)}if(e.indexOf("-")===-1||!Ko(e))return e;var a=e.split("-"),i=a[0],l=a[1],c=l===void 0?"":l;return"".concat(i,"-").concat(c.toUpperCase())}function Jo(e){var t=e===void 0?{}:e,n=t.useFallbackLocale,r=n===void 0?!0:n,a=t.fallbackLocale,i=a===void 0?"en-US":a,l=[];if(typeof navigator<"u"){for(var c=navigator.languages||[],d=[],u=0,p=c;u<p.length;u++){var b=p[u];d=d.concat(Fr(b))}var x=navigator.language,m=x&&Fr(x);l=l.concat(d,m)}return r&&l.push(i),l.filter(Uo).map(Ut).filter(Zo)}var Xo=_n(Jo,kn);function Qo(e){return Xo(e)[0]||null}var On=_n(Qo,kn);function he(e,t,n){return function(a,i){i===void 0&&(i=n);var l=e(a)+i;return t(l)}}function Ze(e){return function(n){return new Date(e(n).getTime()-1)}}function Ke(e,t){return function(r){return[e(r),t(r)]}}function P(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;var t=parseInt(e,10);if(typeof e=="string"&&!isNaN(t))return t;throw new Error("Failed to get year from date: ".concat(e,"."))}function be(e){if(e instanceof Date)return e.getMonth();throw new Error("Failed to get month from date: ".concat(e,"."))}function Ot(e){if(e instanceof Date)return e.getDate();throw new Error("Failed to get year from date: ".concat(e,"."))}function We(e){var t=P(e),n=t+(-t+1)%100,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}var ei=he(P,We,-100),jn=he(P,We,100),dr=Ze(jn),ti=he(P,dr,-100),Cn=Ke(We,dr);function ye(e){var t=P(e),n=t+(-t+1)%10,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}var Sn=he(P,ye,-10),ur=he(P,ye,10),jt=Ze(ur),Tn=he(P,jt,-10),En=Ke(ye,jt);function Fe(e){var t=P(e),n=new Date;return n.setFullYear(t,0,1),n.setHours(0,0,0,0),n}var Nn=he(P,Fe,-1),fr=he(P,Fe,1),Ct=Ze(fr),Mn=he(P,Ct,-1),ri=Ke(Fe,Ct);function hr(e,t){return function(r,a){a===void 0&&(a=t);var i=P(r),l=be(r)+a,c=new Date;return c.setFullYear(i,l,1),c.setHours(0,0,0,0),e(c)}}function Oe(e){var t=P(e),n=be(e),r=new Date;return r.setFullYear(t,n,1),r.setHours(0,0,0,0),r}var An=hr(Oe,-1),vr=hr(Oe,1),Je=Ze(vr),Pn=hr(Je,-1),ni=Ke(Oe,Je);function ai(e,t){return function(r,a){a===void 0&&(a=t);var i=P(r),l=be(r),c=Ot(r)+a,d=new Date;return d.setFullYear(i,l,c),d.setHours(0,0,0,0),e(d)}}function Xe(e){var t=P(e),n=be(e),r=Ot(e),a=new Date;return a.setFullYear(t,n,r),a.setHours(0,0,0,0),a}var oi=ai(Xe,1),pr=Ze(oi),ii=Ke(Xe,pr);function In(e){return Ot(Je(e))}var Re,A={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},Te={ARABIC:"Arabic",HEBREW:"Hebrew",ISO_8601:"ISO 8601",US:"US"},li=(Re={},Re[A.GREGORY]=["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],Re[A.HEBREW]=["he","he-IL"],Re[A.ISLAMIC]=["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"],Re),mr=[0,1,2,3,4,5,6],zt=new Map;function ci(e){return function(n,r){var a=n||On();zt.has(a)||zt.set(a,new Map);var i=zt.get(a);return i.has(e)||i.set(e,new Intl.DateTimeFormat(a||void 0,e).format),i.get(e)(r)}}function si(e){var t=new Date(e);return new Date(t.setHours(12))}function je(e){return function(t,n){return ci(e)(t,si(n))}}var di={day:"numeric"},ui={day:"numeric",month:"long",year:"numeric"},fi={month:"long"},hi={month:"long",year:"numeric"},vi={weekday:"short"},pi={weekday:"long"},mi={year:"numeric"},gi=je(di),bi=je(ui),yi=je(fi),Ln=je(hi),xi=je(vi),wi=je(pi),St=je(mi),Di=mr[0],_i=mr[5],$r=mr[6];function Be(e,t){t===void 0&&(t=A.ISO_8601);var n=e.getDay();switch(t){case A.ISO_8601:return(n+6)%7;case A.ISLAMIC:return(n+1)%7;case A.HEBREW:case A.GREGORY:return n;default:throw new Error("Unsupported calendar type.")}}function ki(e){var t=We(e);return P(t)}function Oi(e){var t=ye(e);return P(t)}function Zt(e,t){t===void 0&&(t=A.ISO_8601);var n=P(e),r=be(e),a=e.getDate()-Be(e,t);return new Date(n,r,a)}function ji(e,t){t===void 0&&(t=A.ISO_8601);var n=t===A.GREGORY?A.GREGORY:A.ISO_8601,r=Zt(e,t),a=P(e)+1,i,l;do i=new Date(a,0,n===A.ISO_8601?4:1),l=Zt(i,t),a-=1;while(e<l);return Math.round((r.getTime()-l.getTime())/(864e5*7))+1}function De(e,t){switch(e){case"century":return We(t);case"decade":return ye(t);case"year":return Fe(t);case"month":return Oe(t);case"day":return Xe(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ci(e,t){switch(e){case"century":return ei(t);case"decade":return Sn(t);case"year":return Nn(t);case"month":return An(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Wn(e,t){switch(e){case"century":return jn(t);case"decade":return ur(t);case"year":return fr(t);case"month":return vr(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Si(e,t){switch(e){case"decade":return Sn(t,-100);case"year":return Nn(t,-10);case"month":return An(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ti(e,t){switch(e){case"decade":return ur(t,100);case"year":return fr(t,10);case"month":return vr(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Fn(e,t){switch(e){case"century":return dr(t);case"decade":return jt(t);case"year":return Ct(t);case"month":return Je(t);case"day":return pr(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ei(e,t){switch(e){case"century":return ti(t);case"decade":return Tn(t);case"year":return Mn(t);case"month":return Pn(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ni(e,t){switch(e){case"decade":return Tn(t,-100);case"year":return Mn(t,-10);case"month":return Pn(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Rr(e,t){switch(e){case"century":return Cn(t);case"decade":return En(t);case"year":return ri(t);case"month":return ni(t);case"day":return ii(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Mi(e,t,n){var r=[t,n].sort(function(a,i){return a.getTime()-i.getTime()});return[De(e,r[0]),Fn(e,r[1])]}function $n(e,t,n){return t===void 0&&(t=St),n.map(function(r){return t(e,r)}).join(" – ")}function Ai(e,t,n){return $n(e,t,Cn(n))}function Rn(e,t,n){return $n(e,t,En(n))}function Pi(e){return e.getDay()===new Date().getDay()}function Vn(e,t){t===void 0&&(t=A.ISO_8601);var n=e.getDay();switch(t){case A.ISLAMIC:case A.HEBREW:return n===_i||n===$r;case A.ISO_8601:case A.GREGORY:return n===$r||n===Di;default:throw new Error("Unsupported calendar type.")}}var de="react-calendar__navigation";function Ii(e){var t=e.activeStartDate,n=e.drillUp,r=e.formatMonthYear,a=r===void 0?Ln:r,i=e.formatYear,l=i===void 0?St:i,c=e.locale,d=e.maxDate,u=e.minDate,p=e.navigationAriaLabel,b=p===void 0?"":p,x=e.navigationAriaLive,m=e.navigationLabel,w=e.next2AriaLabel,O=w===void 0?"":w,C=e.next2Label,k=C===void 0?"»":C,S=e.nextAriaLabel,M=S===void 0?"":S,V=e.nextLabel,ae=V===void 0?"›":V,H=e.prev2AriaLabel,y=H===void 0?"":H,h=e.prev2Label,D=h===void 0?"«":h,f=e.prevAriaLabel,j=f===void 0?"":f,_=e.prevLabel,Y=_===void 0?"‹":_,I=e.setActiveStartDate,K=e.showDoubleView,B=e.view,ce=e.views,te=ce.indexOf(B)>0,J=B!=="century",F=Ci(B,t),X=J?Si(B,t):void 0,N=Wn(B,t),re=J?Ti(B,t):void 0,z=function(){if(F.getFullYear()<0)return!0;var $=Ei(B,t);return u&&u>=$}(),ue=J&&function(){if(X.getFullYear()<0)return!0;var $=Ni(B,t);return u&&u>=$}(),q=d&&d<N,Q=J&&d&&d<re;function oe(){I(F,"prev")}function ee(){I(X,"prev2")}function Ce(){I(N,"next")}function xe(){I(re,"next2")}function ve($){var $e=function(){switch(B){case"century":return Ai(c,l,$);case"decade":return Rn(c,l,$);case"year":return l(c,$);case"month":return a(c,$);default:throw new Error("Invalid view: ".concat(B,"."))}}();return m?m({date:$,label:$e,locale:c||On()||void 0,view:B}):$e}function we(){var $="".concat(de,"__label");return g.createElement("button",{"aria-label":b,"aria-live":x,className:$,disabled:!te,onClick:n,style:{flexGrow:1},type:"button"},g.createElement("span",{className:"".concat($,"__labelText ").concat($,"__labelText--from")},ve(t)),K?g.createElement(g.Fragment,null,g.createElement("span",{className:"".concat($,"__divider")}," – "),g.createElement("span",{className:"".concat($,"__labelText ").concat($,"__labelText--to")},ve(N))):null)}return g.createElement("div",{className:de},D!==null&&J?g.createElement("button",{"aria-label":y,className:"".concat(de,"__arrow ").concat(de,"__prev2-button"),disabled:ue,onClick:ee,type:"button"},D):null,Y!==null&&g.createElement("button",{"aria-label":j,className:"".concat(de,"__arrow ").concat(de,"__prev-button"),disabled:z,onClick:oe,type:"button"},Y),we(),ae!==null&&g.createElement("button",{"aria-label":M,className:"".concat(de,"__arrow ").concat(de,"__next-button"),disabled:q,onClick:Ce,type:"button"},ae),k!==null&&J?g.createElement("button",{"aria-label":O,className:"".concat(de,"__arrow ").concat(de,"__next2-button"),disabled:Q,onClick:xe,type:"button"},k):null)}var Ee=function(){return Ee=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ee.apply(this,arguments)},Li=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function Vr(e){return"".concat(e,"%")}function gr(e){var t=e.children,n=e.className,r=e.count,a=e.direction,i=e.offset,l=e.style,c=e.wrap,d=Li(e,["children","className","count","direction","offset","style","wrap"]);return g.createElement("div",Ee({className:n,style:Ee({display:"flex",flexDirection:a,flexWrap:c?"wrap":"nowrap"},l)},d),g.Children.map(t,function(u,p){var b=i&&p===0?Vr(100*i/r):null;return g.cloneElement(u,Ee(Ee({},u.props),{style:{flexBasis:Vr(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:b,marginInlineStart:b,marginInlineEnd:0}}))}))}var Se;function Wi(e,t,n){return t&&t>e?t:n&&n<e?n:e}function qe(e,t){return t[0]<=e&&t[1]>=e}function Fi(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function Yn(e,t){return qe(e[0],t)||qe(e[1],t)}function Yr(e,t,n){var r=Yn(t,e),a=[];if(r){a.push(n);var i=qe(e[0],t),l=qe(e[1],t);i&&a.push("".concat(n,"Start")),l&&a.push("".concat(n,"End")),i&&l&&a.push("".concat(n,"BothEnds"))}return a}function $i(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function Ri(e){if(!e)throw new Error("args is required");var t=e.value,n=e.date,r=e.hover,a="react-calendar__tile",i=[a];if(!n)return i;var l=new Date,c=function(){if(Array.isArray(n))return n;var m=e.dateType;if(!m)throw new Error("dateType is required when date is not an array of two dates");return Rr(m,n)}();if(qe(l,c)&&i.push("".concat(a,"--now")),!t||!$i(t))return i;var d=function(){if(Array.isArray(t))return t;var m=e.valueType;if(!m)throw new Error("valueType is required when value is not an array of two dates");return Rr(m,t)}();Fi(d,c)?i.push("".concat(a,"--active")):Yn(d,c)&&i.push("".concat(a,"--hasActive"));var u=Yr(d,c,"".concat(a,"--range"));i.push.apply(i,u);var p=Array.isArray(t)?t:[t];if(r&&p.length===1){var b=r>d[0]?[d[0],r]:[r,d[0]],x=Yr(b,c,"".concat(a,"--hover"));i.push.apply(i,x)}return i}var Vi=(Se={},Se[Te.ARABIC]=A.ISLAMIC,Se[Te.HEBREW]=A.HEBREW,Se[Te.ISO_8601]=A.ISO_8601,Se[Te.US]=A.GREGORY,Se);function Yi(e){return e!==void 0&&e in Te}var zr=!1;function Tt(e){if(Yi(e)){var t=Vi[e];return Ga(zr,'Specifying calendarType="'.concat(e,'" is deprecated. Use calendarType="').concat(t,'" instead.')),zr=!0,t}return e}function Et(e){for(var t=e.className,n=e.count,r=n===void 0?3:n,a=e.dateTransform,i=e.dateType,l=e.end,c=e.hover,d=e.offset,u=e.renderTile,p=e.start,b=e.step,x=b===void 0?1:b,m=e.value,w=e.valueType,O=[],C=p;C<=l;C+=x){var k=a(C);O.push(u({classes:Ri({date:k,dateType:i,hover:c,value:m,valueType:w}),date:k}))}return g.createElement(gr,{className:t,count:r,offset:d,wrap:!0},O)}function Nt(e){var t=e.activeStartDate,n=e.children,r=e.classes,a=e.date,i=e.formatAbbr,l=e.locale,c=e.maxDate,d=e.maxDateTransform,u=e.minDate,p=e.minDateTransform,b=e.onClick,x=e.onMouseOver,m=e.style,w=e.tileClassName,O=e.tileContent,C=e.tileDisabled,k=e.view,S=E.useMemo(function(){var V={activeStartDate:t,date:a,view:k};return typeof w=="function"?w(V):w},[t,a,w,k]),M=E.useMemo(function(){var V={activeStartDate:t,date:a,view:k};return typeof O=="function"?O(V):O},[t,a,O,k]);return g.createElement("button",{className:gt(r,S),disabled:u&&p(u)>a||c&&d(c)<a||C&&C({activeStartDate:t,date:a,view:k}),onClick:b?function(V){return b(a,V)}:void 0,onFocus:x?function(){return x(a)}:void 0,onMouseOver:x?function(){return x(a)}:void 0,style:m,type:"button"},i?g.createElement("abbr",{"aria-label":i(l,a)},n):n,M)}var Kt=function(){return Kt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Kt.apply(this,arguments)},zi=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},Bt="react-calendar__century-view__decades__decade";function Bi(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentCentury,a=e.formatYear,i=a===void 0?St:a,l=zi(e,["classes","currentCentury","formatYear"]),c=l.date,d=l.locale,u=[];return n&&u.push.apply(u,n),Bt&&u.push(Bt),We(c).getFullYear()!==r&&u.push("".concat(Bt,"--neighboringCentury")),g.createElement(Nt,Kt({},l,{classes:u,maxDateTransform:jt,minDateTransform:ye,view:"century"}),Rn(d,i,c))}var Jt=function(){return Jt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Jt.apply(this,arguments)},Br=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function qi(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringCentury,a=e.value,i=e.valueType,l=Br(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),c=ki(t),d=c+(r?119:99);return g.createElement(Et,{className:"react-calendar__century-view__decades",dateTransform:ye,dateType:"decade",end:d,hover:n,renderTile:function(u){var p=u.date,b=Br(u,["date"]);return g.createElement(Bi,Jt({key:p.getTime()},l,b,{activeStartDate:t,currentCentury:c,date:p}))},start:c,step:10,value:a,valueType:i})}var qr=function(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))},Gi=Object.values(A),Hi=Object.values(Te),Xt=["century","decade","year","month"],zn=s.oneOf(qr(qr([],Gi,!0),Hi,!0)),ft=s.oneOfType([s.string,s.arrayOf(s.string)]),br=function(t,n,r){var a=t,i=n,l=a[i];if(!l)return null;if(!(l instanceof Date))return new Error("Invalid prop `".concat(n,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, expected instance of `Date`."));var c=t.maxDate;return c&&l>c?new Error("Invalid prop `".concat(n,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, minDate cannot be larger than maxDate.")):null},yr=function(t,n,r){var a=t,i=n,l=a[i];if(!l)return null;if(!(l instanceof Date))return new Error("Invalid prop `".concat(n,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, expected instance of `Date`."));var c=t.minDate;return c&&l<c?new Error("Invalid prop `".concat(n,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, maxDate cannot be smaller than minDate.")):null},Ui=s.oneOfType([s.func,s.exact({current:s.any})]),Zi=s.arrayOf(s.oneOfType([s.instanceOf(Date),s.oneOf([null])]).isRequired),Ki=s.oneOfType([s.instanceOf(Date),s.oneOf([null]),Zi]);s.arrayOf(s.oneOf(Xt));var ht=function(t,n,r){var a=t,i=n,l=a[i];return l!==void 0&&(typeof l!="string"||Xt.indexOf(l)===-1)?new Error("Invalid prop `".concat(n,"` of value `").concat(l,"` supplied to `").concat(r,"`, expected one of [").concat(Xt.map(function(c){return'"'.concat(c,'"')}).join(", "),"].")):null};ht.isRequired=function(t,n,r,a,i){var l=t,c=n,d=l[c];return d?ht(t,n,r):new Error("The prop `".concat(n,"` is marked as required in `").concat(r,"`, but its value is `").concat(d,"`."))};var Ji=function(e){return s.arrayOf(e)},Mt={activeStartDate:s.instanceOf(Date).isRequired,hover:s.instanceOf(Date),locale:s.string,maxDate:yr,minDate:br,onClick:s.func,onMouseOver:s.func,tileClassName:s.oneOfType([s.func,ft]),tileContent:s.oneOfType([s.func,s.node]),value:Ki,valueType:s.oneOf(["century","decade","year","month","day"]).isRequired};s.instanceOf(Date).isRequired,s.arrayOf(s.string.isRequired).isRequired,s.instanceOf(Date).isRequired,s.string,s.func,s.func,s.objectOf(s.oneOfType([s.string,s.number])),s.oneOfType([s.func,ft]),s.oneOfType([s.func,s.node]),s.func;var Ge=function(){return Ge=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ge.apply(this,arguments)},Bn=function(t){function n(){return g.createElement(qi,Ge({},t))}return g.createElement("div",{className:"react-calendar__century-view"},n())};Bn.propTypes=Ge(Ge({},Mt),{showNeighboringCentury:s.bool});const Xi=Bn;var Qt=function(){return Qt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Qt.apply(this,arguments)},Qi=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},qt="react-calendar__decade-view__years__year";function el(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentDecade,a=e.formatYear,i=a===void 0?St:a,l=Qi(e,["classes","currentDecade","formatYear"]),c=l.date,d=l.locale,u=[];return n&&u.push.apply(u,n),qt&&u.push(qt),ye(c).getFullYear()!==r&&u.push("".concat(qt,"--neighboringDecade")),g.createElement(Nt,Qt({},l,{classes:u,maxDateTransform:Ct,minDateTransform:Fe,view:"decade"}),i(d,c))}var er=function(){return er=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},er.apply(this,arguments)},Gr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function tl(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringDecade,a=e.value,i=e.valueType,l=Gr(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),c=Oi(t),d=c+(r?11:9);return g.createElement(Et,{className:"react-calendar__decade-view__years",dateTransform:Fe,dateType:"year",end:d,hover:n,renderTile:function(u){var p=u.date,b=Gr(u,["date"]);return g.createElement(el,er({key:p.getTime()},l,b,{activeStartDate:t,currentDecade:c,date:p}))},start:c,value:a,valueType:i})}var He=function(){return He=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},He.apply(this,arguments)},qn=function(t){function n(){return g.createElement(tl,He({},t))}return g.createElement("div",{className:"react-calendar__decade-view"},n())};qn.propTypes=He(He({},Mt),{showNeighboringDecade:s.bool});const rl=qn;var tr=function(){return tr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},tr.apply(this,arguments)},nl=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},Hr=function(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))},al="react-calendar__year-view__months__month";function ol(e){var t=e.classes,n=t===void 0?[]:t,r=e.formatMonth,a=r===void 0?yi:r,i=e.formatMonthYear,l=i===void 0?Ln:i,c=nl(e,["classes","formatMonth","formatMonthYear"]),d=c.date,u=c.locale;return g.createElement(Nt,tr({},c,{classes:Hr(Hr([],n,!0),[al],!1),formatAbbr:l,maxDateTransform:Je,minDateTransform:Oe,view:"year"}),a(u,d))}var rr=function(){return rr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},rr.apply(this,arguments)},Ur=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function il(e){var t=e.activeStartDate,n=e.hover,r=e.value,a=e.valueType,i=Ur(e,["activeStartDate","hover","value","valueType"]),l=0,c=11,d=P(t);return g.createElement(Et,{className:"react-calendar__year-view__months",dateTransform:function(u){var p=new Date;return p.setFullYear(d,u,1),Oe(p)},dateType:"month",end:c,hover:n,renderTile:function(u){var p=u.date,b=Ur(u,["date"]);return g.createElement(ol,rr({key:p.getTime()},i,b,{activeStartDate:t,date:p}))},start:l,value:r,valueType:a})}var vt=function(){return vt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},vt.apply(this,arguments)},Gn=function(t){function n(){return g.createElement(il,vt({},t))}return g.createElement("div",{className:"react-calendar__year-view"},n())};Gn.propTypes=vt({},Mt);const ll=Gn;var nr=function(){return nr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},nr.apply(this,arguments)},cl=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},ct="react-calendar__month-view__days__day";function sl(e){var t=e.calendarType,n=e.classes,r=n===void 0?[]:n,a=e.currentMonthIndex,i=e.formatDay,l=i===void 0?gi:i,c=e.formatLongDate,d=c===void 0?bi:c,u=cl(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),p=Tt(t),b=u.date,x=u.locale,m=[];return r&&m.push.apply(m,r),ct&&m.push(ct),Vn(b,p)&&m.push("".concat(ct,"--weekend")),b.getMonth()!==a&&m.push("".concat(ct,"--neighboringMonth")),g.createElement(Nt,nr({},u,{classes:m,formatAbbr:d,maxDateTransform:pr,minDateTransform:Xe,view:"month"}),l(x,b))}var ar=function(){return ar=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ar.apply(this,arguments)},Zr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function dl(e){var t=e.activeStartDate,n=e.calendarType,r=e.hover,a=e.showFixedNumberOfWeeks,i=e.showNeighboringMonth,l=e.value,c=e.valueType,d=Zr(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),u=Tt(n),p=P(t),b=be(t),x=a||i,m=Be(t,u),w=x?0:m,O=(x?-m:0)+1,C=function(){if(a)return O+6*7-1;var k=In(t);if(i){var S=new Date;S.setFullYear(p,b,k),S.setHours(0,0,0,0);var M=7-Be(S,u)-1;return k+M}return k}();return g.createElement(Et,{className:"react-calendar__month-view__days",count:7,dateTransform:function(k){var S=new Date;return S.setFullYear(p,b,k),Xe(S)},dateType:"day",hover:r,end:C,renderTile:function(k){var S=k.date,M=Zr(k,["date"]);return g.createElement(sl,ar({key:S.getTime()},d,M,{activeStartDate:t,calendarType:n,currentMonthIndex:b,date:S}))},offset:w,start:O,value:l,valueType:c})}var Hn="react-calendar__month-view__weekdays",Gt="".concat(Hn,"__weekday");function ul(e){for(var t=e.calendarType,n=e.formatShortWeekday,r=n===void 0?xi:n,a=e.formatWeekday,i=a===void 0?wi:a,l=e.locale,c=e.onMouseLeave,d=Tt(t),u=new Date,p=Oe(u),b=P(p),x=be(p),m=[],w=1;w<=7;w+=1){var O=new Date(b,x,w-Be(p,d)),C=i(l,O);m.push(g.createElement("div",{key:w,className:gt(Gt,Pi(O)&&"".concat(Gt,"--current"),Vn(O,d)&&"".concat(Gt,"--weekend"))},g.createElement("abbr",{"aria-label":C,title:C},r(l,O).replace(".",""))))}return g.createElement(gr,{className:Hn,count:7,onFocus:c,onMouseOver:c},m)}var pt=function(){return pt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},pt.apply(this,arguments)},Kr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},Jr="react-calendar__tile";function fl(e){var t=e.onClickWeekNumber,n=e.weekNumber,r=g.createElement("span",null,n);if(t){var a=e.date,i=e.onClickWeekNumber,l=e.weekNumber,c=Kr(e,["date","onClickWeekNumber","weekNumber"]);return g.createElement("button",pt({},c,{className:Jr,onClick:function(d){return i(l,a,d)},type:"button"}),r)}else{e.date,e.onClickWeekNumber,e.weekNumber;var c=Kr(e,["date","onClickWeekNumber","weekNumber"]);return g.createElement("div",pt({},c,{className:Jr}),r)}}function hl(e){var t=e.activeStartDate,n=e.calendarType,r=e.onClickWeekNumber,a=e.onMouseLeave,i=e.showFixedNumberOfWeeks,l=Tt(n),c=function(){if(i)return 6;var p=In(t),b=Be(t,l),x=p-(7-b);return 1+Math.ceil(x/7)}(),d=function(){for(var p=P(t),b=be(t),x=Ot(t),m=[],w=0;w<c;w+=1)m.push(Zt(new Date(p,b,x+w*7),l));return m}(),u=d.map(function(p){return ji(p,l)});return g.createElement(gr,{className:"react-calendar__month-view__weekNumbers",count:c,direction:"column",onFocus:a,onMouseOver:a,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0}},u.map(function(p,b){var x=d[b];if(!x)throw new Error("date is not defined");return g.createElement(fl,{key:p,date:x,onClickWeekNumber:r,weekNumber:p})}))}var Ue=function(){return Ue=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ue.apply(this,arguments)},vl=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function pl(e){if(e)for(var t=0,n=Object.entries(li);t<n.length;t++){var r=n[t],a=r[0],i=r[1];if(i.includes(e))return a}return A.ISO_8601}var Un=function(t){var n=t.activeStartDate,r=t.locale,a=t.onMouseLeave,i=t.showFixedNumberOfWeeks,l=t.calendarType,c=l===void 0?pl(r):l,d=t.formatShortWeekday,u=t.formatWeekday,p=t.onClickWeekNumber,b=t.showWeekNumbers,x=vl(t,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function m(){return g.createElement(ul,{calendarType:c,formatShortWeekday:d,formatWeekday:u,locale:r,onMouseLeave:a})}function w(){return b?g.createElement(hl,{activeStartDate:n,calendarType:c,onClickWeekNumber:p,onMouseLeave:a,showFixedNumberOfWeeks:i}):null}function O(){return g.createElement(dl,Ue({calendarType:c},x))}var C="react-calendar__month-view";return g.createElement("div",{className:gt(C,b?"".concat(C,"--weekNumbers"):"")},g.createElement("div",{style:{display:"flex",alignItems:"flex-end"}},w(),g.createElement("div",{style:{flexGrow:1,width:"100%"}},m(),O())))};Un.propTypes=Ue(Ue({},Mt),{calendarType:zn,formatDay:s.func,formatLongDate:s.func,formatShortWeekday:s.func,formatWeekday:s.func,onClickWeekNumber:s.func,onMouseLeave:s.func,showFixedNumberOfWeeks:s.bool,showNeighboringMonth:s.bool,showWeekNumbers:s.bool});const ml=Un;var Ne=function(){return Ne=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ne.apply(this,arguments)},st="react-calendar",Pe=["century","decade","year","month"],gl=["decade","year","month","day"],xr=new Date;xr.setFullYear(1,0,1);xr.setHours(0,0,0,0);var bl=new Date(864e13);function Ye(e){return e instanceof Date?e:new Date(e)}function Zn(e,t){return Pe.slice(Pe.indexOf(e),Pe.indexOf(t)+1)}function yl(e,t,n){var r=Zn(t,n);return r.indexOf(e)!==-1}function wr(e,t,n){return e&&yl(e,t,n)?e:n}function Kn(e){var t=Pe.indexOf(e);return gl[t]}function xl(e,t){var n=Array.isArray(e)?e[t]:e;if(!n)return null;var r=Ye(n);if(isNaN(r.getTime()))throw new Error("Invalid date: ".concat(e));return r}function Jn(e,t){var n=e.value,r=e.minDate,a=e.maxDate,i=e.maxDetail,l=xl(n,t);if(!l)return null;var c=Kn(i),d=function(){switch(t){case 0:return De(c,l);case 1:return Fn(c,l);default:throw new Error("Invalid index value: ".concat(t))}}();return Wi(d,r,a)}var Dr=function(e){return Jn(e,0)},Xn=function(e){return Jn(e,1)},wl=function(e){return[Dr,Xn].map(function(t){return t(e)})};function Qn(e){var t=e.maxDate,n=e.maxDetail,r=e.minDate,a=e.minDetail,i=e.value,l=e.view,c=wr(l,a,n),d=Dr({value:i,minDate:r,maxDate:t,maxDetail:n})||new Date;return De(c,d)}function Dl(e){var t=e.activeStartDate,n=e.defaultActiveStartDate,r=e.defaultValue,a=e.defaultView,i=e.maxDate,l=e.maxDetail,c=e.minDate,d=e.minDetail,u=e.value,p=e.view,b=wr(p,d,l),x=t||n;return x?De(b,x):Qn({maxDate:i,maxDetail:l,minDate:c,minDetail:d,value:u||r,view:p||a})}function Ht(e){return e&&(!Array.isArray(e)||e.length===1)}function dt(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var ea=E.forwardRef(function(t,n){var r=t.activeStartDate,a=t.allowPartialRange,i=t.calendarType,l=t.className,c=t.defaultActiveStartDate,d=t.defaultValue,u=t.defaultView,p=t.formatDay,b=t.formatLongDate,x=t.formatMonth,m=t.formatMonthYear,w=t.formatShortWeekday,O=t.formatWeekday,C=t.formatYear,k=t.goToRangeStartOnSelect,S=k===void 0?!0:k,M=t.inputRef,V=t.locale,ae=t.maxDate,H=ae===void 0?bl:ae,y=t.maxDetail,h=y===void 0?"month":y,D=t.minDate,f=D===void 0?xr:D,j=t.minDetail,_=j===void 0?"century":j,Y=t.navigationAriaLabel,I=t.navigationAriaLive,K=t.navigationLabel,B=t.next2AriaLabel,ce=t.next2Label,te=t.nextAriaLabel,J=t.nextLabel,F=t.onActiveStartDateChange,X=t.onChange,N=t.onClickDay,re=t.onClickDecade,z=t.onClickMonth,ue=t.onClickWeekNumber,q=t.onClickYear,Q=t.onDrillDown,oe=t.onDrillUp,ee=t.onViewChange,Ce=t.prev2AriaLabel,xe=t.prev2Label,ve=t.prevAriaLabel,we=t.prevLabel,$=t.returnValue,$e=$===void 0?"start":$,ne=t.selectRange,Qe=t.showDoubleView,_r=t.showFixedNumberOfWeeks,kr=t.showNavigation,ma=kr===void 0?!0:kr,ga=t.showNeighboringCentury,ba=t.showNeighboringDecade,Or=t.showNeighboringMonth,ya=Or===void 0?!0:Or,xa=t.showWeekNumbers,wa=t.tileClassName,Da=t.tileContent,_a=t.tileDisabled,At=t.value,jr=t.view,Cr=E.useState(c),ka=Cr[0],et=Cr[1],Sr=E.useState(null),Oa=Sr[0],Tr=Sr[1],Er=E.useState(Array.isArray(d)?d.map(function(T){return T!==null?Ye(T):null}):d!=null?Ye(d):null),Pt=Er[0],ja=Er[1],Nr=E.useState(u),Ca=Nr[0],Mr=Nr[1],U=r||ka||Dl({activeStartDate:r,defaultActiveStartDate:c,defaultValue:d,defaultView:u,maxDate:H,maxDetail:h,minDate:f,minDetail:_,value:At,view:jr}),Z=function(){var T=function(){return ne&&Ht(Pt)?Pt:At!==void 0?At:Pt}();return T?Array.isArray(T)?T.map(function(W){return W!==null?Ye(W):null}):T!==null?Ye(T):null:null}(),tt=Kn(h),L=wr(jr||Ca,_,h),se=Zn(_,h),Sa=ne?Oa:null,It=se.indexOf(L)<se.length-1,Ar=se.indexOf(L)>0,Pr=E.useCallback(function(T){var W=function(){switch($e){case"start":return Dr;case"end":return Xn;case"range":return wl;default:throw new Error("Invalid returnValue.")}}();return W({maxDate:H,maxDetail:h,minDate:f,value:T})},[H,h,f,$e]),Lt=E.useCallback(function(T,W){et(T);var R={action:W,activeStartDate:T,value:Z,view:L};F&&!dt(U,T)&&F(R)},[U,F,Z,L]),rt=E.useCallback(function(T,W){var R=function(){switch(L){case"century":return re;case"decade":return q;case"year":return z;case"month":return N;default:throw new Error("Invalid view: ".concat(L,"."))}}();R&&R(T,W)},[N,re,z,q,L]),Wt=E.useCallback(function(T,W){if(It){rt(T,W);var R=se[se.indexOf(L)+1];if(!R)throw new Error("Attempted to drill down from the lowest view.");et(T),Mr(R);var ie={action:"drillDown",activeStartDate:T,value:Z,view:R};F&&!dt(U,T)&&F(ie),ee&&L!==R&&ee(ie),Q&&Q(ie)}},[U,It,F,rt,Q,ee,Z,L,se]),Ft=E.useCallback(function(){if(Ar){var T=se[se.indexOf(L)-1];if(!T)throw new Error("Attempted to drill up from the highest view.");var W=De(T,U);et(W),Mr(T);var R={action:"drillUp",activeStartDate:W,value:Z,view:T};F&&!dt(U,W)&&F(R),ee&&L!==T&&ee(R),oe&&oe(R)}},[U,Ar,F,oe,ee,Z,L,se]),$t=E.useCallback(function(T,W){var R=Z;rt(T,W);var ie=ne&&!Ht(R),le;if(ne)if(ie)le=De(tt,T);else{if(!R)throw new Error("previousValue is required");if(Array.isArray(R))throw new Error("previousValue must not be an array");le=Mi(tt,R,T)}else le=Pr(T);var Vt=!ne||ie||S?Qn({maxDate:H,maxDetail:h,minDate:f,minDetail:_,value:le,view:L}):null;W.persist(),et(Vt),ja(le);var Ma={action:"onChange",activeStartDate:Vt,value:le,view:L};if(F&&!dt(U,Vt)&&F(Ma),X)if(ne){var Aa=Ht(le);if(!Aa)X(le||null,W);else if(a){if(Array.isArray(le))throw new Error("value must not be an array");X([le||null,null],W)}}else X(le||null,W)},[U,a,Pr,S,H,h,f,_,F,X,rt,ne,Z,tt,L]);function Ta(T){Tr(T)}function Rt(){Tr(null)}E.useImperativeHandle(n,function(){return{activeStartDate:U,drillDown:Wt,drillUp:Ft,onChange:$t,setActiveStartDate:Lt,value:Z,view:L}},[U,Wt,Ft,$t,Lt,Z,L]);function Ir(T){var W=T?Wn(L,U):De(L,U),R=It?Wt:$t,ie={activeStartDate:W,hover:Sa,locale:V,maxDate:H,minDate:f,onClick:R,onMouseOver:ne?Ta:void 0,tileClassName:wa,tileContent:Da,tileDisabled:_a,value:Z,valueType:tt};switch(L){case"century":return g.createElement(Xi,Ne({formatYear:C,showNeighboringCentury:ga},ie));case"decade":return g.createElement(rl,Ne({formatYear:C,showNeighboringDecade:ba},ie));case"year":return g.createElement(ll,Ne({formatMonth:x,formatMonthYear:m},ie));case"month":return g.createElement(ml,Ne({calendarType:i,formatDay:p,formatLongDate:b,formatShortWeekday:w,formatWeekday:O,onClickWeekNumber:ue,onMouseLeave:ne?Rt:void 0,showFixedNumberOfWeeks:typeof _r<"u"?_r:Qe,showNeighboringMonth:ya,showWeekNumbers:xa},ie));default:throw new Error("Invalid view: ".concat(L,"."))}}function Ea(){return ma?g.createElement(Ii,{activeStartDate:U,drillUp:Ft,formatMonthYear:m,formatYear:C,locale:V,maxDate:H,minDate:f,navigationAriaLabel:Y,navigationAriaLive:I,navigationLabel:K,next2AriaLabel:B,next2Label:ce,nextAriaLabel:te,nextLabel:J,prev2AriaLabel:Ce,prev2Label:xe,prevAriaLabel:ve,prevLabel:we,setActiveStartDate:Lt,showDoubleView:Qe,view:L,views:se}):null}var Na=Array.isArray(Z)?Z:[Z];return g.createElement("div",{className:gt(st,ne&&Na.length===1&&"".concat(st,"--selectRange"),Qe&&"".concat(st,"--doubleView"),l),ref:M},Ea(),g.createElement("div",{className:"".concat(st,"__viewContainer"),onBlur:ne?Rt:void 0,onMouseLeave:ne?Rt:void 0},Ir(),Qe?Ir(!0):null))}),Xr=s.instanceOf(Date),Qr=s.oneOfType([s.string,s.instanceOf(Date)]),en=s.oneOfType([Qr,Ji(Qr)]);ea.propTypes={activeStartDate:Xr,allowPartialRange:s.bool,calendarType:zn,className:ft,defaultActiveStartDate:Xr,defaultValue:en,defaultView:ht,formatDay:s.func,formatLongDate:s.func,formatMonth:s.func,formatMonthYear:s.func,formatShortWeekday:s.func,formatWeekday:s.func,formatYear:s.func,goToRangeStartOnSelect:s.bool,inputRef:Ui,locale:s.string,maxDate:yr,maxDetail:s.oneOf(Pe),minDate:br,minDetail:s.oneOf(Pe),navigationAriaLabel:s.string,navigationAriaLive:s.oneOf(["off","polite","assertive"]),navigationLabel:s.func,next2AriaLabel:s.string,next2Label:s.node,nextAriaLabel:s.string,nextLabel:s.node,onActiveStartDateChange:s.func,onChange:s.func,onClickDay:s.func,onClickDecade:s.func,onClickMonth:s.func,onClickWeekNumber:s.func,onClickYear:s.func,onDrillDown:s.func,onDrillUp:s.func,onViewChange:s.func,prev2AriaLabel:s.string,prev2Label:s.node,prevAriaLabel:s.string,prevLabel:s.node,returnValue:s.oneOf(["start","end","range"]),selectRange:s.bool,showDoubleView:s.bool,showFixedNumberOfWeeks:s.bool,showNavigation:s.bool,showNeighboringCentury:s.bool,showNeighboringDecade:s.bool,showNeighboringMonth:s.bool,showWeekNumbers:s.bool,tileClassName:s.oneOfType([s.func,ft]),tileContent:s.oneOfType([s.func,s.node]),tileDisabled:s.func,value:en,view:ht};const _l=ea,ta=v(_l)`
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
`,ra=v.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,na=v.textarea`
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
`,aa=v.div`
  display: flex;
  gap: 4px;
  width: 200px;
  margin-bottom: 40px;
  align-items: center;
  cursor: pointer;
`,oa=v.p`
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  margin-top: 14px;
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
`,ia=v.h2`
  margin: 0;
  margin-top: 14px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Poppins", sans-serif;
`,la=v.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,fe=v.span`
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

  input[type="radio"]:checked + ${fe} {
    scale: 0.5;
  }
`,ca=v.input`
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
`,sa=v.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #bedbb0;
`,da=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  width: 28px;
  height: 28px;
  background-color: rgb(22, 22, 22);
  margin-right: 8px;
  padding: 7px;
`,ua=v.svg`
  width: 28px;
  height: 28px;
  stroke: rgb(255, 255, 255);
`,fa=v.button`
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
`,ha=v(pn)`
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
`,va=v(pn)`
  position: absolute;
  bottom: -12px;
  padding-left: 8px;
  margin: 0;
  color: red;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`,pa=v.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: #bedbb0;
`;yt.setAppElement("#root");const kl=wt().shape({title:ge().required("Title is required"),description:ge().required("Description is required"),color:ge().required("Color selection is required"),deadline:mn().required("Deadline is required")});function Ol({isModalOpen:e,modalStateSwapper:t,cardId:n,cardTitle:r,cardColor:a,cardDescription:i,cardDeadline:l}){const[c,d]=E.useState(null),u=Ie(),{isModalOpen:p,openModal:b,closeModal:x}=Ae(),m={overlay:{backgroundColor:"rgb(21, 21, 21, 0.75)"},content:{width:"233px",height:"254px",margin:"auto",padding:0,border:"none",borderRadius:"8px"}},w=(k,{setSubmitting:S,resetForm:M})=>{const V={cardId:n,title:k.title,description:k.description,color:k.color,deadline:c};u(Pa(V)),S(!1),M(),t(),setTimeout(()=>{d(null)},1e3)},O=(k,S)=>["Su","Mo","Tu","We","Th","Fr","Sa"][S.getDay()],C=k=>{const S=new Date(k),M=S.getDate(),V=S.toLocaleString("en",{month:"long"});return`${S.toLocaleString("en",{weekday:"long"})}, ${V} ${M}`};return o.jsx(o.Fragment,{children:o.jsxs(xt,{modalIsOpen:e,closeModal:t,title:"Edit card",maxWidth:"350px",children:[o.jsx(Dt,{initialValues:{title:`${r}`,description:`${i}`,color:`${a}`,deadline:`${l}`},validationSchema:kl,onSubmit:w,children:({values:k,handleChange:S,handleSubmit:M})=>o.jsxs(ra,{onSubmit:M,children:[o.jsxs(mt,{children:[o.jsx(ca,{type:"text",name:"title",onChange:S,value:k.title,placeholder:"Title"}),o.jsx(ha,{name:"title",component:"div",className:"error"})]}),o.jsxs(mt,{children:[o.jsx(na,{name:"description",onChange:S,value:k.description,placeholder:"Description"}),o.jsx(va,{name:"Description",component:"div",className:"error"})]}),o.jsx(ia,{children:"Label color"}),o.jsxs(la,{children:[o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"blue",className:"blue",checked:k.color==="blue",onChange:S}),o.jsx(fe,{className:"blue"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"pink",className:"pink",checked:k.color==="pink",onChange:S}),o.jsx(fe,{className:"pink"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"green",className:"green",checked:k.color==="green",onChange:S}),o.jsx(fe,{className:"green"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"gray",className:"gray",checked:k.color==="gray",onChange:S}),o.jsx(fe,{className:"gray"})]})]}),o.jsx(oa,{children:"Deadline"}),o.jsxs(aa,{children:[o.jsx(sa,{onClick:b,children:C(c===null?l:c)}),o.jsx(pa,{children:o.jsx("use",{href:G+"#icon-chevron-down"})})]}),o.jsxs(fa,{type:"submit",children:[o.jsx(da,{children:o.jsx(ua,{children:o.jsx("use",{href:G+"#icon-plus"})})}),"Edit"]})]})}),o.jsx(yt,{isOpen:p,onRequestClose:x,style:m,closeTimeoutMS:750,children:o.jsx(ta,{formatShortWeekday:O,value:c,onChange:d,onClickDay:x,minDate:new Date})})]})})}var or={exports:{}};(function(e,t){(function(n,r){r(t,E,Ha)})(void 0,function(n,r,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=c(r),l=c(a);function c(y){return y&&y.__esModule?y:{default:y}}function d(y){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(D){return typeof D}:d=function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},d(y)}function u(y,h){if(y==null)return{};var D=p(y,h),f,j;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(y);for(j=0;j<_.length;j++)f=_[j],!(h.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(y,f)&&(D[f]=y[f])}return D}function p(y,h){if(y==null)return{};var D={},f=Object.keys(y),j,_;for(_=0;_<f.length;_++)j=f[_],!(h.indexOf(j)>=0)&&(D[j]=y[j]);return D}function b(y,h){if(!(y instanceof h))throw new TypeError("Cannot call a class as a function")}function x(y,h){for(var D=0;D<h.length;D++){var f=h[D];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(y,f.key,f)}}function m(y,h,D){return h&&x(y.prototype,h),D&&x(y,D),y}function w(y,h){return h&&(d(h)==="object"||typeof h=="function")?h:C(y)}function O(y){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(D){return D.__proto__||Object.getPrototypeOf(D)},O(y)}function C(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}function k(y,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function");y.prototype=Object.create(h&&h.prototype,{constructor:{value:y,writable:!0,configurable:!0}}),h&&S(y,h)}function S(y,h){return S=Object.setPrototypeOf||function(f,j){return f.__proto__=j,f},S(y,h)}function M(y,h,D){return h in y?Object.defineProperty(y,h,{value:D,enumerable:!0,configurable:!0,writable:!0}):y[h]=D,y}var V=1e-4,ae=function(h,D){return Math.abs(h-D)<V},H=function(y){k(h,y);function h(){var D,f;b(this,h);for(var j=arguments.length,_=new Array(j),Y=0;Y<j;Y++)_[Y]=arguments[Y];return f=w(this,(D=O(h)).call.apply(D,[this].concat(_))),M(C(f),"onResize",function(){f.rafId&&window.cancelAnimationFrame(f.rafId),f.rafId=window.requestAnimationFrame(f.update.bind(C(f)))}),M(C(f),"onToggled",function(I){typeof f.props.onToggled=="function"&&setTimeout(function(){return f.props.onToggled(I)},0)}),M(C(f),"onTruncated",function(){typeof f.props.onTruncated=="function"&&setTimeout(function(){return f.props.onTruncated()},0)}),M(C(f),"onCalculated",function(){typeof f.props.onCalculated=="function"&&setTimeout(function(){return f.props.onCalculated()},0)}),M(C(f),"update",function(){var I=window.getComputedStyle(f.scope),K=[I["font-weight"],I["font-style"],I["font-size"],I["font-family"],I["letter-spacing"]].join(" ");f.canvas.font=K,f.forceUpdate()}),f}return m(h,[{key:"componentDidMount",value:function(){var f=document.createElement("canvas"),j=document.createDocumentFragment(),_=window.getComputedStyle(this.scope),Y=[_["font-weight"],_["font-style"],_["font-size"],_["font-family"]].join(" ");j.appendChild(f),this.canvas=f.getContext("2d"),this.canvas.font=Y,this.forceUpdate(),window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize),this.rafId&&window.cancelAnimationFrame(this.rafId)}},{key:"measureWidth",value:function(f){return this.canvas.measureText(f).width}},{key:"getRenderText",value:function(){var f=this.props;f.containerClassName,f.element;var j=f.line;f.onCalculated,f.onTruncated,f.onToggled;var _=f.text,Y=f.textElement,I=f.textTruncateChild,K=f.truncateText,B=f.maxCalculateTimes,ce=u(f,["containerClassName","element","line","onCalculated","onTruncated","onToggled","text","textElement","textTruncateChild","truncateText","maxCalculateTimes"]),te=this.scope.getBoundingClientRect().width;if(te===0)return null;var J=this.measureWidth(_);if(te>J||ae(te,J))return this.onToggled(!1),(0,r.createElement)(Y,ce,_);var F="";if(I&&typeof I.type=="string"){var X=I.type;(X.indexOf("span")>=0||X.indexOf("a")>=0)&&(F=I.props.children)}for(var N=1,re=_.length,z="",ue=0,q=0,Q=j,oe=0,ee=!1,Ce=!1,xe=0,ve=-1,we="",$=0;Q-- >0;){for(we=Q?"":K+(F?" "+F:"");N<=re;)if(z=_.substr(q,N),oe=this.measureWidth(z+we),oe<te)ue=_.indexOf(" ",N+1),ue===-1?(N+=1,ee=!1):(ee=!0,N=ue);else{do{if($++>=B)break;z=_.substr(q,N),Q||N--,z[z.length-1]===" "&&(z=_.substr(q,N-1)),ee?(ve=z.lastIndexOf(" "),ve>-1?(N=ve,Q&&N++,z=_.substr(q,N)):(N--,z=_.substr(q,N))):(N--,z=_.substr(q,N)),oe=this.measureWidth(z+we)}while((oe>te||ae(oe,te))&&z.length>0);q+=N;break}if(N>=re){q=re;break}ee&&!Ce&&_.substr(xe,N).indexOf(" ")===-1&&(Ce=_.substr(xe,N).indexOf(" ")===-1,Q--),xe=N+1}return q===re?(this.onToggled(!1),(0,r.createElement)(Y,ce,_)):(this.onTruncated(),this.onToggled(!0),i.default.createElement("span",ce,(0,r.createElement)(Y,ce,_.substr(0,q)+K+" "),I))}},{key:"render",value:function(){var f=this,j=this.props,_=j.element,Y=j.text,I=j.style,K=I===void 0?{}:I,B=j.containerClassName,ce=j.line;j.onCalculated,j.onTruncated,j.onToggled;var te=j.textElement;j.textTruncateChild,j.truncateText,j.maxCalculateTimes;var J=u(j,["element","text","style","containerClassName","line","onCalculated","onTruncated","onToggled","textElement","textTruncateChild","truncateText","maxCalculateTimes"]),F=K.fontWeight,X=K.fontStyle,N=K.fontSize,re=K.fontFamily,z=this.scope&&ce?this.getRenderText():(0,r.createElement)(te,J,Y),ue={ref:function(Q){f.scope=Q},className:B,style:{overflow:"hidden",fontWeight:F,fontStyle:X,fontSize:N,fontFamily:re}};return this.scope&&this.onCalculated(),(0,r.createElement)(_,ue,z)}}]),h}(r.Component);M(H,"propTypes",{containerClassName:l.default.string,element:l.default.string,line:l.default.oneOfType([l.default.number,l.default.bool]),onCalculated:l.default.func,onTruncated:l.default.func,onToggled:l.default.func,text:l.default.string,textElement:l.default.elementType,textTruncateChild:l.default.node,truncateText:l.default.string,maxCalculateTimes:l.default.number}),M(H,"defaultProps",{element:"div",line:1,text:"",textElement:"span",truncateText:"…",maxCalculateTimes:10}),n.default=H,e.exports=n.default})})(or,or.exports);var jl=or.exports;const Cl=ln(jl),Sl=v.ul`
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
`,Tl=v.li`
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
`,El=v.h4`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 14px;
  /* letter-spacing: -0.02em; */
  color: var(--card-title-color);
`,Nl=v.div`
  height: 50px;
  overflow: hidden;
`,Ml=v(Cl)`
  font-size: 12px;
  line-height: 1.33;
  /* letter-spacing: -0.02em; */
  color: var(--screens-page-tutorial-text-color);
`,Al=v.div`
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
`,Pl=v.span`
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
`,Il=v.span`
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
`,Wl=v.div`
  position: absolute;
  top: -110px;
  right: 25px;
  height: auto;
  padding: 15px;
  border: 1px solid var(--shared-input-border-color);
  box-shadow: 0px 4px 16px var(--color-shadow);
  border-radius: 8px;
  background-color: var(--primary-background-color);
  z-index: 1000;
  min-width: 160px;
`,Fl=v.button`
  background-color: transparent;
  color: var(--screens-page-tutorial-text-color);
  font-size: 12px;
  border: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition: color var(--hover-params), stroke var(--hover-params);

  &:hover {
    color: var(--primary-button-color);

    & ${Me} {
      stroke: var(--primary-button-color);
      scale: 1.1;
    }
  }
`,$l=({isOpen:e,onClose:t,onSelectStatus:n,cardId:r,owner:a})=>{const{column:i}=bt(ir);if(!e)return null;const l=c=>{t(),n(c,r,a)};return o.jsx(Wl,{children:i===void 0?o.jsx(o.Fragment,{}):i.map(({_id:c,title:d})=>o.jsxs(Fl,{onClick:()=>l(c),children:[d,o.jsx(Me,{children:o.jsx("use",{href:G+"#icon-arrow-circle-broken-right"})})]},c))})},Rl=e=>{const t=new Date(e),n=t.getDate(),r=t.getMonth()+1,a=t.getFullYear();return`${n<10?"0":""}${n}/${r<10?"0":""}${r}/${a}`},Vl=e=>{const t=new Date(e),n=new Date,r=t.getDate(),a=t.getMonth(),i=t.getFullYear(),l=n.getDate(),c=n.getMonth(),d=n.getFullYear();if(r<=l&&a<=c&&i<=d)return!0},rn=e=>{switch(e){case"blue":return"#8fa1d0";case"pink":return"#e09cb5";case"green":return"#bedbb0";case"gray":return"rgba(255, 255, 255, 0.3)";default:return"rgba(255, 255, 255, 0.3)"}},Yl=e=>{switch(e){case"blue":return"Low";case"pink":return"Medium";case"green":return"High";case"gray":return"Without priority";default:return"Without priority"}},zl=({card:e})=>{const[t,n]=E.useState(!1),[r,a]=E.useState(null),[i,l]=E.useState(null),[c,d]=E.useState(null),[u,p]=E.useState(null),[b,x]=E.useState(null),m=Ie(),{isModalOpen:w,openModal:O,closeModal:C}=Ae(),k=h=>{m(Ia(h))},S=()=>{n(h=>!h)},M=(h,D,f)=>{m(La({columnId:h,cardId:D,owner:f}))},[V]=on(),ae=V.get("priority"),y=(()=>{switch(ae){case"low":return e.filter(h=>h.color==="blue");case"medium":return e.filter(h=>h.color==="pink");case"high":return e.filter(h=>h.color==="green");case"without":return e.filter(h=>h.color==="gray");case"all":return e;default:return e}})();return o.jsxs(o.Fragment,{children:[o.jsx(Sl,{children:y&&y.map(({_id:h,title:D,description:f,color:j,deadline:_,owner:Y})=>o.jsxs(Tl,{$prioritycolor:rn(j),children:[o.jsx(El,{children:D}),o.jsx(Nl,{children:o.jsx(Ml,{line:2,element:"span",truncateText:"…",text:f})}),o.jsxs(Al,{children:[o.jsxs("div",{children:[o.jsx(tn,{children:"Priority"}),o.jsx(Pl,{$prioritycolor:rn(j),children:Yl(j)})]}),o.jsxs("div",{children:[o.jsx(tn,{children:"Deadline"}),o.jsx(Il,{children:Rl(_)})]}),o.jsxs(Ll,{children:[Vl(_)&&o.jsx("li",{children:o.jsx(ut,{children:o.jsx(Me,{className:"bell",children:o.jsx("use",{href:G+"#icon-bell"})})})}),o.jsxs("li",{children:[o.jsx(ut,{onClick:()=>S(),children:o.jsx(Me,{children:o.jsx("use",{href:G+"#icon-arrow-circle-broken-right"})})}),o.jsx($l,{isOpen:t,onClose:S,onSelectStatus:M,cardId:h,owner:Y})]}),o.jsx("li",{children:o.jsx(ut,{onClick:()=>{O(),a(h),l(D),p(j),d(f),x(_)},children:o.jsx(Me,{children:o.jsx("use",{href:G+"#icon-pencil"})})})}),o.jsx("li",{children:o.jsx(ut,{onClick:()=>k(h),children:o.jsx(Me,{children:o.jsx("use",{href:G+"#icon-trash"})})})})]})]})]},h))}),o.jsx(Ol,{modalStateSwapper:C,isModalOpen:w,cardId:r,cardTitle:i,cardColor:u,cardDescription:c,cardDeadline:b})]})},Bl=v.div`
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
`,ql=v.ul`
  display: flex;
  gap: 34px;
  height: 100%;
`,Gl=v.li`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 100%;
  /* height: 100%; */

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
  color: var(--modal-board-text);
  background-color: var(--background-add-column-btn-color);
  cursor: pointer;

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`,Ul=v.button`
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
`,Zl=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: var(--add-column-icon-wrap-color);
`,Kl=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: var(--shared-black-plus-button);
`,Jl=v.svg`
  width: 14px;
  height: 14px;
  stroke: var(--add-column-icon-plus-color);
`,Xl=v.svg`
  width: 14px;
  height: 14px;
  stroke: var(--add-card-icon-plus-color);
`,Ql=v.div`
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
`,ec=v.h3`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--card-title-color);
`,tc=v.div`
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
`,rc=v(lr)`
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
`,nc=v.button`
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
`,ac=wt().shape({title:ge().min("6").required("specify a column name")}),oc=({isModalOpen:e,modalStateSwapper:t})=>{const n=bt(ir),r=Ie(),a={title:""},i=({title:l},c)=>{const d=n.result._id;r(Wa({dashboardId:d,title:l})),c.resetForm(),t()};return o.jsx(xt,{modalIsOpen:e,closeModal:t,title:"Add column",maxWidth:"335px",children:o.jsx(sn,{children:o.jsx(Dt,{initialValues:a,validationSchema:ac,onSubmit:i,children:o.jsxs(dn,{children:[o.jsxs(un,{children:[o.jsx(fn,{name:"title",component:"div"}),o.jsx(rc,{type:"text",id:"title",name:"title",placeholder:"title",autoComplete:"off"})]}),o.jsxs(nc,{type:"submit",children:[o.jsx(hn,{children:o.jsx(vn,{children:o.jsx("use",{href:G+"#icon-plus"})})}),"Add"]})]})})})})},ic=v(lr)`
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
`,lc=v.button`
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
`,cc=wt().shape({title:ge().min("6").required("specify a column name")}),sc=({isModalOpen:e,modalStateSwapper:t,title:n,columnId:r})=>{const a=Ie(),i={title:n||""},l=({title:c},d)=>{a(Fa({columnId:r,title:c})),d.resetForm(),t()};return o.jsx(xt,{modalIsOpen:e,closeModal:t,title:"Edit column",maxWidth:"335px",children:o.jsx(sn,{children:o.jsx(Dt,{initialValues:i,validationSchema:cc,onSubmit:l,children:o.jsxs(dn,{children:[o.jsxs(un,{children:[o.jsx(fn,{name:"title",component:"div"}),o.jsx(ic,{type:"text",id:"title",name:"title",placeholder:"title",autoComplete:"off"})]}),o.jsxs(lc,{type:"submit",children:[o.jsx(hn,{children:o.jsx(vn,{children:o.jsx("use",{href:G+"#icon-plus"})})}),"Add"]})]})})})})};yt.setAppElement("#root");const dc=wt().shape({title:ge().required("Title is required"),description:ge().required("Description is required"),color:ge().required("Color selection is required"),deadline:mn().required("Deadline is required")});function uc({isModalOpen:e,modalStateSwapper:t,columnId:n}){const[r,a]=E.useState(new Date),i=Ie(),{isModalOpen:l,openModal:c,closeModal:d}=Ae(),u={overlay:{backgroundColor:"rgb(21, 21, 21, 0.75)"},content:{width:"233px",height:"254px",margin:"auto",padding:0,border:"none",borderRadius:"8px"}},p=(m,{setSubmitting:w,resetForm:O})=>{const C={columnId:n,title:m.title,description:m.description,color:m.color,deadline:r};i($a(C)),w(!1),O(),t(),setTimeout(()=>{a(new Date)},1e3)},b=(m,w)=>["Su","Mo","Tu","We","Th","Fr","Sa"][w.getDay()],x=m=>{const w=new Date(m),O=w.getDate(),C=w.toLocaleString("en",{month:"long"});return`${w.toLocaleString("en",{weekday:"long"})}, ${C} ${O}`};return o.jsx(o.Fragment,{children:o.jsxs(xt,{modalIsOpen:e,closeModal:t,title:"Add card",maxWidth:"350px",children:[o.jsx(Dt,{initialValues:{title:"",description:"",color:"gray",deadline:new Date},validationSchema:dc,onSubmit:p,children:({values:m,handleChange:w,handleSubmit:O})=>o.jsxs(ra,{onSubmit:O,children:[o.jsxs(mt,{children:[o.jsx(ca,{type:"text",name:"title",onChange:w,value:m.title,placeholder:"Title"}),o.jsx(ha,{name:"title",component:"div",className:"error"})]}),o.jsxs(mt,{children:[o.jsx(na,{name:"description",onChange:w,value:m.description,placeholder:"Description"}),o.jsx(va,{name:"description",component:"div",className:"error"})]}),o.jsx(ia,{children:"Label color"}),o.jsxs(la,{onChange:w,value:m.color,children:[o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"blue",className:"blue",checked:m.color==="blue",onChange:w}),o.jsx(fe,{className:"blue"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"pink",className:"pink",checked:m.color==="pink",onChange:w}),o.jsx(fe,{className:"pink"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"green",className:"green",checked:m.color==="green",onChange:w}),o.jsx(fe,{className:"green"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"gray",className:"gray",checked:m.color==="gray",onChange:w}),o.jsx(fe,{className:"gray"})]})]}),o.jsx(oa,{children:"Deadline"}),o.jsxs(aa,{onClick:c,children:[o.jsx(sa,{children:x(r)}),o.jsx(pa,{children:o.jsx("use",{href:G+"#icon-chevron-down"})})]}),o.jsxs(fa,{type:"submit",children:[o.jsx(da,{children:o.jsx(ua,{children:o.jsx("use",{href:G+"#icon-plus"})})}),"Add"]})]})}),o.jsx(yt,{isOpen:l,onRequestClose:d,style:u,closeTimeoutMS:750,children:o.jsx(ta,{formatShortWeekday:b,selectedDate:new Date,onChange:a,onClickDay:d,minDate:new Date})})]})})}const fc=()=>{const{isModalOpen:e,openModal:t,closeModal:n}=Ae(),{isModalOpen:r,openModal:a,closeModal:i}=Ae(),{isModalOpen:l,openModal:c,closeModal:d}=Ae(),{column:u}=bt(ir),{state:p}=cn(),b=Ie(),[x,m]=E.useState(null);E.useEffect(()=>{u===void 0&&b(Ra(p.id))},[u,b,p==null?void 0:p.id]);const w=O=>{b(Va(O))};return o.jsxs(Bl,{children:[o.jsx(ql,{children:u===void 0?o.jsx(o.Fragment,{}):u.map(({_id:O,title:C,card:k})=>o.jsxs(Gl,{children:[o.jsx("div",{children:o.jsxs(Ql,{children:[o.jsx(ec,{children:C}),o.jsxs(tc,{children:[o.jsx(nn,{onClick:()=>{a(),m(O)},children:o.jsx(an,{children:o.jsx("use",{href:G+"#icon-pencil"})})}),o.jsx(nn,{onClick:()=>w(O),children:o.jsx(an,{children:o.jsx("use",{href:G+"#icon-trash"})})})]})]})}),o.jsx(zl,{card:k}),o.jsx("div",{children:o.jsxs(Ul,{onClick:()=>{c(),m(O)},children:[o.jsx(Kl,{children:o.jsx(Xl,{children:o.jsx("use",{href:G+"#icon-plus"})})}),"Add Card"]})})]},O))}),o.jsxs(Hl,{onClick:t,children:[o.jsx(Zl,{children:o.jsx(Jl,{children:o.jsx("use",{href:G+"#icon-plus"})})}),"Add column"]}),o.jsx(Lr,{onClick:n,className:e===!0&&"active"}),o.jsx(oc,{modalStateSwapper:n,isModalOpen:e}),o.jsx(Lr,{onClick:i,className:r===!0&&"active"}),o.jsx(sc,{modalStateSwapper:i,isModalOpen:r,columnId:x}),o.jsx(uc,{modalStateSwapper:d,isModalOpen:l,columnId:x})]})},hc=v.div`
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
`,vc=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`,pc=v.p`
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
`,mc=v.span`
  color: var(--welcome-message-text-accent-color);
`,wc=()=>{const[e,t]=E.useState(!1),[n,r]=E.useState(""),a=E.useRef(!0),{boardName:i}=Ya(),l=za(),c=cn(),d=bt(Ua);return E.useEffect(()=>{r(i)},[c.pathname,i]),E.useEffect(()=>{if(!(a.current!==!0&&i!==n)){if(d.length>0&&!i){t(!0);const u=d[d.length-1];r(u.title),l(`/home/${u.title}`,{replace:!0,state:{id:u._id}}),t(!1)}a.current=!1}},[d,l,i,n]),o.jsx(hc,{children:e?o.jsx("div",{children:o.jsx(Ba,{})}):i===void 0&&o.jsx(vc,{children:o.jsxs(pc,{children:["Before starting your project, it is essential"," ",o.jsx(mc,{children:"to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})||i!==void 0&&o.jsxs(o.Fragment,{children:[o.jsx(so,{boardName:i}),o.jsx(fc,{})]})})};export{wc as default};
