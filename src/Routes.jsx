import { lazy, Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import PublicRoutes from 'shared/components/Routes/PublicRoutes';
import PrivateRoutes from 'shared/components/Routes/PrivateRoutes';

const LayOut = lazy(() => import('components/LayOut'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const MainPage = lazy(() => import('pages/MainPage'));

const NavigationRoutes = () => {
  return (
    <div>
      <Suspense fallback={<div>loadind...</div>}>
        <Routes>
          {/* <Route element={<LayOut />}> */}
          <Route element={<PublicRoutes />}>
            <Route path="/auth" element={<AuthPage />} />
          </Route>

          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/fio" element={<MainPage />} />
            <Route path="/phone-numeber" element={<MainPage />} />
            <Route path="/inn" element={<MainPage />} />
            <Route path="/passport" element={<MainPage />} />
            <Route path="/car" element={<MainPage />} />
            <Route path="/e-mail" element={<MainPage />} />
            <Route path="/telegram" element={<MainPage />} />
            <Route path="/vk" element={<MainPage />} />
            <Route path="/contacts-name" element={<MainPage />} />
            <Route path="/id" element={<MainPage />} />
            <Route path="/hlr-request" element={<MainPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/auth" replace />} />
          {/* </Route> */}
        </Routes>
      </Suspense>
    </div>
  );
};

export default NavigationRoutes;
