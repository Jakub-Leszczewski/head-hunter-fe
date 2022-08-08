import React, { ReactNode } from 'react'

interface Props {
  title: string;
  children: ReactNode;
  className?:string;
}

export const TitleItem = ({ title, children, className }: Props) => {

  return (
    <div className="title-Item">
        <p className={`title-Item__title ${className? className:''}`}>{title}</p>
        {children}
    </div>
  );
};
