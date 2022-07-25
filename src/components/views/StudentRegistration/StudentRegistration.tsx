import React, { useState } from 'react';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

import logo from '../../../assets/images/logo.png';
import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { Label } from '../../common/Label/Label';
import { Select } from '../../common/Select/Select';
import { Textarea } from '../../common/Textarea/Textarea';

interface Student {
  password: string;
  phone: string;
  firstName: string;
  lastName: string;
  githubUsername: string;
  portfolioUrls: string;
  projectUrls: string;
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

  const [passwordView, setPasswordView] = useState(false);
  const [student, setStudent] = useState<Student>({
    password: '',
    phone: '',
    firstName: '',
    lastName: '',
    githubUsername: '',
    portfolioUrls: '',
    projectUrls: '',
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

  return (
    <div className="student-registration">
      <img className="student-registration__image" src={logo} alt="MegaK logo"/>
      <h2 className="student-registration__title">
        Rejestracja Kursanta
      </h2>
      <form className="student-registration__form">
        <div className="student-registration__form-input">
          <Label
            htmlFor="password"
            textName="Hasło"
          />
          <Input
            name="password"
            value={student.password}
            change={changeStudent}
            type={passwordView ? 'text' : 'password'}
          />
          <div
            className="student-registration__form-icon-box"
            onClick={() => setPasswordView(!passwordView)}
          >
            {passwordView
              ? <BsEyeSlash
                className="student-registration__form-icon"
              />
              : <BsEye
                className="student-registration__form-icon"
              />
            }
          </div>
        </div>
        <div className="student-registration__form-input">
          <Label
            htmlFor="phone"
            textName="Telefon"
          />
          <Input
            name="phone"
            value={student.phone}
            change={changeStudent}
          />
        </div>
        <div className="student-registration__form-input">
          <Label
            htmlFor="firstName"
            textName="Imię"
          />
          <Input
            name="firstName"
            value={student.firstName}
            change={changeStudent}
          />
        </div>
        <div className="student-registration__form-input">
          <Label
            htmlFor="lastName"
            textName="Nazwisko"
          />
          <Input
            name="lastName"
            value={student.lastName}
            change={changeStudent}
            placeholder="Nazwisko"
          />
        </div>
        <div className="student-registration__form-input">
          <Label
            htmlFor="githubUsername"
            textName="Login GitHuba"
          />
          <Input
            name="githubUsername"
            value={student.githubUsername}
            change={changeStudent}
          />
        </div>
        <div className="student-registration__form-input">
          <Label
            htmlFor="portfolioUrls"
            textName="Adresy portfolio"
          />
          <Input
            name="portfolioUrls"
            value={student.portfolioUrls}
            change={changeStudent}
          />
        </div>
        <div className="student-registration__form-input">
          <Label
            htmlFor="projectUrls"
            textName="Adresy projektów na githubie"
          />
          <Input
            name="projectUrls"
            value={student.projectUrls}
            change={changeStudent}
          />
        </div>
        <div className="student-registration__form-input">
          <Label
            htmlFor="bio"
            textName="Krutkie bio"
          />
          <Input
            name="bio"
            value={student.bio}
            change={changeStudent}
          />
        </div>
        <div className="student-registration__form-input">
          <Label
            htmlFor="expectedTypeWork"
            textName="Wybór preferowanego miejsca pracy"
          />
          <Select
            name="expectedTypeWork"
            value={student.expectedTypeWork}
            change={changeStudent}
            options={[
              'Bez znaczenia',
              'Na miejscu',
              'Gotowość do przeprowadzki',
              'Wyłącznie zdalnie',
              'Hybrydowo',
            ]}
          />
        </div>
        <div className="student-registration__form-input">
          <Label
            htmlFor="targetWorkCity"
            textName="Docelowe miasto, gdzie chce pracować kandydat"
          />
          <Input
            name="targetWorkCity"
            value={student.targetWorkCity}
            change={changeStudent}
          />
        </div>
        <div className="student-registration__form-input">
          <Label
            htmlFor="expectedContractType"
            textName="Oczekiwany typ kontraktu"
          />
          <Select
            name="expectedContractType"
            value={student.expectedContractType}
            change={changeStudent}
            options={[
              'Brak preferencji',
              'Tylko UoP',
              'Możliwe B2B',
              'Możliwe UZ/UoD',
            ]}
          />
        </div>
        <div className="student-registration__form-input">
          <Label
            htmlFor="expectedSalary"
            textName="Oczekiwane wynagrodzenie miesięczne netto"
          />
          <Input
            name="expectedSalary"
            value={student.expectedSalary}
            change={changeStudent}
            type="number"
          />
        </div>
        <div className="student-registration__form-input">
          <Label
            htmlFor="canTakeApprenticeship"
            textName="Zgoda na bespłatne praktyki"
          />
          <Select
            name="canTakeApprenticeship"
            value={student.canTakeApprenticeship}
            change={changeStudent}
            options={[
              'NIE',
              'TAK',
            ]}
          />
        </div>
        <div className="student-registration__form-input">
          <Label
            htmlFor="monthsOfCommercialExp"
            textName="Ilość miesięcy doświadczenia komercyjnego w programowaniu"
          />
          <Input
            name="monthsOfCommercialExp"
            value={student.monthsOfCommercialExp}
            change={changeStudent}
          />
        </div>
        <div className="student-registration__form-input">
          <Label
            htmlFor="education"
            textName="Przebieg edukacji"
          />
          <Textarea
            name="education"
            value={student.education}
            change={changeStudent}
            rows={4}
          />
        </div>
        <div className="student-registration__form-input">
          <Label
            htmlFor="workExperience"
            textName="Przebieg doświadczenia zawodowego"
          />
          <Textarea
            name="workExperience"
            value={student.workExperience}
            change={changeStudent}
            rows={4}
          />
        </div>
        <div className="student-registration__form-input">
          <Label
            htmlFor="courses"
            textName="Kursy i certyfikaty związane z programowaniem"
          />
          <Textarea
            name="courses"
            value={student.courses}
            change={changeStudent}
            rows={4}
          />
        </div>
        <div className="student-registration__form-button">
          <Button
            textName="Potwierdz"
          />
        </div>
      </form>

    </div>
  )
};