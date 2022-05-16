import { responsiveFontSize } from "utils/fonts/calculateResponsiveSize";

export const FONTS = ["Neue Kabel", "Montserrat", "sans-serif"].join(",");

export const h1 = {
  lineHeight: 1,
  fontSize: 48,
  ...responsiveFontSize({ sm: 48, md: 60, lg: 64, xl: 72 }),
};

export const h2 = {
  fontSize: 34,
  lineHeight: 1,
  ...responsiveFontSize({ sm: 34, md: 34, lg: 42, xl: 48 }),
};

export const h3 = {
  lineHeight: 1,
  fontSize: 21,
  ...responsiveFontSize({ sm: 21, md: 21, lg: 27, xl: 34 }),
};

export const h4 = {
  lineHeight: 1,
  fontSize: 18,
  fontWeight: 500,
  ...responsiveFontSize({ sm: 19, md: 19, lg: 21, xl: 24 }),
};
export const h5 = {
  lineHeight: 1,
  fontSize: 18,
  ...responsiveFontSize({ sm: 18, md: 20, lg: 21, xl: 28 }),
};

export const h6 = {
  lineHeight: 1,
  fontSize: 18,
  ...responsiveFontSize({ sm: 18, md: 20, lg: 21, xl: 28 }),
};

export const subtitle1 = {
  fontFamily: FONTS,
  lineHeight: 1.5,
  fontSize: 22,
};

export const subtitle2 = {
  lineHeight: 1.5,
  fontSize: 18,
  fontWeight: 300,
  ...responsiveFontSize({ sm: 19, md: 19, lg: 21, xl: 24 }),
};
export const body1 = {
  lineHeight: 1.5,
  fontSize: 16,
  ...responsiveFontSize({ sm: 19, md: 19, lg: 21, xl: 24 }),
};
export const body2 = {
  lineHeight: 1.5,
  fontSize: 16,
  ...responsiveFontSize({ sm: 16, md: 16, lg: 19, xl: 19 }),
};
export const caption = {
  lineHeight: 1.5,
  fontSize: 18,
  fontWeight: 300,
  ...responsiveFontSize({ sm: 19, md: 19, lg: 21, xl: 24 }),
};

export const outline = {
  lineHeight: 1.5,
  fontSize: 12,
  letterSpacing: 1.1,
  textTransform: "uppercase",
};

export const button1 = {
  lineHeight: 1.5,
  fontSize: 16,
  fontFamily: FONTS,
};
