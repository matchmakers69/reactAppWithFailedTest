import { useEffect } from "react";
import { Grid } from "@mui/material";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import AwsLoginPanel from "components/auth/aws/AwsLoginPanel";
import constants from "../constants";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((awsUser) => {
        navigate(constants.routes.DASHBOARD);
      })
      .catch((err) => {
        console.log("Login:", err);
      });
  }, [navigate]);

  return (
    <Grid
      container
      columnSpacing={{
        xs: 1,
        md: 1,
      }}
    >
      <Grid item md={1} lg={1} xl={1} sx={{ display: { xs: "none", sm: "flex" } }} />
      <AwsLoginPanel />

      <Grid item md={2} lg={2} xl={2} sx={{ display: { xs: "none", sm: "flex" } }} />
    </Grid>
  );
};

export default Login;
