import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/material";
import { shouldForwardProp } from "@mui/system";
import { StyledProps } from ".";

export const Button = styled(ButtonUnstyled, {
  shouldForwardProp: (prop: PropertyKey) =>
    shouldForwardProp(prop) && prop !== "isFullWidth" && prop !== "spacing" && prop !== "variant",
})<StyledProps>(({ disabled, isFullWidth, theme, variant }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: isFullWidth ? "100%" : "max-content",
  minHeight: 34,
  maxHeight: 42,
  cursor: disabled ? "not-allowed" : "pointer",
  borderRadius: theme.borderRadius,
  padding: theme.spacing(0, 2),
  fontWeight: 500,
  letterSpacing: 0.5,
  textTransform: "none",
  ...theme.typography.button1,
  transition: "all .2s ease-in-out",
  border: "none",
  fontSize: 14,
  [theme.breakpoints.up("xs")]: {
    fontSize: 14,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 16,
    minHeight: 34,
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: 19,
    minHeight: 38,
  },

  [theme.breakpoints.up("xl")]: {
    minHeight: 38,
    fontSize: 21,
  },

  "&:not(:last-child)": {
    marginRight: 0,
    [theme.breakpoints.up("sm")]: {
      marginRight: 16,
    },
  },

  "&:disabled": {
    pointerEvents: "none",
    opacity: 0.5,
    backgroundColor: theme.palette.buttonColors.inactive,
    boxShadow: "none",
  },
  "&:focus": {
    outline: theme.outline.normal,
  },

  ...(variant === "primary" && {
    backgroundColor: theme.palette.buttonColors.primary.bck,
    color: theme.palette.buttonColors.primary.text,
    boxShadow: "0 4px 2px -2px rgb(0 0 0 /40%)",
    [theme.breakpoints.up("md")]: {
      "&:hover": {
        backgroundColor: theme.palette.buttonColors.primary.hover,
        boxShadow: "0 8px 4px -4px rgb(0 0 0 /30%)",
      },
    },
    "&:focus": {
      outline: theme.outline.normal,
    },
  }),

  ...(variant === "secondary" && {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    boxShadow: "0 4px 2px -2px rgb(0 0 0 /40%)",
    [theme.breakpoints.up("md")]: {
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        boxShadow: "0 8px 4px -4px rgb(0 0 0 /30%)",
      },
    },
    "&:focus": {
      outline: theme.outline.normal,
    },
  }),

  ...(variant === "outlined" && {
    backgroundColor: theme.palette.buttonColors.default.bck,
    color: theme.palette.buttonColors.default.text,
    boxShadow: "0 4px 2px -2px rgb(0 0 0 /40%)",
    border: `1px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.up("md")]: {
      "&:hover": {
        backgroundColor: theme.palette.buttonColors.default.bck,
        boxShadow: "0 8px 4px -4px rgb(0 0 0 /30%)",
      },
    },
    "&:focus": {
      outline: theme.outline.normal,
    },
  }),

  ...(variant === "text" && {
    backgroundColor: theme.palette.transparent.main,
    border: "none",
  }),
}));

export const IconLeftWrapper = styled("span")(({ theme }) => ({
  display: "flex",
  paddingRight: theme.spacing(1),
}));

export const IconRightWrapper = styled("span")(({ theme }) => ({
  display: "flex",
  paddingLeft: theme.spacing(1),
}));
