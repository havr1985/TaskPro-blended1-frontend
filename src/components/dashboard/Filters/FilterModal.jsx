import { useState } from 'react';
import Modal from "react-modal";
import { CloseModalBtn } from "../../../shared/SharedModal/SharedModal.styled";
import "./FilterModal.css";
import {StyledColorBtn, StyledColorText, StyledContainerBtn, StyledInputContainer, StyledLabel, StyledRadioInput, StyledLabelTitle, ShowAllBtn, LabelSchowAll, FilterLine, ModalTitle} from "./FilterModal.styled"

Modal.setAppElement("#root"); 


export const FilterModal = ({ modalIsOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };
  return (
      <Modal
          className="ReactModalContentClassName"
          isOpen={modalIsOpen}
          onRequestClose={onClose}
          closeTimeoutMS={750}
      >
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
                     checked={selectedOption === "gray"}
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
                    checked={selectedOption === "blue"}
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
                       checked={selectedOption === "pink"}
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
                      checked={selectedOption === "green"}
                      onChange={handleOptionChange}
                    />
                      <StyledColorBtn className="green"></StyledColorBtn>
                       </StyledLabel>
                    <StyledColorText> Hight </StyledColorText>
                  
                </StyledInputContainer>
                
              </StyledContainerBtn>
    </Modal>
  );
};