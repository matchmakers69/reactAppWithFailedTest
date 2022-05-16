import { styled } from "@mui/material";
import { shouldForwardProp } from "@mui/system";

import { StyledProps } from ".";

export const IconContainer = styled("figure", {
  shouldForwardProp: (prop: PropertyKey) => shouldForwardProp(prop) && prop !== "dragToBottom",
})<StyledProps>(({ dragToBottom, theme }) => ({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: dragToBottom ? "flex-end" : "center",
  alignItems: "center",
  padding: 0,
  margin: "0 auto",
  maxWidth: "90%",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "80%",
  },
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

export const IconImg = styled("img")({
  maxWidth: "100%",
  height: "auto",
});
