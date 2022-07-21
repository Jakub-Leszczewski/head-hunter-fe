import { FiKey } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Forgot = () => {
  return (
    <div className='forgot'>
      <div className='forgot_icon'>
        <FiKey className='forgot_icon_key' />
      </div>
      <div className='forgot_text'>
        <h2>Forgot password?</h2>
        <small>No worries, we'll send you reset instructions.</small>
      </div>
      <form className='forgot_form'>
        <label htmlFor='email' className='forgot_form_label'>
          Email
        </label>
        <input
          className='forgot_form_input'
          name='email'
          type='email'
          placeholder='Enter your email'
        />
        <button type='submit' className='forgot_form_btn'>
          Reset password
        </button>
      </form>
      <Link to='/login' className='forgot_link'>
        ← Back to login
      </Link>
    </div>
  );
};
