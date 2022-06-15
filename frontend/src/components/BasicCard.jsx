import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link as LinkRouter } from "react-router-dom";

export default function BasicCard({ id, name, country, bgImg, description }) {
    return (
        <Card className='citie-card' sx={{ backgroundImage: `url(${bgImg})`, minHeight: '17rem' }}>
            <Box sx={{ width: '100%', minHeight: '17rem', backgroundColor: 'rgba(9, 14, 12, 0.4)',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }} className='card-content'>
                <CardContent sx={{display:'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', minHeight:'8rem'}}>
                    <Typography variant="h5" component="div" sx={{ fontSize: '3rem' }} className='font-slogan text-light text-shadow-primary'>
                        {name}
                    </Typography>
                    <Typography variant='h6' sx={{  paddingTop: '0.5rem' }} className='font-slogan text-light text-shadow-primary'>
                        {country}
                    </Typography>
                </CardContent>
                <CardActions>
                    <LinkRouter to={`/city/:${id}`}>
                        <Button size="small" className='cta-btn-3 text-light font-normal'>Look for itineraries</Button>
                    </LinkRouter>
                </CardActions>
            </Box>
        </Card>
    );
}
