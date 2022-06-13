import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as LinkRouter } from "react-router-dom";
import '../styles/Hero.css';

const City = (props) => {
    return (
        <main>
            <Box className='hero-container' sx={{backgroundImage:`url(${props.img})`}} >
                <Box className='hero-content' sx={{ backgroundColor: 'rgba(9, 14, 12, 0.2)' }} >
                    <Typography variant='h3' className='font-slogan text-light text-shadow-blur-primary' sx={{ fontSize: { xs: '2rem', sm: '2rem', md: '3rem' } }}>{props.name}</Typography>
                    <Typography variant='subtitle' sx={{ paddingTop: '0.5rem' }} className='font-slogan text-light text-shadow-primary'>
                        {props.country}
                    </Typography>
                    <Typography variant='h4' className='text-light text-shadow-primary' sx={{
                        fontSize: { xs: '1.5em', sm: '2rem', md: '2rem' },
                        fontFamily: 'Cookie'
                    }}>Avalaible itineraries</Typography>
                    <LinkRouter to={'/cities'}><button className='cta-btn-2 font-normal'>Back!</button></LinkRouter>
                </Box>
            </Box>
        </main>
    )
}

export default City;