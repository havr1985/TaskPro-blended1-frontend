import{u as t,j as e,a as f,r as u,b as I,s as U,c as K,d as Y,e as Z,N as ee,f as te,l as oe,g as ie,O as re}from"./index-vxcfzsDt.js";import{i as h}from"./icons-iplVKqot.js";import{T as ne}from"./ThemeMenu-Fs56iSZT.js";import{S as _,a as N,M as z,F as j,E as v,T as $,b as y,R as w,I as D,c as P,D as k,B as A,C as H,A as W,d as F,P as R,u as q,O as V,H as ae,e as se}from"./HomePage.styled-6h1mITGi.js";import{c as T,a as B,F as E,b as Q}from"./index.esm-_0AAdnCr.js";const le=t.header`
  height: 60px;
  background-color: var(--header-background-color);
  display: flex;
  align-items: center;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    padding: 0 24px;
  }
`,ce=t.div`
  @media (min-width: 1440px) {
    display: none;
  }
`,de=t.div`
  display: flex;
  column-gap: 14px;
  align-items: center;
  margin-left: auto;
`,pe=t.div`
  display: flex;
  align-items: center;
  color: var(--primary-heading-color);
  column-gap: 8px;
  cursor: pointer;
`,xe=t.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`,he=t.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: var(--primary-icon-stroke-color);
`,ue=t.svg`
  width: 32px;
  height: 32px;
  stroke: var(--primary-icon-stroke-color);
  fill: transparent;
`,me=t.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
`,ge=t.p`
  &:hover {
    color: var(--secondary-button-color);
  }
`,be=t.button`
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
`,je=({children:i})=>e.jsx(be,{type:"submit",children:i}),fe=t.img`
  height: 68px;
  width: 68px;
  border-radius: 8px;
`,ve=t.label`
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
  transition: all 300ms;
  &:hover {
    background-color: var(--user-edit-icon-plus-hover-color);
  }
