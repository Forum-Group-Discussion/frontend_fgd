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
<<<<<<< HEAD
import ProfileUserPage from "./pages/UserPages/Account/ProfileUserPage";
import EditProfile from "./pages/UserPages/Account/EditProfile";
import ProfileOtherUserPage from "./pages/UserPages/Account/ProfileOtherUserPage";
=======
import CreateThread from "./pages/UserPages/CreateThread/CreateThread";
>>>>>>> 6be00f9c20ca84cf685973626812fd79bacc462d

function App() {
  return (
    <Routes>
      <Route element={<HasSignInRoute />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
<<<<<<< HEAD
        <Route path="/user/account" element={<ProfileUserPage/>} />
        <Route path="/user/account/edit" element={<EditProfile />} />
        <Route path="/user/account/other" element={<ProfileOtherUserPage />} />
=======
        <Route path="/user/create" element={<CreateThread />} />
>>>>>>> 6be00f9c20ca84cf685973626812fd79bacc462d
      </Route>

      <Route element={<AdminRoute />}>
        {/* <Route path="/admin/home" element={<Dashboard />} />
        <Route path="KelolaThread" element={<KelolaThread />} />
        <Route path="KelolaUser" element={<KelolaUSer />} />
        <Route path="Setting" element={<Setting />} /> */}
      </Route>

      <Route path="/admin/home" element={<Dashboard />} />
        <Route path="KelolaThread" element={<KelolaThread />} />
        <Route path="KelolaUser" element={<KelolaUSer />} />
        <Route path="Setting" element={<Setting />} />

      <Route element={<UserRoute />}>
        <Route path="/user/home" element={<HomeUserPage />} />
      </Route>

      <Route path="*" element={<ErrorPage code="404" title="Ooopss Page Not Found" />} />
    </Routes>
  );
}

export default App;
