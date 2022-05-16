import { Avatar, Box, IconButton } from "@mui/material";
import useCustomNavigate from "hooks/useCustomNavigate";
import constants from "../../../../constants";
import account from "__mocks__/account";

const AccountPopover = () => {
  const navigate = useCustomNavigate();
  const handleGoToProfile = () => {
    navigate(constants.routes.CONTACT_DETAILS);
  };
  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "inline-block" } }}>
        <IconButton
          aria-label="Account of current user"
          onClick={handleGoToProfile}
          sx={{ px: 0.5, py: 0.5 }}
          size="large"
          color="info"
          disableRipple
        >
          <Avatar src={account.photoURL} alt="User Profile" />
        </IconButton>
      </Box>
    </>
  );
};

export default AccountPopover;
