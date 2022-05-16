import Button from "components/ui/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Box } from "@mui/material";

const LoginHeaderButtons = () => {
  return (
    <>
      <Box sx={{ paddingRight: "20px" }}>
        <Button
          startIcon={<ArrowBackIosNewIcon sx={{ color: "primary.light", fontSize: 20 }} />}
          sx={{
            px: 0,
            color: "text.primary",

            fontWeight: 400,
          }}
          type="button"
          variant="text"
        >
          Back
        </Button>
      </Box>
      <Box sx={{ paddingLeft: "20px" }}>
        <Button
          endIcon={<BookmarkBorderIcon sx={{ color: "primary.light", fontSize: 30 }} />}
          sx={{
            px: 0,
            color: "text.primary",

            fontWeight: 400,
          }}
          type="button"
          variant="text"
        >
          Bookmark this page
        </Button>
      </Box>
    </>
  );
};

export default LoginHeaderButtons;
