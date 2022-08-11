import { Dispatch, SetStateAction } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Button } from '../common/Button/Button';

interface Props {
  name: string;
  isStudentInfoOpen: boolean;
  setIsStudentInfoOpen: Dispatch<SetStateAction<boolean>>;
}

export const AvailableStudentsHeader = ({
  name,
  isStudentInfoOpen,
  setIsStudentInfoOpen,
}: Props) => {
  return (
    <div className="hr-list__item-header">
      <div className="hr-list__item-header-left">
        <p className="hr-list__item-header-username">{name}</p>
      </div>
      <div className="hr-list__item-header-right">
        <Button
          type='submit'
          className='list-item-container__button'
          textName={'Zarezerwuj rozmowę'}
        />
        {isStudentInfoOpen
          ? <BsChevronUp
            onClick={() => setIsStudentInfoOpen(false)}
            className="hr-list__item-header-right-icon"
          />
          : <BsChevronDown
            onClick={() => setIsStudentInfoOpen(true)}
            className="hr-list__item-header-right-icon"
          />
        }
      </div>
    </div>
  );
};
