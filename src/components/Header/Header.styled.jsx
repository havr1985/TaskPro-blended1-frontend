import styled from "styled-components";

export const MainHeader = styled.header`
  height: 60px;
  background-color: var(--header-background-color);
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    padding: 0 24px;
  }
`;

export const MenuButtonContainer = styled.div`
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const ThemeAndUserContainer = styled.div`
  display: flex;
  column-gap: 14px;
  align-items: center;
  margin-left: auto;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--primary-heading-color);
  column-gap: 8px;
  cursor: pointer;
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const MenuIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: var(--primary-icon-stroke-color);
`;

export const UserIcon = styled.svg`
  width: 32px;
  height: 32px;
  stroke: var(--primary-icon-stroke-color);
  fill: transparent;
`;
