import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import itineraryActions from '../redux/actions/itineraryActions';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Avatar from '@mui/material/Avatar';

import Activities from './Activities';
import Comments from './Comments';

export default function Itinerary({ itineraryData, city }) {
    const dollarIcon = process.env.PUBLIC_URL + '/img/dollar.png';
    const dispatch = useDispatch();
    const user = useSelector(store => store.userReducer.userData)

    const [expand, setExpand] = useState(false);
    const [change, setChange] = useState(false);

    useEffect(() => {
        dispatch(itineraryActions.getItinerariesByCity(city));
    }, [change]);

    const handleExpand = () => {
        setExpand(!expand);
    };
    let price = [];
    for (let i = 0; i < itineraryData.price; i++) {
        price.push(<img src={dollarIcon} alt='price-value-unit' height='30px' width='30px' key={i} />);
    }

    async function handleLike() {
        await dispatch(itineraryActions.like(itineraryData._id))
        setChange(!change);
    }

    return (
        <>
            <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: '1rem', width: { xs: '80%', md: '80%', lg: '80%', xl: '70%' }, padding: '1rem' }} className='itinerary-card-container'>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', padding: '0.5rem' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Avatar variant='circular' alt={itineraryData.userName} sx={{ bgcolor: 'rgb(0, 105, 92)', width: { xs: '70px', sm: '120px', md: '200px' }, height: { xs: '70px', sm: '120px', md: '200px' } }} src={itineraryData.userPhoto}>
                        </Avatar>
                        <Typography variant="overline" component="div" sx={{ marginTop: '1rem' }} className='font-normal'>
                            {itineraryData.userName}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: { xs: '100%', lg: '60%' }, height: '100%' }}>
                        <CardContent className='font-normal' sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <Typography component="div" variant="h3" sx={{ marginBottom: '1rem' }} className='font-slogan'>
                                {itineraryData.title}
                            </Typography>
                            {itineraryData.description &&
                                <Typography className='font-normal' sx={{ my: '1rem' }}>{itineraryData.description}</Typography>
                            }
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: 'space-evenly', alignItems: 'center', width: '100%', flexWrap: 'wrap', marginBottom: '1rem' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                    {itineraryData.likes.includes(user.id) ?

                                        <FavoriteIcon className='like-btn' fontSize='medium' onClick={handleLike} /> :
                                        <FavoriteBorderIcon className='like-btn' fontSize='medium' onClick={handleLike} />
                                    }
                                    <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', marginLeft: '0.5rem' }} className='font-normal'> {itineraryData.likes.length}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Typography variant="body1" className='font-normal' >Price:</Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}><span>{price}</span></Box>
                                </Box>

                                <Typography variant="body1" className='font-normal'>Duration: {itineraryData.duration}hs</Typography>
                            </Box>
                            <Box>
                                {itineraryData.tags && itineraryData.tags.map((tag, i) => (
                                    <span className='itinerary-hashtag' key={i}>{tag} </span>
                                ))
                                }
                            </Box>

                        </CardContent>

                    </Box>
                </Box>
                {expand === false && (
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <button className='cta-btn-3 font-normal' onClick={() => handleExpand()}>View More <ExpandMoreIcon /> </button>
                    </Box>)
                }
                {expand &&
                    (
                        <Box className='activities-container' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '100%', padding: '1rem', border: '1px solid #fff' }} >
                            <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

                                <Typography className='font-normal' sx={{ width: '100%', backgroundColor: '#000', marginBottom: '1rem' }}>Activities</Typography>

                                <Box sx={{ my: '0.5rem', width: '95%' }}>
                                    <Activities id={itineraryData._id} />
                                </Box>

                                <Box className='comments-container' sx={{ my: '0.5rem', width: '95%' }}>
                                    <Typography className='font-normal' sx={{ width: '100%', backgroundColor: '#000', marginBottom: '1rem' }}>Leave us a comment!</Typography>
                                    {itineraryData.comments.length > 0 ?
                                        <Comments comments={itineraryData.comments} />
                                    :
                                        <Typography className='font-normal' sx={{ my: '1rem' }}>Be the first one on comment!</Typography>
                                    }
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