import { CreateStudentDtoInterface } from "types";
import { AddStudentsList } from "./AddStudentsList";
import { AddStudentsListLegend } from "./AddStudentsListLegend";

interface Props {
    addedStudents: CreateStudentDtoInterface[];
}

export const AddStudentsTable = ({ addedStudents }: Props) => {
    return (
        <table className="table">
            <AddStudentsListLegend />
            <AddStudentsList addedStudents={addedStudents} />
        </table>
    );
};