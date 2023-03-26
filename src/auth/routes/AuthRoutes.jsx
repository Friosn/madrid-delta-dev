import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage, RegisterPage } from '../pages';
import { NewPassword } from '../pages/NewPassword';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="newPassword" element={<NewPassword />} />

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
