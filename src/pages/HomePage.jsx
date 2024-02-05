import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Conteiner } from "../shared/Container/Conteiner";
import { useModal } from "../hooks/useModal";
import { HeaderAndScreensWrapper, HomePageWrapper, Overlay } from "./HomePage.styled";
import ScreensPage from "./ScreensPage";

const HomePage = () => {
	const { isModalOpen, openModal, closeModal } = useModal();
	return (
		<Conteiner>
			<HomePageWrapper>
				<Sidebar isOpen={isModalOpen} />
				<HeaderAndScreensWrapper>
					<Header openSideBar={openModal} />
					<ScreensPage />
				</HeaderAndScreensWrapper>
				<Overlay onClick={closeModal} className={isModalOpen === true && "active"}></Overlay>
			</HomePageWrapper>
		</Conteiner>
	);
};

export default HomePage;
