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
import ProfileUserPage from "./pages/UserPages/Account/ProfileUserPage";
import EditProfile from "./pages/UserPages/Account/EditProfile";
import ProfileOtherUserPage from "./pages/UserPages/Account/ProfileOtherUserPage";
import CreateThread from "./pages/UserPages/CreateThread/CreateThread";
import EditThread from "./pages/UserPages/CreateThread/EditThread";
import TopicPage from "./pages/UserPages/Topic/TopicPage";
import Category from "./pages/AdminPages/Pages/Kelola User/Pages/Category";
import CategoryUser from "./pages/AdminPages/Pages/Kelola User/Pages/CategoryUser";
import CategoryThread from "./pages/AdminPages/Pages/Kelola Thread/Pages/CategoryThread";
import Notifications from "./pages/AdminPages/Pages/Notifications/Notifications";

function App() {
  return (
    <Routes>
      <Route element={<HasSignInRoute />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<AdminRoute />}>
      <Route path="/admin/home" element={<Dashboard />} />
        <Route path="/KelolaThread" element={<KelolaThread />} />
        <Route path="/KelolaThread/category/thread" element={<CategoryThread/>} />
        <Route path="/KelolaUser" element={<KelolaUSer />} />
        <Route path="/KelolaUser/category" element={<Category/>} />
        <Route path="/KelolaUser/category/user" element={<CategoryUser/>} />
        <Route path="/Notifications" element={<Notifications/>}/>
        <Route path="/Setting" element={<Setting />} />
      </Route>

      

      <Route element={<UserRoute />}>
        <Route path="/user/home" element={<HomeUserPage />} />
        <Route path="/user/home/:category" element={<HomeUserPage />} />
        <Route path="/user/account" element={<ProfileUserPage />} />
        <Route path="/user/account/edit" element={<EditProfile />} />
        <Route path="/user/account/other" element={<ProfileOtherUserPage />} />
        <Route path="/user/create" element={<CreateThread />} />
        <Route path="/user/edit" element={<EditThread />} />
        <Route path="/user/topic" element={<TopicPage />} />
      </Route>

      <Route path="*" element={<ErrorPage code="404" title="Ooopss Page Not Found" />} />
    </Routes>
  );
}

export default App;
