import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../styles/Hero.css'
import {Link as LinkRouter} from "react-router-dom";

export const NotFound = () => {
    return (
        <>
            <Box className='hero-container' >
                <Box className='hero-content' >
                    <Typography variant='h1' className='font-title text-light text-shadow-blur-primary' sx={{fontSize:{ xs: '4rem', sm:'4rem', md: '7rem' }}}>MyTinerary</Typography>
                    <Typography variant='h3' className='font-normal text-light text-shadow-blur-primary' sx={{fontSize:{ xs: '2rem', sm:'2rem', md: '3rem' }}}>Content not found</Typography>
                    <LinkRouter to={'/'}><button className='cta-btn-2 font-normal'>Back!</button></LinkRouter>
                </Box>
            </Box>
        </>
            )
}
