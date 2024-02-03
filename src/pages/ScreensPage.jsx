import { useParams } from "react-router-dom";
import HeaderDashboard from "../components/HeaderDashboard/HeaderDashboard";
import MainDashboard from "../components/MainDashboard/MainDashboard";
import {
  ScreensPageWrap,
  WelcomeMessageWrap,
  WelcomeMessage,
  WelcomeMessageAccent,
} from "./ScreensPage.styled";

const ScreensPage = () => {
  const { boardName } = useParams();
  return (
    <ScreensPageWrap>
      {boardName === undefined && (
        <WelcomeMessageWrap>
          <WelcomeMessage>
            Before starting your project, it is essential{" "}
            <WelcomeMessageAccent>to create a board</WelcomeMessageAccent> to
            visualize and track all the necessary tasks and milestones. This
            board serves as a powerful tool to organize the workflow and ensure
            effective collaboration among team members.
          </WelcomeMessage>
        </WelcomeMessageWrap>
      )}
      {boardName !== undefined && (
        <>
          <HeaderDashboard boardName={boardName} />
          <MainDashboard boardName={boardName} />
        </>
      )}
    </ScreensPageWrap>
  );
};

export default ScreensPage;
