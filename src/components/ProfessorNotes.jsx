import React, {useState, useEffect} from 'react'

import {
    doc,
    updateDoc,
  } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "./firebase";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


function ProfessorNotes() {
    const [notes, setNotes] = useState("");
    const auth = getAuth();
    const [user] = useAuthState(auth);
    const [show, setShow] = useState(true);

    const updateNotes = async () =>{
        const profRef = doc(db, "users", user.uid);
        await updateDoc(profRef, {notes:notes});
        setShow(false);
    }

    const reSubmit = async () => {
      try {
        setShow(true);
      } catch (err) {
        console.log(err);
      }
    };

  return (
    <div>
      {show ? (
    <Box>
        <Grid item xs={12} style={{ paddingTop: "2rem" }}>
        </Grid>
        <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center">
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="500px">
                <textarea
                id="profNotes"
                multiline="true"
                rows={8}
                placeholder="Send a note to your student..."
                style={{width:"500px", 
                border:"3px solid #83d7b0", 
                borderRadius: "5px", 
                padding:"10px", 
                marginTop:"20px"}}
                onChange = {(e)=> setNotes(e.target.value)}>
                </textarea>
                <Button
                onClick={() => updateNotes()}>
                    Send Message
                </Button>
            </Box>
        </Grid>
    </Box>) : (
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
                <div style={{ fontSize: "50px" }}>Note sent to student(s)</div>{" "}
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12} mt={3}>
            <Button
              onClick={() => reSubmit()}
              style={{
                borderWidth: "2.8px",
                minWidth: "90px",
                minHeight: "90px",
                textAlign: "center",
              }}
              variant="outlined"
            >
              <div style={{ fontSize: "30px" }}>Send another note?</div>
            </Button>
          </Grid>
        </Grid>
    )};
    </div>
  )
}

export default ProfessorNotes