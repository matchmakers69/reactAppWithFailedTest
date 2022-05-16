import { styled } from "@mui/material/styles";

export const Header = styled("header")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  position: "relative",
  padding: theme.spacing(3),
  justifyContent: "space-between",
  backgroundColor: theme.palette.common.white,
}));
