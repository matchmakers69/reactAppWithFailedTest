import { useContext, useState } from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AwsSignIn from "./AwsSignIn";
import AwsCompleteNewPassword from "./AwsCompleteNewPassword";
import { AwsUser } from "../AwsTypes/AwsUser";
import { AlertContext } from "context/AlertContext";
import constants from "../../../../constants";

// TODO clear alerts

type LoginChallenge = {
  awsUser: AwsUser;
  lastChallengeName: string;
};

const getSuccessMessage = (lastChallengeName: string | undefined) => {
  return lastChallengeName === "NEW_PASSWORD_REQUIRED"
    ? "You've successfully reset your password!"
    : "You've logged in successfully!";
};

const AwsLoginPanel = () => {
  const [loginChallenge, setLoginChallenge] = useState<LoginChallenge>();
  const alertContext = useContext(AlertContext);
  const navigate = useNavigate();

  const handleAwsChallengeChanged = (newUser: AwsUser) => {
    alertContext.removeAllMessages();

    if (newUser.challengeName) {
      setLoginChallenge({ awsUser: newUser, lastChallengeName: newUser.challengeName });
    } else {
      navigate(constants.routes.DASHBOARD);
      alertContext.addAlertMessage("success", getSuccessMessage(loginChallenge?.lastChallengeName));
    }
  };

  return (
    <>
      {!loginChallenge && <AwsSignIn onAwsChallengeChanged={handleAwsChallengeChanged} />}
      {loginChallenge?.awsUser.challengeName === "NEW_PASSWORD_REQUIRED" && (
        <AwsCompleteNewPassword
          awsUser={loginChallenge.awsUser}
          onAwsChallengeChanged={handleAwsChallengeChanged}
        />
      )}
      {loginChallenge && loginChallenge.awsUser.challengeName !== "NEW_PASSWORD_REQUIRED" && (
        <Typography variant="h1" component="h1">
          Unsupported login challenge: {loginChallenge.awsUser.challengeName}
        </Typography>
      )}
    </>
  );
};

export default AwsLoginPanel;
