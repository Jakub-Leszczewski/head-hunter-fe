import { Input } from "../../common/Input/Input";
import { InputFormPart } from "../../common/InputFormPart/InputFormPart";

interface Props {
    firstName: string;
    lastName: string;
    handleChange: (name: string, value: string | number) => void;
}

export const NameFormPart = ({ handleChange, firstName, lastName }: Props) => {
    return (
        <>
            <InputFormPart title="Imię" className="profile-edit__form-flex-item">
                <Input
                    name="firstName"
                    required
                    placeholder="Imię"
                    value={firstName}
                    change={handleChange}
                />
            </InputFormPart>
            <InputFormPart title="Nazwisko" className="profile-edit__form-flex-item">
                <Input
                    name="lastName"
                    required
                    placeholder="Nazwisko"
                    value={lastName}
                    change={handleChange}
                />
            </InputFormPart>
        </>
    );
};