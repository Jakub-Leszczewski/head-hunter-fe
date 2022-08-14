import React from 'react';
import { BsPaperclip } from 'react-icons/bs';
import { UrlResponseData } from 'types';

interface Props {
  url: UrlResponseData;
}

export const LinkItem = ({ url }: Props) => {

  return (
    <li key={url.id} className="urls__list-item">
      <BsPaperclip className="urls__list-item-icon" />
      <a
        className="urls__list-item-link"
        href={url.url}
        target="_blank"
        rel="noreferrer"
      >
        {url.url}
      </a>
    </li>
  );
};
