import Popup from "reactjs-popup";

import { MdFilterAlt } from 'react-icons/md';
import { StudentsFilterForm } from "./StudentsFilterForm";

export const StudentsFilter = () => {
    return (
        <Popup
            trigger={
                <div className="students-filter__btn">
                    <MdFilterAlt className="students-filter__btn-icon" />
                    <p className="students-filter__btn-text">Filtrowanie</p>
                </div>
            }
            on='click'
            modal
            className="modal-popup"
        >
            <StudentsFilterForm />
        </Popup>
    );
};