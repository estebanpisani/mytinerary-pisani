import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Carousel from './Carousel'
import '../styles/Carousel.css';


const CarouselSection = () => {

    return (
        <Box className='carrousel-section'>
            <Typography className='font-weird text-primary text-shadow-blur-light' sx={{ fontSize: '3rem' }}> Popular Destinies!</Typography>
            <Box className='carrousel-container'>
                <Carousel/>
            </Box>
        </Box>

    )
}

export default CarouselSection;