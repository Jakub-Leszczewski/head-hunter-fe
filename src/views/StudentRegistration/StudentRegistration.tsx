import React, { useState } from 'react';

import { Button } from '../../components/common/Button/Button';
import { Passwords } from './Passwords';
import { PersonalData } from './PersonalData';
import { DataForWork } from './DataForWork';
import { LongText } from './LongText';
import { ProjectsUrls } from './ProjectsUrls';

export interface Student {
  password: string;
  confirmPassword: string;
  phone: string;
  firstName: string;
  lastName: string;
  githubUsername: string;
  portfolioUrls: string[];
  projectUrls: string[];
  bio: string;
  expectedTypeWork: string;
  targetWorkCity: string;
  expectedContractType: string;
  expectedSalary: string;
  canTakeApprenticeship: string;
  monthsOfCommercialExp: string;
  education: string;
  workExperience: string;
  courses: string;
}

export const StudentRegistration = () => {

  const [student, setStudent] = useState<Student>({
    password: '',
    confirmPassword: '',
    phone: '',
    firstName: '',
    lastName: '',
    githubUsername: '',
    portfolioUrls: [''],
    projectUrls: [''],
    bio: '',
    expectedTypeWork: '',
    targetWorkCity: '',
    expectedContractType: '',
    expectedSalary: '',
    canTakeApprenticeship: '',
    monthsOfCommercialExp: '',
    education: '',
    workExperience: '',
    courses: '',
  });

  const changeStudent = (name: string, value: string | number) => {
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
    }))
  }

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

  return (
    <div className="student-registration">
      <h2 className="student-registration__title">
        Rejestracja Kursanta
      </h2>
      <form className="student-registration__form">
        <Passwords
          student={student}
          changeStudent={changeStudent}
        />
        <PersonalData
          student={student}
          changeStudent={changeStudent}
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
          />
        </div>
      </form>
    </div>
  );
};