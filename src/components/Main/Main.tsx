import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../../pages/NotFound';
import { Profile } from '../views/Profile/Profile';

export const Main = () => {
  return (
    <main className='main'>
      <Routes>
        {/* Ścieżki kursanta */}
        <Route path='/students/:studentId' element={<Profile />} />
        <Route path='/students/:studentId/edit' element={<Profile />} />

        {/* Ścieżki HRa */}
        <Route path='/students' element={<Profile />} />
        <Route path='/students-on-interview' element={<Profile />} />

        {/* Ścieżki Admina */}
        <Route path='/add-students' element={<Profile />} />
        <Route path='/add-hr' element={<Profile />} />
        <Route path='/password-edit' element={<Profile />} />
        <Route path='/notifications' element={<Profile />} />

        {/* Ścieżka 404 */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
};
