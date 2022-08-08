import React, { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

interface Props {
  password: string;
  name: string;
  changePassword: (name: string, value: string) => void;
  className?:string;
  placeholder?: string;
  blur?: () => void;
}

export const InputPassword = ({ password, name, changePassword, className, placeholder, blur }: Props) => {

  const [passwordView, setPasswordView] = useState(false);

  return (
    <div className="input-password">
      <input
        name={name}
        value={password}
        type={passwordView ? 'text' : 'password'}
        className={`input-password__input ${className ? className : ''}`}
        placeholder={placeholder}
        onChange={e => changePassword(name, e.target.value)}
        onBlur={blur}
      />
      <div
        className="input-password__icon-box"
        onClick={() => setPasswordView(!passwordView)}
      >
        {passwordView
          ? <BsEyeSlash
            className="input-password__icon-box-icon"
          />
          : <BsEye
            className="input-password__icon-box-icon"
          />
        }
      </div>
    </div>
  );
};