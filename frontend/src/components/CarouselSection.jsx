import React from "react";
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Carousel from './Carousel'
import '../styles/Carousel.css';
import ReactLoading from 'react-loading';

import { useDispatch, useSelector } from 'react-redux';
import cityActions from '../redux/actions/cityActions';

const CarouselSection = () => {

    const carouselBg = process.env.PUBLIC_URL + '/img/home-carrousel.jpg';

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cityActions.getCities());
        // eslint-disable-next-line
    }, []);

        let cities = useSelector(store => store.cityReducer.cities.slice(0, 12));
        console.log(cities);

    return (
        <Box className='carrousel-section' sx={{ backgroundImage: `url(${carouselBg})`, height: { xs: '180vh', sm: '100vh' } }}>
            <Typography className='font-weird text-primary text-shadow-blur-light' sx={{ fontSize: '3rem' }}> Popular MyTineraries!</Typography>
            <Box className='carrousel-container'>
                {cities.length >0 ? (
                    <Carousel cities={cities} />
                ) : (
                    <Box className='skeleton-container' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column', height: '50vh' }} >
                        <ReactLoading type={"spokes"} color={"#fff"} height={120} width={120} />
                        <Typography variant='h4' className='text-light font-slogan'>Loading cities...</Typography>
                    </Box>
                )
                }
            </Box>
        </Box >
    )
}

export default CarouselSection;