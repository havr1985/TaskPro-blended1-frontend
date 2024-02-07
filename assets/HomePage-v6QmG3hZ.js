import{u as t,j as e,a as k,r as u,b as N,s as D,c as H,d as A,e as U,N as $,f as W,g as F,O as R}from"./index-bQnKTMix.js";import{i as c}from"./icons-iplVKqot.js";import{T as V}from"./ThemeMenu-RaMK_xdS.js";import{S as B,a as q,M as G,F as j,E as y,T as Q,b as M,R as C,I as X,c as J,D as I,B as K,C as Y,A as Z,d as ee,P as te,u as _,O as T,H as oe,e as ie}from"./HomePage.styled-u_9p_py0.js";import{c as E,a as w,F as O,b as L}from"./index.esm-qTO28jC0.js";const re=t.header`
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
`,ne=t.div`
  @media (min-width: 1440px) {
    display: none;
  }
`,ae=t.div`
  display: flex;
  column-gap: 14px;
  align-items: center;
  margin-left: auto;
`,se=t.div`
  display: flex;
  align-items: center;
  color: var(--primary-heading-color);
  column-gap: 8px;
  cursor: pointer;
`,le=t.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`,ce=t.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: var(--primary-icon-stroke-color);
`,de=t.svg`
  width: 32px;
  height: 32px;
  stroke: var(--primary-icon-stroke-color);
  fill: transparent;
`,pe=t.button`
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
`,xe=({children:i})=>e.jsx(pe,{type:"submit",children:i}),he=t.img`
  height: 68px;
  width: 68px;
  border-radius: 8px;
`,ue=t.label`
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
`,ge=t.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`,me=t.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`,be=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;
  overflow-x: hidden;
`,v=t.input`
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
`,je=t.svg`
  height: 68px;
  width: 68px;
  border-radius: 8px;
  background-color: var(--sidebar-help-backgound-color);
  fill: white;
