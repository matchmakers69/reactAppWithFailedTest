import { createSlice } from "@reduxjs/toolkit";
import { fetchMemberDetails } from "../actions/userAction";

export type AwsUserDetails = {
  emailAddress: string;
  phoneNumber: string;
  username: string;
  memberRef: number;
};

export type BasicMemberDetails = {
  title: string;
  initials: string;
  forenames: string;
  surname: string;
  niNumber: string;
  dateOfBirth: Date | string;
  gender: string;
};

type UserState = {
  loading: "idle" | "pending" | "succeeded" | "failed";
  awsDetails: AwsUserDetails | null;
  memberDetails: BasicMemberDetails | null;
  error: string | null;
};

export const initialState: UserState = {
  loading: "idle",
  awsDetails: null,
  memberDetails: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchMemberDetails.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(fetchMemberDetails.fulfilled, (state, { payload }) => {
        state.awsDetails = payload?.awsUser ?? null;
        state.memberDetails = payload?.user ?? null;
        state.loading = "succeeded";
      })
      .addCase(fetchMemberDetails.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action?.error?.message ?? "";
      }),
});
const userReducer = userSlice.reducer;
export default userReducer;
