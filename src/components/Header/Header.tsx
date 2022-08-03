import React from 'react';
import { FaCaretDown } from 'react-icons/fa';

import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.png';

export const Header = () => {

  const name = 'Mateusz Kowalski';
  const studentGithub = '';
  const avatarImg = studentGithub ? `https://github.com/${studentGithub}.png`: avatar;

  return (
    <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <img className="header__logo-image" src={logo} alt="Logo Mega-K"/>
          </div>
          <div className="header__box">
            <div className="header__avatar">
              <img className="header__avatar-image" src={avatarImg} alt="Avatar HR-a"/>
            </div>
            <div className="header__user-name">
              <p>{name}</p>
            </div>
            <div className="header__arrow">
              <FaCaretDown/>
            </div>
          </div>
        </div>
    </header>
  );
};