import { styled } from "@mui/material/styles";

export const AuthButtonsRoot = styled("div")(({ theme }) => ({
  display: "none",
  flexDirection: "column",
  paddingLeft: 25,
  borderLeft: `solid 2px ${theme.palette.black.main}`,
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

export const MenuAuth = styled("ul")({
  padding: 0,
  margin: 0,
  listStyle: "none",
});
