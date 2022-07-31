import { FormEvent, useState } from 'react';
import { FiKey } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

interface NewPassword {
  password: string;
  confirmPassword:string;
}

export const NewPassword = () => {

  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState<NewPassword>({
    password: '',
    confirmPassword:'',
  });

  const newPasswordHandler = (name: string, value: string | number) => {
    setNewPassword((newPassword) => ({
      ...newPassword,
      [name]: value,
    }));
  };

  const submitForgotPasswordHandler = (e: FormEvent): void => {
    e.preventDefault();
    toast.success('Twoje hasło zostało pomyślnie zresetowane.');
    navigate('/login');
  };

  return (
    <div className='forgot'>
      <div className='forgot__icon'>
        <FiKey className='forgot__icon-key' />
      </div>
      <div className='forgot__text'>
        <h2>Ustaw nowe hasło</h2>
        <small>
          Pamiętaj, ze Twoje nowe hasło musi być inne od poprzednio ustawionego.
        </small>
      </div>
      <form className='forgot__form' onSubmit={submitForgotPasswordHandler}>
        <label htmlFor='new-password' className='forgot__form-label'>
          Hasło
        </label>
        <Input
          className='forgot__form-input'
          name='password'
          type='password'
          placeholder='Wpisz nowe hasło'
          value={newPassword.password}
          change={newPasswordHandler}
        />
        <label htmlFor='confirm_password' className='forgot_form_label'>
          Potwierdź hasło
        </label>
        <Input
          className='forgot__form-input'
          name='confirmPassword'
          type='password'
          placeholder='Potwierdź nowe hasło'
          value={newPassword.confirmPassword}
          change={newPasswordHandler}
        />
        <Button type='submit' className='forgot__form-btn' textName='Resetuj' />
      </form>
      <Link to='/login' className='forgot__link'>
        ← Wróć do logowania
      </Link>
    </div>
  );
};
