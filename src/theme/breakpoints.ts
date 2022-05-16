declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    ms: true;
    md: true;
    lg: true;
    xl: true;
  }
}

export const breakpoints = {
  values: {
    xs: 0,
    sm: 576,
    ms: 786,
    md: 992,
    lg: 1200,
    xl: 1920,
  },
};
