import { Navigate, Outlet } from "react-router-dom";

type ProtectedRouteProps = {
  isAuthorised: boolean | undefined;
  redirectPath: string;
};

const ProtectedRoute = ({ isAuthorised, redirectPath }: ProtectedRouteProps) => {
  if (isAuthorised) {
    return <Outlet />;
  }

  return <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
