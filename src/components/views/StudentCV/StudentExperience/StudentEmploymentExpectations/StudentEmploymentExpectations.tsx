import React from 'react';
import { EmploymentExpectationsList } from './EmploymentExpectationsList';

interface Props {
  expectedTypeWork: string;
  targetWorkCity: string;
  expectedContractType: string;
  expectedSalary: number;
  canTakeApprenticeship: number;
  monthsOfCommercialExp: number;
}

export const StudentEmploymentExpectations = ({
  expectedTypeWork,
  targetWorkCity,
  expectedContractType,
  expectedSalary,
  canTakeApprenticeship,
  monthsOfCommercialExp,
}: Props) => {

  let month = 'miesiąc';
  if (monthsOfCommercialExp > 0 && monthsOfCommercialExp < 5) {
    month = 'miesiące'
  }
  if (monthsOfCommercialExp > 4 || monthsOfCommercialExp === 0) {
    month = 'miesięcy'
  }

  return (
    <>
      <div className="title">
        <h2 className="title__title">Oczekiwania w stosunku do zatrudnienia</h2>
      </div>
      <div className="employment">
        <EmploymentExpectationsList
          title="Preferowane miejsce pracy"
          text={expectedTypeWork}
        />
        {targetWorkCity && <EmploymentExpectationsList
          title="Docelowe miasto, gdzie chce pracować kandydat"
          text={targetWorkCity}
        />}
        <EmploymentExpectationsList
          title="Oczekiwany typ kontraktu"
          text={expectedContractType}
        />
        <EmploymentExpectationsList
          title="Oczekiwane wynagrodzenie miesięczne netto"
          text={expectedSalary}
          suffix="zł"
        />
        <EmploymentExpectationsList
          title="Zgoda na odbycie bezpłatnych praktyk / stażu na początek"
          text={canTakeApprenticeship === 0 ? 'NIE' : 'TAK'}
        />
        <EmploymentExpectationsList
          title="Komercyjne doświadczenie w programowaniu"
          text={monthsOfCommercialExp}
          suffix={month}
        />
      </div>
    </>
  );
};