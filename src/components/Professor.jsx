import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { db } from "./firebase";

const Professor = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchUser();
  }, [user]);

  console.log("userData", userData);

  return (
    <Box sx={{ textAlign: "center" }} mt={10}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item xs={12}>
          <Typography style={{ fontSize: "3rem" }}>
            Welcome Professor
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography style={{ fontSize: "1.5rem" }}>
            Here are your students mental ratings for today!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Professor;
