import { Box, Grid, Typography } from "@mui/material";

type AwsHeroPageTitleProps = {
  title: string;
};

const AwsHeroPageTitle = ({ title }: AwsHeroPageTitleProps) => {
  return (
    <Grid
      container
      columnSpacing={{
        xs: 1,
        md: 1,
      }}
    >
      <Grid item md={3} lg={3} xl={3} sx={{ display: { xs: "none", sm: "flex" } }} />
      <Grid item xs={12} sm={12} md={9}>
        <Box sx={{ mb: { xs: "48px", md: "64px" } }}>
          <Typography component="h1" variant="h1">
            {title}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AwsHeroPageTitle;
