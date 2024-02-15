import{b as z,s as q,r as u,a as k,j as e,c as D,u as t,L as ce,d as le,B,e as de,f as V,h as pe,N as Q,i as ue,k as H,l as be,m as he,n as xe,o as me,C as ge,O as we}from"./index-avW8Nks3.js";import{i as j}from"./icons-I0FOP6sp.js";import{T as fe,a as ve,I as je,C as ye,b as ke,c as O}from"./ThemeMenu.styled-NDla5RD8.js";import{S as E,a as X,M as Y,F as C,E as G,T as J,b as I,R as M,I as K,c as Z,D as L,B as ee,C as te,A as oe,d as re,P as ie,s as ae,u as F,O as ne,e as _e,H as Ce,f as ze}from"./HomePage.styled-eknZMpaY.js";import{c as P,a as N,F as se,u as Be}from"./index.esm-1m1P_M8p.js";/* empty css                      */const Te=()=>{const a=z(q),[r,o]=u.useState(a.theme||"dark");return u.useLayoutEffect(()=>{document.documentElement.setAttribute("data-theme",r)},[r]),{theme:r,setTheme:o}},Se=(a,r)=>{const o=i=>{a.current&&!a.current.contains(i.target)&&r()};u.useEffect(()=>(document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}))},Ie=()=>{const a=k(),{theme:r,setTheme:o}=Te(),i=z(q),[l,d]=u.useState(!1),p=u.useRef(null);Se(p,()=>{d(!1)});const b=()=>{d(!l)},x=()=>{o("light"),a(D({theme:"light"})),b()},g=()=>{o("dark"),a(D({theme:"dark"})),b()},f=()=>{o("violet"),a(D({theme:"violet"})),b()};return e.jsxs(fe,{ref:p,children:[e.jsxs(ve,{onClick:b,children:["Theme",e.jsx(je,{children:e.jsx("use",{href:j+"#icon-chevron-down"})})]}),e.jsx(ye,{theme:r,children:e.jsxs(ke,{open:l,children:[e.jsx(O,{onClick:()=>x(),selected:i.theme==="light",children:"Light"}),e.jsx(O,{onClick:()=>g(),selected:i.theme==="dark",children:"Dark"}),e.jsx(O,{onClick:()=>f(),selected:i.theme==="violet",children:"Violet"})]})})]})},Me=t.header`
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
`,Le=t.div`
	@media (min-width: 1440px) {
		display: none;
	}
`,Ne=t.div`
	display: flex;
	column-gap: 14px;
	align-items: center;
	margin-left: auto;
`,qe=t.div`
	display: flex;
	align-items: center;
	color: var(--primary-heading-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
	column-gap: 8px;
	cursor: pointer;
`,Ee=t.button`
	background-color: transparent;
	border: none;
	padding: 0;
	cursor: pointer;
`,De=t.svg`
	width: 24px;
	height: 24px;
	fill: transparent;
	stroke: var(--primary-icon-stroke-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Oe=t.svg`
	width: 32px;
	height: 32px;
	stroke: var(--primary-icon-stroke-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
	fill: transparent;
`,$e=t.img`
	width: 32px;
	height: 32px;
	border-radius: 8px;
`,Ue=t.p`
	&:hover {
		color: var(--secondary-button-color);
	}
`,We=t.button`
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
`,He=({children:a})=>e.jsx(We,{type:"submit",children:a}),Fe=t.img`
  height: 68px;
  width: 68px;
  border-radius: 8px;
`,Pe=t.label`
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
`,Je=({isModalOpen:a,modalStateSwapper:r})=>{const o=k(),[i,l]=u.useState(!1),[d,p]=u.useState("password"),{email:b,username:x,avatarURL:g}=z(q),f=()=>{p(n=>n==="password"?"text":"password")},v=async n=>{l(!0);const m=n.target.files[0],h=new FormData;h.append("avatar",m);try{await o(le(h))}catch(c){console.error("Error changing avatar:",c)}l(!1)},y=n=>{n.preventDefault();const m={},h=[...n.target.elements].slice(0,3);if(h[2].value!==""&&h[2].value.length<8)return h[2].value.split("").includes("")?B.error("Wrong password, it must be without spaces"):B.error("Wrong password, it must be at least 8 symbols!");if(h[2].value!==""&&h[2].value.length>8&&h[2].value.split("").includes(" "))return B.error("Wrong password, it must be without spaces");h.filter(({value:w})=>w).forEach(({name:w,value:s})=>m[w]=s),o(de(m)),r()};return e.jsxs(E,{modalIsOpen:a,closeModal:r,title:"Edit profile",maxWidth:"400px",children:[e.jsxs(Ae,{children:[i?e.jsx(ce,{setHeight:"100 %"}):g?e.jsx(Fe,{src:g||"https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",alt:"avatar"}):e.jsx("div",{children:e.jsx(Qe,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${j}#icon-user`})})}),e.jsx(Re,{onChange:v,type:"file",id:"input__file"}),e.jsx(Pe,{htmlFor:"input__file",children:"+"})]}),e.jsxs(Ve,{autoComplete:"false",onSubmit:n=>y(n),children:[e.jsxs(Xe,{children:[e.jsx($,{autoComplete:"off",name:"username",minLength:2,maxLength:32,placeholder:"Fullname",defaultValue:x||null,type:"text"}),e.jsx($,{autoComplete:"off",name:"email",placeholder:"Email",defaultValue:b||null,type:"email"}),e.jsxs(Ge,{children:[e.jsx($,{name:"password",placeholder:"Password",type:d,autoComplete:"off"}),e.jsx(Ye,{onClick:()=>f(),className:"",width:"22px",height:"22px",children:e.jsx("use",{href:j+"#icon-password-eye"})})]})]}),e.jsx(He,{children:"Send"})]})]})},Ke=({openSideBar:a})=>{const[r,o]=u.useState(!1),{username:i,avatarURL:l}=z(q),d=()=>{o(p=>!p)};return e.jsxs(Me,{children:[e.jsx(Le,{children:e.jsx(Ee,{type:"button",onClick:a,children:e.jsx(De,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${j}#icon-burger-menu`})})})}),e.jsxs(Ne,{children:[e.jsx(Ie,{}),e.jsxs(qe,{onClick:()=>d(),children:[e.jsx(Ue,{children:i}),l?e.jsx($e,{src:l,alt:"avatar",width:"32px",height:"32px"}):e.jsx(Oe,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${j}#icon-user`})})]})]}),e.jsx(Je,{isModalOpen:r,modalStateSwapper:d})]})},Ze=t.div`
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
`,rt=({icon:a})=>e.jsxs(ot,{children:[e.jsx("div",{className:"iconBg",children:e.jsx("svg",{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${a}#icon-task-pro-lightning`})})}),e.jsx("span",{className:"logoText",children:"Task Pro"})]}),W=[{"url-mob":"no background","url-mobx2":"no background","url-tab":"no background","url-tabx2":"no background","url-desk":"no background","url-deskx2":"no background"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-15-mobile-webp-375x812_repmix.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752161/bg-15-mobile-webp-750x1624_2x_wq8hi7.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752229/bg-13-tablet-webp-768x956_ra31gx.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752229/bg-13-tablet-webp-1536x1912_2x_aee2rk.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752481/bg-09-desk-webp-1180x770_xwfemc.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752486/bg-09-desk-webp-2360x1540_2x_vigtvr.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752159/bg-11-mobile-webp-375x812_ma6ewq.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752159/bg-11-mobile-webp-750x1624_2x_mtzwzb.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-11-tablet-webp-768x956_iijpzb.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-11-tablet-webp-1536x1912_2x_krywfq.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752473/bg-02-desk-webp-1180x770_ss7k63.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752473/bg-02-desk-webp-2360x1540_2x_qjzumy.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-08-mobile-webp-375x812_o5fini.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-08-mobile-webp-750x1624_2x_wtgyts.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752226/bg-08-tablet-webp-768x956_o47udx.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-08-tablet-webp-1536x1912_2x_xoqfag.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752472/bg-01-desk-webp-1180x770_uuvvlv.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752472/bg-01-desk-webp-2360x1540_2x_dcvolo.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-06-mobile-webp-375x812_vuozes.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-06-mobile-webp-750x1624_2x_kaqfp8.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-06-tablet-webp-768x956_obho6i.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-06-tablet-webp-1536x1912_2x_riwrw6.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752476/bg-05-desk-webp-1180x770_tnpxyr.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752476/bg-05-desk-webp-2360x1540_2x_xn4ddt.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751661/bg-01-mobile-webp-375x812_qafbbj.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751686/bg-01-mobile-webp-750x1624_2x_crn0ka.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-03-tablet-webp-768x956_nlerc1.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-03-tablet-webp-1536x1912_2x_pt9vh8.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752477/bg-07-desk-webp-1180x770_y7dfhr.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752478/bg-07-desk-webp-2360x1540_2x_qpbbcp.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-14-mobile-webp-375x812_nlmg6q.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-14-mobile-webp-750x1624_2x_p65fmf.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752229/bg-14-tablet-webp-768x956_sxcqkp.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752230/bg-14-tablet-webp-1536x1912_2x_ki6xzm.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752481/bg-10-desk-webp-1180x770_gdtqq3.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752481/bg-10-desk-webp-2360x1540_2x_fvafnk.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752159/bg-12-mobile-webp-375x812_b1dng1.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-12-mobile-webp-750x1624_2x_dgjf9m.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-12-tablet-webp-768x956_r24qhb.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-12-tablet-webp-1536x1912_2x_deydvi.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752474/bg-04-desk-webp-1180x770_oc952g.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752474/bg-04-desk-webp-2360x1540_2x_ip9ef6.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-09-mobile-webp-375x812_n6dcut.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-09-mobile-webp-750x1624_2x_lnaw4u.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752226/bg-09-tablet-webp-768x956_zrjq42.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752227/bg-09-tablet-webp-1536x1912_2x_q3oqkx.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752473/bg-03-desk-webp-1180x770_a3v6ig.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752473/bg-03-desk-webp-2360x1540_2x_ezttrg.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-05-mobile-webp-375x812_wjckxc.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-05-mobile-webp-750x1624_2x_u7i1zv.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752224/bg-05-tablet-webp-768x956_mttcpy.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-05-tablet-webp-1536x1912_2x_aanq2f.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752477/bg-06-desk-webp-1180x770_vijxij.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752478/bg-06-desk-webp-2360x1540_2x_quvrxa.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751693/bg-02-mobile-webp-375x812_qbb0tm.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751707/bg-02-mobile-webp-750x1624_2x_lbzywk.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-02-tablet-webp-768x956_lqef5o.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-02-tablet-webp-1536x1912_2x_pqutsl.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752478/bg-08-desk-webp-1180x770_ipsyjr.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752479/bg-08-desk-webp-2360x1540_2x_usw7tr.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-04-mobile-webp-375x812_h7gvst.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-04-mobile-webp-750x1624_2x_dxjbi9.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-04-tablet-webp-768x956_nseddn.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752224/bg-04-tablet-webp-1536x1912_2x_hv5zmm.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752485/bg-14-desk-webp-1180x770_se11ha.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752486/bg-14-desk-webp-2360x1540_2x_wwezvb.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-10-mobile-webp-375x812_v9ejsm.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-10-mobile-webp-750x1624_2x_pdpbxo.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752227/bg-10-tablet-webp-768x956_xqotyl.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752227/bg-10-tablet-webp-1536x1912_2x_katv7y.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752482/bg-12-desk-webp-1180x770_nsnpad.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752483/bg-12-desk-webp-2360x1540_2x_mvy42x.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-07-mobile-webp-375x812_lxxlvy.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-07-mobile-webp-750x1624_2x_wirh8l.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-07-tablet-webp-768x956_cbrrv0.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752226/bg-07-tablet-webp-1536x1912_2x_y6qgjq.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752484/bg-13-desk-webp-1180x770_lgtkch.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752485/bg-13-desk-webp-2360x1540_2x_hxhizt.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752159/bg-13-mobile-webp-375x812_diuoux.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-13-mobile-webp-750x1624_2x_dnftko.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752230/bg-15-tablet-webp-768x956_noua1f.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752231/bg-15-tablet-webp-1536x1912_2x_usxrol.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752481/bg-11-desk-webp-1180x770_rldph5.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752482/bg-11-desk-webp-2360x1540_2x_aboou2.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751731/bg-03-mobile-webp-375x812_ehkzgh.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751736/bg-03-mobile-webp-750x1624_2x_fuuz9t.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-01-tablet-webp-768x956_tfohwn.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-01-tablet-webp-1536x1912_2x_pxda7s.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752486/bg-15-desk-webp-1180x770_qzywxu.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752486/bg-15-desk-webp-2360x1540_2x_rqunnb.webp"}],A=["#icon-board-square","#icon-board-star","#icon-board-loading","#icon-board-puzzle","#icon-board-container","#icon-board-lightning","#icon-board-colors","#icon-board-hexagon"],it=P().shape({title:N().required("Title is required!")}),at=({isModalOpen:a,modalStateSwapper:r,gallery:o})=>{const i=k(),[l,d]=u.useState(A[0]),[p,b]=u.useState(W[0].url),x={title:"",icon:l,bg:p},g=V(),f=n=>{n.preventDefault();const m=n.target.elements[0].value;if(!m){B.error("Title is required!");return}const h={title:m,icon:l,backgroundURL:p};r(),i(pe(h)),g(`/home/${h.title}`)},v=n=>{b(n)},y=n=>{d(n)};return e.jsx(E,{modalIsOpen:a,closeModal:r,title:"New board",maxWidth:"350px",children:e.jsx(X,{children:e.jsx(se,{initialValues:x,validationSchema:it,children:e.jsxs(Y,{onSubmit:n=>f(n),children:[e.jsxs(C,{children:[e.jsx(G,{name:"title",component:"div"}),e.jsx(J,{type:"text",id:"title",name:"title",placeholder:"Title",autoComplete:"off",autoFocus:!0})]}),e.jsxs(C,{children:[e.jsx(I,{children:"Icons "}),e.jsx(M,{children:A.map((n,m)=>e.jsxs(K,{children:[e.jsx(Z,{className:l===n?"active":"",onClick:()=>y(n),width:18,height:18,children:e.jsx("use",{href:j+n,width:18,height:18})}),e.jsx(L,{type:"radio",value:n,name:"icon"})]},m))})]}),e.jsxs(C,{children:[e.jsx(I,{children:"Backgrounds "}),e.jsx(M,{children:W.map((n,m)=>e.jsxs("label",{children:[e.jsx(ee,{onClick:()=>v(n[o]),className:p===n[o]?"active":"",children:n[o]!==""&&e.jsx(te,{$bcgurl:n[o],onClick:()=>v(n[o]),className:p===n[o]?"active":""})}),e.jsx(L,{type:"radio",value:n[o],name:"bg"})]},m))})]}),e.jsxs(oe,{type:"submit",children:[e.jsx(re,{children:e.jsx(ie,{children:e.jsx("use",{href:j+"#icon-plus"})})}),"Create"]})]})})})})},nt=t.ul`
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
`,ct=t(Q)`
	width: 100%;
	height: 61px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`,lt=t(Q)`
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
`,xt=["#icon-board-square","#icon-board-star","#icon-board-loading","#icon-board-puzzle","#icon-board-container","#icon-board-lightning","#icon-board-colors","#icon-board-hexagon"],mt=P().shape({title:N().required("Title is required!")}),gt=({isModalOpen:a,modalStateSwapper:r,gallery:o})=>{const i=k(),l=z(ae),{_id:d,title:p,icon:b,backgroundURL:x}=l.result,[g,f]=u.useState(x),[v,y]=u.useState(b),n=V(),m={title:p,icon:b,backgroundURL:x},h=s=>{s.preventDefault();const _=s.target.elements[0].value;if(!s.target.elements[0].value){B.error("Title is required!");return}const T={dashboardId:d,title:_,icon:v,backgroundURL:g};r(),i(ue(T)),i(H(d)),n(`/home/${_}`)},c=s=>{f(s)},w=s=>{y(s)};return e.jsx(E,{modalIsOpen:a,closeModal:r,title:"Edit board",maxWidth:"350px",children:e.jsx(X,{children:e.jsx(se,{initialValues:m,validationSchema:mt,children:e.jsxs(Y,{onSubmit:s=>h(s),children:[e.jsxs(C,{children:[e.jsx(G,{name:"title",component:"div"}),e.jsx(J,{type:"text",id:"title",defaultValue:p,name:"title",placeholder:"Title",autoComplete:"off",autoFocus:!0})]}),e.jsxs(C,{children:[e.jsx(I,{children:"Icons "}),e.jsx(M,{children:xt.map((s,_)=>e.jsxs(K,{children:[e.jsx(Z,{className:v===s?"active":"",onClick:()=>w(s),width:18,height:18,children:e.jsx("use",{href:j+s,width:18,height:18})}),e.jsx(L,{type:"radio",value:s,name:"icon"})]},_))})]}),e.jsxs(C,{children:[e.jsx(I,{children:"Backgraunds "}),e.jsx(M,{children:W.map((s,_)=>e.jsxs("label",{children:[e.jsx(ee,{onClick:()=>c(s[o]),className:g===s[o]?"active":"",children:s[o]!==""&&e.jsx(te,{$bcgurl:s[o],onClick:()=>c(s[o]),className:g===s[o]?"active":""})}),e.jsx(L,{type:"radio",value:s[o],name:"bg"})]},_))})]}),e.jsxs(oe,{type:"submit",children:[e.jsx(re,{children:e.jsx(ie,{children:e.jsx("use",{href:j+"#icon-plus"})})}),"Edit"]})]})})})})},wt=({icon:a,boards:r,selectedItem:o,choice:i,setUserBoards:l,isModalOpen:d,closeModal:p,setSelectedItemId:b,gallery:x,viewport:g})=>{const[f,v]=u.useState(!1),y=()=>{v(c=>!c)},n=c=>{let w="",s="";return r.forEach((_,S)=>{if(_._id===c){const T=r[S+1]?r[S+1]:r[S-1];T&&(w=`/home/${T.title}`,s=T._id)}}),{path:w,id:s}},m=k(),h=c=>{if(c){const w=m(H(n(c).id));b(w.arg)}m(be(c))};return e.jsxs(e.Fragment,{children:[r.length!==0&&e.jsx(nt,{children:r.map(c=>e.jsxs(st,{onClick:()=>i(c),className:o._id===c._id?"active":"",children:[e.jsx(ct,{to:`/home/${c.title}`,children:e.jsxs(dt,{children:[e.jsx(U,{className:"iconBoard iconActive",width:"18px",height:"18px",children:e.jsx("use",{href:`${a}${c.icon}`})}),e.jsx(pt,{children:e.jsx(ut,{children:c.title})})]})}),o._id===c._id&&e.jsxs(bt,{children:[e.jsx(ht,{onClick:()=>{g({width:window.innerWidth,height:window.innerHeight}),y()},type:"button",children:e.jsx(U,{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${a}#icon-pencil`})})}),e.jsx(lt,{to:n(c._id).path,onClick:()=>h(c._id),type:"button",children:e.jsx(U,{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${a}#icon-trash`})})})]})]},c._id))}),e.jsx(at,{setUserBoards:l,isModalOpen:d,modalStateSwapper:p,gallery:x}),f&&e.jsx(gt,{isModalOpen:f,modalStateSwapper:y,gallery:x})]})},ft="/TaskPro-blended1-frontend/assets/plant-92SCXr2v.png",vt=t.div`
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
`,Ct=t.textarea`
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
`,zt=t.button`
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
`,Bt=P().shape({email:N().email("Invalid email").required("Email is required"),comment:N().min(50,"Must be at least 50 characters long").required()}),Tt=({isModalOpen:a,modalStateSwapper:r})=>{const o=k(),i=Be({initialValues:{email:"",comment:""},validationSchema:Bt,onSubmit:async l=>{try{await o(he({email:l.email,comment:l.comment})).unwrap()&&B.success("Your message was successfully sent"),r(),i.resetForm()}catch(d){console.log(d)}}});return e.jsx(E,{modalIsOpen:a,closeModal:r,title:"Need help",maxWidth:"335px",children:e.jsxs(_t,{onSubmit:i.handleSubmit,children:[e.jsxs(C,{children:[e.jsx(kt,{type:"text",name:"email",placeholder:"Email address",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.email,autoComplete:"off"}),i.touched.email&&i.errors.email?e.jsx(R,{children:i.errors.email}):null]}),e.jsxs(C,{children:[e.jsx(Ct,{as:"textarea",rows:"6",name:"comment",placeholder:"Comment",autoComplete:"off",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.comment}),i.touched.comment&&i.errors.comment?e.jsx(R,{children:i.errors.comment}):null]}),e.jsx(zt,{type:"submit",children:"Submit"})]})})},St=({icon:a})=>{const{isModalOpen:r,openModal:o,closeModal:i}=F();return e.jsxs(e.Fragment,{children:[e.jsxs(vt,{children:[e.jsx("img",{className:"img-plant",src:ft,alt:"Happy plant"}),e.jsxs(jt,{children:["If you need help with ",e.jsx("span",{className:"appName",children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),e.jsxs(yt,{type:"submit",onClick:o,children:[e.jsx("svg",{className:"iconHelp",width:"20px",height:"20px",children:e.jsx("use",{href:`${a}#icon-help-circle`})}),e.jsx("span",{children:"Need help?"})]})]}),e.jsx(ne,{onClick:i,className:r===!0&&"active"}),e.jsx(Tt,{modalStateSwapper:i,isModalOpen:r})]})},It=t.button`
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
`,Mt=({icon:a})=>{const r=k();return e.jsxs(It,{onClick:()=>r(xe()),type:"submit",children:[e.jsx("svg",{className:"iconLogOut",width:"32px",height:"32px",children:e.jsx("use",{href:`${a}#icon-logout`})}),e.jsx("span",{children:"Log out"})]})},Lt=t.p`
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
`,Et=({openModal:a,icon:r,viewport:o})=>e.jsxs(e.Fragment,{children:[e.jsx(Lt,{children:"My boards"}),e.jsxs(Nt,{children:[e.jsx("p",{className:"createText",children:"Create a new board"}),e.jsx(qt,{onClick:()=>{o({width:window.screen.width,height:window.screen.height}),a()},type:"submit",children:e.jsx("svg",{className:"iconCreateBoard",width:"20px",height:"20px",children:e.jsx("use",{href:`${r}#icon-plus`})})})]})]}),Dt=[{width:372,height:812,deviceType:"url-mob"},{width:768,height:956,deviceType:"url-tab"},{width:1180,height:770,deviceType:"url-desk"}],Ot=[{width:750,height:1624,deviceType:"url-mobx2"},{width:1536,height:1912,deviceType:"url-tabx2"},{width:2360,height:1540,deviceType:"url-deskx2"}],$t=()=>{const[a,r]=u.useState(null);return{currentImage:a,selectImage:i=>{let d=window.devicePixelRatio===1?Dt:Ot,p=1/0,b=a;for(const x of d){const g=Math.abs(i.width-x.width),f=Math.abs(i.height-x.height),v=g+f;v<p&&(p=v,b=x)}r(b.deviceType)}}},Ut=({isOpen:a,close:r})=>{const[o,i]=u.useState(""),[l,d]=u.useState(""),p=z(_e),{result:b}=z(ae),[x,g]=u.useState([]),f=k(),{isModalOpen:v,openModal:y,closeModal:n}=F();u.useEffect(()=>{g(p)},[p]),u.useEffect(()=>{i(b??"")},[b]);const m=w=>{o._id!==w._id&&l!==w._id&&(f(H(w._id)),d(w._id),r())},{selectImage:h,currentImage:c}=$t();return e.jsxs(Ze,{className:a===!0&&"active",children:[e.jsxs(e.Fragment,{children:[e.jsx(rt,{icon:j}),e.jsx(Et,{openModal:y,viewport:h,icon:j}),e.jsx(et,{children:e.jsx(wt,{icon:j,boards:x,choice:m,selectedItem:o,isModalOpen:v,closeModal:n,setSelectedItemId:d,gallery:c,viewport:h})})]}),e.jsxs(tt,{children:[e.jsx(St,{icon:j}),e.jsx(Mt,{icon:j})]})]})},Vt=()=>{const a=k(),{isModalOpen:r,openModal:o,closeModal:i}=F();return u.useEffect(()=>{a(me())},[a]),e.jsx(ge,{children:e.jsxs(Ce,{children:[e.jsx(Ut,{close:i,isOpen:r}),e.jsxs(ze,{children:[e.jsx(Ke,{openSideBar:o}),e.jsx(u.Suspense,{fallback:e.jsx("div",{children:"Loading"}),children:e.jsx(we,{})})]}),e.jsx(ne,{onClick:i,className:r===!0&&"active"})]})})};export{Vt as default};
