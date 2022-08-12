import { Select } from "../../components/common/Select/Select";
import { InputFormPart } from "../../components/common/InputFormPart/InputFormPart";
import { contractType } from "../../utils/enumsHelper";
import { ContractType } from "types";

interface Props {
    value: ContractType;
    handleChange: (name: string, value: string | number) => void;
}

export const ExpectedContractTypeFormPart = ({ handleChange, value }: Props) => {
    return (
        <InputFormPart title="Preferowany typ kontraktu" className="profile-edit__form-flex-item">
            <Select
                name="expectedContractType"
                value={value}
                change={handleChange}
                options={contractType}
            />
        </InputFormPart>
    );
};
