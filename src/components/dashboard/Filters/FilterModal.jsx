import { CloseModalBtn } from "../../../shared/SharedModal/SharedModal.styled";

import {
  StyledColorBtn,
  StyledColorText,
  StyledContainerBtn,
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

export const FilterModal = ({ isOpen, onClose }) => {
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
    onClose();
  };

  return (
    <Overlay>
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
                value="without"
                className="gray"
                checked={selectedPriority === "gray"}
                onChange={handleLabelChange}
              />
              <StyledColorBtn className="gray"></StyledColorBtn>

              <StyledColorText className="gray">
                {" "}
                Without priority{" "}
              </StyledColorText>
            </StyledLabel>
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledLabel>
              <StyledRadioInput
                type="radio"
                name="radio"
                value="low"
                className="blue"
                checked={selectedPriority === "blue"}
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
                value="medium"
                className="pink"
                checked={selectedPriority === "pink"}
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
                value="high"
                className="green"
                checked={selectedPriority === "green"}
                onChange={handleLabelChange}
              />
              <StyledColorBtn className="green"></StyledColorBtn>

              <StyledColorText> High </StyledColorText>
            </StyledLabel>
          </StyledInputContainer>
        </StyledContainerBtn>
      </ModalFilter>
    </Overlay>
  );
};
