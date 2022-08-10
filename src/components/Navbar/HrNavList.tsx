import React from 'react';

import { CustomLink } from './CustomLink';

export const HrNavList = () => {

  return (
    <>
      <CustomLink path="/student">Dostępni kursanci</CustomLink>
      <CustomLink path="/student-on-interview">Do rozmowy</CustomLink>
    </>
  );
};