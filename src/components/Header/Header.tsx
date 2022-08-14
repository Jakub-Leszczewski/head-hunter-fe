import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { useUser } from '../../hooks/useUser';
import { OnlyUserResponse, StudentResponseData, UserRole } from 'types';
import { useUserData } from '../../hooks/useUserData';
import { fetchTool } from '../../utils/fetchHelpers';
import { useRefreshUser } from '../../hooks/useRefreshUser';

import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.png';
import { useResponseContext } from '../../contexts/PopupResponseContext'
import { setError } from '../../utils/setError'

export const Header = () => {
  const { setErrorHandler, setLoadingHandler } = useResponseContext();
  const user = useUser() as OnlyUserResponse;
  const userData = useUserData() as StudentResponseData;
  const refreshUser = useRefreshUser();
  const navigate = useNavigate();
  const { role, firstName, lastName } = user;
  const avatarImg = role === UserRole.Student ? `https://github.com/${userData.githubUsername}.png` : avatar;

  const handleLogout = async () => {
    setLoadingHandler(true);
    const response = await fetchTool('auth/logout', 'DELETE');
    if (!response.status) {
      setErrorHandler(setError(response.message))
      setLoadingHandler(false);
      return;
    }

    refreshUser();
    navigate('/login');
    setLoadingHandler(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img className="header__logo-image" src={logo} alt="Logo Mega-K" />
        </div>
        <div className="header__box">
          <div className="header__avatar">
            <img className="header__avatar-image" src={avatarImg} alt="Avatar HR-a" />
          </div>
          <div className="header__user-name">
            <p>{firstName} {lastName}</p>
          </div>
          <div className="header__arrow" onClick={handleLogout}>
            <FiLogOut />
          </div>
        </div>
      </div>
    </header>
  );
};
