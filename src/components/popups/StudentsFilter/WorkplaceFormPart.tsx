import { Dispatch } from "react";
import { WorkType } from "types";
import { StudentsFilterAction } from "../../../reducers/studentsFilterReducer";

interface Props {
  value: WorkType[];
  dispatch: Dispatch<StudentsFilterAction>;
}

export const WorkplaceFormPart = ({ dispatch, value }: Props) => {

  const handleWorkPreferenceChange = (preference: WorkType) => {
    dispatch({ type: 'WORK_PREFERENCE_CHANGE', payload: preference });
  };

  const isActive = (preference: WorkType) => value.findIndex(e => e === preference) !== -1 ? ' active' : '';

  return (
    <div className="students-filter__form-part">
      <h3 className="students-filter__form-subtitle">Preferowane miejsce pracy</h3>
      <div className="students-filter__form-container">
        <p
          className={`students-filter__form-option${isActive(WorkType.Remote)}`}
          onClick={() => handleWorkPreferenceChange(WorkType.Remote)}>
          Praca zdalna
        </p>

        <p
          className={`students-filter__form-option${isActive(WorkType.OnSite)}`}
          onClick={() => handleWorkPreferenceChange(WorkType.OnSite)}
        >
          Praca w biurze
        </p>
        <p
          className={`students-filter__form-option${isActive(WorkType.Hybrid)}`}
          onClick={() => handleWorkPreferenceChange(WorkType.Hybrid)}
        >
          Hybrydowo
        </p>
        <p
          className={`students-filter__form-option${isActive(WorkType.ReadyToMoving)}`}
          onClick={() => handleWorkPreferenceChange(WorkType.ReadyToMoving)}
        >
          Gotowość do przeprowadzki
        </p>
      </div>
    </div>
  );
};
