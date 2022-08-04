import React, {useState} from 'react';
import {Button} from '../common/Button/Button';
import {BsChevronDown, BsChevronUp} from 'react-icons/bs';

interface Props {
  item: any;
}

export const AvailableStudentsListItem = ({item}: Props) => {
  const [isStudentInfoOpen, setIsStudentInfoOpen] = useState(false);

  const handleIsInfoOpen = () => {
    setIsStudentInfoOpen((value) => !value);
  };

  return (
    <li className='list-item'>
      <div className='list-item-container'>
        <p>{item.name}</p>
        <div className='list-item-container__right-section'>
          <Button
            type='submit'
            className='list-item-container__button'
            textName={'Zarezerwuj rozmowę'}
          />
          {isStudentInfoOpen ? (
            <BsChevronUp
              onClick={handleIsInfoOpen}
              style={{
                color: '#666666',
                fontSize: '20px',
                cursor: 'pointer',
              }}
            />
          ) : (
            <BsChevronDown
              onClick={handleIsInfoOpen}
              style={{
                color: '#666666',
                fontSize: '20px',
                cursor: 'pointer',
              }}
            />
          )}
        </div>
      </div>
      {/* INFO */}
      {isStudentInfoOpen && (
        <div className='list-item-info-container'>
          <div className='list-item-info'>
            <p className='list-item-info__first'>Ocena przejścia kursu</p>
            <p className='list-item-info__second'>
              <strong>{item.courseRating}</strong> /5
            </p>
          </div>
          <div className='list-item-info'>
            <p className='list-item-info__first'>
              Ocena aktywności i zaangażowania na kursie
            </p>
            <p className='list-item-info__second'>
              <strong>{item.activityRating}</strong> /5
            </p>
          </div>
          <div className='list-item-info'>
            <p className='list-item-info__first'>
              Ocena kodu w projekcie własnym
            </p>
            <p className='list-item-info__second'>
              <strong>{item.codeRating}</strong> /5
            </p>
          </div>
          <div className='list-item-info'>
            <p className='list-item-info__first'>Ocena pracy w zespole Scrum</p>
            <p className='list-item-info__second'>
              <strong>{item.scrumRating}</strong> /5
            </p>
          </div>
          <div className='list-item-info'>
            <p className='list-item-info__first'>Preferowane miejsce pracy</p>
            <p className='list-item-info__second'>
              <strong>{item.preferredPlace}</strong>
            </p>
          </div>
          <div className='list-item-info'>
            <p className='list-item-info__first'>
              Docelowe miasto, gdzie chce pracować kandydat
            </p>
            <p className='list-item-info__second'>
              <strong>{item.city}</strong>
            </p>
          </div>
          <div className='list-item-info'>
            <p className='list-item-info__first'>Oczekiwany typ kontraktu</p>
            <p className='list-item-info__second'>
              <strong>{item.contractType}</strong>
            </p>
          </div>
          <div className='list-item-info'>
            <p className='list-item-info__first'>
              Oczekiwane wynagrodzenie miesięczne brutto
            </p>
            <p className='list-item-info__second'>
              <strong>{item.salary}</strong>
            </p>
          </div>
          <div className='list-item-info'>
            <p className='list-item-info__first'>
              Zgoda na odbycie bezpłatnych praktyk, stażu na początek
            </p>
            <p className='list-item-info__second'>
              <strong>{item.internship ? 'TAK' : 'NIE'}</strong>
            </p>
          </div>
          <div className='list-item-info'>
            <p className='list-item-info__first'>
              Komercyjne doświadczenie w programowaniu
            </p>
            <p className='list-item-info__second'>
              <strong>{item.commercialExp}</strong>
            </p>
          </div>
        </div>
      )}
      <div className='list-item-separator' />
    </li>
  );
};
