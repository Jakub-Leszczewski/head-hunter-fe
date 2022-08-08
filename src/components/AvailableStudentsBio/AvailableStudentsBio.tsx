import React from 'react';
import {BsChevronDown, BsChevronUp} from 'react-icons/bs';
import {Button} from '../common/Button/Button';

interface Props {
  itemName: [];
  isStudentInfoOpen: boolean;
  handleIsInfoOpen: () => void;
}

export const AvailableStudentsBio = ({
  itemName,
  isStudentInfoOpen,
  handleIsInfoOpen,
}: Props) => {
  return (
    <div className='list-item-container'>
      <p>{itemName}</p>
      <div className='list-item-container__right-section'>
        <Button
          type='submit'
          className='list-item-container__button'
          textName={'Zarezerwuj rozmowę'}
        />
        {isStudentInfoOpen ? (
          <BsChevronUp onClick={handleIsInfoOpen} className='arrow-icon' />
        ) : (
          <BsChevronDown onClick={handleIsInfoOpen} className='arrow-icon' />
        )}
      </div>
    </div>
  );
};
