import React, { useState } from 'react';

import { IoChevronDownSharp, IoChevronUpSharp } from 'react-icons/io5';

import { StudentsToTalk } from './HrStudentToTalkList';
import { TitleItem } from './TitleItem';
import { HrStudentToTalkMore } from './HrStudentToTalkMore';
import { Button } from '../../components/common/Button/Button'

interface Props {
  students: StudentsToTalk
}

export const HrStudentToTalkItem = ({ students }: Props) => {

  const { reservation, githubName, firstName, lastName, } = students;
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <div className="hr-student-to-talk">
      <div className="hr-student-to-talk-box">
        <div className="student">
          <div className="student__reservation">
            <TitleItem
              title="Rezerwacja do"
            >
              <p className="title-item__date">{reservation} r.</p>
            </TitleItem>
          </div>
          <div className="student__info">
            <img className="student__info-img" src={`https://github.com/${githubName}.png`} alt="Avatar użytkownika"/>
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
            ? <IoChevronUpSharp className="buttons__icon" onClick={() => setMoreInfo(!moreInfo)}/>
            : <IoChevronDownSharp className="buttons__icon" onClick={() => setMoreInfo(!moreInfo)}/>
          }
        </div>
      </div>
      {moreInfo
        ? <HrStudentToTalkMore
        students={students}
        />
        : null
      }
    </div>
  );
};
