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

  return (
    <li ref={observer} className="hr-list__item">
      <AvailableStudentsHeader
        name={`${firstName} ${(lastName as string)[0]}.`}
        isStudentInfoOpen={isStudentInfoOpen}
        setIsStudentInfoOpen={setIsStudentInfoOpen}
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
    </li>
  );
};
