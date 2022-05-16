import { Grid, Typography } from "@mui/material";
import dashboardData from "../config";
import DashboardTile from "../DashboardTile";

const DashboardTools = () => {
  return (
    <>
      <Typography sx={{ mb: 2.5 }} variant="h2">
        Learn
      </Typography>

      <Grid
        container
        columnSpacing={{
          xs: 2,
          sm: 6,
          lg: 12,
          xl: 12,
        }}
      >
        {dashboardData.lessons.map((lesson) => (
          <Grid key={lesson.id} item xs={12} sm={6} md={4}>
            <DashboardTile text={lesson.text} title={lesson.title} img={lesson.img} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DashboardTools;
