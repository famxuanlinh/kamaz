import React from 'react';
import BestSaleProducts from '~/components/BestSaleProducts';
import CarouselSlide from '~/components/CarouselSlide';
import ContactMap from '~/components/ContactMap';
import NewProducts from '~/components/NewProducts';
import PopularProducts from '~/components/PopularProducts';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#f7f7f7' }}>
            <CarouselSlide />
            <NewProducts />
            <PopularProducts />
            <BestSaleProducts />
            <ContactMap />
        </div>
    );
};

export default Home;
