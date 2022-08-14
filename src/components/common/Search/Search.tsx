import { useId } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

interface Props {
    value: string;
    className?: string;
    placeholder?: string;
    handleChange: (text: string) => void;
}

export const Search = ({ handleChange, value, className, placeholder }: Props) => {

    const htmlFor = useId();

    return (
        <label htmlFor={htmlFor} className="search">
            <BiSearchAlt2 className="search__icon" />
            <input
                type="text"
                className={`search__inp${className ? ' ' + className : ''}`}
                placeholder={placeholder || "Szukaj"}
                id={htmlFor}
                value={value}
                onChange={e => handleChange(e.target.value)}
            />
        </label>
    );
};