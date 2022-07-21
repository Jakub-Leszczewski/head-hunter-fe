import React, {FormEvent, useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from '../../common/Button/Button';
import {Input} from '../../common/Input/Input';
import logo from '../../../assets/images/logo.png';

interface Consumer {
  email: string;
  password: string;
}

export const Login = () => {
  const [consumer, setConsumer] = useState<Consumer>({email: '', password: ''});

  const editConsumer = (name: string, value: string | number) => {
    setConsumer((consumer) => ({
      ...consumer,
      [name]: value,
    }));
  };

  const submitLoginHandler = (e: FormEvent): void => {
    e.preventDefault();
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
      <Input
        name='password'
        type='password'
        placeholder='Hasło'
        className='login__input'
        value={consumer.password}
        change={editConsumer}
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
