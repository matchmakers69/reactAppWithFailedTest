import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { Box, Grid, Typography } from "@mui/material";
import { Auth } from "aws-amplify";
import * as Yup from "yup";
import PasswordTextField from "components/ui/FormElements/PasswordTextField";
import AwsHeroPageTitle from "../AwsHeroPageTitle";
import { AwsUser } from "../../AwsTypes/AwsUser";
import Button from "components/ui/Button";
import { awsCompleteNewPasswordSchema } from "./validationSchema";
import AwsHeroIcon from "../AwsHeroIcon";
import { useContext } from "react";
import { AlertContext } from "context/AlertContext";
import AwsPasswordRulesList from "../AwsPasswordRulesList";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

type AwsCompleteNewPasswordInputType = Pick<
  Yup.InferType<typeof awsCompleteNewPasswordSchema>,
  "password" | "confirmPassword"
>;

type AwsCompleteNewPasswordProps = {
  awsUser: AwsUser;
  onAwsChallengeChanged: (user: AwsUser) => void;
};

const AwsCompleteNewPassword = ({
  awsUser,
  onAwsChallengeChanged,
}: AwsCompleteNewPasswordProps) => {
  const theme = useTheme();
  const matchesGreaterThenMobile = useMediaQuery(theme.breakpoints.up("md"));
  const methods = useForm<AwsCompleteNewPasswordInputType>({
    mode: "onChange",
    resolver: yupResolver(awsCompleteNewPasswordSchema),
  });

  const alertContext = useContext(AlertContext);

  const formSubmitHandler: SubmitHandler<AwsCompleteNewPasswordInputType> = ({
    password,
  }: AwsCompleteNewPasswordInputType) => {
    Auth.completeNewPassword(awsUser, password)
      .then((user) => {
        onAwsChallengeChanged(user);
      })
      .catch((err) => {
        alertContext.addAlertMessage("error", "Cannot save new password");
        console.log(err);
      });
  };

  return (
    <>
      <AwsHeroPageTitle title="Set New Password" />
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
              Your password has expired. Please choose a new password.
            </Typography>

            <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
              <Box sx={{ mt: 2, mb: 2 }}>
                <Typography>Password requirements:</Typography>
                <AwsPasswordRulesList />
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
              <Box sx={{ mb: 2 }}>
                <PasswordTextField
                  label="Confirm Password"
                  name="confirmPassword"
                  sx={{ width: "100%" }}
                  inputProps={{ "data-testid": "confirmPassword" }}
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

export default AwsCompleteNewPassword;
