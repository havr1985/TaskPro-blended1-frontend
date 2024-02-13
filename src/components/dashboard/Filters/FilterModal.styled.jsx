import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
export const ModalFilter = styled.div`
  position: absolute;
  top: 60px;
  right: 24px;
  height: auto;
  padding: 24px;
  border: 1px solid var(--shared-input-border-color);
  box-shadow: 0px 4px 16px var(--color-shadow);
  border-radius: 8px;
  background-color: var(--primary-background-color);
  z-index: 1000;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
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
  margin-bottom: 14px;
`;

export const FilterLine = styled.div`
  width: 252px;
  height: 1px;
  background-color: var(--modal-filter-form-line);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 14px;
`;
export const LabelSchowAll = styled.div`
  display: flex;
  justify-content: space-between;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const StyledLabelTitle = styled.p`
  font-weight: 500;
  color: var(--modal-board-text);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const ShowAllBtn = styled.button`
  background-color: transparent;
  color: var(--screens-page-tutorial-text-color);
  font-size: 12px;
  text-decoration: underline;
  border: none;
  cursor: pointer;
  transition: var(--hover-params);
  &:hover {
    color: var(--modal-filters-text);
    font-weight: 500;
  }

  &:focus {
    color: var(--modal-filters-text);
    font-weight: 500;
  }

  &:active {
    color: var(--modal-filters-text);
    font-weight: 500;
  }
`;

export const StyledInputContainer = styled.div`
  margin-top: 16px;
  display: flex;
  width: 130px;
  gap: 8px;
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
  /* background-color:var(--welcome-title-color); */
  cursor: pointer;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

   &:checked.blue {
  border: 1px solid #8fa1d0; 
  };

  &:checked.pink {
    border: 1px solid #e09cb5; 
  };

  &:checked.green {
    border: 1px solid #bedbb0;
  };

  &:checked.gray {
    border: 1px solid rgba(#ffffff4d);
    
  }; 
  
  &:focus {  box-shadow: inset 0 0 0 2px var(--welcome-title-color);
  transform:scale: 0.5}; 
`
    
export const StyledSpan = styled.span`
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  z-index: 4; 
  
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

  &.blue {
    background-color: #8fa1d0; 
  };
  &.pink {
    background-color: #e09cb5; 
  };
  &.green {
    background-color: #bedbb0; 
  };
  &.gray {
    background-color: var(--filter-radio-gray-color);
  }; 

 
  &:hover {
   transform:scale: 0.5;
  };

  &:focus {
    transform:scale: 0.5;
  };

  &:active::after {
    transform:scale: 0.5; 
  }; 
`;

export const StyledColorText = styled.span`
  color: var(--screens-page-tutorial-text-color);
  font-size: 12px;
  margin-left: 8px;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: var(--primary-heading-color);
    font-weight: bold;
  }

  &:focus {
    color: var(--primary-heading-color);
    font-weight: bold;
  }

   &:active {
    color: var(--modal-filters-text);
    font-weight: bold;
  } 
`;

export const StyledLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;

  height: 18px;
  margin: 0;
  cursor: pointer;

  &:focus {
  transform:scale: 1.1;
  };

  &:hover {
  transform:scale: 1.1;
  };

  &:active {
  transform:scale: 1.1;
  };

  ${StyledRadioInput}[type="radio"]:checked  + ${StyledColorText} {color: var(--modal-filters-text);
  font-weight: 500;
  };
  ${StyledRadioInput}[type="radio"]:checked + ${StyledSpan} {
  scale: 0.5} 
  };
  
`;

