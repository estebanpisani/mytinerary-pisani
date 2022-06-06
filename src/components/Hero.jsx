import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import '../styles/styles.css'

const Hero = () => {

    return (
        <Box className='hero-container' >
            <Box className='hero-content' >
                <Typography variant='h1' className='font-title text-primary text-shadow-light' sx={{fontSize:{ xs: '3rem', sm:'4rem', md: '7rem' }}}>MyTinerary</Typography>
                <Typography variant='h3' className='font-slogan text-primary text-shadow-blur-light' sx={{fontSize:{ xs: '2em', sm:'3rem', md: '3rem' }}}>Find
                    your perfect trip</Typography>
                <Typography variant='h4' className='font-subtitle text-secondary text-shadow-primary' sx={{fontSize:{ xs: '1em', sm:'1rem', md: '2rem' }}}>Designed by insiders who know and love
                    their cities!</Typography>
                <Button variant="contained" className="bg-primary font-normal" > Go there! </Button>
            </Box>
        </Box>
    )
}

export default Hero;