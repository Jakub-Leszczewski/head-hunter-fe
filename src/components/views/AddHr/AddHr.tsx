import React, { useState } from 'react';

import { Button } from '../../common/Button/Button';
import { AddHrForm } from './AddHrForm';

export interface HrData {
  email: string;
  fullName: string;
  company: string;
  maxReservedStudents: number;
}

export const AddHr = () => {

  // const [hrData, setHrData] = useState<HrInterface>({
  //   id:'',
  //   company:'',
  //   maxReservedStudents:1,
  //   user:{
  //     id:'',
  //     lastName: '',
  //     firstName: '',
  //     email: '',
  //     hashPwd: '',
  //     role: UserRole.Hr,
  //     isActive: false,
  //     userToken: '',
  //     jwtId: '',
  //   }
  // });

  const [hrData, setHrData] = useState<HrData>({
    email: '',
    fullName: '',
    company: '',
    maxReservedStudents: 1,
  });

  const changeHr = (name: string, value: string | number) => {
    (setHrData(hrData => ({
        ...hrData,
        [name]: value,
      }))
    );
  };

  const handleAddHr = () => {

  };

  return (
    <div className="add-hr">
      <h1 className="add-hr__title">Dodawanie Hr-a</h1>
      <AddHrForm
        hrData={hrData}
        changeHr={changeHr}
        handleAddHr={handleAddHr}
      />
      <Button
        textName="Dodaj"
        className="add-hr__btn"
        click={handleAddHr}
      />
    </div>
  );
};