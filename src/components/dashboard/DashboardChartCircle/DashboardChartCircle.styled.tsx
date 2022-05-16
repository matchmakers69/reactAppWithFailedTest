import { styled } from "@mui/material/styles";

export const DashboardChartImageWrapper = styled("figure")(({ theme }) => ({
  marginTop: 20,
  width: "100%",
  overflow: "hidden",
  padding: 0,
  margin: "0 auto",
  maxWidth: "100%",

  [theme.breakpoints.up("ms")]: {
    maxWidth: "70%",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "80%",
    margin: 0,
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "100%",
  },
}));
