import React from 'react';

import { Student } from './StudentRegistration';
import { Label } from '../../components/common/Label/Label';
import { Select } from '../../components/common/Select/Select';
import { Input } from '../../components/common/Input/Input';


interface Props {
  student: Student;
  changeStudent: (name: string, value: string | number) => void;
}

export const DataForWork = ({ student, changeStudent }: Props) => {

  const {
    expectedTypeWork,
    targetWorkCity,
    expectedContractType,
    expectedSalary,
    canTakeApprenticeship,
    monthsOfCommercialExp,
  } = student;

  return (
    <>
      <div className="student-registration__form-input">
        <Label
          htmlFor="expectedTypeWork"
          textName="Wybór preferowanego miejsca pracy"
        />
        <Select
          name="expectedTypeWork"
          value={expectedTypeWork}
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
          value={targetWorkCity}
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
          value={expectedContractType}
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
          value={expectedSalary}
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
          value={canTakeApprenticeship}
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
          value={monthsOfCommercialExp}
          change={changeStudent}
        />
      </div>
    </>
  );
};