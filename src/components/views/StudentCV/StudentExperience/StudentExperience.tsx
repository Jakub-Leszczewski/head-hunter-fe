import React from 'react';
import { StudentCurseRatings } from './StudentCurseRatings/StudentCurseRatings';
import { StudentLinks } from './StudentLinks/StudentLinks';
import { StudentEducation } from './StudentEducation/StudentEducation';
import { StudentEmploymentExpectations } from './StudentEmploymentExpectations/StudentEmploymentExpectations';

interface Props {
  courseCompletion: number;
  courseEngagement: number;
  projectDegree: number;
  teamProjectDegree: number;
  education: string;
  courses: string;
  monthsOfCommercialExp: number;
  workExperience: string;
  targetWorkCity: string;
  expectedSalary: number;
  expectedContractType: string;
  expectedTypeWork: string;
  canTakeApprenticeship: number;
  portfolioUrls: string[];
  projectUrls: string[];
  bonusProjectUrls: string[];
}

export const StudentExperience = ({
  courseCompletion,
  courseEngagement,
  projectDegree,
  teamProjectDegree,
  education,
  courses,
  monthsOfCommercialExp,
  workExperience,
  targetWorkCity,
  expectedSalary,
  expectedContractType,
  expectedTypeWork,
  canTakeApprenticeship,
  portfolioUrls,
  projectUrls,
  bonusProjectUrls,
}: Props) => {

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
        title='Edukacja'
        description={education}
        />
      <StudentEducation
        title='Kursy'
        description={courses}
      />
      <StudentEducation
        title='Doświadczenie zawodowe'
        description={workExperience}
      />
      <StudentLinks
      title='Portfolio'
      urls={portfolioUrls}
      />
      <StudentLinks
        title='Projekt w zespole Scrum'
        urls={projectUrls}
      />
      <StudentLinks
        title='Projekt na zaliczenie'
        urls={bonusProjectUrls}
      />
    </div>
  );
};