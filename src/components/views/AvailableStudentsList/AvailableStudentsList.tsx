import React, {useState} from 'react';
import {BsChevronDown, BsChevronUp, BsFilter} from 'react-icons/bs';
import {Button} from '../../common/Button/Button';
import {Input} from '../../common/Input/Input';

interface Info {
  info: string;
}

const data = [
  {
    name: 'Jan K.',
    courseRating: 5,
    activityRating: 3,
    codeRating: 4,
    scrumRating: 5,
    preferredPlace: 'Biruo',
    city: 'Warszawa',
    contractType: 'Umowa o pracę',
    salary: 8000,
    internship: true,
    commercialExp: '6 miesięcy',
  },
  {
    name: 'Mariusz P.',
    courseRating: 5,
    activityRating: 3,
    codeRating: 4,
    scrumRating: 5,
    preferredPlace: 'Zdalnie',
    city: 'Kraków',
    contractType: 'B2B',
    salary: 4500,
    internship: true,
    commercialExp: '6 miesięcy',
  },
];

export const AvailableStudentsList = () => {
  const [searchedInfo, setSearchedInfo] = useState<Info>({info: ''});
  const [isStudentInfoOpen, setIsStudentInfoOpen] = useState(false);

  const search = (name: string, value: string | number): void => {
    setSearchedInfo((info) => ({
      ...info,
      [name]: value,
    }));
  };

  // const editConsumer = (name: string, value: string | number) => {
  //   setConsumer((consumer) => ({
  //     ...consumer,
  //     [name]: value,
  //   }));
  // };

  const handleIsInfoOpen = () => {
    setIsStudentInfoOpen((value) => !value);
  };

  return (
    <div className='container'>
      <div className='search-area'>
        <Input
          name='search'
          type='text'
          placeholder='Szukaj'
          className='search-area__input'
          value={searchedInfo.info}
          change={search}
        />
        <Button
          type='submit'
          className='search-area__filter-button'
          textName='Filtrowanie'
        />
      </div>
      <div className='separation-line' />
      <ul className='list'>
        {data.map((item, key) => (
          <li className='list-item' key={key}>
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
                  <p className='list-item-info__first'>
                    Ocena pracy w zespole Scrum
                  </p>
                  <p className='list-item-info__second'>
                    <strong>{item.scrumRating}</strong> /5
                  </p>
                </div>
                <div className='list-item-info'>
                  <p className='list-item-info__first'>
                    Preferowane miejsce pracy
                  </p>
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
                  <p className='list-item-info__first'>
                    Oczekiwany typ kontraktu
                  </p>
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
        ))}
      </ul>
    </div>
  );
};
