import Filters from "../Filters/Filters";
import { DashboardName, HeaderWrap } from "./HeaderDashboard.styled";

const HeaderDashboard = ({ boardName }) => {
  return (
    <HeaderWrap>
      <DashboardName>{boardName}</DashboardName>
      <Filters />
    </HeaderWrap>
  );
};

export default HeaderDashboard;
