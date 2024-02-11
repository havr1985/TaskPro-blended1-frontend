import{u as o,b as h,s as p,r as l,a as k,j as t,m as c}from"./index-x7-UsSvc.js";import{i as v}from"./icons-iplVKqot.js";const b=o.div`
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
`,T=o.div`
  position: relative;
`,f=o.ul`
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
`,w=o.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: var(--secondary-button-color);
  }
`,C=o.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--primary-icon-stroke-color);
`,j=()=>{const e=h(p),[r,n]=l.useState(e.theme||"dark");return l.useLayoutEffect(()=>{document.documentElement.setAttribute("data-theme",r)},[r]),{theme:r,setTheme:n}},D=()=>{const e=k(),{theme:r,setTheme:n}=j(),s=h(p),[d,m]=l.useState(!1),i=()=>{m(!d)},x=()=>{n("light"),e(c({theme:"light"})),i()},u=()=>{n("dark"),e(c({theme:"dark"})),i()},g=()=>{n("violet"),e(c({theme:"violet"})),i()};return t.jsxs(b,{children:[t.jsxs(w,{onClick:i,children:["Theme",t.jsx(C,{children:t.jsx("use",{href:v+"#icon-chevron-down"})})]}),t.jsx(T,{theme:r,children:t.jsxs(f,{open:d,children:[t.jsx(a,{onClick:()=>x(),selected:s.theme==="light",children:"Light"}),t.jsx(a,{onClick:()=>u(),selected:s.theme==="dark",children:"Dark"}),t.jsx(a,{onClick:()=>g(),selected:s.theme==="violet",children:"Violet"})]})})]})};export{D as T};
