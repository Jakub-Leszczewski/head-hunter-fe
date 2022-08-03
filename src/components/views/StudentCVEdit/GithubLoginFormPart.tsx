import { Input } from "../../common/Input/Input";
import { InputFormPart } from "../../common/InputFormPart/InputFormPart";

interface Props {
    value: string;
    handleChange: (name: string, value: string | number) => void;
}

export const GithubLoginFormPart = ({ handleChange, value }: Props) => {
    return (
        <InputFormPart title="Github login" className="profile-edit__form-flex-item">
            <Input
                name="githubUsername"
                required
                placeholder="Github login"
                value={value}
                change={handleChange}
            />
        </InputFormPart>
    );
};