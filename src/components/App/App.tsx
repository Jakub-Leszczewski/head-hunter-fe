import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Login } from '../../views/Login/Login';
import { useIsAuth } from '../../hooks/useIsAuth';
import { Navbar } from '../Navbar/Navbar';
import { useUser } from '../../hooks/useUser';
import { OnlyUserResponse, UserRole } from 'types';

export const App = () => {

  const isAuth = useIsAuth();
  const user = useUser();

  return (
    <div className="app">
      {isAuth
        ? <>
          <Header />
          {[UserRole.Admin, UserRole.Hr].includes((user as OnlyUserResponse).role) && <Navbar />}
          <Main />
        </>
        : <Login />
      }
    </div>
  );
};
