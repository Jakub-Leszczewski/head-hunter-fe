import React from 'react';

interface Props {
  type?: 'text' | 'number' | 'password' | 'date' | 'email';
  placeholder?: string;
  className?: string;
  name: string;
  value: string | number;
  change: (name: string, value: string | number) => void;
  blur?: () => void;
  required?: boolean;
  min?: string;
  max?: string;
  minLength?: number;
  maxLength?: number;
}

export const Input = ({
  type,
  placeholder,
  className,
  name,
  value,
  change,
  blur,
  required,
  min,
  max,
  minLength,
  maxLength,
}: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder || ''}
      className={`input ${className ? className : ''}`}
      name={name}
      value={value}
      onChange={(e) => change(name, e.target.value)}
      onBlur={blur}
      required={required}
      min={min}
      max={max}
      minLength={minLength}
      maxLength={maxLength}
    />
  );
};
