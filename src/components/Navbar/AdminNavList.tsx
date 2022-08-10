import React from 'react';

import { CustomLink } from './CustomLink';

export const AdminNavList = () => {

  return (
    <>
      <CustomLink path="/add-students">Dodaj kursanrów</CustomLink>
      <CustomLink path="/add-hr">Dodaj hra</CustomLink>
      <CustomLink path="/password-edit">Zmiana hasła</CustomLink>
      <CustomLink path="/notifications">Powiadomienia</CustomLink>
    </>
  );
};