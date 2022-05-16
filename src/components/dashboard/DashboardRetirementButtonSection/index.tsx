import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Button from "components/ui/Button";

const DashboardRetirementButtonSection = () => {
  return (
    <>
      <Box sx={{ mb: { xs: 4, sm: 5 } }}>
        <Typography component="p" variant="caption">
          Click the "Choose my retirement lifestyle" button below to get started
        </Typography>
      </Box>
      <Box sx={{ width: { xs: "100%", sm: "100%", md: "70%" } }}>
        <Button variant="primary" type="button" isFullWidth>
          Choose my retirement lifestyle options
        </Button>
      </Box>
    </>
  );
};

export default DashboardRetirementButtonSection;
