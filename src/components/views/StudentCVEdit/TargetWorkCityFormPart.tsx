import { Input } from "../../common/Input/Input";
import { InputFormPart } from "../../common/InputFormPart/InputFormPart";

interface Props {
    value: string;
    handleChange: (name: string, value: string | number) => void;
}

export const TargetWorkCityFormPart = ({ handleChange, value }: Props) => {
    return (
        <InputFormPart title="Docelowe miasto pracy" className="profile-edit__form-flex-item">
            <Input
                name="targetWorkCity"
                placeholder="Docelowe miasto pracy"
                value={value}
                change={handleChange}
            />
        </InputFormPart>
    );
};