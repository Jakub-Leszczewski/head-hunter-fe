import React from 'react'

// interface Name {
//   name: string;
// }

interface Props {
  name: string;
  value: string;
  change: (name: string, value: string) => void;
  className?: string;
  options: string[];
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
        {options.map(el => <option key={el} value={el}>{el}</option>)}
      </select>
  )
}