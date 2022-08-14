import React from 'react';
import { UrlResponseData } from 'types';
import { LinkItem } from '../LinkItem/LinkItem'

interface Props {
  title: string;
  urls: UrlResponseData[];
}

export const LinksList = ({ title, urls }: Props) => {

  return (
    <>
      <div className="title">
        <h2 className="title__title">{title}</h2>
      </div>
      <div className="urls">
        <ul className="urls__list">
          {urls.map(item =>
            <LinkItem url={item} key={item.id} />,
          )}
        </ul>
      </div>
    </>
  );
};
