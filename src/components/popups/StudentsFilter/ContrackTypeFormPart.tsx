import { Dispatch } from "react";
import { ContractType } from "types";
import { StudentsFilterAction } from "../../../reducers/studentsFilterReducer";

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
                <p
                    className={`students-filter__form-option${isActive(ContractType.EmploymentContract)}`}
                    onClick={() => handleWorkPreferenceChange(ContractType.EmploymentContract)}
                >
                    Umowa o pracę
                </p>
                <p
                    className={`students-filter__form-option${isActive(ContractType.PossibleB2BContract)}`}
                    onClick={() => handleWorkPreferenceChange(ContractType.PossibleB2BContract)}
                >
                    B2B
                </p>
                <p
                    className={`students-filter__form-option${isActive(ContractType.PossibleMandate)}`}
                    onClick={() => handleWorkPreferenceChange(ContractType.PossibleMandate)}
                >
                    Umowa zlecenie
                </p>
                {/* <p
                  className={`students-filter__form-option${isActive(ContractType.)}`}
                  onClick={() => handleWorkPreferenceChange(ContractType.)}
                >
                    Umowa o dzieło
                </p> */}
            </div>
        </div>
    );
};
