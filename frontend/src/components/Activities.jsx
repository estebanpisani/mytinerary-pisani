import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import activityActions from '../redux/actions/activityActions';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Activities.css"

export default function Activities({ id }) {

    const dispatch = useDispatch();

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const response = async () => {
            const activitiesResponse = await dispatch(activityActions.getActivitiesByItinerary(id));
            setActivities(activitiesResponse);
        }
        if (activities.length<1) {
            response();
        }
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {activities.length>0  ?
                <Swiper
                    pagination={{
                        type: "progressbar",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {activities.map((activity, i) =>
                    (<SwiperSlide key={i}>
                        <Box sx={{ display: 'flex', width: '100%', height: '100%', padding: '0.5rem', flexDirection: 'column', justifyContent: { xs: 'flex-start', md: 'center' }, alignItems: { xs: 'center', lg: 'flex-start' } }} >
                            <Typography variant='h6' sx={{ display: { xs: 'block', md: 'none' }, mb: '1rem' }} className='font-slogan' >{activity.title}</Typography>
                            <Box sx={{ width: { xs: '100%', lg: '100%' }, height: '100%', backgroundImage: `url(${activity.picture})`, display: { xs: 'flex' }, flexDirection: 'column', justifyContent: { xs: 'end', md: 'space-between' } }} className='activity-photo'>
                                <Typography variant='h3' sx={{ backgroundColor: 'rgba(0,0,0,0.7)', py: 2, display: { xs: 'none', md: 'block' } }} className='font-slogan text-primary text-shadow-light' >{activity.title}</Typography>
                                <Typography variant='p' className='font-normal text-shadow-primary scroll' sx={{ backgroundColor: 'rgba(0,0,0,0.6)', py: 2, px: 1, display: { xs: 'none', md: 'flex' }, height: '26%' }}  >{activity.description}</Typography>
                            </Box>

                            <Box sx={{ width: '50%', color: '#fff', display: { xs: 'none' }, alignItems: 'center', px: '2rem', py: '1.5rem', height: '100%', flexgrow: '2' }} className='activity-info scroll'  >
                                <Typography variant='p' className='font-normal'  >{activity.description}</Typography>
                            </Box>
                            <Typography variant='subtitle1' sx={{ display: { xs: 'block', md: 'none' }, my: '1rem' }} className='font-normal scroll' >{activity.description}</Typography>
                        </Box>
                    </SwiperSlide>)
                    )}
                </Swiper>
                :
                <Typography variant='subtitle1' className='font-normal text-light' sx={{ backgroundColor: 'rgba(0,0,0,0.3)', p: 1 }}>No Available Activities For This Itinerary Yet</Typography>
            }
        </>
    );
}