import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Carrousel = () => {
    return(
        <Box className='carrousel-container' >
            <Box >
                <Typography variant='h1' className='font-title text-primary text-shadow-light' sx={{fontSize:{ xs: '3rem', sm:'4rem', md: '7rem' }}}>MyTinerary</Typography>
                <Typography variant='h4' className='font-normal text-light text-shadow-primary' sx={{fontSize:{ xs: '1em', sm:'1rem', md: '2rem' }}}>Designed by insiders who know and love
                    their cities!</Typography>
            </Box>
        </Box>
    )
}

export default Carrousel;