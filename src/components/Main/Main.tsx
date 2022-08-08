import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../views/NotFound/NotFound';
import { Profile } from '../views/Profile/Profile';
import { StudentCVEdit } from '../views/StudentCVEdit/StudentCVEdit';
import { StudentCV } from '../views/StudentCV/StudentCV';
import { AddStudents } from '../views/AddStudents/AddStudents';
import { Notifications } from '../views/Notifications/Notifications';
import { AddHr } from '../views/AddHr/AddHr'

export const Main = () => {
  return (
    <main className='main'>
      <Routes>
        {/* Ścieżki kursanta */}
        <Route path='/students/:studentId' element={<StudentCV />} />
        <Route path='/students/:studentId/edit' element={<StudentCVEdit />} />
        <Route path='/students/:studentId/edit' element={<Profile />} />

        {/* Ścieżki HRa */}
        <Route path='/students' element={<Profile />} />
        <Route path='/students-on-interview' element={<Profile />} />

        {/* Ścieżki Admina */}
        <Route path='/add-students' element={<AddStudents />} />
        <Route path='/add-hr' element={<AddHr />} />
        <Route path='/password-edit' element={<Profile />} />
        <Route path='/notifications' element={<Notifications />} />

        {/* Ścieżka 404 */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
};
