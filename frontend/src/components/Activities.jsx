import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Activities.css"

export default function Activities({ activities }) {



    return (
        <>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Box sx={{ display: 'flex', width: '100%', height: '100%', padding: '1rem', flexDirection:{xs:'column', md:'row'}, justifyContent:{xs:'flex-start', md:'center'}, alignItems:{xs:'center', md:'flex-start'} }}>
                        <Box sx={{ width: '60%', backgroundImage: 'url({})', display:'flex', flexDirection:'column', justifyContent:'flex-start' }}>
                            <Typography variant='h3' className='font-slogan' sx={{ mb:'1rem' }}>Wynwood Walls</Typography>
                        </Box>
                        <Box sx={{ width: '50%', color:'#fff', display:'flex', alignItems:'center', height:'100%',padding:'2rem' }} className='activity-info' >
                            <Typography variant='p' className='font-normal'>The Wynwood Walls, created by Tony Goldman in 2009, has brought the world’s greatest artists working in the graffiti and street art genre to Miami. With a diverse representation of both American and international artists that encompasses everything from the old school graffiti artists to the newest work being created around the world, The Wynwood Walls has become a must-see international destination. The Tony is the official hotel partner of The Wynwood Walls, so, as our guest, your admission is complimentary.</Typography>
                        </Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </>
    );
}