import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Login } from '../../views/Login/Login';
import { useIsAuth } from '../../hooks/useIsAuth';

export const App = () => {

  const isAuth = useIsAuth()

  return (
    <div className="app">
      {isAuth
        ? <>
          <Header/>
          <Main/>
        </>
        : <Login/>
      }
    </div>
  );
};
