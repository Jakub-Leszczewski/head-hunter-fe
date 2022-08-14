import React from 'react';
import { RatingStars } from '../RatingStars/RatingStars';

interface Props {
  title: string;
  rating: number;
}

export const RatingItem = ({ title, rating }: Props) => {

  return (
    <div className="ratings__container">
      <h3 className="ratings__container-title">{title}</h3>
      <div className="ratings__container-box">
        <RatingStars
          rating={rating}
        />
      </div>
    </div>
  );
};
