import plant from "../../../shared/images/plant.png";

import { ButtonNeedHelp, HelpText, HelpWrapper } from "./NeedHelp.styled";
import { useModal } from "../../../hooks/useModal";
import { HelpModal } from "../HelpModal/HelpModal";
import { Overlay } from "../../../pages/HomePage.styled";

export const NeedHelp = ({ icon }) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <HelpWrapper>
        <img src={plant} alt="Happy plant" />
        <HelpText>
          If you need help with <span className="appName">TaskPro</span>, check
          out our support resources or reach out to our customer support team.
        </HelpText>
        <ButtonNeedHelp type="submit" onClick={openModal}>
          <svg className="iconHelp" width="20px" height="20px">
            <use href={`${icon}#icon-help-circle`}></use>
          </svg>
          <span>Need help?</span>
        </ButtonNeedHelp>
      </HelpWrapper>
      <Overlay
        onClick={closeModal}
        className={isModalOpen === true && "active"}
      ></Overlay>
      <HelpModal modalStateSwapper={closeModal} isModalOpen={isModalOpen} />
    </>
  );
};
