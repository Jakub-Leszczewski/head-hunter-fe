import { AddStudentsList } from "./AddStudentsList";
import { AddStudentsListLegend } from "./AddStudentsListLegend";
import { AddedStudent } from "./AddStudents";

interface Props {
    addedStudents: AddedStudent[];
}

export const AddStudentsTable = ({ addedStudents }: Props) => {
    return (
        <div>
            <AddStudentsListLegend />
            <AddStudentsList addedStudents={addedStudents} />
        </div>
    );
};