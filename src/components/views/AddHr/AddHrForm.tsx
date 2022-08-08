import React from 'react';

import { HrData } from './AddHr';
import { Label } from '../../common/Label/Label';
import { Input } from '../../common/Input/Input';

interface Props {
  hrData: HrData;
  changeHr: (name: string, value: string | number) => void;
  handleAddHr:()=>void;
}

export const AddHrForm = ({ hrData, changeHr,handleAddHr }: Props) => {

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
          value={hrData.fullName}
          change={changeHr}
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
    </form>
  );
};