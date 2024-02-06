import { useDispatch } from "react-redux";
import { useModal } from "../../../hooks/useModal";
import { AddBoardModal } from "../../BoardModal/newBoardModal/newBoardModal";
import {
  BoardContainer,
  BoardItem,
  BoardList,
  ButtonContainer,
  ButtonCreateBoard,
  ButtonEdit,
  CreateBoardWrapper,
  Heading,
} from "./MyBoards.styled";
import { deleteDashboardThunk } from "../../../redux/Dashboard/dashboardOperation";

export const MyBoards = ({
  icon,
  boards,
  selectedItem,
  choice,
  setUserBoards,
}) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useDispatch();
  const deleteBoard = (id) => {
    dispatch(deleteDashboardThunk(id));
  };

  return (
    <div>
      <Heading>My boards</Heading>
      <CreateBoardWrapper>
        <p className="createText">Create a new board</p>
        <ButtonCreateBoard onClick={() => openModal()} type="submit">
          <svg className="iconCreateBoard" width="20px" height="20px">
            <use href={`${icon}#icon-plus`}></use>
          </svg>
        </ButtonCreateBoard>
      </CreateBoardWrapper>
      <BoardList>
        {boards.map((board) => (
          <BoardItem
            key={board.id}
            onClick={() => choice(board)}
            className={selectedItem._id === board._id ? "active" : ""}
          >
            <BoardContainer>
              <svg className="iconBoard iconActive" width="20px" height="20px">
                <use href={`${icon}${board.icon}`}></use>
              </svg>
              <p>{board.title}</p>
            </BoardContainer>

            {selectedItem.id === board.id && (
              <ButtonContainer>
                <ButtonEdit type="button">
                  <svg
                    className="iconBoard iconEdit"
                    width="16px"
                    height="16px"
                  >
                    <use href={`${icon}#icon-pencil`}></use>
                  </svg>
                </ButtonEdit>
                <ButtonEdit
                  onClick={() => deleteBoard(board._id)}
                  type="button"
                >
                  <svg
                    className="iconBoard iconEdit"
                    width="16px"
                    height="16px"
                  >
                    <use href={`${icon}#icon-trash`}></use>
                  </svg>
                </ButtonEdit>
              </ButtonContainer>
            )}
          </BoardItem>
        ))}
      </BoardList>
      <AddBoardModal
        setUserBoards={setUserBoards}
        isModalOpen={isModalOpen}
        modalStateSwapper={closeModal}
      />
    </div>
  );
};
