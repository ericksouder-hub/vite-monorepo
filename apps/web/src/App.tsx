import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { Settings } from './pages/Settings';

import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import { CheckEmail } from './pages/CheckEmail';
import { Success } from './pages/Success';
import { CookieConsent } from './components/CookieConsent';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/success" element={<Success />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user-behavior" element={<Dashboard />} />
          <Route path="audience" element={<Dashboard />} />
          <Route path="traffic" element={<Dashboard />} />
          <Route path="engagement" element={<Dashboard />} />
          <Route path="reports" element={<Dashboard />} />
          <Route path="errors" element={<Dashboard />} />
          <Route path="surveys" element={<Dashboard />} />
          <Route path="export" element={<Dashboard />} />
          <Route path="integrations" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  );
}
