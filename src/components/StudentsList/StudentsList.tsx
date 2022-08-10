import { Dispatch, FormEvent, ReactNode } from "react";
import { StudentsFilterAction, StudentsFilterState } from "../../reducers/studentsFilterReducer";
import { Search } from "../common/Search/Search";
import { StudentsFilter } from "../popups/StudentsFilter/StudentsFilter";

interface Props {
    children: ReactNode;
    dispatch: Dispatch<StudentsFilterAction>;
    filter: StudentsFilterState;
    handleFilterSubmit: (e: FormEvent) => void;
    handleSearchPhraseChange: (text: string) => void;
    searchPhrase: string;
}

export const StudentsList = ({
    children,
    dispatch,
    filter,
    handleFilterSubmit,
    handleSearchPhraseChange,
    searchPhrase
}: Props) => {
    return (
        <div className="hr-list">
            <div className='hr-list__header'>
                <Search handleChange={handleSearchPhraseChange} value={searchPhrase} />
                <StudentsFilter
                    state={filter}
                    dispatch={dispatch}
                    handleFilterSubmit={handleFilterSubmit}
                />
            </div>
            {children}
        </div>
    );
};