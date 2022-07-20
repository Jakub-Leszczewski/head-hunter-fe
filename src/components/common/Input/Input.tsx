import React from 'react'

interface Props {
  type: 'text' | 'number' | 'password' | 'date' | 'email';
  className: string;
  placeholder: string;
  value: string | number;
  change: (name: string, value: string | number) => void;
  blur?: () => void;
}

export const Input = ({ type, className, placeholder, value, change, blur }: Props) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={e => change(placeholder, e.target.value)}
      onBlur={blur}
    >
    </input>
  )
}