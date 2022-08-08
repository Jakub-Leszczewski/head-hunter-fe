import React from 'react';
import { BsPaperclip } from 'react-icons/bs';

interface Props {
  url :string;
}

export const LinkItem =({ url }:Props)=>{

  return(
    <li key={url} className="urls__list-item">
      <BsPaperclip className="urls__list-item-icon"/>
      <a
        className="urls__list-item-link"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {url}
      </a>
    </li>
  );
};
