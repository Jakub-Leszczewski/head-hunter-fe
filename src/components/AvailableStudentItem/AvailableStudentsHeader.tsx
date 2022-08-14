import { Dispatch, SetStateAction } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { OnlyUserResponse } from 'types';
import { useUser } from '../../hooks/useUser';
import { fetchTool } from '../../utils/fetchHelpers';
import { Button } from '../common/Button/Button';
import { setError } from '../../utils/setError'
import { useResponseContext } from '../../contexts/PopupResponseContext'

interface Props {
  name: string;
  isStudentInfoOpen: boolean;
  id: string;
  setIsStudentInfoOpen: Dispatch<SetStateAction<boolean>>;
  setRefresh: Dispatch<SetStateAction<boolean>>;
}

export const AvailableStudentsHeader = ({
  name,
  isStudentInfoOpen,
  id,
  setIsStudentInfoOpen,
  setRefresh
}: Props) => {
  const { setErrorHandler, setLoadingHandler, setMessageHandler } = useResponseContext();
  const user = useUser() as OnlyUserResponse;

  const handleBook = async () => {
    setLoadingHandler(true);
    const response = await fetchTool(`user/${id}/student/interview`, 'PATCH', { hrId: user.id });
    if (!response.status) {
      setErrorHandler(setError(response.message))
      setLoadingHandler(false);
      return;
    }

    setRefresh((prev) => !prev)
    setMessageHandler('Kursant został wzięty na rozmowę.')
    setLoadingHandler(false);
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
