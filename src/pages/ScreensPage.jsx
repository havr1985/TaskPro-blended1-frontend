import { useNavigate, useParams, useLocation } from "react-router-dom";
import HeaderDashboard from "../components/dashboard/HeaderDashboard/HeaderDashboard";
import MainDashboard from "../components/dashboard/MainDashboard/MainDashboard";
import {
  ScreensPageWrap,
  WelcomeMessageWrap,
  WelcomeMessage,
  WelcomeMessageAccent,
} from "./ScreensPage.styled";
import { useSelector } from "react-redux";
import { selectAllDashboards } from "../redux/Dashboard/dashboardsSelectors";
import { useEffect, useState } from "react";
import { Loader } from "../shared/Loader/loader";

const ScreensPage = () => {
  const [loading, setLoading] = useState(false);
  const [currentPageName, setCurrentPageName] = useState("");
  const { boardName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const allDashboards = useSelector(selectAllDashboards);

  useEffect(() => {
    setCurrentPageName(boardName);
    // This effect could be used to handle specific logic when the user navigates to a different dashboard
    // For example, loading data related to the new boardName from useParams
    // Logic here will depend on your application's requirements
  }, [location.pathname, boardName]); // Reacting to changes in navigation

  // useEffect(() => {
  //   if (allDashboards.length > 0 && !boardName) {
  //     setLoading(true);
  //     const lastDashboard = allDashboards[allDashboards.length - 1];
  //     setCurrentPageName(lastDashboard.title);
  //     return navigate(`/home/${lastDashboard.title}`, {
  //       replace: true,
  //       state: { id: lastDashboard._id },
  //     });
  //   }
  //   setLoading(false);
  // }, [allDashboards, navigate, boardName, currentPageName]);

  return (
    <ScreensPageWrap>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        (boardName === undefined && (
          <WelcomeMessageWrap>
            <WelcomeMessage>
              Before starting your project, it is essential{" "}
              <WelcomeMessageAccent>to create a board</WelcomeMessageAccent> to
              visualize and track all the necessary tasks and milestones. This
              board serves as a powerful tool to organize the workflow and
              ensure effective collaboration among team members.
            </WelcomeMessage>
          </WelcomeMessageWrap>
        )) ||
        (boardName !== undefined && (
          <>
            <HeaderDashboard boardName={boardName} />
            <MainDashboard />
          </>
        ))
      )}
    </ScreensPageWrap>
  );
};

export default ScreensPage;
