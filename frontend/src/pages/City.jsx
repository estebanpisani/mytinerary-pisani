import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as LinkRouter } from "react-router-dom";
import '../styles/Cities.css';
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
                setCity(APIresp.data.response.city);
            });

    }, []);

    return (
        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {
                <>
                    <Box className='city-container' sx={{ backgroundImage: `url(${city?.image})`, minHeight: '25rem' }} >
                        {city ? (
                            <Box className='city-content' sx={{ backgroundColor: 'rgba(9, 14, 12, 0.2)', flexGrow: '2' }} >
                                <Typography variant='h3' className='font-slogan text-light text-shadow-blur-primary city-title' sx={{ fontSize: { xs: '2rem', sm: '2rem', md: '3rem' }, marginTop:'1rem' }}>{city.name}</Typography>
                                <Typography variant='h6' sx={{ padding: '1rem', fontSize: { xs: '0.7rem', sm: '1rem', md: '1rem', lg: '1.5rem' }, marginBottom:'1rem' }} className='font-normal text-light city-description'>
                                    {city.description}
                                </Typography>
                                <LinkRouter to={'/cities'}><button className='cta-btn-2 font-normal'>Back!</button></LinkRouter>
                            </Box>) :
                            (
                                <>
                                <Box className='' sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, marginBottom:'1rem' }} >
                                    <Skeleton variant="rectangular" animation="wave" width={300} height={177} sx={{ marginRight: '1rem', display: { xs: 'none', md: 'flex' } }} />
                                    <Box className='' sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column' }} >
                                        <Skeleton variant="rectangular" animation="wave" width={250} height={20} sx={{ marginBottom: '0.7rem' }} />
                                        <Skeleton variant="rectangular" animation="wave" width={250} height={20} sx={{ marginBottom: '0.7rem' }} />
                                        <Skeleton variant="rectangular" animation="wave" width={250} height={20} sx={{ marginBottom: '0.7rem' }} />
                                        <Skeleton variant="rectangular" animation="wave" width={250} height={20} sx={{ marginBottom: '0.7rem' }} />
                                        <Skeleton variant="rectangular" animation="wave" width={250} height={20} sx={{ marginBottom: '0.7rem' }} />
                                        <Skeleton variant="rectangular" animation="wave" width={250} height={20} sx={{ marginBottom: '0.7rem' }} />
                                    </Box>
                                    <Box className='' sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column' }} >
                                        <Skeleton variant="rectangular" animation="wave" width={150} height={20} sx={{ marginBottom: '0.7rem' }} />
                                        <Skeleton variant="rectangular" animation="wave" width={150} height={20} sx={{ marginBottom: '0.7rem' }} />
                                        <Skeleton variant="rectangular" animation="wave" width={150} height={20} sx={{ marginBottom: '0.7rem' }} />
                                        <Skeleton variant="rectangular" animation="wave" width={150} height={20} sx={{ marginBottom: '0.7rem' }} />
                                        <Skeleton variant="rectangular" animation="wave" width={150} height={20} sx={{ marginBottom: '0.7rem' }} />
                                        <Skeleton variant="rectangular" animation="wave" width={150} height={20} sx={{ marginBottom: '0.7rem' }} />
                                    </Box>
                                </Box>
                                <LinkRouter to={'/cities'}><button className='cta-btn-2 font-normal'>Back!</button></LinkRouter>
                            </>
                            )}
                    </Box>
                    <Box sx={{ flexGrow: '1', backgroundColor: `rgba(0, 0, 0)`, height: '10rem', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                        <Typography variant='h3' className='font-slogan text-light text-shadow-blur-primary' sx={{ fontSize: { xs: '2rem', sm: '2rem', md: '3rem' } }}>No Avalaible Itineraries yet</Typography>
                    </Box>
                </>
            }
                </main>
    )
}

            export default City;