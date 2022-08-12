import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { LoadingScreen } from '../components/LoadingScreen/LoadingScreen'

interface Props {
  children: ReactNode;
}

interface ResponseContextType {
  loading: boolean;
  error: string | null;
  setLoadingHandler: (loading: boolean) => void;
  setErrorHandler: (message: string | null) => void;
  setMessageHandler: (message: string | null) => void;
}

export const ResponseContext = createContext<ResponseContextType>({
  loading: false,
  error: null,
  setErrorHandler: undefined!,
  setLoadingHandler: undefined!,
  setMessageHandler: undefined!,
});

export const useResponseContext = () => useContext(ResponseContext);

export const PopupResponseContext = ({children}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if(error && !loading) toast(error);
    if(message && !loading) toast(message);
    setMessage(null);
    setError(null);
  }, [message, error, loading]);

  const setLoadingHandler = (isLoading: boolean) => setLoading(isLoading);
  const setErrorHandler = (error: string | null) => setError(error);
  const setMessageHandler = (message: string | null) => setMessage(message);

  return (
    <ResponseContext.Provider value={{loading, error, setErrorHandler, setLoadingHandler, setMessageHandler}}>
      {children}
      {loading && <LoadingScreen />}
    </ResponseContext.Provider>
  )
}
