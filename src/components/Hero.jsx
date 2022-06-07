import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import { Button } from "@mui/material";
import '../styles/styles.css'
import '../styles/Hero.css'

const Hero = () => {

    return (
        <Box className='hero-container' >
            <Box className='hero-content' >
                <Typography variant='h1' className='font-title text-light text-shadow-blur-primary' sx={{fontSize:{ xs: '3rem', sm:'4rem', md: '7rem' }}}>MyTinerary</Typography>
                <Typography variant='h3' className='font-title text-light text-shadow-blur-primary' sx={{fontSize:{ xs: '2rem', sm:'3rem', md: '5rem' }}}>Find Your Perfect Trip</Typography>
                <button className='cta-btn-2 font-normal'>Get Started!</button>
                <Typography variant='h4' className='text-light text-shadow-primary' sx={{fontSize:{ xs: '1em', sm:'1rem', md: '2rem' },
                fontFamily: 'Cookie'
                }}>Designed by insiders who know and love
                    their cities!</Typography>
            </Box>
        </Box>
    )
}

export default Hero;