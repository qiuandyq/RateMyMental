import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { db } from "./firebase";

const NoProfessors = () => {
  const [professors, setProfessors] = useState([]);
  const [selectedProf, setSelectProf] = useState("");
  const [studentInfo, setStudentInfo] = useState();
  const auth = getAuth();
  const [user] = useAuthState(auth);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectProf(event.target.value);
  };

  const handleAddProfessor = async () => {
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      professors: arrayUnion(selectedProf),
    });
    const profRef = doc(db, "users", selectedProf.profId);
    await updateDoc(profRef, {
      students: arrayUnion(studentInfo),
    });
    window.location.reload();
  };

  useEffect(() => {
    const fetchProfessors = async () => {
      const response = query(
        collection(db, "users"),
        where("role", "==", "professor")
      );

      const querySnapshot = await getDocs(response);
      querySnapshot.forEach((doc) => {
        setProfessors((professors) => [
          ...professors,
          { profId: doc.id, data: doc.data() },
        ]);
      });
    };
    const getStudentInfo = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setStudentInfo({ stuId: user.uid, data: docSnap.data() });
      } else {
        console.log("No such document!");
      }
    };

    getStudentInfo();
    fetchProfessors();
  }, []);

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
            Welcome to RateMyMental!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography style={{ fontSize: "1.5rem" }}>
            To get started please add your professor!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <FormControl style={{ minWidth: 300 }}>
                <InputLabel id="selectProf">Select Professor</InputLabel>
                <Select
                  id="selectProf"
                  value={selectedProf}
                  label="Select Professor"
                  onChange={(e) => handleChange(e)}
                >
                  {professors.length !== 0 &&
                    professors.map((prof) => (
                      <MenuItem value={prof}>
                        {prof.data.firstName} {prof.data.lastName}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ paddingTop: "2rem" }}>
            <Button variant="outlined" onClick={() => handleAddProfessor()}>
              Add Professor
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NoProfessors;
