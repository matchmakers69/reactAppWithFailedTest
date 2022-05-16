import "@testing-library/jest-dom";
import { render, screen } from "../../config/jest/test-utils";

import Dashboard from "../Dashboard";

const mockDispatch = jest.fn();

const memberDetails = {
  title: "",
  initials: "",
  forenames: "Tom",
  surname: "",
  dateOfBirth: "",
  gender: "",
  niNumber: "",
  memberRef: 0,
};

jest.mock("react-redux", () => {
  return {
    useSelector: () => ({
      loading: "succeeded",
      awsDetails: null,
      error: null,
      memberDetails,
    }),
    useDispatch: () => mockDispatch,
  };
});

describe("<Dashboard />", () => {
  it("should render component without crash", () => {
    const { getByTestId } = render(<Dashboard />);

    const dashboardSection = getByTestId("dashboard-section");
    expect(dashboardSection).toBeInTheDocument();

    const pageHeader = screen.getByRole("heading", { level: 1 });
    expect(pageHeader).toHaveTextContent("Tom's pension dashboard");
  });
});
