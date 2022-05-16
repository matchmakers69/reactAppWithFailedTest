import { createContext, FC, useContext } from "react";
import { getThemeByMode } from "theme/theme";
import { ThemeProvider } from "@mui/material/styles";

const ThemeContextMode = createContext(null);

export const useThemeContextMode = () => {
  const context = useContext(ThemeContextMode);
  if (!context) {
    throw new Error("Make sure to wrap by Provider");
  }
  return context;
};

const AppThemeProvider: FC = ({ children }) => {
  // const [themeMode, setThemeMode] = useState<ThemeMode>("default");

  const theme = getThemeByMode("default");
  return (
    <ThemeContextMode.Provider value={null}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContextMode.Provider>
  );
};

export default AppThemeProvider;
