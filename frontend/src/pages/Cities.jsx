import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import BasicCard from '../components/BasicCard';
import '../styles/Hero.css';
import '../styles/Cities.css';
import ReactLoading from 'react-loading';

import { useDispatch, useSelector } from 'react-redux';
import cityActions from '../redux/actions/cityActions';

export const Cities = ({ theme }) => {
    const heroBg = process.env.PUBLIC_URL + '/img/cities-hero.jpg';
    const cardsBg = process.env.PUBLIC_URL + '/img/cities-cards.jpg';

    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    function handleSearch(event) {
        setSearch(event.target.value);
    }
    useEffect(() => {
        //Seteo el estado cities con getCities
        dispatch(cityActions.getCities());
        // eslint-disable-next-line
    }, []);

    //Obtengo las ciudades del store de Redux
    let cities = useSelector(store => store.cityReducer.cities);
    console.log(cities)

    useEffect(() => {
        //Seteo el estado cities con getCities
        dispatch(cityActions.filterCities(search));
        // eslint-disable-next-line
    }, [search]);

    //Obtengo las ciudades filtradas del store de Redux
    let results = useSelector(store => store.cityReducer.filteredCities);
    console.log(results);

    return (
        <main>
            <Box className='hero-container' sx={{ backgroundImage: `url(${heroBg})`, height: '60vh' }} >
                <Box className='hero-content' sx={{ backgroundColor: 'rgba(9, 14, 12, 0.2)' }} >
                    <Typography variant='h3' className='font-slogan text-light text-shadow-blur-primary' sx={{ fontSize: { xs: '2rem', sm: '2rem', md: '3rem' } }}>Find your dream destination!!</Typography>
                    <Typography variant='h4' className='text-light text-shadow-primary cities-subtitle' sx={{
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
                    <Box sx={{ width: { xs: '80%', sm: '60%', md: '50%' }, padding: '1rem' }}>
                        <TextField
                            id="search-input"
                            label="Search cities by name"
                            color={theme.primary}
                            placeholder='Try searching "Bariloche"'
                            variant="filled"
                            fullWidth
                            onKeyUp={handleSearch}
                        />
                    </Box>
                </Box>
                {cities && cities.length>0 ? (
                    <Grid
                        className='grid-container'
                        container
                        spacing={{ xs: 2, md: 2, lg: 5 }}
                        columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 8 }}
                        justifyContent="center"
                        alignItems='center'
                        sx={{ padding: '3rem', margin: '0' }}
                    >
                        {results?.length > 0 ?
                            results?.map((city, index) => (
                                <Grid item xs={1} xl={1} key={index}>
                                    <BasicCard className='citie-card' id={city._id} name={city.name} country={city.country} bgImg={city.image} description={city.description}></BasicCard>
                                </Grid>)
                            ) : (
                                <Grid item xs={2} xl={2} sx={{ height: { md: '13rem' } }}>
                                    <Typography variant='h3' className='font-slogan text-light text-shadow-primary' >Cities not found</Typography>
                                </Grid>)}
                    </Grid>
                )
                    : (
                        <Box className='skeleton-container' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column', height: '50vh' }} >
                            <ReactLoading type={"spokes"} color={"#fff"} height={120} width={120} />
                            <Typography variant='h4' className='text-light font-slogan'>Loading cities...</Typography>
                        </Box>
                    )
                }


            </Box>

        </main>
    )
}
