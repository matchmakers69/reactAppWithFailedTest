import { styled } from "@mui/material/styles";

export const ColumnItem = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 1 300px",
});

export const ImageIconWrapper = styled("figure")(({ theme }) => ({
  padding: 0,
  margin: 0,
  marginBottom: 24,
  paddingBottom: "75%",
  position: "relative",
  width: "100%",
  overflow: "hidden",
  "&:after": {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      content: "''",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      position: "absolute",
    },
  },
}));

export const ImageIcon = styled("img")({
  maxHeight: "100%",
  width: "100%",
  maxWidth: "100%",
  position: "absolute",
  height: "auto",
  top: "50%",
  left: "50%",
  display: "block",
  verticalAlign: "middle",
  transform: "translate(-50%, -50%)",
});

export const DashboardButtonWrapper = styled("div")(({ theme }) => ({
  paddingTop: 40,
  paddingBottom: 56,
  borderTop: `solid 1px ${theme.palette.primary.main}`,
  alignSelf: "flex-start",
  marginTop: "auto",
  width: "100%",
}));

export const DashboardHeaderSection = styled("div")(({ theme }) => ({
  paddingBottom: 40,
  borderBottom: `solid 1px ${theme.palette.primary.main}`,
  [theme.breakpoints.up("md")]: {
    paddingBottom: 56,
  },
}));

export const DashboardSection = styled("div")(({ theme }) => ({
  paddingTop: 30,
  [theme.breakpoints.up("md")]: {
    paddingTop: 40,
  },
  borderBottom: `solid 1px ${theme.palette.primary.main}`,
  "&:last-child": {
    borderBottom: "none",
  },
}));
