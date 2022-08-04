import { AddedStudent } from "./AddStudents";
interface Props {
    addedStudent: AddedStudent;
}

export const AddStudentsItem = ({ addedStudent }: Props) => {

    const { bonusProjectUrls, courseCompletion, courseEngagment, email, projectDegree, teamProjectDegree } = addedStudent;

    const urlsList = () => bonusProjectUrls.map((link, i) => <a key={String(i)} href={link} target="_blank" rel="noreferrer" className="link link--block">link{i + 1}</a>);

    return (
        <li className="add-students__item">
            <div className="add-students__item-info">
                {email}
            </div>
            <div className="add-students__item-info">
                {courseCompletion} / 5
            </div>
            <div className="add-students__item-info">
                {projectDegree} / 5
            </div>
            <div className="add-students__item-info">
                {courseEngagment} / 5
            </div>
            <div className="add-students__item-info">
                {teamProjectDegree} / 5
            </div>
            <div className="add-students__item-info">
                {urlsList()}
            </div>
        </li>
    );
};