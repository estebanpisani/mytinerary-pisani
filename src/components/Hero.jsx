import React from "react";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Hero = () => {

    return (
        <Box className='hero-container'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'flex-start',
                backgroundColor: 'rgba(196, 165, 126, 0.4)',
                flexGrow: '1'
            }}>
            <Typography>MYTINERARY</Typography>
            <Typography>Find
                your perfect trip</Typography>
            <Typography>designed by insiders who know and love
their cities!</Typography>
        </Box>
    )
}

export default Hero;