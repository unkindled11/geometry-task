import { lazy, Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import PublicRoutes from 'shared/components/Routes/PublicRoutes';
import PrivateRoutes from 'shared/components/Routes/PrivateRoutes';

const LayOut = lazy(() => import('components/LayOut'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const MyProfilePage = lazy(() => import('pages/MyProfilePage'));
const MainPage = lazy(() => import('pages/MainPage'));
const FioPage = lazy(() => import('pages/FioPage'));
const TelPage = lazy(() => import('pages/TelPage'));
const InnPage = lazy(() => import('pages/InnPage'));
const PassportPage = lazy(() => import('pages/PassportPage'));
const CarPage = lazy(() => import('pages/CarPage'));
const EmailPage = lazy(() => import('pages/EmailPage'));
const TelegramPage = lazy(() => import('pages/TelegramPage'));
const VkPage = lazy(() => import('pages/VkPage'));
const ContactsNamePage = lazy(() => import('pages/ContactsNamePage'));
const IdPage = lazy(() => import('pages/IdPage'));
const HlrPage = lazy(() => import('pages/HlrPage'));
const HistoryPage = lazy(() => import('pages/HistoryPage'));
const SettingPage = lazy(() => import('pages/SettingsPage'));

const NavigationRoutes = () => {
  return (
    <div>
      <Suspense fallback={<div>loadind...</div>}>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/auth" element={<AuthPage />} />
          </Route>
          <Route element={<LayOut />}>
            <Route element={<PrivateRoutes />}>
              <Route path="/profile" element={<MyProfilePage />} />
              <Route path="/" element={<MainPage />} />
              <Route path="/fio" element={<FioPage />} />
              <Route path="/phone-numeber" element={<TelPage />} />
              <Route path="/inn" element={<InnPage />} />
              <Route path="/passport" element={<PassportPage />} />
              <Route path="/car" element={<CarPage />} />
              <Route path="/e-mail" element={<EmailPage />} />
              <Route path="/telegram" element={<TelegramPage />} />
              <Route path="/vk" element={<VkPage />} />
              <Route path="/contacts-name" element={<ContactsNamePage />} />
              <Route path="/id" element={<IdPage />} />
              <Route path="/hlr-request" element={<HlrPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/settings" element={<SettingPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/auth" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default NavigationRoutes;
