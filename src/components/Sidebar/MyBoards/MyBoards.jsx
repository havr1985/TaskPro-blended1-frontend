import { useDispatch } from "react-redux";
import { useModal } from "../../../hooks/useModal";
import { AddBoardModal } from "../../BoardModal/newBoardModal/newBoardModal";
import {
  BoardContainer,
  BoardIcon,
  BoardItem,
  BoardList,
  BoardTitle,
  ButtonContainer,
  ButtonCreateBoard,
  ButtonEdit,
  CreateBoardWrapper,
  Heading,
  Link,
} from "./MyBoards.styled";
import { deleteDashboardThunk } from "../../../redux/Dashboard/dashboardOperation";
import { useState } from "react";
import { EditBoardModal } from "../../BoardModal/EditBoardModal/editBoardModal";

export const MyBoards = ({
  icon,
  boards,
  selectedItem,
  choice,
  setUserBoards,
}) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [isEditBoardModalOpen, setIsEditBoardModalOpen] = useState(false);

  const modalStateSwapper = () => {
    setIsEditBoardModalOpen((prev) => !prev);
  };

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
      {boards.length !== 0 && (
        <BoardList>
          {boards.map((board) => (
            <BoardItem
              key={board._id}
              onClick={() => choice(board)}
              className={selectedItem._id === board._id ? "active" : ""}>
              <Link to={`/home/${board.title}`}>
                <BoardContainer>
                  <BoardIcon
                    className="iconBoard iconActive"
                    width="20px"
                    height="20px">
                    <use href={`${icon}${board.icon}`}></use>
                  </BoardIcon>
                  <BoardTitle>{board.title}</BoardTitle>
                </BoardContainer>
                {selectedItem.id === board.id && (
                  <ButtonContainer>
                    <ButtonEdit
                      onClick={() => modalStateSwapper()}
                      type="button">
                      <BoardIcon
                        className="iconBoard iconEdit"
                        width="16px"
                        height="16px">
                        <use href={`${icon}#icon-pencil`}></use>
                      </BoardIcon>
                    </ButtonEdit>
                    <ButtonEdit
                      onClick={() => deleteBoard(board._id)}
                      type="button">
                      <BoardIcon
                        className="iconBoard iconEdit"
                        width="16px"
                        height="16px">
                        <use href={`${icon}#icon-trash`}></use>
                      </BoardIcon>
                    </ButtonEdit>
                  </ButtonContainer>
                )}
              </Link>
            </BoardItem>
          ))}
        </BoardList>
      )}
      <AddBoardModal
        setUserBoards={setUserBoards}
        isModalOpen={isModalOpen}
        modalStateSwapper={closeModal}
      />

      {isEditBoardModalOpen && (
        <EditBoardModal
          isModalOpen={isEditBoardModalOpen}
          modalStateSwapper={modalStateSwapper}
        />
      )}
    </div>
  );
};
