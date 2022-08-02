import React from 'react';

interface Props {
  title:string;
  description:string;
}

export const StudentEducation = ({title,description}:Props)=>{

  return(
    <>
      <div className="title">
        <h2 className="title__title">{title}</h2>
      </div>
      <div className="description">
        <p className="description__text">{description}</p>
      </div>
    </>
  );
};