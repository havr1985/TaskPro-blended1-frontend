import styled from "styled-components";

export const ThemeContainer = styled.div`
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
`;

export const CustomSelect = styled.div`
  position: relative;
`;

export const CustomOptionList = styled.ul`
  position: absolute;
  display: ${(props) => (props.open ? "block" : "none")};
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
`;

export const CustomOption = styled.li`
  padding: 5px 10px;
  cursor: pointer;
  color: var(--theme-switcher-dropdown-text-color);

  &:hover {
    color: var(--theme-switcher-dropdown-hover-color);
  }

  ${(props) =>
    props.selected &&
    `
  color: var(--primary-button-color);
    `}
`;

export const TheamBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: var(--secondary-button-color);
  }
`;

export const IconDown = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--primary-icon-stroke-color);
`;
