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
import { deleteCardThunk, updateCardStatus } from "../../../redux/Dashboard/dashboardOperation";
import { useState } from "react";
import { ChangeStatusModal } from "../ChangeStatusModal/ChangeStatusModal";
/* import { useSearchParams } from 'react-router-dom';
 */

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
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [cardId, setCardId] = useState(null);
  const dispatch = useDispatch();
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

  const changeCardStatus = (columnId, cardId) => {
    console.log(columnId, cardId);
    const data = {
      columnId: columnId,
      cardId: cardId,
    }
    dispatch(updateCardStatus(data));
  }
  
/*   console.log(card)
  const [params] = useSearchParams();
  const label = params.get('label');
  console.log(label);
 */
 
/*    function filterCardsByLabel( label) {
   
    let filterCard = card;
    switch (label) {
    case 'ShowLow':
      filterCard =  card => {
        card.filter(item => item.color === "blue")
      }
      break;
    
    case 'SchowMedium':
      filterCard =  card => {
        card.filter(item => item.color === "pink")
      }
      break;
      
    case 'SchowHigh':
      filterCard = card => {
        card.filter(item => item.color === "green")
      }
      break;
    
    case 'SchowWithout':
      filterCard = card => {
        card.filter(item => item.color === "gray")
      }
      break;
    
    case 'SchowAll':
      filterCard = card
      break;
      
    default:
      filterCard = card;
    
      return filterCard;
        }
  }
  
  filterCardsByLabel()  */
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
                    <IconButton  onClick={() => toggleModalVisibility()}>
                      <Icon>
                        <use href={icons + "#icon-arrow-circle-broken-right"} />
                      </Icon>
                    </IconButton>
                    <ChangeStatusModal
                      isOpen={isFilterModalOpen}
                      onClose={toggleModalVisibility}
                      onSelectStatus={changeCardStatus}
                      cardId={id}
                    />
                  </li>
                  <li>
                    <IconButton
                      onClick={() => {
                        openEditCardModal();
                        setCardId(id);
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
          ))}
      </CardList>
      <FormEditCard
        modalStateSwapper={closeEditCardModal}
        isModalOpen={isEditCardModalOpen}
        cardId={cardId}
      />
    </>
  );
};

export default Card;
