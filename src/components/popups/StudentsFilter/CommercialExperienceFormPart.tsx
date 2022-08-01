import { Dispatch } from "react";
import { StudentsFilterAction } from "../../../reducers/studentsFilterReducer";

interface Props {
    value: number | '';
    dispatch: Dispatch<StudentsFilterAction>;
}

export const CommercialExperienceFormPart = ({ dispatch, value }: Props) => {
    return (
        <div className="students-filter__form-part">
            <h3 className="students-filter__form-subtitle">Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu</h3>
            <input type="number" className="input students-filter__input" value={value} onChange={e => dispatch({ type: 'COMMERCIAL_EXPERIENCE_CHANGE', payload: Number(e.target.value) })} placeholder="0 miesięcy" />
        </div>
    );
}