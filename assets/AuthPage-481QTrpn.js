import{u as r,p as a,a as w,r as v,j as e,Q as f,q as L,B as x,t as P,v as B}from"./index-avW8Nks3.js";import{i as b}from"./icons-I0FOP6sp.js";import{c as y,a as n,u as j}from"./index.esm-1m1P_M8p.js";/* empty css                      */const S=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: var(--welcomeBgColor);
`,q=r.div`
  display: flex;
  min-width: 320px;

  flex-direction: column;
  align-items: start;
  background: var(--user-icon-plus-stroke-color);
  padding: 24px;
  border: 1px solid var(--loginform-border);
  border-radius: 8px;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 424px;
    padding: 40px;
  }
`,F=r(a)`
  margin-right: 14px;
  display: inline-block;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: var(--color-white);
  text-decoration: none;
`,I=r(a)`
  left: 160px;
  top: 40px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: var(--color-pale-white);
  text-decoration: none;
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

  &:focus,
  &:active {
    border: 1px solid var(--secondary-login-button-color);
  }

  @media (min-width: 767px) {
    width: 344px;
  }
`,E=r.nav`
  display: flex;
  width: 287px;
  align-items: start;
  padding: 0;
  margin-bottom: 40px;
  color: var(--loginform-text-color);
`,z=r.svg`
  position: absolute;
  top: 16px;
  right: 15px;
  width: 18px;
  height: 18px;
  stroke: var(--user-icon-stroke-color);
  stroke-width: 1.3px;
  opacity: 0.4;
  cursor: pointer;
  transition: opacity var(--hover-params);

  &:hover,
  &:focus {
    opacity: 1;
  }
`,R=r.button`
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
  }
  &:focus {
    background: var(--secondary-login-button-color);
  }
  @media (min-width: 767px) {
    width: 344px;
  }
`,g=r.div`
  position: absolute;
  bottom: -15px;
  right: 0;
  font-size: 11px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: -1%;
  opacity: 0.9;
  color: #fff;
`,k=r.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 200px;
`,$=r.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  gap: 14px;
  position: relative;
`,N=y({email:n().required("This field is required"),password:n().required("This field is required")}),T=()=>{const t=w(),[s,l]=v.useState(!1),o=j({initialValues:{email:"",password:""},validationSchema:N,onSubmit:async i=>{try{await t(L({email:i.email,password:i.password})).unwrap(),o.resetForm()}catch{x.error("Invalid email or password. Please verify your login details and try again",{position:"top-right"})}}}),d=()=>{l(i=>!i)};return e.jsxs(S,{children:[e.jsxs(q,{children:[e.jsxs(E,{children:[e.jsx(F,{to:"/auth/register",children:"Registration"}),e.jsx(I,{to:"/auth/login",style:{color:"#ffffff"},children:"Log in"})]}),e.jsxs("form",{onSubmit:o.handleSubmit,children:[e.jsxs($,{children:[e.jsxs(m,{children:[e.jsx("label",{htmlFor:"email"}),e.jsx(u,{type:"email",placeholder:"Enter your email",id:"email",name:"email",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.email,autoFocus:!0}),o.touched.email&&o.errors.email?e.jsx(g,{children:o.errors.email}):null]}),e.jsxs(m,{children:[e.jsx("label",{htmlFor:"password"}),e.jsx(u,{type:s?"text":"password",placeholder:"Confirm a password",id:"password",name:"password",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.password}),e.jsx(z,{onClick:d,children:e.jsx("use",{href:b+"#icon-password-eye"})}),o.touched.password&&o.errors.password?e.jsx(g,{children:o.errors.password}):null]})]}),e.jsx(R,{type:"submit",children:"Log in Now"})]})]}),e.jsx(k,{children:e.jsx(f,{})})]})},A=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: var(--welcomeBgColor);
`,V=r.div`
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
`,D=r.div`
  display: flex;
  color: var(--loginform-text-color);
  @media (min-width: 767px) {
    width: 344px;
  }
`,W=r(a)`
  margin-right: 14px;
  display: inline-block;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: var(--color-white);
  text-decoration: none;
`,Z=r(a)`
  left: 160px;
  top: 40px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: var(--color-pale-white);
  text-decoration: none;
`,M=r.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 14px;
  position: relative;
