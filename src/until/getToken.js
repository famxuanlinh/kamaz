import React from 'react';

const getToken = () => {
    const userString = window.localStorage.getItem('login');
    const userObject = JSON.parse(userString);

    if (userObject && userObject.jwt) {
        return userObject.jwt;
    }

    return '';
};

export default getToken;
