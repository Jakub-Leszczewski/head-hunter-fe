import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';

export const NotFound = () => {
  return (
    <div className='not_found'>
      <img src={img} alt='page not found' className='not_found_img' />
      <h3>Oops! Nie znaleziono strony.</h3>
      <p>
        Szukaliśmy i szukaliśmy, ale niestety nie znaleźliśmy strony o takim
        adresie.
      </p>
      <Link to='/'>Powrót do strony głównej</Link>
    </div>
  );
};
