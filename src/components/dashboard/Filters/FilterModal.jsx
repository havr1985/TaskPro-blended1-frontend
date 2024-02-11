import { useSearchParams } from "react-router-dom";
import { CloseModalBtn } from "../../../shared/SharedModal/SharedModal.styled";
import { StyledColorBtn, StyledColorText, StyledContainerBtn, StyledInputContainer, StyledLabel, StyledRadioInput, StyledLabelTitle, ShowAllBtn, LabelSchowAll, FilterLine, ModalTitle, ModalFilter, Overlay } from "./FilterModal.styled";


export const FilterModal = ({ isOpen, onClose, }) => {

  const [, setSearchParams] = useSearchParams();

   if (!isOpen) return null
  
  const handleLabelChange = (event) => {
    const value = event.target.value;
    console.log(value)
    setSearchParams({ label: value });
   }; 
  
  const handleShowAll = () => {
    const all = "all";
    console.log(all)
    setSearchParams({ label: all })
  }
    return (
      <Overlay onClick={onClose}>
        <ModalFilter>
          <CloseModalBtn onClick={onClose}>✕</CloseModalBtn>
     
          <ModalTitle>Filters</ModalTitle>
          <FilterLine />
          <LabelSchowAll>
            <StyledLabelTitle>Label color</StyledLabelTitle>
            <ShowAllBtn onClick={handleShowAll}>Show all</ShowAllBtn>
          </LabelSchowAll>
          <StyledContainerBtn>
            <StyledInputContainer>
              <StyledLabel>
                <StyledRadioInput
                  type="radio"
                  name="radio"
                  value="ShowWithout"
                  className="gray"
                 /*  checked={selectedLabel === "gray"} */
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
                  value="ShowLow"
                  className="blue"
                  /* checked={selectedLabel === "blue"} */
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
                  value="ShowMedium"
                  className="pink"
                  /* checked={selectedLabel === "pink"} */
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
                  value="ShowHigh"
                  className="green"
                  /* checked={selectedLabel === "green"} */
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
