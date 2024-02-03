import { SidebarContainer } from "./Sidebar.styled";
import sprite from "../../shared/images/icons.svg";

import { Logo } from "./Logo/Logo";
import { MyBoards } from "./MyBoards/MyBoards";
import { NeedHelp } from "./NeedHelp/NeedHelp";
import { LogOut } from "./LogOut/LogOut";

export const Sidebar = () => {
	return (
		<SidebarContainer>
			<div>
				<Logo icon={sprite} />
				<MyBoards icon={sprite} />
			</div>

			<div>
				<NeedHelp icon={sprite} />
				<LogOut icon={sprite} />
			</div>
		</SidebarContainer>
	);
};
