import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

import AppThemeProvider from "../../context/ThemeModeContext";

const AllTheProviders = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <AppThemeProvider>
        <CssBaseline />
        <BrowserRouter>{children}</BrowserRouter>
      </AppThemeProvider>
    </StyledEngineProvider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line import/export
export * from "@testing-library/react";

// eslint-disable-next-line import/export
export { customRender as render };
