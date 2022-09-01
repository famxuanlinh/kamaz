import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Anoument = () => {
    return (
        <Wrapper>
            <Inner>
                <LogoImg />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Inner>
        </Wrapper>
    );
};

export default Anoument;
