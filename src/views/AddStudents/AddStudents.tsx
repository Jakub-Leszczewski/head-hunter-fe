import { useState } from "react";
import { parse, ParseResult } from 'papaparse';

import { AddStudentsTable } from "./AddStudentsTable";
import { FileDrop } from '../../components/common/FileDrop/FileDrop';
import { Button } from '../../components/common/Button/Button';

import { CreateStudentDtoInterface, CreateStudentsResponse } from 'types';
import { fetchTool } from "../../utils/fetchHelpers";
import { StudentProfileSection } from "../../components/common/StudentProfileSection/StudentProfileSection";

type CreateStudentPapaparse = Record<keyof CreateStudentDtoInterface, string>;

export const AddStudents = () => {

    const [addedStudents, setAddedStudents] = useState<CreateStudentDtoInterface[]>([]);

    const handleSave = async () => {
        const results = await fetchTool<CreateStudentsResponse>('student', 'POST', addedStudents);
        if (!results.status) return; //Popup error
        // Popup succes
        setAddedStudents([]);
    };

    const setNewStudents = (results: ParseResult<CreateStudentPapaparse>) => {
        const { data, errors } = results;
        if (errors.length > 0) {
            console.log(errors);
            // Jakiś toast coś tego typu benc?
        } else {
            setAddedStudents(() => {
                return data.map(result => {
                    const {
                        bonusProjectUrls, courseCompletion, courseEngagement, email, projectDegree, teamProjectDegree
                    } = result;
                    return {
                        courseCompletion: Number(courseCompletion),
                        courseEngagement: Number(courseEngagement),
                        email,
                        projectDegree: Number(projectDegree),
                        teamProjectDegree: Number(teamProjectDegree),
                        bonusProjectUrls: bonusProjectUrls.split(',').map((l: any) => l.trim()),
                    }
                });
            });
        }
    };

    const handleDrop = (files: File[] | null) => {
        if (!files || files.length === 0) return;
        parse<CreateStudentPapaparse, File>(files[0], {
            complete: (results, file) => setNewStudents(results),
            header: true,
        });
    };

    return (
        <StudentProfileSection title="Dodawanie kursantów">
            <div className="main__content add-students">
                <FileDrop defaultValue="Upuść plik CSV" fileType="csv" handler={handleDrop} />
                {addedStudents.length > 0 && <>
                    <AddStudentsTable addedStudents={addedStudents} />
                    <Button textName="Zapisz" click={handleSave} className="add-students__btn" />
                </>}
            </div>
        </StudentProfileSection>
    );
};
