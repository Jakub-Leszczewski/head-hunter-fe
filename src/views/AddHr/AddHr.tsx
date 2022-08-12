import React, { FormEvent, useState } from 'react';
import { fetchTool } from '../../utils/fetchHelpers';
import { CreateHrDtoInterface } from 'types';

import { AddHrForm } from '../../components/form/AddHrForm/AddHrForm';

export const AddHr = () => {

  const [hrData, setHrData] = useState<CreateHrDtoInterface>({
    email: '',
    firstName: '',
    lastName: '',
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

  const handleAddHr = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetchTool('hr', 'POST', hrData);
    if (!response.status) return console.log('coś poszło nie tak');
    console.log('Dodano HRa');
    setHrData({
      email: '',
      firstName: '',
      lastName: '',
      company: '',
      maxReservedStudents: 1,
    })
  };

  return (
    <div className="add-hr">
      <h1 className="add-hr__title">Dodawanie Hr-a</h1>
      <AddHrForm
        hrData={hrData}
        changeHr={changeHr}
        handleAddHr={handleAddHr}
      />
    </div>
  );
};
