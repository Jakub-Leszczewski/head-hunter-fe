import { FormEvent, useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { InputFormPart } from "../InputFormPart/InputFormPart";

interface ChangePasswordState {
    actualPassword: string;
    newPassword: string;
    newPasswordRepeat: string;
}

const changePasswordDefaultState: ChangePasswordState = {
    actualPassword: '',
    newPassword: '',
    newPasswordRepeat: '',
};

export const ChangePasswordForm = () => {

    const [changePassword, setChangePassword] = useState<ChangePasswordState>(changePasswordDefaultState);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Zmiana hasła', changePassword);
    };

    const handleChange = (name: string, value: string | number) => {
        setChangePassword(state => ({
            ...state,
            [name]: value,
        }));
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="profile-edit__form-section profile-edit__form-section--flex">
                <InputFormPart title="Nowe hasło">
                    <Input
                        name="newPassword"
                        placeholder="Nowe hasło"
                        required
                        value={changePassword.newPassword}
                        change={handleChange}
                    />
                </InputFormPart>
                <InputFormPart title="Powtórz nowe hasło">
                    <Input
                        name="newPasswordRepeat"
                        placeholder="Powtórz nowe hasło"
                        required
                        value={changePassword.newPasswordRepeat}
                        change={handleChange}
                    />
                </InputFormPart>
                <InputFormPart title="Aktualne hasło">
                    <Input
                        name="actualPassword"
                        placeholder="Aktualne hasło"
                        required
                        value={changePassword.actualPassword}
                        change={handleChange}
                    />
                </InputFormPart>
            </div>
            <Button textName="Zapisz" className="profile-edit__button" />
        </form>
    );
};