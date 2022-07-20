import React from 'react';

interface Props {
  type: 'button' | 'submit';
  className:string;
  textName: string;
  click?: () => void;
  submit?: (e: React.SyntheticEvent) => void;
}

export const Button = ({type, className, textName, click, submit}: Props) => {
  return type === 'submit'
    ? <button
      type={type}
      className={className}
      onClick={submit}
    >{textName}
    </button>
    : <button
      type={type}
      className={className}
      onClick={click}
    >{textName}
    </button>;
};