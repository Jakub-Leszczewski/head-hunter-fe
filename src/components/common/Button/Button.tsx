import React from 'react';

interface Props {
    type?: 'button' | 'submit';
    className?: string;
    textName: string;
    click?: () => void;
    disabled?: boolean;
}

export const Button = ({type, className, textName, click, disabled}: Props) => {
    return (
        <button
            type={type}
            className={`button ${className ? className : ''}`}
            onClick={click}
            disabled={disabled}
        >
            {textName}
        </button>
    );
};