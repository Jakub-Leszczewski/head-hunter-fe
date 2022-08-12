import { useData } from '../../hooks/useData';
import { GetStudentResponse, OnlyUserResponse, UserRole } from 'types';
import { StudentBio } from './StudentBio';
import { StudentMainCv } from './StudentMainCv';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import { useUser } from '../../hooks/useUser';
import { GoBack } from '../../components/GoBack/GoBack';
import { useResponseContext } from '../../contexts/PopupResponseContext'

export const StudentCV = () => {
  const user = useUser() as OnlyUserResponse;

  const { studentId } = useParams();
  const componentRef = useRef(null);

  const { data } = useData<GetStudentResponse>(`user/${studentId}/student`, componentRef);

  return (
    <div ref={componentRef} className="student-cv">
      <div className="main">
        {[UserRole.Admin, UserRole.Hr].includes(user.role) && <GoBack />}
        {data ? <>
          <StudentBio data={data} />
          <StudentMainCv data={data} />
        </> : 'Trwa ładowanie...'}
      </div>
    </div>
  );
};
