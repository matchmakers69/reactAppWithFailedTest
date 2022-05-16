interface ISizes {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export const responsiveFontSize = ({ sm, md, lg, xl }: ISizes) => {
  return {
    "@media (min-width:576px)": {
      fontSize: sm,
    },
    "@media (min-width:992px)": {
      fontSize: md,
    },
    "@media (min-width:1200px)": {
      fontSize: lg,
    },
    "@media (min-width:1920px)": {
      fontSize: xl,
    },
  };
};
