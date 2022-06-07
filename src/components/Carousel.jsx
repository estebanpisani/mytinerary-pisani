import React from "react";
import Slider from "react-slick";
import { Typography, Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const ciudades = [
        {
            name: 'Buenos Aires',
            img: 'https://ba-h.com.ar/wp-content/uploads/2019/11/101-buenos-aires-top.jpg'
        },
        {
            name: 'Sidney',
            img: 'https://image.shutterstock.com/image-photo/sydney-australia-march-122017-sunset-600w-598401686.jpg'
        },
        {
            name: 'New York',
            img: 'https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-city_header-141511.jpeg?w=1200&h=630&q=95&fit=crop'
        },
        {
            name: 'Tokio',
            img: 'https://elviajerofeliz.com/wp-content/uploads/2020/05/Por-qu%C3%A9-Tokio-es-una-de-las-ciudades-m%C3%A1s-sorprendentes.jpg'
        },
        {
            name: 'Moscow',
            img: 'https://www.collinsdictionary.com/images/full/moscow_109024046_1000.jpg'
        },
        {
            name: 'San Sebastian',
            img: 'https://cdn1.intriper.com/wp-content/uploads/2021/11/29115617/Lugares-para-ver-en-San-Sebastian-1-1.jpg'
        },
        {
            name: 'Cancun',
            img: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_900,q_75,w_1700/v1/clients/quintanaroo/_cc911e74-049d-4172-b8d9-67b8942c9bc0.1392201394-2910bf3f5b8388c632d75b47bd71a0c94b1389b5c0b1926331aa7ed225a20103-d_640.jpg'
        },
        {
            name: 'Rosario',
            img: 'https://10619-2.s.cdn12.com/rests/original/503_113071250.jpg'
        }
    ];

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        rows: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    rows: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1
                }
            }
        ]
    }

    return (
        <div>
            <Slider {...settings}>
                {ciudades.map(ciudad =>
                    <Box sx={{
                        backgroundImage: `url(${ciudad.img})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        minHeight: '30vh'
                    }}>
                        <Typography>{ciudad.name}</Typography>
                    </Box>
                )}

            </Slider>
        </div>
    );
}


export default Carousel;