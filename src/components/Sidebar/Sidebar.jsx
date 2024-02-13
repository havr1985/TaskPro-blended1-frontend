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
import useSelectImage from "../../hooks/useSelectImage";

export const Sidebar = ({ isOpen }) => {
	const [selectedItem, setSelectedItem] = useState("");
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

	const handleClick = item => {
		// setSelectedItem(item);
		dispatch(getDashboardByIDThunk(item._id));
	};

	const { selectImage, currentImage } = useSelectImage();

	return (
		<SidebarContainer className={isOpen === true && "active"}>
			<>
				<Logo icon={sprite} />
				<CreateNewBoard
					openModal={openModal}
					viewport={selectImage}
					icon={sprite}
				/>
				<WrapperContent>
					<MyBoards
						icon={sprite}
						boards={userBoards}
						choice={handleClick}
						selectedItem={selectedItem}
						isModalOpen={isModalOpen}
						closeModal={closeModal}
						gallery={currentImage}
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
