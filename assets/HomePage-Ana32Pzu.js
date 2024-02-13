import{u as t,a as z,s as L,r as b,b as y,j as e,c as E,d as le,B,e as ce,f as V,g as de,N as Q,h as pe,i as P,k as ue,l as be,m as xe,n as he,C as me,O as ge}from"./index-5DT8t-Bj.js";import{i as w}from"./icons-I0FOP6sp.js";import{S as D,a as X,M as Y,F as _,E as G,T as J,b as I,R as M,I as K,c as Z,D as N,B as ee,C as te,A as oe,d as ie,P as re,s as ae,u as H,O as ne,e as we,H as fe,f as ve}from"./HomePage.styled-BHzr51fQ.js";import{c as A,a as q,F as se,u as je}from"./index.esm-3O8HB0Z2.js";/* empty css                      */const ye=t.header`
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
`,ke=t.div`
  @media (min-width: 1440px) {
    display: none;
  }
`,_e=t.div`
  display: flex;
  column-gap: 14px;
  align-items: center;
  margin-left: auto;
`,ze=t.div`
  display: flex;
  align-items: center;
  color: var(--primary-heading-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  column-gap: 8px;
  cursor: pointer;
`,Ce=t.button`
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
`,Te=t.svg`
  width: 32px;
  height: 32px;
  stroke: var(--primary-icon-stroke-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  fill: transparent;
`,Se=t.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
`,Ie=t.p`
  &:hover {
    color: var(--secondary-button-color);
  }
`,Me=t.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  /* min-height: 68px; */
  /* padding-right: 24px; */
  color: var(--primary-heading-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  /* background-color: var(--header-background-color); */

  /* @media (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 1439px) {
    padding-left: 20px;
    padding-right: 32px;
  } */
`,Ne=t.div`
  position: relative;
`,qe=t.ul`
  position: absolute;
  display: ${o=>o.open?"block":"none"};
  top: 20px;
  left: -105px;
  margin: 0;
  padding: 18px 44px 18px 18px;
  list-style: none;
  border: solid 1px var(--theme-switcher-dropdown-border-color);
  border-radius: 8px;
  background-color: var(--header-background-color);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
`,O=t.li`
  padding: 5px 10px;
  cursor: pointer;
  color: var(--theme-switcher-dropdown-text-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: var(--theme-switcher-dropdown-hover-color);
  }

  ${o=>o.selected&&`
  color: var(--primary-button-color);
    `}
`,Le=t.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: var(--secondary-button-color);
    transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`,De=t.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--primary-icon-stroke-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`,Ee=()=>{const o=z(L),[i,r]=b.useState(o.theme||"dark");return b.useLayoutEffect(()=>{document.documentElement.setAttribute("data-theme",i)},[i]),{theme:i,setTheme:r}},Oe=()=>{const o=y(),{theme:i,setTheme:r}=Ee(),a=z(L),[d,p]=b.useState(!1),l=()=>{p(!d)},x=()=>{r("light"),o(E({theme:"light"})),l()},h=()=>{r("dark"),o(E({theme:"dark"})),l()},m=()=>{r("violet"),o(E({theme:"violet"})),l()};return e.jsxs(Me,{children:[e.jsxs(Le,{onClick:l,children:["Theme",e.jsx(De,{children:e.jsx("use",{href:w+"#icon-chevron-down"})})]}),e.jsx(Ne,{theme:i,children:e.jsxs(qe,{open:d,children:[e.jsx(O,{onClick:()=>x(),selected:a.theme==="light",children:"Light"}),e.jsx(O,{onClick:()=>h(),selected:a.theme==="dark",children:"Dark"}),e.jsx(O,{onClick:()=>m(),selected:a.theme==="violet",children:"Violet"})]})})]})},$e=t.button`
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
`,Ue=({children:o})=>e.jsx($e,{type:"submit",children:o}),We=t.img`
  height: 68px;
  width: 68px;
  border-radius: 8px;
`,Pe=t.label`
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
`,He=t.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`,Ae=t.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`,Fe=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;
  overflow-x: hidden;
`,$=t.input`
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
`,Re=t.svg`
  height: 68px;
  width: 68px;
  border-radius: 8px;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: var(--sidebar-help-backgound-color);
  fill: white;
