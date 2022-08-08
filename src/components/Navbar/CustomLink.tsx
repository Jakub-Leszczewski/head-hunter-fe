import React, { ReactNode } from 'react';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

interface Props {
  path: string;
  children: ReactNode;
}

export const CustomLink = ({ path, children }: Props) => {

  const resolvedPath = useResolvedPath(path)
  const active = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={active ? 'nav__list-item active' : 'nav__list-item'}>
      <NavLink className="nav__list-item-link" to={path}>{children}</NavLink>
    </li>
  );
};