import React, { useState } from 'react';

import { Label } from '../../components/common/Label/Label';
import { InputPassword } from '../../components/common/InputPassword/InputPassword';

interface Props {
  changeStudent: (name: string, value: string | number) => void;
  validation: (name:boolean) => void;
}

interface PasswordsTypes {
  password: string;
  confirmPassword: string;
  correctPassword: boolean;
  samePassword: boolean;
}

export const Passwords = ({ changeStudent, validation }: Props) => {

  const [passwords, setPasswords] = useState<PasswordsTypes>({
    password: '',
    confirmPassword: '',
    correctPassword: false,
    samePassword: false,
  });
  const { password, confirmPassword, correctPassword, samePassword } = passwords;

  const changePassword = (name: string, value: string | number | boolean) => {
    (setPasswords(passwords => ({
        ...passwords,
        [name]: value,
      }))
    );
  };

  const isCorrectPassword = () => {
    const regularExpression = new RegExp('^(?=.{8,36}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$')
    if (password && regularExpression.test(password)) {
      changePassword('correctPassword', false);
    } else {
      changePassword('correctPassword', true);
    }
  };

  const isSamePassword = () => {
    if (confirmPassword && password === confirmPassword) {
      changePassword('samePassword', false);
      changeStudent('newPassword', password);
      validation(true);
    } else {
      changePassword('samePassword', true);
      validation(false);
    }
  };

  return (
    <>
      <div className="student-registration__form-input">
        {correctPassword ?
          <p className="student-registration__form-input-correct">hasło nie spełnia warunków</p>
          : null
        }
        <Label
          htmlFor="password"
          textName="Hasło"
        />
        <InputPassword
          password={password}
          name="password"
          changePassword={changePassword}
          blur={isCorrectPassword}
        />
      </div>
      <div className="student-registration__form-input">
        {samePassword ?
          <p className="student-registration__form-input-same">hasła nie są takie same</p>
          : null
        }
        <Label
          htmlFor="confirmPassword"
          textName="Powtórz hasło"
        />
        <InputPassword
          password={confirmPassword}
          name="confirmPassword"
          changePassword={changePassword}
          blur={isSamePassword}
        />
      </div>
    </>
  );
};