import { useUser } from "../../contexts/UserContext";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Login } from "../views/Login/Login";

export const App = () => {

    const { user } = useUser();

    // useAuthorization();

    return (
        <div className="app">
            {user.isLogged ?
                <>
                    <Header />
                    <Main />
                </> :
                <Login />
            }
        </div>
    );
};
