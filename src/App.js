import Router from "./router";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export default function App() {
  const [prefersDarkMode, setPrefersDarkMode] = React.useState(true);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light"
        }
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed>
        <Router {...{ prefersDarkMode, setPrefersDarkMode }} />
      </Container>
    </ThemeProvider>
  );
}
