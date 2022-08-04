import React from 'react';
import { EmploymentExpectationsItem } from './EmploymentExpectationsItem';

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
        <EmploymentExpectationsItem
          title="Preferowane miejsce pracy"
          text={expectedTypeWork}
        />
        {targetWorkCity && <EmploymentExpectationsItem
          title="Docelowe miasto, gdzie chce pracować kandydat"
          text={targetWorkCity}
        />}
        <EmploymentExpectationsItem
          title="Oczekiwany typ kontraktu"
          text={expectedContractType}
        />
        <EmploymentExpectationsItem
          title="Oczekiwane wynagrodzenie miesięczne netto"
          text={expectedSalary}
          suffix="zł"
        />
        <EmploymentExpectationsItem
          title="Zgoda na odbycie bezpłatnych praktyk / stażu na początek"
          text={canTakeApprenticeship === 0 ? 'NIE' : 'TAK'}
        />
        <EmploymentExpectationsItem
          title="Komercyjne doświadczenie w programowaniu"
          text={monthsOfCommercialExp}
          suffix={month}
        />
      </div>
    </>
  );
};