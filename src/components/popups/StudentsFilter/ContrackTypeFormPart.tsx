import { Dispatch } from "react";
import { ContractType, StudentsFilterAction } from "../../../reducers/studentsFilterReducer";

interface Props {
    value: ContractType[];
    dispatch: Dispatch<StudentsFilterAction>;
}

export const ContrackTypeFormPart = ({ dispatch, value }: Props) => {

    const handleWorkPreferenceChange = (contractType: ContractType) => {
        dispatch({ type: 'CONTRACT_TYPE_CHANGE', payload: contractType });
    };

    const isActive = (contractType: ContractType) => value.findIndex(e => e === contractType) !== -1 ? ' active' : '';

    return (
        <div className="students-filter__form-part">
            <h3 className="students-filter__form-subtitle">Oczekiwany typ kontraktu</h3>
            <div className="students-filter__form-container">
                <p className={`students-filter__form-option${isActive('Umowa o pracę')}`} onClick={() => handleWorkPreferenceChange('Umowa o pracę')}>Umowa o pracę</p>
                <p className={`students-filter__form-option${isActive('B2B')}`} onClick={() => handleWorkPreferenceChange('B2B')}>B2B</p>
                <p className={`students-filter__form-option${isActive('Umowa zlecenie')}`} onClick={() => handleWorkPreferenceChange('Umowa zlecenie')}>Umowa zlecenie</p>
                <p className={`students-filter__form-option${isActive('Umowa o dzieło')}`} onClick={() => handleWorkPreferenceChange('Umowa o dzieło')}>Umowa o dzieło</p>
            </div>
        </div>
    );
};