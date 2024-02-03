import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy } from "react";
import AuthPage from "./pages/AuthPage";


const WelcomePage = lazy(() => import("./pages/WelcomePage"));
const HomePage = lazy(() => import('./pages/HomePage'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="auth/:id" element={<AuthPage />} />
        <Route path="/home" element={<HomePage/> } />
      </Route>
    </Routes>
  );
}

export default App;
