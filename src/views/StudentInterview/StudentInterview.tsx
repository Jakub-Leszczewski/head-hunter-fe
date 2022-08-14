import React, { FormEvent, useReducer, useState } from 'react';
import { InterviewStudentItem } from '../../components/InterviewStudentItem/InterviewStudentItem';
import { useSearch } from '../../hooks/useSearch';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { STUDENTS_LIMIT } from '../../utils/dataLimits';
import { studentsFilterReducer } from '../../reducers/studentsFilterReducer';
import { studentsFilterDefault } from '../AvailableStudents/AvailableStudents';
import { OnlyUserResponse, SmallStudentResponse } from 'types';
import { StudentsList } from '../../components/StudentsList/StudentsList';
import { useUser } from '../../hooks/useUser';
import { PulseLoader } from 'react-spinners'

export const StudentInterview = () => {

  const user = useUser() as OnlyUserResponse;

  const [filter, dispatch] = useReducer(studentsFilterReducer, studentsFilterDefault);
  const [refreshFilter, setRefreshFilter] = useState(false);

  const {
    amount,
    data,
    handleSearchPhraseChange,
    hasMore,
    loading,
    page,
    setPage,
    searchPhrase,
    setRefresh,
  } = useSearch<SmallStudentResponse>(`user/${user.id}/hr/student/interview`, filter, [refreshFilter]);

  const { lastDataElementRef } = useInfiniteScroll(amount, hasMore, loading, page, STUDENTS_LIMIT, setPage);

  const handleFilterSubmit = (e: FormEvent) => {
    e.preventDefault();
    setRefreshFilter(state => !state);
  };

  const studentsList = () => {
    return data.map((item, i) => (
      <InterviewStudentItem
        key={item.id}
        item={item}
        observer={(i + 1) % STUDENTS_LIMIT === 0 ? lastDataElementRef : null}
        setRefresh={setRefresh}
      />
    )
    );
  }

  return (
    <StudentsList
      dispatch={dispatch}
      filter={filter}
      handleFilterSubmit={handleFilterSubmit}
      handleSearchPhraseChange={handleSearchPhraseChange}
      searchPhrase={searchPhrase}
    >
      <div className="hr-list__list-container">
        <ul className="hr-list__list">
          {studentsList()}
          {loading && <PulseLoader className="loading__spinner" color="#E02735"/>}
        </ul>
      </div>
    </StudentsList>
  );
};
