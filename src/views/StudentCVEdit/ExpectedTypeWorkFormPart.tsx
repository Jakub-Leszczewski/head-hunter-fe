import { Select } from "../../components/common/Select/Select";
import { InputFormPart } from "../../components/common/InputFormPart/InputFormPart";
import { ExpectedTypeWork } from "./ProfileEditForm";
import { workType } from "../../utils/enumsHelper";

interface Props {
    value: ExpectedTypeWork;
    handleChange: (name: string, value: string | number) => void;
}

export const ExpectedTypeWorkFormPart = ({ handleChange, value }: Props) => {
    return (
        <InputFormPart title="Preferowane miejsce pracy" className="profile-edit__form-flex-item">
            <Select
                name="expectedTypeWork"
                value={value}
                change={handleChange}
                options={workType}
            />
        </InputFormPart>
    );
};
