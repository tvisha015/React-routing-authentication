import { type FC, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
 
const Login = lazy(() => import('./login'));
 
const Auth: FC = () => {
  return (
    <div>
      {useRoutes([
        { 
          path: 'auth/login',
          element: <Login />,
        },
        {
          path: '*',
          element: <Navigate to="/auth/login" replace />,
        },
      ])}
    </div>
  );
};
 
export default Auth;