import { styled } from "@mui/material";
import { shouldForwardProp } from "@mui/system";

import { StyledProps } from "./index";

export const IconContainer = styled("div", {
  shouldForwardProp: (prop: PropertyKey) => shouldForwardProp(prop) && prop !== "dragToBottom",
})<StyledProps>(({ dragToBottom }) => ({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: dragToBottom ? "flex-end" : "flex-start",
  alignItems: "center",
  flexGrow: 1,
}));

export const ColumnImageInner = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  maxWidth: "50%",
  margin: "0 auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "60%",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "85%",
  },
}));
