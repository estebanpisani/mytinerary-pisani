import React, { useRef, useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../styles/Carrousel.css';


const Carrousel = () => {

    const imgs = ['https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png']

    return (
        <Box className='carrousel-container' >
            <Typography variant='h4' className='font-normal text-light text-shadow-primary' sx={{ fontSize: { xs: '1em', sm: '1rem', md: '2rem' } }}>Designed by insiders who know and love
                their cities!</Typography>
            <Box className='swiper'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {imgs.map((img) =>
                        <SwiperSlide>
                            <Grid container xs={12} spacing={0}>
                                <Grid item xs={6}>
                                    <img src={img} alt='Foto' />
                                </Grid>
                                <Grid item xs={6}>
                                    <img src={img} alt='Foto' />
                                </Grid>
                                <Grid item xs={6}>
                                    <img src={img} alt='Foto' />
                                </Grid>
                                <Grid item xs={6}>
                                    <img src={img} alt='Foto' />
                                </Grid>
                            </Grid>
                        </SwiperSlide>)}

            </Swiper>
            {/* <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper">
                    
                </Swiper> */}
        </Box>

        </Box >
    )
}

export default Carrousel;