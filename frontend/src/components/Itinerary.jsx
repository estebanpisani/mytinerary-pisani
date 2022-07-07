import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as LinkRouter } from "react-router-dom";

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
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';


import Activities from './Activities';


import '../styles/Comments.css'

export default function Itinerary({ itineraryData, city }) {
    const dollarIcon = process.env.PUBLIC_URL + '/img/dollar.png';
    const dispatch = useDispatch();
    const user = useSelector(store => store.userReducer.userData);

    const [expand, setExpand] = useState(false);
    const [change, setChange] = useState(false);
    const [commentValue, setCommentValue] = useState('');
    const [editID, setEditID] = useState('');
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        dispatch(itineraryActions.getItinerariesByCity(city));
        // eslint-disable-next-line
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

    const handleChange = (e) => {
        setCommentValue(e.target.form[0].value)
    }

    async function handleUpdate(e) {
        setEdit(true)
        setEditID(e.target.id);
        // console.log(e.target.id);
    }

    const closeEdit = () => {
        setEdit(false);
    }

    async function handleDelete(e) {
        // console.log(e.target);
        await dispatch(itineraryActions.deleteComment(e.target.id))
        setChange(!change);
    }
    async function handleEditSubmit(event) {
        event.preventDefault();
        setEdit(false)
        setEditID('');
        // console.log(event.target[0].id)
        await dispatch(itineraryActions.updateComment(event.target[0].id, event.target[0].value))
        setChange(!change);
    };
    async function handleCommentSubmit(event) {
        event.preventDefault();
        setCommentValue('')
        await dispatch(itineraryActions.addComment(itineraryData._id, commentValue))
        setChange(!change);
    };

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
                                    {itineraryData?.likes.includes(user?.id) ?

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

                                <Box className='comments-section' sx={{ my: '0.5rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <Typography className='font-normal' sx={{ width: '100%', backgroundColor: '#000', mb: 2 }}>Leave us a comment!</Typography>
                                    {itineraryData.comments.length > 0 ?
                                        <div id='comments-container' className="comments-container">
                                            <ul id="comments-list" className="comments-list">
                                                {itineraryData.comments.map((comment, i) => (
                                                    <li key={i}>
                                                        <div className="comment-main-level">
                                                            <div className="comment-avatar">
                                                                {comment.user.userPhoto &&
                                                                    <img src={comment.user.userPhoto} alt="" />
                                                                }
                                                            </div>
                                                            <div className="comment-box">
                                                                <div className="comment-head">
                                                                    <h6 className="comment-name">{comment.user.firstName} {comment.user.lastName}</h6>
                                                                    {user?.id === comment.user._id &&
                                                                        <div >
                                                                            {edit && editID === comment._id ?
                                                                                <Button className="comment-opt" onClick={closeEdit} id={comment._id} disableTouchRipple>
                                                                                    <CloseIcon className='text-primary' fontSize="small" />
                                                                                </Button>
                                                                                :
                                                                                <Button className="comment-opt" onClick={handleUpdate} id={comment._id} disableTouchRipple>
                                                                                    <EditIcon className='text-primary' fontSize="small" />
                                                                                </Button>
                                                                            }
                                                                            <Button onClick={handleDelete} id={comment._id} disableTouchRipple>
                                                                                <DeleteIcon className='text-primary' fontSize="small" />
                                                                            </Button>
                                                                        </div>
                                                                    }
                                                                </div>

                                                                <div className="comment-content">
                                                                    {edit && editID === comment._id ?
                                                                        <Box component="form" noValidate onSubmit={handleEditSubmit} sx={{ width: '100%' }}>
                                                                            <TextField
                                                                                id={comment._id}
                                                                                rows={2}
                                                                                defaultValue={comment.comment}
                                                                                multiline
                                                                                sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '5px', width: '100%' }}
                                                                            />
                                                                            <Button
                                                                                type="submit"
                                                                                fullWidth
                                                                                variant="contained"
                                                                                color='primary'
                                                                                sx={{ my: 1 }}
                                                                                className='font-normal'
                                                                            >
                                                                                Edit
                                                                            </Button>
                                                                        </Box>
                                                                        :
                                                                        <>
                                                                            {comment.comment}
                                                                        </>
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>)
                                                )}
                                            </ul>
                                        </div>
                                        :
                                        <Typography className='font-normal' >Be the first one on comment!</Typography>
                                    }

                                    {user ?
                                        <Box className='text-primary font-normal' sx={{ width: '80%', mt: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                                            <Box component="form" noValidate onSubmit={handleCommentSubmit} sx={{ width: '70%' }}>
                                                <FormControl fullWidth required sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    <TextField
                                                        id="outlined-textarea"
                                                        rows={2}
                                                        placeholder="Leave a comment here..."
                                                        value={commentValue}
                                                        onChange={handleChange}
                                                        multiline
                                                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '5px', width: '100%' }}
                                                    />
                                                </FormControl>

                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                    color='primary'
                                                    sx={{ my: 1 }}
                                                    className='font-normal'
                                                >
                                                    Comment
                                                </Button>
                                            </Box>

                                        </Box>
                                        :
                                        <Box className='text-primary font-normal' sx={{ width: '100%', mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <LinkRouter to="/login"  >
                                                <Typography variant="h3" className='font-title text-light cta-btn-5 cta-login'>Sign In!</Typography>
                                            </LinkRouter>
                                            <Typography component="p" variant="h5" sx={{mt:2}} className='font-title text-light' >
                                            and tell us what you think of this itinerary!                                             
                                            </Typography>
                                        </Box>

                                    }
                                </Box>


                                <button className='cta-btn-3 font-normal' onClick={() => handleExpand()}>View less <ExpandLessIcon /></button>
                            </Box>
                        </Box >
                    )
                }
            </Card >

        </>
    )


}