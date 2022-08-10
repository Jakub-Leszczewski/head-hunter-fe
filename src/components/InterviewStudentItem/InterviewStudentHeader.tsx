import { Dispatch, SetStateAction } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Button } from "../common/Button/Button";
import { TitleItem } from "../TitleItem/TitleItem";

interface Props {
    firstName: string;
    githubUsername: string;
    isStudentInfoOpen: boolean;
    lastName: string;
    reservation: string;
    setIsStudentInfoOpen: Dispatch<SetStateAction<boolean>>;
}

export const InterviewStudentHeader = ({
    firstName,
    githubUsername,
    isStudentInfoOpen,
    lastName,
    reservation,
    setIsStudentInfoOpen
}: Props) => {
    return (
        <div className="hr-list__item-header">
            <div className="hr-list__item-header-left">
                <div>
                    <TitleItem title="Rezerwacja do">
                        <time className="hr-list__item-header-date">{reservation} r.</time>
                    </TitleItem>
                </div>
                <div className="hr-list__item-header-box">
                    <img
                        className="hr-list__item-header-img"
                        src={`https://github.com/${githubUsername}.png`}
                        alt="Avatar użytkownika"
                    />
                    <p className="hr-list__item-header-username">{firstName} {lastName}</p>
                </div>
            </div>
            <div className="hr-list__item-header-right">
                <Button
                    textName="Pokaż CV"
                />
                <Button
                    textName="Brak zainteresowania"
                />
                <Button
                    textName="Zatrudniony"
                />
                {isStudentInfoOpen
                    ? <BsChevronUp
                        onClick={() => setIsStudentInfoOpen(false)}
                        className="hr-list__item-header-right-icon"
                    />
                    : <BsChevronDown
                        onClick={() => setIsStudentInfoOpen(true)}
                        className="hr-list__item-header-right-icon"
                    />
                }
            </div>
        </div>
    );
};