import{u as t,a as z,s as q,r as b,b as y,j as e,c as D,d as se,e as le,f as F,B as G,g as ce,N as R,h as de,i as $,k as pe,l as ue,m as be,n as me,C as xe,O as he}from"./index-OLtTlEDH.js";import{i as g}from"./icons-I0FOP6sp.js";import{S as N,a as V,M as Q,F as _,E as X,T as Y,b as I,R as T,I as J,c as K,D as S,B as Z,C as ee,A as te,d as oe,P as ie,s as re,u as U,O as ae,e as ge,H as we,f as fe}from"./HomePage.styled-482-NsEu.js";import{c as P,a as M,F as ne,u as ve}from"./index.esm-dOoWCxA6.js";/* empty css                      */const je=t.header`
  height: 60px;
  background-color: var(--header-background-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    padding: 0 24px;
  }
`,ye=t.div`
  @media (min-width: 1440px) {
    display: none;
  }
`,ke=t.div`
  display: flex;
  column-gap: 14px;
  align-items: center;
  margin-left: auto;
`,_e=t.div`
  display: flex;
  align-items: center;
  color: var(--primary-heading-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  column-gap: 8px;
  cursor: pointer;
`,ze=t.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`,Be=t.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: var(--primary-icon-stroke-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Ce=t.svg`
  width: 32px;
  height: 32px;
  stroke: var(--primary-icon-stroke-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  fill: transparent;
`,Ie=t.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
`,Te=t.p`
  &:hover {
    color: var(--secondary-button-color);
  }
`,Se=t.div`
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
`,Me=t.div`
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
`,E=t.li`
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
`,Ne=t.div`
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
`,Ee=()=>{const o=z(q),[i,a]=b.useState(o.theme||"dark");return b.useLayoutEffect(()=>{document.documentElement.setAttribute("data-theme",i)},[i]),{theme:i,setTheme:a}},Le=()=>{const o=y(),{theme:i,setTheme:a}=Ee(),r=z(q),[d,p]=b.useState(!1),l=()=>{p(!d)},m=()=>{a("light"),o(D({theme:"light"})),l()},x=()=>{a("dark"),o(D({theme:"dark"})),l()},h=()=>{a("violet"),o(D({theme:"violet"})),l()};return e.jsxs(Se,{children:[e.jsxs(Ne,{onClick:l,children:["Theme",e.jsx(De,{children:e.jsx("use",{href:g+"#icon-chevron-down"})})]}),e.jsx(Me,{theme:i,children:e.jsxs(qe,{open:d,children:[e.jsx(E,{onClick:()=>m(),selected:r.theme==="light",children:"Light"}),e.jsx(E,{onClick:()=>x(),selected:r.theme==="dark",children:"Dark"}),e.jsx(E,{onClick:()=>h(),selected:r.theme==="violet",children:"Violet"})]})})]})},Oe=t.button`
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
`,Ge=({children:o})=>e.jsx(Oe,{type:"submit",children:o}),$e=t.img`
  height: 68px;
  width: 68px;
  border-radius: 8px;
`,Ue=t.label`
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
`,Pe=t.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`,He=t.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`,We=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;
  overflow-x: hidden;
`,L=t.input`
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
`,Ae=t.svg`
  height: 68px;
  width: 68px;
  border-radius: 8px;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: var(--sidebar-help-backgound-color);
  fill: white;
`,Fe=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`,Re=t.svg`
  position: absolute;
  right: 18px;
  top: 14px;
  stroke: white;
  cursor: pointer;
  user-select: none;
`,Ve=t.div`
  width: 100%;
  position: relative;
`,Qe=({isModalOpen:o,modalStateSwapper:i})=>{const a=y(),[r,d]=b.useState("password"),{email:p,username:l,avatarURL:m}=z(q),x=()=>{d(u=>u==="password"?"text":"password")},h=u=>{const w=u.target.files[0],n=new FormData;n.append("avatar",w),a(se(n))},j=u=>{u.preventDefault();const w={};[...u.target.elements].slice(0,3).filter(({value:s})=>s).forEach(({name:s,value:v})=>w[s]=v),a(le(w)),i()};return e.jsxs(N,{modalIsOpen:o,closeModal:i,title:"Edit profile",maxWidth:"400px",children:[e.jsxs(Pe,{children:[m?e.jsx($e,{src:m||"https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",alt:"avatar"}):e.jsx("div",{children:e.jsx(Ae,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${g}#icon-user`})})}),e.jsx(He,{onChange:h,type:"file",id:"input__file"}),e.jsx(Ue,{htmlFor:"input__file",children:"+"})]}),e.jsxs(We,{autoComplete:"false",onSubmit:u=>j(u),children:[e.jsxs(Fe,{children:[e.jsx(L,{autoComplete:"off",name:"username",placeholder:"Fullname",defaultValue:l||null,type:"text"}),e.jsx(L,{autoComplete:"off",name:"email",placeholder:"Email",defaultValue:p||null,type:"email"}),e.jsxs(Ve,{children:[e.jsx(L,{name:"password",placeholder:"Password",type:r,autoComplete:"off"}),e.jsx(Re,{onClick:()=>x(),className:"",width:"22px",height:"22px",children:e.jsx("use",{href:g+"#icon-password-eye"})})]})]}),e.jsx(Ge,{children:"Send"})]})]})},Xe=({openSideBar:o})=>{const[i,a]=b.useState(!1),{username:r,avatarURL:d}=z(q),p=()=>{a(l=>!l)};return e.jsxs(je,{children:[e.jsx(ye,{children:e.jsx(ze,{type:"button",onClick:o,children:e.jsx(Be,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${g}#icon-burger-menu`})})})}),e.jsxs(ke,{children:[e.jsx(Le,{}),e.jsxs(_e,{onClick:()=>p(),children:[e.jsx(Te,{children:r}),d?e.jsx(Ie,{src:d,alt:"avatar",width:"32px",height:"32px"}):e.jsx(Ce,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${g}#icon-user`})})]})]}),e.jsx(Qe,{isModalOpen:i,modalStateSwapper:p})]})},Ye=t.div`
	width: 260px;
	height: 100vh;

	top: 0;
	left: 0;

	z-index: 1;
	transition: 0.5s;

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

		padding: 14px 14px 24px 14px;
	}

	&.active {
		left: 0;
	}
`,Je=t.div`
	
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

		margin: 0 -14px
	}



	&::-webkit-scrollbar {
		width:3px;
	}

	&::-webkit-scrollbar-track {
	
		background: var(--tracking-area-color);
		border-radius: 12px;
	}

		&::-webkit-scrollbar-thumb {
		
		background-color: var(--scroll-bar-color);
		border-radius: 12px;
		border: 12px solid var(--scroll-bar-color);




`,Ke=t.div`
	margin-top: 40px;
`,Ze=t.div`
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
`,et=({icon:o})=>e.jsxs(Ze,{children:[e.jsx("div",{className:"iconBg",children:e.jsx("svg",{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${o}#icon-task-pro-lightning`})})}),e.jsx("span",{className:"logoText",children:"Task Pro"})]}),H=[{url:"no background"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-15-mobile-webp-375x812_repmix.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752161/bg-15-mobile-webp-750x1624_2x_wq8hi7.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752229/bg-13-tablet-webp-768x956_ra31gx.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752229/bg-13-tablet-webp-1536x1912_2x_aee2rk.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752481/bg-09-desk-webp-1180x770_xwfemc.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752486/bg-09-desk-webp-2360x1540_2x_vigtvr.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752159/bg-11-mobile-webp-375x812_ma6ewq.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752159/bg-11-mobile-webp-750x1624_2x_mtzwzb.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-11-tablet-webp-768x956_iijpzb.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-11-tablet-webp-1536x1912_2x_krywfq.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752473/bg-02-desk-webp-1180x770_ss7k63.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752473/bg-02-desk-webp-2360x1540_2x_qjzumy.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-08-mobile-webp-375x812_o5fini.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-08-mobile-webp-750x1624_2x_wtgyts.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752226/bg-08-tablet-webp-768x956_o47udx.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-08-tablet-webp-1536x1912_2x_xoqfag.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752472/bg-01-desk-webp-1180x770_uuvvlv.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752472/bg-01-desk-webp-2360x1540_2x_dcvolo.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-06-mobile-webp-375x812_vuozes.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-06-mobile-webp-750x1624_2x_kaqfp8.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-06-tablet-webp-768x956_obho6i.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-06-tablet-webp-1536x1912_2x_riwrw6.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752476/bg-05-desk-webp-1180x770_tnpxyr.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752476/bg-05-desk-webp-2360x1540_2x_xn4ddt.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751661/bg-01-mobile-webp-375x812_qafbbj.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751686/bg-01-mobile-webp-750x1624_2x_crn0ka.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-03-tablet-webp-768x956_nlerc1.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-03-tablet-webp-1536x1912_2x_pt9vh8.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752477/bg-07-desk-webp-1180x770_y7dfhr.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752478/bg-07-desk-webp-2360x1540_2x_qpbbcp.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-14-mobile-webp-375x812_nlmg6q.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-14-mobile-webp-750x1624_2x_p65fmf.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752229/bg-14-tablet-webp-768x956_sxcqkp.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752230/bg-14-tablet-webp-1536x1912_2x_ki6xzm.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752481/bg-10-desk-webp-1180x770_gdtqq3.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752481/bg-10-desk-webp-2360x1540_2x_fvafnk.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752159/bg-12-mobile-webp-375x812_b1dng1.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-12-mobile-webp-750x1624_2x_dgjf9m.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-12-tablet-webp-768x956_r24qhb.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-12-tablet-webp-1536x1912_2x_deydvi.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752474/bg-04-desk-webp-1180x770_oc952g.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752474/bg-04-desk-webp-2360x1540_2x_ip9ef6.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-09-mobile-webp-375x812_n6dcut.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-09-mobile-webp-750x1624_2x_lnaw4u.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752226/bg-09-tablet-webp-768x956_zrjq42.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752227/bg-09-tablet-webp-1536x1912_2x_q3oqkx.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752473/bg-03-desk-webp-1180x770_a3v6ig.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752473/bg-03-desk-webp-2360x1540_2x_ezttrg.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-05-mobile-webp-375x812_wjckxc.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-05-mobile-webp-750x1624_2x_u7i1zv.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752224/bg-05-tablet-webp-768x956_mttcpy.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-05-tablet-webp-1536x1912_2x_aanq2f.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752477/bg-06-desk-webp-1180x770_vijxij.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752478/bg-06-desk-webp-2360x1540_2x_quvrxa.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751693/bg-02-mobile-webp-375x812_qbb0tm.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751707/bg-02-mobile-webp-750x1624_2x_lbzywk.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-02-tablet-webp-768x956_lqef5o.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-02-tablet-webp-1536x1912_2x_pqutsl.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752478/bg-08-desk-webp-1180x770_ipsyjr.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752479/bg-08-desk-webp-2360x1540_2x_usw7tr.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-04-mobile-webp-375x812_h7gvst.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-04-mobile-webp-750x1624_2x_dxjbi9.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-04-tablet-webp-768x956_nseddn.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752224/bg-04-tablet-webp-1536x1912_2x_hv5zmm.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752485/bg-14-desk-webp-1180x770_se11ha.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752486/bg-14-desk-webp-2360x1540_2x_wwezvb.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-10-mobile-webp-375x812_v9ejsm.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-10-mobile-webp-750x1624_2x_pdpbxo.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752227/bg-10-tablet-webp-768x956_xqotyl.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752227/bg-10-tablet-webp-1536x1912_2x_katv7y.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752482/bg-12-desk-webp-1180x770_nsnpad.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752483/bg-12-desk-webp-2360x1540_2x_mvy42x.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-07-mobile-webp-375x812_lxxlvy.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-07-mobile-webp-750x1624_2x_wirh8l.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-07-tablet-webp-768x956_cbrrv0.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752226/bg-07-tablet-webp-1536x1912_2x_y6qgjq.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752484/bg-13-desk-webp-1180x770_lgtkch.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752485/bg-13-desk-webp-2360x1540_2x_hxhizt.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752159/bg-13-mobile-webp-375x812_diuoux.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-13-mobile-webp-750x1624_2x_dnftko.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752230/bg-15-tablet-webp-768x956_noua1f.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752231/bg-15-tablet-webp-1536x1912_2x_usxrol.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752481/bg-11-desk-webp-1180x770_rldph5.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752482/bg-11-desk-webp-2360x1540_2x_aboou2.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751731/bg-03-mobile-webp-375x812_ehkzgh.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751736/bg-03-mobile-webp-750x1624_2x_fuuz9t.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-01-tablet-webp-768x956_tfohwn.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-01-tablet-webp-1536x1912_2x_pxda7s.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752486/bg-15-desk-webp-1180x770_qzywxu.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752486/bg-15-desk-webp-2360x1540_2x_rqunnb.webp"}],W=["#icon-board-square","#icon-board-star","#icon-board-loading","#icon-board-puzzle","#icon-board-container","#icon-board-lightning","#icon-board-colors","#icon-board-hexagon"],tt=P().shape({title:M().required("Title is required!")}),ot=({isModalOpen:o,modalStateSwapper:i,gallery:a})=>{const r=y(),[d,p]=b.useState(W[0]),[l,m]=b.useState(H[0].url),x={title:"",icon:d,bg:l},h=F(),j=n=>{n.preventDefault();const f=n.target.elements[0].value;if(!f){G.error("Title is required!");return}const s={title:f,icon:d,backgroundURL:l};i(),r(ce(s)),h(`/home/${s.title}`)},u=n=>{m(n)},w=n=>{p(n)};return e.jsx(N,{modalIsOpen:o,closeModal:i,title:"New board",maxWidth:"350px",children:e.jsx(V,{children:e.jsx(ne,{initialValues:x,validationSchema:tt,children:e.jsxs(Q,{onSubmit:n=>j(n),children:[e.jsxs(_,{children:[e.jsx(X,{name:"title",component:"div"}),e.jsx(Y,{type:"text",id:"title",name:"title",placeholder:"Title",autoComplete:"off"})]}),e.jsxs(_,{children:[e.jsx(I,{children:"Icons "}),e.jsx(T,{children:W.map((n,f)=>e.jsxs(J,{children:[e.jsx(K,{className:d===n?"active":"",onClick:()=>w(n),width:18,height:18,children:e.jsx("use",{href:g+n,width:18,height:18})}),e.jsx(S,{type:"radio",value:n,name:"icon"})]},f))})]}),e.jsxs(_,{children:[e.jsx(I,{children:"Backgrounds "}),e.jsx(T,{children:H.map((n,f)=>e.jsxs("label",{children:[e.jsx(Z,{onClick:()=>u(n[a]),className:l===n[a]?"active":"",children:n[a]!==""&&e.jsx(ee,{url:n[a]==="no background"?"":n[a],onClick:()=>u(n[a]),className:l===n[a]?"active":""})}),e.jsx(S,{type:"radio",value:n.url,name:"bg"})]},f))})]}),e.jsxs(te,{type:"submit",children:[e.jsx(oe,{children:e.jsx(ie,{children:e.jsx("use",{href:g+"#icon-plus"})})}),"Create"]})]})})})})},it=t.ul`
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

	scroll-snap-align: start;

	@media screen and (max-width: 767px) {
		width: 225px;
		margin: 0 -14px;
	}
`,rt=t.li`
	display: flex;
	align-items: center;

	height: 61px;
	cursor: pointer;

	&.active {
		color: var(--secondary-text-sidebar-color);
		background-color: var(--secondary-background-color);
	}

	&.active .iconActive {
		stroke: var(--secondary-text-sidebar-color);
	}

	&.active::after {
		content: "";
		position: absolute;

		right: 4px;

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
`,at=t(R)`
	width: 100%;
	height: 61px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`,nt=t(R)`
	width: 100%;
	height: 61px;
	display: flex;
	align-items: center;
`,st=t.div`
	display: flex;
	align-items: center;
	margin-left: 24px;

	@media (max-width: 767px) {
		margin-left: 14px;
	}
`,lt=t.div`
  position: relative;

  @media screen and (min-width: 767px) {
    padding-left: 8px;
    padding-right: 8px;
  }

  @media screen and (max-width: 767px) {
    margin-left: 4px;
  }

  @media screen and (min-width: 1439px) {
    &::after {
      transition: all 400ms linear;
      content: attr(data-tooltip);
      width: 100%;

      position: absolute;
      top: 0;
      left: 0;

      padding-left: 8px;

      white-space: wrap;
      z-index: 100;
      background-color: var(--secondary-background-color);
      border-radius: 6px;
      opacity: 0;
      visibility: hidden:
    }

    &.tooltip:hover::after {
      opacity: 1;
      visibility: visible;
    }
  }
`,ct=t.div`
	width: 122px;
	height: 21px;
`,dt=t.p`
	color: inherit;

	overflow: hidden;
	text-wrap: nowrap;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`,O=t.svg`
	fill: transparent;
`,pt=t.div`
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
`,ut=t.button`
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
`,bt=[{url:"https://res.cloudinary.com/doc0gvy9u/image/upload/v1693183018/block_fbhcsq.png"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_3_wyzvab.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_5_jljjvg.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_9_nxlkhb.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502421/BG_IMG_4_jietm8.jpg"},{url:"https://res.cloudinary.com/doc0gvy9u/image/upload/v1692831655/webp/fon5_pc_x2_tdyopu.webp"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_7_ilmo6i.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_6_g8flsj.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502421/BG_IMG_2_mgbmrh.jpg"},{url:"https://res.cloudinary.com/doc0gvy9u/image/upload/v1692831452/jpg/fon9_pc_x2_m5qh2n.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_15_bb8qwx.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502423/BG_IMG_14_gmxpzb.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502423/BG_IMG_13_kab0at.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_12_mghyai.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_11_qiulfq.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_10_we13fj.jpg"}],mt=["#icon-board-square","#icon-board-star","#icon-board-loading","#icon-board-puzzle","#icon-board-container","#icon-board-lightning","#icon-board-colors","#icon-board-hexagon"],xt=P().shape({title:M().required("Title is required!")}),ht=({isModalOpen:o,modalStateSwapper:i})=>{const a=y(),r=z(re);console.log(r);const{_id:d,title:p,icon:l,backgroundURL:m}=r.result;console.log(p);const[x,h]=b.useState(m),[j,u]=b.useState(l),w=F(),n={title:p,icon:l,backgroundURL:m},f=c=>{c.preventDefault();const k=c.target.elements[0].value;if(!c.target.elements[0].value){G.error("Title is required!");return}const B={dashboardId:d,title:k,icon:j,backgroundURL:x};i(),a(de(B)),console.log(B),a($(d)),w(`/home/${k}`)},s=c=>{h(c)},v=c=>{u(c)};return e.jsx(N,{modalIsOpen:o,closeModal:i,title:"Edit board",maxWidth:"350px",children:e.jsx(V,{children:e.jsx(ne,{initialValues:n,validationSchema:xt,children:e.jsxs(Q,{onSubmit:c=>f(c),children:[e.jsxs(_,{children:[e.jsx(X,{name:"title",component:"div"}),e.jsx(Y,{type:"text",id:"title",defaultValue:p,name:"title",placeholder:"Title",autoComplete:"off"})]}),e.jsxs(_,{children:[e.jsx(I,{children:"Icons "}),e.jsx(T,{children:mt.map((c,k)=>e.jsxs(J,{children:[e.jsx(K,{className:j===c?"active":"",onClick:()=>v(c),width:18,height:18,children:e.jsx("use",{href:g+c,width:18,height:18})}),e.jsx(S,{type:"radio",value:c,name:"icon"})]},k))})]}),e.jsxs(_,{children:[e.jsx(I,{children:"Backgraunds "}),e.jsx(T,{children:bt.map((c,k)=>e.jsxs("label",{children:[e.jsx(Z,{onClick:()=>s(c.url),className:x===c.url?"active":"",children:c.url!==""&&e.jsx(ee,{url:c.url,onClick:()=>s(c.url),className:x===c.url?"active":""})}),e.jsx(S,{type:"radio",value:c.url,name:"bg"})]},k))})]}),e.jsxs(te,{type:"submit",children:[e.jsx(oe,{children:e.jsx(ie,{children:e.jsx("use",{href:g+"#icon-plus"})})}),"Edit"]})]})})})})},gt=({icon:o,boards:i,selectedItem:a,choice:r,setUserBoards:d,isModalOpen:p,closeModal:l,setSelectedItemId:m,gallery:x})=>{const[h,j]=b.useState(!1),u=()=>{j(s=>!s)},w=s=>{let v="",c="";return i.forEach((k,C)=>{if(k._id===s){const B=i[C+1]?i[C+1]:i[C-1];B&&(v=`/home/${B.title}`,c=B._id)}}),{path:v,id:c}},n=y(),f=s=>{if(s){const v=n($(w(s).id));m(v.arg)}n(pe(s))};return e.jsxs(e.Fragment,{children:[i.length!==0&&e.jsx(it,{children:i.map(s=>e.jsxs(rt,{onClick:()=>r(s),className:a._id===s._id?"active":"",children:[e.jsx(at,{to:`/home/${s.title}`,children:e.jsxs(st,{children:[e.jsx(O,{className:"iconBoard iconActive",width:"18px",height:"18px",children:e.jsx("use",{href:`${o}${s.icon}`})}),e.jsx(lt,{className:s.title.length>20&&"tooltip","data-tooltip":`${s.title}`,children:e.jsx(ct,{children:e.jsx(dt,{children:s.title})})})]})}),a._id===s._id&&e.jsxs(pt,{children:[e.jsx(ut,{onClick:()=>u(),type:"button",children:e.jsx(O,{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${o}#icon-pencil`})})}),e.jsx(nt,{to:w(s._id).path,onClick:()=>f(s._id),type:"button",children:e.jsx(O,{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${o}#icon-trash`})})})]})]},s._id))}),e.jsx(ot,{setUserBoards:d,isModalOpen:p,modalStateSwapper:l,gallery:x}),h&&e.jsx(ht,{isModalOpen:h,modalStateSwapper:u})]})},wt="/TaskPro-blended1-frontend/assets/plant-92SCXr2v.png",ft=t.div`
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
`,vt=t.p`
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
`,jt=t.button`
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
`,yt=t.input`
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
`,A=t.div`
  padding-left: 14px;
  color: #c04d4d;
  font-size: 18px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`,kt=t.form`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`,_t=t.textarea`
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

  color: rgb(22, 22, 22);
  background-color: rgb(190, 219, 176);

  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,Bt=P().shape({email:M().email("Invalid email").required("Email is required"),comment:M().min(50,"Must be at least 50 characters long").required()}),Ct=({isModalOpen:o,modalStateSwapper:i})=>{const a=y(),r=ve({initialValues:{email:"",comment:""},validationSchema:Bt,onSubmit:async d=>{try{await a(ue({email:d.email,comment:d.comment})).unwrap()&&G.success("Your message was successfully sent"),i(),r.resetForm()}catch(p){console.log(p)}}});return e.jsx(N,{modalIsOpen:o,closeModal:i,title:"Need help",maxWidth:"335px",children:e.jsxs(kt,{onSubmit:r.handleSubmit,children:[e.jsxs(_,{children:[e.jsx(yt,{type:"text",name:"email",placeholder:"Email address",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.email,autoComplete:"off"}),r.touched.email&&r.errors.email?e.jsx(A,{children:r.errors.email}):null]}),e.jsxs(_,{children:[e.jsx(_t,{as:"textarea",rows:"6",name:"comment",placeholder:"Comment",autoComplete:"off",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.comment}),r.touched.comment&&r.errors.comment?e.jsx(A,{children:r.errors.comment}):null]}),e.jsx(zt,{type:"submit",children:"Submit"})]})})},It=({icon:o})=>{const{isModalOpen:i,openModal:a,closeModal:r}=U();return e.jsxs(e.Fragment,{children:[e.jsxs(ft,{children:[e.jsx("img",{className:"img-plant",src:wt,alt:"Happy plant"}),e.jsxs(vt,{children:["If you need help with ",e.jsx("span",{className:"appName",children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),e.jsxs(jt,{type:"submit",onClick:a,children:[e.jsx("svg",{className:"iconHelp",width:"20px",height:"20px",children:e.jsx("use",{href:`${o}#icon-help-circle`})}),e.jsx("span",{children:"Need help?"})]})]}),e.jsx(ae,{onClick:r,className:i===!0&&"active"}),e.jsx(Ct,{modalStateSwapper:r,isModalOpen:i})]})},Tt=t.button`
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
`,St=({icon:o})=>{const i=y();return e.jsxs(Tt,{onClick:()=>i(be()),type:"submit",children:[e.jsx("svg",{className:"iconLogOut",width:"32px",height:"32px",children:e.jsx("use",{href:`${o}#icon-logout`})}),e.jsx("span",{children:"Log out"})]})},Mt=t.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;

	margin-bottom: 8px;

	color: var(--sidebar-icon-edit-stroke-color);
`,qt=t.div`
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
`,Nt=t.button`
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
`,Dt=({openModal:o,icon:i,viewport:a})=>e.jsxs(e.Fragment,{children:[e.jsx(Mt,{children:"My boards"}),e.jsxs(qt,{children:[e.jsx("p",{className:"createText",children:"Create a new board"}),e.jsx(Nt,{onClick:()=>{a({width:window.innerWidth,height:window.innerHeight}),o()},type:"submit",children:e.jsx("svg",{className:"iconCreateBoard",width:"20px",height:"20px",children:e.jsx("use",{href:`${i}#icon-plus`})})})]})]}),Et=[{width:372,height:812,deviceType:"url-mob"},{width:768,height:956,deviceType:"url-tab"},{width:1180,height:770,deviceType:"url-desk"}],Lt=[{width:750,height:1624,deviceType:"url-mobx2"},{width:1536,height:1912,deviceType:"url-tabx2"},{width:2360,height:1540,deviceType:"url-deskx2"}],Ot=()=>{const[o,i]=b.useState(null);return{currentImage:o,selectImage:r=>{let p=window.devicePixelRatio===1?Et:Lt,l=1/0,m=o;for(const x of p){const h=Math.abs(r.width-x.width),j=Math.abs(r.height-x.height),u=h+j;u<l&&(l=u,m=x)}i(m.deviceType)}}},Gt=({isOpen:o})=>{const[i,a]=b.useState(""),[r,d]=b.useState(""),p=z(ge),{result:l}=z(re),[m,x]=b.useState([]),h=y(),{isModalOpen:j,openModal:u,closeModal:w}=U();b.useEffect(()=>{x(p)},[p]),b.useEffect(()=>{a(l??"")},[l]);const n=v=>{i._id!==v._id&&r!==v._id&&(h($(v._id)),d(v._id))},{selectImage:f,currentImage:s}=Ot();return e.jsxs(Ye,{className:o===!0&&"active",children:[e.jsxs(e.Fragment,{children:[e.jsx(et,{icon:g}),e.jsx(Dt,{openModal:u,viewport:f,icon:g}),e.jsx(Je,{children:e.jsx(gt,{icon:g,boards:m,choice:n,selectedItem:i,isModalOpen:j,closeModal:w,setSelectedItemId:d,gallery:s})})]}),e.jsxs(Ke,{children:[e.jsx(It,{icon:g}),e.jsx(St,{icon:g})]})]})},At=()=>{const o=y(),{isModalOpen:i,openModal:a,closeModal:r}=U();return b.useEffect(()=>{o(me())},[o]),e.jsx(xe,{children:e.jsxs(we,{children:[e.jsx(Gt,{isOpen:i}),e.jsxs(fe,{children:[e.jsx(Xe,{openSideBar:a}),e.jsx(b.Suspense,{fallback:e.jsx("div",{children:"Loading"}),children:e.jsx(he,{})})]}),e.jsx(ae,{onClick:r,className:i===!0&&"active"})]})})};export{At as default};
