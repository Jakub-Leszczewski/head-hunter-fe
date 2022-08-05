import React, {useState} from 'react';
import {AvailableStudentsListItem} from '../../AvailableStudentsListItem/AvailableStudentsListItem';
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
    internship: 'TAK',
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
    internship: 'NIE',
    commercialExp: '6 miesięcy',
  },
  {
    name: 'Janusz B.',
    courseRating: 5,
    activityRating: 3,
    codeRating: 4,
    scrumRating: 5,
    preferredPlace: 'Zdalnie',
    city: 'Kraków',
    contractType: 'B2B',
    salary: 4500,
    internship: 'NIE',
    commercialExp: '6 miesięcy',
  },
];

export const AvailableStudentsList = () => {
  const [searchedInfo, setSearchedInfo] = useState<Info>({info: ''});

  const search = (name: string, value: string | number): void => {
    setSearchedInfo((info) => ({
      ...info,
      [name]: value,
    }));
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
          <AvailableStudentsListItem item={item} key={key} />
        ))}
      </ul>
    </div>
  );
};
