import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { db } from "./firebase";
import ProfessorNotes from "./ProfessorNotes";

const Professor = ({ setRatingTrend }) => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState();
  const [ratings, setRatings] = useState([]);

  const color = {
    1: "#D94C4C",
    2: "#D97E4C",
    3: "#D99B4C",
    4: "#D9C84C",
    5: "#D9D54C",
    6: "#BED94C",
    7: "#A8D94C",
    8: "#8FD94C",
    9: "#57D94C",
  };

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

  useEffect(() => {
    if (userData) {
      userData.students.forEach(async (stu) => {
        const docRef = doc(db, "users", stu.stuId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setRatings((ratings) => [
            ...ratings,
            { id: stu.stuId, ratings: data.ratings },
          ]);
          setRatingTrend((prev) => ({
            ...prev,
            [data.ratings[data.ratings.length - 1].rating]:
              prev[data.ratings[data.ratings.length - 1].rating] + 1,
          }));
        } else {
          console.log("No such document!");
        }
      });
    }
  }, [userData]);

  const findRating = (stuId) => {
    let rating = 0;
    let date = "";
    ratings.find((student) => {
      if (student.ratings.length > 0 && student.id === stuId) {
        rating = student.ratings[student.ratings.length - 1].rating;
        date = new Date(
          student.ratings[student.ratings.length - 1].date
        ).toDateString();
      }
    });
    return (
      <>
        <Paper
          sx={{
            backgroundColor: color[rating],
            p: "5px",
          }}
        >
          {rating ? rating : "no ratings found"}
        </Paper>
        (last updated: {date ? date : "not available"})
      </>
    );
  };

  return (
    <Box sx={{ textAlign: "center" }} mt={10} mr={15} ml={15}>
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
        {userData && userData.students ? (
          <>
            <Grid item xs={12}>
              <Typography style={{ fontSize: "1.5rem" }}>
                Here are your students mental ratings for today!
              </Typography>
            </Grid>
            <Grid
              container
              item
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={5}
            >
              {userData.students.map((stu) => (
                <Grid item xs={4}>
                  <Typography>
                    {stu.firstName + " " + stu.lastName}:{" "}
                    {findRating(stu.stuId)}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <Typography style={{ fontSize: "1.5rem" }}>
              Unfortunately you have no students at the moment. Let your
              students know to add your as a professor!
            </Typography>
          </Grid>
        )}
      </Grid>
      <ProfessorNotes/>
    </Box>
  );
};

export default Professor;
