import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js/auto";

import { Grid, Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";

import { db } from "./firebase";

function Insights({ ratingTrend }) {
  const [userData, setUserData] = useState();
  const auth = getAuth();
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
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
  }, [user, navigate]);

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
        <Grid item xs={7}>
          {userData && userData.role === "professor" ? (
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
          ) : (
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
          )}
        </Grid>
        <Grid item xs={5}>
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
                paddingTop: "10px",
              }}
            >
              Notes from your host
            </div>
            <Box>
              <Typography></Typography>
            </Box>
          </Box>
        </Grid>
        {/* <Grid item xs={12}>
                <Box
                style={{
                    minHeight: "30vh", 
                    backgroundColor:"#A9E1CB",
                    borderRadius:"10px"}}>
                <div style={{ 
                    textAlign: "center", 
                    fontSize: "30px", 
                    paddingTop:"10px"}}>Daily Article</div>
                </Box>
            </Grid>  */}
      </Grid>
    </Box>
  );
}

export default Insights;
