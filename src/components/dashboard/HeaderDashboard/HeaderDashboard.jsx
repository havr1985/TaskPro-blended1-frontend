import Filters from "../Filters/Filters";
import { DashboardName, HeaderWrap } from "./HeaderDashboard.styled";

const HeaderDashboard = ({ children }) => {
  return (
    <HeaderWrap>
      <DashboardName>{children}</DashboardName>
      <Filters />
    </HeaderWrap>
  );
};

export default HeaderDashboard;
