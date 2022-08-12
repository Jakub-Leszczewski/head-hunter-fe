import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InputPassword } from '../../components/common/InputPassword/InputPassword';
import { Button } from '../../components/common/Button/Button'
import { Input } from '../../components/common/Input/Input'
import { fetchTool } from '../../utils/fetchHelpers';
import { LoginResponse } from 'types';
import { useSaveUserData } from '../../hooks/useSaveUserData';

import logo from '../../assets/images/logo.png';

interface Consumer {
  email: string;
  password: string;
}

export const Login = () => {

  const saveUserData = useSaveUserData();
  const navigate = useNavigate();

  const [consumer, setConsumer] = useState<Consumer>({
    email: '',
    password: '',
  });

  const editConsumer = (name: string, value: string | number) => {
    setConsumer((consumer) => ({
      ...consumer,
      [name]: value,
    }));
  };

  const submitLoginHandler = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetchTool<LoginResponse>('auth/login', 'POST', consumer);
    if (!response.status) return console.log('Coś się popsuło i nie było mnie słychać');
    saveUserData(response.results);
    navigate('/');
  };

  return (
    <form onSubmit={submitLoginHandler} className='login'>
      <img className='login__image' src={logo} alt='MegaK logo' />
      <Input
        name='email'
        type='email'
        placeholder='E-mail'
        className='login__input'
        value={consumer.email}
        change={editConsumer}
      />
      <InputPassword
        changePassword={editConsumer}
        name="password"
        password={consumer.password}
        placeholder="Hasło"
        containerClassName="login__input-container"
      />
      <div className='login__container'>
        <Link className='login__link' to='/'>
          Zapomniałeś hasła?
        </Link>
        <Button textName='Zaloguj się' type='submit' className='login__btn' />
      </div>
    </form>
  );
};
