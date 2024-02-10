import { CloseModalBtn } from "../../../shared/SharedModal/SharedModal.styled";
import { useSearchParams } from "react-router-dom";
import {StyledColorBtn, StyledColorText, StyledContainerBtn, StyledInputContainer, StyledLabel, StyledRadioInput, StyledLabelTitle, ShowAllBtn, LabelSchowAll, FilterLine, ModalTitle, ModalFilter, Overlay} from "./FilterModal.styled"


export const FilterModal = ({ isOpen, onClose, }) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const radio = searchParams.get("radio");

 /*  const [selectedLabel, setSelectedLabel] = useState('all'); */
   if (!isOpen) return null
 /* const handleAllShow = () => {
    setSelectedLabel('all'); 
    onClose();
    onFilterChange('all')
  } */
  
  const handleLabelChange = (event) => {
    const value = event.target.value;
    console.log(value)
    setSearchParams(value);
   }; 
  
    return (
      <Overlay>
        <ModalFilter>
          <CloseModalBtn onClick={onClose}>✕</CloseModalBtn>
     
          <ModalTitle>Filters</ModalTitle>
          <FilterLine />
          <LabelSchowAll>
            <StyledLabelTitle>Label color</StyledLabelTitle>
            <ShowAllBtn onChange={() => setSearchParams("all")}>Show all</ShowAllBtn>
          </LabelSchowAll>
          <StyledContainerBtn>
            <StyledInputContainer>
              <StyledLabel>
                <StyledRadioInput
                  type="radio"
                  name="radio"
                  value="gray"
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
                  value="blue"
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
                  value="pink"
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
                  value="green"
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
