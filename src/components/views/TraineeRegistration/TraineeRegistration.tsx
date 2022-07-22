import React, { useState } from 'react';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

import logo from '../../../assets/images/logo.png';
import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { Label } from '../../common/Label/Label';
import { Select } from '../../common/Select/Select';
import { Textarea } from '../../common/Textarea/Textarea';

interface Trainee {
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
  canTakeApprenticeship: 'TAK' | 'NIE' | '';
  monthsOfCommercialExp: string;
  education: string;
  workExperience: string;
  courses: string;
}

export const TraineeRegistration = () => {

  const [passwordView, setPasswordView] = useState(false);
  const [trainee, setTrainee] = useState<Trainee>({
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

  const changeTrainee = (name: string, value: string | number) => {
    (setTrainee(trainee => ({
        ...trainee,
        [name]: value,
      }))
    );
  };

  return (
    <div className="trainee-registration">
      <img className="trainee-registration__image" src={logo} alt="MegaK logo"/>
      <h2 className="trainee-registration__title">
        Rejestracja Kursanta
      </h2>
      <form className="trainee-registration__form">
        <div className="trainee-registration__form-input">
          <Label
            htmlFor="password"
            textName="Hasło"
          />
          <Input
            name="password"
            value={trainee.password}
            change={changeTrainee}
            type={passwordView ? 'text' : 'password'}
          />
          <div
            className="trainee-registration__form-icon-box"
            onClick={() => setPasswordView(!passwordView)}
          >
            {passwordView
              ? <BsEyeSlash
                className="trainee-registration__form-icon"
              />
              : <BsEye
                className="trainee-registration__form-icon"
              />
            }
          </div>
        </div>
        <div className="trainee-registration__form-input">
          <Label
            htmlFor="phone"
            textName="Telefon"
          />
          <Input
            name="phone"
            value={trainee.phone}
            change={changeTrainee}
          />
        </div>
        <div className="trainee-registration__form-input">
          <Label
            htmlFor="firstName"
            textName="Imię"
          />
          <Input
            name="firstName"
            value={trainee.firstName}
            change={changeTrainee}
          />
        </div>
        <div className="trainee-registration__form-input">
          <Label
            htmlFor="lastName"
            textName="Nazwisko"
          />
          <Input
            name="lastName"
            value={trainee.lastName}
            change={changeTrainee}
            placeholder="Nazwisko"
          />
        </div>
        <div className="trainee-registration__form-input">
          <Label
            htmlFor="githubUsername"
            textName="Login GitHuba"
          />
          <Input
            name="githubUsername"
            value={trainee.githubUsername}
            change={changeTrainee}
          />
        </div>
        <div className="trainee-registration__form-input">
          <Label
            htmlFor="portfolioUrls"
            textName="Adresy portfolio"
          />
          <Input
            name="portfolioUrls"
            value={trainee.portfolioUrls}
            change={changeTrainee}
          />
        </div>
        <div className="trainee-registration__form-input">
          <Label
            htmlFor="projectUrls"
            textName="Adresy projektów na githubie"
          />
          <Input
            name="projectUrls"
            value={trainee.projectUrls}
            change={changeTrainee}
          />
        </div>
        <div className="trainee-registration__form-input">
          <Label
            htmlFor="bio"
            textName="Krutkie bio"
          />
          <Input
            name="bio"
            value={trainee.bio}
            change={changeTrainee}
          />
        </div>
        <div className="trainee-registration__form-input">
          <Label
            htmlFor="expectedTypeWork"
            textName="Wybór preferowanego miejsca pracy"
          />
          <Select
            name="expectedTypeWork"
            value={trainee.expectedTypeWork}
            change={changeTrainee}
            options={[
              'Bez znaczenia',
              'Na miejscu',
              'Gotowość do przeprowadzki',
              'Wyłącznie zdalnie',
              'Hybrydowo',
            ]}
          />
        </div>
        <div className="trainee-registration__form-input">
          <Label
            htmlFor="targetWorkCity"
            textName="Docelowe miasto, gdzie chce pracować kandydat"
          />
          <Input
            name="targetWorkCity"
            value={trainee.targetWorkCity}
            change={changeTrainee}
          />
        </div>
        <div className="trainee-registration__form-input">
          <Label
            htmlFor="expectedContractType"
            textName="Oczekiwany typ kontraktu"
          />
          <Select
            name="expectedContractType"
            value={trainee.expectedContractType}
            change={changeTrainee}
            options={[
              'Brak preferencji',
              'Tylko UoP',
              'Możliwe B2B',
              'Możliwe UZ/UoD',
            ]}
          />
        </div>
        <div className="trainee-registration__form-input">
          <Label
            htmlFor="expectedSalary"
            textName="Oczekiwane wynagrodzenie miesięczne netto"
          />
          <Input
            name="expectedSalary"
            value={trainee.expectedSalary}
            change={changeTrainee}
            type="number"
          />
        </div>
        <div className="trainee-registration__form-input">
          <Label
            htmlFor="canTakeApprenticeship"
            textName="Zgoda na bespłatne praktyki"
          />
          <Select
            name="canTakeApprenticeship"
            value={trainee.canTakeApprenticeship}
            change={changeTrainee}
            options={[
              'NIE',
              'TAK',
            ]}
          />
        </div>
        <div className="trainee-registration__form-input">
          <Label
            htmlFor="monthsOfCommercialExp"
            textName="Ilość miesięcy doświadczenia komercyjnego w programowaniu"
          />
          <Input
            name="monthsOfCommercialExp"
            value={trainee.monthsOfCommercialExp}
            change={changeTrainee}
          />
        </div>
        <div className="trainee-registration__form-input">
          <Label
            htmlFor="education"
            textName="Przebieg edukacji"
          />
          <Textarea
            name="education"
            value={trainee.education}
            change={changeTrainee}
            rows={4}
          />
        </div>
        <div className="trainee-registration__form-input">
          <Label
            htmlFor="workExperience"
            textName="Przebieg doświadczenia zawodowego"
          />
          <Textarea
            name="workExperience"
            value={trainee.workExperience}
            change={changeTrainee}
            rows={4}
          />
        </div>
        <div className="trainee-registration__form-input">
          <Label
            htmlFor="courses"
            textName="Kursy i certyfikaty związane z programowaniem"
          />
          <Textarea
            name="courses"
            value={trainee.courses}
            change={changeTrainee}
            rows={4}
          />
        </div>
        <div className="trainee-registration__form-button">
          <Button
            textName="Potwierdz"
          />
        </div>
      </form>

    </div>
  )
};