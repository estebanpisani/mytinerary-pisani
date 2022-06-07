import React from "react";
import Slider from "react-slick";
import { Typography, Box, Container } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({cities}) => {
    const array = cities;
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        rows: 2,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 4
                }
            }
        ]
    }

    
    return (

            <Slider {...settings}>
                {array.map((city,i) =>
                    <Box sx={{
                        backgroundImage: `url(${city.img})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: '30vh',
                    }} key={i}>
                        <Box sx={{width:'100%', height:'100%', backgroundColor:'rgba(9, 14, 12, 0.4)',display: 'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center'}}>
                            <Typography variant='h3' className='font-slogan text-light text-shadow-primary'>{city.name}</Typography>
                        </Box>
                    </Box>
                )}

            </Slider>

    );
}


export default Carousel;