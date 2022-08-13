import { Button } from "../common/Button/Button";

interface Props {
    question: string;
    resolve: () => Promise<void>;
    reject: () => void;
}

export const ConfirmToast = ({ question, reject, resolve }: Props) => {
    return (
        <div className="confirm-toast">
            <p className="confirm-toast__text">{question}</p>
            <div className="confirm-toast__buttons">
                <Button textName="Tak" type='button' preventDefault click={resolve} />
                <Button textName="Nie" type='button' preventDefault click={reject} />
            </div>
        </div>
    );
};