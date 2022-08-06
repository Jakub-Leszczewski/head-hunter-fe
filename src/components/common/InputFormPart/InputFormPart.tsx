import { ReactNode } from "react";

interface Props {
    title: string;
    children: ReactNode;
    className?: string;
}

export const InputFormPart = ({ children, title, className }: Props) => {
    return (
        <label className={`profile-edit__form-label${className ? ' ' + className : ''}`}>
            <h3 className="profile-edit__form-title">{title}</h3>
            {children}
        </label>
    );
};