import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '../../pages/Home.page';
import { LoginPage } from '../../pages/Login/index.page';
import { SignupPage } from '../../pages/Signup/index.page';
import { PasswordForgotPage } from '../../pages/PasswordForgot/index.page';
import { NewPasswordPage } from '../../pages/NewPassword/index.page';
import { path } from './path';

const router = createBrowserRouter([
  {
    path: path.root,
    element: <HomePage />,
  },
  {
    path: path.login,
    element: <LoginPage />,
  },
  {
    path: path.signup,
    element: <SignupPage />,
  },
  {
    path: path.passwordForgot,
    element: <PasswordForgotPage />,
  },
  {
    path: path.newPassword,
    element: <NewPasswordPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
