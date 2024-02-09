import icons from "../../../shared/images/icons.svg";
import Card from "../Card/Card";
import {
 DashboardColumnTitle,
  Icon,
  IconButton,
  IconsWrap,
  MainDashboardColumn,
  MainDashboardList,
  MainDashboardWrap,
  Title,
} from "../MainDashboard/MainDashboard.styled";
import { useModal } from "../../../hooks/useModal";
import { Overlay } from "../../../pages/HomePage.styled";

import { EditColumnModal } from "../EditColumnModal/EditColumnModal";

import { useDispatch, useSelector } from "react-redux";
import { selectCurrentDashboard } from "../../../redux/Dashboard/dashboardsSelectors";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  deleteColumnThunk,
  getDashboardByIDThunk,
} from "../../../redux/Dashboard/dashboardOperation";

const DashboardAllShow = () => {
/*   const {
    isModalOpen: isAddColumnModalOpen,
    openModal: openAddColumnModal,
    closeModal: closeAddColumnModal,
  } = useModal(); */

  const {
    isModalOpen: isEditColumnModalOpen,
    openModal: openEditColumnModal,
    closeModal: closeEditColumnModal,
  } = useModal();

/*   const {
    isModalOpen: isAddCardModalOpen,
    openModal: openAddCardModal,
    closeModal: closeAddCardModal,
  } = useModal(); */

    const { column: columns } = useSelector(selectCurrentDashboard);
    const { state } = useLocation();
  const dispatch = useDispatch();

  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    if (columns === undefined) {
      dispatch(getDashboardByIDThunk(state.id));
    }
  }, [columns, dispatch, state?.id]);

  // Need some fixes request is not sent
  const onDeleteColumn = (id) => {
    
    dispatch(deleteColumnThunk(id));
  };

  return (
    <MainDashboardWrap>
      <MainDashboardList>
        {columns === undefined ? (
          <></>
        ) : (
          columns.map(({ _id: id, title }) => {
            return (
              <MainDashboardColumn key={id}>
                <div>
                  <DashboardColumnTitle>
                    <Title>{title}</Title>
                    <IconsWrap>
                      <IconButton onClick={() => {openEditColumnModal(); setSelectedId(id)} }>
                        <Icon>
                          <use href={icons + "#icon-pencil"} />
                        </Icon>
                      </IconButton>
                      <IconButton onClick={() => onDeleteColumn(id)}>
                        <Icon>
                          <use href={icons + "#icon-trash"} />
                        </Icon>
                      </IconButton>
                    </IconsWrap>
                  </DashboardColumnTitle>
                </div>
                <Card />
              {/*   <div>
                  <AddCardButton onClick={openAddCardModal}>
                    <AddCardIconWrap>
                      <AddCardIconPlus>
                        <use href={icons + "#icon-plus"} />
                      </AddCardIconPlus>
                    </AddCardIconWrap>
                    Add Card
                  </AddCardButton>
                </div> */}
              </MainDashboardColumn>
            );
          })
        )}
      </MainDashboardList>
     {/*  <AddColumnButton onClick={openAddColumnModal}>
        <IconWrap>
          <IconPlus>
            <use href={icons + "#icon-plus"} />
          </IconPlus>
        </IconWrap>
        Add column
      </AddColumnButton> */}
    {/*   <Overlay
        onClick={closeAddColumnModal}
        className={isAddColumnModalOpen === true && "active"}
      ></Overlay>
      <AddColumnModal
        modalStateSwapper={closeAddColumnModal}
        isModalOpen={isAddColumnModalOpen}
      /> */}
      <Overlay
        onClick={closeEditColumnModal}
        className={isEditColumnModalOpen === true && "active"}
      ></Overlay>
      <EditColumnModal
        modalStateSwapper={closeEditColumnModal}
        isModalOpen={isEditColumnModalOpen}
        columnId={selectedId}
    
      />
   {/*    <FormAddCard
        modalStateSwapper={closeAddCardModal}
        isModalOpen={isAddCardModalOpen}
      /> */}
    </MainDashboardWrap>
  );
};

export default DashboardAllShow;
