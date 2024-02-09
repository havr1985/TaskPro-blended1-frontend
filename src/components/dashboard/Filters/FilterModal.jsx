import { useState } from 'react';
import { CloseModalBtn } from "../../../shared/SharedModal/SharedModal.styled";

import {StyledColorBtn, StyledColorText, StyledContainerBtn, StyledInputContainer, StyledLabel, StyledRadioInput, StyledLabelTitle, ShowAllBtn, LabelSchowAll, FilterLine, ModalTitle, ModalFilter} from "./FilterModal.styled"

export const FilterModal = ({ isOpen, onClose }) => {
 
  const [selectedLabel, setSelectedLabel] = useState('');
 if (!isOpen) return null;
  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedLabel(value);
    onClose()
  };
  
  return (
   
    <ModalFilter>
      <CloseModalBtn onClick={onClose}>✕</CloseModalBtn>
     
      <ModalTitle>Filters</ModalTitle>
      <FilterLine/>
      <LabelSchowAll>
      <StyledLabelTitle>Label color</StyledLabelTitle>
      <ShowAllBtn>Show all</ShowAllBtn>
      </LabelSchowAll>
            <StyledContainerBtn>
               <StyledInputContainer>   
                  <StyledLabel>
                     <StyledRadioInput
                     type="radio"
                     name="radio"
                     value="gray"
                     className="gray"
                     checked={selectedLabel === "gray"}
                     onChange={handleOptionChange}
                    />
                      <StyledColorBtn className="gray"></StyledColorBtn>
                  </StyledLabel>  
                  <StyledColorText className="gray"> Without priority </StyledColorText>  
                </StyledInputContainer>  
               <StyledInputContainer>
                <StyledLabel>
                  <StyledRadioInput
                    type="radio"
                    name="radio"
                    value="blue"
                    className="blue"
                    checked={selectedLabel === "blue"}
                    onChange={handleOptionChange}
                  />
                  <StyledColorBtn className="blue"></StyledColorBtn>
                  </StyledLabel>
                  <StyledColorText> Low </StyledColorText>
                </StyledInputContainer>
                <StyledInputContainer>
                   <StyledLabel>
                      <StyledRadioInput
                       type="radio"
                       name="radio"
                       value="pink"
                       className="pink"
                       checked={selectedLabel === "pink"}
                       onChange={handleOptionChange}
                     />
                      <StyledColorBtn className="pink"></StyledColorBtn>
                    </StyledLabel>
                      <StyledColorText> Medium </StyledColorText>
                   
              </StyledInputContainer>
              <StyledInputContainer>
                  <StyledLabel>
                    <StyledRadioInput
                      type="radio"
                      name="radio"
                      value="green"
                      className="green"
                      checked={selectedLabel === "green"}
                      onChange={handleOptionChange}
                    />
                      <StyledColorBtn className="green"></StyledColorBtn>
                       </StyledLabel>
                    <StyledColorText> Hight </StyledColorText>
                  
                </StyledInputContainer>
                
              </StyledContainerBtn>
    </ModalFilter>
  
  );
};