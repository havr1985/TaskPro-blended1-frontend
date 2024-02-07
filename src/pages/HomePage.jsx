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
import { selectAllDashboards } from "../redux/Dashboard/dashboardsSelectors";
import { useSelector } from "react-redux";


const HomePage = () => {
  
  
  const dashboard = useSelector(selectAllDashboards);
  console.log(dashboard);

  
  
  

  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <Conteiner>
      <HomePageWrapper>
        <Sidebar isOpen={isModalOpen} />
        <HeaderAndScreensWrapper>
          <Header openSideBar={openModal} />
          <Outlet />
          
        </HeaderAndScreensWrapper>
        <Overlay
          onClick={closeModal}
          className={isModalOpen === true && "active"}
        ></Overlay>
      </HomePageWrapper>
    </Conteiner>
  );
};

export default HomePage;
