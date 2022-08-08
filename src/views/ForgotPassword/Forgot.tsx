import { FormEvent, useState } from 'react';
import { GiThink } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { Input } from '../../components/common/Input/Input'
import { Button } from '../../components/common/Button/Button'

interface Email {
  email: string;
}

export const Forgot = () => {
  const [email, setEmail] = useState<Email>({
    email: '',
  });

  const emailHandler = (name: string, value: string | number) => {
    setEmail((email) => ({
      ...email,
      [name]: value,
    }));
  };

  const submitForgotPasswordHandler = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <div className='forgot'>
      <div className='forgot__icon'>
        <GiThink className='forgot__icon-key' />
      </div>
      <div className='forgot__text'>
        <h2>Nie pamiętasz hasła?</h2>
        <small>
          Proszę wpisz adres email podany podczas rejestracji. Otrzymasz
          tymczasowy link do zresetowania hasła.
        </small>
      </div>
      <form className='forgot__form' onSubmit={submitForgotPasswordHandler}>
        <label htmlFor='email' className='forgot__form-label'>
          Email
        </label>
        <Input
          className='forgot__form-input'
          name='email'
          type='email'
          placeholder='Wpisz swój email'
          value={email.email}
          change={emailHandler}
        />
        <Button
          type='submit'
          className='forgot_form_btn'
          textName='Wyślij link'
        />
      </form>
      <Link to='/login' className='forgot__link'>
        ← Wróć do logowania
      </Link>
    </div>
  );
};
