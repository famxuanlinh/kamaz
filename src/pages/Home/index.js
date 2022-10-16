import React from 'react';
import BestSaleProducts from '~/components/BestSaleProducts';
import CarouselSlide from '~/components/CarouselSlide';
import ContactMap from '~/components/ContactMap';
import NewProducts from '~/components/NewProducts';
import ServiceMaintenance from '~/components/ServiceMaintenance';
import Services from '~/components/Services';

const Home = () => {
    return (
        <div>
            <CarouselSlide />
            <div style={{ paddingBottom: '3rem' }}>
                <NewProducts slug={'ban-chay'} />
            </div>
            <div>
                {' '}
                <Services />
            </div>

            <div style={{ paddingBottom: '3rem' }}>
                <BestSaleProducts slug={'ban-chay'} />
            </div>
            <div style={{ paddingBottom: '6rem' }}>
                <ServiceMaintenance />
            </div>
            <div style={{ paddingBottom: '2.3rem' }}>
                <BestSaleProducts slug={'ban-chay'} />
            </div>

            <ContactMap />
        </div>
    );
};

export default Home;
