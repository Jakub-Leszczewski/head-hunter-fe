import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../../common/Button/Button";
import { BioFormPart } from "./BioFormPart";
import { CanTakeApprenticeshipFormPart } from "./CanTakeApprenticeshipFormPart";
import { CoursesFormPart } from "./CoursesFormPart";
import { EducationFormPart } from "./EducationFormPart";
import { ExpectedContractTypeFormPart } from "./ExpectedContractTypeFormPart";
import { ExpectedSalaryFormPart } from "./ExpectedSalaryFormPart";
import { ExpectedTypeWorkFormPart } from "./ExpectedTypeWorkFormPart";
import { GithubLoginFormPart } from "./GithubLoginFormPart";
import { MonthsOfCommercialExpFormPart } from "./MonthsOfCommercialExpFormPart";
import { NameFormPart } from "./NameFormPart";
import { PhoneFormPart } from "./PhoneFormPart";
import { PortfolioUrlsFormPart } from "./PortfolioUrlsFormPart";
import { ProjectUrlsFormPart } from "./ProjectUrlsFormPart";
import { TargetWorkCityFormPart } from "./TargetWorkCityFormPart";
import { WorkExperienceFormPart } from "./WorkExperienceFormPart";

export type ContractType = 'Brak preferencji' | 'Tylko UoP' | 'Możliwe B2B' | 'Możliwe UZ/UoD';
export type ExpectedTypeWork = 'Bez znaczenia' | 'Na miejscu' | 'Gotowość do przeprowadzki' | 'Wyłącznie zdalnie' | 'Hybrydowo';

interface ProfileEditState {
    phone: string;
    firstName: string;
    lastName: string;
    githubUsername: string;
    portfolioUrls: string[];
    projectUrls: string[];
    bio: string;
    expectedTypeWork: ExpectedTypeWork;
    targetWorkCity: string;
    expectedContractType: ContractType;
    expectedSalary: number;
    canTakeApprenticeship: boolean;
    monthsOfCommercialExp: number;
    education: string;
    workExperience: string;
    courses: string;
}

const profileEditDefaultState: ProfileEditState = {
    bio: '',
    canTakeApprenticeship: false,
    courses: '',
    education: '',
    expectedContractType: 'Brak preferencji',
    expectedSalary: 0,
    expectedTypeWork: 'Bez znaczenia',
    firstName: '',
    githubUsername: '',
    lastName: '',
    monthsOfCommercialExp: 0,
    phone: '',
    portfolioUrls: [],
    projectUrls: [],
    targetWorkCity: '',
    workExperience: '',
};

