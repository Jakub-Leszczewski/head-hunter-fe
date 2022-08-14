import { ContractType, WorkType } from "types";

export type FreeInternship = '' | 'yes' | 'no';

export interface StudentsFilterState {
    courseCompletion: number;
    courseEngagement: number;
    projectDegree: number;
    teamProjectDegree: number;
    expectedTypeWork: WorkType[];
    expectedContractType: ContractType[];
    expectedSalary: {
        min: number | '';
        max: number | '';
    };
    canTakeApprenticeship: FreeInternship;
    monthsOfCommercialExp: number | '';
}

interface FormSet {
    type: 'FORM_SET';
    payload: StudentsFilterState;
}

interface CourseRateChange {
    type: 'COURSE_RATE_CHANGE';
    payload: number;
}
interface ActivityRateChange {
    type: 'ACTIVITY_RATE_CHANGE';
    payload: number;
}
interface CodeQualityRateChange {
    type: 'CODE_QUALITY_RATE_CHANGE';
    payload: number;
}
interface WorkInScrumRateChange {
    type: 'WORK_IN_SCRUM_RATE_CHANGE';
    payload: number;
}

interface WorkPreferenceChange {
    type: 'WORK_PREFERENCE_CHANGE';
    payload: WorkType;
}

interface ContractTypeChange {
    type: 'CONTRACT_TYPE_CHANGE';
    payload: ContractType;
}

interface SalaryChange {
    type: 'SALARY_CHANGE';
    payload: {
        type: 'MIN' | 'MAX';
        value: number | '';
    };
}

interface FreeInternshipChange {
    type: 'FREE_INTERNSHIP_CHANGE';
    payload: FreeInternship;
}

interface CommercialExperienceChange {
    type: 'COMMERCIAL_EXPERIENCE_CHANGE';
    payload: number;
}

export type StudentsFilterActionType = 'COURSE_RATE_CHANGE' | 'ACTIVITY_RATE_CHANGE' | 'CODE_QUALITY_RATE_CHANGE' | 'WORK_IN_SCRUM_RATE_CHANGE';

export type StudentsFilterAction = FormSet | CourseRateChange | ActivityRateChange | CodeQualityRateChange | WorkInScrumRateChange | WorkPreferenceChange | ContractTypeChange | SalaryChange | FreeInternshipChange | CommercialExperienceChange;

export const studentsFilterReducer = (state: StudentsFilterState, action: StudentsFilterAction): StudentsFilterState => {

    switch (action.type) {

        case 'FORM_SET': {
            return action.payload;
        }

        case 'COMMERCIAL_EXPERIENCE_CHANGE': {
            return {
                ...state,
                monthsOfCommercialExp: action.payload,
            };
        }

        case 'CONTRACT_TYPE_CHANGE': {
            const { payload } = action;
            const isHere = state.expectedContractType.findIndex(t => t === payload) !== -1;
            if (isHere) return { ...state, expectedContractType: state.expectedContractType.filter(t => t !== payload) };
            return { ...state, expectedContractType: [...state.expectedContractType, payload] };
        }

        case 'FREE_INTERNSHIP_CHANGE': {
            return {
                ...state,
                canTakeApprenticeship: action.payload,
            };
        }
        case 'SALARY_CHANGE': {
            const { type, value } = action.payload;
            if (type === 'MAX') return { ...state, expectedSalary: { max: value, min: state.expectedSalary.min } };
            if (type === 'MIN') return { ...state, expectedSalary: { max: state.expectedSalary.max, min: value } };
            return state;
        }
        case 'WORK_PREFERENCE_CHANGE': {
            const { payload } = action;
            const isHere = state.expectedTypeWork.findIndex(t => t === payload) !== -1;
            if (isHere) return { ...state, expectedTypeWork: state.expectedTypeWork.filter(t => t !== payload) };
            return { ...state, expectedTypeWork: [...state.expectedTypeWork, payload] };
        }
        case 'ACTIVITY_RATE_CHANGE': {
            return { ...state, courseEngagement: action.payload };
        }
        case 'CODE_QUALITY_RATE_CHANGE': {
            return { ...state, projectDegree: action.payload };
        }
        case 'COURSE_RATE_CHANGE': {
            return { ...state, courseCompletion: action.payload };
        }
        case 'WORK_IN_SCRUM_RATE_CHANGE': {
            return { ...state, teamProjectDegree: action.payload };
        }

        default:
            return state;
    }

}
