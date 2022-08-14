import { FormEvent, useState } from 'react';
import { GiThink } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../components/common/Input/Input'
import { Button } from '../../components/common/Button/Button'
import { fetchTool } from '../../utils/fetchHelpers';
import { useResponseContext } from '../../contexts/PopupResponseContext'
import { setError } from '../../utils/setError'

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const { setErrorHandler, setLoadingHandler } = useResponseContext();
  const [email, setEmail] = useState('');

  const emailHandler = (name: string, value: string | number) => {
    setEmail((email) => (value as string));
  };

  const submitForgotPasswordHandler = async (e: FormEvent) => {
    e.preventDefault();
    setLoadingHandler(true);
    const response = await fetchTool('auth/password', 'DELETE', { email });
    if (!response.status) {
      setErrorHandler(setError(response.message))
      setLoadingHandler(false);
      return;
    }
    navigate('/login');
    setLoadingHandler(false);
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
          value={email}
          change={emailHandler}
          required
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
