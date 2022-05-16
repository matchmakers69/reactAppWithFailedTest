import { styled } from "@mui/material/styles";

export const MemberDetailsSection = styled("div")(({ theme }) => ({
  paddingBottom: 40,

  [theme.breakpoints.up("md")]: {
    borderBottom: 0,
    paddingBottom: 0,
  },
}));
