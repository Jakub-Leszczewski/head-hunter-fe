import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from 'react'

import { GetUserResponse, HrResponseData, UserRole, OnlyUserResponse, StudentResponseData } from 'types';
import { fetchApiTool } from '../utils/fetchHelpers'

interface Props {
  children: ReactNode;
}

interface UserContextType {
  user: OnlyUserResponse | null;
  data: HrResponseData | StudentResponseData | null;
  refreshUser: () => void;
  saveUserData: (user: GetUserResponse | null) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  data: null,
  refreshUser: () => { },
  saveUserData: (user: GetUserResponse | null) => { },
});

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<OnlyUserResponse | null>(null);
  const [data, setData] = useState<HrResponseData | StudentResponseData | null>(null);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      if (user === null) {
        const api = await fetchApiTool<GetUserResponse>(`auth/user`);

        if (api.status) {
          const { results } = api;
          saveUserData(results);
        } else {
          setUser(null);
          setData(null);
        }

        setInitialLoading(false);
      }
    })();
  }, [user]);

  const refreshUser = async () => {
    setUser(null);
  };

  const saveUserData = (user: GetUserResponse | null) => {
    if (user) {
      switch (user.role) {
        case UserRole.Admin: {
          setUser(user);
          setData(null);
          break;
        }
        case UserRole.Student: {
          const { student, ...userData } = user;
          setUser(userData);
          setData(student);
          break;
        }
        case UserRole.Hr: {
          const { hr, ...userData } = user;
          setUser(userData);
          setData(hr);
          break;
        }
      }
    }
  };

  return (
    <UserContext.Provider value={{
      user,
      data,
      refreshUser,
      saveUserData,
    }}>
      {/*zamiast null można wstawić ładny spinner*/}
      {!initialLoading ? children : false}
    </UserContext.Provider>
  );
};
