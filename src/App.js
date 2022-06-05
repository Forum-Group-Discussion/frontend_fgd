import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import HomePage from "./pages/Home/HomePage";
import AdminRoute from "./routes/AdminRoute";
import ErrorPage from "./pages/Error/ErrorPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<AdminRoute />}>
        <Route path="/admin/home" element={<HomePage />} />
      </Route>

      <Route path="*" element={<ErrorPage code="404" title="Ooopss Page Not Found" />} />
    </Routes>
  );
}

export default App;
