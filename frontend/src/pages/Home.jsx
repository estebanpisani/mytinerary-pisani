import React from 'react'
import CarouselSection from '../components/CarouselSection';
import Hero from './../components/Hero';


const Home = () => {
    const heroBg = process.env.PUBLIC_URL + '/img/home-hero.jpg';
    return (
        <main className='main'>
            <Hero subtitle='Find Your Perfect Trip' button='Get Started!' slogan='Designed by insiders who know and love
                    their cities!' bgImg={heroBg} linkUrl='/cities'/>
            <CarouselSection />
        </main>
    )
}

export default Home;
