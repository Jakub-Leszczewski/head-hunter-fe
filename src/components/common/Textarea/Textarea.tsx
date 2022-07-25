import React from 'react';

interface Props{
  name:string
  value:string
  change: (name: string, value: string) => void;
  className?: string;
  cols?:number;
  rows?:number;
}

export const Textarea = ({name, value, change, className, cols, rows}:Props)=>{
  return(
    <textarea
      name={name}
      value={value}
      onChange={e => change(name, e.target.value)}
      className={`textarea ${className? className:''}`}
      cols={cols}
      rows={rows}
    >
    </textarea>
  )
}