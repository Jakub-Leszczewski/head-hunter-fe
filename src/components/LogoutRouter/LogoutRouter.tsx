import { Route, Routes } from "react-router-dom";
import { StudentRegistration } from "../../views/StudentRegistration/StudentRegistration";
import { Login } from "../../views/Login/Login";
import { NewPassword } from "../../views/NewPassword/NewPassword";
import { Home } from "../Home/Home";

export const LogoutRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup/student/:token" element={<StudentRegistration />} />
            <Route path='/signup/hr/:token' element={<NewPassword />} />
        </Routes>
    );
};