`,c=r.input`
  outline: none;
  overflow: hidden;
  width: 344px;
  height: 49px;
  color: var(--welcome-hover-text-color);
  background: var(--welcome-background-color);
  border: 1px solid var(--loginform-border);
  padding-left: 18px;
  box-shadow: 0px 4px 16px var(--color-shadow);
  border-radius: 8px;
  transition: var(--hover-params);

  &:-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 50px white; /* цвет вашего фона */
    -webkit-text-fill-color: black; /* цвет текста */
  }

  &:focus,
  &:active {
    border: 1px solid var(--secondary-login-button-color);
  }

  @media (max-width: 767px) {
    width: 287px;
  }
`,O=r.button`
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
`,Q=r.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 14px;
`,Y=r.svg`
  position: absolute;
  top: 16px;
  right: 15px;
  width: 18px;
  height: 18px;
  stroke: var(--user-icon-stroke-color);
  stroke-width: 1.3px;
  opacity: 0.4;
  cursor: pointer;
  transition: opacity var(--hover-params);

  &:hover,
  &:focus {
    opacity: 1;
  }
`,p=r.div`
  position: absolute;
  bottom: -15px;
  right: 0;
  font-size: 11px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: -1%;
  opacity: 0.9;
  color: #fff;
`,h=r.div`
  position: relative;
`,G=y().shape({name:n().min(2,"Name must be at least 2 characters").max(32,"Name must be at most 32 characters").required("Name is required"),email:n().email("Invalid email").required("Email is required"),password:n().trim().min(8,"Password must be at least 8 characters").max(64,"Password must be at most 64 characters").required("Password is required").matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]+$/,"Password must contain at least one letter and at least one number")}),H=()=>{const t=w(),[s,l]=v.useState(!1),o=j({initialValues:{name:"",email:"",password:""},validationSchema:G,onSubmit:async i=>{try{await t(P({username:i.name,email:i.email,password:i.password})).unwrap(),x.success("You have registered successfully!"),o.resetForm()}catch{x.error("Oops, it's looks like something went wrong... Please, try again!")}}}),d=()=>{l(i=>!i)};return e.jsx(A,{children:e.jsxs(V,{children:[e.jsxs("form",{onSubmit:o.handleSubmit,children:[e.jsxs(D,{children:[e.jsx(W,{to:"/auth/register",underline:"none",style:{color:"#ffffff"},children:"Registration"}),e.jsx(Z,{to:"/auth/login",underline:"none",children:"Log In"})]}),e.jsxs(M,{children:[e.jsxs(h,{children:[e.jsx(c,{id:"name",name:"name",type:"text",onChange:o.handleChange,value:o.values.name,onBlur:o.handleBlur,placeholder:"Enter your name",autoFocus:!0}),o.touched.name&&o.errors.name?e.jsx(p,{children:o.errors.name}):null]}),e.jsxs(h,{children:[e.jsx(c,{id:"email",name:"email",type:"email",onChange:o.handleChange,value:o.values.email,onBlur:o.handleBlur,placeholder:"Enter your email"}),o.touched.email&&o.errors.email?e.jsx(p,{children:o.errors.email}):null]}),e.jsx(h,{children:e.jsxs(Q,{children:[e.jsx(c,{type:s?"text":"password",id:"password",name:"password",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.password,placeholder:"Create a password"}),e.jsxs(Y,{onClick:d,children:[" ",e.jsx("use",{href:b+"#icon-password-eye"})," "]}),o.touched.password&&o.errors.password?e.jsx(p,{children:o.errors.password}):null]})})]}),e.jsx(O,{type:"submit",children:"Register Now"})]}),e.jsx(k,{children:e.jsx(f,{})})]})})},_=()=>{const{id:t}=B();return e.jsx("div",{children:e.jsxs("div",{children:[t==="login"&&e.jsx(T,{}),t==="register"&&e.jsx(H,{})]})})};export{_ as default};
