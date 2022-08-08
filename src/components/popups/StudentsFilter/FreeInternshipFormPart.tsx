import { Dispatch } from "react";
import { FreeInternship, StudentsFilterAction } from "src/reducers/studentsFilterReducer";

interface Props {
    value: FreeInternship;
    dispatch: Dispatch<StudentsFilterAction>;
}

export const FreeInternshipFormPart = ({ dispatch, value }: Props) => {
    return (
        <div className="students-filter__form-part">
            <h3 className="students-filter__form-subtitle">Zgoda na odbycie bezpłatnych praktyk/stażu na początek</h3>
            <div className="students-filter__radio">
                <label className="students-filter__radio-label">
                    <input
                        type="radio"
                        value="yes"
                        checked={value === "yes"}
                        onChange={() => dispatch({ type: 'FREE_INTERNSHIP_CHANGE', payload: 'yes' })}
                    />
                    Tak
                </label>
            </div>
            <div className="students-filter__radio">
                <label className="students-filter__radio-label">
                    <input
                        type="radio"
                        value="yes"
                        checked={value === "no"}
                        onChange={() => dispatch({ type: 'FREE_INTERNSHIP_CHANGE', payload: 'no' })}
                    />
                    Nie
                </label>
            </div>
        </div>
    );
};