import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { db } from "./firebase";
import { doc, updateDoc, arrayUnion} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import React,{useState} from 'react';

const FeelingRating = () => {

  const auth = getAuth();
  const [user] = useAuthState(auth);
  const[show,setShow]=useState(true);

  const sendRating = async (event) => {
    
    var userRef = doc(db, "users", user.uid);
    try{
      await updateDoc(userRef, {
          ratings: arrayUnion({ 
            rating: event.currentTarget.value,
            date: new Date().toString()
          }),
          
      });
      setShow(false);
      

    }
    catch(err){
      console.log(err);
    }

  };
  const reSubmit = async () =>{
    try{
      setShow(true);
    }
    catch(err){
      console.log(err)
    }
  };

  return (
    
    <div >
      {show?

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
            <div style={{ fontSize: "50px" }}>How are you feeling...</div>{" "}
          </Box>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography component={"span"}>
          <Box sx={{ textAlign: "center" }}>
            {" "}
            <div style={{ fontSize: "18px" }}>(1-bad, 9-great)</div>{" "}
          </Box>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            width: 300,
          }}
          mt={5}
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Button
                value = "1"
                onClick={ (value) => sendRating(value) }
                style={{
                  borderWidth: "2.8px",
                  minWidth: "90px",
                  minHeight: "90px",
                }}
                variant="outlined"
              >
                <div style={{ fontSize: "30px" }}>1</div>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                value = "2"
                onClick={ (value) => sendRating(value) }
                style={{
                  borderWidth: "2.8px",
                  minWidth: "90px",
                  minHeight: "90px",
                }}
                variant="outlined"
              >
                <div style={{ fontSize: "30px" }}>2</div>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                value = "3"
                onClick={ (value) => sendRating(value) }
                style={{
                  borderWidth: "2.8px",
                  minWidth: "90px",
                  minHeight: "90px",
                }}
                variant="outlined"
              >
                <div style={{ fontSize: "30px" }}>3</div>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                value = "4"
                onClick={ (value) => sendRating(value) }
                style={{
                  borderWidth: "2.8px",
                  minWidth: "90px",
                  minHeight: "90px",
                }}
                variant="outlined"
              >
                <div style={{ fontSize: "30px" }}>4</div>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                value = "5"
                onClick={ (value) => sendRating(value) }
                style={{
                  borderWidth: "2.8px",
                  minWidth: "90px",
                  minHeight: "90px",
                }}
                variant="outlined"
              >
                <div style={{ fontSize: "30px" }}>5</div>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                value = "6"
                onClick={ (value) => sendRating(value) }
                style={{
                  borderWidth: "2.8px",
                  minWidth: "90px",
                  minHeight: "90px",
                }}
                variant="outlined"
              >
                <div style={{ fontSize: "30px" }}>6</div>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                value = "7"
                onClick={ (value) => sendRating(value) }
                style={{
                  borderWidth: "2.8px",
                  minWidth: "90px",
                  minHeight: "90px",
                }}
                variant="outlined"
              >
                <div style={{ fontSize: "30px" }}>7</div>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                value = "8"
                onClick={ (value) => sendRating(value) }
                style={{
                  borderWidth: "2.8px",
                  minWidth: "90px",
                  minHeight: "90px",
                }}
                variant="outlined"
              >
                <div style={{ fontSize: "30px" }}>8</div>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                value = "9"
                onClick={ (value) => sendRating(value) }
                style={{
                  borderWidth: "2.8px",
                  minWidth: "90px",
                  minHeight: "90px",
                }}
                variant="outlined"
              >
                <div style={{ fontSize: "30px" }}>9</div>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      
    </Grid>
    :<Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography component={"span"}>
            <Box sx={{ textAlign: "center" }} mt={10}>
              {" "}
              <div style={{ fontSize: "50px" }}>Check-in sent</div>{" "}
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12} mt={3}>
          <Button 
              onClick={ () => reSubmit() }
              style={{
                borderWidth: "2.8px",
                minWidth: "90px",
                minHeight: "90px",
                textAlign:"center",
              }}
              variant="outlined"
            >
              <div style={{ fontSize: "30px" }}>Submit another rating</div>
            </Button>
        </Grid>
      
    </Grid>
  }</div>
    
  );
};

export default FeelingRating;
