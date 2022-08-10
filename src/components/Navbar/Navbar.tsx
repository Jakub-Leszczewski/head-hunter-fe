import React from 'react';

import { AdminNavList } from './AdminNavList';
import { HrNavList } from './HrNavList';
import { useUser } from '../../contexts/UserContext';

export const Navbar = () => {

  const { user } = useUser()

  return (
    <div className="navbar">
      <nav className="nav">
        <ul className="nav__list">
          {user.role === 0 ? <AdminNavList/> : <HrNavList/>}
        </ul>
      </nav>
    </div>
  );
};