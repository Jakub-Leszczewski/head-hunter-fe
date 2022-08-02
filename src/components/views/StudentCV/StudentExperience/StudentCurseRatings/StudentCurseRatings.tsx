import React from 'react';
import { RatingsList } from './RatingsList';

interface StudentCurseRatings {
  title: string;
  rating: number;
}

interface Props {
  curseRatingsList: StudentCurseRatings[];
}

export const StudentCurseRatings = ({ curseRatingsList }: Props) => {

  const ratings = curseRatingsList.map(item =>
    <RatingsList
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