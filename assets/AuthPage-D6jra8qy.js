import{u as r,b as w,r as f,j as o,N as x,Q as v,o as B,B as h,p as b,q as L,t as S}from"./index-CSl63sa8.js";import{i as y}from"./icons-I0FOP6sp.js";import{c as j,a as s,u as k}from"./index.esm-Ig9quwle.js";/* empty css                      */const q=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: var(--welcomeBgColor);`,I=r.div`
display: flex;
min-width: 320px;

flex-direction: column;
align-items: start;
background: var(--user-icon-plus-stroke-color);
padding: 24px;
 border: 1px solid var(--loginform-border);
border-radius: 8px;

@media (min-width: 375px) {
    width: 335px
  };

@media (min-width: 768px) {
width: 424px;
padding: 40px;
}     
`,m=r.div`
position: relative;
width: 287px;
height: 49px;
background: var(--welcome-background-color);
// margin-bottom: 14px;
box-shadow: 0px 4px 16px var(--color-shadow);
border-radius: 8px;

@media (min-width: 767px) {
width: 344px;
} 
`,u=r.input`
  outline: none;
  overflow: hidden;
  transition: all 250ms ease;
  color: var(--welcome-hover-text-color);
  width: 287px;
  height: 49px;
  border: 1px solid var(--loginform-border);
  margin: 0;
  padding-left: 18px;
  background-color: var(--welcome-background-color);
  border-radius: 8px;
   transition: var(--hover-params);
 
  &:focus {
    border: 1px solid var(--secondary-login-button-color);
  }

  &:active {
    border: 1px solid var(--secondary-login-button-color);
  }

  @media (min-width: 767px) {
    width: 344px;
  }
`,E=r.nav`
display: flex;
width: 287px;
gap: 14px;
align-items: start;
padding: 0;
margin-bottom: 40px;
color: var(--loginform-text-color);
`,F=r.svg`       
position: absolute;
top: 16px;
right: 15px;
width:18px;
height:18px;
background: transparent;

cursor: pointer;
stroke: var(--user-icon-stroke-color);
stroke-width: 1.3px; 
`,N=r.button`
  cursor: pointer;
  width: 287px;
  height: 49px;
  border-radius: 8px;
  font-weight: 500;
  background: var(--start-login-button-color);
  transition: var(--hover-params);
  &:hover {
    background: var(--secondary-login-button-color);
    
    font-weight: bold;
  };
  &:focus {
      background: var(--secondary-login-button-color);
  };
 @media (min-width: 767px) {
      width: 344px;
};
`,g=r.div`
position: absolute;
  bottom: -15px;
  right: 0;
  font-size: 11px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: -1%;
  opacity: 0.9;
  color: #fff;`,C=r.div`
position: fixed;
top: 20px;
right: 20px;
width: 200px;
`,R=r.div`
display: flex;
flex-direction: column;
margin-bottom: 24px;
gap: 14px;
position: relative;

`,z=j({email:s().required("This field is required"),password:s().required("This field is required")}),T=()=>{const i=w(),[n,a]=f.useState(!1),e=k({initialValues:{email:"",password:""},validationSchema:z,onSubmit:async t=>{try{await i(B({email:t.email,password:t.password})).unwrap(),e.resetForm()}catch{h.error("Invalid email or password. Please verify your login details and try again",{position:"top-right"})}}}),l=()=>{a(t=>!t)};return o.jsxs(q,{children:[o.jsxs(I,{children:[o.jsxs(E,{children:[o.jsx(x,{to:"/auth/register",children:"Registration"}),o.jsx(x,{to:"/auth/login",style:{color:"#ffffff",fontWeight:"bold"},children:"Log in"})]}),o.jsxs("form",{onSubmit:e.handleSubmit,children:[o.jsxs(R,{children:[o.jsxs(m,{children:[o.jsx("label",{htmlFor:"email"}),o.jsx(u,{type:"email",placeholder:"Enter your email:",id:"email",name:"email",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email}),e.touched.email&&e.errors.email?o.jsx(g,{children:e.errors.email}):null]}),o.jsxs(m,{children:[o.jsx("label",{htmlFor:"password"}),o.jsx(u,{type:n?"text":"password",placeholder:"Confirm a password:",id:"password",name:"password",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.password}),o.jsx(F,{type:"button",onClick:l,className:"toggle-password-button",style:{stroke:"rgb(255,255,255)",strokeWidth:"1.3px"},children:o.jsx("use",{href:y+"#icon-password-eye"})}),e.touched.password&&e.errors.password?o.jsx(g,{children:e.errors.password}):null]})]}),o.jsx(N,{type:"submit",children:"Log in Now"})]})]}),o.jsx(C,{children:o.jsx(v,{})})]})},W=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: var(--welcomeBgColor);
`,$=r.div`
  text-align: center;
  background: var(--user-icon-plus-stroke-color);
  border-radius: 8px;
  padding: 24px;
  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 424px;
    padding: 40px;
  }
`,A=r.div`
  display: flex;
  color: var(--loginform-text-color);
  @media (min-width: 767px) {
    width: 344px;
  }
`,V=r(b)`
  margin-right: 14px;
  display: inline-block;
  // font-style: normal;
  // font-weight: 500;
  // font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: var(--color-white);
  text-decoration: none;
`,D=r(b)`
  left: 160px;
  top: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: var(--color-pale-white);
  text-decoration: none;
`,Z=r.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 14px;
  position: relative;
