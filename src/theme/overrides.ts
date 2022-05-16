import { Theme as MUITheme } from "@mui/material/styles";
import { ThemeMode } from "./theme";
import {
  body1,
  body2,
  button1,
  caption,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  outline,
  subtitle1,
  subtitle2,
} from "./typography";

export const FONT_PRIMARY = "Montserrat, sans-serif";
export const FONT_SECONDARY = "Neue Kabel, sans-serif";

export const getThemeComponents = (theme: MUITheme & { mode: ThemeMode }) => {
  return {
    commonBorder: `1px solid ${theme.palette.black.main}`,
    outline: {
      thin: `1px solid ${theme.palette.primary}`,
      normal: `2px solid ${theme.palette.primary}`,
    },

    typography: {
      fontFamily: FONT_PRIMARY,
      ...(theme.mode === "default" && {
        h1: {
          ...h1,
          fontFamily: FONT_SECONDARY,
        },
        h2: {
          ...h2,
          fontFamily: FONT_SECONDARY,
          color: theme.palette.text.primary,
        },
        h3: {
          ...h3,
          fontFamily: FONT_SECONDARY,
          color: theme.palette.text.primary,
        },
        h4: {
          ...h4,
          fontFamily: FONT_PRIMARY,
          color: theme.palette.text.primary,
        },
        h5: {
          ...h5,
          fontFamily: FONT_PRIMARY,
          color: theme.palette.text.primary,
        },
        h6: {
          ...h6,
          fontFamily: FONT_PRIMARY,
          color: theme.palette.text.primary,
        },
        subtitle1: {
          ...subtitle1,
          fontFamily: FONT_PRIMARY,
        },
        subtitle2: {
          ...subtitle2,
          fontFamily: FONT_PRIMARY,
        },
        body1: {
          ...body1,
          fontFamily: FONT_PRIMARY,
        },
        body2: {
          ...body2,
          fontFamily: FONT_PRIMARY,
        },
        caption: {
          ...caption,
          fontFamily: FONT_PRIMARY,
        },
        outline: {
          ...outline,
        },
        button1,
      }),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "*": {
            "&:before": {
              boxSizing: "border-box",
            },
            "&:after": {
              boxSizing: "border-box",
            },
            boxSizing: "border-box",
          },
          html: {
            fontSize: "62.5%",
            width: "100%",
            height: "100%",
            WebkitOverflowScrolling: "touch",
            WebkitFontSmoothing: "antialiased",
            textSizeAdjust: "100%",
          },
          body: {
            backgroundColor: theme.palette.background.default,
            overflowX: "hidden",
            width: "100%",
            height: "100%",
            padding: 0,
            margin: 0,
            color: theme.palette.background.bodyColor,
            fontSize: 16,
            [theme.breakpoints.up("lg")]: {
              fontSize: 19,
            },
          },

          "#root": {
            width: "100vw",
            height: "auto",
            minHeight: "100vh",
            [theme.breakpoints.up("sm")]: {
              height: "100vh",
              minHeight: "0",
            },
          },
        },
      },

      MuiFormHelperText: {
        styleOverrides: {
          root: {
            fontSize: 14,
            [theme.breakpoints.up("md")]: {
              fontSize: 14,
            },
            [theme.breakpoints.up("lg")]: {
              fontSize: 15,
            },
            [theme.breakpoints.up("xl")]: {
              fontSize: 16,
            },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontSize: 15,
            [theme.breakpoints.up("sm")]: {
              fontSize: 16,
            },
            [theme.breakpoints.up("md")]: {
              fontSize: 19,
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            padding: 0,
          },
          multiline: {
            textarea: {
              lineHeight: "4.2rem",
            },
          },
          input: {
            fontSize: 15,
            [theme.breakpoints.up("sm")]: {
              fontSize: 16,
            },
            [theme.breakpoints.up("md")]: {
              fontSize: 19,
            },
          },
        },
      },
    },
  };
};
