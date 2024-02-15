import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Conteiner } from "../shared/Container/Conteiner";
import { useModal } from "../hooks/useModal";
import {
	HeaderAndScreensWrapper,
	HomePageWrapper,
	Overlay,
} from "./HomePage.styled";
import { Outlet } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { allDashboardsThunk } from "../redux/Dashboard/dashboardOperation";
import { useDispatch } from "react-redux";

const HomePage = () => {
	const dispatch = useDispatch();
	const { isModalOpen, openModal, closeModal } = useModal();

	useEffect(() => {
		dispatch(allDashboardsThunk());
	}, [dispatch]);

	return (
		<Conteiner>
			<HomePageWrapper>
				<Sidebar close={closeModal} isOpen={isModalOpen} />
				<HeaderAndScreensWrapper>
					<Header openSideBar={openModal} />
					<Suspense fallback={<div>Loading</div>}>
						<Outlet />
					</Suspense>
				</HeaderAndScreensWrapper>
				<Overlay
					onClick={closeModal}
					className={isModalOpen === true && "active"}></Overlay>
			</HomePageWrapper>
		</Conteiner>
	);
};

export default HomePage;
