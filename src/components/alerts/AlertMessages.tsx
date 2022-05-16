import { useContext } from "react";
import { Alert, Button, Slide, useTheme } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import { AlertContext } from "context/AlertContext";
import * as S from "./AlertMessages.styled";

const AlertMessages = () => {
  const alertContext = useContext(AlertContext);

  const theme = useTheme();

  return (
    <S.AlertMessagesWrapper>
      {alertContext.alertMessages.map((alertMessage) => (
        <Slide
          key={alertMessage.message}
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          timeout={600}
        >
          <Alert
            icon={
              alertMessage.severity === "success" ? (
                <CheckCircleOutlineIcon style={{ color: theme.palette.text.primary }} />
              ) : null
            }
            color={alertMessage.severity}
            variant={alertMessage.severity === "error" ? "filled" : "standard"}
            action={
              <Button
                disableElevation
                sx={{
                  "&:hover": { backgroundColor: theme.palette[alertMessage.severity].main },
                  backgroundColor: theme.palette[alertMessage.severity].main,
                }}
                size="small"
                endIcon={
                  <CloseIcon style={{ color: theme.palette[alertMessage.severity].contrastText }} />
                }
                onClick={() =>
                  alertContext.removeAlertMessage(alertMessage.severity, alertMessage.message)
                }
                style={{ color: theme.palette[alertMessage.severity].contrastText }}
              >
                CLOSE
              </Button>
            }
            severity={alertMessage.severity}
            sx={{ width: "100%", backgroundColor: theme.palette[alertMessage.severity].main }}
          >
            {alertMessage.message}
          </Alert>
        </Slide>
      ))}
    </S.AlertMessagesWrapper>
  );
};

export { AlertMessages };
