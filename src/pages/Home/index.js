import React from 'react';
import BestSaleProducts from '~/components/BestSaleProducts';
import CarouselSlide from '~/components/CarouselSlide';
import ContactMap from '~/components/ContactMap';
import NewProducts from '~/components/NewProducts';
import ServiceMaintenance from '~/components/ServiceMaintenance';

const Home = () => {
    return (
        <div>
            <CarouselSlide />
            <div style={{ paddingBottom: '3rem' }}>
                <NewProducts slug={'ban-chay'} />
            </div>
            <div>
                <ServiceMaintenance />
            </div>
            <div style={{ paddingBottom: '2.3rem' }}>
                <BestSaleProducts slug={'ban-chay'} />
            </div>
            <div style={{ paddingBottom: '2.3rem' }}>
                <BestSaleProducts slug={'ban-chay'} />
            </div>

            <ContactMap />
        </div>
    );
};

export default Home;
