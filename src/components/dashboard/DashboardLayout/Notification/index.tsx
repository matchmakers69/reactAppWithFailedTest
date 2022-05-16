import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, IconButton } from "@mui/material";

const Notification = () => {
  return (
    <>
      <IconButton
        sx={{ px: 0.5, py: 0.5 }}
        size="large"
        aria-label="View your notifications"
        color="info"
        disableRipple
      >
        <Badge color="info">
          <NotificationsIcon sx={{ fontSize: { xs: 35, sm: 45 } }} />
        </Badge>
      </IconButton>
    </>
  );
};

export default Notification;
