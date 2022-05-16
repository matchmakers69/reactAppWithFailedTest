/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { AlertColor } from "@mui/material";
import { createBrowserHistory } from "history";

type IAlertMessage = {
  severity: AlertColor;
  message: string;
};

export type IAlertContext = {
  alertMessages: Array<IAlertMessage>;
  addAlertMessage: (severity: AlertColor, message: string) => void;
  removeAlertMessage: (severity: AlertColor, message: string) => void;
  removeAllMessages: () => void;
};

export const AlertContext = React.createContext<IAlertContext>({
  alertMessages: [],
  addAlertMessage: (severity: AlertColor, message: string) => {},
  removeAlertMessage: (severity: AlertColor, message: string) => {},
  removeAllMessages: () => {},
});

export const AlertContextProvider = (props: { children: JSX.Element }) => {
  const [alertMessages, setAlertMessages] = useState<Array<IAlertMessage>>([]);

  const addAlertMessageHandler = (severity: AlertColor, message: string) => {
    if (!alertMessages.some((alert) => alert.message === message && alert.severity === severity)) {
      setAlertMessages((alertMessages) => [...alertMessages, { severity, message }]);
    }
  };

  const removeAlertMessageHandler = (severity: AlertColor, message: string) => {
    setAlertMessages((alertMessages) =>
      alertMessages.filter((alert) => !(alert.severity === severity && alert.message === message)),
    );
  };

  const removeAllMessagesHandler = () => {
    setAlertMessages([]);
  };

  const context = {
    alertMessages,
    addAlertMessage: addAlertMessageHandler,
    removeAlertMessage: removeAlertMessageHandler,
    removeAllMessages: removeAllMessagesHandler,
  };

  // Remove all messages when the user uses their browser back button
  const history = createBrowserHistory();

  // eslint-disable-next-line no-empty-pattern
  history.listen(({}) => {
    removeAllMessagesHandler();
  });

  return <AlertContext.Provider value={context}>{props.children}</AlertContext.Provider>;
};
