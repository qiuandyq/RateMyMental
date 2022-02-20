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


function ProfessorNotes() {
    const [notes, setNotes] = useState("");
    const auth = getAuth();
    const [user] = useAuthState(auth);

    const updateNotes = async () =>{
        const profRef = doc(db, "users", user.uid);
        await updateDoc(profRef, {notes:notes});
    }

  return (
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
                multiline
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
    </Box>
  )
}

export default ProfessorNotes