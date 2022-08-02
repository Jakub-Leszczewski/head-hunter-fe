import React from 'react';
import { Rating } from './Rating';

interface Props {
  title: string;
  rating: number;
}

export const RatingsList = ({ title, rating }: Props) => {

  return (
    <div className="ratings__container">
      <h3 className="ratings__container-title">{title}</h3>
      <div className="ratings__container-box">
        <Rating
          rating={rating}
        />
      </div>
    </div>
  );
};