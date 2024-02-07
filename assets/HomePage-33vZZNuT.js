import{u as t,j as e,a as v,r as u,b as I,s as U,c as K,d as Y,e as Z,N as ee,f as te,l as oe,g as ie,O as re}from"./index-8v7B6dAv.js";import{i as x}from"./icons-iplVKqot.js";import{T as ne}from"./ThemeMenu-DgVWU3Yb.js";import{S as _,a as z,M as N,F as j,E as f,T as $,b as y,R as w,I as D,c as P,D as k,B as A,C as H,A as W,d as F,P as R,u as q,O as V,H as se,e as ae}from"./HomePage.styled-LCxhFe2F.js";import{c as T,a as B,F as E,b as Q}from"./index.esm-9974_F4E.js";const ce=t.header`
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
`,le=t.div`
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
`,he=t.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`,xe=t.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: var(--primary-icon-stroke-color);
`,ue=t.svg`
  width: 32px;
  height: 32px;
  stroke: var(--primary-icon-stroke-color);
  fill: transparent;
`,ge=t.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
`,me=t.p`
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
`,je=({children:i})=>e.jsx(be,{type:"submit",children:i}),ve=t.img`
  height: 68px;
  width: 68px;
  border-radius: 8px;
`,fe=t.label`
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
`,Ce=({isModalOpen:i,modalStateSwapper:r})=>{const s=v(),[a,d]=u.useState("password"),{email:l,username:p,avatarURL:h}=I(U),b=()=>{d(o=>o==="password"?"text":"password")},n=o=>{const g=o.target.files[0],c=new FormData;c.append("avatar",g),s(K(c))},m=o=>{o.preventDefault();const g={};[...o.target.elements].slice(0,3).filter(({value:M})=>M).forEach(({name:M,value:J})=>g[M]=J),s(Y(g)),r()};return e.jsxs(_,{modalIsOpen:i,closeModal:r,title:"Edit profile",maxWidth:"400px",children:[e.jsxs(ye,{children:[h?e.jsx(ve,{src:h||"https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",alt:"avatar"}):e.jsx("div",{children:e.jsx(Be,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${x}#icon-user`})})}),e.jsx(we,{onChange:n,type:"file",id:"input__file"}),e.jsx(fe,{htmlFor:"input__file",children:"+"})]}),e.jsxs(ke,{autoComplete:"false",onSubmit:o=>m(o),children:[e.jsxs(_e,{children:[e.jsx(S,{autoComplete:"off",name:"username",placeholder:"Fullname",defaultValue:p||null,type:"text"}),e.jsx(S,{autoComplete:"off",name:"email",placeholder:"Email",defaultValue:l||null,type:"email"}),e.jsxs(Se,{children:[e.jsx(S,{name:"password",placeholder:"Password",type:a,autoComplete:"off"}),e.jsx(Me,{onClick:()=>b(),className:"",width:"22px",height:"22px",children:e.jsx("use",{href:x+"#icon-password-eye"})})]})]}),e.jsx(je,{children:"Send"})]})]})},Ie=({openSideBar:i})=>{const[r,s]=u.useState(!1),{username:a,avatarURL:d}=I(U),l=()=>{s(p=>!p)};return e.jsxs(ce,{children:[e.jsx(le,{children:e.jsx(he,{type:"button",onClick:i,children:e.jsx(xe,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${x}#icon-burger-menu`})})})}),e.jsxs(de,{children:[e.jsx(ne,{}),e.jsxs(pe,{onClick:()=>l(),children:[e.jsx(me,{children:a}),d?e.jsx(ge,{src:d,alt:"avatar",width:"32px",height:"32px"}):e.jsx(ue,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${x}#icon-user`})})]})]}),e.jsx(Ce,{isModalOpen:r,modalStateSwapper:l})]})},ze=t.div`
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
`,Ne=t.div`
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
`,qe=({icon:i})=>e.jsxs(Ne,{children:[e.jsx("div",{className:"iconBg",children:e.jsx("svg",{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${i}#icon-task-pro-lightning`})})}),e.jsx("span",{className:"logoText",children:"Task Pro"})]}),X=[{url:""},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_3_wyzvab.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_5_jljjvg.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_9_nxlkhb.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502421/BG_IMG_4_jietm8.jpg"},{url:"https://res.cloudinary.com/doc0gvy9u/image/upload/v1692831655/webp/fon5_pc_x2_tdyopu.webp"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_7_ilmo6i.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_6_g8flsj.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502421/BG_IMG_2_mgbmrh.jpg"},{url:"https://res.cloudinary.com/doc0gvy9u/image/upload/v1692831452/jpg/fon9_pc_x2_m5qh2n.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_15_bb8qwx.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502423/BG_IMG_14_gmxpzb.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502423/BG_IMG_13_kab0at.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_12_mghyai.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_11_qiulfq.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_10_we13fj.jpg"}],G=["#icon-board-square","#icon-board-star","#icon-board-loading","#icon-board-puzzle","#icon-board-container","#icon-board-lightning","#icon-board-colors","#icon-board-hexagon"],Te=T().shape({title:B().required("Title is required!")}),Ee=({isModalOpen:i,modalStateSwapper:r})=>{const s=v(),[a,d]=u.useState(G[0]),[l,p]=u.useState(""),h={title:"",icon:a,bg:l},b=o=>{p(o)},n=o=>{d(o)},m=o=>{o.preventDefault();const c={title:o.target.elements[0].value,icon:a,backgroundURL:l};r(),s(Z(c))};return e.jsx(_,{modalIsOpen:i,closeModal:r,title:"New board",maxWidth:"350px",children:e.jsx(z,{children:e.jsx(E,{initialValues:h,validationSchema:Te,children:e.jsxs(N,{onSubmit:o=>m(o),children:[e.jsxs(j,{children:[e.jsx(f,{name:"title",component:"div"}),e.jsx($,{type:"text",id:"title",name:"title",placeholder:"Title",autoComplete:"off"})]}),e.jsxs(j,{children:[e.jsx(y,{children:"Icons "}),e.jsx(w,{children:G.map((o,g)=>e.jsxs(D,{children:[e.jsx(P,{className:a===o?"active":"",onClick:()=>n(o),width:18,height:18,children:e.jsx("use",{href:x+o,width:18,height:18})}),e.jsx(k,{type:"radio",value:o,name:"icon"})]},g))})]}),e.jsxs(j,{children:[e.jsx(y,{children:"Backgrounds "}),e.jsx(w,{children:X.map((o,g)=>e.jsxs("label",{children:[e.jsx(A,{onClick:()=>b(o.url),className:l===o.url?"active":"",children:o.url!==""&&e.jsx(H,{url:o.url,onClick:()=>b(o.url),className:l===o.url?"active":""})}),e.jsx(k,{type:"radio",value:o.url,name:"bg"})]},g))})]}),e.jsxs(W,{type:"submit",children:[e.jsx(F,{children:e.jsx(R,{children:e.jsx("use",{href:x+"#icon-plus"})})}),"Create"]})]})})})})},Ge=t.p`
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
  color: var(--sidebar-icon-stroke-color);

  display: flex;
  flex-direction: column;
  gap: 4px;

  position: relative;
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
`,De=t.div`
  display: flex;
  align-items: center;
`,Pe=t.div`
  color: var(--sidebar-icon-edit-stroke-color);
`,C=t.svg`
  fill: transparent;
`,Ae=t.div`
  display: flex;
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
`,L=["#icon-board-square","#icon-board-star","#icon-board-loading","#icon-board-puzzle","#icon-board-container","#icon-board-lightning","#icon-board-colors","#icon-board-hexagon"],He=T().shape({title:B().required("Title is required!")}),We=({isModalOpen:i,modalStateSwapper:r})=>{const[s,a]=u.useState(""),[d,l]=u.useState(L[0]),p={title:"",icon:d,backgroundURL:s},h=n=>{a(n)},b=n=>{l(n)};return e.jsx(_,{modalIsOpen:i,closeModal:r,title:"Edit board",maxWidth:"350px",children:e.jsx(z,{children:e.jsx(E,{initialValues:p,validationSchema:He,children:e.jsxs(N,{children:[e.jsxs(j,{children:[e.jsx(f,{name:"title",component:"div"}),e.jsx($,{type:"text",id:"title",name:"title",placeholder:"Title",autoComplete:"off"})]}),e.jsxs(j,{children:[e.jsx(y,{children:"Icons "}),e.jsx(w,{children:L.map((n,m)=>e.jsxs(D,{children:[e.jsx(P,{className:d===n?"active":"",onClick:()=>b(n),width:18,height:18,children:e.jsx("use",{href:x+n,width:18,height:18})}),e.jsx(k,{type:"radio",value:n,name:"icon"})]},m))})]}),e.jsxs(j,{children:[e.jsx(y,{children:"Backgraunds "}),e.jsx(w,{children:X.map((n,m)=>e.jsxs("label",{children:[e.jsx(A,{onClick:()=>h(n.url),className:s===n.url?"active":"",children:n.url!==""&&e.jsx(H,{url:n.url,onClick:()=>h(n.url),className:s===n.url?"active":""})}),e.jsx(k,{type:"radio",value:n.url,name:"bg"})]},m))})]}),e.jsxs(W,{type:"submit",children:[e.jsx(F,{children:e.jsx(R,{children:e.jsx("use",{href:x+"#icon-plus"})})}),"Edit"]})]})})})})},Fe=({icon:i,boards:r,selectedItem:s,choice:a,setUserBoards:d})=>{const{isModalOpen:l,openModal:p,closeModal:h}=q(),[b,n]=u.useState(!1),m=()=>{n(c=>!c)},o=v(),g=c=>{o(te(c))};return e.jsxs("div",{children:[e.jsx(Ge,{children:"My boards"}),e.jsxs(Oe,{children:[e.jsx("p",{className:"createText",children:"Create a new board"}),e.jsx(Le,{onClick:()=>p(),type:"submit",children:e.jsx("svg",{className:"iconCreateBoard",width:"20px",height:"20px",children:e.jsx("use",{href:`${i}#icon-plus`})})})]}),e.jsx(Ue,{children:r.map(c=>e.jsxs($e,{onClick:()=>a(c),className:s._id===c._id?"active":"",children:[e.jsx(ee,{to:`/home/${c.title}`,children:e.jsxs(De,{children:[e.jsx(C,{className:"iconBoard iconActive",width:"20px",height:"20px",children:e.jsx("use",{href:`${i}${c.icon}`})}),e.jsx(Pe,{children:c.title})]})}),s.id===c.id&&e.jsxs(Ae,{children:[e.jsx(O,{onClick:()=>m(),type:"button",children:e.jsx(C,{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${i}#icon-pencil`})})}),e.jsx(O,{onClick:()=>g(c._id),type:"button",children:e.jsx(C,{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${i}#icon-trash`})})})]})]},c._id))}),e.jsx(Ee,{setUserBoards:d,isModalOpen:l,modalStateSwapper:h}),e.jsx(We,{isModalOpen:b,modalStateSwapper:m})]})},Re="/TaskPro-blended1-frontend/assets/plant-92SCXr2v.png",Ve=t.div`
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
`,Qe=t.p`
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
`,Ze=T().shape({email:B().email("Invalid email").required("Email is required"),question:B().min("10").required("Email is required")}),et=({isModalOpen:i,modalStateSwapper:r})=>{const s={email:"",question:""};return e.jsx(_,{modalIsOpen:i,closeModal:r,title:"Need help",maxWidth:"335px",children:e.jsx(z,{children:e.jsx(E,{initialValues:s,validationSchema:Ze,children:e.jsxs(N,{children:[e.jsxs(j,{children:[e.jsx(f,{name:"email",component:"div"}),e.jsx(Je,{type:"text",id:"email",name:"email",placeholder:"Email address",autoComplete:"off"})]}),e.jsxs(j,{children:[e.jsx(f,{name:"question",component:"div"}),e.jsx(Ke,{type:"text",id:"question",name:"question",placeholder:"Comment",autoComplete:"off",as:"textarea"})]}),e.jsx(Ye,{type:"submit",children:"Send"})]})})})})},tt=({icon:i})=>{const{isModalOpen:r,openModal:s,closeModal:a}=q();return e.jsxs(e.Fragment,{children:[e.jsxs(Ve,{children:[e.jsx("img",{src:Re,alt:"Happy plant"}),e.jsxs(Qe,{children:["If you need help with ",e.jsx("span",{className:"appName",children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),e.jsxs(Xe,{type:"submit",onClick:s,children:[e.jsx("svg",{className:"iconHelp",width:"20px",height:"20px",children:e.jsx("use",{href:`${i}#icon-help-circle`})}),e.jsx("span",{children:"Need help?"})]})]}),e.jsx(V,{onClick:a,className:r===!0&&"active"}),e.jsx(et,{modalStateSwapper:a,isModalOpen:r})]})},ot=t.button`
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
`,it=({icon:i})=>{const r=v();return e.jsxs(ot,{onClick:()=>r(oe()),type:"submit",children:[e.jsx("svg",{className:"iconLogOut",width:"32px",height:"32px",children:e.jsx("use",{href:`${i}#icon-logout`})}),e.jsx("span",{children:"Log out"})]})},rt=i=>i.dashboards.dashboards,nt=({isOpen:i})=>{const[r,s]=u.useState(""),a=I(rt),[d,l]=u.useState([]);u.useEffect(()=>{l(a)},[a]);const p=h=>{s(h)};return e.jsxs(ze,{className:i===!0&&"active",children:[e.jsxs("div",{children:[e.jsx(qe,{icon:x}),e.jsx(Fe,{icon:x,boards:d,choice:p,selectedItem:r})]}),e.jsxs("div",{children:[e.jsx(tt,{icon:x}),e.jsx(it,{icon:x})]})]})},st=t.div`
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
`,xt=()=>{const i=v(),{isModalOpen:r,openModal:s,closeModal:a}=q();return u.useEffect(()=>{i(ie())},[i]),e.jsx(st,{children:e.jsxs(se,{children:[e.jsx(nt,{isOpen:r}),e.jsxs(ae,{children:[e.jsx(Ie,{openSideBar:s}),e.jsx(u.Suspense,{fallback:e.jsx("div",{children:"Loading"}),children:e.jsx(re,{})})]}),e.jsx(V,{onClick:a,className:r===!0&&"active"})]})})};export{xt as default};
