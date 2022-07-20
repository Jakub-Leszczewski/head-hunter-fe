import {Link} from 'react-router-dom';
import {Button} from '../../common/Button/Button';
import {Input} from '../../common/Input/Input';

export const Login = () => {
  return (
    <form className='login'>
      <img src='/images/logo.png' alt='MegaK logo' />
      <Input className='input login-input' placeholder='E-mail' type='email' />
      <Input
        className='input password-input'
        placeholder='Hasło'
        type='password'
      />
      <Link to='/'>Zapomniałeś hasła?</Link>
      <div>
        <p>
          Nie masz konta? <Link to='/'>Zarejestruj się</Link>
        </p>
        <Button type='submit'>Zaloguj się</Button>
      </div>
    </form>
  );
};
