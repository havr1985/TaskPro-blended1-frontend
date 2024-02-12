import{u as t,j as e,a as w,r as m,b as B,s as $,c as ie,d as re,B as q,e as ne,N as ae,f as se,g as P,h as le,i as ce,l as de,k as pe,C as he,O as ue}from"./index-fsQbx21j.js";import{i as x}from"./icons-iplVKqot.js";import{T as xe}from"./ThemeMenu-zX3_f0Cf.js";import{S,a as H,M as F,F as y,E as W,T as A,b as _,R as C,I as R,c as V,D as M,B as Q,C as X,A as Y,d as J,P as K,s as Z,u as D,O as ee,e as me,H as ge,f as be}from"./HomePage.styled-JA4aB_JS.js";import{c as G,a as I,F as te,u as fe}from"./index.esm-SJ-XDRrG.js";/* empty css                      */const je=t.header`
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
`,ve=t.div`
  @media (min-width: 1440px) {
    display: none;
  }
`,ye=t.div`
  display: flex;
  column-gap: 14px;
  align-items: center;
  margin-left: auto;
`,we=t.div`
  display: flex;
  align-items: center;
  color: var(--primary-heading-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  column-gap: 8px;
  cursor: pointer;
`,ke=t.button`
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
`,ze=t.svg`
  width: 32px;
  height: 32px;
  stroke: var(--primary-icon-stroke-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  fill: transparent;
`,_e=t.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
`,Ce=t.p`
  &:hover {
    color: var(--secondary-button-color);
  }
`,Me=t.button`
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
`,Ie=({children:a})=>e.jsx(Me,{type:"submit",children:a}),Se=t.img`
  height: 68px;
  width: 68px;
  border-radius: 8px;
`,Te=t.label`
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
`,Ne=t.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`,Ee=t.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`,qe=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;
  overflow-x: hidden;
`,T=t.input`
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
`,De=t.svg`
  height: 68px;
  width: 68px;
  border-radius: 8px;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: var(--sidebar-help-backgound-color);
  fill: white;
`,Ge=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`,Le=t.svg`
  position: absolute;
  right: 18px;
  top: 14px;
  stroke: white;
  cursor: pointer;
  user-select: none;
`,Oe=t.div`
  width: 100%;
  position: relative;
