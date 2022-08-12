import React, { FormEvent, useState } from 'react';
import { fetchTool } from '../../utils/fetchHelpers';
import { CreateHrDtoInterface } from 'types';

import { AddHrForm } from '../../components/form/AddHrForm/AddHrForm';
import { useResponseContext } from '../../contexts/PopupResponseContext'
import { setError } from '../../utils/setError'

export const AddHr = () => {
  const { setErrorHandler, setLoadingHandler } = useResponseContext();

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
    setLoadingHandler(true);
    const response = await fetchTool('hr', 'POST', hrData);
    if (!response.status) {
      console.log(setError(response.message))
      setErrorHandler(setError(response.message))
      setLoadingHandler(false);
      return;
    }

    setHrData({
      email: '',
      firstName: '',
      lastName: '',
      company: '',
      maxReservedStudents: 1,
    })
    setLoadingHandler(false);
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
