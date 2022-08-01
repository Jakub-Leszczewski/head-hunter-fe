export type WorkPreference = '' | 'Praca zdalna' | 'Praca w biurze';
export type ContractType = '' | 'Umowa o pracę' | 'B2B' | 'Umowa zlecenie' | 'Umowa o dzieło';
export type FreeInternship = '' | 'yes' | 'no';

export interface StudentsFilterState {
    courseRate: number;
    activityRate: number;
    codeQualityRate: number;
    workInScrumRate: number;
    workplace: WorkPreference[];
    contractType: ContractType[];
    salary: {
        min: number | '';
        max: number | '';
    };
    freeInternship: FreeInternship;
    commercialExperience: number | '';
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
    payload: WorkPreference;
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
                commercialExperience: action.payload,
            };
        }

        case 'CONTRACT_TYPE_CHANGE': {
            const { payload } = action;
            const isHere = state.contractType.findIndex(t => t === payload) !== -1;
            if (isHere) return { ...state, contractType: state.contractType.filter(t => t !== payload) };
            return { ...state, contractType: [...state.contractType, payload] };
        }

        case 'FREE_INTERNSHIP_CHANGE': {
            return {
                ...state,
                freeInternship: action.payload,
            };
        }
        case 'SALARY_CHANGE': {
            const { type, value } = action.payload;
            if (type === 'MAX') return { ...state, salary: { max: value, min: state.salary.min } };
            if (type === 'MIN') return { ...state, salary: { max: state.salary.max, min: value } };
            return state;
        }
        case 'WORK_PREFERENCE_CHANGE': {
            const { payload } = action;
            const isHere = state.workplace.findIndex(t => t === payload) !== -1;
            if (isHere) return { ...state, workplace: state.workplace.filter(t => t !== payload) };
            return { ...state, workplace: [...state.workplace, payload] };
        }
        case 'ACTIVITY_RATE_CHANGE': {
            return { ...state, activityRate: action.payload };
        }
        case 'CODE_QUALITY_RATE_CHANGE': {
            return { ...state, codeQualityRate: action.payload };
        }
        case 'COURSE_RATE_CHANGE': {
            return { ...state, courseRate: action.payload };
        }
        case 'WORK_IN_SCRUM_RATE_CHANGE': {
            return { ...state, workInScrumRate: action.payload };
        }

        default:
            return state;
    }

}