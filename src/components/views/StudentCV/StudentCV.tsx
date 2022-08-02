import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { StudentDetails } from './StudentDetails/StudentDetails';
import { StudentExperience } from './StudentExperience/StudentExperience';

export interface Student {
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

  return (
    <div className="student-cv">
      <div className="main">
        {student.role === 'student'
          ? null
          : <div className="main__go-back">
            <FaChevronLeft/>
            <p>Wróć</p>
          </div>
        }
        <StudentDetails
          student={student}
        />
        <StudentExperience
          student={student}
        />
      </div>
    </div>
  );
};