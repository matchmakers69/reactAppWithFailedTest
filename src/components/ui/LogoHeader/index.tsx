import { Box } from "@mui/material";
import * as S from "./LogoHeader.styled";
import constants from "../../../constants";

const LogoHeader = () => {
  return (
    <S.LogoLink to={constants.routes.LOGIN}>
      <Box
        component="img"
        alt="Heywood Pensions Tech"
        src="/static/logos/heywood_logo.png"
        sx={{ width: "auto", maxHeight: { xs: 45, sm: 55 }, height: "auto" }}
      />
    </S.LogoLink>
  );
};

export default LogoHeader;
