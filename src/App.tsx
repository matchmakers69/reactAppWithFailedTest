import { Auth } from "aws-amplify";
import { CssBaseline } from "@mui/material";
import { AlertContextProvider } from "context/AlertContext";
import { AwsLoginContextProvider } from "context/AwsLoginContext";
import AppThemeProvider from "context/ThemeModeContext";
import awsExports from "./aws-exports";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "routes/AppRoutes";

Auth.configure(awsExports);

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <AppThemeProvider>
        <CssBaseline />
        <Router>
          <AwsLoginContextProvider>
            <AlertContextProvider>
              <AppRoutes />
            </AlertContextProvider>
          </AwsLoginContextProvider>
        </Router>
      </AppThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
