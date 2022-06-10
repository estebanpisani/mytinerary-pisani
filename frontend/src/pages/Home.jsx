import React from 'react'
import CarouselSection from '../components/CarouselSection';
import Hero from './../components/Hero';

export const Home = () => {
    return (
        <>
            <Hero subtitle='Find Your Perfect Trip' button='Get Started!' slogan='Designed by insiders who know and love
                    their cities!' linkUrl='/cities'/>
            <CarouselSection />
        </>
    )
}
