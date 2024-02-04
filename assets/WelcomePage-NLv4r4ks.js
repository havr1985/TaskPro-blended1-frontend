import{u as o,c as i,a as v,r as c,b,j as t,d,N as m}from"./index-aaZxB2tZ.js";import{i as g}from"./icons-OyJV09ix.js";const j="/TaskPro-blended1-frontend/assets/boy-zfFl38_I.png",y=o.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  min-height: 68px;
  padding-right: 24px;
  color: var(--primary-heading-color);
  background-color: var(--header-background-color);

  @media (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 1439px) {
    padding-left: 20px;
    padding-right: 32px;
  }
`,T=o.div`
  position: relative;
`,C=o.ul`
  position: absolute;
  display: ${e=>e.open?"block":"none"};
  top: 20px;
  left: -105px;
  margin: 0;
  padding: 18px 44px 18px 18px;
  list-style: none;
  border: solid 1px var(--theme-switcher-dropdown-border-color);
  border-radius: 8px;
  background-color: var(--header-background-color);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  z-index: 1;
`,h=o.li`
  padding: 5px 10px;
  cursor: pointer;
  color: var(--theme-switcher-dropdown-text-color);

  &:hover {
    color: var(--theme-switcher-dropdown-hover-color);
  }

  ${e=>e.selected&&`
  color: var(--primary-button-color);
    `}
`,L=o.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    padding: 5px;
    box-shadow: 0px 6px 7px -5px var(--user-edit-icon-plus-hover-color);
  }
`,W=o.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--primary-icon-stroke-color);
`,n=e=>e.auth;i(n,e=>e.isLoading);i(n,e=>e.error);i(n,e=>e.token);i(n,e=>e.user);i(n,e=>e.authenticated);const P=i(n,e=>e.theme),S=()=>{const e=v(P),[r,s]=c.useState(e||"dark");return c.useLayoutEffect(()=>{document.documentElement.setAttribute("data-theme",r)},[r]),{theme:r,setTheme:s}},z=()=>{const e=b(),{theme:r,setTheme:s}=S(),[p,l]=c.useState("dark"),[x,u]=c.useState(!1),a=()=>{u(!x)},f=()=>{s("light"),l("light"),e(d("light")),a()},w=()=>{s("dark"),l("dark"),e(d("dark")),a()},k=()=>{s("violet"),l("violet"),e(d("violet")),a()};return t.jsxs(y,{children:[t.jsxs(L,{onClick:a,children:["Theme",t.jsx(W,{children:t.jsx("use",{href:g+"#icon-chevron-down"})})]}),t.jsx(T,{theme:r,children:t.jsxs(C,{open:x,children:[t.jsx(h,{onClick:()=>f(),selected:p==="light",children:"Light"}),t.jsx(h,{onClick:()=>w(),selected:p==="dark",children:"Dark"}),t.jsx(h,{onClick:()=>k(),selected:p==="violet",children:"Violet"})]})})]})},I=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
`,D=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 473px;
  }
`,O=o.img`
  width: 124px;
  height: 124px;

  @media (min-width: 768px) {
    width: 162px;
    height: 162px;
  }
`,E=o.div`
  display: flex;
  align-items: center;
  gap: 14px;
  height: 42px;
  margin-top: 14px;

  @media (min-width: 768px) {
    margin-top: 24px;
    height: 60px;
  }
`,A=o.svg`
  width: 40px;
  height: 40px;
  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`,B=o.h1`
  color: #161616;
  font-size: 28px;
  font-family: Poppins;
  font-weight: 600;
  letter-spacing: -1.12px;

  @media (min-width: 768px) {
    font-size: 40px;
    letter-spacing: -1.6px;
  }
`,R=o.p`
  margin-top: 24px;
  margin-bottom: 48px;
  text-align: center;
  color: #161616;
  font-size: 14px;
  font-family: "Poppins";
  line-height: 1.28;
  letter-spacing: -0.28px;
`,F=o(m)`
  width: calc(100% - 40px);
  padding: 14px;
  margin-bottom: 14px;
  text-decoration: none;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  font-family: "Poppins";
  font-weight: 500;
  letter-spacing: -0.28px;

  border-radius: 8px;
  background: #161616;

  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    width: 344px;
  }
`,N=o(m)`
  font-family: "Poppins";
  text-decoration: none;
  color: #161616;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  padding: 6px 12px;

  cursor: pointer;

  transition: all 150ms linear;

  &:hover {
    opacity: 0.8;
    border-radius: 8px;

    background: #161616;
    color: #ffffff;
  }
`,V=()=>t.jsx(I,{children:t.jsxs(D,{children:[t.jsx(O,{src:j,alt:"boy with laptop"}),t.jsx(z,{}),t.jsxs(E,{children:[t.jsx(A,{children:t.jsx("use",{href:g+"#icon-logo"})}),t.jsx(B,{children:"Task Pro"})]}),t.jsx(R,{children:"Supercharge your productivity and take control of your tasks with Task Pro - Don`t wait, start achieving your goals now!"}),t.jsx(F,{to:"/auth/register",children:"Registration"}),t.jsx(N,{to:"/auth/login",children:"Log In"})]})}),q=()=>t.jsx(t.Fragment,{children:t.jsx(V,{})});export{q as default};
