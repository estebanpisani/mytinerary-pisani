import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
// import FlipCard from '../components/FlipCard';
import BasicCard from '../components/BasicCard';


import '../styles/Hero.css';
import '../styles/Cities.css';
// import { Link as LinkRouter } from "react-router-dom";
import data from '../data'

export const Cities = ({theme}) => {
    const heroBg = process.env.PUBLIC_URL + '/img/cities-hero.jpg';
    const cardsBg = process.env.PUBLIC_URL + '/img/cities-cards.jpg';


    return (
        <main>
            <Box className='hero-container' sx={{ backgroundImage: `url(${heroBg})`, height: '60vh' }} >
                <Box className='hero-content' sx={{ backgroundColor: 'rgba(9, 14, 12, 0.2)' }} >
                    {/* <Typography variant='h1' className='font-title text-light text-shadow-blur-primary' sx={{ fontSize: { xs: '4rem', sm: '4rem', md: '7rem' } }}>MyTinerary</Typography> */}
                    <Typography variant='h3' className='font-slogan text-light text-shadow-blur-primary' sx={{ fontSize: { xs: '2rem', sm: '2rem', md: '3rem' } }}>Find your dream destination!!</Typography>
                    <Typography variant='h4' className='text-light text-shadow-primary' sx={{
                        fontSize: { xs: '1.5em', sm: '2rem', md: '2rem' },
                        fontFamily: 'Cookie'
                    }}>Your adventure begins down below!</Typography>
                    <Box className="scroll-btn-container-">
                        <span className="mouse-btn">
                            <span className="mouse-scroll"></span>
                        </span>
                    </Box>
                </Box>
            </Box>
            <Box className='cards-section' sx={{ backgroundImage: `url(${cardsBg})` }}>
                <Box className='filters-container'>
                    <Box sx={{ width: {xs:'80%', sm:'60%', md:'50%'}, padding: '1rem' }}>
                        <TextField id="search-input" label="Search cities by name" color={theme.primary} placeholder='Try searching "Bariloche"' variant="filled" fullWidth />
                    </Box>
                </Box>
                <Grid
                    className='grid-container'
                    container
                    spacing={{ xs: 2, md: 2, lg: 5 }}
                    columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 8 }}
                    // columnSpacing={{ xs: 1, sm: 3 }}
                    justifyContent="center"
                    sx={{ padding: '1rem' }}
                >
                    {data.cities.map((city, index) => (
                        <Grid item xs={1} xl={1} key={index}>
                            <BasicCard className='citie-card' name={city.name} country={city.country} bgImg={city.img} description={city.description}></BasicCard>
                        </Grid>
                    ))}
                    {data.cities.map((city, index) => (
                        <Grid item xs={1} xl={1} key={index}>
                            <BasicCard name={city.name} country={city.country} bgImg={city.img} description={city.description}></BasicCard>
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </main>
    )
}
