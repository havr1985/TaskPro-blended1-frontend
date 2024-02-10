import{u as h,r as E,j as o,q as an,t as rt,R as b,v as pt,a as Pe,w as Aa,x as Pa,b as or,y as La,z as Ia,A as Wa,D as on,i as Fa,E as Ra,p as $a,F as Va,G as Ya}from"./index-MtbUvCMT.js";import{i as U}from"./icons-iplVKqot.js";import{g as za,w as Ba,h as c,i as mt,u as Me,S as gt,p as qa,s as ln,a as cn,M as sn,F as dn,E as un,d as fn,P as hn,O as Lr,e as Ga}from"./HomePage.styled-FZKQXbyp.js";import{b as ir,E as vn,c as bt,a as ge,d as pn,F as yt}from"./index.esm-qILmVYBW.js";const Ha=h.div`
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
  `,Ua=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 999; 
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1)
`,$e=h.span`
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
`,nt=h.p`
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
`,Za=h.div`
  display: flex;
  flex-direction:column;
  align-items: start;
  gap: 8px;
  margin-top: 16px;
 
`,at=h.div`
  display: flex;
  width: 130px;
  gap: 8px;
`,ot=h.label`
  position: relative;
  display: flex;
  flex-direction:row;
  gap: 8px;
  height: 18px;
  margin: 0;

   input[type="radio"]:checked + ${$e} {
    scale: 0.5;
  };  

