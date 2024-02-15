import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { currentThunk } from "./redux/Auth/authOperation";
import { RestictedRoute } from "./components/RestictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import { selectAuthIsLoading } from "./redux/Auth/authSelectors";
import { LoaderApp } from "./shared/Loader/loader";
import { ToastContainer } from "react-toastify";
/* import LoaderBox from "./AppStyled"; */
import ErrorPage from "./pages/ErrorPage";

const WelcomePage = lazy(() => import("./pages/WelcomePage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const ScreensPage = lazy(() => import("./pages/ScreensPage"));
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const authKey = "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"; //TODO need set OAuth 2.0 Client IDs
  const isRefreshing = useSelector(selectAuthIsLoading);

  // const allDashboards = useSelector(selectAllDashboards);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  return (
    <>
    <GoogleOAuthProvider clientId={authKey}>

      {isRefreshing ? (
          <LoaderApp  />
       
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

      </GoogleOAuthProvider>;
    </>

  );
}

export default App;
