import React from 'react';
import { BsPaperclip } from 'react-icons/bs';

interface Props {
  title:string;
  urls:string[];
}

export const StudentLinks =({title,urls}:Props)=>{

  return(
    <>
    <div className="title">
      <h2 className="title__title">{title}</h2>
    </div>
      <div className="urls">
        <ul className="urls__list">
          {urls.map(item =>
            <li
              key={item}
              className="urls__list-item"
            >
              <BsPaperclip className="urls__list-item-icon"/>
              <a className="urls__list-item-link" href={item} target="_blank" rel="noreferrer">{item}</a>
            </li>,
          )}
        </ul>
      </div>
    </>
  );
};