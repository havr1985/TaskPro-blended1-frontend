import{u as t,j as e,a as v,r as u,b as k,s as O,c as te,d as oe,B as U,e as re,N as ie,f as ne,g as ae,h as se,l as le,i as ce,k as de,C as pe,O as he}from"./index-hgyixuUG.js";import{i as g}from"./icons-iplVKqot.js";import{T as ue}from"./ThemeMenu-7iNc1cNk.js";import{S as I,a as H,M as P,F as f,E as $,T as A,b as B,R as _,I as F,c as W,D as M,B as R,C as V,A as Q,d as X,P as Y,s as J,u as E,O as K,e as xe,H as me,f as ge}from"./HomePage.styled-WzzCmt5L.js";import{c as q,a as C,F as Z,u as be}from"./index.esm-97OYfr8K.js";/* empty css                      */const je=t.header`
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
`,fe=t.div`
  @media (min-width: 1440px) {
    display: none;
  }
`,ve=t.div`
  display: flex;
  column-gap: 14px;
  align-items: center;
  margin-left: auto;
`,ye=t.div`
  display: flex;
  align-items: center;
  color: var(--primary-heading-color);
  column-gap: 8px;
  cursor: pointer;
`,we=t.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`,ke=t.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: var(--primary-icon-stroke-color);
`,Be=t.svg`
  width: 32px;
  height: 32px;
  stroke: var(--primary-icon-stroke-color);
  fill: transparent;
`,_e=t.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
`,Me=t.p`
  &:hover {
    color: var(--secondary-button-color);
  }
`,Ce=t.button`
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
`,Ie=({children:i})=>e.jsx(Ce,{type:"submit",children:i}),Se=t.img`
  height: 68px;
  width: 68px;
  border-radius: 8px;
`,ze=t.label`
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
`,Ne=t.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`,Te=t.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`,Ee=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;
  overflow-x: hidden;
`,z=t.input`
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
`,qe=t.svg`
  height: 68px;
  width: 68px;
  border-radius: 8px;
  background-color: var(--sidebar-help-backgound-color);
  fill: white;
`,De=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`,Ge=t.svg`
  position: absolute;
  right: 18px;
  top: 14px;
  stroke: white;
  cursor: pointer;
  user-select: none;
`,Le=t.div`
  width: 100%;
  position: relative;
