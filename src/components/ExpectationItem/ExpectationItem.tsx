import React from 'react';

interface Props {
  title:string;
  text:string | number;
  suffix?:string;
}

export const ExpectationItem = ({title,text,suffix}:Props)=>{

  return(
    <div className="employment__container">
      <h3 className="employment__container-title">{title}</h3>
      <p className="employment__container-text">{text} {suffix}</p>
    </div>
  );
};
