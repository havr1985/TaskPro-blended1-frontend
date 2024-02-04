import icons from "../../../shared/images/icons.svg";
import Card from "../Card/Card";
import {
  AddCardButton,
  AddCardIconPlus,
  AddCardIconWrap,
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

const MainDashboard = () => {
  return (
    <MainDashboardWrap>
      <MainDashboardList>
        <MainDashboardColumn>
          <div>
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
          </div>
          <Card />
          <div>
            <AddCardButton>
              <AddCardIconWrap>
                <AddCardIconPlus>
                  <use href={icons + "#icon-plus"} />
                </AddCardIconPlus>
              </AddCardIconWrap>
              Add Card
            </AddCardButton>
          </div>
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
