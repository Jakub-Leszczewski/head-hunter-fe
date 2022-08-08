import { InputItem } from "../../components/common/InputItem/InputItem";
import { InputFormPart } from "../../components/common/InputFormPart/InputFormPart";
import { Button } from "../../components/common/Button/Button";

interface Props {
    value: string[];
    handleChange: (name: 'portfolioUrls' | 'projectUrls', index: number, value: string) => void;
    handleAdd: (name: 'portfolioUrls' | 'projectUrls') => void;
    handleDelete: (name: 'portfolioUrls' | 'projectUrls', index: number) => void;
}

export const ProjectUrlsFormPart = ({ handleAdd, handleChange, handleDelete, value }: Props) => {

    const inputList = () => value.map((item, index) => <InputItem key={String(index)} handleChange={handleChange} handleDelete={handleDelete} index={index} name="projectUrls" value={item} />);

    return (
        <InputFormPart title="Linki do projektu zaliczeniowego" className="profile-edit__form-flex-item">
            {inputList()}
            <Button
                textName="Dodaj odnośnik"
                click={() => handleAdd('projectUrls')}
                className="profile-edit__form-btn"
                type="button"
                preventDefault
            />
        </InputFormPart>
    );
};
