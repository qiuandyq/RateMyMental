import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/LoginPage");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              style={{ fontWeight: "bold", fontSize: "1.8rem" }}
              sx={{ flexGrow: 1 }}
            >
              RateMyMental
            </Typography>
            <Button
              color="inherit"
              variant="outlined"
              onClick={() => handleSignOut()}
            >
              <Typography style={{ fontWeight: "600" }}>Sign Out</Typography>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Appbar;
