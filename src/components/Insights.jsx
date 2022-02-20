import React, { useEffect, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "./firebase";

function Insights({ ratingTrend }) {
  const [profNotes, setProfNotes] = useState("");
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserData(docSnap.data());
        const profDoc = await getDoc(
          doc(db, "users", userData.professors[0].profId)
        );
        setProfNotes(profDoc.data().notes);
      } else {
        console.log("No such document!");
      }
    };
    fetchUser();
  }, [user]);

  return (
    <Box
      style={{
        marginTop: "10%",
        color: "#5b5b5b",
      }}
      mr={3}
      ml={3}
    >
      <Grid container spacing={1} direction="row">
        <Grid item xs={12}>
          <Box style={{ minHeight: "70px" }}>
            <div
              style={{
                textAlign: "center",
                fontSize: "38px",
                letterSpacing: "1px",
                padding: "20px",
              }}
            >
              Insights
            </div>
          </Box>
        </Grid>
        {userData && userData.role === "professor" ? (
          <Grid item xs={12}>
            <Box
              style={{
                minHeight: "40vh",
                padding: "30px",
                backgroundColor: "#A9E1CB",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  paddingTop: "10px",
                }}
              >
                Ratings of Students for Today
              </div>
              <Box height="250px">
                <Bar
                  options={{
                    maintainAspectRatio: false,
                  }}
                  data={{
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
                    datasets: [
                      {
                        id: 1,
                        label: "",
                        data: [
                          ratingTrend[1],
                          ratingTrend[2],
                          ratingTrend[3],
                          ratingTrend[4],
                          ratingTrend[5],
                          ratingTrend[6],
                          ratingTrend[7],
                          ratingTrend[8],
                          ratingTrend[9],
                        ],
                      },
                    ],
                  }}
                />
              </Box>
            </Box>
          </Grid>
        ) : (
          <Grid item xs={8.5}>
            <Box
              style={{
                minHeight: "40vh",
                padding: "30px",
                backgroundColor: "#A9E1CB",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  paddingTop: "10px",
                }}
              >
                Trend of your Ratings for the Week
              </div>
              <Box height="250px">
                <Line
                  options={{
                    maintainAspectRatio: false,
                  }}
                  data={{
                    labels: [
                      "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                    datasets: [
                      {
                        id: 1,
                        label: "",
                        data: [1, 5, 4, 7, 3, 2, 1],
                      },
                    ],
                  }}
                />
              </Box>
            </Box>
          </Grid>
        )}
        {userData && userData.role === "student" && (
          <Grid item xs={3.5}>
            <Box
              style={{
                minHeight: "40vh",
                backgroundColor: "#A8DFCA",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  paddingTop: "50px",
                }}
              >
                <Typography style={{ fontSize: "40px" }}>
                  Notes from the host:
                </Typography>
                <Grid
                  container
                  display="columns"
                  alignItems="center"
                  justifyContents="center"
                >
                  <Grid
                    display="columns"
                    alignItems="center"
                    justifyContents="center"
                    width="100%"
                    overflowWrap="break-word"
                  >
                    <Typography style={{ fontSize: "24px", marginTop: "50px" }}>
                      " {profNotes} "
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <Box>
                <Typography></Typography>
              </Box>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default Insights;
