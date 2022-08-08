import React from 'react';

interface Props {
  titles: string;
  text: string;
}

export const AvailableInfoItem = ({titles, text}: Props) => {
  return (
    <div className='list-item-info'>
      <p className='list-item-info__first'>{titles}</p>
      <p className='list-item-info__second'>
        <strong>{text}</strong>
      </p>
    </div>
  );
};
