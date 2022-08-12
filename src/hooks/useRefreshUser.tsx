import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'

export function useRefreshUser() {
    const userContext = useContext(UserContext);

    return userContext.refreshUser;
}