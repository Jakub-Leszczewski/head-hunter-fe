import { AddStudentsList } from "./AddStudentsList";
import { AddStudentsListLegend } from "./AddStudentsListLegend";
import { AddedStudent } from "./AddStudents";

interface Props {
    addedStudents: AddedStudent[];
}

export const AddStudentsTable = ({ addedStudents }: Props) => {
    return (
        <table className="table">
            <AddStudentsListLegend />
            <AddStudentsList addedStudents={addedStudents} />
        </table>
    );
};