`,d=r.input`
  outline: none;
  overflow: hidden;
  width: 344px;
  height: 49px;
  // left: 40px;
  // top: 107px;
  color: var(--welcome-hover-text-color);
  background: var(--welcome-background-color);
  // opacity: 0.4;
  border: 1px solid var(--loginform-border);
  padding-left: 18px;
  box-shadow: 0px 4px 16px var(--color-shadow);
  border-radius: 8px;
  transition: var(--hover-params);
  &:focus {
    border: 1px solid var(--secondary-login-button-color);
  }
  &:active {
    border: 1px solid var(--secondary-login-button-color);
  }

  @media (max-width: 767px) {
    width: 287px;
  }
`,M=r.button`
  // font-style: normal;
  // font-family: Poppins;
  // font-weight: 500;
  // font-weight: bold;
  // font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  width: 100%;
  height: 49px;
  margin-top: 24px;
  background: var(--user-icon-plus-fill-color);
  border-radius: 8px;
  color: var(--color-dark);
  transition: opacity 200ms linear;
  cursor: pointer;
  &:hover {
    background: var(--secondary-login-button-color);
  }
  @media screen and (max-width: 767px) {
    width: 287px;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
  }
`,O=r.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 14px;
`,Q=r.svg`

  position: absolute;
  right: 18px;
  top: 19px;
  cursor: pointer;
  stroke: #fff;
  width: 16.5px;
  height: 16px;
  right: 15px;
  opacity: 0.4;
  &:hover,
  &:focus {
    stroke: var(--user-icon-stroke-color);
  }
`,c=r.div`
  position: absolute;
  bottom: -15px;
  right: 0;
  font-size: 11px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: -1%;
  opacity: 0.9;
  color: #fff;
`,p=r.div`
  position: relative;
`,Y=j().shape({name:s().min(2,"Name must be at least 2 characters").max(32,"Name must be at most 32 characters").required("Name is required"),email:s().email("Invalid email").required("Email is required"),password:s().trim().min(8,"Password must be at least 8 characters").max(64,"Password must be at most 64 characters").required("Password is required").matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]+$/,"Password must contain at least one letter and at least one number")}),G=()=>{const i=w(),[n,a]=f.useState(!1),e=k({initialValues:{name:"",email:"",password:""},validationSchema:Y,onSubmit:async t=>{try{await i(L({username:t.name,email:t.email,password:t.password})).unwrap(),h.success("You have registered successfully!"),e.resetForm()}catch{h.error("Oops, it's looks like something went wrong... Please, try again!")}}}),l=()=>{a(t=>!t)};return o.jsx(W,{children:o.jsxs($,{children:[o.jsxs("form",{onSubmit:e.handleSubmit,children:[o.jsxs(A,{children:[o.jsx(V,{to:"/auth/register",underline:"none",style:{color:"#ffffff",fontWeight:"bold"},children:"Registration"}),o.jsx(D,{to:"/auth/login",underline:"none",children:"Log In"})]}),o.jsxs(Z,{children:[o.jsxs(p,{children:[o.jsx(d,{id:"name",name:"name",type:"text",onChange:e.handleChange,value:e.values.name,onBlur:e.handleBlur,placeholder:"Enter your name"}),e.touched.name&&e.errors.name?o.jsx(c,{children:e.errors.name}):null]}),o.jsxs(p,{children:[o.jsx(d,{id:"email",name:"email",type:"email",onChange:e.handleChange,value:e.values.email,onBlur:e.handleBlur,placeholder:"Enter your email"}),e.touched.email&&e.errors.email?o.jsx(c,{children:e.errors.email}):null]}),o.jsx(p,{children:o.jsxs(O,{children:[o.jsx(d,{type:n?"text":"password",id:"password",name:"password",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.password,placeholder:"Create a password"}),o.jsxs(Q,{width:"18px",onClick:l,children:[" ",o.jsx("use",{href:y+"#icon-password-eye"})," "]}),e.touched.password&&e.errors.password?o.jsx(c,{children:e.errors.password}):null]})})]}),o.jsx(M,{type:"submit",children:"Register Now"})]}),o.jsx(C,{children:o.jsx(v,{})})]})})},X=()=>{const{id:i}=S();return o.jsx("div",{children:o.jsxs("div",{children:[i==="login"&&o.jsx(T,{}),i==="register"&&o.jsx(G,{})]})})};export{X as default};
