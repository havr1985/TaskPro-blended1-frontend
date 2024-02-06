import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy, useEffect } from "react";
import AuthPage from "./pages/AuthPage";
import { useDispatch } from "react-redux";
import { currentThunk } from "./redux/Auth/authOperation";
import { allDashboardsThunk } from "./redux/Dashboard/dashboardOperation";

const WelcomePage = lazy(() => import("./pages/WelcomePage"));
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        await dispatch(currentThunk());
        await dispatch(allDashboardsThunk());
      } catch (error) {
        console.log(error);
      }
    };

    getCurrentUser();
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="auth/:id" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
