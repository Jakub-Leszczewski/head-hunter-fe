import React from 'react';

import { Student } from './StudentRegistration';
import { Label } from '../../components/common/Label/Label';
import { Textarea } from '../../components/common/Textarea/Textarea';

interface Props {
  student: Student;
  changeStudent: (name: string, value: string | number) => void;
}

export const LongText = ({student,changeStudent}:Props)=>{

  const {bio, education, workExperience, courses} = student;

  return(
    <>
      <div className="student-registration__form-textarea">
        <Label
          htmlFor="bio"
          textName="Krutkie bio"
        />
        <Textarea
          className="textarea"
          name="bio"
          value={bio}
          change={changeStudent}
          rows={3}
        />
      </div>
      <div className="student-registration__form-textarea">
        <Label
          htmlFor="education"
          textName="Przebieg edukacji"
        />
        <Textarea
          className="textarea"
          name="education"
          value={education}
          change={changeStudent}
          rows={3}
        />
      </div>
      <div className="student-registration__form-textarea">
        <Label
          htmlFor="workExperience"
          textName="Przebieg doświadczenia zawodowego"
        />
        <Textarea
          className="textarea"
          name="workExperience"
          value={workExperience}
          change={changeStudent}
          rows={3}
        />
      </div>
      <div className="student-registration__form-textarea">
        <Label
          htmlFor="courses"
          textName="Kursy i certyfikaty związane z programowaniem"
        />
        <Textarea
          className="textarea"
          name="courses"
          value={courses}
          change={changeStudent}
          rows={3}
        />
      </div>
    </>
  );
};