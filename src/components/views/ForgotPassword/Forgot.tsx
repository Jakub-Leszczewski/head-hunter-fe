import { FormEvent, useState } from 'react';
import { FiKey } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

interface Consumer {
  email: string;
}

export const Forgot = () => {
  const [consumer, setConsumer] = useState<Consumer>({
    email: '',
  });

  const editConsumer = (name: string, value: string | number) => {
    setConsumer((consumer) => ({
      ...consumer,
      [name]: value,
    }));
  };

  const submitForgotPasswordHandler = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <div className='forgot'>
      <div className='forgot_icon'>
        <FiKey className='forgot_icon_key' />
      </div>
      <div className='forgot_text'>
        <h2>Nie pamiętasz hasła?</h2>
        <small>
          Proszę wpisz adres email podany podczas rejestracji. Otrzymasz
          tymczasowy link do zresetowania hasła.
        </small>
      </div>
      <form className='forgot_form' onSubmit={submitForgotPasswordHandler}>
        <label htmlFor='email' className='forgot_form_label'>
          Email
        </label>
        <Input
          className='forgot_form_input'
          name='email'
          type='email'
          placeholder='Wpisz swój email'
          value={consumer.email}
          change={editConsumer}
        />
        <Button
          type='submit'
          className='forgot_form_btn'
          textName='Resetuj hasło'
        />
      </form>
      <Link to='/login' className='forgot_link'>
        ← Wróć do logowania
      </Link>
    </div>
  );
};
