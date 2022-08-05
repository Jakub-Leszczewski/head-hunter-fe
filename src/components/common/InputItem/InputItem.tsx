import { Button } from "../Button/Button";

interface Props {
    value: string;
    index: number;
    name: 'portfolioUrls' | 'projectUrls';
    handleChange: (name: 'portfolioUrls' | 'projectUrls', index: number, value: string) => void;
    handleDelete: (name: 'portfolioUrls' | 'projectUrls', index: number) => void;
}

export const InputItem = ({ handleChange, handleDelete, index, name, value }: Props) => {
    return (
        <div className="profile-edit__form-input-item">
            <input type="url" name={name} placeholder="Link" value={value} onChange={e => handleChange(name, index, e.target.value)} className="input" maxLength={256} />
            <Button
                type="button"
                preventDefault
                textName="Usuń"
                className="profile-edit__form-btn"
                click={() => handleDelete(name, index)}
            />
        </div>
    );
};