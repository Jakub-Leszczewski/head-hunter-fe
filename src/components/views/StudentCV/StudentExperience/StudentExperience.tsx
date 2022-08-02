import React from 'react';

import { Student } from '../StudentCV';

import { StudentCurseRatings } from './StudentCurseRatings/StudentCurseRatings';
import { StudentLinks } from './StudentLinks/StudentLinks';
import { StudentEducation } from './StudentEducation/StudentEducation';
import { StudentEmploymentExpectations } from './StudentEmploymentExpectations/StudentEmploymentExpectations';

interface Props {
  student: Student;
}

export const StudentExperience = ({ student }: Props) => {

  const {
    courseCompletion,
    courseEngagement,
    projectDegree,
    teamProjectDegree,
    expectedTypeWork,
    targetWorkCity,
    expectedContractType,
    expectedSalary,
    canTakeApprenticeship,
    monthsOfCommercialExp,
    education,
    courses,
    workExperience,
    portfolioUrls,
    projectUrls,
    bonusProjectUrls,
  } = student;

  const curseRatingsList = [
    { title: 'Ocena przejścia kursu', rating: courseCompletion },
    { title: 'Ocena aktywności i zaangażowania na kusie', rating: courseEngagement },
    { title: 'Ocena kodu w projekcie własnym', rating: projectDegree },
    { title: 'Ocena pracy w zespole Scrum', rating: teamProjectDegree },
  ];

  return (
    <div className="main__right">
      <StudentCurseRatings
        curseRatingsList={curseRatingsList}
      />
      <StudentEmploymentExpectations
        expectedTypeWork={expectedTypeWork}
        targetWorkCity={targetWorkCity}
        expectedContractType={expectedContractType}
        expectedSalary={expectedSalary}
        canTakeApprenticeship={canTakeApprenticeship}
        monthsOfCommercialExp={monthsOfCommercialExp}
      />
      <StudentEducation
        title="Edukacja"
        description={education}
      />
      <StudentEducation
        title="Kursy"
        description={courses}
      />
      <StudentEducation
        title="Doświadczenie zawodowe"
        description={workExperience}
      />
      <StudentLinks
        title="Portfolio"
        urls={portfolioUrls}
      />
      <StudentLinks
        title="Projekt w zespole Scrum"
        urls={projectUrls}
      />
      <StudentLinks
        title="Projekt na zaliczenie"
        urls={bonusProjectUrls}
      />
    </div>
  );
};