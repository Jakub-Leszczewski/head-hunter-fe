import React, {useState} from 'react';
import { Input } from '../../components/common/Input/Input'
import { Button } from '../../components/common/Button/Button'
import { AvailableStudentItem } from '../../components/AvailableStudentItem/AvailableStudentItem'

interface Info {
  info: string;
}

export interface Item {
  name: string,
  courseRating: number,
  activityRating: number,
  codeRating: number,
  scrumRating: number,
  preferredPlace: string,
  city: string,
  contractType: string,
  salary: number,
  internship: string,
  commercialExp: string,
}

const data: Item[] = [
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

export const AvailableStudents = () => {
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
          <AvailableStudentItem item={item} key={key} />
        ))}
      </ul>
    </div>
  );
};
