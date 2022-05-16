import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import DashboardRetirementButtonSection from "components/dashboard/DashboardRetirementButtonSection";

const HeroHeaderText = () => {
  return (
    <>
      <Box sx={{ mb: 3 }}>
        <Typography component="p" variant="caption">
          Our retirement planner is a handy little tool designed to help you visualise your spending
          and budget for your retirement.
        </Typography>
      </Box>
      <Box>
        <DashboardRetirementButtonSection />
      </Box>
    </>
  );
};

export default HeroHeaderText;
