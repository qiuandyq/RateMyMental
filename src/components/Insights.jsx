import React from 'react';
import { Grid, Box, Typography} from '@mui/material';
import {Line } from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js/auto'

function Insights() {
  return (
    <Box
    style={{
        marginTop: "10%",
        marginLeft: "20px", 
        marginRight: "20px",
        color:"#5b5b5b"}}>
        <Grid container
        spacing={1}
        direction= {"row"}>
            <Grid item xs={12}>
                <Box
                style={{minHeight: "70px"}}>
                <div 
                style={{ 
                    textAlign:"center", 
                    fontSize:"38px", 
                    // textDecoration:"underline", 
                    letterSpacing:"1px", 
                    padding:"20px"}}>Insights</div>
                </Box>
            </Grid>
            <Grid item xs={7}>
                <Box
                style={{ 
                    minHeight:"40vh",
                    padding:"30px",
                    backgroundColor:"#A9E1CB",
                    borderRadius:"10px"}}>
                <div style={{ 
                    textAlign: "center", 
                    fontSize: "30px", 
                    paddingTop:"10px",
                    }}>Trends</div>
                <Box
                height="250px">
                    <Line
                    options={{ maintainAspectRatio: false }}
                    data={{
                        labels:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        datasets: [
                            {
                              id: 1,
                              label: '',
                              data: [3,7,8,4,7,9,10],
                            }
                            ],
                        }}/>
                </Box>
                </Box>
            </Grid> 
            <Grid item xs={5}>
                <Box
                style={{
                    minHeight: "40vh", 
                    backgroundColor:"#A8DFCA",
                    borderRadius:"10px"}}>
                    <div style={{ 
                        textAlign: "center", 
                        fontSize: "30px" ,
                        paddingTop:"10px"}}>Notes from your host</div>
                    <Box>
                        <Typography></Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box
                style={{
                    minHeight: "40vh", 
                    backgroundColor:"#A9E1CB",
                    borderRadius:"10px"}}>
                <div style={{ 
                    textAlign: "center", 
                    fontSize: "30px", 
                    paddingTop:"10px"}}>Daily Article</div>
                </Box>
            </Grid> 
        </Grid>
    </Box>
  )
}

export default Insights;