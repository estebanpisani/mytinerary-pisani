import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Avatar from '@mui/material/Avatar';
// import Carousel from './Carousel';

export default function Itinerary(props) {

    const dollarIcon = process.env.PUBLIC_URL + '/img/dollar.png';
    const [expand, setExpand] = useState(false);

    const handleExpand = () => {
        setExpand(!expand);
    };
    let price = [];
    for (let i = 0; i < props.price; i++) {
        price.push(<img src={dollarIcon} alt='price-value-unit' height='30px' width='30px' />);
    }

    return (
        <>
            <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: '1rem', width: { xs: '80%', md: '60%', lg: '70%', xl: '50%' }, padding: '1rem' }} className='itinerary-card-container'>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', padding: '1rem' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Avatar variant='circular' alt={props.userName} sx={{ bgcolor: 'rgb(0, 105, 92)', width: { xs: '70px', sm: '120px', md: '200px' }, height: { xs: '70px', sm: '120px', md: '200px' } }} src={props.userPhoto}>
                        </Avatar>
                        <Typography variant="overline" component="div" sx={{ marginTop: '1rem' }} className='font-normal'>
                            {props.userName}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: { xs: '100%', lg: '60%' }, height: '100%' }}>
                        <CardContent className='font-normal' sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <Typography component="div" variant="h3" sx={{ marginBottom: '1rem' }} className='font-slogan'>
                                {props.title}
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: 'space-evenly', alignItems: 'center', width: '100%', flexWrap: 'wrap', marginBottom: '1rem' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                    <FavoriteBorderIcon className='like-btn' fontSize='medium' />
                                    <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', marginLeft: '0.5rem' }} className='font-normal'> {props.likes ? props.likes : 0}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Typography variant="body1" className='font-normal' >Price:</Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}><span>{price}</span></Box>
                                </Box>

                                <Typography variant="body1" className='font-normal'>Duration: {props.duration}hs</Typography>
                            </Box>
                            <Box>
                            {props.tags && props.tags.map((tag, i) => (
                                <span className='itinerary-hashtag' key={i}>{tag} </span>
                            ))
                            }
                            </Box>

                        </CardContent>

                    </Box>
                </Box>

                {expand === false && (
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <button className='cta-btn-3 font-normal' onClick={() => handleExpand()}>View More <ExpandMoreIcon /> </button>
                    </Box>)
                }
                {expand && (
                    <Box className='activities-container' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '100%', padding: '1rem', border: '1px solid #fff' }} >
                        <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            {props.description &&
                                <Typography className='font-normal' sx={{ marginBottom: '1rem' }}>{props.description}</Typography>
                            }
                            <Typography className='font-normal' sx={{ width: '100%', backgroundColor: '#000', marginBottom: '1rem' }}>Activities</Typography>
                            {/* Carousel con actividades de cada itinerario */}
                            <Box className='carrousel-container'>
                                {/* <Carousel /> */}
                            </Box>
                            <button className='cta-btn-3 font-normal' onClick={() => handleExpand()}>View less <ExpandLessIcon /></button>
                        </Box>
                    </Box>
                )
                }
            </Card>

        </>
    )


}