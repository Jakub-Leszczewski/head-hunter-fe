import { Route, Routes } from 'react-router-dom';
import { StudentCVEdit } from '../../views/StudentCVEdit/StudentCVEdit';
import { StudentCV } from '../../views/StudentCV/StudentCV';
import { AddStudents } from '../../views/AddStudents/AddStudents'
import { AddHr } from '../../views/AddHr/AddHr'
import { Notifications } from '../../views/Notifications/Notifications'
import { NotFound } from '../../views/NotFound/NotFound'
import { AvailableStudents } from '../../views/AvailableStudents/AvailableStudents'
import { StudentInterview } from '../../views/StudentInterview/StudentInterview'
import { HREditPassword } from '../../views/HREditPassword/HREditPassword';
import { ForgotPassword } from '../../views/ForgotPassword/ForgotPassword';
import { NewPassword } from '../../views/NewPassword/NewPassword';
import { Login } from '../../views/Login/Login';
import { StudentRegistration } from '../../views/StudentRegistration/StudentRegistration';

export const Main = () => {
  return (
    <main className='main'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/password/forgot' element={<ForgotPassword />} />
        <Route path='/registration/hr/:userId' element={<NewPassword />} />
        <Route path='/registration/student/:userId/:token' element={<StudentRegistration />} />
        {/* Ścieżki kursanta */}
        <Route path='/student/:studentId' element={<StudentCV />} />
        <Route path='/student/:studentId/edit' element={<StudentCVEdit />} />

        {/* Ścieżki HRa */}
        <Route path='/student' element={<AvailableStudents />} />
        <Route path='/student-on-interview' element={<StudentInterview />} />

        {/* Ścieżki Admina */}
        <Route path='/student/add' element={<AddStudents />} />
        <Route path='/hr/add' element={<AddHr />} />
        <Route path='/password/edit' element={<HREditPassword />} />
        <Route path='/notification' element={<Notifications />} />

        {/* Ścieżka 404 */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
};
