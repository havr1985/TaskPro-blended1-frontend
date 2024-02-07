import styled from "styled-components";

export const ModalBtn = styled.button`
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
`;
