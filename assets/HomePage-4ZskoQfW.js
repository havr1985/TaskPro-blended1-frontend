import{u as t,b as C,s as q,r as u,a as k,j as e,c as D,L as le,d as ce,B,e as de,f as V,h as pe,N as Q,i as ue,k as H,l as be,m as he,n as xe,o as me,C as ge,O as we}from"./index-54D8sqGM.js";import{i as j}from"./icons-I0FOP6sp.js";import{S as E,a as X,M as Y,F as z,E as G,T as J,b as I,R as M,I as K,c as Z,D as L,B as ee,C as te,A as oe,d as re,P as ie,s as ae,u as P,O as ne,e as fe,H as ve,f as je}from"./HomePage.styled-nlyi_b8i.js";import{c as F,a as N,F as se,u as ye}from"./index.esm-3PrddPqX.js";/* empty css                      */const ke=t.header`
	height: 68px;

	background-color: var(--header-background-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
	display: flex;
	align-items: center;

	@media (min-width: 320px) {
		height: 60px;

		padding: 20px;
	}

	@media (min-width: 768px) {
		padding: 18px 32px;
	}

	@media (min-width: 1440px) {
		padding: 18px 24px;
	}
`,_e=t.div`
	@media (min-width: 1440px) {
		display: none;
	}
`,ze=t.div`
	display: flex;
	column-gap: 14px;
	align-items: center;
	margin-left: auto;
`,Ce=t.div`
	display: flex;
	align-items: center;
	color: var(--primary-heading-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
	column-gap: 8px;
	cursor: pointer;
`,Be=t.button`
	background-color: transparent;
	border: none;
	padding: 0;
	cursor: pointer;
`,Te=t.svg`
	width: 24px;
	height: 24px;
	fill: transparent;
	stroke: var(--primary-icon-stroke-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Se=t.svg`
	width: 32px;
	height: 32px;
	stroke: var(--primary-icon-stroke-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
	fill: transparent;
`,Ie=t.img`
	width: 32px;
	height: 32px;
	border-radius: 8px;
`,Me=t.p`
	&:hover {
		color: var(--secondary-button-color);
	}
`,Le=t.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  /* min-height: 68px; */
  /* padding-right: 24px; */
  color: var(--primary-heading-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  /* background-color: var(--header-background-color); */

  /* @media (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 1439px) {
    padding-left: 20px;
    padding-right: 32px;
  } */
`,Ne=t.div`
  position: relative;
`,qe=t.ul`
  position: absolute;
  display: ${o=>o.open?"block":"none"};
  top: 20px;
  left: -105px;
  margin: 0;
  padding: 18px 44px 18px 18px;
  list-style: none;
  border: solid 1px var(--theme-switcher-dropdown-border-color);
  border-radius: 8px;
  background-color: var(--header-background-color);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
`,O=t.li`
  padding: 5px 10px;
  cursor: pointer;
  color: var(--theme-switcher-dropdown-text-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: var(--theme-switcher-dropdown-hover-color);
  }

  ${o=>o.selected&&`
  color: var(--primary-button-color);
    `}
`,Ee=t.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: var(--secondary-button-color);
    transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`,De=t.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--primary-icon-stroke-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Oe=()=>{const o=C(q),[i,r]=u.useState(o.theme||"dark");return u.useLayoutEffect(()=>{document.documentElement.setAttribute("data-theme",i)},[i]),{theme:i,setTheme:r}},$e=(o,i)=>{const r=a=>{o.current&&!o.current.contains(a.target)&&i()};u.useEffect(()=>(document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}))},Ue=()=>{const o=k(),{theme:i,setTheme:r}=Oe(),a=C(q),[c,d]=u.useState(!1),p=u.useRef(null);$e(p,()=>{d(!1)});const b=()=>{d(!c)},x=()=>{r("light"),o(D({theme:"light"})),b()},g=()=>{r("dark"),o(D({theme:"dark"})),b()},f=()=>{r("violet"),o(D({theme:"violet"})),b()};return e.jsxs(Le,{ref:p,children:[e.jsxs(Ee,{onClick:b,children:["Theme",e.jsx(De,{children:e.jsx("use",{href:j+"#icon-chevron-down"})})]}),e.jsx(Ne,{theme:i,children:e.jsxs(qe,{open:c,children:[e.jsx(O,{onClick:()=>x(),selected:a.theme==="light",children:"Light"}),e.jsx(O,{onClick:()=>g(),selected:a.theme==="dark",children:"Dark"}),e.jsx(O,{onClick:()=>f(),selected:a.theme==="violet",children:"Violet"})]})})]})},We=t.button`
  cursor: pointer;
  min-width: 100%;
  height: 49px;
  border-radius: 8px;
  border: none;

  background: var(--plus-button-color);
  transition: all 300ms;
  &:hover {
    background: var(--plus-button-hover-color);
  }
`,He=({children:o})=>e.jsx(We,{type:"submit","aria-label":"Send profile",children:o}),Pe=t.img`
  height: 68px;
  width: 68px;
  border-radius: 8px;
`,Fe=t.label`
  cursor: pointer;
  height: 24px;
  width: 24px;
  background-color: var(--user-edit-icon-plus-fill-color);
  border-radius: 8px;
  outline: none;
  border: none;
  color: black;
  position: absolute;
  bottom: -12px;
  left: 50% -5px;
  padding-top: 3px;
  text-align: center;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: var(--user-edit-icon-plus-hover-color);
  }
