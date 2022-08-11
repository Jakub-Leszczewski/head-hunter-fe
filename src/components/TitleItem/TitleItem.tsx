import React, { ReactNode } from 'react'

interface Props {
  title: string;
  children: ReactNode;
  className?: string;
}

export const TitleItem = ({ title, children, className }: Props) => {

  return (
    <div className={`title-Item${className ? ' ' + className : ''}`}>
      <p className="title-Item__title">{title}</p>
      {children}
    </div>
  );
};
