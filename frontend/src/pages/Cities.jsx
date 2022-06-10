import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Card from '../components/Card';


import '../styles/Hero.css';
import '../styles/Cities.css';
// import { Link as LinkRouter } from "react-router-dom";
import data from '../data'

export const Cities = () => {
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
                    <Box sx={{ width: '40%',  padding: '1rem' }}>
                        <TextField id="search-input" label="Search cities by name" color='primary' placeholder='Try searching "Bariloche"' variant="outlined" fullWidth />
                        {/* <Input placeholder="Search cities by name" fullWidth  margin='dense' /> */}
                    </Box>
                </Box>
                <Grid className='card-grid-container' container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data.cities.map((city, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Card name={city.name} country={city.country} bgImg={city.img} description={city.description}></Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </main>
    )
}