`,Ae=t.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`,Re=t.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`,Ve=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;
  overflow-x: hidden;
`,$=t.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--shared-input-border-color);
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 18px;
  background-color: transparent;
  outline: none;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--shared-input-text-color);
  &:focus {
    border-color: var(--shared-input-border-hover-color);
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`,Qe=t.svg`
  height: 68px;
  width: 68px;
  border-radius: 8px;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: var(--sidebar-help-backgound-color);
  fill: white;
`,Xe=t.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`,Ye=t.svg`
  position: absolute;
  right: 18px;
  top: 14px;
  stroke: white;
  cursor: pointer;
  user-select: none;
`,Ge=t.div`
  width: 100%;
  position: relative;
`,Je=({isModalOpen:o,modalStateSwapper:i})=>{const r=k(),[a,c]=u.useState(!1),[d,p]=u.useState("password"),{email:b,username:x,avatarURL:g}=C(q),f=()=>{p(n=>n==="password"?"text":"password")},v=async n=>{c(!0);const m=n.target.files[0],h=new FormData;h.append("avatar",m);try{await r(ce(h))}catch(l){console.error("Error changing avatar:",l)}c(!1)},y=n=>{n.preventDefault();const m={},h=[...n.target.elements].slice(0,3);if(h[2].value!==""&&h[2].value.length<8)return h[2].value.split("").includes("")?B.error("Wrong password, it must be without spaces"):B.error("Wrong password, it must be at least 8 symbols!");if(h[2].value!==""&&h[2].value.length>8&&h[2].value.split("").includes(" "))return B.error("Wrong password, it must be without spaces");h.filter(({value:w})=>w).forEach(({name:w,value:s})=>m[w]=s),r(de(m)),i()};return e.jsxs(E,{modalIsOpen:o,closeModal:i,title:"Edit profile",maxWidth:"400px",children:[e.jsxs(Ae,{children:[a?e.jsx(le,{setHeight:"100 %"}):g?e.jsx(Pe,{src:g||"https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",alt:"avatar"}):e.jsx("div",{children:e.jsx(Qe,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${j}#icon-user`})})}),e.jsx(Re,{onChange:v,type:"file",id:"input__file"}),e.jsx(Fe,{htmlFor:"input__file",children:"+"})]}),e.jsxs(Ve,{autoComplete:"false",onSubmit:n=>y(n),children:[e.jsxs(Xe,{children:[e.jsx($,{autoComplete:"off",name:"username",minLength:2,maxLength:32,placeholder:"Fullname",defaultValue:x||null,type:"text"}),e.jsx($,{autoComplete:"off",name:"email",placeholder:"Email",defaultValue:b||null,type:"email"}),e.jsxs(Ge,{children:[e.jsx($,{name:"password",placeholder:"Password",type:d,autoComplete:"off"}),e.jsx(Ye,{onClick:()=>f(),className:"",width:"22px",height:"22px",children:e.jsx("use",{href:j+"#icon-password-eye"})})]})]}),e.jsx(He,{children:"Send"})]})]})},Ke=({openSideBar:o})=>{const[i,r]=u.useState(!1),{username:a,avatarURL:c}=C(q),d=()=>{r(p=>!p)};return e.jsxs(ke,{children:[e.jsx(_e,{children:e.jsx(Be,{type:"button",onClick:o,children:e.jsx(Te,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${j}#icon-burger-menu`})})})}),e.jsxs(ze,{children:[e.jsx(Ue,{}),e.jsxs(Ce,{onClick:()=>d(),children:[e.jsx(Me,{children:a}),c?e.jsx(Ie,{src:c,alt:"avatar",width:"32px",height:"32px"}):e.jsx(Se,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${j}#icon-user`})})]})]}),e.jsx(Je,{isModalOpen:i,modalStateSwapper:d})]})},Ze=t.div`
	width: 260px;
	height: 100vh;
	top: 0;
	left: 0;

	z-index: 1;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding: 24px;
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
	background-color: var(--primary-background-sidebar-color);

	@media screen and (max-width: 1439.9px) {
		position: absolute;

		left: -100%;
	}

	@media screen and (max-width: 767px) {
		width: 225px;
		height: 100vh;
		padding: 14px 14px 24px 14px;
	}

	&.active {
		left: 0;
	}
`,et=t.div`
	width: 260px;
	margin-left: -24px;
	margin-bottom: auto;

	padding: 0 24px;
	overflow-x: hidden;
	overflow-y: auto;

	scroll-snap-type: y mandatory;

	@media screen and (max-width: 767px) {
		width: 225px;
		padding: 0 14px;

		margin: 0 -14px;
	}

	&::-webkit-scrollbar {
		width: 3px;
	}

	&::-webkit-scrollbar-track {
		background: var(--tracking-area-color);
		border-radius: 12px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: var(--scroll-bar-color);
		border-radius: 12px;
		border: 12px solid var(--scroll-bar-color);
	}
`,tt=t.div`
	margin-top: 40px;
`,ot=t.div`
  display: flex;
  align-items: center;

  margin-bottom: 60px;

  @media (max-width: 767px) {
    margin-bottom: 70px;
  }

  .iconBg {
    width: 32px;
    height: 32px;

    background-color: var(--sidebar-lightning-background-color);
    transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 8px;
  }

  .iconLightning {
    fill: var(--sidebar-icon-lightning);
    transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .logoText {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    color: var(--secondary-text-sidebar-color);
    transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`,rt=({icon:o})=>e.jsxs(ot,{children:[e.jsx("div",{className:"iconBg",children:e.jsx("svg",{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${o}#icon-task-pro-lightning`})})}),e.jsx("span",{className:"logoText",children:"Task Pro"})]}),W=[{"url-mob":"no background","url-mobx2":"no background","url-tab":"no background","url-tabx2":"no background","url-desk":"no background","url-deskx2":"no background"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-15-mobile-webp-375x812_repmix.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752161/bg-15-mobile-webp-750x1624_2x_wq8hi7.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752229/bg-13-tablet-webp-768x956_ra31gx.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752229/bg-13-tablet-webp-1536x1912_2x_aee2rk.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752481/bg-09-desk-webp-1180x770_xwfemc.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752486/bg-09-desk-webp-2360x1540_2x_vigtvr.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752159/bg-11-mobile-webp-375x812_ma6ewq.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752159/bg-11-mobile-webp-750x1624_2x_mtzwzb.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-11-tablet-webp-768x956_iijpzb.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-11-tablet-webp-1536x1912_2x_krywfq.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752473/bg-02-desk-webp-1180x770_ss7k63.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752473/bg-02-desk-webp-2360x1540_2x_qjzumy.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-08-mobile-webp-375x812_o5fini.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-08-mobile-webp-750x1624_2x_wtgyts.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752226/bg-08-tablet-webp-768x956_o47udx.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-08-tablet-webp-1536x1912_2x_xoqfag.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752472/bg-01-desk-webp-1180x770_uuvvlv.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752472/bg-01-desk-webp-2360x1540_2x_dcvolo.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-06-mobile-webp-375x812_vuozes.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-06-mobile-webp-750x1624_2x_kaqfp8.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-06-tablet-webp-768x956_obho6i.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-06-tablet-webp-1536x1912_2x_riwrw6.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752476/bg-05-desk-webp-1180x770_tnpxyr.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752476/bg-05-desk-webp-2360x1540_2x_xn4ddt.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751661/bg-01-mobile-webp-375x812_qafbbj.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751686/bg-01-mobile-webp-750x1624_2x_crn0ka.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-03-tablet-webp-768x956_nlerc1.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-03-tablet-webp-1536x1912_2x_pt9vh8.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752477/bg-07-desk-webp-1180x770_y7dfhr.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752478/bg-07-desk-webp-2360x1540_2x_qpbbcp.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-14-mobile-webp-375x812_nlmg6q.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-14-mobile-webp-750x1624_2x_p65fmf.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752229/bg-14-tablet-webp-768x956_sxcqkp.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752230/bg-14-tablet-webp-1536x1912_2x_ki6xzm.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752481/bg-10-desk-webp-1180x770_gdtqq3.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752481/bg-10-desk-webp-2360x1540_2x_fvafnk.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752159/bg-12-mobile-webp-375x812_b1dng1.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-12-mobile-webp-750x1624_2x_dgjf9m.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-12-tablet-webp-768x956_r24qhb.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-12-tablet-webp-1536x1912_2x_deydvi.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752474/bg-04-desk-webp-1180x770_oc952g.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752474/bg-04-desk-webp-2360x1540_2x_ip9ef6.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-09-mobile-webp-375x812_n6dcut.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-09-mobile-webp-750x1624_2x_lnaw4u.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752226/bg-09-tablet-webp-768x956_zrjq42.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752227/bg-09-tablet-webp-1536x1912_2x_q3oqkx.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752473/bg-03-desk-webp-1180x770_a3v6ig.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752473/bg-03-desk-webp-2360x1540_2x_ezttrg.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-05-mobile-webp-375x812_wjckxc.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-05-mobile-webp-750x1624_2x_u7i1zv.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752224/bg-05-tablet-webp-768x956_mttcpy.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-05-tablet-webp-1536x1912_2x_aanq2f.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752477/bg-06-desk-webp-1180x770_vijxij.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752478/bg-06-desk-webp-2360x1540_2x_quvrxa.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751693/bg-02-mobile-webp-375x812_qbb0tm.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751707/bg-02-mobile-webp-750x1624_2x_lbzywk.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-02-tablet-webp-768x956_lqef5o.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-02-tablet-webp-1536x1912_2x_pqutsl.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752478/bg-08-desk-webp-1180x770_ipsyjr.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752479/bg-08-desk-webp-2360x1540_2x_usw7tr.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-04-mobile-webp-375x812_h7gvst.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-04-mobile-webp-750x1624_2x_dxjbi9.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-04-tablet-webp-768x956_nseddn.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752224/bg-04-tablet-webp-1536x1912_2x_hv5zmm.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752485/bg-14-desk-webp-1180x770_se11ha.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752486/bg-14-desk-webp-2360x1540_2x_wwezvb.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-10-mobile-webp-375x812_v9ejsm.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-10-mobile-webp-750x1624_2x_pdpbxo.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752227/bg-10-tablet-webp-768x956_xqotyl.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752227/bg-10-tablet-webp-1536x1912_2x_katv7y.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752482/bg-12-desk-webp-1180x770_nsnpad.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752483/bg-12-desk-webp-2360x1540_2x_mvy42x.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-07-mobile-webp-375x812_lxxlvy.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-07-mobile-webp-750x1624_2x_wirh8l.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-07-tablet-webp-768x956_cbrrv0.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752226/bg-07-tablet-webp-1536x1912_2x_y6qgjq.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752484/bg-13-desk-webp-1180x770_lgtkch.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752485/bg-13-desk-webp-2360x1540_2x_hxhizt.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752159/bg-13-mobile-webp-375x812_diuoux.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-13-mobile-webp-750x1624_2x_dnftko.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752230/bg-15-tablet-webp-768x956_noua1f.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752231/bg-15-tablet-webp-1536x1912_2x_usxrol.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752481/bg-11-desk-webp-1180x770_rldph5.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752482/bg-11-desk-webp-2360x1540_2x_aboou2.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751731/bg-03-mobile-webp-375x812_ehkzgh.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751736/bg-03-mobile-webp-750x1624_2x_fuuz9t.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-01-tablet-webp-768x956_tfohwn.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-01-tablet-webp-1536x1912_2x_pxda7s.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752486/bg-15-desk-webp-1180x770_qzywxu.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752486/bg-15-desk-webp-2360x1540_2x_rqunnb.webp"}],A=["#icon-board-square","#icon-board-star","#icon-board-loading","#icon-board-puzzle","#icon-board-container","#icon-board-lightning","#icon-board-colors","#icon-board-hexagon"],it=F().shape({title:N().required("Title is required!")}),at=({isModalOpen:o,modalStateSwapper:i,gallery:r})=>{const a=k(),[c,d]=u.useState(A[0]),[p,b]=u.useState(W[0].url),x={title:"",icon:c,bg:p},g=V(),f=n=>{n.preventDefault();const m=n.target.elements[0].value;if(!m){B.error("Title is required!");return}const h={title:m,icon:c,backgroundURL:p};i(),a(pe(h)),g(`/home/${h.title}`)},v=n=>{b(n)},y=n=>{d(n)};return e.jsx(E,{modalIsOpen:o,closeModal:i,title:"New board",maxWidth:"350px",children:e.jsx(X,{children:e.jsx(se,{initialValues:x,validationSchema:it,children:e.jsxs(Y,{onSubmit:n=>f(n),children:[e.jsxs(z,{children:[e.jsx(G,{name:"title",component:"div"}),e.jsx(J,{type:"text",id:"title",name:"title",placeholder:"Title",autoComplete:"off",autoFocus:!0})]}),e.jsxs(z,{children:[e.jsx(I,{children:"Icons "}),e.jsx(M,{children:A.map((n,m)=>e.jsxs(K,{children:[e.jsx(Z,{className:c===n?"active":"",onClick:()=>y(n),width:18,height:18,children:e.jsx("use",{href:j+n,width:18,height:18})}),e.jsx(L,{type:"radio",value:n,name:"icon"})]},m))})]}),e.jsxs(z,{children:[e.jsx(I,{children:"Backgrounds "}),e.jsx(M,{children:W.map((n,m)=>e.jsxs("label",{children:[e.jsx(ee,{onClick:()=>v(n[r]),className:p===n[r]?"active":"",children:n[r]!==""&&e.jsx(te,{$bcgurl:n[r],onClick:()=>v(n[r]),className:p===n[r]?"active":""})}),e.jsx(L,{type:"radio",value:n[r],name:"bg"})]},m))})]}),e.jsxs(oe,{type:"submit",children:[e.jsx(re,{children:e.jsx(ie,{children:e.jsx("use",{href:j+"#icon-plus"})})}),"Create"]})]})})})})},nt=t.ul`
	font-weight: 500;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: -0.02em;
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
	color: var(--sidebar-icon-edit-stroke-color);

	display: flex;
	flex-direction: column;
	gap: 4px;

	position: relative;
	width: 260px;

	margin: 0 -24px;

	@media screen and (max-width: 767px) {
		width: 225px;
		margin: 0 -14px;
	}
`,st=t.li`
	display: flex;
	align-items: center;

	height: 61px;
	cursor: pointer;

	&.active {
		color: var(--secondary-text-sidebar-color);
		background-color: var(--sidebar-help-backgound-color);
	}

	&.active .iconActive {
		stroke: var(--secondary-text-sidebar-color);
	}

	&.active::after {
		content: "";
		position: absolute;

		right: -1px;

		height: 61px;
		width: 4px;
		border-radius: 4px 0 0 4px;
		transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
		background-color: var(--logout-button-color);
	}

	.iconBoard {
		stroke: var(--sidebar-icon-edit-stroke-color);
		transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
		margin-right: 8px;
	}
`,lt=t(Q)`
	width: 100%;
	height: 61px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`,ct=t(Q)`
	width: 100%;
	height: 61px;
	display: flex;
	align-items: center;
`,dt=t.div`
	display: flex;
	align-items: center;
	margin-left: 24px;

	@media (max-width: 767px) {
		margin-left: 14px;
	}
`,pt=t.div`
	width: 122px;
	height: 21px;
`,ut=t.p`
	color: inherit;

	overflow: hidden;

	white-space: nowrap;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`,U=t.svg`
	fill: transparent;
`,bt=t.div`
	display: flex;
	align-items: center;

	margin-right: 24px;

	.iconBoard.iconEdit:hover {
		stroke: var(--primary-button-color-sidebar);
		transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
		transform: scale(1.1);
		animation: pulse 1s infinite alternate;
	}

	@media screen and (max-width: 767px) {
		margin-right: 14px;
	}
`,ht=t.button`
	height: 20px;
	border: transparent;
	background: none;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;

	padding: 0;
	&:not(:last-child) {
		margin-right: 8px;
	}
`,xt=["#icon-board-square","#icon-board-star","#icon-board-loading","#icon-board-puzzle","#icon-board-container","#icon-board-lightning","#icon-board-colors","#icon-board-hexagon"],mt=F().shape({title:N().required("Title is required!")}),gt=({isModalOpen:o,modalStateSwapper:i,gallery:r})=>{const a=k(),c=C(ae),{_id:d,title:p,icon:b,backgroundURL:x}=c.result,[g,f]=u.useState(x),[v,y]=u.useState(b),n=V(),m={title:p,icon:b,backgroundURL:x},h=s=>{s.preventDefault();const _=s.target.elements[0].value;if(!s.target.elements[0].value){B.error("Title is required!");return}const T={dashboardId:d,title:_,icon:v,backgroundURL:g};i(),a(ue(T)),a(H(d)),n(`/home/${_}`)},l=s=>{f(s)},w=s=>{y(s)};return e.jsx(E,{modalIsOpen:o,closeModal:i,title:"Edit board",maxWidth:"350px",children:e.jsx(X,{children:e.jsx(se,{initialValues:m,validationSchema:mt,children:e.jsxs(Y,{onSubmit:s=>h(s),children:[e.jsxs(z,{children:[e.jsx(G,{name:"title",component:"div"}),e.jsx(J,{type:"text",id:"title",defaultValue:p,name:"title",placeholder:"Title",autoComplete:"off",autoFocus:!0})]}),e.jsxs(z,{children:[e.jsx(I,{children:"Icons "}),e.jsx(M,{children:xt.map((s,_)=>e.jsxs(K,{children:[e.jsx(Z,{className:v===s?"active":"",onClick:()=>w(s),width:18,height:18,children:e.jsx("use",{href:j+s,width:18,height:18})}),e.jsx(L,{type:"radio",value:s,name:"icon"})]},_))})]}),e.jsxs(z,{children:[e.jsx(I,{children:"Backgraunds "}),e.jsx(M,{children:W.map((s,_)=>e.jsxs("label",{children:[e.jsx(ee,{onClick:()=>l(s[r]),className:g===s[r]?"active":"",children:s[r]!==""&&e.jsx(te,{$bcgurl:s[r],onClick:()=>l(s[r]),className:g===s[r]?"active":""})}),e.jsx(L,{type:"radio",value:s[r],name:"bg"})]},_))})]}),e.jsxs(oe,{type:"submit",children:[e.jsx(re,{children:e.jsx(ie,{children:e.jsx("use",{href:j+"#icon-plus"})})}),"Edit"]})]})})})})},wt=({icon:o,boards:i,selectedItem:r,choice:a,setUserBoards:c,isModalOpen:d,closeModal:p,setSelectedItemId:b,gallery:x,viewport:g})=>{const[f,v]=u.useState(!1),y=()=>{v(l=>!l)},n=l=>{let w="",s="";return i.forEach((_,S)=>{if(_._id===l){const T=i[S+1]?i[S+1]:i[S-1];T&&(w=`/home/${T.title}`,s=T._id)}}),{path:w,id:s}},m=k(),h=l=>{if(l){const w=m(H(n(l).id));b(w.arg)}m(be(l))};return e.jsxs(e.Fragment,{children:[i.length!==0&&e.jsx(nt,{children:i.map(l=>e.jsxs(st,{onClick:()=>a(l),className:r._id===l._id?"active":"",children:[e.jsx(lt,{to:`/home/${l.title}`,children:e.jsxs(dt,{children:[e.jsx(U,{className:"iconBoard iconActive",width:"18px",height:"18px",children:e.jsx("use",{href:`${o}${l.icon}`})}),e.jsx(pt,{children:e.jsx(ut,{children:l.title})})]})}),r._id===l._id&&e.jsxs(bt,{children:[e.jsx(ht,{onClick:()=>{g({width:window.innerWidth,height:window.innerHeight}),y()},type:"button","aria-label":"Pencil",children:e.jsx(U,{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${o}#icon-pencil`})})}),e.jsx(ct,{to:n(l._id).path,onClick:()=>h(l._id),type:"button","aria-label":"Trash",children:e.jsx(U,{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${o}#icon-trash`})})})]})]},l._id))}),e.jsx(at,{setUserBoards:c,isModalOpen:d,modalStateSwapper:p,gallery:x}),f&&e.jsx(gt,{isModalOpen:f,modalStateSwapper:y,gallery:x})]})},ft="/TaskPro-blended1-frontend/assets/plant-92SCXr2v.png",vt=t.div`
  width: 212px;
  height: 272px;

  padding: 20px;
  margin-bottom: 24px;

  border-radius: 8px;
  background-color: var(--sidebar-help-backgound-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  @media (max-width: 767px) {
    width: 197px;
    height: 238px;

    padding: 14px;
  }
  .img-plant {
    margin-bottom: 14px;
  }
`,jt=t.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;

  width: 172px;
  height: 102px;

  margin-bottom: 18px;

  color: var(--secondary-text-sidebar-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 16px;

    width: 168px;
    height: 80px;
  }

  .appName {
    transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
    color: var(--welcome-message-text-accent-color);
  }
`,yt=t.button`
  height: 20px;
  border: transparent;
  background: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  padding: 0;

  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: var(--secondary-text-sidebar-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  .iconHelp {
    stroke: var(--secondary-text-sidebar-color);
    fill: var(--sidebar-icon-fill-color);
    transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
    margin-right: 8px;
  }
`,kt=t.input`
  position: relative;
  width: 100%;
  height: 49px;
  padding: 14px 18px;

  color: var(--shared-input-text-color);

  font-size: 14px;
  font-family: "Poppins";
  letter-spacing: -0.28px;

  background-color: transparent;
  border: 1px solid;

  border-color: var(--shared-input-border-color);

  outline: none;
  border-radius: 8px;

  opacity: 0.4;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    font-size: 14px;
    font-family: "Poppins";
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
    border-color: var(--shared-input-border-hover-color);
  }
`,R=t.div`
position: absolute;
bottom: -15px;
right: 0;
font-size: 11px;
font-weight: 400;
font-style: normal;
letter-spacing: -1%;
opacity: 0.9;
color: var(--modal-need-help-text);
`,_t=t.form`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`,zt=t.textarea`
  position: relative;
  width: 100%;
  height: 120px;
  padding: 14px 18px;

  resize: none;

  color: var(--shared-input-text-color);

  font-size: 14px;
  font-family: "Poppins";
  letter-spacing: -0.28px;

  background-color: transparent;
  border: 1px solid;
  border-color: var(--shared-input-border-color);

  outline: none;
  border-radius: 8px;

  opacity: 0.4;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    font-size: 14px;
    font-family: "Poppins";
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
    border-color: var(--shared-input-border-hover-color);
  }
`,Ct=t.button`
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

  color: var(--shared-button-text-color);
  background-color: var(--plus-button-color);

  transition: var(--hover-params);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,Bt=F().shape({email:N().email("Invalid email").required("Email is required"),comment:N().min(50,"Must be at least 50 characters long").required()}),Tt=({isModalOpen:o,modalStateSwapper:i})=>{const r=k(),a=ye({initialValues:{email:"",comment:""},validationSchema:Bt,onSubmit:async c=>{try{await r(he({email:c.email,comment:c.comment})).unwrap()&&B.success("Your message was successfully sent"),i(),a.resetForm()}catch(d){console.log(d)}}});return e.jsx(E,{modalIsOpen:o,closeModal:i,title:"Need help",maxWidth:"335px",children:e.jsxs(_t,{onSubmit:a.handleSubmit,children:[e.jsxs(z,{children:[e.jsx(kt,{type:"text",name:"email",placeholder:"Email address",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.email,autoComplete:"off"}),a.touched.email&&a.errors.email?e.jsx(R,{children:a.errors.email}):null]}),e.jsxs(z,{children:[e.jsx(zt,{as:"textarea",rows:"6",name:"comment",placeholder:"Comment",autoComplete:"off",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.comment}),a.touched.comment&&a.errors.comment?e.jsx(R,{children:a.errors.comment}):null]}),e.jsx(Ct,{type:"submit",children:"Submit"})]})})},St=({icon:o})=>{const{isModalOpen:i,openModal:r,closeModal:a}=P();return e.jsxs(e.Fragment,{children:[e.jsxs(vt,{children:[e.jsx("img",{className:"img-plant",src:ft,alt:"Happy plant"}),e.jsxs(jt,{children:["If you need help with ",e.jsx("span",{className:"appName",children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),e.jsxs(yt,{type:"submit",onClick:r,"aria-label":"Need help",children:[e.jsx("svg",{className:"iconHelp",width:"20px",height:"20px",children:e.jsx("use",{href:`${o}#icon-help-circle`})}),e.jsx("span",{children:"Need help?"})]})]}),e.jsx(ne,{onClick:a,className:i===!0&&"active"}),e.jsx(Tt,{modalStateSwapper:a,isModalOpen:i})]})},It=t.button`
	width: 105px;
	height: 32px;

	border: transparent;
	background: none;
	padding: 0;

	display: flex;
	align-items: center;
	justify-content: space-between;

	cursor: pointer;

	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: 0em;
	color: var(--secondary-text-sidebar-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
	.iconLogOut {
		stroke: var(--logout-button-color);
		fill: var(--sidebar-icon-fill-color);
	}
	&:hover .iconLogOut {
		stroke: var(--logout-hover-button-color);
	}
`,Mt=({icon:o})=>{const i=k();return e.jsxs(It,{onClick:()=>i(xe()),type:"submit","aria-label":"Logout",children:[e.jsx("svg",{className:"iconLogOut",width:"32px",height:"32px",children:e.jsx("use",{href:`${o}#icon-logout`})}),e.jsx("span",{children:"Log out"})]})},Lt=t.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;

	margin-bottom: 8px;

	color: var(--sidebar-icon-edit-stroke-color);
`,Nt=t.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 70px;

	border-top: 1px solid var(--line-border-sidebar-color);
	border-bottom: 1px solid var(--line-border-sidebar-color);

	margin-bottom: 40px;

	@media screen and (max-width: 767px) {
		width: 197px;
	}

	.createText {
		font-weight: 500;
		font-size: 14px;
		line-height: 21px;
		letter-spacing: -0.02em;

		width: 84px;

		color: var(--secondary-text-sidebar-color);
	}
`,qt=t.button`
	width: 40px;
	height: 36px;
	border: transparent;

	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	background: var(--sidebar-button-create-background);
	border-radius: 6px;

	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		background: var(--plus-button-hover-color);
	}

	.iconCreateBoard {
		stroke: var(--shared-plus-icon-dark-big);
	}
`,Et=({openModal:o,icon:i,viewport:r})=>e.jsxs(e.Fragment,{children:[e.jsx(Lt,{children:"My boards"}),e.jsxs(Nt,{children:[e.jsx("p",{className:"createText",children:"Create a new board"}),e.jsx(qt,{onClick:()=>{r({width:window.screen.width,height:window.screen.height}),o()},type:"submit","aria-label":"New board",children:e.jsx("svg",{className:"iconCreateBoard",width:"20px",height:"20px",children:e.jsx("use",{href:`${i}#icon-plus`})})})]})]}),Dt=[{width:372,height:812,deviceType:"url-mob"},{width:768,height:956,deviceType:"url-tab"},{width:1180,height:770,deviceType:"url-desk"}],Ot=[{width:750,height:1624,deviceType:"url-mobx2"},{width:1536,height:1912,deviceType:"url-tabx2"},{width:2360,height:1540,deviceType:"url-deskx2"}],$t=()=>{const[o,i]=u.useState(null);return{currentImage:o,selectImage:a=>{let d=window.devicePixelRatio===1?Dt:Ot,p=1/0,b=o;for(const x of d){const g=Math.abs(a.width-x.width),f=Math.abs(a.height-x.height),v=g+f;v<p&&(p=v,b=x)}i(b.deviceType)}}},Ut=({isOpen:o,close:i})=>{const[r,a]=u.useState(""),[c,d]=u.useState(""),p=C(fe),{result:b}=C(ae),[x,g]=u.useState([]),f=k(),{isModalOpen:v,openModal:y,closeModal:n}=P();u.useEffect(()=>{g(p)},[p]),u.useEffect(()=>{a(b??"")},[b]);const m=w=>{r._id!==w._id&&c!==w._id&&(f(H(w._id)),d(w._id),i())},{selectImage:h,currentImage:l}=$t();return e.jsxs(Ze,{className:o===!0&&"active",children:[e.jsxs(e.Fragment,{children:[e.jsx(rt,{icon:j}),e.jsx(Et,{openModal:y,viewport:h,icon:j}),e.jsx(et,{children:e.jsx(wt,{icon:j,boards:x,choice:m,selectedItem:r,isModalOpen:v,closeModal:n,setSelectedItemId:d,gallery:l,viewport:h})})]}),e.jsxs(tt,{children:[e.jsx(St,{icon:j}),e.jsx(Mt,{icon:j})]})]})},Rt=()=>{const o=k(),{isModalOpen:i,openModal:r,closeModal:a}=P();return u.useEffect(()=>{o(me())},[o]),e.jsx(ge,{children:e.jsxs(ve,{children:[e.jsx(Ut,{close:a,isOpen:i}),e.jsxs(je,{children:[e.jsx(Ke,{openSideBar:r}),e.jsx(u.Suspense,{fallback:e.jsx("div",{children:"Loading"}),children:e.jsx(we,{})})]}),e.jsx(ne,{onClick:a,className:i===!0&&"active"})]})})};export{Rt as default};
