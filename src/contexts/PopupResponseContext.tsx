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
}

export const ResponseContext = createContext<ResponseContextType>({
  loading: false,
  error: null,
  setErrorHandler: undefined!,
  setLoadingHandler: undefined!
});

export const useResponseContext = () => useContext(ResponseContext);

export const PopupResponseContext = ({children}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if(error && !loading) toast(error);
    if(!error && !loading) toast('Udało się!');
  }, [error, loading]);

  const setErrorHandler = (message: string | null) => setError(message);
  const setLoadingHandler = (isLoading: boolean) => setLoading(isLoading);

  return (
    <ResponseContext.Provider value={{loading, error, setErrorHandler, setLoadingHandler}}>
      {children}
      {loading && <LoadingScreen />}
    </ResponseContext.Provider>
  )
}
