import { styled } from "@mui/system";

const APPBAR_DESKTOP = 10;

export const Layout = styled("div")(({ theme }) => ({
  paddingTop: 20,
  [theme.breakpoints.up("md")]: {
    paddingTop: APPBAR_DESKTOP,
  },
}));
