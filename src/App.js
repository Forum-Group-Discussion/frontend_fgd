import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import AdminRoute from "./routes/AdminRoute";
import ErrorPage from "./pages/Error/ErrorPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import HasSignInRoute from "./routes/HasSignInRoute";
import UserRoute from "./routes/UserRoute";
import HomeUserPage from "./pages/UserPages/Home/HomeUserPage";
import Dashboard from "./pages/AdminPages/Pages/Dashboard/Dashboard";
import KelolaThread from "./pages/AdminPages/Pages/Kelola Thread/KelolaThread";
import KelolaUSer from "./pages/AdminPages/Pages/Kelola User/KelolaUser";
import Setting from "./pages/AdminPages/Pages/Setting/Setting";

function App() {
  return (
    <Routes>
      <Route element={<HasSignInRoute />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<AdminRoute/>}>
      </Route>

      <Route>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="KelolaThread" element={<KelolaThread/>}/>
          <Route path="KelolaUser" element={<KelolaUSer/>}/>
          <Route path="Setting" element={<Setting/>}/>
      </Route>

      <Route element={<UserRoute />}>
        <Route path="/user/home" element={<HomeUserPage />} />
      </Route>

      <Route path="*" element={<ErrorPage code="404" title="Ooopss Page Not Found" />} />
    </Routes>

  );
}

export default App;
