import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';

export default function Itinerary(props) {


    return (
        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, flexWrap: 'wrap', justifyContent: 'space-evenly', marginBottom: '1rem', width: {xs:'80%', md:'60%', lg:'60%', xl:'50%'}, padding: '1rem' }} className='itinerary-card-container'>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Avatar variant='circular' alt={props.userName} sx={{display:{xs:'none', sm:'flex'}, bgcolor: 'rgb(0, 105, 92)', width: 120, height: 120 }} src={props.userPhoto}>
                </Avatar>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: { xs: '100%', lg: '60%' }, height: '100%' }}>
                <CardContent className='font-normal' sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <Typography component="div" variant="h3"sx={{ marginBottom: '1rem' }} className='font-slogan'>
                        {props.title}
                    </Typography>
                    <Typography variant="h5" component="div"sx={{ marginBottom: '1rem' }} className='font-normal'>
                        {props.userName}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', flexWrap: 'wrap' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                            <FavoriteBorderIcon fontSize='medium' />
                            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginLeft:'0.5rem' }} className='font-normal'> {props.likes ? props.likes : 0}</Typography>
                        </Box>
                        <Typography variant="body1" className='font-normal'>Price: ${props.price}</Typography>
                        <Typography variant="body1" className='font-normal'>Duration: {props.duration}hs</Typography>
                    </Box>
                    {props.tags &&
                        <Typography variant="subtitle1" component="div" sx={{ marginTop: '1rem' }}>
                            {props.tags}
                        </Typography>
                    }
                    {/* {props.description &&
                        <Typography variant="subtitle1" component="div">
                            {props.description}
                        </Typography>
                    } */}
                </CardContent>
            </Box>
        </Card>
    )


}