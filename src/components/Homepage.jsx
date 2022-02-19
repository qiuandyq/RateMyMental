import { useEffect } from "react";

import AppBar from "./Appbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import About from "./About";

const Homepage = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  return (
    <div>
      <AppBar />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography component={"span"}>
            <Box sx={{ textAlign: "center" }} mt={10}>
              {" "}
              <div style={{ fontSize: "50px" }}>
                How are you feeling...
              </div>{" "}
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component={"span"}>
            <Box sx={{ textAlign: "center" }}>
              {" "}
              <div style={{ fontSize: "18px" }}>(1-bad, 9-great)</div>{" "}
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              width: 300,
            }}
            mt={5}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Button
                  style={{
                    borderWidth: "2.8px",
                    minWidth: "90px",
                    minHeight: "90px",
                  }}
                  variant="outlined"
                >
                  <div style={{ fontSize: "30px" }}>1</div>
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  style={{
                    borderWidth: "2.8px",
                    minWidth: "90px",
                    minHeight: "90px",
                  }}
                  variant="outlined"
                >
                  <div style={{ fontSize: "30px" }}>2</div>
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  style={{
                    borderWidth: "2.8px",
                    minWidth: "90px",
                    minHeight: "90px",
                  }}
                  variant="outlined"
                >
                  <div style={{ fontSize: "30px" }}>3</div>
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  style={{
                    borderWidth: "2.8px",
                    minWidth: "90px",
                    minHeight: "90px",
                  }}
                  variant="outlined"
                >
                  <div style={{ fontSize: "30px" }}>4</div>
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  style={{
                    borderWidth: "2.8px",
                    minWidth: "90px",
                    minHeight: "90px",
                  }}
                  variant="outlined"
                >
                  <div style={{ fontSize: "30px" }}>5</div>
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  style={{
                    borderWidth: "2.8px",
                    minWidth: "90px",
                    minHeight: "90px",
                  }}
                  variant="outlined"
                >
                  <div style={{ fontSize: "30px" }}>6</div>
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  style={{
                    borderWidth: "2.8px",
                    minWidth: "90px",
                    minHeight: "90px",
                  }}
                  variant="outlined"
                >
                  <div style={{ fontSize: "30px" }}>7</div>
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  style={{
                    borderWidth: "2.8px",
                    minWidth: "90px",
                    minHeight: "90px",
                  }}
                  variant="outlined"
                >
                  <div style={{ fontSize: "30px" }}>8</div>
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  style={{
                    borderWidth: "2.8px",
                    minWidth: "90px",
                    minHeight: "90px",
                  }}
                  variant="outlined"
                >
                  <div style={{ fontSize: "30px" }}>9</div>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <About/>
    </div>
  );
};
export default Homepage;
