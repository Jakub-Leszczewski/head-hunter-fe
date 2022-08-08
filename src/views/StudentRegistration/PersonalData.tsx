import React from 'react';

import { Student } from './StudentRegistration';
import { Label } from '../../components/common/Label/Label';
import { Input } from '../../components/common/Input/Input';

interface Props {
  student:Student;
  changeStudent:(name: string, value: string | number) => void;
}

export const PersonalData =({student,changeStudent}:Props)=>{

  const {firstName,lastName,phone,githubUsername} = student;

  return(
    <>
      <div className="student-registration__form-input">
        <Label
          htmlFor="firstName"
          textName="Imię"
        />
        <Input
          name="firstName"
          value={firstName}
          change={changeStudent}
        />
      </div>
      <div className="student-registration__form-input">
        <Label
          htmlFor="lastName"
          textName="Nazwisko"
        />
        <Input
          name="lastName"
          value={lastName}
          change={changeStudent}
        />
      </div>
      <div className="student-registration__form-input">
        <Label
          htmlFor="phone"
          textName="Telefon"
        />
        <Input
          name="phone"
          value={phone}
          change={changeStudent}
        />
      </div>
      <div className="student-registration__form-input">
        <Label
          htmlFor="githubUsername"
          textName="Login GitHuba"
        />
        <Input
          name="githubUsername"
          value={githubUsername}
          change={changeStudent}
        />
      </div>
    </>
  );
};