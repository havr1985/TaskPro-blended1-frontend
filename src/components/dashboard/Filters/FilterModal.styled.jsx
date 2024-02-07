import styled from "styled-components";

/* export const StyledLabelColor = styled.h2`
  margin: 0;
  margin-top: 14px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Poppins", sans-serif;
`; */

export const StyledColorBtn = styled.span`
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: transparent;

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

export const StyledColorText = styled.p`
  color: rgba(255,255,255,0.5);
  font-size: 12px;
  width: 110px;
  height: 12px; 
 

 /*  &.blue {
    background-color: var(); /* Синій колір */
  }

  &.pink {
    background-color: #e09cb5; /* Рожевий колір */
  }

  &.green {
    background-color: #bedbb0; /* Зелений колір */
  }

  &.gray {
    background-color: #ffffff4d; /* Сірий колір */
  } */
`;

export const StyledContainerBtn = styled.div`
  display: flex;
  flex-direction:column;
  align-items: start;
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 24px
`;

export const StyledInputContainer = styled.div`
  display: flex;
  width: 130px;
  gap: 8px;
`
export const StyledLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction:row;
  
  height: 18px;
  margin: 0;

  input[type="radio"]:checked + ${StyledColorBtn} {
    scale: 0.5;
  }
`;

export const StyledRadioInput = styled.input`
  position: absolute;
  appearance: none;
  z-index: 5;
  top: 0;
  left: 0;
  border-radius: 50%;
  margin: 0;
  width: 14px;
  height: 14px;
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
    border: 1px solid #ffffff4d; /* Сірий колір рамки при виборі */
  }
`;

export const StyledLabelTitle = styled.h2`
font-weight: 500;
color: var()
`
