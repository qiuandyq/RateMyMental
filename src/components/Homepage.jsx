import { useEffect,useState} from "react";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { db } from "./firebase";
import AppBar from "./Appbar";
import Insights from "./Insights";
import About from "./About";
import NoProfessors from "./NoProfessors";
import FeelingRating from "./FeelingRating";
import Professor from "./Professor";

const Homepage = () => {
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
    <div>
      <AppBar />
      {userData ? (
        <>
          {userData && userData.role === "professor" ? (
            <Professor />
          ) : (
            <>
              {userData && userData.professors.length !== 0 ? (
                <>
                <FeelingRating />
                <Insights/>
                </>
                
              ) : (
                <NoProfessors />
              )}
            </>
          )}
        </>
      ) : (
        <Box sx={{ textAlign: "center" }} mt={10}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <Typography style={{ fontSize: "3rem" }}> loading </Typography>
          </Grid>
        </Box>
      )}
      <About />
    </div>
  );
};
export default Homepage;