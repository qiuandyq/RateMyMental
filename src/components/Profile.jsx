import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { db } from "./firebase";
import Appbar from "./Appbar";

const Profile = () => {
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

  return (
    <div>
      <Appbar />
      {userData ? (
        <Box mt={10} mr={10} ml={10}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <Typography style={{ fontSize: "3rem" }}>
                Hi {userData.firstName} {userData.lastName}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography style={{ fontSize: "1rem" }}>
                Email: {userData.email}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography style={{ fontSize: "1rem" }}>
                Role: {userData.role}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box mt={10} mr={10} ml={10}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <Typography style={{ fontSize: "3rem" }}>Loading...</Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default Profile;
