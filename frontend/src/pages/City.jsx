import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as LinkRouter } from "react-router-dom";
import '../styles/Hero.css';
import { useParams } from 'react-router-dom';
import data from '../data';

const City = () => {
    const { id } = useParams();
    const idCity = id.slice(1, id.length);
    const city=data.cities.find(city => city.id === Number(idCity));

    return (
        <main>
            <Box className='hero-container' sx={{ backgroundImage: `url(${city.img})`, minHeight:'25rem' }} >
                <Box className='hero-content' sx={{ backgroundColor: 'rgba(9, 14, 12, 0.2)' }} >
                    <Typography variant='h3' className='font-slogan text-light text-shadow-blur-primary' sx={{ fontSize: { xs: '2rem', sm: '2rem', md: '3rem' } }}>{city.name}</Typography>
                    <Typography variant='h6' sx={{ padding: '1rem' }} className='font-normal text-light city-description'>
                        {city.description}
                    </Typography>
                    <LinkRouter to={'/cities'}><button className='cta-btn-2 font-normal'>Back!</button></LinkRouter>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: `rgba(0, 0, 0)`, height:'10rem', display:'flex', flexDirection:'column', justifyContent:'center' }} >
                    <Typography variant='h3' className='font-slogan text-light text-shadow-blur-primary' sx={{ fontSize: { xs: '2rem', sm: '2rem', md: '3rem' } }}>No Avalaible Itineraries yet</Typography>
            </Box>

        </main>
    )
}

export default City;