import { Route, Routes } from "react-router-dom";
import { StudentRegistration } from "../../views/StudentRegistration/StudentRegistration";
import { Login } from "../../views/Login/Login";
import { NewPassword } from "../../views/NewPassword/NewPassword";
import { Home } from "../Home/Home";
import { ForgotPassword } from "../../views/ForgotPassword/ForgotPassword";
import { HRRegistration } from "../../views/HRRegistration/HRRegistration";
import { WithResponseInfoToast } from '../../hoc/WithResponseInfoToast'

export const LogoutRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/password/forgot' element={<ForgotPassword />} />
            <Route path="/signup/student/:token" element={<StudentRegistration />} />
            <Route path='/signup/hr/:token' element={<HRRegistration />} />
            <Route path='/password/:token' element={<NewPassword />} />
        </Routes>
    );
};
