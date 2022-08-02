import React from 'react';
import { FaStar } from 'react-icons/fa';

interface Props{
  rating:number;
}

export const Rating = ({rating}:Props) => {

  return (
    <>
      <p
        className="ratings__container-box-text"
      >
        {rating}
        <span className="ratings__container-box-text-span">/5</span>
      </p>
      <div className="ratings__container-box-stars">
        <FaStar style={{ color: rating < 1 ? '#4D4D4D' : '#E02735' }}/>
        <FaStar style={{ color: rating < 2 ? '#4D4D4D' : '#E02735' }}/>
        <FaStar style={{ color: rating < 3 ? '#4D4D4D' : '#E02735' }}/>
        <FaStar style={{ color: rating < 4 ? '#4D4D4D' : '#E02735' }}/>
        <FaStar style={{ color: rating < 5 ? '#4D4D4D' : '#E02735' }}/>
      </div>
    </>
  );
};