import { Textarea } from "../../common/Textarea/Textarea";
import { InputFormPart } from "../../common/InputFormPart/InputFormPart";

interface Props {
    value: string;
    handleChange: (name: string, value: string | number) => void;
}

export const BioFormPart = ({ handleChange, value }: Props) => {
    return (
        <InputFormPart title="Krótka biografia" className="profile-edit__form-flex-item">
            <Textarea
                name="bio"
                // placeholder="Krótka biografia"
                value={value}
                change={handleChange}
            />
        </InputFormPart>
    );
};