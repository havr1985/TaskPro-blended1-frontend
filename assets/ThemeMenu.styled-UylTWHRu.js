import{u as o}from"./index-8T5es0Gk.js";const e=o.div`
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
`,t=o.div`
  position: relative;
`,a=o.ul`
  position: absolute;
  display: ${r=>r.open?"block":"none"};
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
`,n=o.li`
  padding: 5px 10px;
  cursor: pointer;
  color: var(--theme-switcher-dropdown-text-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: var(--theme-switcher-dropdown-hover-color);
  }

  ${r=>r.selected&&`
  color: var(--primary-button-color);
    `}
`,c=o.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: var(--secondary-button-color);
    transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`,p=o.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--primary-icon-stroke-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`;export{t as C,p as I,e as T,c as a,a as b,n as c};
