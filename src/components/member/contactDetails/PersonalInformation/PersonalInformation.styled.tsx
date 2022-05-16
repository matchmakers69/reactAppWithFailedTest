import { styled } from "@mui/material/styles";

export const PersonalInformationSection = styled("div")(({ theme }) => ({
  paddingTop: 40,
  paddingBottom: 40,
  borderTop: `1px solid ${theme.palette.common.black}`,
  borderBottom: `1px solid ${theme.palette.common.black}`,

  [theme.breakpoints.up("md")]: {
    borderTop: 0,
  },

  [theme.breakpoints.up("lg")]: {
    paddingTop: 56,
    paddingBottom: 56,
  },
}));
