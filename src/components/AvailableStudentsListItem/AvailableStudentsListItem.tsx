import React, {useState} from 'react';
import {Button} from '../common/Button/Button';
import {BsChevronDown, BsChevronUp} from 'react-icons/bs';
import {AvailableStudentsPreferences} from '../AvailableStudentsPreferences/AvailableStudentsPreferences';
import {AvailableStudentsBio} from '../AvailableStudentsBio/AvailableStudentsBio';

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
      {/* INFO */}
      {isStudentInfoOpen && (
        <div className='list-item-info-container'>
          <AvailableStudentsPreferences
            titles={titles.courseRating}
            val={item.courseRating}
          />
          <AvailableStudentsPreferences
            titles={titles.activityRating}
            val={item.activityRating}
          />
          <AvailableStudentsPreferences
            titles={titles.codeRating}
            val={item.codeRating}
          />
          <AvailableStudentsPreferences
            titles={titles.scrumRating}
            val={item.scrumRating}
          />
          <AvailableStudentsPreferences
            titles={titles.preferredPlace}
            val={item.preferredPlace}
          />
          <AvailableStudentsPreferences titles={titles.city} val={item.city} />
          <AvailableStudentsPreferences
            titles={titles.contractType}
            val={item.contractType}
          />
          <AvailableStudentsPreferences
            titles={titles.salary}
            val={item.salary}
          />
          <AvailableStudentsPreferences
            titles={titles.internship}
            val={item.internship}
          />
          <AvailableStudentsPreferences
            titles={titles.commercialExp}
            val={item.commercialExp}
          />
        </div>
      )}
      <div className='list-item-separator' />
    </li>
  );
};
