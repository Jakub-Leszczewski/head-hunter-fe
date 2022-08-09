import { CreateStudentDtoInterface } from "types";
import { AddStudentsItem } from "./AddStudentsItem";

interface Props {
    addedStudents: CreateStudentDtoInterface[];
}

export const AddStudentsList = ({ addedStudents }: Props) => {

    const addedStudentsList = () => addedStudents.map(s => <AddStudentsItem key={s.email} addedStudent={s} />);

    return (
        <tbody className="table__body">
            {addedStudentsList()}
        </tbody>
    );
};