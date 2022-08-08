import React from 'react';

import { Student } from './StudentCV';

import { LongText } from '../../components/LongText/LongText';
import { StudentExpectations } from './StudentExpectations';
import { StudentCurseRatingList } from './StudentCurseRatingList'
import { LinksList } from '../../components/LinksList/LinksList'

interface Props {
  student: Student;
}

export const StudentMainCv = ({ student }: Props) => {

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
      <StudentCurseRatingList
        curseRatingsList={curseRatingsList}
      />
      <StudentExpectations
        expectedTypeWork={expectedTypeWork}
        targetWorkCity={targetWorkCity}
        expectedContractType={expectedContractType}
        expectedSalary={expectedSalary}
        canTakeApprenticeship={canTakeApprenticeship}
        monthsOfCommercialExp={monthsOfCommercialExp}
      />
      <LongText
        title="Edukacja"
        description={education}
      />
      <LongText
        title="Kursy"
        description={courses}
      />
      <LongText
        title="Doświadczenie zawodowe"
        description={workExperience}
      />
      <LinksList
        title="Portfolio"
        urls={portfolioUrls}
      />
      <LinksList
        title="Projekt w zespole Scrum"
        urls={projectUrls}
      />
      <LinksList
        title="Projekt na zaliczenie"
        urls={bonusProjectUrls}
      />
    </div>
  );
};
