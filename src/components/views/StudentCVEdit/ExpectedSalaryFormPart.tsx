import { Input } from "../../common/Input/Input";
import { InputFormPart } from "../../common/InputFormPart/InputFormPart";

interface Props {
    value: number;
    handleChange: (name: string, value: string | number) => void;
}

export const ExpectedSalaryFormPart = ({ handleChange, value }: Props) => {
    return (
        <InputFormPart title="Oczekiwane wynagrodzenie netto" className="profile-edit__form-flex-item">
            <Input
                name="expectedSalary"
                placeholder="Oczekiwane wynagrodzenie netto"
                value={value}
                change={handleChange}
                type="number"
                max="9999999"
                min="0"
                step={100}
            />
        </InputFormPart>
    );
};