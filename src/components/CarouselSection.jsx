import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Carousel from './Carousel'
import '../styles/Carousel.css';
import data from '../data'

const CarouselSection = () => {

    return (
        <Box className='carrousel-section' sx={{ height: {xs:'200vh', sm:'100vh'} }}>
            <Typography className='font-weird text-primary text-shadow-blur-light' sx={{ fontSize:'3rem' }}> Popular MyTineraries!</Typography>
            <Box className='carrousel-container'>
                <Carousel cities={data.data} />
            </Box>
        </Box>
    )
}

export default CarouselSection;