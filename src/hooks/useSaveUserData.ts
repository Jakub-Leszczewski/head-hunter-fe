import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'

export function useSaveUserData() {
  const userContext = useContext(UserContext);

  return userContext.saveUserData;
}
