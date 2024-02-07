import{u as r,a as m,r as u,j as e,N as h,k as b,L as g,m as y,n as j}from"./index-vxcfzsDt.js";import{i as w}from"./icons-iplVKqot.js";import{c as f,a as n,u as v}from"./index.esm-_0AAdnCr.js";const k=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: var(--welcomeBgColor);`,C=r.div`
display: flex;
min-width: 320px;

flex-direction: column;
align-items: center;
background: var(--user-icon-plus-stroke-color);
padding: 24px;
/* border: 1px solid var(--loginform-border); */
border-radius: 8px;

@media (min-width: 375px) {
    width: 335px
  }

@media (min-width: 768px) {
width: 424px;
padding: 40px;
}     
`,L=r.form`
  input {
    width: 287px;
    height: 49px;
    left: 40px;
    top: 107px;
    color: var(--welcome-hover-text-color);
    background: var(--welcome-background-color);
    margin-bottom: 14px;
    border: 1px solid var(--loginform-border);
    padding-left: 18px;
    box-shadow: 0px 4px 16px var(--color-shadow);
    border-radius: 8px;
    @media (min-width: 767px) {
      width: 344px;
    }
  }
`,B=r.nav`
display: flex;
width: 287px;
gap: 14px;
justify-content: start;
padding: 0;
margin-bottom: 40px;
color: var(--loginform-text-color);
@media (min-width: 767px) {
      width: 344px;
 }
`,S=r.div`
position: relative;
margin-bottom: 10px;`,P=r.svg`       
position: absolute;
top: 16px;
right: 15px;
width:18px;
height:18px;
background: transparent;
/* top: 50%;
transform: translateY(-50%); 
border: none;
 */
cursor: pointer;

stroke: var(--user-icon-stroke-color);
stroke-width: 1.3px; 
`,q=r.button`
  cursor: pointer;
  width: 287px;
  height: 49px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  background: var(--user-icon-plus-fill-color);
  transition: all 300ms;
  &:hover {
    background: var(--secondary-login-button-color);
    };
  @media (min-width: 767px) {
      width: 344px;
 }  
`;r.div`
color: var(--secondary-login-button-color);
`;const x=r.div`
position: absolute;
bottom: -15px;
right: 0;
font-size: 11px;
font-weight: 400;
font-style: normal;
letter-spacing: -1%;
opacity: 0.9;
color: #fff;`,F=f({email:n().required("This field is required"),password:n().required("This field is required")}),N=()=>{const i=m(),[s,a]=u.useState(!1),o=v({initialValues:{email:"",password:""},validationSchema:F,onSubmit:async t=>{try{await i(b({email:t.email,password:t.password})).unwrap(),o.resetForm()}catch(c){console.log(c)}}}),l=()=>{a(t=>!t)};return e.jsx(k,{children:e.jsxs(C,{children:[e.jsxs(B,{children:[e.jsx(h,{to:"/auth/register",children:"Registration"}),e.jsx(h,{to:"/auth/login",style:{color:"#ffffff",fontWeight:"bold"},children:"Log in"})]}),e.jsxs(L,{onSubmit:o.handleSubmit,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email"}),e.jsx("input",{type:"email",placeholder:"Enter your email:",id:"email",name:"email",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.email}),o.touched.email&&o.errors.email?e.jsx(x,{children:o.errors.email}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password"}),e.jsxs(S,{className:"password-input-container",children:[e.jsx("input",{type:s?"text":"password",placeholder:"Confirm a password:",id:"password",name:"password",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.password}),e.jsx(P,{type:"button",onClick:l,className:"toggle-password-button",style:{stroke:"rgb(255,255,255)",strokeWidth:"1.3px"},children:e.jsx("use",{href:w+"#icon-password-eye"})})]}),o.touched.password&&o.errors.password?e.jsx(x,{children:o.errors.password}):null]}),e.jsx(q,{type:"submit",children:"Log in Now"})]})]})})},E=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: var(--welcomeBgColor);
`,R=r.div`
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
`,I=r.div`
  display: flex;
  color: var(--loginform-text-color);
  @media (min-width: 767px) {
    width: 344px;
  }
`,T=r(g)`
  margin-right: 14px;
  display: inline-block;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: var(--color-white);
  text-decoration: none;
`,z=r(g)`
  left: 160px;
  top: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: var(--color-pale-white);
  text-decoration: none;
`,W=r.div`
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
`,V=r.button`
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
`,$=r.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 14px;
`,A=r.svg`
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
`,D=f().shape({name:n().min(2,"Name must be at least 2 characters").max(32,"Name must be at most 32 characters").required("Name is required"),email:n().email("Invalid email").required("Email is required"),password:n().min(8,"Password must be at least 8 characters").max(64,"Password must be at most 64 characters").required("Password is required")}),M=()=>{const i=m(),[s,a]=u.useState(!1),o=v({initialValues:{name:"",email:"",password:""},validationSchema:D,onSubmit:async t=>{try{await i(y({username:t.name,email:t.email,password:t.password})).unwrap(),o.resetForm()}catch{}}}),l=()=>{a(t=>!t)};return e.jsx(E,{children:e.jsx(R,{children:e.jsxs("form",{onSubmit:o.handleSubmit,children:[e.jsxs(I,{children:[e.jsx(T,{to:"/auth/register",underline:"none",style:{color:"#ffffff",fontWeight:"bold"},children:"Registration"}),e.jsx(z,{to:"/auth/login",underline:"none",children:"Log In"})]}),e.jsxs(W,{children:[e.jsxs(p,{children:[e.jsx("input",{id:"name",name:"name",type:"text",onChange:o.handleChange,value:o.values.name,onBlur:o.handleBlur,placeholder:"Enter your name"}),o.touched.name&&o.errors.name?e.jsx(d,{children:o.errors.name}):null]}),e.jsxs(p,{children:[e.jsx("input",{id:"email",name:"email",type:"email",onChange:o.handleChange,value:o.values.email,onBlur:o.handleBlur,placeholder:"Enter your email"}),o.touched.email&&o.errors.email?e.jsx(d,{children:o.errors.email}):null]}),e.jsx(p,{children:e.jsxs($,{children:[e.jsx("input",{type:s?"text":"password",id:"password",name:"password",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.password,placeholder:"Create a password"}),e.jsxs(A,{width:"18px",onClick:l,children:[" ",e.jsx("use",{href:w+"#icon-password-eye"})," "]}),o.touched.password&&o.errors.password?e.jsx(d,{children:o.errors.password}):null]})})]}),e.jsx(V,{type:"submit",children:"Register Now"})]})})})},J=()=>{const{id:i}=j();return e.jsx("div",{children:e.jsxs("div",{children:[i==="login"&&e.jsx(N,{}),i==="register"&&e.jsx(M,{})]})})};export{J as default};
