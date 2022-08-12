import { FormEvent, useState } from "react";
import { useUser } from "../../../hooks/useUser";
import { OnlyUserResponse } from "types";
import { fetchTool } from "../../../utils/fetchHelpers";
import { Button } from "../../common/Button/Button";
import { Input } from "../../common/Input/Input";
import { InputFormPart } from "../../common/InputFormPart/InputFormPart";
import { InputPassword } from "../../../components/common/InputPassword/InputPassword";
import { useResponseContext } from '../../../contexts/PopupResponseContext'
import { setError } from '../../../utils/setError'

interface ChangeEmailState {
    actualPassword: string;
    email: string;
}

const changeEmailDefaultState: ChangeEmailState = {
    actualPassword: '',
    email: '',
};

export const ChangeEmailForm = () => {
    const { setErrorHandler, setLoadingHandler } = useResponseContext();
    const user = useUser() as OnlyUserResponse;

    const [changeEmail, setChangeEmail] = useState<ChangeEmailState>(changeEmailDefaultState);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoadingHandler(true);
        const response = await fetchTool(`user/${user.id}/student`, 'PATCH', {
            email: changeEmail.email,
            password: changeEmail.actualPassword
        });
        if (!response.status) {
            setErrorHandler(setError(response.message))
            setLoadingHandler(false);
            return;
        }
        setLoadingHandler(false);
        setChangeEmail(changeEmailDefaultState);
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
                    <InputPassword
                        name="actualPassword"
                        placeholder="Aktualne hasło"
                        changePassword={handleChange}
                        password={changeEmail.actualPassword}
                    />
                </InputFormPart>
            </div>
            <Button textName="Zapisz" className="profile-edit__button" />
        </form>
    );
};
