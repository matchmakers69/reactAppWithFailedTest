import "@testing-library/jest-dom";
import { act, fireEvent, waitFor } from "@testing-library/react";
import { Auth } from "aws-amplify";
import { render, screen } from "../../../../../../config/jest/test-utils";
import { AwsUser } from "../../../AwsTypes/AwsUser";
import AwsCompleteNewPassword from "../index";
import { AlertContext, IAlertContext } from "../../../../../../context/AlertContext";
import React from "react";

const validPassword = "Hello01!";

const expectedAwsUser = {} as AwsUser;

const mockOnAwsChallengeChanged = jest.fn();

const mockAlertContext: IAlertContext = {
  alertMessages: [],
  addAlertMessage: jest.fn(),
  removeAlertMessage: jest.fn(),
  removeAllMessages: jest.fn(),
};

const MockAlertContextProvider: React.FC = (props) => {
  return <AlertContext.Provider value={mockAlertContext}>{props.children}</AlertContext.Provider>;
};

const setPasswords = (newPassword: string, confirmPassword: string) => {
  const passwordInput = screen.getByTestId("password");
  act(() => {
    fireEvent.input(passwordInput, { target: { value: newPassword } });
  });

  const confirmPasswordInput = screen.getByTestId("confirmPassword");
  act(() => {
    fireEvent.input(confirmPasswordInput, { target: { value: confirmPassword } });
  });
};

const setPasswordsAndWaitForSubmitButtonToEnable = async (
  newPassword: string,
  confirmPassword: string,
) => {
  setPasswords(newPassword, confirmPassword);

  const submitButton = screen.getByTestId("submitButton");
  await waitFor(() => expect(submitButton).toBeEnabled());
};

const setPasswordsAndSubmit = async (newPassword: string, confirmPassword: string) => {
  await setPasswordsAndWaitForSubmitButtonToEnable(newPassword, confirmPassword);

  const submitButton = screen.getByTestId("submitButton");
  act(() => {
    fireEvent.submit(submitButton);
  });
};

// TODO - Add tests to verify password-rules when functionality confirmed?

describe("AwsCompleteNewPassword test suite", () => {
  const TestSubject = () => (
    <MockAlertContextProvider>
      <AwsCompleteNewPassword
        awsUser={expectedAwsUser}
        onAwsChallengeChanged={mockOnAwsChallengeChanged}
      />
    </MockAlertContextProvider>
  );

  it("should disable submit button when password missing", async () => {
    act(() => {
      render(<TestSubject />);
    });

    setPasswords("", "anything");

    const submitButton = screen.getByTestId("submitButton");
    await waitFor(() => expect(submitButton).toBeDisabled());
  });

  it("should display validation error when password invalid", async () => {
    act(() => {
      render(<TestSubject />);
    });

    setPasswords("AA00!!", "");

    await waitFor(() =>
      expect(screen.getByText(/Must contain at least 1 lowercase letter/)).toBeInTheDocument(),
    );
  });

  it("should enable submit button when valid passwords entered", async () => {
    act(() => {
      render(<TestSubject />);
    });

    setPasswords(validPassword, validPassword);

    const submitButton = screen.getByTestId("submitButton");
    await waitFor(() => expect(submitButton).toBeEnabled());
  });

  it("should disable submit button when confirm-password missing", async () => {
    act(() => {
      render(<TestSubject />);
    });

    await setPasswordsAndWaitForSubmitButtonToEnable(validPassword, validPassword);

    setPasswords("Hello01!", "");

    const submitButton = screen.getByTestId("submitButton");
    await waitFor(() => expect(submitButton).toBeDisabled());
  });

  it("should disable submit button when passwords do not match", async () => {
    act(() => {
      render(<TestSubject />);
    });

    await setPasswordsAndWaitForSubmitButtonToEnable(validPassword, validPassword);

    setPasswords(validPassword, "different");

    const submitButton = screen.getByTestId("submitButton");
    await waitFor(() => expect(submitButton).toBeDisabled());
  });

  it("should display validation error when passwords do not match", async () => {
    act(() => {
      render(<TestSubject />);
    });

    await setPasswordsAndWaitForSubmitButtonToEnable(validPassword, validPassword);

    setPasswords(validPassword, "different");

    await waitFor(() => expect(screen.getByText(/Passwords must match/)).toBeInTheDocument());
  });

  it("should use onAwsChallengeChanged() when finished", async () => {
    const expectedUser = {
      username: "anyUsername",
      challengeName: "none",
    };

    Auth.completeNewPassword = jest.fn().mockImplementation(() => {
      return Promise.resolve(expectedUser);
    });

    act(() => {
      render(<TestSubject />);
    });

    await setPasswordsAndSubmit(validPassword, validPassword);

    await waitFor(() => {
      expect(Auth.completeNewPassword).toBeCalledWith(expectedAwsUser, "Hello01!");
      expect(mockOnAwsChallengeChanged).toBeCalledWith(expectedUser);
    });
  });

  it("should add error alert when cannot save new password", async () => {
    Auth.completeNewPassword = jest.fn().mockImplementation(() => {
      return Promise.reject("Bang!");
    });

    act(() => {
      render(<TestSubject />);
    });

    await setPasswordsAndSubmit(validPassword, validPassword);

    await waitFor(() =>
      expect(mockAlertContext.addAlertMessage).toBeCalledWith("error", "Cannot save new password"),
    );
  });
});
