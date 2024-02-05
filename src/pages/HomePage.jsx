import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Conteiner } from "../shared/Container/Conteiner";
import { useModal } from "../hooks/useModal";
import { HeaderAndScreensWrapper, HomePageWrapper } from "./HomePage.styled";
import ScreensPage from "./ScreensPage";

const HomePage = () => {
  const { isModalOpen, openModal } = useModal();
  return (
    <Conteiner>
      <HomePageWrapper>
        <Sidebar isOpen={isModalOpen} />
        <HeaderAndScreensWrapper>
          <Header openSideBar={openModal} />
          <ScreensPage />
        </HeaderAndScreensWrapper>
      </HomePageWrapper>
    </Conteiner>
  );
};

export default HomePage;
