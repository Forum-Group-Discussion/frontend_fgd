import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./user/pages/Login/LoginPage";
import RegisterPage from "./user/pages/Register/RegisterPage";
import LandingPage from "./user/pages/Landing/LandingPage";
import HomePage from "./admin/pages/Home/HomePage";
import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<AdminRoute />}>
        <Route path="/admin/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
