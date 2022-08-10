import React, { useState } from 'react';

import { UpdateStudentDtoInterface } from 'types';

import { Label } from '../../components/common/Label/Label';
import { Input } from '../../components/common/Input/Input';

interface Props {
  student: Omit<UpdateStudentDtoInterface, 'email' | 'password'>;
  changeStudent: (name: string, value: string | number) => void;
}

export const PersonalData = ({ student, changeStudent }: Props) => {

  const { firstName, lastName, phoneNumber, githubUsername } = student;
  const [incorrectGithubName, setIncorrectGithubName] = useState(true);

  const correctGithubName = async () => {
      const response = await fetch(`https://api.github.com/users/${githubUsername}`);
      if (response.status === 200) {
        setIncorrectGithubName(true);
      } else {
        setIncorrectGithubName(false);
      }
  };

  return (
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
          required={true}
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
          required={true}
        />
      </div>
      <div className="student-registration__form-input">
        <Label
          htmlFor="phone"
          textName="Telefon"
        />
        <Input
          name="phoneNumber"
          value={phoneNumber}
          change={changeStudent}
        />
      </div>
      <div className="student-registration__form-input">
        <Label
          htmlFor="githubUsername"
          textName={incorrectGithubName ? 'Login GitHuba' : 'Login GitHuba Niepoprawny'}
          className={incorrectGithubName ? '' : 'student-registration__form-input-error'}
        />
        <Input
          name="githubUsername"
          value={githubUsername}
          change={changeStudent}
          blur={correctGithubName}
          required={true}
        />
      </div>
    </>
  );
};