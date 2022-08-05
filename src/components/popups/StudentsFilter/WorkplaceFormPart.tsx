import { Dispatch } from "react";
import { StudentsFilterAction, WorkPreference } from "../../../reducers/studentsFilterReducer";

interface Props {
    value: WorkPreference[];
    dispatch: Dispatch<StudentsFilterAction>;
}

export const WorkplaceFormPart = ({ dispatch, value }: Props) => {

    const handleWorkPreferenceChange = (preference: WorkPreference) => {
        dispatch({ type: 'WORK_PREFERENCE_CHANGE', payload: preference });
    };

    const isActive = (preference: WorkPreference) => value.findIndex(e => e === preference) !== -1 ? ' active' : '';

    return (
        <div className="students-filter__form-part">
            <h3 className="students-filter__form-subtitle">Preferowane miejsce pracy</h3>
            <div className="students-filter__form-container">
                <p className={`students-filter__form-option${isActive('Praca zdalna')}`} onClick={() => handleWorkPreferenceChange('Praca zdalna')}>Praca zdalna</p>
                <p className={`students-filter__form-option${isActive('Praca w biurze')}`} onClick={() => handleWorkPreferenceChange('Praca w biurze')}>Praca w biurze</p>
            </div>
        </div>
    );
};