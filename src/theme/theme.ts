import { createTheme, Theme as MUITheme, ThemeOptions } from "@mui/material/styles";
import "@mui/styles";
import { PaletteColor } from "@mui/material";
import { breakpoints } from "./breakpoints";
import { getThemeComponents } from "./overrides";
import { black, white } from "./colors";
export type ThemeMode = "default";
export type CustomTheme = MUITheme & { mode: ThemeMode };

type ButtonCustomColors = {
  bck: string;
  hover: string;
  inactive: string;
  text: string;
};

declare module "@mui/material/styles" {
  interface TypeBackground {
    bodyColor: string;
  }
  interface Palette {
    white: PaletteColor;
    black: PaletteColor;
    danger: PaletteColor;
    info: PaletteColor;
    transparent: PaletteColor;
    buttonColors: {
      primary: ButtonCustomColors;
      secondary: ButtonCustomColors;
      inactive: ButtonCustomColors;
      default: ButtonCustomColors;
    };
    background: {
      paper: string;
      default: string;
      bodyColor: string;
    };
  }

  interface Theme {
    borderRadius: string;
    commonBorder: string;
    outline: {
      thin: string;
      normal: string;
    };
  }

  type CustomVariants = "button1";

  type CustomVariantsProperties = {
    [CustomVariant in CustomVariants]: React.CSSProperties;
  };

  interface TypographyVariants extends CustomVariantsProperties {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    button1: true;
  }
}

const getTheme = (themeMode: ThemeMode = "default") =>
  ({
    mode: themeMode,
    borderRadius: 32,
    palette: {
      ...(themeMode === "default" && {
        common: { black, white },

        buttonColors: {
          inactive: "#E3E5E9",
          primary: {
            bck: "#F8A916",
            hover: "#FAB74D",
            text: "#1F3156",
          },
          secondary: {
            bck: "#1F3156",
            hover: "#485C78",
            text: "#FFFFFF",
          },
          default: {
            bck: "#FFFFFF",
            text: "#1F3156",
          },
        },

        primary: {
          main: "#1F3156",
          light: "#F8A916",
        },
        secondary: {
          main: "#E3E5E9",
          light: "#EDF4F5",
        },
        warning: {
          main: "#F8A916",
          light: "#FAB74D",
        },
        white: {
          main: "#FFFFFF",
        },
        black: {
          main: "#000000",
          light: "#0B0C0C",
        },

        danger: {
          main: "#F44336",
          dark: "#D85353",
        },

        text: {
          primary: "#000000",
          secondary: "#1F3156",
        },
        info: {
          main: "#000000",
        },
        transparent: {
          main: "transparent",
        },

        success: {
          main: "#99D99D",
          contrastText: "#000000",
        },
        background: { paper: "#E3E5E9", default: "#FFFFFF", bodyColor: "#616161" },
      }),
    },

    breakpoints,
  } as ThemeOptions);

export const getThemeByMode = (themeMode: ThemeMode) => {
  const themeByUserMode = createTheme(getTheme(themeMode));
  return createTheme(themeByUserMode, getThemeComponents(themeByUserMode as CustomTheme));
};
