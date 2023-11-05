import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { LoginPage } from './pages/Login/index.page';
import { SignupPage } from './pages/Signup/index.page';
import { PasswordForgotPage } from './pages/PasswordForgot/index.page';
import { NewPasswordPage } from './pages/NewPassword/index.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/password-forgot',
    element: <PasswordForgotPage />,
  },
  {
    path: '/new-password',
    element: <NewPasswordPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
