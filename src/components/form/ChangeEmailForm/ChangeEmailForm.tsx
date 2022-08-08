import { FormEvent, useState } from "react";
import { Button } from "../../common/Button/Button";
import { Input } from "../../common/Input/Input";
import { InputFormPart } from "../../common/InputFormPart/InputFormPart";

interface ChangeEmailState {
    actualPassword: string;
    email: string;
}

const changeEmailDefaultState: ChangeEmailState = {
    actualPassword: '',
    email: '',
};

export const ChangeEmailForm = () => {

    const [changeEmail, setChangeEmail] = useState<ChangeEmailState>(changeEmailDefaultState);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Zmiana hasła', changeEmail);
    };

    const handleChange = (name: string, value: string | number) => {
        setChangeEmail(state => ({
            ...state,
            [name]: value,
        }));
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="profile-edit__form-section profile-edit__form-section--flex">
                <InputFormPart title="Nowy e-mail">
                    <Input
                        name="email"
                        required
                        placeholder="Nowy e-mail"
                        value={changeEmail.email}
                        change={handleChange}
                    />
                </InputFormPart>
                <InputFormPart title="Aktualne hasło">
                    <Input
                        name="actualPassword"
                        placeholder="Aktualne hasło"
                        required
                        value={changeEmail.actualPassword}
                        change={handleChange}
                    />
                </InputFormPart>
            </div>
            <Button textName="Zapisz" className="profile-edit__button" />
        </form>
    );
};
