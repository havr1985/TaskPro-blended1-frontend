import { useEffect, useState } from "react";
import { SidebarContainer } from "./Sidebar.styled";
import sprite from "../../shared/images/icons.svg";
import { Logo } from "./Logo/Logo";
import { MyBoards } from "./MyBoards/MyBoards";
import { NeedHelp } from "./NeedHelp/NeedHelp";
import { LogOut } from "./LogOut/LogOut";
import { useSelector } from "react-redux";
import { selectAllDashboards } from "../../redux/Dashboard/dashboardsSelectors";

export const Sidebar = ({ isOpen }) => {
  const [selectedItem, setSelectedItem] = useState("");
  const boards = useSelector(selectAllDashboards);
  const [userBoards, setUserBoards] = useState([]);

  useEffect(() => {
    setUserBoards(boards);
  }, [boards]);

  //   const boards = [
  //     { id: 1, name: "Project office", icon: "icon-board-square" },
  //     { id: 2, name: "Project ", icon: "icon-board-colors" },
  //   ];

  const handleClick = (item) => {
    setSelectedItem(item);
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
