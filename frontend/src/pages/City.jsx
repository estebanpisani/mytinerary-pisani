import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as LinkRouter } from "react-router-dom";
import '../styles/Cities.css';
import { useParams } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import Itinerary from '../components/Itinerary';

const City = () => {

    const { id } = useParams();
    const bgImg = process.env.PUBLIC_URL + '/img/city-body.jpg';
    const [city, setCity] = useState();
    useEffect(() => {
        axios.get('http://localhost:4000/api/cities/' + id)
            .then(APIresp => {
                setCity(APIresp.data.response.city);
            });
            // eslint-disable-next-line
    }, []);

    return (
        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Box className='city-container' sx={{ backgroundImage: `url(${city?.image})`, minHeight: '25rem' }} >
                {city ? (
                    // Hero
                    <Box className='city-content' sx={{ backgroundColor: 'rgba(9, 14, 12, 0.2)', flexGrow: '2' }} >
                        <Typography variant='h3' className='font-slogan text-light text-shadow-blur-primary city-title' sx={{ fontSize: { xs: '2rem', sm: '2rem', md: '3rem' }, marginTop: '1rem' }}>{city.name}</Typography>
                        <Typography variant='h6' sx={{ padding: '1rem', fontSize: { xs: '0.7rem', sm: '1rem', md: '1rem', lg: '1.5rem' }, marginBottom: '1rem' }} className='font-normal text-light city-description'>
                            {city.description}
                        </Typography>
                        <LinkRouter to={'/cities'}><button className='cta-btn-2 font-normal'>Back to Cities!</button></LinkRouter>
                    </Box>) :
                    (           // Skeletons
                        <>
                            <Box className='' sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, marginBottom: '1rem' }} >
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
                            <LinkRouter to={'/cities'}><button className='cta-btn-2 font-normal'>Back to Cities!</button></LinkRouter>
                        </>
                    )
                }
            </Box>
            <Box className='itineraries-section' sx={{ flexGrow: '1', backgroundImage: `url(${bgImg})`, minHeight: '60vh', padding: '1rem' }} >
                {/* <Box sx={{ backgroundColor: `rgba(0, 0, 0, 0.4)`, minHeight: '60vh', maxHeight:'100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding:'1rem' }} >
                    <Typography variant='h3' className='font-slogan text-light text-shadow-blur-primary' sx={{ fontSize: { xs: '2rem', sm: '2rem', md: '3rem' } }}>No Available Itineraries yet</Typography>                
                </Box> */}
                <Box className='itineraries-container' sx={{ maxHeight: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems:'center', padding: '1rem' }}>
                    {/* Skeleton */}
                    {/* <div className="card">
                        <div className="card_load"></div>
                        <div className="card_load_extreme_title"></div>
                        <div className="card_load_extreme_descripion"></div>
                    </div> */}


                    <Itinerary title='Paseo Nocturno' userName='Juan Carlos' userPhoto='https://www.cmtv.com.ar/imagenes_artistas/2603.jpg?Mala%20Fama' price={2} duration={3} likes={5} description='Una larga caminata bajo el manto de la oscura noche de verano, iluminada sólo por la Luna y el polvo de estrellas.'></Itinerary>
                    <Itinerary title='Paseito' description='Un paseito por el lago.' userName='Cosme Fulanito' userPhoto='' price={5} duration={2} tags='#lake #relax #walk'></Itinerary>
                    <Itinerary title='Caminata por el Bosque' userName='Hernán MalaFama' userPhoto='' price={3} duration={1} tags='#kumbia #musika'></Itinerary>
                </Box>
            </Box>
        </main>
    )
}

export default City;