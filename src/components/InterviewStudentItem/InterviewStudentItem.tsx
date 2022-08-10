import { useState } from 'react';

import { IoChevronDownSharp, IoChevronUpSharp } from 'react-icons/io5';

import { TitleItem } from '../TitleItem/TitleItem';
import { Button } from '../common/Button/Button';
import { SmallStudentResponse } from 'types';
import { AvailableInfoList } from '../AvailableStudentItem/AvailableInfoList';

interface Props {
  item: SmallStudentResponse;
  observer: ((node: HTMLLIElement) => void) | null;
}

export const InterviewStudentItem = ({ item, observer }: Props) => {

  const { firstName, lastName, student } = item;
  const { canTakeApprenticeship, courseCompletion, courseEngagement, expectedContractType, expectedSalary, expectedTypeWork, monthsOfCommercialExp, projectDegree, targetWorkCity, teamProjectDegree, githubUsername } = student;
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <li ref={observer} className="hr-student-to-talk">
      <div className="hr-student-to-talk-box">
        <div className="student">
          <div className="student__reservation">
            <TitleItem
              title="Rezerwacja do"
            >
              {/* <p className="title-item__date">{reservation} r.</p> */}
            </TitleItem>
          </div>
          <div className="student__info">
            <img className="student__info-img" src={`https://github.com/${githubUsername}.png`} alt="Avatar użytkownika" />
            <p className="student__info-name">{firstName} {lastName}</p>
          </div>
        </div>
        <div className="buttons">
          <Button
            textName="Pokaż CV"
          />
          <Button
            textName="Brak zainteresowania"
          />
          <Button
            textName="Zatrudniony"
          />
          {moreInfo
            ? <IoChevronUpSharp className="buttons__icon" onClick={() => setMoreInfo(!moreInfo)} />
            : <IoChevronDownSharp className="buttons__icon" onClick={() => setMoreInfo(!moreInfo)} />
          }
        </div>
      </div>
      {moreInfo && <AvailableInfoList
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
      />}
    </li>
  );
};
