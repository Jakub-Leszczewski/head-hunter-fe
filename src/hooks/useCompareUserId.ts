import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'

export function useCompareUserId(): (id: any) => boolean {
  const userContext = useContext(UserContext);

  return (id: any): boolean => (userContext.user?.id === id);
}
