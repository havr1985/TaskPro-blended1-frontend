import{u as N,v as lo,j as g,r as C,w as ea,x as st,R as A,y as jt,b as rr,z as Xc,a as Lt,A as Zc,D as Qc,E as es,F as co,G as rs,H as ts,I as ns,J as so,i as uo,K as as,M as is,t as os,f as ls,P as cs}from"./index-CSl63sa8.js";import{i as ve}from"./icons-I0FOP6sp.js";import{g as ss,r as fo,w as us,h as Ft,u as fr,S as Wt,s as ra,a as po,M as vo,F as go,E as mo,d as ho,P as bo,O as Qa,e as ds}from"./HomePage.styled-qVpO5cUZ.js";import{b as ta,E as yo,c as _t,a as $e,d as xo,F as Gt,h as ei}from"./index.esm-Ig9quwle.js";const fs=N.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`,ps=N.div`
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
`,vs=N.h2`
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
`,gs=N.div`
  width: 252px;
  height: 1px;
  background-color: var(--modal-filter-form-line);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 14px;
`,ms=N.div`
  display: flex;
  justify-content: space-between;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,hs=N.p`
  font-weight: 500;
  color: var(--modal-board-text);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,bs=N.button`
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
`,ut=N.div`
  margin-top: 16px;
  display: flex;
  width: 130px;
  gap: 8px;
`,lr=N.span`
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

`,dt=N.input`
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
`,Pr=N.span`
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
`,ft=N.label`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 18px;
  margin: 0;
  z-index: 999; 
  cursor: pointer;

 input[type="radio"]:checked + ${lr} {
   scale: 0.5;
   }
   
  input[type="radio"]:checked + ${lr} + ${Pr} {
    color: var(--modal-filters-text);
    font-weight: 500;
  } ;
`,ys=({isOpen:e,onClose:r})=>{const[t,n]=lo(),a=t.get("priority");if(!e)return null;const i=()=>{n({priority:"all"}),r()},o=l=>{const c=l.target.value;n({priority:c})};return g.jsx(fs,{onClick:r,children:g.jsxs(ps,{onClick:l=>l.stopPropagation(),children:[g.jsx(ss,{onClick:r,children:"✕"}),g.jsx(vs,{children:"Filters"}),g.jsx(gs,{}),g.jsxs(ms,{children:[g.jsx(hs,{children:"Label color"}),g.jsx(bs,{onClick:i,children:"Show all"})]}),g.jsx(ut,{children:g.jsxs(ft,{children:[g.jsx(dt,{type:"radio",name:"radio",value:"without",className:"without",checked:a==="without",onChange:o}),g.jsx(lr,{className:"gray"}),g.jsx(Pr,{children:"Without priority"})]})}),g.jsx(ut,{children:g.jsxs(ft,{children:[g.jsx(dt,{type:"radio",name:"radio",value:"low",className:"low",checked:a==="low",onChange:o}),g.jsx(lr,{className:"blue"}),g.jsx(Pr,{children:" Low "})]})}),g.jsx(ut,{children:g.jsxs(ft,{children:[g.jsx(dt,{type:"radio",name:"radio",value:"medium",className:"medium",checked:a==="medium",onChange:o}),g.jsx(lr,{className:"pink"}),g.jsx(Pr,{children:" Medium "})]})}),g.jsx(ut,{children:g.jsxs(ft,{children:[g.jsx(dt,{type:"radio",name:"radio",value:"high",className:"high",checked:a==="high",onChange:o}),g.jsx(lr,{className:"green"}),g.jsx(Pr,{children:" High "})]})})]})})},xs=N.button`
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
`,ws=N.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 1.5px;
  stroke: var(--filter-text-and-icon-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Ds=()=>{const[e,r]=C.useState(!1),t=()=>{r(!0)},n=()=>{r(!1)};return g.jsxs(g.Fragment,{children:[g.jsxs(xs,{onClick:()=>t(),children:[g.jsx(ws,{children:g.jsx("use",{href:ve+"#icon-filter"})}),"Filters"]}),g.jsx(ys,{isOpen:e,onClose:n})]})},Ss=N.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-right: -16px;
	margin-left: -16px;
	padding: 0 16px;
	min-width: 100%;

	margin-bottom: 39px;
	background-color: var(--headerdashboard-background-color);
	border-radius: 4px;

	@media screen and (max-width: 1439px) {
		padding: 13px 16px;
		margin-bottom: 13px;
	}

	@media screen and (min-width: 1440px) {
		margin-bottom: 10px;
	}

	@media screen and (max-width: 767px) {
		padding: 7px 20px;
		margin-bottom: 39px;
	}
`,Cs=N.h2`
	margin: 0;
	font-weight: 500;
	font-size: 18px;
	letter-spacing: -0.02em;
	color: var(--card-title-color);
	border-radius: 4px;
	background-color: transparent;
	padding: 2px;
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Os=({boardName:e})=>g.jsxs(Ss,{children:[g.jsx(Cs,{children:e}),g.jsx(Ds,{})]});var Is=fo();const x=ea(Is);var Es="Expected a function",wo="__lodash_hash_undefined__",Ps="[object Function]",As="[object GeneratorFunction]",Ts=/[\\^$.*+?()[\]{}|]/g,Ns=/^\[object .+?Constructor\]$/,ks=typeof st=="object"&&st&&st.Object===Object&&st,Ms=typeof self=="object"&&self&&self.Object===Object&&self,Do=ks||Ms||Function("return this")();function Rs(e,r){return e==null?void 0:e[r]}function Bs(e){var r=!1;if(e!=null&&typeof e.toString!="function")try{r=!!(e+"")}catch{}return r}var js=Array.prototype,Ls=Function.prototype,So=Object.prototype,hn=Do["__core-js_shared__"],ri=function(){var e=/[^.]+$/.exec(hn&&hn.keys&&hn.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Co=Ls.toString,na=So.hasOwnProperty,Fs=So.toString,Ws=RegExp("^"+Co.call(na).replace(Ts,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_s=js.splice,Gs=Oo(Do,"Map"),kr=Oo(Object,"create");function Qe(e){var r=-1,t=e?e.length:0;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}function $s(){this.__data__=kr?kr(null):{}}function Vs(e){return this.has(e)&&delete this.__data__[e]}function zs(e){var r=this.__data__;if(kr){var t=r[e];return t===wo?void 0:t}return na.call(r,e)?r[e]:void 0}function Us(e){var r=this.__data__;return kr?r[e]!==void 0:na.call(r,e)}function Hs(e,r){var t=this.__data__;return t[e]=kr&&r===void 0?wo:r,this}Qe.prototype.clear=$s;Qe.prototype.delete=Vs;Qe.prototype.get=zs;Qe.prototype.has=Us;Qe.prototype.set=Hs;function hr(e){var r=-1,t=e?e.length:0;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}function qs(){this.__data__=[]}function Ys(e){var r=this.__data__,t=$t(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():_s.call(r,t,1),!0}function Ks(e){var r=this.__data__,t=$t(r,e);return t<0?void 0:r[t][1]}function Js(e){return $t(this.__data__,e)>-1}function Xs(e,r){var t=this.__data__,n=$t(t,e);return n<0?t.push([e,r]):t[n][1]=r,this}hr.prototype.clear=qs;hr.prototype.delete=Ys;hr.prototype.get=Ks;hr.prototype.has=Js;hr.prototype.set=Xs;function tr(e){var r=-1,t=e?e.length:0;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}function Zs(){this.__data__={hash:new Qe,map:new(Gs||hr),string:new Qe}}function Qs(e){return Vt(this,e).delete(e)}function eu(e){return Vt(this,e).get(e)}function ru(e){return Vt(this,e).has(e)}function tu(e,r){return Vt(this,e).set(e,r),this}tr.prototype.clear=Zs;tr.prototype.delete=Qs;tr.prototype.get=eu;tr.prototype.has=ru;tr.prototype.set=tu;function $t(e,r){for(var t=e.length;t--;)if(lu(e[t][0],r))return t;return-1}function nu(e){if(!Io(e)||iu(e))return!1;var r=cu(e)||Bs(e)?Ws:Ns;return r.test(ou(e))}function Vt(e,r){var t=e.__data__;return au(r)?t[typeof r=="string"?"string":"hash"]:t.map}function Oo(e,r){var t=Rs(e,r);return nu(t)?t:void 0}function au(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function iu(e){return!!ri&&ri in e}function ou(e){if(e!=null){try{return Co.call(e)}catch{}try{return e+""}catch{}}return""}function aa(e,r){if(typeof e!="function"||r&&typeof r!="function")throw new TypeError(Es);var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o),o};return t.cache=new(aa.Cache||tr),t}aa.Cache=tr;function lu(e,r){return e===r||e!==e&&r!==r}function cu(e){var r=Io(e)?Fs.call(e):"";return r==Ps||r==As}function Io(e){var r=typeof e;return!!e&&(r=="object"||r=="function")}var su=aa;const Eo=ea(su);function Po(e){return JSON.stringify(e)}function uu(e){return typeof e=="string"}function du(e,r,t){return t.indexOf(e)===r}function fu(e){return e.toLowerCase()===e}function ti(e){return e.indexOf(",")===-1?e:e.split(",")}function Bn(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var r=e.split(".")[0],t=r===void 0?"":r;return Bn(t)}if(e.indexOf("@")!==-1){var n=e.split("@")[0],t=n===void 0?"":n;return Bn(t)}if(e.indexOf("-")===-1||!fu(e))return e;var a=e.split("-"),i=a[0],o=a[1],l=o===void 0?"":o;return"".concat(i,"-").concat(l.toUpperCase())}function pu(e){var r=e===void 0?{}:e,t=r.useFallbackLocale,n=t===void 0?!0:t,a=r.fallbackLocale,i=a===void 0?"en-US":a,o=[];if(typeof navigator<"u"){for(var l=navigator.languages||[],c=[],u=0,f=l;u<f.length;u++){var s=f[u];c=c.concat(ti(s))}var d=navigator.language,p=d&&ti(d);o=o.concat(c,p)}return n&&o.push(i),o.filter(uu).map(Bn).filter(du)}var vu=Eo(pu,Po);function gu(e){return vu(e)[0]||null}var Ao=Eo(gu,Po);function je(e,r,t){return function(a,i){i===void 0&&(i=t);var o=e(a)+i;return r(o)}}function zr(e){return function(t){return new Date(e(t).getTime()-1)}}function Ur(e,r){return function(n){return[e(n),r(n)]}}function K(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;var r=parseInt(e,10);if(typeof e=="string"&&!isNaN(r))return r;throw new Error("Failed to get year from date: ".concat(e,"."))}function qe(e){if(e instanceof Date)return e.getMonth();throw new Error("Failed to get month from date: ".concat(e,"."))}function zt(e){if(e instanceof Date)return e.getDate();throw new Error("Failed to get year from date: ".concat(e,"."))}function br(e){var r=K(e),t=r+(-r+1)%100,n=new Date;return n.setFullYear(t,0,1),n.setHours(0,0,0,0),n}var mu=je(K,br,-100),To=je(K,br,100),ia=zr(To),hu=je(K,ia,-100),No=Ur(br,ia);function Ye(e){var r=K(e),t=r+(-r+1)%10,n=new Date;return n.setFullYear(t,0,1),n.setHours(0,0,0,0),n}var ko=je(K,Ye,-10),oa=je(K,Ye,10),Ut=zr(oa),Mo=je(K,Ut,-10),Ro=Ur(Ye,Ut);function yr(e){var r=K(e),t=new Date;return t.setFullYear(r,0,1),t.setHours(0,0,0,0),t}var Bo=je(K,yr,-1),la=je(K,yr,1),Ht=zr(la),jo=je(K,Ht,-1),bu=Ur(yr,Ht);function ca(e,r){return function(n,a){a===void 0&&(a=r);var i=K(n),o=qe(n)+a,l=new Date;return l.setFullYear(i,o,1),l.setHours(0,0,0,0),e(l)}}function nr(e){var r=K(e),t=qe(e),n=new Date;return n.setFullYear(r,t,1),n.setHours(0,0,0,0),n}var Lo=ca(nr,-1),sa=ca(nr,1),Hr=zr(sa),Fo=ca(Hr,-1),yu=Ur(nr,Hr);function xu(e,r){return function(n,a){a===void 0&&(a=r);var i=K(n),o=qe(n),l=zt(n)+a,c=new Date;return c.setFullYear(i,o,l),c.setHours(0,0,0,0),e(c)}}function qr(e){var r=K(e),t=qe(e),n=zt(e),a=new Date;return a.setFullYear(r,t,n),a.setHours(0,0,0,0),a}var wu=xu(qr,1),ua=zr(wu),Du=Ur(qr,ua);function Wo(e){return zt(Hr(e))}var Cr,q={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},cr={ARABIC:"Arabic",HEBREW:"Hebrew",ISO_8601:"ISO 8601",US:"US"},Su=(Cr={},Cr[q.GREGORY]=["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],Cr[q.HEBREW]=["he","he-IL"],Cr[q.ISLAMIC]=["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"],Cr),da=[0,1,2,3,4,5,6],bn=new Map;function Cu(e){return function(t,n){var a=t||Ao();bn.has(a)||bn.set(a,new Map);var i=bn.get(a);return i.has(e)||i.set(e,new Intl.DateTimeFormat(a||void 0,e).format),i.get(e)(n)}}function Ou(e){var r=new Date(e);return new Date(r.setHours(12))}function ar(e){return function(r,t){return Cu(e)(r,Ou(t))}}var Iu={day:"numeric"},Eu={day:"numeric",month:"long",year:"numeric"},Pu={month:"long"},Au={month:"long",year:"numeric"},Tu={weekday:"short"},Nu={weekday:"long"},ku={year:"numeric"},Mu=ar(Iu),Ru=ar(Eu),Bu=ar(Pu),_o=ar(Au),ju=ar(Tu),Lu=ar(Nu),qt=ar(ku),Fu=da[0],Wu=da[5],ni=da[6];function Mr(e,r){r===void 0&&(r=q.ISO_8601);var t=e.getDay();switch(r){case q.ISO_8601:return(t+6)%7;case q.ISLAMIC:return(t+1)%7;case q.HEBREW:case q.GREGORY:return t;default:throw new Error("Unsupported calendar type.")}}function _u(e){var r=br(e);return K(r)}function Gu(e){var r=Ye(e);return K(r)}function jn(e,r){r===void 0&&(r=q.ISO_8601);var t=K(e),n=qe(e),a=e.getDate()-Mr(e,r);return new Date(t,n,a)}function $u(e,r){r===void 0&&(r=q.ISO_8601);var t=r===q.GREGORY?q.GREGORY:q.ISO_8601,n=jn(e,r),a=K(e)+1,i,o;do i=new Date(a,0,t===q.ISO_8601?4:1),o=jn(i,r),a-=1;while(e<o);return Math.round((n.getTime()-o.getTime())/(864e5*7))+1}function Ze(e,r){switch(e){case"century":return br(r);case"decade":return Ye(r);case"year":return yr(r);case"month":return nr(r);case"day":return qr(r);default:throw new Error("Invalid rangeType: ".concat(e))}}function Vu(e,r){switch(e){case"century":return mu(r);case"decade":return ko(r);case"year":return Bo(r);case"month":return Lo(r);default:throw new Error("Invalid rangeType: ".concat(e))}}function Go(e,r){switch(e){case"century":return To(r);case"decade":return oa(r);case"year":return la(r);case"month":return sa(r);default:throw new Error("Invalid rangeType: ".concat(e))}}function zu(e,r){switch(e){case"decade":return ko(r,-100);case"year":return Bo(r,-10);case"month":return Lo(r,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Uu(e,r){switch(e){case"decade":return oa(r,100);case"year":return la(r,10);case"month":return sa(r,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function $o(e,r){switch(e){case"century":return ia(r);case"decade":return Ut(r);case"year":return Ht(r);case"month":return Hr(r);case"day":return ua(r);default:throw new Error("Invalid rangeType: ".concat(e))}}function Hu(e,r){switch(e){case"century":return hu(r);case"decade":return Mo(r);case"year":return jo(r);case"month":return Fo(r);default:throw new Error("Invalid rangeType: ".concat(e))}}function qu(e,r){switch(e){case"decade":return Mo(r,-100);case"year":return jo(r,-10);case"month":return Fo(r,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function ai(e,r){switch(e){case"century":return No(r);case"decade":return Ro(r);case"year":return bu(r);case"month":return yu(r);case"day":return Du(r);default:throw new Error("Invalid rangeType: ".concat(e))}}function Yu(e,r,t){var n=[r,t].sort(function(a,i){return a.getTime()-i.getTime()});return[Ze(e,n[0]),$o(e,n[1])]}function Vo(e,r,t){return r===void 0&&(r=qt),t.map(function(n){return r(e,n)}).join(" – ")}function Ku(e,r,t){return Vo(e,r,No(t))}function zo(e,r,t){return Vo(e,r,Ro(t))}function Ju(e){return e.getDay()===new Date().getDay()}function Uo(e,r){r===void 0&&(r=q.ISO_8601);var t=e.getDay();switch(r){case q.ISLAMIC:case q.HEBREW:return t===Wu||t===ni;case q.ISO_8601:case q.GREGORY:return t===ni||t===Fu;default:throw new Error("Unsupported calendar type.")}}var Re="react-calendar__navigation";function Xu(e){var r=e.activeStartDate,t=e.drillUp,n=e.formatMonthYear,a=n===void 0?_o:n,i=e.formatYear,o=i===void 0?qt:i,l=e.locale,c=e.maxDate,u=e.minDate,f=e.navigationAriaLabel,s=f===void 0?"":f,d=e.navigationAriaLive,p=e.navigationLabel,v=e.next2AriaLabel,m=v===void 0?"":v,h=e.next2Label,b=h===void 0?"»":h,y=e.nextAriaLabel,w=y===void 0?"":y,D=e.nextLabel,M=D===void 0?"›":D,T=e.prev2AriaLabel,O=T===void 0?"":T,E=e.prev2Label,P=E===void 0?"«":E,S=e.prevAriaLabel,k=S===void 0?"":S,R=e.prevLabel,j=R===void 0?"‹":R,L=e.setActiveStartDate,V=e.showDoubleView,G=e.view,re=e.views,J=re.indexOf(G)>0,Q=G!=="century",_=Vu(G,r),X=Q?zu(G,r):void 0,W=Go(G,r),ae=Q?Uu(G,r):void 0,Y=function(){if(_.getFullYear()<0)return!0;var H=Hu(G,r);return u&&u>=H}(),ie=Q&&function(){if(X.getFullYear()<0)return!0;var H=qu(G,r);return u&&u>=H}(),te=c&&c<W,oe=Q&&c&&c<ae;function fe(){L(_,"prev")}function se(){L(X,"prev2")}function ye(){L(W,"next")}function Ie(){L(ae,"next2")}function Ee(H){var Le=function(){switch(G){case"century":return Ku(l,o,H);case"decade":return zo(l,o,H);case"year":return o(l,H);case"month":return a(l,H);default:throw new Error("Invalid view: ".concat(G,"."))}}();return p?p({date:H,label:Le,locale:l||Ao()||void 0,view:G}):Le}function Pe(){var H="".concat(Re,"__label");return A.createElement("button",{"aria-label":s,"aria-live":d,className:H,disabled:!J,onClick:t,style:{flexGrow:1},type:"button"},A.createElement("span",{className:"".concat(H,"__labelText ").concat(H,"__labelText--from")},Ee(r)),V?A.createElement(A.Fragment,null,A.createElement("span",{className:"".concat(H,"__divider")}," – "),A.createElement("span",{className:"".concat(H,"__labelText ").concat(H,"__labelText--to")},Ee(W))):null)}return A.createElement("div",{className:Re},P!==null&&Q?A.createElement("button",{"aria-label":O,className:"".concat(Re,"__arrow ").concat(Re,"__prev2-button"),disabled:ie,onClick:se,type:"button"},P):null,j!==null&&A.createElement("button",{"aria-label":k,className:"".concat(Re,"__arrow ").concat(Re,"__prev-button"),disabled:Y,onClick:fe,type:"button"},j),Pe(),M!==null&&A.createElement("button",{"aria-label":w,className:"".concat(Re,"__arrow ").concat(Re,"__next-button"),disabled:te,onClick:ye,type:"button"},M),b!==null&&Q?A.createElement("button",{"aria-label":m,className:"".concat(Re,"__arrow ").concat(Re,"__next2-button"),disabled:oe,onClick:Ie,type:"button"},b):null)}var sr=function(){return sr=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},sr.apply(this,arguments)},Zu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};function ii(e){return"".concat(e,"%")}function fa(e){var r=e.children,t=e.className,n=e.count,a=e.direction,i=e.offset,o=e.style,l=e.wrap,c=Zu(e,["children","className","count","direction","offset","style","wrap"]);return A.createElement("div",sr({className:t,style:sr({display:"flex",flexDirection:a,flexWrap:l?"wrap":"nowrap"},o)},c),A.Children.map(r,function(u,f){var s=i&&f===0?ii(100*i/n):null;return A.cloneElement(u,sr(sr({},u.props),{style:{flexBasis:ii(100/n),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:s,marginInlineStart:s,marginInlineEnd:0}}))}))}var ir;function Qu(e,r,t){return r&&r>e?r:t&&t<e?t:e}function Rr(e,r){return r[0]<=e&&r[1]>=e}function ed(e,r){return e[0]<=r[0]&&e[1]>=r[1]}function Ho(e,r){return Rr(e[0],r)||Rr(e[1],r)}function oi(e,r,t){var n=Ho(r,e),a=[];if(n){a.push(t);var i=Rr(e[0],r),o=Rr(e[1],r);i&&a.push("".concat(t,"Start")),o&&a.push("".concat(t,"End")),i&&o&&a.push("".concat(t,"BothEnds"))}return a}function rd(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function td(e){if(!e)throw new Error("args is required");var r=e.value,t=e.date,n=e.hover,a="react-calendar__tile",i=[a];if(!t)return i;var o=new Date,l=function(){if(Array.isArray(t))return t;var p=e.dateType;if(!p)throw new Error("dateType is required when date is not an array of two dates");return ai(p,t)}();if(Rr(o,l)&&i.push("".concat(a,"--now")),!r||!rd(r))return i;var c=function(){if(Array.isArray(r))return r;var p=e.valueType;if(!p)throw new Error("valueType is required when value is not an array of two dates");return ai(p,r)}();ed(c,l)?i.push("".concat(a,"--active")):Ho(c,l)&&i.push("".concat(a,"--hasActive"));var u=oi(c,l,"".concat(a,"--range"));i.push.apply(i,u);var f=Array.isArray(r)?r:[r];if(n&&f.length===1){var s=n>c[0]?[c[0],n]:[n,c[0]],d=oi(s,l,"".concat(a,"--hover"));i.push.apply(i,d)}return i}var nd=(ir={},ir[cr.ARABIC]=q.ISLAMIC,ir[cr.HEBREW]=q.HEBREW,ir[cr.ISO_8601]=q.ISO_8601,ir[cr.US]=q.GREGORY,ir);function ad(e){return e!==void 0&&e in cr}var li=!1;function Yt(e){if(ad(e)){var r=nd[e];return us(li,'Specifying calendarType="'.concat(e,'" is deprecated. Use calendarType="').concat(r,'" instead.')),li=!0,r}return e}function Kt(e){for(var r=e.className,t=e.count,n=t===void 0?3:t,a=e.dateTransform,i=e.dateType,o=e.end,l=e.hover,c=e.offset,u=e.renderTile,f=e.start,s=e.step,d=s===void 0?1:s,p=e.value,v=e.valueType,m=[],h=f;h<=o;h+=d){var b=a(h);m.push(u({classes:td({date:b,dateType:i,hover:l,value:p,valueType:v}),date:b}))}return A.createElement(fa,{className:r,count:n,offset:c,wrap:!0},m)}function Jt(e){var r=e.activeStartDate,t=e.children,n=e.classes,a=e.date,i=e.formatAbbr,o=e.locale,l=e.maxDate,c=e.maxDateTransform,u=e.minDate,f=e.minDateTransform,s=e.onClick,d=e.onMouseOver,p=e.style,v=e.tileClassName,m=e.tileContent,h=e.tileDisabled,b=e.view,y=C.useMemo(function(){var D={activeStartDate:r,date:a,view:b};return typeof v=="function"?v(D):v},[r,a,v,b]),w=C.useMemo(function(){var D={activeStartDate:r,date:a,view:b};return typeof m=="function"?m(D):m},[r,a,m,b]);return A.createElement("button",{className:jt(n,y),disabled:u&&f(u)>a||l&&c(l)<a||h&&h({activeStartDate:r,date:a,view:b}),onClick:s?function(D){return s(a,D)}:void 0,onFocus:d?function(){return d(a)}:void 0,onMouseOver:d?function(){return d(a)}:void 0,style:p,type:"button"},i?A.createElement("abbr",{"aria-label":i(o,a)},t):t,w)}var Ln=function(){return Ln=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Ln.apply(this,arguments)},id=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t},yn="react-calendar__century-view__decades__decade";function od(e){var r=e.classes,t=r===void 0?[]:r,n=e.currentCentury,a=e.formatYear,i=a===void 0?qt:a,o=id(e,["classes","currentCentury","formatYear"]),l=o.date,c=o.locale,u=[];return t&&u.push.apply(u,t),yn&&u.push(yn),br(l).getFullYear()!==n&&u.push("".concat(yn,"--neighboringCentury")),A.createElement(Jt,Ln({},o,{classes:u,maxDateTransform:Ut,minDateTransform:Ye,view:"century"}),zo(c,i,l))}var Fn=function(){return Fn=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Fn.apply(this,arguments)},ci=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};function ld(e){var r=e.activeStartDate,t=e.hover,n=e.showNeighboringCentury,a=e.value,i=e.valueType,o=ci(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),l=_u(r),c=l+(n?119:99);return A.createElement(Kt,{className:"react-calendar__century-view__decades",dateTransform:Ye,dateType:"decade",end:c,hover:t,renderTile:function(u){var f=u.date,s=ci(u,["date"]);return A.createElement(od,Fn({key:f.getTime()},o,s,{activeStartDate:r,currentCentury:l,date:f}))},start:l,step:10,value:a,valueType:i})}var si=function(e,r,t){if(t||arguments.length===2)for(var n=0,a=r.length,i;n<a;n++)(i||!(n in r))&&(i||(i=Array.prototype.slice.call(r,0,n)),i[n]=r[n]);return e.concat(i||Array.prototype.slice.call(r))},cd=Object.values(q),sd=Object.values(cr),Wn=["century","decade","year","month"],qo=x.oneOf(si(si([],cd,!0),sd,!0)),Dt=x.oneOfType([x.string,x.arrayOf(x.string)]),pa=function(r,t,n){var a=r,i=t,o=a[i];if(!o)return null;if(!(o instanceof Date))return new Error("Invalid prop `".concat(t,"` of type `").concat(typeof o,"` supplied to `").concat(n,"`, expected instance of `Date`."));var l=r.maxDate;return l&&o>l?new Error("Invalid prop `".concat(t,"` of type `").concat(typeof o,"` supplied to `").concat(n,"`, minDate cannot be larger than maxDate.")):null},va=function(r,t,n){var a=r,i=t,o=a[i];if(!o)return null;if(!(o instanceof Date))return new Error("Invalid prop `".concat(t,"` of type `").concat(typeof o,"` supplied to `").concat(n,"`, expected instance of `Date`."));var l=r.minDate;return l&&o<l?new Error("Invalid prop `".concat(t,"` of type `").concat(typeof o,"` supplied to `").concat(n,"`, maxDate cannot be smaller than minDate.")):null},ud=x.oneOfType([x.func,x.exact({current:x.any})]),dd=x.arrayOf(x.oneOfType([x.instanceOf(Date),x.oneOf([null])]).isRequired),fd=x.oneOfType([x.instanceOf(Date),x.oneOf([null]),dd]);x.arrayOf(x.oneOf(Wn));var St=function(r,t,n){var a=r,i=t,o=a[i];return o!==void 0&&(typeof o!="string"||Wn.indexOf(o)===-1)?new Error("Invalid prop `".concat(t,"` of value `").concat(o,"` supplied to `").concat(n,"`, expected one of [").concat(Wn.map(function(l){return'"'.concat(l,'"')}).join(", "),"].")):null};St.isRequired=function(r,t,n,a,i){var o=r,l=t,c=o[l];return c?St(r,t,n):new Error("The prop `".concat(t,"` is marked as required in `").concat(n,"`, but its value is `").concat(c,"`."))};var pd=function(e){return x.arrayOf(e)},Xt={activeStartDate:x.instanceOf(Date).isRequired,hover:x.instanceOf(Date),locale:x.string,maxDate:va,minDate:pa,onClick:x.func,onMouseOver:x.func,tileClassName:x.oneOfType([x.func,Dt]),tileContent:x.oneOfType([x.func,x.node]),value:fd,valueType:x.oneOf(["century","decade","year","month","day"]).isRequired};x.instanceOf(Date).isRequired,x.arrayOf(x.string.isRequired).isRequired,x.instanceOf(Date).isRequired,x.string,x.func,x.func,x.objectOf(x.oneOfType([x.string,x.number])),x.oneOfType([x.func,Dt]),x.oneOfType([x.func,x.node]),x.func;var Br=function(){return Br=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Br.apply(this,arguments)},Yo=function(r){function t(){return A.createElement(ld,Br({},r))}return A.createElement("div",{className:"react-calendar__century-view"},t())};Yo.propTypes=Br(Br({},Xt),{showNeighboringCentury:x.bool});const vd=Yo;var _n=function(){return _n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_n.apply(this,arguments)},gd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t},xn="react-calendar__decade-view__years__year";function md(e){var r=e.classes,t=r===void 0?[]:r,n=e.currentDecade,a=e.formatYear,i=a===void 0?qt:a,o=gd(e,["classes","currentDecade","formatYear"]),l=o.date,c=o.locale,u=[];return t&&u.push.apply(u,t),xn&&u.push(xn),Ye(l).getFullYear()!==n&&u.push("".concat(xn,"--neighboringDecade")),A.createElement(Jt,_n({},o,{classes:u,maxDateTransform:Ht,minDateTransform:yr,view:"decade"}),i(c,l))}var Gn=function(){return Gn=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Gn.apply(this,arguments)},ui=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};function hd(e){var r=e.activeStartDate,t=e.hover,n=e.showNeighboringDecade,a=e.value,i=e.valueType,o=ui(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),l=Gu(r),c=l+(n?11:9);return A.createElement(Kt,{className:"react-calendar__decade-view__years",dateTransform:yr,dateType:"year",end:c,hover:t,renderTile:function(u){var f=u.date,s=ui(u,["date"]);return A.createElement(md,Gn({key:f.getTime()},o,s,{activeStartDate:r,currentDecade:l,date:f}))},start:l,value:a,valueType:i})}var jr=function(){return jr=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},jr.apply(this,arguments)},Ko=function(r){function t(){return A.createElement(hd,jr({},r))}return A.createElement("div",{className:"react-calendar__decade-view"},t())};Ko.propTypes=jr(jr({},Xt),{showNeighboringDecade:x.bool});const bd=Ko;var $n=function(){return $n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},$n.apply(this,arguments)},yd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t},di=function(e,r,t){if(t||arguments.length===2)for(var n=0,a=r.length,i;n<a;n++)(i||!(n in r))&&(i||(i=Array.prototype.slice.call(r,0,n)),i[n]=r[n]);return e.concat(i||Array.prototype.slice.call(r))},xd="react-calendar__year-view__months__month";function wd(e){var r=e.classes,t=r===void 0?[]:r,n=e.formatMonth,a=n===void 0?Bu:n,i=e.formatMonthYear,o=i===void 0?_o:i,l=yd(e,["classes","formatMonth","formatMonthYear"]),c=l.date,u=l.locale;return A.createElement(Jt,$n({},l,{classes:di(di([],t,!0),[xd],!1),formatAbbr:o,maxDateTransform:Hr,minDateTransform:nr,view:"year"}),a(u,c))}var Vn=function(){return Vn=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Vn.apply(this,arguments)},fi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};function Dd(e){var r=e.activeStartDate,t=e.hover,n=e.value,a=e.valueType,i=fi(e,["activeStartDate","hover","value","valueType"]),o=0,l=11,c=K(r);return A.createElement(Kt,{className:"react-calendar__year-view__months",dateTransform:function(u){var f=new Date;return f.setFullYear(c,u,1),nr(f)},dateType:"month",end:l,hover:t,renderTile:function(u){var f=u.date,s=fi(u,["date"]);return A.createElement(wd,Vn({key:f.getTime()},i,s,{activeStartDate:r,date:f}))},start:o,value:n,valueType:a})}var Ct=function(){return Ct=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Ct.apply(this,arguments)},Jo=function(r){function t(){return A.createElement(Dd,Ct({},r))}return A.createElement("div",{className:"react-calendar__year-view"},t())};Jo.propTypes=Ct({},Xt);const Sd=Jo;var zn=function(){return zn=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},zn.apply(this,arguments)},Cd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t},pt="react-calendar__month-view__days__day";function Od(e){var r=e.calendarType,t=e.classes,n=t===void 0?[]:t,a=e.currentMonthIndex,i=e.formatDay,o=i===void 0?Mu:i,l=e.formatLongDate,c=l===void 0?Ru:l,u=Cd(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),f=Yt(r),s=u.date,d=u.locale,p=[];return n&&p.push.apply(p,n),pt&&p.push(pt),Uo(s,f)&&p.push("".concat(pt,"--weekend")),s.getMonth()!==a&&p.push("".concat(pt,"--neighboringMonth")),A.createElement(Jt,zn({},u,{classes:p,formatAbbr:c,maxDateTransform:ua,minDateTransform:qr,view:"month"}),o(d,s))}var Un=function(){return Un=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Un.apply(this,arguments)},pi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};function Id(e){var r=e.activeStartDate,t=e.calendarType,n=e.hover,a=e.showFixedNumberOfWeeks,i=e.showNeighboringMonth,o=e.value,l=e.valueType,c=pi(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),u=Yt(t),f=K(r),s=qe(r),d=a||i,p=Mr(r,u),v=d?0:p,m=(d?-p:0)+1,h=function(){if(a)return m+6*7-1;var b=Wo(r);if(i){var y=new Date;y.setFullYear(f,s,b),y.setHours(0,0,0,0);var w=7-Mr(y,u)-1;return b+w}return b}();return A.createElement(Kt,{className:"react-calendar__month-view__days",count:7,dateTransform:function(b){var y=new Date;return y.setFullYear(f,s,b),qr(y)},dateType:"day",hover:n,end:h,renderTile:function(b){var y=b.date,w=pi(b,["date"]);return A.createElement(Od,Un({key:y.getTime()},c,w,{activeStartDate:r,calendarType:t,currentMonthIndex:s,date:y}))},offset:v,start:m,value:o,valueType:l})}var Xo="react-calendar__month-view__weekdays",wn="".concat(Xo,"__weekday");function Ed(e){for(var r=e.calendarType,t=e.formatShortWeekday,n=t===void 0?ju:t,a=e.formatWeekday,i=a===void 0?Lu:a,o=e.locale,l=e.onMouseLeave,c=Yt(r),u=new Date,f=nr(u),s=K(f),d=qe(f),p=[],v=1;v<=7;v+=1){var m=new Date(s,d,v-Mr(f,c)),h=i(o,m);p.push(A.createElement("div",{key:v,className:jt(wn,Ju(m)&&"".concat(wn,"--current"),Uo(m,c)&&"".concat(wn,"--weekend"))},A.createElement("abbr",{"aria-label":h,title:h},n(o,m).replace(".",""))))}return A.createElement(fa,{className:Xo,count:7,onFocus:l,onMouseOver:l},p)}var Ot=function(){return Ot=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Ot.apply(this,arguments)},vi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t},gi="react-calendar__tile";function Pd(e){var r=e.onClickWeekNumber,t=e.weekNumber,n=A.createElement("span",null,t);if(r){var a=e.date,i=e.onClickWeekNumber,o=e.weekNumber,l=vi(e,["date","onClickWeekNumber","weekNumber"]);return A.createElement("button",Ot({},l,{className:gi,onClick:function(c){return i(o,a,c)},type:"button"}),n)}else{e.date,e.onClickWeekNumber,e.weekNumber;var l=vi(e,["date","onClickWeekNumber","weekNumber"]);return A.createElement("div",Ot({},l,{className:gi}),n)}}function Ad(e){var r=e.activeStartDate,t=e.calendarType,n=e.onClickWeekNumber,a=e.onMouseLeave,i=e.showFixedNumberOfWeeks,o=Yt(t),l=function(){if(i)return 6;var f=Wo(r),s=Mr(r,o),d=f-(7-s);return 1+Math.ceil(d/7)}(),c=function(){for(var f=K(r),s=qe(r),d=zt(r),p=[],v=0;v<l;v+=1)p.push(jn(new Date(f,s,d+v*7),o));return p}(),u=c.map(function(f){return $u(f,o)});return A.createElement(fa,{className:"react-calendar__month-view__weekNumbers",count:l,direction:"column",onFocus:a,onMouseOver:a,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0}},u.map(function(f,s){var d=c[s];if(!d)throw new Error("date is not defined");return A.createElement(Pd,{key:f,date:d,onClickWeekNumber:n,weekNumber:f})}))}var Lr=function(){return Lr=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Lr.apply(this,arguments)},Td=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};function Nd(e){if(e)for(var r=0,t=Object.entries(Su);r<t.length;r++){var n=t[r],a=n[0],i=n[1];if(i.includes(e))return a}return q.ISO_8601}var Zo=function(r){var t=r.activeStartDate,n=r.locale,a=r.onMouseLeave,i=r.showFixedNumberOfWeeks,o=r.calendarType,l=o===void 0?Nd(n):o,c=r.formatShortWeekday,u=r.formatWeekday,f=r.onClickWeekNumber,s=r.showWeekNumbers,d=Td(r,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function p(){return A.createElement(Ed,{calendarType:l,formatShortWeekday:c,formatWeekday:u,locale:n,onMouseLeave:a})}function v(){return s?A.createElement(Ad,{activeStartDate:t,calendarType:l,onClickWeekNumber:f,onMouseLeave:a,showFixedNumberOfWeeks:i}):null}function m(){return A.createElement(Id,Lr({calendarType:l},d))}var h="react-calendar__month-view";return A.createElement("div",{className:jt(h,s?"".concat(h,"--weekNumbers"):"")},A.createElement("div",{style:{display:"flex",alignItems:"flex-end"}},v(),A.createElement("div",{style:{flexGrow:1,width:"100%"}},p(),m())))};Zo.propTypes=Lr(Lr({},Xt),{calendarType:qo,formatDay:x.func,formatLongDate:x.func,formatShortWeekday:x.func,formatWeekday:x.func,onClickWeekNumber:x.func,onMouseLeave:x.func,showFixedNumberOfWeeks:x.bool,showNeighboringMonth:x.bool,showWeekNumbers:x.bool});const kd=Zo;var ur=function(){return ur=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},ur.apply(this,arguments)},vt="react-calendar",pr=["century","decade","year","month"],Md=["decade","year","month","day"],ga=new Date;ga.setFullYear(1,0,1);ga.setHours(0,0,0,0);var Rd=new Date(864e13);function Ar(e){return e instanceof Date?e:new Date(e)}function Qo(e,r){return pr.slice(pr.indexOf(e),pr.indexOf(r)+1)}function Bd(e,r,t){var n=Qo(r,t);return n.indexOf(e)!==-1}function ma(e,r,t){return e&&Bd(e,r,t)?e:t}function el(e){var r=pr.indexOf(e);return Md[r]}function jd(e,r){var t=Array.isArray(e)?e[r]:e;if(!t)return null;var n=Ar(t);if(isNaN(n.getTime()))throw new Error("Invalid date: ".concat(e));return n}function rl(e,r){var t=e.value,n=e.minDate,a=e.maxDate,i=e.maxDetail,o=jd(t,r);if(!o)return null;var l=el(i),c=function(){switch(r){case 0:return Ze(l,o);case 1:return $o(l,o);default:throw new Error("Invalid index value: ".concat(r))}}();return Qu(c,n,a)}var ha=function(e){return rl(e,0)},tl=function(e){return rl(e,1)},Ld=function(e){return[ha,tl].map(function(r){return r(e)})};function nl(e){var r=e.maxDate,t=e.maxDetail,n=e.minDate,a=e.minDetail,i=e.value,o=e.view,l=ma(o,a,t),c=ha({value:i,minDate:n,maxDate:r,maxDetail:t})||new Date;return Ze(l,c)}function Fd(e){var r=e.activeStartDate,t=e.defaultActiveStartDate,n=e.defaultValue,a=e.defaultView,i=e.maxDate,o=e.maxDetail,l=e.minDate,c=e.minDetail,u=e.value,f=e.view,s=ma(f,c,o),d=r||t;return d?Ze(s,d):nl({maxDate:i,maxDetail:o,minDate:l,minDetail:c,value:u||n,view:f||a})}function Dn(e){return e&&(!Array.isArray(e)||e.length===1)}function gt(e,r){return e instanceof Date&&r instanceof Date&&e.getTime()===r.getTime()}var al=C.forwardRef(function(r,t){var n=r.activeStartDate,a=r.allowPartialRange,i=r.calendarType,o=r.className,l=r.defaultActiveStartDate,c=r.defaultValue,u=r.defaultView,f=r.formatDay,s=r.formatLongDate,d=r.formatMonth,p=r.formatMonthYear,v=r.formatShortWeekday,m=r.formatWeekday,h=r.formatYear,b=r.goToRangeStartOnSelect,y=b===void 0?!0:b,w=r.inputRef,D=r.locale,M=r.maxDate,T=M===void 0?Rd:M,O=r.maxDetail,E=O===void 0?"month":O,P=r.minDate,S=P===void 0?ga:P,k=r.minDetail,R=k===void 0?"century":k,j=r.navigationAriaLabel,L=r.navigationAriaLive,V=r.navigationLabel,G=r.next2AriaLabel,re=r.next2Label,J=r.nextAriaLabel,Q=r.nextLabel,_=r.onActiveStartDateChange,X=r.onChange,W=r.onClickDay,ae=r.onClickDecade,Y=r.onClickMonth,ie=r.onClickWeekNumber,te=r.onClickYear,oe=r.onDrillDown,fe=r.onDrillUp,se=r.onViewChange,ye=r.prev2AriaLabel,Ie=r.prev2Label,Ee=r.prevAriaLabel,Pe=r.prevLabel,H=r.returnValue,Le=H===void 0?"start":H,pe=r.selectRange,Fe=r.showDoubleView,it=r.showFixedNumberOfWeeks,We=r.showNavigation,Sr=We===void 0?!0:We,Rc=r.showNeighboringCentury,Bc=r.showNeighboringDecade,$a=r.showNeighboringMonth,jc=$a===void 0?!0:$a,Lc=r.showWeekNumbers,Fc=r.tileClassName,Wc=r.tileContent,_c=r.tileDisabled,cn=r.value,Va=r.view,za=C.useState(l),Gc=za[0],ot=za[1],Ua=C.useState(null),$c=Ua[0],Ha=Ua[1],qa=C.useState(Array.isArray(c)?c.map(function($){return $!==null?Ar($):null}):c!=null?Ar(c):null),sn=qa[0],Vc=qa[1],Ya=C.useState(u),zc=Ya[0],Ka=Ya[1],me=n||Gc||Fd({activeStartDate:n,defaultActiveStartDate:l,defaultValue:c,defaultView:u,maxDate:T,maxDetail:E,minDate:S,minDetail:R,value:cn,view:Va}),he=function(){var $=function(){return pe&&Dn(sn)?sn:cn!==void 0?cn:sn}();return $?Array.isArray($)?$.map(function(ee){return ee!==null?Ar(ee):null}):$!==null?Ar($):null:null}(),lt=el(E),Z=ma(Va||zc,R,E),Me=Qo(R,E),Uc=pe?$c:null,un=Me.indexOf(Z)<Me.length-1,Ja=Me.indexOf(Z)>0,Xa=C.useCallback(function($){var ee=function(){switch(Le){case"start":return ha;case"end":return tl;case"range":return Ld;default:throw new Error("Invalid returnValue.")}}();return ee({maxDate:T,maxDetail:E,minDate:S,value:$})},[T,E,S,Le]),dn=C.useCallback(function($,ee){ot($);var ne={action:ee,activeStartDate:$,value:he,view:Z};_&&!gt(me,$)&&_(ne)},[me,_,he,Z]),ct=C.useCallback(function($,ee){var ne=function(){switch(Z){case"century":return ae;case"decade":return te;case"year":return Y;case"month":return W;default:throw new Error("Invalid view: ".concat(Z,"."))}}();ne&&ne($,ee)},[W,ae,Y,te,Z]),fn=C.useCallback(function($,ee){if(un){ct($,ee);var ne=Me[Me.indexOf(Z)+1];if(!ne)throw new Error("Attempted to drill down from the lowest view.");ot($),Ka(ne);var Ae={action:"drillDown",activeStartDate:$,value:he,view:ne};_&&!gt(me,$)&&_(Ae),se&&Z!==ne&&se(Ae),oe&&oe(Ae)}},[me,un,_,ct,oe,se,he,Z,Me]),pn=C.useCallback(function(){if(Ja){var $=Me[Me.indexOf(Z)-1];if(!$)throw new Error("Attempted to drill up from the highest view.");var ee=Ze($,me);ot(ee),Ka($);var ne={action:"drillUp",activeStartDate:ee,value:he,view:$};_&&!gt(me,ee)&&_(ne),se&&Z!==$&&se(ne),fe&&fe(ne)}},[me,Ja,_,fe,se,he,Z,Me]),vn=C.useCallback(function($,ee){var ne=he;ct($,ee);var Ae=pe&&!Dn(ne),Te;if(pe)if(Ae)Te=Ze(lt,$);else{if(!ne)throw new Error("previousValue is required");if(Array.isArray(ne))throw new Error("previousValue must not be an array");Te=Yu(lt,ne,$)}else Te=Xa($);var mn=!pe||Ae||y?nl({maxDate:T,maxDetail:E,minDate:S,minDetail:R,value:Te,view:Z}):null;ee.persist(),ot(mn),Vc(Te);var Kc={action:"onChange",activeStartDate:mn,value:Te,view:Z};if(_&&!gt(me,mn)&&_(Kc),X)if(pe){var Jc=Dn(Te);if(!Jc)X(Te||null,ee);else if(a){if(Array.isArray(Te))throw new Error("value must not be an array");X([Te||null,null],ee)}}else X(Te||null,ee)},[me,a,Xa,y,T,E,S,R,_,X,ct,pe,he,lt,Z]);function Hc($){Ha($)}function gn(){Ha(null)}C.useImperativeHandle(t,function(){return{activeStartDate:me,drillDown:fn,drillUp:pn,onChange:vn,setActiveStartDate:dn,value:he,view:Z}},[me,fn,pn,vn,dn,he,Z]);function Za($){var ee=$?Go(Z,me):Ze(Z,me),ne=un?fn:vn,Ae={activeStartDate:ee,hover:Uc,locale:D,maxDate:T,minDate:S,onClick:ne,onMouseOver:pe?Hc:void 0,tileClassName:Fc,tileContent:Wc,tileDisabled:_c,value:he,valueType:lt};switch(Z){case"century":return A.createElement(vd,ur({formatYear:h,showNeighboringCentury:Rc},Ae));case"decade":return A.createElement(bd,ur({formatYear:h,showNeighboringDecade:Bc},Ae));case"year":return A.createElement(Sd,ur({formatMonth:d,formatMonthYear:p},Ae));case"month":return A.createElement(kd,ur({calendarType:i,formatDay:f,formatLongDate:s,formatShortWeekday:v,formatWeekday:m,onClickWeekNumber:ie,onMouseLeave:pe?gn:void 0,showFixedNumberOfWeeks:typeof it<"u"?it:Fe,showNeighboringMonth:jc,showWeekNumbers:Lc},Ae));default:throw new Error("Invalid view: ".concat(Z,"."))}}function qc(){return Sr?A.createElement(Xu,{activeStartDate:me,drillUp:pn,formatMonthYear:p,formatYear:h,locale:D,maxDate:T,minDate:S,navigationAriaLabel:j,navigationAriaLive:L,navigationLabel:V,next2AriaLabel:G,next2Label:re,nextAriaLabel:J,nextLabel:Q,prev2AriaLabel:ye,prev2Label:Ie,prevAriaLabel:Ee,prevLabel:Pe,setActiveStartDate:dn,showDoubleView:Fe,view:Z,views:Me}):null}var Yc=Array.isArray(he)?he:[he];return A.createElement("div",{className:jt(vt,pe&&Yc.length===1&&"".concat(vt,"--selectRange"),Fe&&"".concat(vt,"--doubleView"),o),ref:w},qc(),A.createElement("div",{className:"".concat(vt,"__viewContainer"),onBlur:pe?gn:void 0,onMouseLeave:pe?gn:void 0},Za(),Fe?Za(!0):null))}),mi=x.instanceOf(Date),hi=x.oneOfType([x.string,x.instanceOf(Date)]),bi=x.oneOfType([hi,pd(hi)]);al.propTypes={activeStartDate:mi,allowPartialRange:x.bool,calendarType:qo,className:Dt,defaultActiveStartDate:mi,defaultValue:bi,defaultView:St,formatDay:x.func,formatLongDate:x.func,formatMonth:x.func,formatMonthYear:x.func,formatShortWeekday:x.func,formatWeekday:x.func,formatYear:x.func,goToRangeStartOnSelect:x.bool,inputRef:ud,locale:x.string,maxDate:va,maxDetail:x.oneOf(pr),minDate:pa,minDetail:x.oneOf(pr),navigationAriaLabel:x.string,navigationAriaLive:x.oneOf(["off","polite","assertive"]),navigationLabel:x.func,next2AriaLabel:x.string,next2Label:x.node,nextAriaLabel:x.string,nextLabel:x.node,onActiveStartDateChange:x.func,onChange:x.func,onClickDay:x.func,onClickDecade:x.func,onClickMonth:x.func,onClickWeekNumber:x.func,onClickYear:x.func,onDrillDown:x.func,onDrillUp:x.func,onViewChange:x.func,prev2AriaLabel:x.string,prev2Label:x.node,prevAriaLabel:x.string,prevLabel:x.node,returnValue:x.oneOf(["start","end","range"]),selectRange:x.bool,showDoubleView:x.bool,showFixedNumberOfWeeks:x.bool,showNavigation:x.bool,showNeighboringCentury:x.bool,showNeighboringDecade:x.bool,showNeighboringMonth:x.bool,showWeekNumbers:x.bool,tileClassName:x.oneOfType([x.func,Dt]),tileContent:x.oneOfType([x.func,x.node]),tileDisabled:x.func,value:bi,view:St};const Wd=al,il=N(Wd)`
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
`,ol=N.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,ll=N.textarea`
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
`,_e=N(ta)`
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
`,cl=N.div`
  display: flex;
  gap: 4px;
  width: 200px;
  margin-bottom: 40px;
  align-items: center;
  cursor: pointer;
