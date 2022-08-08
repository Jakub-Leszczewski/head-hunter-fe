import React from 'react';
import { FaEnvelope, FaGithub, FaPhoneAlt } from 'react-icons/fa';
import { Button } from '../../components/common/Button/Button';
import { Student } from './StudentCV';

interface Props {
  student:Student
}

export const StudentBio = ({ student }: Props) => {

  const { githubUsername, firstName, lastName, phoneNumber, email, bio, role } = student;

  return (
    <div className="main__left">
      <div className="student">
        <img className="student__logo" src={`https://github.com/${githubUsername}.png`} alt="Avatar studenta"/>
        <p className="student__name">{firstName} {lastName}</p>
        <div className="student__github">
          <FaGithub className="student__github-icon"/>
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
        <div className="student-contact__box">
          <FaPhoneAlt className="student-contact__box-icon"/>
          <p className="student-contact__box-text">{phoneNumber}</p>
        </div>
        <div className="student-contact__box">
          <FaEnvelope className="student-contact__box-icon"/>
          <p className="student-contact__box-text">{email}</p>
        </div>
      </div>
      <div className="student-info">
        <h2 className="student-info-title">O mnie</h2>
        <p className="student-info-text">{bio}</p>
      </div>
      <div className="btn-box">
        <Button
          textName={role === 'student'? "Edytuj Profil":"Brak zainteresowania"}
          className="btn"
        />
        <Button
          textName="Zatrudniony"
          className="btn"
        />
      </div>
    </div>
  );
};
