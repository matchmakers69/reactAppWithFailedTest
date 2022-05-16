import Container from "components/ui/Container";
import { AlertMessages } from "components/alerts/AlertMessages";
import AppDashboardNavbar from "components/dashboard/DashboardLayout/AppDashboardNavbar";
import { Outlet } from "react-router-dom";
import * as S from "./AppLayout.styled";

const AppLayout = () => (
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

export default AppLayout;
