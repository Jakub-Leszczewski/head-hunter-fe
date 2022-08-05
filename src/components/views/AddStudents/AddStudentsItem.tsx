import { AddedStudent } from "./AddStudents";
interface Props {
    addedStudent: AddedStudent;
}

export const AddStudentsItem = ({ addedStudent }: Props) => {

    const { bonusProjectUrls, courseCompletion, courseEngagment, email, projectDegree, teamProjectDegree } = addedStudent;

    const urlsList = () => bonusProjectUrls.map((link, i) => <a key={String(i)} href={link} target="_blank" rel="noreferrer" className="link link--block link--center">link{i + 1}</a>);

    return (
        <tr className="table__body-row">
            <td className="table__body-item">{email}</td>
            <td className="table__body-item">{courseCompletion} / 5</td>
            <td className="table__body-item">{projectDegree} / 5</td>
            <td className="table__body-item">{courseEngagment} / 5</td>
            <td className="table__body-item">{teamProjectDegree} / 5</td>
            <td className="table__body-item">{urlsList()}</td>
        </tr>
    );
};