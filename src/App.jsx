import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, Navigate } from "react-router-dom";

// import Appbar from "./components/Appbar";
import LoginPage from "./components/LoginPage";
import Homepage from "./components/Homepage";
import Profile from "./components/Profile";

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
          boxShadow:"#4d4d4d",
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
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
      {/* <Appbar /> */}
      {/* <Homepage/> */}
    </ThemeProvider>
  );
}

export default App;
