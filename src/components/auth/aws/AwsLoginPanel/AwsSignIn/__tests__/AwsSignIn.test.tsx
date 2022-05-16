import "@testing-library/jest-dom";
import { act, fireEvent, waitFor } from "@testing-library/react";
import { Auth } from "aws-amplify";
import { render, screen } from "../../../../../../config/jest/test-utils";
import { AlertContext, IAlertContext } from "../../../../../../context/AlertContext";
import AwsSignIn from "../index";
import React from "react";

const mockAlertContext: IAlertContext = {
  alertMessages: [],
  addAlertMessage: jest.fn(),
  removeAlertMessage: jest.fn(),
  removeAllMessages: jest.fn(),
};

const MockAlertContextProvider: React.FC = (props) => {
  return <AlertContext.Provider value={mockAlertContext}>{props.children}</AlertContext.Provider>;
};

const mockOnAwsChallengeChanged = jest.fn();

const setFieldValues = (username: string, password: string) => {
  const usernameInput = screen.getByTestId("username");
  act(() => {
    fireEvent.input(usernameInput, { target: { value: username } });
  });

  const passwordInput = screen.getByTestId("password");
  act(() => {
    fireEvent.input(passwordInput, { target: { value: password } });
  });
};

const setFieldValuesAndWaitForSubmitButtonToEnable = async (username: string, password: string) => {
  setFieldValues(username, password);

  const submitButton = screen.getByTestId("submitButton");
  await waitFor(() => {
    expect(submitButton).toBeEnabled();
  });
};

const setFieldValuesAndSubmit = async (username: string, password: string) => {
  await setFieldValuesAndWaitForSubmitButtonToEnable(username, password);

  const submitButton = screen.getByTestId("submitButton");
  act(() => {
    fireEvent.submit(submitButton);
  });
};

describe("AwsSignIn test suite", () => {
  const TestSubject = () => (
    <MockAlertContextProvider>
      <AwsSignIn onAwsChallengeChanged={mockOnAwsChallengeChanged} />
    </MockAlertContextProvider>
  );

  it("should disable submit button when username missing", async () => {
    act(() => {
      render(<TestSubject />);
    });

    await setFieldValuesAndWaitForSubmitButtonToEnable("anyUsername", "anyPassword");

    setFieldValues("", "anyPassword");

    const submitButton = screen.getByTestId("submitButton");
    await waitFor(() => expect(submitButton).toBeDisabled());
  });

  it("should display validation error when username missing", async () => {
    act(() => {
      render(<TestSubject />);
    });

    await setFieldValuesAndWaitForSubmitButtonToEnable("anyUsername", "anyPassword");

    setFieldValues("", "anyPassword");

    await waitFor(() => expect(screen.getByText(/Username cannot be blank/)).toBeInTheDocument());
  });

  it("should disable submit button when password missing", async () => {
    act(() => {
      render(<TestSubject />);
    });

    await setFieldValuesAndWaitForSubmitButtonToEnable("anyUsername", "anyPassword");

    setFieldValues("anyUsername", "");

    const submitButton = screen.getByTestId("submitButton");
    await waitFor(() => expect(submitButton).toBeDisabled());
  });

  it("should display validation error when password missing", async () => {
    act(() => {
      render(<TestSubject />);
    });

    await setFieldValuesAndWaitForSubmitButtonToEnable("anyUsername", "anyPassword");

    setFieldValues("anyUsername", "");

    await waitFor(() => expect(screen.getByText(/Password cannot be blank/)).toBeInTheDocument());
  });

  it("should use onAwsChallengeChanged() when finished", async () => {
    const expectedUser = {
      username: "anyUsername",
      challengeName: "none",
    };

    Auth.signIn = jest.fn().mockImplementation(() => {
      return expectedUser;
    });

    act(() => {
      render(<TestSubject />);
    });

    await setFieldValuesAndSubmit("anyUsername", "anyPassword");

    await waitFor(() => expect(mockOnAwsChallengeChanged).toBeCalledWith(expectedUser));
  });

  it("should add error alert when wrong username or password used", async () => {
    Auth.signIn = jest.fn().mockImplementation(() => {
      return Promise.reject("Bang!");
    });

    act(() => {
      render(<TestSubject />);
    });

    await setFieldValuesAndSubmit("anyUsername", "anyPassword");

    await waitFor(() => {
      expect(mockAlertContext.addAlertMessage).toBeCalledWith(
        "error",
        "Incorrect username or password",
      );
    });
  });
});
