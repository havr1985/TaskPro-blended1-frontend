import{u as o,b as g,h as k,r as s,a as v,j as t,i as l}from"./index-bQnKTMix.js";import{i as T}from"./icons-iplVKqot.js";const b=o.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  /* min-height: 68px; */
  /* padding-right: 24px; */
  color: var(--primary-heading-color);
  /* background-color: var(--header-background-color); */

  /* @media (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 1439px) {
    padding-left: 20px;
    padding-right: 32px;
  } */
`,f=o.div`
  position: relative;
`,w=o.ul`
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
`,d=o.li`
  padding: 5px 10px;
  cursor: pointer;
  color: var(--theme-switcher-dropdown-text-color);

  &:hover {
    color: var(--theme-switcher-dropdown-hover-color);
  }

  ${e=>e.selected&&`
  color: var(--primary-button-color);
    `}
`,C=o.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: var(--secondary-button-color);
  }
`,j=o.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--primary-icon-stroke-color);
`,y=()=>{const e=g(k),[r,i]=s.useState(e||"dark");return s.useLayoutEffect(()=>{document.documentElement.setAttribute("data-theme",r)},[r]),{theme:r,setTheme:i}},O=()=>{const e=v(),{theme:r,setTheme:i}=y(),[c,a]=s.useState("dark"),[h,p]=s.useState(!1),n=()=>{p(!h)},m=()=>{i("light"),a("light"),e(l("light")),n()},x=()=>{i("dark"),a("dark"),e(l("dark")),n()},u=()=>{i("violet"),a("violet"),e(l("violet")),n()};return t.jsxs(b,{children:[t.jsxs(C,{onClick:n,children:["Theme",t.jsx(j,{children:t.jsx("use",{href:T+"#icon-chevron-down"})})]}),t.jsx(f,{theme:r,children:t.jsxs(w,{open:h,children:[t.jsx(d,{onClick:()=>m(),selected:c==="light",children:"Light"}),t.jsx(d,{onClick:()=>x(),selected:c==="dark",children:"Dark"}),t.jsx(d,{onClick:()=>u(),selected:c==="violet",children:"Violet"})]})})]})};export{O as T};