`,Oe=({isModalOpen:i,modalStateSwapper:n})=>{const l=v(),[o,d]=u.useState("password"),{email:c,username:h,avatarURL:x}=k(O),m=()=>{d(r=>r==="password"?"text":"password")},b=r=>{const p=r.target.files[0],s=new FormData;s.append("avatar",p),l(te(s))},j=r=>{r.preventDefault();const p={};[...r.target.elements].slice(0,3).filter(({value:y})=>y).forEach(({name:y,value:a})=>p[y]=a),l(oe(p)),n()};return e.jsxs(I,{modalIsOpen:i,closeModal:n,title:"Edit profile",maxWidth:"400px",children:[e.jsxs(Ne,{children:[x?e.jsx(Se,{src:x||"https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",alt:"avatar"}):e.jsx("div",{children:e.jsx(qe,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${g}#icon-user`})})}),e.jsx(Te,{onChange:b,type:"file",id:"input__file"}),e.jsx(ze,{htmlFor:"input__file",children:"+"})]}),e.jsxs(Ee,{autoComplete:"false",onSubmit:r=>j(r),children:[e.jsxs(De,{children:[e.jsx(z,{autoComplete:"off",name:"username",placeholder:"Fullname",defaultValue:h||null,type:"text"}),e.jsx(z,{autoComplete:"off",name:"email",placeholder:"Email",defaultValue:c||null,type:"email"}),e.jsxs(Le,{children:[e.jsx(z,{name:"password",placeholder:"Password",type:o,autoComplete:"off"}),e.jsx(Ge,{onClick:()=>m(),className:"",width:"22px",height:"22px",children:e.jsx("use",{href:g+"#icon-password-eye"})})]})]}),e.jsx(Ie,{children:"Send"})]})]})},Ue=({openSideBar:i})=>{const[n,l]=u.useState(!1),{username:o,avatarURL:d}=k(O),c=()=>{l(h=>!h)};return e.jsxs(je,{children:[e.jsx(fe,{children:e.jsx(we,{type:"button",onClick:i,children:e.jsx(ke,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${g}#icon-burger-menu`})})})}),e.jsxs(ve,{children:[e.jsx(ue,{}),e.jsxs(ye,{onClick:()=>c(),children:[e.jsx(Me,{children:o}),d?e.jsx(_e,{src:d,alt:"avatar",width:"32px",height:"32px"}):e.jsx(Be,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${g}#icon-user`})})]})]}),e.jsx(Oe,{isModalOpen:n,modalStateSwapper:c})]})},He=t.div`
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
`,Pe=t.div`
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
`,$e=({icon:i})=>e.jsxs(Pe,{children:[e.jsx("div",{className:"iconBg",children:e.jsx("svg",{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${i}#icon-task-pro-lightning`})})}),e.jsx("span",{className:"logoText",children:"Task Pro"})]}),T=[{url:"https://res.cloudinary.com/doc0gvy9u/image/upload/v1693183018/block_fbhcsq.png"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_3_wyzvab.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_5_jljjvg.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_9_nxlkhb.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502421/BG_IMG_4_jietm8.jpg"},{url:"https://res.cloudinary.com/doc0gvy9u/image/upload/v1692831655/webp/fon5_pc_x2_tdyopu.webp"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_7_ilmo6i.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_6_g8flsj.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502421/BG_IMG_2_mgbmrh.jpg"},{url:"https://res.cloudinary.com/doc0gvy9u/image/upload/v1692831452/jpg/fon9_pc_x2_m5qh2n.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_15_bb8qwx.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502423/BG_IMG_14_gmxpzb.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502423/BG_IMG_13_kab0at.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_12_mghyai.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_11_qiulfq.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_10_we13fj.jpg"}],D=["#icon-board-square","#icon-board-star","#icon-board-loading","#icon-board-puzzle","#icon-board-container","#icon-board-lightning","#icon-board-colors","#icon-board-hexagon"],Ae=q().shape({title:C().required("Title is required!")}),Fe=({isModalOpen:i,modalStateSwapper:n})=>{const l=v(),[o,d]=u.useState(D[0]),[c,h]=u.useState(T[0].url),x={title:"",icon:o,bg:c},m=r=>{r.preventDefault();const p=r.target.elements[0].value;if(!p){U.error("Title is required!");return}const s={title:p,icon:o,backgroundURL:c};n(),l(re(s))},b=r=>{h(r)},j=r=>{d(r)};return e.jsx(I,{modalIsOpen:i,closeModal:n,title:"New board",maxWidth:"350px",children:e.jsx(H,{children:e.jsx(Z,{initialValues:x,validationSchema:Ae,children:e.jsxs(P,{onSubmit:r=>m(r),children:[e.jsxs(f,{children:[e.jsx($,{name:"title",component:"div"}),e.jsx(A,{type:"text",id:"title",name:"title",placeholder:"Title",autoComplete:"off"})]}),e.jsxs(f,{children:[e.jsx(B,{children:"Icons "}),e.jsx(_,{children:D.map((r,p)=>e.jsxs(F,{children:[e.jsx(W,{className:o===r?"active":"",onClick:()=>j(r),width:18,height:18,children:e.jsx("use",{href:g+r,width:18,height:18})}),e.jsx(M,{type:"radio",value:r,name:"icon"})]},p))})]}),e.jsxs(f,{children:[e.jsx(B,{children:"Backgrounds "}),e.jsx(_,{children:T.map((r,p)=>e.jsxs("label",{children:[e.jsx(R,{onClick:()=>b(r.url),className:c===r.url?"active":"",children:r.url!==""&&e.jsx(V,{url:r.url,onClick:()=>b(r.url),className:c===r.url?"active":""})}),e.jsx(M,{type:"radio",value:r.url,name:"bg"})]},p))})]}),e.jsxs(Q,{type:"submit",children:[e.jsx(X,{children:e.jsx(Y,{children:e.jsx("use",{href:g+"#icon-plus"})})}),"Create"]})]})})})})},We=t.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;

	margin-bottom: 8px;

	color: var(--sidebar-icon-edit-stroke-color);
`,Re=t.div`
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
`,Ve=t.button`
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
`,Qe=t.ul`
	font-weight: 500;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: -0.02em;
	color: var(--sidebar-icon-edit-stroke-color);

	display: flex;
	flex-direction: column;
	gap: 4px;

	position: relative;

	margin: 0 -24px;

	@media (max-width: 767px) {
		margin: 0 -14px;
	}
`,Xe=t.li`
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
`,Ye=t(ie)`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`,Je=t.div`
	display: flex;
	align-items: center;
	margin-left: 24px;

	@media (max-width: 767px) {
		margin-left: 14px;
	}
`,Ke=t.div`
	color: inherit;
`,N=t.svg`
	fill: transparent;
`,Ze=t.div`
	display: flex;

	margin-right: 24px;

	@media (max-width: 767px) {
		margin-right: 14px;
	}
`,G=t.button`
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
`,et=["#icon-board-square","#icon-board-star","#icon-board-loading","#icon-board-puzzle","#icon-board-container","#icon-board-lightning","#icon-board-colors","#icon-board-hexagon"],tt=q().shape({title:C().required("Title is required!")}),ot=({isModalOpen:i,modalStateSwapper:n})=>{const l=v(),o=k(J),{_id:d,title:c,icon:h,backgroundURL:x}=o.result,[m,b]=u.useState(x),[j,r]=u.useState(h),p={title:c,icon:h,backgroundURL:x},s=a=>{a.preventDefault();const w=a.target.elements[0].value,ee={dashboardId:d,title:w,icon:j,backgroundURL:m};n(),l(ne(ee))},S=a=>{b(a)},y=a=>{r(a)};return e.jsx(I,{modalIsOpen:i,closeModal:n,title:"Edit board",maxWidth:"350px",children:e.jsx(H,{children:e.jsx(Z,{initialValues:p,validationSchema:tt,children:e.jsxs(P,{onSubmit:a=>s(a),children:[e.jsxs(f,{children:[e.jsx($,{name:"title",component:"div"}),e.jsx(A,{type:"text",id:"title",name:"title",autoComplete:"off"})]}),e.jsxs(f,{children:[e.jsx(B,{children:"Icons "}),e.jsx(_,{children:et.map((a,w)=>e.jsxs(F,{children:[e.jsx(W,{className:j===a?"active":"",onClick:()=>y(a),width:18,height:18,children:e.jsx("use",{href:g+a,width:18,height:18})}),e.jsx(M,{type:"radio",value:a,name:"icon"})]},w))})]}),e.jsxs(f,{children:[e.jsx(B,{children:"Backgraunds "}),e.jsx(_,{children:T.map((a,w)=>e.jsxs("label",{children:[e.jsx(R,{onClick:()=>S(a.url),className:m===a.url?"active":"",children:a.url!==""&&e.jsx(V,{url:a.url,onClick:()=>S(a.url),className:m===a.url?"active":""})}),e.jsx(M,{type:"radio",value:a.url,name:"bg"})]},w))})]}),e.jsxs(Q,{type:"submit",children:[e.jsx(X,{children:e.jsx(Y,{children:e.jsx("use",{href:g+"#icon-plus"})})}),"Edit"]})]})})})})},rt=({icon:i,boards:n,selectedItem:l,choice:o,setUserBoards:d})=>{const{isModalOpen:c,openModal:h,closeModal:x}=E(),[m,b]=u.useState(!1),j=()=>{b(s=>!s)},r=v(),p=s=>{r(ae(s))};return e.jsxs("div",{children:[e.jsx(We,{children:"My boards"}),e.jsxs(Re,{children:[e.jsx("p",{className:"createText",children:"Create a new board"}),e.jsx(Ve,{onClick:()=>h(),type:"submit",children:e.jsx("svg",{className:"iconCreateBoard",width:"20px",height:"20px",children:e.jsx("use",{href:`${i}#icon-plus`})})})]}),n.length!==0&&e.jsx(Qe,{children:n.map(s=>e.jsx(Xe,{onClick:()=>o(s),className:l._id===s._id?"active":"",children:e.jsxs(Ye,{to:`/home/${s.title}`,children:[e.jsxs(Je,{children:[e.jsx(N,{className:"iconBoard iconActive",width:"20px",height:"20px",children:e.jsx("use",{href:`${i}${s.icon}`})}),e.jsx(Ke,{children:s.title})]}),l.id===s.id&&e.jsxs(Ze,{children:[e.jsx(G,{onClick:()=>j(),type:"button",children:e.jsx(N,{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${i}#icon-pencil`})})}),e.jsx(G,{onClick:()=>p(s._id),type:"button",children:e.jsx(N,{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${i}#icon-trash`})})})]})]})},s._id))}),e.jsx(Fe,{setUserBoards:d,isModalOpen:c,modalStateSwapper:x}),m&&e.jsx(ot,{isModalOpen:m,modalStateSwapper:j})]})},it="/TaskPro-blended1-frontend/assets/plant-92SCXr2v.png",nt=t.div`
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
`,at=t.p`
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
`,st=t.button`
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
`,lt=t.input`
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
	transition: all 250ms ease;

	&::placeholder {
		font-size: 14px;
		font-family: "Poppins";
		letter-spacing: -0.28px;
	}

	&:focus {
		opacity: 1;
		border-color: var(--shared-input-border-hover-color);
	}
`,L=t.div`
	padding-left: 14px;
	color: #c04d4d;
	font-size: 18px;
	font-family: Poppins;
	font-weight: 500;
	letter-spacing: -0.36px;
`,ct=t.form`
	margin: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
`,dt=t.textarea`
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
	transition: all 250ms ease;

	&::placeholder {
		font-size: 14px;
		font-family: "Poppins";
		letter-spacing: -0.28px;
	}

	&:focus {
		opacity: 1;
		border-color: var(--shared-input-border-hover-color);
	}
`,pt=t.button`
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
`,ht=q().shape({email:C().email("Invalid email").required("Email is required"),comment:C().min(50,"Must be at least 50 characters long").required()}),ut=({isModalOpen:i,modalStateSwapper:n})=>{const l=v(),o=be({initialValues:{email:"",comment:""},validationSchema:ht,onSubmit:async d=>{try{await l(se({email:d.email,comment:d.comment})).unwrap()&&U.success("Your message was successfully sent"),n(),o.resetForm()}catch(c){console.log(c)}}});return e.jsx(I,{modalIsOpen:i,closeModal:n,title:"Need help",maxWidth:"335px",children:e.jsxs(ct,{onSubmit:o.handleSubmit,children:[e.jsxs(f,{children:[e.jsx(lt,{type:"text",name:"email",placeholder:"Email address",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.email,autoComplete:"off"}),o.touched.email&&o.errors.email?e.jsx(L,{children:o.errors.email}):null]}),e.jsxs(f,{children:[e.jsx(dt,{as:"textarea",rows:"6",name:"comment",placeholder:"Comment",autoComplete:"off",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.comment}),o.touched.comment&&o.errors.comment?e.jsx(L,{children:o.errors.comment}):null]}),e.jsx(pt,{type:"submit",children:"Submit"})]})})},xt=({icon:i})=>{const{isModalOpen:n,openModal:l,closeModal:o}=E();return e.jsxs(e.Fragment,{children:[e.jsxs(nt,{children:[e.jsx("img",{className:"img-plant",src:it,alt:"Happy plant"}),e.jsxs(at,{children:["If you need help with ",e.jsx("span",{className:"appName",children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),e.jsxs(st,{type:"submit",onClick:l,children:[e.jsx("svg",{className:"iconHelp",width:"20px",height:"20px",children:e.jsx("use",{href:`${i}#icon-help-circle`})}),e.jsx("span",{children:"Need help?"})]})]}),e.jsx(K,{onClick:o,className:n===!0&&"active"}),e.jsx(ut,{modalStateSwapper:o,isModalOpen:n})]})},mt=t.button`
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
`,gt=({icon:i})=>{const n=v();return e.jsxs(mt,{onClick:()=>n(le()),type:"submit",children:[e.jsx("svg",{className:"iconLogOut",width:"32px",height:"32px",children:e.jsx("use",{href:`${i}#icon-logout`})}),e.jsx("span",{children:"Log out"})]})},bt=({isOpen:i})=>{const[n,l]=u.useState(""),o=k(xe),{result:d}=k(J),[c,h]=u.useState([]),x=v();u.useEffect(()=>{h(o)},[o]),u.useEffect(()=>{l(d??"")},[d]);const m=b=>{x(ce(b._id))};return e.jsxs(He,{className:i===!0&&"active",children:[e.jsxs("div",{children:[e.jsx($e,{icon:g}),e.jsx(rt,{icon:g,boards:c,choice:m,selectedItem:n})]}),e.jsxs("div",{children:[e.jsx(xt,{icon:g}),e.jsx(gt,{icon:g})]})]})},Bt=()=>{const i=v(),{isModalOpen:n,openModal:l,closeModal:o}=E();return u.useEffect(()=>{i(de())},[i]),e.jsx(pe,{children:e.jsxs(me,{children:[e.jsx(bt,{isOpen:n}),e.jsxs(ge,{children:[e.jsx(Ue,{openSideBar:l}),e.jsx(u.Suspense,{fallback:e.jsx("div",{children:"Loading"}),children:e.jsx(he,{})})]}),e.jsx(K,{onClick:o,className:n===!0&&"active"})]})})};export{Bt as default};
