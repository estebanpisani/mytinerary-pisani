import React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as LinkRouter } from "react-router-dom";
import '../styles/Cities.css';
import { useParams } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import Itinerary from '../components/Itinerary';

import { useDispatch, useSelector } from 'react-redux';

import cityActions from '../redux/actions/cityActions';
import itineraryActions from '../redux/actions/itineraryActions';

const City = () => {

    const cityID = useParams().id;
    const bgImg = process.env.PUBLIC_URL + '/img/city-body.jpg';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cityActions.getCityById(cityID));
        dispatch(itineraryActions.getItinerariesByCity(cityID));
        // eslint-disable-next-line
    }, []);

    let city = useSelector(store => store.cityReducer.city);
    let itineraries = useSelector(store => store.itineraryReducer.itineraries);

    return (
        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Box className='city-container' sx={{ backgroundImage: `url(${city?.image})`, minHeight: '25rem' }} >
                <Box className='city-content' sx={{ backgroundColor: 'rgba(9, 14, 12, 0.2)', flexGrow: '2' }} >
                    {city.name ? (
                        <>
                            <Typography variant='h3' className='font-slogan text-light text-shadow-blur-primary city-title' sx={{ fontSize: { xs: '2rem', sm: '2rem', md: '3rem' }, marginTop: '1rem' }}>{city.name}</Typography>
                            <Typography variant='h6' sx={{ padding: '1rem', fontSize: { xs: '0.7rem', sm: '1rem', md: '1rem', lg: '1.5rem' }, marginBottom: '1rem' }} className='font-normal text-light city-description'>
                                {city.description}
                            </Typography>
                        </>
                    ) :
                        (           // Skeletons
                            <>
                                <Box className='' sx={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem', width: '70%' }} >
                                    <Skeleton variant="rectangular" animation="wave" width='100%' height={20} sx={{ marginBottom: '0.7rem' }} />
                                    <Skeleton variant="rectangular" animation="wave" width='100%' height={20} sx={{ marginBottom: '0.7rem' }} />
                                    <Skeleton variant="rectangular" animation="wave" width='100%' height={20} sx={{ marginBottom: '0.7rem' }} />
                                    <Skeleton variant="rectangular" animation="wave" width='100%' height={20} sx={{ marginBottom: '0.7rem' }} />
                                    <Skeleton variant="rectangular" animation="wave" width='100%' height={20} sx={{ marginBottom: '0.7rem' }} />
                                    <Skeleton variant="rectangular" animation="wave" width='100%' height={20} sx={{ marginBottom: '0.7rem' }} />
                                </Box>
                            </>
                        )
                    }
                    <LinkRouter to={'/cities'}><button className='cta-btn-2 font-normal'>Back to Cities!</button></LinkRouter>
                </Box>
            </Box>
            {/* Itineraries section */}
            <Box className='itineraries-section' sx={{ flexGrow: '1', backgroundImage: `url(${bgImg})`, minHeight: '60vh', py: '1rem', px:{xs:0, sm:'1rem'} }} >
                <Box className='itineraries-container' sx={{ maxHeight: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', padding: {xs:0, md:'1.5rem'} }}>
                    {itineraries.length > 0 ? itineraries.map((itinerary, i) =>
                        <Itinerary key={i} city={cityID} itineraryData={itinerary} />
                    ) : (
                        <Box sx={{ backgroundColor: `rgba(0, 0, 0, 0.7)`, height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '1rem' }} >
                            <Typography variant='h3' className='font-slogan text-light text-shadow-blur-primary' sx={{ fontSize: { xs: '2rem', sm: '2rem', md: '3rem' } }}>No Available Itineraries yet</Typography>
                        </Box>
                    )
                    }
                </Box>
            </Box>
        </main>
    )
}

export default City;