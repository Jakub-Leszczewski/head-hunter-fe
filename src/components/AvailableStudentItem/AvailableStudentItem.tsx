import { useState } from 'react';
import { AvailableStudentsHeader } from './AvailableStudentsHeader';
import { SmallStudentResponse } from 'types';
import { AvailableInfoList } from './AvailableInfoList';

interface Props {
  item: SmallStudentResponse;
  observer: ((node: HTMLLIElement) => void) | null;
}

export const AvailableStudentItem = ({ item, observer }: Props) => {

  const { firstName, lastName, student } = item;
  const { canTakeApprenticeship, courseCompletion, courseEngagement, expectedContractType, expectedSalary, expectedTypeWork, monthsOfCommercialExp, projectDegree, targetWorkCity, teamProjectDegree } = student;

  const [isStudentInfoOpen, setIsStudentInfoOpen] = useState(false);

  const handleIsInfoOpen = () => {
    setIsStudentInfoOpen((value) => !value);
  };

  return (
    <li ref={observer} className='list-item'>
      <AvailableStudentsHeader
        name={`${firstName} ${(lastName as string)[0]}.`}
        isStudentInfoOpen={isStudentInfoOpen}
        handleIsInfoOpen={handleIsInfoOpen}
      />
      {isStudentInfoOpen && (
        <AvailableInfoList
          canTakeApprenticeship={canTakeApprenticeship}
          courseCompletion={courseCompletion}
          courseEngagement={courseEngagement}
          expectedContractType={expectedContractType}
          expectedSalary={expectedSalary}
          expectedTypeWork={expectedTypeWork}
          monthsOfCommercialExp={monthsOfCommercialExp}
          projectDegree={projectDegree}
          targetWorkCity={targetWorkCity ?? 'Brak'}
          teamProjectDegree={teamProjectDegree}
        />
      )}
      <div className='list-item-separator' />
    </li>
  );
};