/*   input[type="radio"].green:checked + .green-label .color-text {
    scale: 0.5,
    color: red,
  font-weight: bold,}
} */

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
`,Ka=h.p`
font-weight: 500;
color: var(--modal-board-text)
`,Ja=h.button`
background-color: transparent;
color: var(--screens-page-tutorial-text-color);
font-size:12px;
text-decoration: underline;
border: none;
`,Xa=h.div`
display: flex; justify-content: space-between;
`,Qa=h.div`
width: 252px; 
height: 1px; 
background-color: var(--modal-filter-form-line);
margin-bottom: 14px;
`,eo=h.h2`
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
`,to=({isOpen:e,onClose:t,onShowAll:n})=>{const[r,a]=E.useState(null);if(!e)return null;const i=()=>{a(null),t(),n()},l=s=>{const d=s.target.value;a(d)};return o.jsx(Ua,{children:o.jsxs(Ha,{children:[o.jsx(za,{onClick:t,children:"✕"}),o.jsx(eo,{children:"Filters"}),o.jsx(Qa,{}),o.jsxs(Xa,{children:[o.jsx(Ka,{children:"Label color"}),o.jsx(Ja,{onClick:i,children:"Show all"})]}),o.jsxs(Za,{children:[o.jsx(at,{children:o.jsxs(ot,{children:[o.jsx(it,{type:"radio",name:"radio",value:"gray",className:"gray",checked:r==="gray",onChange:l}),o.jsx($e,{className:"gray"}),o.jsx(nt,{className:"gray",children:" Without priority "})]})}),o.jsx(at,{children:o.jsxs(ot,{children:[o.jsx(it,{type:"radio",name:"radio",value:"blue",className:"blue",checked:r==="blue",onChange:l}),o.jsx($e,{className:"blue"}),o.jsx(nt,{children:" Low "})]})}),o.jsx(at,{children:o.jsxs(ot,{children:[o.jsx(it,{type:"radio",name:"radio",value:"pink",className:"pink",checked:r==="pink",onChange:l}),o.jsx($e,{className:"pink"}),o.jsx(nt,{children:" Medium "})]})}),o.jsx(at,{children:o.jsxs(ot,{children:[o.jsx(it,{type:"radio",name:"radio",value:"green",className:"green",checked:r==="green",onChange:l}),o.jsx($e,{className:"green"}),o.jsx(nt,{children:" Hight "})]})})]})]})})},ro=h.button`
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
`,no=h.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 1.5px;
  stroke: var(--filter-text-and-icon-color);
`,ao=()=>{const[e,t]=E.useState(!1);function n(){}const r=()=>{t(a=>!a)};return o.jsxs(o.Fragment,{children:[o.jsxs(ro,{onClick:()=>r(),children:[o.jsx(no,{children:o.jsx("use",{href:U+"#icon-filter"})}),"Filters"]}),o.jsx(to,{isOpen:e,onClose:r,onShowAll:n})]})},oo=h.div`
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
`,io=h.h2`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--card-title-color);
`,lo=({boardName:e})=>o.jsxs(oo,{children:[o.jsx(io,{children:e}),o.jsx(ao,{})]});var co="Expected a function",mn="__lodash_hash_undefined__",so="[object Function]",uo="[object GeneratorFunction]",fo=/[\\^$.*+?()[\]{}|]/g,ho=/^\[object .+?Constructor\]$/,vo=typeof rt=="object"&&rt&&rt.Object===Object&&rt,po=typeof self=="object"&&self&&self.Object===Object&&self,gn=vo||po||Function("return this")();function mo(e,t){return e==null?void 0:e[t]}function go(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}var bo=Array.prototype,yo=Function.prototype,bn=Object.prototype,Rt=gn["__core-js_shared__"],Ir=function(){var e=/[^.]+$/.exec(Rt&&Rt.keys&&Rt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),yn=yo.toString,lr=bn.hasOwnProperty,xo=bn.toString,wo=RegExp("^"+yn.call(lr).replace(fo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Do=bo.splice,_o=xn(gn,"Map"),Ye=xn(Object,"create");function _e(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Oo(){this.__data__=Ye?Ye(null):{}}function ko(e){return this.has(e)&&delete this.__data__[e]}function jo(e){var t=this.__data__;if(Ye){var n=t[e];return n===mn?void 0:n}return lr.call(t,e)?t[e]:void 0}function Co(e){var t=this.__data__;return Ye?t[e]!==void 0:lr.call(t,e)}function So(e,t){var n=this.__data__;return n[e]=Ye&&t===void 0?mn:t,this}_e.prototype.clear=Oo;_e.prototype.delete=ko;_e.prototype.get=jo;_e.prototype.has=Co;_e.prototype.set=So;function Le(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function To(){this.__data__=[]}function Eo(e){var t=this.__data__,n=xt(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Do.call(t,n,1),!0}function No(e){var t=this.__data__,n=xt(t,e);return n<0?void 0:t[n][1]}function Mo(e){return xt(this.__data__,e)>-1}function Ao(e,t){var n=this.__data__,r=xt(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}Le.prototype.clear=To;Le.prototype.delete=Eo;Le.prototype.get=No;Le.prototype.has=Mo;Le.prototype.set=Ao;function Oe(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Po(){this.__data__={hash:new _e,map:new(_o||Le),string:new _e}}function Lo(e){return wt(this,e).delete(e)}function Io(e){return wt(this,e).get(e)}function Wo(e){return wt(this,e).has(e)}function Fo(e,t){return wt(this,e).set(e,t),this}Oe.prototype.clear=Po;Oe.prototype.delete=Lo;Oe.prototype.get=Io;Oe.prototype.has=Wo;Oe.prototype.set=Fo;function xt(e,t){for(var n=e.length;n--;)if(zo(e[n][0],t))return n;return-1}function Ro(e){if(!wn(e)||Vo(e))return!1;var t=Bo(e)||go(e)?wo:ho;return t.test(Yo(e))}function wt(e,t){var n=e.__data__;return $o(t)?n[typeof t=="string"?"string":"hash"]:n.map}function xn(e,t){var n=mo(e,t);return Ro(n)?n:void 0}function $o(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Vo(e){return!!Ir&&Ir in e}function Yo(e){if(e!=null){try{return yn.call(e)}catch{}try{return e+""}catch{}}return""}function cr(e,t){if(typeof e!="function"||t&&typeof t!="function")throw new TypeError(co);var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var l=e.apply(this,r);return n.cache=i.set(a,l),l};return n.cache=new(cr.Cache||Oe),n}cr.Cache=Oe;function zo(e,t){return e===t||e!==e&&t!==t}function Bo(e){var t=wn(e)?xo.call(e):"";return t==so||t==uo}function wn(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}var qo=cr;const Dn=an(qo);function _n(e){return JSON.stringify(e)}function Go(e){return typeof e=="string"}function Ho(e,t,n){return n.indexOf(e)===t}function Uo(e){return e.toLowerCase()===e}function Wr(e){return e.indexOf(",")===-1?e:e.split(",")}function Ht(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var t=e.split(".")[0],n=t===void 0?"":t;return Ht(n)}if(e.indexOf("@")!==-1){var r=e.split("@")[0],n=r===void 0?"":r;return Ht(n)}if(e.indexOf("-")===-1||!Uo(e))return e;var a=e.split("-"),i=a[0],l=a[1],s=l===void 0?"":l;return"".concat(i,"-").concat(s.toUpperCase())}function Zo(e){var t=e===void 0?{}:e,n=t.useFallbackLocale,r=n===void 0?!0:n,a=t.fallbackLocale,i=a===void 0?"en-US":a,l=[];if(typeof navigator<"u"){for(var s=navigator.languages||[],d=[],u=0,p=s;u<p.length;u++){var g=p[u];d=d.concat(Wr(g))}var w=navigator.language,v=w&&Wr(w);l=l.concat(d,v)}return r&&l.push(i),l.filter(Go).map(Ht).filter(Ho)}var Ko=Dn(Zo,_n);function Jo(e){return Ko(e)[0]||null}var On=Dn(Jo,_n);function fe(e,t,n){return function(a,i){i===void 0&&(i=n);var l=e(a)+i;return t(l)}}function Ue(e){return function(n){return new Date(e(n).getTime()-1)}}function Ze(e,t){return function(r){return[e(r),t(r)]}}function M(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;var t=parseInt(e,10);if(typeof e=="string"&&!isNaN(t))return t;throw new Error("Failed to get year from date: ".concat(e,"."))}function be(e){if(e instanceof Date)return e.getMonth();throw new Error("Failed to get month from date: ".concat(e,"."))}function Dt(e){if(e instanceof Date)return e.getDate();throw new Error("Failed to get year from date: ".concat(e,"."))}function Ie(e){var t=M(e),n=t+(-t+1)%100,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}var Xo=fe(M,Ie,-100),kn=fe(M,Ie,100),sr=Ue(kn),Qo=fe(M,sr,-100),jn=Ze(Ie,sr);function ye(e){var t=M(e),n=t+(-t+1)%10,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}var Cn=fe(M,ye,-10),dr=fe(M,ye,10),_t=Ue(dr),Sn=fe(M,_t,-10),Tn=Ze(ye,_t);function We(e){var t=M(e),n=new Date;return n.setFullYear(t,0,1),n.setHours(0,0,0,0),n}var En=fe(M,We,-1),ur=fe(M,We,1),Ot=Ue(ur),Nn=fe(M,Ot,-1),ei=Ze(We,Ot);function fr(e,t){return function(r,a){a===void 0&&(a=t);var i=M(r),l=be(r)+a,s=new Date;return s.setFullYear(i,l,1),s.setHours(0,0,0,0),e(s)}}function ke(e){var t=M(e),n=be(e),r=new Date;return r.setFullYear(t,n,1),r.setHours(0,0,0,0),r}var Mn=fr(ke,-1),hr=fr(ke,1),Ke=Ue(hr),An=fr(Ke,-1),ti=Ze(ke,Ke);function ri(e,t){return function(r,a){a===void 0&&(a=t);var i=M(r),l=be(r),s=Dt(r)+a,d=new Date;return d.setFullYear(i,l,s),d.setHours(0,0,0,0),e(d)}}function Je(e){var t=M(e),n=be(e),r=Dt(e),a=new Date;return a.setFullYear(t,n,r),a.setHours(0,0,0,0),a}var ni=ri(Je,1),vr=Ue(ni),ai=Ze(Je,vr);function Pn(e){return Dt(Ke(e))}var Re,N={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},Te={ARABIC:"Arabic",HEBREW:"Hebrew",ISO_8601:"ISO 8601",US:"US"},oi=(Re={},Re[N.GREGORY]=["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],Re[N.HEBREW]=["he","he-IL"],Re[N.ISLAMIC]=["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"],Re),pr=[0,1,2,3,4,5,6],$t=new Map;function ii(e){return function(n,r){var a=n||On();$t.has(a)||$t.set(a,new Map);var i=$t.get(a);return i.has(e)||i.set(e,new Intl.DateTimeFormat(a||void 0,e).format),i.get(e)(r)}}function li(e){var t=new Date(e);return new Date(t.setHours(12))}function je(e){return function(t,n){return ii(e)(t,li(n))}}var ci={day:"numeric"},si={day:"numeric",month:"long",year:"numeric"},di={month:"long"},ui={month:"long",year:"numeric"},fi={weekday:"short"},hi={weekday:"long"},vi={year:"numeric"},pi=je(ci),mi=je(si),gi=je(di),Ln=je(ui),bi=je(fi),yi=je(hi),kt=je(vi),xi=pr[0],wi=pr[5],Fr=pr[6];function ze(e,t){t===void 0&&(t=N.ISO_8601);var n=e.getDay();switch(t){case N.ISO_8601:return(n+6)%7;case N.ISLAMIC:return(n+1)%7;case N.HEBREW:case N.GREGORY:return n;default:throw new Error("Unsupported calendar type.")}}function Di(e){var t=Ie(e);return M(t)}function _i(e){var t=ye(e);return M(t)}function Ut(e,t){t===void 0&&(t=N.ISO_8601);var n=M(e),r=be(e),a=e.getDate()-ze(e,t);return new Date(n,r,a)}function Oi(e,t){t===void 0&&(t=N.ISO_8601);var n=t===N.GREGORY?N.GREGORY:N.ISO_8601,r=Ut(e,t),a=M(e)+1,i,l;do i=new Date(a,0,n===N.ISO_8601?4:1),l=Ut(i,t),a-=1;while(e<l);return Math.round((r.getTime()-l.getTime())/(864e5*7))+1}function De(e,t){switch(e){case"century":return Ie(t);case"decade":return ye(t);case"year":return We(t);case"month":return ke(t);case"day":return Je(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function ki(e,t){switch(e){case"century":return Xo(t);case"decade":return Cn(t);case"year":return En(t);case"month":return Mn(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function In(e,t){switch(e){case"century":return kn(t);case"decade":return dr(t);case"year":return ur(t);case"month":return hr(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function ji(e,t){switch(e){case"decade":return Cn(t,-100);case"year":return En(t,-10);case"month":return Mn(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ci(e,t){switch(e){case"decade":return dr(t,100);case"year":return ur(t,10);case"month":return hr(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Wn(e,t){switch(e){case"century":return sr(t);case"decade":return _t(t);case"year":return Ot(t);case"month":return Ke(t);case"day":return vr(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Si(e,t){switch(e){case"century":return Qo(t);case"decade":return Sn(t);case"year":return Nn(t);case"month":return An(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ti(e,t){switch(e){case"decade":return Sn(t,-100);case"year":return Nn(t,-10);case"month":return An(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Rr(e,t){switch(e){case"century":return jn(t);case"decade":return Tn(t);case"year":return ei(t);case"month":return ti(t);case"day":return ai(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ei(e,t,n){var r=[t,n].sort(function(a,i){return a.getTime()-i.getTime()});return[De(e,r[0]),Wn(e,r[1])]}function Fn(e,t,n){return t===void 0&&(t=kt),n.map(function(r){return t(e,r)}).join(" – ")}function Ni(e,t,n){return Fn(e,t,jn(n))}function Rn(e,t,n){return Fn(e,t,Tn(n))}function Mi(e){return e.getDay()===new Date().getDay()}function $n(e,t){t===void 0&&(t=N.ISO_8601);var n=e.getDay();switch(t){case N.ISLAMIC:case N.HEBREW:return n===wi||n===Fr;case N.ISO_8601:case N.GREGORY:return n===Fr||n===xi;default:throw new Error("Unsupported calendar type.")}}var se="react-calendar__navigation";function Ai(e){var t=e.activeStartDate,n=e.drillUp,r=e.formatMonthYear,a=r===void 0?Ln:r,i=e.formatYear,l=i===void 0?kt:i,s=e.locale,d=e.maxDate,u=e.minDate,p=e.navigationAriaLabel,g=p===void 0?"":p,w=e.navigationAriaLive,v=e.navigationLabel,m=e.next2AriaLabel,D=m===void 0?"":m,k=e.next2Label,S=k===void 0?"»":k,I=e.nextAriaLabel,V=I===void 0?"":I,Z=e.nextLabel,he=Z===void 0?"›":Z,q=e.prev2AriaLabel,x=q===void 0?"":q,y=e.prev2Label,_=y===void 0?"«":y,f=e.prevAriaLabel,j=f===void 0?"":f,O=e.prevLabel,Y=O===void 0?"‹":O,A=e.setActiveStartDate,K=e.showDoubleView,z=e.view,le=e.views,te=le.indexOf(z)>0,J=z!=="century",W=ki(z,t),X=J?ji(z,t):void 0,T=In(z,t),re=J?Ci(z,t):void 0,$=function(){if(W.getFullYear()<0)return!0;var F=Si(z,t);return u&&u>=F}(),de=J&&function(){if(X.getFullYear()<0)return!0;var F=Ti(z,t);return u&&u>=F}(),B=d&&d<T,Q=J&&d&&d<re;function ae(){A(W,"prev")}function ee(){A(X,"prev2")}function Ce(){A(T,"next")}function xe(){A(re,"next2")}function ve(F){var Fe=function(){switch(z){case"century":return Ni(s,l,F);case"decade":return Rn(s,l,F);case"year":return l(s,F);case"month":return a(s,F);default:throw new Error("Invalid view: ".concat(z,"."))}}();return v?v({date:F,label:Fe,locale:s||On()||void 0,view:z}):Fe}function we(){var F="".concat(se,"__label");return b.createElement("button",{"aria-label":g,"aria-live":w,className:F,disabled:!te,onClick:n,style:{flexGrow:1},type:"button"},b.createElement("span",{className:"".concat(F,"__labelText ").concat(F,"__labelText--from")},ve(t)),K?b.createElement(b.Fragment,null,b.createElement("span",{className:"".concat(F,"__divider")}," – "),b.createElement("span",{className:"".concat(F,"__labelText ").concat(F,"__labelText--to")},ve(T))):null)}return b.createElement("div",{className:se},_!==null&&J?b.createElement("button",{"aria-label":x,className:"".concat(se,"__arrow ").concat(se,"__prev2-button"),disabled:de,onClick:ee,type:"button"},_):null,Y!==null&&b.createElement("button",{"aria-label":j,className:"".concat(se,"__arrow ").concat(se,"__prev-button"),disabled:$,onClick:ae,type:"button"},Y),we(),he!==null&&b.createElement("button",{"aria-label":V,className:"".concat(se,"__arrow ").concat(se,"__next-button"),disabled:B,onClick:Ce,type:"button"},he),S!==null&&J?b.createElement("button",{"aria-label":D,className:"".concat(se,"__arrow ").concat(se,"__next2-button"),disabled:Q,onClick:xe,type:"button"},S):null)}var Ee=function(){return Ee=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ee.apply(this,arguments)},Pi=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function $r(e){return"".concat(e,"%")}function mr(e){var t=e.children,n=e.className,r=e.count,a=e.direction,i=e.offset,l=e.style,s=e.wrap,d=Pi(e,["children","className","count","direction","offset","style","wrap"]);return b.createElement("div",Ee({className:n,style:Ee({display:"flex",flexDirection:a,flexWrap:s?"wrap":"nowrap"},l)},d),b.Children.map(t,function(u,p){var g=i&&p===0?$r(100*i/r):null;return b.cloneElement(u,Ee(Ee({},u.props),{style:{flexBasis:$r(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:g,marginInlineStart:g,marginInlineEnd:0}}))}))}var Se;function Li(e,t,n){return t&&t>e?t:n&&n<e?n:e}function Be(e,t){return t[0]<=e&&t[1]>=e}function Ii(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function Vn(e,t){return Be(e[0],t)||Be(e[1],t)}function Vr(e,t,n){var r=Vn(t,e),a=[];if(r){a.push(n);var i=Be(e[0],t),l=Be(e[1],t);i&&a.push("".concat(n,"Start")),l&&a.push("".concat(n,"End")),i&&l&&a.push("".concat(n,"BothEnds"))}return a}function Wi(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function Fi(e){if(!e)throw new Error("args is required");var t=e.value,n=e.date,r=e.hover,a="react-calendar__tile",i=[a];if(!n)return i;var l=new Date,s=function(){if(Array.isArray(n))return n;var v=e.dateType;if(!v)throw new Error("dateType is required when date is not an array of two dates");return Rr(v,n)}();if(Be(l,s)&&i.push("".concat(a,"--now")),!t||!Wi(t))return i;var d=function(){if(Array.isArray(t))return t;var v=e.valueType;if(!v)throw new Error("valueType is required when value is not an array of two dates");return Rr(v,t)}();Ii(d,s)?i.push("".concat(a,"--active")):Vn(d,s)&&i.push("".concat(a,"--hasActive"));var u=Vr(d,s,"".concat(a,"--range"));i.push.apply(i,u);var p=Array.isArray(t)?t:[t];if(r&&p.length===1){var g=r>d[0]?[d[0],r]:[r,d[0]],w=Vr(g,s,"".concat(a,"--hover"));i.push.apply(i,w)}return i}var Ri=(Se={},Se[Te.ARABIC]=N.ISLAMIC,Se[Te.HEBREW]=N.HEBREW,Se[Te.ISO_8601]=N.ISO_8601,Se[Te.US]=N.GREGORY,Se);function $i(e){return e!==void 0&&e in Te}var Yr=!1;function jt(e){if($i(e)){var t=Ri[e];return Ba(Yr,'Specifying calendarType="'.concat(e,'" is deprecated. Use calendarType="').concat(t,'" instead.')),Yr=!0,t}return e}function Ct(e){for(var t=e.className,n=e.count,r=n===void 0?3:n,a=e.dateTransform,i=e.dateType,l=e.end,s=e.hover,d=e.offset,u=e.renderTile,p=e.start,g=e.step,w=g===void 0?1:g,v=e.value,m=e.valueType,D=[],k=p;k<=l;k+=w){var S=a(k);D.push(u({classes:Fi({date:S,dateType:i,hover:s,value:v,valueType:m}),date:S}))}return b.createElement(mr,{className:t,count:r,offset:d,wrap:!0},D)}function St(e){var t=e.activeStartDate,n=e.children,r=e.classes,a=e.date,i=e.formatAbbr,l=e.locale,s=e.maxDate,d=e.maxDateTransform,u=e.minDate,p=e.minDateTransform,g=e.onClick,w=e.onMouseOver,v=e.style,m=e.tileClassName,D=e.tileContent,k=e.tileDisabled,S=e.view,I=E.useMemo(function(){var Z={activeStartDate:t,date:a,view:S};return typeof m=="function"?m(Z):m},[t,a,m,S]),V=E.useMemo(function(){var Z={activeStartDate:t,date:a,view:S};return typeof D=="function"?D(Z):D},[t,a,D,S]);return b.createElement("button",{className:pt(r,I),disabled:u&&p(u)>a||s&&d(s)<a||k&&k({activeStartDate:t,date:a,view:S}),onClick:g?function(Z){return g(a,Z)}:void 0,onFocus:w?function(){return w(a)}:void 0,onMouseOver:w?function(){return w(a)}:void 0,style:v,type:"button"},i?b.createElement("abbr",{"aria-label":i(l,a)},n):n,V)}var Zt=function(){return Zt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Zt.apply(this,arguments)},Vi=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},Vt="react-calendar__century-view__decades__decade";function Yi(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentCentury,a=e.formatYear,i=a===void 0?kt:a,l=Vi(e,["classes","currentCentury","formatYear"]),s=l.date,d=l.locale,u=[];return n&&u.push.apply(u,n),Vt&&u.push(Vt),Ie(s).getFullYear()!==r&&u.push("".concat(Vt,"--neighboringCentury")),b.createElement(St,Zt({},l,{classes:u,maxDateTransform:_t,minDateTransform:ye,view:"century"}),Rn(d,i,s))}var Kt=function(){return Kt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Kt.apply(this,arguments)},zr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function zi(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringCentury,a=e.value,i=e.valueType,l=zr(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),s=Di(t),d=s+(r?119:99);return b.createElement(Ct,{className:"react-calendar__century-view__decades",dateTransform:ye,dateType:"decade",end:d,hover:n,renderTile:function(u){var p=u.date,g=zr(u,["date"]);return b.createElement(Yi,Kt({key:p.getTime()},l,g,{activeStartDate:t,currentCentury:s,date:p}))},start:s,step:10,value:a,valueType:i})}var Br=function(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))},Bi=Object.values(N),qi=Object.values(Te),Jt=["century","decade","year","month"],Yn=c.oneOf(Br(Br([],Bi,!0),qi,!0)),dt=c.oneOfType([c.string,c.arrayOf(c.string)]),gr=function(t,n,r){var a=t,i=n,l=a[i];if(!l)return null;if(!(l instanceof Date))return new Error("Invalid prop `".concat(n,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, expected instance of `Date`."));var s=t.maxDate;return s&&l>s?new Error("Invalid prop `".concat(n,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, minDate cannot be larger than maxDate.")):null},br=function(t,n,r){var a=t,i=n,l=a[i];if(!l)return null;if(!(l instanceof Date))return new Error("Invalid prop `".concat(n,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, expected instance of `Date`."));var s=t.minDate;return s&&l<s?new Error("Invalid prop `".concat(n,"` of type `").concat(typeof l,"` supplied to `").concat(r,"`, maxDate cannot be smaller than minDate.")):null},Gi=c.oneOfType([c.func,c.exact({current:c.any})]),Hi=c.arrayOf(c.oneOfType([c.instanceOf(Date),c.oneOf([null])]).isRequired),Ui=c.oneOfType([c.instanceOf(Date),c.oneOf([null]),Hi]);c.arrayOf(c.oneOf(Jt));var ut=function(t,n,r){var a=t,i=n,l=a[i];return l!==void 0&&(typeof l!="string"||Jt.indexOf(l)===-1)?new Error("Invalid prop `".concat(n,"` of value `").concat(l,"` supplied to `").concat(r,"`, expected one of [").concat(Jt.map(function(s){return'"'.concat(s,'"')}).join(", "),"].")):null};ut.isRequired=function(t,n,r,a,i){var l=t,s=n,d=l[s];return d?ut(t,n,r):new Error("The prop `".concat(n,"` is marked as required in `").concat(r,"`, but its value is `").concat(d,"`."))};var Zi=function(e){return c.arrayOf(e)},Tt={activeStartDate:c.instanceOf(Date).isRequired,hover:c.instanceOf(Date),locale:c.string,maxDate:br,minDate:gr,onClick:c.func,onMouseOver:c.func,tileClassName:c.oneOfType([c.func,dt]),tileContent:c.oneOfType([c.func,c.node]),value:Ui,valueType:c.oneOf(["century","decade","year","month","day"]).isRequired};c.instanceOf(Date).isRequired,c.arrayOf(c.string.isRequired).isRequired,c.instanceOf(Date).isRequired,c.string,c.func,c.func,c.objectOf(c.oneOfType([c.string,c.number])),c.oneOfType([c.func,dt]),c.oneOfType([c.func,c.node]),c.func;var qe=function(){return qe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},qe.apply(this,arguments)},zn=function(t){function n(){return b.createElement(zi,qe({},t))}return b.createElement("div",{className:"react-calendar__century-view"},n())};zn.propTypes=qe(qe({},Tt),{showNeighboringCentury:c.bool});const Ki=zn;var Xt=function(){return Xt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Xt.apply(this,arguments)},Ji=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},Yt="react-calendar__decade-view__years__year";function Xi(e){var t=e.classes,n=t===void 0?[]:t,r=e.currentDecade,a=e.formatYear,i=a===void 0?kt:a,l=Ji(e,["classes","currentDecade","formatYear"]),s=l.date,d=l.locale,u=[];return n&&u.push.apply(u,n),Yt&&u.push(Yt),ye(s).getFullYear()!==r&&u.push("".concat(Yt,"--neighboringDecade")),b.createElement(St,Xt({},l,{classes:u,maxDateTransform:Ot,minDateTransform:We,view:"decade"}),i(d,s))}var Qt=function(){return Qt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Qt.apply(this,arguments)},qr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function Qi(e){var t=e.activeStartDate,n=e.hover,r=e.showNeighboringDecade,a=e.value,i=e.valueType,l=qr(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),s=_i(t),d=s+(r?11:9);return b.createElement(Ct,{className:"react-calendar__decade-view__years",dateTransform:We,dateType:"year",end:d,hover:n,renderTile:function(u){var p=u.date,g=qr(u,["date"]);return b.createElement(Xi,Qt({key:p.getTime()},l,g,{activeStartDate:t,currentDecade:s,date:p}))},start:s,value:a,valueType:i})}var Ge=function(){return Ge=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ge.apply(this,arguments)},Bn=function(t){function n(){return b.createElement(Qi,Ge({},t))}return b.createElement("div",{className:"react-calendar__decade-view"},n())};Bn.propTypes=Ge(Ge({},Tt),{showNeighboringDecade:c.bool});const el=Bn;var er=function(){return er=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},er.apply(this,arguments)},tl=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},Gr=function(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))},rl="react-calendar__year-view__months__month";function nl(e){var t=e.classes,n=t===void 0?[]:t,r=e.formatMonth,a=r===void 0?gi:r,i=e.formatMonthYear,l=i===void 0?Ln:i,s=tl(e,["classes","formatMonth","formatMonthYear"]),d=s.date,u=s.locale;return b.createElement(St,er({},s,{classes:Gr(Gr([],n,!0),[rl],!1),formatAbbr:l,maxDateTransform:Ke,minDateTransform:ke,view:"year"}),a(u,d))}var tr=function(){return tr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},tr.apply(this,arguments)},Hr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function al(e){var t=e.activeStartDate,n=e.hover,r=e.value,a=e.valueType,i=Hr(e,["activeStartDate","hover","value","valueType"]),l=0,s=11,d=M(t);return b.createElement(Ct,{className:"react-calendar__year-view__months",dateTransform:function(u){var p=new Date;return p.setFullYear(d,u,1),ke(p)},dateType:"month",end:s,hover:n,renderTile:function(u){var p=u.date,g=Hr(u,["date"]);return b.createElement(nl,tr({key:p.getTime()},i,g,{activeStartDate:t,date:p}))},start:l,value:r,valueType:a})}var ft=function(){return ft=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ft.apply(this,arguments)},qn=function(t){function n(){return b.createElement(al,ft({},t))}return b.createElement("div",{className:"react-calendar__year-view"},n())};qn.propTypes=ft({},Tt);const ol=qn;var rr=function(){return rr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},rr.apply(this,arguments)},il=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},lt="react-calendar__month-view__days__day";function ll(e){var t=e.calendarType,n=e.classes,r=n===void 0?[]:n,a=e.currentMonthIndex,i=e.formatDay,l=i===void 0?pi:i,s=e.formatLongDate,d=s===void 0?mi:s,u=il(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),p=jt(t),g=u.date,w=u.locale,v=[];return r&&v.push.apply(v,r),lt&&v.push(lt),$n(g,p)&&v.push("".concat(lt,"--weekend")),g.getMonth()!==a&&v.push("".concat(lt,"--neighboringMonth")),b.createElement(St,rr({},u,{classes:v,formatAbbr:d,maxDateTransform:vr,minDateTransform:Je,view:"month"}),l(w,g))}var nr=function(){return nr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},nr.apply(this,arguments)},Ur=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function cl(e){var t=e.activeStartDate,n=e.calendarType,r=e.hover,a=e.showFixedNumberOfWeeks,i=e.showNeighboringMonth,l=e.value,s=e.valueType,d=Ur(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),u=jt(n),p=M(t),g=be(t),w=a||i,v=ze(t,u),m=w?0:v,D=(w?-v:0)+1,k=function(){if(a)return D+6*7-1;var S=Pn(t);if(i){var I=new Date;I.setFullYear(p,g,S),I.setHours(0,0,0,0);var V=7-ze(I,u)-1;return S+V}return S}();return b.createElement(Ct,{className:"react-calendar__month-view__days",count:7,dateTransform:function(S){var I=new Date;return I.setFullYear(p,g,S),Je(I)},dateType:"day",hover:r,end:k,renderTile:function(S){var I=S.date,V=Ur(S,["date"]);return b.createElement(ll,nr({key:I.getTime()},d,V,{activeStartDate:t,calendarType:n,currentMonthIndex:g,date:I}))},offset:m,start:D,value:l,valueType:s})}var Gn="react-calendar__month-view__weekdays",zt="".concat(Gn,"__weekday");function sl(e){for(var t=e.calendarType,n=e.formatShortWeekday,r=n===void 0?bi:n,a=e.formatWeekday,i=a===void 0?yi:a,l=e.locale,s=e.onMouseLeave,d=jt(t),u=new Date,p=ke(u),g=M(p),w=be(p),v=[],m=1;m<=7;m+=1){var D=new Date(g,w,m-ze(p,d)),k=i(l,D);v.push(b.createElement("div",{key:m,className:pt(zt,Mi(D)&&"".concat(zt,"--current"),$n(D,d)&&"".concat(zt,"--weekend"))},b.createElement("abbr",{"aria-label":k,title:k},r(l,D).replace(".",""))))}return b.createElement(mr,{className:Gn,count:7,onFocus:s,onMouseOver:s},v)}var ht=function(){return ht=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ht.apply(this,arguments)},Zr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},Kr="react-calendar__tile";function dl(e){var t=e.onClickWeekNumber,n=e.weekNumber,r=b.createElement("span",null,n);if(t){var a=e.date,i=e.onClickWeekNumber,l=e.weekNumber,s=Zr(e,["date","onClickWeekNumber","weekNumber"]);return b.createElement("button",ht({},s,{className:Kr,onClick:function(d){return i(l,a,d)},type:"button"}),r)}else{e.date,e.onClickWeekNumber,e.weekNumber;var s=Zr(e,["date","onClickWeekNumber","weekNumber"]);return b.createElement("div",ht({},s,{className:Kr}),r)}}function ul(e){var t=e.activeStartDate,n=e.calendarType,r=e.onClickWeekNumber,a=e.onMouseLeave,i=e.showFixedNumberOfWeeks,l=jt(n),s=function(){if(i)return 6;var p=Pn(t),g=ze(t,l),w=p-(7-g);return 1+Math.ceil(w/7)}(),d=function(){for(var p=M(t),g=be(t),w=Dt(t),v=[],m=0;m<s;m+=1)v.push(Ut(new Date(p,g,w+m*7),l));return v}(),u=d.map(function(p){return Oi(p,l)});return b.createElement(mr,{className:"react-calendar__month-view__weekNumbers",count:s,direction:"column",onFocus:a,onMouseOver:a,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0}},u.map(function(p,g){var w=d[g];if(!w)throw new Error("date is not defined");return b.createElement(dl,{key:p,date:w,onClickWeekNumber:r,weekNumber:p})}))}var He=function(){return He=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},He.apply(this,arguments)},fl=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function hl(e){if(e)for(var t=0,n=Object.entries(oi);t<n.length;t++){var r=n[t],a=r[0],i=r[1];if(i.includes(e))return a}return N.ISO_8601}var Hn=function(t){var n=t.activeStartDate,r=t.locale,a=t.onMouseLeave,i=t.showFixedNumberOfWeeks,l=t.calendarType,s=l===void 0?hl(r):l,d=t.formatShortWeekday,u=t.formatWeekday,p=t.onClickWeekNumber,g=t.showWeekNumbers,w=fl(t,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function v(){return b.createElement(sl,{calendarType:s,formatShortWeekday:d,formatWeekday:u,locale:r,onMouseLeave:a})}function m(){return g?b.createElement(ul,{activeStartDate:n,calendarType:s,onClickWeekNumber:p,onMouseLeave:a,showFixedNumberOfWeeks:i}):null}function D(){return b.createElement(cl,He({calendarType:s},w))}var k="react-calendar__month-view";return b.createElement("div",{className:pt(k,g?"".concat(k,"--weekNumbers"):"")},b.createElement("div",{style:{display:"flex",alignItems:"flex-end"}},m(),b.createElement("div",{style:{flexGrow:1,width:"100%"}},v(),D())))};Hn.propTypes=He(He({},Tt),{calendarType:Yn,formatDay:c.func,formatLongDate:c.func,formatShortWeekday:c.func,formatWeekday:c.func,onClickWeekNumber:c.func,onMouseLeave:c.func,showFixedNumberOfWeeks:c.bool,showNeighboringMonth:c.bool,showWeekNumbers:c.bool});const vl=Hn;var Ne=function(){return Ne=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ne.apply(this,arguments)},ct="react-calendar",Ae=["century","decade","year","month"],pl=["decade","year","month","day"],yr=new Date;yr.setFullYear(1,0,1);yr.setHours(0,0,0,0);var ml=new Date(864e13);function Ve(e){return e instanceof Date?e:new Date(e)}function Un(e,t){return Ae.slice(Ae.indexOf(e),Ae.indexOf(t)+1)}function gl(e,t,n){var r=Un(t,n);return r.indexOf(e)!==-1}function xr(e,t,n){return e&&gl(e,t,n)?e:n}function Zn(e){var t=Ae.indexOf(e);return pl[t]}function bl(e,t){var n=Array.isArray(e)?e[t]:e;if(!n)return null;var r=Ve(n);if(isNaN(r.getTime()))throw new Error("Invalid date: ".concat(e));return r}function Kn(e,t){var n=e.value,r=e.minDate,a=e.maxDate,i=e.maxDetail,l=bl(n,t);if(!l)return null;var s=Zn(i),d=function(){switch(t){case 0:return De(s,l);case 1:return Wn(s,l);default:throw new Error("Invalid index value: ".concat(t))}}();return Li(d,r,a)}var wr=function(e){return Kn(e,0)},Jn=function(e){return Kn(e,1)},yl=function(e){return[wr,Jn].map(function(t){return t(e)})};function Xn(e){var t=e.maxDate,n=e.maxDetail,r=e.minDate,a=e.minDetail,i=e.value,l=e.view,s=xr(l,a,n),d=wr({value:i,minDate:r,maxDate:t,maxDetail:n})||new Date;return De(s,d)}function xl(e){var t=e.activeStartDate,n=e.defaultActiveStartDate,r=e.defaultValue,a=e.defaultView,i=e.maxDate,l=e.maxDetail,s=e.minDate,d=e.minDetail,u=e.value,p=e.view,g=xr(p,d,l),w=t||n;return w?De(g,w):Xn({maxDate:i,maxDetail:l,minDate:s,minDetail:d,value:u||r,view:p||a})}function Bt(e){return e&&(!Array.isArray(e)||e.length===1)}function st(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var Qn=E.forwardRef(function(t,n){var r=t.activeStartDate,a=t.allowPartialRange,i=t.calendarType,l=t.className,s=t.defaultActiveStartDate,d=t.defaultValue,u=t.defaultView,p=t.formatDay,g=t.formatLongDate,w=t.formatMonth,v=t.formatMonthYear,m=t.formatShortWeekday,D=t.formatWeekday,k=t.formatYear,S=t.goToRangeStartOnSelect,I=S===void 0?!0:S,V=t.inputRef,Z=t.locale,he=t.maxDate,q=he===void 0?ml:he,x=t.maxDetail,y=x===void 0?"month":x,_=t.minDate,f=_===void 0?yr:_,j=t.minDetail,O=j===void 0?"century":j,Y=t.navigationAriaLabel,A=t.navigationAriaLive,K=t.navigationLabel,z=t.next2AriaLabel,le=t.next2Label,te=t.nextAriaLabel,J=t.nextLabel,W=t.onActiveStartDateChange,X=t.onChange,T=t.onClickDay,re=t.onClickDecade,$=t.onClickMonth,de=t.onClickWeekNumber,B=t.onClickYear,Q=t.onDrillDown,ae=t.onDrillUp,ee=t.onViewChange,Ce=t.prev2AriaLabel,xe=t.prev2Label,ve=t.prevAriaLabel,we=t.prevLabel,F=t.returnValue,Fe=F===void 0?"start":F,ne=t.selectRange,Xe=t.showDoubleView,Dr=t.showFixedNumberOfWeeks,_r=t.showNavigation,pa=_r===void 0?!0:_r,ma=t.showNeighboringCentury,ga=t.showNeighboringDecade,Or=t.showNeighboringMonth,ba=Or===void 0?!0:Or,ya=t.showWeekNumbers,xa=t.tileClassName,wa=t.tileContent,Da=t.tileDisabled,Et=t.value,kr=t.view,jr=E.useState(s),_a=jr[0],Qe=jr[1],Cr=E.useState(null),Oa=Cr[0],Sr=Cr[1],Tr=E.useState(Array.isArray(d)?d.map(function(C){return C!==null?Ve(C):null}):d!=null?Ve(d):null),Nt=Tr[0],ka=Tr[1],Er=E.useState(u),ja=Er[0],Nr=Er[1],G=r||_a||xl({activeStartDate:r,defaultActiveStartDate:s,defaultValue:d,defaultView:u,maxDate:q,maxDetail:y,minDate:f,minDetail:O,value:Et,view:kr}),H=function(){var C=function(){return ne&&Bt(Nt)?Nt:Et!==void 0?Et:Nt}();return C?Array.isArray(C)?C.map(function(L){return L!==null?Ve(L):null}):C!==null?Ve(C):null:null}(),et=Zn(y),P=xr(kr||ja,O,y),ce=Un(O,y),Ca=ne?Oa:null,Mt=ce.indexOf(P)<ce.length-1,Mr=ce.indexOf(P)>0,Ar=E.useCallback(function(C){var L=function(){switch(Fe){case"start":return wr;case"end":return Jn;case"range":return yl;default:throw new Error("Invalid returnValue.")}}();return L({maxDate:q,maxDetail:y,minDate:f,value:C})},[q,y,f,Fe]),At=E.useCallback(function(C,L){Qe(C);var R={action:L,activeStartDate:C,value:H,view:P};W&&!st(G,C)&&W(R)},[G,W,H,P]),tt=E.useCallback(function(C,L){var R=function(){switch(P){case"century":return re;case"decade":return B;case"year":return $;case"month":return T;default:throw new Error("Invalid view: ".concat(P,"."))}}();R&&R(C,L)},[T,re,$,B,P]),Pt=E.useCallback(function(C,L){if(Mt){tt(C,L);var R=ce[ce.indexOf(P)+1];if(!R)throw new Error("Attempted to drill down from the lowest view.");Qe(C),Nr(R);var oe={action:"drillDown",activeStartDate:C,value:H,view:R};W&&!st(G,C)&&W(oe),ee&&P!==R&&ee(oe),Q&&Q(oe)}},[G,Mt,W,tt,Q,ee,H,P,ce]),Lt=E.useCallback(function(){if(Mr){var C=ce[ce.indexOf(P)-1];if(!C)throw new Error("Attempted to drill up from the highest view.");var L=De(C,G);Qe(L),Nr(C);var R={action:"drillUp",activeStartDate:L,value:H,view:C};W&&!st(G,L)&&W(R),ee&&P!==C&&ee(R),ae&&ae(R)}},[G,Mr,W,ae,ee,H,P,ce]),It=E.useCallback(function(C,L){var R=H;tt(C,L);var oe=ne&&!Bt(R),ie;if(ne)if(oe)ie=De(et,C);else{if(!R)throw new Error("previousValue is required");if(Array.isArray(R))throw new Error("previousValue must not be an array");ie=Ei(et,R,C)}else ie=Ar(C);var Ft=!ne||oe||I?Xn({maxDate:q,maxDetail:y,minDate:f,minDetail:O,value:ie,view:P}):null;L.persist(),Qe(Ft),ka(ie);var Na={action:"onChange",activeStartDate:Ft,value:ie,view:P};if(W&&!st(G,Ft)&&W(Na),X)if(ne){var Ma=Bt(ie);if(!Ma)X(ie||null,L);else if(a){if(Array.isArray(ie))throw new Error("value must not be an array");X([ie||null,null],L)}}else X(ie||null,L)},[G,a,Ar,I,q,y,f,O,W,X,tt,ne,H,et,P]);function Sa(C){Sr(C)}function Wt(){Sr(null)}E.useImperativeHandle(n,function(){return{activeStartDate:G,drillDown:Pt,drillUp:Lt,onChange:It,setActiveStartDate:At,value:H,view:P}},[G,Pt,Lt,It,At,H,P]);function Pr(C){var L=C?In(P,G):De(P,G),R=Mt?Pt:It,oe={activeStartDate:L,hover:Ca,locale:Z,maxDate:q,minDate:f,onClick:R,onMouseOver:ne?Sa:void 0,tileClassName:xa,tileContent:wa,tileDisabled:Da,value:H,valueType:et};switch(P){case"century":return b.createElement(Ki,Ne({formatYear:k,showNeighboringCentury:ma},oe));case"decade":return b.createElement(el,Ne({formatYear:k,showNeighboringDecade:ga},oe));case"year":return b.createElement(ol,Ne({formatMonth:w,formatMonthYear:v},oe));case"month":return b.createElement(vl,Ne({calendarType:i,formatDay:p,formatLongDate:g,formatShortWeekday:m,formatWeekday:D,onClickWeekNumber:de,onMouseLeave:ne?Wt:void 0,showFixedNumberOfWeeks:typeof Dr<"u"?Dr:Xe,showNeighboringMonth:ba,showWeekNumbers:ya},oe));default:throw new Error("Invalid view: ".concat(P,"."))}}function Ta(){return pa?b.createElement(Ai,{activeStartDate:G,drillUp:Lt,formatMonthYear:v,formatYear:k,locale:Z,maxDate:q,minDate:f,navigationAriaLabel:Y,navigationAriaLive:A,navigationLabel:K,next2AriaLabel:z,next2Label:le,nextAriaLabel:te,nextLabel:J,prev2AriaLabel:Ce,prev2Label:xe,prevAriaLabel:ve,prevLabel:we,setActiveStartDate:At,showDoubleView:Xe,view:P,views:ce}):null}var Ea=Array.isArray(H)?H:[H];return b.createElement("div",{className:pt(ct,ne&&Ea.length===1&&"".concat(ct,"--selectRange"),Xe&&"".concat(ct,"--doubleView"),l),ref:V},Ta(),b.createElement("div",{className:"".concat(ct,"__viewContainer"),onBlur:ne?Wt:void 0,onMouseLeave:ne?Wt:void 0},Pr(),Xe?Pr(!0):null))}),Jr=c.instanceOf(Date),Xr=c.oneOfType([c.string,c.instanceOf(Date)]),Qr=c.oneOfType([Xr,Zi(Xr)]);Qn.propTypes={activeStartDate:Jr,allowPartialRange:c.bool,calendarType:Yn,className:dt,defaultActiveStartDate:Jr,defaultValue:Qr,defaultView:ut,formatDay:c.func,formatLongDate:c.func,formatMonth:c.func,formatMonthYear:c.func,formatShortWeekday:c.func,formatWeekday:c.func,formatYear:c.func,goToRangeStartOnSelect:c.bool,inputRef:Gi,locale:c.string,maxDate:br,maxDetail:c.oneOf(Ae),minDate:gr,minDetail:c.oneOf(Ae),navigationAriaLabel:c.string,navigationAriaLive:c.oneOf(["off","polite","assertive"]),navigationLabel:c.func,next2AriaLabel:c.string,next2Label:c.node,nextAriaLabel:c.string,nextLabel:c.node,onActiveStartDateChange:c.func,onChange:c.func,onClickDay:c.func,onClickDecade:c.func,onClickMonth:c.func,onClickWeekNumber:c.func,onClickYear:c.func,onDrillDown:c.func,onDrillUp:c.func,onViewChange:c.func,prev2AriaLabel:c.string,prev2Label:c.node,prevAriaLabel:c.string,prevLabel:c.node,returnValue:c.oneOf(["start","end","range"]),selectRange:c.bool,showDoubleView:c.bool,showFixedNumberOfWeeks:c.bool,showNavigation:c.bool,showNeighboringCentury:c.bool,showNeighboringDecade:c.bool,showNeighboringMonth:c.bool,showWeekNumbers:c.bool,tileClassName:c.oneOfType([c.func,dt]),tileContent:c.oneOfType([c.func,c.node]),tileDisabled:c.func,value:Qr,view:ut};const wl=Qn,ea=h(wl)`
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
`,ta=h.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,ra=h.textarea`
  padding: 14px 18px;
  resize: none;
  width: 100%;
  height: 154px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #1f1f1f;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  &:focus {
    border-color: #bedbb0;
  }
`,pe=h(ir)`
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
`,na=h.div`
  display: flex;
  gap: 4px;
  width: 200px;
  margin-bottom: 40px;
  align-items: center;
  cursor: pointer;
`,aa=h.p`
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  margin-top: 14px;
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
`,oa=h.h2`
  margin: 0;
  margin-top: 14px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Poppins", sans-serif;
`,ia=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,ue=h.span`
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
`,me=h.label`
  position: relative;
  width: 14px;
  height: 14px;
  margin: 0;

  input[type="radio"]:checked + ${ue} {
    scale: 0.5;
  }
`,la=h.input`
  padding: 14px 18px;
  width: 100%;
  border-radius: 6px;
  height: 49px;
  border: 1px solid #ccc;
  background: #202020;
  color: white;
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  box-shadow: none;
  cursor: pointer;

  &:focus {
    border-color: #bedbb0;
  }
`,ca=h.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #bedbb0;
`,sa=h.div`
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
`,ua=h.button`
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
`,fa=h(vn)`
  position: absolute;
  padding-left: 8px;
  margin: 0;
  color: red;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`,vt=h.div`
  line-height: 0;
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 0;
`,ha=h(vn)`
  position: absolute;
  bottom: -12px;
  padding-left: 8px;
  margin: 0;
  color: red;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`,va=h.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: #bedbb0;
`;mt.setAppElement("#root");const Dl=bt().shape({title:ge().required("Title is required"),description:ge().required("Description is required"),color:ge().required("Color selection is required"),deadline:pn().required("Deadline is required")});function _l({isModalOpen:e,modalStateSwapper:t,cardId:n}){const[r,a]=E.useState(new Date),i=Pe(),{isModalOpen:l,openModal:s,closeModal:d}=Me(),u={overlay:{backgroundColor:"rgb(21, 21, 21, 0.75)"},content:{width:"233px",height:"254px",margin:"auto",padding:0,border:"none",borderRadius:"8px"}},p=(v,{setSubmitting:m,resetForm:D})=>{const k={cardId:n,title:v.title,description:v.description,color:v.color,deadline:r};i(Aa(k)),m(!1),D(),t()},g=(v,m)=>["Su","Mo","Tu","We","Th","Fr","Sa"][m.getDay()],w=v=>{const m=new Date(v),D=m.getDate(),k=m.toLocaleString("en",{month:"long"});return`${m.toLocaleString("en",{weekday:"long"})}, ${k} ${D}`};return o.jsx(o.Fragment,{children:o.jsxs(gt,{modalIsOpen:e,closeModal:t,title:"Edit card",maxWidth:"350px",children:[o.jsx(yt,{initialValues:{title:"",description:"",color:"gray",deadline:new Date},validationSchema:Dl,onSubmit:p,children:({values:v,handleChange:m,handleSubmit:D})=>o.jsxs(ta,{onSubmit:D,children:[o.jsxs(vt,{children:[o.jsx(la,{type:"text",name:"title",onChange:m,value:v.title,placeholder:"Title"}),o.jsx(fa,{name:"title",component:"div",className:"error"})]}),o.jsxs(vt,{children:[o.jsx(ra,{name:"description",onChange:m,value:v.description,placeholder:"Description"}),o.jsx(ha,{name:"Description",component:"div",className:"error"})]}),o.jsx(oa,{children:"Label color"}),o.jsxs(ia,{children:[o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"blue",className:"blue",checked:v.color==="blue",onChange:m}),o.jsx(ue,{className:"blue"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"pink",className:"pink",checked:v.color==="pink",onChange:m}),o.jsx(ue,{className:"pink"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"green",className:"green",checked:v.color==="green",onChange:m}),o.jsx(ue,{className:"green"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"gray",className:"gray",checked:v.color==="gray",onChange:m}),o.jsx(ue,{className:"gray"})]})]}),o.jsx(aa,{children:"Deadline"}),o.jsxs(na,{children:[o.jsx(ca,{onClick:s,children:w(r)}),o.jsx(va,{children:o.jsx("use",{href:U+"#icon-chevron-down"})})]}),o.jsxs(ua,{type:"submit",children:[o.jsx(sa,{children:o.jsx(da,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Edit"]})]})}),o.jsx(mt,{isOpen:l,onRequestClose:d,style:u,closeTimeoutMS:750,children:o.jsx(ea,{formatShortWeekday:g,value:r,onChange:a})})]})})}var ar={exports:{}};(function(e,t){(function(n,r){r(t,E,qa)})(void 0,function(n,r,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=s(r),l=s(a);function s(x){return x&&x.__esModule?x:{default:x}}function d(x){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(_){return typeof _}:d=function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},d(x)}function u(x,y){if(x==null)return{};var _=p(x,y),f,j;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(x);for(j=0;j<O.length;j++)f=O[j],!(y.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(x,f)&&(_[f]=x[f])}return _}function p(x,y){if(x==null)return{};var _={},f=Object.keys(x),j,O;for(O=0;O<f.length;O++)j=f[O],!(y.indexOf(j)>=0)&&(_[j]=x[j]);return _}function g(x,y){if(!(x instanceof y))throw new TypeError("Cannot call a class as a function")}function w(x,y){for(var _=0;_<y.length;_++){var f=y[_];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(x,f.key,f)}}function v(x,y,_){return y&&w(x.prototype,y),_&&w(x,_),x}function m(x,y){return y&&(d(y)==="object"||typeof y=="function")?y:k(x)}function D(x){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(_){return _.__proto__||Object.getPrototypeOf(_)},D(x)}function k(x){if(x===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x}function S(x,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function");x.prototype=Object.create(y&&y.prototype,{constructor:{value:x,writable:!0,configurable:!0}}),y&&I(x,y)}function I(x,y){return I=Object.setPrototypeOf||function(f,j){return f.__proto__=j,f},I(x,y)}function V(x,y,_){return y in x?Object.defineProperty(x,y,{value:_,enumerable:!0,configurable:!0,writable:!0}):x[y]=_,x}var Z=1e-4,he=function(y,_){return Math.abs(y-_)<Z},q=function(x){S(y,x);function y(){var _,f;g(this,y);for(var j=arguments.length,O=new Array(j),Y=0;Y<j;Y++)O[Y]=arguments[Y];return f=m(this,(_=D(y)).call.apply(_,[this].concat(O))),V(k(f),"onResize",function(){f.rafId&&window.cancelAnimationFrame(f.rafId),f.rafId=window.requestAnimationFrame(f.update.bind(k(f)))}),V(k(f),"onToggled",function(A){typeof f.props.onToggled=="function"&&setTimeout(function(){return f.props.onToggled(A)},0)}),V(k(f),"onTruncated",function(){typeof f.props.onTruncated=="function"&&setTimeout(function(){return f.props.onTruncated()},0)}),V(k(f),"onCalculated",function(){typeof f.props.onCalculated=="function"&&setTimeout(function(){return f.props.onCalculated()},0)}),V(k(f),"update",function(){var A=window.getComputedStyle(f.scope),K=[A["font-weight"],A["font-style"],A["font-size"],A["font-family"],A["letter-spacing"]].join(" ");f.canvas.font=K,f.forceUpdate()}),f}return v(y,[{key:"componentDidMount",value:function(){var f=document.createElement("canvas"),j=document.createDocumentFragment(),O=window.getComputedStyle(this.scope),Y=[O["font-weight"],O["font-style"],O["font-size"],O["font-family"]].join(" ");j.appendChild(f),this.canvas=f.getContext("2d"),this.canvas.font=Y,this.forceUpdate(),window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize),this.rafId&&window.cancelAnimationFrame(this.rafId)}},{key:"measureWidth",value:function(f){return this.canvas.measureText(f).width}},{key:"getRenderText",value:function(){var f=this.props;f.containerClassName,f.element;var j=f.line;f.onCalculated,f.onTruncated,f.onToggled;var O=f.text,Y=f.textElement,A=f.textTruncateChild,K=f.truncateText,z=f.maxCalculateTimes,le=u(f,["containerClassName","element","line","onCalculated","onTruncated","onToggled","text","textElement","textTruncateChild","truncateText","maxCalculateTimes"]),te=this.scope.getBoundingClientRect().width;if(te===0)return null;var J=this.measureWidth(O);if(te>J||he(te,J))return this.onToggled(!1),(0,r.createElement)(Y,le,O);var W="";if(A&&typeof A.type=="string"){var X=A.type;(X.indexOf("span")>=0||X.indexOf("a")>=0)&&(W=A.props.children)}for(var T=1,re=O.length,$="",de=0,B=0,Q=j,ae=0,ee=!1,Ce=!1,xe=0,ve=-1,we="",F=0;Q-- >0;){for(we=Q?"":K+(W?" "+W:"");T<=re;)if($=O.substr(B,T),ae=this.measureWidth($+we),ae<te)de=O.indexOf(" ",T+1),de===-1?(T+=1,ee=!1):(ee=!0,T=de);else{do{if(F++>=z)break;$=O.substr(B,T),Q||T--,$[$.length-1]===" "&&($=O.substr(B,T-1)),ee?(ve=$.lastIndexOf(" "),ve>-1?(T=ve,Q&&T++,$=O.substr(B,T)):(T--,$=O.substr(B,T))):(T--,$=O.substr(B,T)),ae=this.measureWidth($+we)}while((ae>te||he(ae,te))&&$.length>0);B+=T;break}if(T>=re){B=re;break}ee&&!Ce&&O.substr(xe,T).indexOf(" ")===-1&&(Ce=O.substr(xe,T).indexOf(" ")===-1,Q--),xe=T+1}return B===re?(this.onToggled(!1),(0,r.createElement)(Y,le,O)):(this.onTruncated(),this.onToggled(!0),i.default.createElement("span",le,(0,r.createElement)(Y,le,O.substr(0,B)+K+" "),A))}},{key:"render",value:function(){var f=this,j=this.props,O=j.element,Y=j.text,A=j.style,K=A===void 0?{}:A,z=j.containerClassName,le=j.line;j.onCalculated,j.onTruncated,j.onToggled;var te=j.textElement;j.textTruncateChild,j.truncateText,j.maxCalculateTimes;var J=u(j,["element","text","style","containerClassName","line","onCalculated","onTruncated","onToggled","textElement","textTruncateChild","truncateText","maxCalculateTimes"]),W=K.fontWeight,X=K.fontStyle,T=K.fontSize,re=K.fontFamily,$=this.scope&&le?this.getRenderText():(0,r.createElement)(te,J,Y),de={ref:function(Q){f.scope=Q},className:z,style:{overflow:"hidden",fontWeight:W,fontStyle:X,fontSize:T,fontFamily:re}};return this.scope&&this.onCalculated(),(0,r.createElement)(O,de,$)}}]),y}(r.Component);V(q,"propTypes",{containerClassName:l.default.string,element:l.default.string,line:l.default.oneOfType([l.default.number,l.default.bool]),onCalculated:l.default.func,onTruncated:l.default.func,onToggled:l.default.func,text:l.default.string,textElement:l.default.elementType,textTruncateChild:l.default.node,truncateText:l.default.string,maxCalculateTimes:l.default.number}),V(q,"defaultProps",{element:"div",line:1,text:"",textElement:"span",truncateText:"…",maxCalculateTimes:10}),n.default=q,e.exports=n.default})})(ar,ar.exports);var Ol=ar.exports;const kl=an(Ol),jl=h.ul`
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
`,Cl=h.li`
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
`,Sl=h.h4`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 14px;
  /* letter-spacing: -0.02em; */
  color: var(--card-title-color);
`,Tl=h.div`
  height: 50px;
  overflow: hidden;
`,El=h(kl)`
  font-size: 12px;
  line-height: 1.33;
  /* letter-spacing: -0.02em; */
  color: var(--screens-page-tutorial-text-color);
`,Nl=h.div`
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
`,en=h.span`
  display: block;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: var(--screens-page-tutorial-text-color);
`,Ml=h.span`
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
`,Al=h.span`
  font-size: 10px;
  letter-spacing: -0.02em;
  color: var(--card-params-value-text-color);
`,Pl=h.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: auto;
`,qt=h.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,Gt=h.svg`
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
`,Ll=e=>{const t=new Date(e),n=t.getDate(),r=t.getMonth()+1,a=t.getFullYear();return`${n<10?"0":""}${n}/${r<10?"0":""}${r}/${a}`},tn=e=>{switch(e){case"blue":return"#8fa1d0";case"pink":return"#e09cb5";case"green":return"#bedbb0";case"gray":return"rgba(255, 255, 255, 0.3)";default:return"rgba(255, 255, 255, 0.3)"}},Il=e=>{switch(e){case"blue":return"Low";case"pink":return"Medium";case"green":return"High";case"gray":return"Without priority";default:return"Without priority"}},Wl=({card:e})=>{const[t,n]=E.useState(null),r=Pe(),{isModalOpen:a,openModal:i,closeModal:l}=Me(),s=d=>{r(Pa(d))};return o.jsxs(o.Fragment,{children:[o.jsx(jl,{children:e&&e.map(({_id:d,title:u,description:p,color:g,deadline:w})=>o.jsxs(Cl,{$prioritycolor:tn(g),children:[o.jsx(Sl,{children:u}),o.jsx(Tl,{children:o.jsx(El,{line:2,element:"span",truncateText:"…",text:p})}),o.jsxs(Nl,{children:[o.jsxs("div",{children:[o.jsx(en,{children:"Priority"}),o.jsx(Ml,{$prioritycolor:tn(g),children:Il(g)})]}),o.jsxs("div",{children:[o.jsx(en,{children:"Deadline"}),o.jsx(Al,{children:Ll(w)})]}),o.jsxs(Pl,{children:[o.jsx("li",{children:o.jsx(qt,{children:o.jsx(Gt,{children:o.jsx("use",{href:U+"#icon-arrow-circle-broken-right"})})})}),o.jsx("li",{children:o.jsx(qt,{onClick:()=>{i(),n(d)},children:o.jsx(Gt,{children:o.jsx("use",{href:U+"#icon-pencil"})})})}),o.jsx("li",{children:o.jsx(qt,{onClick:()=>s(d),children:o.jsx(Gt,{children:o.jsx("use",{href:U+"#icon-trash"})})})})]})]})]},d))}),o.jsx(_l,{modalStateSwapper:l,isModalOpen:a,cardId:t})]})},Fl=h.div`
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
`,Rl=h.ul`
  display: flex;
  gap: 34px;
  height: 100%;
`,$l=h.li`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 100%;
  /* height: 100%; */

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`,Vl=h.button`
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
`,Yl=h.button`
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
`,zl=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: var(--add-column-icon-wrap-color);
`,Bl=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: var(--shared-black-plus-button);
`,ql=h.svg`
  width: 14px;
  height: 14px;
  stroke: var(--add-column-icon-plus-color);
`,Gl=h.svg`
  width: 14px;
  height: 14px;
  stroke: var(--add-card-icon-plus-color);
`,Hl=h.div`
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
`,Ul=h.h3`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--card-title-color);
`,Zl=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,rn=h.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,nn=h.svg`
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
`,Kl=h(ir)`
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
`,Jl=h.button`
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
`,Xl=bt().shape({title:ge().min("6").required("specify a column name")}),Ql=({isModalOpen:e,modalStateSwapper:t})=>{const n=or(ln),r=Pe(),a={title:""},i=({title:l},s)=>{const d=n.result._id;r(La({dashboardId:d,title:l})),s.resetForm()};return o.jsx(gt,{modalIsOpen:e,closeModal:t,title:"Add column",maxWidth:"335px",children:o.jsx(cn,{children:o.jsx(yt,{initialValues:a,validationSchema:Xl,onSubmit:i,children:o.jsxs(sn,{children:[o.jsxs(dn,{children:[o.jsx(un,{name:"title",component:"div"}),o.jsx(Kl,{type:"text",id:"title",name:"title",placeholder:"title",autoComplete:"off"})]}),o.jsxs(Jl,{type:"submit",children:[o.jsx(fn,{children:o.jsx(hn,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add"]})]})})})})},ec=h(ir)`
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
`,tc=h.button`
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
`,rc=bt().shape({title:ge().min("6").required("specify a column name")}),nc=({isModalOpen:e,modalStateSwapper:t,title:n,columnId:r})=>{const a=Pe(),i={title:n||""},l=({title:s},d)=>{a(Ia({columnId:r,title:s})),d.resetForm()};return o.jsx(gt,{modalIsOpen:e,closeModal:t,title:"Edit column",maxWidth:"335px",children:o.jsx(cn,{children:o.jsx(yt,{initialValues:i,validationSchema:rc,onSubmit:l,children:o.jsxs(sn,{children:[o.jsxs(dn,{children:[o.jsx(un,{name:"title",component:"div"}),o.jsx(ec,{type:"text",id:"title",name:"title",placeholder:"title",autoComplete:"off"})]}),o.jsxs(tc,{type:"submit",children:[o.jsx(fn,{children:o.jsx(hn,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add"]})]})})})})};mt.setAppElement("#root");const ac=bt().shape({title:ge().required("Title is required"),description:ge().required("Description is required"),color:ge().required("Color selection is required"),deadline:pn().required("Deadline is required")});function oc({isModalOpen:e,modalStateSwapper:t,columnId:n}){const[r,a]=E.useState(new Date),i=Pe(),{isModalOpen:l,openModal:s,closeModal:d}=Me(),u={overlay:{backgroundColor:"rgb(21, 21, 21, 0.75)"},content:{width:"233px",height:"254px",margin:"auto",padding:0,border:"none",borderRadius:"8px"}},p=(v,{setSubmitting:m,resetForm:D})=>{const k={columnId:n,title:v.title,description:v.description,color:v.color,deadline:r};i(Wa(k)),m(!1),D(),t()},g=(v,m)=>["Su","Mo","Tu","We","Th","Fr","Sa"][m.getDay()],w=v=>{const m=new Date(v),D=m.getDate(),k=m.toLocaleString("en",{month:"long"});return`${m.toLocaleString("en",{weekday:"long"})}, ${k} ${D}`};return o.jsx(o.Fragment,{children:o.jsxs(gt,{modalIsOpen:e,closeModal:t,title:"Add card",maxWidth:"350px",children:[o.jsx(yt,{initialValues:{title:"",description:"",color:"gray",deadline:new Date},validationSchema:ac,onSubmit:p,children:({values:v,handleChange:m,handleSubmit:D})=>o.jsxs(ta,{onSubmit:D,children:[o.jsxs(vt,{children:[o.jsx(la,{type:"text",name:"title",onChange:m,value:v.title,placeholder:"Title"}),o.jsx(fa,{name:"title",component:"div",className:"error"})]}),o.jsxs(vt,{children:[o.jsx(ra,{name:"description",onChange:m,value:v.description,placeholder:"Description"}),o.jsx(ha,{name:"description",component:"div",className:"error"})]}),o.jsx(oa,{children:"Label color"}),o.jsxs(ia,{onChange:m,value:v.color,children:[o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"blue",className:"blue",checked:v.color==="blue",onChange:m}),o.jsx(ue,{className:"blue"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"pink",className:"pink",checked:v.color==="pink",onChange:m}),o.jsx(ue,{className:"pink"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"green",className:"green",checked:v.color==="green",onChange:m}),o.jsx(ue,{className:"green"})]}),o.jsxs(me,{children:[o.jsx(pe,{type:"radio",name:"color",value:"gray",className:"gray",checked:v.color==="gray",onChange:m}),o.jsx(ue,{className:"gray"})]})]}),o.jsx(aa,{children:"Deadline"}),o.jsxs(na,{onClick:s,children:[o.jsx(ca,{children:w(r)}),o.jsx(va,{children:o.jsx("use",{href:U+"#icon-chevron-down"})})]}),o.jsxs(ua,{type:"submit",children:[o.jsx(sa,{children:o.jsx(da,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add"]})]})}),o.jsx(mt,{isOpen:l,onRequestClose:d,style:u,closeTimeoutMS:750,children:o.jsx(ea,{formatShortWeekday:g,value:r,onChange:a})})]})})}const ic=()=>{const{isModalOpen:e,openModal:t,closeModal:n}=Me(),{isModalOpen:r,openModal:a,closeModal:i}=Me(),{isModalOpen:l,openModal:s,closeModal:d}=Me(),{column:u}=or(ln),{state:p}=on(),g=Pe(),[w,v]=E.useState(null);E.useEffect(()=>{u===void 0&&g(Fa(p.id))},[u,g,p==null?void 0:p.id]);const m=D=>{g(Ra(D))};return o.jsxs(Fl,{children:[o.jsx(Rl,{children:u===void 0?o.jsx(o.Fragment,{}):u.map(({_id:D,title:k,card:S})=>o.jsxs($l,{children:[o.jsx("div",{children:o.jsxs(Hl,{children:[o.jsx(Ul,{children:k}),o.jsxs(Zl,{children:[o.jsx(rn,{onClick:()=>{a(),v(D)},children:o.jsx(nn,{children:o.jsx("use",{href:U+"#icon-pencil"})})}),o.jsx(rn,{onClick:()=>m(D),children:o.jsx(nn,{children:o.jsx("use",{href:U+"#icon-trash"})})})]})]})}),o.jsx(Wl,{card:S}),o.jsx("div",{children:o.jsxs(Yl,{onClick:()=>{s(),v(D)},children:[o.jsx(Bl,{children:o.jsx(Gl,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add Card"]})})]},D))}),o.jsxs(Vl,{onClick:t,children:[o.jsx(zl,{children:o.jsx(ql,{children:o.jsx("use",{href:U+"#icon-plus"})})}),"Add column"]}),o.jsx(Lr,{onClick:n,className:e===!0&&"active"}),o.jsx(Ql,{modalStateSwapper:n,isModalOpen:e}),o.jsx(Lr,{onClick:i,className:r===!0&&"active"}),o.jsx(nc,{modalStateSwapper:i,isModalOpen:r,columnId:w}),o.jsx(oc,{modalStateSwapper:d,isModalOpen:l,columnId:w})]})},lc=h.div`
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
`,cc=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`,sc=h.p`
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
`,dc=h.span`
  color: var(--welcome-message-text-accent-color);
`,pc=()=>{const[e,t]=E.useState(!1),[n,r]=E.useState(""),a=E.useRef(!0),{boardName:i}=$a(),l=Va(),s=on(),d=or(Ga);return E.useEffect(()=>{r(i)},[s.pathname,i]),E.useEffect(()=>{if(!(a.current!==!0&&i!==n)){if(d.length>0&&!i){t(!0);const u=d[d.length-1];r(u.title),l(`/home/${u.title}`,{replace:!0,state:{id:u._id}}),t(!1)}a.current=!1}},[d,l,i,n]),o.jsx(lc,{children:e?o.jsx("div",{children:o.jsx(Ya,{})}):i===void 0&&o.jsx(cc,{children:o.jsxs(sc,{children:["Before starting your project, it is essential"," ",o.jsx(dc,{children:"to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})||i!==void 0&&o.jsxs(o.Fragment,{children:[o.jsx(lo,{boardName:i}),o.jsx(ic,{})]})})};export{pc as default};
