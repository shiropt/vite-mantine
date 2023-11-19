import { Routes, Route } from 'react-router-dom';
import { path } from './path';
import { CallbackPage } from '../../components/layouts/CallBack';
import { AuthenticationGuard } from '../Auth0/AuthenticationGuard';
import { HomePage } from '../../pages/Home.page';

export const RouteProvider = () => (
  <Routes>
    <Route path={path.callback} element={<CallbackPage />} />
    <Route path={path.root} element={<AuthenticationGuard component={HomePage} />} />
  </Routes>
);
