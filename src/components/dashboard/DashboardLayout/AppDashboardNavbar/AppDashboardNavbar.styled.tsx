import { styled } from "@mui/system";
import { AppBar, Toolbar } from "@mui/material";

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 110;

export const AppDashboard = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: theme.palette.background.default,
}));

export const ToolbarAppDashboard = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  padding: theme.spacing(3, 0),
  [theme.breakpoints.up("sm")]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 0),
  },
}));
