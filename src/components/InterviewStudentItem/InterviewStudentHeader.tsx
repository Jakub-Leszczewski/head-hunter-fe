import { Dispatch, SetStateAction } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useUser } from "../../hooks/useUser";
import { OnlyUserResponse } from "types";
import { fetchTool } from "../../utils/fetchHelpers";
import { Button } from "../common/Button/Button";
import { TitleItem } from "../TitleItem/TitleItem";
import { useNavigate } from "react-router-dom";
import { setError } from '../../utils/setError'
import { useResponseContext } from '../../contexts/PopupResponseContext'

interface Props {
    firstName: string;
    githubUsername: string;
    isStudentInfoOpen: boolean;
    lastName: string;
    reservation: string;
    id: string;
    setIsStudentInfoOpen: Dispatch<SetStateAction<boolean>>;
    setRefresh: Dispatch<SetStateAction<boolean>>;
}

export const InterviewStudentHeader = ({
    firstName,
    githubUsername,
    isStudentInfoOpen,
    lastName,
    reservation,
    id,
    setIsStudentInfoOpen,
    setRefresh,
}: Props) => {
    const { setErrorHandler, setLoadingHandler } = useResponseContext();
    const user = useUser() as OnlyUserResponse;
    const navigate = useNavigate();

    const handleCVShow = async () => {
        navigate(`/student/${id}`);
    };
    const handleNonInterested = async () => {
        setLoadingHandler(true);
        const response = await fetchTool(`user/${id}/student/interview`, 'DELETE', { hrId: user.id });
        if (!response.status) {
            setErrorHandler(setError(response.message))
            setLoadingHandler(false);
            return;
        }

        setLoadingHandler(false);
        setRefresh(state => !state);
    };
    const handleEmployemnt = async () => {
        setLoadingHandler(true);
        const response = await fetchTool(`user/${id}/student/employed`, 'PATCH');
        if (!response.status) {
            setErrorHandler(setError(response.message))
            setLoadingHandler(false);
            return;
        }

        setLoadingHandler(false);
        setRefresh(state => !state);
    };

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
                    click={handleCVShow}
                    preventDefault
                />
                <Button
                    textName="Brak zainteresowania"
                    click={handleNonInterested}
                    preventDefault
                />
                <Button
                    textName="Zatrudniony"
                    click={handleEmployemnt}
                    preventDefault
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
