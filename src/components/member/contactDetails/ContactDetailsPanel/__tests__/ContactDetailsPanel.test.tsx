import { render, act, waitFor, screen } from "@testing-library/react";
import * as reactRedux from "react-redux";
import "@testing-library/jest-dom";
import ContactDetailsPanel from "..";
import AppThemeProvider from "context/ThemeModeContext";
 
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
  MemberApiClient: () => ({
    getContactAddress: () => mockApiClient(),
  }),
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
  it("displays header text after data was fetched", async () => {
    useAppSelectorMock.mockReturnValue({
      awsDetails: {},
    });
 
    mockApiClient.mockReturnValue({
      line1: "",
      line2: "",
      line3: "",
      line4: "",
      line5: "",
      postcode: "",
      phoneNumber: "",
      faxNumber: "",
      email: "",
      overseas: "",
    });
    render(<ContactDetailsPanel />, {
      wrapper: ({ children }) => <AppThemeProvider>{children}</AppThemeProvider>,
    });
 
    await act(async () => {
      const pageTitle = await waitFor(() => screen.getByText("Contact details"));
      expect(pageTitle).toBeVisible();
    });
  });
});