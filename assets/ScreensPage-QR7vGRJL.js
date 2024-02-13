import{u as h,t as oa,j as o,r as N,v as ia,w as nt,R as g,x as gt,b as ke,y as Ln,a as bt,z as In,A as Wn,D as Fn,E as $n,F as Rn,G as la,i as ca,H as zn,q as Vn,f as Yn,I as Bn}from"./index-5DT8t-Bj.js";import{i as U}from"./icons-I0FOP6sp.js";import{g as qn,w as Gn,h as s,i as yt,u as Le,S as xt,p as Hn,s as ir,a as sa,M as ua,F as da,E as fa,d as ha,P as pa,O as Ir,e as Un}from"./HomePage.styled-BHzr51fQ.js";import{b as lr,E as va,c as wt,a as ge,d as ma,F as Dt}from"./index.esm-3O8HB0Z2.js";const Zn=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`,Kn=h.div`
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
`,Xn=h.h2`
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
`,Jn=h.div`
  width: 252px;
  height: 1px;
  background-color: var(--modal-filter-form-line);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 14px;
`,Qn=h.div`
  display: flex;
  justify-content: space-between;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
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
`,Ee=h.span`
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  background-color: transparent;
  border-radius: 50%;
  z-index: 1000; 
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

  &.blue {
    background-color: var(--radio-label-color);
  }
  &.pink {
    background-color: var(--radio-label-pink-color);
  }
  &.green {
    background-color: var(--radio-label-green-color);
  }
  &.gray {
    background-color: var(--filter-radio-gray-color);
  }

`,it=h.input`
  position: absolute;
  appearance: none;
  z-index: 1000; 
  top: 0;
  left: 0;
  border-radius: 50%;
  margin: 0;
  width: 14px;
  height: 14px;
  background-color:transparent; 
  outline: none;
  cursor: pointer;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

  &:checked.low {
    border: 1px solid var(--radio-label-color);
  }

  &:checked.medium {
    border: 1px solid var(--radio-label-pink-color);;
  }

  &:checked.high {
    border: 1px solid var(--radio-label-green-color);;
  }

  &:checked.without {
    border: 1px solid var(--filter-radio-gray-color)}
  }
`,Ve=h.span`
  color: var(--screens-page-tutorial-text-color);
  font-size: 12px;
  margin-left: 8px;
  z-index: 1000;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: var(--modal-filters-text);
    font-weight: bold;
  }

  &:focus {
    color: var(--modal-filters-text);
    font-weight: bold;
  }
`,lt=h.label`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 18px;
  margin: 0;
  z-index: 999; 
  cursor: pointer;

 input[type="radio"]:checked + ${Ee} {
   scale: 0.5;
   }
   
  input[type="radio"]:checked + ${Ee} + ${Ve} {
    color: var(--modal-filters-text);
    font-weight: 500;
  } ;
