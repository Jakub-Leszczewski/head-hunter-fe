import React from 'react';
import { ChangePasswordForm } from '../../components/form/ChangePasswordForm/ChangePasswordForm'

export const HREditPassword = () => {
  return (
    <div className='hr-edit-password'>
      <h3 className='hr-edit-password__title'>Zmiana hasła</h3>
      <ChangePasswordForm />
    </div>
  );
};
