import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./user/pages/Login/LoginPage";
import RegisterPage from "./user/pages/Register/RegisterPage";
import LandingPage from "./user/pages/Landing/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/landing" element={<LandingPage/>}></Route>
    </Routes>
  );
}

export default App;
