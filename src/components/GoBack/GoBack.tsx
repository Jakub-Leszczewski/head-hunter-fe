import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const GoBack = () => {

    const navigate = useNavigate();

    return (
        <div className="main__go-back" onClick={() => navigate(-1)}>
            <FaChevronLeft />
            <p>Wróć</p>
        </div>
    );
};