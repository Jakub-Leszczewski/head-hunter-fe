import React, { useState } from 'react';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

import logo from '../../../assets/images/logo.png';
import { Input } from '../../components/common/Input/Input'
import { Label } from '../../components/common/Label/Label'
import { Button } from '../../components/common/Button/Button'

interface Passwords {
  password: string;
  confirmPassword: string;
  passwordView: boolean;
  confirmPasswordView: boolean;
}

export const HRRegistration = () => {

  const [passwords, setPasswords] = useState<Passwords>({
    password: '',
    confirmPassword: '',
    passwordView: false,
    confirmPasswordView: false,
  })

  const changePassword = (name: string, value: string | number | boolean) => {
    (setPasswords(passwords => ({
        ...passwords,
        [name]: value,
      }))
    )
  };

  return (
    <div className="hr-registration">
      <img className="hr-registration__image" src={logo} alt="MegaK logo"/>
      <h2 className="hr-registration__title">
        Rejestracja HR-a
      </h2>
      <form className="hr-registration__form">
        <div className="hr-registration__form-input">
          <Label
            htmlFor="password"
            textName="Hasło"
          />
          <Input
            name="password"
            value={passwords.password}
            change={changePassword}
            type={passwords.passwordView ? 'text' : 'password'}
          />
          <div
            className="hr-registration__form-icon-box"
            onClick={() => changePassword('passwordView', !passwords.passwordView)}
          >
            {passwords.passwordView
              ? <BsEyeSlash
                className="hr-registration__form-icon"
              />
              : <BsEye
                className="hr-registration__form-icon"
              />
            }
          </div>
        </div>
        <div className="hr-registration__form-input">
          <Label
            htmlFor="confirmPassword"
            textName="Powtórz hasło"
          />
          <Input
            name="confirmPassword"
            value={passwords.confirmPassword}
            change={changePassword}
            type={passwords.confirmPasswordView ? 'text' : 'password'}
          />
          <div
            className="hr-registration__form-icon-box"
            onClick={() => changePassword('confirmPasswordView', !passwords.confirmPasswordView)}
          >
            {passwords.confirmPasswordView
              ? <BsEyeSlash
                className="hr-registration__form-icon"
              />
              : <BsEye
                className="hr-registration__form-icon"
              />
            }
          </div>
        </div>

        <div className="hr-registration__form-button">
          <Button
            textName="Potwierdz"
          />
        </div>
      </form>
    </div>
  );
};
