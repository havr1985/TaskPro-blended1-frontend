import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { currentThunk } from "./redux/Auth/authOperation";
import { RestictedRoute } from "./components/RestictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import { selectAuthIsLoading } from "./redux/Auth/authSelectors";
import { Loader } from "./shared/Loader/loader";
import { ToastContainer } from "react-toastify";

import ErrorPage from "./pages/ErrorPage";

const WelcomePage = lazy(() => import("./pages/WelcomePage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const ScreensPage = lazy(() => import("./pages/ScreensPage"));

function App() {
  const isRefreshing = useSelector(selectAuthIsLoading);

  // const allDashboards = useSelector(selectAllDashboards);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  return (
    <> 
      {isRefreshing ? (
        <Loader/>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <RestictedRoute
                  redirectTo="/home"
                  component={<WelcomePage />}
                />
              }
            />

            <Route
              path="/home"
              element={
                <PrivateRoute redirectTo="/" component={<HomePage />} />
              }>
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
                <RestictedRoute redirectTo="/home" component={<AuthPage />} />
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
