import { FormEvent, useMemo, useReducer } from "react";
import { Button } from "../../common/Button/Button";
import { FilterRateFormPart } from "./FilterRateFormPart";
import { studentsFilterReducer, StudentsFilterState } from "../../../reducers/studentsFilterReducer";
import { WorkplaceFormPart } from "./WorkplaceFormPart";
import { ContrackTypeFormPart } from "./ContrackTypeFormPart";
import { SalaryFormPart } from "./SalaryFormPart";
import { FreeInternshipFormPart } from "./FreeInternshipFormPart";
import { CommercialExperienceFormPart } from "./CommercialExperienceFormPart";

const studentsFilterDefault: StudentsFilterState = {
    courseEngagment: 0,
    projectDegree: 0,
    monthsOfCommercialExp: '',
    expectedContractType: [''],
    courseCompletion: 0,
    canTakeApprenticeship: '',
    expectedSalary: {
        max: '',
        min: '',
    },
    teamProjectDegree: 0,
    expectedTypeWork: [''],
}

export const StudentsFilterForm = () => {

    // To będzie komponent wyżej, czyli w widoku listy kursantów, ale do testów to napisałem
    const [state, dispatch] = useReducer(studentsFilterReducer, studentsFilterDefault);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('wysyłam formularz...', state);
    };
    //

    const courseRateComponent = useMemo(() => <FilterRateFormPart dispatch={dispatch} title="Ocena przejścia kursu" value={state.courseCompletion} actionType="COURSE_RATE_CHANGE" />, [state.courseCompletion]);
    const activityRateComponent = useMemo(() => <FilterRateFormPart dispatch={dispatch} title="Ocena aktywności i zaangażowania na kursie" value={state.courseEngagment} actionType="ACTIVITY_RATE_CHANGE" />, [state.courseEngagment]);
    const codeQualityRateComponent = useMemo(() => <FilterRateFormPart dispatch={dispatch} title="Ocena kodu w projekcie własnym" value={state.projectDegree} actionType="CODE_QUALITY_RATE_CHANGE" />, [state.projectDegree]);
    const workInScrumRateComponent = useMemo(() => <FilterRateFormPart dispatch={dispatch} title="Ocena pracy w zespole w Scrum" value={state.teamProjectDegree} actionType="WORK_IN_SCRUM_RATE_CHANGE" />, [state.teamProjectDegree]);
    const workplaceComponent = useMemo(() => <WorkplaceFormPart dispatch={dispatch} value={state.expectedTypeWork} />, [state.expectedTypeWork]);
    const contractTypeComponent = useMemo(() => <ContrackTypeFormPart dispatch={dispatch} value={state.expectedContractType} />, [state.expectedContractType]);
    const salaryComponent = useMemo(() => <SalaryFormPart dispatch={dispatch} value={state.expectedSalary} />, [state.expectedSalary]);
    const freeInternshipComponent = useMemo(() => <FreeInternshipFormPart dispatch={dispatch} value={state.canTakeApprenticeship} />, [state.canTakeApprenticeship]);
    const commercialExperienceComponent = useMemo(() => <CommercialExperienceFormPart dispatch={dispatch} value={state.monthsOfCommercialExp} />, [state.monthsOfCommercialExp]);

    return (
        <form className="form students-filter__form" onSubmit={handleSubmit}>
            <h2 className="students-filter__form-title">Filtrowanie</h2>
            <Button textName="Wyczyść wszystkie" className="students-filter__form-reset" click={() => dispatch({ type: 'FORM_SET', payload: studentsFilterDefault })} type="button" />
            {courseRateComponent}
            {activityRateComponent}
            {codeQualityRateComponent}
            {workInScrumRateComponent}
            {workplaceComponent}
            {contractTypeComponent}
            {salaryComponent}
            {freeInternshipComponent}
            {commercialExperienceComponent}
            <div className="students-filter__form-buttons">
                {/* Anuluj nie działa, bo funkcję trzeba napisać w komponencie wyżej jak będzie łączony widok listy z filtrowaniem */}
                <Button textName="Anuluj" className="students-filter__form-close" click={() => { }} type="button" />
                <Button textName="Pokaż wyniki" className="students-filter__form-submit" />
            </div>
        </form>
    );
}