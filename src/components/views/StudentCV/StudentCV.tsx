import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { StudentDetails } from './StudentDetails/StudentDetails';
import { StudentExperience } from './StudentExperience/StudentExperience';

interface Student {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  courseCompletion: number;
  courseEngagement: number;
  projectDegree: number;
  teamProjectDegree: number;
  githubUsername: string;
  bio: string;
  phoneNumber: string;
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

export const StudentCV = () => {

  const [student, setStudent] = useState<Student>({
    firstName: 'Jan',
    lastName: 'Kowalski',
    email: 'jankowalski@gmail.com',
    role: 'hr',
    courseCompletion: 2,
    courseEngagement: 3,
    projectDegree: 4,
    teamProjectDegree: 5,
    githubUsername: 'Ami777',
    bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo',
    phoneNumber: '+48 566 072 227',
    education: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo',
    courses: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo',
    monthsOfCommercialExp: 6,
    workExperience: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo',
    targetWorkCity: 'Warszawa',
    expectedSalary: 8000,
    expectedContractType: 'Umowa o pracę',
    expectedTypeWork: 'Biuro',
    canTakeApprenticeship: 1,
    portfolioUrls: ['https://github.com'],
    projectUrls: ['https://github.com/ezterr/head-hunter-fe', 'https://github.com/ezterr/head-hunter-be'],
    bonusProjectUrls: ['https://github.com'],
  });

  const {
    projectUrls,
    targetWorkCity,
    portfolioUrls,
    phoneNumber,
    canTakeApprenticeship,
    courseEngagement,
    projectDegree,
    role,
    email,
    monthsOfCommercialExp,
    teamProjectDegree,
    githubUsername,
    education,
    expectedContractType,
    firstName,
    expectedSalary,
    bio,
    courses,
    workExperience,
    bonusProjectUrls,
    expectedTypeWork,
    lastName,
    courseCompletion
  } = student;

  return (
    <div className="student-cv">
      <div className="main">
        {role === 'student'
          ? null
          : <div className="main__go-back">
            <FaChevronLeft/>
            <p>Wróć</p>
          </div>
        }
        <StudentDetails
          firstName={firstName}
          lastName={lastName}
          githubUsername={githubUsername}
          phoneNumber={phoneNumber}
          email={email}
          role={role}
          bio={bio}
        />
        <StudentExperience
          courseCompletion={courseCompletion}
          courseEngagement={courseEngagement}
          projectDegree={projectDegree}
          teamProjectDegree={teamProjectDegree}
          education={education}
          courses={courses}
          monthsOfCommercialExp={monthsOfCommercialExp}
          workExperience={workExperience}
          targetWorkCity={targetWorkCity}
          expectedSalary={expectedSalary}
          expectedContractType={expectedContractType}
          expectedTypeWork={expectedTypeWork}
          canTakeApprenticeship={canTakeApprenticeship}
          portfolioUrls={portfolioUrls}
          projectUrls={projectUrls}
          bonusProjectUrls={bonusProjectUrls}
        />
      </div>
    </div>
  );
};