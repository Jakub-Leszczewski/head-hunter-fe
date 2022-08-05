import React, {useState} from 'react';
import {AvailableStudentsBio} from '../AvailableStudentsBio/AvailableStudentsBio';
import {AvailableStudentsPreferences} from '../AvailableStudentsPreferences/AvailableStudentsPreferences';

interface Props {
  item: any;
}

const titles = {
  courseRating: 'Ocena przejścia kursu',
  activityRating: 'Ocena aktywności i zaangażowania na kursie',
  codeRating: 'Ocena kodu w projekcie własnym',
  scrumRating: 'Ocena pracy w zespole Scrum',
  preferredPlace: 'Preferowane miejsce pracy',
  city: 'Docelowe miasto, gdzie chce pracować kandydat',
  contractType: 'Oczekiwany typ kontraktu',
  salary: 'Oczekiwane wynagrodzenie miesięczne brutto',
  internship: 'Zgoda na odbycie bezpłatnych praktyk, stażu na początek',
  commercialExp: 'Komercyjne doświadczenie w programowaniu',
};

export const AvailableStudentsListItem = ({item}: Props) => {
  const [isStudentInfoOpen, setIsStudentInfoOpen] = useState(false);

  const handleIsInfoOpen = () => {
    setIsStudentInfoOpen((value) => !value);
  };

  return (
    <li className='list-item'>
      <AvailableStudentsBio
        itemName={item.name}
        isStudentInfoOpen={isStudentInfoOpen}
        handleIsInfoOpen={handleIsInfoOpen}
      />
      {isStudentInfoOpen && (
        <AvailableStudentsPreferences titles={titles} item={item} />
      )}
      <div className='list-item-separator' />
    </li>
  );
};
