import icons from "../../../shared/images/icons.svg";
import Card from "../Card/Card";
import { useModal } from "../../../hooks/useModal";
import { Overlay } from "../../../pages/HomePage.styled";
import { AddColumnModal } from "../AddColumnModal/AddColumnModal";
import { EditColumnModal } from "../EditColumnModal/EditColumnModal";
import FormAddCard from "../../FormAddCard/FormAddCard";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentDashboard } from "../../../redux/Dashboard/dashboardsSelectors";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import {
  deleteColumnThunk,
  getDashboardByIDThunk,
  updateCardStatus,
  updateCardStatusLocalThunk,
} from "../../../redux/Dashboard/dashboardOperation";
import {
  AddCardButton,
  AddCardIconPlus,
  AddCardIconWrap,
  AddColumnButton,
  DashboardColumnTitle,
  Icon,
  IconButton,
  IconPlus,
  IconWrap,
  IconsWrap,
  MainDashboardColumn,
  MainDashboardList,
  MainDashboardWrap,
  Title,
} from "./MainDashboard.styled";

const MainDashboard = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [columnsBoard, setColumnsBoard] = useState(null);

  const {
    isModalOpen: isAddColumnModalOpen,
    openModal: openAddColumnModal,
    closeModal: closeAddColumnModal,
  } = useModal();

  const {
    isModalOpen: isEditColumnModalOpen,
    openModal: openEditColumnModal,
    closeModal: closeEditColumnModal,
  } = useModal();

  const {
    isModalOpen: isAddCardModalOpen,
    openModal: openAddCardModal,
    closeModal: closeAddCardModal,
  } = useModal();

  const { column: columns } = useSelector(selectCurrentDashboard);

  const { state } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (columns === undefined) {
      if (state) dispatch(getDashboardByIDThunk(state.id));
    }
  }, [columns, dispatch, state?.id, state]);

  <BoardContainer>
      <Columns board={board}>
        <BtnAddColumn type="button" onClick={handleOpenModal}>
          <StyledIconAdd>
            <SvagAddColumn name="plus" />
          </StyledIconAdd>
          <span>Add {allColumns.length ? 'another' : null} column</span>
        </BtnAddColumn>
      </Columns>
      <AddColumnModal
        board={board}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </BoardContainer>

  useEffect(() => {
    if (columns) {
      // Инициализация состояния столбцов при получении данных
      const initializedColumns = {};
      columns.forEach((column) => {
        initializedColumns[column._id] = {
          columnId: column._id,
          items: column.card,
        };
      });
      setColumnsBoard(initializedColumns);
    }
  }, [columns]);

  const onDragEnd = (result, columnsBoard) => {
    if (!result.destination) return;
    const { source, destination } = result;

    const sourceColumn = columnsBoard[source.droppableId];
    const movedItem = sourceColumn.items[source.index];
    const destColumn = columnsBoard[destination.droppableId];

    const data = {
      card: movedItem,
      currentColumnId: sourceColumn.columnId,
      newColumnId: destColumn.columnId,
      currentCardIdx: source.index,
      newCardIdx: destination.index,
    };

    dispatch(updateCardStatusLocalThunk(data));

    dispatch(
      updateCardStatus({
        columnId: destination.droppableId,
        cardId: movedItem._id,
        owner: movedItem.owner,
      })
    );
  };

  return (
    <MainDashboardWrap>
      <DragDropContext
        onDragEnd={(result) => {
          onDragEnd(result, columnsBoard, setColumnsBoard);
        }}
      >
        <MainDashboardList>
          {columns === undefined ? (
            <></>
          ) : (
            columns.map(({ _id: id, title, card }, index) => {
              return (
                <Droppable key={index} droppableId={id}>
                  {(provided) => (
                    <MainDashboardColumn
                      key={id}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <div>
                        <DashboardColumnTitle>
                          <Title>{title}</Title>
                          <IconsWrap>
                            <IconButton
                              onClick={() => {
                                openEditColumnModal();
                                setSelectedId(id);
                              }}
                              aria-label="Pencil"
                            >
                              <Icon>
                                <use href={icons + "#icon-pencil"} />
                              </Icon>
                            </IconButton>
                            <IconButton
                              onClick={() => onDeleteColumn(id)}
                              aria-label="Trash"
                            >
                              <Icon>
                                <use href={icons + "#icon-trash"} />
                              </Icon>
                            </IconButton>
                          </IconsWrap>
                        </DashboardColumnTitle>
                      </div>

                      <Card card={card} />

                      <AddCardButton
                        onClick={() => {
                          openAddCardModal();
                          setSelectedId(id);
                        }}
                        aria-label="Add card"
                      >
                        <AddCardIconWrap>
                          <AddCardIconPlus>
                            <use href={icons + "#icon-plus"} />
                          </AddCardIconPlus>
                        </AddCardIconWrap>
                        Add Card
                      </AddCardButton>

                      {provided.placeholder}
                    </MainDashboardColumn>
                  )}
                </Droppable>
              );
            })
          )}
        </MainDashboardList>
      </DragDropContext>

      <AddColumnButton onClick={openAddColumnModal} aria-label="Add new column">
        <IconWrap>
          <IconPlus>
            <use href={icons + "#icon-plus"} />
          </IconPlus>
        </IconWrap>
        Add column
      </AddColumnButton>
      <Overlay
        onClick={closeAddColumnModal}
        className={isAddColumnModalOpen === true && "active"}
      ></Overlay>
      <AddColumnModal
        modalStateSwapper={closeAddColumnModal}
        isModalOpen={isAddColumnModalOpen}
      />
      <Overlay
        onClick={closeEditColumnModal}
        className={isEditColumnModalOpen === true && "active"}
      ></Overlay>
      <EditColumnModal
        modalStateSwapper={closeEditColumnModal}
        isModalOpen={isEditColumnModalOpen}
        columnId={selectedId}
      />
      <FormAddCard
        modalStateSwapper={closeAddCardModal}
        isModalOpen={isAddCardModalOpen}
        columnId={selectedId}
      />
    </MainDashboardWrap>
  );
};

export default MainDashboard;
