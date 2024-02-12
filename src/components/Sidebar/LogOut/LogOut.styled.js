import styled from "styled-components";

export const ButtonLogOut = styled.button`
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
`;
