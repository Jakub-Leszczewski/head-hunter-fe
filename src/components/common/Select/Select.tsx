import React from 'react';

interface Data {
  name: string;
  value: string;
}

interface Props {
  name: string;
  value: string;
  change: (name: string, value: string) => void;
  className?: string;
  options: Data[];
  disabled?: boolean;
}

export const Select = ({ name, value, change, className, options, disabled }: Props) => {

  return (
    <select
      className={`select ${className ? className : ''}`}
      value={value}
      onChange={e => change(name, e.target.value)}
      disabled={disabled}
    >
      {options.map(el => <option key={el.value} value={el.name}>{el.value}</option>)}
    </select>
  );
};