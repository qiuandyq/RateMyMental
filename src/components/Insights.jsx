import React from 'react'
import { Grid, Box} from '@mui/material'
import Chart from "./Chart"

function Insights() {
  return (
    <Box
    style={{
        marginTop: "100px",
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
                    minHeight: "40vh", 
                    backgroundColor:"#A9E1CB",
                    borderRadius:"10px"}}>
                <div style={{ 
                    textAlign: "center", 
                    fontSize: "30px", 
                    paddingTop:"10px",
                    }}>Trends</div>
                    <Chart/>
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
                        paddingTop:"10px"}}>Notes from host</div>
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