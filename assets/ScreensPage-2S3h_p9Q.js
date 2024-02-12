import{u as h,q as on,j as o,r as N,t as ln,v as at,R as m,w as gt,a as Ie,x as Aa,b as bt,y as La,z as Ia,A as Wa,D as Fa,E as $a,F as cn,g as Ra,G as za,p as Va,H as Ya,I as Ba}from"./index-fsQbx21j.js";import{i as U}from"./icons-iplVKqot.js";import{g as qa,w as Ga,h as s,i as xt,u as Ae,S as yt,p as Ha,s as ir,a as sn,M as un,F as dn,E as fn,d as hn,P as vn,O as Ir,e as Ua}from"./HomePage.styled-JA4aB_JS.js";import{b as lr,E as pn,c as wt,a as ge,d as mn,F as Dt}from"./index.esm-SJ-XDRrG.js";const Za=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`,Ka=h.div`
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
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Xa=h.h2`
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
`,Ja=h.div`
  width: 252px;
  height: 1px;
  background-color: var(--modal-filter-form-line);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 14px;
`,Qa=h.div`
  display: flex;
  justify-content: space-between;
`,eo=h.p`
  font-weight: 500;
  color: var(--modal-board-text);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,to=h.button`
  background-color: transparent;
  color: var(--screens-page-tutorial-text-color);
  font-size: 12px;
  text-decoration: underline;
  border: none;
  cursor: pointer;
  transition: var(--hover-params);
  &:hover {
    color: var(--modal-filters-text);
    font-weight: 500;
  }

  &:focus {
    color: var(--modal-filters-text);
    font-weight: 500;
  }

  &:active {
    color: var(--modal-filters-text);
    font-weight: 500;
  }
`,ot=h.div`
  margin-top: 16px;
  display: flex;
  width: 130px;
  gap: 8px;
`,it=h.input`
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
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

  &:checked.blue {
  border: 1px solid #8fa1d0; 
  };

  &:checked.pink {
    border: 1px solid #e09cb5; 
  };

  &:checked.green {
    border: 1px solid #bedbb0;
  };

  &:checked.gray {
    border: 1px solid rgba(255, 255, 255, 0.3);
  };
`,Ve=h.span`
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: transparent;

  &.blue {
    background-color: #8fa1d0; 
  }
  &.pink {
    background-color: #e09cb5; 
  }
  &.green {
    background-color: #bedbb0; 
  }
  &.gray {
    background-color: #ffffff4d; 
`,Te=h.p`
  color: var(--screens-page-tutorial-text-color);
  font-size: 12px;
  margin-left: 24px;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: var(--modal-filters-text);
    font-weight: 500;
  }

  &:focus {
    color: var(--modal-filters-text);
    font-weight: 500;
  }

   &:active {
    color: var(--modal-filters-text);
    font-weight: 500;
  }
`,lt=h.label`
  position: relative;
  display: flex;
  flex-direction: row;

  height: 18px;
  margin: 0;
  cursor: pointer;
  transition: var(--hover-params);

  &:focus {
    color: var(--modal-filters-text);
    scale: 1.1;
  };

  &:hover {
  color: var(--modal-filters-text);
  scale: 1.1;
  };
  
  &:active {
  scale: 1.1} + ${Te} {color: var(--modal-filters-text);
  font-weight: 500;
  }; 

  input[type="radio"]:checked + ${Ve} {
  scale: 0.5} + ${Te} {color: var(--modal-filters-text);
  font-weight: 500;
  };
`,ro=({isOpen:e,onClose:t})=>{const[n,r]=on(),a=n.get("priority");if(!e)return null;const i=()=>{r({priority:"all"}),t()},l=c=>{const u=c.target.value;r({priority:u})};return o.jsx(Za,{onClick:t,children:o.jsxs(Ka,{onClick:c=>c.stopPropagation(),children:[o.jsx(qa,{onClick:t,children:"✕"}),o.jsx(Xa,{children:"Filters"}),o.jsx(Ja,{}),o.jsxs(Qa,{children:[o.jsx(eo,{children:"Label color"}),o.jsx(to,{onClick:i,children:"Show all"})]}),o.jsx(ot,{children:o.jsxs(lt,{children:[o.jsx(it,{type:"radio",name:"radio",value:"without",className:"gray",checked:a==="gray",onChange:l}),o.jsx(Ve,{className:"gray"}),o.jsx(Te,{children:"Without priority"})]})}),o.jsx(ot,{children:o.jsxs(lt,{children:[o.jsx(it,{type:"radio",name:"radio",value:"low",className:"blue",checked:a==="blue",onChange:l}),o.jsx(Ve,{className:"blue"}),o.jsx(Te,{children:" Low "})]})}),o.jsx(ot,{children:o.jsxs(lt,{children:[o.jsx(it,{type:"radio",name:"radio",value:"medium",className:"pink",checked:a==="pink",onChange:l}),o.jsx(Ve,{className:"pink"}),o.jsx(Te,{children:" Medium "})]})}),o.jsx(ot,{children:o.jsxs(lt,{children:[o.jsx(it,{type:"radio",name:"radio",value:"high",className:"green",checked:a==="green",onChange:l}),o.jsx(Ve,{className:"green"}),o.jsx(Te,{children:" High "})]})})]})})},no=h.button`
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
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  background-color: transparent;
  cursor: pointer;
