import { FormEvent, useEffect, useMemo, useState } from "react";
import { OnlyUserResponse, StudentResponseData, UpdateStudentDtoInterface, UpdateStudentResponse } from "types";
import { useUserData } from "../../hooks/useUserData";
import { useUser } from "../../hooks/useUser";
import { fetchTool } from "../../utils/fetchHelpers";

import { Button } from "../../components/common/Button/Button";
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
import { useSaveUserData } from "../../hooks/useSaveUserData";
import { useResponseContext } from '../../contexts/PopupResponseContext'
import { setError } from '../../utils/setError'

export const ProfileEditForm = () => {
    const { setErrorHandler, setLoadingHandler } = useResponseContext();
    const user = useUser() as OnlyUserResponse;
    const studentData = useUserData() as StudentResponseData;
    const refreshUserData = useSaveUserData();
    const { bio, canTakeApprenticeship, courses, education, expectedContractType, expectedSalary, expectedTypeWork, monthsOfCommercialExp, githubUsername, phoneNumber, portfolioUrls, projectUrls, targetWorkCity, workExperience } = studentData;
    const profileEditDefaultState: Omit<UpdateStudentDtoInterface, 'email' | 'password' | 'newPassword'> = useMemo(() => ({
        bio: bio ?? '',
        canTakeApprenticeship,
        courses: courses ?? '',
        education: education ?? '',
        expectedContractType,
        expectedSalary,
        expectedTypeWork,
        firstName: user.firstName ?? '',
        githubUsername: githubUsername ?? '',
        lastName: user.lastName ?? '',
        monthsOfCommercialExp,
        phoneNumber: phoneNumber ?? '',
        portfolioUrls: portfolioUrls.map(url => url.url),
        projectUrls: projectUrls.map(url => url.url),
        targetWorkCity: targetWorkCity ?? '',
        workExperience: workExperience ?? '',
    }), [studentData, user]);

    const [profileEditState, setProfileEditState] = useState<Omit<UpdateStudentDtoInterface, 'email' | 'password' | 'newPassword'>>(profileEditDefaultState);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoadingHandler(true);
        const response = await fetchTool<UpdateStudentResponse>(`user/${user.id}/student`, 'PATCH', profileEditState);
        if (!response.status) {
            setErrorHandler(setError(response.message))
            setLoadingHandler(false);
            return;
        }

        setLoadingHandler(false);
        refreshUserData(response.results);
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

    const nameComponent = useMemo(() => (
        <NameFormPart
            firstName={profileEditState.firstName}
            lastName={profileEditState.lastName}
            handleChange={handleChange}
        />
    ), [profileEditState.firstName, profileEditState.lastName]);

    const phoneComponent = useMemo(() => (
        <PhoneFormPart
            handleChange={handleChange}
            value={profileEditState.phoneNumber}
        />
    ), [profileEditState.phoneNumber]);

    const githubLoginComponent = useMemo(() => (
        <GithubLoginFormPart
            handleChange={handleChange}
            value={profileEditState.githubUsername}
        />
    ), [profileEditState.githubUsername]);

    const portfolioUrlsComponent = useMemo(() => (
        <PortfolioUrlsFormPart
            handleAdd={handleArrayItemAdd}
            handleChange={handleArrayChange}
            handleDelete={handleArrayItemDelete}
            value={profileEditState.portfolioUrls}
        />
    ), [profileEditState.portfolioUrls]);

    const projectUrlsComponent = useMemo(() => (
        <ProjectUrlsFormPart
            handleAdd={handleArrayItemAdd}
            handleChange={handleArrayChange}
            handleDelete={handleArrayItemDelete}
            value={profileEditState.projectUrls}
        />
    ), [profileEditState.projectUrls]);

    const bioComponent = useMemo(() => (
        <BioFormPart
            handleChange={handleChange}
            value={profileEditState.bio}
        />
    ), [profileEditState.bio]);

    const expectedTypeWorkComponent = useMemo(() => (
        <ExpectedTypeWorkFormPart
            handleChange={handleChange}
            value={profileEditState.expectedTypeWork}
        />
    ), [profileEditState.expectedTypeWork]);

    const targetWorkCityComponent = useMemo(() => (
        <TargetWorkCityFormPart
            handleChange={handleChange}
            value={profileEditState.targetWorkCity}
        />
    ), [profileEditState.targetWorkCity]);

    const expectedContractTypeComponent = useMemo(() => (
        <ExpectedContractTypeFormPart
            handleChange={handleChange}
            value={profileEditState.expectedContractType}
        />
    ), [profileEditState.expectedContractType]);

    const expectedSalaryComponent = useMemo(() => (
        <ExpectedSalaryFormPart
            handleChange={handleChange}
            value={profileEditState.expectedSalary}
        />
    ), [profileEditState.expectedSalary]);

    const canTakeApprenticeshipComponent = useMemo(() => (
        <CanTakeApprenticeshipFormPart
            handleChange={handleRadioChange}
            value={profileEditState.canTakeApprenticeship}
        />
    ), [profileEditState.canTakeApprenticeship]);

    const monthsOfCommercialExpComponent = useMemo(() => (
        <MonthsOfCommercialExpFormPart
            handleChange={handleChange}
            value={profileEditState.monthsOfCommercialExp}
        />
    ), [profileEditState.monthsOfCommercialExp]);

    const educationComponent = useMemo(() => (
        <EducationFormPart
            handleChange={handleChange}
            value={profileEditState.education}
        />
    ), [profileEditState.education]);

    const workExperienceComponent = useMemo(() => (
        <WorkExperienceFormPart
            handleChange={handleChange}
            value={profileEditState.workExperience}
        />
    ), [profileEditState.workExperience]);

    const coursesComponent = useMemo(() => (
        <CoursesFormPart
            handleChange={handleChange}
            value={profileEditState.courses}
        />
    ), [profileEditState.courses]);

    useEffect(() => {
        setProfileEditState(profileEditDefaultState);
    }, [profileEditDefaultState]);

    return (
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
            </div>
            <div className="profile-edit__form-section profile-edit__form-section--flex">
                {educationComponent}
            </div>
            <div className="profile-edit__form-section profile-edit__form-section--flex">
                {workExperienceComponent}
            </div>
            <div className="profile-edit__form-section profile-edit__form-section--flex">
                {coursesComponent}
            </div>
            <Button disabled={projectUrls.length < 1} textName="Zapisz" className="profile-edit__button" />
        </form>
    );
};