`,ro=({isOpen:e,onClose:t})=>{const[a,r]=oa(),n=a.get("priority");if(!e)return null;const i=()=>{r({priority:"all"}),t()},l=c=>{const u=c.target.value;r({priority:u})};return o.jsx(Zn,{onClick:t,children:o.jsxs(Kn,{onClick:c=>c.stopPropagation(),children:[o.jsx(qn,{onClick:t,children:"✕"}),o.jsx(Xn,{children:"Filters"}),o.jsx(Jn,{}),o.jsxs(Qn,{children:[o.jsx(eo,{children:"Label color"}),o.jsx(to,{onClick:i,children:"Show all"})]}),o.jsx(ot,{children:o.jsxs(lt,{children:[o.jsx(it,{type:"radio",name:"radio",value:"without",className:"without",checked:n==="without",onChange:l}),o.jsx(Ee,{className:"gray"}),o.jsx(Ve,{children:"Without priority"})]})}),o.jsx(ot,{children:o.jsxs(lt,{children:[o.jsx(it,{type:"radio",name:"radio",value:"low",className:"low",checked:n==="low",onChange:l}),o.jsx(Ee,{className:"blue"}),o.jsx(Ve,{children:" Low "})]})}),o.jsx(ot,{children:o.jsxs(lt,{children:[o.jsx(it,{type:"radio",name:"radio",value:"medium",className:"medium",checked:n==="medium",onChange:l}),o.jsx(Ee,{className:"pink"}),o.jsx(Ve,{children:" Medium "})]})}),o.jsx(ot,{children:o.jsxs(lt,{children:[o.jsx(it,{type:"radio",name:"radio",value:"high",className:"high",checked:n==="high",onChange:l}),o.jsx(Ee,{className:"green"}),o.jsx(Ve,{children:" High "})]})})]})})},ao=h.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 64px;
  height: 20px;
  padding: 0px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--filter-text-and-icon-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
`,no=h.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 1.5px;
  stroke: var(--filter-text-and-icon-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,oo=()=>{const[e,t]=N.useState(!1),a=()=>{t(!0)},r=()=>{t(!1)};return o.jsxs(o.Fragment,{children:[o.jsxs(ao,{onClick:()=>a(),children:[o.jsx(no,{children:o.jsx("use",{href:U+"#icon-filter"})}),"Filters"]}),o.jsx(ro,{isOpen:e,onClose:r})]})},io=h.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 40px;
  background-color: var(--headerdashboard-background-color);
  border-radius: 4px;

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
  border-radius: 4px;
  background-color: transparent;
  padding: 2px;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,co=({boardName:e})=>o.jsxs(io,{children:[o.jsx(lo,{children:e}),o.jsx(oo,{})]});var so="Expected a function",ga="__lodash_hash_undefined__",uo="[object Function]",fo="[object GeneratorFunction]",ho=/[\\^$.*+?()[\]{}|]/g,po=/^\[object .+?Constructor\]$/,vo=typeof nt=="object"&&nt&&nt.Object===Object&&nt,mo=typeof self=="object"&&self&&self.Object===Object&&self,ba=vo||mo||Function("return this")();function go(e,t){return e==null?void 0:e[t]}function bo(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}var yo=Array.prototype,xo=Function.prototype,ya=Object.prototype,Vt=ba["__core-js_shared__"],Wr=function(){var e=/[^.]+$/.exec(Vt&&Vt.keys&&Vt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),xa=xo.toString,cr=ya.hasOwnProperty,wo=ya.toString,Do=RegExp("^"+xa.call(cr).replace(ho,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_o=yo.splice,ko=wa(ba,"Map"),Be=wa(Object,"create");function _e(e){var t=-1,a=e?e.length:0;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}function Oo(){this.__data__=Be?Be(null):{}}function jo(e){return this.has(e)&&delete this.__data__[e]}function Co(e){var t=this.__data__;if(Be){var a=t[e];return a===ga?void 0:a}return cr.call(t,e)?t[e]:void 0}function So(e){var t=this.__data__;return Be?t[e]!==void 0:cr.call(t,e)}function To(e,t){var a=this.__data__;return a[e]=Be&&t===void 0?ga:t,this}_e.prototype.clear=Oo;_e.prototype.delete=jo;_e.prototype.get=Co;_e.prototype.has=So;_e.prototype.set=To;function We(e){var t=-1,a=e?e.length:0;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}function Eo(){this.__data__=[]}function No(e){var t=this.__data__,a=_t(t,e);if(a<0)return!1;var r=t.length-1;return a==r?t.pop():_o.call(t,a,1),!0}function Mo(e){var t=this.__data__,a=_t(t,e);return a<0?void 0:t[a][1]}function Po(e){return _t(this.__data__,e)>-1}function Ao(e,t){var a=this.__data__,r=_t(a,e);return r<0?a.push([e,t]):a[r][1]=t,this}We.prototype.clear=Eo;We.prototype.delete=No;We.prototype.get=Mo;We.prototype.has=Po;We.prototype.set=Ao;function Oe(e){var t=-1,a=e?e.length:0;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}function Lo(){this.__data__={hash:new _e,map:new(ko||We),string:new _e}}function Io(e){return kt(this,e).delete(e)}function Wo(e){return kt(this,e).get(e)}function Fo(e){return kt(this,e).has(e)}function $o(e,t){return kt(this,e).set(e,t),this}Oe.prototype.clear=Lo;Oe.prototype.delete=Io;Oe.prototype.get=Wo;Oe.prototype.has=Fo;Oe.prototype.set=$o;function _t(e,t){for(var a=e.length;a--;)if(Bo(e[a][0],t))return a;return-1}function Ro(e){if(!Da(e)||Vo(e))return!1;var t=qo(e)||bo(e)?Do:po;return t.test(Yo(e))}function kt(e,t){var a=e.__data__;return zo(t)?a[typeof t=="string"?"string":"hash"]:a.map}function wa(e,t){var a=go(e,t);return Ro(a)?a:void 0}function zo(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Vo(e){return!!Wr&&Wr in e}function Yo(e){if(e!=null){try{return xa.call(e)}catch{}try{return e+""}catch{}}return""}function sr(e,t){if(typeof e!="function"||t&&typeof t!="function")throw new TypeError(so);var a=function(){var r=arguments,n=t?t.apply(this,r):r[0],i=a.cache;if(i.has(n))return i.get(n);var l=e.apply(this,r);return a.cache=i.set(n,l),l};return a.cache=new(sr.Cache||Oe),a}sr.Cache=Oe;function Bo(e,t){return e===t||e!==e&&t!==t}function qo(e){var t=Da(e)?wo.call(e):"";return t==uo||t==fo}function Da(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}var Go=sr;const _a=ia(Go);function ka(e){return JSON.stringify(e)}function Ho(e){return typeof e=="string"}function Uo(e,t,a){return a.indexOf(e)===t}function Zo(e){return e.toLowerCase()===e}function Fr(e){return e.indexOf(",")===-1?e:e.split(",")}function Ut(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var t=e.split(".")[0],a=t===void 0?"":t;return Ut(a)}if(e.indexOf("@")!==-1){var r=e.split("@")[0],a=r===void 0?"":r;return Ut(a)}if(e.indexOf("-")===-1||!Zo(e))return e;var n=e.split("-"),i=n[0],l=n[1],c=l===void 0?"":l;return"".concat(i,"-").concat(c.toUpperCase())}function Ko(e){var t=e===void 0?{}:e,a=t.useFallbackLocale,r=a===void 0?!0:a,n=t.fallbackLocale,i=n===void 0?"en-US":n,l=[];if(typeof navigator<"u"){for(var c=navigator.languages||[],u=[],d=0,p=c;d<p.length;d++){var m=p[d];u=u.concat(Fr(m))}var w=navigator.language,v=w&&Fr(w);l=l.concat(u,v)}return r&&l.push(i),l.filter(Ho).map(Ut).filter(Uo)}var Xo=_a(Ko,ka);function Jo(e){return Xo(e)[0]||null}var Oa=_a(Jo,ka);function he(e,t,a){return function(n,i){i===void 0&&(i=a);var l=e(n)+i;return t(l)}}function Ke(e){return function(a){return new Date(e(a).getTime()-1)}}function Xe(e,t){return function(r){return[e(r),t(r)]}}function I(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;var t=parseInt(e,10);if(typeof e=="string"&&!isNaN(t))return t;throw new Error("Failed to get year from date: ".concat(e,"."))}function be(e){if(e instanceof Date)return e.getMonth();throw new Error("Failed to get month from date: ".concat(e,"."))}function Ot(e){if(e instanceof Date)return e.getDate();throw new Error("Failed to get year from date: ".concat(e,"."))}function Fe(e){var t=I(e),a=t+(-t+1)%100,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}var Qo=he(I,Fe,-100),ja=he(I,Fe,100),ur=Ke(ja),ei=he(I,ur,-100),Ca=Xe(Fe,ur);function ye(e){var t=I(e),a=t+(-t+1)%10,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}var Sa=he(I,ye,-10),dr=he(I,ye,10),jt=Ke(dr),Ta=he(I,jt,-10),Ea=Xe(ye,jt);function $e(e){var t=I(e),a=new Date;return a.setFullYear(t,0,1),a.setHours(0,0,0,0),a}var Na=he(I,$e,-1),fr=he(I,$e,1),Ct=Ke(fr),Ma=he(I,Ct,-1),ti=Xe($e,Ct);function hr(e,t){return function(r,n){n===void 0&&(n=t);var i=I(r),l=be(r)+n,c=new Date;return c.setFullYear(i,l,1),c.setHours(0,0,0,0),e(c)}}function je(e){var t=I(e),a=be(e),r=new Date;return r.setFullYear(t,a,1),r.setHours(0,0,0,0),r}var Pa=hr(je,-1),pr=hr(je,1),Je=Ke(pr),Aa=hr(Je,-1),ri=Xe(je,Je);function ai(e,t){return function(r,n){n===void 0&&(n=t);var i=I(r),l=be(r),c=Ot(r)+n,u=new Date;return u.setFullYear(i,l,c),u.setHours(0,0,0,0),e(u)}}function Qe(e){var t=I(e),a=be(e),r=Ot(e),n=new Date;return n.setFullYear(t,a,r),n.setHours(0,0,0,0),n}var ni=ai(Qe,1),vr=Ke(ni),oi=Xe(Qe,vr);function La(e){return Ot(Je(e))}var ze,L={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},Ne={ARABIC:"Arabic",HEBREW:"Hebrew",ISO_8601:"ISO 8601",US:"US"},ii=(ze={},ze[L.GREGORY]=["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],ze[L.HEBREW]=["he","he-IL"],ze[L.ISLAMIC]=["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"],ze),mr=[0,1,2,3,4,5,6],Yt=new Map;function li(e){return function(a,r){var n=a||Oa();Yt.has(n)||Yt.set(n,new Map);var i=Yt.get(n);return i.has(e)||i.set(e,new Intl.DateTimeFormat(n||void 0,e).format),i.get(e)(r)}}function ci(e){var t=new Date(e);return new Date(t.setHours(12))}function Ce(e){return function(t,a){return li(e)(t,ci(a))}}var si={day:"numeric"},ui={day:"numeric",month:"long",year:"numeric"},di={month:"long"},fi={month:"long",year:"numeric"},hi={weekday:"short"},pi={weekday:"long"},vi={year:"numeric"},mi=Ce(si),gi=Ce(ui),bi=Ce(di),Ia=Ce(fi),yi=Ce(hi),xi=Ce(pi),St=Ce(vi),wi=mr[0],Di=mr[5],$r=mr[6];function qe(e,t){t===void 0&&(t=L.ISO_8601);var a=e.getDay();switch(t){case L.ISO_8601:return(a+6)%7;case L.ISLAMIC:return(a+1)%7;case L.HEBREW:case L.GREGORY:return a;default:throw new Error("Unsupported calendar type.")}}function _i(e){var t=Fe(e);return I(t)}function ki(e){var t=ye(e);return I(t)}function Zt(e,t){t===void 0&&(t=L.ISO_8601);var a=I(e),r=be(e),n=e.getDate()-qe(e,t);return new Date(a,r,n)}function Oi(e,t){t===void 0&&(t=L.ISO_8601);var a=t===L.GREGORY?L.GREGORY:L.ISO_8601,r=Zt(e,t),n=I(e)+1,i,l;do i=new Date(n,0,a===L.ISO_8601?4:1),l=Zt(i,t),n-=1;while(e<l);return Math.round((r.getTime()-l.getTime())/(864e5*7))+1}function De(e,t){switch(e){case"century":return Fe(t);case"decade":return ye(t);case"year":return $e(t);case"month":return je(t);case"day":return Qe(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function ji(e,t){switch(e){case"century":return Qo(t);case"decade":return Sa(t);case"year":return Na(t);case"month":return Pa(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Wa(e,t){switch(e){case"century":return ja(t);case"decade":return dr(t);case"year":return fr(t);case"month":return pr(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ci(e,t){switch(e){case"decade":return Sa(t,-100);case"year":return Na(t,-10);case"month":return Pa(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Si(e,t){switch(e){case"decade":return dr(t,100);case"year":return fr(t,10);case"month":return pr(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Fa(e,t){switch(e){case"century":return ur(t);case"decade":return jt(t);case"year":return Ct(t);case"month":return Je(t);case"day":return vr(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ti(e,t){switch(e){case"century":return ei(t);case"decade":return Ta(t);case"year":return Ma(t);case"month":return Aa(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ei(e,t){switch(e){case"decade":return Ta(t,-100);case"year":return Ma(t,-10);case"month":return Aa(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Rr(e,t){switch(e){case"century":return Ca(t);case"decade":return Ea(t);case"year":return ti(t);case"month":return ri(t);case"day":return oi(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ni(e,t,a){var r=[t,a].sort(function(n,i){return n.getTime()-i.getTime()});return[De(e,r[0]),Fa(e,r[1])]}function $a(e,t,a){return t===void 0&&(t=St),a.map(function(r){return t(e,r)}).join(" – ")}function Mi(e,t,a){return $a(e,t,Ca(a))}function Ra(e,t,a){return $a(e,t,Ea(a))}function Pi(e){return e.getDay()===new Date().getDay()}function za(e,t){t===void 0&&(t=L.ISO_8601);var a=e.getDay();switch(t){case L.ISLAMIC:case L.HEBREW:return a===Di||a===$r;case L.ISO_8601:case L.GREGORY:return a===$r||a===wi;default:throw new Error("Unsupported calendar type.")}}var ue="react-calendar__navigation";function Ai(e){var t=e.activeStartDate,a=e.drillUp,r=e.formatMonthYear,n=r===void 0?Ia:r,i=e.formatYear,l=i===void 0?St:i,c=e.locale,u=e.maxDate,d=e.minDate,p=e.navigationAriaLabel,m=p===void 0?"":p,w=e.navigationAriaLive,v=e.navigationLabel,x=e.next2AriaLabel,D=x===void 0?"":x,j=e.next2Label,_=j===void 0?"»":j,S=e.nextAriaLabel,A=S===void 0?"":S,B=e.nextLabel,oe=B===void 0?"›":B,G=e.prev2AriaLabel,y=G===void 0?"":G,b=e.prev2Label,k=b===void 0?"«":b,f=e.prevAriaLabel,T=f===void 0?"":f,O=e.prevLabel,C=O===void 0?"‹":O,M=e.setActiveStartDate,V=e.showDoubleView,W=e.view,Z=e.views,K=Z.indexOf(W)>0,Q=W!=="century",R=ji(W,t),ee=Q?Ci(W,t):void 0,P=Wa(W,t),ae=Q?Si(W,t):void 0,q=function(){if(R.getFullYear()<0)return!0;var z=Ti(W,t);return d&&d>=z}(),de=Q&&function(){if(ee.getFullYear()<0)return!0;var z=Ei(W,t);return d&&d>=z}(),H=u&&u<P,te=Q&&u&&u<ae;function ie(){M(R,"prev")}function re(){M(ee,"prev2")}function Se(){M(P,"next")}function xe(){M(ae,"next2")}function pe(z){var Re=function(){switch(W){case"century":return Mi(c,l,z);case"decade":return Ra(c,l,z);case"year":return l(c,z);case"month":return n(c,z);default:throw new Error("Invalid view: ".concat(W,"."))}}();return v?v({date:z,label:Re,locale:c||Oa()||void 0,view:W}):Re}function we(){var z="".concat(ue,"__label");return g.createElement("button",{"aria-label":m,"aria-live":w,className:z,disabled:!K,onClick:a,style:{flexGrow:1},type:"button"},g.createElement("span",{className:"".concat(z,"__labelText ").concat(z,"__labelText--from")},pe(t)),V?g.createElement(g.Fragment,null,g.createElement("span",{className:"".concat(z,"__divider")}," – "),g.createElement("span",{className:"".concat(z,"__labelText ").concat(z,"__labelText--to")},pe(P))):null)}return g.createElement("div",{className:ue},k!==null&&Q?g.createElement("button",{"aria-label":y,className:"".concat(ue,"__arrow ").concat(ue,"__prev2-button"),disabled:de,onClick:re,type:"button"},k):null,C!==null&&g.createElement("button",{"aria-label":T,className:"".concat(ue,"__arrow ").concat(ue,"__prev-button"),disabled:q,onClick:ie,type:"button"},C),we(),oe!==null&&g.createElement("button",{"aria-label":A,className:"".concat(ue,"__arrow ").concat(ue,"__next-button"),disabled:H,onClick:Se,type:"button"},oe),_!==null&&Q?g.createElement("button",{"aria-label":D,className:"".concat(ue,"__arrow ").concat(ue,"__next2-button"),disabled:te,onClick:xe,type:"button"},_):null)}var Me=function(){return Me=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Me.apply(this,arguments)},Li=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function zr(e){return"".concat(e,"%")}function gr(e){var t=e.children,a=e.className,r=e.count,n=e.direction,i=e.offset,l=e.style,c=e.wrap,u=Li(e,["children","className","count","direction","offset","style","wrap"]);return g.createElement("div",Me({className:a,style:Me({display:"flex",flexDirection:n,flexWrap:c?"wrap":"nowrap"},l)},u),g.Children.map(t,function(d,p){var m=i&&p===0?zr(100*i/r):null;return g.cloneElement(d,Me(Me({},d.props),{style:{flexBasis:zr(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:m,marginInlineStart:m,marginInlineEnd:0}}))}))}var Te;function Ii(e,t,a){return t&&t>e?t:a&&a<e?a:e}function Ge(e,t){return t[0]<=e&&t[1]>=e}function Wi(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function Va(e,t){return Ge(e[0],t)||Ge(e[1],t)}function Vr(e,t,a){var r=Va(t,e),n=[];if(r){n.push(a);var i=Ge(e[0],t),l=Ge(e[1],t);i&&n.push("".concat(a,"Start")),l&&n.push("".concat(a,"End")),i&&l&&n.push("".concat(a,"BothEnds"))}return n}function Fi(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function $i(e){if(!e)throw new Error("args is required");var t=e.value,a=e.date,r=e.hover,n="react-calendar__tile",i=[n];if(!a)return i;var l=new Date,c=function(){if(Array.isArray(a))return a;var v=e.dateType;if(!v)throw new Error("dateType is required when date is not an array of two dates");return Rr(v,a)}();if(Ge(l,c)&&i.push("".concat(n,"--now")),!t||!Fi(t))return i;var u=function(){if(Array.isArray(t))return t;var v=e.valueType;if(!v)throw new Error("valueType is required when value is not an array of two dates");return Rr(v,t)}();Wi(u,c)?i.push("".concat(n,"--active")):Va(u,c)&&i.push("".concat(n,"--hasActive"));var d=Vr(u,c,"".concat(n,"--range"));i.push.apply(i,d);var p=Array.isArray(t)?t:[t];if(r&&p.length===1){var m=r>u[0]?[u[0],r]:[r,u[0]],w=Vr(m,c,"".concat(n,"--hover"));i.push.apply(i,w)}return i}var Ri=(Te={},Te[Ne.ARABIC]=L.ISLAMIC,Te[Ne.HEBREW]=L.HEBREW,Te[Ne.ISO_8601]=L.ISO_8601,Te[Ne.US]=L.GREGORY,Te);function zi(e){return e!==void 0&&e in Ne}var Yr=!1;function Tt(e){if(zi(e)){var t=Ri[e];return Gn(Yr,'Specifying calendarType="'.concat(e,'" is deprecated. Use calendarType="').concat(t,'" instead.')),Yr=!0,t}return e}function Et(e){for(var t=e.className,a=e.count,r=a===void 0?3:a,n=e.dateTransform,i=e.dateType,l=e.end,c=e.hover,u=e.offset,d=e.renderTile,p=e.start,m=e.step,w=m===void 0?1:m,v=e.value,x=e.valueType,D=[],j=p;j<=l;j+=w){var _=n(j);D.push(d({classes:$i({date:_,dateType:i,hover:c,value:v,valueType:x}),date:_}))}return g.createElement(gr,{className:t,count:r,offset:u,wrap:!0},D)}function Nt(e){var t=e.activeStartDate,a=e.children,r=e.classes,n=e.date,i=e.formatAbbr,l=e.locale,c=e.maxDate,u=e.maxDateTransform,d=e.minDate,p=e.minDateTransform,m=e.onClick,w=e.onMouseOver,v=e.style,x=e.tileClassName,D=e.tileContent,j=e.tileDisabled,_=e.view,S=N.useMemo(function(){var B={activeStartDate:t,date:n,view:_};return typeof x=="function"?x(B):x},[t,n,x,_]),A=N.useMemo(function(){var B={activeStartDate:t,date:n,view:_};return typeof D=="function"?D(B):D},[t,n,D,_]);return g.createElement("button",{className:gt(r,S),disabled:d&&p(d)>n||c&&u(c)<n||j&&j({activeStartDate:t,date:n,view:_}),onClick:m?function(B){return m(n,B)}:void 0,onFocus:w?function(){return w(n)}:void 0,onMouseOver:w?function(){return w(n)}:void 0,style:v,type:"button"},i?g.createElement("abbr",{"aria-label":i(l,n)},a):a,A)}var Kt=function(){return Kt=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Kt.apply(this,arguments)},Vi=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},Bt="react-calendar__century-view__decades__decade";function Yi(e){var t=e.classes,a=t===void 0?[]:t,r=e.currentCentury,n=e.formatYear,i=n===void 0?St:n,l=Vi(e,["classes","currentCentury","formatYear"]),c=l.date,u=l.locale,d=[];return a&&d.push.apply(d,a),Bt&&d.push(Bt),Fe(c).getFullYear()!==r&&d.push("".concat(Bt,"--neighboringCentury")),g.createElement(Nt,Kt({},l,{classes:d,maxDateTransform:jt,minDateTransform:ye,view:"century"}),Ra(u,i,c))}var Xt=function(){return Xt=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Xt.apply(this,arguments)},Br=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function Bi(e){var t=e.activeStartDate,a=e.hover,r=e.showNeighboringCentury,n=e.value,i=e.valueType,l=Br(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),c=_i(t),u=c+(r?119:99);return g.createElement(Et,{className:"react-calendar__century-view__decades",dateTransform:ye,dateType:"decade",end:u,hover:a,renderTile:function(d){var p=d.date,m=Br(d,["date"]);return g.createElement(Yi,Xt({key:p.getTime()},l,m,{activeStartDate:t,currentCentury:c,date:p}))},start:c,step:10,value:n,valueType:i})}var qr=function(e,t,a){if(a||arguments.length===2)for(var r=0,n=t.length,i;r<n;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))},qi=Object.values(L),Gi=Object.values(Ne),Jt=["century","decade","year","month"],Ya=s.oneOf(qr(qr([],qi,!0),Gi,!0)),ft=s.oneOfType([s.string,s.arrayOf(s.string)]),br=function(t,a,r){var n=t,i=a,l=n[i];if(!l)return null;if(!(l instanceof Date))return new Error("Invalid prop `".concat(a,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, expected instance of `Date`."));var c=t.maxDate;return c&&l>c?new Error("Invalid prop `".concat(a,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, minDate cannot be larger than maxDate.")):null},yr=function(t,a,r){var n=t,i=a,l=n[i];if(!l)return null;if(!(l instanceof Date))return new Error("Invalid prop `".concat(a,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, expected instance of `Date`."));var c=t.minDate;return c&&l<c?new Error("Invalid prop `".concat(a,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, maxDate cannot be smaller than minDate.")):null},Hi=s.oneOfType([s.func,s.exact({current:s.any})]),Ui=s.arrayOf(s.oneOfType([s.instanceOf(Date),s.oneOf([null])]).isRequired),Zi=s.oneOfType([s.instanceOf(Date),s.oneOf([null]),Ui]);s.arrayOf(s.oneOf(Jt));var ht=function(t,a,r){var n=t,i=a,l=n[i];return l!==void 0&&(typeof l!="string"||Jt.indexOf(l)===-1)?new Error("Invalid prop `".concat(a,"` of value `").concat(l,"` supplied to `").concat(r,"`, expected one of [").concat(Jt.map(function(c){return'"'.concat(c,'"')}).join(", "),"].")):null};ht.isRequired=function(t,a,r,n,i){var l=t,c=a,u=l[c];return u?ht(t,a,r):new Error("The prop `".concat(a,"` is marked as required in `").concat(r,"`, but its value is `").concat(u,"`."))};var Ki=function(e){return s.arrayOf(e)},Mt={activeStartDate:s.instanceOf(Date).isRequired,hover:s.instanceOf(Date),locale:s.string,maxDate:yr,minDate:br,onClick:s.func,onMouseOver:s.func,tileClassName:s.oneOfType([s.func,ft]),tileContent:s.oneOfType([s.func,s.node]),value:Zi,valueType:s.oneOf(["century","decade","year","month","day"]).isRequired};s.instanceOf(Date).isRequired,s.arrayOf(s.string.isRequired).isRequired,s.instanceOf(Date).isRequired,s.string,s.func,s.func,s.objectOf(s.oneOfType([s.string,s.number])),s.oneOfType([s.func,ft]),s.oneOfType([s.func,s.node]),s.func;var He=function(){return He=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},He.apply(this,arguments)},Ba=function(t){function a(){return g.createElement(Bi,He({},t))}return g.createElement("div",{className:"react-calendar__century-view"},a())};Ba.propTypes=He(He({},Mt),{showNeighboringCentury:s.bool});const Xi=Ba;var Qt=function(){return Qt=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Qt.apply(this,arguments)},Ji=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},qt="react-calendar__decade-view__years__year";function Qi(e){var t=e.classes,a=t===void 0?[]:t,r=e.currentDecade,n=e.formatYear,i=n===void 0?St:n,l=Ji(e,["classes","currentDecade","formatYear"]),c=l.date,u=l.locale,d=[];return a&&d.push.apply(d,a),qt&&d.push(qt),ye(c).getFullYear()!==r&&d.push("".concat(qt,"--neighboringDecade")),g.createElement(Nt,Qt({},l,{classes:d,maxDateTransform:Ct,minDateTransform:$e,view:"decade"}),i(u,c))}var er=function(){return er=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},er.apply(this,arguments)},Gr=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function el(e){var t=e.activeStartDate,a=e.hover,r=e.showNeighboringDecade,n=e.value,i=e.valueType,l=Gr(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),c=ki(t),u=c+(r?11:9);return g.createElement(Et,{className:"react-calendar__decade-view__years",dateTransform:$e,dateType:"year",end:u,hover:a,renderTile:function(d){var p=d.date,m=Gr(d,["date"]);return g.createElement(Qi,er({key:p.getTime()},l,m,{activeStartDate:t,currentDecade:c,date:p}))},start:c,value:n,valueType:i})}var Ue=function(){return Ue=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ue.apply(this,arguments)},qa=function(t){function a(){return g.createElement(el,Ue({},t))}return g.createElement("div",{className:"react-calendar__decade-view"},a())};qa.propTypes=Ue(Ue({},Mt),{showNeighboringDecade:s.bool});const tl=qa;var tr=function(){return tr=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},tr.apply(this,arguments)},rl=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},Hr=function(e,t,a){if(a||arguments.length===2)for(var r=0,n=t.length,i;r<n;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))},al="react-calendar__year-view__months__month";function nl(e){var t=e.classes,a=t===void 0?[]:t,r=e.formatMonth,n=r===void 0?bi:r,i=e.formatMonthYear,l=i===void 0?Ia:i,c=rl(e,["classes","formatMonth","formatMonthYear"]),u=c.date,d=c.locale;return g.createElement(Nt,tr({},c,{classes:Hr(Hr([],a,!0),[al],!1),formatAbbr:l,maxDateTransform:Je,minDateTransform:je,view:"year"}),n(d,u))}var rr=function(){return rr=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},rr.apply(this,arguments)},Ur=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function ol(e){var t=e.activeStartDate,a=e.hover,r=e.value,n=e.valueType,i=Ur(e,["activeStartDate","hover","value","valueType"]),l=0,c=11,u=I(t);return g.createElement(Et,{className:"react-calendar__year-view__months",dateTransform:function(d){var p=new Date;return p.setFullYear(u,d,1),je(p)},dateType:"month",end:c,hover:a,renderTile:function(d){var p=d.date,m=Ur(d,["date"]);return g.createElement(nl,rr({key:p.getTime()},i,m,{activeStartDate:t,date:p}))},start:l,value:r,valueType:n})}var pt=function(){return pt=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},pt.apply(this,arguments)},Ga=function(t){function a(){return g.createElement(ol,pt({},t))}return g.createElement("div",{className:"react-calendar__year-view"},a())};Ga.propTypes=pt({},Mt);const il=Ga;var ar=function(){return ar=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ar.apply(this,arguments)},ll=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},ct="react-calendar__month-view__days__day";function cl(e){var t=e.calendarType,a=e.classes,r=a===void 0?[]:a,n=e.currentMonthIndex,i=e.formatDay,l=i===void 0?mi:i,c=e.formatLongDate,u=c===void 0?gi:c,d=ll(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),p=Tt(t),m=d.date,w=d.locale,v=[];return r&&v.push.apply(v,r),ct&&v.push(ct),za(m,p)&&v.push("".concat(ct,"--weekend")),m.getMonth()!==n&&v.push("".concat(ct,"--neighboringMonth")),g.createElement(Nt,ar({},d,{classes:v,formatAbbr:u,maxDateTransform:vr,minDateTransform:Qe,view:"month"}),l(w,m))}var nr=function(){return nr=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},nr.apply(this,arguments)},Zr=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function sl(e){var t=e.activeStartDate,a=e.calendarType,r=e.hover,n=e.showFixedNumberOfWeeks,i=e.showNeighboringMonth,l=e.value,c=e.valueType,u=Zr(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),d=Tt(a),p=I(t),m=be(t),w=n||i,v=qe(t,d),x=w?0:v,D=(w?-v:0)+1,j=function(){if(n)return D+6*7-1;var _=La(t);if(i){var S=new Date;S.setFullYear(p,m,_),S.setHours(0,0,0,0);var A=7-qe(S,d)-1;return _+A}return _}();return g.createElement(Et,{className:"react-calendar__month-view__days",count:7,dateTransform:function(_){var S=new Date;return S.setFullYear(p,m,_),Qe(S)},dateType:"day",hover:r,end:j,renderTile:function(_){var S=_.date,A=Zr(_,["date"]);return g.createElement(cl,nr({key:S.getTime()},u,A,{activeStartDate:t,calendarType:a,currentMonthIndex:m,date:S}))},offset:x,start:D,value:l,valueType:c})}var Ha="react-calendar__month-view__weekdays",Gt="".concat(Ha,"__weekday");function ul(e){for(var t=e.calendarType,a=e.formatShortWeekday,r=a===void 0?yi:a,n=e.formatWeekday,i=n===void 0?xi:n,l=e.locale,c=e.onMouseLeave,u=Tt(t),d=new Date,p=je(d),m=I(p),w=be(p),v=[],x=1;x<=7;x+=1){var D=new Date(m,w,x-qe(p,u)),j=i(l,D);v.push(g.createElement("div",{key:x,className:gt(Gt,Pi(D)&&"".concat(Gt,"--current"),za(D,u)&&"".concat(Gt,"--weekend"))},g.createElement("abbr",{"aria-label":j,title:j},r(l,D).replace(".",""))))}return g.createElement(gr,{className:Ha,count:7,onFocus:c,onMouseOver:c},v)}var vt=function(){return vt=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},vt.apply(this,arguments)},Kr=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},Xr="react-calendar__tile";function dl(e){var t=e.onClickWeekNumber,a=e.weekNumber,r=g.createElement("span",null,a);if(t){var n=e.date,i=e.onClickWeekNumber,l=e.weekNumber,c=Kr(e,["date","onClickWeekNumber","weekNumber"]);return g.createElement("button",vt({},c,{className:Xr,onClick:function(u){return i(l,n,u)},type:"button"}),r)}else{e.date,e.onClickWeekNumber,e.weekNumber;var c=Kr(e,["date","onClickWeekNumber","weekNumber"]);return g.createElement("div",vt({},c,{className:Xr}),r)}}function fl(e){var t=e.activeStartDate,a=e.calendarType,r=e.onClickWeekNumber,n=e.onMouseLeave,i=e.showFixedNumberOfWeeks,l=Tt(a),c=function(){if(i)return 6;var p=La(t),m=qe(t,l),w=p-(7-m);return 1+Math.ceil(w/7)}(),u=function(){for(var p=I(t),m=be(t),w=Ot(t),v=[],x=0;x<c;x+=1)v.push(Zt(new Date(p,m,w+x*7),l));return v}(),d=u.map(function(p){return Oi(p,l)});return g.createElement(gr,{className:"react-calendar__month-view__weekNumbers",count:c,direction:"column",onFocus:n,onMouseOver:n,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0}},d.map(function(p,m){var w=u[m];if(!w)throw new Error("date is not defined");return g.createElement(dl,{key:p,date:w,onClickWeekNumber:r,weekNumber:p})}))}var Ze=function(){return Ze=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ze.apply(this,arguments)},hl=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function pl(e){if(e)for(var t=0,a=Object.entries(ii);t<a.length;t++){var r=a[t],n=r[0],i=r[1];if(i.includes(e))return n}return L.ISO_8601}var Ua=function(t){var a=t.activeStartDate,r=t.locale,n=t.onMouseLeave,i=t.showFixedNumberOfWeeks,l=t.calendarType,c=l===void 0?pl(r):l,u=t.formatShortWeekday,d=t.formatWeekday,p=t.onClickWeekNumber,m=t.showWeekNumbers,w=hl(t,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function v(){return g.createElement(ul,{calendarType:c,formatShortWeekday:u,formatWeekday:d,locale:r,onMouseLeave:n})}function x(){return m?g.createElement(fl,{activeStartDate:a,calendarType:c,onClickWeekNumber:p,onMouseLeave:n,showFixedNumberOfWeeks:i}):null}function D(){return g.createElement(sl,Ze({calendarType:c},w))}var j="react-calendar__month-view";return g.createElement("div",{className:gt(j,m?"".concat(j,"--weekNumbers"):"")},g.createElement("div",{style:{display:"flex",alignItems:"flex-end"}},x(),g.createElement("div",{style:{flexGrow:1,width:"100%"}},v(),D())))};Ua.propTypes=Ze(Ze({},Mt),{calendarType:Ya,formatDay:s.func,formatLongDate:s.func,formatShortWeekday:s.func,formatWeekday:s.func,onClickWeekNumber:s.func,onMouseLeave:s.func,showFixedNumberOfWeeks:s.bool,showNeighboringMonth:s.bool,showWeekNumbers:s.bool});const vl=Ua;var Pe=function(){return Pe=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Pe.apply(this,arguments)},st="react-calendar",Ie=["century","decade","year","month"],ml=["decade","year","month","day"],xr=new Date;xr.setFullYear(1,0,1);xr.setHours(0,0,0,0);var gl=new Date(864e13);function Ye(e){return e instanceof Date?e:new Date(e)}function Za(e,t){return Ie.slice(Ie.indexOf(e),Ie.indexOf(t)+1)}function bl(e,t,a){var r=Za(t,a);return r.indexOf(e)!==-1}function wr(e,t,a){return e&&bl(e,t,a)?e:a}function Ka(e){var t=Ie.indexOf(e);return ml[t]}function yl(e,t){var a=Array.isArray(e)?e[t]:e;if(!a)return null;var r=Ye(a);if(isNaN(r.getTime()))throw new Error("Invalid date: ".concat(e));return r}function Xa(e,t){var a=e.value,r=e.minDate,n=e.maxDate,i=e.maxDetail,l=yl(a,t);if(!l)return null;var c=Ka(i),u=function(){switch(t){case 0:return De(c,l);case 1:return Fa(c,l);default:throw new Error("Invalid index value: ".concat(t))}}();return Ii(u,r,n)}var Dr=function(e){return Xa(e,0)},Ja=function(e){return Xa(e,1)},xl=function(e){return[Dr,Ja].map(function(t){return t(e)})};function Qa(e){var t=e.maxDate,a=e.maxDetail,r=e.minDate,n=e.minDetail,i=e.value,l=e.view,c=wr(l,n,a),u=Dr({value:i,minDate:r,maxDate:t,maxDetail:a})||new Date;return De(c,u)}function wl(e){var t=e.activeStartDate,a=e.defaultActiveStartDate,r=e.defaultValue,n=e.defaultView,i=e.maxDate,l=e.maxDetail,c=e.minDate,u=e.minDetail,d=e.value,p=e.view,m=wr(p,u,l),w=t||a;return w?De(m,w):Qa({maxDate:i,maxDetail:l,minDate:c,minDetail:u,value:d||r,view:p||n})}function Ht(e){return e&&(!Array.isArray(e)||e.length===1)}function ut(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var en=N.forwardRef(function(t,a){var r=t.activeStartDate,n=t.allowPartialRange,i=t.calendarType,l=t.className,c=t.defaultActiveStartDate,u=t.defaultValue,d=t.defaultView,p=t.formatDay,m=t.formatLongDate,w=t.formatMonth,v=t.formatMonthYear,x=t.formatShortWeekday,D=t.formatWeekday,j=t.formatYear,_=t.goToRangeStartOnSelect,S=_===void 0?!0:_,A=t.inputRef,B=t.locale,oe=t.maxDate,G=oe===void 0?gl:oe,y=t.maxDetail,b=y===void 0?"month":y,k=t.minDate,f=k===void 0?xr:k,T=t.minDetail,O=T===void 0?"century":T,C=t.navigationAriaLabel,M=t.navigationAriaLive,V=t.navigationLabel,W=t.next2AriaLabel,Z=t.next2Label,K=t.nextAriaLabel,Q=t.nextLabel,R=t.onActiveStartDateChange,ee=t.onChange,P=t.onClickDay,ae=t.onClickDecade,q=t.onClickMonth,de=t.onClickWeekNumber,H=t.onClickYear,te=t.onDrillDown,ie=t.onDrillUp,re=t.onViewChange,Se=t.prev2AriaLabel,xe=t.prev2Label,pe=t.prevAriaLabel,we=t.prevLabel,z=t.returnValue,Re=z===void 0?"start":z,ne=t.selectRange,et=t.showDoubleView,_r=t.showFixedNumberOfWeeks,kr=t.showNavigation,gn=kr===void 0?!0:kr,bn=t.showNeighboringCentury,yn=t.showNeighboringDecade,Or=t.showNeighboringMonth,xn=Or===void 0?!0:Or,wn=t.showWeekNumbers,Dn=t.tileClassName,_n=t.tileContent,kn=t.tileDisabled,Pt=t.value,jr=t.view,Cr=N.useState(c),On=Cr[0],tt=Cr[1],Sr=N.useState(null),jn=Sr[0],Tr=Sr[1],Er=N.useState(Array.isArray(u)?u.map(function(E){return E!==null?Ye(E):null}):u!=null?Ye(u):null),At=Er[0],Cn=Er[1],Nr=N.useState(d),Sn=Nr[0],Mr=Nr[1],X=r||On||wl({activeStartDate:r,defaultActiveStartDate:c,defaultValue:u,defaultView:d,maxDate:G,maxDetail:b,minDate:f,minDetail:O,value:Pt,view:jr}),J=function(){var E=function(){return ne&&Ht(At)?At:Pt!==void 0?Pt:At}();return E?Array.isArray(E)?E.map(function($){return $!==null?Ye($):null}):E!==null?Ye(E):null:null}(),rt=Ka(b),F=wr(jr||Sn,O,b),se=Za(O,b),Tn=ne?jn:null,Lt=se.indexOf(F)<se.length-1,Pr=se.indexOf(F)>0,Ar=N.useCallback(function(E){var $=function(){switch(Re){case"start":return Dr;case"end":return Ja;case"range":return xl;default:throw new Error("Invalid returnValue.")}}();return $({maxDate:G,maxDetail:b,minDate:f,value:E})},[G,b,f,Re]),It=N.useCallback(function(E,$){tt(E);var Y={action:$,activeStartDate:E,value:J,view:F};R&&!ut(X,E)&&R(Y)},[X,R,J,F]),at=N.useCallback(function(E,$){var Y=function(){switch(F){case"century":return ae;case"decade":return H;case"year":return q;case"month":return P;default:throw new Error("Invalid view: ".concat(F,"."))}}();Y&&Y(E,$)},[P,ae,q,H,F]),Wt=N.useCallback(function(E,$){if(Lt){at(E,$);var Y=se[se.indexOf(F)+1];if(!Y)throw new Error("Attempted to drill down from the lowest view.");tt(E),Mr(Y);var le={action:"drillDown",activeStartDate:E,value:J,view:Y};R&&!ut(X,E)&&R(le),re&&F!==Y&&re(le),te&&te(le)}},[X,Lt,R,at,te,re,J,F,se]),Ft=N.useCallback(function(){if(Pr){var E=se[se.indexOf(F)-1];if(!E)throw new Error("Attempted to drill up from the highest view.");var $=De(E,X);tt($),Mr(E);var Y={action:"drillUp",activeStartDate:$,value:J,view:E};R&&!ut(X,$)&&R(Y),re&&F!==E&&re(Y),ie&&ie(Y)}},[X,Pr,R,ie,re,J,F,se]),$t=N.useCallback(function(E,$){var Y=J;at(E,$);var le=ne&&!Ht(Y),ce;if(ne)if(le)ce=De(rt,E);else{if(!Y)throw new Error("previousValue is required");if(Array.isArray(Y))throw new Error("previousValue must not be an array");ce=Ni(rt,Y,E)}else ce=Ar(E);var zt=!ne||le||S?Qa({maxDate:G,maxDetail:b,minDate:f,minDetail:O,value:ce,view:F}):null;$.persist(),tt(zt),Cn(ce);var Pn={action:"onChange",activeStartDate:zt,value:ce,view:F};if(R&&!ut(X,zt)&&R(Pn),ee)if(ne){var An=Ht(ce);if(!An)ee(ce||null,$);else if(n){if(Array.isArray(ce))throw new Error("value must not be an array");ee([ce||null,null],$)}}else ee(ce||null,$)},[X,n,Ar,S,G,b,f,O,R,ee,at,ne,J,rt,F]);function En(E){Tr(E)}function Rt(){Tr(null)}N.useImperativeHandle(a,function(){return{activeStartDate:X,drillDown:Wt,drillUp:Ft,onChange:$t,setActiveStartDate:It,value:J,view:F}},[X,Wt,Ft,$t,It,J,F]);function Lr(E){var $=E?Wa(F,X):De(F,X),Y=Lt?Wt:$t,le={activeStartDate:$,hover:Tn,locale:B,maxDate:G,minDate:f,onClick:Y,onMouseOver:ne?En:void 0,tileClassName:Dn,tileContent:_n,tileDisabled:kn,value:J,valueType:rt};switch(F){case"century":return g.createElement(Xi,Pe({formatYear:j,showNeighboringCentury:bn},le));case"decade":return g.createElement(tl,Pe({formatYear:j,showNeighboringDecade:yn},le));case"year":return g.createElement(il,Pe({formatMonth:w,formatMonthYear:v},le));case"month":return g.createElement(vl,Pe({calendarType:i,formatDay:p,formatLongDate:m,formatShortWeekday:x,formatWeekday:D,onClickWeekNumber:de,onMouseLeave:ne?Rt:void 0,showFixedNumberOfWeeks:typeof _r<"u"?_r:et,showNeighboringMonth:xn,showWeekNumbers:wn},le));default:throw new Error("Invalid view: ".concat(F,"."))}}function Nn(){return gn?g.createElement(Ai,{activeStartDate:X,drillUp:Ft,formatMonthYear:v,formatYear:j,locale:B,maxDate:G,minDate:f,navigationAriaLabel:C,navigationAriaLive:M,navigationLabel:V,next2AriaLabel:W,next2Label:Z,nextAriaLabel:K,nextLabel:Q,prev2AriaLabel:Se,prev2Label:xe,prevAriaLabel:pe,prevLabel:we,setActiveStartDate:It,showDoubleView:et,view:F,views:se}):null}var Mn=Array.isArray(J)?J:[J];return g.createElement("div",{className:gt(st,ne&&Mn.length===1&&"".concat(st,"--selectRange"),et&&"".concat(st,"--doubleView"),l),ref:A},Nn(),g.createElement("div",{className:"".concat(st,"__viewContainer"),onBlur:ne?Rt:void 0,onMouseLeave:ne?Rt:void 0},Lr(),et?Lr(!0):null))}),Jr=s.instanceOf(Date),Qr=s.oneOfType([s.string,s.instanceOf(Date)]),ea=s.oneOfType([Qr,Ki(Qr)]);en.propTypes={activeStartDate:Jr,allowPartialRange:s.bool,calendarType:Ya,className:ft,defaultActiveStartDate:Jr,defaultValue:ea,defaultView:ht,formatDay:s.func,formatLongDate:s.func,formatMonth:s.func,formatMonthYear:s.func,formatShortWeekday:s.func,formatWeekday:s.func,formatYear:s.func,goToRangeStartOnSelect:s.bool,inputRef:Hi,locale:s.string,maxDate:yr,maxDetail:s.oneOf(Ie),minDate:br,minDetail:s.oneOf(Ie),navigationAriaLabel:s.string,navigationAriaLive:s.oneOf(["off","polite","assertive"]),navigationLabel:s.func,next2AriaLabel:s.string,next2Label:s.node,nextAriaLabel:s.string,nextLabel:s.node,onActiveStartDateChange:s.func,onChange:s.func,onClickDay:s.func,onClickDecade:s.func,onClickMonth:s.func,onClickWeekNumber:s.func,onClickYear:s.func,onDrillDown:s.func,onDrillUp:s.func,onViewChange:s.func,prev2AriaLabel:s.string,prev2Label:s.node,prevAriaLabel:s.string,prevLabel:s.node,returnValue:s.oneOf(["start","end","range"]),selectRange:s.bool,showDoubleView:s.bool,showFixedNumberOfWeeks:s.bool,showNavigation:s.bool,showNeighboringCentury:s.bool,showNeighboringDecade:s.bool,showNeighboringMonth:s.bool,showWeekNumbers:s.bool,tileClassName:s.oneOfType([s.func,ft]),tileContent:s.oneOfType([s.func,s.node]),tileDisabled:s.func,value:ea,view:ht};const Dl=en,tn=h(Dl)`
  border: 1px solid var(--primary-button-color);
  border-radius: 8px;
  width: 233px;
  height: 254px;

  background-color: var(--datepicker-background-color);

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
    background-color: var(--datepicker-disabled-day);
  }

  .react-calendar__navigation button {
    height: 56px;
    background: none;
    color: var(--datepicker-current-day);
    border: none;
    transition: all var(--hover-params);
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    color: var(--primary-button-color);
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
    color: var(--screens-page-tutorial-text-color);
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
    border: none;
    border-radius: 50%;
    background-color: transparent;
    letter-spacing: -0.02em;
    color: var(--datepicker-current-day);
    cursor: pointer;
    transition: all var(--hover-params);

    &:hover {
      color: var(--primary-button-color);
    }
  }

  .react-calendar__tile--active {
    color: var(--datepicker-title-active);
    background-color: var(--primary-button-color);
  }

  .react-calendar__tile--now {
    color: var(--datepicker-title-active);
    background-color: var(--primary-button-color);
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: var(--datepicker-disabled-day);
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
    color: var(--datepicker-current-day);
    background-color: var(--datepicker-background-color);
    transition: all var(--hover-params);

    &:hover,
    &:focus {
      color: var(--primary-button-color);
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
    color: var(--datepicker-current-day);
    background-color: var(--datepicker-background-color);
    transition: all var(--hover-params);

    &:hover,
    &:focus {
      color: var(--primary-button-color);
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
    color: var(--datepicker-current-day);
    background-color: var(--datepicker-background-color);
    transition: all var(--hover-params);

    &:hover,
    &:focus {
      color: var(--primary-button-color);
    }
  }
`,rn=h.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,an=h.textarea`
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
`,ve=h(lr)`
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
    border: 1px solid var(--radio-label-grey-color); /* Сірий колір рамки при виборі */
  }
`,nn=h.div`
  display: flex;
  gap: 4px;
  width: 200px;
  margin-bottom: 40px;
  align-items: center;
  cursor: pointer;
`,on=h.p`
  color: var(--datepicker-dayname-color);
  margin: 0;
  margin-top: 14px;
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
`,ln=h.p`
  margin: 0;
  margin-top: 14px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: var(--datepicker-dayname-color);
  font-family: "Poppins", sans-serif;
`,cn=h.div`
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
    background-color: var(--radio-label-grey-color); /* Сірий колір */
  }
`,me=h.label`
  position: relative;
  width: 14px;
  height: 14px;
  margin: 0;

  input[type="radio"]:checked + ${fe} {
    scale: 0.5;
  }
`,sn=h.input`
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
`,un=h.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--primary-button-color);
`,dn=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  width: 28px;
  height: 28px;
  background-color: var(--shared-black-plus-button);
  margin-right: 8px;
  padding: 7px;
`,fn=h.svg`
  width: 28px;
  height: 28px;
  stroke: var(--add-card-icon-plus-color);
`,hn=h.button`
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

  color: var(--shared-button-text-color);
  background-color: var(--primary-button-color);

  transition: all 450ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,pn=h(va)`
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
`,vn=h(va)`
  position: absolute;
  bottom: -12px;
  padding-left: 8px;
  margin: 0;
  color: red;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`,mn=h.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: var(--primary-button-color);
`;yt.setAppElement("#root");const _l=wt().shape({title:ge().required("Title is required"),description:ge().required("Description is required"),color:ge().required("Color selection is required"),deadline:ma().required("Deadline is required")});function kl({isModalOpen:e,modalStateSwapper:t,cardId:a,cardTitle:r,cardColor:n,cardDescription:i,cardDeadline:l}){const[c,u]=N.useState(null);console.log(c);const d=ke(),{isModalOpen:p,openModal:m,closeModal:w}=Le(),v={overlay:{backgroundColor:"rgb(21, 21, 21, 0.75)"},content:{width:"233px",height:"254px",margin:"auto",padding:0,border:"none",borderRadius:"8px"}},x=(_,{setSubmitting:S,resetForm:A})=>{const B={cardId:a,title:_.title,description:_.description,color:_.color,deadline:`${c||l}`};d(Ln(B)),S(!1),A(),t(),setTimeout(()=>{u(null)},1e3)},D=(_,S)=>["Su","Mo","Tu","We","Th","Fr","Sa"][S.getDay()],j=_=>{const S=new Date(_),A=S.getDate(),B=S.toLocaleString("en",{month:"long"});return`${S.toLocaleString("en",{weekday:"long"})}, ${B} ${A}`};return o.jsx(o.Fragment,{children:o.jsxs(xt,{modalIsOpen:e,closeModal:t,title:"Edit card",maxWidth:"350px",children:[o.jsx(Dt,{initialValues:{title:`${r}`,description:`${i}`,color:`${n}`,deadline:`${l}`},validationSchema:_l,onSubmit:x,children:({values:_,handleChange:S,handleSubmit:A})=>o.jsxs(rn,{onSubmit:A,children:[o.jsxs(mt,{children:[o.jsx(sn,{type:"text",name:"title",onChange:S,value:_.title,placeholder:"Title"}),o.jsx(pn,{name:"title",component:"div",className:"error"})]}),o.jsxs(mt,{children:[o.jsx(an,{name:"description",onChange:S,value:_.description,placeholder:"Description"}),o.jsx(vn,{name:"Description",component:"div",className:"error"})]}),o.jsx(ln,{children:"Label color"}),o.jsxs(cn,{children:[o.jsxs(me,{children:[o.jsx(ve,{type:"radio",name:"color",value:"blue",className:"blue",checked:_.color==="blue",onChange:S}),o.jsx(fe,{className:"blue"})]}),o.jsxs(me,{children:[o.jsx(ve,{type:"radio",name:"color",value:"pink",className:"pink",checked:_.color==="pink",onChange:S}),o.jsx(fe,{className:"pink"})]}),o.jsxs(me,{children:[o.jsx(ve,{type:"radio",name:"color",value:"green",className:"green",checked:_.color==="green",onChange:S}),o.jsx(fe,{className:"green"})]}),o.jsxs(me,{children:[o.jsx(ve,{type:"radio",name:"color",value:"gray",className:"gray",checked:_.color==="gray",onChange:S}),o.jsx(fe,{className:"gray"})]})]}),o.jsx(on,{children:"Deadline"}),o.jsxs(nn,{children:[o.jsx(un,{onClick:m,children:j(c===null?l:c)}),o.jsx(mn,{children:o.jsx("use",{href:U+"#icon-chevron-down"})})]}),o.jsxs(hn,{type:"submit",children:[o.jsx(dn,{children:o.jsx(fn,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Edit"]})]})}),o.jsx(yt,{isOpen:p,onRequestClose:w,style:v,closeTimeoutMS:750,children:o.jsx(tn,{formatShortWeekday:D,value:c,onChange:u,onClickDay:w,minDate:new Date,prevLabel:"<",nextLabel:">"})})]})})}var or={exports:{}};(function(e,t){(function(a,r){r(t,N,Hn)})(void 0,function(a,r,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=c(r),l=c(n);function c(y){return y&&y.__esModule?y:{default:y}}function u(y){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?u=function(k){return typeof k}:u=function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},u(y)}function d(y,b){if(y==null)return{};var k=p(y,b),f,T;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(y);for(T=0;T<O.length;T++)f=O[T],!(b.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(y,f)&&(k[f]=y[f])}return k}function p(y,b){if(y==null)return{};var k={},f=Object.keys(y),T,O;for(O=0;O<f.length;O++)T=f[O],!(b.indexOf(T)>=0)&&(k[T]=y[T]);return k}function m(y,b){if(!(y instanceof b))throw new TypeError("Cannot call a class as a function")}function w(y,b){for(var k=0;k<b.length;k++){var f=b[k];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(y,f.key,f)}}function v(y,b,k){return b&&w(y.prototype,b),k&&w(y,k),y}function x(y,b){return b&&(u(b)==="object"||typeof b=="function")?b:j(y)}function D(y){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(k){return k.__proto__||Object.getPrototypeOf(k)},D(y)}function j(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}function _(y,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function");y.prototype=Object.create(b&&b.prototype,{constructor:{value:y,writable:!0,configurable:!0}}),b&&S(y,b)}function S(y,b){return S=Object.setPrototypeOf||function(f,T){return f.__proto__=T,f},S(y,b)}function A(y,b,k){return b in y?Object.defineProperty(y,b,{value:k,enumerable:!0,configurable:!0,writable:!0}):y[b]=k,y}var B=1e-4,oe=function(b,k){return Math.abs(b-k)<B},G=function(y){_(b,y);function b(){var k,f;m(this,b);for(var T=arguments.length,O=new Array(T),C=0;C<T;C++)O[C]=arguments[C];return f=x(this,(k=D(b)).call.apply(k,[this].concat(O))),A(j(f),"onResize",function(){f.rafId&&window.cancelAnimationFrame(f.rafId),f.rafId=window.requestAnimationFrame(f.update.bind(j(f)))}),A(j(f),"onToggled",function(M){typeof f.props.onToggled=="function"&&setTimeout(function(){return f.props.onToggled(M)},0)}),A(j(f),"onTruncated",function(){typeof f.props.onTruncated=="function"&&setTimeout(function(){return f.props.onTruncated()},0)}),A(j(f),"onCalculated",function(){typeof f.props.onCalculated=="function"&&setTimeout(function(){return f.props.onCalculated()},0)}),A(j(f),"update",function(){var M=window.getComputedStyle(f.scope),V=[M["font-weight"],M["font-style"],M["font-size"],M["font-family"],M["letter-spacing"]].join(" ");f.canvas.font=V,f.forceUpdate()}),f}return v(b,[{key:"componentDidMount",value:function(){var f=document.createElement("canvas"),T=document.createDocumentFragment(),O=window.getComputedStyle(this.scope),C=[O["font-weight"],O["font-style"],O["font-size"],O["font-family"]].join(" ");T.appendChild(f),this.canvas=f.getContext("2d"),this.canvas.font=C,this.forceUpdate(),window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize),this.rafId&&window.cancelAnimationFrame(this.rafId)}},{key:"measureWidth",value:function(f){return this.canvas.measureText(f).width}},{key:"getRenderText",value:function(){var f=this.props;f.containerClassName,f.element;var T=f.line;f.onCalculated,f.onTruncated,f.onToggled;var O=f.text,C=f.textElement,M=f.textTruncateChild,V=f.truncateText,W=f.maxCalculateTimes,Z=d(f,["containerClassName","element","line","onCalculated","onTruncated","onToggled","text","textElement","textTruncateChild","truncateText","maxCalculateTimes"]),K=this.scope.getBoundingClientRect().width;if(K===0)return null;var Q=this.measureWidth(O);if(K>Q||oe(K,Q))return this.onToggled(!1),(0,r.createElement)(C,Z,O);var R="";if(M&&typeof M.type=="string"){var ee=M.type;(ee.indexOf("span")>=0||ee.indexOf("a")>=0)&&(R=M.props.children)}for(var P=1,ae=O.length,q="",de=0,H=0,te=T,ie=0,re=!1,Se=!1,xe=0,pe=-1,we="",z=0;te-- >0;){for(we=te?"":V+(R?" "+R:"");P<=ae;)if(q=O.substr(H,P),ie=this.measureWidth(q+we),ie<K)de=O.indexOf(" ",P+1),de===-1?(P+=1,re=!1):(re=!0,P=de);else{do{if(z++>=W)break;q=O.substr(H,P),te||P--,q[q.length-1]===" "&&(q=O.substr(H,P-1)),re?(pe=q.lastIndexOf(" "),pe>-1?(P=pe,te&&P++,q=O.substr(H,P)):(P--,q=O.substr(H,P))):(P--,q=O.substr(H,P)),ie=this.measureWidth(q+we)}while((ie>K||oe(ie,K))&&q.length>0);H+=P;break}if(P>=ae){H=ae;break}re&&!Se&&O.substr(xe,P).indexOf(" ")===-1&&(Se=O.substr(xe,P).indexOf(" ")===-1,te--),xe=P+1}return H===ae?(this.onToggled(!1),(0,r.createElement)(C,Z,O)):(this.onTruncated(),this.onToggled(!0),i.default.createElement("span",Z,(0,r.createElement)(C,Z,O.substr(0,H)+V+" "),M))}},{key:"render",value:function(){var f=this,T=this.props,O=T.element,C=T.text,M=T.style,V=M===void 0?{}:M,W=T.containerClassName,Z=T.line;T.onCalculated,T.onTruncated,T.onToggled;var K=T.textElement;T.textTruncateChild,T.truncateText,T.maxCalculateTimes;var Q=d(T,["element","text","style","containerClassName","line","onCalculated","onTruncated","onToggled","textElement","textTruncateChild","truncateText","maxCalculateTimes"]),R=V.fontWeight,ee=V.fontStyle,P=V.fontSize,ae=V.fontFamily,q=this.scope&&Z?this.getRenderText():(0,r.createElement)(K,Q,C),de={ref:function(te){f.scope=te},className:W,style:{overflow:"hidden",fontWeight:R,fontStyle:ee,fontSize:P,fontFamily:ae}};return this.scope&&this.onCalculated(),(0,r.createElement)(O,de,q)}}]),b}(r.Component);A(G,"propTypes",{containerClassName:l.default.string,element:l.default.string,line:l.default.oneOfType([l.default.number,l.default.bool]),onCalculated:l.default.func,onTruncated:l.default.func,onToggled:l.default.func,text:l.default.string,textElement:l.default.elementType,textTruncateChild:l.default.node,truncateText:l.default.string,maxCalculateTimes:l.default.number}),A(G,"defaultProps",{element:"div",line:1,text:"",textElement:"span",truncateText:"…",maxCalculateTimes:10}),a.default=G,e.exports=a.default})})(or,or.exports);var Ol=or.exports;const jl=ia(Ol),Cl=h.ul`
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
`,ta=h.span`
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
`,Ae=h.svg`
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

    & ${Ae} {
      stroke: var(--primary-button-color);
      scale: 1.1;
    }
  }
`,Fl=({isOpen:e,onClose:t,onSelectStatus:a,cardId:r,owner:n,x:i,y:l})=>{const{column:c}=bt(ir);if(!e)return null;const u=d=>{t(),a(d,r,n)};return o.jsx(Il,{style:{position:"absolute",left:i-175,top:l-120},children:c===void 0?o.jsx(o.Fragment,{}):c.map(({_id:d,title:p})=>o.jsxs(Wl,{onClick:()=>u(d),children:[p,o.jsx(Ae,{children:o.jsx("use",{href:U+"#icon-arrow-circle-broken-right"})})]},d))})},$l=e=>{const t=new Date(e),a=t.getDate(),r=t.getMonth()+1,n=t.getFullYear();return`${a<10?"0":""}${a}/${r<10?"0":""}${r}/${n}`},Rl=e=>{const t=new Date(e),a=new Date,r=t.getDate(),n=t.getMonth(),i=t.getFullYear(),l=a.getDate(),c=a.getMonth(),u=a.getFullYear();if(r<=l&&n<=c&&i<=u)return!0},ra=e=>{switch(e){case"blue":return"#8fa1d0";case"pink":return"#e09cb5";case"green":return"#bedbb0";case"gray":return"rgba(255, 255, 255, 0.3)";default:return"rgba(255, 255, 255, 0.3)"}},zl=e=>{switch(e){case"blue":return"Low";case"pink":return"Medium";case"green":return"High";case"gray":return"Without priority";default:return"Without priority"}},Vl=({card:e})=>{const[t,a]=N.useState(!1),[r,n]=N.useState(null),[i,l]=N.useState(null),[c,u]=N.useState(null),[d,p]=N.useState(null),[m,w]=N.useState(null),[v,x]=N.useState(null),[D,j]=N.useState({x:null,y:null}),_=ke(),S=C=>{const M=C.clientX,V=C.clientY;j({x:M,y:V})},{isModalOpen:A,openModal:B,closeModal:oe}=Le(),G=C=>{_(In(C))},y=()=>{a(C=>!C)},b=(C,M,V)=>{_(Wn({columnId:C,cardId:M,owner:V}))},[k]=oa(),f=k.get("priority"),O=(()=>{switch(f){case"low":return e.filter(C=>C.color==="blue");case"medium":return e.filter(C=>C.color==="pink");case"high":return e.filter(C=>C.color==="green");case"without":return e.filter(C=>C.color==="gray");case"all":return e;default:return e}})();return o.jsxs(o.Fragment,{children:[o.jsxs(Cl,{children:[O&&O.map(({_id:C,title:M,description:V,color:W,deadline:Z,owner:K})=>o.jsxs(Sl,{$prioritycolor:ra(W),children:[o.jsx(Tl,{children:M}),o.jsx(El,{children:o.jsx(Nl,{line:2,element:"span",truncateText:"…",text:V})}),o.jsxs(Ml,{children:[o.jsxs("div",{children:[o.jsx(ta,{children:"Priority"}),o.jsx(Pl,{$prioritycolor:ra(W),children:zl(W)})]}),o.jsxs("div",{children:[o.jsx(ta,{children:"Deadline"}),o.jsx(Al,{children:$l(Z)})]}),o.jsxs(Ll,{children:[Rl(Z)&&o.jsx("li",{children:o.jsx(dt,{children:o.jsx(Ae,{className:"bell",children:o.jsx("use",{href:U+"#icon-bell"})})})}),o.jsx("li",{children:o.jsx(dt,{onClick:()=>{y(),n(C),x(K),S(event)},children:o.jsx(Ae,{children:o.jsx("use",{href:U+"#icon-arrow-circle-broken-right"})})})}),o.jsx("li",{children:o.jsx(dt,{onClick:()=>{B(),n(C),l(M),p(W),u(V),w(Z)},children:o.jsx(Ae,{children:o.jsx("use",{href:U+"#icon-pencil"})})})}),o.jsx("li",{children:o.jsx(dt,{onClick:()=>G(C),children:o.jsx(Ae,{children:o.jsx("use",{href:U+"#icon-trash"})})})})]})]})]},C)),o.jsx(Fl,{isOpen:t,onClose:y,onSelectStatus:b,cardId:r,owner:v,x:D.x,y:D.y})]}),o.jsx(kl,{modalStateSwapper:oe,isModalOpen:A,cardId:r,cardTitle:i,cardColor:d,cardDescription:c,cardDeadline:m})]})},Yl=h.div`
  display: flex;
  align-items: flex-start;

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
  padding-bottom: 10px;
`,ql=h.li`
  display: flex;
  flex-direction: column;
  width: 100%;

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
  margin-left: 34px;
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
`,aa=h.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  /* z-index: 1000; */
`,na=h.svg`
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
`,ac=wt().shape({title:ge().min("6").required("specify a column name")}),nc=({isModalOpen:e,modalStateSwapper:t})=>{const a=bt(ir),r=ke(),n={title:""},i=({title:l},c)=>{const u=a.result._id;r(Fn({dashboardId:u,title:l})),c.resetForm(),t()};return o.jsx(xt,{modalIsOpen:e,closeModal:t,title:"Add column",maxWidth:"335px",children:o.jsx(sa,{children:o.jsx(Dt,{initialValues:n,validationSchema:ac,onSubmit:i,children:o.jsxs(ua,{children:[o.jsxs(da,{children:[o.jsx(fa,{name:"title",component:"div"}),o.jsx(tc,{type:"text",id:"title",name:"title",placeholder:"title",autoComplete:"off"})]}),o.jsxs(rc,{type:"submit",children:[o.jsx(ha,{children:o.jsx(pa,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add"]})]})})})})},oc=h(lr)`
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
`,lc=wt().shape({title:ge().min("6").required("specify a column name")}),cc=({isModalOpen:e,modalStateSwapper:t,title:a,columnId:r})=>{const n=ke(),i={title:a||""},l=({title:c},u)=>{n($n({columnId:r,title:c})),u.resetForm(),t()};return o.jsx(xt,{modalIsOpen:e,closeModal:t,title:"Edit column",maxWidth:"335px",children:o.jsx(sa,{children:o.jsx(Dt,{initialValues:i,validationSchema:lc,onSubmit:l,children:o.jsxs(ua,{children:[o.jsxs(da,{children:[o.jsx(fa,{name:"title",component:"div"}),o.jsx(oc,{type:"text",id:"title",name:"title",placeholder:"title",autoComplete:"off"})]}),o.jsxs(ic,{type:"submit",children:[o.jsx(ha,{children:o.jsx(pa,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add"]})]})})})})};yt.setAppElement("#root");const sc=wt().shape({title:ge().required("Title is required"),description:ge().required("Description is required"),color:ge().required("Color selection is required"),deadline:ma().required("Deadline is required")});function uc({isModalOpen:e,modalStateSwapper:t,columnId:a}){const[r,n]=N.useState(new Date),i=ke(),{isModalOpen:l,openModal:c,closeModal:u}=Le(),d={overlay:{backgroundColor:"rgb(21, 21, 21, 0.75)"},content:{width:"233px",height:"254px",margin:"auto",padding:0,border:"none",borderRadius:"8px"}},p=(v,{setSubmitting:x,resetForm:D})=>{const j={columnId:a,title:v.title,description:v.description,color:v.color,deadline:r};i(Rn(j)),x(!1),D(),t(),setTimeout(()=>{n(new Date)},1e3)},m=(v,x)=>["Su","Mo","Tu","We","Th","Fr","Sa"][x.getDay()],w=v=>{const x=new Date(v),D=x.getDate(),j=x.toLocaleString("en",{month:"long"});return`${x.toLocaleString("en",{weekday:"long"})}, ${j} ${D}`};return o.jsx(o.Fragment,{children:o.jsxs(xt,{modalIsOpen:e,closeModal:t,title:"Add card",maxWidth:"350px",children:[o.jsx(Dt,{initialValues:{title:"",description:"",color:"gray",deadline:new Date},validationSchema:sc,onSubmit:p,children:({values:v,handleChange:x,handleSubmit:D})=>o.jsxs(rn,{onSubmit:D,children:[o.jsxs(mt,{children:[o.jsx(sn,{type:"text",name:"title",onChange:x,value:v.title,placeholder:"Title"}),o.jsx(pn,{name:"title",component:"div",className:"error"})]}),o.jsxs(mt,{children:[o.jsx(an,{name:"description",onChange:x,value:v.description,placeholder:"Description"}),o.jsx(vn,{name:"description",component:"div",className:"error"})]}),o.jsx(ln,{children:"Label color"}),o.jsxs(cn,{onChange:x,value:v.color,children:[o.jsxs(me,{children:[o.jsx(ve,{type:"radio",name:"color",value:"blue",className:"blue",checked:v.color==="blue",onChange:x}),o.jsx(fe,{className:"blue"})]}),o.jsxs(me,{children:[o.jsx(ve,{type:"radio",name:"color",value:"pink",className:"pink",checked:v.color==="pink",onChange:x}),o.jsx(fe,{className:"pink"})]}),o.jsxs(me,{children:[o.jsx(ve,{type:"radio",name:"color",value:"green",className:"green",checked:v.color==="green",onChange:x}),o.jsx(fe,{className:"green"})]}),o.jsxs(me,{children:[o.jsx(ve,{type:"radio",name:"color",value:"gray",className:"gray",checked:v.color==="gray",onChange:x}),o.jsx(fe,{className:"gray"})]})]}),o.jsx(on,{children:"Deadline"}),o.jsxs(nn,{onClick:c,children:[o.jsx(un,{children:w(r)}),o.jsx(mn,{children:o.jsx("use",{href:U+"#icon-chevron-down"})})]}),o.jsxs(hn,{type:"submit",children:[o.jsx(dn,{children:o.jsx(fn,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add"]})]})}),o.jsx(yt,{isOpen:l,onRequestClose:u,style:d,closeTimeoutMS:750,children:o.jsx(tn,{formatShortWeekday:m,selectedDate:new Date,onChange:n,onClickDay:u,minDate:new Date,prevLabel:"<",nextLabel:">"})})]})})}const dc=()=>{const{isModalOpen:e,openModal:t,closeModal:a}=Le(),{isModalOpen:r,openModal:n,closeModal:i}=Le(),{isModalOpen:l,openModal:c,closeModal:u}=Le(),{column:d}=bt(ir),{state:p}=la(),m=ke(),[w,v]=N.useState(null);N.useEffect(()=>{d===void 0&&p&&m(ca(p.id))},[d,m,p==null?void 0:p.id,p]);const x=D=>{m(zn(D))};return o.jsxs(Yl,{children:[o.jsx(Bl,{children:d===void 0?o.jsx(o.Fragment,{}):d.map(({_id:D,title:j,card:_})=>o.jsxs(ql,{children:[o.jsx("div",{children:o.jsxs(Jl,{children:[o.jsx(Ql,{children:j}),o.jsxs(ec,{children:[o.jsx(aa,{onClick:()=>{n(),v(D)},children:o.jsx(na,{children:o.jsx("use",{href:U+"#icon-pencil"})})}),o.jsx(aa,{onClick:()=>x(D),children:o.jsx(na,{children:o.jsx("use",{href:U+"#icon-trash"})})})]})]})}),o.jsx(Vl,{card:_}),o.jsx("div",{children:o.jsxs(Hl,{onClick:()=>{c(),v(D)},children:[o.jsx(Zl,{children:o.jsx(Xl,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add Card"]})})]},D))}),o.jsxs(Gl,{onClick:t,children:[o.jsx(Ul,{children:o.jsx(Kl,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add column"]}),o.jsx(Ir,{onClick:a,className:e===!0&&"active"}),o.jsx(nc,{modalStateSwapper:a,isModalOpen:e}),o.jsx(Ir,{onClick:i,className:r===!0&&"active"}),o.jsx(cc,{modalStateSwapper:i,isModalOpen:r,columnId:w}),o.jsx(uc,{modalStateSwapper:u,isModalOpen:l,columnId:w})]})},fc=h.div`
	flex-grow: 1;
	padding-top: 14px;
	/* padding-bottom: 40px; */
	padding-left: 20px;
	padding-right: 20px;
	background-color: var(--secondary-background-color);
	background-image: url(${e=>e.$bcgurl});
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;

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
`,pc=h.p`
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
`,vc=h.span`
	color: var(--welcome-message-text-accent-color);
`,xc=()=>{var v;const[e,t]=N.useState(!1),[a,r]=N.useState(""),n=N.useRef(!0),{boardName:i}=Vn(),l=Yn(),c=la(),u=bt(Un),d=ke(),[p,m]=N.useState(u),w=()=>u.filter(D=>D.title===i);return N.useEffect(()=>{r(i)},[c.pathname,i]),N.useEffect(()=>{var x;if(m(u),!(n.current!==!0&&i!==a)){if(u.length===0&&l("/home",{replace:!0}),p.length!==u.length&&i&&u.length>0&&d(ca((x=u[u.length-1])==null?void 0:x._id)),u.length>0&&!i){t(!0);const D=u[u.length-1]??"";r(D.title),l(`/home/${D.title}`,{replace:!0,state:{id:D._id}}),t(!1)}n.current=!1}},[u,l,i,a,p.length,d]),o.jsx(fc,{$bcgurl:(v=w()[0])==null?void 0:v.backgroundURL,children:e?o.jsx(Bn,{}):i===void 0&&o.jsx(hc,{children:o.jsxs(pc,{children:["Before starting your project, it is essential"," ",o.jsx(vc,{children:"to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})||i!==void 0&&o.jsxs(o.Fragment,{children:[o.jsx(co,{boardName:i}),o.jsx(dc,{})]})})};export{xc as default};
