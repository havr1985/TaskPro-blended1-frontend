import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import ScreensPage from "./ScreensPage";


const HomePage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <ScreensPage/>
    </div>
  );
};

export default HomePage;
