import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../styles/UnderConstruction.css'
import {Link as LinkRouter} from "react-router-dom";

export const UnderConstruction = () => {
    return (
        <>
            <Box className='under-construction-container' >
                    <Box className='under-construction-content' >
                        <Typography variant='h1' className='font-title text-light text-shadow-blur-primary' sx={{fontSize:{ xs: '4rem', sm:'4rem', md: '7rem' }}}>MyTinerary</Typography>
                        <Typography variant='h3' className='font-slogan text-light text-shadow-blur-primary' sx={{fontSize:{ xs: '2rem', sm:'2rem', md: '3rem' }}}>COMING SOON</Typography>
                        <LinkRouter to={'/'}><button className='cta-btn-2 font-normal'>Back!</button></LinkRouter>
                    </Box>
            </Box>
        </>
            )
}
