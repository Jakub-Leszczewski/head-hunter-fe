import { ContractType, WorkType } from 'types';
import { monthsHelper } from '../../utils/monthsHelper';
import { TitleItem } from '../TitleItem/TitleItem';

interface Props {
  canTakeApprenticeship: boolean;
  courseCompletion: number;
  courseEngagement: number;
  expectedContractType: ContractType;
  expectedSalary: number;
  expectedTypeWork: WorkType;
  monthsOfCommercialExp: number;
  projectDegree: number;
  targetWorkCity: string;
  teamProjectDegree: number;
}

export const AvailableInfoList = ({
  canTakeApprenticeship,
  courseCompletion,
  courseEngagement,
  expectedContractType,
  expectedSalary,
  expectedTypeWork,
  monthsOfCommercialExp,
  projectDegree,
  targetWorkCity,
  teamProjectDegree
}: Props) => {
  return (
    <div className="hr-list__item-info">
      <TitleItem
        title='Ocena przejścia kursu'
        className="hr-list__item-info-box"
      >
        <p className="title-Item__text">{courseCompletion}<span className="title-Item__span">/5</span></p>
      </TitleItem>
      <TitleItem
        title='Ocena aktywności i zaangażowania na kursie'
        className="hr-list__item-info-box"
      >
        <p className="title-Item__text">{courseEngagement}<span className="title-Item__span">/5</span></p>
      </TitleItem>
      <TitleItem
        title='Ocena kodu w projekcie własnym'
        className="hr-list__item-info-box"
      >
        <p className="title-Item__text">{projectDegree}<span className="title-Item__span">/5</span></p>
      </TitleItem>
      <TitleItem
        title='Ocena pracy w zespole Scrum'
        className="hr-list__item-info-box"
      >
        <p className="title-Item__text">{teamProjectDegree}<span className="title-Item__span">/5</span></p>
      </TitleItem>
      <TitleItem
        title='Preferowane miejsce pracy'
        className="hr-list__item-info-box"
      >
        <p className="title-Item__text">{expectedTypeWork}</p>
      </TitleItem>
      <TitleItem
        title='Docelowe miasto, gdzie chce pracować kandydat'
        className="hr-list__item-info-box"
      >
        <p className="title-Item__text">{targetWorkCity}</p>
      </TitleItem>
      <TitleItem
        title='Oczekiwany typ kontraktu'
        className="hr-list__item-info-box"
      >
        <p className="title-Item__text">{expectedContractType}</p>
      </TitleItem>
      <TitleItem
        title='Oczekiwane wynagrodzenie miesięczne brutto'
        className="hr-list__item-info-box"
      >
        <p className="title-Item__text">{expectedSalary}</p>
      </TitleItem>
      <TitleItem
        title='Zgoda na odbycie bezpłatnych praktyk, stażu na początek'
        className="hr-list__item-info-box"
      >
        <p className="title-Item__text">{canTakeApprenticeship ? 'TAK' : 'NIE'}</p>
      </TitleItem>
      <TitleItem
        title='Komercyjne doświadczenie w programowaniu'
        className="hr-list__item-info-box"
      >
        <p className="title-Item__text">{monthsHelper(monthsOfCommercialExp)}</p>
      </TitleItem>
    </div>
  );
};
