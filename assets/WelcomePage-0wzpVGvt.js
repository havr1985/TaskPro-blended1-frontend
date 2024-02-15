import{u as i,N as l,a as d,j as e,G as g,g as h,B as p}from"./index-54D8sqGM.js";import{i as x}from"./icons-I0FOP6sp.js";/* empty css                      */const m="/TaskPro-blended1-frontend/assets/boy-zfFl38_I.png",f=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
`,u=i.div`
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
`,w=i.img`
  width: 124px;
  height: 124px;

  @media (min-width: 768px) {
    width: 162px;
    height: 162px;
  }
`,y=i.div`
  display: flex;
  align-items: center;
  gap: 14px;
  height: 42px;
  margin-top: 14px;

  @media (min-width: 768px) {
    margin-top: 24px;
    height: 60px;
  }
`,b=i.svg`
  width: 40px;
  height: 40px;
  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`,v=i.h1`
  color: #161616;
  font-size: 28px;
  font-family: Poppins;
  font-weight: 600;
  letter-spacing: -1.12px;

  @media (min-width: 768px) {
    font-size: 40px;
    letter-spacing: -1.6px;
  }
`,k=i.p`
  margin-top: 24px;
  margin-bottom: 48px;
  text-align: center;
  color: #161616;
  font-size: 14px;
  font-family: "Poppins";
  line-height: 1.28;
  letter-spacing: -0.28px;
`,j=i(l)`
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
`,I=i(l)`
  font-family: "Poppins";
  text-decoration: none;
  color: #161616;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  padding: 6px 12px;
	margin-bottom: 14px;

  cursor: pointer;

  transition: all 150ms linear;

  &:hover {
    opacity: 0.8;
    border-radius: 8px;

    background: #161616;
    color: #ffffff;
  }
`,W=i.div`
display: flex;
align-items: center;
justify-content: center;
width: 344px;
height: 50px;
border-radius: 8px;
background-color: #161616;
 transition: all 150ms linear;

&:hover {
    opacity: 0.8;
  }
`;class a extends Error{}a.prototype.name="InvalidTokenError";function L(r){return decodeURIComponent(atob(r).replace(/(.)/g,(t,o)=>{let n=o.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}function P(r){let t=r.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return L(t)}catch{return atob(t)}}function D(r,t){if(typeof r!="string")throw new a("Invalid token specified: must be a string");t||(t={});const o=t.header===!0?0:1,n=r.split(".")[o];if(typeof n!="string")throw new a(`Invalid token specified: missing part #${o+1}`);let s;try{s=P(n)}catch(c){throw new a(`Invalid token specified: invalid base64 for part #${o+1} (${c.message})`)}try{return JSON.parse(s)}catch(c){throw new a(`Invalid token specified: invalid json for part #${o+1} (${c.message})`)}}const T=()=>{const r=d(),t=async o=>{const n=D(o);try{await r(h({username:n.name,email:n.email,avatarUrl:n.picture})).unwrap(),p.success("You have logged successfully!")}catch{p.error("Oops, it's looks like something went wrong... Please, try again!")}};return e.jsx(f,{children:e.jsxs(u,{children:[e.jsx(w,{src:m,alt:"boy with laptop"}),e.jsxs(y,{children:[e.jsx(b,{children:e.jsx("use",{href:x+"#icon-logo"})}),e.jsx(v,{children:"Task Pro"})]}),e.jsx(k,{children:"Supercharge your productivity and take control of your tasks with Task Pro - Don`t wait, start achieving your goals now!"}),e.jsx(j,{to:"/auth/register",children:"Registration"}),e.jsx(I,{to:"/auth/login",children:"Log In"}),e.jsx(W,{children:e.jsx(g,{onSuccess:o=>{t(o.credential)},onError:()=>{console.log("Login Failed")}})})]})})},B=()=>e.jsx(e.Fragment,{children:e.jsx(T,{})});export{B as default};
