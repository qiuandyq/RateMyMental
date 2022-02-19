import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Appbar from "./components/Appbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffe599",
    },
    background: {
      default: "#f3f6f4",
    },
  },
  typography: {
    fontFamily: "Raleway",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Appbar></Appbar>
    </ThemeProvider>
  );
}

export default App;
