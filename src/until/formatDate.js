import React from 'react';

const formatDate = () => {
    const date = new Date('2022-10-11T01:26:27.408Z');
    const day1 = date.toLocaleDateString();

    console.log(day1);
    return <div></div>;
};

export default formatDate;
