import { Dispatch } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { StudentsFilterAction, StudentsFilterActionType } from '../../../reducers/studentsFilterReducer';

interface Props {
    value: number;
    actionType: StudentsFilterActionType;
    dispatch: Dispatch<StudentsFilterAction>;
}

export const RateForm = ({ dispatch, value, actionType }: Props) => {

    const handleRateChange = (rate: number) => {
        dispatch({ type: actionType, payload: rate });
    };

    const isActive = (v: number) => v === value ? ' active' : '';

    return (
        // Można tu zrobić dodadkowy komponent żeby się nie powtarzać
        <div className="students-filter__form-rate">
            <div className={`students-filter__form-rate-part${isActive(1)}`} onClick={() => handleRateChange(1)}>
                1 <AiFillStar className="students-filter__form-rate-part-icon" />
            </div>
            <div className={`students-filter__form-rate-part${isActive(2)}`} onClick={() => handleRateChange(2)}>
                2 <AiFillStar className="students-filter__form-rate-part-icon" />
            </div>
            <div className={`students-filter__form-rate-part${isActive(3)}`} onClick={() => handleRateChange(3)}>
                3 <AiFillStar className="students-filter__form-rate-part-icon" />
            </div>
            <div className={`students-filter__form-rate-part${isActive(4)}`} onClick={() => handleRateChange(4)}>
                4 <AiFillStar className="students-filter__form-rate-part-icon" />
            </div>
            <div className={`students-filter__form-rate-part${isActive(5)}`} onClick={() => handleRateChange(5)}>
                5 <AiFillStar className="students-filter__form-rate-part-icon" />
            </div>
        </div>
    );
};