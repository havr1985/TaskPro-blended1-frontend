import { useState } from "react";

import { SidebarContainer } from "./Sidebar.styled";
import sprite from "../../shared/images/icons.svg";

import { Logo } from "./Logo/Logo";
import { MyBoards } from "./MyBoards/MyBoards";
import { NeedHelp } from "./NeedHelp/NeedHelp";
import { LogOut } from "./LogOut/LogOut";

export const Sidebar = () => {
	const [selectedItem, setSelectedItem] = useState("");

	const boards = [
		{ id: 1, name: "Project office", icon: "icon-board-square" },
		{ id: 2, name: "Project ", icon: "icon-board-colors" },
	];

	const handleClick = item => {
		setSelectedItem(item);
	};

	return (
		<SidebarContainer>
			<div>
				<Logo icon={sprite} />
				<MyBoards icon={sprite} boards={boards} choice={handleClick} selectedItem={selectedItem} />
			</div>

			<div>
				<NeedHelp icon={sprite} />
				<LogOut icon={sprite} />
			</div>
		</SidebarContainer>
	);
};
