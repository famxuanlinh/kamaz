import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
                        {/* <div style={{ width: '100vw', height: '315px', backgroundColor: 'dark' }}></div> */}
                        <div
                            className="text-center"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '35%',
                                fontSize: '5rem',
                                fontWeight: '600',
                                lineHeight: 'initial',
                                letterSpacing: '3px',
                                color: 'white',
                            }}
                        >
                            {item.attributes.name}
                        </div>
                    </div>
                    <div className="container py-5">{item.attributes.description}</div>
                </div>
            ))}
        </>
    );
};

export default Repair;
