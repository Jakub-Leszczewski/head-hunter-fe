import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserRole } from "types";
import { useUser } from "../../hooks/useUser";

export const Home = () => {

    const user = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) return navigate('/login');
        switch (user.role) {
            case UserRole.Admin:
                return navigate('/student/add');

            case UserRole.Hr:
                return navigate('/student');

            case UserRole.Student:
                return navigate(`/student/${user.id}`);

            default:
                break;
        }
    }, []);

    return null;
};