import { Grid, Typography } from "@mui/material";
import dashboardData from "../config";
import DashboardTile from "../DashboardTile";

const DashboardTools = () => {
  return (
    <>
      <Typography sx={{ mb: 2.5 }} component="h2" variant="h2">
        Manage
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
        {dashboardData.tools.map((tool) => (
          <Grid key={tool.id} item xs={12} sm={6} md={4}>
            <DashboardTile text={tool.text} title={tool.title} img={tool.img} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DashboardTools;
