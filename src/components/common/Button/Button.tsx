import React from 'react';

interface Props {
  type?: 'button' | 'submit';
  className?: string;
  textName: string;
  click?: () => void;
  preventDefault?: boolean;
  disabled?: boolean;
}

export const Button = ({ type, className, textName, click, disabled, preventDefault }: Props) => {
  return (
    <button
      type={type}
      className={`button ${className ? className : ''}`}
      onClick={(e) => {
        if (preventDefault) {
          e.preventDefault();
        }
        click && click();
      }}
      disabled={disabled}
    >
      {textName}
    </button>
  );
};
