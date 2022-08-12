import React, { useEffect, useState } from 'react';

import { UpdateStudentDtoInterface } from 'types';

import { Label } from '../../components/common/Label/Label';
import { Select } from '../../components/common/Select/Select';
import { Input } from '../../components/common/Input/Input';
import { canTakeApprenticeshipData, contractType, workType } from '../../utils/enumsHelper';

interface Props {
  student: Omit<UpdateStudentDtoInterface, 'email' | 'password'>;
  changeStudent: (name: string, value: string | number | boolean) => void;
}

export const DataForWork = ({ student, changeStudent }: Props) => {

  const {
    expectedTypeWork,
    targetWorkCity,
    expectedContractType,
    expectedSalary,
    monthsOfCommercialExp,
  } = student;
  const [canTakeApprenticeshipText, setCanTakeApprenticeshipText] = useState('');

  useEffect(() => {
    if (canTakeApprenticeshipText === '') {
      changeStudent('canTakeApprenticeship', false);
    } else changeStudent('canTakeApprenticeship', true);
  }, [canTakeApprenticeshipText]);

  const changeCanTakeApprenticeshipText = (name: string, value: string) => {
    setCanTakeApprenticeshipText(value);
  };

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
          options={workType}
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
          options={contractType}
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
          min="0"
          max="9999999"
          step={100}
        />
      </div>
      <div className="student-registration__form-input">
        <Label
          htmlFor="canTakeApprenticeship"
          textName="Zgoda na bespłatne praktyki"
        />
        <Select
          name="canTakeApprenticeship"
          value={canTakeApprenticeshipText}
          change={changeCanTakeApprenticeshipText}
          options={canTakeApprenticeshipData}
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
          type="number"
          min="0"
        />
      </div>
    </>
  );
};