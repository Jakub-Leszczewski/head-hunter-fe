import React from 'react';
import { FaEnvelope, FaGithub, FaPhoneAlt } from 'react-icons/fa';
import { useUser } from '../../hooks/useUser';
import { GetStudentResponse, OnlyUserResponse, UserRole } from 'types';
import { Button } from '../../components/common/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchTool } from '../../utils/fetchHelpers';
import { useRefreshUser } from '../../hooks/useRefreshUser';
import { useResponseContext } from '../../contexts/PopupResponseContext'
import { setError } from '../../utils/setError'

interface Props {
  data: GetStudentResponse;
}

export const StudentBio = ({ data }: Props) => {
  const { setErrorHandler, setLoadingHandler, setMessageHandler } = useResponseContext();

  const { student, email, firstName, lastName } = data;
  const { githubUsername, phoneNumber, bio } = student;

  const user = useUser() as OnlyUserResponse;
  const navigate = useNavigate();
  const { studentId } = useParams();
  const refreshUser = useRefreshUser();

  const handleNonInterested = async () => {
    setLoadingHandler(true);
    const response = await fetchTool(`user/${studentId}/student/interview`, 'DELETE', { hrId: user.id });
    if (!response.status) {
      setErrorHandler(setError(response.message));
      setLoadingHandler(false);
      return;
    }

    setMessageHandler('Kursant został wyrzucony z listy "Do rozmów".');
    setLoadingHandler(false);
    navigate(-1);
  };

  const handleNavigate = () => {
    navigate('edit');
  };

  const handleEmployment = async () => {
    setLoadingHandler(true);
    const response = await fetchTool(`user/${studentId}/student/employed`, 'PATCH');

    if (!response.status) {
      setErrorHandler(setError(response.message));
      setLoadingHandler(false);
      return;
    }

    setLoadingHandler(false);

    if (user.role === UserRole.Student) {
      setMessageHandler('Zostałeś zatrudniony');
      setLoadingHandler(true);
      const logout = await fetchTool(`auth/logout`, 'DELETE');

      if (!logout.status) {
        setErrorHandler(setError(logout.message));
        setLoadingHandler(false);
        return;
      }

      setLoadingHandler(false);
      refreshUser();
      navigate('/login');
      return;
    }
    setMessageHandler('Kursant został zatrudniony.');
    navigate(-1);
  };

  return (
    <div className="main__left">
      <div className="student">
        <img className="student__logo" src={`https://github.com/${githubUsername}.png`} alt="Avatar studenta" />
        <p className="student__name">{firstName} {lastName}</p>
        <div className="student__github">
          <FaGithub className="student__github-icon" />
          <a
            className="student__github-link"
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noreferrer"
          >
            {githubUsername}
          </a>
        </div>
      </div>
      <div className="student-contact">
        {phoneNumber && <div className="student-contact__box">
          <FaPhoneAlt className="student-contact__box-icon" />
          <p className="student-contact__box-text">{phoneNumber}</p>
        </div>}
        <div className="student-contact__box">
          <FaEnvelope className="student-contact__box-icon" />
          <p className="student-contact__box-text">{email}</p>
        </div>
      </div>
      <div className="student-info">
        <h2 className="student-info-title">O mnie</h2>
        <p className="student-info-text">{bio}</p>
      </div>
      <div className="btn-box">
        {user.role === UserRole.Student && <Button className="btn" textName="Edytuj Profil" click={handleNavigate} />}
        {user.role === UserRole.Hr && <Button
          textName="Brak zainteresowania"
          className="btn"
          click={handleNonInterested}
          preventDefault
        />}
        <Button
          textName={user.role === UserRole.Student ? "Zatrudniony" : "Zatrudnij"}
          className="btn"
          click={handleEmployment}
          preventDefault
        />
      </div>
    </div>
  );
};
