import React from 'react';
import { Item } from '../../views/AvailableStudents/AvailableStudents'
import { AvailableInfoItem } from '../AvailableInfoItem/AvailableInfoItem'

interface Props {
  titles: Record<string, string>;
  item: Item;
}

export const AvailableInfoList = ({titles, item}: Props) => {
  return (
    <div className='list-item-info-container'>
      <AvailableInfoItem
        titles={titles.courseRating}
        text={`${item.courseRating}/5`}
      />
      <AvailableInfoItem
        titles={titles.activityRating}
        text={`${item.activityRating}/5`}
      />
      <AvailableInfoItem
        titles={titles.codeRating}
        text={`${item.codeRating}/5`}
      />
      <AvailableInfoItem
        titles={titles.scrumRating}
        text={`${item.scrumRating}/5`}
      />
      <AvailableInfoItem
        titles={titles.preferredPlace}
        text={item.preferredPlace}
      />
      <AvailableInfoItem
        titles={titles.city}
        text={item.city}
      />

      <AvailableInfoItem
        titles={titles.contractType}
        text={item.contractType}
      />
      <AvailableInfoItem
        titles={titles.salary}
        text={`${item.salary}`}
      />
      <AvailableInfoItem
        titles={titles.internship}
        text={item.internship}
      />
      <AvailableInfoItem
        titles={titles.commercialExp}
        text={item.commercialExp}
      />
    </div>
  );
};
