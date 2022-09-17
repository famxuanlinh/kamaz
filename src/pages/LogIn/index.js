import React from 'react';
import FormLogIn from '~/components/FormLogIn';

const LogIn = () => {
    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{ backgroundColor: '#f7f7f7', padding: '20rem 0' }}
        >
            <FormLogIn />
        </div>
    );
};

export default LogIn;
