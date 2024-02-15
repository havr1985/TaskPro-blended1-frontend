import styled from "styled-components";

import { Field } from "formik";

export const TitleInput = styled(Field)`
  position: relative;
  width: 100%;
  height: 49px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: "Poppins";
  letter-spacing: -0.28px;

  background-color: var(--datepicker-background-color);
  border: 1px solid var(--shared-input-border-color);
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  outline: none;
  border-radius: 8px;

  opacity: 0.4;
  transition: var(--hover-params);

  color: var(--modal-title-color);

  &::placeholder {
    color: vat(--modal-title-color);
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`;

export const EditColumnFormSubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 8px;

  font-family: "Poppins";
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.28px;

  color: var(--modal-window-color);
  background-color: var(--plus-button-color);

  transition: var(--hover-params);

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
