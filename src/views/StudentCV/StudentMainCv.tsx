import React from 'react';
import { LongText } from '../../components/LongText/LongText';
import { StudentExpectations } from './StudentExpectations';
import { StudentCurseRatingList } from './StudentCurseRatingList';
import { LinksList } from '../../components/LinksList/LinksList';
import { GetStudentResponse } from 'types';

interface Props {
  data: GetStudentResponse;
}

export const StudentMainCv = ({ data }: Props) => {

  const {
    bonusProjectUrls,
    canTakeApprenticeship,
    courseCompletion,
    courseEngagement,
    courses,
    education,
    expectedContractType,
    expectedSalary,
    expectedTypeWork,
    monthsOfCommercialExp,
    portfolioUrls,
    projectDegree,
    projectUrls,
    targetWorkCity,
    teamProjectDegree,
    workExperience,
  } = data.student;

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
        targetWorkCity={targetWorkCity ?? ''}
        expectedContractType={expectedContractType}
        expectedSalary={expectedSalary}
        canTakeApprenticeship={canTakeApprenticeship}
        monthsOfCommercialExp={monthsOfCommercialExp}
      />
      {education && <LongText
        title="Edukacja"
        description={education ?? ''}
      />}
      {courses && <LongText
        title="Kursy"
        description={courses ?? ''}
      />}
      {workExperience && <LongText
        title="Doświadczenie zawodowe"
        description={workExperience ?? ''}
      />}
      {portfolioUrls.length > 0 && <LinksList
        title="Portfolio"
        urls={portfolioUrls}
      />}
      {projectUrls.length > 0 && <LinksList
        title="Projekt na zaliczenie"
        urls={projectUrls}
      />}
      {bonusProjectUrls.length > 0 && <LinksList
        title="Projekt w zespole Scrum"
        urls={bonusProjectUrls}
      />}
    </div>
  );
};
