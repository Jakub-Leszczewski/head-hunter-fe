import { useContext } from 'react';
import { OnlyUserResponse } from 'types';
import { UserContext } from '../contexts/UserContext'

export function useUser(): OnlyUserResponse | null {
  const userContextType = useContext(UserContext);

  return userContextType?.user;
}
