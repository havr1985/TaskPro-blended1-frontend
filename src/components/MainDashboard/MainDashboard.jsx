import icons from "../../shared/images/icons.svg";
import Card from "../Card/Card";
import {
  AddColumnButton,
  DashboardColumnTitle,
  Icon,
  IconButton,
  IconPlus,
  IconWrap,
  IconsWrap,
  MainDashboardColumn,
  MainDashboardList,
  MainDashboardWrap,
  Title,
} from "./MainDashboard.styled";

const MainDashboard = ({ boardName }) => {
  return (
    <MainDashboardWrap>
      <MainDashboardList>
        <MainDashboardColumn>
          <DashboardColumnTitle>
            <Title>New column</Title>
            <IconsWrap>
              <IconButton>
                <Icon>
                  <use href={icons + "#icon-pencil"} />
                </Icon>
              </IconButton>
              <IconButton>
                <Icon>
                  <use href={icons + "#icon-trash"} />
                </Icon>
              </IconButton>
            </IconsWrap>
          </DashboardColumnTitle>
          <Card />
        </MainDashboardColumn>
      </MainDashboardList>
      <AddColumnButton>
        <IconWrap>
          <IconPlus>
            <use href={icons + "#icon-plus"} />
          </IconPlus>
        </IconWrap>
        Add column
      </AddColumnButton>
    </MainDashboardWrap>
  );
};

export default MainDashboard;
