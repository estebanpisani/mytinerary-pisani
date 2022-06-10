import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Carousel from './Carousel'
import '../styles/Carousel.css';
import data from '../data'

const CarouselSection = () => {

    const carouselBg = process.env.PUBLIC_URL + '/img/home-carrousel.jpg';
    return (
        <Box className='carrousel-section' sx={{backgroundImage:`url(${carouselBg})`, height: {xs:'200vh', sm:'100vh'} }}>
            <Typography className='font-weird text-primary text-shadow-blur-light' sx={{ fontSize:'3rem' }}> Popular MyTineraries!</Typography>
            <Box className='carrousel-container'>
                <Carousel cities={data.cities} />
            </Box>
        </Box>
    )
}

export default CarouselSection;