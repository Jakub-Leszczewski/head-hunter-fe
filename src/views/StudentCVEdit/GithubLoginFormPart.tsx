import { Input } from "../../components/common/Input/Input";
import { InputFormPart } from "../../components/common/InputFormPart/InputFormPart";

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
                minLength={1}
                maxLength={39}
            />
        </InputFormPart>
    );
};
