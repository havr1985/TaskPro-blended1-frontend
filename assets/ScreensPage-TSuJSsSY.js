import{u as h,t as ia,j as o,r as N,v as ir,w as nt,R as g,x as gt,b as ke,y as In,a as bt,z as Wn,A as Fn,D as $n,E as Rn,F as zn,G as la,i as ca,H as Vn,q as Yn,f as Bn,I as qn}from"./index-u8G9WHG0.js";import{i as U}from"./icons-I0FOP6sp.js";import{g as Gn,r as sa,w as Hn,h as yt,u as Le,S as xt,s as lr,a as ua,M as da,F as fa,E as ha,d as va,P as pa,O as Wr,e as Un}from"./HomePage.styled-8Px2seo3.js";import{b as cr,E as ma,c as wt,a as ge,d as ga,F as Dt}from"./index.esm-D1Kqx4da.js";const Zn=h.div`
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
`,Ee=h.p`
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
  scale: 1.1} + ${Ee} {color: var(--modal-filters-text);
  font-weight: 500;
  }; 

  input[type="radio"]:checked + ${Ve} {
  scale: 0.5} + ${Ee} {color: var(--modal-filters-text);
  font-weight: 500;
  };
`,ro=({isOpen:e,onClose:t})=>{const[a,r]=ia(),n=a.get("priority");if(!e)return null;const l=()=>{r({priority:"all"}),t()},i=c=>{const u=c.target.value;r({priority:u})};return o.jsx(Zn,{onClick:t,children:o.jsxs(Kn,{onClick:c=>c.stopPropagation(),children:[o.jsx(Gn,{onClick:t,children:"✕"}),o.jsx(Xn,{children:"Filters"}),o.jsx(Jn,{}),o.jsxs(Qn,{children:[o.jsx(eo,{children:"Label color"}),o.jsx(to,{onClick:l,children:"Show all"})]}),o.jsx(ot,{children:o.jsxs(lt,{children:[o.jsx(it,{type:"radio",name:"radio",value:"without",className:"gray",checked:n==="gray",onChange:i}),o.jsx(Ve,{className:"gray"}),o.jsx(Ee,{children:"Without priority"})]})}),o.jsx(ot,{children:o.jsxs(lt,{children:[o.jsx(it,{type:"radio",name:"radio",value:"low",className:"blue",checked:n==="blue",onChange:i}),o.jsx(Ve,{className:"blue"}),o.jsx(Ee,{children:" Low "})]})}),o.jsx(ot,{children:o.jsxs(lt,{children:[o.jsx(it,{type:"radio",name:"radio",value:"medium",className:"pink",checked:n==="pink",onChange:i}),o.jsx(Ve,{className:"pink"}),o.jsx(Ee,{children:" Medium "})]})}),o.jsx(ot,{children:o.jsxs(lt,{children:[o.jsx(it,{type:"radio",name:"radio",value:"high",className:"green",checked:n==="green",onChange:i}),o.jsx(Ve,{className:"green"}),o.jsx(Ee,{children:" High "})]})})]})})},ao=h.button`
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
`,co=({boardName:e})=>o.jsxs(io,{children:[o.jsx(lo,{children:e}),o.jsx(oo,{})]});var so=sa();const s=ir(so);var uo="Expected a function",ba="__lodash_hash_undefined__",fo="[object Function]",ho="[object GeneratorFunction]",vo=/[\\^$.*+?()[\]{}|]/g,po=/^\[object .+?Constructor\]$/,mo=typeof nt=="object"&&nt&&nt.Object===Object&&nt,go=typeof self=="object"&&self&&self.Object===Object&&self,ya=mo||go||Function("return this")();function bo(e,t){return e==null?void 0:e[t]}function yo(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}var xo=Array.prototype,wo=Function.prototype,xa=Object.prototype,Vt=ya["__core-js_shared__"],Fr=function(){var e=/[^.]+$/.exec(Vt&&Vt.keys&&Vt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),wa=wo.toString,sr=xa.hasOwnProperty,Do=xa.toString,_o=RegExp("^"+wa.call(sr).replace(vo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ko=xo.splice,Oo=Da(ya,"Map"),Be=Da(Object,"create");function _e(e){var t=-1,a=e?e.length:0;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}function jo(){this.__data__=Be?Be(null):{}}function Co(e){return this.has(e)&&delete this.__data__[e]}function So(e){var t=this.__data__;if(Be){var a=t[e];return a===ba?void 0:a}return sr.call(t,e)?t[e]:void 0}function To(e){var t=this.__data__;return Be?t[e]!==void 0:sr.call(t,e)}function Eo(e,t){var a=this.__data__;return a[e]=Be&&t===void 0?ba:t,this}_e.prototype.clear=jo;_e.prototype.delete=Co;_e.prototype.get=So;_e.prototype.has=To;_e.prototype.set=Eo;function We(e){var t=-1,a=e?e.length:0;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}function No(){this.__data__=[]}function Mo(e){var t=this.__data__,a=_t(t,e);if(a<0)return!1;var r=t.length-1;return a==r?t.pop():ko.call(t,a,1),!0}function Po(e){var t=this.__data__,a=_t(t,e);return a<0?void 0:t[a][1]}function Ao(e){return _t(this.__data__,e)>-1}function Lo(e,t){var a=this.__data__,r=_t(a,e);return r<0?a.push([e,t]):a[r][1]=t,this}We.prototype.clear=No;We.prototype.delete=Mo;We.prototype.get=Po;We.prototype.has=Ao;We.prototype.set=Lo;function Oe(e){var t=-1,a=e?e.length:0;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}function Io(){this.__data__={hash:new _e,map:new(Oo||We),string:new _e}}function Wo(e){return kt(this,e).delete(e)}function Fo(e){return kt(this,e).get(e)}function $o(e){return kt(this,e).has(e)}function Ro(e,t){return kt(this,e).set(e,t),this}Oe.prototype.clear=Io;Oe.prototype.delete=Wo;Oe.prototype.get=Fo;Oe.prototype.has=$o;Oe.prototype.set=Ro;function _t(e,t){for(var a=e.length;a--;)if(qo(e[a][0],t))return a;return-1}function zo(e){if(!_a(e)||Yo(e))return!1;var t=Go(e)||yo(e)?_o:po;return t.test(Bo(e))}function kt(e,t){var a=e.__data__;return Vo(t)?a[typeof t=="string"?"string":"hash"]:a.map}function Da(e,t){var a=bo(e,t);return zo(a)?a:void 0}function Vo(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Yo(e){return!!Fr&&Fr in e}function Bo(e){if(e!=null){try{return wa.call(e)}catch{}try{return e+""}catch{}}return""}function ur(e,t){if(typeof e!="function"||t&&typeof t!="function")throw new TypeError(uo);var a=function(){var r=arguments,n=t?t.apply(this,r):r[0],l=a.cache;if(l.has(n))return l.get(n);var i=e.apply(this,r);return a.cache=l.set(n,i),i};return a.cache=new(ur.Cache||Oe),a}ur.Cache=Oe;function qo(e,t){return e===t||e!==e&&t!==t}function Go(e){var t=_a(e)?Do.call(e):"";return t==fo||t==ho}function _a(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}var Ho=ur;const ka=ir(Ho);function Oa(e){return JSON.stringify(e)}function Uo(e){return typeof e=="string"}function Zo(e,t,a){return a.indexOf(e)===t}function Ko(e){return e.toLowerCase()===e}function $r(e){return e.indexOf(",")===-1?e:e.split(",")}function Ut(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var t=e.split(".")[0],a=t===void 0?"":t;return Ut(a)}if(e.indexOf("@")!==-1){var r=e.split("@")[0],a=r===void 0?"":r;return Ut(a)}if(e.indexOf("-")===-1||!Ko(e))return e;var n=e.split("-"),l=n[0],i=n[1],c=i===void 0?"":i;return"".concat(l,"-").concat(c.toUpperCase())}function Xo(e){var t=e===void 0?{}:e,a=t.useFallbackLocale,r=a===void 0?!0:a,n=t.fallbackLocale,l=n===void 0?"en-US":n,i=[];if(typeof navigator<"u"){for(var c=navigator.languages||[],u=[],d=0,v=c;d<v.length;d++){var m=v[d];u=u.concat($r(m))}var w=navigator.language,p=w&&$r(w);i=i.concat(u,p)}return r&&i.push(l),i.filter(Uo).map(Ut).filter(Zo)}var Jo=ka(Xo,Oa);function Qo(e){return Jo(e)[0]||null}var ja=ka(Qo,Oa);function he(e,t,a){return function(n,l){l===void 0&&(l=a);var i=e(n)+l;return t(i)}}function Ke(e){return function(a){return new Date(e(a).getTime()-1)}}function Xe(e,t){return function(r){return[e(r),t(r)]}}function I(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;var t=parseInt(e,10);if(typeof e=="string"&&!isNaN(t))return t;throw new Error("Failed to get year from date: ".concat(e,"."))}function be(e){if(e instanceof Date)return e.getMonth();throw new Error("Failed to get month from date: ".concat(e,"."))}function Ot(e){if(e instanceof Date)return e.getDate();throw new Error("Failed to get year from date: ".concat(e,"."))}function Fe(e){var t=I(e),a=t+(-t+1)%100,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}var ei=he(I,Fe,-100),Ca=he(I,Fe,100),dr=Ke(Ca),ti=he(I,dr,-100),Sa=Xe(Fe,dr);function ye(e){var t=I(e),a=t+(-t+1)%10,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}var Ta=he(I,ye,-10),fr=he(I,ye,10),jt=Ke(fr),Ea=he(I,jt,-10),Na=Xe(ye,jt);function $e(e){var t=I(e),a=new Date;return a.setFullYear(t,0,1),a.setHours(0,0,0,0),a}var Ma=he(I,$e,-1),hr=he(I,$e,1),Ct=Ke(hr),Pa=he(I,Ct,-1),ri=Xe($e,Ct);function vr(e,t){return function(r,n){n===void 0&&(n=t);var l=I(r),i=be(r)+n,c=new Date;return c.setFullYear(l,i,1),c.setHours(0,0,0,0),e(c)}}function je(e){var t=I(e),a=be(e),r=new Date;return r.setFullYear(t,a,1),r.setHours(0,0,0,0),r}var Aa=vr(je,-1),pr=vr(je,1),Je=Ke(pr),La=vr(Je,-1),ai=Xe(je,Je);function ni(e,t){return function(r,n){n===void 0&&(n=t);var l=I(r),i=be(r),c=Ot(r)+n,u=new Date;return u.setFullYear(l,i,c),u.setHours(0,0,0,0),e(u)}}function Qe(e){var t=I(e),a=be(e),r=Ot(e),n=new Date;return n.setFullYear(t,a,r),n.setHours(0,0,0,0),n}var oi=ni(Qe,1),mr=Ke(oi),ii=Xe(Qe,mr);function Ia(e){return Ot(Je(e))}var ze,L={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},Ne={ARABIC:"Arabic",HEBREW:"Hebrew",ISO_8601:"ISO 8601",US:"US"},li=(ze={},ze[L.GREGORY]=["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],ze[L.HEBREW]=["he","he-IL"],ze[L.ISLAMIC]=["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"],ze),gr=[0,1,2,3,4,5,6],Yt=new Map;function ci(e){return function(a,r){var n=a||ja();Yt.has(n)||Yt.set(n,new Map);var l=Yt.get(n);return l.has(e)||l.set(e,new Intl.DateTimeFormat(n||void 0,e).format),l.get(e)(r)}}function si(e){var t=new Date(e);return new Date(t.setHours(12))}function Ce(e){return function(t,a){return ci(e)(t,si(a))}}var ui={day:"numeric"},di={day:"numeric",month:"long",year:"numeric"},fi={month:"long"},hi={month:"long",year:"numeric"},vi={weekday:"short"},pi={weekday:"long"},mi={year:"numeric"},gi=Ce(ui),bi=Ce(di),yi=Ce(fi),Wa=Ce(hi),xi=Ce(vi),wi=Ce(pi),St=Ce(mi),Di=gr[0],_i=gr[5],Rr=gr[6];function qe(e,t){t===void 0&&(t=L.ISO_8601);var a=e.getDay();switch(t){case L.ISO_8601:return(a+6)%7;case L.ISLAMIC:return(a+1)%7;case L.HEBREW:case L.GREGORY:return a;default:throw new Error("Unsupported calendar type.")}}function ki(e){var t=Fe(e);return I(t)}function Oi(e){var t=ye(e);return I(t)}function Zt(e,t){t===void 0&&(t=L.ISO_8601);var a=I(e),r=be(e),n=e.getDate()-qe(e,t);return new Date(a,r,n)}function ji(e,t){t===void 0&&(t=L.ISO_8601);var a=t===L.GREGORY?L.GREGORY:L.ISO_8601,r=Zt(e,t),n=I(e)+1,l,i;do l=new Date(n,0,a===L.ISO_8601?4:1),i=Zt(l,t),n-=1;while(e<i);return Math.round((r.getTime()-i.getTime())/(864e5*7))+1}function De(e,t){switch(e){case"century":return Fe(t);case"decade":return ye(t);case"year":return $e(t);case"month":return je(t);case"day":return Qe(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ci(e,t){switch(e){case"century":return ei(t);case"decade":return Ta(t);case"year":return Ma(t);case"month":return Aa(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Fa(e,t){switch(e){case"century":return Ca(t);case"decade":return fr(t);case"year":return hr(t);case"month":return pr(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Si(e,t){switch(e){case"decade":return Ta(t,-100);case"year":return Ma(t,-10);case"month":return Aa(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ti(e,t){switch(e){case"decade":return fr(t,100);case"year":return hr(t,10);case"month":return pr(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function $a(e,t){switch(e){case"century":return dr(t);case"decade":return jt(t);case"year":return Ct(t);case"month":return Je(t);case"day":return mr(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ei(e,t){switch(e){case"century":return ti(t);case"decade":return Ea(t);case"year":return Pa(t);case"month":return La(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ni(e,t){switch(e){case"decade":return Ea(t,-100);case"year":return Pa(t,-10);case"month":return La(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function zr(e,t){switch(e){case"century":return Sa(t);case"decade":return Na(t);case"year":return ri(t);case"month":return ai(t);case"day":return ii(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Mi(e,t,a){var r=[t,a].sort(function(n,l){return n.getTime()-l.getTime()});return[De(e,r[0]),$a(e,r[1])]}function Ra(e,t,a){return t===void 0&&(t=St),a.map(function(r){return t(e,r)}).join(" – ")}function Pi(e,t,a){return Ra(e,t,Sa(a))}function za(e,t,a){return Ra(e,t,Na(a))}function Ai(e){return e.getDay()===new Date().getDay()}function Va(e,t){t===void 0&&(t=L.ISO_8601);var a=e.getDay();switch(t){case L.ISLAMIC:case L.HEBREW:return a===_i||a===Rr;case L.ISO_8601:case L.GREGORY:return a===Rr||a===Di;default:throw new Error("Unsupported calendar type.")}}var ue="react-calendar__navigation";function Li(e){var t=e.activeStartDate,a=e.drillUp,r=e.formatMonthYear,n=r===void 0?Wa:r,l=e.formatYear,i=l===void 0?St:l,c=e.locale,u=e.maxDate,d=e.minDate,v=e.navigationAriaLabel,m=v===void 0?"":v,w=e.navigationAriaLive,p=e.navigationLabel,y=e.next2AriaLabel,D=y===void 0?"":y,j=e.next2Label,_=j===void 0?"»":j,S=e.nextAriaLabel,A=S===void 0?"":S,B=e.nextLabel,oe=B===void 0?"›":B,G=e.prev2AriaLabel,x=G===void 0?"":G,b=e.prev2Label,k=b===void 0?"«":b,f=e.prevAriaLabel,T=f===void 0?"":f,O=e.prevLabel,C=O===void 0?"‹":O,M=e.setActiveStartDate,V=e.showDoubleView,W=e.view,Z=e.views,K=Z.indexOf(W)>0,Q=W!=="century",R=Ci(W,t),ee=Q?Si(W,t):void 0,P=Fa(W,t),ae=Q?Ti(W,t):void 0,q=function(){if(R.getFullYear()<0)return!0;var z=Ei(W,t);return d&&d>=z}(),de=Q&&function(){if(ee.getFullYear()<0)return!0;var z=Ni(W,t);return d&&d>=z}(),H=u&&u<P,te=Q&&u&&u<ae;function ie(){M(R,"prev")}function re(){M(ee,"prev2")}function Se(){M(P,"next")}function xe(){M(ae,"next2")}function ve(z){var Re=function(){switch(W){case"century":return Pi(c,i,z);case"decade":return za(c,i,z);case"year":return i(c,z);case"month":return n(c,z);default:throw new Error("Invalid view: ".concat(W,"."))}}();return p?p({date:z,label:Re,locale:c||ja()||void 0,view:W}):Re}function we(){var z="".concat(ue,"__label");return g.createElement("button",{"aria-label":m,"aria-live":w,className:z,disabled:!K,onClick:a,style:{flexGrow:1},type:"button"},g.createElement("span",{className:"".concat(z,"__labelText ").concat(z,"__labelText--from")},ve(t)),V?g.createElement(g.Fragment,null,g.createElement("span",{className:"".concat(z,"__divider")}," – "),g.createElement("span",{className:"".concat(z,"__labelText ").concat(z,"__labelText--to")},ve(P))):null)}return g.createElement("div",{className:ue},k!==null&&Q?g.createElement("button",{"aria-label":x,className:"".concat(ue,"__arrow ").concat(ue,"__prev2-button"),disabled:de,onClick:re,type:"button"},k):null,C!==null&&g.createElement("button",{"aria-label":T,className:"".concat(ue,"__arrow ").concat(ue,"__prev-button"),disabled:q,onClick:ie,type:"button"},C),we(),oe!==null&&g.createElement("button",{"aria-label":A,className:"".concat(ue,"__arrow ").concat(ue,"__next-button"),disabled:H,onClick:Se,type:"button"},oe),_!==null&&Q?g.createElement("button",{"aria-label":D,className:"".concat(ue,"__arrow ").concat(ue,"__next2-button"),disabled:te,onClick:xe,type:"button"},_):null)}var Me=function(){return Me=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Me.apply(this,arguments)},Ii=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function Vr(e){return"".concat(e,"%")}function br(e){var t=e.children,a=e.className,r=e.count,n=e.direction,l=e.offset,i=e.style,c=e.wrap,u=Ii(e,["children","className","count","direction","offset","style","wrap"]);return g.createElement("div",Me({className:a,style:Me({display:"flex",flexDirection:n,flexWrap:c?"wrap":"nowrap"},i)},u),g.Children.map(t,function(d,v){var m=l&&v===0?Vr(100*l/r):null;return g.cloneElement(d,Me(Me({},d.props),{style:{flexBasis:Vr(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:m,marginInlineStart:m,marginInlineEnd:0}}))}))}var Te;function Wi(e,t,a){return t&&t>e?t:a&&a<e?a:e}function Ge(e,t){return t[0]<=e&&t[1]>=e}function Fi(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function Ya(e,t){return Ge(e[0],t)||Ge(e[1],t)}function Yr(e,t,a){var r=Ya(t,e),n=[];if(r){n.push(a);var l=Ge(e[0],t),i=Ge(e[1],t);l&&n.push("".concat(a,"Start")),i&&n.push("".concat(a,"End")),l&&i&&n.push("".concat(a,"BothEnds"))}return n}function $i(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function Ri(e){if(!e)throw new Error("args is required");var t=e.value,a=e.date,r=e.hover,n="react-calendar__tile",l=[n];if(!a)return l;var i=new Date,c=function(){if(Array.isArray(a))return a;var p=e.dateType;if(!p)throw new Error("dateType is required when date is not an array of two dates");return zr(p,a)}();if(Ge(i,c)&&l.push("".concat(n,"--now")),!t||!$i(t))return l;var u=function(){if(Array.isArray(t))return t;var p=e.valueType;if(!p)throw new Error("valueType is required when value is not an array of two dates");return zr(p,t)}();Fi(u,c)?l.push("".concat(n,"--active")):Ya(u,c)&&l.push("".concat(n,"--hasActive"));var d=Yr(u,c,"".concat(n,"--range"));l.push.apply(l,d);var v=Array.isArray(t)?t:[t];if(r&&v.length===1){var m=r>u[0]?[u[0],r]:[r,u[0]],w=Yr(m,c,"".concat(n,"--hover"));l.push.apply(l,w)}return l}var zi=(Te={},Te[Ne.ARABIC]=L.ISLAMIC,Te[Ne.HEBREW]=L.HEBREW,Te[Ne.ISO_8601]=L.ISO_8601,Te[Ne.US]=L.GREGORY,Te);function Vi(e){return e!==void 0&&e in Ne}var Br=!1;function Tt(e){if(Vi(e)){var t=zi[e];return Hn(Br,'Specifying calendarType="'.concat(e,'" is deprecated. Use calendarType="').concat(t,'" instead.')),Br=!0,t}return e}function Et(e){for(var t=e.className,a=e.count,r=a===void 0?3:a,n=e.dateTransform,l=e.dateType,i=e.end,c=e.hover,u=e.offset,d=e.renderTile,v=e.start,m=e.step,w=m===void 0?1:m,p=e.value,y=e.valueType,D=[],j=v;j<=i;j+=w){var _=n(j);D.push(d({classes:Ri({date:_,dateType:l,hover:c,value:p,valueType:y}),date:_}))}return g.createElement(br,{className:t,count:r,offset:u,wrap:!0},D)}function Nt(e){var t=e.activeStartDate,a=e.children,r=e.classes,n=e.date,l=e.formatAbbr,i=e.locale,c=e.maxDate,u=e.maxDateTransform,d=e.minDate,v=e.minDateTransform,m=e.onClick,w=e.onMouseOver,p=e.style,y=e.tileClassName,D=e.tileContent,j=e.tileDisabled,_=e.view,S=N.useMemo(function(){var B={activeStartDate:t,date:n,view:_};return typeof y=="function"?y(B):y},[t,n,y,_]),A=N.useMemo(function(){var B={activeStartDate:t,date:n,view:_};return typeof D=="function"?D(B):D},[t,n,D,_]);return g.createElement("button",{className:gt(r,S),disabled:d&&v(d)>n||c&&u(c)<n||j&&j({activeStartDate:t,date:n,view:_}),onClick:m?function(B){return m(n,B)}:void 0,onFocus:w?function(){return w(n)}:void 0,onMouseOver:w?function(){return w(n)}:void 0,style:p,type:"button"},l?g.createElement("abbr",{"aria-label":l(i,n)},a):a,A)}var Kt=function(){return Kt=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Kt.apply(this,arguments)},Yi=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},Bt="react-calendar__century-view__decades__decade";function Bi(e){var t=e.classes,a=t===void 0?[]:t,r=e.currentCentury,n=e.formatYear,l=n===void 0?St:n,i=Yi(e,["classes","currentCentury","formatYear"]),c=i.date,u=i.locale,d=[];return a&&d.push.apply(d,a),Bt&&d.push(Bt),Fe(c).getFullYear()!==r&&d.push("".concat(Bt,"--neighboringCentury")),g.createElement(Nt,Kt({},i,{classes:d,maxDateTransform:jt,minDateTransform:ye,view:"century"}),za(u,l,c))}var Xt=function(){return Xt=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Xt.apply(this,arguments)},qr=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function qi(e){var t=e.activeStartDate,a=e.hover,r=e.showNeighboringCentury,n=e.value,l=e.valueType,i=qr(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),c=ki(t),u=c+(r?119:99);return g.createElement(Et,{className:"react-calendar__century-view__decades",dateTransform:ye,dateType:"decade",end:u,hover:a,renderTile:function(d){var v=d.date,m=qr(d,["date"]);return g.createElement(Bi,Xt({key:v.getTime()},i,m,{activeStartDate:t,currentCentury:c,date:v}))},start:c,step:10,value:n,valueType:l})}var Gr=function(e,t,a){if(a||arguments.length===2)for(var r=0,n=t.length,l;r<n;r++)(l||!(r in t))&&(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))},Gi=Object.values(L),Hi=Object.values(Ne),Jt=["century","decade","year","month"],Ba=s.oneOf(Gr(Gr([],Gi,!0),Hi,!0)),ft=s.oneOfType([s.string,s.arrayOf(s.string)]),yr=function(t,a,r){var n=t,l=a,i=n[l];if(!i)return null;if(!(i instanceof Date))return new Error("Invalid prop `".concat(a,"` of type `").concat(typeof i,"` supplied to `").concat(r,"`, expected instance of `Date`."));var c=t.maxDate;return c&&i>c?new Error("Invalid prop `".concat(a,"` of type `").concat(typeof i,"` supplied to `").concat(r,"`, minDate cannot be larger than maxDate.")):null},xr=function(t,a,r){var n=t,l=a,i=n[l];if(!i)return null;if(!(i instanceof Date))return new Error("Invalid prop `".concat(a,"` of type `").concat(typeof i,"` supplied to `").concat(r,"`, expected instance of `Date`."));var c=t.minDate;return c&&i<c?new Error("Invalid prop `".concat(a,"` of type `").concat(typeof i,"` supplied to `").concat(r,"`, maxDate cannot be smaller than minDate.")):null},Ui=s.oneOfType([s.func,s.exact({current:s.any})]),Zi=s.arrayOf(s.oneOfType([s.instanceOf(Date),s.oneOf([null])]).isRequired),Ki=s.oneOfType([s.instanceOf(Date),s.oneOf([null]),Zi]);s.arrayOf(s.oneOf(Jt));var ht=function(t,a,r){var n=t,l=a,i=n[l];return i!==void 0&&(typeof i!="string"||Jt.indexOf(i)===-1)?new Error("Invalid prop `".concat(a,"` of value `").concat(i,"` supplied to `").concat(r,"`, expected one of [").concat(Jt.map(function(c){return'"'.concat(c,'"')}).join(", "),"].")):null};ht.isRequired=function(t,a,r,n,l){var i=t,c=a,u=i[c];return u?ht(t,a,r):new Error("The prop `".concat(a,"` is marked as required in `").concat(r,"`, but its value is `").concat(u,"`."))};var Xi=function(e){return s.arrayOf(e)},Mt={activeStartDate:s.instanceOf(Date).isRequired,hover:s.instanceOf(Date),locale:s.string,maxDate:xr,minDate:yr,onClick:s.func,onMouseOver:s.func,tileClassName:s.oneOfType([s.func,ft]),tileContent:s.oneOfType([s.func,s.node]),value:Ki,valueType:s.oneOf(["century","decade","year","month","day"]).isRequired};s.instanceOf(Date).isRequired,s.arrayOf(s.string.isRequired).isRequired,s.instanceOf(Date).isRequired,s.string,s.func,s.func,s.objectOf(s.oneOfType([s.string,s.number])),s.oneOfType([s.func,ft]),s.oneOfType([s.func,s.node]),s.func;var He=function(){return He=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},He.apply(this,arguments)},qa=function(t){function a(){return g.createElement(qi,He({},t))}return g.createElement("div",{className:"react-calendar__century-view"},a())};qa.propTypes=He(He({},Mt),{showNeighboringCentury:s.bool});const Ji=qa;var Qt=function(){return Qt=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Qt.apply(this,arguments)},Qi=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},qt="react-calendar__decade-view__years__year";function el(e){var t=e.classes,a=t===void 0?[]:t,r=e.currentDecade,n=e.formatYear,l=n===void 0?St:n,i=Qi(e,["classes","currentDecade","formatYear"]),c=i.date,u=i.locale,d=[];return a&&d.push.apply(d,a),qt&&d.push(qt),ye(c).getFullYear()!==r&&d.push("".concat(qt,"--neighboringDecade")),g.createElement(Nt,Qt({},i,{classes:d,maxDateTransform:Ct,minDateTransform:$e,view:"decade"}),l(u,c))}var er=function(){return er=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},er.apply(this,arguments)},Hr=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function tl(e){var t=e.activeStartDate,a=e.hover,r=e.showNeighboringDecade,n=e.value,l=e.valueType,i=Hr(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),c=Oi(t),u=c+(r?11:9);return g.createElement(Et,{className:"react-calendar__decade-view__years",dateTransform:$e,dateType:"year",end:u,hover:a,renderTile:function(d){var v=d.date,m=Hr(d,["date"]);return g.createElement(el,er({key:v.getTime()},i,m,{activeStartDate:t,currentDecade:c,date:v}))},start:c,value:n,valueType:l})}var Ue=function(){return Ue=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ue.apply(this,arguments)},Ga=function(t){function a(){return g.createElement(tl,Ue({},t))}return g.createElement("div",{className:"react-calendar__decade-view"},a())};Ga.propTypes=Ue(Ue({},Mt),{showNeighboringDecade:s.bool});const rl=Ga;var tr=function(){return tr=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},tr.apply(this,arguments)},al=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},Ur=function(e,t,a){if(a||arguments.length===2)for(var r=0,n=t.length,l;r<n;r++)(l||!(r in t))&&(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))},nl="react-calendar__year-view__months__month";function ol(e){var t=e.classes,a=t===void 0?[]:t,r=e.formatMonth,n=r===void 0?yi:r,l=e.formatMonthYear,i=l===void 0?Wa:l,c=al(e,["classes","formatMonth","formatMonthYear"]),u=c.date,d=c.locale;return g.createElement(Nt,tr({},c,{classes:Ur(Ur([],a,!0),[nl],!1),formatAbbr:i,maxDateTransform:Je,minDateTransform:je,view:"year"}),n(d,u))}var rr=function(){return rr=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},rr.apply(this,arguments)},Zr=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function il(e){var t=e.activeStartDate,a=e.hover,r=e.value,n=e.valueType,l=Zr(e,["activeStartDate","hover","value","valueType"]),i=0,c=11,u=I(t);return g.createElement(Et,{className:"react-calendar__year-view__months",dateTransform:function(d){var v=new Date;return v.setFullYear(u,d,1),je(v)},dateType:"month",end:c,hover:a,renderTile:function(d){var v=d.date,m=Zr(d,["date"]);return g.createElement(ol,rr({key:v.getTime()},l,m,{activeStartDate:t,date:v}))},start:i,value:r,valueType:n})}var vt=function(){return vt=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},vt.apply(this,arguments)},Ha=function(t){function a(){return g.createElement(il,vt({},t))}return g.createElement("div",{className:"react-calendar__year-view"},a())};Ha.propTypes=vt({},Mt);const ll=Ha;var ar=function(){return ar=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ar.apply(this,arguments)},cl=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},ct="react-calendar__month-view__days__day";function sl(e){var t=e.calendarType,a=e.classes,r=a===void 0?[]:a,n=e.currentMonthIndex,l=e.formatDay,i=l===void 0?gi:l,c=e.formatLongDate,u=c===void 0?bi:c,d=cl(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),v=Tt(t),m=d.date,w=d.locale,p=[];return r&&p.push.apply(p,r),ct&&p.push(ct),Va(m,v)&&p.push("".concat(ct,"--weekend")),m.getMonth()!==n&&p.push("".concat(ct,"--neighboringMonth")),g.createElement(Nt,ar({},d,{classes:p,formatAbbr:u,maxDateTransform:mr,minDateTransform:Qe,view:"month"}),i(w,m))}var nr=function(){return nr=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},nr.apply(this,arguments)},Kr=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function ul(e){var t=e.activeStartDate,a=e.calendarType,r=e.hover,n=e.showFixedNumberOfWeeks,l=e.showNeighboringMonth,i=e.value,c=e.valueType,u=Kr(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),d=Tt(a),v=I(t),m=be(t),w=n||l,p=qe(t,d),y=w?0:p,D=(w?-p:0)+1,j=function(){if(n)return D+6*7-1;var _=Ia(t);if(l){var S=new Date;S.setFullYear(v,m,_),S.setHours(0,0,0,0);var A=7-qe(S,d)-1;return _+A}return _}();return g.createElement(Et,{className:"react-calendar__month-view__days",count:7,dateTransform:function(_){var S=new Date;return S.setFullYear(v,m,_),Qe(S)},dateType:"day",hover:r,end:j,renderTile:function(_){var S=_.date,A=Kr(_,["date"]);return g.createElement(sl,nr({key:S.getTime()},u,A,{activeStartDate:t,calendarType:a,currentMonthIndex:m,date:S}))},offset:y,start:D,value:i,valueType:c})}var Ua="react-calendar__month-view__weekdays",Gt="".concat(Ua,"__weekday");function dl(e){for(var t=e.calendarType,a=e.formatShortWeekday,r=a===void 0?xi:a,n=e.formatWeekday,l=n===void 0?wi:n,i=e.locale,c=e.onMouseLeave,u=Tt(t),d=new Date,v=je(d),m=I(v),w=be(v),p=[],y=1;y<=7;y+=1){var D=new Date(m,w,y-qe(v,u)),j=l(i,D);p.push(g.createElement("div",{key:y,className:gt(Gt,Ai(D)&&"".concat(Gt,"--current"),Va(D,u)&&"".concat(Gt,"--weekend"))},g.createElement("abbr",{"aria-label":j,title:j},r(i,D).replace(".",""))))}return g.createElement(br,{className:Ua,count:7,onFocus:c,onMouseOver:c},p)}var pt=function(){return pt=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},pt.apply(this,arguments)},Xr=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},Jr="react-calendar__tile";function fl(e){var t=e.onClickWeekNumber,a=e.weekNumber,r=g.createElement("span",null,a);if(t){var n=e.date,l=e.onClickWeekNumber,i=e.weekNumber,c=Xr(e,["date","onClickWeekNumber","weekNumber"]);return g.createElement("button",pt({},c,{className:Jr,onClick:function(u){return l(i,n,u)},type:"button"}),r)}else{e.date,e.onClickWeekNumber,e.weekNumber;var c=Xr(e,["date","onClickWeekNumber","weekNumber"]);return g.createElement("div",pt({},c,{className:Jr}),r)}}function hl(e){var t=e.activeStartDate,a=e.calendarType,r=e.onClickWeekNumber,n=e.onMouseLeave,l=e.showFixedNumberOfWeeks,i=Tt(a),c=function(){if(l)return 6;var v=Ia(t),m=qe(t,i),w=v-(7-m);return 1+Math.ceil(w/7)}(),u=function(){for(var v=I(t),m=be(t),w=Ot(t),p=[],y=0;y<c;y+=1)p.push(Zt(new Date(v,m,w+y*7),i));return p}(),d=u.map(function(v){return ji(v,i)});return g.createElement(br,{className:"react-calendar__month-view__weekNumbers",count:c,direction:"column",onFocus:n,onMouseOver:n,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0}},d.map(function(v,m){var w=u[m];if(!w)throw new Error("date is not defined");return g.createElement(fl,{key:v,date:w,onClickWeekNumber:r,weekNumber:v})}))}var Ze=function(){return Ze=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ze.apply(this,arguments)},vl=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function pl(e){if(e)for(var t=0,a=Object.entries(li);t<a.length;t++){var r=a[t],n=r[0],l=r[1];if(l.includes(e))return n}return L.ISO_8601}var Za=function(t){var a=t.activeStartDate,r=t.locale,n=t.onMouseLeave,l=t.showFixedNumberOfWeeks,i=t.calendarType,c=i===void 0?pl(r):i,u=t.formatShortWeekday,d=t.formatWeekday,v=t.onClickWeekNumber,m=t.showWeekNumbers,w=vl(t,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function p(){return g.createElement(dl,{calendarType:c,formatShortWeekday:u,formatWeekday:d,locale:r,onMouseLeave:n})}function y(){return m?g.createElement(hl,{activeStartDate:a,calendarType:c,onClickWeekNumber:v,onMouseLeave:n,showFixedNumberOfWeeks:l}):null}function D(){return g.createElement(ul,Ze({calendarType:c},w))}var j="react-calendar__month-view";return g.createElement("div",{className:gt(j,m?"".concat(j,"--weekNumbers"):"")},g.createElement("div",{style:{display:"flex",alignItems:"flex-end"}},y(),g.createElement("div",{style:{flexGrow:1,width:"100%"}},p(),D())))};Za.propTypes=Ze(Ze({},Mt),{calendarType:Ba,formatDay:s.func,formatLongDate:s.func,formatShortWeekday:s.func,formatWeekday:s.func,onClickWeekNumber:s.func,onMouseLeave:s.func,showFixedNumberOfWeeks:s.bool,showNeighboringMonth:s.bool,showWeekNumbers:s.bool});const ml=Za;var Pe=function(){return Pe=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Pe.apply(this,arguments)},st="react-calendar",Ie=["century","decade","year","month"],gl=["decade","year","month","day"],wr=new Date;wr.setFullYear(1,0,1);wr.setHours(0,0,0,0);var bl=new Date(864e13);function Ye(e){return e instanceof Date?e:new Date(e)}function Ka(e,t){return Ie.slice(Ie.indexOf(e),Ie.indexOf(t)+1)}function yl(e,t,a){var r=Ka(t,a);return r.indexOf(e)!==-1}function Dr(e,t,a){return e&&yl(e,t,a)?e:a}function Xa(e){var t=Ie.indexOf(e);return gl[t]}function xl(e,t){var a=Array.isArray(e)?e[t]:e;if(!a)return null;var r=Ye(a);if(isNaN(r.getTime()))throw new Error("Invalid date: ".concat(e));return r}function Ja(e,t){var a=e.value,r=e.minDate,n=e.maxDate,l=e.maxDetail,i=xl(a,t);if(!i)return null;var c=Xa(l),u=function(){switch(t){case 0:return De(c,i);case 1:return $a(c,i);default:throw new Error("Invalid index value: ".concat(t))}}();return Wi(u,r,n)}var _r=function(e){return Ja(e,0)},Qa=function(e){return Ja(e,1)},wl=function(e){return[_r,Qa].map(function(t){return t(e)})};function en(e){var t=e.maxDate,a=e.maxDetail,r=e.minDate,n=e.minDetail,l=e.value,i=e.view,c=Dr(i,n,a),u=_r({value:l,minDate:r,maxDate:t,maxDetail:a})||new Date;return De(c,u)}function Dl(e){var t=e.activeStartDate,a=e.defaultActiveStartDate,r=e.defaultValue,n=e.defaultView,l=e.maxDate,i=e.maxDetail,c=e.minDate,u=e.minDetail,d=e.value,v=e.view,m=Dr(v,u,i),w=t||a;return w?De(m,w):en({maxDate:l,maxDetail:i,minDate:c,minDetail:u,value:d||r,view:v||n})}function Ht(e){return e&&(!Array.isArray(e)||e.length===1)}function ut(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var tn=N.forwardRef(function(t,a){var r=t.activeStartDate,n=t.allowPartialRange,l=t.calendarType,i=t.className,c=t.defaultActiveStartDate,u=t.defaultValue,d=t.defaultView,v=t.formatDay,m=t.formatLongDate,w=t.formatMonth,p=t.formatMonthYear,y=t.formatShortWeekday,D=t.formatWeekday,j=t.formatYear,_=t.goToRangeStartOnSelect,S=_===void 0?!0:_,A=t.inputRef,B=t.locale,oe=t.maxDate,G=oe===void 0?bl:oe,x=t.maxDetail,b=x===void 0?"month":x,k=t.minDate,f=k===void 0?wr:k,T=t.minDetail,O=T===void 0?"century":T,C=t.navigationAriaLabel,M=t.navigationAriaLive,V=t.navigationLabel,W=t.next2AriaLabel,Z=t.next2Label,K=t.nextAriaLabel,Q=t.nextLabel,R=t.onActiveStartDateChange,ee=t.onChange,P=t.onClickDay,ae=t.onClickDecade,q=t.onClickMonth,de=t.onClickWeekNumber,H=t.onClickYear,te=t.onDrillDown,ie=t.onDrillUp,re=t.onViewChange,Se=t.prev2AriaLabel,xe=t.prev2Label,ve=t.prevAriaLabel,we=t.prevLabel,z=t.returnValue,Re=z===void 0?"start":z,ne=t.selectRange,et=t.showDoubleView,kr=t.showFixedNumberOfWeeks,Or=t.showNavigation,bn=Or===void 0?!0:Or,yn=t.showNeighboringCentury,xn=t.showNeighboringDecade,jr=t.showNeighboringMonth,wn=jr===void 0?!0:jr,Dn=t.showWeekNumbers,_n=t.tileClassName,kn=t.tileContent,On=t.tileDisabled,Pt=t.value,Cr=t.view,Sr=N.useState(c),jn=Sr[0],tt=Sr[1],Tr=N.useState(null),Cn=Tr[0],Er=Tr[1],Nr=N.useState(Array.isArray(u)?u.map(function(E){return E!==null?Ye(E):null}):u!=null?Ye(u):null),At=Nr[0],Sn=Nr[1],Mr=N.useState(d),Tn=Mr[0],Pr=Mr[1],X=r||jn||Dl({activeStartDate:r,defaultActiveStartDate:c,defaultValue:u,defaultView:d,maxDate:G,maxDetail:b,minDate:f,minDetail:O,value:Pt,view:Cr}),J=function(){var E=function(){return ne&&Ht(At)?At:Pt!==void 0?Pt:At}();return E?Array.isArray(E)?E.map(function($){return $!==null?Ye($):null}):E!==null?Ye(E):null:null}(),rt=Xa(b),F=Dr(Cr||Tn,O,b),se=Ka(O,b),En=ne?Cn:null,Lt=se.indexOf(F)<se.length-1,Ar=se.indexOf(F)>0,Lr=N.useCallback(function(E){var $=function(){switch(Re){case"start":return _r;case"end":return Qa;case"range":return wl;default:throw new Error("Invalid returnValue.")}}();return $({maxDate:G,maxDetail:b,minDate:f,value:E})},[G,b,f,Re]),It=N.useCallback(function(E,$){tt(E);var Y={action:$,activeStartDate:E,value:J,view:F};R&&!ut(X,E)&&R(Y)},[X,R,J,F]),at=N.useCallback(function(E,$){var Y=function(){switch(F){case"century":return ae;case"decade":return H;case"year":return q;case"month":return P;default:throw new Error("Invalid view: ".concat(F,"."))}}();Y&&Y(E,$)},[P,ae,q,H,F]),Wt=N.useCallback(function(E,$){if(Lt){at(E,$);var Y=se[se.indexOf(F)+1];if(!Y)throw new Error("Attempted to drill down from the lowest view.");tt(E),Pr(Y);var le={action:"drillDown",activeStartDate:E,value:J,view:Y};R&&!ut(X,E)&&R(le),re&&F!==Y&&re(le),te&&te(le)}},[X,Lt,R,at,te,re,J,F,se]),Ft=N.useCallback(function(){if(Ar){var E=se[se.indexOf(F)-1];if(!E)throw new Error("Attempted to drill up from the highest view.");var $=De(E,X);tt($),Pr(E);var Y={action:"drillUp",activeStartDate:$,value:J,view:E};R&&!ut(X,$)&&R(Y),re&&F!==E&&re(Y),ie&&ie(Y)}},[X,Ar,R,ie,re,J,F,se]),$t=N.useCallback(function(E,$){var Y=J;at(E,$);var le=ne&&!Ht(Y),ce;if(ne)if(le)ce=De(rt,E);else{if(!Y)throw new Error("previousValue is required");if(Array.isArray(Y))throw new Error("previousValue must not be an array");ce=Mi(rt,Y,E)}else ce=Lr(E);var zt=!ne||le||S?en({maxDate:G,maxDetail:b,minDate:f,minDetail:O,value:ce,view:F}):null;$.persist(),tt(zt),Sn(ce);var An={action:"onChange",activeStartDate:zt,value:ce,view:F};if(R&&!ut(X,zt)&&R(An),ee)if(ne){var Ln=Ht(ce);if(!Ln)ee(ce||null,$);else if(n){if(Array.isArray(ce))throw new Error("value must not be an array");ee([ce||null,null],$)}}else ee(ce||null,$)},[X,n,Lr,S,G,b,f,O,R,ee,at,ne,J,rt,F]);function Nn(E){Er(E)}function Rt(){Er(null)}N.useImperativeHandle(a,function(){return{activeStartDate:X,drillDown:Wt,drillUp:Ft,onChange:$t,setActiveStartDate:It,value:J,view:F}},[X,Wt,Ft,$t,It,J,F]);function Ir(E){var $=E?Fa(F,X):De(F,X),Y=Lt?Wt:$t,le={activeStartDate:$,hover:En,locale:B,maxDate:G,minDate:f,onClick:Y,onMouseOver:ne?Nn:void 0,tileClassName:_n,tileContent:kn,tileDisabled:On,value:J,valueType:rt};switch(F){case"century":return g.createElement(Ji,Pe({formatYear:j,showNeighboringCentury:yn},le));case"decade":return g.createElement(rl,Pe({formatYear:j,showNeighboringDecade:xn},le));case"year":return g.createElement(ll,Pe({formatMonth:w,formatMonthYear:p},le));case"month":return g.createElement(ml,Pe({calendarType:l,formatDay:v,formatLongDate:m,formatShortWeekday:y,formatWeekday:D,onClickWeekNumber:de,onMouseLeave:ne?Rt:void 0,showFixedNumberOfWeeks:typeof kr<"u"?kr:et,showNeighboringMonth:wn,showWeekNumbers:Dn},le));default:throw new Error("Invalid view: ".concat(F,"."))}}function Mn(){return bn?g.createElement(Li,{activeStartDate:X,drillUp:Ft,formatMonthYear:p,formatYear:j,locale:B,maxDate:G,minDate:f,navigationAriaLabel:C,navigationAriaLive:M,navigationLabel:V,next2AriaLabel:W,next2Label:Z,nextAriaLabel:K,nextLabel:Q,prev2AriaLabel:Se,prev2Label:xe,prevAriaLabel:ve,prevLabel:we,setActiveStartDate:It,showDoubleView:et,view:F,views:se}):null}var Pn=Array.isArray(J)?J:[J];return g.createElement("div",{className:gt(st,ne&&Pn.length===1&&"".concat(st,"--selectRange"),et&&"".concat(st,"--doubleView"),i),ref:A},Mn(),g.createElement("div",{className:"".concat(st,"__viewContainer"),onBlur:ne?Rt:void 0,onMouseLeave:ne?Rt:void 0},Ir(),et?Ir(!0):null))}),Qr=s.instanceOf(Date),ea=s.oneOfType([s.string,s.instanceOf(Date)]),ta=s.oneOfType([ea,Xi(ea)]);tn.propTypes={activeStartDate:Qr,allowPartialRange:s.bool,calendarType:Ba,className:ft,defaultActiveStartDate:Qr,defaultValue:ta,defaultView:ht,formatDay:s.func,formatLongDate:s.func,formatMonth:s.func,formatMonthYear:s.func,formatShortWeekday:s.func,formatWeekday:s.func,formatYear:s.func,goToRangeStartOnSelect:s.bool,inputRef:Ui,locale:s.string,maxDate:xr,maxDetail:s.oneOf(Ie),minDate:yr,minDetail:s.oneOf(Ie),navigationAriaLabel:s.string,navigationAriaLive:s.oneOf(["off","polite","assertive"]),navigationLabel:s.func,next2AriaLabel:s.string,next2Label:s.node,nextAriaLabel:s.string,nextLabel:s.node,onActiveStartDateChange:s.func,onChange:s.func,onClickDay:s.func,onClickDecade:s.func,onClickMonth:s.func,onClickWeekNumber:s.func,onClickYear:s.func,onDrillDown:s.func,onDrillUp:s.func,onViewChange:s.func,prev2AriaLabel:s.string,prev2Label:s.node,prevAriaLabel:s.string,prevLabel:s.node,returnValue:s.oneOf(["start","end","range"]),selectRange:s.bool,showDoubleView:s.bool,showFixedNumberOfWeeks:s.bool,showNavigation:s.bool,showNeighboringCentury:s.bool,showNeighboringDecade:s.bool,showNeighboringMonth:s.bool,showWeekNumbers:s.bool,tileClassName:s.oneOfType([s.func,ft]),tileContent:s.oneOfType([s.func,s.node]),tileDisabled:s.func,value:ta,view:ht};const _l=tn,rn=h(_l)`
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
`,an=h.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,nn=h.textarea`
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
`,pe=h(cr)`
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
`,on=h.div`
  display: flex;
  gap: 4px;
  width: 200px;
  margin-bottom: 40px;
  align-items: center;
  cursor: pointer;
`,ln=h.p`
  color: var(--datepicker-dayname-color);
  margin: 0;
  margin-top: 14px;
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
`,cn=h.p`
  margin: 0;
  margin-top: 14px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: var(--datepicker-dayname-color);
  font-family: "Poppins", sans-serif;
`,sn=h.div`
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
`,un=h.input`
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
`,dn=h.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--primary-button-color);
`,fn=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  width: 28px;
  height: 28px;
  background-color: var(--shared-black-plus-button);
  margin-right: 8px;
  padding: 7px;
`,hn=h.svg`
  width: 28px;
  height: 28px;
  stroke: var(--add-card-icon-plus-color);
`,vn=h.button`
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
`,pn=h(ma)`
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
`,mn=h(ma)`
  position: absolute;
  bottom: -12px;
  padding-left: 8px;
  margin: 0;
  color: red;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`,gn=h.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: var(--primary-button-color);
`;yt.setAppElement("#root");const kl=wt().shape({title:ge().required("Title is required"),description:ge().required("Description is required"),color:ge().required("Color selection is required"),deadline:ga().required("Deadline is required")});function Ol({isModalOpen:e,modalStateSwapper:t,cardId:a,cardTitle:r,cardColor:n,cardDescription:l,cardDeadline:i}){const[c,u]=N.useState(null);console.log(c);const d=ke(),{isModalOpen:v,openModal:m,closeModal:w}=Le(),p={overlay:{backgroundColor:"rgb(21, 21, 21, 0.75)"},content:{width:"233px",height:"254px",margin:"auto",padding:0,border:"none",borderRadius:"8px"}},y=(_,{setSubmitting:S,resetForm:A})=>{const B={cardId:a,title:_.title,description:_.description,color:_.color,deadline:`${c||i}`};d(In(B)),S(!1),A(),t(),setTimeout(()=>{u(null)},1e3)},D=(_,S)=>["Su","Mo","Tu","We","Th","Fr","Sa"][S.getDay()],j=_=>{const S=new Date(_),A=S.getDate(),B=S.toLocaleString("en",{month:"long"});return`${S.toLocaleString("en",{weekday:"long"})}, ${B} ${A}`};return o.jsx(o.Fragment,{children:o.jsxs(xt,{modalIsOpen:e,closeModal:t,title:"Edit card",maxWidth:"350px",children:[o.jsx(Dt,{initialValues:{title:`${r}`,description:`${l}`,color:`${n}`,deadline:`${i}`},validationSchema:kl,onSubmit:y,children:({values:_,handleChange:S,handleSubmit:A})=>o.jsxs(an,{onSubmit:A,children:[o.jsxs(mt,{children:[o.jsx(un,{type:"text",name:"title",onChange:S,value:_.title,placeholder:"Title"}),o.jsx(pn,{name:"title",component:"div",className:"error"})]}),o.jsxs(mt,{children:[o.jsx(nn,{name:"description",onChange:S,value:_.description,placeholder:"Description"}),o.jsx(mn,{name:"Description",component:"div",className:"error"})]}),o.jsx(cn,{children:"Label color"}),o.jsxs(sn,{children:[o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"blue",className:"blue",checked:_.color==="blue",onChange:S}),o.jsx(fe,{className:"blue"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"pink",className:"pink",checked:_.color==="pink",onChange:S}),o.jsx(fe,{className:"pink"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"green",className:"green",checked:_.color==="green",onChange:S}),o.jsx(fe,{className:"green"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"gray",className:"gray",checked:_.color==="gray",onChange:S}),o.jsx(fe,{className:"gray"})]})]}),o.jsx(ln,{children:"Deadline"}),o.jsxs(on,{children:[o.jsx(dn,{onClick:m,children:j(c===null?i:c)}),o.jsx(gn,{children:o.jsx("use",{href:U+"#icon-chevron-down"})})]}),o.jsxs(vn,{type:"submit",children:[o.jsx(fn,{children:o.jsx(hn,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Edit"]})]})}),o.jsx(yt,{isOpen:v,onRequestClose:w,style:p,closeTimeoutMS:750,children:o.jsx(rn,{formatShortWeekday:D,value:c,onChange:u,onClickDay:w,minDate:new Date,prevLabel:"<",nextLabel:">"})})]})})}var or={exports:{}};(function(e,t){(function(a,r){r(t,N,sa())})(void 0,function(a,r,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=c(r),i=c(n);function c(x){return x&&x.__esModule?x:{default:x}}function u(x){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?u=function(k){return typeof k}:u=function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},u(x)}function d(x,b){if(x==null)return{};var k=v(x,b),f,T;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(x);for(T=0;T<O.length;T++)f=O[T],!(b.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(x,f)&&(k[f]=x[f])}return k}function v(x,b){if(x==null)return{};var k={},f=Object.keys(x),T,O;for(O=0;O<f.length;O++)T=f[O],!(b.indexOf(T)>=0)&&(k[T]=x[T]);return k}function m(x,b){if(!(x instanceof b))throw new TypeError("Cannot call a class as a function")}function w(x,b){for(var k=0;k<b.length;k++){var f=b[k];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(x,f.key,f)}}function p(x,b,k){return b&&w(x.prototype,b),k&&w(x,k),x}function y(x,b){return b&&(u(b)==="object"||typeof b=="function")?b:j(x)}function D(x){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(k){return k.__proto__||Object.getPrototypeOf(k)},D(x)}function j(x){if(x===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x}function _(x,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function");x.prototype=Object.create(b&&b.prototype,{constructor:{value:x,writable:!0,configurable:!0}}),b&&S(x,b)}function S(x,b){return S=Object.setPrototypeOf||function(f,T){return f.__proto__=T,f},S(x,b)}function A(x,b,k){return b in x?Object.defineProperty(x,b,{value:k,enumerable:!0,configurable:!0,writable:!0}):x[b]=k,x}var B=1e-4,oe=function(b,k){return Math.abs(b-k)<B},G=function(x){_(b,x);function b(){var k,f;m(this,b);for(var T=arguments.length,O=new Array(T),C=0;C<T;C++)O[C]=arguments[C];return f=y(this,(k=D(b)).call.apply(k,[this].concat(O))),A(j(f),"onResize",function(){f.rafId&&window.cancelAnimationFrame(f.rafId),f.rafId=window.requestAnimationFrame(f.update.bind(j(f)))}),A(j(f),"onToggled",function(M){typeof f.props.onToggled=="function"&&setTimeout(function(){return f.props.onToggled(M)},0)}),A(j(f),"onTruncated",function(){typeof f.props.onTruncated=="function"&&setTimeout(function(){return f.props.onTruncated()},0)}),A(j(f),"onCalculated",function(){typeof f.props.onCalculated=="function"&&setTimeout(function(){return f.props.onCalculated()},0)}),A(j(f),"update",function(){var M=window.getComputedStyle(f.scope),V=[M["font-weight"],M["font-style"],M["font-size"],M["font-family"],M["letter-spacing"]].join(" ");f.canvas.font=V,f.forceUpdate()}),f}return p(b,[{key:"componentDidMount",value:function(){var f=document.createElement("canvas"),T=document.createDocumentFragment(),O=window.getComputedStyle(this.scope),C=[O["font-weight"],O["font-style"],O["font-size"],O["font-family"]].join(" ");T.appendChild(f),this.canvas=f.getContext("2d"),this.canvas.font=C,this.forceUpdate(),window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize),this.rafId&&window.cancelAnimationFrame(this.rafId)}},{key:"measureWidth",value:function(f){return this.canvas.measureText(f).width}},{key:"getRenderText",value:function(){var f=this.props;f.containerClassName,f.element;var T=f.line;f.onCalculated,f.onTruncated,f.onToggled;var O=f.text,C=f.textElement,M=f.textTruncateChild,V=f.truncateText,W=f.maxCalculateTimes,Z=d(f,["containerClassName","element","line","onCalculated","onTruncated","onToggled","text","textElement","textTruncateChild","truncateText","maxCalculateTimes"]),K=this.scope.getBoundingClientRect().width;if(K===0)return null;var Q=this.measureWidth(O);if(K>Q||oe(K,Q))return this.onToggled(!1),(0,r.createElement)(C,Z,O);var R="";if(M&&typeof M.type=="string"){var ee=M.type;(ee.indexOf("span")>=0||ee.indexOf("a")>=0)&&(R=M.props.children)}for(var P=1,ae=O.length,q="",de=0,H=0,te=T,ie=0,re=!1,Se=!1,xe=0,ve=-1,we="",z=0;te-- >0;){for(we=te?"":V+(R?" "+R:"");P<=ae;)if(q=O.substr(H,P),ie=this.measureWidth(q+we),ie<K)de=O.indexOf(" ",P+1),de===-1?(P+=1,re=!1):(re=!0,P=de);else{do{if(z++>=W)break;q=O.substr(H,P),te||P--,q[q.length-1]===" "&&(q=O.substr(H,P-1)),re?(ve=q.lastIndexOf(" "),ve>-1?(P=ve,te&&P++,q=O.substr(H,P)):(P--,q=O.substr(H,P))):(P--,q=O.substr(H,P)),ie=this.measureWidth(q+we)}while((ie>K||oe(ie,K))&&q.length>0);H+=P;break}if(P>=ae){H=ae;break}re&&!Se&&O.substr(xe,P).indexOf(" ")===-1&&(Se=O.substr(xe,P).indexOf(" ")===-1,te--),xe=P+1}return H===ae?(this.onToggled(!1),(0,r.createElement)(C,Z,O)):(this.onTruncated(),this.onToggled(!0),l.default.createElement("span",Z,(0,r.createElement)(C,Z,O.substr(0,H)+V+" "),M))}},{key:"render",value:function(){var f=this,T=this.props,O=T.element,C=T.text,M=T.style,V=M===void 0?{}:M,W=T.containerClassName,Z=T.line;T.onCalculated,T.onTruncated,T.onToggled;var K=T.textElement;T.textTruncateChild,T.truncateText,T.maxCalculateTimes;var Q=d(T,["element","text","style","containerClassName","line","onCalculated","onTruncated","onToggled","textElement","textTruncateChild","truncateText","maxCalculateTimes"]),R=V.fontWeight,ee=V.fontStyle,P=V.fontSize,ae=V.fontFamily,q=this.scope&&Z?this.getRenderText():(0,r.createElement)(K,Q,C),de={ref:function(te){f.scope=te},className:W,style:{overflow:"hidden",fontWeight:R,fontStyle:ee,fontSize:P,fontFamily:ae}};return this.scope&&this.onCalculated(),(0,r.createElement)(O,de,q)}}]),b}(r.Component);A(G,"propTypes",{containerClassName:i.default.string,element:i.default.string,line:i.default.oneOfType([i.default.number,i.default.bool]),onCalculated:i.default.func,onTruncated:i.default.func,onToggled:i.default.func,text:i.default.string,textElement:i.default.elementType,textTruncateChild:i.default.node,truncateText:i.default.string,maxCalculateTimes:i.default.number}),A(G,"defaultProps",{element:"div",line:1,text:"",textElement:"span",truncateText:"…",maxCalculateTimes:10}),a.default=G,e.exports=a.default})})(or,or.exports);var jl=or.exports;const Cl=ir(jl),Sl=h.ul`
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
`,Tl=h.li`
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
`,El=h.h4`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 14px;
  /* letter-spacing: -0.02em; */
  color: var(--card-title-color);
`,Nl=h.div`
  height: 50px;
  overflow: hidden;
`,Ml=h(Cl)`
  font-size: 12px;
  line-height: 1.33;
  /* letter-spacing: -0.02em; */
  color: var(--screens-page-tutorial-text-color);
  transition: var(--hover-paramas);
`,Pl=h.div`
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
`,ra=h.span`
  display: block;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: var(--screens-page-tutorial-text-color);
  transition: var(--hover-paramas);
`,Al=h.span`
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
`,Ll=h.span`
  font-size: 10px;
  letter-spacing: -0.02em;
  color: var(--card-params-value-text-color);
  transition: var(--hover-paramas);
`,Il=h.ul`
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
`,Wl=h.div`
  height: auto;
  padding: 15px;
  border: 1px solid var(--shared-input-border-color);
  box-shadow: 0px 4px 16px var(--color-shadow);
  border-radius: 8px;
  background-color: var(--primary-background-color);
  z-index: 1000;
  min-width: 160px;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Fl=h.button`
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
`,$l=({isOpen:e,onClose:t,onSelectStatus:a,cardId:r,owner:n,x:l,y:i})=>{const{column:c}=bt(lr);if(!e)return null;const u=d=>{t(),a(d,r,n)};return o.jsx(Wl,{style:{position:"absolute",left:l-175,top:i-120},children:c===void 0?o.jsx(o.Fragment,{}):c.map(({_id:d,title:v})=>o.jsxs(Fl,{onClick:()=>u(d),children:[v,o.jsx(Ae,{children:o.jsx("use",{href:U+"#icon-arrow-circle-broken-right"})})]},d))})},Rl=e=>{const t=new Date(e),a=t.getDate(),r=t.getMonth()+1,n=t.getFullYear();return`${a<10?"0":""}${a}/${r<10?"0":""}${r}/${n}`},zl=e=>{const t=new Date(e),a=new Date,r=t.getDate(),n=t.getMonth(),l=t.getFullYear(),i=a.getDate(),c=a.getMonth(),u=a.getFullYear();if(r<=i&&n<=c&&l<=u)return!0},aa=e=>{switch(e){case"blue":return"#8fa1d0";case"pink":return"#e09cb5";case"green":return"#bedbb0";case"gray":return"rgba(255, 255, 255, 0.3)";default:return"rgba(255, 255, 255, 0.3)"}},Vl=e=>{switch(e){case"blue":return"Low";case"pink":return"Medium";case"green":return"High";case"gray":return"Without priority";default:return"Without priority"}},Yl=({card:e})=>{const[t,a]=N.useState(!1),[r,n]=N.useState(null),[l,i]=N.useState(null),[c,u]=N.useState(null),[d,v]=N.useState(null),[m,w]=N.useState(null),[p,y]=N.useState(null),[D,j]=N.useState({x:null,y:null}),_=ke(),S=C=>{const M=C.clientX,V=C.clientY;j({x:M,y:V})},{isModalOpen:A,openModal:B,closeModal:oe}=Le(),G=C=>{_(Wn(C))},x=()=>{a(C=>!C)},b=(C,M,V)=>{_(Fn({columnId:C,cardId:M,owner:V}))},[k]=ia(),f=k.get("priority"),O=(()=>{switch(f){case"low":return e.filter(C=>C.color==="blue");case"medium":return e.filter(C=>C.color==="pink");case"high":return e.filter(C=>C.color==="green");case"without":return e.filter(C=>C.color==="gray");case"all":return e;default:return e}})();return o.jsxs(o.Fragment,{children:[o.jsxs(Sl,{children:[O&&O.map(({_id:C,title:M,description:V,color:W,deadline:Z,owner:K})=>o.jsxs(Tl,{$prioritycolor:aa(W),children:[o.jsx(El,{children:M}),o.jsx(Nl,{children:o.jsx(Ml,{line:2,element:"span",truncateText:"…",text:V})}),o.jsxs(Pl,{children:[o.jsxs("div",{children:[o.jsx(ra,{children:"Priority"}),o.jsx(Al,{$prioritycolor:aa(W),children:Vl(W)})]}),o.jsxs("div",{children:[o.jsx(ra,{children:"Deadline"}),o.jsx(Ll,{children:Rl(Z)})]}),o.jsxs(Il,{children:[zl(Z)&&o.jsx("li",{children:o.jsx(dt,{children:o.jsx(Ae,{className:"bell",children:o.jsx("use",{href:U+"#icon-bell"})})})}),o.jsx("li",{children:o.jsx(dt,{onClick:()=>{x(),n(C),y(K),S(event)},children:o.jsx(Ae,{children:o.jsx("use",{href:U+"#icon-arrow-circle-broken-right"})})})}),o.jsx("li",{children:o.jsx(dt,{onClick:()=>{B(),n(C),i(M),v(W),u(V),w(Z)},children:o.jsx(Ae,{children:o.jsx("use",{href:U+"#icon-pencil"})})})}),o.jsx("li",{children:o.jsx(dt,{onClick:()=>G(C),children:o.jsx(Ae,{children:o.jsx("use",{href:U+"#icon-trash"})})})})]})]})]},C)),o.jsx($l,{isOpen:t,onClose:x,onSelectStatus:b,cardId:r,owner:p,x:D.x,y:D.y})]}),o.jsx(Ol,{modalStateSwapper:oe,isModalOpen:A,cardId:r,cardTitle:l,cardColor:d,cardDescription:c,cardDeadline:m})]})},Bl=h.div`
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
`,ql=h.ul`
  display: flex;
  gap: 34px;
  height: 100%;
  padding-bottom: 10px;
`,Gl=h.li`
  display: flex;
  flex-direction: column;
  width: 100%;

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
`,Ul=h.button`
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
`,Zl=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: var(--add-column-icon-wrap-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Kl=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: var(--shared-black-plus-button);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Xl=h.svg`
  width: 14px;
  height: 14px;
  stroke: var(--add-column-icon-plus-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Jl=h.svg`
  width: 14px;
  height: 14px;
  stroke: var(--add-card-icon-plus-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Ql=h.div`
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
`,ec=h.h3`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--card-title-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,tc=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,na=h.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  /* z-index: 1000; */
`,oa=h.svg`
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
`,rc=h(cr)`
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
`,ac=h.button`
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
`,nc=wt().shape({title:ge().min("6").required("specify a column name")}),oc=({isModalOpen:e,modalStateSwapper:t})=>{const a=bt(lr),r=ke(),n={title:""},l=({title:i},c)=>{const u=a.result._id;r($n({dashboardId:u,title:i})),c.resetForm(),t()};return o.jsx(xt,{modalIsOpen:e,closeModal:t,title:"Add column",maxWidth:"335px",children:o.jsx(ua,{children:o.jsx(Dt,{initialValues:n,validationSchema:nc,onSubmit:l,children:o.jsxs(da,{children:[o.jsxs(fa,{children:[o.jsx(ha,{name:"title",component:"div"}),o.jsx(rc,{type:"text",id:"title",name:"title",placeholder:"title",autoComplete:"off"})]}),o.jsxs(ac,{type:"submit",children:[o.jsx(va,{children:o.jsx(pa,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add"]})]})})})})},ic=h(cr)`
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
`,lc=h.button`
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
`,cc=wt().shape({title:ge().min("6").required("specify a column name")}),sc=({isModalOpen:e,modalStateSwapper:t,title:a,columnId:r})=>{const n=ke(),l={title:a||""},i=({title:c},u)=>{n(Rn({columnId:r,title:c})),u.resetForm(),t()};return o.jsx(xt,{modalIsOpen:e,closeModal:t,title:"Edit column",maxWidth:"335px",children:o.jsx(ua,{children:o.jsx(Dt,{initialValues:l,validationSchema:cc,onSubmit:i,children:o.jsxs(da,{children:[o.jsxs(fa,{children:[o.jsx(ha,{name:"title",component:"div"}),o.jsx(ic,{type:"text",id:"title",name:"title",placeholder:"title",autoComplete:"off"})]}),o.jsxs(lc,{type:"submit",children:[o.jsx(va,{children:o.jsx(pa,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add"]})]})})})})};yt.setAppElement("#root");const uc=wt().shape({title:ge().required("Title is required"),description:ge().required("Description is required"),color:ge().required("Color selection is required"),deadline:ga().required("Deadline is required")});function dc({isModalOpen:e,modalStateSwapper:t,columnId:a}){const[r,n]=N.useState(new Date),l=ke(),{isModalOpen:i,openModal:c,closeModal:u}=Le(),d={overlay:{backgroundColor:"rgb(21, 21, 21, 0.75)"},content:{width:"233px",height:"254px",margin:"auto",padding:0,border:"none",borderRadius:"8px"}},v=(p,{setSubmitting:y,resetForm:D})=>{const j={columnId:a,title:p.title,description:p.description,color:p.color,deadline:r};l(zn(j)),y(!1),D(),t(),setTimeout(()=>{n(new Date)},1e3)},m=(p,y)=>["Su","Mo","Tu","We","Th","Fr","Sa"][y.getDay()],w=p=>{const y=new Date(p),D=y.getDate(),j=y.toLocaleString("en",{month:"long"});return`${y.toLocaleString("en",{weekday:"long"})}, ${j} ${D}`};return o.jsx(o.Fragment,{children:o.jsxs(xt,{modalIsOpen:e,closeModal:t,title:"Add card",maxWidth:"350px",children:[o.jsx(Dt,{initialValues:{title:"",description:"",color:"gray",deadline:new Date},validationSchema:uc,onSubmit:v,children:({values:p,handleChange:y,handleSubmit:D})=>o.jsxs(an,{onSubmit:D,children:[o.jsxs(mt,{children:[o.jsx(un,{type:"text",name:"title",onChange:y,value:p.title,placeholder:"Title"}),o.jsx(pn,{name:"title",component:"div",className:"error"})]}),o.jsxs(mt,{children:[o.jsx(nn,{name:"description",onChange:y,value:p.description,placeholder:"Description"}),o.jsx(mn,{name:"description",component:"div",className:"error"})]}),o.jsx(cn,{children:"Label color"}),o.jsxs(sn,{onChange:y,value:p.color,children:[o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"blue",className:"blue",checked:p.color==="blue",onChange:y}),o.jsx(fe,{className:"blue"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"pink",className:"pink",checked:p.color==="pink",onChange:y}),o.jsx(fe,{className:"pink"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"green",className:"green",checked:p.color==="green",onChange:y}),o.jsx(fe,{className:"green"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"gray",className:"gray",checked:p.color==="gray",onChange:y}),o.jsx(fe,{className:"gray"})]})]}),o.jsx(ln,{children:"Deadline"}),o.jsxs(on,{onClick:c,children:[o.jsx(dn,{children:w(r)}),o.jsx(gn,{children:o.jsx("use",{href:U+"#icon-chevron-down"})})]}),o.jsxs(vn,{type:"submit",children:[o.jsx(fn,{children:o.jsx(hn,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add"]})]})}),o.jsx(yt,{isOpen:i,onRequestClose:u,style:d,closeTimeoutMS:750,children:o.jsx(rn,{formatShortWeekday:m,selectedDate:new Date,onChange:n,onClickDay:u,minDate:new Date,prevLabel:"<",nextLabel:">"})})]})})}const fc=()=>{const{isModalOpen:e,openModal:t,closeModal:a}=Le(),{isModalOpen:r,openModal:n,closeModal:l}=Le(),{isModalOpen:i,openModal:c,closeModal:u}=Le(),{column:d}=bt(lr),{state:v}=la(),m=ke(),[w,p]=N.useState(null);N.useEffect(()=>{d===void 0&&v&&m(ca(v.id))},[d,m,v==null?void 0:v.id,v]);const y=D=>{m(Vn(D))};return o.jsxs(Bl,{children:[o.jsx(ql,{children:d===void 0?o.jsx(o.Fragment,{}):d.map(({_id:D,title:j,card:_})=>o.jsxs(Gl,{children:[o.jsx("div",{children:o.jsxs(Ql,{children:[o.jsx(ec,{children:j}),o.jsxs(tc,{children:[o.jsx(na,{onClick:()=>{n(),p(D)},children:o.jsx(oa,{children:o.jsx("use",{href:U+"#icon-pencil"})})}),o.jsx(na,{onClick:()=>y(D),children:o.jsx(oa,{children:o.jsx("use",{href:U+"#icon-trash"})})})]})]})}),o.jsx(Yl,{card:_}),o.jsx("div",{children:o.jsxs(Ul,{onClick:()=>{c(),p(D)},children:[o.jsx(Kl,{children:o.jsx(Jl,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add Card"]})})]},D))}),o.jsxs(Hl,{onClick:t,children:[o.jsx(Zl,{children:o.jsx(Xl,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add column"]}),o.jsx(Wr,{onClick:a,className:e===!0&&"active"}),o.jsx(oc,{modalStateSwapper:a,isModalOpen:e}),o.jsx(Wr,{onClick:l,className:r===!0&&"active"}),o.jsx(sc,{modalStateSwapper:l,isModalOpen:r,columnId:w}),o.jsx(dc,{modalStateSwapper:u,isModalOpen:i,columnId:w})]})},hc=h.div`
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
`,vc=h.div`
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
`,mc=h.span`
  color: var(--welcome-message-text-accent-color);
`,wc=()=>{var p;const[e,t]=N.useState(!1),[a,r]=N.useState(""),n=N.useRef(!0),{boardName:l}=Yn(),i=Bn(),c=la(),u=bt(Un),d=ke(),[v,m]=N.useState(u),w=()=>{const y=c.pathname.split("/")[2];return u.filter(D=>D.title===y)};return N.useEffect(()=>{r(l)},[c.pathname,l]),N.useEffect(()=>{var y;if(m(u),!(n.current!==!0&&l!==a)){if(u.length===0&&i("/home",{replace:!0}),v.length!==u.length&&l&&u.length>0&&d(ca((y=u[u.length-1])==null?void 0:y._id)),u.length>0&&!l){t(!0);const D=u[u.length-1]??"";r(D.title),i(`/home/${D.title}`,{replace:!0,state:{id:D._id}}),t(!1)}n.current=!1}},[u,i,l,a,v.length,d]),o.jsx(hc,{$bcgurl:(p=w()[0])==null?void 0:p.backgroundURL,children:e?o.jsx("div",{children:o.jsx(qn,{})}):l===void 0&&o.jsx(vc,{children:o.jsxs(pc,{children:["Before starting your project, it is essential"," ",o.jsx(mc,{children:"to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})||l!==void 0&&o.jsxs(o.Fragment,{children:[o.jsx(co,{boardName:l}),o.jsx(fc,{})]})})};export{wc as default};
