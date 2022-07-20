import {Link} from 'react-router-dom';
import {Button} from '../../common/Button/Button';
import {Input} from '../../common/Input/Input';

export const Login = () => {
  return (
    <form className='login'>
      <img className='login__image' src='/images/logo.png' alt='MegaK logo' />
      <Input className='login__input' placeholder='E-mail' type='email' />
      <Input className='login__input' placeholder='Hasło' type='password' />
      <div className='login__container'>
        <Link className='login__link' to='/'>
          Zapomniałeś hasła?
        </Link>
        <Button type='submit' className='login__btn'>
          Zaloguj się
        </Button>
      </div>
    </form>
  );
};
