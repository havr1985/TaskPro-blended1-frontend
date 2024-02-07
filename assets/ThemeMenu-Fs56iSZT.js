import{u as o,b as d,h as g,r as l,a as k,s as v,j as t,i as c}from"./index-vxcfzsDt.js";import{i as T}from"./icons-iplVKqot.js";const b=o.div`
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
`,a=o.li`
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
`,y=()=>{const e=d(g),[r,s]=l.useState(e||"dark");return l.useLayoutEffect(()=>{document.documentElement.setAttribute("data-theme",r)},[r]),{theme:r,setTheme:s}},O=()=>{const e=k(),{theme:r,setTheme:s}=y(),n=d(v),[h,p]=l.useState(!1),i=()=>{p(!h)},m=()=>{s("light"),e(c({theme:"light"})),i()},x=()=>{s("dark"),e(c({theme:"dark"})),i()},u=()=>{s("violet"),e(c({theme:"violet"})),i()};return t.jsxs(b,{children:[t.jsxs(C,{onClick:i,children:["Theme",t.jsx(j,{children:t.jsx("use",{href:T+"#icon-chevron-down"})})]}),t.jsx(f,{theme:r,children:t.jsxs(w,{open:h,children:[t.jsx(a,{onClick:()=>m(),selected:n.theme==="light",children:"Light"}),t.jsx(a,{onClick:()=>x(),selected:n.theme==="dark",children:"Dark"}),t.jsx(a,{onClick:()=>u(),selected:n.theme==="violet",children:"Violet"})]})})]})};export{O as T};
