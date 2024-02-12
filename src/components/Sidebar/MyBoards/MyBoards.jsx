import { useDispatch } from "react-redux";
import { AddBoardModal } from "../../BoardModal/newBoardModal/newBoardModal";
import {
  BoardContainer,
  BoardIcon,
  BoardItem,
  BoardList,
  BoardTitle,
  ButtonContainer,
  ButtonEdit,
  Link,
  TitleWrapper,
  Tooltip,
} from "./MyBoards.styled";
import {
  deleteDashboardThunk,
  getDashboardByIDThunk,
} from "../../../redux/Dashboard/dashboardOperation";
import { useState } from "react";
import { EditBoardModal } from "../../BoardModal/EditBoardModal/editBoardModal";

export const MyBoards = ({
  icon,
  boards,
  selectedItem,
  choice,
  setUserBoards,
  isModalOpen,
  closeModal,
}) => {
  const [isEditBoardModalOpen, setIsEditBoardModalOpen] = useState(false);

  const modalStateSwapper = () => {
    setIsEditBoardModalOpen((prev) => !prev);
  };

  const findPrevBoard = (id) => {
    let result = "";
    let resultId = "";
    boards.forEach((board, index) => {
      if (board._id === id) {
        const board = boards[index + 1] ? boards[index + 1] : boards[index - 1];
        // console.log(board.title);
        if (board) {
          result = `/home/${board.title}`;
          resultId = board._id;
        } else {
          // result = "/home";
        }
      }
    });
    return { path: result, id: resultId };
  };

  const dispatch = useDispatch();

  const deleteBoard = (id) => {
    if (id) dispatch(getDashboardByIDThunk(findPrevBoard(id).id));
    dispatch(deleteDashboardThunk(id));
  };

  return (
    <>
      {boards.length !== 0 && (
        <BoardList>
          {boards.map((board) => (
            <BoardItem
              key={board._id}
              onClick={() => choice(board)}
              className={selectedItem._id === board._id ? "active" : ""}
            >
              <Link to={`/home/${board.title}`}>
                <BoardContainer>
                  <BoardIcon
                    className="iconBoard iconActive"
                    width="18px"
                    height="18px"
                  >
                    <use href={`${icon}${board.icon}`}></use>
                  </BoardIcon>
                  <Tooltip
                    className={board.title.length > 20 && "tooltip"}
                    data-tooltip={`${board.title}`}
                  >
                    <TitleWrapper>
                      <BoardTitle>{board.title}</BoardTitle>
                    </TitleWrapper>
                  </Tooltip>
                </BoardContainer>
                {selectedItem._id === board._id && (
                  <ButtonContainer>
                    <ButtonEdit
                      onClick={() => modalStateSwapper()}
                      type="button"
                    >
                      <BoardIcon
                        className="iconBoard iconEdit"
                        width="16px"
                        height="16px"
                      >
                        <use href={`${icon}#icon-pencil`}></use>
                      </BoardIcon>
                    </ButtonEdit>
                    <Link
                      to={findPrevBoard(board._id).path}
                      onClick={() => deleteBoard(board._id)}
                      type="button"
                    >
                      <BoardIcon
                        className="iconBoard iconEdit"
                        width="16px"
                        height="16px"
                      >
                        <use href={`${icon}#icon-trash`}></use>
                      </BoardIcon>
                    </Link>
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
    </>
  );
};
