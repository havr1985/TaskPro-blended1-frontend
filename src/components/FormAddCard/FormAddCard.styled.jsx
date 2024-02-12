import styled from "styled-components";
import { Field, ErrorMessage } from "formik";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledTextArea = styled.textarea`
  padding: 14px 18px;
  resize: none;
  width: 100%;
  height: 154px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: var(--primary-card-background-color);
  color: var(--card-title-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 14px;
  font-weight: 400;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  &:focus {
    border-color: #bedbb0;
  }
`;

export const StyledRadioInput = styled(Field)`
  position: absolute;
  appearance: none;
  z-index: 5;
  top: 0;
  left: 0;
  border-radius: 50%;
  margin: 0;
  width: 14px;
  height: 14px;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:checked.blue {
    border: 1px solid #8fa1d0; /* Синій колір рамки при виборі */
  }

  &:checked.pink {
    border: 1px solid #e09cb5; /* Рожевий колір рамки при виборі */
  }

  &:checked.green {
    border: 1px solid #bedbb0; /* Зелений колір рамки при виборі */
  }

  &:checked.gray {
    border: 1px solid rgba(255, 255, 255, 0.3); /* Сірий колір рамки при виборі */
  }
`;

export const StyledDeadlineWrapper = styled.div`
  display: flex;
  gap: 4px;
  width: 200px;
  margin-bottom: 40px;
  align-items: center;
  cursor: pointer;
`;

export const StyledDeadlineTitle = styled.p`
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  margin-top: 14px;
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
`;

export const StyledLabelColor = styled.h2`
  margin: 0;
  margin-top: 14px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Poppins", sans-serif;
`;

export const StyledContainerRadioBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledSpan = styled.span`
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: transparent;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

  &.blue {
    background-color: #8fa1d0; /* Синій колір */
  }

  &.pink {
    background-color: #e09cb5; /* Рожевий колір */
  }

  &.green {
    background-color: #bedbb0; /* Зелений колір */
  }

  &.gray {
    background-color: #ffffff4d; /* Сірий колір */
  }
`;

export const StyledLabel = styled.label`
  position: relative;
  width: 14px;
  height: 14px;
  margin: 0;

  input[type="radio"]:checked + ${StyledSpan} {
    scale: 0.5;
  }
`;

export const StyledInput = styled.input`
  padding: 14px 18px;
  width: 100%;
  border-radius: 6px;
  height: 49px;
  border: 1px solid #ccc;
  background: var(--primary-card-background-color);
  color: var(--card-title-color);
  transition: var(--hover-paramas);
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  box-shadow: none;
  cursor: pointer;

  &:focus {
    border-color: #bedbb0;
  }
`;

export const TextDeadlain = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #bedbb0;
`;

export const ButtonPlus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  width: 28px;
  height: 28px;
  background-color: rgb(22, 22, 22);
  margin-right: 8px;
  padding: 7px;
`;

export const PlusIcon = styled.svg`
  width: 28px;
  height: 28px;
  stroke: rgb(255, 255, 255);
`;

export const AuthFormSubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 49px;
  padding: 14px;
  border: none;
  border-radius: 8px;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;

  color: #161616;
  background-color: rgb(190, 219, 176);

  transition: all 450ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
export const Error = styled(ErrorMessage)`
  position: absolute;
  padding-left: 8px;
  margin: 0;
  color: red;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`;

export const Container = styled.div`
  line-height: 0;
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 0;
`;
export const ErrorText = styled(ErrorMessage)`
  position: absolute;
  bottom: -12px;
  padding-left: 8px;
  margin: 0;
  color: red;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`;

export const IconChevron = styled.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: #bedbb0;
`;
