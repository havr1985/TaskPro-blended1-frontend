import icons from "../../../shared/images/icons.svg";
import Card from "../Card/Card";
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
import { useModal } from "../../../hooks/useModal";
import { Overlay } from "../../../pages/HomePage.styled";
import { AddColumnModal } from "../AddColumnModal/AddColumnModal";
import { EditColumnModal } from "../EditColumnModal/EditColumnModal";

const MainDashboard = () => {
  const { 
    isModalOpen: isAddColumnModalOpen, 
    openModal: openAddColumnModal, 
    closeModal: closeAddColumnModal } = useModal();

  const { 
    isModalOpen: isEditColumnModalOpen, 
    openModal: openEditColumnModal, 
    closeModal: closeEditColumnModal } = useModal();

  return (
    <MainDashboardWrap>
      <MainDashboardList>
        <MainDashboardColumn>
          <div>
            <DashboardColumnTitle>
              <Title>New column</Title>
              <IconsWrap>
                <IconButton  onClick={openEditColumnModal}>
                  <Icon>
                    <use href={icons + "#icon-pencil"} />
                  </Icon>
                </IconButton>
                <IconButton>
                  <Icon>
                    <use href={icons + "#icon-trash"} />
                  </Icon>
                </IconButton>
              </IconsWrap>
            </DashboardColumnTitle>
          </div>
          <Card />
          <div>
            <AddCardButton>
              <AddCardIconWrap>
                <AddCardIconPlus>
                  <use href={icons + "#icon-plus"} />
                </AddCardIconPlus>
              </AddCardIconWrap>
              Add Card
            </AddCardButton>
          </div>
        </MainDashboardColumn>
      </MainDashboardList>
      <AddColumnButton onClick={openAddColumnModal}>
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
      <AddColumnModal modalStateSwapper={closeAddColumnModal} isModalOpen={isAddColumnModalOpen} />
      <Overlay
        onClick={closeEditColumnModal}
        className={isEditColumnModalOpen === true && "active"}
      ></Overlay>
      <EditColumnModal 
        modalStateSwapper={closeEditColumnModal} 
        isModalOpen={isEditColumnModalOpen} 
        title={'To do'} 
      />
    </MainDashboardWrap>
  );
};

export default MainDashboard;
