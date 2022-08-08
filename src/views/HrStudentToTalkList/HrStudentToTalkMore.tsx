import React from 'react';

import { StudentsToTalk } from './HrStudentToTalkList';
import { TitleItem } from './TitleItem';

interface Props {
  students: StudentsToTalk
}

export const HrStudentToTalkMore = ({students}:Props) => {

  const {
    courseCompletion,
    courseEngagement,
    projectDegree,
    teamProjectDegree,
    expectedTypeWork,
    targetWorkCity,
    expectedContractType,
    expectedSalary,
    canTakeApprenticeship,
    monthsOfCommercialExp,
  } = students;

  let month = 'miesiąc';
  if (monthsOfCommercialExp > 0 && monthsOfCommercialExp < 5) {
    month = 'miesiące'
  }
  if (monthsOfCommercialExp > 4 || monthsOfCommercialExp === 0) {
    month = 'miesięcy'
  }

  return (
    <div className="more-info">
      <div className="more-info__box">
        <TitleItem
          title="Ocena przejścia kursu"
          className="more-info__box-title"
        >
          <p className="more-info__box-text">{courseCompletion} <span className="more-info__box-text-span">/ 5</span></p>
        </TitleItem>
      </div>
      <div className="more-info__box">
        <TitleItem
          title="Ocena aktywności i zaangażowania na kursie"
          className="more-info__box-title"
        >
          <p className="more-info__box-text">{courseEngagement} <span className="more-info__box-text-span">/ 5</span></p>
        </TitleItem>
      </div>
      <div className="more-info__box">
        <TitleItem
          title="Ocena kodu w projekcie własnym"
          className="more-info__box-title"
        >
          <p className="more-info__box-text">{projectDegree} <span className="more-info__box-text-span">/ 5</span></p>
        </TitleItem>
      </div>
      <div className="more-info__box">
        <TitleItem
          title="Ocena pracy w zespole w Scrum"
          className="more-info__box-title"
        >
          <p className="more-info__box-text">{teamProjectDegree} <span className="more-info__box-text-span">/ 5</span></p>
        </TitleItem>
      </div>
      <div className="more-info__box">
        <TitleItem
          title="Preferowane miejsce pracy"
          className="more-info__box-title"
        >
          <p className="more-info__box-text">{expectedTypeWork}</p>
        </TitleItem>
      </div>
      <div className="more-info__box">
        <TitleItem
          title="Docelowe miasto, gdzie chce pracować kandydat"
          className="more-info__box-title"
        >
          <p className="more-info__box-text">{targetWorkCity===''?'Brak':targetWorkCity}</p>
        </TitleItem>
      </div>
      <div className="more-info__box">
        <TitleItem
          title="Oczekiwany typ kontraktu"
          className="more-info__box-title"
        >
          <p className="more-info__box-text">{expectedContractType}</p>
        </TitleItem>
      </div>
      <div className="more-info__box">
        <TitleItem
          title="Oczekiwane wynagrodzenie miesięczne netto"
          className="more-info__box-title"
        >
          <p className="more-info__box-text">{expectedSalary} zł </p>
        </TitleItem>
      </div>
      <div className="more-info__box">
        <TitleItem
          title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
          className="more-info__box-title"
        >
          <p className="more-info__box-text">{canTakeApprenticeship? 'TAK':'NIE'}</p>
        </TitleItem>
      </div>
      <div className="more-info__box">
        <TitleItem
          title="Komercyjne doświadczenie w programowaniu"
          className="more-info__box-title"
        >
          <p className="more-info__box-text">{monthsOfCommercialExp === 0 ? 'Brak':`${monthsOfCommercialExp} ${month}`} </p>
        </TitleItem>
      </div>
    </div>
  );
};