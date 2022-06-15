import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as LinkRouter } from "react-router-dom";
import '../styles/Hero.css';
import { useParams } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';

const City = () => {

    const { id } = useParams();
    const idCity = id.slice(1, id.length);
    console.log(idCity);
    const [city, setCity] = useState();
    console.log(city)
    useEffect(() => {
        axios.get('http://localhost:4000/api/cities/' + idCity)
            .then(APIresp => {
                console.log(APIresp);
                // setCity(APIresp.data.response.city);
            });

    }, []);

    return (
        <main>
            {
                city ?
                    (
                        <>
                            <Box className='hero-container' sx={{ backgroundImage: `url(${city.image})`, minHeight: '25rem' }} >
                                <Box className='hero-content' sx={{ backgroundColor: 'rgba(9, 14, 12, 0.2)' }} >
                                    <Typography variant='h3' className='font-slogan text-light text-shadow-blur-primary' sx={{ fontSize: { xs: '2rem', sm: '2rem', md: '3rem' } }}>{city.name}</Typography>
                                    <Typography variant='h6' sx={{ padding: '1rem' }} className='font-normal text-light city-description'>
                                        {city.description}
                                    </Typography>
                                    <LinkRouter to={'/cities'}><button className='cta-btn-2 font-normal'>Back!</button></LinkRouter>
                                </Box>
                            </Box>
                            <Box sx={{ backgroundColor: `rgba(0, 0, 0)`, height: '10rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                                <Typography variant='h3' className='font-slogan text-light text-shadow-blur-primary' sx={{ fontSize: { xs: '2rem', sm: '2rem', md: '3rem' } }}>No Avalaible Itineraries yet</Typography>
                            </Box>
                        </>
                    )
                    : (<>
                        <Box sx={{ backgroundColor: 'rgba(9, 14, 12, 0.2)', height: '72vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                            <Skeleton variant="rectangular" animation="wave" width={210} height={118} sx={{ marginBottom: '1rem', marginRight:'1rem' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Skeleton variant="rectangular" animation="wave" width={210} height={10} sx={{ marginBottom: '1rem' }} />
                                <Skeleton variant="rectangular" animation="wave" width={210} height={10} sx={{ marginBottom: '1rem' }} />
                                <Skeleton variant="rectangular" animation="wave" width={210} height={10} sx={{ marginBottom: '1rem' }} />
                                <Skeleton variant="rectangular" animation="wave" width={210} height={10} sx={{ marginBottom: '1rem' }} />
                                <Skeleton variant="rectangular" animation="wave" width={210} height={10} sx={{ marginBottom: '1rem' }} />
                            </Box>

                            {/* <LinkRouter to={'/cities'}><button className='cta-btn-2 font-normal'>Back!</button></LinkRouter> */}
                        </Box>
                    </>
                    )
            }
        </main>
    )
}

export default City;