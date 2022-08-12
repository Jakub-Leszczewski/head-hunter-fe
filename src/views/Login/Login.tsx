import React, { FormEvent, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchTool } from '../../utils/fetchHelpers';
import { LoginResponse } from 'types';
import { useSaveUserData } from '../../hooks/useSaveUserData';

import { LoginForm } from '../../components/form/LoginForm/LoginForm'
import { WithResponseInfoToast } from '../../hoc/WithResponseInfoToast'
import { UseResponseInfo } from '../../hooks/useResponseInfo'
import { useResponseContext } from '../../contexts/PopupResponseContext'

export interface Consumer {
  email: string;
  password: string;
}

interface LoginFormProps {
  submitLoginHandler: (e: FormEvent) => void;
  form: Consumer,
  editFormHandler: (name: string, value: string | number) => void;
}

export const Login = () => {
  const { setErrorHandler, setLoadingHandler } = useResponseContext();
  const saveUserData = useSaveUserData();
  const navigate = useNavigate();

  const [consumer, setConsumer] = useState<Consumer>({
    email: '',
    password: '',
  });

  const editConsumer = (name: string, value: string | number) => {
    setConsumer((consumer) => ({
      ...consumer,
      [name]: value,
    }));
  };

  const submitLoginHandler = async (e: FormEvent) => {
    e.preventDefault();
    setErrorHandler(null);
    setLoadingHandler(true);
    const response = await fetchTool<LoginResponse>('auth/login', 'POST', consumer);
    if (!response.status) {
      setErrorHandler(response.message as string)
      setLoadingHandler(false);
      return;
    }
    saveUserData(response.results);
    navigate('/');
    setLoadingHandler(false);
  };

  return (
    <LoginForm
      form={consumer}
      submitLoginHandler={submitLoginHandler}
      editFormHandler={editConsumer}
    />
  );
};
