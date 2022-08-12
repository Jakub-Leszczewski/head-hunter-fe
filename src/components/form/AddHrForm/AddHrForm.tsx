import React, { FormEvent, useEffect, useState } from 'react';
import { Label } from '../../common/Label/Label'
import { Input } from '../../common/Input/Input'
import { Button } from '../../../components/common/Button/Button';
import { CreateHrDtoInterface } from 'types';

interface Props {
  hrData: CreateHrDtoInterface;
  changeHr: (name: string, value: string | number) => void;
  handleAddHr: (e: FormEvent) => void;
}

export const AddHrForm = ({ hrData, changeHr, handleAddHr }: Props) => {

  const [fullName, setFullName] = useState('');

  const handleFullNameChange = (name: string, value: string | number) => {
    setFullName(value as string);
  };

  useEffect(() => {
    const fullNameArr = fullName.split(' ');
    changeHr('firstName', fullNameArr[0]);
    changeHr('lastName', fullNameArr[1] || '');
  }, [fullName]);

  useEffect(() => {
    if (hrData.firstName === '' && hrData.lastName === '') {
      setFullName('');
    }
  }, [hrData]);

  return (
    <form className="add-hr__form" onSubmit={handleAddHr}>
      <div className="add-hr__form-input">
        <Label
          htmlFor="email"
          textName="Email"
          className='add-hr__form-input-label'
        />
        <Input
          name="email"
          type='email'
          value={hrData.email}
          change={changeHr}
          required={true}
        />
      </div>
      <div className="add-hr__form-input">
        <Label
          htmlFor="fullName"
          textName="Imię i Nazwisko"
          className='add-hr__form-input-label'
        />
        <Input
          name="fullName"
          value={fullName}
          change={handleFullNameChange}
          required={true}
        />
      </div>
      <div className="add-hr__form-input">
        <Label
          htmlFor="company"
          textName="FIrma"
          className='add-hr__form-input-label'
        />
        <Input
          name="company"
          value={hrData.company}
          change={changeHr}
          required={true}
        />
      </div>
      <div className="add-hr__form-input">
        <Label
          htmlFor="maxReservedStudents"
          textName="Maksymalna liczba kursantów"
          className='add-hr__form-input-label'
        />
        <Input
          name="maxReservedStudents"
          type='number'
          min='1'
          max='999'
          value={hrData.maxReservedStudents}
          change={changeHr}
          required={true}
        />
      </div>
      <Button
        textName="Dodaj"
        className="add-hr__btn"
      />
    </form>
  );
};