`,fe=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`,ve=t.svg`
  position: absolute;
  right: 18px;
  top: 14px;
  stroke: white;
  cursor: pointer;
  user-select: none;
`,ye=t.div`
  width: 100%;
  position: relative;
`,we=({isModalOpen:i,modalStateSwapper:r})=>{const n=k(),[a,d]=u.useState("password"),{email:l,username:h,avatarURL:p}=N(D),g=()=>{d(o=>o==="password"?"text":"password")},m=o=>{const x=o.target.files[0],b=new FormData;b.append("avatar",x),n(H(b))},s=o=>{o.preventDefault();const x={};[...o.target.elements].slice(0,3).filter(({value:f})=>f).forEach(({name:f,value:P})=>x[f]=P),n(A(x)),r()};return e.jsxs(B,{modalIsOpen:i,closeModal:r,title:"Edit profile",maxWidth:"400px",children:[e.jsxs(ge,{children:[p?e.jsx(he,{src:p||"https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",alt:"avatar"}):e.jsx("div",{children:e.jsx(je,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${c}#icon-user`})})}),e.jsx(me,{onChange:m,type:"file",id:"input__file"}),e.jsx(ue,{htmlFor:"input__file",children:"+"})]}),e.jsxs(be,{autoComplete:"false",onSubmit:o=>s(o),children:[e.jsxs(fe,{children:[e.jsx(v,{autoComplete:"off",name:"username",placeholder:"Fullname",defaultValue:h||null,type:"text"}),e.jsx(v,{autoComplete:"off",name:"email",placeholder:"Email",defaultValue:l||null,type:"email"}),e.jsxs(ye,{children:[e.jsx(v,{name:"password",placeholder:"Password",type:a,autoComplete:"off"}),e.jsx(ve,{onClick:()=>g(),className:"",width:"22px",height:"22px",children:e.jsx("use",{href:c+"#icon-password-eye"})})]})]}),e.jsx(xe,{children:"Send"})]})]})},ke=({openSideBar:i})=>{const[r,n]=u.useState(!1),a=()=>{n(d=>!d)};return e.jsxs(re,{children:[e.jsx(ne,{children:e.jsx(le,{type:"button",onClick:i,children:e.jsx(ce,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${c}#icon-burger-menu`})})})}),e.jsxs(ae,{children:[e.jsx(V,{}),e.jsxs(se,{onClick:()=>a(),children:[e.jsx("p",{children:"User"}),e.jsx(de,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${c}#icon-user`})})]})]}),e.jsx(we,{isModalOpen:r,modalStateSwapper:a})]})},Be=t.div`
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
`,_e=t.div`
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
`,Me=({icon:i})=>e.jsxs(_e,{children:[e.jsx("div",{className:"iconBg",children:e.jsx("svg",{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${i}#icon-task-pro-lightning`})})}),e.jsx("span",{className:"logoText",children:"Task Pro"})]}),Ce=[{url:""},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_3_wyzvab.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_5_jljjvg.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_9_nxlkhb.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502421/BG_IMG_4_jietm8.jpg"},{url:"https://res.cloudinary.com/doc0gvy9u/image/upload/v1692831655/webp/fon5_pc_x2_tdyopu.webp"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_7_ilmo6i.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_6_g8flsj.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502421/BG_IMG_2_mgbmrh.jpg"},{url:"https://res.cloudinary.com/doc0gvy9u/image/upload/v1692831452/jpg/fon9_pc_x2_m5qh2n.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_15_bb8qwx.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502423/BG_IMG_14_gmxpzb.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502423/BG_IMG_13_kab0at.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_12_mghyai.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_11_qiulfq.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_10_we13fj.jpg"}],S=["#icon-board-square","#icon-board-star","#icon-board-loading","#icon-board-puzzle","#icon-board-container","#icon-board-lightning","#icon-board-colors","#icon-board-hexagon"],Ie=E().shape({title:w().required("Title is required!")}),Se=({isModalOpen:i,modalStateSwapper:r})=>{const n=k(),[a,d]=u.useState(S[0]),[l,h]=u.useState(""),p={title:"",icon:a,bg:l},g=o=>{h(o)},m=o=>{d(o)},s=o=>{o.preventDefault();const b={title:o.target.elements[0].value,icon:a,backgroundURL:l};r(),n(U(b))};return e.jsx(B,{modalIsOpen:i,closeModal:r,title:"New board",maxWidth:"350px",children:e.jsx(q,{children:e.jsx(O,{initialValues:p,validationSchema:Ie,children:e.jsxs(G,{onSubmit:o=>s(o),children:[e.jsxs(j,{children:[e.jsx(y,{name:"title",component:"div"}),e.jsx(Q,{type:"text",id:"title",name:"title",placeholder:"Title",autoComplete:"off"})]}),e.jsxs(j,{children:[e.jsx(M,{children:"Icons "}),e.jsx(C,{children:S.map((o,x)=>e.jsxs(X,{children:[e.jsx(J,{className:a===o?"active":"",onClick:()=>m(o),width:18,height:18,children:e.jsx("use",{href:c+o,width:18,height:18})}),e.jsx(I,{type:"radio",value:o,name:"icon"})]},x))})]}),e.jsxs(j,{children:[e.jsx(M,{children:"Backgrounds "}),e.jsx(C,{children:Ce.map((o,x)=>e.jsxs("label",{children:[e.jsx(K,{onClick:()=>g(o.url),className:l===o.url?"active":"",children:o.url!==""&&e.jsx(Y,{url:o.url,onClick:()=>g(o.url),className:l===o.url?"active":""})}),e.jsx(I,{type:"radio",value:o.url,name:"bg"})]},x))})]}),e.jsxs(Z,{type:"submit",children:[e.jsx(ee,{children:e.jsx(te,{children:e.jsx("use",{href:c+"#icon-plus"})})}),"Create"]})]})})})})},ze=t.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;

	margin-bottom: 8px;

	color: var(--sidebar-icon-edit-stroke-color);
`,Ne=t.div`
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
`,qe=t.button`
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
`,Ge=t.ul`
	font-weight: 500;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: -0.02em;
	color: var(--sidebar-icon-stroke-color);

	display: flex;
	flex-direction: column;
	gap: 4px;

	position: relative;
`,Te=t.li`
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

		right: -24px;

		height: 61px;
		width: 4px;
		border-radius: 4px 0 0 4px;

		background-color: var(--logout-button-color);
	}
	@media (max-width: 767px) {
		&.active::after {
			right: -14px;
		}
	}
	.iconBoard {
		stroke: var(--sidebar-icon-edit-stroke-color);

		margin-right: 8px;
	}
`,Ee=t.div`
	display: flex;
	align-items: center;
`,Oe=t.div`
	display: flex;
`,z=t.button`
	height: 20px;
	border: transparent;
	background: none;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;

	padding: 0;

	.iconBoard.iconEdit:hover {
		stroke: var(--primary-button-color);
		transform: scale(1.1);
		animation: pulse 1s infinite alternate;
	}
`,Le=({icon:i,boards:r,selectedItem:n,choice:a,setUserBoards:d})=>{const{isModalOpen:l,openModal:h,closeModal:p}=_(),g=k(),m=s=>{g(W(s))};return e.jsxs("div",{children:[e.jsx(ze,{children:"My boards"}),e.jsxs(Ne,{children:[e.jsx("p",{className:"createText",children:"Create a new board"}),e.jsx(qe,{onClick:()=>h(),type:"submit",children:e.jsx("svg",{className:"iconCreateBoard",width:"20px",height:"20px",children:e.jsx("use",{href:`${i}#icon-plus`})})})]}),e.jsx(Ge,{children:r.map(s=>e.jsxs(Te,{onClick:()=>a(s),className:n._id===s._id?"active":"",children:[e.jsx($,{to:`/home/${s.title}`,children:e.jsxs(Ee,{children:[e.jsx("svg",{className:"iconBoard iconActive",width:"20px",height:"20px",children:e.jsx("use",{href:`${i}${s.icon}`})}),e.jsx("p",{children:s.title})]})}),n.id===s.id&&e.jsxs(Oe,{children:[e.jsx(z,{type:"button",children:e.jsx("svg",{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${i}#icon-pencil`})})}),e.jsx(z,{onClick:()=>m(s._id),type:"button",children:e.jsx("svg",{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${i}#icon-trash`})})})]})]},s._id))}),e.jsx(Se,{setUserBoards:d,isModalOpen:l,modalStateSwapper:p})]})},Pe="/TaskPro-blended1-frontend/assets/plant-92SCXr2v.png",De=t.div`
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
`,He=t.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: -0.02em;

	width: 172px;

	margin-bottom: 18px;

	color: var(--secondary-text-sidebar-color);

	@media (max-width: 767px) {
		font-size: 12px;
		line-height: 16px;
	}

	.appName {
		color: var(--welcome-message-text-accent-color);
	}
`,Ae=t.button`
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
`,Ue=t(L)`
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
`,$e=t(L)`
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
`,We=t.button`
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
`,Fe=E().shape({email:w().email("Invalid email").required("Email is required"),question:w().min("10").required("Email is required")}),Re=({isModalOpen:i,modalStateSwapper:r})=>{const n={email:"",question:""};return e.jsx(B,{modalIsOpen:i,closeModal:r,title:"Need help",maxWidth:"335px",children:e.jsx(q,{children:e.jsx(O,{initialValues:n,validationSchema:Fe,children:e.jsxs(G,{children:[e.jsxs(j,{children:[e.jsx(y,{name:"email",component:"div"}),e.jsx(Ue,{type:"text",id:"email",name:"email",placeholder:"Email address",autoComplete:"off"})]}),e.jsxs(j,{children:[e.jsx(y,{name:"question",component:"div"}),e.jsx($e,{type:"text",id:"question",name:"question",placeholder:"Comment",autoComplete:"off",as:"textarea"})]}),e.jsx(We,{type:"submit",children:"Send"})]})})})})},Ve=({icon:i})=>{const{isModalOpen:r,openModal:n,closeModal:a}=_();return e.jsxs(e.Fragment,{children:[e.jsxs(De,{children:[e.jsx("img",{src:Pe,alt:"Happy plant"}),e.jsxs(He,{children:["If you need help with ",e.jsx("span",{className:"appName",children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),e.jsxs(Ae,{type:"submit",onClick:n,children:[e.jsx("svg",{className:"iconHelp",width:"20px",height:"20px",children:e.jsx("use",{href:`${i}#icon-help-circle`})}),e.jsx("span",{children:"Need help?"})]})]}),e.jsx(T,{onClick:a,className:r===!0&&"active"}),e.jsx(Re,{modalStateSwapper:a,isModalOpen:r})]})},Qe=t.button`
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
`,Xe=({icon:i})=>e.jsxs(Qe,{type:"submit",children:[e.jsx("svg",{className:"iconLogOut",width:"32px",height:"32px",children:e.jsx("use",{href:`${i}#icon-logout`})}),e.jsx("span",{children:"Log out"})]}),Je=({isOpen:i})=>{const[r,n]=u.useState(""),a=N(F),[d,l]=u.useState([]);u.useEffect(()=>{l(a)},[a]);const h=p=>{n(p)};return e.jsxs(Be,{className:i===!0&&"active",children:[e.jsxs("div",{children:[e.jsx(Me,{icon:c}),e.jsx(Le,{icon:c,boards:d,choice:h,selectedItem:r})]}),e.jsxs("div",{children:[e.jsx(Ve,{icon:c}),e.jsx(Xe,{icon:c})]})]})},Ke=t.div`
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
`,rt=()=>{const{isModalOpen:i,openModal:r,closeModal:n}=_();return e.jsx(Ke,{children:e.jsxs(oe,{children:[e.jsx(Je,{isOpen:i}),e.jsxs(ie,{children:[e.jsx(ke,{openSideBar:r}),e.jsx(R,{})]}),e.jsx(T,{onClick:n,className:i===!0&&"active"})]})})};export{rt as default};
