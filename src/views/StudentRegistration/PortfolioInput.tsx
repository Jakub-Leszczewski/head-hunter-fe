import React from 'react';

import { Button } from '../../components/common/Button/Button';

interface Props {
  index: number;
  name: 'portfolioUrls' | 'projectUrls';
  value: string;
  editUrls: (name: 'portfolioUrls' | 'projectUrls', index: number, value: string) => void;
  deleteUrls: (name: 'portfolioUrls' | 'projectUrls', index: number) => void;
}

export const PortfolioInput = ({ index, name, value, editUrls, deleteUrls }: Props) => {

  return (
    <div className="student-registration__form-input-box">
      <input className="student-registration__form-input-box-item"
             name={name}
             value={value}
             onChange={e => editUrls(name, index, e.target.value)}
      />
      <Button
        className="student-registration__form-input-box-btn"
        type="button"
        textName="usuń"
        click={() => deleteUrls(name, index)}
      />
    </div>
  );
};