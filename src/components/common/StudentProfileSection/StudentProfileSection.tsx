import { ReactNode } from "react";

interface Props {
    title: string;
    children: ReactNode;
}

export const StudentProfileSection = ({ children, title }: Props) => {
    return (
        <section className="student-section">
            <h2 className="student-section__title">{title}</h2>
            <div className="student-section__content">
                {children}
            </div>
        </section>
    );
};