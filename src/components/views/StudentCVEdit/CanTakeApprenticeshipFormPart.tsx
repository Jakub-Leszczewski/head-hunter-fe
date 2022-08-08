import { InputFormPart } from "../../common/InputFormPart/InputFormPart";

interface Props {
    value: boolean;
    handleChange: (value: string) => void;
}

export const CanTakeApprenticeshipFormPart = ({ handleChange, value }: Props) => {
    return (
        <InputFormPart title="Docelowe miasto pracy" className="profile-edit__form-flex-item">
            <div className="students-filter__radio">
                <label className="students-filter__radio-label">
                    <input
                        name="canTakeApprenticeship"
                        type="radio"
                        value="yes"
                        checked={value === true}
                        onChange={e => handleChange(e.target.value)}
                    />
                    Tak
                </label>
            </div>
            <div className="students-filter__radio">
                <label className="students-filter__radio-label">
                    <input
                        name="canTakeApprenticeship"
                        type="radio"
                        value="no"
                        checked={value === false}
                        onChange={e => handleChange(e.target.value)}
                    />
                    Nie
                </label>
            </div>
        </InputFormPart>
    );
};