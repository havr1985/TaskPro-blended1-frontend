import{u as r,j as e,m as p}from"./index-bQnKTMix.js";import{i as t}from"./icons-iplVKqot.js";import{S as x,a as h,M as g,F as m,E as u,d as b,P as f,u as j,O as w}from"./HomePage.styled-u_9p_py0.js";import{b as v,c as y,a as k,F as C}from"./index.esm-qTO28jC0.js";const M=r.button`
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
  color: var(--filter-text-and-icon-color);
  border: none;
  background-color: transparent;
  cursor: pointer;
`,z=r.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 1.5px;
  stroke: var(--filter-text-and-icon-color);
`,W=()=>e.jsxs(M,{children:[e.jsx(z,{children:e.jsx("use",{href:t+"#icon-filter"})}),"Filters"]}),I=r.div`
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
`,P=r.h2`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--card-title-color);
`,D=({boardName:o})=>e.jsxs(I,{children:[e.jsx(P,{children:o}),e.jsx(W,{})]}),F=r.ul`
  overflow-y: auto;
  overflow-x: hidden;
  /* overflow: overlay; */
  /* flex-grow: 1; */
  height: 70vh;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-right: -16px;
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
`,A=r.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 154px;
  padding: 14px 20px;
  margin-bottom: 8px;
  /* border-left: 4px solid red; */
  border-radius: 8px;
  background-color: var(--primary-card-background-color);
  /* cursor: pointer; */

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
    background-color: red;
  }
`,S=r.h4`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 14px;
  /* letter-spacing: -0.02em; */
  color: var(--card-title-color);
`,B=r.div`
  height: 35px;
  overflow: hidden;
`,E=r.p`
  font-size: 12px;
  line-height: 1.33;
  /* letter-spacing: -0.02em; */
  color: var(--screens-page-tutorial-text-color);
`,O=r.div`
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
  }
`,d=r.span`
  display: block;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: var(--screens-page-tutorial-text-color);
`,T=r.span`
  font-size: 10px;
  letter-spacing: -0.02em;
  color: var(--card-params-value-text-color);

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
`,N=r.span`
  font-size: 10px;
  letter-spacing: -0.02em;
  color: var(--card-params-value-text-color);
`,V=r.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: auto;
`,n=r.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,a=r.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 1.3px;
  stroke: var(--radio-icons-color);

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
`,Z=()=>e.jsx(F,{children:e.jsxs(A,{children:[e.jsx(S,{children:"Card Title"}),e.jsx(B,{children:e.jsx(E,{children:"Description"})}),e.jsxs(O,{children:[e.jsxs("div",{children:[e.jsx(d,{children:"Priority"}),e.jsx(T,{children:"Low"})]}),e.jsxs("div",{children:[e.jsx(d,{children:"Deadline"}),e.jsx(N,{children:"12/05/2023"})]}),e.jsxs(V,{children:[e.jsx("li",{children:e.jsx(n,{children:e.jsx(a,{className:"bell",children:e.jsx("use",{href:t+"#icon-bell"})})})}),e.jsx("li",{children:e.jsx(n,{children:e.jsx(a,{children:e.jsx("use",{href:t+"#icon-arrow-circle-broken-right"})})})}),e.jsx("li",{children:e.jsx(n,{children:e.jsx(a,{children:e.jsx("use",{href:t+"#icon-pencil"})})})}),e.jsx("li",{children:e.jsx(n,{children:e.jsx(a,{children:e.jsx("use",{href:t+"#icon-trash"})})})})]})]})]})}),$=r.div`
  display: flex;
  align-items: flex-start;
  gap: 34px;

  width: 100%;
  height: 95%;
  overflow-x: auto;
  overflow-y: hidden;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: calc(100vw - 308px);
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
`,L=r.ul`
  display: flex;
  gap: 34px;
  height: 100%;
`,q=r.li`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 100%;
  /* height: 100%; */

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`,H=r.button`
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
  color: var(--modal-board-text);
  background-color: var(--background-add-column-btn-color);
  cursor: pointer;

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`,R=r.button`
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

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`,G=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: var(--add-column-icon-wrap-color);
`,J=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: var(--shared-black-plus-button);
`,K=r.svg`
  width: 14px;
  height: 14px;
  stroke: var(--add-column-icon-plus-color);
`,Q=r.svg`
  width: 14px;
  height: 14px;
  stroke: var(--add-card-icon-plus-color);
`,U=r.div`
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

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`,X=r.h3`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--card-title-color);
`,Y=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,c=r.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,l=r.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 1.3px;
  stroke: var(--radio-icons-color);
`,_=r(v)`
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
`,ee=r.button`
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
`,re=y().shape({title:k().min("6").required("Email is required")}),oe=({isModalOpen:o,modalStateSwapper:s})=>{const i={title:""};return e.jsx(x,{modalIsOpen:o,closeModal:s,title:"Add column",maxWidth:"335px",children:e.jsx(h,{children:e.jsx(C,{initialValues:i,validationSchema:re,children:e.jsxs(g,{children:[e.jsxs(m,{children:[e.jsx(u,{name:"title",component:"div"}),e.jsx(_,{type:"text",id:"title",name:"title",placeholder:"title",autoComplete:"off"})]}),e.jsxs(ee,{type:"submit",children:[e.jsx(b,{children:e.jsx(f,{children:e.jsx("use",{href:t+"#icon-plus"})})}),"Add"]})]})})})})},te=()=>{const{isModalOpen:o,openModal:s,closeModal:i}=j();return e.jsxs($,{children:[e.jsx(L,{children:e.jsxs(q,{children:[e.jsx("div",{children:e.jsxs(U,{children:[e.jsx(X,{children:"New column"}),e.jsxs(Y,{children:[e.jsx(c,{children:e.jsx(l,{children:e.jsx("use",{href:t+"#icon-pencil"})})}),e.jsx(c,{children:e.jsx(l,{children:e.jsx("use",{href:t+"#icon-trash"})})})]})]})}),e.jsx(Z,{}),e.jsx("div",{children:e.jsxs(R,{children:[e.jsx(J,{children:e.jsx(Q,{children:e.jsx("use",{href:t+"#icon-plus"})})}),"Add Card"]})})]})}),e.jsxs(H,{onClick:s,children:[e.jsx(G,{children:e.jsx(K,{children:e.jsx("use",{href:t+"#icon-plus"})})}),"Add column"]}),e.jsx(w,{onClick:i,className:o===!0&&"active"}),e.jsx(oe,{modalStateSwapper:i,isModalOpen:o})]})},ie=r.div`
  flex-grow: 1;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: var(--secondary-background-color);

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
`,ne=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`,ae=r.p`
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
`,se=r.span`
  color: var(--welcome-message-text-accent-color);
`,xe=()=>{const{boardName:o}=p();return e.jsxs(ie,{children:[o!==void 0&&e.jsx(ne,{children:e.jsxs(ae,{children:["Before starting your project, it is essential"," ",e.jsx(se,{children:"to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})}),o===void 0&&e.jsxs(e.Fragment,{children:[e.jsx(D,{boardName:o}),e.jsx(te,{boardName:o})]})]})};export{xe as default};
