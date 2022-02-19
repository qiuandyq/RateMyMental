import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import HeadBrainEdited from "../HeadBrainEdited.png";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginPage = () => {
  const [login, setLogin] = useState(true);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const auth = getAuth();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  function sendLogin(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user);
        navigate("/Homepage");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  useEffect(() => {
    if (user) navigate("/Homepage");
  }, [user]);

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
              style={{ width: "600px", height: "600px", marginTop: "100px" }}
            />
            <Box mt={10} mr={10} ml={10}>
              <Typography
                align="center"
                style={{ fontSize: "3rem", marginTop: "20px", color: "white" }}
              >
                A mental check in for you and the ones that care about you.
              </Typography>
            </Box>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box mt={30} mr={10} ml={10}>
          {login ? (
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
                  error={error}
                  helperText={error ? "Login Failed!" : " "}
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
                    onClick={() => setLogin(false)}
                  >
                    Create Account
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12}>
                <Typography style={{ fontWeight: "bold", fontSize: "3rem" }}>
                  Create an Account
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ paddingTop: "10rem" }}>
                <Typography style={{ fontWeight: "500", fontSize: "1rem" }}>
                  Create an account to start sending your mental ratings
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="Email"
                  variant="standard"
                  onChange={(e) =>
                    setAccount({ ...account, email: e.target.value })
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
                    setAccount({ ...account, password: e.target.value })
                  }
                  error={error}
                  helperText={error ? "Sign Up Failed!" : " "}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => createUser(account.email, account.password)}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item xs={12} style={{ paddingTop: "10rem" }}>
                <Typography style={{ fontSize: "1rem" }}>
                  Have an Account?
                  <Button
                    variant="text"
                    style={{ textDecorationLine: "underline" }}
                    onClick={() => setLogin(true)}
                  >
                    Log In
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          )}
        </Box>
      </Grid>

    </Grid>
  );
};

export default LoginPage;
