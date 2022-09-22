import React from 'react';
import BestSaleProducts from '~/components/BestSaleProducts';
import CarouselSlide from '~/components/CarouselSlide';
import ContactMap from '~/components/ContactMap';
import NewProducts from '~/components/NewProducts';

const Home = () => {
    return (
        <div>
            <CarouselSlide />
            <div style={{ backgroundColor: '#f7f7f7', paddingBottom: '1.5rem' }}>
                <NewProducts slug={'ban-chay'} />
            </div>
            <div style={{ paddingBottom: '2.3rem' }}>
                <BestSaleProducts slug={'ban-chay'} />
            </div>
            <div style={{ backgroundColor: '#f7f7f7', paddingBottom: '2.3rem' }}>
                <BestSaleProducts slug={'ban-chay'} />
            </div>

            <ContactMap />
        </div>
    );
};

export default Home;
