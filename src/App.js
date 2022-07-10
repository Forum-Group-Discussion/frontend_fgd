import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
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
import FullThread from "./pages/UserPages/components/FullThread";
import { useCallback } from "react";
import axiosInstance from "./networks/api";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { DATA_THREAD } from "./redux/threadSlice";
import { getToken, removeUserSession } from "./utils/helpers";
import Coba from "./coba";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchData = useCallback(() => {
    if (getToken() !== null) {
      const response = axiosInstance
        .get("v1/thread/desc")
        .then((response) => {
          dispatch(DATA_THREAD(response.data.data));
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data.message === "TOKEN_INVALID_OR_TOKEN_NULL") {
            Swal.fire({
              title: "Sorry, Your Session has expired, please Login again!",
              icon: "warning",
              showConfirmButton: true,
              background: "#151921",
              color: "#fff",
              confirmButtonColor: "#FF3D00",
              cancelButtonColor: "#D91E11",
              confirmButtonText: "Login",
              focusConfirm: true,
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  toast: true,
                  icon: "success",
                  title: "Log Out Successfully",
                  animation: false,
                  background: "#222834",
                  color: "#18B015",
                  position: "bottom-end",
                  showConfirmButton: false,
                  timer: 4000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                    removeUserSession(navigate);
                    window.location.reload();
                  },
                });
              }
            });
          }
        });
      return response;
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData, getToken()]);
  return (
    <Routes>
      <Route element={<HasSignInRoute />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<AdminRoute />}>
        {/* <Route path="/admin/home" element={<Dashboard />} />
        <Route path="KelolaThread" element={<KelolaThread />} />
        <Route path="KelolaUser" element={<KelolaUSer />} />
        <Route path="Setting" element={<Setting />} /> */}
      </Route>

      <Route path="/admin/home" element={<Dashboard />} />
      <Route path="/KelolaThread" element={<KelolaThread />} />
      <Route path="/KelolaThread/category/thread" element={<CategoryThread />} />
      <Route path="/KelolaUser" element={<KelolaUSer />} />
      <Route path="/KelolaUser/category" element={<Category />} />
      <Route path="/KelolaUser/category/user/:nameUser" element={<CategoryUser />} />
      <Route path="/Setting" element={<Setting />} />

      <Route element={<UserRoute />}>
        <Route path="/user/home" element={<HomeUserPage />} />
        <Route path="/user/thread/:id" element={<FullThread />} />
        <Route path="/user/home/:category" element={<HomeUserPage />} />
        <Route path="/user/account" element={<ProfileUserPage />} />
        <Route path="/user/account/edit" element={<EditProfile />} />
        <Route path="/user/account/other" element={<ProfileOtherUserPage />} />
        <Route path="/user/create" element={<CreateThread />} />
        <Route path="/user/edit" element={<EditThread />} />
        <Route path="/user/topic" element={<TopicPage />} />
        <Route path="/coba" element={<Coba />} />
      </Route>

      <Route path="*" element={<ErrorPage code="404" title="Ooopss Page Not Found" />} />
    </Routes>
  );
}

export default App;
