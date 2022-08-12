import { Dispatch, SetStateAction } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { OnlyUserResponse } from 'types';
import { useUser } from '../../hooks/useUser';
import { fetchTool } from '../../utils/fetchHelpers';
import { Button } from '../common/Button/Button';

interface Props {
  name: string;
  isStudentInfoOpen: boolean;
  id: string;
  setIsStudentInfoOpen: Dispatch<SetStateAction<boolean>>;
}

export const AvailableStudentsHeader = ({
  name,
  isStudentInfoOpen,
  id,
  setIsStudentInfoOpen,
}: Props) => {

  const user = useUser() as OnlyUserResponse;

  const handleBook = async () => {
    const response = await fetchTool(`user/${id}/student/interview`, 'PATCH', { hrId: user.id });
    if (!response.status) return console.log('Coś poszło nie tak.');
    console.log('Dodano kursanta do listy do rozmowy.');
  };

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
          click={handleBook}
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
