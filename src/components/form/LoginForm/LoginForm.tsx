import logo from '../../../assets/images/logo.png'
import { Input } from '../../common/Input/Input'
import { InputPassword } from '../../common/InputPassword/InputPassword'
import { Link } from 'react-router-dom'
import { Button } from '../../common/Button/Button'
import React, { FormEvent } from 'react'
import { Consumer } from '../../../views/Login/Login'

interface Props {
  submitLoginHandler: (e: FormEvent) => void;
  form: Consumer,
  editFormHandler: (name: string, value: string | number) => void;
}

export const LoginForm = ({submitLoginHandler, form, editFormHandler}: Props) => {
  return (
    <form onSubmit={submitLoginHandler} className='login'>
      <img className='login__image' src={logo} alt='MegaK logo' />
      <Input
        name='email'
        type='email'
        placeholder='E-mail'
        className='login__input'
        value={form.email}
        change={editFormHandler}
      />
      <InputPassword
        changePassword={editFormHandler}
        name="password"
        password={form.password}
        placeholder="Hasło"
        containerClassName="login__input-container"
      />
      <div className='login__container'>
        <Link className='login__link' to='/password/forgot'>
          Zapomniałeś hasła?
        </Link>
        <Button textName='Zaloguj się' type='submit' className='login__btn' />
      </div>
    </form>
  )
}
