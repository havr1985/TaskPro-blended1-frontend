import { useEffect, useState } from "react";
import { SidebarContainer } from "./Sidebar.styled";
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

export const Sidebar = ({ isOpen }) => {
  const [selectedItem, setSelectedItem] = useState("");
  const boards = useSelector(selectAllDashboards);
  const { result } = useSelector(selectCurrentDashboard);
  const [userBoards, setUserBoards] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setUserBoards(boards);
  }, [boards]);

  useEffect(() => {
    setSelectedItem(result ?? "");
  }, [result]);

  //   const boards = [
  //     { id: 1, name: "Project office", icon: "icon-board-square" },
  //     { id: 2, name: "Project ", icon: "icon-board-colors" },
  //   ];

  const handleClick = (item) => {
    // setSelectedItem(item);
    dispatch(getDashboardByIDThunk(item._id));
  };

  return (
    <SidebarContainer className={isOpen === true && "active"}>
      <div>
        <Logo icon={sprite} />
        <MyBoards
          icon={sprite}
          boards={userBoards}
          choice={handleClick}
          selectedItem={selectedItem}
          //   setUserBoards={setUserBoards}
        />
      </div>

      <div>
        <NeedHelp icon={sprite} />
        <LogOut icon={sprite} />
      </div>
    </SidebarContainer>
  );
};
