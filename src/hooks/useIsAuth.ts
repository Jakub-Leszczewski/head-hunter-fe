import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export function useIsAuth(): boolean {
  const userContext = useContext(UserContext);

  return !!userContext?.user;
}
