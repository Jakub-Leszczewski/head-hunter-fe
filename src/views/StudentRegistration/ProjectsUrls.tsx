import React from 'react';

import { UpdateStudentDtoInterface } from 'types';
import { Label } from '../../components/common/Label/Label';
import { Button } from '../../components/common/Button/Button';
import { PortfolioInput } from './PortfolioInput';

interface Props {
  student: Omit<UpdateStudentDtoInterface, 'email' | 'password'>;
  addUrls: (name: 'portfolioUrls' | 'projectUrls') => void;
  editUrls: (name: 'portfolioUrls' | 'projectUrls', index: number, value: string) => void;
  deleteUrls: (name: 'portfolioUrls' | 'projectUrls', index: number) => void;
}

export const ProjectsUrls = ({ student, addUrls, editUrls, deleteUrls }: Props) => {

  const { portfolioUrls, projectUrls } = student;

  return (
    <>
      <div className="student-registration__form-input">
        <Label
          htmlFor="portfolioUrls"
          textName="Adresy portfolio"
        />
        {portfolioUrls.map((item, index) =>
          <PortfolioInput
            key={index}
            index={index}
            name='portfolioUrls'
            value={portfolioUrls[index]}
            deleteUrls={deleteUrls}
            editUrls={editUrls}
          />
        )}
        <Button
          type="button"
          textName="dodaj kolejny"
          click={()=>addUrls('portfolioUrls')}
        />
      </div>
      <div className="student-registration__form-input">
        <Label
          htmlFor="projectUrls"
          textName="Adresy projektów na githubie"
        />
        {projectUrls.map((item, index) =>
          <PortfolioInput
            key={index}
            index={index}
            name='projectUrls'
            value={projectUrls[index]}
            deleteUrls={deleteUrls}
            editUrls={editUrls}
          />
        )}
        <Button
          type="button"
          textName="dodaj kolejny"
          click={()=>addUrls('projectUrls')}
        />
      </div>
    </>
  );
};