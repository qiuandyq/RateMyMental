import { Grid, Box, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
   <Grid container 
   direction="row"
   style={{marginTop: "100px"}}>
       <Box
       display="flex"
       alignItems="center"
       justifyContent="center"
       sx={{width: "100%", height: "40vh", backgroundColor:"#83d7b0"}}>
         <Typography
         textAlign="center"
         style={{width: "60%", height: "100%", color: "#f2f2f2", marginTop: "100px"}}>
           <div style ={{fontSize:"40px", letterSpacing: "1px"}}>A tool to simplify mental health check-ins</div>
           <p style ={{fontSize:"24px"}}> RateMyMental provides a simplified and virtual approach to mental health check ins.
                                           User accounts are connected to healthcare professionals, professors, friends or family whom receive notifications
                                           on a self-determined basis.For those who feel uncomfortable speaking out or reaching out to peers, RateMyMental gives 
                                           them the tools to notify someone with the click of a button.
                                          </p>
         </Typography>
       </Box>
   </Grid>
  )
}

export default About