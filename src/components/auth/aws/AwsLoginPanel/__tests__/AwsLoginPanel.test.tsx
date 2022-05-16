import React from "react";
import "@testing-library/jest-dom";
import { act, fireEvent, waitFor } from "@testing-library/react";
import { Auth } from "aws-amplify";
import { render, screen } from "../../../../../config/jest/test-utils";
import { AlertContext, IAlertContext } from "../../../../../context/AlertContext";
import AwsLoginPanel from "../index";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedNavigate,
}));

const mockAlertContext: IAlertContext = {
  alertMessages: [],
  addAlertMessage: jest.fn(),
  removeAlertMessage: jest.fn(),
  removeAllMessages: jest.fn(),
};

const MockAlertContextProvider: React.FC = (props) => {
  return <AlertContext.Provider value={mockAlertContext}>{props.children}</AlertContext.Provider>;
};

const loginUserAs = (username: string, password: string) => {
  const usernameInput = screen.getByTestId("username");
  act(() => {
    fireEvent.input(usernameInput, { target: { value: username } });
  });

  const passwordInput = screen.getByTestId("password");
  act(() => {
    fireEvent.input(passwordInput, { target: { value: password } });
  });

  const submitButton = screen.getByTestId("submitButton");
  act(() => {
    fireEvent.submit(submitButton, { name: "save" });
  });
};

const changePassword = (newPassword: string, confirmPassword: string) => {
  const passwordInput = screen.getByTestId("password");
  act(() => {
    fireEvent.input(passwordInput, { target: { value: newPassword } });
  });

  const confirmPasswordInput = screen.getByTestId("confirmPassword");
  act(() => {
    fireEvent.input(confirmPasswordInput, { target: { value: confirmPassword } });
  });

  const submitButton = screen.getByTestId("submitButton");
  act(() => {
    fireEvent.submit(submitButton);
  });
};

describe("AwsLoginPanel test suite", () => {
  const TestSubject = () => (
    <MockAlertContextProvider>
      <AwsLoginPanel />
    </MockAlertContextProvider>
  );

  it("should show AwsSignIn by default", () => {
    act(() => {
      render(<TestSubject />);
    });

    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  it("should clear existing alerts after login", async () => {
    Auth.signIn = jest.fn().mockImplementation(() => {
      return { challengeName: undefined };
    });

    act(() => {
      render(<TestSubject />);
    });

    loginUserAs("anyUsername", "anyPassword");

    await waitFor(() => {
      expect(mockAlertContext.removeAllMessages).toBeCalledTimes(1);
    });
  });

  it("should add success alert after login", async () => {
    Auth.signIn = jest.fn().mockImplementation(() => {
      return { challengeName: undefined };
    });

    act(() => {
      render(<TestSubject />);
    });

    loginUserAs("anyUsername", "anyPassword");

    await waitFor(() => {
      expect(mockAlertContext.addAlertMessage).toBeCalledWith(
        "success",
        "You've logged in successfully!",
      );
    });
  });

  it("should goto dashboard after login", async () => {
    Auth.signIn = jest.fn().mockImplementation(() => {
      return { challengeName: undefined };
    });

    act(() => {
      render(<TestSubject />);
    });

    loginUserAs("anyUsername", "anyPassword");

    await waitFor(() => {
      expect(mockedNavigate).toBeCalledWith("/dashboard");
    });
  });

  it("should force password change", async () => {
    Auth.signIn = jest.fn().mockImplementation(() => {
      return { challengeName: "NEW_PASSWORD_REQUIRED" };
    });

    act(() => {
      render(<TestSubject />);
    });

    loginUserAs("anyUsername", "anyPassword");

    await waitFor(() => {
      const titleElement = screen.getByText(/Your password has expired/);
      expect(titleElement).toBeInTheDocument();
    });
  });

  it("should add success alert after password change", async () => {
    Auth.signIn = jest.fn().mockImplementation(() => {
      return { challengeName: "NEW_PASSWORD_REQUIRED" };
    });

    Auth.completeNewPassword = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        username: "anyUsername",
      });
    });

    act(() => {
      render(<TestSubject />);
    });

    loginUserAs("anyUsername", "anyPassword");

    await waitFor(() => {
      const titleElement = screen.getByText(/Your password has expired/);
      expect(titleElement).toBeInTheDocument();
    });

    changePassword("Hello01!", "Hello01!");

    await waitFor(() => {
      expect(mockAlertContext.addAlertMessage).toBeCalledWith(
        "success",
        "You've successfully reset your password!",
      );
    });
  });

  it("should error when challengeName unsupported", async () => {
    Auth.signIn = jest.fn().mockImplementation(() => {
      return { challengeName: "UNSUPPORTED_CHALLENGE_NAME" };
    });

    act(() => {
      render(<TestSubject />);
    });

    loginUserAs("anyUsername", "anyPassword");

    await waitFor(() => {
      const content = screen.getByText(/Unsupported login challenge: UNSUPPORTED_CHALLENGE_NAME/);
      expect(content).toBeInTheDocument();
    });
  });
});
