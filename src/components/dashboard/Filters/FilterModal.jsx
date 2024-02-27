import { CloseModalBtn } from "../../../shared/SharedModal/SharedModal.styled";

import {
  StyledSpan,
  StyledColorText,
  StyledInputContainer,
  StyledLabel,
  StyledRadioInput,
  StyledLabelTitle,
  ShowAllBtn,
  LabelSchowAll,
  FilterLine,
  ModalTitle,
  ModalFilter,
  Overlay,
} from "./FilterModal.styled";
import { useSearchParams } from "react-router-dom";

export const FilterModal = ({ isOpen, onClose, onBtnClose }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedPriority = searchParams.get("priority");

  if (!isOpen) return null;

  const handleShowAll = () => {
    setSearchParams({ priority: "all" });
    onClose();
  };

  const handleLabelChange = (event) => {
    const value = event.target.value;
    setSearchParams({ priority: value });
  };

  return (
    <Overlay onClick={onClose}>
      <ModalFilter onClick={(e) => e.stopPropagation()}>
        <CloseModalBtn onClick={onBtnClose}>✕</CloseModalBtn>

        <ModalTitle>Filters</ModalTitle>
        <FilterLine />
        <LabelSchowAll>
          <StyledLabelTitle>Label color</StyledLabelTitle>
          <ShowAllBtn onClick={handleShowAll}>Show all</ShowAllBtn>
        </LabelSchowAll>
          <StyledInputContainer>
            <StyledLabel >
              <StyledRadioInput 
                type="radio"
                name="radio"
                value="without"
                className="without"
                checked={selectedPriority === "without"}
                onChange={handleLabelChange}
              />
               <StyledSpan className="gray"></StyledSpan>
              <StyledColorText>
                Without priority
              </StyledColorText>
            </StyledLabel>
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledLabel >
              <StyledRadioInput
                type="radio"
                name="radio"
                value="low"
                className="low"
                checked={selectedPriority === "low"}
                onChange={handleLabelChange}
              />
              <StyledSpan className="blue"></StyledSpan>
              <StyledColorText> Low </StyledColorText>
            </StyledLabel>
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledLabel >
              <StyledRadioInput
                type="radio"
                name="radio"
                value="medium"
                className="medium"
                checked={selectedPriority === "medium"}
                onChange={handleLabelChange}
              />
               <StyledSpan className="pink"></StyledSpan>
              <StyledColorText> Medium </StyledColorText>
            </StyledLabel>
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledLabel >
              <StyledRadioInput
                type="radio"
                name="radio"
                value="high"
                className="high"
                checked={selectedPriority === "high"}
                onChange={handleLabelChange}
              />
             <StyledSpan className="green"></StyledSpan>
              <StyledColorText> High </StyledColorText>
            </StyledLabel>
          </StyledInputContainer>
        
      </ModalFilter>
    </Overlay>
  );
};
