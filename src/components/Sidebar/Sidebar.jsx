import { useEffect, useState } from "react";
import { SidebarContainer, Wrapper, WrapperContent } from "./Sidebar.styled";
import sprite from "../../shared/images/icons.svg";
import { Logo } from "./Logo/Logo";
import { MyBoards } from "./MyBoards/MyBoards";
import { NeedHelp } from "./NeedHelp/NeedHelp";
import { LogOut } from "./LogOut/LogOut";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllDashboards,
  selectCurrentDashboard,
} from "../../redux/Dashboard/dashboardsSelectors";
import { getDashboardByIDThunk } from "../../redux/Dashboard/dashboardOperation";
import { CreateNewBoard } from "./CreateNewBoard/CreateNewBoard";
import { useModal } from "../../hooks/useModal";

export const Sidebar = ({ isOpen }) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [slectedItemId, setSelectedItemId] = useState("");
  const boards = useSelector(selectAllDashboards);
  const { result } = useSelector(selectCurrentDashboard);
  const [userBoards, setUserBoards] = useState([]);
  const dispatch = useDispatch();

  const { isModalOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    setUserBoards(boards);
  }, [boards]);

  useEffect(() => {
    setSelectedItem(result ?? "");
  }, [result]);

  const handleClick = (item) => {
    if (selectedItem._id !== item._id && slectedItemId !== item._id) {
      dispatch(getDashboardByIDThunk(item._id));
      setSelectedItemId(item._id);
    }
  };

  return (
    <SidebarContainer className={isOpen === true && "active"}>
      <>
        <Logo icon={sprite} />
        <CreateNewBoard openModal={openModal} icon={sprite} />
        <WrapperContent>
          <MyBoards
            icon={sprite}
            boards={userBoards}
            choice={handleClick}
            selectedItem={selectedItem}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            setSelectedItemId={setSelectedItemId}
            //   setUserBoards={setUserBoards}
          />
        </WrapperContent>
      </>

      <Wrapper>
        <NeedHelp icon={sprite} />
        <LogOut icon={sprite} />
      </Wrapper>
    </SidebarContainer>
  );
};
