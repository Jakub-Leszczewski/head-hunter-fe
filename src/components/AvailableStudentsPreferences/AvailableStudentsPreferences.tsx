import React from 'react';

interface Props {
  titles: any;
  val: any;
}

export const AvailableStudentsPreferences = ({titles, val}: Props) => {
  return (
    <div className='list-item-info'>
      <p className='list-item-info__first'>{titles}</p>
      <p className='list-item-info__second'>
        <strong>{val}</strong>
      </p>
    </div>
  );
};
