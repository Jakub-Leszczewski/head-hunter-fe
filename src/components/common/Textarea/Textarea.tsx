import React from 'react';

interface Props {
  name: string
  value: string
  change: (name: string, value: string) => void;
  className?: string;
  cols?: number;
  rows?: number;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
}

export const Textarea = ({ name, value, change, className, cols, rows, placeholder, maxLength, minLength }: Props) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={e => change(name, e.target.value)}
      className={`textarea ${className ? className : ''}`}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      maxLength={maxLength}
      minLength={minLength}
    >
    </textarea>
  )
}