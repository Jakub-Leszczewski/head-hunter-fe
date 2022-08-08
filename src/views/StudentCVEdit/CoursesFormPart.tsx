import { Textarea } from "../../components/common/Textarea/Textarea";
import { InputFormPart } from "../../components/common/InputFormPart/InputFormPart";

interface Props {
    value: string;
    handleChange: (name: string, value: string | number) => void;
}

export const CoursesFormPart = ({ handleChange, value }: Props) => {
    return (
        <InputFormPart title="Kursy" className="profile-edit__form-flex-item profile-edit__form-flex-item--x2">
            <Textarea
                name="courses"
                placeholder="Kursy i certyfikaty związane z programowaniem"
                value={value}
                change={handleChange}
                rows={6}
                className="profile-edit__form-textarea"
            />
        </InputFormPart>
    );
};
