import React from 'react';

import { AdminNavList } from './AdminNavList';
import { HrNavList } from './HrNavList';
import { useUser } from '../../hooks/useUser';
import { UserRole } from 'types';

export const Navbar = () => {

  const user = useUser()

  return (
    <div className="navbar">
      <nav className="nav">
        <ul className="nav__list">
          {user?.role === UserRole.Admin ? <AdminNavList/> : <HrNavList/>}
        </ul>
      </nav>
    </div>
  );
};