import { render, fireEvent, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { FormProvider, useForm } from "react-hook-form";
import { getThemeByMode } from "theme/theme";
import PasswordTextField from "..";

const theme = getThemeByMode("default");
const INITIAL_PROPS = {
  name: "password",
};
// React hook form mock
jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useFormContext: () => ({
    handleSubmit: () => jest.fn(),
    getValues: () => jest.fn(),
    formState: { errors: {} },
    register: () => INITIAL_PROPS,
  }),
}));

const Wrapper: React.FC = ({ children }) => {
  const methods = useForm();
  return (
    <ThemeProvider theme={theme}>
      <FormProvider {...methods}>
        <form>{children}</form>
      </FormProvider>
    </ThemeProvider>
  );
};

describe("<PasswordTextField />", () => {
  it("should mask password by default", () => {
    render(<PasswordTextField {...INITIAL_PROPS} />, {
      wrapper: Wrapper,
    });
    expect(screen.getByTestId("password")).toHaveAttribute("type", "password");
  });

  it("should display password in the plain text when button clicked", () => {
    render(<PasswordTextField {...INITIAL_PROPS} />, {
      wrapper: Wrapper,
    });
    expect(screen.getByTestId("password")).toHaveAttribute("type", "password");
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByTestId("password")).toHaveAttribute("type", "text");
  });
});
