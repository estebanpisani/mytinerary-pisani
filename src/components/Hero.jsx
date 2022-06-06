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
                {/* <Typography variant='h3' className='font-slogan text-primary text-shadow-blur-light' sx={{fontSize:{ xs: '2em', sm:'3rem', md: '3rem' }}}>Find
                    your perfect trip</Typography> */}
                <Button className="font-slogan bg-primary text-light cta-btn"
                sx={{ fontSize:{ xs: '1rem', sm:'1rem', md: '2rem' } }}> Find
                    your perfect trip </Button>
                <Typography variant='h4' className='font-normal text-light text-shadow-primary' sx={{fontSize:{ xs: '1em', sm:'1rem', md: '2rem' }}}>Designed by insiders who know and love
                    their cities!</Typography>
            </Box>
        </Box>
    )
}

export default Hero;