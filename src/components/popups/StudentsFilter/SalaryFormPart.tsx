import { Dispatch } from "react";
import { StudentsFilterAction } from "src/reducers/studentsFilterReducer";

interface Props {
    value: {
        min: number | '';
        max: number | '';
    };
    dispatch: Dispatch<StudentsFilterAction>;
}

export const SalaryFormPart = ({ dispatch, value }: Props) => {
    return (
        <div className="students-filter__form-part">
            <h3 className="students-filter__form-subtitle">Oczekiwane wynagrodzenie miesięczne netto</h3>
            <div className="students-filter__form-salary">
                <label className="students-filter__form-salary-label">
                    Od
                    <input
                      type="number"
                      className="input students-filter__input"
                      value={value.min}
                      onChange={e => dispatch({ type: 'SALARY_CHANGE', payload: { type: 'MIN', value: Number(e.target.value) } })}
                      step={100}
                      placeholder="np. 1000 zł" min={0}
                    />
                </label>

                <label className="students-filter__form-salary-label">
                    Do
                    <input
                      type="number"
                      className="input students-filter__input"
                      value={value.max}
                      onChange={e => dispatch({ type: 'SALARY_CHANGE', payload: { type: 'MAX', value: Number(e.target.value) } })}
                      step={100}
                      placeholder="np. 10000 zł" min={0}
                    />
                </label>
            </div>
        </div>
    );
};
