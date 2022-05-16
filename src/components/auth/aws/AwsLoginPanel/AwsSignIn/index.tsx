import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { Auth } from "aws-amplify";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import TextFieldInput from "components/ui/FormElements/TextField";
import { AwsUser } from "../../AwsTypes/AwsUser";
import { awsSignInSchema } from "components/auth/aws/AwsLoginPanel/AwsSignIn/validationSchema";
import Button from "components/ui/Button";
import PasswordTextField from "components/ui/FormElements/PasswordTextField";
import { AlertContext } from "context/AlertContext";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AwsHeroIcon from "../AwsHeroIcon";
import AwsHeroPageTitle from "../AwsHeroPageTitle";

// TODO - Add spinner.

type AwsSignInInputType = Pick<Yup.InferType<typeof awsSignInSchema>, "username" | "password">;

type AwsSignInProps = {
  onAwsChallengeChanged: (user: AwsUser) => void;
};

const AwsSignIn = ({ onAwsChallengeChanged }: AwsSignInProps) => {
  const theme = useTheme();
  const matchesGreaterThenMobile = useMediaQuery(theme.breakpoints.up("md"));
  const methods = useForm<AwsSignInInputType>({
    mode: "onChange",
    resolver: yupResolver(awsSignInSchema),
  });

  const alertContext = useContext(AlertContext);

  const formSubmitHandler = async ({ username, password }: AwsSignInInputType) => {
    try {
      const user: AwsUser = await Auth.signIn(username, password);
      onAwsChallengeChanged(user);
    } catch (err) {
      alertContext.addAlertMessage("error", "Incorrect username or password");
      console.log(err);
    }
  };

  return (
    <>
      <AwsHeroPageTitle title="Login" />

      <Grid
        container
        columnSpacing={{
          xs: 1,
          md: 1,
        }}
      >
        <AwsHeroIcon
          src="/static/icons/login_page_image.png"
          alt="Person logging into their computer"
        />
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <FormProvider {...methods}>
            <Typography
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
              component="p"
              variant="body1"
            >
              Please enter your username and password
            </Typography>

            <form noValidate onSubmit={methods.handleSubmit(formSubmitHandler)}>
              <Box sx={{ mt: 2, mb: 2 }}>
                <TextFieldInput
                  label="Username"
                  name="username"
                  sx={{ width: "100%" }}
                  inputProps={{ "data-testid": "username" }}
                  size={matchesGreaterThenMobile ? "medium" : "small"}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <PasswordTextField
                  label="Password"
                  name="password"
                  sx={{ width: "100%" }}
                  inputProps={{ "data-testid": "password" }}
                  size={matchesGreaterThenMobile ? "medium" : "small"}
                />
              </Box>
              <Box sx={{ my: 5 }}>
                <Button
                  sx={{
                    width: "100%",
                  }}
                  variant="primary"
                  isDisabled={!methods.formState.isValid}
                  type="submit"
                  data-testid="submitButton"
                >
                  Submit
                </Button>
              </Box>
            </form>
          </FormProvider>
        </Grid>
      </Grid>
    </>
  );
};
export default AwsSignIn;