`,Ve=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`,Qe=t.svg`
  position: absolute;
  right: 18px;
  top: 14px;
  stroke: white;
  cursor: pointer;
  user-select: none;
`,Xe=t.div`
  width: 100%;
  position: relative;
`,Ye=({isModalOpen:o,modalStateSwapper:i})=>{const r=y(),[a,d]=b.useState("password"),{email:p,username:l,avatarURL:x}=z(L),h=()=>{d(u=>u==="password"?"text":"password")},m=u=>{const f=u.target.files[0],n=new FormData;n.append("avatar",f),r(le(n))},v=u=>{u.preventDefault();const f={},n=[...u.target.elements].slice(0,3);if(n[2].value!==""&&n[2].value.length<8)return n[2].value.split("").includes("")?B.error("Wrong password, it must be without spaces"):B.error("Wrong password, it must be at least 8 symbols!");if(n[2].value!==""&&n[2].value.length>8&&n[2].value.split("").includes(" "))return B.error("Wrong password, it must be without spaces");n.filter(({value:j})=>j).forEach(({name:j,value:s})=>f[j]=s),r(ce(f)),i()};return e.jsxs(D,{modalIsOpen:o,closeModal:i,title:"Edit profile",maxWidth:"400px",children:[e.jsxs(He,{children:[x?e.jsx(We,{src:x||"https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",alt:"avatar"}):e.jsx("div",{children:e.jsx(Re,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${w}#icon-user`})})}),e.jsx(Ae,{onChange:m,type:"file",id:"input__file"}),e.jsx(Pe,{htmlFor:"input__file",children:"+"})]}),e.jsxs(Fe,{autoComplete:"false",onSubmit:u=>v(u),children:[e.jsxs(Ve,{children:[e.jsx($,{autoComplete:"off",name:"username",minLength:2,maxLength:32,placeholder:"Fullname",defaultValue:l||null,type:"text"}),e.jsx($,{autoComplete:"off",name:"email",placeholder:"Email",defaultValue:p||null,type:"email"}),e.jsxs(Xe,{children:[e.jsx($,{name:"password",placeholder:"Password",type:a,autoComplete:"off"}),e.jsx(Qe,{onClick:()=>h(),className:"",width:"22px",height:"22px",children:e.jsx("use",{href:w+"#icon-password-eye"})})]})]}),e.jsx(Ue,{children:"Send"})]})]})},Ge=({openSideBar:o})=>{const[i,r]=b.useState(!1),{username:a,avatarURL:d}=z(L),p=()=>{r(l=>!l)};return e.jsxs(ye,{children:[e.jsx(ke,{children:e.jsx(Ce,{type:"button",onClick:o,children:e.jsx(Be,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${w}#icon-burger-menu`})})})}),e.jsxs(_e,{children:[e.jsx(Oe,{}),e.jsxs(ze,{onClick:()=>p(),children:[e.jsx(Ie,{children:a}),d?e.jsx(Se,{src:d,alt:"avatar",width:"32px",height:"32px"}):e.jsx(Te,{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${w}#icon-user`})})]})]}),e.jsx(Ye,{isModalOpen:i,modalStateSwapper:p})]})},Je=t.div`
  width: 260px;

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
    height: 100vh;
    padding: 14px 14px 24px 14px;
  }

  &.active {
    left: 0;
  }
`,Ke=t.div`
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

    margin: 0 -14px;
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: var(--tracking-area-color);
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scroll-bar-color);
    border-radius: 12px;
    border: 12px solid var(--scroll-bar-color);
  }
`,Ze=t.div`
  margin-top: 40px;
`,et=t.div`
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
`,tt=({icon:o})=>e.jsxs(et,{children:[e.jsx("div",{className:"iconBg",children:e.jsx("svg",{className:"iconLightning",width:"12px",height:"16px",children:e.jsx("use",{href:`${o}#icon-task-pro-lightning`})})}),e.jsx("span",{className:"logoText",children:"Task Pro"})]}),W=[{"url-mob":"no background","url-mobx2":"no background","url-tab":"no background","url-tabx2":"no background","url-desk":"no background","url-deskx2":"no background"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-15-mobile-webp-375x812_repmix.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752161/bg-15-mobile-webp-750x1624_2x_wq8hi7.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752229/bg-13-tablet-webp-768x956_ra31gx.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752229/bg-13-tablet-webp-1536x1912_2x_aee2rk.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752481/bg-09-desk-webp-1180x770_xwfemc.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752486/bg-09-desk-webp-2360x1540_2x_vigtvr.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752159/bg-11-mobile-webp-375x812_ma6ewq.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752159/bg-11-mobile-webp-750x1624_2x_mtzwzb.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-11-tablet-webp-768x956_iijpzb.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-11-tablet-webp-1536x1912_2x_krywfq.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752473/bg-02-desk-webp-1180x770_ss7k63.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752473/bg-02-desk-webp-2360x1540_2x_qjzumy.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-08-mobile-webp-375x812_o5fini.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-08-mobile-webp-750x1624_2x_wtgyts.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752226/bg-08-tablet-webp-768x956_o47udx.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-08-tablet-webp-1536x1912_2x_xoqfag.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752472/bg-01-desk-webp-1180x770_uuvvlv.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752472/bg-01-desk-webp-2360x1540_2x_dcvolo.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-06-mobile-webp-375x812_vuozes.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-06-mobile-webp-750x1624_2x_kaqfp8.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-06-tablet-webp-768x956_obho6i.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-06-tablet-webp-1536x1912_2x_riwrw6.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752476/bg-05-desk-webp-1180x770_tnpxyr.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752476/bg-05-desk-webp-2360x1540_2x_xn4ddt.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751661/bg-01-mobile-webp-375x812_qafbbj.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751686/bg-01-mobile-webp-750x1624_2x_crn0ka.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-03-tablet-webp-768x956_nlerc1.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-03-tablet-webp-1536x1912_2x_pt9vh8.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752477/bg-07-desk-webp-1180x770_y7dfhr.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752478/bg-07-desk-webp-2360x1540_2x_qpbbcp.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-14-mobile-webp-375x812_nlmg6q.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-14-mobile-webp-750x1624_2x_p65fmf.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752229/bg-14-tablet-webp-768x956_sxcqkp.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752230/bg-14-tablet-webp-1536x1912_2x_ki6xzm.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752481/bg-10-desk-webp-1180x770_gdtqq3.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752481/bg-10-desk-webp-2360x1540_2x_fvafnk.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752159/bg-12-mobile-webp-375x812_b1dng1.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-12-mobile-webp-750x1624_2x_dgjf9m.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-12-tablet-webp-768x956_r24qhb.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752228/bg-12-tablet-webp-1536x1912_2x_deydvi.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752474/bg-04-desk-webp-1180x770_oc952g.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752474/bg-04-desk-webp-2360x1540_2x_ip9ef6.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-09-mobile-webp-375x812_n6dcut.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-09-mobile-webp-750x1624_2x_lnaw4u.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752226/bg-09-tablet-webp-768x956_zrjq42.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752227/bg-09-tablet-webp-1536x1912_2x_q3oqkx.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752473/bg-03-desk-webp-1180x770_a3v6ig.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752473/bg-03-desk-webp-2360x1540_2x_ezttrg.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-05-mobile-webp-375x812_wjckxc.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-05-mobile-webp-750x1624_2x_u7i1zv.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752224/bg-05-tablet-webp-768x956_mttcpy.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-05-tablet-webp-1536x1912_2x_aanq2f.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752477/bg-06-desk-webp-1180x770_vijxij.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752478/bg-06-desk-webp-2360x1540_2x_quvrxa.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751693/bg-02-mobile-webp-375x812_qbb0tm.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751707/bg-02-mobile-webp-750x1624_2x_lbzywk.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-02-tablet-webp-768x956_lqef5o.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-02-tablet-webp-1536x1912_2x_pqutsl.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752478/bg-08-desk-webp-1180x770_ipsyjr.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752479/bg-08-desk-webp-2360x1540_2x_usw7tr.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-04-mobile-webp-375x812_h7gvst.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-04-mobile-webp-750x1624_2x_dxjbi9.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-04-tablet-webp-768x956_nseddn.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752224/bg-04-tablet-webp-1536x1912_2x_hv5zmm.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752485/bg-14-desk-webp-1180x770_se11ha.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752486/bg-14-desk-webp-2360x1540_2x_wwezvb.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-10-mobile-webp-375x812_v9ejsm.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-10-mobile-webp-750x1624_2x_pdpbxo.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752227/bg-10-tablet-webp-768x956_xqotyl.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752227/bg-10-tablet-webp-1536x1912_2x_katv7y.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752482/bg-12-desk-webp-1180x770_nsnpad.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752483/bg-12-desk-webp-2360x1540_2x_mvy42x.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752157/bg-07-mobile-webp-375x812_lxxlvy.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752158/bg-07-mobile-webp-750x1624_2x_wirh8l.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-07-tablet-webp-768x956_cbrrv0.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752226/bg-07-tablet-webp-1536x1912_2x_y6qgjq.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752484/bg-13-desk-webp-1180x770_lgtkch.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752485/bg-13-desk-webp-2360x1540_2x_hxhizt.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752159/bg-13-mobile-webp-375x812_diuoux.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752160/bg-13-mobile-webp-750x1624_2x_dnftko.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752230/bg-15-tablet-webp-768x956_noua1f.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752231/bg-15-tablet-webp-1536x1912_2x_usxrol.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752481/bg-11-desk-webp-1180x770_rldph5.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752482/bg-11-desk-webp-2360x1540_2x_aboou2.webp"},{"url-mob":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751731/bg-03-mobile-webp-375x812_ehkzgh.webp","url-mobx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707751736/bg-03-mobile-webp-750x1624_2x_fuuz9t.webp","url-tab":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752223/bg-01-tablet-webp-768x956_tfohwn.webp","url-tabx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752225/bg-01-tablet-webp-1536x1912_2x_pxda7s.webp","url-desk":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752486/bg-15-desk-webp-1180x770_qzywxu.webp","url-deskx2":"https://res.cloudinary.com/dfcp8j8nu/image/upload/v1707752486/bg-15-desk-webp-2360x1540_2x_rqunnb.webp"}],F=["#icon-board-square","#icon-board-star","#icon-board-loading","#icon-board-puzzle","#icon-board-container","#icon-board-lightning","#icon-board-colors","#icon-board-hexagon"],ot=A().shape({title:q().required("Title is required!")}),it=({isModalOpen:o,modalStateSwapper:i,gallery:r})=>{const a=y(),[d,p]=b.useState(F[0]),[l,x]=b.useState(W[0].url),h={title:"",icon:d,bg:l},m=V(),v=n=>{n.preventDefault();const g=n.target.elements[0].value;if(!g){B.error("Title is required!");return}const j={title:g,icon:d,backgroundURL:l};i(),a(de(j)),m(`/home/${j.title}`)},u=n=>{x(n)},f=n=>{p(n)};return e.jsx(D,{modalIsOpen:o,closeModal:i,title:"New board",maxWidth:"350px",children:e.jsx(X,{children:e.jsx(se,{initialValues:h,validationSchema:ot,children:e.jsxs(Y,{onSubmit:n=>v(n),children:[e.jsxs(_,{children:[e.jsx(G,{name:"title",component:"div"}),e.jsx(J,{type:"text",id:"title",name:"title",placeholder:"Title",autoComplete:"off"})]}),e.jsxs(_,{children:[e.jsx(I,{children:"Icons "}),e.jsx(M,{children:F.map((n,g)=>e.jsxs(K,{children:[e.jsx(Z,{className:d===n?"active":"",onClick:()=>f(n),width:18,height:18,children:e.jsx("use",{href:w+n,width:18,height:18})}),e.jsx(N,{type:"radio",value:n,name:"icon"})]},g))})]}),e.jsxs(_,{children:[e.jsx(I,{children:"Backgrounds "}),e.jsx(M,{children:W.map((n,g)=>e.jsxs("label",{children:[e.jsx(ee,{onClick:()=>u(n[r]),className:l===n[r]?"active":"",children:n[r]!==""&&e.jsx(te,{$bcgurl:n[r],onClick:()=>u(n[r]),className:l===n[r]?"active":""})}),e.jsx(N,{type:"radio",value:n[r],name:"bg"})]},g))})]}),e.jsxs(oe,{type:"submit",children:[e.jsx(ie,{children:e.jsx(re,{children:e.jsx("use",{href:w+"#icon-plus"})})}),"Create"]})]})})})})},rt=t.ul`
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
`,at=t.li`
  display: flex;
  align-items: center;

  height: 61px;
  cursor: pointer;

  &.active {
    color: var(--secondary-text-sidebar-color);
    background-color: var(--sidebar-help-backgound-color);
  }

  &.active .iconActive {
    stroke: var(--secondary-text-sidebar-color);
  }

  &.active::after {
    content: "";
    position: absolute;

    right: -1px;

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
`,nt=t(Q)`
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,st=t(Q)`
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;
`,lt=t.div`
  display: flex;
  align-items: center;
  margin-left: 24px;

  @media (max-width: 767px) {
    margin-left: 14px;
  }
`,ct=t.div`
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
      visibility: hidden;
    }

    &.tooltip:hover::after {
      opacity: 1;
      visibility: visible;
    }
  }
`,dt=t.div`
  width: 122px;
  height: 21px;
`,pt=t.p`
  color: inherit;

  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,U=t.svg`
  fill: transparent;
`,ut=t.div`
  display: flex;
  align-items: center;

  margin-right: 24px;

  .iconBoard.iconEdit:hover {
    stroke: var(--primary-button-color-sidebar);
    transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.1);
    animation: pulse 1s infinite alternate;
  }

  @media screen and (max-width: 767px) {
    margin-right: 14px;
  }
`,bt=t.button`
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
`,xt=["#icon-board-square","#icon-board-star","#icon-board-loading","#icon-board-puzzle","#icon-board-container","#icon-board-lightning","#icon-board-colors","#icon-board-hexagon"],ht=A().shape({title:q().required("Title is required!")}),mt=({isModalOpen:o,modalStateSwapper:i,gallery:r})=>{const a=y(),d=z(ae),{_id:p,title:l,icon:x,backgroundURL:h}=d.result,[m,v]=b.useState(h),[u,f]=b.useState(x),n=V(),g={title:l,icon:x,backgroundURL:h},j=c=>{c.preventDefault();const k=c.target.elements[0].value;if(!c.target.elements[0].value){B.error("Title is required!");return}const T={dashboardId:p,title:k,icon:u,backgroundURL:m};i(),a(pe(T)),a(P(p)),n(`/home/${k}`)},s=c=>{v(c)},C=c=>{f(c)};return e.jsx(D,{modalIsOpen:o,closeModal:i,title:"Edit board",maxWidth:"350px",children:e.jsx(X,{children:e.jsx(se,{initialValues:g,validationSchema:ht,children:e.jsxs(Y,{onSubmit:c=>j(c),children:[e.jsxs(_,{children:[e.jsx(G,{name:"title",component:"div"}),e.jsx(J,{type:"text",id:"title",defaultValue:l,name:"title",placeholder:"Title",autoComplete:"off"})]}),e.jsxs(_,{children:[e.jsx(I,{children:"Icons "}),e.jsx(M,{children:xt.map((c,k)=>e.jsxs(K,{children:[e.jsx(Z,{className:u===c?"active":"",onClick:()=>C(c),width:18,height:18,children:e.jsx("use",{href:w+c,width:18,height:18})}),e.jsx(N,{type:"radio",value:c,name:"icon"})]},k))})]}),e.jsxs(_,{children:[e.jsx(I,{children:"Backgraunds "}),e.jsx(M,{children:W.map((c,k)=>e.jsxs("label",{children:[e.jsx(ee,{onClick:()=>s(c[r]),className:m===c[r]?"active":"",children:c[r]!==""&&e.jsx(te,{$bcgurl:c[r],onClick:()=>s(c[r]),className:m===c[r]?"active":""})}),e.jsx(N,{type:"radio",value:c[r],name:"bg"})]},k))})]}),e.jsxs(oe,{type:"submit",children:[e.jsx(ie,{children:e.jsx(re,{children:e.jsx("use",{href:w+"#icon-plus"})})}),"Edit"]})]})})})})},gt=({icon:o,boards:i,selectedItem:r,choice:a,setUserBoards:d,isModalOpen:p,closeModal:l,setSelectedItemId:x,gallery:h,viewport:m})=>{const[v,u]=b.useState(!1),f=()=>{u(s=>!s)},n=s=>{let C="",c="";return i.forEach((k,S)=>{if(k._id===s){const T=i[S+1]?i[S+1]:i[S-1];T&&(C=`/home/${T.title}`,c=T._id)}}),{path:C,id:c}},g=y(),j=s=>{if(s){const C=g(P(n(s).id));x(C.arg)}g(ue(s))};return e.jsxs(e.Fragment,{children:[i.length!==0&&e.jsx(rt,{children:i.map(s=>e.jsxs(at,{onClick:()=>a(s),className:r._id===s._id?"active":"",children:[e.jsx(nt,{to:`/home/${s.title}`,children:e.jsxs(lt,{children:[e.jsx(U,{className:"iconBoard iconActive",width:"18px",height:"18px",children:e.jsx("use",{href:`${o}${s.icon}`})}),e.jsx(ct,{className:s.title.length>20&&"tooltip","data-tooltip":`${s.title}`,children:e.jsx(dt,{children:e.jsx(pt,{children:s.title})})})]})}),r._id===s._id&&e.jsxs(ut,{children:[e.jsx(bt,{onClick:()=>{m({width:window.innerWidth,height:window.innerHeight}),f()},type:"button",children:e.jsx(U,{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${o}#icon-pencil`})})}),e.jsx(st,{to:n(s._id).path,onClick:()=>j(s._id),type:"button",children:e.jsx(U,{className:"iconBoard iconEdit",width:"16px",height:"16px",children:e.jsx("use",{href:`${o}#icon-trash`})})})]})]},s._id))}),e.jsx(it,{setUserBoards:d,isModalOpen:p,modalStateSwapper:l,gallery:h}),v&&e.jsx(mt,{isModalOpen:v,modalStateSwapper:f,gallery:h})]})},wt="/TaskPro-blended1-frontend/assets/plant-92SCXr2v.png",ft=t.div`
  width: 212px;
  height: 272px;

  padding: 20px;
  margin-bottom: 24px;

  border-radius: 8px;
  background-color: var(--sidebar-help-backgound-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  @media (max-width: 767px) {
    width: 197px;
    height: 238px;

    padding: 14px;
  }
  .img-plant {
    margin-bottom: 14px;
  }
`,vt=t.p`
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
`,jt=t.button`
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
`,yt=t.input`
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
`,R=t.div`
  padding-left: 14px;
  color: #c04d4d;
  font-size: 18px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`,kt=t.form`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`,_t=t.textarea`
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
`,zt=t.button`
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
`,Ct=A().shape({email:q().email("Invalid email").required("Email is required"),comment:q().min(50,"Must be at least 50 characters long").required()}),Bt=({isModalOpen:o,modalStateSwapper:i})=>{const r=y(),a=je({initialValues:{email:"",comment:""},validationSchema:Ct,onSubmit:async d=>{try{await r(be({email:d.email,comment:d.comment})).unwrap()&&B.success("Your message was successfully sent"),i(),a.resetForm()}catch(p){console.log(p)}}});return e.jsx(D,{modalIsOpen:o,closeModal:i,title:"Need help",maxWidth:"335px",children:e.jsxs(kt,{onSubmit:a.handleSubmit,children:[e.jsxs(_,{children:[e.jsx(yt,{type:"text",name:"email",placeholder:"Email address",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.email,autoComplete:"off"}),a.touched.email&&a.errors.email?e.jsx(R,{children:a.errors.email}):null]}),e.jsxs(_,{children:[e.jsx(_t,{as:"textarea",rows:"6",name:"comment",placeholder:"Comment",autoComplete:"off",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.comment}),a.touched.comment&&a.errors.comment?e.jsx(R,{children:a.errors.comment}):null]}),e.jsx(zt,{type:"submit",children:"Submit"})]})})},Tt=({icon:o})=>{const{isModalOpen:i,openModal:r,closeModal:a}=H();return e.jsxs(e.Fragment,{children:[e.jsxs(ft,{children:[e.jsx("img",{className:"img-plant",src:wt,alt:"Happy plant"}),e.jsxs(vt,{children:["If you need help with ",e.jsx("span",{className:"appName",children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),e.jsxs(jt,{type:"submit",onClick:r,children:[e.jsx("svg",{className:"iconHelp",width:"20px",height:"20px",children:e.jsx("use",{href:`${o}#icon-help-circle`})}),e.jsx("span",{children:"Need help?"})]})]}),e.jsx(ne,{onClick:a,className:i===!0&&"active"}),e.jsx(Bt,{modalStateSwapper:a,isModalOpen:i})]})},St=t.button`
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
`,It=({icon:o})=>{const i=y();return e.jsxs(St,{onClick:()=>i(xe()),type:"submit",children:[e.jsx("svg",{className:"iconLogOut",width:"32px",height:"32px",children:e.jsx("use",{href:`${o}#icon-logout`})}),e.jsx("span",{children:"Log out"})]})},Mt=t.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;

	margin-bottom: 8px;

	color: var(--sidebar-icon-edit-stroke-color);
`,Nt=t.div`
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
`,qt=t.button`
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
`,Lt=({openModal:o,icon:i,viewport:r})=>e.jsxs(e.Fragment,{children:[e.jsx(Mt,{children:"My boards"}),e.jsxs(Nt,{children:[e.jsx("p",{className:"createText",children:"Create a new board"}),e.jsx(qt,{onClick:()=>{r({width:window.screen.width,height:window.screen.height}),o()},type:"submit",children:e.jsx("svg",{className:"iconCreateBoard",width:"20px",height:"20px",children:e.jsx("use",{href:`${i}#icon-plus`})})})]})]}),Dt=[{width:372,height:812,deviceType:"url-mob"},{width:768,height:956,deviceType:"url-tab"},{width:1180,height:770,deviceType:"url-desk"}],Et=[{width:750,height:1624,deviceType:"url-mobx2"},{width:1536,height:1912,deviceType:"url-tabx2"},{width:2360,height:1540,deviceType:"url-deskx2"}],Ot=()=>{const[o,i]=b.useState(null);return{currentImage:o,selectImage:a=>{console.log(a);let p=window.devicePixelRatio===1?Dt:Et,l=1/0,x=o;for(const h of p){const m=Math.abs(a.width-h.width),v=Math.abs(a.height-h.height),u=m+v;u<l&&(l=u,x=h)}i(x.deviceType)}}},$t=({isOpen:o})=>{const[i,r]=b.useState(""),[a,d]=b.useState(""),p=z(we),{result:l}=z(ae),[x,h]=b.useState([]),m=y(),{isModalOpen:v,openModal:u,closeModal:f}=H();b.useEffect(()=>{h(p)},[p]),b.useEffect(()=>{r(l??"")},[l]);const n=s=>{i._id!==s._id&&a!==s._id&&(m(P(s._id)),d(s._id))},{selectImage:g,currentImage:j}=Ot();return e.jsxs(Je,{className:o===!0&&"active",children:[e.jsxs(e.Fragment,{children:[e.jsx(tt,{icon:w}),e.jsx(Lt,{openModal:u,viewport:g,icon:w}),e.jsx(Ke,{children:e.jsx(gt,{icon:w,boards:x,choice:n,selectedItem:i,isModalOpen:v,closeModal:f,setSelectedItemId:d,gallery:j,viewport:g})})]}),e.jsxs(Ze,{children:[e.jsx(Tt,{icon:w}),e.jsx(It,{icon:w})]})]})},Ft=()=>{const o=y(),{isModalOpen:i,openModal:r,closeModal:a}=H();return b.useEffect(()=>{o(he())},[o]),e.jsx(me,{children:e.jsxs(fe,{children:[e.jsx($t,{isOpen:i}),e.jsxs(ve,{children:[e.jsx(Ge,{openSideBar:r}),e.jsx(b.Suspense,{fallback:e.jsx("div",{children:"Loading"}),children:e.jsx(ge,{})})]}),e.jsx(ne,{onClick:a,className:i===!0&&"active"})]})})};export{Ft as default};
