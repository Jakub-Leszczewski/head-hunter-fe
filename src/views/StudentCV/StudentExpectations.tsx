import React from 'react';
import { ExpectationItem } from '../../components/ExpectationItem/ExpectationItem'

interface Props {
  expectedTypeWork: string;
  targetWorkCity: string;
  expectedContractType: string;
  expectedSalary: number;
  canTakeApprenticeship: number;
  monthsOfCommercialExp: number;
}

export const StudentExpectations = ({
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
        <ExpectationItem
          title="Preferowane miejsce pracy"
          text={expectedTypeWork}
        />
        {targetWorkCity && <ExpectationItem
          title="Docelowe miasto, gdzie chce pracować kandydat"
          text={targetWorkCity}
        />}
        <ExpectationItem
          title="Oczekiwany typ kontraktu"
          text={expectedContractType}
        />
        <ExpectationItem
          title="Oczekiwane wynagrodzenie miesięczne netto"
          text={`${expectedSalary} zł`}
        />
        <ExpectationItem
          title="Zgoda na odbycie bezpłatnych praktyk / stażu na początek"
          text={canTakeApprenticeship === 0 ? 'NIE' : 'TAK'}
        />
        <ExpectationItem
          title="Komercyjne doświadczenie w programowaniu"
          text={`${monthsOfCommercialExp} ${month}`}
        />
      </div>
    </>
  );
};
