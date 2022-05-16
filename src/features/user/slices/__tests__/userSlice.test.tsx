import { PayloadAction } from "@reduxjs/toolkit";
import { fetchMemberDetails } from "features/user/actions/userAction";
import memberDetailsReducer, { initialState } from "../userSlice";

const memberDetails = {
  title: "Ms",
  initials: "A A",
  forenames: "Alice Abigail",
  surname: "Anderson",
  dateOfBirth: "1979-02-28",
  gender: "F",
  niNumber: "AA123456A",
  memberRef: 301089,
};

const awsDetails = {
  emailAddress: "aws_loki_developers@heywood.co.uk",
  memberRef: "301089",
  username: "testmember01",
};

describe("memberDetailsReducer", () => {
  it("should return the initial state if no  action is provided", () => {
    expect(memberDetailsReducer(undefined, {} as PayloadAction)).toEqual(initialState);
  });
  it("sets loading === 'pending' when data is pending", () => {
    const action = { type: fetchMemberDetails.pending };
    const state = memberDetailsReducer(initialState, action);
    expect(state).toEqual({
      awsDetails: null,
      memberDetails: null,
      error: null,
      loading: "pending",
    });
  });
  it("sets the awsDetails and memberDetails when fetchMemberDetails is fulfilled", () => {
    const action = {
      type: fetchMemberDetails.fulfilled.type,
      payload: { user: memberDetails ?? null, awsUser: awsDetails ?? null },
    };
    const state = memberDetailsReducer(initialState, action);
    expect(state).toEqual({
      memberDetails: memberDetails,
      awsDetails: awsDetails,
      error: null,
      loading: "succeeded",
    });
  });
  it("sets loading === 'failed' when fetchMemberDetails is rejected", () => {
    const action = {
      type: fetchMemberDetails.rejected.type,
      // payload: { error: "Sorry some error occured" },
    };
    const state = memberDetailsReducer(initialState, action);
    expect(state).toEqual({
      awsDetails: null,
      error: "",
      loading: "failed",
      memberDetails: null,
    });
  });
});
