import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Announcement = () => {
    return (
        <Wrapper>
            <Inner>
                <LogoImg />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Inner>
        </Wrapper>
    );
};

export default Announcement;
