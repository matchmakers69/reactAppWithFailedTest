import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import constants from "../../constants";
import { AwsLoginContext } from "../../context/AwsLoginContext";
import MainLayout from "components/ui/layout/MainLayout";
import NavigationLayout from "../../components/ui/layout/NavigationLayout";
import Login from "pages/Login";
import { protectedRoutes } from "../config/routesMapper";
import ProtectedRoute from "../ProtectedRoute";

const Loading = () => <div>Loading ...</div>;

const AppRoutes = () => {
  const awsLoginState = useContext(AwsLoginContext);

  const loginGuard = (
    <ProtectedRoute isAuthorised={awsLoginState.isLoggedIn} redirectPath={constants.routes.LOGIN} />
  );

  return (
    <>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={loginGuard}>
            <Route path="/" element={<MainLayout />}>
              {protectedRoutes.map((route) => (
                <Route key={route.name} path={route.path} element={<route.component />} />
              ))}
            </Route>
          </Route>

          <Route path="/" element={<NavigationLayout />}>
            <Route path={constants.routes.LOGIN} element={<Login />} />
          </Route>

          <Route path="*" element={<Navigate to={constants.routes.LOGIN} replace />} />
        </Routes>
      </React.Suspense>
    </>
  );
};

export default AppRoutes;
