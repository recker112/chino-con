import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeConfig } from "./hooks/useThemeConfig";
import Router from "./Router";

export default function App() {
  const themeConfig = useThemeConfig();
  console.log("Theme config", themeConfig);

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      <span id="top-anchor" />
      <Router />
    </ThemeProvider>
  )
}