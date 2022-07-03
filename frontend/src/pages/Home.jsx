import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';

import CarouselSection from '../components/CarouselSection';
import Hero from './../components/Hero';


const Home = () => {

    //SnackBar
    const [alert, setAlert] = useState(false);
    const handleClick = () => {
        setAlert(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlert(false);
    };
    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );
    const heroBg = process.env.PUBLIC_URL + '/img/home-hero.jpg';

    let message = useSelector(store => store.userReducer.message);


    return (
        <main className='main'>
            <Hero subtitle='Find Your Perfect Trip' button='Get Started!' slogan='Designed by insiders who know and love
                    their cities!' bgImg={heroBg} linkUrl='/cities' />

            <CarouselSection />
            {/* {message &&
                <Snackbar
                    open={alert}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message="Welcome"
                    action={action}
                >
                    <Alert onClose={handleClose} severity="success">{message}</Alert>
                </Snackbar>
            } */}
        </main>
    )
}

export default Home;
