import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Conteiner } from "../shared/Container/Conteiner";
import { HeaderAndScreensWrapper, HomePageWrapper } from "./HomePage.styled";
import ScreensPage from "./ScreensPage";

const HomePage = () => {
  return (
    <Conteiner>
      <HomePageWrapper>
        <Sidebar />
        <HeaderAndScreensWrapper>
          <Header />
          <ScreensPage />
        </HeaderAndScreensWrapper>
      </HomePageWrapper>
    </Conteiner>
  );
};

export default HomePage;
