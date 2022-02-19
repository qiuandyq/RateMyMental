import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import HeadBrainEdited from "../HeadBrainEdited.png";
import {
  getAuth,
  // createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const auth = getAuth();

  function sendLogin(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", errorCode, errorMessage);
      });
  }

  return (
    <Grid container direction="row">
      <Grid item xs={6}>
        <Box
          sx={{
            height: "100vh",
            backgroundColor: "primary.main",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={HeadBrainEdited}
              alt="head logo"
              style={{ width: "300px", height: "300px", marginTop: "100px" }}
            />
            <Typography style={{ fontSize: "22px", marginTop: "20px" }}>
              A mental check in for you and the ones that care about you.
            </Typography>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box mt={30} mr={10} ml={10}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12}>
              <Typography style={{ fontWeight: "bold", fontSize: "3rem" }}>
                RateMyMental
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: "10rem" }}>
              <Typography style={{ fontWeight: "500", fontSize: "1.5rem" }}>
                Welcome to RateMyMental
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Email"
                variant="standard"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="Password"
                variant="standard"
                type="password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => sendLogin(values.email, values.password)}
              >
                Sign In
              </Button>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: "10rem" }}>
              <Typography style={{ fontSize: "1rem" }}>
                New to RateMyMental?
                <Button
                  variant="text"
                  style={{ textDecorationLine: "underline" }}
                >
                  Create Account
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
