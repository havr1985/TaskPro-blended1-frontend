import{u as i,j as e,r as f,e as g}from"./index-aaZxB2tZ.js";import{i as n}from"./icons-OyJV09ix.js";const m=i.div`
  height: 68px;
`,u=()=>e.jsx(m,{children:"Header"}),b=i.div`
  width: 260px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 24px;

  background-color: #121212;

	@media (max-width: 767px) {
		width: 225px;

		padding: 14px 14px 24px 14px;
	}


	
  @media (max-width: 1439px) {
    display: none;
  }
`,j=i.div`
	display: flex;
	align-items: center;

	margin-bottom: 60px;

	@media (max-width: 767px) {
		margin-bottom: 70px;
	}

	.iconBg {
		width: 32px;
		height: 32px;

		background-color: #1f1f1f;
		border-radius: 8px;

		display: flex;
		align-items: center;
		justify-content: center;

		margin-right: 8px;
	}

	.iconLightning {
		fill: #ffffff;
	}

	.logoText {
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;

		color: #ffffff;
	}
`,w=({icon:t})=>e.jsxs(j,{children:[e.jsx("div",{className:"iconBg",children:e.jsx("svg",{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${t}#icon-task-pro-lightning`})})}),e.jsx("span",{className:"logoText",children:"Task Pro"})]}),y=i.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;

	margin-bottom: 8px;

	color: #ffffff80;
`,v=i.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 70px;

	border-top: 1px solid #ffffff1a;
	border-bottom: 1px solid #ffffff1a;

	margin-bottom: 40px;

	@media (max-width: 767px) {
		width: 197px;
	}

	.createText {
		font-weight: 500;
		font-size: 14px;
		line-height: 21px;
		letter-spacing: -0.02em;

		width: 76px;

		color: #ffffff;
	}
`,k=i.button`
	width: 40px;
	height: 36px;
	border: transparent;

	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	background: #bedbb0;
	border-radius: 6px;

	.iconCreateBoard {
		stroke: #121212;
	}
`,C=i.ul`
	font-weight: 500;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: -0.02em;
	color: #ffffff80;

	display: flex;
	flex-direction: column;
	gap: 4px;

	position: relative;
`,B=i.li`
	display: flex;
	align-items: center;
	justify-content: space-between;

	cursor: pointer;

	height: 61px;

	&.active {
		color: #ffffff;
	}

	&.active .iconActive {
		fill: #ffffff;
	}

	&.active::after {
		content: "";
		position: absolute;

		right: -24px;

		height: 61px;
		width: 4px;
		border-radius: 4px 0 0 4px;

		background-color: #bedbb0;
	}

	.iconBoard {
		stroke: #ffffff80;

		margin-right: 8px;
	}
`,z=i.div`
	display: flex;
	align-items: center;
`,N=i.div`
	display: flex;
`,p=i.button`
	height: 20px;
	border: transparent;
	background: none;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;

	padding: 0;

	.iconBoard.iconEdit:hover {
		stroke: #bedbb0;
		transform: scale(1.1);
		animation: pulse 1s infinite alternate;
	}
`,W=({icon:t,boards:a,selectedItem:o,choice:c})=>e.jsxs("div",{children:[e.jsx(y,{children:"My boards"}),e.jsxs(v,{children:[e.jsx("p",{className:"createText",children:"Create a new board"}),e.jsx(k,{type:"submit",children:e.jsx("svg",{className:"iconCreateBoard",width:"20px",height:"20px",children:e.jsx("use",{href:`${t}#icon-plus`})})})]}),e.jsx(C,{children:a.map(r=>e.jsxs(B,{onClick:()=>c(r),className:o.id===r.id?"active":"",children:[e.jsxs(z,{children:[e.jsx("svg",{className:"iconBoard iconActive",width:"20px",height:"20px",children:e.jsx("use",{href:`${t}#${r.icon}`})}),e.jsx("p",{children:r.name})]}),o.id===r.id&&e.jsxs(N,{children:[e.jsx(p,{type:"button",children:e.jsx("svg",{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${t}#icon-pencil`})})}),e.jsx(p,{type:"button",children:e.jsx("svg",{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${t}#icon-trash`})})})]})]},r.id))})]}),H="/TaskPro-blended1-frontend/assets/plant-92SCXr2v.png",P=i.div`
	width: 212px;
	height: 272px;

	padding: 20px;
	margin-bottom: 24px;

	border-radius: 8px;
	background-color: #1f1f1f;

	@media (max-width: 767px) {
		width: 197px;
		height: 238px;

		padding: 14px;
	}
`,I=i.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: -0.02em;

	width: 172px;

	margin-bottom: 18px;

	color: #ffffff;

	@media (max-width: 767px) {
		font-size: 12px;
		line-height: 16px;
	}

	.appName {
		color: #bedbb0;
	}
`,L=i.button`
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
	color: #ffffff;

	.iconHelp {
		stroke: #ffffff;
		margin-right: 8px;
	}
`,T=({icon:t})=>e.jsxs(P,{children:[e.jsx("img",{src:H,alt:"Happy plant"}),e.jsxs(I,{children:["If you need help with ",e.jsx("span",{className:"appName",children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),e.jsxs(L,{type:"submit",children:[e.jsx("svg",{className:"iconHelp",width:"20px",height:"20px",children:e.jsx("use",{href:`${t}#icon-help-circle`})}),e.jsx("span",{children:"Need help?"})]})]}),D=i.button`
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
	color: #ffffff;

	.iconLogOut {
		stroke: #bedbb0;
	}
`,$=({icon:t})=>e.jsxs(D,{type:"submit",children:[e.jsx("svg",{className:"iconLogOut",width:"32px",height:"32px",children:e.jsx("use",{href:`${t}#icon-logout`})}),e.jsx("span",{children:"Log out"})]}),A=()=>{const[t,a]=f.useState(""),o=[{id:1,name:"Project office",icon:"icon-board-square"},{id:2,name:"Project ",icon:"icon-board-colors"}],c=r=>{a(r)};return e.jsxs(b,{children:[e.jsxs("div",{children:[e.jsx(w,{icon:n}),e.jsx(W,{icon:n,boards:o,choice:c,selectedItem:t})]}),e.jsxs("div",{children:[e.jsx(T,{icon:n}),e.jsx($,{icon:n})]})]})},M=i.div`
  margin-left: auto;
  margin-right: auto;
  /* padding-left: 20px;
  padding-right: 20px; */


@media screen and (max-width: 767.9px) {
    max-width: 375px;
}

@media screen and (min-width: 768px) {
    width: 768px;
    /* padding-left: 32px;
    padding-right: 32px; */
}

@media screen and (min-width: 1440px) {
    width: 1440px;

		/* overflow-x: hidden; */
    /* padding-left: 24px;
    padding-right: 24px; */
  }`,S=i.div`
  display: flex;
  min-height: 100vh;
  /* height: 100vh; */
`,E=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,F=i.button`
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
  color: rgba(255, 255, 255, 0.8);
  border: none;
  background-color: transparent;
  cursor: pointer;
`,O=i.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 1.5px;
  stroke: rgba(255, 255, 255, 0.8);
`,V=()=>e.jsxs(F,{children:[e.jsx(O,{children:e.jsx("use",{href:n+"#icon-filter"})}),"Filters"]}),q=i.div`
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
`,R=i.h2`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: #fff;
`,X=({boardName:t})=>e.jsxs(q,{children:[e.jsx(R,{children:t}),e.jsx(V,{})]}),G=i.ul`
  overflow-y: auto;
  overflow-x: hidden;
  /* overflow: overlay; */
  /* flex-grow: 1; */
  height: 70vh;
  /* margin-right: -7px; */
  /* margin-right: -16px; */

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-right: -16px;
  }

  &::-webkit-scrollbar {
    width: 8px; /* ширина всей полосы прокрутки */
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05); /* цвет зоны отслеживания */
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #121212; /* цвет бегунка */
    border-radius: 12px; /* округлось бегунка */
    border: 8px solid #121212; /* отступ вокруг бегунка */
  }
`,J=i.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 154px;
  padding: 14px 20px;
  margin-bottom: 8px;
  border-left: 4px solid red;
  border-radius: 8px;
  background-color: #121212;
  /* cursor: pointer; */

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`,K=i.h4`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 14px;
  /* letter-spacing: -0.02em; */
  color: #fff;
`,Q=i.div`
  height: 35px;
  overflow: hidden;
`,U=i.p`
  font-size: 12px;
  line-height: 1.33;
  /* letter-spacing: -0.02em; */
  color: rgba(255, 255, 255, 0.5);
`,Y=i.div`
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
    background-color: rgba(255, 255, 255, 0.1);
  }
`,l=i.span`
  display: block;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
`,Z=i.span`
  font-size: 10px;
  letter-spacing: -0.02em;
  color: #fff;

  &::before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 5px;
    background-color: red;
    vertical-align: middle;
  }
`,_=i.span`
  font-size: 10px;
  letter-spacing: -0.02em;
  color: #fff;
`,ee=i.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: auto;
`,s=i.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,d=i.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 1.3px;
  stroke: rgba(255, 255, 255, 0.5);
`,ie=()=>e.jsx(G,{children:e.jsxs(J,{children:[e.jsx(K,{children:"Card Title"}),e.jsx(Q,{children:e.jsx(U,{children:"Description"})}),e.jsxs(Y,{children:[e.jsxs("div",{children:[e.jsx(l,{children:"Priority"}),e.jsx(Z,{children:"Low"})]}),e.jsxs("div",{children:[e.jsx(l,{children:"Deadline"}),e.jsx(_,{children:"12/05/2023"})]}),e.jsxs(ee,{children:[e.jsx("li",{children:e.jsx(s,{children:e.jsx(d,{children:e.jsx("use",{href:n+"#icon-bell"})})})}),e.jsx("li",{children:e.jsx(s,{children:e.jsx(d,{children:e.jsx("use",{href:n+"#icon-arrow-circle-broken-right"})})})}),e.jsx("li",{children:e.jsx(s,{children:e.jsx(d,{children:e.jsx("use",{href:n+"#icon-pencil"})})})}),e.jsx("li",{children:e.jsx(s,{children:e.jsx(d,{children:e.jsx("use",{href:n+"#icon-trash"})})})})]})]})]})}),te=i.div`
  display: flex;
  align-items: flex-start;
  gap: 34px;
  /* width: 375px; */
  width: 100%;
  height: 95%;
  overflow-x: auto;
  overflow-y: hidden;
  /* padding-bottom: 26px; */

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 1132px;
  }

  &::-webkit-scrollbar {
    width: 8px; /* ширина всей полосы прокрутки */
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05); /* цвет зоны отслеживания */
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #121212; /* цвет бегунка */
    border-radius: 12px; /* округлось бегунка */
    border: 8px solid #121212; /* отступ вокруг бегунка */
  }
`,ne=i.ul`
  display: flex;
  gap: 18px;
  height: 100%;
`,re=i.li`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 100%;
  /* height: 100%; */

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`,oe=i.button`
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
  color: #ffffff;
  background-color: #121212;
  cursor: pointer;

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`,se=i.button`
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
  color: #161616;
  background-color: #bedbb0;
  cursor: pointer;

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`,de=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: #fff;
`,ae=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: #161616;
`,ce=i.svg`
  width: 14px;
  height: 14px;
  stroke: #181818;
`,pe=i.svg`
  width: 14px;
  height: 14px;
  stroke: #ffffff;
`,le=i.div`
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

  background-color: #121212;

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`,xe=i.h3`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #ffffff;
`,he=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,x=i.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,h=i.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 1.3px;
  stroke: rgba(255, 255, 255, 0.5);
`,fe=()=>e.jsxs(te,{children:[e.jsx(ne,{children:e.jsxs(re,{children:[e.jsx("div",{children:e.jsxs(le,{children:[e.jsx(xe,{children:"New column"}),e.jsxs(he,{children:[e.jsx(x,{children:e.jsx(h,{children:e.jsx("use",{href:n+"#icon-pencil"})})}),e.jsx(x,{children:e.jsx(h,{children:e.jsx("use",{href:n+"#icon-trash"})})})]})]})}),e.jsx(ie,{}),e.jsx("div",{children:e.jsxs(se,{children:[e.jsx(ae,{children:e.jsx(pe,{children:e.jsx("use",{href:n+"#icon-plus"})})}),"Add Card"]})})]})}),e.jsxs(oe,{children:[e.jsx(de,{children:e.jsx(ce,{children:e.jsx("use",{href:n+"#icon-plus"})})}),"Add column"]})]}),ge=i.div`
  flex-grow: 1;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #1f1f1f;

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
`,me=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`,ue=i.p`
  width: 335px;
  text-align: center;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);

  @media (min-width: 768px) {
    width: 486px;
    font-size: 14px;
    line-height: 1.29;
  }
`,be=i.span`
  color: #bedbb0;
`,je=()=>{const{boardName:t}=g();return e.jsxs(ge,{children:[t===void 0&&e.jsx(me,{children:e.jsxs(ue,{children:["Before starting your project, it is essential"," ",e.jsx(be,{children:"to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})}),t!==void 0&&e.jsxs(e.Fragment,{children:[e.jsx(X,{boardName:t}),e.jsx(fe,{boardName:t})]})]})},ve=()=>e.jsx(M,{children:e.jsxs(S,{children:[e.jsx(A,{}),e.jsxs(E,{children:[e.jsx(u,{}),e.jsx(je,{})]})]})});export{ve as default};
