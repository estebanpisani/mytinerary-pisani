import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Itinerary(props) {


    return (
        <Card sx={{ display: 'flex', marginBottom: '1rem', minWidth: '70%' }}>
            <CardMedia
                component="img"
                sx={{ width: 300 }}
                image="/static/images/cards/live-from-space.jpg"
                alt="Cosme Fulanito"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <CardContent sx={{ flex: '1 0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <Typography component="div" variant="h5">
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                        {props.userName}
                    </Typography>
                    {props.description &&
                        <Typography variant="subtitle1" component="div">
                            {props.description}
                        </Typography>
                    }
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                        <Typography variant="subtitle2">Price: ${props.price}</Typography>
                        <Typography variant="subtitle2">Duration: {props.duration}hs</Typography>
                    </Box>
                </CardContent>
            </Box>
        </Card>
    )


}