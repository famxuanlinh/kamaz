import { Markup } from 'interweave';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContactMap from '~/components/ContactMap';
import HTMLParser from '~/components/HTMLParser';
import { BASE_URL, IMG_URL } from '~/constants/env';

const Repair = () => {
    const [repair, setRepair] = useState([]);
    const { slug } = useParams();
    const getRepair = () => {
        fetch(`${BASE_URL}/repairs/?filters[slug]=${slug}&populate=deep,2`)
            .then((res) => res.json())
            .then((res) => {
                setRepair(res.data);
            });
    };

    useEffect(() => {
        getRepair(slug);
    }, [slug]);

    return (
        <>
            {repair.map((item) => (
                <div key={item.id}>
                    <div style={{ position: 'relative' }}>
                        <img
                            src={IMG_URL + item.attributes.image?.data[0].attributes.formats.large.url}
                            alt="repair"
                            style={{ width: '100vw', height: '315px', objectFit: 'cover' }}
                        />
                        <div
                            className="text-center description"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '0',
                                fontSize: '5rem',
                                fontWeight: '600',
                                lineHeight: 'initial',
                                letterSpacing: '3px',
                                color: 'white',
                                width: '100vw',
                            }}
                        >
                            <span className="d-flex justify-content-center align-items-center">
                                {item.attributes.name}
                            </span>
                        </div>
                    </div>
                    <div className="container py-5 ">
                        <HTMLParser content={item.attributes.description} />
                    </div>
                </div>
            ))}

            {slug === 'lien-he' ? <ContactMap /> : ''}
        </>
    );
};

export default Repair;
