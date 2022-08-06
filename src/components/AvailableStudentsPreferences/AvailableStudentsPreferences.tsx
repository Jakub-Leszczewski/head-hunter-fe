import React from 'react';
import {AvailableStudentsSinglePreference} from '../AvailableStudentsSinglePreference/AvailableStudentsSinglePreference';

interface Props {
  titles: any;
  item: any;
}

export const AvailableStudentsPreferences = ({titles, item}: Props) => {
  return (
    <div className='list-item-info-container'>
      <AvailableStudentsSinglePreference
        titles={titles.courseRating}
        val={item.courseRating}
      />
      <AvailableStudentsSinglePreference
        titles={titles.activityRating}
        val={item.activityRating}
      />
      <AvailableStudentsSinglePreference
        titles={titles.codeRating}
        val={item.codeRating}
      />
      <AvailableStudentsSinglePreference
        titles={titles.scrumRating}
        val={item.scrumRating}
      />
      <AvailableStudentsSinglePreference
        titles={titles.preferredPlace}
        val={item.preferredPlace}
      />
      <AvailableStudentsSinglePreference titles={titles.city} val={item.city} />
      <AvailableStudentsSinglePreference
        titles={titles.contractType}
        val={item.contractType}
      />
      <AvailableStudentsSinglePreference
        titles={titles.salary}
        val={item.salary}
      />
      <AvailableStudentsSinglePreference
        titles={titles.internship}
        val={item.internship}
      />
      <AvailableStudentsSinglePreference
        titles={titles.commercialExp}
        val={item.commercialExp}
      />
    </div>
  );
};