export const ProfileEditForm = () => {

    // const componentRef = useRef(null);
    // const { data } = useData<ProfileEditState>('student/profile-data', componentRef);

    const [profileEditState, setProfileEditState] = useState<ProfileEditState>(profileEditDefaultState);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Edycja profilu...', profileEditState);
    };

    const handleChange = (name: string, value: string | number) => {
        setProfileEditState(state => ({
            ...state,
            [name]: value,
        }));
    };

    const handleArrayChange = (name: 'portfolioUrls' | 'projectUrls', index: number, value: string) => {
        setProfileEditState(state => ({
            ...state,
            [name]: state[name].map((item, i) => {
                if (i === index) return value;
                return item;
            }),
        }));
    };

    const handleArrayItemDelete = (name: 'portfolioUrls' | 'projectUrls', index: number) => {
        setProfileEditState(state => ({
            ...state,
            [name]: state[name].filter((item, i) => i !== index),
        }));
    };

    const handleArrayItemAdd = (name: 'portfolioUrls' | 'projectUrls') => {
        setProfileEditState(state => ({
            ...state,
            [name]: [...state[name], ''],
        }));
    };

    const handleRadioChange = (value: string) => {
        setProfileEditState(state => ({
            ...state,
            canTakeApprenticeship: value === 'yes',
        }));
    };

    const nameComponent = useMemo(() => <NameFormPart firstName={profileEditState.firstName} lastName={profileEditState.lastName} handleChange={handleChange} />, [profileEditState.firstName, profileEditState.lastName]);
    const phoneComponent = useMemo(() => <PhoneFormPart handleChange={handleChange} value={profileEditState.phone} />, [profileEditState.phone]);
    const githubLoginComponent = useMemo(() => <GithubLoginFormPart handleChange={handleChange} value={profileEditState.githubUsername} />, [profileEditState.githubUsername]);
    const portfolioUrlsComponent = useMemo(() => <PortfolioUrlsFormPart handleAdd={handleArrayItemAdd} handleChange={handleArrayChange} handleDelete={handleArrayItemDelete} value={profileEditState.portfolioUrls} />, [profileEditState.portfolioUrls]);
    const projectUrlsComponent = useMemo(() => <ProjectUrlsFormPart handleAdd={handleArrayItemAdd} handleChange={handleArrayChange} handleDelete={handleArrayItemDelete} value={profileEditState.projectUrls} />, [profileEditState.projectUrls]);
    const bioComponent = useMemo(() => <BioFormPart handleChange={handleChange} value={profileEditState.bio} />, [profileEditState.bio]);
    const expectedTypeWorkComponent = useMemo(() => <ExpectedTypeWorkFormPart handleChange={handleChange} value={profileEditState.expectedTypeWork} />, [profileEditState.expectedTypeWork]);
    const targetWorkCityComponent = useMemo(() => <TargetWorkCityFormPart handleChange={handleChange} value={profileEditState.targetWorkCity} />, [profileEditState.targetWorkCity]);
    const expectedContractTypeComponent = useMemo(() => <ExpectedContractTypeFormPart handleChange={handleChange} value={profileEditState.expectedContractType} />, [profileEditState.expectedContractType]);
    const expectedSalaryComponent = useMemo(() => <ExpectedSalaryFormPart handleChange={handleChange} value={profileEditState.expectedSalary} />, [profileEditState.expectedSalary]);
    const canTakeApprenticeshipComponent = useMemo(() => <CanTakeApprenticeshipFormPart handleChange={handleRadioChange} value={profileEditState.canTakeApprenticeship} />, [profileEditState.canTakeApprenticeship]);
    const monthsOfCommercialExpComponent = useMemo(() => <MonthsOfCommercialExpFormPart handleChange={handleChange} value={profileEditState.monthsOfCommercialExp} />, [profileEditState.monthsOfCommercialExp]);
    const educationComponent = useMemo(() => <EducationFormPart handleChange={handleChange} value={profileEditState.education} />, [profileEditState.education]);
    const workExperienceComponent = useMemo(() => <WorkExperienceFormPart handleChange={handleChange} value={profileEditState.workExperience} />, [profileEditState.workExperience]);
    const coursesComponent = useMemo(() => <CoursesFormPart handleChange={handleChange} value={profileEditState.courses} />, [profileEditState.courses]);

    // useEffect(() => {
    //     setProfileEditState(data);
    // }, [data]);

    return (
        // <form ref={componentRef} className="form" onSubmit={handleSubmit}>
        <form className="form" onSubmit={handleSubmit}>
            <div className="profile-edit__form-section profile-edit__form-section--flex">
                {nameComponent}
                {phoneComponent}
                {githubLoginComponent}
            </div>
            <div className="profile-edit__form-section profile-edit__form-section--flex">
                {targetWorkCityComponent}
                {expectedSalaryComponent}
                {monthsOfCommercialExpComponent}
            </div>
            <div className="profile-edit__form-section profile-edit__form-section--flex">
                {expectedTypeWorkComponent}
                {expectedContractTypeComponent}
            </div>
            <div className="profile-edit__form-section profile-edit__form-section--flex">
                {portfolioUrlsComponent}
                {projectUrlsComponent}
            </div>
            <div className="profile-edit__form-section profile-edit__form-section--flex">
                {canTakeApprenticeshipComponent}
            </div>
            <div className="profile-edit__form-section profile-edit__form-section--flex">
                {bioComponent}
                {educationComponent}
            </div>
            <div className="profile-edit__form-section profile-edit__form-section--flex">
                {workExperienceComponent}
                {coursesComponent}
            </div>
            <Button textName="Zapisz" className="profile-edit__button" />
        </form>
    );
};