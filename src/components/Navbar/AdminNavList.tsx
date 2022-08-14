import React from 'react';

import { CustomLink } from './CustomLink';

export const AdminNavList = () => {

  return (
    <>
      <CustomLink path="/student/add">Dodaj kursanrów</CustomLink>
      <CustomLink path="/hr/add">Dodaj hra</CustomLink>
      <CustomLink path="/password/edit">Zmiana hasła</CustomLink>
      <CustomLink path="/notification">Powiadomienia</CustomLink>
    </>
  );
};