import React from 'react';
import { RatingsStars } from './RatingsStars';

interface Props {
  title: string;
  rating: number;
}

export const RatingsItem = ({ title, rating }: Props) => {

  return (
    <div className="ratings__container">
      <h3 className="ratings__container-title">{title}</h3>
      <div className="ratings__container-box">
        <RatingsStars
          rating={rating}
        />
      </div>
    </div>
  );
};