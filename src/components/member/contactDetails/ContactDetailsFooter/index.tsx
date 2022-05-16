import { useNavigate } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import constants from "../../../../constants";
import Button from "components/ui/Button";
import * as S from "./ContactDetailsFooter.styled";

const ContactDetailsFooter = () => {
  const navigate = useNavigate();

  return (
    <S.ContactDetailsFooter>
      <Grid container>
        <Grid item xs={12}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                width: "300px",
              }}
              variant="outlined"
              onClick={() => navigate(`${constants.routes.DASHBOARD}`)}
            >
              Back to dashboard
            </Button>
          </Box>
        </Grid>
      </Grid>
    </S.ContactDetailsFooter>
  );
};

export default ContactDetailsFooter;
