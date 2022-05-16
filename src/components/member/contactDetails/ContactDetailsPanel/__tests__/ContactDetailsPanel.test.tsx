import { render, act, waitFor, screen } from "@testing-library/react";
import * as reactRedux from "react-redux";
import * as MemberApiClient from "services/api/MemberApiClient";
import "@testing-library/jest-dom";
import ContactDetailsPanel from "..";

jest.mock("@aws-amplify/auth", () => ({
  currentSession: jest.fn(),
  currentCredentials: jest.fn(),
  currentAuthenticatedUser: jest.fn(),
  essentialCredentials: jest.fn(),
  configure: jest.fn(),
}));

jest.mock("react-redux", () => {
  return {
    useSelector: jest.fn(),
  };
});

const mockApiClient = jest.fn();

jest.mock("services/api/MemberApiClient", () => ({
  MemberApiClient: () => mockApiClient,
}));

describe("<ContactDetailsPanel />", () => {
  const useAppSelectorMock = jest.spyOn(reactRedux, "useSelector");

  // beforeEach(() => {
  //   jest.clearAllMocks();
  // });

  it("displays loading text when data is loading", async () => {
    useAppSelectorMock.mockReturnValue({
      awsDetails: {},
    });
    render(<ContactDetailsPanel />);

    await act(async () => {
      const loader = await waitFor(() => screen.getByText("Contact details are loading..."));
      expect(loader).toBeVisible();
    });
  });
  it.only("displays header text after data was fetched", async () => {
    useAppSelectorMock.mockReturnValue({
      awsDetails: {},
    });
    const useMemberClientApiMock = jest.spyOn(MemberApiClient, "MemberApiClient");

    useMemberClientApiMock.mockReturnValue({
      getContactAddress: async () => ({}),
    });
    render(<ContactDetailsPanel />);

    await act(async () => {
      const loader = await waitFor(() => screen.getByText("Contact details are loading..."));
      expect(loader).toBeVisible();
    });

    await act(async () => {
      const pageTitle = await waitFor(() => screen.getByText("Contact details"));
      expect(pageTitle).toBeVisible();
    });
  });
});
