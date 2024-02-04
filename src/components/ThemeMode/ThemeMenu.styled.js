import styled from "styled-components";

export const ThemeContainer = styled.div`
  display: flex;
  justify-content: left;
  width: 100px;
`;

export const ThemeButton = styled.button`
  font-family: "Poppins";
  border: none;
  font-size: 14px;
  font-style: normal;
  text-transform: capitalize;
  font-weight: 500;
`;

export const ThemeButtonMenu = styled.ul`
  left: -8px;
  font-family: "Poppins";
  font-size: 14px;
  box-shadow: 0px 2px 4px rgba(17, 17, 17, 0.1);
  z-index: 3000;
  background-color: transparent;
  padding-top: 18px;
  padding-bottom: 18px;
  border: 1px solid;
  border-color: green;
  border-radius: 8px;
`;

export const ThemeButtonItem = styled.li`
  font-size: 14px;
  min-height: 21px;
  padding: 2px 44px 2px 18px;
  font-family: Poppins;
  color: red;
`;
