import React from 'react';

import { CustomLink } from './CustomLink';

export const HrNavList = () => {

  return (
    <>
      <CustomLink path="/students">Dostępni kursanci</CustomLink>
      <CustomLink path="/students-on-interview">Do rozmowy</CustomLink>
    </>
  );
};