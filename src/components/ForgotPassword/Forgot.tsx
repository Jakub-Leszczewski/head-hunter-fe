import { FiKey } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Forgot = () => {
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
      <form className='forgot_form'>
        <label htmlFor='email' className='forgot_form_label'>
          Email
        </label>
        <input
          className='forgot_form_input'
          name='email'
          type='email'
          placeholder='Wpisz swój emaill'
        />
        <button type='submit' className='forgot_form_btn'>
          Resetuj hasło
        </button>
      </form>
      <Link to='/login' className='forgot_link'>
        ← Wróć do logowania
      </Link>
    </div>
  );
};
