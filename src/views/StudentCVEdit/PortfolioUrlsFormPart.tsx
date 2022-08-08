import { InputItem } from "../../components/common/InputItem/InputItem";
import { Button } from "../../components/common/Button/Button";
import { InputFormPart } from "../../components/common/InputFormPart/InputFormPart";

interface Props {
    value: string[];
    handleChange: (name: 'portfolioUrls' | 'projectUrls', index: number, value: string) => void;
    handleAdd: (name: 'portfolioUrls' | 'projectUrls') => void;
    handleDelete: (name: 'portfolioUrls' | 'projectUrls', index: number) => void;
}

export const PortfolioUrlsFormPart = ({ handleAdd, handleChange, handleDelete, value }: Props) => {

    const inputList = () => value.map((item, index) => <InputItem key={String(index)} handleChange={handleChange} handleDelete={handleDelete} index={index} name="portfolioUrls" value={item} />);

    return (
        <InputFormPart title="Linki do portfolio" className="profile-edit__form-flex-item">
            {inputList()}
            <Button
                textName="Dodaj odnośnik"
                click={() => handleAdd('portfolioUrls')}
                className="profile-edit__form-btn"
                type="button"
                preventDefault
            />
        </InputFormPart>
    );
};
