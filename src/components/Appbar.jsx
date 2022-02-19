import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Appbar = () => {
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
            <Button color="inherit" variant="outlined">
              <Typography style={{ fontWeight: "600" }}>Login</Typography>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Appbar;
