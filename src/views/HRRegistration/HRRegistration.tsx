import React, { FormEvent, useState } from 'react';
import logo from '../../assets/images/logo.png';
import { Label } from '../../components/common/Label/Label';
import { Button } from '../../components/common/Button/Button';
import { fetchTool } from '../../utils/fetchHelpers';
import { useNavigate, useParams } from 'react-router-dom';
import { InputPassword } from '../../components/common/InputPassword/InputPassword';

interface Passwords {
  password: string;
  confirmPassword: string;
}

export const HRRegistration = () => {

  const { token } = useParams();
  const navigate = useNavigate();

  const [passwords, setPasswords] = useState<Passwords>({
    password: '',
    confirmPassword: '',
  });
  const { confirmPassword, password } = passwords;

  const changePassword = (name: string, value: string | number | boolean) => {
    (setPasswords(passwords => ({
      ...passwords,
      [name]: value,
    }))
    )
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) return console.log('Podano rózne hasła.');
    const response = await fetchTool(`hr/${token}`, 'PATCH', { newPassword: password });
    if (!response.status) return console.log('Coś się popsuło i nie było mnie słychać');
    console.log('Zarejestrowano HRa');
    navigate('/login');
  };

  return (
    <div className="hr-registration">
      <img className="hr-registration__image" src={logo} alt="MegaK logo" />
      <h2 className="hr-registration__title">
        Rejestracja HR-a
      </h2>
      <form className="hr-registration__form" onSubmit={handleSubmit}>
        <div className="hr-registration__form-input">
          <Label
            htmlFor="password"
            textName="Hasło"
          />
          <InputPassword
            name="password"
            changePassword={changePassword}
            password={password}
          // className=""
          />
        </div>
        <div className="hr-registration__form-input">
          <Label
            htmlFor="confirmPassword"
            textName="Powtórz hasło"
          />
          <InputPassword
            name="confirmPassword"
            changePassword={changePassword}
            password={confirmPassword}
          // className=""
          />
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
