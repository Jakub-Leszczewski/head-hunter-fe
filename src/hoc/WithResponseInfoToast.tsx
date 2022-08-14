import { ComponentType, useEffect } from 'react'
import { toast } from 'react-toastify';
import { LoadingScreen } from '../components/LoadingScreen/LoadingScreen'
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  isLoading: boolean;
  error: string | null;
}

export function WithResponseInfoToast<P>(Component: ComponentType<P>) {
  return (props: P & Props) => {
    useEffect(() => {
      if(props.error && !props.isLoading) toast(props.error);
      if(!props.error && !props.isLoading) toast('Udało się!');
    }, [props.error, props.isLoading]);

    return (
      <>
        <Component {...props}/>
        {props.isLoading && <LoadingScreen />}
      </>
    )
  }
}
