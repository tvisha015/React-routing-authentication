import { type FC, lazy } from 'react';
import { type RouteObject } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoutes.tsx';

const ProtectedLayout = lazy(() => import('../../layout/ProtectedLayout'));

const NotFound = lazy(() => import('../modules/pageNotFound/PageNotFound.tsx'));
const Dashboard = lazy(() => import('../modules/dashboard/dashboard.tsx'));

interface Props {
  registration?: string | null;
  isAuthorized: boolean;
}

const PrivateRoutes: FC<Props> = ({ isAuthorized }) => {
  let appRoutes: RouteObject[] = [
    {
      path: '/',
      element: (
        <ProtectedRoute redirectPath="/auth/login" isAuthorized={isAuthorized} />
      ),
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
        {
          path: '404-not-found',
          element: <NotFound />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ];

  return (
    <>
      <ProtectedLayout routes={appRoutes} />
    </>
  );
};

export default PrivateRoutes;
