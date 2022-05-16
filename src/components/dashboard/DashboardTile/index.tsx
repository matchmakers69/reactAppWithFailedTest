import { Box, Typography, Link } from "@mui/material";
import Button from "components/ui/Button";
import { Link as RouterLink } from "react-router-dom";
import * as S from "../common.styled";
import constants from "../../../constants";
import DashboardTileImage from "../DashboardTileImage";

type DashboardTileProps = {
  title: string;
  text: string;
  img: string;
};

const DashboardTile = ({ title, img, text }: DashboardTileProps) => {
  return (
    <S.ColumnItem>
      <S.ImageIconWrapper>
        <DashboardTileImage src={img} alt={title} />
      </S.ImageIconWrapper>

      <Typography sx={{ mb: 3 }} variant="h3" component="h3">
        {title}
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Typography variant="body2" component="p">
          {text}
        </Typography>
      </Box>
      <S.DashboardButtonWrapper>
        <Button variant="primary" type="button" isFullWidth>
          <Link underline="none" component={RouterLink} to={constants.routes.LOGIN}>
            View
          </Link>
        </Button>
      </S.DashboardButtonWrapper>
    </S.ColumnItem>
  );
};

export default DashboardTile;
