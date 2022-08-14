import { Dispatch, FormEvent, useMemo } from "react";
import { Button } from "../../common/Button/Button";
import { FilterRateFormPart } from "./FilterRateFormPart";
import { StudentsFilterAction, StudentsFilterState } from "../../../reducers/studentsFilterReducer";
import { WorkplaceFormPart } from "./WorkplaceFormPart";
import { ContrackTypeFormPart } from "./ContrackTypeFormPart";
import { SalaryFormPart } from "./SalaryFormPart";
import { FreeInternshipFormPart } from "./FreeInternshipFormPart";
import { CommercialExperienceFormPart } from "./CommercialExperienceFormPart";
import { studentsFilterDefault } from "../../../views/AvailableStudents/AvailableStudents";

interface Props {
  state: StudentsFilterState;
  close: () => void;
  dispatch: Dispatch<StudentsFilterAction>;
  handleFilterSubmit: (e: FormEvent) => void;
}

export const StudentsFilterForm = ({ dispatch, handleFilterSubmit, state, close }: Props) => {

  const courseRateComponent = useMemo(() => (
    <FilterRateFormPart
      dispatch={dispatch}
      title="Ocena przejścia kursu"
      value={state.courseCompletion}
      actionType="COURSE_RATE_CHANGE"
    />
  ), [state.courseCompletion]);

  const activityRateComponent = useMemo(() => (
    <FilterRateFormPart
      dispatch={dispatch}
      title="Ocena aktywności i zaangażowania na kursie"
      value={state.courseEngagement}
      actionType="ACTIVITY_RATE_CHANGE"
    />
  ), [state.courseEngagement]);

  const codeQualityRateComponent = useMemo(() => (
    <FilterRateFormPart
      dispatch={dispatch}
      title="Ocena kodu w projekcie własnym"
      value={state.projectDegree}
      actionType="CODE_QUALITY_RATE_CHANGE"
    />
  ), [state.projectDegree]);

  const workInScrumRateComponent = useMemo(() => (
    <FilterRateFormPart
      dispatch={dispatch}
      title="Ocena pracy w zespole w Scrum"
      value={state.teamProjectDegree}
      actionType="WORK_IN_SCRUM_RATE_CHANGE"
    />
  ), [state.teamProjectDegree]);

  const workplaceComponent = useMemo(() => (
    <WorkplaceFormPart dispatch={dispatch} value={state.expectedTypeWork} />
  ), [state.expectedTypeWork]);

  const contractTypeComponent = useMemo(() => (
    <ContrackTypeFormPart dispatch={dispatch} value={state.expectedContractType} />
  ), [state.expectedContractType]);

  const salaryComponent = useMemo(() => (
    <SalaryFormPart dispatch={dispatch} value={state.expectedSalary} />
  ), [state.expectedSalary]);

  const freeInternshipComponent = useMemo(() => (
    <FreeInternshipFormPart dispatch={dispatch} value={state.canTakeApprenticeship} />
  ), [state.canTakeApprenticeship]);

  const commercialExperienceComponent = useMemo(() => (
    <CommercialExperienceFormPart dispatch={dispatch} value={state.monthsOfCommercialExp} />
  ), [state.monthsOfCommercialExp]);

  return (
    <form className="form students-filter__form" onSubmit={handleFilterSubmit}>
      <h2 className="students-filter__form-title">Filtrowanie</h2>
      <Button
        textName="Wyczyść wszystkie"
        className="students-filter__form-reset"
        click={() => dispatch({ type: 'FORM_SET', payload: studentsFilterDefault })}
        type="button"
      />

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
        <Button textName="Anuluj" className="students-filter__form-close" click={close} type="button" />
        <Button textName="Pokaż wyniki" className="students-filter__form-submit" />
      </div>
    </form>
  );
}
