import { Input } from "../../common/Input/Input";
import { InputFormPart } from "../../common/InputFormPart/InputFormPart";

interface Props {
    value: number;
    handleChange: (name: string, value: string | number) => void;
}

export const MonthsOfCommercialExpFormPart = ({ handleChange, value }: Props) => {
    return (
        <InputFormPart title="Ilość miesięcy komercyjnego doświadczenia" className="profile-edit__form-flex-item">
            <Input
                name="monthsOfCommercialExp"
                required
                placeholder="Ilość miesięcy komercyjnego doświadczenia"
                value={value}
                change={handleChange}
                type="number"
                max="9999"
                min="0"
            />
        </InputFormPart>
    );
};