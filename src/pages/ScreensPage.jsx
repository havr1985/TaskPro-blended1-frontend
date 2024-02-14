import { useNavigate, useParams, useLocation } from "react-router-dom";
import HeaderDashboard from "../components/dashboard/HeaderDashboard/HeaderDashboard";
import MainDashboard from "../components/dashboard/MainDashboard/MainDashboard";
import {
	ScreensPageWrap,
	WelcomeMessageWrap,
	WelcomeMessage,
	WelcomeMessageAccent,
} from "./ScreensPage.styled";

import { useDispatch, useSelector } from "react-redux";
import { selectAllDashboards } from "../redux/Dashboard/dashboardsSelectors";

import { useEffect, useRef, useState } from "react";
import { LoaderApp } from "../shared/Loader/loader";
import { getDashboardByIDThunk } from "../redux/Dashboard/dashboardOperation";

const ScreensPage = () => {
	const [loading, setLoading] = useState(false);
	const [currentPageName, setCurrentPageName] = useState("");
	const didMount = useRef(true);
	const { boardName } = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const allDashboards = useSelector(selectAllDashboards);
	const dispatch = useDispatch();
	const [boards, setBoards] = useState(allDashboards);

	const lookForBg = () => {
		// const title = location.pathname.split("/")[2];

		const all = allDashboards.filter(dashboard => {
			return dashboard.title === boardName;
		});

		return all;
	};

	useEffect(() => {
		setCurrentPageName(boardName);
		// This effect could be used to handle specific logic when the user navigates to a different dashboard
		// For example, loading data related to the new boardName from useParams
		// Logic here will depend on your application's requirements
	}, [location.pathname, boardName]); // Reacting to changes in navigation

	useEffect(() => {
		setBoards(allDashboards);
		if (didMount.current !== true && boardName !== currentPageName) {
			return;
		}
		if (allDashboards.length === 0) {
			navigate(`/home`, {
				replace: true,
			});
		}
		if (
			boards.length !== allDashboards.length &&
			boardName &&
			allDashboards.length > 0
		) {
			dispatch(
				getDashboardByIDThunk(allDashboards[allDashboards.length - 1]?._id),
			);
		}
		if (allDashboards.length > 0 && !boardName) {
			setLoading(true);
			const lastDashboard = allDashboards[allDashboards.length - 1] ?? "";
			setCurrentPageName(lastDashboard.title);
			navigate(`/home/${lastDashboard.title}`, {
				replace: true,
				state: { id: lastDashboard._id },
			});
			setLoading(false);
		}
		didMount.current = false;
	}, [
		allDashboards,
		navigate,
		boardName,
		currentPageName,
		boards.length,
		dispatch,
	]);

	return (
		<ScreensPageWrap $bcgurl={lookForBg()[0]?.backgroundURL}>
		{loading ? (	
			<LoaderApp />
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
