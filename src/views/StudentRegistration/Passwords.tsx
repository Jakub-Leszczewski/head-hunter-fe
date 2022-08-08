import React from 'react';

import { Student } from './StudentRegistration';
import { Label } from '../../components/common/Label/Label';
import { InputPassword } from '../../components/common/InputPassword/InputPassword';

interface Props {
  student: Student;
  changeStudent: (name: string, value: string | number) => void;
}

export const Passwords = ({ student, changeStudent }: Props) => {

  const { password, confirmPassword } = student;

  return (
    <>
      <div className="student-registration__form-input">
        <Label
          htmlFor="password"
          textName="Hasło"
        />
        <InputPassword
          password={password}
          name="password"
          changePassword={changeStudent}
        />
      </div>
      <div className="student-registration__form-input">
        <Label
          htmlFor="confirmPassword"
          textName="Powtórz hasło"
        />
        <InputPassword
          password={confirmPassword}
          name="confirmPassword"
          changePassword={changeStudent}
        />
      </div>
    </>
  );
};