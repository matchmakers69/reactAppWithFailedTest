import { Box, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

type IPageHeaderProps = {
  title: string;
  sx?: SxProps<Theme>;
};

const PageHeader = ({ title, sx }: IPageHeaderProps) => {
  return (
    <Box sx={{ mb: { xs: "32px", sm: "40px" } }}>
      <Typography component="h1" sx={sx} variant="h1">
        {title}
      </Typography>
    </Box>
  );
};

export default PageHeader;
