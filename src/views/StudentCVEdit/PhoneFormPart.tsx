import { Input } from "../../components/common/Input/Input";
import { InputFormPart } from "../../components/common/InputFormPart/InputFormPart";

interface Props {
    value: string;
    handleChange: (name: string, value: string | number) => void;
}

export const PhoneFormPart = ({ handleChange, value }: Props) => {
    return (
        <InputFormPart title="Nr telefonu" className="profile-edit__form-flex-item">
            <Input
                name="phone"
                placeholder="Nr telefonu"
                value={value}
                change={handleChange}
            />
        </InputFormPart>
    );
};
