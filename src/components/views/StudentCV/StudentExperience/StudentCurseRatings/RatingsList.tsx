import React from 'react';
import { RatingsItem } from './RatingsItem';

interface RatingsList {
  title: string;
  rating: number;
}

interface Props {
  curseRatingsList: RatingsList[];
}

export const RatingsList = ({ curseRatingsList }: Props) => {

  const ratings = curseRatingsList.map(item =>
    <RatingsItem
      title={item.title}
      rating={item.rating}
    />
  );

  return (
    <>
      <div className="title">
        <h2 className="title__title">Oceny</h2>
      </div>
      <div className="ratings">
        {ratings}
      </div>
    </>
  );
};