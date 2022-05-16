import { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Badge, Box, IconButton, Stack } from "@mui/material";
import { Auth } from "aws-amplify";
import AuthButtons from "components/dashboard/DashboardLayout/AuthButtons";
import Notification from "components/dashboard/DashboardLayout/Notification";
import Container from "components/ui/Container";
import LogoHeader from "components/ui/LogoHeader";
import { AlertContext } from "context/AlertContext";
import useCustomNavigate from "hooks/useCustomNavigate";
import constants from "../../../../constants";
import AccountPopover from "../AccountPopover";
import * as S from "./AppDashboardNavbar.styled";

const AppDashboardNavbar = () => {
  const navigate = useCustomNavigate();
  const alertContext = useContext(AlertContext);

  const handleLogoutRedirect = () => {
    Auth.signOut()
      .then(() => {
        navigate(constants.routes.LOGIN);
        alertContext.addAlertMessage("success", "You've logged out successfully!");
      })
      .catch((error) => {
        console.log("AppDashboardNavbar:", error);
      });
  };

  const handleProfileRedirect = () => {
    navigate(`${constants.routes.CONTACT_DETAILS}`);
  };

  const handleBackHome = () => {
    navigate(`${constants.routes.LOGIN}`);
  };
  return (
    <S.AppDashboard position="static">
      <Container>
        <S.ToolbarAppDashboard>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <LogoHeader />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
            <Box sx={{ pr: 1.5 }}>
              <Notification />
              <IconButton
                sx={{ px: 0.5, py: 0.5 }}
                onClick={handleBackHome}
                size="large"
                aria-label="Home"
                color="info"
                disableRipple
              >
                <Badge color="info">
                  <HomeIcon sx={{ fontSize: { xs: 35, sm: 45 } }} />
                </Badge>
              </IconButton>
              <AccountPopover />
            </Box>
            <AuthButtons
              onProfileRedirect={handleProfileRedirect}
              onLogout={handleLogoutRedirect}
            />
          </Stack>
        </S.ToolbarAppDashboard>
      </Container>
    </S.AppDashboard>
  );
};

export default AppDashboardNavbar;
