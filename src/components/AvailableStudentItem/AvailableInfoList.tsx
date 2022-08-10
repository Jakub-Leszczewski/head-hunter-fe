import { AvailableInfoItem } from '../AvailableInfoItem/AvailableInfoItem';
import { ContractType, WorkType } from 'types';

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
    <div className='list-item-info-container'>
      <AvailableInfoItem
        titles='Ocena przejścia kursu'
        text={`${courseCompletion}/5`}
      />
      <AvailableInfoItem
        titles='Ocena aktywności i zaangażowania na kursie'
        text={`${courseEngagement}/5`}
      />
      <AvailableInfoItem
        titles='Ocena kodu w projekcie własnym'
        text={`${projectDegree}/5`}
      />
      <AvailableInfoItem
        titles='Ocena pracy w zespole Scrum'
        text={`${teamProjectDegree}/5`}
      />
      <AvailableInfoItem
        titles='Preferowane miejsce pracy'
        text={expectedTypeWork}
      />
      <AvailableInfoItem
        titles='Docelowe miasto, gdzie chce pracować kandydat'
        text={targetWorkCity}
      />

      <AvailableInfoItem
        titles='Oczekiwany typ kontraktu'
        text={expectedContractType}
      />
      <AvailableInfoItem
        titles='Oczekiwane wynagrodzenie miesięczne brutto'
        text={`${expectedSalary}`}
      />
      <AvailableInfoItem
        titles='Zgoda na odbycie bezpłatnych praktyk, stażu na początek'
        text={canTakeApprenticeship ? 'Tak' : 'Nie'}
      />
      <AvailableInfoItem
        titles='Komercyjne doświadczenie w programowaniu'
        text={`${monthsOfCommercialExp}`}
      />
    </div>
  );
};