`,Ue=({isModalOpen:a,modalStateSwapper:r})=>{const c=w(),[i,p]=m.useState("password"),{email:l,username:h,avatarURL:u}=B($),g=()=>{p(o=>o==="password"?"text":"password")},b=o=>{const d=o.target.files[0],s=new FormData;s.append("avatar",d),c(ie(s))},f=o=>{o.preventDefault();const d={};[...o.target.elements].slice(0,3).filter(({value:v})=>v).forEach(({name:v,value:n})=>d[v]=n),c(re(d)),r()};return e.jsxs(S,{modalIsOpen:a,closeModal:r,title:"Edit profile",maxWidth:"400px",children:[e.jsxs(Ne,{children:[u?e.jsx(Se,{src:u||"https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",alt:"avatar"}):e.jsx("div",{children:e.jsx(De,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${x}#icon-user`})})}),e.jsx(Ee,{onChange:b,type:"file",id:"input__file"}),e.jsx(Te,{htmlFor:"input__file",children:"+"})]}),e.jsxs(qe,{autoComplete:"false",onSubmit:o=>f(o),children:[e.jsxs(Ge,{children:[e.jsx(T,{autoComplete:"off",name:"username",placeholder:"Fullname",defaultValue:h||null,type:"text"}),e.jsx(T,{autoComplete:"off",name:"email",placeholder:"Email",defaultValue:l||null,type:"email"}),e.jsxs(Oe,{children:[e.jsx(T,{name:"password",placeholder:"Password",type:i,autoComplete:"off"}),e.jsx(Le,{onClick:()=>g(),className:"",width:"22px",height:"22px",children:e.jsx("use",{href:x+"#icon-password-eye"})})]})]}),e.jsx(Ie,{children:"Send"})]})]})},$e=({openSideBar:a})=>{const[r,c]=m.useState(!1),{username:i,avatarURL:p}=B($),l=()=>{c(h=>!h)};return e.jsxs(je,{children:[e.jsx(ve,{children:e.jsx(ke,{type:"button",onClick:a,children:e.jsx(Be,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${x}#icon-burger-menu`})})})}),e.jsxs(ye,{children:[e.jsx(xe,{}),e.jsxs(we,{onClick:()=>l(),children:[e.jsx(Ce,{children:i}),p?e.jsx(_e,{src:p,alt:"avatar",width:"32px",height:"32px"}):e.jsx(ze,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${x}#icon-user`})})]})]}),e.jsx(Ue,{isModalOpen:r,modalStateSwapper:l})]})},Pe=t.div`
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
`,He=t.div`
	
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




`,Fe=t.div`
	margin-top: 40px;
`,We=t.div`
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
`,Ae=({icon:a})=>e.jsxs(We,{children:[e.jsx("div",{className:"iconBg",children:e.jsx("svg",{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${a}#icon-task-pro-lightning`})})}),e.jsx("span",{className:"logoText",children:"Task Pro"})]}),E=[{url:"https://res.cloudinary.com/doc0gvy9u/image/upload/v1693183018/block_fbhcsq.png"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_3_wyzvab.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_5_jljjvg.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_9_nxlkhb.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502421/BG_IMG_4_jietm8.jpg"},{url:"https://res.cloudinary.com/doc0gvy9u/image/upload/v1692831655/webp/fon5_pc_x2_tdyopu.webp"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_7_ilmo6i.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_6_g8flsj.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502421/BG_IMG_2_mgbmrh.jpg"},{url:"https://res.cloudinary.com/doc0gvy9u/image/upload/v1692831452/jpg/fon9_pc_x2_m5qh2n.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_15_bb8qwx.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502423/BG_IMG_14_gmxpzb.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502423/BG_IMG_13_kab0at.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_12_mghyai.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_11_qiulfq.jpg"},{url:"https://res.cloudinary.com/dt4oqzt2t/image/upload/v1687502422/BG_IMG_10_we13fj.jpg"}],L=["#icon-board-square","#icon-board-star","#icon-board-loading","#icon-board-puzzle","#icon-board-container","#icon-board-lightning","#icon-board-colors","#icon-board-hexagon"],Re=G().shape({title:I().required("Title is required!")}),Ve=({isModalOpen:a,modalStateSwapper:r})=>{const c=w(),[i,p]=m.useState(L[0]),[l,h]=m.useState(E[0].url),u={title:"",icon:i,bg:l},g=o=>{o.preventDefault();const d=o.target.elements[0].value;if(!d){q.error("Title is required!");return}const s={title:d,icon:i,backgroundURL:l};r(),c(ne(s))},b=o=>{h(o)},f=o=>{p(o)};return e.jsx(S,{modalIsOpen:a,closeModal:r,title:"New board",maxWidth:"350px",children:e.jsx(H,{children:e.jsx(te,{initialValues:u,validationSchema:Re,children:e.jsxs(F,{onSubmit:o=>g(o),children:[e.jsxs(y,{children:[e.jsx(W,{name:"title",component:"div"}),e.jsx(A,{type:"text",id:"title",name:"title",placeholder:"Title",autoComplete:"off"})]}),e.jsxs(y,{children:[e.jsx(_,{children:"Icons "}),e.jsx(C,{children:L.map((o,d)=>e.jsxs(R,{children:[e.jsx(V,{className:i===o?"active":"",onClick:()=>f(o),width:18,height:18,children:e.jsx("use",{href:x+o,width:18,height:18})}),e.jsx(M,{type:"radio",value:o,name:"icon"})]},d))})]}),e.jsxs(y,{children:[e.jsx(_,{children:"Backgrounds "}),e.jsx(C,{children:E.map((o,d)=>e.jsxs("label",{children:[e.jsx(Q,{onClick:()=>b(o.url),className:l===o.url?"active":"",children:o.url!==""&&e.jsx(X,{url:o.url,onClick:()=>b(o.url),className:l===o.url?"active":""})}),e.jsx(M,{type:"radio",value:o.url,name:"bg"})]},d))})]}),e.jsxs(Y,{type:"submit",children:[e.jsx(J,{children:e.jsx(K,{children:e.jsx("use",{href:x+"#icon-plus"})})}),"Create"]})]})})})})},Qe=t.ul`
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
`,Xe=t.li`
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
`,O=t(ae)`
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ye=t.div`
  display: flex;
  align-items: center;
  margin-left: 24px;

  @media (max-width: 767px) {
    margin-left: 14px;
  }
`,Je=t.div`
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
`,Ke=t.div`
  width: 122px;
  height: 21px;
`,Ze=t.p`
  color: inherit;

  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,N=t.svg`
  fill: transparent;
`,et=t.div`
  display: flex;

  margin-right: 24px;

  @media screen and (max-width: 767px) {
    margin-right: 14px;
  }
`,tt=t.button`
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

  .iconBoard.iconEdit:hover {
    stroke: var(--primary-button-color-sidebar);
    transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.1);
    animation: pulse 1s infinite alternate;
  }
`,ot=["#icon-board-square","#icon-board-star","#icon-board-loading","#icon-board-puzzle","#icon-board-container","#icon-board-lightning","#icon-board-colors","#icon-board-hexagon"],it=G().shape({title:I().required("Title is required!")}),rt=({isModalOpen:a,modalStateSwapper:r})=>{const c=w(),i=B(Z),{_id:p,title:l,icon:h,backgroundURL:u}=i.result;console.log(l);const[g,b]=m.useState(u),[f,o]=m.useState(h),d={title:l,icon:h,backgroundURL:u},s=n=>{n.preventDefault();const j=n.target.elements[0].value;if(!n.target.elements[0].value){q.error("Title is required!");return}const oe={dashboardId:p,title:j,icon:f,backgroundURL:g};r(),c(se(oe))},k=n=>{b(n)},v=n=>{o(n)};return e.jsx(S,{modalIsOpen:a,closeModal:r,title:"Edit board",maxWidth:"350px",children:e.jsx(H,{children:e.jsx(te,{initialValues:d,validationSchema:it,children:e.jsxs(F,{onSubmit:n=>s(n),children:[e.jsxs(y,{children:[e.jsx(W,{name:"title",component:"div"}),e.jsx(A,{onChange:n=>n.target.elements[0].value(n),type:"text",id:"title",defaultValue:l,name:"title",placeholder:"Title",autoComplete:"off"})]}),e.jsxs(y,{children:[e.jsx(_,{children:"Icons "}),e.jsx(C,{children:ot.map((n,j)=>e.jsxs(R,{children:[e.jsx(V,{className:f===n?"active":"",onClick:()=>v(n),width:18,height:18,children:e.jsx("use",{href:x+n,width:18,height:18})}),e.jsx(M,{type:"radio",value:n,name:"icon"})]},j))})]}),e.jsxs(y,{children:[e.jsx(_,{children:"Backgraunds "}),e.jsx(C,{children:E.map((n,j)=>e.jsxs("label",{children:[e.jsx(Q,{onClick:()=>k(n.url),className:g===n.url?"active":"",children:n.url!==""&&e.jsx(X,{url:n.url,onClick:()=>k(n.url),className:g===n.url?"active":""})}),e.jsx(M,{type:"radio",value:n.url,name:"bg"})]},j))})]}),e.jsxs(Y,{type:"submit",children:[e.jsx(J,{children:e.jsx(K,{children:e.jsx("use",{href:x+"#icon-plus"})})}),"Edit"]})]})})})})},nt=({icon:a,boards:r,selectedItem:c,choice:i,setUserBoards:p,isModalOpen:l,closeModal:h})=>{const[u,g]=m.useState(!1),b=()=>{g(s=>!s)},f=s=>{let k="",v="";return r.forEach((n,j)=>{if(n._id===s){const z=r[j-1]?r[j-1]:r[j+1];z?(k=`/home/${z.title}`,v=z._id):k="/home"}}),{path:k,id:v}},o=w(),d=s=>{s&&o(P(f(s).id)),o(le(s))};return e.jsxs(e.Fragment,{children:[r.length!==0&&e.jsx(Qe,{children:r.map(s=>e.jsx(Xe,{onClick:()=>i(s),className:c._id===s._id?"active":"",children:e.jsxs(O,{to:`/home/${s.title}`,children:[e.jsxs(Ye,{children:[e.jsx(N,{className:"iconBoard iconActive",width:"18px",height:"18px",children:e.jsx("use",{href:`${a}${s.icon}`})}),e.jsx(Je,{className:s.title.length>20&&"tooltip","data-tooltip":`${s.title}`,children:e.jsx(Ke,{children:e.jsx(Ze,{children:s.title})})})]}),c._id===s._id&&e.jsxs(et,{children:[e.jsx(tt,{onClick:()=>b(),type:"button",children:e.jsx(N,{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${a}#icon-pencil`})})}),e.jsx(O,{to:f(s._id).path,onClick:()=>d(s._id),type:"button",children:e.jsx(N,{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${a}#icon-trash`})})})]})]})},s._id))}),e.jsx(Ve,{setUserBoards:p,isModalOpen:l,modalStateSwapper:h}),u&&e.jsx(rt,{isModalOpen:u,modalStateSwapper:b})]})},at="/TaskPro-blended1-frontend/assets/plant-92SCXr2v.png",st=t.div`
  width: 212px;
  height: 272px;

  padding: 20px;
  margin-bottom: 24px;

  border-radius: 8px;
  background-color: var(--secondary-background-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  @media (max-width: 767px) {
    width: 197px;
    height: 238px;

    padding: 14px;
  }
  .img-plant {
    margin-bottom: 14px;
  }
`,lt=t.p`
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
`,ct=t.button`
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
`,dt=t.input`
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
`,U=t.div`
  padding-left: 14px;
  color: #c04d4d;
  font-size: 18px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`,pt=t.form`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`,ht=t.textarea`
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
`,ut=t.button`
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
`,xt=G().shape({email:I().email("Invalid email").required("Email is required"),comment:I().min(50,"Must be at least 50 characters long").required()}),mt=({isModalOpen:a,modalStateSwapper:r})=>{const c=w(),i=fe({initialValues:{email:"",comment:""},validationSchema:xt,onSubmit:async p=>{try{await c(ce({email:p.email,comment:p.comment})).unwrap()&&q.success("Your message was successfully sent"),r(),i.resetForm()}catch(l){console.log(l)}}});return e.jsx(S,{modalIsOpen:a,closeModal:r,title:"Need help",maxWidth:"335px",children:e.jsxs(pt,{onSubmit:i.handleSubmit,children:[e.jsxs(y,{children:[e.jsx(dt,{type:"text",name:"email",placeholder:"Email address",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.email,autoComplete:"off"}),i.touched.email&&i.errors.email?e.jsx(U,{children:i.errors.email}):null]}),e.jsxs(y,{children:[e.jsx(ht,{as:"textarea",rows:"6",name:"comment",placeholder:"Comment",autoComplete:"off",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.comment}),i.touched.comment&&i.errors.comment?e.jsx(U,{children:i.errors.comment}):null]}),e.jsx(ut,{type:"submit",children:"Submit"})]})})},gt=({icon:a})=>{const{isModalOpen:r,openModal:c,closeModal:i}=D();return e.jsxs(e.Fragment,{children:[e.jsxs(st,{children:[e.jsx("img",{className:"img-plant",src:at,alt:"Happy plant"}),e.jsxs(lt,{children:["If you need help with ",e.jsx("span",{className:"appName",children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),e.jsxs(ct,{type:"submit",onClick:c,children:[e.jsx("svg",{className:"iconHelp",width:"20px",height:"20px",children:e.jsx("use",{href:`${a}#icon-help-circle`})}),e.jsx("span",{children:"Need help?"})]})]}),e.jsx(ee,{onClick:i,className:r===!0&&"active"}),e.jsx(mt,{modalStateSwapper:i,isModalOpen:r})]})},bt=t.button`
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
`,ft=({icon:a})=>{const r=w();return e.jsxs(bt,{onClick:()=>r(de()),type:"submit",children:[e.jsx("svg",{className:"iconLogOut",width:"32px",height:"32px",children:e.jsx("use",{href:`${a}#icon-logout`})}),e.jsx("span",{children:"Log out"})]})},jt=t.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;

	margin-bottom: 8px;

	color: var(--sidebar-icon-edit-stroke-color);
`,vt=t.div`
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
`,yt=t.button`
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
`,wt=({openModal:a,icon:r})=>e.jsxs(e.Fragment,{children:[e.jsx(jt,{children:"My boards"}),e.jsxs(vt,{children:[e.jsx("p",{className:"createText",children:"Create a new board"}),e.jsx(yt,{onClick:()=>a(),type:"submit",children:e.jsx("svg",{className:"iconCreateBoard",width:"20px",height:"20px",children:e.jsx("use",{href:`${r}#icon-plus`})})})]})]}),kt=({isOpen:a})=>{const[r,c]=m.useState(""),i=B(me),{result:p}=B(Z),[l,h]=m.useState([]),u=w(),{isModalOpen:g,openModal:b,closeModal:f}=D();m.useEffect(()=>{h(i)},[i]),m.useEffect(()=>{c(p??"")},[p]);const o=d=>{u(P(d._id))};return e.jsxs(Pe,{className:a===!0&&"active",children:[e.jsxs(e.Fragment,{children:[e.jsx(Ae,{icon:x}),e.jsx(wt,{openModal:b,icon:x}),e.jsx(He,{children:e.jsx(nt,{icon:x,boards:l,choice:o,selectedItem:r,isModalOpen:g,closeModal:f})})]}),e.jsxs(Fe,{children:[e.jsx(gt,{icon:x}),e.jsx(ft,{icon:x})]})]})},St=()=>{const a=w(),{isModalOpen:r,openModal:c,closeModal:i}=D();return m.useEffect(()=>{a(pe())},[a]),e.jsx(he,{children:e.jsxs(ge,{children:[e.jsx(kt,{isOpen:r}),e.jsxs(be,{children:[e.jsx($e,{openSideBar:c}),e.jsx(m.Suspense,{fallback:e.jsx("div",{children:"Loading"}),children:e.jsx(ue,{})})]}),e.jsx(ee,{onClick:i,className:r===!0&&"active"})]})})};export{St as default};
