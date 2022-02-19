import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


// import Appbar from "./components/Appbar";
import LoginPage from "./components/LoginPage";
import Homepage from "./components/Homepage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#78C6A3",
      dark: "#49e7ae",
    },
    background: {
      default: "#f3f6f4",
    },
  },
  typography: {
    fontFamily: "Raleway",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: "20px",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Appbar /> */}
      {/* <LoginPage />  */}
      {/*<Homepage/>*/}
    </ThemeProvider>
  );
}

export default App;
