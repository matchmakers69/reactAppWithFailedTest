import { createAsyncThunk } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";
import { IMemberApi, MemberApiClient } from "services/api/MemberApiClient";

const memberApiClient: IMemberApi = MemberApiClient();

export const fetchMemberDetails = createAsyncThunk("amplify/info", async (_, thunkAPI) => {
  try {
    const cognitoUser = await Auth.currentUserInfo();

    if (!cognitoUser || !cognitoUser.attributes["custom:altair_member_ref"]) {
      return null;
    }

    const awsUser = {
      emailAddress: cognitoUser.attributes?.email,
      phoneNumber: cognitoUser.attributes?.phone_number,
      memberRef: cognitoUser.attributes["custom:altair_member_ref"],
      username: cognitoUser.username,
    };

    const memberDetails = await memberApiClient.getMemberDetails(awsUser?.memberRef);

    return {
      awsUser,
      user: {
        ...memberDetails,
        dateOfBirth: memberDetails.dateOfBirth?.toISOString() ?? "0", // TODO check default value for date error
      },
    };
  } catch (err) {
    if (err instanceof Error) {
      return thunkAPI.rejectWithValue(err.message);
    }
    return console.warn("ERROR", err);
  }
});
