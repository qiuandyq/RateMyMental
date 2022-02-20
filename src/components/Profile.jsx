import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { db } from "./firebase";
import Appbar from "./Appbar";

const Profile = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState();
  const parseDate = (date) => {
    const rateDate = new Date(date)
    const [month,day,year] = [rateDate.getMonth(),rateDate.getDate(),rateDate.getFullYear()]
    return `${month+1} ${day} ${year}`;
  }
  

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
            <Grid item xs={12}>
              <Typography style={{ fontSize: "1rem" }}>
                Ratings:
                <Grid container>
                {userData.ratings &&
                  userData.ratings.map((rate) => (

                      <Grid item>
                        <Paper sx={{
                              borderRadius:"500px", 
                              margin:"28px",
                              padding:'81.25px'
                            }}>
                            <Typography >
                              {rate.rating}
                            </Typography>
                           
                           {parseDate(rate.date)}
                           
                           
                        </Paper>
                      </Grid>  

                ))}
                </Grid>
                    {/* // <Typography> */}
                    {/* //   Date: {rate.date} Rating: {rate.rating} */}
                    {/* // </Typography> */}
                  
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography style={{ fontSize: "1rem" }}>
                Professors:
                {userData.professors &&
                  userData.professors.map((prof) => (
                    <>
                      {" "}
                      {prof.firstName} {prof.lastName}
                    </>
                  ))}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography style={{ fontSize: "1rem" }}>
                Students:
                {userData.students &&
                  userData.students.map((stu) => (
                    <>
                      {" "}
                      {stu.firstName} {stu.lastName}
                    </>
                  ))}
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
