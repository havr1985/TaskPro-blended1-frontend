import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { currentThunk } from "./redux/Auth/authOperation";
import { RestictedRoute } from "./components/RestictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import { selectAuthIsLoading } from "./redux/Auth/authSelectors";

import { ToastContainer } from "react-toastify";

import ErrorPage from "./pages/ErrorPage";
// import { selectAllDashboards } from "./redux/Dashboard/dashboardsSelectors";
// import axios from "axios";
import instance from "../src/services/api/auth";
// import { allDashboardsThunk } from "./redux/Dashboard/dashboardOperation";

const WelcomePage = lazy(() => import("./pages/WelcomePage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const ScreensPage = lazy(() => import("./pages/ScreensPage"));

function App() {
  const isRefreshing = useSelector(selectAuthIsLoading);

  // const [allDashboards, setAllDashboards] = useState([]);
  // console.log("allDashboards :>> ", allDashboards);

  // console.log("lastDashboard :>> ", lastDashboard);

  // const token = JSON.parse(localStorage.getItem("persist:auth")).token;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  // useEffect(() => {
  //   const getAllDashboards = async () => {
  //     try {
  //       const { data } = await instance.get("dashboard");
  //       setAllDashboards(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getAllDashboards();
  // }, []);
  // console.log(allDashboards);
  // const lastDashboard = allDashboards[allDashboards.length - 1] ?? "";

  return (
    <>
      {isRefreshing && allDashboards.length === 0 ? (
        <div>Loadind...</div>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <RestictedRoute
                  redirectTo={`/home/${lastDashboard?.title || ""}`}
                  component={<WelcomePage />}
                />
              }
            />

            <Route
              path="/home"
              element={<PrivateRoute redirectTo="/" component={<HomePage />} />}
            >
              <Route
                path=":boardName"
                element={
                  <PrivateRoute redirectTo="/" component={<ScreensPage />} />
                }
              />

              <Route
                index
                element={
                  <PrivateRoute redirectTo="/" component={<ScreensPage />} />
                }
              />
            </Route>
            <Route
              path="auth/:id"
              element={
                <RestictedRoute
                  redirectTo={`/home/${lastDashboard.title || ""}`}
                  component={<AuthPage />}
                />
              }
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      )}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
