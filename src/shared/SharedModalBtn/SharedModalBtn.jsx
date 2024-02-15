import { ModalBtn } from "./SharedModalBtn.styled";

// eslint-disable-next-line react/prop-types
export const SharedModalBtn = ({ children }) => {
  return (
    <ModalBtn type={"submit"} aria-label="Send profile">
      {children}
    </ModalBtn>
  );
};
