import { FormEvent, useState } from "react";
import { OnlyUserResponse } from "types";
import { useUser } from "../../../hooks/useUser";
import { fetchTool } from "../../../utils/fetchHelpers";
import { Button } from "../../common/Button/Button";
import { InputFormPart } from "../../common/InputFormPart/InputFormPart";
import { InputPassword } from "../../common/InputPassword/InputPassword";
import { useResponseContext } from '../../../contexts/PopupResponseContext'
import { setError } from '../../../utils/setError'

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
    const { setErrorHandler, setLoadingHandler } = useResponseContext();
    const user = useUser() as OnlyUserResponse;

    const [changePassword, setChangePassword] = useState<ChangePasswordState>(changePasswordDefaultState);
    const { newPassword, newPasswordRepeat, actualPassword } = changePassword;

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoadingHandler(true);
        const response = await fetchTool(`user/${user.id}/password`, 'PATCH', { password: actualPassword, newPassword });
        if (!response.status) {
            setErrorHandler(setError(response.message));
            setLoadingHandler(false);
            return;
        }

        setLoadingHandler(false);
        setChangePassword(changePasswordDefaultState);
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
            <Button textName="Zapisz" className="profile-edit__button" disabled={newPassword !== newPasswordRepeat}/>
        </form>
    );
};
