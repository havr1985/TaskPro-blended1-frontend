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
import {
  deleteCardThunk,
  updateCardStatus,
} from "../../../redux/Dashboard/dashboardOperation";
import { useState } from "react";
import { ChangeStatusModal } from "../ChangeStatusModal/ChangeStatusModal";
import { useSearchParams } from "react-router-dom";

const formatDeadlineDate = (deadline) => {
  const date = new Date(deadline);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDate = `${day < 10 ? "0" : ""}${day}/${
    month < 10 ? "0" : ""
  }${month}/${year}`;

  return formattedDate;
};

const compareDate = (deadline) => {
  const deadlineDate = new Date(deadline);
  const currentDate = new Date();

  const deadlineDay = deadlineDate.getDate();
  const deadlineMonth = deadlineDate.getMonth();
  const deadlineYear = deadlineDate.getFullYear();

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  if (
    deadlineDay <= currentDay &&
    deadlineMonth <= currentMonth &&
    deadlineYear <= currentYear
  ) {
    return true;
  }
  return;
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
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [cardId, setCardId] = useState(null);
  const [cardTitle, setTitle] = useState(null);
  const [cardDescription, setCardDescription] = useState(null);
  const [cardColor, setCardColor] = useState(null);
  const [cardDeadline, setCardDeadline] = useState(null);
  const [cardOwner, setCardOwner] = useState(null);
  const [modalPosition, setModalPosition] = useState({ x: null, y: null });

  const dispatch = useDispatch();

  const handleOpenModal = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setModalPosition({ x, y });
  };

  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.key === "Escape") {
  //       toggleModalVisibility();
  //     }
  //   };

  //   document.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  const {
    isModalOpen: isEditCardModalOpen,
    openModal: openEditCardModal,
    closeModal: closeEditCardModal,
  } = useModal();

  const onDeleteCard = (id) => {
    dispatch(deleteCardThunk(id));
  };

  const toggleModalVisibility = () => {
    setIsFilterModalOpen((prevState) => !prevState);
  };

  const changeCardStatus = (columnId, cardId, owner) => {
    const data = {
      columnId: columnId,
      cardId: cardId,
      owner: owner,
    };
    dispatch(updateCardStatus(data));
  };
  const [searchParams] = useSearchParams();
  const priority = searchParams.get("priority");

  const visibleCardsSwitch = () => {
    switch (priority) {
      case "low":
        return card.filter((card) => card.color === "blue");
      case "medium":
        return card.filter((card) => card.color === "pink");
      case "high":
        return card.filter((card) => card.color === "green");
      case "without":
        return card.filter((card) => card.color === "gray");
      case "all":
        return card;
      default:
        return card;
    }
  };

  const visibleCards = visibleCardsSwitch();

  return (
    <>
      <CardList>
        {visibleCards &&
          visibleCards.map(
            ({ _id: id, title, description, color, deadline, owner }) => (
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
                      {formatDeadlineDate(deadline)}
                    </CardDeadlineValue>
                  </div>
                  <IconsWrap>
                    {compareDate(deadline) && (
                      <li>
                        <IconButton>
                          <Icon className="bell">
                            <use href={icons + "#icon-bell"} />
                          </Icon>
                        </IconButton>
                      </li>
                    )}
                    <li>
                      <IconButton
                        onClick={() => {
                          toggleModalVisibility();
                          setCardId(id);
                          setCardOwner(owner);
                          handleOpenModal(event);
                        }}
                      >
                        <Icon>
                          <use
                            href={icons + "#icon-arrow-circle-broken-right"}
                          />
                        </Icon>
                      </IconButton>
                    </li>
                    <li>
                      <IconButton
                        onClick={() => {
                          openEditCardModal();
                          setCardId(id);
                          setTitle(title);
                          setCardColor(color);
                          setCardDescription(description);
                          setCardDeadline(deadline);
                        }}
                      >
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
            )
          )}
        <ChangeStatusModal
          isOpen={isFilterModalOpen}
          onClose={toggleModalVisibility}
          onSelectStatus={changeCardStatus}
          cardId={cardId}
          owner={cardOwner}
          x={modalPosition.x}
          y={modalPosition.y}
        />
      </CardList>

      <FormEditCard
        modalStateSwapper={closeEditCardModal}
        isModalOpen={isEditCardModalOpen}
        cardId={cardId}
        cardTitle={cardTitle}
        cardColor={cardColor}
        cardDescription={cardDescription}
        cardDeadline={cardDeadline}
      />
    </>
  );
};

export default Card;
