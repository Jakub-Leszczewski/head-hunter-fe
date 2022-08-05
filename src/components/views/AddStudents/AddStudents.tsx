import { useState } from "react";
import { parse, ParseResult } from 'papaparse';

import { FileDrop } from "../../common/FileDrop/FileDrop";
import { Button } from "../../common/Button/Button";
import { AddStudentsTable } from "./AddStudentsTable";

export interface AddedStudent {
    email: string;
    courseCompletion: number;
    courseEngagment: number;
    projectDegree: number;
    teamProjectDegree: number;
    bonusProjectUrls: string[];
}

export const AddStudents = () => {

    const [addedStudents, setAddedStudents] = useState<AddedStudent[]>([
        {
            bonusProjectUrls: ['https://animark.pl', 'https://oela.pl', 'https://youtube.com', 'https://google.com'],
            courseCompletion: 4.32,
            courseEngagment: 2.4,
            email: 'siema@onet.pl',
            projectDegree: 4.60,
            teamProjectDegree: 3,
        },
        {
            bonusProjectUrls: ['https://animark.pl'],
            courseCompletion: 3.32,
            courseEngagment: 5,
            email: 'elo@onet.pl',
            projectDegree: 2.61,
            teamProjectDegree: 3,
        },
        {
            bonusProjectUrls: ['https://www.google.com/search?q=t%C5%82umacz&oq=t%C5%82umacz&aqs=chrome.0.69i59l2j0i131i433i512j0i433i512j0i131i433i512l3j0i433i512j0i131i433i512j0i512.1054j0j1&sourceid=chrome&ie=UTF-8', 'https://oela.pl'],
            courseCompletion: 4.32,
            courseEngagment: 2.4,
            email: 'witam@onet.pl',
            projectDegree: 1.60,
            teamProjectDegree: 3,
        },
    ]);

    const handleSave = () => {
        console.log('Zapisuję kursantów...', addedStudents);
    };

    const setNewStudents = (results: ParseResult<AddedStudent>) => {
        const { data, errors } = results;
        if (errors.length > 0) {
            console.log(errors);
            // Jakiś toast coś tego typu benc?
        } else {
            // Nie mam pojęcia jka to zwalidować, ale może wystarczy na samym backendzie?
            setAddedStudents(data);
        }
    };

    const handleDrop = (files: File[] | null) => {
        if (!files || files.length === 0) return;
        parse<AddedStudent, File>(files[0], { complete: (results, file) => setNewStudents(results) });
    };

    return (
        <div className="main__content add-students">
            <FileDrop defaultValue="Upuść plik CSV" fileType="csv" handler={handleDrop} />
            {addedStudents.length > 0 && <>
                <AddStudentsTable addedStudents={addedStudents} />
                <Button textName="Zapisz" click={handleSave} className="add-students__btn" />
            </>}
        </div>
    );
};