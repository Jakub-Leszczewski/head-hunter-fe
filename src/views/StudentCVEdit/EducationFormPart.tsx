import { Textarea } from "../../components/common/Textarea/Textarea";
import { InputFormPart } from "../../components/common/InputFormPart/InputFormPart";

interface Props {
    value: string;
    handleChange: (name: string, value: string | number) => void;
}

export const EducationFormPart = ({ handleChange, value }: Props) => {
    return (
        <InputFormPart title="Edukacja" className="profile-edit__form-flex-item profile-edit__form-flex-item--x2">
            <Textarea
                name="education"
                placeholder="Przebieg edukacji"
                value={value}
                change={handleChange}
                className="profile-edit__form-textarea"
                rows={6}
            />
        </InputFormPart>
    );
};
