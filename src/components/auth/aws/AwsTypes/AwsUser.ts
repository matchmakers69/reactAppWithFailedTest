import { CognitoUser } from "amazon-cognito-identity-js";

// from https://github.com/aws-amplify/amplify-js/issues/3733

export type AwsChallengeName =
  | "NEW_PASSWORD_REQUIRED"
  | "SMS_MFA"
  | "SOFTWARE_TOKEN_MFA"
  | "MFA_SETUP";

export type AwsUser = CognitoUser & {
  challengeName: AwsChallengeName;
};
