import { FormEvent, useState } from "react";
import { Button } from "../Button/Button";
import { InputFormPart } from "../InputFormPart/InputFormPart";
import { InputPassword } from "../InputPassword/InputPassword";

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
                    <InputPassword
                        name="newPassword"
                        placeholder="Nowe hasło"
                        changePassword={handleChange}
                        password={changePassword.newPassword}
                    />
                </InputFormPart>
                <InputFormPart title="Powtórz nowe hasło">
                    <InputPassword
                        name="newPasswordRepeat"
                        placeholder="Powtórz nowe hasło"
                        changePassword={handleChange}
                        password={changePassword.newPasswordRepeat}
                    />
                </InputFormPart>
                <InputFormPart title="Aktualne hasło">
                    <InputPassword
                        name="actualPassword"
                        placeholder="Aktualne hasło"
                        changePassword={handleChange}
                        password={changePassword.actualPassword}
                    />
                </InputFormPart>
            </div>
            <Button textName="Zapisz" className="profile-edit__button" />
        </form>
    );
};