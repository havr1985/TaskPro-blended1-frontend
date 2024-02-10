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
import { useDispatch } from "react-redux";
import { deleteCardThunk } from "../../../redux/Dashboard/dashboardOperation";

const deadlineDate = (deadline) => {
  const date = new Date(deadline);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDate = `${day < 10 ? "0" : ""}${day}/${
    month < 10 ? "0" : ""
  }${month}/${year}`;

  return formattedDate;
};

const priorityColor = (color) => {
  switch (color) {
    case "blue":
      return "#8fa1d0";
    case "pink":
      return "#e09cb5";
    case "green":
      return "#bedbb0";
    case "gray":
      return "rgba(255, 255, 255, 0.3)";
    default:
      return "rgba(255, 255, 255, 0.3)";
  }
};

const priorityValue = (color) => {
  switch (color) {
    case "blue":
      return "Low";
    case "pink":
      return "Medium";
    case "green":
      return "High";
    case "gray":
      return "Without priority";
    default:
      return "Without priority";
  }
};

const Card = ({ card }) => {
  const dispatch = useDispatch();
  const {
    isModalOpen: isEditCardModalOpen,
    openModal: openEditCardModal,
    closeModal: closeEditCardModal,
  } = useModal();

  const onDeleteCard = (id) => {
    dispatch(deleteCardThunk(id));
  };

  return (
    <>
      <CardList>
        {card &&
          card.map(({ _id: id, title, description, color, deadline }) => (
            <CardWrap key={id} $prioritycolor={priorityColor(color)}>
              <CardTitle>{title}</CardTitle>
              <CardDescriptionWrap>
                <CardDescription
                  line={2}
                  element="span"
                  truncateText="…"
                  text={description}
                />
              </CardDescriptionWrap>
              <CardCommandSection>
                <div>
                  <CardParams>Priority</CardParams>
                  <CardPriorityValue $prioritycolor={priorityColor(color)}>
                    {priorityValue(color)}
                  </CardPriorityValue>
                </div>
                <div>
                  <CardParams>Deadline</CardParams>
                  <CardDeadlineValue>
                    {deadlineDate(deadline)}
                  </CardDeadlineValue>
                </div>
                <IconsWrap>
                  {/* <li>
                    <IconButton>
                      <Icon className="bell">
                        <use href={icons + "#icon-bell"} />
                      </Icon>
                    </IconButton>
                  </li> */}
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
                    <IconButton onClick={() => onDeleteCard(id)}>
                      <Icon>
                        <use href={icons + "#icon-trash"} />
                      </Icon>
                    </IconButton>
                  </li>
                </IconsWrap>
              </CardCommandSection>
            </CardWrap>
          ))}
      </CardList>
      <FormEditCard
        modalStateSwapper={closeEditCardModal}
        isModalOpen={isEditCardModalOpen}
      />
    </>
  );
};

export default Card;
