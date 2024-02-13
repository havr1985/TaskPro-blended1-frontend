import{u as r,b as g,r as w,j as e,N as h,Q as f,o as P,B as c,L as v,p as B,q as L}from"./index-hV3Eo9wO.js";import{i as b}from"./icons-I0FOP6sp.js";import{c as y,a as s,u as j}from"./index.esm-vz7Jw-Ej.js";/* empty css                      */const S=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: var(--welcomeBgColor);`,q=r.div`
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
`,x=r.div`
position: relative;
width: 287px;
height: 49px;
background: var(--welcome-background-color);
margin-bottom: 14px;
box-shadow: 0px 4px 16px var(--color-shadow);
border-radius: 8px;

@media (min-width: 767px) {
width: 344px;
} 
`,m=r.input`
  outline: none;
  overflow: hidden;
  transition: all 250ms ease;
  color: rgb(255, 255, 255);
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
`,I=r.button`
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
`,u=r.div`
position: absolute;
top: -15px;
right: 10px;
font-size: 14px;
font-weight: 400;
font-style: normal;
letter-spacing: -1%;
opacity: 0.9;
color: red;`,k=r.div`
position: fixed;
top: 20px;
right: 20px;
width: 200px;
`,N=y({email:s().required("This field is required"),password:s().required("This field is required")}),R=()=>{const t=g(),[n,a]=w.useState(!1),o=j({initialValues:{email:"",password:""},validationSchema:N,onSubmit:async i=>{try{await t(P({email:i.email,password:i.password})).unwrap(),o.resetForm()}catch{c.error("Invalid email or password. Please verify your login details and try again",{position:"top-right"})}}}),l=()=>{a(i=>!i)};return e.jsxs(S,{children:[e.jsxs(q,{children:[e.jsxs(E,{children:[e.jsx(h,{to:"/auth/register",children:"Registration"}),e.jsx(h,{to:"/auth/login",style:{color:"#ffffff",fontWeight:"bold"},children:"Log in"})]}),e.jsxs("form",{onSubmit:o.handleSubmit,children:[e.jsxs(x,{children:[e.jsx("label",{htmlFor:"email"}),e.jsx(m,{type:"email",placeholder:"Enter your email:",id:"email",name:"email",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.email}),o.touched.email&&o.errors.email?e.jsx(u,{children:o.errors.email}):null]}),e.jsxs(x,{children:[e.jsx("label",{htmlFor:"password"}),e.jsx(m,{type:n?"text":"password",placeholder:"Confirm a password:",id:"password",name:"password",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.password}),e.jsx(F,{type:"button",onClick:l,className:"toggle-password-button",style:{stroke:"rgb(255,255,255)",strokeWidth:"1.3px"},children:e.jsx("use",{href:b+"#icon-password-eye"})}),o.touched.password&&o.errors.password?e.jsx(u,{children:o.errors.password}):null]}),e.jsx(I,{type:"submit",children:"Log in Now"})]})]}),e.jsx(k,{children:e.jsx(f,{})})]})},z=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: var(--welcomeBgColor);
`,T=r.div`
  text-align: center;
  background: var(--user-icon-plus-stroke-color);
  border-radius: 8px;
  padding: 40px;
  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 424px;
    padding: 40px;
  }
`,W=r.div`
  display: flex;
  color: var(--loginform-text-color);
  @media (min-width: 767px) {
    width: 344px;
  }
`,$=r(v)`
  margin-right: 14px;
  display: inline-block;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: var(--color-white);
  text-decoration: none;
`,A=r(v)`
  left: 160px;
  top: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: var(--color-pale-white);
  text-decoration: none;
`,V=r.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 14px;
  position: relative;

  input {
    width: 344px;
    height: 49px;
    left: 40px;
    top: 107px;
    color: var(--welcome-hover-text-color);
    background: var(--welcome-background-color);
    // opacity: 0.4;
    border: 1px solid var(--loginform-border);
    padding-left: 18px;
    box-shadow: 0px 4px 16px var(--color-shadow);
    border-radius: 8px;
    @media screen and (max-width: 767px) {
      width: 287px;
    }
  }
`,Z=r.button`
  font-style: normal;
  font-family: Poppins;
  // font-weight: 500;
  font-weight: bold;
  font-size: 14px;
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
`,D=r.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 14px;
`,M=r.svg`
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
    stroke: #9dc888;
  }
`,d=r.div`
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
`,O=y().shape({name:s().min(2,"Name must be at least 2 characters").max(32,"Name must be at most 32 characters").required("Name is required"),email:s().email("Invalid email").required("Email is required"),password:s().trim().min(8,"Password must be at least 8 characters").max(64,"Password must be at most 64 characters").required("Password is required").matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]+$/,"Password must contain at least one letter and at least one number")}),Q=()=>{const t=g(),[n,a]=w.useState(!1),o=j({initialValues:{name:"",email:"",password:""},validationSchema:O,onSubmit:async i=>{try{await t(B({username:i.name,email:i.email,password:i.password})).unwrap(),c.success("You have registered successfully!"),o.resetForm()}catch{c.error("Oops, it's looks like something went wrong... Please, try again!")}}}),l=()=>{a(i=>!i)};return e.jsx(z,{children:e.jsxs(T,{children:[e.jsxs("form",{onSubmit:o.handleSubmit,children:[e.jsxs(W,{children:[e.jsx($,{to:"/auth/register",underline:"none",style:{color:"#ffffff",fontWeight:"bold"},children:"Registration"}),e.jsx(A,{to:"/auth/login",underline:"none",children:"Log In"})]}),e.jsxs(V,{children:[e.jsxs(p,{children:[e.jsx("input",{id:"name",name:"name",type:"text",onChange:o.handleChange,value:o.values.name,onBlur:o.handleBlur,placeholder:"Enter your name"}),o.touched.name&&o.errors.name?e.jsx(d,{children:o.errors.name}):null]}),e.jsxs(p,{children:[e.jsx("input",{id:"email",name:"email",type:"email",onChange:o.handleChange,value:o.values.email,onBlur:o.handleBlur,placeholder:"Enter your email"}),o.touched.email&&o.errors.email?e.jsx(d,{children:o.errors.email}):null]}),e.jsx(p,{children:e.jsxs(D,{children:[e.jsx("input",{type:n?"text":"password",id:"password",name:"password",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.password,placeholder:"Create a password"}),e.jsxs(M,{width:"18px",onClick:l,children:[" ",e.jsx("use",{href:b+"#icon-password-eye"})," "]}),o.touched.password&&o.errors.password?e.jsx(d,{children:o.errors.password}):null]})})]}),e.jsx(Z,{type:"submit",children:"Register Now"})]}),e.jsx(k,{children:e.jsx(f,{})})]})})},K=()=>{const{id:t}=L();return e.jsx("div",{children:e.jsxs("div",{children:[t==="login"&&e.jsx(R,{}),t==="register"&&e.jsx(Q,{})]})})};export{K as default};
