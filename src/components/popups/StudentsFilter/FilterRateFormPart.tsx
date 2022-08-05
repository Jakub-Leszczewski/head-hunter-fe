import { Dispatch } from "react";
import { RateForm } from "./RateForm";
import { StudentsFilterAction, StudentsFilterActionType } from "../../../reducers/studentsFilterReducer";

interface Props {
    title?: string;
    value: number;
    dispatch: Dispatch<StudentsFilterAction>;
    actionType: StudentsFilterActionType;
}

export const FilterRateFormPart = ({ title, dispatch, value, actionType }: Props) => {
    return (
        <div className="students-filter__form-part">
            <h3 className="students-filter__form-subtitle">{title || 'Ocena'}</h3>
            <RateForm dispatch={dispatch} value={value} actionType={actionType} />
        </div>
    );
};