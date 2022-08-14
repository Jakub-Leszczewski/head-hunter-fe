import { Route, Routes } from 'react-router-dom';
import { StudentCVEdit } from '../../views/StudentCVEdit/StudentCVEdit';
import { StudentCV } from '../../views/StudentCV/StudentCV';
import { AddStudents } from '../../views/AddStudents/AddStudents';
import { AddHr } from '../../views/AddHr/AddHr';
import { Notifications } from '../../views/Notifications/Notifications';
import { NotFound } from '../../views/NotFound/NotFound';
import { AvailableStudents } from '../../views/AvailableStudents/AvailableStudents';
import { StudentInterview } from '../../views/StudentInterview/StudentInterview';
import { HREditPassword } from '../../views/HREditPassword/HREditPassword';
import { Home } from '../Home/Home';
import { SecurePath } from '../SecurePath/SecurePath';
import { UserRole } from '../../../../head-hunter-be/src/types/user';

export const Main = () => {
  return (
    <main className='main'>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/password/edit'
          element={
            <SecurePath
              view={<HREditPassword />}
              roles={[UserRole.Admin, UserRole.Hr]}
            />
          }
        />

        {/* Ścieżki kursanta */}
        <Route
          path='/student/:studentId'
          element={
            <SecurePath
              view={<StudentCV />}
              owner
            />
          }
        />
        <Route
          path='/student/:studentId/edit'
          element={
            <SecurePath
              view={<StudentCVEdit />}
              owner
              roles={[UserRole.Student]}
            />
          }
        />

        {/* Ścieżki HRa */}
        <Route
          path='/student'
          element={
            <SecurePath
              view={<AvailableStudents />}
              roles={[UserRole.Admin, UserRole.Hr]}
            />
          }
        />
        <Route
          path='/student-on-interview'
          element={
            <SecurePath
              view={<StudentInterview />}
              roles={[UserRole.Hr]}
            />
          }
        />

        {/* Ścieżki Admina */}
        <Route
          path='/student/add'
          element={
            <SecurePath
              view={<AddStudents />}
              roles={[UserRole.Admin]}
            />
          }
        />
        <Route
          path='/hr/add'
          element={
            <SecurePath
              view={<AddHr />}
              roles={[UserRole.Admin]}
            />
          }
        />
        <Route
          path='/notification'
          element={
            <SecurePath
              view={<Notifications />}
              roles={[UserRole.Admin]}
            />
          }
        />

        {/* Ścieżka 404 */}
        <Route
          path='*'
          element={
            <NotFound />
          }
        />
      </Routes>
    </main>
  );
};