`,sl=N.p`
  color: var(--datepicker-dayname-color);
  margin: 0;
  margin-top: 14px;
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
`,ul=N.p`
  margin: 0;
  margin-top: 14px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: var(--datepicker-dayname-color);
  font-family: "Poppins", sans-serif;
`,dl=N.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Be=N.span`
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
`,Ge=N.label`
  position: relative;
  width: 14px;
  height: 14px;
  margin: 0;

  input[type="radio"]:checked + ${Be} {
    scale: 0.5;
  }
`,fl=N.input`
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
`,pl=N.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--primary-button-color);
`,vl=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  width: 28px;
  height: 28px;
  background-color: var(--shared-black-plus-button);
  margin-right: 8px;
  padding: 7px;
`,gl=N.svg`
  width: 28px;
  height: 28px;
  stroke: var(--add-card-icon-plus-color);
`,ml=N.button`
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
`,hl=N(yo)`
  position: absolute;
  padding-left: 8px;
  margin: 0;
  color: red;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`,It=N.div`
  line-height: 0;
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 0;
`,bl=N(yo)`
  position: absolute;
  bottom: -12px;
  padding-left: 8px;
  margin: 0;
  color: red;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`,yl=N.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: var(--primary-button-color);
`;Ft.setAppElement("#root");const _d=_t().shape({title:$e().required("Title is required"),description:$e().required("Description is required"),color:$e().required("Color selection is required"),deadline:xo().required("Deadline is required")});function Gd({isModalOpen:e,modalStateSwapper:r,cardId:t,cardTitle:n,cardColor:a,cardDescription:i,cardDeadline:o}){const[l,c]=C.useState(null),u=rr(),{isModalOpen:f,openModal:s,closeModal:d}=fr(),p={overlay:{backgroundColor:"rgb(21, 21, 21, 0.75)"},content:{width:"233px",height:"254px",margin:"auto",padding:0,border:"none",borderRadius:"8px"}},v=(b,{setSubmitting:y,resetForm:w})=>{const D={cardId:t,title:b.title,description:b.description,color:b.color,deadline:`${l||o}`};u(Xc(D)),y(!1),w(),r(),setTimeout(()=>{c(null)},1e3)},m=(b,y)=>["Su","Mo","Tu","We","Th","Fr","Sa"][y.getDay()],h=b=>{const y=new Date(b),w=y.getDate(),D=y.toLocaleString("en",{month:"long"});return`${y.toLocaleString("en",{weekday:"long"})}, ${D} ${w}`};return g.jsx(g.Fragment,{children:g.jsxs(Wt,{modalIsOpen:e,closeModal:r,title:"Edit card",maxWidth:"350px",children:[g.jsx(Gt,{initialValues:{title:`${n}`,description:`${i}`,color:`${a}`,deadline:`${o}`},validationSchema:_d,onSubmit:v,children:({values:b,handleChange:y,handleSubmit:w})=>g.jsxs(ol,{onSubmit:w,children:[g.jsxs(It,{children:[g.jsx(fl,{type:"text",name:"title",onChange:y,value:b.title,placeholder:"Title"}),g.jsx(hl,{name:"title",component:"div",className:"error"})]}),g.jsxs(It,{children:[g.jsx(ll,{name:"description",onChange:y,value:b.description,placeholder:"Description"}),g.jsx(bl,{name:"Description",component:"div",className:"error"})]}),g.jsx(ul,{children:"Label color"}),g.jsxs(dl,{children:[g.jsxs(Ge,{children:[g.jsx(_e,{type:"radio",name:"color",value:"blue",className:"blue",checked:b.color==="blue",onChange:y}),g.jsx(Be,{className:"blue"})]}),g.jsxs(Ge,{children:[g.jsx(_e,{type:"radio",name:"color",value:"pink",className:"pink",checked:b.color==="pink",onChange:y}),g.jsx(Be,{className:"pink"})]}),g.jsxs(Ge,{children:[g.jsx(_e,{type:"radio",name:"color",value:"green",className:"green",checked:b.color==="green",onChange:y}),g.jsx(Be,{className:"green"})]}),g.jsxs(Ge,{children:[g.jsx(_e,{type:"radio",name:"color",value:"gray",className:"gray",checked:b.color==="gray",onChange:y}),g.jsx(Be,{className:"gray"})]})]}),g.jsx(sl,{children:"Deadline"}),g.jsxs(cl,{children:[g.jsx(pl,{onClick:s,children:h(l===null?o:l)}),g.jsx(yl,{children:g.jsx("use",{href:ve+"#icon-chevron-down"})})]}),g.jsxs(ml,{type:"submit",children:[g.jsx(vl,{children:g.jsx(gl,{children:g.jsx("use",{href:ve+"#icon-plus"})})}),"Edit"]})]})}),g.jsx(Ft,{isOpen:f,onRequestClose:d,style:p,closeTimeoutMS:750,children:g.jsx(il,{formatShortWeekday:m,value:l,onChange:c,onClickDay:d,minDate:new Date,prevLabel:"<",nextLabel:">"})})]})})}var Hn={exports:{}};(function(e,r){(function(t,n){n(r,C,fo())})(void 0,function(t,n,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n),o=l(a);function l(O){return O&&O.__esModule?O:{default:O}}function c(O){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?c=function(P){return typeof P}:c=function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},c(O)}function u(O,E){if(O==null)return{};var P=f(O,E),S,k;if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(O);for(k=0;k<R.length;k++)S=R[k],!(E.indexOf(S)>=0)&&Object.prototype.propertyIsEnumerable.call(O,S)&&(P[S]=O[S])}return P}function f(O,E){if(O==null)return{};var P={},S=Object.keys(O),k,R;for(R=0;R<S.length;R++)k=S[R],!(E.indexOf(k)>=0)&&(P[k]=O[k]);return P}function s(O,E){if(!(O instanceof E))throw new TypeError("Cannot call a class as a function")}function d(O,E){for(var P=0;P<E.length;P++){var S=E[P];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(O,S.key,S)}}function p(O,E,P){return E&&d(O.prototype,E),P&&d(O,P),O}function v(O,E){return E&&(c(E)==="object"||typeof E=="function")?E:h(O)}function m(O){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(P){return P.__proto__||Object.getPrototypeOf(P)},m(O)}function h(O){if(O===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O}function b(O,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function");O.prototype=Object.create(E&&E.prototype,{constructor:{value:O,writable:!0,configurable:!0}}),E&&y(O,E)}function y(O,E){return y=Object.setPrototypeOf||function(S,k){return S.__proto__=k,S},y(O,E)}function w(O,E,P){return E in O?Object.defineProperty(O,E,{value:P,enumerable:!0,configurable:!0,writable:!0}):O[E]=P,O}var D=1e-4,M=function(E,P){return Math.abs(E-P)<D},T=function(O){b(E,O);function E(){var P,S;s(this,E);for(var k=arguments.length,R=new Array(k),j=0;j<k;j++)R[j]=arguments[j];return S=v(this,(P=m(E)).call.apply(P,[this].concat(R))),w(h(S),"onResize",function(){S.rafId&&window.cancelAnimationFrame(S.rafId),S.rafId=window.requestAnimationFrame(S.update.bind(h(S)))}),w(h(S),"onToggled",function(L){typeof S.props.onToggled=="function"&&setTimeout(function(){return S.props.onToggled(L)},0)}),w(h(S),"onTruncated",function(){typeof S.props.onTruncated=="function"&&setTimeout(function(){return S.props.onTruncated()},0)}),w(h(S),"onCalculated",function(){typeof S.props.onCalculated=="function"&&setTimeout(function(){return S.props.onCalculated()},0)}),w(h(S),"update",function(){var L=window.getComputedStyle(S.scope),V=[L["font-weight"],L["font-style"],L["font-size"],L["font-family"],L["letter-spacing"]].join(" ");S.canvas.font=V,S.forceUpdate()}),S}return p(E,[{key:"componentDidMount",value:function(){var S=document.createElement("canvas"),k=document.createDocumentFragment(),R=window.getComputedStyle(this.scope),j=[R["font-weight"],R["font-style"],R["font-size"],R["font-family"]].join(" ");k.appendChild(S),this.canvas=S.getContext("2d"),this.canvas.font=j,this.forceUpdate(),window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize),this.rafId&&window.cancelAnimationFrame(this.rafId)}},{key:"measureWidth",value:function(S){return this.canvas.measureText(S).width}},{key:"getRenderText",value:function(){var S=this.props;S.containerClassName,S.element;var k=S.line;S.onCalculated,S.onTruncated,S.onToggled;var R=S.text,j=S.textElement,L=S.textTruncateChild,V=S.truncateText,G=S.maxCalculateTimes,re=u(S,["containerClassName","element","line","onCalculated","onTruncated","onToggled","text","textElement","textTruncateChild","truncateText","maxCalculateTimes"]),J=this.scope.getBoundingClientRect().width;if(J===0)return null;var Q=this.measureWidth(R);if(J>Q||M(J,Q))return this.onToggled(!1),(0,n.createElement)(j,re,R);var _="";if(L&&typeof L.type=="string"){var X=L.type;(X.indexOf("span")>=0||X.indexOf("a")>=0)&&(_=L.props.children)}for(var W=1,ae=R.length,Y="",ie=0,te=0,oe=k,fe=0,se=!1,ye=!1,Ie=0,Ee=-1,Pe="",H=0;oe-- >0;){for(Pe=oe?"":V+(_?" "+_:"");W<=ae;)if(Y=R.substr(te,W),fe=this.measureWidth(Y+Pe),fe<J)ie=R.indexOf(" ",W+1),ie===-1?(W+=1,se=!1):(se=!0,W=ie);else{do{if(H++>=G)break;Y=R.substr(te,W),oe||W--,Y[Y.length-1]===" "&&(Y=R.substr(te,W-1)),se?(Ee=Y.lastIndexOf(" "),Ee>-1?(W=Ee,oe&&W++,Y=R.substr(te,W)):(W--,Y=R.substr(te,W))):(W--,Y=R.substr(te,W)),fe=this.measureWidth(Y+Pe)}while((fe>J||M(fe,J))&&Y.length>0);te+=W;break}if(W>=ae){te=ae;break}se&&!ye&&R.substr(Ie,W).indexOf(" ")===-1&&(ye=R.substr(Ie,W).indexOf(" ")===-1,oe--),Ie=W+1}return te===ae?(this.onToggled(!1),(0,n.createElement)(j,re,R)):(this.onTruncated(),this.onToggled(!0),i.default.createElement("span",re,(0,n.createElement)(j,re,R.substr(0,te)+V+" "),L))}},{key:"render",value:function(){var S=this,k=this.props,R=k.element,j=k.text,L=k.style,V=L===void 0?{}:L,G=k.containerClassName,re=k.line;k.onCalculated,k.onTruncated,k.onToggled;var J=k.textElement;k.textTruncateChild,k.truncateText,k.maxCalculateTimes;var Q=u(k,["element","text","style","containerClassName","line","onCalculated","onTruncated","onToggled","textElement","textTruncateChild","truncateText","maxCalculateTimes"]),_=V.fontWeight,X=V.fontStyle,W=V.fontSize,ae=V.fontFamily,Y=this.scope&&re?this.getRenderText():(0,n.createElement)(J,Q,j),ie={ref:function(oe){S.scope=oe},className:G,style:{overflow:"hidden",fontWeight:_,fontStyle:X,fontSize:W,fontFamily:ae}};return this.scope&&this.onCalculated(),(0,n.createElement)(R,ie,Y)}}]),E}(n.Component);w(T,"propTypes",{containerClassName:o.default.string,element:o.default.string,line:o.default.oneOfType([o.default.number,o.default.bool]),onCalculated:o.default.func,onTruncated:o.default.func,onToggled:o.default.func,text:o.default.string,textElement:o.default.elementType,textTruncateChild:o.default.node,truncateText:o.default.string,maxCalculateTimes:o.default.number}),w(T,"defaultProps",{element:"div",line:1,text:"",textElement:"span",truncateText:"…",maxCalculateTimes:10}),t.default=T,e.exports=t.default})})(Hn,Hn.exports);var $d=Hn.exports;const Vd=ea($d),zd=N.ul`
	overflow-y: auto;
	overflow-x: hidden;

	height: calc(100vh - 292px);

	margin-bottom: 14px;

	@media screen and (max-width: 1439px) {
		margin-right: -16px;
		height: calc(100vh - 370px);
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
`,Ud=N.li`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 154px;
	padding: 14px 20px;
	margin-bottom: 8px;
	border-radius: 8px;
	background-color: var(--primary-card-background-color);
	/* transition: var(--hover-paramas); */
	transition: transform 0.2s ease, opacity 0.2s ease;

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

	${({$isdragging:e})=>e&&`transform: rotate(4deg) translateY(-10px);
		opacity: 0.8;
    `};
`,Hd=N.h4`
	margin-bottom: 10px;
	font-weight: 600;
	font-size: 14px;
	/* letter-spacing: -0.02em; */
	color: var(--card-title-color);
`,qd=N.div`
	height: 50px;
	overflow: hidden;
`,Yd=N(Vd)`
	font-size: 12px;
	line-height: 1.33;
	/* letter-spacing: -0.02em; */
	color: var(--screens-page-tutorial-text-color);
	transition: var(--hover-paramas);
`,Kd=N.div`
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
`,yi=N.span`
	display: block;
	font-size: 8px;
	letter-spacing: -0.02em;
	color: var(--screens-page-tutorial-text-color);
	transition: var(--hover-paramas);
`,Jd=N.span`
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
`,Xd=N.span`
	font-size: 10px;
	letter-spacing: -0.02em;
	color: var(--card-params-value-text-color);
	transition: var(--hover-paramas);
`,Zd=N.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	margin-left: auto;
`,mt=N.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	border: none;
	background-color: transparent;
	cursor: pointer;
`,dr=N.svg`
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
`,Qd=N.div`
  height: auto;
  padding: 15px;
  border: 1px solid var(--shared-input-border-color);
  box-shadow: 0px 4px 16px var(--color-shadow);
  border-radius: 8px;
  background-color: var(--primary-background-color);
  z-index: 1000;
  min-width: 160px;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,ef=N.button`
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

    & ${dr} {
      stroke: var(--primary-button-color);
      scale: 1.1;
    }
  }
`,rf=({isOpen:e,onClose:r,onSelectStatus:t,cardId:n,owner:a,x:i,y:o})=>{const{column:l}=Lt(ra);if(!e)return null;const c=u=>{r(),t(u,n,a)};return g.jsx(Qd,{style:{position:"absolute",left:i-175,top:o-120},children:l===void 0?g.jsx(g.Fragment,{}):l.map(({_id:u,title:f})=>g.jsxs(ef,{onClick:()=>c(u),children:[f,g.jsx(dr,{children:g.jsx("use",{href:ve+"#icon-arrow-circle-broken-right"})})]},u))})};function qn(e,r){return qn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},qn(e,r)}function xl(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,qn(e,r)}function F(){return F=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},F.apply(this,arguments)}function Fr(e){"@babel/helpers - typeof";return Fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Fr(e)}function tf(e,r){if(Fr(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(Fr(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function nf(e){var r=tf(e,"string");return Fr(r)=="symbol"?r:String(r)}function af(e,r,t){return r=nf(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function xi(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function wi(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?xi(Object(t),!0).forEach(function(n){af(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):xi(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function be(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Di=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Sn=function(){return Math.random().toString(36).substring(7).split("").join(".")},Si={INIT:"@@redux/INIT"+Sn(),REPLACE:"@@redux/REPLACE"+Sn(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Sn()}};function of(e){if(typeof e!="object"||e===null)return!1;for(var r=e;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(e)===r}function wl(e,r,t){var n;if(typeof r=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(be(0));if(typeof r=="function"&&typeof t>"u"&&(t=r,r=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(be(1));return t(wl)(e,r)}if(typeof e!="function")throw new Error(be(2));var a=e,i=r,o=[],l=o,c=!1;function u(){l===o&&(l=o.slice())}function f(){if(c)throw new Error(be(3));return i}function s(m){if(typeof m!="function")throw new Error(be(4));if(c)throw new Error(be(5));var h=!0;return u(),l.push(m),function(){if(h){if(c)throw new Error(be(6));h=!1,u();var y=l.indexOf(m);l.splice(y,1),o=null}}}function d(m){if(!of(m))throw new Error(be(7));if(typeof m.type>"u")throw new Error(be(8));if(c)throw new Error(be(9));try{c=!0,i=a(i,m)}finally{c=!1}for(var h=o=l,b=0;b<h.length;b++){var y=h[b];y()}return m}function p(m){if(typeof m!="function")throw new Error(be(10));a=m,d({type:Si.REPLACE})}function v(){var m,h=s;return m={subscribe:function(y){if(typeof y!="object"||y===null)throw new Error(be(11));function w(){y.next&&y.next(f())}w();var D=h(w);return{unsubscribe:D}}},m[Di]=function(){return this},m}return d({type:Si.INIT}),n={dispatch:d,subscribe:s,getState:f,replaceReducer:p},n[Di]=v,n}function Ci(e,r){return function(){return r(e.apply(this,arguments))}}function Oi(e,r){if(typeof e=="function")return Ci(e,r);if(typeof e!="object"||e===null)throw new Error(be(16));var t={};for(var n in e){var a=e[n];typeof a=="function"&&(t[n]=Ci(a,r))}return t}function Dl(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.length===0?function(n){return n}:r.length===1?r[0]:r.reduce(function(n,a){return function(){return n(a.apply(void 0,arguments))}})}function lf(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){return function(){var a=n.apply(void 0,arguments),i=function(){throw new Error(be(15))},o={getState:a.getState,dispatch:function(){return i.apply(void 0,arguments)}},l=r.map(function(c){return c(o)});return i=Dl.apply(void 0,l)(a.dispatch),wi(wi({},a),{},{dispatch:i})}}}var Sl=A.createContext(null);function cf(e){e()}var Cl=cf,sf=function(r){return Cl=r},uf=function(){return Cl};function df(){var e=uf(),r=null,t=null;return{clear:function(){r=null,t=null},notify:function(){e(function(){for(var a=r;a;)a.callback(),a=a.next})},get:function(){for(var a=[],i=r;i;)a.push(i),i=i.next;return a},subscribe:function(a){var i=!0,o=t={callback:a,next:null,prev:t};return o.prev?o.prev.next=o:r=o,function(){!i||r===null||(i=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:r=o.next)}}}}var Ii={notify:function(){},get:function(){return[]}};function Ol(e,r){var t,n=Ii;function a(s){return c(),n.subscribe(s)}function i(){n.notify()}function o(){f.onStateChange&&f.onStateChange()}function l(){return!!t}function c(){t||(t=r?r.addNestedSub(o):e.subscribe(o),n=df())}function u(){t&&(t(),t=void 0,n.clear(),n=Ii)}var f={addNestedSub:a,notifyNestedSubs:i,handleChangeWrapper:o,isSubscribed:l,trySubscribe:c,tryUnsubscribe:u,getListeners:function(){return n}};return f}var Il=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?C.useLayoutEffect:C.useEffect;function ff(e){var r=e.store,t=e.context,n=e.children,a=C.useMemo(function(){var l=Ol(r);return{store:r,subscription:l}},[r]),i=C.useMemo(function(){return r.getState()},[r]);Il(function(){var l=a.subscription;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),i!==r.getState()&&l.notifyNestedSubs(),function(){l.tryUnsubscribe(),l.onStateChange=null}},[a,i]);var o=t||Sl;return A.createElement(o.Provider,{value:a},n)}function Et(e,r){if(e==null)return{};var t={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(r.indexOf(a)>=0)&&(t[a]=e[a]);return t}var El={exports:{}},U={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zt=60103,Qt=60106,Yr=60107,Kr=60108,Jr=60114,Xr=60109,Zr=60110,Qr=60112,et=60113,ba=60120,rt=60115,tt=60116,Pl=60121,Al=60122,Tl=60117,Nl=60129,kl=60131;if(typeof Symbol=="function"&&Symbol.for){var ue=Symbol.for;Zt=ue("react.element"),Qt=ue("react.portal"),Yr=ue("react.fragment"),Kr=ue("react.strict_mode"),Jr=ue("react.profiler"),Xr=ue("react.provider"),Zr=ue("react.context"),Qr=ue("react.forward_ref"),et=ue("react.suspense"),ba=ue("react.suspense_list"),rt=ue("react.memo"),tt=ue("react.lazy"),Pl=ue("react.block"),Al=ue("react.server.block"),Tl=ue("react.fundamental"),Nl=ue("react.debug_trace_mode"),kl=ue("react.legacy_hidden")}function ke(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case Zt:switch(e=e.type,e){case Yr:case Jr:case Kr:case et:case ba:return e;default:switch(e=e&&e.$$typeof,e){case Zr:case Qr:case tt:case rt:case Xr:return e;default:return r}}case Qt:return r}}}var pf=Xr,vf=Zt,gf=Qr,mf=Yr,hf=tt,bf=rt,yf=Qt,xf=Jr,wf=Kr,Df=et;U.ContextConsumer=Zr;U.ContextProvider=pf;U.Element=vf;U.ForwardRef=gf;U.Fragment=mf;U.Lazy=hf;U.Memo=bf;U.Portal=yf;U.Profiler=xf;U.StrictMode=wf;U.Suspense=Df;U.isAsyncMode=function(){return!1};U.isConcurrentMode=function(){return!1};U.isContextConsumer=function(e){return ke(e)===Zr};U.isContextProvider=function(e){return ke(e)===Xr};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zt};U.isForwardRef=function(e){return ke(e)===Qr};U.isFragment=function(e){return ke(e)===Yr};U.isLazy=function(e){return ke(e)===tt};U.isMemo=function(e){return ke(e)===rt};U.isPortal=function(e){return ke(e)===Qt};U.isProfiler=function(e){return ke(e)===Jr};U.isStrictMode=function(e){return ke(e)===Kr};U.isSuspense=function(e){return ke(e)===et};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Yr||e===Jr||e===Nl||e===Kr||e===et||e===ba||e===kl||typeof e=="object"&&e!==null&&(e.$$typeof===tt||e.$$typeof===rt||e.$$typeof===Xr||e.$$typeof===Zr||e.$$typeof===Qr||e.$$typeof===Tl||e.$$typeof===Pl||e[0]===Al)};U.typeOf=ke;El.exports=U;var Sf=El.exports,Cf=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],Of=["reactReduxForwardedRef"],If=[],Ef=[null,null];function Pf(e,r){var t=e[1];return[r.payload,t+1]}function Ei(e,r,t){Il(function(){return e.apply(void 0,r)},t)}function Af(e,r,t,n,a,i,o){e.current=n,r.current=a,t.current=!1,i.current&&(i.current=null,o())}function Tf(e,r,t,n,a,i,o,l,c,u){if(e){var f=!1,s=null,d=function(){if(!f){var m=r.getState(),h,b;try{h=n(m,a.current)}catch(y){b=y,s=y}b||(s=null),h===i.current?o.current||c():(i.current=h,l.current=h,o.current=!0,u({type:"STORE_UPDATED",payload:{error:b}}))}};t.onStateChange=d,t.trySubscribe(),d();var p=function(){if(f=!0,t.tryUnsubscribe(),t.onStateChange=null,s)throw s};return p}}var Nf=function(){return[null,0]};function kf(e,r){r===void 0&&(r={});var t=r,n=t.getDisplayName,a=n===void 0?function(w){return"ConnectAdvanced("+w+")"}:n,i=t.methodName,o=i===void 0?"connectAdvanced":i,l=t.renderCountProp,c=l===void 0?void 0:l,u=t.shouldHandleStateChanges,f=u===void 0?!0:u,s=t.storeKey,d=s===void 0?"store":s;t.withRef;var p=t.forwardRef,v=p===void 0?!1:p,m=t.context,h=m===void 0?Sl:m,b=Et(t,Cf),y=h;return function(D){var M=D.displayName||D.name||"Component",T=a(M),O=F({},b,{getDisplayName:a,methodName:o,renderCountProp:c,shouldHandleStateChanges:f,storeKey:d,displayName:T,wrappedComponentName:M,WrappedComponent:D}),E=b.pure;function P(L){return e(L.dispatch,O)}var S=E?C.useMemo:function(L){return L()};function k(L){var V=C.useMemo(function(){var We=L.reactReduxForwardedRef,Sr=Et(L,Of);return[L.context,We,Sr]},[L]),G=V[0],re=V[1],J=V[2],Q=C.useMemo(function(){return G&&G.Consumer&&Sf.isContextConsumer(A.createElement(G.Consumer,null))?G:y},[G,y]),_=C.useContext(Q),X=!!L.store&&!!L.store.getState&&!!L.store.dispatch;_&&_.store;var W=X?L.store:_.store,ae=C.useMemo(function(){return P(W)},[W]),Y=C.useMemo(function(){if(!f)return Ef;var We=Ol(W,X?null:_.subscription),Sr=We.notifyNestedSubs.bind(We);return[We,Sr]},[W,X,_]),ie=Y[0],te=Y[1],oe=C.useMemo(function(){return X?_:F({},_,{subscription:ie})},[X,_,ie]),fe=C.useReducer(Pf,If,Nf),se=fe[0],ye=se[0],Ie=fe[1];if(ye&&ye.error)throw ye.error;var Ee=C.useRef(),Pe=C.useRef(J),H=C.useRef(),Le=C.useRef(!1),pe=S(function(){return H.current&&J===Pe.current?H.current:ae(W.getState(),J)},[W,ye,J]);Ei(Af,[Pe,Ee,Le,J,pe,H,te]),Ei(Tf,[f,W,ie,ae,Pe,Ee,Le,H,te,Ie],[W,ie,ae]);var Fe=C.useMemo(function(){return A.createElement(D,F({},pe,{ref:re}))},[re,D,pe]),it=C.useMemo(function(){return f?A.createElement(Q.Provider,{value:oe},Fe):Fe},[Q,Fe,oe]);return it}var R=E?A.memo(k):k;if(R.WrappedComponent=D,R.displayName=k.displayName=T,v){var j=A.forwardRef(function(V,G){return A.createElement(R,F({},V,{reactReduxForwardedRef:G}))});return j.displayName=T,j.WrappedComponent=D,ei(j,D)}return ei(R,D)}}function Pi(e,r){return e===r?e!==0||r!==0||1/e===1/r:e!==e&&r!==r}function Cn(e,r){if(Pi(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(var a=0;a<t.length;a++)if(!Object.prototype.hasOwnProperty.call(r,t[a])||!Pi(e[t[a]],r[t[a]]))return!1;return!0}function Mf(e,r){var t={},n=function(o){var l=e[o];typeof l=="function"&&(t[o]=function(){return r(l.apply(void 0,arguments))})};for(var a in e)n(a);return t}function ya(e){return function(t,n){var a=e(t,n);function i(){return a}return i.dependsOnOwnProps=!1,i}}function Ai(e){return e.dependsOnOwnProps!==null&&e.dependsOnOwnProps!==void 0?!!e.dependsOnOwnProps:e.length!==1}function Ml(e,r){return function(n,a){a.displayName;var i=function(l,c){return i.dependsOnOwnProps?i.mapToProps(l,c):i.mapToProps(l)};return i.dependsOnOwnProps=!0,i.mapToProps=function(l,c){i.mapToProps=e,i.dependsOnOwnProps=Ai(e);var u=i(l,c);return typeof u=="function"&&(i.mapToProps=u,i.dependsOnOwnProps=Ai(u),u=i(l,c)),u},i}}function Rf(e){return typeof e=="function"?Ml(e):void 0}function Bf(e){return e?void 0:ya(function(r){return{dispatch:r}})}function jf(e){return e&&typeof e=="object"?ya(function(r){return Mf(e,r)}):void 0}const Lf=[Rf,Bf,jf];function Ff(e){return typeof e=="function"?Ml(e):void 0}function Wf(e){return e?void 0:ya(function(){return{}})}const _f=[Ff,Wf];function Gf(e,r,t){return F({},t,e,r)}function $f(e){return function(t,n){n.displayName;var a=n.pure,i=n.areMergedPropsEqual,o=!1,l;return function(u,f,s){var d=e(u,f,s);return o?(!a||!i(d,l))&&(l=d):(o=!0,l=d),l}}}function Vf(e){return typeof e=="function"?$f(e):void 0}function zf(e){return e?void 0:function(){return Gf}}const Uf=[Vf,zf];var Hf=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function qf(e,r,t,n){return function(i,o){return t(e(i,o),r(n,o),o)}}function Yf(e,r,t,n,a){var i=a.areStatesEqual,o=a.areOwnPropsEqual,l=a.areStatePropsEqual,c=!1,u,f,s,d,p;function v(w,D){return u=w,f=D,s=e(u,f),d=r(n,f),p=t(s,d,f),c=!0,p}function m(){return s=e(u,f),r.dependsOnOwnProps&&(d=r(n,f)),p=t(s,d,f),p}function h(){return e.dependsOnOwnProps&&(s=e(u,f)),r.dependsOnOwnProps&&(d=r(n,f)),p=t(s,d,f),p}function b(){var w=e(u,f),D=!l(w,s);return s=w,D&&(p=t(s,d,f)),p}function y(w,D){var M=!o(D,f),T=!i(w,u,D,f);return u=w,f=D,M&&T?m():M?h():T?b():p}return function(D,M){return c?y(D,M):v(D,M)}}function Kf(e,r){var t=r.initMapStateToProps,n=r.initMapDispatchToProps,a=r.initMergeProps,i=Et(r,Hf),o=t(e,i),l=n(e,i),c=a(e,i),u=i.pure?Yf:qf;return u(o,l,c,e,i)}var Jf=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function On(e,r,t){for(var n=r.length-1;n>=0;n--){var a=r[n](e);if(a)return a}return function(i,o){throw new Error("Invalid value of type "+typeof e+" for "+t+" argument when connecting component "+o.wrappedComponentName+".")}}function Xf(e,r){return e===r}function Zf(e){var r=e===void 0?{}:e,t=r.connectHOC,n=t===void 0?kf:t,a=r.mapStateToPropsFactories,i=a===void 0?_f:a,o=r.mapDispatchToPropsFactories,l=o===void 0?Lf:o,c=r.mergePropsFactories,u=c===void 0?Uf:c,f=r.selectorFactory,s=f===void 0?Kf:f;return function(p,v,m,h){h===void 0&&(h={});var b=h,y=b.pure,w=y===void 0?!0:y,D=b.areStatesEqual,M=D===void 0?Xf:D,T=b.areOwnPropsEqual,O=T===void 0?Cn:T,E=b.areStatePropsEqual,P=E===void 0?Cn:E,S=b.areMergedPropsEqual,k=S===void 0?Cn:S,R=Et(b,Jf),j=On(p,i,"mapStateToProps"),L=On(v,l,"mapDispatchToProps"),V=On(m,u,"mergeProps");return n(s,F({methodName:"connect",getDisplayName:function(re){return"Connect("+re+")"},shouldHandleStateChanges:!!p,initMapStateToProps:j,initMapDispatchToProps:L,initMergeProps:V,pure:w,areStatesEqual:M,areOwnPropsEqual:O,areStatePropsEqual:P,areMergedPropsEqual:k},R))}}const Rl=Zf();sf(Zc.unstable_batchedUpdates);function Qf(e,r){if(e.length!==r.length)return!1;for(var t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}function Bl(e,r){var t=C.useState(function(){return{inputs:r,result:e()}})[0],n=C.useRef(!0),a=C.useRef(t),i=n.current||!!(r&&a.current.inputs&&Qf(r,a.current.inputs)),o=i?a.current:{inputs:r,result:e()};return C.useEffect(function(){n.current=!1,a.current=o},[o]),o.result}function ep(e,r){return Bl(function(){return e},r)}var z=Bl,B=ep,rp="Invariant failed";function tp(e,r){if(!e)throw new Error(rp)}var Ne=function(r){var t=r.top,n=r.right,a=r.bottom,i=r.left,o=n-i,l=a-t,c={top:t,right:n,bottom:a,left:i,width:o,height:l,x:i,y:t,center:{x:(n+i)/2,y:(a+t)/2}};return c},xa=function(r,t){return{top:r.top-t.top,left:r.left-t.left,bottom:r.bottom+t.bottom,right:r.right+t.right}},Ti=function(r,t){return{top:r.top+t.top,left:r.left+t.left,bottom:r.bottom-t.bottom,right:r.right-t.right}},np=function(r,t){return{top:r.top+t.y,left:r.left+t.x,bottom:r.bottom+t.y,right:r.right+t.x}},In={top:0,right:0,bottom:0,left:0},wa=function(r){var t=r.borderBox,n=r.margin,a=n===void 0?In:n,i=r.border,o=i===void 0?In:i,l=r.padding,c=l===void 0?In:l,u=Ne(xa(t,a)),f=Ne(Ti(t,o)),s=Ne(Ti(f,c));return{marginBox:u,borderBox:Ne(t),paddingBox:f,contentBox:s,margin:a,border:o,padding:c}},Se=function(r){var t=r.slice(0,-2),n=r.slice(-2);if(n!=="px")return 0;var a=Number(t);return isNaN(a)&&tp(!1),a},ap=function(){return{x:window.pageXOffset,y:window.pageYOffset}},Pt=function(r,t){var n=r.borderBox,a=r.border,i=r.margin,o=r.padding,l=np(n,t);return wa({borderBox:l,border:a,margin:i,padding:o})},At=function(r,t){return t===void 0&&(t=ap()),Pt(r,t)},jl=function(r,t){var n={top:Se(t.marginTop),right:Se(t.marginRight),bottom:Se(t.marginBottom),left:Se(t.marginLeft)},a={top:Se(t.paddingTop),right:Se(t.paddingRight),bottom:Se(t.paddingBottom),left:Se(t.paddingLeft)},i={top:Se(t.borderTopWidth),right:Se(t.borderRightWidth),bottom:Se(t.borderBottomWidth),left:Se(t.borderLeftWidth)};return wa({borderBox:r,margin:n,padding:a,border:i})},Ll=function(r){var t=r.getBoundingClientRect(),n=window.getComputedStyle(r);return jl(t,n)},Ni=Number.isNaN||function(r){return typeof r=="number"&&r!==r};function ip(e,r){return!!(e===r||Ni(e)&&Ni(r))}function op(e,r){if(e.length!==r.length)return!1;for(var t=0;t<e.length;t++)if(!ip(e[t],r[t]))return!1;return!0}function le(e,r){r===void 0&&(r=op);var t,n=[],a,i=!1;function o(){for(var l=[],c=0;c<arguments.length;c++)l[c]=arguments[c];return i&&t===this&&r(l,n)||(a=e.apply(this,l),i=!0,t=this,n=l),a}return o}var Wr=function(r){var t=[],n=null,a=function(){for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];t=l,!n&&(n=requestAnimationFrame(function(){n=null,r.apply(void 0,t)}))};return a.cancel=function(){n&&(cancelAnimationFrame(n),n=null)},a};function Fl(e,r){}Fl.bind(null,"warn");Fl.bind(null,"error");function Ve(){}function lp(e,r){return F({},e,{},r)}function Ce(e,r,t){var n=r.map(function(a){var i=lp(t,a.options);return e.addEventListener(a.eventName,a.fn,i),function(){e.removeEventListener(a.eventName,a.fn,i)}});return function(){n.forEach(function(i){i()})}}var cp="Invariant failed";function Tt(e){this.message=e}Tt.prototype.toString=function(){return this.message};function I(e,r){if(!e)throw new Tt(cp)}var sp=function(e){xl(r,e);function r(){for(var n,a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return n=e.call.apply(e,[this].concat(i))||this,n.callbacks=null,n.unbind=Ve,n.onWindowError=function(l){var c=n.getCallbacks();c.isDragging()&&c.tryAbort();var u=l.error;u instanceof Tt&&l.preventDefault()},n.getCallbacks=function(){if(!n.callbacks)throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");return n.callbacks},n.setCallbacks=function(l){n.callbacks=l},n}var t=r.prototype;return t.componentDidMount=function(){this.unbind=Ce(window,[{eventName:"error",fn:this.onWindowError}])},t.componentDidCatch=function(a){if(a instanceof Tt){this.setState({});return}throw a},t.componentWillUnmount=function(){this.unbind()},t.render=function(){return this.props.children(this.setCallbacks)},r}(A.Component),up=`
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,Nt=function(r){return r+1},dp=function(r){return`
  You have lifted an item in position `+Nt(r.source.index)+`
`},Wl=function(r,t){var n=r.droppableId===t.droppableId,a=Nt(r.index),i=Nt(t.index);return n?`
      You have moved the item from position `+a+`
      to position `+i+`
    `:`
    You have moved the item from position `+a+`
    in list `+r.droppableId+`
    to list `+t.droppableId+`
    in position `+i+`
  `},_l=function(r,t,n){var a=t.droppableId===n.droppableId;return a?`
      The item `+r+`
      has been combined with `+n.draggableId:`
      The item `+r+`
      in list `+t.droppableId+`
      has been combined with `+n.draggableId+`
      in list `+n.droppableId+`
    `},fp=function(r){var t=r.destination;if(t)return Wl(r.source,t);var n=r.combine;return n?_l(r.draggableId,r.source,n):"You are over an area that cannot be dropped on"},ki=function(r){return`
  The item has returned to its starting position
  of `+Nt(r.index)+`
`},pp=function(r){if(r.reason==="CANCEL")return`
      Movement cancelled.
      `+ki(r.source)+`
    `;var t=r.destination,n=r.combine;return t?`
      You have dropped the item.
      `+Wl(r.source,t)+`
    `:n?`
      You have dropped the item.
      `+_l(r.draggableId,r.source,n)+`
    `:`
    The item has been dropped while not over a drop area.
    `+ki(r.source)+`
  `},wt={dragHandleUsageInstructions:up,onDragStart:dp,onDragUpdate:fp,onDragEnd:pp},ce={x:0,y:0},de=function(r,t){return{x:r.x+t.x,y:r.y+t.y}},xe=function(r,t){return{x:r.x-t.x,y:r.y-t.y}},ze=function(r,t){return r.x===t.x&&r.y===t.y},xr=function(r){return{x:r.x!==0?-r.x:0,y:r.y!==0?-r.y:0}},er=function(r,t,n){var a;return n===void 0&&(n=0),a={},a[r]=t,a[r==="x"?"y":"x"]=n,a},_r=function(r,t){return Math.sqrt(Math.pow(t.x-r.x,2)+Math.pow(t.y-r.y,2))},Mi=function(r,t){return Math.min.apply(Math,t.map(function(n){return _r(r,n)}))},Gl=function(r){return function(t){return{x:r(t.x),y:r(t.y)}}},vp=function(e,r){var t=Ne({top:Math.max(r.top,e.top),right:Math.min(r.right,e.right),bottom:Math.min(r.bottom,e.bottom),left:Math.max(r.left,e.left)});return t.width<=0||t.height<=0?null:t},nt=function(r,t){return{top:r.top+t.y,left:r.left+t.x,bottom:r.bottom+t.y,right:r.right+t.x}},Ri=function(r){return[{x:r.left,y:r.top},{x:r.right,y:r.top},{x:r.left,y:r.bottom},{x:r.right,y:r.bottom}]},gp={top:0,right:0,bottom:0,left:0},mp=function(r,t){return t?nt(r,t.scroll.diff.displacement):r},hp=function(r,t,n){if(n&&n.increasedBy){var a;return F({},r,(a={},a[t.end]=r[t.end]+n.increasedBy[t.line],a))}return r},bp=function(r,t){return t&&t.shouldClipSubject?vp(t.pageMarginBox,r):Ne(r)},vr=function(e){var r=e.page,t=e.withPlaceholder,n=e.axis,a=e.frame,i=mp(r.marginBox,a),o=hp(i,n,t),l=bp(o,a);return{page:r,withPlaceholder:t,active:l}},Da=function(e,r){e.frame||I(!1);var t=e.frame,n=xe(r,t.scroll.initial),a=xr(n),i=F({},t,{scroll:{initial:t.scroll.initial,current:r,diff:{value:n,displacement:a},max:t.scroll.max}}),o=vr({page:e.subject.page,withPlaceholder:e.subject.withPlaceholder,axis:e.axis,frame:i}),l=F({},e,{frame:i,subject:o});return l};function kt(e){return Object.values?Object.values(e):Object.keys(e).map(function(r){return e[r]})}function Sa(e,r){if(e.findIndex)return e.findIndex(r);for(var t=0;t<e.length;t++)if(r(e[t]))return t;return-1}function Ke(e,r){if(e.find)return e.find(r);var t=Sa(e,r);if(t!==-1)return e[t]}function $l(e){return Array.prototype.slice.call(e)}var Vl=le(function(e){return e.reduce(function(r,t){return r[t.descriptor.id]=t,r},{})}),zl=le(function(e){return e.reduce(function(r,t){return r[t.descriptor.id]=t,r},{})}),en=le(function(e){return kt(e)}),yp=le(function(e){return kt(e)}),wr=le(function(e,r){var t=yp(r).filter(function(n){return e===n.descriptor.droppableId}).sort(function(n,a){return n.descriptor.index-a.descriptor.index});return t});function Ca(e){return e.at&&e.at.type==="REORDER"?e.at.destination:null}function rn(e){return e.at&&e.at.type==="COMBINE"?e.at.combine:null}var tn=le(function(e,r){return r.filter(function(t){return t.descriptor.id!==e.descriptor.id})}),xp=function(e){var r=e.isMovingForward,t=e.draggable,n=e.destination,a=e.insideDestination,i=e.previousImpact;if(!n.isCombineEnabled)return null;var o=Ca(i);if(!o)return null;function l(m){var h={type:"COMBINE",combine:{draggableId:m,droppableId:n.descriptor.id}};return F({},i,{at:h})}var c=i.displaced.all,u=c.length?c[0]:null;if(r)return u?l(u):null;var f=tn(t,a);if(!u){if(!f.length)return null;var s=f[f.length-1];return l(s.descriptor.id)}var d=Sa(f,function(m){return m.descriptor.id===u});d===-1&&I(!1);var p=d-1;if(p<0)return null;var v=f[p];return l(v.descriptor.id)},Dr=function(e,r){return e.descriptor.droppableId===r.descriptor.id},Ul={point:ce,value:0},Gr={invisible:{},visible:{},all:[]},wp={displaced:Gr,displacedBy:Ul,at:null},Oe=function(e,r){return function(t){return e<=t&&t<=r}},Hl=function(e){var r=Oe(e.top,e.bottom),t=Oe(e.left,e.right);return function(n){var a=r(n.top)&&r(n.bottom)&&t(n.left)&&t(n.right);if(a)return!0;var i=r(n.top)||r(n.bottom),o=t(n.left)||t(n.right),l=i&&o;if(l)return!0;var c=n.top<e.top&&n.bottom>e.bottom,u=n.left<e.left&&n.right>e.right,f=c&&u;if(f)return!0;var s=c&&o||u&&i;return s}},Dp=function(e){var r=Oe(e.top,e.bottom),t=Oe(e.left,e.right);return function(n){var a=r(n.top)&&r(n.bottom)&&t(n.left)&&t(n.right);return a}},Oa={direction:"vertical",line:"y",crossAxisLine:"x",start:"top",end:"bottom",size:"height",crossAxisStart:"left",crossAxisEnd:"right",crossAxisSize:"width"},ql={direction:"horizontal",line:"x",crossAxisLine:"y",start:"left",end:"right",size:"width",crossAxisStart:"top",crossAxisEnd:"bottom",crossAxisSize:"height"},Sp=function(e){return function(r){var t=Oe(r.top,r.bottom),n=Oe(r.left,r.right);return function(a){return e===Oa?t(a.top)&&t(a.bottom):n(a.left)&&n(a.right)}}},Cp=function(r,t){var n=t.frame?t.frame.scroll.diff.displacement:ce;return nt(r,n)},Op=function(r,t,n){return t.subject.active?n(t.subject.active)(r):!1},Ip=function(r,t,n){return n(t)(r)},Ia=function(r){var t=r.target,n=r.destination,a=r.viewport,i=r.withDroppableDisplacement,o=r.isVisibleThroughFrameFn,l=i?Cp(t,n):t;return Op(l,n,o)&&Ip(l,a,o)},Ep=function(r){return Ia(F({},r,{isVisibleThroughFrameFn:Hl}))},Yl=function(r){return Ia(F({},r,{isVisibleThroughFrameFn:Dp}))},Pp=function(r){return Ia(F({},r,{isVisibleThroughFrameFn:Sp(r.destination.axis)}))},Ap=function(r,t,n){if(typeof n=="boolean")return n;if(!t)return!0;var a=t.invisible,i=t.visible;if(a[r])return!1;var o=i[r];return o?o.shouldAnimate:!0};function Tp(e,r){var t=e.page.marginBox,n={top:r.point.y,right:0,bottom:0,left:r.point.x};return Ne(xa(t,n))}function $r(e){var r=e.afterDragging,t=e.destination,n=e.displacedBy,a=e.viewport,i=e.forceShouldAnimate,o=e.last;return r.reduce(function(c,u){var f=Tp(u,n),s=u.descriptor.id;c.all.push(s);var d=Ep({target:f,destination:t,viewport:a,withDroppableDisplacement:!0});if(!d)return c.invisible[u.descriptor.id]=!0,c;var p=Ap(s,o,i),v={draggableId:s,shouldAnimate:p};return c.visible[s]=v,c},{all:[],visible:{},invisible:{}})}function Np(e,r){if(!e.length)return 0;var t=e[e.length-1].descriptor.index;return r.inHomeList?t:t+1}function Bi(e){var r=e.insideDestination,t=e.inHomeList,n=e.displacedBy,a=e.destination,i=Np(r,{inHomeList:t});return{displaced:Gr,displacedBy:n,at:{type:"REORDER",destination:{droppableId:a.descriptor.id,index:i}}}}function Mt(e){var r=e.draggable,t=e.insideDestination,n=e.destination,a=e.viewport,i=e.displacedBy,o=e.last,l=e.index,c=e.forceShouldAnimate,u=Dr(r,n);if(l==null)return Bi({insideDestination:t,inHomeList:u,displacedBy:i,destination:n});var f=Ke(t,function(m){return m.descriptor.index===l});if(!f)return Bi({insideDestination:t,inHomeList:u,displacedBy:i,destination:n});var s=tn(r,t),d=t.indexOf(f),p=s.slice(d),v=$r({afterDragging:p,destination:n,displacedBy:i,last:o,viewport:a.frame,forceShouldAnimate:c});return{displaced:v,displacedBy:i,at:{type:"REORDER",destination:{droppableId:n.descriptor.id,index:l}}}}function He(e,r){return!!r.effected[e]}var kp=function(e){var r=e.isMovingForward,t=e.destination,n=e.draggables,a=e.combine,i=e.afterCritical;if(!t.isCombineEnabled)return null;var o=a.draggableId,l=n[o],c=l.descriptor.index,u=He(o,i);return u?r?c:c-1:r?c+1:c},Mp=function(e){var r=e.isMovingForward,t=e.isInHomeList,n=e.insideDestination,a=e.location;if(!n.length)return null;var i=a.index,o=r?i+1:i-1,l=n[0].descriptor.index,c=n[n.length-1].descriptor.index,u=t?c:c+1;return o<l||o>u?null:o},Rp=function(e){var r=e.isMovingForward,t=e.isInHomeList,n=e.draggable,a=e.draggables,i=e.destination,o=e.insideDestination,l=e.previousImpact,c=e.viewport,u=e.afterCritical,f=l.at;if(f||I(!1),f.type==="REORDER"){var s=Mp({isMovingForward:r,isInHomeList:t,location:f.destination,insideDestination:o});return s==null?null:Mt({draggable:n,insideDestination:o,destination:i,viewport:c,last:l.displaced,displacedBy:l.displacedBy,index:s})}var d=kp({isMovingForward:r,destination:i,displaced:l.displaced,draggables:a,combine:f.combine,afterCritical:u});return d==null?null:Mt({draggable:n,insideDestination:o,destination:i,viewport:c,last:l.displaced,displacedBy:l.displacedBy,index:d})},Bp=function(e){var r=e.displaced,t=e.afterCritical,n=e.combineWith,a=e.displacedBy,i=!!(r.visible[n]||r.invisible[n]);return He(n,t)?i?ce:xr(a.point):i?a.point:ce},jp=function(e){var r=e.afterCritical,t=e.impact,n=e.draggables,a=rn(t);a||I(!1);var i=a.draggableId,o=n[i].page.borderBox.center,l=Bp({displaced:t.displaced,afterCritical:r,combineWith:i,displacedBy:t.displacedBy});return de(o,l)},Kl=function(r,t){return t.margin[r.start]+t.borderBox[r.size]/2},Lp=function(r,t){return t.margin[r.end]+t.borderBox[r.size]/2},Ea=function(r,t,n){return t[r.crossAxisStart]+n.margin[r.crossAxisStart]+n.borderBox[r.crossAxisSize]/2},ji=function(r){var t=r.axis,n=r.moveRelativeTo,a=r.isMoving;return er(t.line,n.marginBox[t.end]+Kl(t,a),Ea(t,n.marginBox,a))},Li=function(r){var t=r.axis,n=r.moveRelativeTo,a=r.isMoving;return er(t.line,n.marginBox[t.start]-Lp(t,a),Ea(t,n.marginBox,a))},Fp=function(r){var t=r.axis,n=r.moveInto,a=r.isMoving;return er(t.line,n.contentBox[t.start]+Kl(t,a),Ea(t,n.contentBox,a))},Wp=function(e){var r=e.impact,t=e.draggable,n=e.draggables,a=e.droppable,i=e.afterCritical,o=wr(a.descriptor.id,n),l=t.page,c=a.axis;if(!o.length)return Fp({axis:c,moveInto:a.page,isMoving:l});var u=r.displaced,f=r.displacedBy,s=u.all[0];if(s){var d=n[s];if(He(s,i))return Li({axis:c,moveRelativeTo:d.page,isMoving:l});var p=Pt(d.page,f.point);return Li({axis:c,moveRelativeTo:p,isMoving:l})}var v=o[o.length-1];if(v.descriptor.id===t.descriptor.id)return l.borderBox.center;if(He(v.descriptor.id,i)){var m=Pt(v.page,xr(i.displacedBy.point));return ji({axis:c,moveRelativeTo:m,isMoving:l})}return ji({axis:c,moveRelativeTo:v.page,isMoving:l})},Yn=function(e,r){var t=e.frame;return t?de(r,t.scroll.diff.displacement):r},_p=function(r){var t=r.impact,n=r.draggable,a=r.droppable,i=r.draggables,o=r.afterCritical,l=n.page.borderBox.center,c=t.at;return!a||!c?l:c.type==="REORDER"?Wp({impact:t,draggable:n,draggables:i,droppable:a,afterCritical:o}):jp({impact:t,draggables:i,afterCritical:o})},nn=function(e){var r=_p(e),t=e.droppable,n=t?Yn(t,r):r;return n},Jl=function(e,r){var t=xe(r,e.scroll.initial),n=xr(t),a=Ne({top:r.y,bottom:r.y+e.frame.height,left:r.x,right:r.x+e.frame.width}),i={frame:a,scroll:{initial:e.scroll.initial,max:e.scroll.max,current:r,diff:{value:t,displacement:n}}};return i};function Fi(e,r){return e.map(function(t){return r[t]})}function Gp(e,r){for(var t=0;t<r.length;t++){var n=r[t].visible[e];if(n)return n}return null}var $p=function(e){var r=e.impact,t=e.viewport,n=e.destination,a=e.draggables,i=e.maxScrollChange,o=Jl(t,de(t.scroll.current,i)),l=n.frame?Da(n,de(n.frame.scroll.current,i)):n,c=r.displaced,u=$r({afterDragging:Fi(c.all,a),destination:n,displacedBy:r.displacedBy,viewport:o.frame,last:c,forceShouldAnimate:!1}),f=$r({afterDragging:Fi(c.all,a),destination:l,displacedBy:r.displacedBy,viewport:t.frame,last:c,forceShouldAnimate:!1}),s={},d={},p=[c,u,f];c.all.forEach(function(m){var h=Gp(m,p);if(h){d[m]=h;return}s[m]=!0});var v=F({},r,{displaced:{all:c.all,invisible:s,visible:d}});return v},Vp=function(e,r){return de(e.scroll.diff.displacement,r)},Pa=function(e){var r=e.pageBorderBoxCenter,t=e.draggable,n=e.viewport,a=Vp(n,r),i=xe(a,t.page.borderBox.center);return de(t.client.borderBox.center,i)},Xl=function(e){var r=e.draggable,t=e.destination,n=e.newPageBorderBoxCenter,a=e.viewport,i=e.withDroppableDisplacement,o=e.onlyOnMainAxis,l=o===void 0?!1:o,c=xe(n,r.page.borderBox.center),u=nt(r.page.borderBox,c),f={target:u,destination:t,withDroppableDisplacement:i,viewport:a};return l?Pp(f):Yl(f)},zp=function(e){var r=e.isMovingForward,t=e.draggable,n=e.destination,a=e.draggables,i=e.previousImpact,o=e.viewport,l=e.previousPageBorderBoxCenter,c=e.previousClientSelection,u=e.afterCritical;if(!n.isEnabled)return null;var f=wr(n.descriptor.id,a),s=Dr(t,n),d=xp({isMovingForward:r,draggable:t,destination:n,insideDestination:f,previousImpact:i})||Rp({isMovingForward:r,isInHomeList:s,draggable:t,draggables:a,destination:n,insideDestination:f,previousImpact:i,viewport:o,afterCritical:u});if(!d)return null;var p=nn({impact:d,draggable:t,droppable:n,draggables:a,afterCritical:u}),v=Xl({draggable:t,destination:n,newPageBorderBoxCenter:p,viewport:o.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});if(v){var m=Pa({pageBorderBoxCenter:p,draggable:t,viewport:o});return{clientSelection:m,impact:d,scrollJumpRequest:null}}var h=xe(p,l),b=$p({impact:d,viewport:o,destination:n,draggables:a,maxScrollChange:h});return{clientSelection:c,impact:b,scrollJumpRequest:h}},ge=function(r){var t=r.subject.active;return t||I(!1),t},Up=function(e){var r=e.isMovingForward,t=e.pageBorderBoxCenter,n=e.source,a=e.droppables,i=e.viewport,o=n.subject.active;if(!o)return null;var l=n.axis,c=Oe(o[l.start],o[l.end]),u=en(a).filter(function(s){return s!==n}).filter(function(s){return s.isEnabled}).filter(function(s){return!!s.subject.active}).filter(function(s){return Hl(i.frame)(ge(s))}).filter(function(s){var d=ge(s);return r?o[l.crossAxisEnd]<d[l.crossAxisEnd]:d[l.crossAxisStart]<o[l.crossAxisStart]}).filter(function(s){var d=ge(s),p=Oe(d[l.start],d[l.end]);return c(d[l.start])||c(d[l.end])||p(o[l.start])||p(o[l.end])}).sort(function(s,d){var p=ge(s)[l.crossAxisStart],v=ge(d)[l.crossAxisStart];return r?p-v:v-p}).filter(function(s,d,p){return ge(s)[l.crossAxisStart]===ge(p[0])[l.crossAxisStart]});if(!u.length)return null;if(u.length===1)return u[0];var f=u.filter(function(s){var d=Oe(ge(s)[l.start],ge(s)[l.end]);return d(t[l.line])});return f.length===1?f[0]:f.length>1?f.sort(function(s,d){return ge(s)[l.start]-ge(d)[l.start]})[0]:u.sort(function(s,d){var p=Mi(t,Ri(ge(s))),v=Mi(t,Ri(ge(d)));return p!==v?p-v:ge(s)[l.start]-ge(d)[l.start]})[0]},Wi=function(r,t){var n=r.page.borderBox.center;return He(r.descriptor.id,t)?xe(n,t.displacedBy.point):n},Hp=function(r,t){var n=r.page.borderBox;return He(r.descriptor.id,t)?nt(n,xr(t.displacedBy.point)):n},qp=function(e){var r=e.pageBorderBoxCenter,t=e.viewport,n=e.destination,a=e.insideDestination,i=e.afterCritical,o=a.filter(function(l){return Yl({target:Hp(l,i),destination:n,viewport:t.frame,withDroppableDisplacement:!0})}).sort(function(l,c){var u=_r(r,Yn(n,Wi(l,i))),f=_r(r,Yn(n,Wi(c,i)));return u<f?-1:f<u?1:l.descriptor.index-c.descriptor.index});return o[0]||null},at=le(function(r,t){var n=t[r.line];return{value:n,point:er(r.line,n)}}),Yp=function(r,t,n){var a=r.axis;if(r.descriptor.mode==="virtual")return er(a.line,t[a.line]);var i=r.subject.page.contentBox[a.size],o=wr(r.descriptor.id,n),l=o.reduce(function(f,s){return f+s.client.marginBox[a.size]},0),c=l+t[a.line],u=c-i;return u<=0?null:er(a.line,u)},Zl=function(r,t){return F({},r,{scroll:F({},r.scroll,{max:t})})},Ql=function(r,t,n){var a=r.frame;Dr(t,r)&&I(!1),r.subject.withPlaceholder&&I(!1);var i=at(r.axis,t.displaceBy).point,o=Yp(r,i,n),l={placeholderSize:i,increasedBy:o,oldFrameMaxScroll:r.frame?r.frame.scroll.max:null};if(!a){var c=vr({page:r.subject.page,withPlaceholder:l,axis:r.axis,frame:r.frame});return F({},r,{subject:c})}var u=o?de(a.scroll.max,o):a.scroll.max,f=Zl(a,u),s=vr({page:r.subject.page,withPlaceholder:l,axis:r.axis,frame:f});return F({},r,{subject:s,frame:f})},Kp=function(r){var t=r.subject.withPlaceholder;t||I(!1);var n=r.frame;if(!n){var a=vr({page:r.subject.page,axis:r.axis,frame:null,withPlaceholder:null});return F({},r,{subject:a})}var i=t.oldFrameMaxScroll;i||I(!1);var o=Zl(n,i),l=vr({page:r.subject.page,axis:r.axis,frame:o,withPlaceholder:null});return F({},r,{subject:l,frame:o})},Jp=function(e){var r=e.previousPageBorderBoxCenter,t=e.moveRelativeTo,n=e.insideDestination,a=e.draggable,i=e.draggables,o=e.destination,l=e.viewport,c=e.afterCritical;if(!t){if(n.length)return null;var u={displaced:Gr,displacedBy:Ul,at:{type:"REORDER",destination:{droppableId:o.descriptor.id,index:0}}},f=nn({impact:u,draggable:a,droppable:o,draggables:i,afterCritical:c}),s=Dr(a,o)?o:Ql(o,a,i),d=Xl({draggable:a,destination:s,newPageBorderBoxCenter:f,viewport:l.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});return d?u:null}var p=r[o.axis.line]<=t.page.borderBox.center[o.axis.line],v=function(){var h=t.descriptor.index;return t.descriptor.id===a.descriptor.id||p?h:h+1}(),m=at(o.axis,a.displaceBy);return Mt({draggable:a,insideDestination:n,destination:o,viewport:l,displacedBy:m,last:Gr,index:v})},Xp=function(e){var r=e.isMovingForward,t=e.previousPageBorderBoxCenter,n=e.draggable,a=e.isOver,i=e.draggables,o=e.droppables,l=e.viewport,c=e.afterCritical,u=Up({isMovingForward:r,pageBorderBoxCenter:t,source:a,droppables:o,viewport:l});if(!u)return null;var f=wr(u.descriptor.id,i),s=qp({pageBorderBoxCenter:t,viewport:l,destination:u,insideDestination:f,afterCritical:c}),d=Jp({previousPageBorderBoxCenter:t,destination:u,draggable:n,draggables:i,moveRelativeTo:s,insideDestination:f,viewport:l,afterCritical:c});if(!d)return null;var p=nn({impact:d,draggable:n,droppable:u,draggables:i,afterCritical:c}),v=Pa({pageBorderBoxCenter:p,draggable:n,viewport:l});return{clientSelection:v,impact:d,scrollJumpRequest:null}},we=function(e){var r=e.at;return r?r.type==="REORDER"?r.destination.droppableId:r.combine.droppableId:null},Zp=function(r,t){var n=we(r);return n?t[n]:null},Qp=function(e){var r=e.state,t=e.type,n=Zp(r.impact,r.dimensions.droppables),a=!!n,i=r.dimensions.droppables[r.critical.droppable.id],o=n||i,l=o.axis.direction,c=l==="vertical"&&(t==="MOVE_UP"||t==="MOVE_DOWN")||l==="horizontal"&&(t==="MOVE_LEFT"||t==="MOVE_RIGHT");if(c&&!a)return null;var u=t==="MOVE_DOWN"||t==="MOVE_RIGHT",f=r.dimensions.draggables[r.critical.draggable.id],s=r.current.page.borderBoxCenter,d=r.dimensions,p=d.draggables,v=d.droppables;return c?zp({isMovingForward:u,previousPageBorderBoxCenter:s,draggable:f,destination:o,draggables:p,viewport:r.viewport,previousClientSelection:r.current.client.selection,previousImpact:r.impact,afterCritical:r.afterCritical}):Xp({isMovingForward:u,previousPageBorderBoxCenter:s,draggable:f,isOver:o,draggables:p,droppables:v,viewport:r.viewport,afterCritical:r.afterCritical})};function Xe(e){return e.phase==="DRAGGING"||e.phase==="COLLECTING"}function ec(e){var r=Oe(e.top,e.bottom),t=Oe(e.left,e.right);return function(a){return r(a.y)&&t(a.x)}}function ev(e,r){return e.left<r.right&&e.right>r.left&&e.top<r.bottom&&e.bottom>r.top}function rv(e){var r=e.pageBorderBox,t=e.draggable,n=e.candidates,a=t.page.borderBox.center,i=n.map(function(o){var l=o.axis,c=er(o.axis.line,r.center[l.line],o.page.borderBox.center[l.crossAxisLine]);return{id:o.descriptor.id,distance:_r(a,c)}}).sort(function(o,l){return l.distance-o.distance});return i[0]?i[0].id:null}function tv(e){var r=e.pageBorderBox,t=e.draggable,n=e.droppables,a=en(n).filter(function(i){if(!i.isEnabled)return!1;var o=i.subject.active;if(!o||!ev(r,o))return!1;if(ec(o)(r.center))return!0;var l=i.axis,c=o.center[l.crossAxisLine],u=r[l.crossAxisStart],f=r[l.crossAxisEnd],s=Oe(o[l.crossAxisStart],o[l.crossAxisEnd]),d=s(u),p=s(f);return!d&&!p?!0:d?u<c:f>c});return a.length?a.length===1?a[0].descriptor.id:rv({pageBorderBox:r,draggable:t,candidates:a}):null}var rc=function(r,t){return Ne(nt(r,t))},nv=function(e,r){var t=e.frame;return t?rc(r,t.scroll.diff.value):r};function tc(e){var r=e.displaced,t=e.id;return!!(r.visible[t]||r.invisible[t])}function av(e){var r=e.draggable,t=e.closest,n=e.inHomeList;return t?n&&t.descriptor.index>r.descriptor.index?t.descriptor.index-1:t.descriptor.index:null}var iv=function(e){var r=e.pageBorderBoxWithDroppableScroll,t=e.draggable,n=e.destination,a=e.insideDestination,i=e.last,o=e.viewport,l=e.afterCritical,c=n.axis,u=at(n.axis,t.displaceBy),f=u.value,s=r[c.start],d=r[c.end],p=tn(t,a),v=Ke(p,function(h){var b=h.descriptor.id,y=h.page.borderBox.center[c.line],w=He(b,l),D=tc({displaced:i,id:b});return w?D?d<=y:s<y-f:D?d<=y+f:s<y}),m=av({draggable:t,closest:v,inHomeList:Dr(t,n)});return Mt({draggable:t,insideDestination:a,destination:n,viewport:o,last:i,displacedBy:u,index:m})},ov=4,lv=function(e){var r=e.draggable,t=e.pageBorderBoxWithDroppableScroll,n=e.previousImpact,a=e.destination,i=e.insideDestination,o=e.afterCritical;if(!a.isCombineEnabled)return null;var l=a.axis,c=at(a.axis,r.displaceBy),u=c.value,f=t[l.start],s=t[l.end],d=tn(r,i),p=Ke(d,function(m){var h=m.descriptor.id,b=m.page.borderBox,y=b[l.size],w=y/ov,D=He(h,o),M=tc({displaced:n.displaced,id:h});return D?M?s>b[l.start]+w&&s<b[l.end]-w:f>b[l.start]-u+w&&f<b[l.end]-u-w:M?s>b[l.start]+u+w&&s<b[l.end]+u-w:f>b[l.start]+w&&f<b[l.end]-w});if(!p)return null;var v={displacedBy:c,displaced:n.displaced,at:{type:"COMBINE",combine:{draggableId:p.descriptor.id,droppableId:a.descriptor.id}}};return v},nc=function(e){var r=e.pageOffset,t=e.draggable,n=e.draggables,a=e.droppables,i=e.previousImpact,o=e.viewport,l=e.afterCritical,c=rc(t.page.borderBox,r),u=tv({pageBorderBox:c,draggable:t,droppables:a});if(!u)return wp;var f=a[u],s=wr(f.descriptor.id,n),d=nv(f,c);return lv({pageBorderBoxWithDroppableScroll:d,draggable:t,previousImpact:i,destination:f,insideDestination:s,afterCritical:l})||iv({pageBorderBoxWithDroppableScroll:d,draggable:t,destination:f,insideDestination:s,last:i.displaced,viewport:o,afterCritical:l})},Aa=function(e,r){var t;return F({},e,(t={},t[r.descriptor.id]=r,t))},cv=function(r){var t=r.previousImpact,n=r.impact,a=r.droppables,i=we(t),o=we(n);if(!i||i===o)return a;var l=a[i];if(!l.subject.withPlaceholder)return a;var c=Kp(l);return Aa(a,c)},sv=function(e){var r=e.draggable,t=e.draggables,n=e.droppables,a=e.previousImpact,i=e.impact,o=cv({previousImpact:a,impact:i,droppables:n}),l=we(i);if(!l)return o;var c=n[l];if(Dr(r,c)||c.subject.withPlaceholder)return o;var u=Ql(c,r,t);return Aa(o,u)},Tr=function(e){var r=e.state,t=e.clientSelection,n=e.dimensions,a=e.viewport,i=e.impact,o=e.scrollJumpRequest,l=a||r.viewport,c=n||r.dimensions,u=t||r.current.client.selection,f=xe(u,r.initial.client.selection),s={offset:f,selection:u,borderBoxCenter:de(r.initial.client.borderBoxCenter,f)},d={selection:de(s.selection,l.scroll.current),borderBoxCenter:de(s.borderBoxCenter,l.scroll.current),offset:de(s.offset,l.scroll.diff.value)},p={client:s,page:d};if(r.phase==="COLLECTING")return F({phase:"COLLECTING"},r,{dimensions:c,viewport:l,current:p});var v=c.draggables[r.critical.draggable.id],m=i||nc({pageOffset:d.offset,draggable:v,draggables:c.draggables,droppables:c.droppables,previousImpact:r.impact,viewport:l,afterCritical:r.afterCritical}),h=sv({draggable:v,impact:m,previousImpact:r.impact,draggables:c.draggables,droppables:c.droppables}),b=F({},r,{current:p,dimensions:{draggables:c.draggables,droppables:h},impact:m,viewport:l,scrollJumpRequest:o||null,forceShouldAnimate:o?!1:null});return b};function uv(e,r){return e.map(function(t){return r[t]})}var ac=function(e){var r=e.impact,t=e.viewport,n=e.draggables,a=e.destination,i=e.forceShouldAnimate,o=r.displaced,l=uv(o.all,n),c=$r({afterDragging:l,destination:a,displacedBy:r.displacedBy,viewport:t.frame,forceShouldAnimate:i,last:o});return F({},r,{displaced:c})},ic=function(e){var r=e.impact,t=e.draggable,n=e.droppable,a=e.draggables,i=e.viewport,o=e.afterCritical,l=nn({impact:r,draggable:t,draggables:a,droppable:n,afterCritical:o});return Pa({pageBorderBoxCenter:l,draggable:t,viewport:i})},oc=function(e){var r=e.state,t=e.dimensions,n=e.viewport;r.movementMode!=="SNAP"&&I(!1);var a=r.impact,i=n||r.viewport,o=t||r.dimensions,l=o.draggables,c=o.droppables,u=l[r.critical.draggable.id],f=we(a);f||I(!1);var s=c[f],d=ac({impact:a,viewport:i,destination:s,draggables:l}),p=ic({impact:d,draggable:u,droppable:s,draggables:l,viewport:i,afterCritical:r.afterCritical});return Tr({impact:d,clientSelection:p,state:r,dimensions:o,viewport:i})},dv=function(e){return{index:e.index,droppableId:e.droppableId}},lc=function(e){var r=e.draggable,t=e.home,n=e.draggables,a=e.viewport,i=at(t.axis,r.displaceBy),o=wr(t.descriptor.id,n),l=o.indexOf(r);l===-1&&I(!1);var c=o.slice(l+1),u=c.reduce(function(p,v){return p[v.descriptor.id]=!0,p},{}),f={inVirtualList:t.descriptor.mode==="virtual",displacedBy:i,effected:u},s=$r({afterDragging:c,destination:t,displacedBy:i,last:null,viewport:a.frame,forceShouldAnimate:!1}),d={displaced:s,displacedBy:i,at:{type:"REORDER",destination:dv(r.descriptor)}};return{impact:d,afterCritical:f}},fv=function(e,r){return{draggables:e.draggables,droppables:Aa(e.droppables,r)}},pv=function(e){var r=e.draggable,t=e.offset,n=e.initialWindowScroll,a=Pt(r.client,t),i=At(a,n),o=F({},r,{placeholder:F({},r.placeholder,{client:a}),client:a,page:i});return o},vv=function(e){var r=e.frame;return r||I(!1),r},gv=function(e){var r=e.additions,t=e.updatedDroppables,n=e.viewport,a=n.scroll.diff.value;return r.map(function(i){var o=i.descriptor.droppableId,l=t[o],c=vv(l),u=c.scroll.diff.value,f=de(a,u),s=pv({draggable:i,offset:f,initialWindowScroll:n.scroll.initial});return s})},mv=function(e){var r=e.state,t=e.published,n=t.modified.map(function(w){var D=r.dimensions.droppables[w.droppableId],M=Da(D,w.scroll);return M}),a=F({},r.dimensions.droppables,{},Vl(n)),i=zl(gv({additions:t.additions,updatedDroppables:a,viewport:r.viewport})),o=F({},r.dimensions.draggables,{},i);t.removals.forEach(function(w){delete o[w]});var l={droppables:a,draggables:o},c=we(r.impact),u=c?l.droppables[c]:null,f=l.draggables[r.critical.draggable.id],s=l.droppables[r.critical.droppable.id],d=lc({draggable:f,home:s,draggables:o,viewport:r.viewport}),p=d.impact,v=d.afterCritical,m=u&&u.isCombineEnabled?r.impact:p,h=nc({pageOffset:r.current.page.offset,draggable:l.draggables[r.critical.draggable.id],draggables:l.draggables,droppables:l.droppables,previousImpact:m,viewport:r.viewport,afterCritical:v}),b=F({phase:"DRAGGING"},r,{phase:"DRAGGING",impact:h,onLiftImpact:p,dimensions:l,afterCritical:v,forceShouldAnimate:!1});if(r.phase==="COLLECTING")return b;var y=F({phase:"DROP_PENDING"},b,{phase:"DROP_PENDING",reason:r.reason,isWaiting:!1});return y},Kn=function(r){return r.movementMode==="SNAP"},En=function(r,t,n){var a=fv(r.dimensions,t);return!Kn(r)||n?Tr({state:r,dimensions:a}):oc({state:r,dimensions:a})};function Pn(e){return e.isDragging&&e.movementMode==="SNAP"?F({phase:"DRAGGING"},e,{scrollJumpRequest:null}):e}var _i={phase:"IDLE",completed:null,shouldFlush:!1},hv=function(e,r){if(e===void 0&&(e=_i),r.type==="FLUSH")return F({},_i,{shouldFlush:!0});if(r.type==="INITIAL_PUBLISH"){e.phase!=="IDLE"&&I(!1);var t=r.payload,n=t.critical,a=t.clientSelection,i=t.viewport,o=t.dimensions,l=t.movementMode,c=o.draggables[n.draggable.id],u=o.droppables[n.droppable.id],f={selection:a,borderBoxCenter:c.client.borderBox.center,offset:ce},s={client:f,page:{selection:de(f.selection,i.scroll.initial),borderBoxCenter:de(f.selection,i.scroll.initial),offset:de(f.selection,i.scroll.diff.value)}},d=en(o.droppables).every(function(Ie){return!Ie.isFixedOnPage}),p=lc({draggable:c,home:u,draggables:o.draggables,viewport:i}),v=p.impact,m=p.afterCritical,h={phase:"DRAGGING",isDragging:!0,critical:n,movementMode:l,dimensions:o,initial:s,current:s,isWindowScrollAllowed:d,impact:v,afterCritical:m,onLiftImpact:v,viewport:i,scrollJumpRequest:null,forceShouldAnimate:null};return h}if(r.type==="COLLECTION_STARTING"){if(e.phase==="COLLECTING"||e.phase==="DROP_PENDING")return e;e.phase!=="DRAGGING"&&I(!1);var b=F({phase:"COLLECTING"},e,{phase:"COLLECTING"});return b}if(r.type==="PUBLISH_WHILE_DRAGGING")return e.phase==="COLLECTING"||e.phase==="DROP_PENDING"||I(!1),mv({state:e,published:r.payload});if(r.type==="MOVE"){if(e.phase==="DROP_PENDING")return e;Xe(e)||I(!1);var y=r.payload.client;return ze(y,e.current.client.selection)?e:Tr({state:e,clientSelection:y,impact:Kn(e)?e.impact:null})}if(r.type==="UPDATE_DROPPABLE_SCROLL"){if(e.phase==="DROP_PENDING"||e.phase==="COLLECTING")return Pn(e);Xe(e)||I(!1);var w=r.payload,D=w.id,M=w.newScroll,T=e.dimensions.droppables[D];if(!T)return e;var O=Da(T,M);return En(e,O,!1)}if(r.type==="UPDATE_DROPPABLE_IS_ENABLED"){if(e.phase==="DROP_PENDING")return e;Xe(e)||I(!1);var E=r.payload,P=E.id,S=E.isEnabled,k=e.dimensions.droppables[P];k||I(!1),k.isEnabled===S&&I(!1);var R=F({},k,{isEnabled:S});return En(e,R,!0)}if(r.type==="UPDATE_DROPPABLE_IS_COMBINE_ENABLED"){if(e.phase==="DROP_PENDING")return e;Xe(e)||I(!1);var j=r.payload,L=j.id,V=j.isCombineEnabled,G=e.dimensions.droppables[L];G||I(!1),G.isCombineEnabled===V&&I(!1);var re=F({},G,{isCombineEnabled:V});return En(e,re,!0)}if(r.type==="MOVE_BY_WINDOW_SCROLL"){if(e.phase==="DROP_PENDING"||e.phase==="DROP_ANIMATING")return e;Xe(e)||I(!1),e.isWindowScrollAllowed||I(!1);var J=r.payload.newScroll;if(ze(e.viewport.scroll.current,J))return Pn(e);var Q=Jl(e.viewport,J);return Kn(e)?oc({state:e,viewport:Q}):Tr({state:e,viewport:Q})}if(r.type==="UPDATE_VIEWPORT_MAX_SCROLL"){if(!Xe(e))return e;var _=r.payload.maxScroll;if(ze(_,e.viewport.scroll.max))return e;var X=F({},e.viewport,{scroll:F({},e.viewport.scroll,{max:_})});return F({phase:"DRAGGING"},e,{viewport:X})}if(r.type==="MOVE_UP"||r.type==="MOVE_DOWN"||r.type==="MOVE_LEFT"||r.type==="MOVE_RIGHT"){if(e.phase==="COLLECTING"||e.phase==="DROP_PENDING")return e;e.phase!=="DRAGGING"&&I(!1);var W=Qp({state:e,type:r.type});return W?Tr({state:e,impact:W.impact,clientSelection:W.clientSelection,scrollJumpRequest:W.scrollJumpRequest}):e}if(r.type==="DROP_PENDING"){var ae=r.payload.reason;e.phase!=="COLLECTING"&&I(!1);var Y=F({phase:"DROP_PENDING"},e,{phase:"DROP_PENDING",isWaiting:!0,reason:ae});return Y}if(r.type==="DROP_ANIMATE"){var ie=r.payload,te=ie.completed,oe=ie.dropDuration,fe=ie.newHomeClientOffset;e.phase==="DRAGGING"||e.phase==="DROP_PENDING"||I(!1);var se={phase:"DROP_ANIMATING",completed:te,dropDuration:oe,newHomeClientOffset:fe,dimensions:e.dimensions};return se}if(r.type==="DROP_COMPLETE"){var ye=r.payload.completed;return{phase:"IDLE",completed:ye,shouldFlush:!1}}return e},bv=function(r){return{type:"BEFORE_INITIAL_CAPTURE",payload:r}},yv=function(r){return{type:"LIFT",payload:r}},xv=function(r){return{type:"INITIAL_PUBLISH",payload:r}},wv=function(r){return{type:"PUBLISH_WHILE_DRAGGING",payload:r}},Dv=function(){return{type:"COLLECTION_STARTING",payload:null}},Sv=function(r){return{type:"UPDATE_DROPPABLE_SCROLL",payload:r}},Cv=function(r){return{type:"UPDATE_DROPPABLE_IS_ENABLED",payload:r}},Ov=function(r){return{type:"UPDATE_DROPPABLE_IS_COMBINE_ENABLED",payload:r}},cc=function(r){return{type:"MOVE",payload:r}},Iv=function(r){return{type:"MOVE_BY_WINDOW_SCROLL",payload:r}},Ev=function(r){return{type:"UPDATE_VIEWPORT_MAX_SCROLL",payload:r}},Pv=function(){return{type:"MOVE_UP",payload:null}},Av=function(){return{type:"MOVE_DOWN",payload:null}},Tv=function(){return{type:"MOVE_RIGHT",payload:null}},Nv=function(){return{type:"MOVE_LEFT",payload:null}},Ta=function(){return{type:"FLUSH",payload:null}},kv=function(r){return{type:"DROP_ANIMATE",payload:r}},Na=function(r){return{type:"DROP_COMPLETE",payload:r}},sc=function(r){return{type:"DROP",payload:r}},Mv=function(r){return{type:"DROP_PENDING",payload:r}},uc=function(){return{type:"DROP_ANIMATION_FINISHED",payload:null}},Rv=function(e){return function(r){var t=r.getState,n=r.dispatch;return function(a){return function(i){if(i.type!=="LIFT"){a(i);return}var o=i.payload,l=o.id,c=o.clientSelection,u=o.movementMode,f=t();f.phase==="DROP_ANIMATING"&&n(Na({completed:f.completed})),t().phase!=="IDLE"&&I(!1),n(Ta()),n(bv({draggableId:l,movementMode:u}));var s={shouldPublishImmediately:u==="SNAP"},d={draggableId:l,scrollOptions:s},p=e.startPublishing(d),v=p.critical,m=p.dimensions,h=p.viewport;n(xv({critical:v,dimensions:m,clientSelection:c,movementMode:u,viewport:h}))}}}},Bv=function(e){return function(){return function(r){return function(t){t.type==="INITIAL_PUBLISH"&&e.dragging(),t.type==="DROP_ANIMATE"&&e.dropping(t.payload.completed.result.reason),(t.type==="FLUSH"||t.type==="DROP_COMPLETE")&&e.resting(),r(t)}}}},ka={outOfTheWay:"cubic-bezier(0.2, 0, 0, 1)",drop:"cubic-bezier(.2,1,.1,1)"},Vr={opacity:{drop:0,combining:.7},scale:{drop:.75}},Ma={outOfTheWay:.2,minDropTime:.33,maxDropTime:.55},Je=Ma.outOfTheWay+"s "+ka.outOfTheWay,Nr={fluid:"opacity "+Je,snap:"transform "+Je+", opacity "+Je,drop:function(r){var t=r+"s "+ka.drop;return"transform "+t+", opacity "+t},outOfTheWay:"transform "+Je,placeholder:"height "+Je+", width "+Je+", margin "+Je},Gi=function(r){return ze(r,ce)?null:"translate("+r.x+"px, "+r.y+"px)"},Jn={moveTo:Gi,drop:function(r,t){var n=Gi(r);return n?t?n+" scale("+Vr.scale.drop+")":n:null}},Xn=Ma.minDropTime,dc=Ma.maxDropTime,jv=dc-Xn,$i=1500,Lv=.6,Fv=function(e){var r=e.current,t=e.destination,n=e.reason,a=_r(r,t);if(a<=0)return Xn;if(a>=$i)return dc;var i=a/$i,o=Xn+jv*i,l=n==="CANCEL"?o*Lv:o;return Number(l.toFixed(2))},Wv=function(e){var r=e.impact,t=e.draggable,n=e.dimensions,a=e.viewport,i=e.afterCritical,o=n.draggables,l=n.droppables,c=we(r),u=c?l[c]:null,f=l[t.descriptor.droppableId],s=ic({impact:r,draggable:t,draggables:o,afterCritical:i,droppable:u||f,viewport:a}),d=xe(s,t.client.borderBox.center);return d},_v=function(e){var r=e.draggables,t=e.reason,n=e.lastImpact,a=e.home,i=e.viewport,o=e.onLiftImpact;if(!n.at||t!=="DROP"){var l=ac({draggables:r,impact:o,destination:a,viewport:i,forceShouldAnimate:!0});return{impact:l,didDropInsideDroppable:!1}}if(n.at.type==="REORDER")return{impact:n,didDropInsideDroppable:!0};var c=F({},n,{displaced:Gr});return{impact:c,didDropInsideDroppable:!0}},Gv=function(e){var r=e.getState,t=e.dispatch;return function(n){return function(a){if(a.type!=="DROP"){n(a);return}var i=r(),o=a.payload.reason;if(i.phase==="COLLECTING"){t(Mv({reason:o}));return}if(i.phase!=="IDLE"){var l=i.phase==="DROP_PENDING"&&i.isWaiting;l&&I(!1),i.phase==="DRAGGING"||i.phase==="DROP_PENDING"||I(!1);var c=i.critical,u=i.dimensions,f=u.draggables[i.critical.draggable.id],s=_v({reason:o,lastImpact:i.impact,afterCritical:i.afterCritical,onLiftImpact:i.onLiftImpact,home:i.dimensions.droppables[i.critical.droppable.id],viewport:i.viewport,draggables:i.dimensions.draggables}),d=s.impact,p=s.didDropInsideDroppable,v=p?Ca(d):null,m=p?rn(d):null,h={index:c.draggable.index,droppableId:c.droppable.id},b={draggableId:f.descriptor.id,type:f.descriptor.type,source:h,reason:o,mode:i.movementMode,destination:v,combine:m},y=Wv({impact:d,draggable:f,dimensions:u,viewport:i.viewport,afterCritical:i.afterCritical}),w={critical:i.critical,afterCritical:i.afterCritical,result:b,impact:d},D=!ze(i.current.client.offset,y)||!!b.combine;if(!D){t(Na({completed:w}));return}var M=Fv({current:i.current.client.offset,destination:y,reason:o}),T={newHomeClientOffset:y,dropDuration:M,completed:w};t(kv(T))}}}},fc=function(){return{x:window.pageXOffset,y:window.pageYOffset}};function $v(e){return{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(t){t.target!==window&&t.target!==window.document||e()}}}function Vv(e){var r=e.onWindowScroll;function t(){r(fc())}var n=Wr(t),a=$v(n),i=Ve;function o(){return i!==Ve}function l(){o()&&I(!1),i=Ce(window,[a])}function c(){o()||I(!1),n.cancel(),i(),i=Ve}return{start:l,stop:c,isActive:o}}var zv=function(r){return r.type==="DROP_COMPLETE"||r.type==="DROP_ANIMATE"||r.type==="FLUSH"},Uv=function(e){var r=Vv({onWindowScroll:function(n){e.dispatch(Iv({newScroll:n}))}});return function(t){return function(n){!r.isActive()&&n.type==="INITIAL_PUBLISH"&&r.start(),r.isActive()&&zv(n)&&r.stop(),t(n)}}},Hv=function(e){var r=!1,t=!1,n=setTimeout(function(){t=!0}),a=function(o){r||t||(r=!0,e(o),clearTimeout(n))};return a.wasCalled=function(){return r},a},qv=function(){var e=[],r=function(i){var o=Sa(e,function(u){return u.timerId===i});o===-1&&I(!1);var l=e.splice(o,1),c=l[0];c.callback()},t=function(i){var o=setTimeout(function(){return r(o)}),l={timerId:o,callback:i};e.push(l)},n=function(){if(e.length){var i=[].concat(e);e.length=0,i.forEach(function(o){clearTimeout(o.timerId),o.callback()})}};return{add:t,flush:n}},Yv=function(r,t){return r==null&&t==null?!0:r==null||t==null?!1:r.droppableId===t.droppableId&&r.index===t.index},Kv=function(r,t){return r==null&&t==null?!0:r==null||t==null?!1:r.draggableId===t.draggableId&&r.droppableId===t.droppableId},Jv=function(r,t){if(r===t)return!0;var n=r.draggable.id===t.draggable.id&&r.draggable.droppableId===t.draggable.droppableId&&r.draggable.type===t.draggable.type&&r.draggable.index===t.draggable.index,a=r.droppable.id===t.droppable.id&&r.droppable.type===t.droppable.type;return n&&a},Or=function(r,t){t()},ht=function(r,t){return{draggableId:r.draggable.id,type:r.droppable.type,source:{droppableId:r.droppable.id,index:r.draggable.index},mode:t}},An=function(r,t,n,a){if(!r){n(a(t));return}var i=Hv(n),o={announce:i};r(t,o),i.wasCalled()||n(a(t))},Xv=function(e,r){var t=qv(),n=null,a=function(d,p){n&&I(!1),Or("onBeforeCapture",function(){var v=e().onBeforeCapture;if(v){var m={draggableId:d,mode:p};v(m)}})},i=function(d,p){n&&I(!1),Or("onBeforeDragStart",function(){var v=e().onBeforeDragStart;v&&v(ht(d,p))})},o=function(d,p){n&&I(!1);var v=ht(d,p);n={mode:p,lastCritical:d,lastLocation:v.source,lastCombine:null},t.add(function(){Or("onDragStart",function(){return An(e().onDragStart,v,r,wt.onDragStart)})})},l=function(d,p){var v=Ca(p),m=rn(p);n||I(!1);var h=!Jv(d,n.lastCritical);h&&(n.lastCritical=d);var b=!Yv(n.lastLocation,v);b&&(n.lastLocation=v);var y=!Kv(n.lastCombine,m);if(y&&(n.lastCombine=m),!(!h&&!b&&!y)){var w=F({},ht(d,n.mode),{combine:m,destination:v});t.add(function(){Or("onDragUpdate",function(){return An(e().onDragUpdate,w,r,wt.onDragUpdate)})})}},c=function(){n||I(!1),t.flush()},u=function(d){n||I(!1),n=null,Or("onDragEnd",function(){return An(e().onDragEnd,d,r,wt.onDragEnd)})},f=function(){if(n){var d=F({},ht(n.lastCritical,n.mode),{combine:null,destination:null,reason:"CANCEL"});u(d)}};return{beforeCapture:a,beforeStart:i,start:o,update:l,flush:c,drop:u,abort:f}},Zv=function(e,r){var t=Xv(e,r);return function(n){return function(a){return function(i){if(i.type==="BEFORE_INITIAL_CAPTURE"){t.beforeCapture(i.payload.draggableId,i.payload.movementMode);return}if(i.type==="INITIAL_PUBLISH"){var o=i.payload.critical;t.beforeStart(o,i.payload.movementMode),a(i),t.start(o,i.payload.movementMode);return}if(i.type==="DROP_COMPLETE"){var l=i.payload.completed.result;t.flush(),a(i),t.drop(l);return}if(a(i),i.type==="FLUSH"){t.abort();return}var c=n.getState();c.phase==="DRAGGING"&&t.update(c.critical,c.impact)}}}},Qv=function(e){return function(r){return function(t){if(t.type!=="DROP_ANIMATION_FINISHED"){r(t);return}var n=e.getState();n.phase!=="DROP_ANIMATING"&&I(!1),e.dispatch(Na({completed:n.completed}))}}},eg=function(e){var r=null,t=null;function n(){t&&(cancelAnimationFrame(t),t=null),r&&(r(),r=null)}return function(a){return function(i){if((i.type==="FLUSH"||i.type==="DROP_COMPLETE"||i.type==="DROP_ANIMATION_FINISHED")&&n(),a(i),i.type==="DROP_ANIMATE"){var o={eventName:"scroll",options:{capture:!0,passive:!1,once:!0},fn:function(){var c=e.getState();c.phase==="DROP_ANIMATING"&&e.dispatch(uc())}};t=requestAnimationFrame(function(){t=null,r=Ce(window,[o])})}}}},rg=function(e){return function(){return function(r){return function(t){(t.type==="DROP_COMPLETE"||t.type==="FLUSH"||t.type==="DROP_ANIMATE")&&e.stopPublishing(),r(t)}}}},tg=function(e){var r=!1;return function(){return function(t){return function(n){if(n.type==="INITIAL_PUBLISH"){r=!0,e.tryRecordFocus(n.payload.critical.draggable.id),t(n),e.tryRestoreFocusRecorded();return}if(t(n),!!r){if(n.type==="FLUSH"){r=!1,e.tryRestoreFocusRecorded();return}if(n.type==="DROP_COMPLETE"){r=!1;var a=n.payload.completed.result;a.combine&&e.tryShiftRecord(a.draggableId,a.combine.draggableId),e.tryRestoreFocusRecorded()}}}}}},ng=function(r){return r.type==="DROP_COMPLETE"||r.type==="DROP_ANIMATE"||r.type==="FLUSH"},ag=function(e){return function(r){return function(t){return function(n){if(ng(n)){e.stop(),t(n);return}if(n.type==="INITIAL_PUBLISH"){t(n);var a=r.getState();a.phase!=="DRAGGING"&&I(!1),e.start(a);return}t(n),e.scroll(r.getState())}}}},ig=function(e){return function(r){return function(t){if(r(t),t.type==="PUBLISH_WHILE_DRAGGING"){var n=e.getState();n.phase==="DROP_PENDING"&&(n.isWaiting||e.dispatch(sc({reason:n.reason})))}}}},og=Dl,lg=function(e){var r=e.dimensionMarshal,t=e.focusMarshal,n=e.styleMarshal,a=e.getResponders,i=e.announce,o=e.autoScroller;return wl(hv,og(lf(Bv(n),rg(r),Rv(r),Gv,Qv,eg,ig,ag(o),Uv,tg(t),Zv(a,i))))},Tn=function(){return{additions:{},removals:{},modified:{}}};function cg(e){var r=e.registry,t=e.callbacks,n=Tn(),a=null,i=function(){a||(t.collectionStarting(),a=requestAnimationFrame(function(){a=null;var f=n,s=f.additions,d=f.removals,p=f.modified,v=Object.keys(s).map(function(b){return r.draggable.getById(b).getDimension(ce)}).sort(function(b,y){return b.descriptor.index-y.descriptor.index}),m=Object.keys(p).map(function(b){var y=r.droppable.getById(b),w=y.callbacks.getScrollWhileDragging();return{droppableId:b,scroll:w}}),h={additions:v,removals:Object.keys(d),modified:m};n=Tn(),t.publish(h)}))},o=function(f){var s=f.descriptor.id;n.additions[s]=f,n.modified[f.descriptor.droppableId]=!0,n.removals[s]&&delete n.removals[s],i()},l=function(f){var s=f.descriptor;n.removals[s.id]=!0,n.modified[s.droppableId]=!0,n.additions[s.id]&&delete n.additions[s.id],i()},c=function(){a&&(cancelAnimationFrame(a),a=null,n=Tn())};return{add:o,remove:l,stop:c}}var pc=function(e){var r=e.scrollHeight,t=e.scrollWidth,n=e.height,a=e.width,i=xe({x:t,y:r},{x:a,y:n}),o={x:Math.max(0,i.x),y:Math.max(0,i.y)};return o},vc=function(){var e=document.documentElement;return e||I(!1),e},gc=function(){var e=vc(),r=pc({scrollHeight:e.scrollHeight,scrollWidth:e.scrollWidth,width:e.clientWidth,height:e.clientHeight});return r},sg=function(){var e=fc(),r=gc(),t=e.y,n=e.x,a=vc(),i=a.clientWidth,o=a.clientHeight,l=n+i,c=t+o,u=Ne({top:t,left:n,right:l,bottom:c}),f={frame:u,scroll:{initial:e,current:e,max:r,diff:{value:ce,displacement:ce}}};return f},ug=function(e){var r=e.critical,t=e.scrollOptions,n=e.registry,a=sg(),i=a.scroll.current,o=r.droppable,l=n.droppable.getAllByType(o.type).map(function(s){return s.callbacks.getDimensionAndWatchScroll(i,t)}),c=n.draggable.getAllByType(r.draggable.type).map(function(s){return s.getDimension(i)}),u={draggables:zl(c),droppables:Vl(l)},f={dimensions:u,critical:r,viewport:a};return f};function Vi(e,r,t){if(t.descriptor.id===r.id||t.descriptor.type!==r.type)return!1;var n=e.droppable.getById(t.descriptor.droppableId);return n.descriptor.mode==="virtual"}var dg=function(e,r){var t=null,n=cg({callbacks:{publish:r.publishWhileDragging,collectionStarting:r.collectionStarting},registry:e}),a=function(p,v){e.droppable.exists(p)||I(!1),t&&r.updateDroppableIsEnabled({id:p,isEnabled:v})},i=function(p,v){t&&(e.droppable.exists(p)||I(!1),r.updateDroppableIsCombineEnabled({id:p,isCombineEnabled:v}))},o=function(p,v){t&&(e.droppable.exists(p)||I(!1),r.updateDroppableScroll({id:p,newScroll:v}))},l=function(p,v){t&&e.droppable.getById(p).callbacks.scroll(v)},c=function(){if(t){n.stop();var p=t.critical.droppable;e.droppable.getAllByType(p.type).forEach(function(v){return v.callbacks.dragStopped()}),t.unsubscribe(),t=null}},u=function(p){t||I(!1);var v=t.critical.draggable;p.type==="ADDITION"&&Vi(e,v,p.value)&&n.add(p.value),p.type==="REMOVAL"&&Vi(e,v,p.value)&&n.remove(p.value)},f=function(p){t&&I(!1);var v=e.draggable.getById(p.draggableId),m=e.droppable.getById(v.descriptor.droppableId),h={draggable:v.descriptor,droppable:m.descriptor},b=e.subscribe(u);return t={critical:h,unsubscribe:b},ug({critical:h,registry:e,scrollOptions:p.scrollOptions})},s={updateDroppableIsEnabled:a,updateDroppableIsCombineEnabled:i,scrollDroppable:l,updateDroppableScroll:o,startPublishing:f,stopPublishing:c};return s},mc=function(e,r){return e.phase==="IDLE"?!0:e.phase!=="DROP_ANIMATING"||e.completed.result.draggableId===r?!1:e.completed.result.reason==="DROP"},fg=function(e){window.scrollBy(e.x,e.y)},pg=le(function(e){return en(e).filter(function(r){return!(!r.isEnabled||!r.frame)})}),vg=function(r,t){var n=Ke(pg(t),function(a){return a.frame||I(!1),ec(a.frame.pageMarginBox)(r)});return n},gg=function(e){var r=e.center,t=e.destination,n=e.droppables;if(t){var a=n[t];return a.frame?a:null}var i=vg(r,n);return i},Ue={startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:function(r){return Math.pow(r,2)},durationDampening:{stopDampeningAt:1200,accelerateAt:360}},mg=function(e,r){var t=e[r.size]*Ue.startFromPercentage,n=e[r.size]*Ue.maxScrollAtPercentage,a={startScrollingFrom:t,maxScrollValueAt:n};return a},hc=function(e){var r=e.startOfRange,t=e.endOfRange,n=e.current,a=t-r;if(a===0)return 0;var i=n-r,o=i/a;return o},Ra=1,hg=function(e,r){if(e>r.startScrollingFrom)return 0;if(e<=r.maxScrollValueAt)return Ue.maxPixelScroll;if(e===r.startScrollingFrom)return Ra;var t=hc({startOfRange:r.maxScrollValueAt,endOfRange:r.startScrollingFrom,current:e}),n=1-t,a=Ue.maxPixelScroll*Ue.ease(n);return Math.ceil(a)},zi=Ue.durationDampening.accelerateAt,Ui=Ue.durationDampening.stopDampeningAt,bg=function(e,r){var t=r,n=Ui,a=Date.now(),i=a-t;if(i>=Ui)return e;if(i<zi)return Ra;var o=hc({startOfRange:zi,endOfRange:n,current:i}),l=e*Ue.ease(o);return Math.ceil(l)},Hi=function(e){var r=e.distanceToEdge,t=e.thresholds,n=e.dragStartTime,a=e.shouldUseTimeDampening,i=hg(r,t);return i===0?0:a?Math.max(bg(i,n),Ra):i},qi=function(e){var r=e.container,t=e.distanceToEdges,n=e.dragStartTime,a=e.axis,i=e.shouldUseTimeDampening,o=mg(r,a),l=t[a.end]<t[a.start];return l?Hi({distanceToEdge:t[a.end],thresholds:o,dragStartTime:n,shouldUseTimeDampening:i}):-1*Hi({distanceToEdge:t[a.start],thresholds:o,dragStartTime:n,shouldUseTimeDampening:i})},yg=function(e){var r=e.container,t=e.subject,n=e.proposedScroll,a=t.height>r.height,i=t.width>r.width;return!i&&!a?n:i&&a?null:{x:i?0:n.x,y:a?0:n.y}},xg=Gl(function(e){return e===0?0:e}),bc=function(e){var r=e.dragStartTime,t=e.container,n=e.subject,a=e.center,i=e.shouldUseTimeDampening,o={top:a.y-t.top,right:t.right-a.x,bottom:t.bottom-a.y,left:a.x-t.left},l=qi({container:t,distanceToEdges:o,dragStartTime:r,axis:Oa,shouldUseTimeDampening:i}),c=qi({container:t,distanceToEdges:o,dragStartTime:r,axis:ql,shouldUseTimeDampening:i}),u=xg({x:c,y:l});if(ze(u,ce))return null;var f=yg({container:t,subject:n,proposedScroll:u});return f?ze(f,ce)?null:f:null},wg=Gl(function(e){return e===0?0:e>0?1:-1}),Ba=function(){var e=function(t,n){return t<0?t:t>n?t-n:0};return function(r){var t=r.current,n=r.max,a=r.change,i=de(t,a),o={x:e(i.x,n.x),y:e(i.y,n.y)};return ze(o,ce)?null:o}}(),yc=function(r){var t=r.max,n=r.current,a=r.change,i={x:Math.max(n.x,t.x),y:Math.max(n.y,t.y)},o=wg(a),l=Ba({max:i,current:n,change:o});return!l||o.x!==0&&l.x===0||o.y!==0&&l.y===0},ja=function(r,t){return yc({current:r.scroll.current,max:r.scroll.max,change:t})},Dg=function(r,t){if(!ja(r,t))return null;var n=r.scroll.max,a=r.scroll.current;return Ba({current:a,max:n,change:t})},La=function(r,t){var n=r.frame;return n?yc({current:n.scroll.current,max:n.scroll.max,change:t}):!1},Sg=function(r,t){var n=r.frame;return!n||!La(r,t)?null:Ba({current:n.scroll.current,max:n.scroll.max,change:t})},Cg=function(e){var r=e.viewport,t=e.subject,n=e.center,a=e.dragStartTime,i=e.shouldUseTimeDampening,o=bc({dragStartTime:a,container:r.frame,subject:t,center:n,shouldUseTimeDampening:i});return o&&ja(r,o)?o:null},Og=function(e){var r=e.droppable,t=e.subject,n=e.center,a=e.dragStartTime,i=e.shouldUseTimeDampening,o=r.frame;if(!o)return null;var l=bc({dragStartTime:a,container:o.pageMarginBox,subject:t,center:n,shouldUseTimeDampening:i});return l&&La(r,l)?l:null},Yi=function(e){var r=e.state,t=e.dragStartTime,n=e.shouldUseTimeDampening,a=e.scrollWindow,i=e.scrollDroppable,o=r.current.page.borderBoxCenter,l=r.dimensions.draggables[r.critical.draggable.id],c=l.page.marginBox;if(r.isWindowScrollAllowed){var u=r.viewport,f=Cg({dragStartTime:t,viewport:u,subject:c,center:o,shouldUseTimeDampening:n});if(f){a(f);return}}var s=gg({center:o,destination:we(r.impact),droppables:r.dimensions.droppables});if(s){var d=Og({dragStartTime:t,droppable:s,subject:c,center:o,shouldUseTimeDampening:n});d&&i(s.descriptor.id,d)}},Ig=function(e){var r=e.scrollWindow,t=e.scrollDroppable,n=Wr(r),a=Wr(t),i=null,o=function(f){i||I(!1);var s=i,d=s.shouldUseTimeDampening,p=s.dragStartTime;Yi({state:f,scrollWindow:n,scrollDroppable:a,dragStartTime:p,shouldUseTimeDampening:d})},l=function(f){i&&I(!1);var s=Date.now(),d=!1,p=function(){d=!0};Yi({state:f,dragStartTime:0,shouldUseTimeDampening:!1,scrollWindow:p,scrollDroppable:p}),i={dragStartTime:s,shouldUseTimeDampening:d},d&&o(f)},c=function(){i&&(n.cancel(),a.cancel(),i=null)};return{start:l,stop:c,scroll:o}},Eg=function(e){var r=e.move,t=e.scrollDroppable,n=e.scrollWindow,a=function(u,f){var s=de(u.current.client.selection,f);r({client:s})},i=function(u,f){if(!La(u,f))return f;var s=Sg(u,f);if(!s)return t(u.descriptor.id,f),null;var d=xe(f,s);t(u.descriptor.id,d);var p=xe(f,d);return p},o=function(u,f,s){if(!u||!ja(f,s))return s;var d=Dg(f,s);if(!d)return n(s),null;var p=xe(s,d);n(p);var v=xe(s,p);return v},l=function(u){var f=u.scrollJumpRequest;if(f){var s=we(u.impact);s||I(!1);var d=i(u.dimensions.droppables[s],f);if(d){var p=u.viewport,v=o(u.isWindowScrollAllowed,p,d);v&&a(u,v)}}};return l},Pg=function(e){var r=e.scrollDroppable,t=e.scrollWindow,n=e.move,a=Ig({scrollWindow:t,scrollDroppable:r}),i=Eg({move:n,scrollWindow:t,scrollDroppable:r}),o=function(u){if(u.phase==="DRAGGING"){if(u.movementMode==="FLUID"){a.scroll(u);return}u.scrollJumpRequest&&i(u)}},l={scroll:o,start:a.start,stop:a.stop};return l},gr="data-rbd",mr=function(){var e=gr+"-drag-handle";return{base:e,draggableId:e+"-draggable-id",contextId:e+"-context-id"}}(),Zn=function(){var e=gr+"-draggable";return{base:e,contextId:e+"-context-id",id:e+"-id"}}(),Ag=function(){var e=gr+"-droppable";return{base:e,contextId:e+"-context-id",id:e+"-id"}}(),Ki={contextId:gr+"-scroll-container-context-id"},Tg=function(r){return function(t){return"["+t+'="'+r+'"]'}},Ir=function(r,t){return r.map(function(n){var a=n.styles[t];return a?n.selector+" { "+a+" }":""}).join(" ")},Ng="pointer-events: none;",kg=function(e){var r=Tg(e),t=function(){var l=`
      cursor: -webkit-grab;
      cursor: grab;
    `;return{selector:r(mr.contextId),styles:{always:`
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,resting:l,dragging:Ng,dropAnimating:l}}}(),n=function(){var l=`
      transition: `+Nr.outOfTheWay+`;
    `;return{selector:r(Zn.contextId),styles:{dragging:l,dropAnimating:l,userCancel:l}}}(),a={selector:r(Ag.contextId),styles:{always:"overflow-anchor: none;"}},i={selector:"body",styles:{dragging:`
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `}},o=[n,t,a,i];return{always:Ir(o,"always"),resting:Ir(o,"resting"),dragging:Ir(o,"dragging"),dropAnimating:Ir(o,"dropAnimating"),userCancel:Ir(o,"userCancel")}},De=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?C.useLayoutEffect:C.useEffect,Nn=function(){var r=document.querySelector("head");return r||I(!1),r},Ji=function(r){var t=document.createElement("style");return r&&t.setAttribute("nonce",r),t.type="text/css",t};function Mg(e,r){var t=z(function(){return kg(e)},[e]),n=C.useRef(null),a=C.useRef(null),i=B(le(function(s){var d=a.current;d||I(!1),d.textContent=s}),[]),o=B(function(s){var d=n.current;d||I(!1),d.textContent=s},[]);De(function(){!n.current&&!a.current||I(!1);var s=Ji(r),d=Ji(r);return n.current=s,a.current=d,s.setAttribute(gr+"-always",e),d.setAttribute(gr+"-dynamic",e),Nn().appendChild(s),Nn().appendChild(d),o(t.always),i(t.resting),function(){var p=function(m){var h=m.current;h||I(!1),Nn().removeChild(h),m.current=null};p(n),p(a)}},[r,o,i,t.always,t.resting,e]);var l=B(function(){return i(t.dragging)},[i,t.dragging]),c=B(function(s){if(s==="DROP"){i(t.dropAnimating);return}i(t.userCancel)},[i,t.dropAnimating,t.userCancel]),u=B(function(){a.current&&i(t.resting)},[i,t.resting]),f=z(function(){return{dragging:l,dropping:c,resting:u}},[l,c,u]);return f}var xc=function(e){return e&&e.ownerDocument?e.ownerDocument.defaultView:window};function an(e){return e instanceof xc(e).HTMLElement}function Rg(e,r){var t="["+mr.contextId+'="'+e+'"]',n=$l(document.querySelectorAll(t));if(!n.length)return null;var a=Ke(n,function(i){return i.getAttribute(mr.draggableId)===r});return!a||!an(a)?null:a}function Bg(e){var r=C.useRef({}),t=C.useRef(null),n=C.useRef(null),a=C.useRef(!1),i=B(function(d,p){var v={id:d,focus:p};return r.current[d]=v,function(){var h=r.current,b=h[d];b!==v&&delete h[d]}},[]),o=B(function(d){var p=Rg(e,d);p&&p!==document.activeElement&&p.focus()},[e]),l=B(function(d,p){t.current===d&&(t.current=p)},[]),c=B(function(){n.current||a.current&&(n.current=requestAnimationFrame(function(){n.current=null;var d=t.current;d&&o(d)}))},[o]),u=B(function(d){t.current=null;var p=document.activeElement;p&&p.getAttribute(mr.draggableId)===d&&(t.current=d)},[]);De(function(){return a.current=!0,function(){a.current=!1;var d=n.current;d&&cancelAnimationFrame(d)}},[]);var f=z(function(){return{register:i,tryRecordFocus:u,tryRestoreFocusRecorded:c,tryShiftRecord:l}},[i,u,c,l]);return f}function jg(){var e={draggables:{},droppables:{}},r=[];function t(s){return r.push(s),function(){var p=r.indexOf(s);p!==-1&&r.splice(p,1)}}function n(s){r.length&&r.forEach(function(d){return d(s)})}function a(s){return e.draggables[s]||null}function i(s){var d=a(s);return d||I(!1),d}var o={register:function(d){e.draggables[d.descriptor.id]=d,n({type:"ADDITION",value:d})},update:function(d,p){var v=e.draggables[p.descriptor.id];v&&v.uniqueId===d.uniqueId&&(delete e.draggables[p.descriptor.id],e.draggables[d.descriptor.id]=d)},unregister:function(d){var p=d.descriptor.id,v=a(p);v&&d.uniqueId===v.uniqueId&&(delete e.draggables[p],n({type:"REMOVAL",value:d}))},getById:i,findById:a,exists:function(d){return!!a(d)},getAllByType:function(d){return kt(e.draggables).filter(function(p){return p.descriptor.type===d})}};function l(s){return e.droppables[s]||null}function c(s){var d=l(s);return d||I(!1),d}var u={register:function(d){e.droppables[d.descriptor.id]=d},unregister:function(d){var p=l(d.descriptor.id);p&&d.uniqueId===p.uniqueId&&delete e.droppables[d.descriptor.id]},getById:c,findById:l,exists:function(d){return!!l(d)},getAllByType:function(d){return kt(e.droppables).filter(function(p){return p.descriptor.type===d})}};function f(){e.draggables={},e.droppables={},r.length=0}return{draggable:o,droppable:u,subscribe:t,clean:f}}function Lg(){var e=z(jg,[]);return C.useEffect(function(){return function(){requestAnimationFrame(e.clean)}},[e]),e}var Fa=A.createContext(null),Rt=function(){var e=document.body;return e||I(!1),e},Fg={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0 0 0 0)","clip-path":"inset(100%)"},Wg=function(r){return"rbd-announcement-"+r};function _g(e){var r=z(function(){return Wg(e)},[e]),t=C.useRef(null);C.useEffect(function(){var i=document.createElement("div");return t.current=i,i.id=r,i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true"),F(i.style,Fg),Rt().appendChild(i),function(){setTimeout(function(){var c=Rt();c.contains(i)&&c.removeChild(i),i===t.current&&(t.current=null)})}},[r]);var n=B(function(a){var i=t.current;if(i){i.textContent=a;return}},[]);return n}var Gg=0,$g={separator:"::"};function Wa(e,r){return r===void 0&&(r=$g),z(function(){return""+e+r.separator+Gg++},[r.separator,e])}function Vg(e){var r=e.contextId,t=e.uniqueId;return"rbd-hidden-text-"+r+"-"+t}function zg(e){var r=e.contextId,t=e.text,n=Wa("hidden-text",{separator:"-"}),a=z(function(){return Vg({contextId:r,uniqueId:n})},[n,r]);return C.useEffect(function(){var o=document.createElement("div");return o.id=a,o.textContent=t,o.style.display="none",Rt().appendChild(o),function(){var c=Rt();c.contains(o)&&c.removeChild(o)}},[a,t]),a}var on=A.createContext(null);function wc(e){var r=C.useRef(e);return C.useEffect(function(){r.current=e}),r}function Ug(){var e=null;function r(){return!!e}function t(o){return o===e}function n(o){e&&I(!1);var l={abandon:o};return e=l,l}function a(){e||I(!1),e=null}function i(){e&&(e.abandon(),a())}return{isClaimed:r,isActive:t,claim:n,release:a,tryAbandon:i}}var Hg=9,qg=13,_a=27,Dc=32,Yg=33,Kg=34,Jg=35,Xg=36,Zg=37,Qg=38,em=39,rm=40,bt,tm=(bt={},bt[qg]=!0,bt[Hg]=!0,bt),Sc=function(e){tm[e.keyCode]&&e.preventDefault()},ln=function(){var e="visibilitychange";if(typeof document>"u")return e;var r=[e,"ms"+e,"webkit"+e,"moz"+e,"o"+e],t=Ke(r,function(n){return"on"+n in document});return t||e}(),Cc=0,Xi=5;function nm(e,r){return Math.abs(r.x-e.x)>=Xi||Math.abs(r.y-e.y)>=Xi}var Zi={type:"IDLE"};function am(e){var r=e.cancel,t=e.completed,n=e.getPhase,a=e.setPhase;return[{eventName:"mousemove",fn:function(o){var l=o.button,c=o.clientX,u=o.clientY;if(l===Cc){var f={x:c,y:u},s=n();if(s.type==="DRAGGING"){o.preventDefault(),s.actions.move(f);return}s.type!=="PENDING"&&I(!1);var d=s.point;if(nm(d,f)){o.preventDefault();var p=s.actions.fluidLift(f);a({type:"DRAGGING",actions:p})}}}},{eventName:"mouseup",fn:function(o){var l=n();if(l.type!=="DRAGGING"){r();return}o.preventDefault(),l.actions.drop({shouldBlockNextClick:!0}),t()}},{eventName:"mousedown",fn:function(o){n().type==="DRAGGING"&&o.preventDefault(),r()}},{eventName:"keydown",fn:function(o){var l=n();if(l.type==="PENDING"){r();return}if(o.keyCode===_a){o.preventDefault(),r();return}Sc(o)}},{eventName:"resize",fn:r},{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(){n().type==="PENDING"&&r()}},{eventName:"webkitmouseforcedown",fn:function(o){var l=n();if(l.type==="IDLE"&&I(!1),l.actions.shouldRespectForcePress()){r();return}o.preventDefault()}},{eventName:ln,fn:r}]}function im(e){var r=C.useRef(Zi),t=C.useRef(Ve),n=z(function(){return{eventName:"mousedown",fn:function(s){if(!s.defaultPrevented&&s.button===Cc&&!(s.ctrlKey||s.metaKey||s.shiftKey||s.altKey)){var d=e.findClosestDraggableId(s);if(d){var p=e.tryGetLock(d,o,{sourceEvent:s});if(p){s.preventDefault();var v={x:s.clientX,y:s.clientY};t.current(),u(p,v)}}}}}},[e]),a=z(function(){return{eventName:"webkitmouseforcewillbegin",fn:function(s){if(!s.defaultPrevented){var d=e.findClosestDraggableId(s);if(d){var p=e.findOptionsForDraggable(d);p&&(p.shouldRespectForcePress||e.canGetLock(d)&&s.preventDefault())}}}}},[e]),i=B(function(){var s={passive:!1,capture:!0};t.current=Ce(window,[a,n],s)},[a,n]),o=B(function(){var f=r.current;f.type!=="IDLE"&&(r.current=Zi,t.current(),i())},[i]),l=B(function(){var f=r.current;o(),f.type==="DRAGGING"&&f.actions.cancel({shouldBlockNextClick:!0}),f.type==="PENDING"&&f.actions.abort()},[o]),c=B(function(){var s={capture:!0,passive:!1},d=am({cancel:l,completed:o,getPhase:function(){return r.current},setPhase:function(v){r.current=v}});t.current=Ce(window,d,s)},[l,o]),u=B(function(s,d){r.current.type!=="IDLE"&&I(!1),r.current={type:"PENDING",point:d,actions:s},c()},[c]);De(function(){return i(),function(){t.current()}},[i])}var or;function om(){}var lm=(or={},or[Kg]=!0,or[Yg]=!0,or[Xg]=!0,or[Jg]=!0,or);function cm(e,r){function t(){r(),e.cancel()}function n(){r(),e.drop()}return[{eventName:"keydown",fn:function(i){if(i.keyCode===_a){i.preventDefault(),t();return}if(i.keyCode===Dc){i.preventDefault(),n();return}if(i.keyCode===rm){i.preventDefault(),e.moveDown();return}if(i.keyCode===Qg){i.preventDefault(),e.moveUp();return}if(i.keyCode===em){i.preventDefault(),e.moveRight();return}if(i.keyCode===Zg){i.preventDefault(),e.moveLeft();return}if(lm[i.keyCode]){i.preventDefault();return}Sc(i)}},{eventName:"mousedown",fn:t},{eventName:"mouseup",fn:t},{eventName:"click",fn:t},{eventName:"touchstart",fn:t},{eventName:"resize",fn:t},{eventName:"wheel",fn:t,options:{passive:!0}},{eventName:ln,fn:t}]}function sm(e){var r=C.useRef(om),t=z(function(){return{eventName:"keydown",fn:function(i){if(i.defaultPrevented||i.keyCode!==Dc)return;var o=e.findClosestDraggableId(i);if(!o)return;var l=e.tryGetLock(o,f,{sourceEvent:i});if(!l)return;i.preventDefault();var c=!0,u=l.snapLift();r.current();function f(){c||I(!1),c=!1,r.current(),n()}r.current=Ce(window,cm(u,f),{capture:!0,passive:!1})}}},[e]),n=B(function(){var i={passive:!1,capture:!0};r.current=Ce(window,[t],i)},[t]);De(function(){return n(),function(){r.current()}},[n])}var kn={type:"IDLE"},um=120,dm=.15;function fm(e){var r=e.cancel,t=e.getPhase;return[{eventName:"orientationchange",fn:r},{eventName:"resize",fn:r},{eventName:"contextmenu",fn:function(a){a.preventDefault()}},{eventName:"keydown",fn:function(a){if(t().type!=="DRAGGING"){r();return}a.keyCode===_a&&a.preventDefault(),r()}},{eventName:ln,fn:r}]}function pm(e){var r=e.cancel,t=e.completed,n=e.getPhase;return[{eventName:"touchmove",options:{capture:!1},fn:function(i){var o=n();if(o.type!=="DRAGGING"){r();return}o.hasMoved=!0;var l=i.touches[0],c=l.clientX,u=l.clientY,f={x:c,y:u};i.preventDefault(),o.actions.move(f)}},{eventName:"touchend",fn:function(i){var o=n();if(o.type!=="DRAGGING"){r();return}i.preventDefault(),o.actions.drop({shouldBlockNextClick:!0}),t()}},{eventName:"touchcancel",fn:function(i){if(n().type!=="DRAGGING"){r();return}i.preventDefault(),r()}},{eventName:"touchforcechange",fn:function(i){var o=n();o.type==="IDLE"&&I(!1);var l=i.touches[0];if(l){var c=l.force>=dm;if(c){var u=o.actions.shouldRespectForcePress();if(o.type==="PENDING"){u&&r();return}if(u){if(o.hasMoved){i.preventDefault();return}r();return}i.preventDefault()}}}},{eventName:ln,fn:r}]}function vm(e){var r=C.useRef(kn),t=C.useRef(Ve),n=B(function(){return r.current},[]),a=B(function(p){r.current=p},[]),i=z(function(){return{eventName:"touchstart",fn:function(p){if(!p.defaultPrevented){var v=e.findClosestDraggableId(p);if(v){var m=e.tryGetLock(v,l,{sourceEvent:p});if(m){var h=p.touches[0],b=h.clientX,y=h.clientY,w={x:b,y};t.current(),s(m,w)}}}}}},[e]),o=B(function(){var p={capture:!0,passive:!1};t.current=Ce(window,[i],p)},[i]),l=B(function(){var d=r.current;d.type!=="IDLE"&&(d.type==="PENDING"&&clearTimeout(d.longPressTimerId),a(kn),t.current(),o())},[o,a]),c=B(function(){var d=r.current;l(),d.type==="DRAGGING"&&d.actions.cancel({shouldBlockNextClick:!0}),d.type==="PENDING"&&d.actions.abort()},[l]),u=B(function(){var p={capture:!0,passive:!1},v={cancel:c,completed:l,getPhase:n},m=Ce(window,pm(v),p),h=Ce(window,fm(v),p);t.current=function(){m(),h()}},[c,n,l]),f=B(function(){var p=n();p.type!=="PENDING"&&I(!1);var v=p.actions.fluidLift(p.point);a({type:"DRAGGING",actions:v,hasMoved:!1})},[n,a]),s=B(function(p,v){n().type!=="IDLE"&&I(!1);var m=setTimeout(f,um);a({type:"PENDING",point:v,actions:p,longPressTimerId:m}),u()},[u,n,a,f]);De(function(){return o(),function(){t.current();var v=n();v.type==="PENDING"&&(clearTimeout(v.longPressTimerId),a(kn))}},[n,o,a]),De(function(){var p=Ce(window,[{eventName:"touchmove",fn:function(){},options:{capture:!1,passive:!1}}]);return p},[])}var gm={input:!0,button:!0,textarea:!0,select:!0,option:!0,optgroup:!0,video:!0,audio:!0};function Oc(e,r){if(r==null)return!1;var t=!!gm[r.tagName.toLowerCase()];if(t)return!0;var n=r.getAttribute("contenteditable");return n==="true"||n===""?!0:r===e?!1:Oc(e,r.parentElement)}function mm(e,r){var t=r.target;return an(t)?Oc(e,t):!1}var hm=function(e){return Ne(e.getBoundingClientRect()).center};function bm(e){return e instanceof xc(e).Element}var ym=function(){var e="matches";if(typeof document>"u")return e;var r=[e,"msMatchesSelector","webkitMatchesSelector"],t=Ke(r,function(n){return n in Element.prototype});return t||e}();function Ic(e,r){return e==null?null:e[ym](r)?e:Ic(e.parentElement,r)}function xm(e,r){return e.closest?e.closest(r):Ic(e,r)}function wm(e){return"["+mr.contextId+'="'+e+'"]'}function Dm(e,r){var t=r.target;if(!bm(t))return null;var n=wm(e),a=xm(t,n);return!a||!an(a)?null:a}function Sm(e,r){var t=Dm(e,r);return t?t.getAttribute(mr.draggableId):null}function Cm(e,r){var t="["+Zn.contextId+'="'+e+'"]',n=$l(document.querySelectorAll(t)),a=Ke(n,function(i){return i.getAttribute(Zn.id)===r});return!a||!an(a)?null:a}function Om(e){e.preventDefault()}function yt(e){var r=e.expected,t=e.phase,n=e.isLockActive;return e.shouldWarn,!(!n()||r!==t)}function Ec(e){var r=e.lockAPI,t=e.store,n=e.registry,a=e.draggableId;if(r.isClaimed())return!1;var i=n.draggable.findById(a);return!(!i||!i.options.isEnabled||!mc(t.getState(),a))}function Im(e){var r=e.lockAPI,t=e.contextId,n=e.store,a=e.registry,i=e.draggableId,o=e.forceSensorStop,l=e.sourceEvent,c=Ec({lockAPI:r,store:n,registry:a,draggableId:i});if(!c)return null;var u=a.draggable.getById(i),f=Cm(t,u.descriptor.id);if(!f||l&&!u.options.canDragInteractiveElements&&mm(f,l))return null;var s=r.claim(o||Ve),d="PRE_DRAG";function p(){return u.options.shouldRespectForcePress}function v(){return r.isActive(s)}function m(T,O){yt({expected:T,phase:d,isLockActive:v,shouldWarn:!0})&&n.dispatch(O())}var h=m.bind(null,"DRAGGING");function b(T){function O(){r.release(),d="COMPLETED"}d!=="PRE_DRAG"&&(O(),d!=="PRE_DRAG"&&I(!1)),n.dispatch(yv(T.liftActionArgs)),d="DRAGGING";function E(P,S){if(S===void 0&&(S={shouldBlockNextClick:!1}),T.cleanup(),S.shouldBlockNextClick){var k=Ce(window,[{eventName:"click",fn:Om,options:{once:!0,passive:!1,capture:!0}}]);setTimeout(k)}O(),n.dispatch(sc({reason:P}))}return F({isActive:function(){return yt({expected:"DRAGGING",phase:d,isLockActive:v,shouldWarn:!1})},shouldRespectForcePress:p,drop:function(S){return E("DROP",S)},cancel:function(S){return E("CANCEL",S)}},T.actions)}function y(T){var O=Wr(function(P){h(function(){return cc({client:P})})}),E=b({liftActionArgs:{id:i,clientSelection:T,movementMode:"FLUID"},cleanup:function(){return O.cancel()},actions:{move:O}});return F({},E,{move:O})}function w(){var T={moveUp:function(){return h(Pv)},moveRight:function(){return h(Tv)},moveDown:function(){return h(Av)},moveLeft:function(){return h(Nv)}};return b({liftActionArgs:{id:i,clientSelection:hm(f),movementMode:"SNAP"},cleanup:Ve,actions:T})}function D(){var T=yt({expected:"PRE_DRAG",phase:d,isLockActive:v,shouldWarn:!0});T&&r.release()}var M={isActive:function(){return yt({expected:"PRE_DRAG",phase:d,isLockActive:v,shouldWarn:!1})},shouldRespectForcePress:p,fluidLift:y,snapLift:w,abort:D};return M}var Em=[im,sm,vm];function Pm(e){var r=e.contextId,t=e.store,n=e.registry,a=e.customSensors,i=e.enableDefaultSensors,o=[].concat(i?Em:[],a||[]),l=C.useState(function(){return Ug()})[0],c=B(function(y,w){y.isDragging&&!w.isDragging&&l.tryAbandon()},[l]);De(function(){var y=t.getState(),w=t.subscribe(function(){var D=t.getState();c(y,D),y=D});return w},[l,t,c]),De(function(){return l.tryAbandon},[l.tryAbandon]);for(var u=B(function(b){return Ec({lockAPI:l,registry:n,store:t,draggableId:b})},[l,n,t]),f=B(function(b,y,w){return Im({lockAPI:l,registry:n,contextId:r,store:t,draggableId:b,forceSensorStop:y,sourceEvent:w&&w.sourceEvent?w.sourceEvent:null})},[r,l,n,t]),s=B(function(b){return Sm(r,b)},[r]),d=B(function(b){var y=n.draggable.findById(b);return y?y.options:null},[n.draggable]),p=B(function(){l.isClaimed()&&(l.tryAbandon(),t.getState().phase!=="IDLE"&&t.dispatch(Ta()))},[l,t]),v=B(l.isClaimed,[l]),m=z(function(){return{canGetLock:u,tryGetLock:f,findClosestDraggableId:s,findOptionsForDraggable:d,tryReleaseLock:p,isLockClaimed:v}},[u,f,s,d,p,v]),h=0;h<o.length;h++)o[h](m)}var Am=function(r){return{onBeforeCapture:r.onBeforeCapture,onBeforeDragStart:r.onBeforeDragStart,onDragStart:r.onDragStart,onDragEnd:r.onDragEnd,onDragUpdate:r.onDragUpdate}};function Er(e){return e.current||I(!1),e.current}function Tm(e){var r=e.contextId,t=e.setCallbacks,n=e.sensors,a=e.nonce,i=e.dragHandleUsageInstructions,o=C.useRef(null),l=wc(e),c=B(function(){return Am(l.current)},[l]),u=_g(r),f=zg({contextId:r,text:i}),s=Mg(r,a),d=B(function(P){Er(o).dispatch(P)},[]),p=z(function(){return Oi({publishWhileDragging:wv,updateDroppableScroll:Sv,updateDroppableIsEnabled:Cv,updateDroppableIsCombineEnabled:Ov,collectionStarting:Dv},d)},[d]),v=Lg(),m=z(function(){return dg(v,p)},[v,p]),h=z(function(){return Pg(F({scrollWindow:fg,scrollDroppable:m.scrollDroppable},Oi({move:cc},d)))},[m.scrollDroppable,d]),b=Bg(r),y=z(function(){return lg({announce:u,autoScroller:h,dimensionMarshal:m,focusMarshal:b,getResponders:c,styleMarshal:s})},[u,h,m,b,c,s]);o.current=y;var w=B(function(){var P=Er(o),S=P.getState();S.phase!=="IDLE"&&P.dispatch(Ta())},[]),D=B(function(){var P=Er(o).getState();return P.isDragging||P.phase==="DROP_ANIMATING"},[]),M=z(function(){return{isDragging:D,tryAbort:w}},[D,w]);t(M);var T=B(function(P){return mc(Er(o).getState(),P)},[]),O=B(function(){return Xe(Er(o).getState())},[]),E=z(function(){return{marshal:m,focus:b,contextId:r,canLift:T,isMovementAllowed:O,dragHandleUsageInstructionsId:f,registry:v}},[r,m,f,b,T,O,v]);return Pm({contextId:r,store:y,registry:v,customSensors:n,enableDefaultSensors:e.enableDefaultSensors!==!1}),C.useEffect(function(){return w},[w]),A.createElement(on.Provider,{value:E},A.createElement(ff,{context:Fa,store:y},e.children))}var Nm=0;function km(){return z(function(){return""+Nm++},[])}function Mm(e){var r=km(),t=e.dragHandleUsageInstructions||wt.dragHandleUsageInstructions;return A.createElement(sp,null,function(n){return A.createElement(Tm,{nonce:e.nonce,contextId:r,setCallbacks:n,dragHandleUsageInstructions:t,enableDefaultSensors:e.enableDefaultSensors,sensors:e.sensors,onBeforeCapture:e.onBeforeCapture,onBeforeDragStart:e.onBeforeDragStart,onDragStart:e.onDragStart,onDragUpdate:e.onDragUpdate,onDragEnd:e.onDragEnd},e.children)})}var Pc=function(r){return function(t){return r===t}},Rm=Pc("scroll"),Bm=Pc("auto"),Qi=function(r,t){return t(r.overflowX)||t(r.overflowY)},jm=function(r){var t=window.getComputedStyle(r),n={overflowX:t.overflowX,overflowY:t.overflowY};return Qi(n,Rm)||Qi(n,Bm)},Lm=function(){return!1},Fm=function e(r){return r==null?null:r===document.body?Lm()?r:null:r===document.documentElement?null:jm(r)?r:e(r.parentElement)},Qn=function(e){return{x:e.scrollLeft,y:e.scrollTop}},Wm=function e(r){if(!r)return!1;var t=window.getComputedStyle(r);return t.position==="fixed"?!0:e(r.parentElement)},_m=function(e){var r=Fm(e),t=Wm(e);return{closestScrollable:r,isFixedOnPage:t}},Gm=function(e){var r=e.descriptor,t=e.isEnabled,n=e.isCombineEnabled,a=e.isFixedOnPage,i=e.direction,o=e.client,l=e.page,c=e.closest,u=function(){if(!c)return null;var p=c.scrollSize,v=c.client,m=pc({scrollHeight:p.scrollHeight,scrollWidth:p.scrollWidth,height:v.paddingBox.height,width:v.paddingBox.width});return{pageMarginBox:c.page.marginBox,frameClient:v,scrollSize:p,shouldClipSubject:c.shouldClipSubject,scroll:{initial:c.scroll,current:c.scroll,max:m,diff:{value:ce,displacement:ce}}}}(),f=i==="vertical"?Oa:ql,s=vr({page:l,withPlaceholder:null,axis:f,frame:u}),d={descriptor:r,isCombineEnabled:n,isFixedOnPage:a,axis:f,isEnabled:t,client:o,page:l,frame:u,subject:s};return d},$m=function(r,t){var n=Ll(r);if(!t||r!==t)return n;var a=n.paddingBox.top-t.scrollTop,i=n.paddingBox.left-t.scrollLeft,o=a+t.scrollHeight,l=i+t.scrollWidth,c={top:a,right:l,bottom:o,left:i},u=xa(c,n.border),f=wa({borderBox:u,margin:n.margin,border:n.border,padding:n.padding});return f},Vm=function(e){var r=e.ref,t=e.descriptor,n=e.env,a=e.windowScroll,i=e.direction,o=e.isDropDisabled,l=e.isCombineEnabled,c=e.shouldClipSubject,u=n.closestScrollable,f=$m(r,u),s=At(f,a),d=function(){if(!u)return null;var v=Ll(u),m={scrollHeight:u.scrollHeight,scrollWidth:u.scrollWidth};return{client:v,page:At(v,a),scroll:Qn(u),scrollSize:m,shouldClipSubject:c}}(),p=Gm({descriptor:t,isEnabled:!o,isCombineEnabled:l,isFixedOnPage:n.isFixedOnPage,direction:i,client:f,page:s,closest:d});return p},zm={passive:!1},Um={passive:!0},eo=function(e){return e.shouldPublishImmediately?zm:Um};function Bt(e){var r=C.useContext(e);return r||I(!1),r}var xt=function(r){return r&&r.env.closestScrollable||null};function Hm(e){var r=C.useRef(null),t=Bt(on),n=Wa("droppable"),a=t.registry,i=t.marshal,o=wc(e),l=z(function(){return{id:e.droppableId,type:e.type,mode:e.mode}},[e.droppableId,e.mode,e.type]),c=C.useRef(l),u=z(function(){return le(function(D,M){r.current||I(!1);var T={x:D,y:M};i.updateDroppableScroll(l.id,T)})},[l.id,i]),f=B(function(){var D=r.current;return!D||!D.env.closestScrollable?ce:Qn(D.env.closestScrollable)},[]),s=B(function(){var D=f();u(D.x,D.y)},[f,u]),d=z(function(){return Wr(s)},[s]),p=B(function(){var D=r.current,M=xt(D);D&&M||I(!1);var T=D.scrollOptions;if(T.shouldPublishImmediately){s();return}d()},[d,s]),v=B(function(D,M){r.current&&I(!1);var T=o.current,O=T.getDroppableRef();O||I(!1);var E=_m(O),P={ref:O,descriptor:l,env:E,scrollOptions:M};r.current=P;var S=Vm({ref:O,descriptor:l,env:E,windowScroll:D,direction:T.direction,isDropDisabled:T.isDropDisabled,isCombineEnabled:T.isCombineEnabled,shouldClipSubject:!T.ignoreContainerClipping}),k=E.closestScrollable;return k&&(k.setAttribute(Ki.contextId,t.contextId),k.addEventListener("scroll",p,eo(P.scrollOptions))),S},[t.contextId,l,p,o]),m=B(function(){var D=r.current,M=xt(D);return D&&M||I(!1),Qn(M)},[]),h=B(function(){var D=r.current;D||I(!1);var M=xt(D);r.current=null,M&&(d.cancel(),M.removeAttribute(Ki.contextId),M.removeEventListener("scroll",p,eo(D.scrollOptions)))},[p,d]),b=B(function(D){var M=r.current;M||I(!1);var T=xt(M);T||I(!1),T.scrollTop+=D.y,T.scrollLeft+=D.x},[]),y=z(function(){return{getDimensionAndWatchScroll:v,getScrollWhileDragging:m,dragStopped:h,scroll:b}},[h,v,m,b]),w=z(function(){return{uniqueId:n,descriptor:l,callbacks:y}},[y,l,n]);De(function(){return c.current=w.descriptor,a.droppable.register(w),function(){r.current&&h(),a.droppable.unregister(w)}},[y,l,h,w,i,a.droppable]),De(function(){r.current&&i.updateDroppableIsEnabled(c.current.id,!e.isDropDisabled)},[e.isDropDisabled,i]),De(function(){r.current&&i.updateDroppableIsCombineEnabled(c.current.id,e.isCombineEnabled)},[e.isCombineEnabled,i])}function Mn(){}var ro={width:0,height:0,margin:gp},qm=function(r){var t=r.isAnimatingOpenOnMount,n=r.placeholder,a=r.animate;return t||a==="close"?ro:{height:n.client.borderBox.height,width:n.client.borderBox.width,margin:n.client.margin}},Ym=function(r){var t=r.isAnimatingOpenOnMount,n=r.placeholder,a=r.animate,i=qm({isAnimatingOpenOnMount:t,placeholder:n,animate:a});return{display:n.display,boxSizing:"border-box",width:i.width,height:i.height,marginTop:i.margin.top,marginRight:i.margin.right,marginBottom:i.margin.bottom,marginLeft:i.margin.left,flexShrink:"0",flexGrow:"0",pointerEvents:"none",transition:a!=="none"?Nr.placeholder:null}};function Km(e){var r=C.useRef(null),t=B(function(){r.current&&(clearTimeout(r.current),r.current=null)},[]),n=e.animate,a=e.onTransitionEnd,i=e.onClose,o=e.contextId,l=C.useState(e.animate==="open"),c=l[0],u=l[1];C.useEffect(function(){return c?n!=="open"?(t(),u(!1),Mn):r.current?Mn:(r.current=setTimeout(function(){r.current=null,u(!1)}),t):Mn},[n,c,t]);var f=B(function(d){d.propertyName==="height"&&(a(),n==="close"&&i())},[n,i,a]),s=Ym({isAnimatingOpenOnMount:c,animate:e.animate,placeholder:e.placeholder});return A.createElement(e.placeholder.tagName,{style:s,"data-rbd-placeholder-context-id":o,onTransitionEnd:f,ref:e.innerRef})}var Jm=A.memo(Km),Ga=A.createContext(null),Xm=function(e){xl(r,e);function r(){for(var n,a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return n=e.call.apply(e,[this].concat(i))||this,n.state={isVisible:!!n.props.on,data:n.props.on,animate:n.props.shouldAnimate&&n.props.on?"open":"none"},n.onClose=function(){n.state.animate==="close"&&n.setState({isVisible:!1})},n}r.getDerivedStateFromProps=function(a,i){return a.shouldAnimate?a.on?{isVisible:!0,data:a.on,animate:"open"}:i.isVisible?{isVisible:!0,data:i.data,animate:"close"}:{isVisible:!1,animate:"close",data:null}:{isVisible:!!a.on,data:a.on,animate:"none"}};var t=r.prototype;return t.render=function(){if(!this.state.isVisible)return null;var a={onClose:this.onClose,data:this.state.data,animate:this.state.animate};return this.props.children(a)},r}(A.PureComponent),to={dragging:5e3,dropAnimating:4500},Zm=function(r,t){return t?Nr.drop(t.duration):r?Nr.snap:Nr.fluid},Qm=function(r,t){return r?t?Vr.opacity.drop:Vr.opacity.combining:null},eh=function(r){return r.forceShouldAnimate!=null?r.forceShouldAnimate:r.mode==="SNAP"};function rh(e){var r=e.dimension,t=r.client,n=e.offset,a=e.combineWith,i=e.dropping,o=!!a,l=eh(e),c=!!i,u=c?Jn.drop(n,o):Jn.moveTo(n),f={position:"fixed",top:t.marginBox.top,left:t.marginBox.left,boxSizing:"border-box",width:t.borderBox.width,height:t.borderBox.height,transition:Zm(l,i),transform:u,opacity:Qm(o,c),zIndex:c?to.dropAnimating:to.dragging,pointerEvents:"none"};return f}function th(e){return{transform:Jn.moveTo(e.offset),transition:e.shouldAnimateDisplacement?null:"none"}}function nh(e){return e.type==="DRAGGING"?rh(e):th(e)}function ah(e,r,t){t===void 0&&(t=ce);var n=window.getComputedStyle(r),a=r.getBoundingClientRect(),i=jl(a,n),o=At(i,t),l={client:i,tagName:r.tagName.toLowerCase(),display:n.display},c={x:i.marginBox.width,y:i.marginBox.height},u={descriptor:e,placeholder:l,displaceBy:c,client:i,page:o};return u}function ih(e){var r=Wa("draggable"),t=e.descriptor,n=e.registry,a=e.getDraggableRef,i=e.canDragInteractiveElements,o=e.shouldRespectForcePress,l=e.isEnabled,c=z(function(){return{canDragInteractiveElements:i,shouldRespectForcePress:o,isEnabled:l}},[i,l,o]),u=B(function(p){var v=a();return v||I(!1),ah(t,v,p)},[t,a]),f=z(function(){return{uniqueId:r,descriptor:t,options:c,getDimension:u}},[t,u,c,r]),s=C.useRef(f),d=C.useRef(!0);De(function(){return n.draggable.register(s.current),function(){return n.draggable.unregister(s.current)}},[n.draggable]),De(function(){if(d.current){d.current=!1;return}var p=s.current;s.current=f,n.draggable.update(f,p)},[f,n.draggable])}function oh(e){e.preventDefault()}function lh(e){var r=C.useRef(null),t=B(function(P){r.current=P},[]),n=B(function(){return r.current},[]),a=Bt(on),i=a.contextId,o=a.dragHandleUsageInstructionsId,l=a.registry,c=Bt(Ga),u=c.type,f=c.droppableId,s=z(function(){return{id:e.draggableId,index:e.index,type:u,droppableId:f}},[e.draggableId,e.index,u,f]),d=e.children,p=e.draggableId,v=e.isEnabled,m=e.shouldRespectForcePress,h=e.canDragInteractiveElements,b=e.isClone,y=e.mapped,w=e.dropAnimationFinished;if(!b){var D=z(function(){return{descriptor:s,registry:l,getDraggableRef:n,canDragInteractiveElements:h,shouldRespectForcePress:m,isEnabled:v}},[s,l,n,h,m,v]);ih(D)}var M=z(function(){return v?{tabIndex:0,role:"button","aria-describedby":o,"data-rbd-drag-handle-draggable-id":p,"data-rbd-drag-handle-context-id":i,draggable:!1,onDragStart:oh}:null},[i,o,p,v]),T=B(function(P){y.type==="DRAGGING"&&y.dropping&&P.propertyName==="transform"&&w()},[w,y]),O=z(function(){var P=nh(y),S=y.type==="DRAGGING"&&y.dropping?T:null,k={innerRef:t,draggableProps:{"data-rbd-draggable-context-id":i,"data-rbd-draggable-id":p,style:P,onTransitionEnd:S},dragHandleProps:M};return k},[i,M,p,y,T,t]),E=z(function(){return{draggableId:s.id,type:s.type,source:{index:s.index,droppableId:s.droppableId}}},[s.droppableId,s.id,s.index,s.type]);return d(O,y.snapshot,E)}var Ac=function(e,r){return e===r},Tc=function(e){var r=e.combine,t=e.destination;return t?t.droppableId:r?r.droppableId:null},ch=function(r){return r.combine?r.combine.draggableId:null},sh=function(r){return r.at&&r.at.type==="COMBINE"?r.at.combine.draggableId:null};function uh(){var e=le(function(a,i){return{x:a,y:i}}),r=le(function(a,i,o,l,c){return{isDragging:!0,isClone:i,isDropAnimating:!!c,dropAnimation:c,mode:a,draggingOver:o,combineWith:l,combineTargetFor:null}}),t=le(function(a,i,o,l,c,u,f){return{mapped:{type:"DRAGGING",dropping:null,draggingOver:c,combineWith:u,mode:i,offset:a,dimension:o,forceShouldAnimate:f,snapshot:r(i,l,c,u,null)}}}),n=function(i,o){if(i.isDragging){if(i.critical.draggable.id!==o.draggableId)return null;var l=i.current.client.offset,c=i.dimensions.draggables[o.draggableId],u=we(i.impact),f=sh(i.impact),s=i.forceShouldAnimate;return t(e(l.x,l.y),i.movementMode,c,o.isClone,u,f,s)}if(i.phase==="DROP_ANIMATING"){var d=i.completed;if(d.result.draggableId!==o.draggableId)return null;var p=o.isClone,v=i.dimensions.draggables[o.draggableId],m=d.result,h=m.mode,b=Tc(m),y=ch(m),w=i.dropDuration,D={duration:w,curve:ka.drop,moveTo:i.newHomeClientOffset,opacity:y?Vr.opacity.drop:null,scale:y?Vr.scale.drop:null};return{mapped:{type:"DRAGGING",offset:i.newHomeClientOffset,dimension:v,dropping:D,draggingOver:b,combineWith:y,mode:h,forceShouldAnimate:null,snapshot:r(h,p,b,y,D)}}}return null};return n}function Nc(e){return{isDragging:!1,isDropAnimating:!1,isClone:!1,dropAnimation:null,mode:null,draggingOver:null,combineTargetFor:e,combineWith:null}}var dh={mapped:{type:"SECONDARY",offset:ce,combineTargetFor:null,shouldAnimateDisplacement:!0,snapshot:Nc(null)}};function fh(){var e=le(function(o,l){return{x:o,y:l}}),r=le(Nc),t=le(function(o,l,c){return l===void 0&&(l=null),{mapped:{type:"SECONDARY",offset:o,combineTargetFor:l,shouldAnimateDisplacement:c,snapshot:r(l)}}}),n=function(l){return l?t(ce,l,!0):null},a=function(l,c,u,f){var s=u.displaced.visible[l],d=!!(f.inVirtualList&&f.effected[l]),p=rn(u),v=p&&p.draggableId===l?c:null;if(!s){if(!d)return n(v);if(u.displaced.invisible[l])return null;var m=xr(f.displacedBy.point),h=e(m.x,m.y);return t(h,v,!0)}if(d)return n(v);var b=u.displacedBy.point,y=e(b.x,b.y);return t(y,v,s.shouldAnimate)},i=function(l,c){if(l.isDragging)return l.critical.draggable.id===c.draggableId?null:a(c.draggableId,l.critical.draggable.id,l.impact,l.afterCritical);if(l.phase==="DROP_ANIMATING"){var u=l.completed;return u.result.draggableId===c.draggableId?null:a(c.draggableId,u.result.draggableId,u.impact,u.afterCritical)}return null};return i}var ph=function(){var r=uh(),t=fh(),n=function(i,o){return r(i,o)||t(i,o)||dh};return n},vh={dropAnimationFinished:uc},gh=Rl(ph,vh,null,{context:Fa,pure:!0,areStatePropsEqual:Ac})(lh);function kc(e){var r=Bt(Ga),t=r.isUsingCloneFor;return t===e.draggableId&&!e.isClone?null:A.createElement(gh,e)}function mh(e){var r=typeof e.isDragDisabled=="boolean"?!e.isDragDisabled:!0,t=!!e.disableInteractiveElementBlocking,n=!!e.shouldRespectForcePress;return A.createElement(kc,F({},e,{isClone:!1,isEnabled:r,canDragInteractiveElements:t,shouldRespectForcePress:n}))}function hh(e){var r=C.useContext(on);r||I(!1);var t=r.contextId,n=r.isMovementAllowed,a=C.useRef(null),i=C.useRef(null),o=e.children,l=e.droppableId,c=e.type,u=e.mode,f=e.direction,s=e.ignoreContainerClipping,d=e.isDropDisabled,p=e.isCombineEnabled,v=e.snapshot,m=e.useClone,h=e.updateViewportMaxScroll,b=e.getContainerForClone,y=B(function(){return a.current},[]),w=B(function(k){a.current=k},[]);B(function(){return i.current},[]);var D=B(function(k){i.current=k},[]),M=B(function(){n()&&h({maxScroll:gc()})},[n,h]);Hm({droppableId:l,type:c,mode:u,direction:f,isDropDisabled:d,isCombineEnabled:p,ignoreContainerClipping:s,getDroppableRef:y});var T=A.createElement(Xm,{on:e.placeholder,shouldAnimate:e.shouldAnimatePlaceholder},function(k){var R=k.onClose,j=k.data,L=k.animate;return A.createElement(Jm,{placeholder:j,onClose:R,innerRef:D,animate:L,contextId:t,onTransitionEnd:M})}),O=z(function(){return{innerRef:w,placeholder:T,droppableProps:{"data-rbd-droppable-id":l,"data-rbd-droppable-context-id":t}}},[t,l,T,w]),E=m?m.dragging.draggableId:null,P=z(function(){return{droppableId:l,type:c,isUsingCloneFor:E}},[l,E,c]);function S(){if(!m)return null;var k=m.dragging,R=m.render,j=A.createElement(kc,{draggableId:k.draggableId,index:k.source.index,isClone:!0,isEnabled:!0,shouldRespectForcePress:!1,canDragInteractiveElements:!0},function(L,V){return R(L,V,k)});return Qc.createPortal(j,b())}return A.createElement(Ga.Provider,{value:P},o(O,v),S())}var Rn=function(r,t){return r===t.droppable.type},no=function(r,t){return t.draggables[r.draggable.id]},bh=function(){var r={placeholder:null,shouldAnimatePlaceholder:!0,snapshot:{isDraggingOver:!1,draggingOverWith:null,draggingFromThisWith:null,isUsingPlaceholder:!1},useClone:null},t=F({},r,{shouldAnimatePlaceholder:!1}),n=le(function(o){return{draggableId:o.id,type:o.type,source:{index:o.index,droppableId:o.droppableId}}}),a=le(function(o,l,c,u,f,s){var d=f.descriptor.id,p=f.descriptor.droppableId===o;if(p){var v=s?{render:s,dragging:n(f.descriptor)}:null,m={isDraggingOver:c,draggingOverWith:c?d:null,draggingFromThisWith:d,isUsingPlaceholder:!0};return{placeholder:f.placeholder,shouldAnimatePlaceholder:!1,snapshot:m,useClone:v}}if(!l)return t;if(!u)return r;var h={isDraggingOver:c,draggingOverWith:d,draggingFromThisWith:null,isUsingPlaceholder:!0};return{placeholder:f.placeholder,shouldAnimatePlaceholder:!0,snapshot:h,useClone:null}}),i=function(l,c){var u=c.droppableId,f=c.type,s=!c.isDropDisabled,d=c.renderClone;if(l.isDragging){var p=l.critical;if(!Rn(f,p))return t;var v=no(p,l.dimensions),m=we(l.impact)===u;return a(u,s,m,m,v,d)}if(l.phase==="DROP_ANIMATING"){var h=l.completed;if(!Rn(f,h.critical))return t;var b=no(h.critical,l.dimensions);return a(u,s,Tc(h.result)===u,we(h.impact)===u,b,d)}if(l.phase==="IDLE"&&l.completed&&!l.shouldFlush){var y=l.completed;if(!Rn(f,y.critical))return t;var w=we(y.impact)===u,D=!!(y.impact.at&&y.impact.at.type==="COMBINE"),M=y.critical.droppable.id===u;return w?D?r:t:M?r:t}return t};return i},yh={updateViewportMaxScroll:Ev};function xh(){return document.body||I(!1),document.body}var wh={mode:"standard",type:"DEFAULT",direction:"vertical",isDropDisabled:!1,isCombineEnabled:!1,ignoreContainerClipping:!1,renderClone:null,getContainerForClone:xh},Mc=Rl(bh,yh,null,{context:Fa,pure:!0,areStatePropsEqual:Ac})(hh);Mc.defaultProps=wh;const Dh=e=>{const r=new Date(e),t=r.getDate(),n=r.getMonth()+1,a=r.getFullYear();return`${t<10?"0":""}${t}/${n<10?"0":""}${n}/${a}`},Sh=e=>{const r=new Date(e),t=new Date,n=r.getDate(),a=r.getMonth(),i=r.getFullYear(),o=t.getDate(),l=t.getMonth(),c=t.getFullYear();if(n<=o&&a<=l&&i<=c)return!0},ao=e=>{switch(e){case"blue":return"#8fa1d0";case"pink":return"#e09cb5";case"green":return"#bedbb0";case"gray":return"rgba(255, 255, 255, 0.3)";default:return"rgba(255, 255, 255, 0.3)"}},Ch=e=>{switch(e){case"blue":return"Low";case"pink":return"Medium";case"green":return"High";case"gray":return"Without priority";default:return"Without priority"}},Oh=({card:e})=>{const[r,t]=C.useState(!1),[n,a]=C.useState(null),[i,o]=C.useState(null),[l,c]=C.useState(null),[u,f]=C.useState(null),[s,d]=C.useState(null),[p,v]=C.useState(null),[m,h]=C.useState({x:null,y:null}),b=rr(),y=j=>{const L=j.clientX,V=j.clientY;h({x:L,y:V})},{isModalOpen:w,openModal:D,closeModal:M}=fr(),T=j=>{b(es(j))},O=()=>{t(j=>!j)},E=(j,L,V)=>{b(co({columnId:j,cardId:L,owner:V}))},[P]=lo(),S=P.get("priority"),R=(()=>{switch(S){case"low":return e.filter(j=>j.color==="blue");case"medium":return e.filter(j=>j.color==="pink");case"high":return e.filter(j=>j.color==="green");case"without":return e.filter(j=>j.color==="gray");case"all":return e;default:return e}})();return g.jsxs(g.Fragment,{children:[g.jsxs(zd,{children:[R&&R.map(({_id:j,title:L,description:V,color:G,deadline:re,owner:J},Q)=>g.jsx(mh,{draggableId:j,index:Q,children:(_,X)=>g.jsx("div",{ref:_.innerRef,..._.draggableProps,..._.dragHandleProps,children:g.jsxs(Ud,{$prioritycolor:ao(G),$isdragging:X.isDragging,children:[g.jsx(Hd,{children:L}),g.jsx(qd,{children:g.jsx(Yd,{line:2,element:"span",truncateText:"…",text:V})}),g.jsxs(Kd,{children:[g.jsxs("div",{children:[g.jsx(yi,{children:"Priority"}),g.jsx(Jd,{$prioritycolor:ao(G),children:Ch(G)})]}),g.jsxs("div",{children:[g.jsx(yi,{children:"Deadline"}),g.jsx(Xd,{children:Dh(re)})]}),g.jsxs(Zd,{children:[Sh(re)&&g.jsx("li",{children:g.jsx(mt,{children:g.jsx(dr,{className:"bell",children:g.jsx("use",{href:ve+"#icon-bell"})})})}),g.jsx("li",{children:g.jsx(mt,{onClick:()=>{O(),a(j),v(J),y(event)},children:g.jsx(dr,{children:g.jsx("use",{href:ve+"#icon-arrow-circle-broken-right"})})})}),g.jsx("li",{children:g.jsx(mt,{onClick:()=>{D(),a(j),o(L),f(G),c(V),d(re)},children:g.jsx(dr,{children:g.jsx("use",{href:ve+"#icon-pencil"})})})}),g.jsx("li",{children:g.jsx(mt,{onClick:()=>T(j),children:g.jsx(dr,{children:g.jsx("use",{href:ve+"#icon-trash"})})})})]})]})]},j)})},j)),g.jsx(rf,{isOpen:r,onClose:O,onSelectStatus:E,cardId:n,owner:p,x:m.x,y:m.y})]}),g.jsx(Gd,{modalStateSwapper:M,isModalOpen:w,cardId:n,cardTitle:i,cardColor:u,cardDescription:l,cardDeadline:s})]})},Ih=N(ta)`
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
`,Eh=N.button`
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
`,Ph=_t().shape({title:$e().min("1").required("specify a column name")}),Ah=({isModalOpen:e,modalStateSwapper:r})=>{const t=Lt(ra),n=rr(),a={title:""},i=({title:o},l)=>{const c=t.result._id;n(rs({dashboardId:c,title:o})),l.resetForm(),r()};return g.jsx(Wt,{modalIsOpen:e,closeModal:r,title:"Add column",maxWidth:"335px",children:g.jsx(po,{children:g.jsx(Gt,{initialValues:a,validationSchema:Ph,onSubmit:i,children:g.jsxs(vo,{children:[g.jsxs(go,{children:[g.jsx(mo,{name:"title",component:"div"}),g.jsx(Ih,{type:"text",id:"title",name:"title",placeholder:"title",autoComplete:"off"})]}),g.jsxs(Eh,{type:"submit",children:[g.jsx(ho,{children:g.jsx(bo,{children:g.jsx("use",{href:ve+"#icon-plus"})})}),"Add"]})]})})})})},Th=N(ta)`
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
`,Nh=N.button`
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
`,kh=_t().shape({title:$e().min("6").required("specify a column name")}),Mh=({isModalOpen:e,modalStateSwapper:r,title:t,columnId:n})=>{const a=rr(),i={title:t||""},o=({title:l},c)=>{a(ts({columnId:n,title:l})),c.resetForm(),r()};return g.jsx(Wt,{modalIsOpen:e,closeModal:r,title:"Edit column",maxWidth:"335px",children:g.jsx(po,{children:g.jsx(Gt,{initialValues:i,validationSchema:kh,onSubmit:o,children:g.jsxs(vo,{children:[g.jsxs(go,{children:[g.jsx(mo,{name:"title",component:"div"}),g.jsx(Th,{type:"text",id:"title",name:"title",placeholder:"title",autoComplete:"off"})]}),g.jsxs(Nh,{type:"submit",children:[g.jsx(ho,{children:g.jsx(bo,{children:g.jsx("use",{href:ve+"#icon-plus"})})}),"Add"]})]})})})})};Ft.setAppElement("#root");const Rh=_t().shape({title:$e().required("Title is required"),description:$e().required("Description is required"),color:$e().required("Color selection is required"),deadline:xo().required("Deadline is required")});function Bh({isModalOpen:e,modalStateSwapper:r,columnId:t}){const[n,a]=C.useState(new Date),i=rr(),{isModalOpen:o,openModal:l,closeModal:c}=fr(),u={overlay:{backgroundColor:"rgb(21, 21, 21, 0.75)"},content:{width:"233px",height:"254px",margin:"auto",padding:0,border:"none",borderRadius:"8px"}},f=(p,{setSubmitting:v,resetForm:m})=>{const h={columnId:t,title:p.title,description:p.description,color:p.color,deadline:n};i(ns(h)),v(!1),m(),r(),setTimeout(()=>{a(new Date)},1e3)},s=(p,v)=>["Su","Mo","Tu","We","Th","Fr","Sa"][v.getDay()],d=p=>{const v=new Date(p),m=v.getDate(),h=v.toLocaleString("en",{month:"long"});return`${v.toLocaleString("en",{weekday:"long"})}, ${h} ${m}`};return g.jsx(g.Fragment,{children:g.jsxs(Wt,{modalIsOpen:e,closeModal:r,title:"Add card",maxWidth:"350px",children:[g.jsx(Gt,{initialValues:{title:"",description:"",color:"gray",deadline:new Date},validationSchema:Rh,onSubmit:f,children:({values:p,handleChange:v,handleSubmit:m})=>g.jsxs(ol,{onSubmit:m,children:[g.jsxs(It,{children:[g.jsx(fl,{type:"text",name:"title",onChange:v,value:p.title,placeholder:"Title"}),g.jsx(hl,{name:"title",component:"div",className:"error"})]}),g.jsxs(It,{children:[g.jsx(ll,{name:"description",onChange:v,value:p.description,placeholder:"Description"}),g.jsx(bl,{name:"description",component:"div",className:"error"})]}),g.jsx(ul,{children:"Label color"}),g.jsxs(dl,{onChange:v,value:p.color,children:[g.jsxs(Ge,{children:[g.jsx(_e,{type:"radio",name:"color",value:"blue",className:"blue",checked:p.color==="blue",onChange:v}),g.jsx(Be,{className:"blue"})]}),g.jsxs(Ge,{children:[g.jsx(_e,{type:"radio",name:"color",value:"pink",className:"pink",checked:p.color==="pink",onChange:v}),g.jsx(Be,{className:"pink"})]}),g.jsxs(Ge,{children:[g.jsx(_e,{type:"radio",name:"color",value:"green",className:"green",checked:p.color==="green",onChange:v}),g.jsx(Be,{className:"green"})]}),g.jsxs(Ge,{children:[g.jsx(_e,{type:"radio",name:"color",value:"gray",className:"gray",checked:p.color==="gray",onChange:v}),g.jsx(Be,{className:"gray"})]})]}),g.jsx(sl,{children:"Deadline"}),g.jsxs(cl,{onClick:l,children:[g.jsx(pl,{children:d(n)}),g.jsx(yl,{children:g.jsx("use",{href:ve+"#icon-chevron-down"})})]}),g.jsxs(ml,{type:"submit",children:[g.jsx(vl,{children:g.jsx(gl,{children:g.jsx("use",{href:ve+"#icon-plus"})})}),"Add"]})]})}),g.jsx(Ft,{isOpen:o,onRequestClose:c,style:u,closeTimeoutMS:750,children:g.jsx(il,{formatShortWeekday:s,selectedDate:new Date,onChange:a,onClickDay:c,minDate:new Date,prevLabel:"<",nextLabel:">"})})]})})}const jh=N.div`
	display: flex;
	align-items: flex-start;

	width: 100%;

	overflow-x: auto;
	overflow-y: hidden;

	@media screen and (max-width: 1439px) {
		width: 736px;
		height: calc(100vh - 180px);
	}

	@media screen and (min-width: 1440px) {
		width: calc(100vw - 308px);
		height: calc(100vh - 118px);

		padding-bottom: 10px;
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
`,Lh=N.ul`
	display: flex;
	gap: 34px;
	height: 100%;
	padding-bottom: 10px;
`,Fh=N.li`
	display: flex;
	flex-direction: column;
	width: 100%;

	@media screen and (min-width: 375px) {
		width: 335px;
		min-width: 335px;
	}
`,Wh=N.button`
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
`,_h=N.button`
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
`,Gh=N.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 28px;
	height: 28px;
	border-radius: 6px;
	background-color: var(--add-column-icon-wrap-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,$h=N.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 28px;
	height: 28px;
	border-radius: 6px;
	background-color: var(--shared-black-plus-button);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Vh=N.svg`
	width: 14px;
	height: 14px;
	stroke: var(--add-column-icon-plus-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,zh=N.svg`
	width: 14px;
	height: 14px;
	stroke: var(--add-card-icon-plus-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Uh=N.div`
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
`,Hh=N.h3`
	font-weight: 500;
	font-size: 14px;
	letter-spacing: -0.02em;
	color: var(--card-title-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,qh=N.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
`,io=N.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	border: none;
	background-color: transparent;
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
	/* z-index: 1000; */
`,oo=N.svg`
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
`,Yh=()=>{const[e,r]=C.useState(null),[t,n]=C.useState(null),{isModalOpen:a,openModal:i,closeModal:o}=fr(),{isModalOpen:l,openModal:c,closeModal:u}=fr(),{isModalOpen:f,openModal:s,closeModal:d}=fr(),{column:p}=Lt(ra),{state:v}=so(),m=rr();C.useEffect(()=>{p===void 0&&v&&m(uo(v.id))},[p,m,v==null?void 0:v.id,v]);const h=y=>{m(as(y))};C.useEffect(()=>{if(p){const y={};p.forEach(w=>{y[w._id]={columnId:w._id,items:w.card}}),n(y)}},[p]);const b=(y,w)=>{if(!y.destination)return;const{source:D,destination:M}=y,T=w[D.droppableId],O=T.items[D.index],E=w[M.droppableId],P={card:O,currentColumnId:T.columnId,newColumnId:E.columnId,currentCardIdx:D.index,newCardIdx:M.index};m(is(P)),m(co({columnId:M.droppableId,cardId:O._id,owner:O.owner}))};return g.jsxs(jh,{children:[g.jsx(Mm,{onDragEnd:y=>{b(y,t)},children:g.jsx(Lh,{children:p===void 0?g.jsx(g.Fragment,{}):p.map(({_id:y,title:w,card:D},M)=>g.jsx(Mc,{droppableId:y,children:T=>g.jsxs(Fh,{ref:T.innerRef,...T.droppableProps,children:[g.jsx("div",{children:g.jsxs(Uh,{children:[g.jsx(Hh,{children:w}),g.jsxs(qh,{children:[g.jsx(io,{onClick:()=>{c(),r(y)},children:g.jsx(oo,{children:g.jsx("use",{href:ve+"#icon-pencil"})})}),g.jsx(io,{onClick:()=>h(y),children:g.jsx(oo,{children:g.jsx("use",{href:ve+"#icon-trash"})})})]})]})}),g.jsxs("div",{children:[g.jsx(Oh,{card:D}),g.jsxs(_h,{onClick:()=>{s(),r(y)},children:[g.jsx($h,{children:g.jsx(zh,{children:g.jsx("use",{href:ve+"#icon-plus"})})}),"Add Card"]})]}),T.placeholder]},y)},M))})}),g.jsxs(Wh,{onClick:i,children:[g.jsx(Gh,{children:g.jsx(Vh,{children:g.jsx("use",{href:ve+"#icon-plus"})})}),"Add column"]}),g.jsx(Qa,{onClick:o,className:a===!0&&"active"}),g.jsx(Ah,{modalStateSwapper:o,isModalOpen:a}),g.jsx(Qa,{onClick:u,className:l===!0&&"active"}),g.jsx(Mh,{modalStateSwapper:u,isModalOpen:l,columnId:e}),g.jsx(Bh,{modalStateSwapper:d,isModalOpen:f,columnId:e})]})},Kh=N.div`
	flex-grow: 1;
	padding-top: 14px;

	padding-left: 20px;
	padding-right: 20px;
	background-color: var(--secondary-background-color);
	background-image: url(${e=>e.$bcgurl});
	background-repeat: no-repeat;

	// background-position-y: center;

	background-size: cover;

	@media screen and (max-width: 1439px) {
		padding: 13px 32px 32px 32px;
		height: calc(100vh - 180px);
	}

	@media screen and (min-width: 1440px) {
		padding: 10px 24px 8px 24px;

		height: calc(100vh - 116px);
	}

	@media screen and (max-width: 767px) {
		padding: 7px 20px 24px 20px;
		height: calc(100vh - 180px);
	}
`,Jh=N.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`,Xh=N.p`
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
`,Zh=N.span`
	color: var(--welcome-message-text-accent-color);
`,nb=()=>{var p;const[e,r]=C.useState(!1),[t,n]=C.useState(""),a=C.useRef(!0),{boardName:i}=os(),o=ls(),l=so(),c=Lt(ds),u=rr(),[f,s]=C.useState(c),d=()=>c.filter(m=>m.title===i);return C.useEffect(()=>{n(i)},[l.pathname,i]),C.useEffect(()=>{var v;if(s(c),!(a.current!==!0&&i!==t)){if(c.length===0&&o("/home",{replace:!0}),f.length!==c.length&&i&&c.length>0&&u(uo((v=c[c.length-1])==null?void 0:v._id)),c.length>0&&!i){r(!0);const m=c[c.length-1]??"";n(m.title),o(`/home/${m.title}`,{replace:!0,state:{id:m._id}}),r(!1)}a.current=!1}},[c,o,i,t,f.length,u]),g.jsx(Kh,{$bcgurl:(p=d()[0])==null?void 0:p.backgroundURL,children:e?g.jsx(cs,{}):i===void 0&&g.jsx(Jh,{children:g.jsxs(Xh,{children:["Before starting your project, it is essential"," ",g.jsx(Zh,{children:"to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})||i!==void 0&&g.jsxs(g.Fragment,{children:[g.jsx(Os,{boardName:i}),g.jsx(Yh,{})]})})};export{nb as default};
