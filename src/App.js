import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import AdminRoute from "./routes/AdminRoute";
import ErrorPage from "./pages/Error/ErrorPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import HasSignInRoute from "./routes/HasSignInRoute";
import UserRoute from "./routes/UserRoute";
import HomeAdminPage from "./pages/AdminPages/Home/HomeAdminPage";
import Home from "./pages/UserPages/Home/Home"

function App() {
  return (
    <Routes>
      <Route element={<HasSignInRoute />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<AdminRoute />}>
        <Route path="/admin/home" element={<HomeAdminPage />} />
      </Route>

      <Route element={<UserRoute />}>
      <Route path="/user/home" element={<Home /> } />
      </Route>

      <Route path="*" element={<ErrorPage code="404" title="Ooopss Page Not Found" />} />
    </Routes>
  );
}

export default App;
