import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

import { CheckingAuth } from '../ui/';
import { useCheckAuth } from '../hooks';
import Home from '../pages/Home';

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path="/*" element={<Home />}></Route>
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
