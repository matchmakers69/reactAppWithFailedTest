import { styled } from "@mui/material/styles";

export const ContactDetailsFooter = styled("footer")(({ theme }) => ({
  padding: "40px 0",
  borderTop: `1px solid ${theme.palette.common.black}`,

  [theme.breakpoints.up("lg")]: {
    padding: "56px 0",
  },
}));