`,ao=h.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 1.5px;
  stroke: var(--filter-text-and-icon-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,oo=()=>{const[e,t]=N.useState(!1),n=()=>{t(!0)},r=()=>{t(!1)};return o.jsxs(o.Fragment,{children:[o.jsxs(no,{onClick:()=>n(),children:[o.jsx(ao,{children:o.jsx("use",{href:U+"#icon-filter"})}),"Filters"]}),o.jsx(ro,{isOpen:e,onClose:r})]})},io=h.div`
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
`,lo=h.h2`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--card-title-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,co=({boardName:e})=>o.jsxs(io,{children:[o.jsx(lo,{children:e}),o.jsx(oo,{})]});var so="Expected a function",gn="__lodash_hash_undefined__",uo="[object Function]",fo="[object GeneratorFunction]",ho=/[\\^$.*+?()[\]{}|]/g,vo=/^\[object .+?Constructor\]$/,po=typeof at=="object"&&at&&at.Object===Object&&at,mo=typeof self=="object"&&self&&self.Object===Object&&self,bn=po||mo||Function("return this")();function go(e,t){return e==null?void 0:e[t]}function bo(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}var xo=Array.prototype,yo=Function.prototype,xn=Object.prototype,Vt=bn["__core-js_shared__"],Wr=function(){var e=/[^.]+$/.exec(Vt&&Vt.keys&&Vt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),yn=yo.toString,cr=xn.hasOwnProperty,wo=xn.toString,Do=RegExp("^"+yn.call(cr).replace(ho,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_o=xo.splice,Oo=wn(bn,"Map"),Be=wn(Object,"create");function _e(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function ko(){this.__data__=Be?Be(null):{}}function jo(e){return this.has(e)&&delete this.__data__[e]}function Co(e){var t=this.__data__;if(Be){var n=t[e];return n===gn?void 0:n}return cr.call(t,e)?t[e]:void 0}function So(e){var t=this.__data__;return Be?t[e]!==void 0:cr.call(t,e)}function To(e,t){var n=this.__data__;return n[e]=Be&&t===void 0?gn:t,this}_e.prototype.clear=ko;_e.prototype.delete=jo;_e.prototype.get=Co;_e.prototype.has=So;_e.prototype.set=To;function We(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Eo(){this.__data__=[]}function No(e){var t=this.__data__,n=_t(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():_o.call(t,n,1),!0}function Mo(e){var t=this.__data__,n=_t(t,e);return n<0?void 0:t[n][1]}function Po(e){return _t(this.__data__,e)>-1}function Ao(e,t){var n=this.__data__,r=_t(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}We.prototype.clear=Eo;We.prototype.delete=No;We.prototype.get=Mo;We.prototype.has=Po;We.prototype.set=Ao;function Oe(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Lo(){this.__data__={hash:new _e,map:new(Oo||We),string:new _e}}function Io(e){return Ot(this,e).delete(e)}function Wo(e){return Ot(this,e).get(e)}function Fo(e){return Ot(this,e).has(e)}function $o(e,t){return Ot(this,e).set(e,t),this}Oe.prototype.clear=Lo;Oe.prototype.delete=Io;Oe.prototype.get=Wo;Oe.prototype.has=Fo;Oe.prototype.set=$o;function _t(e,t){for(var n=e.length;n--;)if(Bo(e[n][0],t))return n;return-1}function Ro(e){if(!Dn(e)||Vo(e))return!1;var t=qo(e)||bo(e)?Do:vo;return t.test(Yo(e))}function Ot(e,t){var n=e.__data__;return zo(t)?n[typeof t=="string"?"string":"hash"]:n.map}function wn(e,t){var n=go(e,t);return Ro(n)?n:void 0}function zo(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Vo(e){return!!Wr&&Wr in e}function Yo(e){if(e!=null){try{return yn.call(e)}catch{}try{return e+""}catch{}}return""}function sr(e,t){if(typeof e!="function"||t&&typeof t!="function")throw new TypeError(so);var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var l=e.apply(this,r);return n.cache=i.set(a,l),l};return n.cache=new(sr.Cache||Oe),n}sr.Cache=Oe;function Bo(e,t){return e===t||e!==e&&t!==t}function qo(e){var t=Dn(e)?wo.call(e):"";return t==uo||t==fo}function Dn(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}var Go=sr;const _n=ln(Go);function On(e){return JSON.stringify(e)}function Ho(e){return typeof e=="string"}function Uo(e,t,n){return n.indexOf(e)===t}function Zo(e){return e.toLowerCase()===e}function Fr(e){return e.indexOf(",")===-1?e:e.split(",")}function Ut(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var t=e.split(".")[0],n=t===void 0?"":t;return Ut(n)}if(e.indexOf("@")!==-1){var r=e.split("@")[0],n=r===void 0?"":r;return Ut(n)}if(e.indexOf("-")===-1||!Zo(e))return e;var a=e.split("-"),i=a[0],l=a[1],c=l===void 0?"":l;return"".concat(i,"-").concat(c.toUpperCase())}function Ko(e){var t=e===void 0?{}:e,n=t.useFallbackLocale,r=n===void 0?!0:n,a=t.fallbackLocale,i=a===void 0?"en-US":a,l=[];if(typeof navigator<"u"){for(var c=navigator.languages||[],u=[],d=0,v=c;d<v.length;d++){var g=v[d];u=u.concat(Fr(g))}var y=navigator.language,p=y&&Fr(y);l=l.concat(u,p)}return r&&l.push(i),l.filter(Ho).map(Ut).filter(Uo)}var Xo=_n(Ko,On);function Jo(e){return Xo(e)[0]||null}var kn=_n(Jo,On);function he(e,t,n){return function(a,i){i===void 0&&(i=n);var l=e(a)+i;return t(l)}}function Ke(e){return function(n){return new Date(e(n).getTime()-1)}}function Xe(e,t){return function(r){return[e(r),t(r)]}}function I(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;var t=parseInt(e,10);if(typeof e=="string"&&!isNaN(t))return t;throw new Error("Failed to get year from date: ".concat(e,"."))}function be(e){if(e instanceof Date)return e.getMonth();throw new Error("Failed to get month from date: ".concat(e,"."))}function kt(e){if(e instanceof Date)return e.getDate();throw new Error("Failed to get year from date: ".concat(e,"."))}function Fe(e){var t=I(e),n=t+(-t+1)%100,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}var Qo=he(I,Fe,-100),jn=he(I,Fe,100),ur=Ke(jn),ei=he(I,ur,-100),Cn=Xe(Fe,ur);function xe(e){var t=I(e),n=t+(-t+1)%10,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}var Sn=he(I,xe,-10),dr=he(I,xe,10),jt=Ke(dr),Tn=he(I,jt,-10),En=Xe(xe,jt);function $e(e){var t=I(e),n=new Date;return n.setFullYear(t,0,1),n.setHours(0,0,0,0),n}var Nn=he(I,$e,-1),fr=he(I,$e,1),Ct=Ke(fr),Mn=he(I,Ct,-1),ti=Xe($e,Ct);function hr(e,t){return function(r,a){a===void 0&&(a=t);var i=I(r),l=be(r)+a,c=new Date;return c.setFullYear(i,l,1),c.setHours(0,0,0,0),e(c)}}function ke(e){var t=I(e),n=be(e),r=new Date;return r.setFullYear(t,n,1),r.setHours(0,0,0,0),r}var Pn=hr(ke,-1),vr=hr(ke,1),Je=Ke(vr),An=hr(Je,-1),ri=Xe(ke,Je);function ni(e,t){return function(r,a){a===void 0&&(a=t);var i=I(r),l=be(r),c=kt(r)+a,u=new Date;return u.setFullYear(i,l,c),u.setHours(0,0,0,0),e(u)}}function Qe(e){var t=I(e),n=be(e),r=kt(e),a=new Date;return a.setFullYear(t,n,r),a.setHours(0,0,0,0),a}var ai=ni(Qe,1),pr=Ke(ai),oi=Xe(Qe,pr);function Ln(e){return kt(Je(e))}var ze,L={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},Ee={ARABIC:"Arabic",HEBREW:"Hebrew",ISO_8601:"ISO 8601",US:"US"},ii=(ze={},ze[L.GREGORY]=["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],ze[L.HEBREW]=["he","he-IL"],ze[L.ISLAMIC]=["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"],ze),mr=[0,1,2,3,4,5,6],Yt=new Map;function li(e){return function(n,r){var a=n||kn();Yt.has(a)||Yt.set(a,new Map);var i=Yt.get(a);return i.has(e)||i.set(e,new Intl.DateTimeFormat(a||void 0,e).format),i.get(e)(r)}}function ci(e){var t=new Date(e);return new Date(t.setHours(12))}function je(e){return function(t,n){return li(e)(t,ci(n))}}var si={day:"numeric"},ui={day:"numeric",month:"long",year:"numeric"},di={month:"long"},fi={month:"long",year:"numeric"},hi={weekday:"short"},vi={weekday:"long"},pi={year:"numeric"},mi=je(si),gi=je(ui),bi=je(di),In=je(fi),xi=je(hi),yi=je(vi),St=je(pi),wi=mr[0],Di=mr[5],$r=mr[6];function qe(e,t){t===void 0&&(t=L.ISO_8601);var n=e.getDay();switch(t){case L.ISO_8601:return(n+6)%7;case L.ISLAMIC:return(n+1)%7;case L.HEBREW:case L.GREGORY:return n;default:throw new Error("Unsupported calendar type.")}}function _i(e){var t=Fe(e);return I(t)}function Oi(e){var t=xe(e);return I(t)}function Zt(e,t){t===void 0&&(t=L.ISO_8601);var n=I(e),r=be(e),a=e.getDate()-qe(e,t);return new Date(n,r,a)}function ki(e,t){t===void 0&&(t=L.ISO_8601);var n=t===L.GREGORY?L.GREGORY:L.ISO_8601,r=Zt(e,t),a=I(e)+1,i,l;do i=new Date(a,0,n===L.ISO_8601?4:1),l=Zt(i,t),a-=1;while(e<l);return Math.round((r.getTime()-l.getTime())/(864e5*7))+1}function De(e,t){switch(e){case"century":return Fe(t);case"decade":return xe(t);case"year":return $e(t);case"month":return ke(t);case"day":return Qe(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function ji(e,t){switch(e){case"century":return Qo(t);case"decade":return Sn(t);case"year":return Nn(t);case"month":return Pn(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Wn(e,t){switch(e){case"century":return jn(t);case"decade":return dr(t);case"year":return fr(t);case"month":return vr(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ci(e,t){switch(e){case"decade":return Sn(t,-100);case"year":return Nn(t,-10);case"month":return Pn(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Si(e,t){switch(e){case"decade":return dr(t,100);case"year":return fr(t,10);case"month":return vr(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Fn(e,t){switch(e){case"century":return ur(t);case"decade":return jt(t);case"year":return Ct(t);case"month":return Je(t);case"day":return pr(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ti(e,t){switch(e){case"century":return ei(t);case"decade":return Tn(t);case"year":return Mn(t);case"month":return An(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ei(e,t){switch(e){case"decade":return Tn(t,-100);case"year":return Mn(t,-10);case"month":return An(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Rr(e,t){switch(e){case"century":return Cn(t);case"decade":return En(t);case"year":return ti(t);case"month":return ri(t);case"day":return oi(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ni(e,t,n){var r=[t,n].sort(function(a,i){return a.getTime()-i.getTime()});return[De(e,r[0]),Fn(e,r[1])]}function $n(e,t,n){return t===void 0&&(t=St),n.map(function(r){return t(e,r)}).join(" – ")}function Mi(e,t,n){return $n(e,t,Cn(n))}function Rn(e,t,n){return $n(e,t,En(n))}function Pi(e){return e.getDay()===new Date().getDay()}function zn(e,t){t===void 0&&(t=L.ISO_8601);var n=e.getDay();switch(t){case L.ISLAMIC:case L.HEBREW:return n===Di||n===$r;case L.ISO_8601:case L.GREGORY:return n===$r||n===wi;default:throw new Error("Unsupported calendar type.")}}var ue="react-calendar__navigation";function Ai(e){var t=e.activeStartDate,n=e.drillUp,r=e.formatMonthYear,a=r===void 0?In:r,i=e.formatYear,l=i===void 0?St:i,c=e.locale,u=e.maxDate,d=e.minDate,v=e.navigationAriaLabel,g=v===void 0?"":v,y=e.navigationAriaLive,p=e.navigationLabel,w=e.next2AriaLabel,_=w===void 0?"":w,j=e.next2Label,D=j===void 0?"»":j,S=e.nextAriaLabel,A=S===void 0?"":S,B=e.nextLabel,oe=B===void 0?"›":B,G=e.prev2AriaLabel,x=G===void 0?"":G,b=e.prev2Label,O=b===void 0?"«":b,f=e.prevAriaLabel,T=f===void 0?"":f,k=e.prevLabel,C=k===void 0?"‹":k,M=e.setActiveStartDate,V=e.showDoubleView,W=e.view,Z=e.views,K=Z.indexOf(W)>0,Q=W!=="century",R=ji(W,t),ee=Q?Ci(W,t):void 0,P=Wn(W,t),ne=Q?Si(W,t):void 0,q=function(){if(R.getFullYear()<0)return!0;var z=Ti(W,t);return d&&d>=z}(),de=Q&&function(){if(ee.getFullYear()<0)return!0;var z=Ei(W,t);return d&&d>=z}(),H=u&&u<P,te=Q&&u&&u<ne;function ie(){M(R,"prev")}function re(){M(ee,"prev2")}function Ce(){M(P,"next")}function ye(){M(ne,"next2")}function ve(z){var Re=function(){switch(W){case"century":return Mi(c,l,z);case"decade":return Rn(c,l,z);case"year":return l(c,z);case"month":return a(c,z);default:throw new Error("Invalid view: ".concat(W,"."))}}();return p?p({date:z,label:Re,locale:c||kn()||void 0,view:W}):Re}function we(){var z="".concat(ue,"__label");return m.createElement("button",{"aria-label":g,"aria-live":y,className:z,disabled:!K,onClick:n,style:{flexGrow:1},type:"button"},m.createElement("span",{className:"".concat(z,"__labelText ").concat(z,"__labelText--from")},ve(t)),V?m.createElement(m.Fragment,null,m.createElement("span",{className:"".concat(z,"__divider")}," – "),m.createElement("span",{className:"".concat(z,"__labelText ").concat(z,"__labelText--to")},ve(P))):null)}return m.createElement("div",{className:ue},O!==null&&Q?m.createElement("button",{"aria-label":x,className:"".concat(ue,"__arrow ").concat(ue,"__prev2-button"),disabled:de,onClick:re,type:"button"},O):null,C!==null&&m.createElement("button",{"aria-label":T,className:"".concat(ue,"__arrow ").concat(ue,"__prev-button"),disabled:q,onClick:ie,type:"button"},C),we(),oe!==null&&m.createElement("button",{"aria-label":A,className:"".concat(ue,"__arrow ").concat(ue,"__next-button"),disabled:H,onClick:Ce,type:"button"},oe),D!==null&&Q?m.createElement("button",{"aria-label":_,className:"".concat(ue,"__arrow ").concat(ue,"__next2-button"),disabled:te,onClick:ye,type:"button"},D):null)}var Ne=function(){return Ne=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ne.apply(this,arguments)},Li=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function zr(e){return"".concat(e,"%")}function gr(e){var t=e.children,n=e.className,r=e.count,a=e.direction,i=e.offset,l=e.style,c=e.wrap,u=Li(e,["children","className","count","direction","offset","style","wrap"]);return m.createElement("div",Ne({className:n,style:Ne({display:"flex",flexDirection:a,flexWrap:c?"wrap":"nowrap"},l)},u),m.Children.map(t,function(d,v){var g=i&&v===0?zr(100*i/r):null;return m.cloneElement(d,Ne(Ne({},d.props),{style:{flexBasis:zr(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:g,marginInlineStart:g,marginInlineEnd:0}}))}))}var Se;function Ii(e,t,n){return t&&t>e?t:n&&n<e?n:e}function Ge(e,t){return t[0]<=e&&t[1]>=e}function Wi(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function Vn(e,t){return Ge(e[0],t)||Ge(e[1],t)}function Vr(e,t,n){var r=Vn(t,e),a=[];if(r){a.push(n);var i=Ge(e[0],t),l=Ge(e[1],t);i&&a.push("".concat(n,"Start")),l&&a.push("".concat(n,"End")),i&&l&&a.push("".concat(n,"BothEnds"))}return a}function Fi(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function $i(e){if(!e)throw new Error("args is required");var t=e.value,n=e.date,r=e.hover,a="react-calendar__tile",i=[a];if(!n)return i;var l=new Date,c=function(){if(Array.isArray(n))return n;var p=e.dateType;if(!p)throw new Error("dateType is required when date is not an array of two dates");return Rr(p,n)}();if(Ge(l,c)&&i.push("".concat(a,"--now")),!t||!Fi(t))return i;var u=function(){if(Array.isArray(t))return t;var p=e.valueType;if(!p)throw new Error("valueType is required when value is not an array of two dates");return Rr(p,t)}();Wi(u,c)?i.push("".concat(a,"--active")):Vn(u,c)&&i.push("".concat(a,"--hasActive"));var d=Vr(u,c,"".concat(a,"--range"));i.push.apply(i,d);var v=Array.isArray(t)?t:[t];if(r&&v.length===1){var g=r>u[0]?[u[0],r]:[r,u[0]],y=Vr(g,c,"".concat(a,"--hover"));i.push.apply(i,y)}return i}var Ri=(Se={},Se[Ee.ARABIC]=L.ISLAMIC,Se[Ee.HEBREW]=L.HEBREW,Se[Ee.ISO_8601]=L.ISO_8601,Se[Ee.US]=L.GREGORY,Se);function zi(e){return e!==void 0&&e in Ee}var Yr=!1;function Tt(e){if(zi(e)){var t=Ri[e];return Ga(Yr,'Specifying calendarType="'.concat(e,'" is deprecated. Use calendarType="').concat(t,'" instead.')),Yr=!0,t}return e}function Et(e){for(var t=e.className,n=e.count,r=n===void 0?3:n,a=e.dateTransform,i=e.dateType,l=e.end,c=e.hover,u=e.offset,d=e.renderTile,v=e.start,g=e.step,y=g===void 0?1:g,p=e.value,w=e.valueType,_=[],j=v;j<=l;j+=y){var D=a(j);_.push(d({classes:$i({date:D,dateType:i,hover:c,value:p,valueType:w}),date:D}))}return m.createElement(gr,{className:t,count:r,offset:u,wrap:!0},_)}function Nt(e){var t=e.activeStartDate,n=e.children,r=e.classes,a=e.date,i=e.formatAbbr,l=e.locale,c=e.maxDate,u=e.maxDateTransform,d=e.minDate,v=e.minDateTransform,g=e.onClick,y=e.onMouseOver,p=e.style,w=e.tileClassName,_=e.tileContent,j=e.tileDisabled,D=e.view,S=N.useMemo(function(){var B={activeStartDate:t,date:a,view:D};return typeof w=="function"?w(B):w},[t,a,w,D]),A=N.useMemo(function(){var B={activeStartDate:t,date:a,view:D};return typeof _=="function"?_(B):_},[t,a,_,D]);return m.createElement("button",{className:gt(r,S),disabled:d&&v(d)>a||c&&u(c)<a||j&&j({activeStartDate:t,date:a,view:D}),onClick:g?function(B){return g(a,B)}:void 0,onFocus:y?function(){return y(a)}:void 0,onMouseOver:y?function(){return y(a)}:void 0,style:p,type:"button"},i?m.createElement("abbr",{"aria-label":i(l,a)},n):n,A)}var Kt=function(){return Kt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Kt.apply(this,arguments)},Vi=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},Bt="react-calendar__century-view__decades__decade";function Yi(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentCentury,a=e.formatYear,i=a===void 0?St:a,l=Vi(e,["classes","currentCentury","formatYear"]),c=l.date,u=l.locale,d=[];return n&&d.push.apply(d,n),Bt&&d.push(Bt),Fe(c).getFullYear()!==r&&d.push("".concat(Bt,"--neighboringCentury")),m.createElement(Nt,Kt({},l,{classes:d,maxDateTransform:jt,minDateTransform:xe,view:"century"}),Rn(u,i,c))}var Xt=function(){return Xt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Xt.apply(this,arguments)},Br=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function Bi(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringCentury,a=e.value,i=e.valueType,l=Br(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),c=_i(t),u=c+(r?119:99);return m.createElement(Et,{className:"react-calendar__century-view__decades",dateTransform:xe,dateType:"decade",end:u,hover:n,renderTile:function(d){var v=d.date,g=Br(d,["date"]);return m.createElement(Yi,Xt({key:v.getTime()},l,g,{activeStartDate:t,currentCentury:c,date:v}))},start:c,step:10,value:a,valueType:i})}var qr=function(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))},qi=Object.values(L),Gi=Object.values(Ee),Jt=["century","decade","year","month"],Yn=s.oneOf(qr(qr([],qi,!0),Gi,!0)),ft=s.oneOfType([s.string,s.arrayOf(s.string)]),br=function(t,n,r){var a=t,i=n,l=a[i];if(!l)return null;if(!(l instanceof Date))return new Error("Invalid prop `".concat(n,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, expected instance of `Date`."));var c=t.maxDate;return c&&l>c?new Error("Invalid prop `".concat(n,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, minDate cannot be larger than maxDate.")):null},xr=function(t,n,r){var a=t,i=n,l=a[i];if(!l)return null;if(!(l instanceof Date))return new Error("Invalid prop `".concat(n,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, expected instance of `Date`."));var c=t.minDate;return c&&l<c?new Error("Invalid prop `".concat(n,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, maxDate cannot be smaller than minDate.")):null},Hi=s.oneOfType([s.func,s.exact({current:s.any})]),Ui=s.arrayOf(s.oneOfType([s.instanceOf(Date),s.oneOf([null])]).isRequired),Zi=s.oneOfType([s.instanceOf(Date),s.oneOf([null]),Ui]);s.arrayOf(s.oneOf(Jt));var ht=function(t,n,r){var a=t,i=n,l=a[i];return l!==void 0&&(typeof l!="string"||Jt.indexOf(l)===-1)?new Error("Invalid prop `".concat(n,"` of value `").concat(l,"` supplied to `").concat(r,"`, expected one of [").concat(Jt.map(function(c){return'"'.concat(c,'"')}).join(", "),"].")):null};ht.isRequired=function(t,n,r,a,i){var l=t,c=n,u=l[c];return u?ht(t,n,r):new Error("The prop `".concat(n,"` is marked as required in `").concat(r,"`, but its value is `").concat(u,"`."))};var Ki=function(e){return s.arrayOf(e)},Mt={activeStartDate:s.instanceOf(Date).isRequired,hover:s.instanceOf(Date),locale:s.string,maxDate:xr,minDate:br,onClick:s.func,onMouseOver:s.func,tileClassName:s.oneOfType([s.func,ft]),tileContent:s.oneOfType([s.func,s.node]),value:Zi,valueType:s.oneOf(["century","decade","year","month","day"]).isRequired};s.instanceOf(Date).isRequired,s.arrayOf(s.string.isRequired).isRequired,s.instanceOf(Date).isRequired,s.string,s.func,s.func,s.objectOf(s.oneOfType([s.string,s.number])),s.oneOfType([s.func,ft]),s.oneOfType([s.func,s.node]),s.func;var He=function(){return He=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},He.apply(this,arguments)},Bn=function(t){function n(){return m.createElement(Bi,He({},t))}return m.createElement("div",{className:"react-calendar__century-view"},n())};Bn.propTypes=He(He({},Mt),{showNeighboringCentury:s.bool});const Xi=Bn;var Qt=function(){return Qt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Qt.apply(this,arguments)},Ji=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},qt="react-calendar__decade-view__years__year";function Qi(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentDecade,a=e.formatYear,i=a===void 0?St:a,l=Ji(e,["classes","currentDecade","formatYear"]),c=l.date,u=l.locale,d=[];return n&&d.push.apply(d,n),qt&&d.push(qt),xe(c).getFullYear()!==r&&d.push("".concat(qt,"--neighboringDecade")),m.createElement(Nt,Qt({},l,{classes:d,maxDateTransform:Ct,minDateTransform:$e,view:"decade"}),i(u,c))}var er=function(){return er=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},er.apply(this,arguments)},Gr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function el(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringDecade,a=e.value,i=e.valueType,l=Gr(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),c=Oi(t),u=c+(r?11:9);return m.createElement(Et,{className:"react-calendar__decade-view__years",dateTransform:$e,dateType:"year",end:u,hover:n,renderTile:function(d){var v=d.date,g=Gr(d,["date"]);return m.createElement(Qi,er({key:v.getTime()},l,g,{activeStartDate:t,currentDecade:c,date:v}))},start:c,value:a,valueType:i})}var Ue=function(){return Ue=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ue.apply(this,arguments)},qn=function(t){function n(){return m.createElement(el,Ue({},t))}return m.createElement("div",{className:"react-calendar__decade-view"},n())};qn.propTypes=Ue(Ue({},Mt),{showNeighboringDecade:s.bool});const tl=qn;var tr=function(){return tr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},tr.apply(this,arguments)},rl=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},Hr=function(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))},nl="react-calendar__year-view__months__month";function al(e){var t=e.classes,n=t===void 0?[]:t,r=e.formatMonth,a=r===void 0?bi:r,i=e.formatMonthYear,l=i===void 0?In:i,c=rl(e,["classes","formatMonth","formatMonthYear"]),u=c.date,d=c.locale;return m.createElement(Nt,tr({},c,{classes:Hr(Hr([],n,!0),[nl],!1),formatAbbr:l,maxDateTransform:Je,minDateTransform:ke,view:"year"}),a(d,u))}var rr=function(){return rr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},rr.apply(this,arguments)},Ur=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function ol(e){var t=e.activeStartDate,n=e.hover,r=e.value,a=e.valueType,i=Ur(e,["activeStartDate","hover","value","valueType"]),l=0,c=11,u=I(t);return m.createElement(Et,{className:"react-calendar__year-view__months",dateTransform:function(d){var v=new Date;return v.setFullYear(u,d,1),ke(v)},dateType:"month",end:c,hover:n,renderTile:function(d){var v=d.date,g=Ur(d,["date"]);return m.createElement(al,rr({key:v.getTime()},i,g,{activeStartDate:t,date:v}))},start:l,value:r,valueType:a})}var vt=function(){return vt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},vt.apply(this,arguments)},Gn=function(t){function n(){return m.createElement(ol,vt({},t))}return m.createElement("div",{className:"react-calendar__year-view"},n())};Gn.propTypes=vt({},Mt);const il=Gn;var nr=function(){return nr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},nr.apply(this,arguments)},ll=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},ct="react-calendar__month-view__days__day";function cl(e){var t=e.calendarType,n=e.classes,r=n===void 0?[]:n,a=e.currentMonthIndex,i=e.formatDay,l=i===void 0?mi:i,c=e.formatLongDate,u=c===void 0?gi:c,d=ll(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),v=Tt(t),g=d.date,y=d.locale,p=[];return r&&p.push.apply(p,r),ct&&p.push(ct),zn(g,v)&&p.push("".concat(ct,"--weekend")),g.getMonth()!==a&&p.push("".concat(ct,"--neighboringMonth")),m.createElement(Nt,nr({},d,{classes:p,formatAbbr:u,maxDateTransform:pr,minDateTransform:Qe,view:"month"}),l(y,g))}var ar=function(){return ar=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ar.apply(this,arguments)},Zr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function sl(e){var t=e.activeStartDate,n=e.calendarType,r=e.hover,a=e.showFixedNumberOfWeeks,i=e.showNeighboringMonth,l=e.value,c=e.valueType,u=Zr(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),d=Tt(n),v=I(t),g=be(t),y=a||i,p=qe(t,d),w=y?0:p,_=(y?-p:0)+1,j=function(){if(a)return _+6*7-1;var D=Ln(t);if(i){var S=new Date;S.setFullYear(v,g,D),S.setHours(0,0,0,0);var A=7-qe(S,d)-1;return D+A}return D}();return m.createElement(Et,{className:"react-calendar__month-view__days",count:7,dateTransform:function(D){var S=new Date;return S.setFullYear(v,g,D),Qe(S)},dateType:"day",hover:r,end:j,renderTile:function(D){var S=D.date,A=Zr(D,["date"]);return m.createElement(cl,ar({key:S.getTime()},u,A,{activeStartDate:t,calendarType:n,currentMonthIndex:g,date:S}))},offset:w,start:_,value:l,valueType:c})}var Hn="react-calendar__month-view__weekdays",Gt="".concat(Hn,"__weekday");function ul(e){for(var t=e.calendarType,n=e.formatShortWeekday,r=n===void 0?xi:n,a=e.formatWeekday,i=a===void 0?yi:a,l=e.locale,c=e.onMouseLeave,u=Tt(t),d=new Date,v=ke(d),g=I(v),y=be(v),p=[],w=1;w<=7;w+=1){var _=new Date(g,y,w-qe(v,u)),j=i(l,_);p.push(m.createElement("div",{key:w,className:gt(Gt,Pi(_)&&"".concat(Gt,"--current"),zn(_,u)&&"".concat(Gt,"--weekend"))},m.createElement("abbr",{"aria-label":j,title:j},r(l,_).replace(".",""))))}return m.createElement(gr,{className:Hn,count:7,onFocus:c,onMouseOver:c},p)}var pt=function(){return pt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},pt.apply(this,arguments)},Kr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},Xr="react-calendar__tile";function dl(e){var t=e.onClickWeekNumber,n=e.weekNumber,r=m.createElement("span",null,n);if(t){var a=e.date,i=e.onClickWeekNumber,l=e.weekNumber,c=Kr(e,["date","onClickWeekNumber","weekNumber"]);return m.createElement("button",pt({},c,{className:Xr,onClick:function(u){return i(l,a,u)},type:"button"}),r)}else{e.date,e.onClickWeekNumber,e.weekNumber;var c=Kr(e,["date","onClickWeekNumber","weekNumber"]);return m.createElement("div",pt({},c,{className:Xr}),r)}}function fl(e){var t=e.activeStartDate,n=e.calendarType,r=e.onClickWeekNumber,a=e.onMouseLeave,i=e.showFixedNumberOfWeeks,l=Tt(n),c=function(){if(i)return 6;var v=Ln(t),g=qe(t,l),y=v-(7-g);return 1+Math.ceil(y/7)}(),u=function(){for(var v=I(t),g=be(t),y=kt(t),p=[],w=0;w<c;w+=1)p.push(Zt(new Date(v,g,y+w*7),l));return p}(),d=u.map(function(v){return ki(v,l)});return m.createElement(gr,{className:"react-calendar__month-view__weekNumbers",count:c,direction:"column",onFocus:a,onMouseOver:a,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0}},d.map(function(v,g){var y=u[g];if(!y)throw new Error("date is not defined");return m.createElement(dl,{key:v,date:y,onClickWeekNumber:r,weekNumber:v})}))}var Ze=function(){return Ze=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ze.apply(this,arguments)},hl=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function vl(e){if(e)for(var t=0,n=Object.entries(ii);t<n.length;t++){var r=n[t],a=r[0],i=r[1];if(i.includes(e))return a}return L.ISO_8601}var Un=function(t){var n=t.activeStartDate,r=t.locale,a=t.onMouseLeave,i=t.showFixedNumberOfWeeks,l=t.calendarType,c=l===void 0?vl(r):l,u=t.formatShortWeekday,d=t.formatWeekday,v=t.onClickWeekNumber,g=t.showWeekNumbers,y=hl(t,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function p(){return m.createElement(ul,{calendarType:c,formatShortWeekday:u,formatWeekday:d,locale:r,onMouseLeave:a})}function w(){return g?m.createElement(fl,{activeStartDate:n,calendarType:c,onClickWeekNumber:v,onMouseLeave:a,showFixedNumberOfWeeks:i}):null}function _(){return m.createElement(sl,Ze({calendarType:c},y))}var j="react-calendar__month-view";return m.createElement("div",{className:gt(j,g?"".concat(j,"--weekNumbers"):"")},m.createElement("div",{style:{display:"flex",alignItems:"flex-end"}},w(),m.createElement("div",{style:{flexGrow:1,width:"100%"}},p(),_())))};Un.propTypes=Ze(Ze({},Mt),{calendarType:Yn,formatDay:s.func,formatLongDate:s.func,formatShortWeekday:s.func,formatWeekday:s.func,onClickWeekNumber:s.func,onMouseLeave:s.func,showFixedNumberOfWeeks:s.bool,showNeighboringMonth:s.bool,showWeekNumbers:s.bool});const pl=Un;var Me=function(){return Me=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Me.apply(this,arguments)},st="react-calendar",Le=["century","decade","year","month"],ml=["decade","year","month","day"],yr=new Date;yr.setFullYear(1,0,1);yr.setHours(0,0,0,0);var gl=new Date(864e13);function Ye(e){return e instanceof Date?e:new Date(e)}function Zn(e,t){return Le.slice(Le.indexOf(e),Le.indexOf(t)+1)}function bl(e,t,n){var r=Zn(t,n);return r.indexOf(e)!==-1}function wr(e,t,n){return e&&bl(e,t,n)?e:n}function Kn(e){var t=Le.indexOf(e);return ml[t]}function xl(e,t){var n=Array.isArray(e)?e[t]:e;if(!n)return null;var r=Ye(n);if(isNaN(r.getTime()))throw new Error("Invalid date: ".concat(e));return r}function Xn(e,t){var n=e.value,r=e.minDate,a=e.maxDate,i=e.maxDetail,l=xl(n,t);if(!l)return null;var c=Kn(i),u=function(){switch(t){case 0:return De(c,l);case 1:return Fn(c,l);default:throw new Error("Invalid index value: ".concat(t))}}();return Ii(u,r,a)}var Dr=function(e){return Xn(e,0)},Jn=function(e){return Xn(e,1)},yl=function(e){return[Dr,Jn].map(function(t){return t(e)})};function Qn(e){var t=e.maxDate,n=e.maxDetail,r=e.minDate,a=e.minDetail,i=e.value,l=e.view,c=wr(l,a,n),u=Dr({value:i,minDate:r,maxDate:t,maxDetail:n})||new Date;return De(c,u)}function wl(e){var t=e.activeStartDate,n=e.defaultActiveStartDate,r=e.defaultValue,a=e.defaultView,i=e.maxDate,l=e.maxDetail,c=e.minDate,u=e.minDetail,d=e.value,v=e.view,g=wr(v,u,l),y=t||n;return y?De(g,y):Qn({maxDate:i,maxDetail:l,minDate:c,minDetail:u,value:d||r,view:v||a})}function Ht(e){return e&&(!Array.isArray(e)||e.length===1)}function ut(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var ea=N.forwardRef(function(t,n){var r=t.activeStartDate,a=t.allowPartialRange,i=t.calendarType,l=t.className,c=t.defaultActiveStartDate,u=t.defaultValue,d=t.defaultView,v=t.formatDay,g=t.formatLongDate,y=t.formatMonth,p=t.formatMonthYear,w=t.formatShortWeekday,_=t.formatWeekday,j=t.formatYear,D=t.goToRangeStartOnSelect,S=D===void 0?!0:D,A=t.inputRef,B=t.locale,oe=t.maxDate,G=oe===void 0?gl:oe,x=t.maxDetail,b=x===void 0?"month":x,O=t.minDate,f=O===void 0?yr:O,T=t.minDetail,k=T===void 0?"century":T,C=t.navigationAriaLabel,M=t.navigationAriaLive,V=t.navigationLabel,W=t.next2AriaLabel,Z=t.next2Label,K=t.nextAriaLabel,Q=t.nextLabel,R=t.onActiveStartDateChange,ee=t.onChange,P=t.onClickDay,ne=t.onClickDecade,q=t.onClickMonth,de=t.onClickWeekNumber,H=t.onClickYear,te=t.onDrillDown,ie=t.onDrillUp,re=t.onViewChange,Ce=t.prev2AriaLabel,ye=t.prev2Label,ve=t.prevAriaLabel,we=t.prevLabel,z=t.returnValue,Re=z===void 0?"start":z,ae=t.selectRange,et=t.showDoubleView,_r=t.showFixedNumberOfWeeks,Or=t.showNavigation,ma=Or===void 0?!0:Or,ga=t.showNeighboringCentury,ba=t.showNeighboringDecade,kr=t.showNeighboringMonth,xa=kr===void 0?!0:kr,ya=t.showWeekNumbers,wa=t.tileClassName,Da=t.tileContent,_a=t.tileDisabled,Pt=t.value,jr=t.view,Cr=N.useState(c),Oa=Cr[0],tt=Cr[1],Sr=N.useState(null),ka=Sr[0],Tr=Sr[1],Er=N.useState(Array.isArray(u)?u.map(function(E){return E!==null?Ye(E):null}):u!=null?Ye(u):null),At=Er[0],ja=Er[1],Nr=N.useState(d),Ca=Nr[0],Mr=Nr[1],X=r||Oa||wl({activeStartDate:r,defaultActiveStartDate:c,defaultValue:u,defaultView:d,maxDate:G,maxDetail:b,minDate:f,minDetail:k,value:Pt,view:jr}),J=function(){var E=function(){return ae&&Ht(At)?At:Pt!==void 0?Pt:At}();return E?Array.isArray(E)?E.map(function($){return $!==null?Ye($):null}):E!==null?Ye(E):null:null}(),rt=Kn(b),F=wr(jr||Ca,k,b),se=Zn(k,b),Sa=ae?ka:null,Lt=se.indexOf(F)<se.length-1,Pr=se.indexOf(F)>0,Ar=N.useCallback(function(E){var $=function(){switch(Re){case"start":return Dr;case"end":return Jn;case"range":return yl;default:throw new Error("Invalid returnValue.")}}();return $({maxDate:G,maxDetail:b,minDate:f,value:E})},[G,b,f,Re]),It=N.useCallback(function(E,$){tt(E);var Y={action:$,activeStartDate:E,value:J,view:F};R&&!ut(X,E)&&R(Y)},[X,R,J,F]),nt=N.useCallback(function(E,$){var Y=function(){switch(F){case"century":return ne;case"decade":return H;case"year":return q;case"month":return P;default:throw new Error("Invalid view: ".concat(F,"."))}}();Y&&Y(E,$)},[P,ne,q,H,F]),Wt=N.useCallback(function(E,$){if(Lt){nt(E,$);var Y=se[se.indexOf(F)+1];if(!Y)throw new Error("Attempted to drill down from the lowest view.");tt(E),Mr(Y);var le={action:"drillDown",activeStartDate:E,value:J,view:Y};R&&!ut(X,E)&&R(le),re&&F!==Y&&re(le),te&&te(le)}},[X,Lt,R,nt,te,re,J,F,se]),Ft=N.useCallback(function(){if(Pr){var E=se[se.indexOf(F)-1];if(!E)throw new Error("Attempted to drill up from the highest view.");var $=De(E,X);tt($),Mr(E);var Y={action:"drillUp",activeStartDate:$,value:J,view:E};R&&!ut(X,$)&&R(Y),re&&F!==E&&re(Y),ie&&ie(Y)}},[X,Pr,R,ie,re,J,F,se]),$t=N.useCallback(function(E,$){var Y=J;nt(E,$);var le=ae&&!Ht(Y),ce;if(ae)if(le)ce=De(rt,E);else{if(!Y)throw new Error("previousValue is required");if(Array.isArray(Y))throw new Error("previousValue must not be an array");ce=Ni(rt,Y,E)}else ce=Ar(E);var zt=!ae||le||S?Qn({maxDate:G,maxDetail:b,minDate:f,minDetail:k,value:ce,view:F}):null;$.persist(),tt(zt),ja(ce);var Ma={action:"onChange",activeStartDate:zt,value:ce,view:F};if(R&&!ut(X,zt)&&R(Ma),ee)if(ae){var Pa=Ht(ce);if(!Pa)ee(ce||null,$);else if(a){if(Array.isArray(ce))throw new Error("value must not be an array");ee([ce||null,null],$)}}else ee(ce||null,$)},[X,a,Ar,S,G,b,f,k,R,ee,nt,ae,J,rt,F]);function Ta(E){Tr(E)}function Rt(){Tr(null)}N.useImperativeHandle(n,function(){return{activeStartDate:X,drillDown:Wt,drillUp:Ft,onChange:$t,setActiveStartDate:It,value:J,view:F}},[X,Wt,Ft,$t,It,J,F]);function Lr(E){var $=E?Wn(F,X):De(F,X),Y=Lt?Wt:$t,le={activeStartDate:$,hover:Sa,locale:B,maxDate:G,minDate:f,onClick:Y,onMouseOver:ae?Ta:void 0,tileClassName:wa,tileContent:Da,tileDisabled:_a,value:J,valueType:rt};switch(F){case"century":return m.createElement(Xi,Me({formatYear:j,showNeighboringCentury:ga},le));case"decade":return m.createElement(tl,Me({formatYear:j,showNeighboringDecade:ba},le));case"year":return m.createElement(il,Me({formatMonth:y,formatMonthYear:p},le));case"month":return m.createElement(pl,Me({calendarType:i,formatDay:v,formatLongDate:g,formatShortWeekday:w,formatWeekday:_,onClickWeekNumber:de,onMouseLeave:ae?Rt:void 0,showFixedNumberOfWeeks:typeof _r<"u"?_r:et,showNeighboringMonth:xa,showWeekNumbers:ya},le));default:throw new Error("Invalid view: ".concat(F,"."))}}function Ea(){return ma?m.createElement(Ai,{activeStartDate:X,drillUp:Ft,formatMonthYear:p,formatYear:j,locale:B,maxDate:G,minDate:f,navigationAriaLabel:C,navigationAriaLive:M,navigationLabel:V,next2AriaLabel:W,next2Label:Z,nextAriaLabel:K,nextLabel:Q,prev2AriaLabel:Ce,prev2Label:ye,prevAriaLabel:ve,prevLabel:we,setActiveStartDate:It,showDoubleView:et,view:F,views:se}):null}var Na=Array.isArray(J)?J:[J];return m.createElement("div",{className:gt(st,ae&&Na.length===1&&"".concat(st,"--selectRange"),et&&"".concat(st,"--doubleView"),l),ref:A},Ea(),m.createElement("div",{className:"".concat(st,"__viewContainer"),onBlur:ae?Rt:void 0,onMouseLeave:ae?Rt:void 0},Lr(),et?Lr(!0):null))}),Jr=s.instanceOf(Date),Qr=s.oneOfType([s.string,s.instanceOf(Date)]),en=s.oneOfType([Qr,Ki(Qr)]);ea.propTypes={activeStartDate:Jr,allowPartialRange:s.bool,calendarType:Yn,className:ft,defaultActiveStartDate:Jr,defaultValue:en,defaultView:ht,formatDay:s.func,formatLongDate:s.func,formatMonth:s.func,formatMonthYear:s.func,formatShortWeekday:s.func,formatWeekday:s.func,formatYear:s.func,goToRangeStartOnSelect:s.bool,inputRef:Hi,locale:s.string,maxDate:xr,maxDetail:s.oneOf(Le),minDate:br,minDetail:s.oneOf(Le),navigationAriaLabel:s.string,navigationAriaLive:s.oneOf(["off","polite","assertive"]),navigationLabel:s.func,next2AriaLabel:s.string,next2Label:s.node,nextAriaLabel:s.string,nextLabel:s.node,onActiveStartDateChange:s.func,onChange:s.func,onClickDay:s.func,onClickDecade:s.func,onClickMonth:s.func,onClickWeekNumber:s.func,onClickYear:s.func,onDrillDown:s.func,onDrillUp:s.func,onViewChange:s.func,prev2AriaLabel:s.string,prev2Label:s.node,prevAriaLabel:s.string,prevLabel:s.node,returnValue:s.oneOf(["start","end","range"]),selectRange:s.bool,showDoubleView:s.bool,showFixedNumberOfWeeks:s.bool,showNavigation:s.bool,showNeighboringCentury:s.bool,showNeighboringDecade:s.bool,showNeighboringMonth:s.bool,showWeekNumbers:s.bool,tileClassName:s.oneOfType([s.func,ft]),tileContent:s.oneOfType([s.func,s.node]),tileDisabled:s.func,value:en,view:ht};const Dl=ea,ta=h(Dl)`
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
    transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
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
    transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

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
    transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

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
    transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

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
    transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      color: #9dc888;
    }
  }
`,ra=h.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,na=h.textarea`
  padding: 14px 18px;
  resize: none;
  width: 100%;
  height: 154px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: var(--primary-card-background-color);
  color: var(--card-title-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 14px;
  font-weight: 400;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  &:focus {
    border-color: #bedbb0;
  }
`,pe=h(lr)`
  position: absolute;
  appearance: none;
  z-index: 5;
  top: 0;
  left: 0;
  border-radius: 50%;
  margin: 0;
  width: 14px;
  height: 14px;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
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
`,aa=h.div`
  display: flex;
  gap: 4px;
  width: 200px;
  margin-bottom: 40px;
  align-items: center;
  cursor: pointer;
`,oa=h.p`
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  margin-top: 14px;
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
`,ia=h.h2`
  margin: 0;
  margin-top: 14px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Poppins", sans-serif;
`,la=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,fe=h.span`
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: transparent;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

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
`,me=h.label`
  position: relative;
  width: 14px;
  height: 14px;
  margin: 0;

  input[type="radio"]:checked + ${fe} {
    scale: 0.5;
  }
`,ca=h.input`
  padding: 14px 18px;
  width: 100%;
  border-radius: 6px;
  height: 49px;
  border: 1px solid #ccc;
  background: var(--primary-card-background-color);
  color: var(--card-title-color);
  transition: var(--hover-paramas);
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  box-shadow: none;
  cursor: pointer;

  &:focus {
    border-color: #bedbb0;
  }
`,sa=h.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #bedbb0;
`,ua=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  width: 28px;
  height: 28px;
  background-color: rgb(22, 22, 22);
  margin-right: 8px;
  padding: 7px;
`,da=h.svg`
  width: 28px;
  height: 28px;
  stroke: rgb(255, 255, 255);
`,fa=h.button`
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

  transition: all 450ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,ha=h(pn)`
  position: absolute;
  padding-left: 8px;
  margin: 0;
  color: red;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`,mt=h.div`
  line-height: 0;
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 0;
`,va=h(pn)`
  position: absolute;
  bottom: -12px;
  padding-left: 8px;
  margin: 0;
  color: red;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`,pa=h.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: #bedbb0;
`;xt.setAppElement("#root");const _l=wt().shape({title:ge().required("Title is required"),description:ge().required("Description is required"),color:ge().required("Color selection is required"),deadline:mn().required("Deadline is required")});function Ol({isModalOpen:e,modalStateSwapper:t,cardId:n,cardTitle:r,cardColor:a,cardDescription:i,cardDeadline:l}){const[c,u]=N.useState(null),d=Ie(),{isModalOpen:v,openModal:g,closeModal:y}=Ae(),p={overlay:{backgroundColor:"rgb(21, 21, 21, 0.75)"},content:{width:"233px",height:"254px",margin:"auto",padding:0,border:"none",borderRadius:"8px"}},w=(D,{setSubmitting:S,resetForm:A})=>{const B={cardId:n,title:D.title,description:D.description,color:D.color,deadline:c};d(Aa(B)),S(!1),A(),t(),setTimeout(()=>{u(null)},1e3)},_=(D,S)=>["Su","Mo","Tu","We","Th","Fr","Sa"][S.getDay()],j=D=>{const S=new Date(D),A=S.getDate(),B=S.toLocaleString("en",{month:"long"});return`${S.toLocaleString("en",{weekday:"long"})}, ${B} ${A}`};return o.jsx(o.Fragment,{children:o.jsxs(yt,{modalIsOpen:e,closeModal:t,title:"Edit card",maxWidth:"350px",children:[o.jsx(Dt,{initialValues:{title:`${r}`,description:`${i}`,color:`${a}`,deadline:`${l}`},validationSchema:_l,onSubmit:w,children:({values:D,handleChange:S,handleSubmit:A})=>o.jsxs(ra,{onSubmit:A,children:[o.jsxs(mt,{children:[o.jsx(ca,{type:"text",name:"title",onChange:S,value:D.title,placeholder:"Title"}),o.jsx(ha,{name:"title",component:"div",className:"error"})]}),o.jsxs(mt,{children:[o.jsx(na,{name:"description",onChange:S,value:D.description,placeholder:"Description"}),o.jsx(va,{name:"Description",component:"div",className:"error"})]}),o.jsx(ia,{children:"Label color"}),o.jsxs(la,{children:[o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"blue",className:"blue",checked:D.color==="blue",onChange:S}),o.jsx(fe,{className:"blue"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"pink",className:"pink",checked:D.color==="pink",onChange:S}),o.jsx(fe,{className:"pink"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"green",className:"green",checked:D.color==="green",onChange:S}),o.jsx(fe,{className:"green"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"gray",className:"gray",checked:D.color==="gray",onChange:S}),o.jsx(fe,{className:"gray"})]})]}),o.jsx(oa,{children:"Deadline"}),o.jsxs(aa,{children:[o.jsx(sa,{onClick:g,children:j(c===null?l:c)}),o.jsx(pa,{children:o.jsx("use",{href:U+"#icon-chevron-down"})})]}),o.jsxs(fa,{type:"submit",children:[o.jsx(ua,{children:o.jsx(da,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Edit"]})]})}),o.jsx(xt,{isOpen:v,onRequestClose:y,style:p,closeTimeoutMS:750,children:o.jsx(ta,{formatShortWeekday:_,value:c,onChange:u,onClickDay:y,minDate:new Date})})]})})}var or={exports:{}};(function(e,t){(function(n,r){r(t,N,Ha)})(void 0,function(n,r,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=c(r),l=c(a);function c(x){return x&&x.__esModule?x:{default:x}}function u(x){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?u=function(O){return typeof O}:u=function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},u(x)}function d(x,b){if(x==null)return{};var O=v(x,b),f,T;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(x);for(T=0;T<k.length;T++)f=k[T],!(b.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(x,f)&&(O[f]=x[f])}return O}function v(x,b){if(x==null)return{};var O={},f=Object.keys(x),T,k;for(k=0;k<f.length;k++)T=f[k],!(b.indexOf(T)>=0)&&(O[T]=x[T]);return O}function g(x,b){if(!(x instanceof b))throw new TypeError("Cannot call a class as a function")}function y(x,b){for(var O=0;O<b.length;O++){var f=b[O];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(x,f.key,f)}}function p(x,b,O){return b&&y(x.prototype,b),O&&y(x,O),x}function w(x,b){return b&&(u(b)==="object"||typeof b=="function")?b:j(x)}function _(x){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(O){return O.__proto__||Object.getPrototypeOf(O)},_(x)}function j(x){if(x===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x}function D(x,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function");x.prototype=Object.create(b&&b.prototype,{constructor:{value:x,writable:!0,configurable:!0}}),b&&S(x,b)}function S(x,b){return S=Object.setPrototypeOf||function(f,T){return f.__proto__=T,f},S(x,b)}function A(x,b,O){return b in x?Object.defineProperty(x,b,{value:O,enumerable:!0,configurable:!0,writable:!0}):x[b]=O,x}var B=1e-4,oe=function(b,O){return Math.abs(b-O)<B},G=function(x){D(b,x);function b(){var O,f;g(this,b);for(var T=arguments.length,k=new Array(T),C=0;C<T;C++)k[C]=arguments[C];return f=w(this,(O=_(b)).call.apply(O,[this].concat(k))),A(j(f),"onResize",function(){f.rafId&&window.cancelAnimationFrame(f.rafId),f.rafId=window.requestAnimationFrame(f.update.bind(j(f)))}),A(j(f),"onToggled",function(M){typeof f.props.onToggled=="function"&&setTimeout(function(){return f.props.onToggled(M)},0)}),A(j(f),"onTruncated",function(){typeof f.props.onTruncated=="function"&&setTimeout(function(){return f.props.onTruncated()},0)}),A(j(f),"onCalculated",function(){typeof f.props.onCalculated=="function"&&setTimeout(function(){return f.props.onCalculated()},0)}),A(j(f),"update",function(){var M=window.getComputedStyle(f.scope),V=[M["font-weight"],M["font-style"],M["font-size"],M["font-family"],M["letter-spacing"]].join(" ");f.canvas.font=V,f.forceUpdate()}),f}return p(b,[{key:"componentDidMount",value:function(){var f=document.createElement("canvas"),T=document.createDocumentFragment(),k=window.getComputedStyle(this.scope),C=[k["font-weight"],k["font-style"],k["font-size"],k["font-family"]].join(" ");T.appendChild(f),this.canvas=f.getContext("2d"),this.canvas.font=C,this.forceUpdate(),window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize),this.rafId&&window.cancelAnimationFrame(this.rafId)}},{key:"measureWidth",value:function(f){return this.canvas.measureText(f).width}},{key:"getRenderText",value:function(){var f=this.props;f.containerClassName,f.element;var T=f.line;f.onCalculated,f.onTruncated,f.onToggled;var k=f.text,C=f.textElement,M=f.textTruncateChild,V=f.truncateText,W=f.maxCalculateTimes,Z=d(f,["containerClassName","element","line","onCalculated","onTruncated","onToggled","text","textElement","textTruncateChild","truncateText","maxCalculateTimes"]),K=this.scope.getBoundingClientRect().width;if(K===0)return null;var Q=this.measureWidth(k);if(K>Q||oe(K,Q))return this.onToggled(!1),(0,r.createElement)(C,Z,k);var R="";if(M&&typeof M.type=="string"){var ee=M.type;(ee.indexOf("span")>=0||ee.indexOf("a")>=0)&&(R=M.props.children)}for(var P=1,ne=k.length,q="",de=0,H=0,te=T,ie=0,re=!1,Ce=!1,ye=0,ve=-1,we="",z=0;te-- >0;){for(we=te?"":V+(R?" "+R:"");P<=ne;)if(q=k.substr(H,P),ie=this.measureWidth(q+we),ie<K)de=k.indexOf(" ",P+1),de===-1?(P+=1,re=!1):(re=!0,P=de);else{do{if(z++>=W)break;q=k.substr(H,P),te||P--,q[q.length-1]===" "&&(q=k.substr(H,P-1)),re?(ve=q.lastIndexOf(" "),ve>-1?(P=ve,te&&P++,q=k.substr(H,P)):(P--,q=k.substr(H,P))):(P--,q=k.substr(H,P)),ie=this.measureWidth(q+we)}while((ie>K||oe(ie,K))&&q.length>0);H+=P;break}if(P>=ne){H=ne;break}re&&!Ce&&k.substr(ye,P).indexOf(" ")===-1&&(Ce=k.substr(ye,P).indexOf(" ")===-1,te--),ye=P+1}return H===ne?(this.onToggled(!1),(0,r.createElement)(C,Z,k)):(this.onTruncated(),this.onToggled(!0),i.default.createElement("span",Z,(0,r.createElement)(C,Z,k.substr(0,H)+V+" "),M))}},{key:"render",value:function(){var f=this,T=this.props,k=T.element,C=T.text,M=T.style,V=M===void 0?{}:M,W=T.containerClassName,Z=T.line;T.onCalculated,T.onTruncated,T.onToggled;var K=T.textElement;T.textTruncateChild,T.truncateText,T.maxCalculateTimes;var Q=d(T,["element","text","style","containerClassName","line","onCalculated","onTruncated","onToggled","textElement","textTruncateChild","truncateText","maxCalculateTimes"]),R=V.fontWeight,ee=V.fontStyle,P=V.fontSize,ne=V.fontFamily,q=this.scope&&Z?this.getRenderText():(0,r.createElement)(K,Q,C),de={ref:function(te){f.scope=te},className:W,style:{overflow:"hidden",fontWeight:R,fontStyle:ee,fontSize:P,fontFamily:ne}};return this.scope&&this.onCalculated(),(0,r.createElement)(k,de,q)}}]),b}(r.Component);A(G,"propTypes",{containerClassName:l.default.string,element:l.default.string,line:l.default.oneOfType([l.default.number,l.default.bool]),onCalculated:l.default.func,onTruncated:l.default.func,onToggled:l.default.func,text:l.default.string,textElement:l.default.elementType,textTruncateChild:l.default.node,truncateText:l.default.string,maxCalculateTimes:l.default.number}),A(G,"defaultProps",{element:"div",line:1,text:"",textElement:"span",truncateText:"…",maxCalculateTimes:10}),n.default=G,e.exports=n.default})})(or,or.exports);var kl=or.exports;const jl=ln(kl),Cl=h.ul`
  overflow-y: auto;
  overflow-x: hidden;

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
`,Sl=h.li`
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
  transition: var(--hover-paramas);
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
`,Tl=h.h4`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 14px;
  /* letter-spacing: -0.02em; */
  color: var(--card-title-color);
`,El=h.div`
  height: 50px;
  overflow: hidden;
`,Nl=h(jl)`
  font-size: 12px;
  line-height: 1.33;
  /* letter-spacing: -0.02em; */
  color: var(--screens-page-tutorial-text-color);
  transition: var(--hover-paramas);
`,Ml=h.div`
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
    transition: var(--hover-paramas);
  }
`,tn=h.span`
  display: block;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: var(--screens-page-tutorial-text-color);
  transition: var(--hover-paramas);
`,Pl=h.span`
  font-size: 10px;
  letter-spacing: -0.02em;
  color: var(--card-params-value-text-color);
  transition: var(--hover-paramas);

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
`,Al=h.span`
  font-size: 10px;
  letter-spacing: -0.02em;
  color: var(--card-params-value-text-color);
  transition: var(--hover-paramas);
`,Ll=h.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: auto;
`,dt=h.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,Pe=h.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 1.3px;
  stroke: var(--radio-icons-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

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
`,Il=h.div`
  height: auto;
  padding: 15px;
  border: 1px solid var(--shared-input-border-color);
  box-shadow: 0px 4px 16px var(--color-shadow);
  border-radius: 8px;
  background-color: var(--primary-background-color);
  z-index: 1000;
  min-width: 160px;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Wl=h.button`
  background-color: transparent;
  color: var(--screens-page-tutorial-text-color);
  font-size: 12px;
  border: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: var(--primary-button-color);

    & ${Pe} {
      stroke: var(--primary-button-color);
      scale: 1.1;
    }
  }
`,Fl=({isOpen:e,onClose:t,onSelectStatus:n,cardId:r,owner:a,x:i,y:l})=>{const{column:c}=bt(ir);if(!e)return null;const u=d=>{t(),n(d,r,a)};return o.jsx(Il,{style:{position:"absolute",left:i-175,top:l-120},children:c===void 0?o.jsx(o.Fragment,{}):c.map(({_id:d,title:v})=>o.jsxs(Wl,{onClick:()=>u(d),children:[v,o.jsx(Pe,{children:o.jsx("use",{href:U+"#icon-arrow-circle-broken-right"})})]},d))})},$l=e=>{const t=new Date(e),n=t.getDate(),r=t.getMonth()+1,a=t.getFullYear();return`${n<10?"0":""}${n}/${r<10?"0":""}${r}/${a}`},Rl=e=>{const t=new Date(e),n=new Date,r=t.getDate(),a=t.getMonth(),i=t.getFullYear(),l=n.getDate(),c=n.getMonth(),u=n.getFullYear();if(r<=l&&a<=c&&i<=u)return!0},rn=e=>{switch(e){case"blue":return"#8fa1d0";case"pink":return"#e09cb5";case"green":return"#bedbb0";case"gray":return"rgba(255, 255, 255, 0.3)";default:return"rgba(255, 255, 255, 0.3)"}},zl=e=>{switch(e){case"blue":return"Low";case"pink":return"Medium";case"green":return"High";case"gray":return"Without priority";default:return"Without priority"}},Vl=({card:e})=>{const[t,n]=N.useState(!1),[r,a]=N.useState(null),[i,l]=N.useState(null),[c,u]=N.useState(null),[d,v]=N.useState(null),[g,y]=N.useState(null),[p,w]=N.useState(null),[_,j]=N.useState({x:null,y:null}),D=Ie(),S=C=>{const M=C.clientX,V=C.clientY;j({x:M,y:V})},{isModalOpen:A,openModal:B,closeModal:oe}=Ae(),G=C=>{D(La(C))},x=()=>{n(C=>!C)},b=(C,M,V)=>{D(Ia({columnId:C,cardId:M,owner:V}))},[O]=on(),f=O.get("priority"),k=(()=>{switch(f){case"low":return e.filter(C=>C.color==="blue");case"medium":return e.filter(C=>C.color==="pink");case"high":return e.filter(C=>C.color==="green");case"without":return e.filter(C=>C.color==="gray");case"all":return e;default:return e}})();return o.jsxs(o.Fragment,{children:[o.jsxs(Cl,{children:[k&&k.map(({_id:C,title:M,description:V,color:W,deadline:Z,owner:K})=>o.jsxs(Sl,{$prioritycolor:rn(W),children:[o.jsx(Tl,{children:M}),o.jsx(El,{children:o.jsx(Nl,{line:2,element:"span",truncateText:"…",text:V})}),o.jsxs(Ml,{children:[o.jsxs("div",{children:[o.jsx(tn,{children:"Priority"}),o.jsx(Pl,{$prioritycolor:rn(W),children:zl(W)})]}),o.jsxs("div",{children:[o.jsx(tn,{children:"Deadline"}),o.jsx(Al,{children:$l(Z)})]}),o.jsxs(Ll,{children:[Rl(Z)&&o.jsx("li",{children:o.jsx(dt,{children:o.jsx(Pe,{className:"bell",children:o.jsx("use",{href:U+"#icon-bell"})})})}),o.jsx("li",{children:o.jsx(dt,{onClick:()=>{x(),a(C),w(K),S(event)},children:o.jsx(Pe,{children:o.jsx("use",{href:U+"#icon-arrow-circle-broken-right"})})})}),o.jsx("li",{children:o.jsx(dt,{onClick:()=>{B(),a(C),l(M),v(W),u(V),y(Z)},children:o.jsx(Pe,{children:o.jsx("use",{href:U+"#icon-pencil"})})})}),o.jsx("li",{children:o.jsx(dt,{onClick:()=>G(C),children:o.jsx(Pe,{children:o.jsx("use",{href:U+"#icon-trash"})})})})]})]})]},C)),o.jsx(Fl,{isOpen:t,onClose:x,onSelectStatus:b,cardId:r,owner:p,x:_.x,y:_.y})]}),o.jsx(Ol,{modalStateSwapper:oe,isModalOpen:A,cardId:r,cardTitle:i,cardColor:d,cardDescription:c,cardDeadline:g})]})},Yl=h.div`
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
`,Bl=h.ul`
  display: flex;
  gap: 34px;
  height: 100%;
`,ql=h.li`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 100%;
  /* height: 100%; */

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`,Gl=h.button`
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
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--modal-board-text);
  background-color: var(--background-add-column-btn-color);
  cursor: pointer;

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`,Hl=h.button`
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
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }

  &:hover {
    background-color: var(--secondary-button-color);
  }
`,Ul=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: var(--add-column-icon-wrap-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Zl=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: var(--shared-black-plus-button);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Kl=h.svg`
  width: 14px;
  height: 14px;
  stroke: var(--add-column-icon-plus-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Xl=h.svg`
  width: 14px;
  height: 14px;
  stroke: var(--add-card-icon-plus-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Jl=h.div`
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
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`,Ql=h.h3`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--card-title-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,ec=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,nn=h.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  /* z-index: 1000; */
`,an=h.svg`
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
`,tc=h(lr)`
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
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
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
`,rc=h.button`
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

  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,nc=wt().shape({title:ge().min("6").required("specify a column name")}),ac=({isModalOpen:e,modalStateSwapper:t})=>{const n=bt(ir),r=Ie(),a={title:""},i=({title:l},c)=>{const u=n.result._id;r(Wa({dashboardId:u,title:l})),c.resetForm(),t()};return o.jsx(yt,{modalIsOpen:e,closeModal:t,title:"Add column",maxWidth:"335px",children:o.jsx(sn,{children:o.jsx(Dt,{initialValues:a,validationSchema:nc,onSubmit:i,children:o.jsxs(un,{children:[o.jsxs(dn,{children:[o.jsx(fn,{name:"title",component:"div"}),o.jsx(tc,{type:"text",id:"title",name:"title",placeholder:"title",autoComplete:"off"})]}),o.jsxs(rc,{type:"submit",children:[o.jsx(hn,{children:o.jsx(vn,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add"]})]})})})})},oc=h(lr)`
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
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  color: rgb(255, 255, 255);

  &::placeholder {
    color: rgb(255, 255, 255);
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`,ic=h.button`
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

  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,lc=wt().shape({title:ge().min("6").required("specify a column name")}),cc=({isModalOpen:e,modalStateSwapper:t,title:n,columnId:r})=>{const a=Ie(),i={title:n||""},l=({title:c},u)=>{a(Fa({columnId:r,title:c})),u.resetForm(),t()};return o.jsx(yt,{modalIsOpen:e,closeModal:t,title:"Edit column",maxWidth:"335px",children:o.jsx(sn,{children:o.jsx(Dt,{initialValues:i,validationSchema:lc,onSubmit:l,children:o.jsxs(un,{children:[o.jsxs(dn,{children:[o.jsx(fn,{name:"title",component:"div"}),o.jsx(oc,{type:"text",id:"title",name:"title",placeholder:"title",autoComplete:"off"})]}),o.jsxs(ic,{type:"submit",children:[o.jsx(hn,{children:o.jsx(vn,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add"]})]})})})})};xt.setAppElement("#root");const sc=wt().shape({title:ge().required("Title is required"),description:ge().required("Description is required"),color:ge().required("Color selection is required"),deadline:mn().required("Deadline is required")});function uc({isModalOpen:e,modalStateSwapper:t,columnId:n}){const[r,a]=N.useState(new Date),i=Ie(),{isModalOpen:l,openModal:c,closeModal:u}=Ae(),d={overlay:{backgroundColor:"rgb(21, 21, 21, 0.75)"},content:{width:"233px",height:"254px",margin:"auto",padding:0,border:"none",borderRadius:"8px"}},v=(p,{setSubmitting:w,resetForm:_})=>{const j={columnId:n,title:p.title,description:p.description,color:p.color,deadline:r};i($a(j)),w(!1),_(),t(),setTimeout(()=>{a(new Date)},1e3)},g=(p,w)=>["Su","Mo","Tu","We","Th","Fr","Sa"][w.getDay()],y=p=>{const w=new Date(p),_=w.getDate(),j=w.toLocaleString("en",{month:"long"});return`${w.toLocaleString("en",{weekday:"long"})}, ${j} ${_}`};return o.jsx(o.Fragment,{children:o.jsxs(yt,{modalIsOpen:e,closeModal:t,title:"Add card",maxWidth:"350px",children:[o.jsx(Dt,{initialValues:{title:"",description:"",color:"gray",deadline:new Date},validationSchema:sc,onSubmit:v,children:({values:p,handleChange:w,handleSubmit:_})=>o.jsxs(ra,{onSubmit:_,children:[o.jsxs(mt,{children:[o.jsx(ca,{type:"text",name:"title",onChange:w,value:p.title,placeholder:"Title"}),o.jsx(ha,{name:"title",component:"div",className:"error"})]}),o.jsxs(mt,{children:[o.jsx(na,{name:"description",onChange:w,value:p.description,placeholder:"Description"}),o.jsx(va,{name:"description",component:"div",className:"error"})]}),o.jsx(ia,{children:"Label color"}),o.jsxs(la,{onChange:w,value:p.color,children:[o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"blue",className:"blue",checked:p.color==="blue",onChange:w}),o.jsx(fe,{className:"blue"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"pink",className:"pink",checked:p.color==="pink",onChange:w}),o.jsx(fe,{className:"pink"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"green",className:"green",checked:p.color==="green",onChange:w}),o.jsx(fe,{className:"green"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"gray",className:"gray",checked:p.color==="gray",onChange:w}),o.jsx(fe,{className:"gray"})]})]}),o.jsx(oa,{children:"Deadline"}),o.jsxs(aa,{onClick:c,children:[o.jsx(sa,{children:y(r)}),o.jsx(pa,{children:o.jsx("use",{href:U+"#icon-chevron-down"})})]}),o.jsxs(fa,{type:"submit",children:[o.jsx(ua,{children:o.jsx(da,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add"]})]})}),o.jsx(xt,{isOpen:l,onRequestClose:u,style:d,closeTimeoutMS:750,children:o.jsx(ta,{formatShortWeekday:g,selectedDate:new Date,onChange:a,onClickDay:u,minDate:new Date})})]})})}const dc=()=>{const{isModalOpen:e,openModal:t,closeModal:n}=Ae(),{isModalOpen:r,openModal:a,closeModal:i}=Ae(),{isModalOpen:l,openModal:c,closeModal:u}=Ae(),{column:d}=bt(ir),{state:v}=cn(),g=Ie(),[y,p]=N.useState(null);N.useEffect(()=>{d===void 0&&v&&g(Ra(v.id))},[d,g,v==null?void 0:v.id]);const w=_=>{g(za(_))};return o.jsxs(Yl,{children:[o.jsx(Bl,{children:d===void 0?o.jsx(o.Fragment,{}):d.map(({_id:_,title:j,card:D})=>o.jsxs(ql,{children:[o.jsx("div",{children:o.jsxs(Jl,{children:[o.jsx(Ql,{children:j}),o.jsxs(ec,{children:[o.jsx(nn,{onClick:()=>{a(),p(_)},children:o.jsx(an,{children:o.jsx("use",{href:U+"#icon-pencil"})})}),o.jsx(nn,{onClick:()=>w(_),children:o.jsx(an,{children:o.jsx("use",{href:U+"#icon-trash"})})})]})]})}),o.jsx(Vl,{card:D}),o.jsx("div",{children:o.jsxs(Hl,{onClick:()=>{c(),p(_)},children:[o.jsx(Zl,{children:o.jsx(Xl,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add Card"]})})]},_))}),o.jsxs(Gl,{onClick:t,children:[o.jsx(Ul,{children:o.jsx(Kl,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add column"]}),o.jsx(Ir,{onClick:n,className:e===!0&&"active"}),o.jsx(ac,{modalStateSwapper:n,isModalOpen:e}),o.jsx(Ir,{onClick:i,className:r===!0&&"active"}),o.jsx(cc,{modalStateSwapper:i,isModalOpen:r,columnId:y}),o.jsx(uc,{modalStateSwapper:u,isModalOpen:l,columnId:y})]})},fc=h.div`
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
`,hc=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`,vc=h.p`
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
`,pc=h.span`
  color: var(--welcome-message-text-accent-color);
`,yc=()=>{const[e,t]=N.useState(!1),[n,r]=N.useState(""),a=N.useRef(!0),{boardName:i}=Va(),l=Ya(),c=cn(),u=bt(Ua);return N.useEffect(()=>{r(i)},[c.pathname,i]),N.useEffect(()=>{if(!(a.current!==!0&&i!==n)){if(u.length>0&&!i){t(!0);const d=u[u.length-1];r(d.title),l("/home",{replace:!0,state:{id:d._id}}),t(!1)}a.current=!1}},[u,l,i,n]),o.jsx(fc,{children:e?o.jsx("div",{children:o.jsx(Ba,{})}):i===void 0&&o.jsx(hc,{children:o.jsxs(vc,{children:["Before starting your project, it is essential"," ",o.jsx(pc,{children:"to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})||i!==void 0&&o.jsxs(o.Fragment,{children:[o.jsx(co,{boardName:i}),o.jsx(dc,{})]})})};export{yc as default};
