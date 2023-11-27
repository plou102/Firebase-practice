import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { darkTheme, lightTheme } from "../theme/Theme";
import { ThemeProvider as StyledProvider } from "styled-components";

interface themeProps {
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
}

const ThemeContext = createContext<themeProps>({
  mode: "",
  setMode: () => "",
});

function useTheme() {
  const context = useContext(ThemeContext);
  const { mode, setMode } = context;

  const toggleTheme = useCallback(() => {
    mode === "light" ? setMode("dark") : setMode("light");
  }, [mode]);

  return [mode, toggleTheme];
}

function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState("light");
  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
}

export { useTheme, ThemeProvider };
