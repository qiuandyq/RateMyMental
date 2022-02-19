
import AppBar from './Appbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import About from "./About";


const Homepage = () => {

    return (
        <div>
        <AppBar/>
    
            <Box sx={{m:"auto",marginTop:"80px"}}>
                <Typography component={'span'}>
                    <Box sx={{textAlign:'center'}}> <div style={{fontSize:"50px"}}>How are you feeling...</div> </Box>
                </Typography>    
            </Box>
            <Box sx={{m:"auto",marginTop:"0px"}}>
                <Typography component={'span'}>
                    <Box sx={{textAlign:'center'}}> <div style={{fontSize:"18px"}}>(1-bad, 9-great)</div> </Box>
                

                </Typography>    
            </Box>
            <Grid sx={{m:"auto",marginTop:"13px"}}container rowSpacing={1}> 
                <Grid item xs={5.1}>
                </Grid>
                <Grid item xs={.6} >
                    <Button style={{borderWidth:"2.8px",minWidth:'90px', minHeight:'90px'}} variant="outlined"><div style={{fontSize:"30px"}}>1</div></Button>
                </Grid>
                <Grid item xs={.6} >
                    <Button style={{borderWidth:"2.8px",minWidth:'90px', minHeight:'90px'}} variant="outlined"><div style={{fontSize:"30px"}}>2</div></Button>
                </Grid>
                <Grid item xs={.6} >
                    <Button style={{borderWidth:"2.8px",minWidth:'90px', minHeight:'90px'}} variant="outlined"><div style={{fontSize:"30px"}}>3</div></Button>
                </Grid>  
                <Grid item xs={5.1}>
                </Grid>
                <Grid item xs={5.1}>
                </Grid>
                <Grid item xs={.6} >
                    <Button style={{borderWidth:"2.8px",minWidth:'90px', minHeight:'90px'}} variant="outlined"><div style={{fontSize:"30px"}}>4</div></Button>
                </Grid>
                <Grid item xs={.6} >
                    <Button style={{borderWidth:"2.8px",minWidth:'90px', minHeight:'90px'}} variant="outlined"><div style={{fontSize:"30px"}}>5</div></Button>
                </Grid>
                <Grid item xs={.6} >
                    <Button style={{borderWidth:"2.8px",minWidth:'90px', minHeight:'90px'}} variant="outlined"><div style={{fontSize:"30px"}}>6</div></Button>
                </Grid>  
                <Grid item xs={5.1}>
                </Grid>
                <Grid item xs={5.1}>
                </Grid>
                <Grid item xs={.6} >
                    <Button style={{borderWidth:"2.8px",minWidth:'90px', minHeight:'90px'}} variant="outlined"><div style={{fontSize:"30px"}}>7</div></Button>
                </Grid>
                <Grid item xs={.6} >
                    <Button style={{borderWidth:"2.8px",minWidth:'90px', minHeight:'90px'}} variant="outlined"><div style={{fontSize:"30px"}}>8</div></Button>
                </Grid>
                <Grid item xs={.6} >
                    <Button style={{borderWidth:"2.8px",minWidth:'90px', minHeight:'90px'}} variant="outlined"><div style={{fontSize:"30px"}}>9</div></Button>
                </Grid>  
                <Grid item xs={5.1}>
                </Grid>
            </Grid>

            <About/>
        </div>
    );



}
export default Homepage;