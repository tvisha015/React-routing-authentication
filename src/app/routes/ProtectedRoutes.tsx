import { type FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  redirectPath: string;
  isAuthorized: boolean;
}

const ProtectedRoute: FC<Props> = ({ isAuthorized, redirectPath }) => {
  
  // If the user is not authenticated, redirect them to the specified redirect path
  if (!isAuthorized) return <Navigate to={redirectPath} replace/>;

  return <Outlet />;
};

export default ProtectedRoute;
