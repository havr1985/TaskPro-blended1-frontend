import{u as i,N as e,j as t}from"./index-u8G9WHG0.js";import{i as o}from"./icons-I0FOP6sp.js";const n="/TaskPro-blended1-frontend/assets/boy-zfFl38_I.png",r=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
`,p=i.div`
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
`,a=i.img`
  width: 124px;
  height: 124px;

  @media (min-width: 768px) {
    width: 162px;
    height: 162px;
  }
`,s=i.div`
  display: flex;
  align-items: center;
  gap: 14px;
  height: 42px;
  margin-top: 14px;

  @media (min-width: 768px) {
    margin-top: 24px;
    height: 60px;
  }
`,c=i.svg`
  width: 40px;
  height: 40px;
  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`,l=i.h1`
  color: #161616;
  font-size: 28px;
  font-family: Poppins;
  font-weight: 600;
  letter-spacing: -1.12px;

  @media (min-width: 768px) {
    font-size: 40px;
    letter-spacing: -1.6px;
  }
`,x=i.p`
  margin-top: 24px;
  margin-bottom: 48px;
  text-align: center;
  color: #161616;
  font-size: 14px;
  font-family: "Poppins";
  line-height: 1.28;
  letter-spacing: -0.28px;
`,d=i(e)`
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
`,g=i(e)`
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
`,h=()=>t.jsx(r,{children:t.jsxs(p,{children:[t.jsx(a,{src:n,alt:"boy with laptop"}),t.jsxs(s,{children:[t.jsx(c,{children:t.jsx("use",{href:o+"#icon-logo"})}),t.jsx(l,{children:"Task Pro"})]}),t.jsx(x,{children:"Supercharge your productivity and take control of your tasks with Task Pro - Don`t wait, start achieving your goals now!"}),t.jsx(d,{to:"/auth/register",children:"Registration"}),t.jsx(g,{to:"/auth/login",children:"Log In"})]})}),u=()=>t.jsx(t.Fragment,{children:t.jsx(h,{})});export{u as default};
