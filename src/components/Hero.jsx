import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import '../styles/styles.css'
import '../styles/hero.css'
import {Link as LinkRouter} from "react-router-dom";

const Hero = ({title, subtitle, button, slogan, linkUrl}) => {

    const heroBg = process.env.PUBLIC_URL + '/img/home-hero.jpg';

    return (
        <Box className='hero-container' sx={{backgroundImage:`url(${heroBg})`}} >
            <Box className='hero-content' >
                {title ?
                <Typography variant='h1' className='font-title text-light text-shadow-blur-primary' sx={{fontSize:{ xs: '4rem', sm:'4rem', md: '7rem' }}}>{title}</Typography>
                : <Typography variant='h1' className='font-title text-light text-shadow-blur-primary' sx={{fontSize:{ xs: '4rem', sm:'4rem', md: '7rem' }}}>MyTinerary</Typography>
                }
                <Typography variant='h3' className='font-slogan text-light text-shadow-blur-primary' sx={{fontSize:{ xs: '2rem', sm:'2rem', md: '3rem' }}}>{subtitle}</Typography>
                <LinkRouter to={linkUrl}><button className='cta-btn-2 font-normal'>{button}</button></LinkRouter>
                {slogan &&
                <Typography variant='h4' className='text-light text-shadow-primary' sx={{fontSize:{ xs: '1.5em', sm:'2rem', md: '2rem' },
                fontFamily: 'Cookie'
                }}>Designed by insiders who know and love
                    their cities!</Typography>
                }
            </Box>
        </Box>
    )
}

export default Hero;