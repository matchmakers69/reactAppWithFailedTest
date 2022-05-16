import { styled } from "@mui/material";
import { shouldForwardProp } from "@mui/system";
import { Container as MUIContainer } from "@mui/material";
import { StyledProps } from ".";

export const Container = styled(MUIContainer, {
  shouldForwardProp: (prop: PropertyKey) => shouldForwardProp(prop) && prop !== "hasPadding",
})<StyledProps>(({ hasPadding, theme }) => ({
  width: "100%",
  padding: theme.spacing(0, 2),
  paddingTop: hasPadding ? "50px" : 0,
  [theme.breakpoints.up("xs")]: {
    maxWidth: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    maxWidth: 540,
  },
  [theme.breakpoints.up("ms")]: {
    maxWidth: 720,
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: 960,
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: 1140,
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: 1536,
  },
}));
