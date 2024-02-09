import { useState } from 'react';
import { CloseModalBtn } from "../../../shared/SharedModal/SharedModal.styled";

import {StyledColorBtn, StyledColorText, StyledContainerBtn, StyledInputContainer, StyledLabel, StyledRadioInput, StyledLabelTitle, ShowAllBtn, LabelSchowAll, FilterLine, ModalTitle, ModalFilter, Overlay} from "./FilterModal.styled"

export const FilterModal = ({ isOpen, onClose }) => {

  const Label = {
    ALL: 'ALL',
    HIGHT: 'green',
    LOW: 'blue',
    WITHOUT: 'gray'
  };
 
  const [selectedLabel, setSelectedLabel] = useState(Label.ALL);

  if (!isOpen) return null;

  const handleAllShow = () => {
const value = 'ALL';
    setSelectedLabel(value);
  }
  
  const handleLabelChange = (event) => {
   
    const value = event.target.value;
    console.log(value)
    setSelectedLabel(value);
    
/*     switch (selectedLabel) {
        case Label.ALL:
       
          break;
        case Status.LOADING:
          // Дії для стану LOADING
          break;
        case Status.SUCCESS:
          // Дії для стану SUCCESS
          break;
        case Status.ERROR:
          // Дії для стану ERROR
          break;
        default:
          // Дії для інших станів
          break;
      } */
   };
  
    return (
      <Overlay>
        <ModalFilter>
          <CloseModalBtn onClick={onClose}>✕</CloseModalBtn>
     
          <ModalTitle>Filters</ModalTitle>
          <FilterLine />
          <LabelSchowAll>
            <StyledLabelTitle>Label color</StyledLabelTitle>
            <ShowAllBtn onClick={handleAllShow}>Show all</ShowAllBtn>
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
                  onChange={handleLabelChange}
                />
                <StyledColorBtn className="gray"></StyledColorBtn>
                   
                <StyledColorText className="gray"> Without priority </StyledColorText>
              </StyledLabel>
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledLabel>
                <StyledRadioInput
                  type="radio"
                  name="radio"
                  value="blue"
                  className="blue"
                  checked={selectedLabel === "blue"}
                  onChange={handleLabelChange}
                />
                <StyledColorBtn className="blue"></StyledColorBtn>
                 
                <StyledColorText> Low </StyledColorText>
              </StyledLabel>
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledLabel>
                <StyledRadioInput
                  type="radio"
                  name="radio"
                  value="pink"
                  className="pink"
                  checked={selectedLabel === "pink"}
                  onChange={handleLabelChange}
                />
                <StyledColorBtn className="pink"></StyledColorBtn>
                    
                <StyledColorText> Medium </StyledColorText>
              </StyledLabel>
                   
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledLabel>
                <StyledRadioInput
                  type="radio"
                  name="radio"
                  value="green"
                  className="green"
                  checked={selectedLabel === "green"}
                  onChange={handleLabelChange}
                />
                <StyledColorBtn className="green"></StyledColorBtn>
                      
                <StyledColorText> Hight </StyledColorText>
              </StyledLabel>
                  
            </StyledInputContainer>
                
          </StyledContainerBtn>
        </ModalFilter>
      </Overlay>
    );
  };
