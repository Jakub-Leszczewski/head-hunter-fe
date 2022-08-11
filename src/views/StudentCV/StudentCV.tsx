import { FaChevronLeft } from 'react-icons/fa';
import { useData } from '../../hooks/useData';
import { GetStudentResponse, OnlyUserResponse } from 'types';
import { StudentBio } from './StudentBio';
import { StudentMainCv } from './StudentMainCv';
import { useNavigate, useParams } from 'react-router-dom';
import { useRef } from 'react';
import { useUser } from '../../hooks/useUser';

export const StudentCV = () => {

  const user = useUser() as OnlyUserResponse;
  const navigate = useNavigate();

  const { studentId } = useParams();
  const componentRef = useRef(null);

  const { data } = useData<GetStudentResponse>(`user/${studentId}/student`, componentRef);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div ref={componentRef} className="student-cv">
      <div className="main">
        {user.role && <div className="main__go-back" onClick={goBack}>
          <FaChevronLeft />
          <p>Wróć</p>
        </div>}
        {data ? <>
          <StudentBio data={data} />
          <StudentMainCv data={data} />
        </> : 'Trwa ładowanie...'}
      </div>
    </div>
  );
};