`,ye=t.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`,we=t.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`,ke=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;
  overflow-x: hidden;
`,S=t.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--shared-input-border-color);
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 18px;
  background-color: transparent;
  outline: none;
  color: var(--shared-input-text-color);
  &:focus {
    border-color: var(--shared-input-border-hover-color);
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`,Be=t.svg`
  height: 68px;
  width: 68px;
  border-radius: 8px;
  background-color: var(--sidebar-help-backgound-color);
  fill: white;
`,_e=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`,Me=t.svg`
  position: absolute;
  right: 18px;
  top: 14px;
  stroke: white;
  cursor: pointer;
  user-select: none;
`,Se=t.div`
  width: 100%;
  position: relative;
`,Ce=({isModalOpen:i,modalStateSwapper:r})=>{const a=f(),[s,d]=u.useState("password"),{email:c,username:p,avatarURL:x}=I(U),b=()=>{d(o=>o==="password"?"text":"password")},n=o=>{const m=o.target.files[0],l=new FormData;l.append("avatar",m),a(K(l))},g=o=>{o.preventDefault();const m={};[...o.target.elements].slice(0,3).filter(({value:M})=>M).forEach(({name:M,value:J})=>m[M]=J),a(Y(m)),r()};return e.jsxs(_,{modalIsOpen:i,closeModal:r,title:"Edit profile",maxWidth:"400px",children:[e.jsxs(ye,{children:[x?e.jsx(fe,{src:x||"https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",alt:"avatar"}):e.jsx("div",{children:e.jsx(Be,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${h}#icon-user`})})}),e.jsx(we,{onChange:n,type:"file",id:"input__file"}),e.jsx(ve,{htmlFor:"input__file",children:"+"})]}),e.jsxs(ke,{autoComplete:"false",onSubmit:o=>g(o),children:[e.jsxs(_e,{children:[e.jsx(S,{autoComplete:"off",name:"username",placeholder:"Fullname",defaultValue:p||null,type:"text"}),e.jsx(S,{autoComplete:"off",name:"email",placeholder:"Email",defaultValue:c||null,type:"email"}),e.jsxs(Se,{children:[e.jsx(S,{name:"password",placeholder:"Password",type:s,autoComplete:"off"}),e.jsx(Me,{onClick:()=>b(),className:"",width:"22px",height:"22px",children:e.jsx("use",{href:h+"#icon-password-eye"})})]})]}),e.jsx(je,{children:"Send"})]})]})},Ie=({openSideBar:i})=>{const[r,a]=u.useState(!1),{username:s,avatarURL:d}=I(U),c=()=>{a(p=>!p)};return e.jsxs(le,{children:[e.jsx(ce,{children:e.jsx(xe,{type:"button",onClick:i,children:e.jsx(he,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${h}#icon-burger-menu`})})})}),e.jsxs(de,{children:[e.jsx(ne,{}),e.jsxs(pe,{onClick:()=>c(),children:[e.jsx(ge,{children:s}),d?e.jsx(me,{src:d,alt:"avatar",width:"32px",height:"32px"}):e.jsx(ue,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${h}#icon-user`})})]})]}),e.jsx(Ce,{isModalOpen:r,modalStateSwapper:c})]})},Ne=t.div`
	width: 260px;

	top: 0;
	left: 0;

	z-index: 1;
	transition: 0.5s;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding: 24px;

	background-color: var(--primary-background-sidebar-color);

	@media (max-width: 1439.9px) {
		position: absolute;
		height: 100%;

		left: -100%;
	}

	@media (max-width: 767px) {
		width: 225px;

		padding: 14px 14px 24px 14px;
	}

	&.active {
		left: 0;
	}
`,ze=t.div`
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
		border-radius: 8px;

		display: flex;
		align-items: center;
		justify-content: center;

		margin-right: 8px;
	}

	.iconLightning {
		fill: var(--sidebar-icon-lightning);
	}

	.logoText {
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;

		color: var(--secondary-text-sidebar-color);
	}
`,qe=({icon:i})=>e.jsxs(ze,{children:[e.jsx("div",{className:"iconBg",children:e.jsx("svg",{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${i}#icon-task-pro-lightning`})})}),e.jsx("span",{className:"logoText",children:"Task Pro"})]}),X=[{url:""},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_3_wyzvab.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_5_jljjvg.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_9_nxlkhb.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502421/BG_IMG_4_jietm8.jpg"},{url:"https://res.cloudinary.com/doc0gvy9u/image/upload/v1692831655/webp/fon5_pc_x2_tdyopu.webp"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_7_ilmo6i.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_6_g8flsj.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502421/BG_IMG_2_mgbmrh.jpg"},{url:"https://res.cloudinary.com/doc0gvy9u/image/upload/v1692831452/jpg/fon9_pc_x2_m5qh2n.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_15_bb8qwx.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502423/BG_IMG_14_gmxpzb.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502423/BG_IMG_13_kab0at.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_12_mghyai.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_11_qiulfq.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_10_we13fj.jpg"}],G=["#icon-board-square","#icon-board-star","#icon-board-loading","#icon-board-puzzle","#icon-board-container","#icon-board-lightning","#icon-board-colors","#icon-board-hexagon"],Te=T().shape({title:B().required("Title is required!")}),Ee=({isModalOpen:i,modalStateSwapper:r})=>{const a=f(),[s,d]=u.useState(G[0]),[c,p]=u.useState(""),x={title:"",icon:s,bg:c},b=o=>{p(o)},n=o=>{d(o)},g=o=>{o.preventDefault();const l={title:o.target.elements[0].value,icon:s,backgroundURL:c};r(),a(Z(l))};return e.jsx(_,{modalIsOpen:i,closeModal:r,title:"New board",maxWidth:"350px",children:e.jsx(N,{children:e.jsx(E,{initialValues:x,validationSchema:Te,children:e.jsxs(z,{onSubmit:o=>g(o),children:[e.jsxs(j,{children:[e.jsx(v,{name:"title",component:"div"}),e.jsx($,{type:"text",id:"title",name:"title",placeholder:"Title",autoComplete:"off"})]}),e.jsxs(j,{children:[e.jsx(y,{children:"Icons "}),e.jsx(w,{children:G.map((o,m)=>e.jsxs(D,{children:[e.jsx(P,{className:s===o?"active":"",onClick:()=>n(o),width:18,height:18,children:e.jsx("use",{href:h+o,width:18,height:18})}),e.jsx(k,{type:"radio",value:o,name:"icon"})]},m))})]}),e.jsxs(j,{children:[e.jsx(y,{children:"Backgrounds "}),e.jsx(w,{children:X.map((o,m)=>e.jsxs("label",{children:[e.jsx(A,{onClick:()=>b(o.url),className:c===o.url?"active":"",children:o.url!==""&&e.jsx(H,{url:o.url,onClick:()=>b(o.url),className:c===o.url?"active":""})}),e.jsx(k,{type:"radio",value:o.url,name:"bg"})]},m))})]}),e.jsxs(W,{type:"submit",children:[e.jsx(F,{children:e.jsx(R,{children:e.jsx("use",{href:h+"#icon-plus"})})}),"Create"]})]})})})})},Ge=t.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;

	margin-bottom: 8px;

	color: var(--sidebar-icon-edit-stroke-color);
`,Oe=t.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 70px;

	border-top: 1px solid var(--line-border-sidebar-color);
	border-bottom: 1px solid var(--line-border-sidebar-color);

	margin-bottom: 40px;

	@media (max-width: 767px) {
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
`,Le=t.button`
	width: 40px;
	height: 36px;
	border: transparent;

	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	background: var(--sidebar-button-create-background);
	border-radius: 6px;

	transition: 0.5s;

	&:hover {
		background: var(--plus-button-hover-color);
	}

	.iconCreateBoard {
		stroke: var(--shared-plus-icon-dark-big);
	}
`,Ue=t.ul`
	font-weight: 500;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: -0.02em;
	color: var(--sidebar-icon-edit-stroke-color);

	display: flex;
	flex-direction: column;
	gap: 4px;

	position: relative;

	// -----
	margin: 0 -24px;

	@media (max-width: 767px) {
		margin: 0 -14px;
	}
	//--------
`,$e=t.li`
	display: flex;
	align-items: center;
	justify-content: space-between;

	cursor: pointer;

	height: 61px;

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

		right: 0px;

		height: 61px;
		width: 4px;
		border-radius: 4px 0 0 4px;

		background-color: var(--logout-button-color);
	}

	.iconBoard {
		stroke: var(--sidebar-icon-edit-stroke-color);

		margin-right: 8px;
	}
`,De=t.div`
	display: flex;
	align-items: center;
	margin-left: 24px;

	@media (max-width: 767px) {
		margin-left: 14px;
	}
`,Pe=t.div`
	color: inherit;
`,C=t.svg`
	fill: transparent;
`,Ae=t.div`
	display: flex;

	margin-right: 24px;

	@media (max-width: 767px) {
		margin-right: 14px;
	}
`,O=t.button`
	height: 20px;
	border: transparent;
	background: none;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;

	padding: 0;

	.iconBoard.iconEdit:hover {
		stroke: var(--primary-button-color-sidebar);
		transform: scale(1.1);
		animation: pulse 1s infinite alternate;
	}
`,L=["#icon-board-square","#icon-board-star","#icon-board-loading","#icon-board-puzzle","#icon-board-container","#icon-board-lightning","#icon-board-colors","#icon-board-hexagon"],He=T().shape({title:B().required("Title is required!")}),We=({isModalOpen:i,modalStateSwapper:r})=>{const[a,s]=u.useState(""),[d,c]=u.useState(L[0]),p={title:"",icon:d,backgroundURL:a},x=n=>{s(n)},b=n=>{c(n)};return e.jsx(_,{modalIsOpen:i,closeModal:r,title:"Edit board",maxWidth:"350px",children:e.jsx(N,{children:e.jsx(E,{initialValues:p,validationSchema:He,children:e.jsxs(z,{children:[e.jsxs(j,{children:[e.jsx(v,{name:"title",component:"div"}),e.jsx($,{type:"text",id:"title",name:"title",placeholder:"Title",autoComplete:"off"})]}),e.jsxs(j,{children:[e.jsx(y,{children:"Icons "}),e.jsx(w,{children:L.map((n,g)=>e.jsxs(D,{children:[e.jsx(P,{className:d===n?"active":"",onClick:()=>b(n),width:18,height:18,children:e.jsx("use",{href:h+n,width:18,height:18})}),e.jsx(k,{type:"radio",value:n,name:"icon"})]},g))})]}),e.jsxs(j,{children:[e.jsx(y,{children:"Backgraunds "}),e.jsx(w,{children:X.map((n,g)=>e.jsxs("label",{children:[e.jsx(A,{onClick:()=>x(n.url),className:a===n.url?"active":"",children:n.url!==""&&e.jsx(H,{url:n.url,onClick:()=>x(n.url),className:a===n.url?"active":""})}),e.jsx(k,{type:"radio",value:n.url,name:"bg"})]},g))})]}),e.jsxs(W,{type:"submit",children:[e.jsx(F,{children:e.jsx(R,{children:e.jsx("use",{href:h+"#icon-plus"})})}),"Edit"]})]})})})})},Fe=({icon:i,boards:r,selectedItem:a,choice:s,setUserBoards:d})=>{const{isModalOpen:c,openModal:p,closeModal:x}=q(),[b,n]=u.useState(!1),g=()=>{n(l=>!l)},o=f(),m=l=>{o(te(l))};return e.jsxs("div",{children:[e.jsx(Ge,{children:"My boards"}),e.jsxs(Oe,{children:[e.jsx("p",{className:"createText",children:"Create a new board"}),e.jsx(Le,{onClick:()=>p(),type:"submit",children:e.jsx("svg",{className:"iconCreateBoard",width:"20px",height:"20px",children:e.jsx("use",{href:`${i}#icon-plus`})})})]}),e.jsx(Ue,{children:r.map(l=>e.jsxs($e,{onClick:()=>s(l),className:a._id===l._id?"active":"",children:[e.jsx(ee,{to:`/home/${l.title}`,children:e.jsxs(De,{children:[e.jsx(C,{className:"iconBoard iconActive",width:"20px",height:"20px",children:e.jsx("use",{href:`${i}${l.icon}`})}),e.jsx(Pe,{children:l.title})]})}),a.id===l.id&&e.jsxs(Ae,{children:[e.jsx(O,{onClick:()=>g(),type:"button",children:e.jsx(C,{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${i}#icon-pencil`})})}),e.jsx(O,{onClick:()=>m(l._id),type:"button",children:e.jsx(C,{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${i}#icon-trash`})})})]})]},l._id))}),e.jsx(Ee,{setUserBoards:d,isModalOpen:c,modalStateSwapper:x}),e.jsx(We,{isModalOpen:b,modalStateSwapper:g})]})},Re="/TaskPro-blended1-frontend/assets/plant-92SCXr2v.png",Ve=t.div`
	width: 212px;
	height: 272px;

	padding: 20px;
	margin-bottom: 24px;

	border-radius: 8px;
	background-color: var(--secondary-background-color);

	@media (max-width: 767px) {
		width: 197px;
		height: 238px;

		padding: 14px;
	}
	.img-plant {
		margin-bottom: 14px;
	}
`,Qe=t.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: -0.02em;

	width: 172px;
	height: 102px;

	margin-bottom: 18px;

	color: var(--secondary-text-sidebar-color);

	@media (max-width: 767px) {
		font-size: 12px;
		line-height: 16px;

		width: 168px;
		height: 80px;
	}

	.appName {
		color: var(--welcome-message-text-accent-color);
	}
`,Xe=t.button`
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

	.iconHelp {
		stroke: var(--secondary-text-sidebar-color);
		fill: var(--sidebar-icon-fill-color);

		margin-right: 8px;
	}
`,Je=t(Q)`
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
`,Ke=t(Q)`
  position: relative;
  width: 100%;
  height: 120px;
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
`,Ye=t.button`
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
`,Ze=T().shape({email:B().email("Invalid email").required("Email is required"),question:B().min("10").required("Email is required")}),et=({isModalOpen:i,modalStateSwapper:r})=>{const a={email:"",question:""};return e.jsx(_,{modalIsOpen:i,closeModal:r,title:"Need help",maxWidth:"335px",children:e.jsx(N,{children:e.jsx(E,{initialValues:a,validationSchema:Ze,children:e.jsxs(z,{children:[e.jsxs(j,{children:[e.jsx(v,{name:"email",component:"div"}),e.jsx(Je,{type:"text",id:"email",name:"email",placeholder:"Email address",autoComplete:"off"})]}),e.jsxs(j,{children:[e.jsx(v,{name:"question",component:"div"}),e.jsx(Ke,{type:"text",id:"question",name:"question",placeholder:"Comment",autoComplete:"off",as:"textarea"})]}),e.jsx(Ye,{type:"submit",children:"Send"})]})})})})},tt=({icon:i})=>{const{isModalOpen:r,openModal:a,closeModal:s}=q();return e.jsxs(e.Fragment,{children:[e.jsxs(Ve,{children:[e.jsx("img",{className:"img-plant",src:Re,alt:"Happy plant"}),e.jsxs(Qe,{children:["If you need help with ",e.jsx("span",{className:"appName",children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),e.jsxs(Xe,{type:"submit",onClick:a,children:[e.jsx("svg",{className:"iconHelp",width:"20px",height:"20px",children:e.jsx("use",{href:`${i}#icon-help-circle`})}),e.jsx("span",{children:"Need help?"})]})]}),e.jsx(V,{onClick:s,className:r===!0&&"active"}),e.jsx(et,{modalStateSwapper:s,isModalOpen:r})]})},ot=t.button`
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

	.iconLogOut {
		stroke: var(--logout-button-color);
		fill: var(--sidebar-icon-fill-color);

		transition: 0.5s;
	}
	&:hover .iconLogOut {
		stroke: var(--logout-hover-button-color);
	}
`,it=({icon:i})=>{const r=f();return e.jsxs(ot,{onClick:()=>r(oe()),type:"submit",children:[e.jsx("svg",{className:"iconLogOut",width:"32px",height:"32px",children:e.jsx("use",{href:`${i}#icon-logout`})}),e.jsx("span",{children:"Log out"})]})},rt=i=>i.dashboards.dashboards,nt=({isOpen:i})=>{const[r,a]=u.useState(""),s=I(rt),[d,c]=u.useState([]);u.useEffect(()=>{c(s)},[s]);const p=x=>{a(x)};return e.jsxs(Ne,{className:i===!0&&"active",children:[e.jsxs("div",{children:[e.jsx(qe,{icon:h}),e.jsx(Fe,{icon:h,boards:d,choice:p,selectedItem:r})]}),e.jsxs("div",{children:[e.jsx(tt,{icon:h}),e.jsx(it,{icon:h})]})]})},at=t.div`
  margin-left: auto;
  margin-right: auto;
 
  @media screen and (max-width: 767.9px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
   width: 100vw;
  }
`,ht=()=>{const i=f(),{isModalOpen:r,openModal:a,closeModal:s}=q();return u.useEffect(()=>{i(ie())},[i]),e.jsx(at,{children:e.jsxs(ae,{children:[e.jsx(nt,{isOpen:r}),e.jsxs(se,{children:[e.jsx(Ie,{openSideBar:a}),e.jsx(u.Suspense,{fallback:e.jsx("div",{children:"Loading"}),children:e.jsx(re,{})})]}),e.jsx(V,{onClick:s,className:r===!0&&"active"})]})})};export{ht as default};
