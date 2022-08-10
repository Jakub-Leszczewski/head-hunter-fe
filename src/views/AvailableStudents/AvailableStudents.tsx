import { AvailableStudentItem } from '../../components/AvailableStudentItem/AvailableStudentItem';
import { Search } from '../../components/common/Search/Search';
import { useSearch } from '../../hooks/useSearch';
import { SmallStudentResponse } from 'types';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { STUDENTS_LIMIT } from '../../utils/dataLimits';
import { StudentsFilter } from '../../components/popups/StudentsFilter/StudentsFilter';
import { FormEvent, useReducer, useState } from 'react';
import { studentsFilterReducer, StudentsFilterState } from '../../reducers/studentsFilterReducer';

export const studentsFilterDefault: StudentsFilterState = {
  courseEngagement: 0,
  projectDegree: 0,
  monthsOfCommercialExp: '',
  expectedContractType: [],
  courseCompletion: 0,
  canTakeApprenticeship: '',
  expectedSalary: {
    max: '',
    min: '',
  },
  teamProjectDegree: 0,
  expectedTypeWork: [],
}

export const AvailableStudents = () => {

  const [filter, dispatch] = useReducer(studentsFilterReducer, studentsFilterDefault);
  const [refreshFilter, setRefreshFilter] = useState(false);

  const handleFilterSubmit = (e: FormEvent) => {
    e.preventDefault();
    setRefreshFilter(state => !state);
  };

  const {
    amount,
    data,
    handleSearchPhraseChange,
    hasMore,
    loading,
    page,
    searchPhrase,
    setPage
  } = useSearch<SmallStudentResponse>('student', filter, [refreshFilter]);

  const { lastDataElementRef } = useInfiniteScroll(amount, hasMore, loading, page, STUDENTS_LIMIT, setPage);

  return (
    <div className='container'>
      <div className='search-area'>
        <Search handleChange={handleSearchPhraseChange} value={searchPhrase} />
        <StudentsFilter
          state={filter}
          dispatch={dispatch}
          handleFilterSubmit={handleFilterSubmit}
        />
      </div>
      <div className='separation-line' />
      <ul className='list'>
        {data.map((item, i) => (
          <AvailableStudentItem item={item} key={item.id} observer={(i + 1) % STUDENTS_LIMIT === 0 ? lastDataElementRef : null} />
        ))}
      </ul>
    </div>
  );
};
