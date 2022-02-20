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
import { textAlign } from "@mui/system";

const Profile = () => {

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

  const auth = getAuth();
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState();
  const parseDate = (date) => {
    const rateDate = new Date(date)
    const [month,day,year] = [rateDate.getMonth(),rateDate.getDate(),rateDate.getFullYear()]
    return `${month+1}/${day}/${year}`;
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
        <Box mt={10} >
          <Grid container direction="column" spacing={2} >
            <Grid item xs={12} ml={10}>
              <Typography style={{ fontSize: "75px", color:"black" }}>
                Hi {userData.firstName} {userData.lastName}
              </Typography>
            </Grid>
            <Grid item xs={12} style={{paddingTop:"0px",paddingLeft:"49px"}} ml={10} >
              <Typography style={{fontSize: ".95rem", color:"#5b5b5b"}}>
                Email: {userData.email}
              </Typography>
            </Grid>
            <Grid item xs={12} style={{paddingTop:"0px",paddingLeft:"49px"}} ml={10}>
              <Typography style={{ fontSize: ".95rem", color:"#5b5b5b"}}>
                Role: {userData.role}
              </Typography>
            </Grid>
            {userData.professors.length!==0 && 
              <Grid item xs={12} style={{paddingTop:"0px",paddingLeft:"49px"}} ml={10}>
                <Typography style={{ fontSize: ".95rem"}}>
                  Confidant:
                  {userData.professors &&
                    userData.professors.map((prof) => (
                      <>
                        {" "}
                        {prof.firstName} {prof.lastName}
                      </>
                    ))}
                </Typography>
              </Grid>
            } 
            {userData.students.length!==0 && 
              <Grid item xs={12} style={{paddingTop:"0px",paddingLeft:"49px"}} ml={10}>
              <Typography style={{ fontSize: ".95rem"}}>
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
            
            }
            <Grid item xs={12} >
              <Typography style={{ fontSize: "38px", color:"black", textAlign:"center",paddingReft:"49px"}}>
                Ratings:
                <Grid container ml={7}>
                {userData.ratings &&
                  userData.ratings.slice(0).reverse().map((rate) => (

                      <Grid item >
                        <Paper sx={{
                              borderRadius:"500px", 
                              margin:"28px",
                              padding:'30.25px',
                              border: `1px solid ${color[rate.rating]}` ,
                              color:color[rate.rating],


                            }}>
                            <Typography component={"span"}>
                              <Box sx={{ textAlign: "center" }} >
                                {" "}
                                <div style={{ fontSize: "60px" }}>
                                  {rate.rating}
                                </div>{" "}
                              </Box>
                            </Typography>
                          
                           <Typography component={"span"}>
                              <Box sx={{ textAlign: "center" }} >
                                {" "}
                                <div style={{ fontSize: "28px" }}>
                                  {parseDate(rate.date)}
                                </div>{" "}
                              </Box>
                            </Typography>
                           
                        </Paper>
                      </Grid>  

                ))}
                </Grid>
                  
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
