import React from 'react'

interface Props {
  htmlFor:string;
  textName:string;
  className?:string;
}

export const Label = ({textName, className, htmlFor,}:Props)=>{
  return(
    <label
      htmlFor={htmlFor}
      className={`label ${className? className:''}`}
    >
      {textName}
    </label>
  )
}