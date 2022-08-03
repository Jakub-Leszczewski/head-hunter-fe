import { Textarea } from "../../common/Textarea/Textarea";
import { InputFormPart } from "../../common/InputFormPart/InputFormPart";

interface Props {
    value: string;
    handleChange: (name: string, value: string | number) => void;
}

export const EducationFormPart = ({ handleChange, value }: Props) => {
    return (
        <InputFormPart title="Edukacja" className="profile-edit__form-flex-item">
            <Textarea
                name="education"
                // placeholder="Ilość miesięcy komercyjnego doświadczenia"
                value={value}
                change={handleChange}
            />
        </InputFormPart>
    );
};