import styled from "styled-components";

export const CloseModalBtn = styled.button`
  background-color: transparent;
  color: var(--modal-close-icon-color);
  border: none;
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  padding: 0;
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
  color: var(--modal-title-color);
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: -2%;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-bottom: 24px;
`;
