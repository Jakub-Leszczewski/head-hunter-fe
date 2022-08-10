import Popup from "reactjs-popup";
import { StudentsFilterForm } from "./StudentsFilterForm";
import { StudentsFilterAction, StudentsFilterState } from "../../../reducers/studentsFilterReducer";
import { Dispatch, FormEvent } from "react";
import { MdFilterAlt } from "react-icons/md";
import { useOpen } from "../../../hooks/useOpen";

interface Props {
    state: StudentsFilterState;
    dispatch: Dispatch<StudentsFilterAction>;
    handleFilterSubmit: (e: FormEvent) => void;
}

export const StudentsFilter = ({ dispatch, handleFilterSubmit, state }: Props) => {

    const { close, isOpen, open } = useOpen();

    return (
        <>
            <div className="students-filter__btn" onClick={open}>
                <MdFilterAlt className="students-filter__btn-icon" />
                <p className="students-filter__btn-text">Filtrowanie</p>
            </div>
            <Popup
                modal
                className="modal-popup"
                open={isOpen}
                onClose={close}
            >
                <StudentsFilterForm state={state} dispatch={dispatch} handleFilterSubmit={handleFilterSubmit} close={close} />
            </Popup>
        </>
    );
};