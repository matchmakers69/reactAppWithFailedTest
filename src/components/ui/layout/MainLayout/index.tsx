import { Outlet } from "react-router-dom";
import { AlertMessages } from "components/alerts/AlertMessages";
import AppDashboardNavbar from "components/dashboard/DashboardLayout/AppDashboardNavbar";
import Container from "components/ui/Container";
import * as S from "./MainLayout.styled";

const MainLayout = () => (
  <>
    <AlertMessages />
    <AppDashboardNavbar />
    <S.Layout>
      <Container>
        <Outlet />
      </Container>
    </S.Layout>
  </>
);

export default MainLayout;
