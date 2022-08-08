import React from 'react';
import { RatingItem } from '../../components/RatingItem/RatingItem';

interface Props {
  curseRatingsList: {
    title: string;
    rating: number;
  }[];
}

export const StudentCurseRatingList = ({ curseRatingsList }: Props) => {

  const ratings = curseRatingsList.map(item =>
    <RatingItem
      key={item.title}
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
