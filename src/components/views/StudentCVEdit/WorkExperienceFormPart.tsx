import { Textarea } from "../../common/Textarea/Textarea";
import { InputFormPart } from "../../common/InputFormPart/InputFormPart";

interface Props {
    value: string;
    handleChange: (name: string, value: string | number) => void;
}

export const WorkExperienceFormPart = ({ handleChange, value }: Props) => {
    return (
        <InputFormPart title="Doświadczenie zawodowe" className="profile-edit__form-flex-item profile-edit__form-flex-item--x2">
            <Textarea
                name="workExperience"
                placeholder="Przebieg doświadczenia zawodowego"
                value={value}
                change={handleChange}
                className="profile-edit__form-textarea"
                rows={6}
            />
        </InputFormPart>
    );
};