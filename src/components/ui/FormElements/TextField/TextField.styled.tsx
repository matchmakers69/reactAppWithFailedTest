import { TextField as MUITextField } from "@mui/material";
import { styled } from "@mui/material";
import { shouldForwardProp } from "@mui/system";
import { StyledProps } from ".";

export const TextField = styled(MUITextField, {
  shouldForwardProp: (prop: PropertyKey) =>
    shouldForwardProp(prop) && prop !== "isBackgroundTransparent",
})<StyledProps>(({ isBackgroundTransparent, theme, variant }) => ({
  justifyContent: "center",
  padding: 0,
  display: "flex",

  ...(variant === "outlined" && {
    color: theme.palette.buttonColors.primary.text,

    backgroundColor: isBackgroundTransparent ? "transparent" : theme.palette.white.main,
    "& .MuiInputBase-root": {
      borderRadius: 4,
    },
  }),

  ...(variant === "standard" && {
    color: theme.palette.buttonColors.primary.text,

    backgroundColor: isBackgroundTransparent ? "transparent" : theme.palette.white.main,
    "& .MuiInputBase-root": {
      borderRadius: 0,
    },
  }),
}));
