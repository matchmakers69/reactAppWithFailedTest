import { Typography } from "@mui/material";
import * as S from "./AuthButtons.styled";
import Button from "components/ui/Button";

type IAuthButtonsProps = {
  onLogout: () => void;
  onProfileRedirect: () => void;
};

const AuthButtons = ({ onLogout, onProfileRedirect }: IAuthButtonsProps) => {
  return (
    <>
      <S.AuthButtonsRoot>
        <S.MenuAuth>
          <Typography component="li" variant="subtitle2">
            <Button
              onClick={onLogout}
              sx={{ px: 0, color: "text.primary", fontWeight: 700, fontSize: 20 }}
              type="button"
              variant="text"
            >
              Logout
            </Button>
          </Typography>

          <Typography component="li" variant="subtitle2">
            <Button
              onClick={onProfileRedirect}
              sx={{ px: 0, color: "text.primary", fontWeight: 700, fontSize: 20 }}
              type="button"
              variant="text"
            >
              Account
            </Button>
          </Typography>
        </S.MenuAuth>
      </S.AuthButtonsRoot>
    </>
  );
};

export default AuthButtons;
