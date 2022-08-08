import React from 'react';

import { HrStudentToTalkItem } from './HrStudentToTalkItem';

export interface StudentsToTalk {
  id: string
  reservation: string;
  githubName: string;
  firstName: string;
  lastName: string;
  courseCompletion: number;
  courseEngagement: number;
  projectDegree: number;
  teamProjectDegree: number;
  expectedTypeWork: string;
  targetWorkCity: string;
  expectedContractType: string;
  expectedSalary: number;
  canTakeApprenticeship: boolean;
  monthsOfCommercialExp: number;
}

export const HrStudentToTalkList = () => {

  const studentListDefault = [
    {
      id: 'vsndiufhw487hfw9',
      reservation: '11.07.2022',
      githubName: 'Ami777',
      firstName: 'Jan',
      lastName: 'Kowalski',
      courseCompletion: 4,
      courseEngagement: 4,
      projectDegree: 5,
      teamProjectDegree: 5,
      expectedTypeWork: 'Biuro',
      targetWorkCity: 'Warszawa',
      expectedContractType: 'Umowa o pracę',
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 0,
    },
    {
      id: 'oijnunwe3iu45h98',
      reservation: '11.07.2022',
      githubName: 'Przekol',
      firstName: 'Paweł',
      lastName: 'Szymański',
      courseCompletion: 5,
      courseEngagement: 5,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: 'Zdalnie',
      targetWorkCity: '',
      expectedContractType: 'BTB',
      expectedSalary: 10000,
      canTakeApprenticeship: false,
      monthsOfCommercialExp: 16,
    },
    {
      id: 'pio345jiooi3n4',
      reservation: '11.07.2022',
      githubName: 'Rafal-Matras',
      firstName: 'Mariusz',
      lastName: 'Lipa',
      courseCompletion: 4,
      courseEngagement: 4,
      projectDegree: 3,
      teamProjectDegree: 4,
      expectedTypeWork: 'Biuro',
      targetWorkCity: 'Kraków',
      expectedContractType: 'BTB',
      expectedSalary: 7500,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 2,
    },
  ];

  return (
    <div className="to-talk-list-container">
      <div className="filter-container">
        <p>search</p>
        <p>filter</p>
      </div>
      {studentListDefault.map(item =>
        <HrStudentToTalkItem
          key={item.id}
          students={item}
        />,
      )}
    </div>
  );
};