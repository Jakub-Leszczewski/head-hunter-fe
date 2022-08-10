import { useContext } from 'react'
import { HrResponseData, StudentResponseData } from 'types';
import { UserContext } from '../contexts/UserContext'

export function useUserData(): HrResponseData | StudentResponseData | null {
  const userContext= useContext(UserContext);

  return userContext?.data;
}
