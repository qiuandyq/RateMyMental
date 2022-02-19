import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginPage = () => {
  return (
    <Grid container direction="row">
      <Grid item xs={6}>
        <Box
          sx={{
            height: "100vh",
            backgroundColor: "primary.main",
          }}
        ></Box>
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
              <TextField id="standard-basic" label="Email" variant="standard" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained">
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
