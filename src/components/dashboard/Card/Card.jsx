import icons from "../../../shared/images/icons.svg";
import { useModal } from "../../../hooks/useModal";
import FormEditCard from "../../FormAddCard/FormEditCard";

import {
  CardCommandSection,
  CardDeadlineValue,
  CardDescription,
  CardDescriptionWrap,
  CardList,
  CardParams,
  CardPriorityValue,
  CardTitle,
  CardWrap,
  Icon,
  IconButton,
  IconsWrap,
} from "./Card.styled";

const Card = () => {
  const {
    isModalOpen: isEditCardModalOpen,
    openModal: openEditCardModal,
    closeModal: closeEditCardModal,
  } = useModal();
  return (
    <>
      <CardList>
        <CardWrap>
          <CardTitle>Card Title</CardTitle>
          <CardDescriptionWrap>
            <CardDescription
              line={2}
              element="span"
              truncateText="…"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </CardDescriptionWrap>
          <CardCommandSection>
            <div>
              <CardParams>Priority</CardParams>
              <CardPriorityValue>Low</CardPriorityValue>
            </div>
            <div>
              <CardParams>Deadline</CardParams>
              <CardDeadlineValue>12/05/2023</CardDeadlineValue>
            </div>
            <IconsWrap>
              <li>
                <IconButton>
                  <Icon className="bell">
                    <use href={icons + "#icon-bell"} />
                  </Icon>
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <Icon>
                    <use href={icons + "#icon-arrow-circle-broken-right"} />
                  </Icon>
                </IconButton>
              </li>
              <li>
                <IconButton onClick={openEditCardModal}>
                  <Icon>
                    <use href={icons + "#icon-pencil"} />
                  </Icon>
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <Icon>
                    <use href={icons + "#icon-trash"} />
                  </Icon>
                </IconButton>
              </li>
            </IconsWrap>
          </CardCommandSection>
        </CardWrap>
      </CardList>
      <FormEditCard
        modalStateSwapper={closeEditCardModal}
        isModalOpen={isEditCardModalOpen}
      />
    </>
  );
};

export default Card;
