import styled from "styled-components";

export const StyledColorBtn = styled.span`
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: transparent;

  &.blue {
    background-color: var(--radio-label-background-color); 
  }

  &.pink {
    background-color: var(--radio-label-pink-color); 
  }

  &.green {
    background-color: var(--radio-label-green-color); 
  }

  &.gray {
    background-color: var(--radio-label-gray-color); 
  }
`;

export const StyledColorText = styled.p`
  color: rgba(255,255,255,0.5);
  font-size: 12px;
  width: 110px;
  height: 12px; 
 

  &:checked.blue {
    color: var(--modal-filters-text);
    font-weight:500;
  }

  &:checked.pink {
      color: var(--modal-filters-text);
    font-weight:500;
  }

  &:checked.green {
     color: var(--modal-filters-text);
    font-weight:500;
  }

  &:checked.gray {
       color: var(--modal-filters-text);
    font-weight:500;
  }
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

/*   input[type="radio"]:checked + ${StyledColorBtn} {
    scale: 0.5;
  } */
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
    border: 1px solid var(--radio-label-background-color); 
  }

  &:checked.pink {
    border: 1px solid var(--radio-label-pink-color); 
  }

  &:checked.green {
    border: 1px solid var(--radio-label-green-color); 
  }

  &:checked.gray {
    border: 1px solid var(--radio-label-gray-color); 
`;

export const StyledLabelTitle = styled.p`
font-weight: 500;
color: var(--modal-board-text)
`
export const ShowAllBtn = styled.button`
background-color: transparent;
color: var(--screens-page-tutorial-text-color);
font-size:12px;
text-decoration: underline;
border: none;
`
export const LabelSchowAll = styled.div`
display: flex; justify-content: space-between;
`