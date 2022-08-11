import React, { useState } from 'react';

import { UpdateStudentDtoInterface, ContractType, WorkType } from 'types';

import { Button } from '../../components/common/Button/Button';
import { Passwords } from './Passwords';
import { PersonalData } from './PersonalData';
import { DataForWork } from './DataForWork';
import { LongText } from './LongText';
import { ProjectsUrls } from './ProjectsUrls';
import { fetchTool } from '../../utils/fetchHelpers';
import { useNavigate, useParams } from 'react-router-dom';

export const StudentRegistration = () => {

  const { userId, token } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState<Omit<UpdateStudentDtoInterface, 'email' | 'password'>>({
    lastName: '',
    firstName: '',
    newPassword: '',
    githubUsername: '',
    bio: '',
    phoneNumber: '',
    projectUrls: [''],
    portfolioUrls: [''],
    education: '',
    courses: '',
    monthsOfCommercialExp: 0,
    workExperience: '',
    expectedSalary: 0,
    targetWorkCity: '',
    expectedContractType: ContractType.Irrelevant,
    expectedTypeWork: WorkType.Irrelevant,
    canTakeApprenticeship: false,
  });
  const [validation, setValidation] = useState(true)

  const changeStudent = (name: string, value: string | number | boolean) => {
    (setStudent(student => ({
      ...student,
      [name]: value,
    }))
    );
  };

  const addUrls = (name: 'portfolioUrls' | 'projectUrls') => {
    setStudent(student => ({
      ...student,
      [name]: [...student[name], ''],
    }));
  };

  const editUrls = (name: 'portfolioUrls' | 'projectUrls', index: number, value: string) => {
    setStudent(student => ({
      ...student,
      [name]: student[name].map((item, ix) => {
        if (ix === index) return value
        return item
      }),
    }));
  };

  const deleteUrls = (name: 'portfolioUrls' | 'projectUrls', index: number) => {
    setStudent(student => ({
      ...student,
      [name]: student[name].filter((item, ix) => ix !== index),
    }));
  };

  const sendForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validation) return;
    const response = await fetchTool(`user/${userId}/student`, 'PATCH', student);
    if (!response.status) return console.log('Coś poszło nie tak.');
    console.log('Poprawnie zarejestrowano kursanta.');
    navigate(`/student/${userId}`);
  };

  return (
    <div className="student-registration">
      <h2 className="student-registration__title">
        Rejestracja Kursanta
      </h2>
      <form className="student-registration__form" onSubmit={sendForm}>
        <Passwords
          changeStudent={changeStudent}
          validation={setValidation}
        />
        <PersonalData
          student={student}
          changeStudent={changeStudent}
          validation={setValidation}
        />
        <DataForWork
          student={student}
          changeStudent={changeStudent}
        />
        <ProjectsUrls
          student={student}
          addUrls={addUrls}
          editUrls={editUrls}
          deleteUrls={deleteUrls}
        />
        <LongText
          student={student}
          changeStudent={changeStudent}
        />
        <div className="student-registration__form-button">
          <Button
            textName="Potwierdz"
            type='submit'
          />
        </div>
      </form>
    </div>
  );
};